var G0=0,hf=1,W0=2;var Sr=1,X0=2,Eo=3,fs=0,Hn=1,bn=2,ii=0,To=1,Ji=2,ff=3,df=4,q0=5;var Er=100,Y0=101,Z0=102,$0=103,K0=104,J0=200,j0=201,Q0=202,ep=203,pf=204,mf=205,tp=206,np=207,ip=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,hc=0,fc=1,dc=2,lo=3,pc=4,mc=5,gc=6,vc=7,gf=0,up=1,hp=2,ji=0,vf=1,xf=2,yf=3,_f=4,bf=5,Mf=6,Xa=7;var Sf=300,Ys=301,Tr=302,$c=303,Kc=304,qa=306,As=1e3,as=1001,xc=1002,Tn=1003,fp=1004;var Ya=1005;var Bt=1006,Jc=1007;var Pn=1008;var $n=1009,Ef=1010,Tf=1011,wo=1012,jc=1013,Qi=1014,Di=1015,An=1016,Qc=1017,eu=1018,Ao=1020,wf=35902,Af=35899,Rf=1021,Cf=1022,Kn=1023,ls=1026,Zs=1027,$s=1028,tu=1029,Ks=1030,nu=1031;var iu=1033,Za=33776,$a=33777,Ka=33778,Ja=33779,su=35840,ru=35841,ou=35842,au=35843,lu=36196,cu=37492,uu=37496,hu=37488,fu=37489,ja=37490,du=37491,pu=37808,mu=37809,gu=37810,vu=37811,xu=37812,yu=37813,_u=37814,bu=37815,Mu=37816,Su=37817,Eu=37818,Tu=37819,wu=37820,Au=37821,Ru=36492,Cu=36494,Pu=36495,Iu=36283,Lu=36284,Qa=36285,Du=36286;var pa=2300,yc=2301,lc=2302,jh=2303,Qh=2400,ef=2401,tf=2402;var dp=3200;var Nu=0,pp=1,si="",Wt="srgb",ma="srgb-linear",ga="linear",kt="srgb";var cc=7680;var mp=519,gp=512,vp=513,xp=514,Uu=515,yp=516,_p=517,Fu=518,bp=519,Mp=35044;var Pf="300 es",Zi=2e3,co=2001;function U1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function F1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sp(){let s=uo("canvas");return s.style.display="block",s}var l0={},ho=null;function If(...s){let e="THREE."+s.shift();ho?ho("log",e,...s):console.log(e,...s)}function Ep(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function lt(...s){s=Ep(s);let e="THREE."+s.shift();if(ho)ho("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ft(...s){s=Ep(s);let e="THREE."+s.shift();if(ho)ho("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xr(...s){let e=s.join(" ");e in l0||(l0[e]=!0,lt(...s))}function Tp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wp={[hc]:fc,[dc]:gc,[pc]:vc,[lo]:mc,[fc]:hc,[gc]:dc,[vc]:pc,[mc]:lo},cs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Th=Math.PI/180,va=180/Math.PI;function Ro(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function B1(s,e){return(s%e+e)%e}function wh(s,e,t){return(1-t)*s+t*e}function ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bf=class Bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bf.prototype.isVector2=!0;var Pe=Bf,gn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3],p=r[o+0],g=r[o+1],b=r[o+2],S=r[o+3];if(d!==S||l!==p||u!==g||h!==b){let M=l*p+u*g+h*b+d*S;M<0&&(p=-p,g=-g,b=-b,S=-S,M=-M);let x=1-a;if(M<.9995){let c=Math.acos(M),y=Math.sin(c);x=Math.sin(x*c)/y,a=Math.sin(a*c)/y,l=l*x+p*a,u=u*x+g*a,h=h*x+b*a,d=d*x+S*a}else{l=l*x+p*a,u=u*x+g*a,h=h*x+b*a,d=d*x+S*a;let c=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=c,u*=c,h*=c,d*=c}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o],p=r[o+1],g=r[o+2],b=r[o+3];return e[t]=a*b+h*d+l*g-u*p,e[t+1]=l*b+h*p+u*d-a*g,e[t+2]=u*b+h*g+a*p-l*d,e[t+3]=h*b-a*d-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),p=l(n/2),g=l(i/2),b=l(r/2);switch(o){case"XYZ":this._x=p*h*d+u*g*b,this._y=u*g*d-p*h*b,this._z=u*h*b+p*g*d,this._w=u*h*d-p*g*b;break;case"YXZ":this._x=p*h*d+u*g*b,this._y=u*g*d-p*h*b,this._z=u*h*b-p*g*d,this._w=u*h*d+p*g*b;break;case"ZXY":this._x=p*h*d-u*g*b,this._y=u*g*d+p*h*b,this._z=u*h*b+p*g*d,this._w=u*h*d-p*g*b;break;case"ZYX":this._x=p*h*d-u*g*b,this._y=u*g*d+p*h*b,this._z=u*h*b-p*g*d,this._w=u*h*d+p*g*b;break;case"YZX":this._x=p*h*d+u*g*b,this._y=u*g*d+p*h*b,this._z=u*h*b-p*g*d,this._w=u*h*d-p*g*b;break;case"XZY":this._x=p*h*d-u*g*b,this._y=u*g*d-p*h*b,this._z=u*h*b+p*g*d,this._w=u*h*d+p*g*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],p=n+a+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-u)*g,this._z=(o-i)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+u)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-u)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-i)/g,this._x=(r+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*l,this._y=i*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-i*a,this._w=o*h-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let u=Math.acos(a),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Of=class Of{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(c0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(c0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-r*d,this.z=i+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Of.prototype.isVector3=!0;var H=Of,Ah=new H,c0=new gn,zf=class zf{constructor(e,t,n,i,r,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],p=n[2],g=n[5],b=n[8],S=i[0],M=i[3],x=i[6],c=i[1],y=i[4],f=i[7],m=i[2],v=i[5],E=i[8];return r[0]=o*S+a*c+l*m,r[3]=o*M+a*y+l*v,r[6]=o*x+a*f+l*E,r[1]=u*S+h*c+d*m,r[4]=u*M+h*y+d*v,r[7]=u*x+h*f+d*E,r[2]=p*S+g*c+b*m,r[5]=p*M+g*y+b*v,r[8]=p*x+g*f+b*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+i*r*u-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,p=a*l-h*r,g=u*r-o*l,b=t*d+n*p+i*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/b;return e[0]=d*S,e[1]=(i*u-h*n)*S,e[2]=(a*n-i*o)*S,e[3]=p*S,e[4]=(h*t-i*l)*S,e[5]=(i*r-a*t)*S,e[6]=g*S,e[7]=(n*l-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(e,t)),this}rotate(e){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-e)),this}translate(e,t){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zf.prototype.isMatrix3=!0;var pt=zf,Rh=new pt,u0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O1(){let s={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===kt&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(i.r=oo(i.r),i.g=oo(i.g),i.b=oo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ma]:{primaries:e,whitePoint:n,transfer:ga,toXYZ:u0,fromXYZ:h0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:u0,fromXYZ:h0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),s}var Rt=O1();function ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xr,_c=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=uo("canvas")),Xr.width=e.width,Xr.height=e.height;let i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z1=0,fo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ch(i[o].image)):r.push(Ch(i[o]))}else r=Ch(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var k1=0,Ph=new H,Yn=class s extends cs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=as,i=as,r=Bt,o=Pn,a=Kn,l=$n,u=s.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ro(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Sf;Yn.DEFAULT_ANISOTROPY=1;var kf=class kf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],b=l[9],S=l[2],M=l[6],x=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(b-M)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(b+M)<.1&&Math.abs(u+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(u+1)/2,f=(g+1)/2,m=(x+1)/2,v=(h+p)/4,E=(d+S)/4,_=(b+M)/4;return y>f&&y>m?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=v/n,r=E/n):f>m?f<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(f),n=v/i,r=_/i):m<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(m),n=E/r,i=_/r),this.set(n,i,r,t),this}let c=Math.sqrt((M-b)*(M-b)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(c)<.001&&(c=1),this.x=(M-b)/c,this.y=(d-S)/c,this.z=(p-h)/c,this.w=Math.acos((u+g+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kf.prototype.isVector4=!0;var dt=kf,bc=class extends cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Yn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends Yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends Yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zc=class Zc{constructor(e,t,n,i,r,o,a,l,u,h,d,p,g,b,S,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,h,d,p,g,b,S,M)}set(e,t,n,i,r,o,a,l,u,h,d,p,g,b,S,M){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=u,x[6]=h,x[10]=d,x[14]=p,x[3]=g,x[7]=b,x[11]=S,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*d,b=a*h,S=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=g+b*u,t[5]=p-S*u,t[9]=-a*l,t[2]=S-p*u,t[6]=b+g*u,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*d,b=u*h,S=u*d;t[0]=p+S*a,t[4]=b*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-b,t[6]=S+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*d,b=u*h,S=u*d;t[0]=p-S*a,t[4]=-o*d,t[8]=b+g*a,t[1]=g+b*a,t[5]=o*h,t[9]=S-p*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*d,b=a*h,S=a*d;t[0]=l*h,t[4]=b*u-g,t[8]=p*u+S,t[1]=l*d,t[5]=S*u+p,t[9]=g*u-b,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*u,b=a*l,S=a*u;t[0]=l*h,t[4]=S-p*d,t[8]=b*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*d+b,t[10]=p-S*d}else if(e.order==="XZY"){let p=o*l,g=o*u,b=a*l,S=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=p*d+S,t[5]=o*h,t[9]=g*d-b,t[2]=b*d-g,t[6]=a*h,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H1,e,V1)}lookAt(e,t,n){let i=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Fs.crossVectors(n,xi),Fs.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Fs.crossVectors(n,xi)),Fs.normalize(),Fl.crossVectors(xi,Fs),i[0]=Fs.x,i[4]=Fl.x,i[8]=xi.x,i[1]=Fs.y,i[5]=Fl.y,i[9]=xi.y,i[2]=Fs.z,i[6]=Fl.z,i[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],p=n[9],g=n[13],b=n[2],S=n[6],M=n[10],x=n[14],c=n[3],y=n[7],f=n[11],m=n[15],v=i[0],E=i[4],_=i[8],T=i[12],R=i[1],w=i[5],P=i[9],C=i[13],A=i[2],L=i[6],D=i[10],U=i[14],V=i[3],O=i[7],k=i[11],z=i[15];return r[0]=o*v+a*R+l*A+u*V,r[4]=o*E+a*w+l*L+u*O,r[8]=o*_+a*P+l*D+u*k,r[12]=o*T+a*C+l*U+u*z,r[1]=h*v+d*R+p*A+g*V,r[5]=h*E+d*w+p*L+g*O,r[9]=h*_+d*P+p*D+g*k,r[13]=h*T+d*C+p*U+g*z,r[2]=b*v+S*R+M*A+x*V,r[6]=b*E+S*w+M*L+x*O,r[10]=b*_+S*P+M*D+x*k,r[14]=b*T+S*C+M*U+x*z,r[3]=c*v+y*R+f*A+m*V,r[7]=c*E+y*w+f*L+m*O,r[11]=c*_+y*P+f*D+m*k,r[15]=c*T+y*C+f*U+m*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],p=e[10],g=e[14],b=e[3],S=e[7],M=e[11],x=e[15],c=l*g-u*p,y=a*g-u*d,f=a*p-l*d,m=o*g-u*h,v=o*p-l*h,E=o*d-a*h;return t*(S*c-M*y+x*f)-n*(b*c-M*m+x*v)+i*(b*y-S*m+x*E)-r*(b*f-S*v+M*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],u=e[6],h=e[10];return t*(o*h-a*u)-n*(r*h-a*l)+i*(r*u-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],p=e[10],g=e[11],b=e[12],S=e[13],M=e[14],x=e[15],c=t*a-n*o,y=t*l-i*o,f=t*u-r*o,m=n*l-i*a,v=n*u-r*a,E=i*u-r*l,_=h*S-d*b,T=h*M-p*b,R=h*x-g*b,w=d*M-p*S,P=d*x-g*S,C=p*x-g*M,A=c*C-y*P+f*w+m*R-v*T+E*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=(a*C-l*P+u*w)*L,e[1]=(i*P-n*C-r*w)*L,e[2]=(S*E-M*v+x*m)*L,e[3]=(p*v-d*E-g*m)*L,e[4]=(l*R-o*C-u*T)*L,e[5]=(t*C-i*R+r*T)*L,e[6]=(M*f-b*E-x*y)*L,e[7]=(h*E-p*f+g*y)*L,e[8]=(o*P-a*R+u*_)*L,e[9]=(n*R-t*P-r*_)*L,e[10]=(b*v-S*f+x*c)*L,e[11]=(d*f-h*v-g*c)*L,e[12]=(a*T-o*w-l*_)*L,e[13]=(t*w-n*T+i*_)*L,e[14]=(S*y-b*m-M*c)*L,e[15]=(h*m-d*y+p*c)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,h*a+n,h*l-i*o,0,u*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,p=r*u,g=r*h,b=r*d,S=o*h,M=o*d,x=a*d,c=l*u,y=l*h,f=l*d,m=n.x,v=n.y,E=n.z;return i[0]=(1-(S+x))*m,i[1]=(g+f)*m,i[2]=(b-y)*m,i[3]=0,i[4]=(g-f)*v,i[5]=(1-(p+x))*v,i[6]=(M+c)*v,i[7]=0,i[8]=(b+y)*E,i[9]=(M-c)*E,i[10]=(1-(p+S))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=qr.set(i[0],i[1],i[2]).length(),a=qr.set(i[4],i[5],i[6]).length(),l=qr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Wi.copy(this);let u=1/o,h=1/a,d=1/l;return Wi.elements[0]*=u,Wi.elements[1]*=u,Wi.elements[2]*=u,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=d,Wi.elements[9]*=d,Wi.elements[10]*=d,t.setFromRotationMatrix(Wi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Zi,l=!1){let u=this.elements,h=2*r/(t-e),d=2*r/(n-i),p=(t+e)/(t-e),g=(n+i)/(n-i),b,S;if(l)b=r/(o-r),S=o*r/(o-r);else if(a===Zi)b=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===co)b=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zi,l=!1){let u=this.elements,h=2/(t-e),d=2/(n-i),p=-(t+e)/(t-e),g=-(n+i)/(n-i),b,S;if(l)b=1/(o-r),S=o/(o-r);else if(a===Zi)b=-2/(o-r),S=-(o+r)/(o-r);else if(a===co)b=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=d,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=b,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zc.prototype.isMatrix4=!0;var et=Zc,qr=new H,Wi=new et,H1=new H(0,0,0),V1=new H(1,1,1),Fs=new H,Fl=new H,xi=new H,f0=new et,d0=new gn,Zn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],h=i[9],d=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G1=0,p0=new H,Yr=new gn,bs=new et,Bl=new H,sa=new H,W1=new H,X1=new gn,m0=new H(1,0,0),g0=new H(0,1,0),v0=new H(0,0,1),x0={type:"added"},q1={type:"removed"},Zr={type:"childadded",child:null},Ih={type:"childremoved",child:null},wn=class s extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new H,t=new Zn,n=new gn,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new pt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(sa,Bl,this.up):bs.lookAt(Bl,sa,this.up),this.quaternion.setFromRotationMatrix(bs),i&&(bs.extractRotation(i.matrixWorld),Yr.setFromRotationMatrix(bs),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x0),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q1),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x0),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,W1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,X1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),b=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=i,n;function o(a){let l=[];for(let u in a){let h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wn.DEFAULT_UP=new H(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y1={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let M=t.getJointPose(S,n),x=this._getHandJoint(u,S);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}let h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,b=.005;u.inputState.pinching&&p>g+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Lh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=B1(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lh(o,r,e+1/3),this.g=Lh(o,r,e),this.b=Lh(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Rt.workingToColorSpace(qn.copy(this),e),Math.round(wt(qn.r*255,0,255))*65536+Math.round(wt(qn.g*255,0,255))*256+Math.round(wt(qn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(qn.copy(this),t);let n=qn.r,i=qn.g,r=qn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,u,h=(a+o)/2;if(a===o)l=0,u=0;else{let d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Wt){Rt.workingToColorSpace(qn.copy(this),e);let t=qn.r,n=qn.g,i=qn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+t,Bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bs),e.getHSL(Ol);let n=wh(Bs.h,Ol.h,t),i=wh(Bs.s,Ol.s,t),r=wh(Bs.l,Ol.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new _e;_e.NAMES=Ap;var _a=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xi=new H,Ms=new H,Dh=new H,Ss=new H,$r=new H,Kr=new H,y0=new H,Nh=new H,Uh=new H,Fh=new H,Bh=new dt,Oh=new dt,zh=new dt,Hs=class s{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xi.subVectors(e,t),i.cross(Xi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xi.subVectors(i,t),Ms.subVectors(n,t),Dh.subVectors(e,t);let o=Xi.dot(Xi),a=Xi.dot(Ms),l=Xi.dot(Dh),u=Ms.dot(Ms),h=Ms.dot(Dh),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(u*l-a*h)*p,b=(o*h-a*l)*p;return r.set(1-g-b,b,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ss.x),l.addScaledVector(o,Ss.y),l.addScaledVector(a,Ss.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Bh.setScalar(0),Oh.setScalar(0),zh.setScalar(0),Bh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,n),zh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Bh,r.x),o.addScaledVector(Oh,r.y),o.addScaledVector(zh,r.z),o}static isFrontFacing(e,t,n,i){return Xi.subVectors(n,t),Ms.subVectors(e,t),Xi.cross(Ms).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Xi.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;$r.subVectors(i,n),Kr.subVectors(r,n),Nh.subVectors(e,n);let l=$r.dot(Nh),u=Kr.dot(Nh);if(l<=0&&u<=0)return t.copy(n);Uh.subVectors(e,i);let h=$r.dot(Uh),d=Kr.dot(Uh);if(h>=0&&d<=h)return t.copy(i);let p=l*d-h*u;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector($r,o);Fh.subVectors(e,r);let g=$r.dot(Fh),b=Kr.dot(Fh);if(b>=0&&g<=b)return t.copy(r);let S=g*u-l*b;if(S<=0&&u>=0&&b<=0)return a=u/(u-b),t.copy(n).addScaledVector(Kr,a);let M=h*b-g*d;if(M<=0&&d-h>=0&&g-b>=0)return y0.subVectors(r,i),a=(d-h)/(d-h+(g-b)),t.copy(i).addScaledVector(y0,a);let x=1/(M+S+p);return o=S*x,a=p*x,t.copy(n).addScaledVector($r,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),kl.subVectors(this.max,ra),Jr.subVectors(e.a,ra),jr.subVectors(e.b,ra),Qr.subVectors(e.c,ra),Os.subVectors(jr,Jr),zs.subVectors(Qr,jr),pr.subVectors(Jr,Qr);let t=[0,-Os.z,Os.y,0,-zs.z,zs.y,0,-pr.z,pr.y,Os.z,0,-Os.x,zs.z,0,-zs.x,pr.z,0,-pr.x,-Os.y,Os.x,0,-zs.y,zs.x,0,-pr.y,pr.x,0];return!kh(t,Jr,jr,Qr,kl)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Jr,jr,Qr,kl))?!1:(Hl.crossVectors(Os,zs),t=[Hl.x,Hl.y,Hl.z],kh(t,Jr,jr,Qr,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Es=[new H,new H,new H,new H,new H,new H,new H,new H],qi=new H,zl=new ui,Jr=new H,jr=new H,Qr=new H,Os=new H,zs=new H,pr=new H,ra=new H,kl=new H,Hl=new H,mr=new H;function kh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){mr.fromArray(s,r);let a=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),l=e.dot(mr),u=t.dot(mr),h=n.dot(mr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}var En=new H,Vl=new Pe,Z1=0,_t=class extends cs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mp,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),i=ci(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},$1=new ui,oa=new H,Hh=new H,hi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$1.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Hh)),this.expandByPoint(oa.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},K1=0,Ii=new et,Vh=new wn,eo=new H,yi=new ui,aa=new ui,Un=new H,mt=class s extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U1(e)?Ma:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(Un.addVectors(yi.min,aa.min),yi.expandByPoint(Un),Un.addVectors(yi.max,aa.max),yi.expandByPoint(Un)):(yi.expandByPoint(aa.min),yi.expandByPoint(aa.max))}yi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Un.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Un.fromBufferAttribute(a,u),l&&(eo.fromBufferAttribute(e,u),Un.add(eo)),i=Math.max(i,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new H,l[_]=new H;let u=new H,h=new H,d=new H,p=new Pe,g=new Pe,b=new Pe,S=new H,M=new H;function x(_,T,R){u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,T),b.fromBufferAttribute(r,R),h.sub(u),d.sub(u),g.sub(p),b.sub(p);let w=1/(g.x*b.y-b.x*g.y);isFinite(w)&&(S.copy(h).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(w),M.copy(d).multiplyScalar(g.x).addScaledVector(h,-b.x).multiplyScalar(w),a[_].add(S),a[T].add(S),a[R].add(S),l[_].add(M),l[T].add(M),l[R].add(M))}let c=this.groups;c.length===0&&(c=[{start:0,count:e.count}]);for(let _=0,T=c.length;_<T;++_){let R=c[_],w=R.start,P=R.count;for(let C=w,A=w+P;C<A;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new H,f=new H,m=new H,v=new H;function E(_){m.fromBufferAttribute(i,_),v.copy(m);let T=a[_];y.copy(T),y.sub(m.multiplyScalar(m.dot(T))).normalize(),f.crossVectors(v,T);let w=f.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,w)}for(let _=0,T=c.length;_<T;++_){let R=c[_],w=R.start,P=R.count;for(let C=w,A=w+P;C<A;C+=3)E(e.getX(C+0)),E(e.getX(C+1)),E(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,u=new H,h=new H,d=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){let b=e.getX(p+0),S=e.getX(p+1),M=e.getX(p+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,M),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,b),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),a.add(h),l.add(h),u.add(h),n.setXYZ(b,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(M,u.x,u.y,u.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(a,l){let u=a.array,h=a.itemSize,d=a.normalized,p=new u.constructor(l.length*h),g=0,b=0;for(let S=0,M=l.length;S<M;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*h;for(let x=0;x<h;x++)p[b++]=u[g++]}return new _t(p,h,d)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],u=e(l,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){let p=u[h],g=e(p,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let d=0,p=u.length;d<p;d++){let g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let h=i[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],d=r[u];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gh=new H,J1=new H,j1=new pt,Yi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Gh.subVectors(n,t).cross(J1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Gh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||j1.getNormalMatrix(e),i=this.coplanarPoint(Gh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Q1=0,us=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=To,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ts=new H,Wh=new H,Gl=new H,Wl=new H,mo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ts.copy(this.origin).addScaledVector(this.direction,t),Ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wh.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(Wh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gl),a=Wl.dot(this.direction),l=-Wl.dot(Gl),u=Wl.lengthSq(),h=Math.abs(1-o*o),d,p,g,b;if(h>0)if(d=o*l-a,p=o*a-l,b=r*h,d>=0)if(p>=-b)if(p<=b){let S=1/h;d*=S,p*=S,g=d*(d+o*p+2*a)+p*(o*d+p+2*l)+u}else p=r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+u;else p=-r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+u;else p<=-b?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+u):p<=b?(d=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+u):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+u);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wh).addScaledVector(Gl,p),g}intersectSphere(e,t){if(e.radius<0)return null;Ts.subVectors(e.center,this.origin);let n=Ts.dot(this.direction),i=Ts.dot(Ts)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(n=(e.min.x-p.x)*u,i=(e.max.x-p.x)*u):(n=(e.max.x-p.x)*u,i=(e.min.x-p.x)*u),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ts)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,u=a.y,h=a.z,d=e.x-o.x,p=e.y-o.y,g=e.z-o.z,b=t.x-o.x,S=t.y-o.y,M=t.z-o.z,x=n.x-o.x,c=n.y-o.y,y=n.z-o.z,f=Math.abs(l),m=Math.abs(u),v=Math.abs(h),E,_,T,R,w,P,C,A,L,D,U,V;if(f>=m&&f>=v?(T=l,P=d,L=b,V=x,l>=0?(E=u,_=h,R=p,w=g,C=S,A=M,D=c,U=y):(E=h,_=u,R=g,w=p,C=M,A=S,D=y,U=c)):m>=v?(T=u,P=p,L=S,V=c,u>=0?(E=h,_=l,R=g,w=d,C=M,A=b,D=y,U=x):(E=l,_=h,R=d,w=g,C=b,A=M,D=x,U=y)):(T=h,P=g,L=M,V=y,h>=0?(E=l,_=u,R=d,w=p,C=b,A=S,D=x,U=c):(E=u,_=l,R=p,w=d,C=S,A=b,D=c,U=x)),T===0)return null;let O=E/T,k=_/T,z=1/T,K=R-O*P,le=w-k*P,Me=C-O*L,Fe=A-k*L,Ne=D-O*V,J=U-k*V,$=Ne*Fe-J*Me,ve=K*J-le*Ne,Ae=Me*le-Fe*K;if(i){if($<0||ve<0||Ae<0)return null}else if(($<0||ve<0||Ae<0)&&($>0||ve>0||Ae>0))return null;let pe=$+ve+Ae;if(pe===0)return null;let Oe=z*($*P+ve*L+Ae*V);return(pe>0?Oe<0:Oe>0)?null:this.at(Oe/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_0=new et,gr=new mo,Xl=new hi,b0=new H,ql=new H,Yl=new H,Zl=new H,Xh=new H,$l=new H,M0=new H,Kl=new H,ct=class extends wn{constructor(e=new mt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){$l.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let h=a[l],d=r[l];h!==0&&(Xh.fromBufferAttribute(d,e),o?$l.addScaledVector(Xh,h):$l.addScaledVector(Xh.sub(t),h))}t.add($l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(r),gr.copy(e.ray).recast(e.near),!(Xl.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Xl,b0)===null||gr.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(_0.copy(r).invert(),gr.copy(e.ray).applyMatrix4(_0),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let b=0,S=p.length;b<S;b++){let M=p[b],x=o[M.materialIndex],c=Math.max(M.start,g.start),y=Math.min(a.count,Math.min(M.start+M.count,g.start+g.count));for(let f=c,m=y;f<m;f+=3){let v=a.getX(f),E=a.getX(f+1),_=a.getX(f+2);i=Jl(this,x,e,n,u,h,d,v,E,_),i&&(i.faceIndex=Math.floor(f/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let b=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let M=b,x=S;M<x;M+=3){let c=a.getX(M),y=a.getX(M+1),f=a.getX(M+2);i=Jl(this,o,e,n,u,h,d,c,y,f),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let b=0,S=p.length;b<S;b++){let M=p[b],x=o[M.materialIndex],c=Math.max(M.start,g.start),y=Math.min(l.count,Math.min(M.start+M.count,g.start+g.count));for(let f=c,m=y;f<m;f+=3){let v=f,E=f+1,_=f+2;i=Jl(this,x,e,n,u,h,d,v,E,_),i&&(i.faceIndex=Math.floor(f/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let b=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let M=b,x=S;M<x;M+=3){let c=M,y=M+1,f=M+2;i=Jl(this,o,e,n,u,h,d,c,y,f),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}};function ev(s,e,t,n,i,r,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===fs,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(s.matrixWorld);let u=t.ray.origin.distanceTo(Kl);return u<t.near||u>t.far?null:{distance:u,point:Kl.clone(),object:s}}function Jl(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,ql),s.getVertexPosition(l,Yl),s.getVertexPosition(u,Zl);let h=ev(s,e,t,n,ql,Yl,Zl,M0);if(h){let d=new H;Hs.getBarycoord(M0,ql,Yl,Zl,d),i&&(h.uv=Hs.getInterpolatedAttribute(i,a,l,u,d,new Pe)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,u,d,new Pe)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,u,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c:u,normal:new H,materialIndex:0};Hs.getNormal(ql,Yl,Zl,p.normal),h.face=p,h.barycoord=d}return h}var $i=class extends Yn{constructor(e=null,t=1,n=1,i,r,o,a,l,u=Tn,h=Tn,d,p){super(null,o,a,l,u,h,i,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},to=new et,S0=new et,jl=[],E0=new ui,tv=new et,la=new ct,ca=new hi,Ki=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),E0.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(E0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),ca.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,to),S0.multiplyMatrices(n,to),la.matrixWorld=S0,la.raycast(e,jl);for(let o=0,a=jl.length;o<a;o++){let l=jl[o];l.instanceId=r,l.object=this,t.push(l)}jl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(i*this.count),i,this.count,$s,Di));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vr=new hi,nv=new Pe(.5,.5),Ql=new H,go=class{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,r=new Yi,o=new Yi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],u=r[3],h=r[4],d=r[5],p=r[6],g=r[7],b=r[8],S=r[9],M=r[10],x=r[11],c=r[12],y=r[13],f=r[14],m=r[15];if(i[0].setComponents(u-o,g-h,x-b,m-c).normalize(),i[1].setComponents(u+o,g+h,x+b,m+c).normalize(),i[2].setComponents(u+a,g+d,x+S,m+y).normalize(),i[3].setComponents(u-a,g-d,x-S,m-y).normalize(),n)i[4].setComponents(l,p,M,f).normalize(),i[5].setComponents(u-l,g-p,x-M,m-f).normalize();else if(i[4].setComponents(u-l,g-p,x-M,m-f).normalize(),t===Zi)i[5].setComponents(u+l,g+p,x+M,m+f).normalize();else if(t===co)i[5].setComponents(l,p,M,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);let t=nv.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ql.x=i.normal.x>0?e.max.x:e.min.x,Ql.y=i.normal.y>0?e.max.y:e.min.y,Ql.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sc=class extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ec=new H,Tc=new H,T0=new et,ua=new mo,ec=new hi,qh=new H,w0=new H,Sa=class extends wn{constructor(e=new mt,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ec.fromBufferAttribute(t,i-1),Tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ec.distanceTo(Tc);e.setAttribute("lineDistance",new Ze(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(i),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;T0.copy(i).invert(),ua.copy(e.ray).applyMatrix4(T0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),b=Math.min(h.count,o.start+o.count);for(let S=g,M=b-1;S<M;S+=u){let x=h.getX(S),c=h.getX(S+1),y=tc(this,e,ua,l,x,c,S);y&&t.push(y)}if(this.isLineLoop){let S=h.getX(b-1),M=h.getX(g),x=tc(this,e,ua,l,S,M,b-1);x&&t.push(x)}}else{let g=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let S=g,M=b-1;S<M;S+=u){let x=tc(this,e,ua,l,S,S+1,S);x&&t.push(x)}if(this.isLineLoop){let S=tc(this,e,ua,l,b-1,g,b-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tc(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ec.fromBufferAttribute(a,i),Tc.fromBufferAttribute(a,r),t.distanceSqToSegment(Ec,Tc,qh,w0)>n)return;qh.applyMatrix4(s.matrixWorld);let u=e.ray.origin.distanceTo(qh);if(!(u<e.near||u>e.far))return{distance:u,point:w0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var vo=class extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},A0=new et,nf=new mo,nc=new hi,ic=new H,Ea=class extends wn{constructor(e=new mt,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(i),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;A0.copy(i).invert(),nf.copy(e.ray).applyMatrix4(A0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=p,S=g;b<S;b++){let M=u.getX(b);ic.fromBufferAttribute(d,M),R0(ic,M,l,i,e,t,this)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=p,S=g;b<S;b++)ic.fromBufferAttribute(d,b),R0(ic,b,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function R0(s,e,t,n,i,r,o){let a=nf.distanceSqToPoint(s);if(a<t){let l=new H;nf.closestPointToPoint(s,l),l.applyMatrix4(n);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends Yn{constructor(e=[],t=Ys,n,i,r,o,a,l,u,h){super(e,t,n,i,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Yn{constructor(e,t,n,i,r,o,a,l,u){super(e,t,n,i,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vs=class extends Yn{constructor(e,t,n=Qi,i,r,o,a=Tn,l=Tn,u,h=ls,d=1){if(h!==ls&&h!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,i,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wc=class extends Vs{constructor(e,t=Qi,n=Ys,i,r,o=Tn,a=Tn,l,u=ls){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wa=class extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jt=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],u=[],h=[],d=[],p=0,g=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,i,o,2),b("x","z","y",1,-1,e,n,-t,i,o,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2));function b(S,M,x,c,y,f,m,v,E,_,T){let R=f/E,w=m/_,P=f/2,C=m/2,A=v/2,L=E+1,D=_+1,U=0,V=0,O=new H;for(let k=0;k<D;k++){let z=k*w-C;for(let K=0;K<L;K++){let le=K*R-P;O[S]=le*c,O[M]=z*y,O[x]=A,u.push(O.x,O.y,O.z),O[S]=0,O[M]=0,O[x]=v>0?1:-1,h.push(O.x,O.y,O.z),d.push(K/E),d.push(1-k/_),U+=1}}for(let k=0;k<_;k++)for(let z=0;z<E;z++){let K=p+z+L*k,le=p+z+L*(k+1),Me=p+(z+1)+L*(k+1),Fe=p+(z+1)+L*k;l.push(K,le,Fe),l.push(le,Me,Fe),V+=6}a.addGroup(g,V,T),g+=V,p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _r=class s extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],u=new H,h=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let g=n+d/t*i;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Li=class s extends mt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let u=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],p=[],g=[],b=0,S=[],M=n/2,x=0;c(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(g,2));function c(){let f=new H,m=new H,v=0,E=(t-e)/n;for(let _=0;_<=r;_++){let T=[],R=_/r,w=R*(t-e)+e;for(let P=0;P<=i;P++){let C=P/i,A=C*l+a,L=Math.sin(A),D=Math.cos(A);m.x=w*L,m.y=-R*n+M,m.z=w*D,d.push(m.x,m.y,m.z),f.set(L,E,D).normalize(),p.push(f.x,f.y,f.z),g.push(C,1-R),T.push(b++)}S.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let R=S[T][_],w=S[T+1][_],P=S[T+1][_+1],C=S[T][_+1];(e>0||T!==0)&&(h.push(R,w,C),v+=3),(t>0||T!==r-1)&&(h.push(w,P,C),v+=3)}u.addGroup(x,v,0),x+=v}function y(f){let m=b,v=new Pe,E=new H,_=0,T=f===!0?e:t,R=f===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,M*R,0),p.push(0,R,0),g.push(.5,.5),b++;let w=b;for(let P=0;P<=i;P++){let A=P/i*l+a,L=Math.cos(A),D=Math.sin(A);E.x=T*D,E.y=M*R,E.z=T*L,d.push(E.x,E.y,E.z),p.push(0,R,0),v.x=L*.5+.5,v.y=D*.5*R+.5,g.push(v.x,v.y),b++}for(let P=0;P<i;P++){let C=m+P,A=w+P;f===!0?h.push(A,A+1,C):h.push(A+1,A,C),_+=3}u.addGroup(x,_,f===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ac=class s extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),u(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(c){let y=new H,f=new H,m=new H;for(let v=0;v<t.length;v+=3)g(t[v+0],y),g(t[v+1],f),g(t[v+2],m),l(y,f,m,c)}function l(c,y,f,m){let v=m+1,E=[];for(let _=0;_<=v;_++){E[_]=[];let T=c.clone().lerp(f,_/v),R=y.clone().lerp(f,_/v),w=v-_;for(let P=0;P<=w;P++)P===0&&_===v?E[_][P]=T:E[_][P]=T.clone().lerp(R,P/w)}for(let _=0;_<v;_++)for(let T=0;T<2*(v-_)-1;T++){let R=Math.floor(T/2);T%2===0?(p(E[_][R+1]),p(E[_+1][R]),p(E[_][R])):(p(E[_][R+1]),p(E[_+1][R+1]),p(E[_+1][R]))}}function u(c){let y=new H;for(let f=0;f<r.length;f+=3)y.x=r[f+0],y.y=r[f+1],y.z=r[f+2],y.normalize().multiplyScalar(c),r[f+0]=y.x,r[f+1]=y.y,r[f+2]=y.z}function h(){let c=new H;for(let y=0;y<r.length;y+=3){c.x=r[y+0],c.y=r[y+1],c.z=r[y+2];let f=M(c)/2/Math.PI+.5,m=x(c)/Math.PI+.5;o.push(f,1-m)}b(),d()}function d(){for(let c=0;c<o.length;c+=6){let y=o[c+0],f=o[c+2],m=o[c+4],v=Math.max(y,f,m),E=Math.min(y,f,m);v>.9&&E<.1&&(y<.2&&(o[c+0]+=1),f<.2&&(o[c+2]+=1),m<.2&&(o[c+4]+=1))}}function p(c){r.push(c.x,c.y,c.z)}function g(c,y){let f=c*3;y.x=e[f+0],y.y=e[f+1],y.z=e[f+2]}function b(){let c=new H,y=new H,f=new H,m=new H,v=new Pe,E=new Pe,_=new Pe;for(let T=0,R=0;T<r.length;T+=9,R+=6){c.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),f.set(r[T+6],r[T+7],r[T+8]),v.set(o[R+0],o[R+1]),E.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),m.copy(c).add(y).add(f).divideScalar(3);let w=M(m);S(v,R+0,c,w),S(E,R+2,y,w),S(_,R+4,f,w)}}function S(c,y,f,m){m<0&&c.x===1&&(o[y]=c.x-1),f.x===0&&f.z===0&&(o[y]=m/2/Math.PI+.5)}function M(c){return Math.atan2(c.z,-c.x)}function x(c){return Math.atan2(-c.y,Math.sqrt(c.x*c.x+c.z*c.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),u=n[i]-o,u<0)a=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],p=n[i+1]-h,g=(o-h)/p;return(i+g)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,i=[],r=[],o=[],a=new H,l=new et;for(let g=0;g<=e;g++){let b=g/e;i[g]=this.getTangentAt(b,new H)}r[0]=new H,o[0]=new H;let u=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),p<=u&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();let b=Math.acos(wt(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,b))}o[g].crossVectors(i[g],r[g])}if(t===!0){let g=Math.acos(wt(r[0].dot(r[e]),-1,1));g/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let b=1;b<=e;b++)r[b].applyMatrix4(l.makeRotationAxis(i[b],g*b)),o[b].crossVectors(i[b],r[b])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xo=class extends _i{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,g=u-this.aY;l=p*h-g*d+this.aX,u=p*d+g*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends xo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){i(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,h,d){let p=(o-r)/u-(a-r)/(u+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,g*=h,i(o,a,p,g)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var C0=new H,P0=new H,Yh=new Lf,Zh=new Lf,$h=new Lf,Cc=class extends _i{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=i[(a-1)%r]:(P0.subVectors(i[0],i[1]).add(i[0]),u=P0);let d=i[a%r],p=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(C0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=C0),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,b=Math.pow(u.distanceToSquared(d),g),S=Math.pow(d.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(h),g);S<1e-4&&(S=1),b<1e-4&&(b=S),M<1e-4&&(M=S),Yh.initNonuniformCatmullRom(u.x,d.x,p.x,h.x,b,S,M),Zh.initNonuniformCatmullRom(u.y,d.y,p.y,h.y,b,S,M),$h.initNonuniformCatmullRom(u.z,d.z,p.z,h.z,b,S,M)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(u.x,d.x,p.x,h.x,this.tension),Zh.initCatmullRom(u.y,d.y,p.y,h.y,this.tension),$h.initCatmullRom(u.z,d.z,p.z,h.z,this.tension));return n.set(Yh.calc(l),Zh.calc(l),$h.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function I0(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function iv(s,e){let t=1-s;return t*t*e}function sv(s,e){return 2*(1-s)*s*e}function rv(s,e){return s*s*e}function fa(s,e,t,n){return iv(s,e)+sv(s,t)+rv(s,n)}function ov(s,e){let t=1-s;return t*t*t*e}function av(s,e){let t=1-s;return 3*t*t*s*e}function lv(s,e){return 3*(1-s)*s*s*e}function cv(s,e){return s*s*s*e}function da(s,e,t,n,i){return ov(s,e)+av(s,t)+lv(s,n)+cv(s,i)}var Aa=class extends _i{constructor(e=new Pe,t=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Pe){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(da(e,i.x,r.x,o.x,a.x),da(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends _i{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(da(e,i.x,r.x,o.x,a.x),da(e,i.y,r.y,o.y,a.y),da(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends _i{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends _i{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends _i{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fa(e,i.x,r.x,o.x),fa(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends _i{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fa(e,i.x,r.x,o.x),fa(e,i.y,r.y,o.y),fa(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],u=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(I0(a,l.x,u.x,h.x,d.x),I0(a,l.y,u.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Pe().fromArray(i))}return this}},L0=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Cc,CubicBezierCurve:Aa,CubicBezierCurve3:Pc,EllipseCurve:xo,LineCurve:Ra,LineCurve3:Ic,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Lc,SplineCurve:Pa}),Dc=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new L0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){let h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new L0[i.type]().fromJSON(i))}return this}},Ia=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ca(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Aa(this.currentPoint.clone(),new Pe(e,t),new Pe(n,i),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let u=new xo(e,t,n,i,r,o,a,l);if(this.curves.length>0){let d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yo=class extends Ia{constructor(e){super(e),this.uuid=Ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ia().fromJSON(i))}return this}};function uv(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Rp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,u;if(n&&(r=mv(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,d=l;for(let p=t;p<i;p+=t){let g=s[p],b=s[p+1];g<a&&(a=g),b<l&&(l=b),g>h&&(h=g),b>d&&(d=b)}u=Math.max(h-a,d-l),u=u!==0?32767/u:0}return La(r,o,t,a,l,u,0),o}function Rp(s,e,t,n,i){let r;if(i===wv(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=D0(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=D0(o/n|0,s[o],s[o+1],r);return r&&_o(r,r.next)&&(Na(r),r=r.next),r}function br(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_o(t,t.next)||hn(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function La(s,e,t,n,i,r,o){if(!s)return;!o&&r&&_v(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,u=s.next;if(r?fv(s,n,i,r):hv(s)){e.push(l.i,s.i,u.i),Na(s),s=u.next,a=u.next;continue}if(s=u,s===a){o?o===1?(s=dv(br(s),e),La(s,e,t,n,i,r,2)):o===2&&pv(s,e,t,n,i,r):La(br(s),e,t,n,i,r,1);break}}}function hv(s){let e=s.prev,t=s,n=s.next;if(hn(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=Math.min(i,r,o),d=Math.min(a,l,u),p=Math.max(i,r,o),g=Math.max(a,l,u),b=n.next;for(;b!==e;){if(b.x>=h&&b.x<=p&&b.y>=d&&b.y<=g&&ha(i,a,r,l,o,u,b.x,b.y)&&hn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function fv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(hn(i,r,o)>=0)return!1;let a=i.x,l=r.x,u=o.x,h=i.y,d=r.y,p=o.y,g=Math.min(a,l,u),b=Math.min(h,d,p),S=Math.max(a,l,u),M=Math.max(h,d,p),x=sf(g,b,e,t,n),c=sf(S,M,e,t,n),y=s.prevZ,f=s.nextZ;for(;y&&y.z>=x&&f&&f.z<=c;){if(y.x>=g&&y.x<=S&&y.y>=b&&y.y<=M&&y!==i&&y!==o&&ha(a,h,l,d,u,p,y.x,y.y)&&hn(y.prev,y,y.next)>=0||(y=y.prevZ,f.x>=g&&f.x<=S&&f.y>=b&&f.y<=M&&f!==i&&f!==o&&ha(a,h,l,d,u,p,f.x,f.y)&&hn(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;y&&y.z>=x;){if(y.x>=g&&y.x<=S&&y.y>=b&&y.y<=M&&y!==i&&y!==o&&ha(a,h,l,d,u,p,y.x,y.y)&&hn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;f&&f.z<=c;){if(f.x>=g&&f.x<=S&&f.y>=b&&f.y<=M&&f!==i&&f!==o&&ha(a,h,l,d,u,p,f.x,f.y)&&hn(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function dv(s,e){let t=s;do{let n=t.prev,i=t.next.next;!_o(n,i)&&Pp(n,t,t.next,i)&&Da(n,i)&&Da(i,n)&&(e.push(n.i,t.i,i.i),Na(t),Na(t.next),t=s=i),t=t.next}while(t!==s);return br(t)}function pv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sv(o,a)){let l=Ip(o,a);o=br(o,o.next),l=br(l,l.next),La(o,e,t,n,i,r,0),La(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function mv(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,u=Rp(s,a,l,n,!1);u===u.next&&(u.steiner=!0),i.push(Mv(u))}i.sort(gv);for(let r=0;r<i.length;r++)t=vv(i[r],t);return t}function gv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function vv(s,e){let t=xv(s,e);if(!t)return e;let n=Ip(t,s);return br(n,n.next),br(t,t.next)}function xv(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(_o(s,t))return t;do{if(_o(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Cp(i<u?n:r,i,l,u,i<u?r:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);Da(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&yv(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function yv(s,e){return hn(s.prev,s,e.prev)<0&&hn(e.next,s,s.next)<0}function _v(s,e,t,n){let i=s;do i.z===0&&(i.z=sf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,bv(i)}function bv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function sf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Mv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Cp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ha(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Cp(s,e,t,n,i,r,o,a)}function Sv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ev(s,e)&&(Da(s,e)&&Da(e,s)&&Tv(s,e)&&(hn(s.prev,s,e.prev)||hn(s,e.prev,e))||_o(s,e)&&hn(s.prev,s,s.next)>0&&hn(e.prev,e,e.next)>0)}function hn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _o(s,e){return s.x===e.x&&s.y===e.y}function Pp(s,e,t,n){let i=rc(hn(s,e,t)),r=rc(hn(s,e,n)),o=rc(hn(t,n,s)),a=rc(hn(t,n,e));return!!(i!==r&&o!==a||i===0&&sc(s,t,e)||r===0&&sc(s,n,e)||o===0&&sc(t,s,n)||a===0&&sc(t,e,n))}function sc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function rc(s){return s>0?1:s<0?-1:0}function Ev(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Pp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Da(s,e){return hn(s.prev,s,s.next)<0?hn(s,e,s.next)>=0&&hn(s,s.prev,e)>=0:hn(s,e,s.prev)<0||hn(s,s.next,e)<0}function Tv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ip(s,e){let t=rf(s.i,s.x,s.y),n=rf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function D0(s,e,t,n){let i=rf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Na(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var of=class{static triangulate(e,t,n=2){return uv(e,t,n)}},ao=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];N0(e),U0(n,e);let o=e.length;t.forEach(N0);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,U0(n,t[l]);let a=of.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function N0(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function U0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ua=class s extends Ac{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var en=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,h=l+1,d=e/a,p=t/l,g=[],b=[],S=[],M=[];for(let x=0;x<h;x++){let c=x*p-o;for(let y=0;y<u;y++){let f=y*d-r;b.push(f,-c,0),S.push(0,0,1),M.push(y/a),M.push(1-x/l)}}for(let x=0;x<l;x++)for(let c=0;c<a;c++){let y=c+u*x,f=c+u*(x+1),m=c+1+u*(x+1),v=c+1+u*x;g.push(y,f,v),g.push(f,m,v)}this.setIndex(g),this.setAttribute("position",new Ze(b,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fa=class s extends mt{constructor(e=new yo([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function u(h){let d=i.length/3,p=h.extractPoints(t),g=p.shape,b=p.holes;ao.isClockWise(g)===!1&&(g=g.reverse());for(let M=0,x=b.length;M<x;M++){let c=b[M];ao.isClockWise(c)===!0&&(b[M]=c.reverse())}let S=ao.triangulateShape(g,b);for(let M=0,x=b.length;M<x;M++){let c=b[M];g=g.concat(c)}for(let M=0,x=g.length;M<x;M++){let c=g[M];i.push(c.x,c.y,0),r.push(0,0,1),o.push(c.x,c.y)}for(let M=0,x=S.length;M<x;M++){let c=S[M],y=c[0]+d,f=c[1]+d,m=c[2]+d;n.push(y,f,m),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Av(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Av(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ba=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),u=0,h=[],d=new H,p=new H,g=[],b=[],S=[],M=[];for(let x=0;x<=n;x++){let c=[],y=x/n,f=o+y*a,m=e*Math.cos(f),v=Math.sqrt(e*e-m*m),E=0;x===0&&o===0?E=.5/t:x===n&&l===Math.PI&&(E=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=i+T*r;d.x=-v*Math.cos(R),d.y=m,d.z=v*Math.sin(R),b.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),M.push(T+E,1-y),c.push(u++)}h.push(c)}for(let x=0;x<n;x++)for(let c=0;c<t;c++){let y=h[x][c+1],f=h[x][c],m=h[x+1][c],v=h[x+1][c+1];(x!==0||o>0)&&g.push(y,f,v),(x!==n-1||l<Math.PI)&&g.push(f,m,v)}this.setIndex(g),this.setAttribute("position",new Ze(b,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oa=class s extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],u=[],h=[],d=[],p=new H,g=new H,b=new H;for(let S=0;S<=n;S++){let M=o+S/n*a;for(let x=0;x<=i;x++){let c=x/i*r;g.x=(e+t*Math.cos(M))*Math.cos(c),g.y=(e+t*Math.cos(M))*Math.sin(c),g.z=t*Math.sin(M),u.push(g.x,g.y,g.z),p.x=e*Math.cos(c),p.y=e*Math.sin(c),b.subVectors(g,p).normalize(),h.push(b.x,b.y,b.z),d.push(x/i),d.push(S/n)}}for(let S=1;S<=n;S++)for(let M=1;M<=i;M++){let x=(i+1)*S+M-1,c=(i+1)*(S-1)+M-1,y=(i+1)*(S-1)+M,f=(i+1)*S+M;l.push(x,c,f),l.push(c,y,f)}this.setIndex(l),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function wr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(F0(i))i.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(F0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Jn(s){let e={};for(let t=0;t<s.length;t++){let n=wr(s[t]);for(let i in n)e[i]=n[i]}return e}function F0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Rv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Df(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Ar={clone:wr,merge:Jn},Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(i.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new et().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nc=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fn=class extends us{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mr=class extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function no(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Kh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Gs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends Gs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ef:r=e,a=2*t-n;break;case tf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ef:o=e,l=2*n-t;break;case tf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,b=(n-t)/(i-t),S=b*b,M=S*b,x=-p*M+2*p*S-p*b,c=(1+p)*M+(-1.5-2*p)*S+(-.5+p)*b+1,y=(-1-g)*M+(1.5+g)*S+.5*b,f=g*M-g*S;for(let m=0;m!==a;++m)r[m]=x*o[h+m]+c*o[u+m]+y*o[l+m]+f*o[d+m];return r}},Bc=class extends Gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(i-t),d=1-h;for(let p=0;p!==a;++p)r[p]=o[u+p]*d+o[l+p]*h;return r}},Oc=class extends Gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zc=class extends Gs{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let b=(n-t)/(i-t),S=1-b;for(let M=0;M!==a;++M)r[M]=o[u+M]*S+o[l+M]*b;return r}let p=a*2,g=e-1;for(let b=0;b!==a;++b){let S=o[u+b],M=o[l+b],x=g*p+b*2,c=d[x],y=d[x+1],f=e*p+b*2,m=h[f],v=h[f+1],E=Lv(n,t,c,m,i);r[b]=Lp(E,S,y,v,M)}return r}};function Lp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Iv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Lv(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Lp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Iv(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var bi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Kh(e.settings)&&(n.settings={inTangents:no(e.settings.inTangents,Array),outTangents:no(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case yc:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break;case jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return lc;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Kh(this.settings)&&(B0(this.settings.inTangents,e),B0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ft("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ft("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&F1(i))for(let a=0,l=i.length;a!==l;++a){let u=i[a];if(isNaN(u)){ft("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)l=!0;else{let d=a*n,p=d-n,g=d+n;for(let b=0;b!==n;++b){let S=t[d+b];if(S!==t[p+b]||S!==t[g+b]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,p=o*n;for(let g=0;g!==n;++g)t[p+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Kh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function B0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=yc;var Ws=class extends bi{constructor(e,t,n){super(e,t,n)}};Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=pa;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}};kc.prototype.ValueTypeName="color";var Hc=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}};Hc.prototype.ValueTypeName="number";var Vc=class extends Gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),u=e*a;for(let h=u+a;u!==h;u+=4)gn.slerpFlat(r,0,o,u-a,o,u,l);return r}},za=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}};za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends bi{constructor(e,t,n){super(e,t,n)}};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=pa;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}};Gc.prototype.ValueTypeName="vector";var uc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(O0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!O0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function O0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){let d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=u.length;d<p;d+=2){let g=u[d],b=u[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dp=new Wc,bo=class{constructor(e){this.manager=e!==void 0?e:Dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=new WeakMap,Xc=class extends bo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=uc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=io.get(o);d===void 0&&(d=[],io.set(o,d)),d.push({onLoad:t,onError:i})}return o}let a=uo("img");function l(){h(),t&&t(this);let d=io.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onLoad&&g.onLoad(this)}io.delete(this),r.manager.itemEnd(e)}function u(d){h(),i&&i(d),uc.remove(`image:${e}`);let p=io.get(this)||[];for(let g=0;g<p.length;g++){let b=p[g];b.onError&&b.onError(d)}io.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),uc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ka=class extends bo{constructor(e){super(e)}load(e,t,n,i){let r=new Yn,o=new Xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Mo=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jh=new et,z0=new H,k0=new H,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(z0),k0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,u=i?i.y/r.y:0;e.coordinateSystem===co||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oc=new H,ac=new gn,os=new H,Rs=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,ac,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,os.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oc,ac,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ks=new H,H0=new Pe,V0=new Pe,kn=class extends Rs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ks.x,ks.y).multiplyScalar(-e/ks.z),ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ks.x,ks.y).multiplyScalar(-e/ks.z)}getViewSize(e,t){return this.getViewBounds(e,H0,V0),t.subVectors(V0,H0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Th*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},af=class extends Va{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=va*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ga=class extends Mo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new af}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var qs=class extends Rs{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lf=class extends Va{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new lf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hs=class extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var so=-90,ro=1,qc=class extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kn(so,ro,e,t);i.layers=this.layers,this.add(i);let r=new kn(so,ro,e,t);r.layers=this.layers,this.add(r);let o=new kn(so,ro,e,t);o.layers=this.layers,this.add(o);let a=new kn(so,ro,e,t);a.layers=this.layers,this.add(a);let l=new kn(so,ro,e,t);l.layers=this.layers,this.add(l);let u=new kn(so,ro,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let u of t)this.remove(u);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,p,g),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Yc=class extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Dv(){this._document.hidden===!1&&this.reset()}var Nf="\\[\\]\\.:\\/",Nv=new RegExp("["+Nf+"]","g"),Uf="[^"+Nf+"]",Uv="[^"+Nf.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",Uf),Bv=/(WCOD+)?/.source.replace("WCOD",Uv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uf),zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uf),kv=new RegExp("^"+Fv+Bv+Ov+zv+"$"),Hv=["material","materials","bones","map"],cf=class{constructor(e,t,n){let i=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nv,"")}static parseTrackName(e){let t=kv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Hv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[i];if(o===void 0){let u=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=cf;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SS=new Float32Array(1);var Hf=class Hf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Hf.prototype.isMatrix2=!0;var uf=Hf;function Ff(s,e,t,n){let i=Vv(n);switch(t){case Rf:return s*e;case $s:return s*e/i.components*i.byteLength;case tu:return s*e/i.components*i.byteLength;case Ks:return s*e*2/i.components*i.byteLength;case nu:return s*e*2/i.components*i.byteLength;case Cf:return s*e*3/i.components*i.byteLength;case Kn:return s*e*4/i.components*i.byteLength;case iu:return s*e*4/i.components*i.byteLength;case Za:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ru:case au:return Math.max(s,16)*Math.max(e,8)/4;case su:case ou:return Math.max(s,8)*Math.max(e,8)/2;case lu:case cu:case hu:case fu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uu:case ja:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Iu:case Lu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qa:case Du:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(s){switch(s){case $n:case Ef:return{byteLength:1,components:1};case wo:case Tf:case An:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case Qi:case jc:case Di:return{byteLength:4,components:1};case wf:case Af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tm(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $v(s){let e=new WeakMap;function t(a,l){let u=a.array,h=a.usage,d=u.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,u,h),a.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=s.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,u){let h=l.array,d=l.updateRanges;if(s.bindBuffer(u,a),d.length===0)s.bufferSubData(u,0,h);else{d.sort((g,b)=>g.start-b.start);let p=0;for(let g=1;g<d.length;g++){let b=d[p],S=d[g];S.start<=b.start+b.count+1?b.count=Math.max(b.count,S.start+S.count-b.start):(++p,d[p]=S)}d.length=p+1;for(let g=0,b=d.length;g<b;g++){let S=d[g];s.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:i,remove:r,update:o}}var Kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,Zx=`uniform sampler2D dfgLUT;
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
}`,$x=`
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o2=`#if defined( USE_POINTS_UV )
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
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
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
#endif`,d2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y2=`#ifdef USE_NORMALMAP
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
#endif`,_2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,F2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,O2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,k2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J2=`uniform sampler2D t2D;
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,fy=`#define LAMBERT
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
}`,dy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,yy=`#define PHONG
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
}`,_y=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,My=`#define TOON
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
}`,Sy=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Kv,alphahash_pars_fragment:Jv,alphamap_fragment:jv,alphamap_pars_fragment:Qv,alphatest_fragment:ex,alphatest_pars_fragment:tx,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ox,beginnormal_vertex:ax,bsdfs:lx,iridescence_fragment:cx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:vx,color_vertex:xx,common:yx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:bx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:wx,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Dx,fog_pars_vertex:Nx,fog_fragment:Ux,fog_pars_fragment:Fx,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:Ox,lights_lambert_fragment:zx,lights_lambert_pars_fragment:kx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:qx,lights_physical_fragment:Yx,lights_physical_pars_fragment:Zx,lights_fragment_begin:$x,lights_fragment_maps:Kx,lights_fragment_end:Jx,lightprobes_pars_fragment:jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:n2,map_fragment:i2,map_pars_fragment:s2,map_particle_fragment:r2,map_particle_pars_fragment:o2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:l2,morphinstance_vertex:c2,morphcolor_vertex:u2,morphnormal_vertex:h2,morphtarget_pars_vertex:f2,morphtarget_vertex:d2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:g2,normal_pars_vertex:v2,normal_vertex:x2,normalmap_pars_fragment:y2,clearcoat_normal_fragment_begin:_2,clearcoat_normal_fragment_maps:b2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:S2,opaque_fragment:E2,packing:T2,premultiplied_alpha_fragment:w2,project_vertex:A2,dithering_fragment:R2,dithering_pars_fragment:C2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:I2,shadowmap_pars_fragment:L2,shadowmap_pars_vertex:D2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:F2,skinning_pars_vertex:B2,skinning_vertex:O2,skinnormal_vertex:z2,specularmap_fragment:k2,specularmap_pars_fragment:H2,tonemapping_fragment:V2,tonemapping_pars_fragment:G2,transmission_fragment:W2,transmission_pars_fragment:X2,uv_pars_fragment:q2,uv_pars_vertex:Y2,uv_vertex:Z2,worldpos_vertex:$2,background_vert:K2,background_frag:J2,backgroundCube_vert:j2,backgroundCube_frag:Q2,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:sy,distance_frag:ry,equirect_vert:oy,equirect_frag:ay,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:uy,meshbasic_frag:hy,meshlambert_vert:fy,meshlambert_frag:dy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:vy,meshphong_vert:xy,meshphong_frag:yy,meshphysical_vert:_y,meshphysical_frag:by,meshtoon_vert:My,meshtoon_frag:Sy,points_vert:Ey,points_frag:Ty,shadow_vert:wy,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},Ve={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ps={basic:{uniforms:Jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Jn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Jn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new _e(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Jn([Ve.points,Ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Jn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Jn([Ve.common,Ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Jn([Ve.sprite,Ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Jn([Ve.common,Ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Jn([Ve.lights,Ve.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ps.physical={uniforms:Jn([ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Bu={r:0,b:0,g:0},Py=new et,nm=new pt;nm.set(-1,0,0,0,1,0,0,0,1);function Iy(s,e,t,n,i,r){let o=new _e(0),a=i===!0?0:1,l,u,h=null,d=0,p=null;function g(c){let y=c.isScene===!0?c.background:null;if(y&&y.isTexture){let f=c.backgroundBlurriness>0;y=e.get(y,f)}return y}function b(c){let y=!1,f=g(c);f===null?M(o,a):f&&f.isColor&&(M(f,1),y=!0);let m=s.xr.getEnvironmentBlendMode();m==="additive"?t.buffers.color.setClear(0,0,0,1,r):m==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(c,y){let f=g(y);f&&(f.isCubeTexture||f.mapping===qa)?(u===void 0&&(u=new ct(new Jt(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:wr(ps.backgroundCube.uniforms),vertexShader:ps.backgroundCube.vertexShader,fragmentShader:ps.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(m,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=f,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(y.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(nm),u.material.toneMapped=Rt.getTransfer(f.colorSpace)!==kt,(h!==f||d!==f.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=f,d=f.version,p=s.toneMapping),u.layers.enableAll(),c.unshift(u,u.geometry,u.material,0,0,null)):f&&f.isTexture&&(l===void 0&&(l=new ct(new en(2,2),new ut({name:"BackgroundMaterial",uniforms:wr(ps.background.uniforms),vertexShader:ps.background.vertexShader,fragmentShader:ps.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=f,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(f.colorSpace)!==kt,f.matrixAutoUpdate===!0&&f.updateMatrix(),l.material.uniforms.uvTransform.value.copy(f.matrix),(h!==f||d!==f.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=f,d=f.version,p=s.toneMapping),l.layers.enableAll(),c.unshift(l,l.geometry,l.material,0,0,null))}function M(c,y){c.getRGB(Bu,Df(s)),t.buffers.color.setClear(Bu.r,Bu.g,Bu.b,y,r)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(c,y=1){o.set(c),a=y,M(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(c){a=c,M(o,a)},render:b,addToRenderList:S,dispose:x}}function Ly(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null),r=i,o=!1;function a(w,P,C,A,L){let D=!1,U=d(w,A,C,P);r!==U&&(r=U,u(r.object)),D=g(w,A,C,L),D&&b(w,A,C,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,f(w,P,C,A),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function u(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function d(w,P,C,A){let L=A.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let U=w.isInstancedMesh===!0?w.id:0,V=D[U];V===void 0&&(V={},D[U]=V);let O=V[C.id];O===void 0&&(O={},V[C.id]=O);let k=O[L];return k===void 0&&(k=p(l()),O[L]=k),k}function p(w){let P=[],C=[],A=[];for(let L=0;L<t;L++)P[L]=0,C[L]=0,A[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:A,object:w,attributes:{},index:null}}function g(w,P,C,A){let L=r.attributes,D=P.attributes,U=0,V=C.getAttributes();for(let O in V)if(V[O].location>=0){let z=L[O],K=D[O];if(K===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;U++}return r.attributesNum!==U||r.index!==A}function b(w,P,C,A){let L={},D=P.attributes,U=0,V=C.getAttributes();for(let O in V)if(V[O].location>=0){let z=D[O];z===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));let K={};K.attribute=z,z&&z.data&&(K.data=z.data),L[O]=K,U++}r.attributes=L,r.attributesNum=U,r.index=A}function S(){let w=r.newAttributes;for(let P=0,C=w.length;P<C;P++)w[P]=0}function M(w){x(w,0)}function x(w,P){let C=r.newAttributes,A=r.enabledAttributes,L=r.attributeDivisors;C[w]=1,A[w]===0&&(s.enableVertexAttribArray(w),A[w]=1),L[w]!==P&&(s.vertexAttribDivisor(w,P),L[w]=P)}function c(){let w=r.newAttributes,P=r.enabledAttributes;for(let C=0,A=P.length;C<A;C++)P[C]!==w[C]&&(s.disableVertexAttribArray(C),P[C]=0)}function y(w,P,C,A,L,D,U){U===!0?s.vertexAttribIPointer(w,P,C,L,D):s.vertexAttribPointer(w,P,C,A,L,D)}function f(w,P,C,A){S();let L=A.attributes,D=C.getAttributes(),U=P.defaultAttributeValues;for(let V in D){let O=D[V];if(O.location>=0){let k=L[V];if(k===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),k!==void 0){let z=k.normalized,K=k.itemSize,le=e.get(k);if(le===void 0)continue;let Me=le.buffer,Fe=le.type,Ne=le.bytesPerElement,J=Fe===s.INT||Fe===s.UNSIGNED_INT||k.gpuType===jc;if(k.isInterleavedBufferAttribute){let $=k.data,ve=$.stride,Ae=k.offset;if($.isInstancedInterleavedBuffer){for(let pe=0;pe<O.locationSize;pe++)x(O.location+pe,$.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<O.locationSize;pe++)M(O.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let pe=0;pe<O.locationSize;pe++)y(O.location+pe,K/O.locationSize,Fe,z,ve*Ne,(Ae+K/O.locationSize*pe)*Ne,J)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)x(O.location+$,k.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<O.locationSize;$++)M(O.location+$);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let $=0;$<O.locationSize;$++)y(O.location+$,K/O.locationSize,Fe,z,K*Ne,K/O.locationSize*$*Ne,J)}}else if(U!==void 0){let z=U[V];if(z!==void 0)switch(z.length){case 2:s.vertexAttrib2fv(O.location,z);break;case 3:s.vertexAttrib3fv(O.location,z);break;case 4:s.vertexAttrib4fv(O.location,z);break;default:s.vertexAttrib1fv(O.location,z)}}}}c()}function m(){T();for(let w in n){let P=n[w];for(let C in P){let A=P[C];for(let L in A){let D=A[L];for(let U in D)h(D[U].object),delete D[U];delete A[L]}}delete n[w]}}function v(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let C in P){let A=P[C];for(let L in A){let D=A[L];for(let U in D)h(D[U].object),delete D[U];delete A[L]}}delete n[w.id]}function E(w){for(let P in n){let C=n[P];for(let A in C){let L=C[A];if(L[w.id]===void 0)continue;let D=L[w.id];for(let U in D)h(D[U].object),delete D[U];delete L[w.id]}}}function _(w){for(let P in n){let C=n[P],A=w.isInstancedMesh===!0?w.id:0,L=C[A];if(L!==void 0){for(let D in L){let U=L[D];for(let V in U)h(U[V].object),delete U[V];delete L[D]}delete C[A],Object.keys(C).length===0&&delete n[P]}}}function T(){R(),o=!0,r!==i&&(r=i,u(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:m,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:M,disableUnusedAttributes:c}}function Dy(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ny(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Kn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let _=E===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==$n&&E!==Di&&!_&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=l(u);h!==u&&(lt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),c=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),f=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),m=s.getParameter(s.MAX_SAMPLES),v=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:b,maxTextureSize:S,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:c,maxVaryings:y,maxFragmentUniforms:f,maxSamples:m,samples:v}}function Uy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Yi,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||i;return i=p,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,g){let b=d.clippingPlanes,S=d.clipIntersection,M=d.clipShadows,x=s.get(d);if(!i||b===null||b.length===0||r&&!M)r?h(null):u();else{let c=r?0:n,y=c*4,f=x.clippingState||null;l.value=f,f=h(b,p,y,g);for(let m=0;m!==y;++m)f[m]=t[m];x.clippingState=f,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=c}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,g,b){let S=d!==null?d.length:0,M=null;if(S!==0){if(M=l.value,b!==!0||M===null){let x=g+S*4,c=p.matrixWorldInverse;a.getNormalMatrix(c),(M===null||M.length<x)&&(M=new Float32Array(x));for(let y=0,f=g;y!==S;++y,f+=4)o.copy(d[y]).applyMatrix4(c,a),o.normal.toArray(M,f),M[f+3]=o.constant}l.value=M,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,M}}var Po=4,Fy=6,By=20,Oy=256,el=new qs,Np=new _e,Vf=null,Gf=0,Wf=0,Xf=!1,zy=new H,Rr=new H,zu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=zy}=r;Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vf,Gf,Wf),this._renderer.xr.enabled=Xf,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:An,format:Kn,colorSpace:ma,depthBuffer:!1},i=Up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ky(r)),this._blurMaterial=Vy(r,e,t),this._ggxMaterial=Hy(r,e,t)}return i}_compileMaterial(e){let t=new ct(new mt,e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,i,r){let l=new kn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(Np),d.toneMapping=ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Jt,new vn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,M=S.material,x=!1,c=e.background;c?c.isColor&&(M.color.copy(c),e.background=null,x=!0):(M.color.copy(Np),x=!0);for(let y=0;y<6;y++){let f=y%3;f===0?(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):f===1?(l.up.set(0,0,u[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,u[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let m=this._cubeSize;Co(i,f*m,y>2?m:0,m,m),d.setRenderTarget(i),x&&d.render(S,l),d.render(e,l)}d.toneMapping=g,d.autoClear=p,e.background=c}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ys||e.mapping===Tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,el)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),p=u*1.25,g=d*p,{_lodMax:b}=this,S=this._sizeLods[n],M=3*S*(n>b-Po?n-b+Po:0),x=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=b-t,Co(r,M,x,3*S,2*S),i.setRenderTarget(r),i.render(a,el),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=b-n,Co(e,M,x,3*S,2*S),i.setRenderTarget(e),i.render(a,el)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Po?i-this._lodMax+Po:0),p=4*(this._cubeSize-h);Co(t,d,p,3*h,2*h),o.setRenderTarget(t),o.render(l,el)}};function ky(s){let e=[],t=[],n=s,i=s-Po+1+Fy;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,u=1+a,h=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,p=6,g=3,b=new Float32Array(g*p*d),S=new Float32Array(g*p*d);for(let x=0;x<d;x++){let c=x%3*2/3-1,y=x>2?0:-1,f=[c,y,0,c+2/3,y,0,c+2/3,y+1,0,c,y,0,c+2/3,y+1,0,c,y+1,0];b.set(f,g*p*x);for(let m=0;m<p;m++){let v=h[m*2]*2-1,E=h[m*2+1]*2-1;x===0?Rr.set(1,E,v):x===1?Rr.set(-v,1,-E):x===2?Rr.set(-v,E,1):x===3?Rr.set(-1,E,-v):x===4?Rr.set(-v,-1,E):Rr.set(v,E,-1),Rr.toArray(S,(x*p+m)*g)}}let M=new mt;M.setAttribute("position",new _t(b,g)),M.setAttribute("outputDirection",new _t(S,g)),t.push(new ct(M,null)),n>Po&&n--}return{lodMeshes:t,sizeLods:e}}function Up(s,e,t){let n=new Xt(s,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hy(s,e,t){return new ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vy(s,e,t){return new ut({name:"SphericalGaussianBlur",defines:{SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fp(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Bp(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ku=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ta(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:ii});r.uniforms.tEquirect.value=t;let o=new ct(i,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Bt),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function Gy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(p,g=!1){return p==null?null:g?o(p):r(p)}function r(p){if(p&&p.isTexture){let g=p.mapping;if(g===$c||g===Kc)if(e.has(p)){let b=e.get(p).texture;return a(b,p.mapping)}else{let b=p.image;if(b&&b.height>0){let S=new ku(b.height);return S.fromEquirectangularTexture(s,p),e.set(p,S),p.addEventListener("dispose",u),a(S.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let g=p.mapping,b=g===$c||g===Kc,S=g===Ys||g===Tr;if(b||S){let M=t.get(p),x=M!==void 0?M.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return n===null&&(n=new zu(s)),M=b?n.fromEquirectangular(p,M):n.fromCubemap(p,M),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),M.texture;if(M!==void 0)return M.texture;{let c=p.image;return b&&c&&c.height>0||S&&c&&l(c)?(n===null&&(n=new zu(s)),M=b?n.fromEquirectangular(p):n.fromCubemap(p),M.texture.pmremVersion=p.pmremVersion,t.set(p,M),p.addEventListener("dispose",h),M.texture):null}}}return p}function a(p,g){return g===$c?p.mapping=Ys:g===Kc&&(p.mapping=Tr),p}function l(p){let g=0,b=6;for(let S=0;S<b;S++)p[S]!==void 0&&g++;return g===b}function u(p){let g=p.target;g.removeEventListener("dispose",u);let b=e.get(g);b!==void 0&&(e.delete(g),b.dispose())}function h(p){let g=p.target;g.removeEventListener("dispose",h);let b=t.get(g);b!==void 0&&(t.delete(g),b.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Wy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&xr("WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(s,e,t,n){let i={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",o),delete i[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)e.update(p[g],s.ARRAY_BUFFER)}function u(d){let p=[],g=d.index,b=d.attributes.position,S=0;if(b===void 0)return;if(g!==null){let c=g.array;S=g.version;for(let y=0,f=c.length;y<f;y+=3){let m=c[y+0],v=c[y+1],E=c[y+2];p.push(m,v,v,E,E,m)}}else{let c=b.array;S=b.version;for(let y=0,f=c.length/3-1;y<f;y+=3){let m=y+0,v=y+1,E=y+2;p.push(m,v,v,E,E,m)}}let M=new(b.count>=65535?Ma:ba)(p,1);M.version=S;let x=r.get(d);x&&e.remove(x),r.set(d,M)}function h(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function qy(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function u(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let S=0;for(let M=0;M<g;M++)S+=p[M];t.update(S,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function Yy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zy(s,e,t){let n=new WeakMap,i=new dt;function r(o,a,l){let u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();let g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,M=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],c=a.morphAttributes.color||[],y=0;g===!0&&(y=1),b===!0&&(y=2),S===!0&&(y=3);let f=a.attributes.position.count*y,m=1;f>e.maxTextureSize&&(m=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);let v=new Float32Array(f*m*4*d),E=new xa(v,f,m,d);E.type=Di,E.needsUpdate=!0;let _=y*4;for(let R=0;R<d;R++){let w=M[R],P=x[R],C=c[R],A=f*m*4*R;for(let L=0;L<w.count;L++){let D=L*_;g===!0&&(i.fromBufferAttribute(w,L),v[A+D+0]=i.x,v[A+D+1]=i.y,v[A+D+2]=i.z,v[A+D+3]=0),b===!0&&(i.fromBufferAttribute(P,L),v[A+D+4]=i.x,v[A+D+5]=i.y,v[A+D+6]=i.z,v[A+D+7]=0),S===!0&&(i.fromBufferAttribute(C,L),v[A+D+8]=i.x,v[A+D+9]=i.y,v[A+D+10]=i.z,v[A+D+11]=C.itemSize===4?i.w:1)}}p={count:d,texture:E,size:new Pe(f,m)},n.set(a,p),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<u.length;S++)g+=u[S];let b=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",u)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function $y(s,e,t,n,i){let r=new WeakMap;function o(u){let h=i.render.frame,d=u.geometry,p=e.get(u,d);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==h&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return p}function a(){r=new WeakMap}function l(u){let h=u.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ky={[vf]:"LINEAR_TONE_MAPPING",[xf]:"REINHARD_TONE_MAPPING",[yf]:"CINEON_TONE_MAPPING",[_f]:"ACES_FILMIC_TONE_MAPPING",[Mf]:"AGX_TONE_MAPPING",[Xa]:"NEUTRAL_TONE_MAPPING",[bf]:"CUSTOM_TONE_MAPPING"};function Jy(s,e,t,n,i,r){let o=new Xt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,u=new mt;u.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let h=new Nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ct(u,h),p=new qs(-1,1,1,-1,0,1),g=null,b=null,S=!1,M,x=null,c=[],y=!1;this.setSize=function(f,m){o.setSize(f,m),a!==null&&a.setSize(f,m),l!==null&&l.setSize(f,m);for(let v=0;v<c.length;v++){let E=c[v];E.setSize&&E.setSize(f,m)}},this.setEffects=function(f){c=f,y=c.length>0&&c[0].isRenderPass===!0;let m=o.width,v=o.height;c.length>0&&a===null&&(a=new Xt(m,v,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(m,v,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<c.length;E++){let _=c[E];_.setSize&&_.setSize(m,v)}},this.begin=function(f,m){if(S||f.toneMapping===ji&&c.length===0)return!1;if(x=m,m!==null){let v=m.width,E=m.height;(o.width!==v||o.height!==E)&&this.setSize(v,E)}return y===!1&&f.setRenderTarget(o),M=f.toneMapping,f.toneMapping=ji,!0},this.hasRenderPass=function(){return y},this.end=function(f,m){f.toneMapping=M,S=!0;let v=o,E=a;for(let _=0;_<c.length;_++){let T=c[_];T.enabled!==!1&&(T.render(f,E,v,m),T.needsSwap!==!1&&(v=E,E=E===a?l:a))}if(g!==f.outputColorSpace||b!==f.toneMapping){g=f.outputColorSpace,b=f.toneMapping,h.defines={},Rt.getTransfer(g)===kt&&(h.defines.SRGB_TRANSFER="");let _=Ky[b];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,f.setRenderTarget(x),f.render(d,p),x=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var im=new Yn,Zf=new Vs(1,1),sm=new xa,rm=new Mc,om=new Ta,Op=[],zp=[],kp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function Lo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Op[i];if(r===void 0&&(r=new Float32Array(i),Op[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function In(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gu(s,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2fv(this.addr,e),Ln(t,e)}}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;s.uniform3fv(this.addr,e),Ln(t,e)}}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4fv(this.addr,e),Ln(t,e)}}function n_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Vp.set(n),s.uniformMatrix2fv(this.addr,!1,Vp),Ln(t,n)}}function i_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Hp.set(n),s.uniformMatrix3fv(this.addr,!1,Hp),Ln(t,n)}}function s_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;kp.set(n),s.uniformMatrix4fv(this.addr,!1,kp),Ln(t,n)}}function r_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2iv(this.addr,e),Ln(t,e)}}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3iv(this.addr,e),Ln(t,e)}}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4iv(this.addr,e),Ln(t,e)}}function c_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2uiv(this.addr,e),Ln(t,e)}}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3uiv(this.addr,e),Ln(t,e)}}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4uiv(this.addr,e),Ln(t,e)}}function d_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zf.compareFunction=t.isReversedDepthBuffer()?Fu:Uu,r=Zf):r=im,t.setTexture2D(e||r,i)}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rm,i)}function m_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||om,i)}function g_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sm,i)}function v_(s){switch(s){case 5126:return jy;case 35664:return Qy;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(s,e){s.uniform1fv(this.addr,e)}function y_(s,e){let t=Lo(e,this.size,2);s.uniform2fv(this.addr,t)}function __(s,e){let t=Lo(e,this.size,3);s.uniform3fv(this.addr,t)}function b_(s,e){let t=Lo(e,this.size,4);s.uniform4fv(this.addr,t)}function M_(s,e){let t=Lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function S_(s,e){let t=Lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function E_(s,e){let t=Lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function T_(s,e){s.uniform1iv(this.addr,e)}function w_(s,e){s.uniform2iv(this.addr,e)}function A_(s,e){s.uniform3iv(this.addr,e)}function R_(s,e){s.uniform4iv(this.addr,e)}function C_(s,e){s.uniform1uiv(this.addr,e)}function P_(s,e){s.uniform2uiv(this.addr,e)}function I_(s,e){s.uniform3uiv(this.addr,e)}function L_(s,e){s.uniform4uiv(this.addr,e)}function D_(s,e,t){let n=this.cache,i=e.length,r=Gu(t,i);In(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Zf:o=im;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function N_(s,e,t){let n=this.cache,i=e.length,r=Gu(t,i);In(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rm,r[o])}function U_(s,e,t){let n=this.cache,i=e.length,r=Gu(t,i);In(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||om,r[o])}function F_(s,e,t){let n=this.cache,i=e.length,r=Gu(t,i);In(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||sm,r[o])}function B_(s){switch(s){case 5126:return x_;case 35664:return y_;case 35665:return __;case 35666:return b_;case 35674:return M_;case 35675:return S_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var $f=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}},Kf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}},Jf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},qf=/(\w+)(\])?(\[|\.)?/g;function Gp(s,e){s.seq.push(e),s.map[e.id]=e}function O_(s,e,t){let n=s.name,i=n.length;for(qf.lastIndex=0;;){let r=qf.exec(n),o=qf.lastIndex,a=r[1],l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Gp(t,u===void 0?new $f(a,s,e):new Kf(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Jf(a),Gp(t,d)),t=d}}}var Io=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);O_(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Wp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var z_=37297,k_=0;function H_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Xp=new pt;function V_(s){Rt._getMatrix(Xp,Rt.workingColorSpace,s);let e=`mat3( ${Xp.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case ga:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+H_(s.getShaderSource(e),a)}else return r}function G_(s,e){let t=V_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var W_={[vf]:"Linear",[xf]:"Reinhard",[yf]:"Cineon",[_f]:"ACESFilmic",[Mf]:"AgX",[Xa]:"Neutral",[bf]:"Custom"};function X_(s,e){let t=W_[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ou=new H;function q_(){Rt.getLuminanceCoefficients(Ou);let s=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Z_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nl(s){return s!==""}function Yp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(K_,j_)}var J_=new Map;function j_(s,e){let t=ht[e];if(t===void 0){let n=J_.get(e);if(n!==void 0)t=ht[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jf(t)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(s){return s.replace(Q_,eb)}function eb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var tb={[Sr]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function nb(s){return tb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[Ys]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function sb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ib[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var rb={[Tr]:"ENVMAP_MODE_REFRACTION"};function ob(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ab={[gf]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function lb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ab[s.combine]||"ENVMAP_BLENDING_NONE"}function cb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ub(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nb(t),u=sb(t),h=ob(t),d=lb(t),p=cb(t),g=Y_(t),b=Z_(r),S=i.createProgram(),M,x,c=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(nl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(M=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ht.tonemapping_pars_fragment:"",t.toneMapping!==ji?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),o=jf(o),o=Yp(o,t),o=Zp(o,t),a=jf(a),a=Yp(a,t),a=Zp(a,t),o=$p(o),a=$p(a),t.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,M=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===Pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=c+M+o,f=c+x+a,m=Wp(i,i.VERTEX_SHADER,y),v=Wp(i,i.FRAGMENT_SHADER,f);i.attachShader(S,m),i.attachShader(S,v),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function E(w){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(S)||"",C=i.getShaderInfoLog(m)||"",A=i.getShaderInfoLog(v)||"",L=P.trim(),D=C.trim(),U=A.trim(),V=!0,O=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,m,v);else{let k=qp(i,m,"vertex"),z=qp(i,v,"fragment");ft("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+k+`
`+z)}else L!==""?lt("WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(O=!1);O&&(w.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:M},fragmentShader:{log:U,prefix:x}})}i.deleteShader(m),i.deleteShader(v),_=new Io(i,S),T=$_(i,S)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(S,z_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=m,this.fragmentShader=v,this}var hb=0,Qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}},ed=class{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}};function fb(s){return s===Ks||s===ja||s===Qa}function db(s,e,t,n,i,r){let o=new ya,a=new Qf,l=new Set,u=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,T,R,w,P,C){let A=w.fog,L=P.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||D,U),O=V&&V.mapping===qa?V.image.height:null,k=g[_.type];_.precision!==null&&(p=n.getMaxPrecision(_.precision),p!==_.precision&&lt("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=z!==void 0?z.length:0,le=0;L.morphAttributes.position!==void 0&&(le=1),L.morphAttributes.normal!==void 0&&(le=2),L.morphAttributes.color!==void 0&&(le=3);let Me,Fe,Ne,J;if(k){let Gt=ps[k];Me=Gt.vertexShader,Fe=Gt.fragmentShader}else{Me=_.vertexShader,Fe=_.fragmentShader;let Gt=a.getVertexShaderStage(_),Dt=a.getFragmentShaderStage(_);a.update(_,Gt,Dt),Ne=Gt.id,J=Dt.id}let $=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ae=P.isInstancedMesh===!0,pe=P.isBatchedMesh===!0,Oe=!!_.map,Je=!!_.matcap,je=!!V,Te=!!_.aoMap,nt=!!_.lightMap,ne=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,j=!!_.displacementMap,ie=!!_.emissiveMap,ee=!!_.metalnessMap,ue=!!_.roughnessMap,F=_.anisotropy>0,be=_.clearcoat>0,te=_.dispersion>0,N=_.retroreflectivity>0,I=_.iridescence>0,G=_.sheen>0,W=_.transmission>0,Q=F&&!!_.anisotropyMap,ce=be&&!!_.clearcoatMap,ge=be&&!!_.clearcoatNormalMap,he=be&&!!_.clearcoatRoughnessMap,fe=I&&!!_.iridescenceMap,we=I&&!!_.iridescenceThicknessMap,We=G&&!!_.sheenColorMap,Ce=G&&!!_.sheenRoughnessMap,Ie=!!_.specularMap,Ue=!!_.specularColorMap,Qe=!!_.specularIntensityMap,at=W&&!!_.transmissionMap,Y=W&&!!_.thicknessMap,Le=!!_.gradientMap,me=!!_.alphaMap,De=_.alphaTest>0,ze=!!_.alphaHash,Ee=!!_.extensions,q=ji;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(q=s.toneMapping);let Ge={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:Fe,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:pe,batchingColor:pe&&P._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&P.instanceColor!==null,instancingMorph:Ae&&P.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:Je,envMap:je,envMapMode:je&&V.mapping,envMapCubeUVHeight:O,aoMap:Te,lightMap:nt,bumpMap:ne,normalMap:de,displacementMap:j,emissiveMap:ie,normalMapObjectSpace:de&&_.normalMapType===pp,normalMapTangentSpace:de&&_.normalMapType===Nu,packedNormalMap:de&&_.normalMapType===Nu&&fb(_.normalMap.format),metalnessMap:ee,roughnessMap:ue,anisotropy:F,anisotropyMap:Q,clearcoat:be,clearcoatMap:ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:he,dispersion:te,retroreflection:N,iridescence:I,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:G,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:Ie,specularColorMap:Ue,specularIntensityMap:Qe,transmission:W,transmissionMap:at,thicknessMap:Y,gradientMap:Le,opaque:_.transparent===!1&&_.blending===To&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:ze,combine:_.combine,mapUv:Oe&&b(_.map.channel),aoMapUv:Te&&b(_.aoMap.channel),lightMapUv:nt&&b(_.lightMap.channel),bumpMapUv:ne&&b(_.bumpMap.channel),normalMapUv:de&&b(_.normalMap.channel),displacementMapUv:j&&b(_.displacementMap.channel),emissiveMapUv:ie&&b(_.emissiveMap.channel),metalnessMapUv:ee&&b(_.metalnessMap.channel),roughnessMapUv:ue&&b(_.roughnessMap.channel),anisotropyMapUv:Q&&b(_.anisotropyMap.channel),clearcoatMapUv:ce&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:We&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(_.sheenRoughnessMap.channel),specularMapUv:Ie&&b(_.specularMap.channel),specularColorMapUv:Ue&&b(_.specularColorMap.channel),specularIntensityMapUv:Qe&&b(_.specularIntensityMap.channel),transmissionMapUv:at&&b(_.transmissionMap.channel),thicknessMapUv:Y&&b(_.thicknessMap.channel),alphaMapUv:me&&b(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(de||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Oe||me),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:le,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:q,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Rt.getTransfer(_.map.colorSpace)===kt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(_.emissiveMap.colorSpace)===kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(x(T,_),c(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function x(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function c(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let T=g[_.type],R;if(T){let w=ps[T];R=Ar.clone(w.uniforms)}else R=_.uniforms;return R}function f(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new ub(s,T,_,i),u.push(R),h.set(T,R)),R}function m(_){if(--_.usedTimes===0){let T=u.indexOf(_);u[T]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){a.remove(_)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:y,acquireProgram:f,releaseProgram:m,releaseShaderCache:v,programs:u,dispose:E}}function pb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function mb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function a(p,g,b,S,M,x){let c=s[e];return c===void 0?(c={id:p.id,object:p,geometry:g,material:b,materialVariant:o(p),groupOrder:S,renderOrder:p.renderOrder,z:M,group:x},s[e]=c):(c.id=p.id,c.object=p,c.geometry=g,c.material=b,c.materialVariant=o(p),c.groupOrder=S,c.renderOrder=p.renderOrder,c.z=M,c.group=x),e++,c}function l(p,g,b,S,M,x,c){c.reversedDepth===!0&&(M=-M);let y=a(p,g,b,S,M,x);b.transmission>0?n.push(y):b.transparent===!0?i.push(y):t.push(y)}function u(p,g,b,S,M,x){let c=a(p,g,b,S,M,x);b.transmission>0?n.unshift(c):b.transparent===!0?i.unshift(c):t.unshift(c)}function h(p,g){t.length>1&&t.sort(p||mb),n.length>1&&n.sort(g||Jp),i.length>1&&i.sort(g||Jp)}function d(){for(let p=e,g=s.length;p<g;p++){let b=s[p];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:u,finish:d,sort:h}}function gb(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new jp,s.set(n,[o])):i>=r.length?(o=new jp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function vb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new _e};break;case"SpotLight":t={position:new H,direction:new H,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function xb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var yb=0;function _b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bb(s){let e=new vb,t=xb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let i=new H,r=new et,o=new et;function a(u){let h=0,d=0,p=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,b=0,S=0,M=0,x=0,c=0,y=0,f=0,m=0,v=0,E=0,_=0,T=0,R=0;u.sort(_b);for(let P=0,C=u.length;P<C;P++){let A=u[P],L=A.color,D=A.intensity,U=A.distance,V=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ks?V=A.shadow.map.texture:V=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=L.r*D,d+=L.g*D,p+=L.b*D;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],D);R++}else if(A.isSunLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,z=t.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[b]=z,n.sunShadowMap[b]=V;let K=k.getViewportCount();for(let le=0;le<K;le++)n.sunShadowMatrix[S+le]=k.getMatrix(le),n.sunShadowCascade[S+le]=k._cascadeData[le];S+=K,b++}n.sun[g]=O,g++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,z=t.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[M]=z,n.directionalShadowMap[M]=V,n.directionalShadowMatrix[M]=A.shadow.matrix,m++}n.directional[M]=O,M++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(L).multiplyScalar(D),O.distance=U,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[c]=O;let k=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,k.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[c]=k.matrix,A.castShadow){let z=t.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[c]=z,n.spotShadowMap[c]=V,E++}c++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(L).multiplyScalar(D),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=O,y++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let k=A.shadow,z=t.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[x]=z,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=A.shadow.matrix,v++}n.point[x]=O,x++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(D),O.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[f]=O,f++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let w=n.hash;(w.sunLength!==g||w.directionalLength!==M||w.pointLength!==x||w.spotLength!==c||w.rectAreaLength!==y||w.hemiLength!==f||w.numSunShadows!==b||w.numDirectionalShadows!==m||w.numPointShadows!==v||w.numSpotShadows!==E||w.numSpotMaps!==_||w.numLightProbes!==R)&&(n.sun.length=g,n.directional.length=M,n.spot.length=c,n.rectArea.length=y,n.point.length=x,n.hemi.length=f,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.directionalShadowMatrix.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,w.sunLength=g,w.directionalLength=M,w.pointLength=x,w.spotLength=c,w.rectAreaLength=y,w.hemiLength=f,w.numSunShadows=b,w.numDirectionalShadows=m,w.numPointShadows=v,w.numSpotShadows=E,w.numSpotMaps=_,w.numLightProbes=R,n.version=yb++)}function l(u,h){let d=0,p=0,g=0,b=0,S=0,M=0,x=h.matrixWorldInverse;for(let c=0,y=u.length;c<y;c++){let f=u[c];if(f.isSunLight){let m=n.sun[d];m.direction.setFromMatrixPosition(f.matrixWorld),m.direction.transformDirection(x),d++}else if(f.isDirectionalLight){let m=n.directional[p];m.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(i),m.direction.transformDirection(x),p++}else if(f.isSpotLight){let m=n.spot[b];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(x),m.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(i),m.direction.transformDirection(x),b++}else if(f.isRectAreaLight){let m=n.rectArea[S];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(x),o.identity(),r.copy(f.matrixWorld),r.premultiply(x),o.extractRotation(r),m.halfWidth.set(f.width*.5,0,0),m.halfHeight.set(0,f.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),S++}else if(f.isPointLight){let m=n.point[g];m.position.setFromMatrixPosition(f.matrixWorld),m.position.applyMatrix4(x),g++}else if(f.isHemisphereLight){let m=n.hemi[M];m.direction.setFromMatrixPosition(f.matrixWorld),m.direction.transformDirection(x),M++}}}return{setup:a,setupView:l,state:n}}function Qp(s){let e=new bb(s),t=[],n=[],i=[];function r(p){d.camera=p,t.length=0,n.length=0,i.length=0}function o(p){t.push(p)}function a(p){n.push(p)}function l(p){i.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Mb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Qp(s),e.set(i,[a])):r>=o.length?(a=new Qp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`,Tb=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],wb=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],em=new et,tl=new H,Yf=new H;function Ab(s,e,t){let n=new go,i=new Pe,r=new Pe,o=new dt,a=new Mr,l=new Uc,u={},h=t.maxTextureSize,d={[fs]:Hn,[Hn]:fs,[bn]:bn},p=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Sb,fragmentShader:Eb}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let b=new mt;b.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ct(b,p),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let x=this.type;this.render=function(v,E,_){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||v.length===0)return;this.type===X0&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),P=s.state;P.setBlending(ii),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let C=x!==this.type;C&&E.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=v.length;A<L;A++){let D=v[A],U=D.shadow;if(U===void 0){lt("WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();i.multiply(V),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,U.mapSize.y=r.y));let O=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||C===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Eo){if(D.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Xt(i.x,i.y,{format:Ks,type:An,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),U.map.texture.name=D.name+".shadowMap",U.map.depthTexture=new Vs(i.x,i.y,Di),U.map.depthTexture.name=D.name+".shadowMapDepth",U.map.depthTexture.format=ls,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Tn,U.map.depthTexture.magFilter=Tn}else D.isPointLight?(U.map=new ku(i.x),U.map.depthTexture=new wc(i.x,Qi)):(U.map=new Xt(i.x,i.y),U.map.depthTexture=new Vs(i.x,i.y,Qi)),U.map.depthTexture.name=D.name+".shadowMap",U.map.depthTexture.format=ls,this.type===Sr?(U.map.depthTexture.compareFunction=O?Fu:Uu,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Tn,U.map.depthTexture.magFilter=Tn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let k=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();D.isPointLight!==!0&&U.updateMatrices(D,_);for(let z=0;z<k;z++){let K=U.getCamera(z);if(D.isPointLight){let le=U.camera,Me=U.matrix,Fe=D.distance||le.far;Fe!==le.far&&(le.far=Fe,le.updateProjectionMatrix()),tl.setFromMatrixPosition(D.matrixWorld),le.position.copy(tl),Yf.copy(le.position),Yf.add(Tb[z]),le.up.copy(wb[z]),le.lookAt(Yf),le.updateMatrixWorld(),Me.makeTranslation(-tl.x,-tl.y,-tl.z),em.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),U._frustum.setFromProjectionMatrix(em,le.coordinateSystem,le.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,z),s.clear();else{z===0&&(s.setRenderTarget(U.map),s.clear());let le=U.getViewport(z);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),P.viewport(o)}n=U.getFrustum(z),f(E,_,K,D,this.type)}U.isPointLightShadow!==!0&&this.type===Eo&&c(U,_),U.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(T,R,w)};function c(v,E){let _=e.update(S);p.defines.VSM_SAMPLES!==v.blurSamples&&(p.defines.VSM_SAMPLES=v.blurSamples,g.defines.VSM_SAMPLES=v.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),v.mapPass===null?v.mapPass=new Xt(i.x,i.y,{format:Ks,type:An}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),p.uniforms.shadow_pass.value=v.map.depthTexture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(E,null,_,p,S,null),g.uniforms.shadow_pass.value=v.mapPass.texture,g.uniforms.resolution.value.set(v.map.width,v.map.height),g.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(E,null,_,g,S,null)}function y(v,E,_,T){let R=null,w=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)R=w;else if(R=_.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=R.uuid,C=E.uuid,A=u[P];A===void 0&&(A={},u[P]=A);let L=A[C];L===void 0&&(L=R.clone(),A[C]=L,E.addEventListener("dispose",m)),R=L}if(R.visible=E.visible,R.wireframe=E.wireframe,T===Eo?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=s.properties.get(R);P.light=_}return R}function f(v,E,_,T,R){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Eo)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let C=e.update(v),A=v.material;if(Array.isArray(A)){let L=C.groups;for(let D=0,U=L.length;D<U;D++){let V=L[D],O=A[V.materialIndex];if(O&&O.visible){let k=y(v,O,T,R);v.onBeforeShadow(s,v,E,_,C,k,V),s.renderBufferDirect(_,null,C,k,v,V),v.onAfterShadow(s,v,E,_,C,k,V)}}}else if(A.visible){let L=y(v,A,T,R);v.onBeforeShadow(s,v,E,_,C,L,null),s.renderBufferDirect(_,null,C,L,v,null),v.onAfterShadow(s,v,E,_,C,L,null)}}let P=v.children;for(let C=0,A=P.length;C<A;C++)f(P[C],E,_,T,R)}function m(v){v.target.removeEventListener("dispose",m);for(let _ in u){let T=u[_],R=v.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Rb(s,e){function t(){let Y=!1,Le=new dt,me=null,De=new dt(0,0,0,0);return{setMask:function(ze){me!==ze&&!Y&&(s.colorMask(ze,ze,ze,ze),me=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,Ee,q,Ge,Gt){Gt===!0&&(ze*=Ge,Ee*=Ge,q*=Ge),Le.set(ze,Ee,q,Ge),De.equals(Le)===!1&&(s.clearColor(ze,Ee,q,Ge),De.copy(Le))},reset:function(){Y=!1,me=null,De.set(-1,0,0,0)}}}function n(){let Y=!1,Le=!1,me=null,De=null,ze=null;return{setReversed:function(Ee){if(Le!==Ee){let q=e.get("EXT_clip_control");Ee?q.clipControlEXT(q.LOWER_LEFT_EXT,q.ZERO_TO_ONE_EXT):q.clipControlEXT(q.LOWER_LEFT_EXT,q.NEGATIVE_ONE_TO_ONE_EXT),Le=Ee;let Ge=ze;ze=null,this.setClear(Ge)}},getReversed:function(){return Le},setTest:function(Ee){Ee?$(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Ee){me!==Ee&&!Y&&(s.depthMask(Ee),me=Ee)},setFunc:function(Ee){if(Le&&(Ee=wp[Ee]),De!==Ee){switch(Ee){case hc:s.depthFunc(s.NEVER);break;case fc:s.depthFunc(s.ALWAYS);break;case dc:s.depthFunc(s.LESS);break;case lo:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case vc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Le&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){Y=!1,me=null,De=null,ze=null,Le=!1}}}function i(){let Y=!1,Le=null,me=null,De=null,ze=null,Ee=null,q=null,Ge=null,Gt=null;return{setTest:function(Dt){Y||(Dt?$(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Dt){Le!==Dt&&!Y&&(s.stencilMask(Dt),Le=Dt)},setFunc:function(Dt,mi,gt){(me!==Dt||De!==mi||ze!==gt)&&(s.stencilFunc(Dt,mi,gt),me=Dt,De=mi,ze=gt)},setOp:function(Dt,mi,gt){(Ee!==Dt||q!==mi||Ge!==gt)&&(s.stencilOp(Dt,mi,gt),Ee=Dt,q=mi,Ge=gt)},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Gt!==Dt&&(s.clearStencil(Dt),Gt=Dt)},reset:function(){Y=!1,Le=null,me=null,De=null,ze=null,Ee=null,q=null,Ge=null,Gt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,u=new WeakMap,h={},d={},p={},g=new WeakMap,b=[],S=null,M=!1,x=null,c=null,y=null,f=null,m=null,v=null,E=null,_=new _e(0,0,0),T=0,R=!1,w=null,P=null,C=null,A=null,L=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=V>=2);let k=null,z={},K=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Me=new dt().fromArray(K),Fe=new dt().fromArray(le);function Ne(Y,Le,me,De){let ze=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(Y,Ee),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let q=0;q<me;q++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Le+q,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ee}let J={};J[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(s.DEPTH_TEST),o.setFunc(lo),ne(!1),de(hf),$(s.CULL_FACE),Te(ii);function $(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function ve(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function Ae(Y,Le){return p[Y]!==Le?(s.bindFramebuffer(Y,Le),p[Y]=Le,Y===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Le),Y===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function pe(Y,Le){let me=b,De=!1;if(Y){me=g.get(Le),me===void 0&&(me=[],g.set(Le,me));let ze=Y.textures;if(me.length!==ze.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,q=ze.length;Ee<q;Ee++)me[Ee]=s.COLOR_ATTACHMENT0+Ee;me.length=ze.length,De=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,De=!0);De&&s.drawBuffers(me)}function Oe(Y){return S!==Y?(s.useProgram(Y),S=Y,!0):!1}let Je={[Er]:s.FUNC_ADD,[Y0]:s.FUNC_SUBTRACT,[Z0]:s.FUNC_REVERSE_SUBTRACT};Je[$0]=s.MIN,Je[K0]=s.MAX;let je={[J0]:s.ZERO,[j0]:s.ONE,[Q0]:s.SRC_COLOR,[pf]:s.SRC_ALPHA,[rp]:s.SRC_ALPHA_SATURATE,[ip]:s.DST_COLOR,[tp]:s.DST_ALPHA,[ep]:s.ONE_MINUS_SRC_COLOR,[mf]:s.ONE_MINUS_SRC_ALPHA,[sp]:s.ONE_MINUS_DST_COLOR,[np]:s.ONE_MINUS_DST_ALPHA,[op]:s.CONSTANT_COLOR,[ap]:s.ONE_MINUS_CONSTANT_COLOR,[lp]:s.CONSTANT_ALPHA,[cp]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(Y,Le,me,De,ze,Ee,q,Ge,Gt,Dt){if(Y===ii){M===!0&&(ve(s.BLEND),M=!1);return}if(M===!1&&($(s.BLEND),M=!0),Y!==q0){if(Y!==x||Dt!==R){if((c!==Er||m!==Er)&&(s.blendEquation(s.FUNC_ADD),c=Er,m=Er),Dt)switch(Y){case To:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFunc(s.ONE,s.ONE);break;case ff:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case df:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case To:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ff:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case df:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",Y);break}y=null,f=null,v=null,E=null,_.set(0,0,0),T=0,x=Y,R=Dt}return}ze=ze||Le,Ee=Ee||me,q=q||De,(Le!==c||ze!==m)&&(s.blendEquationSeparate(Je[Le],Je[ze]),c=Le,m=ze),(me!==y||De!==f||Ee!==v||q!==E)&&(s.blendFuncSeparate(je[me],je[De],je[Ee],je[q]),y=me,f=De,v=Ee,E=q),(Ge.equals(_)===!1||Gt!==T)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Gt),_.copy(Ge),T=Gt),x=Y,R=!1}function nt(Y,Le){Y.side===bn?ve(s.CULL_FACE):$(s.CULL_FACE);let me=Y.side===Hn;Le&&(me=!me),ne(me),Y.blending===To&&Y.transparent===!1?Te(ii):Te(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let De=Y.stencilWrite;a.setTest(De),De&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ie(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Y){w!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),w=Y)}function de(Y){Y!==G0?($(s.CULL_FACE),Y!==P&&(Y===hf?s.cullFace(s.BACK):Y===W0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),P=Y}function j(Y){Y!==C&&(U&&s.lineWidth(Y),C=Y)}function ie(Y,Le,me){Y?($(s.POLYGON_OFFSET_FILL),(A!==Le||L!==me)&&(A=Le,L=me,o.getReversed()&&(Le=-Le),s.polygonOffset(Le,me))):ve(s.POLYGON_OFFSET_FILL)}function ee(Y){Y?$(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function ue(Y){Y===void 0&&(Y=s.TEXTURE0+D-1),k!==Y&&(s.activeTexture(Y),k=Y)}function F(Y,Le,me){me===void 0&&(k===null?me=s.TEXTURE0+D-1:me=k);let De=z[me];De===void 0&&(De={type:void 0,texture:void 0},z[me]=De),(De.type!==Y||De.texture!==Le)&&(k!==me&&(s.activeTexture(me),k=me),s.bindTexture(Y,Le||J[Y]),De.type=Y,De.texture=Le)}function be(){let Y=z[k];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function I(){try{s.texSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function G(){try{s.texSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function ce(){try{s.texStorage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function ge(){try{s.texStorage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function he(){try{s.texImage2D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function fe(){try{s.texImage3D(...arguments)}catch(Y){ft("WebGLState:",Y)}}function we(Y){return d[Y]!==void 0?d[Y]:s.getParameter(Y)}function We(Y,Le){d[Y]!==Le&&(s.pixelStorei(Y,Le),d[Y]=Le)}function Ce(Y){Me.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Ie(Y){Fe.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Fe.copy(Y))}function Ue(Y,Le){let me=u.get(Le);me===void 0&&(me=new WeakMap,u.set(Le,me));let De=me.get(Y);De===void 0&&(De=s.getUniformBlockIndex(Le,Y.name),me.set(Y,De))}function Qe(Y,Le){let De=u.get(Le).get(Y);l.get(Le)!==De&&(s.uniformBlockBinding(Le,De,Y.__bindingPointIndex),l.set(Le,De))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},k=null,z={},p={},g=new WeakMap,b=[],S=null,M=!1,x=null,c=null,y=null,f=null,m=null,v=null,E=null,_=new _e(0,0,0),T=0,R=!1,w=null,P=null,C=null,A=null,L=null,Me.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ve,bindFramebuffer:Ae,drawBuffers:pe,useProgram:Oe,setBlending:Te,setMaterial:nt,setFlipSided:ne,setCullFace:de,setLineWidth:j,setPolygonOffset:ie,setScissorTest:ee,activeTexture:ue,bindTexture:F,unbindTexture:be,compressedTexImage2D:te,compressedTexImage3D:N,texImage2D:he,texImage3D:fe,pixelStorei:We,getParameter:we,updateUBOMapping:Ue,uniformBlockBinding:Qe,texStorage2D:ce,texStorage3D:ge,texSubImage2D:I,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:Ce,viewport:Ie,reset:at}}function Cb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,h=new WeakMap,d=new Set,p,g=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,I){return b?new OffscreenCanvas(N,I):uo("canvas")}function M(N,I,G){let W=1,Q=te(N);if((Q.width>G||Q.height>G)&&(W=G/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ce=Math.floor(W*Q.width),ge=Math.floor(W*Q.height);p===void 0&&(p=S(ce,ge));let he=I?S(ce,ge):p;return he.width=ce,he.height=ge,he.getContext("2d").drawImage(N,0,0,ce,ge),lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+ge+")."),he}else return"data"in N&&lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function x(N){return N.generateMipmaps}function c(N){s.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function f(N,I,G,W,Q,ce=!1){if(N!==null){if(s[N]!==void 0)return s[N];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge;W&&(ge=e.get("EXT_texture_norm16"),ge||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=I;if(I===s.RED&&(G===s.FLOAT&&(he=s.R32F),G===s.HALF_FLOAT&&(he=s.R16F),G===s.UNSIGNED_BYTE&&(he=s.R8),G===s.UNSIGNED_SHORT&&ge&&(he=ge.R16_EXT),G===s.SHORT&&ge&&(he=ge.R16_SNORM_EXT)),I===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(he=s.R8UI),G===s.UNSIGNED_SHORT&&(he=s.R16UI),G===s.UNSIGNED_INT&&(he=s.R32UI),G===s.BYTE&&(he=s.R8I),G===s.SHORT&&(he=s.R16I),G===s.INT&&(he=s.R32I)),I===s.RG&&(G===s.FLOAT&&(he=s.RG32F),G===s.HALF_FLOAT&&(he=s.RG16F),G===s.UNSIGNED_BYTE&&(he=s.RG8),G===s.UNSIGNED_SHORT&&ge&&(he=ge.RG16_EXT),G===s.SHORT&&ge&&(he=ge.RG16_SNORM_EXT)),I===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(he=s.RG8UI),G===s.UNSIGNED_SHORT&&(he=s.RG16UI),G===s.UNSIGNED_INT&&(he=s.RG32UI),G===s.BYTE&&(he=s.RG8I),G===s.SHORT&&(he=s.RG16I),G===s.INT&&(he=s.RG32I)),I===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(he=s.RGB8UI),G===s.UNSIGNED_SHORT&&(he=s.RGB16UI),G===s.UNSIGNED_INT&&(he=s.RGB32UI),G===s.BYTE&&(he=s.RGB8I),G===s.SHORT&&(he=s.RGB16I),G===s.INT&&(he=s.RGB32I)),I===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),G===s.UNSIGNED_INT&&(he=s.RGBA32UI),G===s.BYTE&&(he=s.RGBA8I),G===s.SHORT&&(he=s.RGBA16I),G===s.INT&&(he=s.RGBA32I)),I===s.RGB&&(G===s.UNSIGNED_SHORT&&ge&&(he=ge.RGB16_EXT),G===s.SHORT&&ge&&(he=ge.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),I===s.RGBA){let fe=ce?ga:Rt.getTransfer(Q);G===s.FLOAT&&(he=s.RGBA32F),G===s.HALF_FLOAT&&(he=s.RGBA16F),G===s.UNSIGNED_BYTE&&(he=fe===kt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&ge&&(he=ge.RGBA16_EXT),G===s.SHORT&&ge&&(he=ge.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function m(N,I){let G;return N?I===null||I===Qi||I===Ao?G=s.DEPTH24_STENCIL8:I===Di?G=s.DEPTH32F_STENCIL8:I===wo&&(G=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Qi||I===Ao?G=s.DEPTH_COMPONENT24:I===Di?G=s.DEPTH_COMPONENT32F:I===wo&&(G=s.DEPTH_COMPONENT16),G}function v(N,I){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==Bt?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function E(N){let I=N.target;I.removeEventListener("dispose",E),T(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function _(N){let I=N.target;I.removeEventListener("dispose",_),w(I)}function T(N){let I=n.get(N);if(I.__webglInit===void 0)return;let G=N.source,W=g.get(G);if(W){let Q=W[I.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(N),Object.keys(W).length===0&&g.delete(G)}n.remove(N)}function R(N){let I=n.get(N);s.deleteTexture(I.__webglTexture);let G=N.source,W=g.get(G);delete W[I.__cacheKey],o.memory.textures--}function w(N){let I=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(I.__webglFramebuffer[W]))for(let Q=0;Q<I.__webglFramebuffer[W].length;Q++)s.deleteFramebuffer(I.__webglFramebuffer[W][Q]);else s.deleteFramebuffer(I.__webglFramebuffer[W]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[W])}else{if(Array.isArray(I.__webglFramebuffer))for(let W=0;W<I.__webglFramebuffer.length;W++)s.deleteFramebuffer(I.__webglFramebuffer[W]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let W=0;W<I.__webglColorRenderbuffer.length;W++)I.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[W]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let G=N.textures;for(let W=0,Q=G.length;W<Q;W++){let ce=n.get(G[W]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(G[W])}n.remove(N)}let P=0;function C(){P=0}function A(){return P}function L(N){P=N}function D(){let N=P;return N>=i.maxTextures&&lt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,N}function U(N){let I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function V(N,I){let G=n.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let W=N.image;if(W===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,N,I);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+I)}function O(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ve(G,N,I);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+I)}function k(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ve(G,N,I);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+I)}function z(N,I){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Ae(G,N,I);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+I)}let K={[As]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[xc]:s.MIRRORED_REPEAT},le={[Tn]:s.NEAREST,[fp]:s.NEAREST_MIPMAP_NEAREST,[Ya]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[Jc]:s.LINEAR_MIPMAP_NEAREST,[Pn]:s.LINEAR_MIPMAP_LINEAR},Me={[gp]:s.NEVER,[bp]:s.ALWAYS,[vp]:s.LESS,[Uu]:s.LEQUAL,[xp]:s.EQUAL,[Fu]:s.GEQUAL,[yp]:s.GREATER,[_p]:s.NOTEQUAL};function Fe(N,I){if(I.type===Di&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Bt||I.magFilter===Jc||I.magFilter===Ya||I.magFilter===Pn||I.minFilter===Bt||I.minFilter===Jc||I.minFilter===Ya||I.minFilter===Pn)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,K[I.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,K[I.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,K[I.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,le[I.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,le[I.minFilter]),I.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Me[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Tn||I.minFilter!==Ya&&I.minFilter!==Pn||I.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Ne(N,I){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",E));let W=I.source,Q=g.get(W);Q===void 0&&(Q={},g.set(W,Q));let ce=U(I);if(ce!==N.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ce].usedTimes++;let ge=Q[N.__cacheKey];ge!==void 0&&(Q[N.__cacheKey].usedTimes--,ge.usedTimes===0&&R(I)),N.__cacheKey=ce,N.__webglTexture=Q[ce].texture}return G}function J(N,I,G){return Math.floor(Math.floor(N/G)/I)}function $(N,I,G,W){let ce=N.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,I.width,I.height,G,W,I.data);else{ce.sort((We,Ce)=>We.start-Ce.start);let ge=0;for(let We=1;We<ce.length;We++){let Ce=ce[ge],Ie=ce[We],Ue=Ce.start+Ce.count,Qe=J(Ie.start,I.width,4),at=J(Ce.start,I.width,4);Ie.start<=Ue+1&&Qe===at&&J(Ie.start+Ie.count-1,I.width,4)===Qe?Ce.count=Math.max(Ce.count,Ie.start+Ie.count-Ce.start):(++ge,ce[ge]=Ie)}ce.length=ge+1;let he=t.getParameter(s.UNPACK_ROW_LENGTH),fe=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,I.width);for(let We=0,Ce=ce.length;We<Ce;We++){let Ie=ce[We],Ue=Math.floor(Ie.start/4),Qe=Math.ceil(Ie.count/4),at=Ue%I.width,Y=Math.floor(Ue/I.width),Le=Qe,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,at),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,at,Y,Le,me,G,W,I.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function ve(N,I,G){let W=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(W=s.TEXTURE_3D);let Q=Ne(N,I),ce=I.source;t.bindTexture(W,N.__webglTexture,s.TEXTURE0+G);let ge=n.get(ce);if(ce.version!==ge.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let me=Rt.getPrimaries(Rt.workingColorSpace),De=I.colorSpace===si?null:Rt.getPrimaries(I.colorSpace),ze=I.colorSpace===si||me===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment);let fe=M(I.image,!1,i.maxTextureSize);fe=be(I,fe);let we=r.convert(I.format,I.colorSpace),We=r.convert(I.type),Ce=f(I.internalFormat,we,We,I.normalized,I.colorSpace,I.isVideoTexture);Fe(W,I);let Ie,Ue=I.mipmaps,Qe=I.isVideoTexture!==!0,at=ge.__version===void 0||Q===!0,Y=ce.dataReady,Le=v(I,fe);if(I.isDepthTexture)Ce=m(I.format===Zs,I.type),at&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,we,We,null));else if(I.isDataTexture)if(Ue.length>0){Qe&&at&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,Ue[0].width,Ue[0].height);for(let me=0,De=Ue.length;me<De;me++)Ie=Ue[me],Qe?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ie.width,Ie.height,we,We,Ie.data):t.texImage2D(s.TEXTURE_2D,me,Ce,Ie.width,Ie.height,0,we,We,Ie.data);I.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,fe.width,fe.height),Y&&$(I,fe,we,We)):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,we,We,fe.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ce,Ue[0].width,Ue[0].height,fe.depth);for(let me=0,De=Ue.length;me<De;me++)if(Ie=Ue[me],I.format!==Kn)if(we!==null)if(Qe){if(Y)if(I.layerUpdates.size>0){let ze=Ff(Ie.width,Ie.height,I.format,I.type);for(let Ee of I.layerUpdates){let q=Ie.data.subarray(Ee*ze/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Ee,Ie.width,Ie.height,1,we,q)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ie.width,Ie.height,fe.depth,we,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ce,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ie.width,Ie.height,fe.depth,we,We,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Ce,Ie.width,Ie.height,fe.depth,0,we,We,Ie.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Qe&&at&&t.texStorage2D(s.TEXTURE_2D,Le,Ce,Ue[0].width,Ue[0].height);for(let me=0,De=Ue.length;me<De;me++)Ie=Ue[me],I.format!==Kn?we!==null?Qe?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Ce,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ie.width,Ie.height,we,We,Ie.data):t.texImage2D(s.TEXTURE_2D,me,Ce,Ie.width,Ie.height,0,we,We,Ie.data)}else if(I.isDataArrayTexture)if(Qe){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ce,fe.width,fe.height,fe.depth),Y)if(I.layerUpdates.size>0){let me=Ff(fe.width,fe.height,I.format,I.type);for(let De of I.layerUpdates){let ze=fe.data.subarray(De*me/fe.data.BYTES_PER_ELEMENT,(De+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,fe.width,fe.height,1,we,We,ze)}I.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,We,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,we,We,fe.data);else if(I.isData3DTexture)Qe?(at&&t.texStorage3D(s.TEXTURE_3D,Le,Ce,fe.width,fe.height,fe.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,We,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,we,We,fe.data);else if(I.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(s.TEXTURE_2D,Le,Ce,fe.width,fe.height);else{let me=fe.width,De=fe.height;for(let ze=0;ze<Le;ze++)t.texImage2D(s.TEXTURE_2D,ze,Ce,me,De,0,we,We,null),me>>=1,De>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in s){let me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),fe.parentNode!==me){me.appendChild(fe),d.add(I),me.onpaint=De=>{let ze=De.changedElements;for(let Ee of d)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,fe);else{let ze=s.RGBA,Ee=s.RGBA,q=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,Ee,q,fe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Qe&&at){let me=te(Ue[0]);t.texStorage2D(s.TEXTURE_2D,Le,Ce,me.width,me.height)}for(let me=0,De=Ue.length;me<De;me++)Ie=Ue[me],Qe?Y&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,we,We,Ie):t.texImage2D(s.TEXTURE_2D,me,Ce,we,We,Ie);I.generateMipmaps=!1}else if(Qe){if(at){let me=te(fe);t.texStorage2D(s.TEXTURE_2D,Le,Ce,me.width,me.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,We,fe)}else t.texImage2D(s.TEXTURE_2D,0,Ce,we,We,fe);x(I)&&c(W),ge.__version=ce.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Ae(N,I,G){if(I.image.length!==6)return;let W=Ne(N,I),Q=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);let ce=n.get(Q);if(Q.version!==ce.__version||W===!0){t.activeTexture(s.TEXTURE0+G);let ge=Rt.getPrimaries(Rt.workingColorSpace),he=I.colorSpace===si?null:Rt.getPrimaries(I.colorSpace),fe=I.colorSpace===si||ge===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let we=I.isCompressedTexture||I.image[0].isCompressedTexture,We=I.image[0]&&I.image[0].isDataTexture,Ce=[];for(let Ee=0;Ee<6;Ee++)!we&&!We?Ce[Ee]=M(I.image[Ee],!0,i.maxCubemapSize):Ce[Ee]=We?I.image[Ee].image:I.image[Ee],Ce[Ee]=be(I,Ce[Ee]);let Ie=Ce[0],Ue=r.convert(I.format,I.colorSpace),Qe=r.convert(I.type),at=f(I.internalFormat,Ue,Qe,I.normalized,I.colorSpace),Y=I.isVideoTexture!==!0,Le=ce.__version===void 0||W===!0,me=Q.dataReady,De=v(I,Ie);Fe(s.TEXTURE_CUBE_MAP,I);let ze;if(we){Y&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){ze=Ce[Ee].mipmaps;for(let q=0;q<ze.length;q++){let Ge=ze[q];I.format!==Kn?Ue!==null?Y?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q,0,0,Ge.width,Ge.height,Ue,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q,at,Ge.width,Ge.height,0,Ge.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q,0,0,Ge.width,Ge.height,Ue,Qe,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q,at,Ge.width,Ge.height,0,Ue,Qe,Ge.data)}}}else{if(ze=I.mipmaps,Y&&Le){ze.length>0&&De++;let Ee=te(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(We){Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ce[Ee].width,Ce[Ee].height,Ue,Qe,Ce[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ce[Ee].width,Ce[Ee].height,0,Ue,Qe,Ce[Ee].data);for(let q=0;q<ze.length;q++){let Gt=ze[q].image[Ee].image;Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q+1,0,0,Gt.width,Gt.height,Ue,Qe,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q+1,at,Gt.width,Gt.height,0,Ue,Qe,Gt.data)}}else{Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue,Qe,Ce[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ue,Qe,Ce[Ee]);for(let q=0;q<ze.length;q++){let Ge=ze[q];Y?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q+1,0,0,Ue,Qe,Ge.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,q+1,at,Ue,Qe,Ge.image[Ee])}}}x(I)&&c(s.TEXTURE_CUBE_MAP),ce.__version=Q.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function pe(N,I,G,W,Q,ce){let ge=r.convert(G.format,G.colorSpace),he=r.convert(G.type),fe=f(G.internalFormat,ge,he,G.normalized,G.colorSpace),we=n.get(I),We=n.get(G);if(We.__renderTarget=I,!we.__hasExternalTextures){let Ce=Math.max(1,I.width>>ce),Ie=Math.max(1,I.height>>ce);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,fe,Ce,Ie,I.depth,0,ge,he,null):t.texImage2D(Q,ce,fe,Ce,Ie,0,ge,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ue(I)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Q,We.__webglTexture,0,ee(I)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Q,We.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(N,I,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),I.depthBuffer){let W=I.depthTexture,Q=W&&W.isDepthTexture?W.type:null,ce=m(I.stencilBuffer,Q),ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ue(I)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee(I),ce,I.width,I.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee(I),ce,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,N)}else{let W=I.textures;for(let Q=0;Q<W.length;Q++){let ce=W[Q],ge=r.convert(ce.format,ce.colorSpace),he=r.convert(ce.type),fe=f(ce.internalFormat,ge,he,ce.normalized,ce.colorSpace);ue(I)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee(I),fe,I.width,I.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee(I),fe,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,fe,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(N,I,G){let W=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(I.depthTexture);if(Q.__renderTarget=I,(!Q.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,I.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,I.depthTexture);let we=r.convert(I.depthTexture.format),We=r.convert(I.depthTexture.type),Ce;I.depthTexture.format===ls?Ce=s.DEPTH_COMPONENT24:I.depthTexture.format===Zs&&(Ce=s.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ce,I.width,I.height,0,we,We,null)}}else V(I.depthTexture,0);let ce=Q.__webglTexture,ge=ee(I),he=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,fe=I.depthTexture.format===Zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(I.depthTexture.format===ls)ue(I)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,he,ce,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,fe,he,ce,0);else if(I.depthTexture.format===Zs)ue(I)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,he,ce,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,fe,he,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(N){let I=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==N.depthTexture){let W=N.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),W){let Q=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),I.__depthDisposeCallback=Q}I.__boundDepthTexture=W}if(N.depthTexture&&!I.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)Je(I.__webglFramebuffer[W],N,W);else{let W=N.texture.mipmaps;W&&W.length>0?Je(I.__webglFramebuffer[0],N,0):Je(I.__webglFramebuffer,N,0)}else if(G){I.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[W]),I.__webglDepthbuffer[W]===void 0)I.__webglDepthbuffer[W]=s.createRenderbuffer(),Oe(I.__webglDepthbuffer[W],N,!1);else{let Q=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=I.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ce)}}else{let W=N.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=s.createRenderbuffer(),Oe(I.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=I.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(N,I,G){let W=n.get(N);I!==void 0&&pe(W.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&je(N)}function nt(N){let I=N.texture,G=n.get(N),W=n.get(I);N.addEventListener("dispose",_);let Q=N.textures,ce=N.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=I.version,o.memory.textures++),ce){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let fe=0;fe<I.mipmaps.length;fe++)G.__webglFramebuffer[he][fe]=s.createFramebuffer()}else G.__webglFramebuffer[he]=s.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<I.mipmaps.length;he++)G.__webglFramebuffer[he]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ge)for(let he=0,fe=Q.length;he<fe;he++){let we=n.get(Q[he]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&ue(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let fe=Q[he];G.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[he]);let we=r.convert(fe.format,fe.colorSpace),We=r.convert(fe.type),Ce=f(fe.internalFormat,we,We,fe.normalized,fe.colorSpace,N.isXRRenderTarget===!0),Ie=ee(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Ce,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,G.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,I);for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0)for(let fe=0;fe<I.mipmaps.length;fe++)pe(G.__webglFramebuffer[he][fe],N,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else pe(G.__webglFramebuffer[he],N,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(I)&&c(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let he=0,fe=Q.length;he<fe;he++){let we=Q[he],We=n.get(we),Ce=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,We.__webglTexture),Fe(Ce,we),pe(G.__webglFramebuffer,N,we,s.COLOR_ATTACHMENT0+he,Ce,0),x(we)&&c(Ce)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Fe(he,I),I.mipmaps&&I.mipmaps.length>0)for(let fe=0;fe<I.mipmaps.length;fe++)pe(G.__webglFramebuffer[fe],N,I,s.COLOR_ATTACHMENT0,he,fe);else pe(G.__webglFramebuffer,N,I,s.COLOR_ATTACHMENT0,he,0);x(I)&&c(he),t.unbindTexture()}N.depthBuffer&&je(N)}function ne(N){let I=N.textures;for(let G=0,W=I.length;G<W;G++){let Q=I[G];if(x(Q)){let ce=y(N),ge=n.get(Q).__webglTexture;t.bindTexture(ce,ge),c(ce),t.unbindTexture()}}}let de=[],j=[];function ie(N){if(N.samples>0){if(ue(N)===!1){let I=N.textures,G=N.width,W=N.height,Q=s.COLOR_BUFFER_BIT,ce=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(N),he=I.length>1;if(he)for(let we=0;we<I.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let fe=N.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let we=0;we<I.length;we++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);let We=n.get(I[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,G,W,0,0,G,W,Q,s.NEAREST),l===!0&&(de.length=0,j.length=0,de.push(s.COLOR_ATTACHMENT0+we),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(de.push(ce),j.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<I.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);let We=n.get(I[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let I=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])}}}function ee(N){return Math.min(i.maxSamples,N.samples)}function ue(N){let I=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function F(N){let I=o.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())}function be(N,I){let G=N.colorSpace,W=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==ma&&G!==si&&(Rt.getTransfer(G)===kt?(W!==Kn||Q!==$n)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),I}function te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=C,this.getTextureUnits=A,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Te,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pb(s,e){function t(n,i=si){let r,o=Rt.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===Qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ef)return s.BYTE;if(n===Tf)return s.SHORT;if(n===wo)return s.UNSIGNED_SHORT;if(n===jc)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===Di)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Rf)return s.ALPHA;if(n===Cf)return s.RGB;if(n===Kn)return s.RGBA;if(n===ls)return s.DEPTH_COMPONENT;if(n===Zs)return s.DEPTH_STENCIL;if(n===$s)return s.RED;if(n===tu)return s.RED_INTEGER;if(n===Ks)return s.RG;if(n===nu)return s.RG_INTEGER;if(n===iu)return s.RGBA_INTEGER;if(n===Za||n===$a||n===Ka||n===Ja)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ou)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===ja||n===du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lu||n===cu)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return r.COMPRESSED_R11_EAC;if(n===fu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===du)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===bu||n===Mu||n===Su||n===Eu||n===Tu||n===wu||n===Au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_u)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Su)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ru)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Lu||n===Qa||n===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Iu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ut({vertexShader:Ib,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends cs{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,p=null,g=null,b=null,S=typeof XRWebGLBinding<"u",M=new td,x={},c=t.getContextAttributes(),y=null,f=null,m=[],v=[],E=new Pe,_=null,T=null,R=new kn;R.viewport=new dt;let w=new kn;w.viewport=new dt;let P=[R,w],C=new Yc,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=m[J];return $===void 0&&($=new po,m[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=m[J];return $===void 0&&($=new po,m[J]=$),$.getGripSpace()},this.getHand=function(J){let $=m[J];return $===void 0&&($=new po,m[J]=$),$.getHandSpace()};function D(J){let $=v.indexOf(J.inputSource);if($===-1)return;let ve=m[$];ve!==void 0&&(ve.update(J.inputSource,J.frame,u||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",V);for(let J=0;J<m.length;J++){let $=v[J];$!==null&&(v[J]=null,m[J].disconnect($))}A=null,L=null,M.reset();for(let J in x)delete x[J];if(e.setRenderTarget(y),g=null,p=null,d=null,i=null,f=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",U),i.addEventListener("inputsourceschange",V),c.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,pe=null;c.depth&&(pe=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=c.stencil?Zs:ls,Ae=c.stencil?Ao:Qi);let Oe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Oe),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Xt(p.textureWidth,p.textureHeight,{format:Kn,type:$n,depthTexture:new Vs(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ve={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Xt(g.framebufferWidth,g.framebufferHeight,{format:Kn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(J){for(let $=0;$<J.removed.length;$++){let ve=J.removed[$],Ae=v.indexOf(ve);Ae>=0&&(v[Ae]=null,m[Ae].disconnect(ve))}for(let $=0;$<J.added.length;$++){let ve=J.added[$],Ae=v.indexOf(ve);if(Ae===-1){for(let Oe=0;Oe<m.length;Oe++)if(Oe>=v.length){v.push(ve),Ae=Oe;break}else if(v[Oe]===null){v[Oe]=ve,Ae=Oe;break}if(Ae===-1)break}let pe=m[Ae];pe&&pe.connect(ve)}}let O=new H,k=new H;function z(J,$,ve){O.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(ve.matrixWorld);let Ae=O.distanceTo(k),pe=$.projectionMatrix.elements,Oe=ve.projectionMatrix.elements,Je=pe[14]/(pe[10]-1),je=pe[14]/(pe[10]+1),Te=(pe[9]+1)/pe[5],nt=(pe[9]-1)/pe[5],ne=(pe[8]-1)/pe[0],de=(Oe[8]+1)/Oe[0],j=Je*ne,ie=Je*de,ee=Ae/(-ne+de),ue=ee*-ne;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ue),J.translateZ(ee),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pe[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let F=Je+ee,be=je+ee,te=j-ue,N=ie+(Ae-ue),I=Te*je/be*F,G=nt*je/be*F;J.projectionMatrix.makePerspective(te,N,I,G,F,be),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function K(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let $=J.near,ve=J.far;M.texture!==null&&(M.depthNear>0&&($=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),C.near=w.near=R.near=$,C.far=w.far=R.far=ve,(A!==C.near||L!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,L=C.far),C.layers.mask=J.layers.mask|6,R.layers.mask=C.layers.mask&-5,w.layers.mask=C.layers.mask&-3;let Ae=J.parent,pe=C.cameras;K(C,Ae);for(let Oe=0;Oe<pe.length;Oe++)K(pe[Oe],Ae);pe.length===2?z(C,R,w):C.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),le(J,C,Ae)};function le(J,$,ve){ve===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=va*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)},this.getCameraTexture=function(J){return x[J]};let Me=null;function Fe(J,$){if(h=$.getViewerPose(u||o),b=$,h!==null){let ve=h.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let Ae=!1;ve.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let je=0;je<ve.length;je++){let Te=ve[je],nt=null;if(g!==null)nt=g.getViewport(Te);else{let de=d.getViewSubImage(p,Te);nt=de.viewport,je===0&&(e.setRenderTargetTextures(f,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(f))}let ne=P[je];ne===void 0&&(ne=new kn,ne.layers.enable(je),ne.viewport=new dt,P[je]=ne),ne.matrix.fromArray(Te.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Te.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(nt.x,nt.y,nt.width,nt.height),je===0&&(C.matrix.copy(ne.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(ne)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let je=d.getDepthInformation(ve[0]);je&&je.isValid&&je.texture&&M.init(je,i.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<ve.length;je++){let Te=ve[je].camera;if(Te){let nt=x[Te];nt||(nt=new wa,x[Te]=nt);let ne=d.getCameraImage(Te);nt.sourceTexture=ne}}}}for(let ve=0;ve<m.length;ve++){let Ae=v[ve],pe=m[ve];Ae!==null&&pe!==void 0&&pe.update(Ae,$,u||o)}Me&&Me(J,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),b=null}let Ne=new tm;Ne.setAnimationLoop(Fe),this.setAnimationLoop=function(J){Me=J},this.dispose=function(){}}},Db=new et,am=new pt;am.set(-1,0,0,0,1,0,0,0,1);function Nb(s,e){function t(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function n(M,x){x.color.getRGB(M.fogColor.value,Df(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function i(M,x,c,y,f){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(M,x):x.isMeshLambertMaterial?(r(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(M,x),d(M,x)):x.isMeshPhongMaterial?(r(M,x),h(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(M,x),p(M,x),x.isMeshPhysicalMaterial&&g(M,x,f)):x.isMeshMatcapMaterial?(r(M,x),b(M,x)):x.isMeshDepthMaterial?r(M,x):x.isMeshDistanceMaterial?(r(M,x),S(M,x)):x.isMeshNormalMaterial?r(M,x):x.isLineBasicMaterial?(o(M,x),x.isLineDashedMaterial&&a(M,x)):x.isPointsMaterial?l(M,x,c,y):x.isSpriteMaterial?u(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,t(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Hn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,t(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Hn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,t(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,t(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);let c=e.get(x),y=c.envMap,f=c.envMapRotation;y&&(M.envMap.value=y,M.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(f)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(am),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,M.aoMapTransform))}function o(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform))}function a(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function l(M,x,c,y){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*c,M.scale.value=y*.5,x.map&&(M.map.value=x.map,t(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function h(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function d(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function p(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function g(M,x,c){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=c.texture,M.transmissionSamplerSize.value.set(c.width,c.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function S(M,x){let c=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(c.matrixWorld),M.nearDistance.value=c.shadow.camera.near,M.farDistance.value=c.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ub(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(f,m){let v=m.program;n.uniformBlockBinding(f,v)}function u(f,m){let v=i[f.id];v===void 0&&(M(f),v=h(f),i[f.id]=v,f.addEventListener("dispose",c));let E=m.program;n.updateUBOMapping(f,E);let _=e.render.frame;r[f.id]!==_&&(p(f),r[f.id]=_)}function h(f){let m=d();f.__bindingPointIndex=m;let v=s.createBuffer(),E=f.__size,_=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,m,v),v}function d(){for(let f=0;f<a;f++)if(o.indexOf(f)===-1)return o.push(f),f;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(f){let m=i[f.id],v=f.uniforms,E=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,m);for(let _=0,T=v.length;_<T;_++){let R=v[_];if(Array.isArray(R))for(let w=0,P=R.length;w<P;w++)g(R[w],_,w,E);else g(R,_,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(f,m,v,E){if(S(f,m,v,E)===!0){let _=f.__offset,T=f.value;if(Array.isArray(T)){let R=0;for(let w=0;w<T.length;w++){let P=T[w],C=x(P);b(P,f.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(T,f.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,f.__data)}}function b(f,m,v){typeof f=="number"||typeof f=="boolean"?m[0]=f:f.isMatrix3?(m[0]=f.elements[0],m[1]=f.elements[1],m[2]=f.elements[2],m[3]=0,m[4]=f.elements[3],m[5]=f.elements[4],m[6]=f.elements[5],m[7]=0,m[8]=f.elements[6],m[9]=f.elements[7],m[10]=f.elements[8],m[11]=0):ArrayBuffer.isView(f)?m.set(new f.constructor(f.buffer,f.byteOffset,m.length)):f.toArray(m,v)}function S(f,m,v,E){let _=f.value,T=m+"_"+v;if(E[T]===void 0)return typeof _=="number"||typeof _=="boolean"?E[T]=_:ArrayBuffer.isView(_)?E[T]=_.slice():E[T]=_.clone(),!0;{let R=E[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return E[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function M(f){let m=f.uniforms,v=0,E=16;for(let T=0,R=m.length;T<R;T++){let w=Array.isArray(m[T])?m[T]:[m[T]];for(let P=0,C=w.length;P<C;P++){let A=w[P],L=Array.isArray(A.value)?A.value:[A.value];for(let D=0,U=L.length;D<U;D++){let V=L[D],O=x(V),k=v%E,z=k%O.boundary,K=k+z;v+=z,K!==0&&E-K<O.storage&&(v+=E-K),A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,v+=O.storage}}}let _=v%E;return _>0&&(v+=E-_),f.__size=v,f.__cache={},this}function x(f){let m={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(m.boundary=4,m.storage=4):f.isVector2?(m.boundary=8,m.storage=8):f.isVector3||f.isColor?(m.boundary=16,m.storage=12):f.isVector4?(m.boundary=16,m.storage=16):f.isMatrix3?(m.boundary=48,m.storage=48):f.isMatrix4?(m.boundary=64,m.storage=64):f.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(f)?(m.boundary=16,m.storage=f.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",f),m}function c(f){let m=f.target;m.removeEventListener("dispose",c);let v=o.indexOf(m.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[m.id]),delete i[m.id],delete r[m.id]}function y(){for(let f in i)s.deleteBuffer(i[f]);o=[],i={},r={}}return{bind:l,update:u,dispose:y}}var Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ds=null;function Bb(){return ds===null&&(ds=new $i(Fb,16,16,Ks,An),ds.name="DFG_LUT",ds.minFilter=Bt,ds.magFilter=Bt,ds.wrapS=as,ds.wrapT=as,ds.generateMipmaps=!1,ds.needsUpdate=!0),ds}var Hu=class{constructor(e={}){let{canvas:t=Sp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:g=$n}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=o;let S=g,M=new Set([iu,nu,tu]),x=new Set([$n,Qi,wo,Ao,Qc,eu]),c=new Uint32Array(4),y=new Int32Array(4),f=new H,m=null,v=null,E=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,w=!1,P=null,C=null,A=null,L=null;this._outputColorSpace=Wt;let D=0,U=0,V=null,O=-1,k=null,z=new dt,K=new dt,le=null,Me=new _e(0),Fe=0,Ne=t.width,J=t.height,$=1,ve=null,Ae=null,pe=new dt(0,0,Ne,J),Oe=new dt(0,0,Ne,J),Je=!1,je=new go,Te=!1,nt=!1,ne=new et,de=new H,j=new dt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ue(){return V===null?$:1}let F=n;function be(B,Z){return t.getContext(B,Z)}let te,N,I,G,W,Q,ce,ge,he,fe,we,We,Ce,Ie,Ue,Qe,at,Y,Le,me,De,ze,Ee;try{let B={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",mi,!1),F===null){let Z="webgl2";if(F=be(Z,B),F===null)throw be(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}q()}catch(B){throw t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),ft("WebGLRenderer: "+B.message),B}function q(){te=new Wy(F),te.init(),De=new Pb(F,te),N=new Ny(F,te,e,De),I=new Rb(F,te),N.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),C=F.createFramebuffer(),A=F.createFramebuffer(),L=F.createFramebuffer(),G=new Yy(F),W=new pb,Q=new Cb(F,te,I,W,N,De,G),ce=new Gy(R),ge=new $v(F),ze=new Ly(F,ge),he=new Xy(F,ge,G,ze),fe=new $y(F,he,ge,ze,G),Y=new Zy(F,N,Q),Ue=new Uy(W),we=new db(R,ce,te,N,ze,Ue),We=new Nb(R,W),Ce=new gb,Ie=new Mb(te),at=new Iy(R,ce,I,fe,b,l),Qe=new Ab(R,fe,N),Ee=new Ub(F,G,N,I),Le=new Dy(F,te,G),me=new qy(F,te,G),G.programs=we.programs,R.capabilities=N,R.extensions=te,R.properties=W,R.renderLists=Ce,R.shadowMap=Qe,R.state=I,R.info=G}S!==$n&&(T=new Jy(S,t.width,t.height,a,i,r));let Ge=new nd(R,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let B=te.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=te.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(B){B!==void 0&&($=B,this.setSize(Ne,J,!1))},this.getSize=function(B){return B.set(Ne,J)},this.setSize=function(B,Z,re=!0){if(Ge.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=B,J=Z,t.width=Math.floor(B*$),t.height=Math.floor(Z*$),re===!0&&(t.style.width=B+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,B,Z)},this.getDrawingBufferSize=function(B){return B.set(Ne*$,J*$).floor()},this.setDrawingBufferSize=function(B,Z,re){Ne=B,J=Z,$=re,t.width=Math.floor(B*re),t.height=Math.floor(Z*re),this.setViewport(0,0,B,Z)},this.setEffects=function(B){if(S===$n){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let Z=0;Z<B.length;Z++)if(B[Z].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(pe)},this.setViewport=function(B,Z,re,oe){B.isVector4?pe.set(B.x,B.y,B.z,B.w):pe.set(B,Z,re,oe),I.viewport(z.copy(pe).multiplyScalar($).round())},this.getScissor=function(B){return B.copy(Oe)},this.setScissor=function(B,Z,re,oe){B.isVector4?Oe.set(B.x,B.y,B.z,B.w):Oe.set(B,Z,re,oe),I.scissor(K.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(B){I.setScissorTest(Je=B)},this.setOpaqueSort=function(B){ve=B},this.setTransparentSort=function(B){Ae=B},this.getClearColor=function(B){return B.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(B=!0,Z=!0,re=!0){let oe=0;if(B){let ae=!1;if(V!==null){let He=V.texture.format;ae=M.has(He)}if(ae){let He=V.texture.type,Xe=x.has(He),ke=at.getClearColor(),$e=at.getClearAlpha(),tt=ke.r,Ye=ke.g,yt=ke.b;Xe?(c[0]=tt,c[1]=Ye,c[2]=yt,c[3]=$e,F.clearBufferuiv(F.COLOR,0,c)):(y[0]=tt,y[1]=Ye,y[2]=yt,y[3]=$e,F.clearBufferiv(F.COLOR,0,y))}else oe|=F.COLOR_BUFFER_BIT}Z&&(oe|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),P=B},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),at.dispose(),Ce.dispose(),Ie.dispose(),W.dispose(),ce.dispose(),fe.dispose(),ze.dispose(),Ee.dispose(),we.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ns),Ge.removeEventListener("sessionend",Gn),Ri.stop()};function Gt(B){B.preventDefault(),If("WebGLRenderer: Context Lost."),w=!0}function Dt(){If("WebGLRenderer: Context Restored."),w=!1;let B=G.autoReset,Z=Qe.enabled,re=Qe.autoUpdate,oe=Qe.needsUpdate,ae=Qe.type;q(),G.autoReset=B,Qe.enabled=Z,Qe.autoUpdate=re,Qe.needsUpdate=oe,Qe.type=ae}function mi(B){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function gt(B){let Z=B.target;Z.removeEventListener("dispose",gt),Tt(Z)}function Tt(B){zt(B),W.remove(B)}function zt(B){let Z=W.get(B).programs;Z!==void 0&&(Z.forEach(function(re){we.releaseProgram(re)}),B.isShaderMaterial&&we.releaseShaderCache(B))}this.renderBufferDirect=function(B,Z,re,oe,ae,He){Z===null&&(Z=ie);let Xe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,ke=Al(B,Z,re,oe,ae);I.setMaterial(oe,Xe);let $e=re.index,tt=1;if(oe.wireframe===!0){if($e=he.getWireframeAttribute(re),$e===void 0)return;tt=2}let Ye=re.drawRange,yt=re.attributes.position,Ke=Ye.start*tt,It=(Ye.start+Ye.count)*tt;He!==null&&(Ke=Math.max(Ke,He.start*tt),It=Math.min(It,(He.start+He.count)*tt)),$e!==null?(Ke=Math.max(Ke,0),It=Math.min(It,$e.count)):yt!=null&&(Ke=Math.max(Ke,0),It=Math.min(It,yt.count));let un=It-Ke;if(un<0||un===1/0)return;ze.setup(ae,oe,ke,re,$e);let qt,Ht=Le;if($e!==null&&(qt=ge.get($e),Ht=me,Ht.setIndex(qt)),ae.isMesh)oe.wireframe===!0?(I.setLineWidth(oe.wireframeLinewidth*ue()),Ht.setMode(F.LINES)):Ht.setMode(F.TRIANGLES);else if(ae.isLine){let mn=oe.linewidth;mn===void 0&&(mn=1),I.setLineWidth(mn*ue()),ae.isLineSegments?Ht.setMode(F.LINES):ae.isLineLoop?Ht.setMode(F.LINE_LOOP):Ht.setMode(F.LINE_STRIP)}else ae.isPoints?Ht.setMode(F.POINTS):ae.isSprite&&Ht.setMode(F.TRIANGLES);if(ae.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let mn=ae._multiDrawStarts,qe=ae._multiDrawCounts,_n=ae._multiDrawCount,bt=$e?ge.get($e).bytesPerElement:1,jn=W.get(oe).currentProgram.getUniforms();for(let Qn=0;Qn<_n;Qn++)jn.setValue(F,"_gl_DrawID",Qn),Ht.render(mn[Qn]/bt,qe[Qn])}else if(ae.isInstancedMesh)Ht.renderInstances(Ke,un,ae.count);else if(re.isInstancedBufferGeometry){let mn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qe=Math.min(re.instanceCount,mn);Ht.renderInstances(Ke,un,qe)}else Ht.render(Ke,un)};function Nt(B,Z,re,oe){P!==null&&B.isNodeMaterial&&P.setObject(oe,B),Te===!0&&Ue.setState(B,re,!1),B.transparent===!0&&B.side===bn&&B.forceSinglePass===!1?(B.side=Hn,B.needsUpdate=!0,xs(B,Z,oe),B.side=fs,B.needsUpdate=!0,xs(B,Z,oe),B.side=bn):xs(B,Z,oe)}this.compile=function(B,Z,re=null){re===null&&(re=B),P!==null&&P.renderStart(B,Z,re),v=Ie.get(re),v.init(Z),_.push(v),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(v.pushLight(ae),ae.castShadow&&v.pushShadow(ae))}),B!==re&&B.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(v.pushLight(ae),ae.castShadow&&v.pushShadow(ae))}),v.setupLights(),P!==null&&P.updateLights(v.state.lightsArray),nt=this.localClippingEnabled,Te=Ue.init(this.clippingPlanes,nt),Te===!0&&Ue.setGlobalState(this.clippingPlanes,Z),P!==null&&Qe.render(v.state.shadowsArray,re,Z);let oe=new Set;return B.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let He=ae.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){let ke=He[Xe];Nt(ke,re,Z,ae),oe.add(ke)}else Nt(He,re,Z,ae),oe.add(He)}),v=_.pop(),P!==null&&P.renderEnd(),oe},this.compileAsync=function(B,Z,re=null){let oe=this.compile(B,Z,re);return new Promise(ae=>{function He(){if(oe.forEach(function(Xe){let $e=W.get(Xe).currentProgram;($e===void 0||$e.isReady())&&oe.delete(Xe)}),oe.size===0){ae(B);return}setTimeout(He,10)}te.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Jo=null;function lr(B){Jo&&Jo(B)}function Ns(){Ri.stop()}function Gn(){Ri.start()}let Ri=new tm;Ri.setAnimationLoop(lr),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(B){Jo=B,Ge.setAnimationLoop(B),B===null?Ri.stop():Ri.start()},Ge.addEventListener("sessionstart",Ns),Ge.addEventListener("sessionend",Gn),this.render=function(B,Z){if(Z!==void 0&&Z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P!==null&&P.renderStart(B,Z);let re=Ge.enabled===!0&&Ge.isPresenting===!0,oe=T!==null&&(V===null||re)&&T.begin(R,V);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Z),Z=Ge.getCamera()),B.isScene===!0&&B.onBeforeRender(R,B,Z,V),v=Ie.get(B,_.length),v.init(Z),v.state.textureUnits=Q.getTextureUnits(),_.push(v),ne.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),je.setFromProjectionMatrix(ne,Zi,Z.reversedDepth),nt=this.localClippingEnabled,Te=Ue.init(this.clippingPlanes,nt),m=Ce.get(B,E.length),m.init(),E.push(m),Ge.enabled===!0&&Ge.isPresenting===!0){let Xe=R.xr.getDepthSensingMesh();Xe!==null&&cr(Xe,Z,-1/0,R.sortObjects)}cr(B,Z,0,R.sortObjects),m.finish(),P!==null&&P.updateLights(v.state.lightsArray),R.sortObjects===!0&&m.sort(ve,Ae),ee=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ee&&at.addToRenderList(m,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ue.beginShadows();let ae=v.state.shadowsArray;if(Qe.render(ae,B,Z),Te===!0&&Ue.endShadows(),(oe&&T.hasRenderPass())===!1){let Xe=m.opaque,ke=m.transmissive;if(v.setupLights(),Z.isArrayCamera){let $e=Z.cameras;if(ke.length>0)for(let tt=0,Ye=$e.length;tt<Ye;tt++){let yt=$e[tt];Tl(Xe,ke,B,yt)}ee&&at.render(B);for(let tt=0,Ye=$e.length;tt<Ye;tt++){let yt=$e[tt];Or(m,B,yt,yt.viewport)}}else ke.length>0&&Tl(Xe,ke,B,Z),ee&&at.render(B),Or(m,B,Z)}V!==null&&U===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),oe&&T.end(R),B.isScene===!0&&B.onAfterRender(R,B,Z),ze.resetDefaultState(),O=-1,k=null,_.pop(),_.length>0?(v=_[_.length-1],Q.setTextureUnits(v.state.textureUnits),Te===!0&&Ue.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,P!==null&&P.renderEnd()};function cr(B,Z,re,oe){if(B.visible===!1)return;if(B.layers.test(Z.layers)){if(B.isGroup)re=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(Z);else if(B.isLightProbeGrid)v.pushLightProbeGrid(B);else if(B.isLight)v.pushLight(B),B.castShadow&&v.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(je)){oe&&j.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ne);let Xe=fe.update(B),ke=B.material;ke.visible&&m.push(B,Xe,ke,re,j.z,null,Z)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(je))){let Xe=fe.update(B),ke=B.material;if(oe&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),j.copy(B.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),j.copy(Xe.boundingSphere.center)),j.applyMatrix4(B.matrixWorld).applyMatrix4(ne)),Array.isArray(ke)){let $e=Xe.groups;for(let tt=0,Ye=$e.length;tt<Ye;tt++){let yt=$e[tt],Ke=ke[yt.materialIndex];Ke&&Ke.visible&&m.push(B,Xe,Ke,re,j.z,yt,Z)}}else ke.visible&&m.push(B,Xe,ke,re,j.z,null,Z)}}let He=B.children;for(let Xe=0,ke=He.length;Xe<ke;Xe++)cr(He[Xe],Z,re,oe)}function Or(B,Z,re,oe){let{opaque:ae,transmissive:He,transparent:Xe}=B;v.setupLightsView(re),Te===!0&&Ue.setGlobalState(R.clippingPlanes,re),oe&&I.viewport(z.copy(oe)),ae.length>0&&zr(ae,Z,re),He.length>0&&zr(He,Z,re),Xe.length>0&&zr(Xe,Z,re),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Tl(B,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[oe.id]===void 0){let Ke=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[oe.id]=new Xt(1,1,{generateMipmaps:!0,type:Ke?An:$n,minFilter:Pn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let He=v.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||z;He.setSize(Xe.z*R.transmissionResolutionScale,Xe.w*R.transmissionResolutionScale);let ke=R.getRenderTarget(),$e=R.getActiveCubeFace(),tt=R.getActiveMipmapLevel();R.setRenderTarget(He),R.getClearColor(Me),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),ee&&at.render(re);let Ye=R.toneMapping;R.toneMapping=ji;let yt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),Te===!0&&Ue.setGlobalState(R.clippingPlanes,oe),zr(B,re,oe),Q.updateMultisampleRenderTarget(He),Q.updateRenderTargetMipmap(He),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let It=0,un=Z.length;It<un;It++){let qt=Z[It],{object:Ht,geometry:mn,material:qe,group:_n}=qt;if(qe.side===bn&&Ht.layers.test(oe.layers)){let bt=qe.side;qe.side=Hn,qe.needsUpdate=!0,wl(Ht,re,oe,mn,qe,_n),qe.side=bt,qe.needsUpdate=!0,Ke=!0}}Ke===!0&&(Q.updateMultisampleRenderTarget(He),Q.updateRenderTargetMipmap(He))}R.setRenderTarget(ke,$e,tt),R.setClearColor(Me,Fe),yt!==void 0&&(oe.viewport=yt),R.toneMapping=Ye}function zr(B,Z,re){let oe=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,He=B.length;ae<He;ae++){let Xe=B[ae],{object:ke,geometry:$e,group:tt}=Xe,Ye=Xe.material;Ye.allowOverride===!0&&oe!==null&&(Ye=oe),ke.layers.test(re.layers)&&wl(ke,Z,re,$e,Ye,tt)}}function wl(B,Z,re,oe,ae,He){P!==null&&ae.isNodeMaterial&&P.setObject(B,ae),B.onBeforeRender(R,Z,re,oe,ae,He),B.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ae.onBeforeRender(R,Z,re,oe,B,He),ae.transparent===!0&&ae.side===bn&&ae.forceSinglePass===!1?(ae.side=Hn,ae.needsUpdate=!0,R.renderBufferDirect(re,Z,oe,ae,B,He),ae.side=fs,ae.needsUpdate=!0,R.renderBufferDirect(re,Z,oe,ae,B,He),ae.side=bn):R.renderBufferDirect(re,Z,oe,ae,B,He),B.onAfterRender(R,Z,re,oe,ae,He)}function xs(B,Z,re){Z.isScene!==!0&&(Z=ie);let oe=W.get(B),ae=v.state.lights,He=v.state.shadowsArray,Xe=ae.state.version,ke=we.getParameters(B,ae.state,He,Z,re,v.state.lightProbeGridArray),$e=we.getProgramCacheKey(ke),tt=oe.programs;oe.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?Z.environment:null,oe.fog=Z.fog;let Ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;oe.envMap=ce.get(B.envMap||oe.environment,Ye),oe.envMapRotation=oe.environment!==null&&B.envMap===null?Z.environmentRotation:B.envMapRotation,tt===void 0&&(B.addEventListener("dispose",gt),tt=new Map,oe.programs=tt);let yt=tt.get($e);if(yt!==void 0){if(oe.currentProgram===yt&&oe.lightsStateVersion===Xe)return jo(B,ke),yt}else ke.uniforms=we.getUniforms(B),P!==null&&B.isNodeMaterial&&P.build(B,re,ke),B.onBeforeCompile(ke,R),yt=we.acquireProgram(ke,$e),tt.set($e,yt),oe.uniforms=ke.uniforms;let Ke=oe.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ke.clippingPlanes=Ue.uniform),jo(B,ke),oe.needsLights=Cl(B),oe.lightsStateVersion=Xe,oe.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.sunLights.value=ae.state.sun,Ke.sunLightShadows.value=ae.state.sunShadow,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.sunShadowMatrix.value=ae.state.sunShadowMatrix,Ke.sunShadowCascade.value=ae.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=v.state.lightProbeGridArray.length>0,oe.currentProgram=yt,oe.uniformsList=null,yt}function ur(B){if(B.uniformsList===null){let Z=B.currentProgram.getUniforms();B.uniformsList=Io.seqWithValue(Z.seq,B.uniforms)}return B.uniformsList}function jo(B,Z){let re=W.get(B);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function pn(B,Z){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;f.setFromMatrixPosition(Z.matrixWorld);for(let re=0,oe=B.length;re<oe;re++){let ae=B[re];if(ae.texture!==null&&ae.boundingBox.containsPoint(f))return ae}return null}function Al(B,Z,re,oe,ae){Z.isScene!==!0&&(Z=ie),Q.resetTextureUnits();let He=Z.fog,Xe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Z.environment:null,ke=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rt.workingColorSpace,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,tt=ce.get(oe.envMap||Xe,$e),Ye=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,yt=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ke=!!re.morphAttributes.position,It=!!re.morphAttributes.normal,un=!!re.morphAttributes.color,qt=ji;oe.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qt=R.toneMapping);let Ht=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mn=Ht!==void 0?Ht.length:0,qe=W.get(oe),_n=v.state.lights;if(Te===!0&&(nt===!0||B!==k)){let Ut=B===k&&oe.id===O;Ue.setState(oe,B,Ut)}let bt=!1;oe.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==_n.state.version||qe.outputColorSpace!==ke||ae.isBatchedMesh&&qe.batching===!1||!ae.isBatchedMesh&&qe.batching===!0||ae.isBatchedMesh&&qe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&qe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||ae.isInstancedMesh&&qe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&qe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&qe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&qe.instancingMorph===!1&&ae.morphTexture!==null||qe.envMap!==tt||oe.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ue.numPlanes||qe.numIntersection!==Ue.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==yt||qe.morphTargets!==Ke||qe.morphNormals!==It||qe.morphColors!==un||qe.toneMapping!==qt||qe.morphTargetsCount!==mn||!!qe.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,qe.__version=oe.version);let jn=qe.currentProgram;bt===!0&&(jn=xs(oe,Z,ae),P&&oe.isNodeMaterial&&P.onUpdateProgram(oe,jn,qe));let Qn=!1,Hi=!1,ys=!1,xt=jn.getUniforms(),nn=qe.uniforms;if(I.useProgram(jn.program)&&(Qn=!0,Hi=!0,ys=!0),oe.id!==O&&(O=oe.id,Hi=!0),qe.needsLights){let Ut=pn(v.state.lightProbeGridArray,ae);qe.lightProbeGrid!==Ut&&(qe.lightProbeGrid=Ut,Hi=!0)}if(Qn||k!==B){I.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",B.projectionMatrix),xt.setValue(F,"viewMatrix",B.matrixWorldInverse);let Ci=xt.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,de.setFromMatrixPosition(B.matrixWorld)),N.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&xt.setValue(F,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Hi=!0,ys=!0)}if(qe.needsLights&&(_n.state.sunShadowMap.length>0&&xt.setValue(F,"sunShadowMap",_n.state.sunShadowMap,Q),_n.state.directionalShadowMap.length>0&&xt.setValue(F,"directionalShadowMap",_n.state.directionalShadowMap,Q),_n.state.spotShadowMap.length>0&&xt.setValue(F,"spotShadowMap",_n.state.spotShadowMap,Q),_n.state.pointShadowMap.length>0&&xt.setValue(F,"pointShadowMap",_n.state.pointShadowMap,Q)),ae.isSkinnedMesh){xt.setOptional(F,ae,"bindMatrix"),xt.setOptional(F,ae,"bindMatrixInverse");let Ut=ae.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),xt.setValue(F,"boneTexture",Ut.boneTexture,Q))}ae.isBatchedMesh&&(xt.setOptional(F,ae,"batchingTexture"),xt.setValue(F,"batchingTexture",ae._matricesTexture,Q),xt.setOptional(F,ae,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",ae._indirectTexture,Q),xt.setOptional(F,ae,"batchingColorTexture"),ae._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",ae._colorsTexture,Q));let ai=re.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Y.update(ae,re,jn),(Hi||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,xt.setValue(F,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Z.environment!==null&&(nn.envMapIntensity.value=Z.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Bb()),Hi){if(xt.setValue(F,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&Rl(nn,ys),He&&oe.fog===!0&&We.refreshFogUniforms(nn,He),We.refreshMaterialUniforms(nn,oe,$,J,v.state.transmissionRenderTarget[B.id]),qe.needsLights&&qe.lightProbeGrid){let Ut=qe.lightProbeGrid;nn.probesSH.value=Ut.texture,nn.probesMin.value.copy(Ut.boundingBox.min),nn.probesMax.value.copy(Ut.boundingBox.max),nn.probesResolution.value.copy(Ut.resolution)}Io.upload(F,ur(qe),nn,Q)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Io.upload(F,ur(qe),nn,Q),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&xt.setValue(F,"center",ae.center),xt.setValue(F,"modelViewMatrix",ae.modelViewMatrix),xt.setValue(F,"normalMatrix",ae.normalMatrix),xt.setValue(F,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){let Ut=oe.uniformsGroups;for(let Ci=0,Ft=Ut.length;Ci<Ft;Ci++){let Qo=Ut[Ci];Ee.update(Qo,jn),Ee.bind(Qo,jn)}}return jn}function Rl(B,Z){B.ambientLightColor.needsUpdate=Z,B.lightProbe.needsUpdate=Z,B.sunLights.needsUpdate=Z,B.sunLightShadows.needsUpdate=Z,B.directionalLights.needsUpdate=Z,B.directionalLightShadows.needsUpdate=Z,B.pointLights.needsUpdate=Z,B.pointLightShadows.needsUpdate=Z,B.spotLights.needsUpdate=Z,B.spotLightShadows.needsUpdate=Z,B.rectAreaLights.needsUpdate=Z,B.hemisphereLights.needsUpdate=Z}function Cl(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(B,Z,re){let oe=W.get(B);oe.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),W.get(B.texture).__webglTexture=Z,W.get(B.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,Z){let re=W.get(B);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(B,Z=0,re=0){V=B,D=Z,U=re;let oe=null,ae=!1,He=!1;if(B){let ke=W.get(B);if(ke.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,ke.__webglFramebuffer),z.copy(B.viewport),K.copy(B.scissor),le=B.scissorTest,I.viewport(z),I.scissor(K),I.setScissorTest(le),O=-1;return}else if(ke.__webglFramebuffer===void 0)Q.setupRenderTarget(B);else if(ke.__hasExternalTextures)Q.rebindTextures(B,W.get(B.texture).__webglTexture,W.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let Ye=B.depthTexture;if(ke.__boundDepthTexture!==Ye){if(Ye!==null&&W.has(Ye)&&(B.width!==Ye.image.width||B.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(B)}}let $e=B.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(He=!0);let tt=W.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(tt[Z])?oe=tt[Z][re]:oe=tt[Z],ae=!0):B.samples>0&&Q.useMultisampledRTT(B)===!1?oe=W.get(B).__webglMultisampledFramebuffer:Array.isArray(tt)?oe=tt[re]:oe=tt,z.copy(B.viewport),K.copy(B.scissor),le=B.scissorTest}else z.copy(pe).multiplyScalar($).floor(),K.copy(Oe).multiplyScalar($).floor(),le=Je;if(re!==0&&(oe=C),I.bindFramebuffer(F.FRAMEBUFFER,oe)&&I.drawBuffers(B,oe),I.viewport(z),I.scissor(K),I.setScissorTest(le),ae){let ke=W.get(B.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,re)}else if(He){let ke=Z;for(let $e=0;$e<B.textures.length;$e++){let tt=W.get(B.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,ke)}}else if(B!==null&&re!==0){let ke=W.get(B.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,re)}O=-1};function Pl(B){let Z=W.get(B);return(Z.__readFormat!==B.format||Z.__readType!==B.type)&&(Z.__readFormat=B.format,Z.__readType=B.type,Z.__formatReadable=N.textureFormatReadable(B.format),Z.__typeReadable=N.textureTypeReadable(B.type)),Z}this.readRenderTargetPixels=function(B,Z,re,oe,ae,He,Xe,ke=0){if(!(B&&B.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=W.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e){I.bindFramebuffer(F.FRAMEBUFFER,$e);try{let tt=B.textures[ke],Ye=tt.format,yt=tt.type;B.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke);let Ke=Pl(tt);if(Ke.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=B.width-oe&&re>=0&&re<=B.height-ae&&F.readPixels(Z,re,oe,ae,De.convert(Ye),De.convert(yt),He)}finally{let tt=V!==null?W.get(V).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(B,Z,re,oe,ae,He,Xe,ke=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=W.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e)if(Z>=0&&Z<=B.width-oe&&re>=0&&re<=B.height-ae){I.bindFramebuffer(F.FRAMEBUFFER,$e);let tt=B.textures[ke],Ye=tt.format,yt=tt.type;B.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke);let Ke=Pl(tt);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.bufferData(F.PIXEL_PACK_BUFFER,He.byteLength,F.STREAM_READ),F.readPixels(Z,re,oe,ae,De.convert(Ye),De.convert(yt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let un=V!==null?W.get(V).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,un);let qt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Tp(F,qt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,He),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(It),F.deleteSync(qt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,Z=null,re=0){let oe=Math.pow(2,-re),ae=Math.floor(B.image.width*oe),He=Math.floor(B.image.height*oe),Xe=Z!==null?Z.x:0,ke=Z!==null?Z.y:0;Q.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Xe,ke,ae,He),I.unbindTexture()},this.copyTextureToTexture=function(B,Z,re=null,oe=null,ae=0,He=0){let Xe,ke,$e,tt,Ye,yt,Ke,It,un,qt=B.isCompressedTexture?B.mipmaps[He]:B.image;if(re!==null)Xe=re.max.x-re.min.x,ke=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,Ye=re.min.y,yt=re.isBox3?re.min.z:0;else{let nn=Math.pow(2,-ae);Xe=Math.floor(qt.width*nn),ke=Math.floor(qt.height*nn),B.isDataArrayTexture?$e=qt.depth:B.isData3DTexture?$e=Math.floor(qt.depth*nn):$e=1,tt=0,Ye=0,yt=0}oe!==null?(Ke=oe.x,It=oe.y,un=oe.z):(Ke=0,It=0,un=0);let Ht=De.convert(Z.format),mn=De.convert(Z.type),qe;Z.isData3DTexture?(Q.setTexture3D(Z,0),qe=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Q.setTexture2DArray(Z,0),qe=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(Z,0),qe=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);let _n=I.getParameter(F.UNPACK_ROW_LENGTH),bt=I.getParameter(F.UNPACK_IMAGE_HEIGHT),jn=I.getParameter(F.UNPACK_SKIP_PIXELS),Qn=I.getParameter(F.UNPACK_SKIP_ROWS),Hi=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,qt.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(F.UNPACK_SKIP_IMAGES,yt);let ys=B.isDataArrayTexture||B.isData3DTexture,xt=Z.isDataArrayTexture||Z.isData3DTexture;if(B.isDepthTexture){let nn=W.get(B),ai=W.get(Z),Ut=W.get(nn.__renderTarget),Ci=W.get(ai.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,Ut.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ft=0;Ft<$e;Ft++)ys&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(B).__webglTexture,ae,yt+Ft),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(Z).__webglTexture,He,un+Ft)),F.blitFramebuffer(tt,Ye,Xe,ke,Ke,It,Xe,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ae!==0||B.isRenderTargetTexture||W.has(B)){let nn=W.get(B),ai=W.get(Z);I.bindFramebuffer(F.READ_FRAMEBUFFER,A),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Ut=0;Ut<$e;Ut++)ys?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,ae,yt+Ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,ae),xt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ai.__webglTexture,He,un+Ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ai.__webglTexture,He),ae!==0?F.blitFramebuffer(tt,Ye,Xe,ke,Ke,It,Xe,ke,F.COLOR_BUFFER_BIT,F.NEAREST):xt?F.copyTexSubImage3D(qe,He,Ke,It,un+Ut,tt,Ye,Xe,ke):F.copyTexSubImage2D(qe,He,Ke,It,tt,Ye,Xe,ke);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xt?B.isDataTexture||B.isData3DTexture?F.texSubImage3D(qe,He,Ke,It,un,Xe,ke,$e,Ht,mn,qt.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,He,Ke,It,un,Xe,ke,$e,Ht,qt.data):F.texSubImage3D(qe,He,Ke,It,un,Xe,ke,$e,Ht,mn,qt):B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,He,Ke,It,Xe,ke,Ht,mn,qt.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,He,Ke,It,qt.width,qt.height,Ht,qt.data):F.texSubImage2D(F.TEXTURE_2D,He,Ke,It,Xe,ke,Ht,mn,qt);I.pixelStorei(F.UNPACK_ROW_LENGTH,_n),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),I.pixelStorei(F.UNPACK_SKIP_PIXELS,jn),I.pixelStorei(F.UNPACK_SKIP_ROWS,Qn),I.pixelStorei(F.UNPACK_SKIP_IMAGES,Hi),He===0&&Z.generateMipmaps&&F.generateMipmap(qe),I.unbindTexture()},this.initRenderTarget=function(B){W.get(B).__webglFramebuffer===void 0&&Q.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?Q.setTextureCube(B,0):B.isData3DTexture?Q.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?Q.setTexture2DArray(B,0):Q.setTexture2D(B,0),I.unbindTexture()},this.resetState=function(){D=0,U=0,V=null,I.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var $t=(s,e,t)=>s<e?e:s>t?t:s,At=(s,e,t)=>s+(e-s)*t,il=s=>s*s*(3-2*s),Et=(s,e,t)=>{let n=$t((t-s)/(e-s),0,1);return n*n*(3-2*n)},lm=1337;function cm(s){lm=s|0}function Ob(s){return s=s^lm|0,s=Math.imul(s^s>>>15,739982445),s=Math.imul(s^s>>>12,695872825),s^=s>>>15,(s>>>0)/4294967296}var Rn=(s,e)=>Ob(Math.imul(s|0,73856093)^Math.imul(e|0,19349663));function Mi(s,e=0){let t=Math.floor(s),n=s-t,i=n*n*(3-2*n);return At(Rn(t,e),Rn(t+1,e),i)}var Xu=(s,e=0)=>Mi(s,e)*.55+Mi(s*2.03,e+7)*.3+Mi(s*4.1,e+13)*.15;function Ot(s){let e=s>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,i)=>n+(i-n)*t(),t.int=(n,i)=>Math.floor(n+(i-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Wu=new _e,xe=s=>(Wu.set(s),[Wu.r,Wu.g,Wu.b]),id=(s,e,t)=>[At(s[0],e[0],t),At(s[1],e[1],t),At(s[2],e[2],t)],Fn=(s,e)=>[s[0]*e,s[1]*e,s[2]*e];var Si=["city","sakura","coast","country","mountain","snow"],sl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Do=1500,qu=260,es=0,ol=2,zb=-2.2,rl=0;function hm(s){rl=Math.max(0,Si.indexOf(s))}function Js(s){let e=Math.floor(s/Do),t=s-e*Do,n=il($t((t-(Do-qu))/qu,0,1)),i=Si.length;return{a:Si[((e+rl)%i+i)%i],b:Si[((e+rl+1)%i+i)%i],t:n}}function Lt(s){let e=Js(s),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var an=s=>{let e=Js(s);return e.t<.5?e.a:e.b};function fm(s,e){let t=Math.floor(s/Do),n=s-t*Do,i=il($t((n-(Do-qu))/qu,0,1)),r=Si.length;return(Si[((t+rl)%r+r)%r]===e?1-i:0)+(Si[((t+rl+1)%r+r)%r]===e?i:0)}function Bn(s,e){let t=Js(s);return At(sl[t.a][e],sl[t.b][e],t.t)}var Cr=650,Pr=375,No=s=>s*Cr+Pr;function al(s){if(s<300)return!1;for(let e of[-70,0,70]){let t=Lt(s+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var sd={x:new Map,r:new Map,t:new Map};function rd(s,e,t){let n=s.get(e);return n===void 0&&(n=t(),s.set(e,n),s.size>2e3&&s.clear()),n}function js(s){let e=Math.round((s-Pr)/Cr);return rd(sd.x,e,()=>{let t=No(e);return al(t)?{k:e,s:t}:null})}function kb(s){let e=js(s);return e?1-Et(8,45,Math.abs(s-e.s)):0}var Ir=1150,Uo=820,ll=4.6,od=s=>s*Ir+Uo;function ad(s){if(s<400)return!1;for(let t of[-90,0,90]){let n=Lt(s+t);if(n.country+n.sakura<.9)return!1}let e=js(s);return!(e&&Math.abs(e.s-s)<170)}function Ni(s){let e=Math.round((s-Uo)/Ir);return rd(sd.r,e,()=>{let t=od(e);return ad(t)?{k:e,s:t}:null})}function Hb(s){let e=Ni(s);return e?1-Et(30,70,Math.abs(s-e.s)):0}function Vb(s){let e=-ll;return s<11?e-1.3:s<16?At(e-1.3,e+.7,(s-11)/5):s<20?e+.7:s<25.5?At(e+.7,.35,(s-20)/5.5):.35}var dm=1050,pm=525,xn=85,dn=125,Gb=24,Wb=s=>s*dm+pm;function Xb(s){if(s<300)return!1;for(let e of[-170,0,170]){let t=Lt(s+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Ui(s){let e=Math.round((s-pm)/dm);return rd(sd.t,e,()=>{let t=Wb(e);return Xb(t)?{k:e,s:t}:null})}function qb(s){let e=Ui(s);return e?1-Et(xn+20,dn+25,Math.abs(s-e.s)):0}var Yu=0,$u=(s,e)=>{let t=s/dn;return Gb*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var ms=2,Zu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Mi(e/300,11)-.5)*2+(Mi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Bn(e,"curv")*(1-Math.max(kb(e),Hb(e),qb(e)))}elevRaw(e){return Bn(e,"base")+Bn(e,"hill")*(Xu(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=js(e);if(n){let o=1-Et(8,45,Math.abs(e-n.s));o>0&&(t=At(t,this.elevRaw(n.s),o))}let i=Ni(e);if(i){let o=1-Et(30,70,Math.abs(e-i.s));o>0&&(t=At(t,this.elevRaw(i.s),o))}let r=Ui(e);if(r){let o=1-Et(xn+10,dn+45,Math.abs(e-r.s));o>0&&(t=At(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*ms<e+ms;){let t=this.X.length-1,n=t*ms,i=this.curv(n+ms/2)*ms,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+i/2)*ms),this.Z.push(this.Z[t]+Math.cos(r+i/2)*ms),this.H.push(r+i),this.Y.push(this.elev(n+ms))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+ms);let n=e/ms,i=Math.floor(n),r=n-i;t.x=At(this.X[i],this.X[i+1],r),t.z=At(this.Z[i],this.Z[i+1],r),t.y=At(this.Y[i],this.Y[i+1],r),t.h=At(this.H[i],this.H[i+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function um(s,e,t,n,i){let r=Math.abs(t);switch(s){case"city":return r<i+3.05?-.06:.14;case"sakura":return r<i+2.65?-.06:.12+Et(45,190,r)*16*(.45+.55*Mi(e/160+(t>0?50:0),3));case"coast":return t>0?r<i+.9?-.06:-.15+Et(i+1.5,80,r)*24*(.5+.5*Mi(e/170,5))+Et(80,200,r)*30:r<i+1.5?-.06:r<i+1.95?-.04:zb-Math.min(r-(i+2),40)*.13-n;case"mountain":{if(t>0){if(r<i+.5)return-.06;if(r<i+1)return-.32;let a=8+6*Mi(e/140,61),l=r-(i+1);return l<a?l:Math.min(a+(l-a)*.55,70)}if(r<i+1.2)return-.06;let o=r-(i+1.2);return o<32?-o*1.1:-35.2+Et(105,230,r)*95*(.6+.4*Mi(e/220,67))}case"snow":return r<i+.15?-.06:r<i+.7?-.06+(r-i-.15)/.55*1.36:r<i+1.5?1.3:r<i+2.65?At(1.3,.55,(r-i-1.5)/1.15):r<125?.55+.25*(Mi(e/40+(t>0?3:0),71)-.5):.55+Et(125,210,r)*40*(.45+.55*Mi(e/230+(t>0?11:0),73));case"country":default:return r<i+2?-.08:r<i+2.6?-.08-(r-i-2)*.62:r<135?-.45:-.45+Et(140,215,r)*7*(.4+.6*Mi(e/210+(t>0?9:0),7))}}function Qs(s,e,t,n){let i=Js(s),r=um(i.a,s,e,t,n),o=i.t;e<0&&o>0&&(i.b==="coast"?o=Et(.25,.9,o):i.a==="coast"&&(o=Et(.1,.75,o)));let a=i.t>0?At(r,um(i.b,s,e,t,n),o):r;Yu=0;let l=Ni(s);if(l){let S=Math.abs(s-l.s);if(S>=36)return a;let M=S<29?Vb(S):At(.35,a,Et(29,36,S));return Math.abs(e)<n+3.2&&(M=Math.min(M,-.08)),M}let u=Ui(s);if(!u)return a;let h=s-u.s,d=Math.abs(h);if(d>=2*dn)return a;let p=Math.abs(e),g=$u(h,e),b;return d<xn?b=p<=n+1.46?-.25:Math.max(a,g):b=Math.max(a,Math.min(g,p<n+1?-.06:p-(n+1))),Yu=Math.max(0,b-a),b}function mm(s){let e=Ni(s);return e?1-Et(27,34,Math.abs(s-e.s)):0}var cl=new H,Ku=new H,Yb=[1,1,1],Zb=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],vm=(()=>{let s=Math.tan(Math.PI/8),e=[[1,-s],[1,s],[s,1],[-s,1],[-1,s],[-1,-s],[-s,-1],[s,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),xm=(()=>{let s=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,i=2/Math.sqrt(3);s.push([Math.cos(n)*i,Math.sin(n)*i])}for(let t=1;t<5;t++)e.push(...s[0],...s[t],...s[t+1]);return e})(),ln=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:i=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=i,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new et,this.nm=new pt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,i=new Float32Array(t*3);this.P&&i.set(this.P.subarray(0,n*3)),this.P=i;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,i,r,o,a,l,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,d=this.ne,p=this.n*3,g=this.P,b=this.bb,S=h[0]*e+h[4]*t+h[8]*n+h[12],M=h[1]*e+h[5]*t+h[9]*n+h[13],x=h[2]*e+h[6]*t+h[10]*n+h[14];g[p]=S,g[p+1]=M,g[p+2]=x,S<b[0]&&(b[0]=S),M<b[1]&&(b[1]=M),x<b[2]&&(b[2]=x),S>b[3]&&(b[3]=S),M>b[4]&&(b[4]=M),x>b[5]&&(b[5]=x);let c=d[0]*i+d[3]*r+d[6]*o,y=d[1]*i+d[4]*r+d[7]*o,f=d[2]*i+d[5]*r+d[8]*o,m=127/(Math.sqrt(c*c+y*y+f*f)||1);if(this.N[p]=Math.round(c*m),this.N[p+1]=Math.round(y*m),this.N[p+2]=Math.round(f*m),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=l),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(M)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let v=u||Yb,E=this.Cl;E[p]=v[0]>=1?255:v[0]<=0?0:v[0]*255+.5,E[p+1]=v[1]>=1?255:v[1]<=0?0:v[1]*255+.5,E[p+2]=v[2]>=1?255:v[2]<=0?0:v[2]*255+.5}this.n++}quad(e,t,n,i,r,o){cl.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Ku.set(i[0]-e[0],i[1]-e[1],i[2]-e[2]),Ku.lengthSq()<1e-12&&Ku.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),cl.cross(Ku).normalize();let a=cl.x,l=cl.y,u=cl.z,h=o?o.u0:0,d=o?o.u1:1,p=o?o.v0:0,g=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,l,u,h,p,r),this.vtx(t[0],t[1],t[2],a,l,u,d,p,r),this.vtx(n[0],n[1],n[2],a,l,u,d,g,r),this.vtx(e[0],e[1],e[2],a,l,u,h,p,r),this.vtx(n[0],n[1],n[2],a,l,u,d,g,r),this.vtx(i[0],i[1],i[2],a,l,u,h,g,r)}box(e,t,n,i,r,o,a,l=null,u=null){let h=l||{},d=u||{};this.quad([i,t,n],[e,t,n],[e,r,n],[i,r,n],d.nz||a,h.nz),this.quad([e,t,o],[i,t,o],[i,r,o],[e,r,o],d.pz||a,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],d.nx||a,h.nx),this.quad([i,t,o],[i,t,n],[i,r,n],[i,r,o],d.px||a,h.px),this.quad([e,r,o],[i,r,o],[i,r,n],[e,r,n],d.py||a,h.py),u&&u.noBottom||this.quad([e,t,n],[i,t,n],[i,t,o],[e,t,o],d.ny||a,h.ny)}cyl(e,t,n,i,r,o,a,l,u=!0){let h=(i-r)/o;for(let d=0;d<a;d++){let p=d/a*Math.PI*2,g=(d+1)/a*Math.PI*2,b=Math.cos(p),S=Math.sin(p),M=Math.cos(g),x=Math.sin(g),c=[e+b*i,t,n+S*i],y=[e+M*i,t,n+x*i],f=[e+M*r,t+o,n+x*r],m=[e+b*r,t+o,n+S*r];this.vtx(c[0],c[1],c[2],b,h,S,0,0,l),this.vtx(m[0],m[1],m[2],b,h,S,0,0,l),this.vtx(f[0],f[1],f[2],M,h,x,0,0,l),this.vtx(c[0],c[1],c[2],b,h,S,0,0,l),this.vtx(f[0],f[1],f[2],M,h,x,0,0,l),this.vtx(y[0],y[1],y[2],M,h,x,0,0,l),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,l),this.vtx(f[0],f[1],f[2],0,1,0,0,0,l),this.vtx(m[0],m[1],m[2],0,1,0,0,0,l))}}rod(e,t,n,i,r,o){let a=t[0]-e[0],l=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(a,l,u);a/=h,l/=h,u/=h;let d=0,p=1,g=0;Math.abs(l)>.99&&(d=1,p=0);let b=l*g-u*p,S=u*d-a*g,M=a*p-l*d,x=Math.hypot(b,S,M);b/=x,S/=x,M/=x;let c=S*u-M*l,y=M*a-b*u,f=b*l-S*a;for(let m=0;m<r;m++){let v=m/r*Math.PI*2,E=(m+1)/r*Math.PI*2,_=Math.cos(v),T=Math.sin(v),R=Math.cos(E),w=Math.sin(E),P=b*_+c*T,C=S*_+y*T,A=M*_+f*T,L=b*R+c*w,D=S*R+y*w,U=M*R+f*w,V=[e[0]+P*n,e[1]+C*n,e[2]+A*n],O=[e[0]+L*n,e[1]+D*n,e[2]+U*n],k=[t[0]+L*i,t[1]+D*i,t[2]+U*i],z=[t[0]+P*i,t[1]+C*i,t[2]+A*i];this.vtx(V[0],V[1],V[2],P,C,A,0,0,o),this.vtx(O[0],O[1],O[2],L,D,U,0,0,o),this.vtx(k[0],k[1],k[2],L,D,U,0,0,o),this.vtx(V[0],V[1],V[2],P,C,A,0,0,o),this.vtx(k[0],k[1],k[2],L,D,U,0,0,o),this.vtx(z[0],z[1],z[2],P,C,A,0,0,o)}return h}blob(e,t,n,i,r,o,a=0,l=1){let u=gm[a%gm.length],h=u.attributes.position.array,d=u.attributes.normal.array,p=u.userData.disp;for(let g=0;g<h.length;g+=3){let b=1+p[g/3],S=Math.max(0,Math.min(1,d[g+1]*.5+.5)),M=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+h[g]*i*b,t+h[g+1]*i*b*l,n+h[g+2]*i*b,d[g],d[g+1],d[g+2],0,0,M)}}wire(e,t,n,i,r,o=10){let a=e;this.noShadow=!0;for(let l=1;l<=o;l++){let u=l/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,h,i,i,3,r),a=h}this.noShadow=!1}card(e,t,n,i){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,l]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,l,i[o])}bill(e,t,n,i,r,o,a,l,u,h,d=Zb,p=1){let g=(u.u1-u.u0)*.5,b=(u.v1-u.v0)*.5,S=u.u0+g,M=u.v0+b;for(let x=0;x<d.length;x+=2){let c=d[x],y=d[x+1];this.offX=c*a,this.offY=y*l,this.vtx(e,t,n,i,r,o,S+c*g*p,M+y*b*p,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,i=this.ne,r=e.P,o=e.N,a=e.C,l=e.U,u=this.n,h=this.bb;for(let d=0;d<e.n*3;d+=3){let p=r[d],g=r[d+1],b=r[d+2],S=u*3+d,M=n[0]*p+n[4]*g+n[8]*b+n[12],x=n[1]*p+n[5]*g+n[9]*b+n[13],c=n[2]*p+n[6]*g+n[10]*b+n[14];this.P[S]=M,this.P[S+1]=x,this.P[S+2]=c,this.hasAO&&(this.A[u+d/3]=this.aoByte(x)),M<h[0]&&(h[0]=M),x<h[1]&&(h[1]=x),c<h[2]&&(h[2]=c),M>h[3]&&(h[3]=M),x>h[4]&&(h[4]=x),c>h[5]&&(h[5]=c);let y=o[d],f=o[d+1],m=o[d+2],v=i[0]*y+i[3]*f+i[6]*m,E=i[1]*y+i[4]*f+i[7]*m,_=i[2]*y+i[5]*f+i[8]*m,T=127/(Math.sqrt(v*v+E*E+_*_)||1);this.N[S]=Math.round(v*T),this.N[S+1]=Math.round(E*T),this.N[S+2]=Math.round(_*T)}if(this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(l?this.U.set(l,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let d=Math.hypot(n[0],n[1],n[2]),p=e.O;if(p)for(let g=0;g<e.n*2;g++)this.O[u*2+g]=p[g]*d;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new mt,t=this.n,n=this.bb;if(e.setAttribute("position",new _t(this.P.slice(0,t*3),3)),e.setAttribute("normal",new _t(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new _t(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new _t(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new _t(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new _t(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new _t(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ui(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let i=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>i&&(i=o)}e.boundingBox.expandByScalar(i*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new hi),e}},gm=[0,1,2,3].map(s=>{let e=new Ua(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),i=(r,o,a)=>Math.sin(r*3.1+s)*Math.cos(o*2.7+s*2)*Math.sin(a*3.3+s*3);for(let r=0;r<t.length;r+=3)n[r/3]=i(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ht.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var $b=ht.shadowmap_pars_fragment;function ud(s){let e=i=>`texture( shadowMap, vec3( shadowCoord.xy${i}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=s>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:s===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ht.shadowmap_pars_fragment=$b.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}ud(1);function Sm(s,e){let t=s<e?`#define GRAZE_FADE
#define GRAZE_LO ${s.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ht.shadowmap_pars_fragment=t+ht.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ht.lights_fragment_begin=ht.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Ti=4200,Be={uSkyHor:{value:new _e(.7,.8,.9)},uSkyZen:{value:new _e(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Pe},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new _e(1,1,1)},uTuftV:{value:new dt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uBlShade:{value:new H(7.5,3,2.3)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:Kb()},uCloudTex:{value:null},uCloudOrg:{value:new Pe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Pe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Em(s){let e=new $i(new Uint8Array(s),s.length,1,$s);return e.minFilter=e.magFilter=Tn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var fi=Em([16,16,16,70,200,255,255,255]),ul=Em([28,40,70,130,200,240,255,255]);function Kb(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let i=new $i(e,256,256,Kn);return i.wrapS=i.wrapT=As,i.magFilter=Bt,i.minFilter=Pn,i.generateMipmaps=!0,i.colorSpace=si,i.needsUpdate=!0,i}var wi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Ju=1600,ld=256,Jb=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Ju).toFixed(8)} + 0.5).r * uCloudSh; }`,jb=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Tm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Ju).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,wm=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,Qb=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,eM=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,ju=new Mr;ju.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};ju.customProgramCacheKey=()=>"propdepth";function Am(){let s=new Xt(ld,ld,{format:$s,type:$n,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),e=new ut({uniforms:{uCenter:{value:new Pe},uOrigin:Be.uOrigin,uTime:Be.uTime,uNoiseTex:Be.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Ju.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ct(new en(2,2),e),n=new Rs;t.frustumCulled=!1,Be.uCloudTex.value=s.texture,Be.uCloudTex.rt=s;let i=Ju/ld;return{update(r,o,a,l,u){let h=Math.round((o+l)/i)*i-l,d=Math.round((a+u)/i)*i-u;e.uniforms.uCenter.value.set(h,d),Be.uCloudOrg.value.set(h,d);let p=r.getRenderTarget();r.setRenderTarget(s),r.render(t,n),r.setRenderTarget(p)}}}function er(s,e="",t="",n=!0){s.uniforms.uOrigin=Be.uOrigin,s.uniforms.uCloudSh=Be.uCloudSh,s.uniforms.uTime=Be.uTime,s.uniforms.uNoiseTex=Be.uNoiseTex,s.uniforms.uCloudTex=Be.uCloudTex,s.uniforms.uCloudOrg=Be.uCloudOrg;for(let i of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])s.uniforms[i]=Be[i];s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Tm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${wi}${Jb}${Qb}${e}`).replace("#include <opaque_fragment>",`${n?wm:jb}${t}${eM}
#include <opaque_fragment>`)}var tM=`
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
`,nM=`
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
#endif`,iM=`
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
}`,Rm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},Ei={tex:null,uFieldK:{value:new Pe(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function Cm(s){let e={};for(let t of s)e[Rm[t]]="";return(s.includes("city")||s.includes("country"))&&(e.K_XING=""),(s.includes("country")||s.includes("sakura"))&&(e.K_RIVER=""),(s.includes("mountain")||s.includes("coast"))&&(e.K_RIDGE=""),Ei.tex&&s.includes("country")&&(e.F_PAINT=""),e}var ym=new Map;function hl(s){let e=[...new Set(s)].sort().join("+"),t=ym.get(e);return t||(t=Pm(Cm(e.split("+")),e),ym.set(e,t)),t}function Pm(s=Cm(Object.keys(Rm)),e="all"){let t=new fn({color:16777215,gradientMap:fi});t.defines=s;let n=s.F_PAINT!==void 0;return t.onBeforeCompile=i=>{i.uniforms.uSkyHor=Be.uSkyHor,i.uniforms.uSkyZen=Be.uSkyZen,i.uniforms.uWet=Be.uWet,i.uniforms.uSakWet=Be.uSakWet,i.uniforms.uNight=Be.uNight,i.uniforms.uSunDir=Be.uSunDir,i.uniforms.uSunCol=Be.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])i.uniforms[r]=Be[r];n&&(i.uniforms.uFieldTex={value:Ei.tex},i.uniforms.uFieldK=Ei.uFieldK,i.uniforms.uFieldC=Ei.uFieldC),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),er(i,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${tM}`,iM+nM,!1),i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v19-"+e+(n?"-fp":""),t}function _m(s,e,t,n,i=null){return s.onBeforeCompile=r=>{i&&i(r),er(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},s.customProgramCacheKey=()=>n,s}function Im(s){for(let e of["uSunDir","uSunCol","uBacklit"])s.uniforms[e]=Be[e];s.vertexShader=s.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),s.fragmentShader=s.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function sM(s){s.uniforms.uLightsOn=Be.uLightsOn,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function bm(s){s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function hd(s){return s.onBeforeCompile=e=>er(e),s.customProgramCacheKey=()=>"cs",s}var rM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",oM=(s,e,t="")=>`
{ float gm = ${s.toFixed(3)};
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
}`;function fd(s,e,t=.06,n="gloss",i=null){return s.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Be[o];i&&Object.assign(r.uniforms,i.uniforms),er(r,rM+(i?i.pars:""),oM(e,t,i?i.apply:""))},s.customProgramCacheKey=()=>n+e,s}var tr=48;function Lm(s,e){let t=new fn({color:16777215,gradientMap:ul}),n=!!Ei.tex;return t.onBeforeCompile=i=>{Object.assign(i.uniforms,e,s);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])i.uniforms[r]=Be[r];n&&(i.uniforms.uFieldC=Ei.uFieldC,i.uniforms.uFieldM=Ei.uFieldM),i.vertexShader=i.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Tm}
uniform vec4 uG[${tr}], uGM[${tr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${tr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${Ti.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${Ti.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${wm}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Dm(s,e){let t={};t.ground=Pm(),t.color=_m(new fn({vertexColors:!0,gradientMap:fi}),1.6,.1,"color-v3",bm),t.atlas=new fn({vertexColors:!0,gradientMap:fi,map:s.map,emissiveMap:s.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{bm(a),sM(a),er(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=_m(new fn({vertexColors:!0,gradientMap:ul}),2.6,.24,"foliage-v2"),t.lamp=new vn({color:15789798}),t.sig=new vn({color:new _e(.15,1.7,1.1)}),t.sodium=new vn({color:new _e(5,2.3,.65)}),t.decal=new fn({vertexColors:!0,gradientMap:fi,map:s.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>er(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new fn({map:e,vertexColors:!0,gradientMap:ul,alphaTest:.42,side:bn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ht.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),er(a),Im(a),a.uniforms.uTuftV=Be.uTuftV,a.uniforms.uWind=Be.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new vn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128);let o=new ni(n);return t.pool=new vn({map:o,color:16762746,transparent:!0,opacity:0,blending:Ji,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}function Nm(s,e,t){let i=new Uint8Array(64);for(let o=0;o<64;o++){let a=(o+.5)/64*2-1,l=Math.min(1,Math.max(0,(a-s)/(e-s))),u=l*l*(3-2*l);i[o]=Math.round(255*(t+(1-t)*u))}let r=new $i(i,64,1,$s);return r.minFilter=r.magFilter=Bt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var aM=Nm(-.05,.5,.05),lM=Nm(-.5,.45,.12);function Mm(s,e){s.uniforms.uTime=Be.uTime,s.uniforms.uWind=Be.uWind,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var cd=(s,e,t)=>{let n=new _e().setRGB(s/255,e/255,t/255,Wt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},cM=`diffuseColor.rgb *= mix(${cd(62,38,34)}, mix(${cd(205,105,150)}, ${cd(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function dd(s,{blossom:e=!1}={}){let t=new fn({map:s,vertexColors:!0,color:e?16777215:new _e().setRGB(.68,.85,.46,Wt),gradientMap:e?lM:aM,alphaTest:.5,side:fs});t.shadowSide=bn,t.onBeforeCompile=i=>{er(i),Im(i),Mm(i,!1),i.uniforms.uGhShade=e?Be.uBlShade:Be.uGhShade,i.vertexShader=i.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?cM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new Mr;return n.onBeforeCompile=i=>Mm(i,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var uM=xe("#f2c230"),Um=xe("#26272c");function Qu(s,e){let t=[];for(let n of[-1,1]){let i=e+n*4.9,r=s.at(i,{}),o=Bn(i,"rw"),a=n*(o+.8),l=Lt(i),u=l.city+l.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Fm(){let s=new on,e=hd(new fn({vertexColors:!0,gradientMap:fi})),t=new vn({color:new _e(6,.45,.3)}),n=new vn({color:new _e(.22,.03,.03)}),i=[0,1].map(()=>{let r=new on,o=new on;r.add(o),o.position.set(-.42,1.02,-.02);let a=new ln,l=3.6;for(let d=0,p=0;p<l;d++,p+=.45)a.box(-Math.min(p+.45,l),-.065,-.065,-p,.065,.065,d%2?Um:uM);a.box(0,-.09,-.07,.38,.09,.07,Um);let u=new ct(a.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(d=>{let p=new ct(new _r(.13,18),n);return p.position.set(d,2.75,-.1),p.rotation.y=Math.PI,r.add(p),p});return s.add(r),{root:r,pivot:o,arm:u,lamps:h,L:l}});return s.visible=!1,{group:s,update(r,o,a,l,u){s.visible=!!r,r&&r.forEach((h,d)=>{let p=i[d];p.root.position.set(h.x-o.x,h.y,h.z-o.z),p.root.rotation.y=h.yaw,p.arm.scale.x=(h.rw+.25)/p.L,p.pivot.rotation.z=-a*(Math.PI/2-.06);let g=Math.floor(u*2.5)%2;p.lamps[0].material=l&&g===0?t:n,p.lamps[1].material=l&&g===1?t:n})}}}function hM(){let t=()=>{let x=document.createElement("canvas");return x.width=1024,x.height=512,x},n=t(),i=t(),r=n.getContext("2d"),o=i.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let l=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,l);for(let x=0;x<1024;x+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(x,0,2,l);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,l-14,1024,14);let u=[.1,.36,.62,.88].map(x=>x*1024),h=(x,c,y,f)=>{let m=r.createLinearGradient(x,c,x+y*.3,c+f);m.addColorStop(0,"#5d7fae"),m.addColorStop(.6,"#9db7d6"),m.addColorStop(1,"#2f3f55"),r.fillStyle=m,r.fillRect(x,c,y,f),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(x+y*.2,c),r.lineTo(x+y*.38,c),r.lineTo(x+y*.1,c+f),r.lineTo(x-y*.08,c+f),r.fill(),o.fillStyle="#ffeccc",o.fillRect(x,c,y,f)};for(let x=0;x<u.length-1;x++){let c=u[x]+40,y=u[x+1]-40,f=3,m=(y-c)/f;for(let v=0;v<f;v++)r.fillStyle="#6b737c",r.fillRect(c+v*m+2,34,m-4,58),h(c+v*m+6,38,m-12,50)}for(let x of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(x+2,34,28,58),h(x+5,38,22,50);for(let x of u)r.fillStyle="#c3c8ce",r.fillRect(x-30,22,60,l-36),r.fillStyle="#7b828a",r.fillRect(x-1,22,2,l-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(x-30,22,60,l-36),h(x-24,34,20,46),h(x+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let x of u)r.fillStyle="#c3c8ce",r.fillRect(x-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let d=0,p=176,g=256,b=256;r.fillStyle="#d3d7dc",r.fillRect(d,p,g,b),r.fillStyle="#20262e",r.fillRect(d+14,p+44,g-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(d+40,p+44),r.lineTo(d+80,p+44),r.lineTo(d+40,p+140),r.lineTo(d+14,p+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(d+g/2-4,p+44,8,96),r.fillStyle="#111",r.fillRect(d+50,p+12,g-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",d+g/2,p+26),r.fillStyle="#1f9a50",r.fillRect(d,p+150,g,18),r.fillStyle="#e8892b",r.fillRect(d,p+170,g,7);for(let x of[d+40,d+g-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(x,p+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(x+(x<d+g/2?28:-28),p+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(d,p+b-30,g,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",d+g/2,p+220),o.fillStyle="#111",o.fillRect(d,p,g,b),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",d+g/2,p+26);for(let x of[d+40,d+g-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(x,p+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=x=>{let c=new ni(x);return c.colorSpace=Wt,c.anisotropy=4,c},M=(x,c,y,f)=>({u0:x/1024,u1:(x+y)/1024,v0:1-(c+f)/512,v1:1-c/512});return{map:S(n),em:S(i),side:M(0,0,1024,l),sideR:{...M(0,0,1024,l),flip:!0},front:M(d,p,g,b),plain:M(342,202,28,28)}}function Bm(){let s=hM(),e=hd(new fn({map:s.map,emissiveMap:s.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:fi})),t=new ln({uv:!0}),n=[1,1,1],i=xe("#9aa1a9"),r=xe("#3b4047"),o=xe("#2a2d33"),a=19.5,l=.6,u=3,h=1.45,d=.95,p=4,g=4,b=.3,S=xe("#33363b"),M={nz:s.plain,pz:s.plain,nx:s.plain,px:s.plain,py:s.plain,ny:s.plain},x=(_,T,R,w,P,C,A,L=!1)=>t.box(_,T,R,w,P,C,A,M,L?{noBottom:!0}:null),c=(_,T,R,w,P,C)=>{let L=R-P/2,D=R+P/2;for(let U=0;U<12;U++){let V=U/12*Math.PI*2,O=(U+1)/12*Math.PI*2,k=_+Math.cos(V)*w,z=T+Math.sin(V)*w,K=_+Math.cos(O)*w,le=T+Math.sin(O)*w;t.quad([k,z,L],[K,le,L],[K,le,D],[k,z,D],C,s.plain),t.quad([_,T,D],[k,z,D],[K,le,D],[K,le,D],C,s.plain),t.quad([_,T,L],[K,le,L],[k,z,L],[k,z,L],C,s.plain)}},y=u*a+(u-1)*l;for(let _=0;_<u;_++){let T=-y/2+a/2+_*(a+l),R=T-a/2,w=T+a/2;t.quad([R,d,h],[w,d,h],[w,p,h],[R,p,h],n,s.side),t.quad([w,d,-h],[R,d,-h],[R,p,-h],[w,p,-h],n,s.side);let P=_===u-1,C=_===0;t.quad([w,d,h],[w,d,-h],[w,p,-h],[w,p,h],P?n:xe("#c9ced4"),P?s.front:s.plain),t.quad([R,d,-h],[R,d,h],[R,p,h],[R,p,-h],C?n:xe("#c9ced4"),C?s.front:s.plain);for(let A=0;A<g;A++)for(let L of[1,-1]){let D=A/g*Math.PI/2,U=(A+1)/g*Math.PI/2,V=L*h*Math.cos(D),O=p+b*Math.sin(D),k=L*h*Math.cos(U),z=p+b*Math.sin(U);t.quad([R,O,V],[w,O,V],[w,z,k],[R,z,k],i,s.plain);for(let K of[R,w]){let le=[[K,p,0],[K,O,V],[K,z,k]];t.quad(le[0],le[1],le[2],le[2],i,s.plain),t.quad(le[0],le[2],le[1],le[1],i,s.plain)}}for(let A of[1,-1])x(R,p-.02,A*h-.04,w,p+.05,A*h+.04,r);for(let A of[T-5.5,T+5.5])x(A-1.3,p+.2,-.8,A+1.3,p+.62,.8,xe("#c4c9cf"),!0);x(R+.3,.82,-h+.1,w-.3,d,h-.1,o);for(let[A,L,D,U]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])x(T+A-L/2,.82-D,-1.15+U*.2,T+A+L/2,.82,1.15+U*.2,U>0?o:r);for(let A of[T-7,T+7]){for(let L of[1,-1]){x(A-1.35,.32,L*.86,A+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])x(A+D-.17,.3,L*.84,A+D+.17,.58,L*1.06,o)}x(A-.35,.5,-1,A+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])c(A+L,.43,D*.6,.43,.13,S)}if(_<u-1&&x(w,d+.15,-.95,w+l,p-.1,.95,xe("#3a3e44")),_===0){let A=T-3,L=p+.7;t.box(A-.6,p+.26,-.6,A+.6,p+.42,.6,r),t.rod([A-.5,p+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A+.5,p+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A,L+.9,-.85],[A,L+.9,.85],.03,.03,4,r)}}let f=new ct(t.build(),e);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let m=new on;m.add(f),m.visible=!1;let v={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:y},E={};return{group:m,st:v,start(_,T,R=16){Object.assign(v,{active:!0,sx:_,dir:T,speed:R,u:-T*290,ds:T>0?-2:2,cleared:!1}),m.visible=!0},update(_,T,R,w,P){if(!v.active)return;v.u+=v.dir*v.speed*_;let C=v.u-v.dir*v.length/2;if(!v.cleared&&(v.dir>0?C>P+1:C<-P-1)&&(v.cleared=!0),Math.abs(v.u)>330){v.active=!1,m.visible=!1;return}T.at(v.sx,E),m.position.set(E.x+E.fx*v.ds+E.rx*v.u-R.x,E.y+.34,E.z+E.fz*v.ds+E.rz*v.u-R.z),m.rotation.y=E.h+(v.dir>0?Math.PI:0),e.emissiveIntensity=.3+w*1.1}}}var fM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',nr=2048,dM=4096;function nh(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}var Hm=nh(256,256);{let s=Hm.getContext("2d"),e=s.createImageData(256,256),t=Ot(7);for(let n=0;n<e.data.length;n+=4){let i=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=i,e.data[n+3]=255}s.putImageData(e,0,0)}var pd=class{constructor(e=0){let t=this.H=dM+e;this.cA=nh(nr,t),this.cE=nh(nr/2,t/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,nr/2,t/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,nr,t),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Hm,"repeat")}add(e,t,n,i){if(this.x+t+4>nr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let u of[this.a,this.e])u.save(),u===this.e&&u.scale(.5,.5),u.translate(o.x,o.y),u.beginPath(),u.rect(0,0,t,n),u.clip();i(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5,l=this.H;return this.cells[e]={u0:(o.x+a)/nr,u1:(o.x+t-a)/nr,v0:1-(o.y+n-a)/l,v1:1-(o.y+a)/l,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,i,r,o,a){let l=this.cells[e];l&&(this.a.drawImage(t,n,i,r,o,l.px,l.py,l.w,l.h),this.e.drawImage(t,n,a,r,o,l.px/2,l.py/2,l.w/2,l.h/2))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let i=new ni(n);return i.colorSpace=Wt,i.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),i.minFilter=Pn,i.generateMipmaps=!0,i};return{map:t(this.cA),emissive:t(this.cE)}}};function yn(s,e,t,n,i=.1){s.save(),s.globalAlpha=i,s.globalCompositeOperation="overlay",s.fillStyle=e.grain,s.fillRect(0,0,t,n),s.restore()}function Dn(s,e,t,n,i,r){let o=s.createLinearGradient(0,t,0,t+i);r.forEach(([a,l])=>o.addColorStop(a,l)),s.fillStyle=o,s.fillRect(e,t,n,i)}function Fo(s,e,t,n,i="#ebe7df",r=0){if(s.fillStyle=i,s.fillRect(0,0,t,n),Dn(s,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){s.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)s.fillRect(0,o,t,1.5)}yn(s,e,t,n,.13)}function Cs(s,e,t,n,i,r=.13){let o=s.createLinearGradient(0,t,0,t+i);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),s.fillStyle=o,s.fillRect(e,t,n,i)}function X(s,e,t,n,i,r){s.fillStyle=r,s.fillRect(e,t,n,i)}function Bo(s,e,t,n,i,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){X(s,e-r,t-r,n+2*r,i+2*r,o),X(s,e-r,t+i,n+2*r,r*.6,"rgba(0,0,0,0.12)"),s.strokeStyle=a,s.lineWidth=1,s.strokeRect(e-r+.5,t-r+.5,n+2*r-1,i+2*r-1)}function Ps(s,e,t,n,i,r,o=0){let a=s.createLinearGradient(e,t,e+n*.35,t+i),l=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,l),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),s.fillStyle=a,s.fillRect(e,t,n,i),s.save(),s.beginPath(),s.rect(e,t,n,i),s.clip(),s.fillStyle="rgba(255,255,255,0.32)",s.beginPath(),s.ellipse(e+n*(.2+r()*.6),t+i*.75,n*.35,i*.16,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();s.beginPath(),s.moveTo(h,t),s.lineTo(h+n*.18,t),s.lineTo(h-n*.25,t+i),s.lineTo(h-n*.43,t+i),s.fill(),s.restore()}function Om(s,e,t,n,i,r="#efe6d2"){X(s,e,t,n,i,r),s.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))s.fillRect(e+o,t,1.5,i);Dn(s,e,t,n,i,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function ih(s,e,t=800){s.font=`${t} ${e}px ${fM}`}function Pt(s,e,t,n,i,r,o,a=800,l=null){ih(s,r,a);let u=r;for(;s.measureText(e).width>i&&u>6;)u-=1,ih(s,u,a);s.textAlign="center",s.textBaseline="middle",l&&(s.lineWidth=Math.max(2,u*.12),s.strokeStyle=l,s.lineJoin="round",s.strokeText(e,t,n)),s.fillStyle=o,s.fillText(e,t,n)}function eh(s,e,t,n,i,r,o,a=800,l=null){let u=[...e],h=u.length,d=Math.min(r*1.05,(i-n)/h),p=Math.min(r,d*.95);ih(s,p,a),s.textAlign="center",s.textBaseline="middle",u.forEach((g,b)=>{let S=n+(i-n-d*h)/2+d*(b+.5);l&&(s.lineWidth=Math.max(2,p*.12),s.strokeStyle=l,s.strokeText(g,t,S)),s.fillStyle=o,s.fillText(g,t,S)})}function Lr(s,e,t,n,i,r,o,a=!0){if(X(s,e,t,n,i,r),s.save(),s.globalCompositeOperation="multiply",Dn(s,e,t,n,i,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){s.fillStyle="#6a6a6a";for(let l=e+n*.2*o();l<e+n-4;l+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-l),h=i*(.12+o()*.25);s.fillRect(l,t+i-h,u,h)}}s.restore()}function pM(s,e,t,n,i,r,o){let a=s.getTransform();e.save(),e.drawImage(s.canvas,a.e+t,a.f+n,i,r,t,n,i,r),e.globalCompositeOperation="multiply",X(e,t,n,i,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,X(e,t,n,i,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Dn(e,t,n,i,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var zm=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],th=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],km=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],mM=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Vm(s=0){let e=new pd(s),t=Ot(2024),n=240,i=(c,y,f,m,v,E,_=!1)=>{Fo(c,e,f,m,"#ece8e0",0);let T=Ot(E*31+(v?7:0)+5);if(E===0){let R=f*.14,w=m*.22,P=f*.72,C=m*.5;Bo(c,R,w,P,C,5),Ps(c,R,w,P/2,C,T),Ps(c,R+P/2,w,P/2,C,T);let A=T()<.8?P*(.18+T()*.25):0;A&&Om(c,R+2,w+2,A,C-4,T()<.5?"#efe6d2":"#d9e4ea"),X(c,R+P/2-2,w,4,C,"#cfd4da"),X(c,R-8,w+C+5,P+16,6,"#d8d8d4"),Cs(c,R-4,w+C+11,8,60),Cs(c,R+P-4,w+C+11,8,60),v&&(Lr(y,R,w,P,C,_?"#e6eeff":"#ffcf8f",T),A&&X(y,R+2,w+2,A,C-4,_?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),X(y,R+P/2-2,w,4,C,"#000"))}else if(E===1){for(let R of[.12,.56]){let w=f*R,P=m*.28,C=f*.3,A=m*.36;Bo(c,w,P,C,A,4),Ps(c,w,P,C,A,T,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(w,P,C,A*.45),Cs(c,w,P+A+6,C,40,.1),v&&T()<.8&&Lr(y,w,P,C,A,T()<.5?"#ffd9a0":"#e8f0ff",T)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(f*.88,m*.2,9,0,7),c.fill()}else if(E===2){let R=f*.1,w=m*.12,P=f*.8,C=m*.84;Bo(c,R,w,P,C,4),Ps(c,R,w,P/2,C,T),Ps(c,R+P/2,w,P/2,C,T);let A=P*(.2+T()*.3);Om(c,R+2,w+2,A,C-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),X(c,R+P/2-2,w,4,C,"#cfd4da"),v&&(Lr(y,R,w,P,C,_?"#e6eeff":"#ffcb85",T),X(y,R+2,w+2,A,C-4,_?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),X(y,R+P/2-2,w,4,C,"#000"))}else if(E===3){Fo(c,e,f,m,"#dfe3e6",0);let R=m*.25,w=m*.55;Ps(c,0,R,f,w,T,1);for(let P=0;P<=f;P+=f/4)X(c,P-2,R,4,w,"#8d98a6");if(X(c,0,R-4,f,4,"#8d98a6"),X(c,0,R+w,f,5,"#7d8796"),v)for(let P=0;P<4;P++)T()<.7&&Lr(y,P*f/4+2,R,f/4-4,w,T()<.6?"#f2f6ff":"#ffe2b0",T)}else if(E===4){c.fillStyle="#6b4a35",c.fillRect(0,0,f,m);for(let A=0;A<m;A+=12)X(c,0,A,f,2,"rgba(30,18,10,0.35)"),X(c,0,A+2,f,1,"rgba(255,220,180,0.06)");yn(c,e,f,m,.15);let R=f*.18,w=m*.25,P=f*.64,C=m*.45;X(c,R-6,w-6,P+12,C+12,"#4a3020"),X(c,R,w,P,C,"#efe4c8"),c.fillStyle="#5a3a26";for(let A=1;A<6;A++)c.fillRect(R+A*P/6-1.5,w,3,C);for(let A=1;A<3;A++)c.fillRect(R,w+A*C/3-1.5,P,3);if(v){Lr(y,R,w,P,C,"#ffc070",T,!1),y.fillStyle="#000";for(let A=1;A<6;A++)y.fillRect(R+A*P/6-1.5,w,3,C);for(let A=1;A<3;A++)y.fillRect(R,w+A*C/3-1.5,P,3)}}else if(E===5){X(c,f*.08,0,7,m,"#bdbdb6"),X(c,f*.08+5,0,2,m,"rgba(0,0,0,0.2)");let R=f*.55,w=m*.3,P=f*.22,C=m*.24;Bo(c,R,w,P,C,3),X(c,R,w,P,C,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(R,w,P,C/2),Cs(c,R,w+C+4,P,50,.12),X(c,f*.22,m*.55,26,34,"#cfcfca"),X(c,f*.22+4,m*.55+6,18,12,"#9aa2a8"),v&&Lr(y,R,w,P,C,_?"#eef2ff":"#fff0d8",T,!1)}else if(E===6){let R=f*.4,w=m*.35,P=f*.2,C=m*.28;Bo(c,R,w,P,C,3),Ps(c,R,w,P,C,T,1),Cs(c,R,w+C+4,P,70,.14),v&&Lr(y,R,w,P,C,_?"#e8efff":"#ffd9a0",T)}};for(let c=0;c<7;c++)e.add("win"+c,n,n,(y,f,m,v)=>i(y,f,m,v,!1,c)),e.add("win"+c+"L",n,n,(y,f,m,v)=>i(y,f,m,v,!0,c));for(let c of[0,2,5,6])e.add("win"+c+"C",n,n,(y,f,m,v)=>i(y,f,m,v,!0,c,!0));e.add("plain",n,n,(c,y,f,m)=>{Fo(c,e,f,m,"#ece8e0"),Cs(c,f*.3,0,12,m*.6,.06)}),e.add("concrete",n,n,(c,y,f,m)=>{Fo(c,e,f,m,"#d9d7d0",60);for(let v=0;v<6;v++)Cs(c,v*41%f,0,10,m*.5,.07)});let r=288,o=(c,y,f,m,v,E,_)=>{let T=(w,P,C,A,L,D=0)=>{c.fillStyle=L,c.beginPath(),c.ellipse(w,P,C,A,D,0,7),c.fill()},R=w=>w[Math.floor(E()*w.length)];if(_==="bakery"){X(c,y,f,m,v,"#d9b98a"),Dn(c,y,f,m,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let w=f+v*.28;w<f+v*.72;w+=v*.2){X(c,y,w,m,5,"#8a5a32");for(let P=y+8;P<y+m-8;P+=15+E()*10){let C=7+E()*6,A=4+E()*3;T(P,w-A,C,A,R(["#c98a3e","#b4732e","#d9a256","#a4632a"])),T(P-C*.2,w-A*1.4,C*.5,A*.35,"rgba(255,230,180,0.5)")}}X(c,y+4,f+v*.8,m-8,v*.2,"#efe7d8"),X(c,y+4,f+v*.8,m-8,3,"#9a9a96");for(let w=y+14;w<y+m-10;w+=18)T(w,f+v*.9,6,4,R(["#e8b35a","#c06a3a","#f2d29a"]));X(c,y+m-64,f+10,52,22,"#7a3e1e"),Pt(c,"\u713C\u304D\u305F\u3066",y+m-38,f+21,46,14,"#fff3dc",800)}else if(_==="books"){X(c,y,f,m,v,"#6f5a46");for(let w=f+6;w<f+v*.72;w+=v*.17){X(c,y,w+v*.15,m,4,"#4a3828");for(let P=y+3;P<y+m-4;){let C=3+E()*4,A=v*(.1+E()*.045);X(c,P,w+v*.15-A,C,A,R(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),P+=C+(E()<.1?4:.6)}}X(c,y+4,f+v*.76,m-8,v*.24,"#8a7560");for(let w=y+8;w<y+m-22;w+=24)X(c,w,f+v*.79,20,28,R(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),X(c,w+3,f+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(_==="florist"){X(c,y,f,m,v,"#e8e2d2"),Dn(c,y,f,m,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let w=0;w<7;w++){let P=y+8+E()*(m-16),C=v*(.15+E()*.25);for(let A=0;A<C;A+=3.5)T(P+Math.sin(A*.25+w)*4+(E()-.5)*6,f+4+A,3.4,1.8,R(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),E()*3)}for(let w=0;w<3;w++){let P=f+v*(.5+w*.17);X(c,y,P+14,m,4,"#9a8a76");for(let C=y+10+w*6;C<y+m-8;C+=19){let A=R(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let L=0;L<6;L++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let D=C+(E()-.5)*14;c.moveTo(C,P+10),c.lineTo(D,P-6-E()*8),c.stroke(),T(D,P-8-E()*8,3.2,3,A)}X(c,C-6,P+4,12,11,R(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(_==="clothes"){X(c,y,f,m,v,"#efece6"),Dn(c,y,f,m,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),X(c,y+6,f+v*.18,m-60,3,"#7a7a7a");for(let P=y+12;P<y+m-66;P+=13+E()*5){c.fillStyle=R(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let C=f+v*.18+3,A=v*(.3+E()*.2);c.beginPath(),c.moveTo(P-5,C),c.lineTo(P+5,C),c.lineTo(P+8,C+A),c.lineTo(P-8,C+A),c.closePath(),c.fill()}let w=y+m-32;T(w,f+v*.16,7,8,"#d8cfc4"),c.fillStyle=R(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(w-14,f+v*.24),c.lineTo(w+14,f+v*.24),c.lineTo(w+18,f+v*.66),c.lineTo(w-18,f+v*.66),c.closePath(),c.fill(),X(c,w-2,f+v*.66,4,v*.24,"#8a8a8a"),X(c,y+8,f+v*.74,m*.55,6,"#8a6a4a");for(let P=y+12;P<y+m*.55;P+=14)X(c,P,f+v*.74-8,11,8,R(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let w=7;for(let P=f+v*.25;P<f+v;P+=v*.22)for(let C=y+3;C<y+m-6;C+=6+E()*8)t(),w=Math.imul(w,31)+Math.floor(E()*997+E()*61+E()*7)|0;_==="cafe"?d(c,y,f,m,v,Ot(w>>>0)):h(c,y,f,m,v,Ot(w>>>0),_==="konbini")}},a=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,y,f,m,v,E,_="bbccutp")=>{let T=y+1+E()*3;for(;T<f-4;){let R=_[Math.floor(E()*_.length)],w=a[Math.floor(E()*a.length)],P=E()<.5?"#f8f6f0":a[Math.floor(E()*a.length)],C={b:8+E()*6,c:6+E()*2,u:9+E()*2,t:5+E()*2,p:12+E()*5}[R],A=Math.min(v,{b:14+E()*12,c:11+E()*3,u:10+E()*3,t:18+E()*9,p:14+E()*8}[R]),L=2+Math.floor(E()*5);for(let D=0;D<L&&T+C<f-1;D++,T+=C+.6){let U=m-A;R==="t"?(X(c,T,U+A*.3,C,A*.7,w),X(c,T+C*.3,U+A*.1,C*.4,A*.22,w),X(c,T+C*.28,U,C*.44,A*.11,P==="#f8f6f0"?"#e8e8e4":"#d83a2a"),X(c,T,U+A*.5,C,A*.22,P)):R==="c"?(X(c,T,U,C,A,w),X(c,T,U,C,1.5,"#d8dce0"),X(c,T,U+A*.35,C,A*.3,P)):R==="u"?(c.fillStyle=w,c.beginPath(),c.moveTo(T,U+2),c.lineTo(T+C,U+2),c.lineTo(T+C-1.2,m),c.lineTo(T+1.2,m),c.fill(),X(c,T-.4,U,C+.8,2.2,"#f2efe6"),X(c,T+1,U+A*.45,C-2,A*.25,P)):R==="p"?(c.fillStyle=w,c.beginPath(),c.moveTo(T,m),c.lineTo(T,U+3),c.quadraticCurveTo(T+C/2,U-1.5,T+C,U+3),c.lineTo(T+C,m),c.fill(),X(c,T+1.5,U+A*.35,C-3,A*.35,P),X(c,T,U+2,C,1,"rgba(0,0,0,0.18)")):(X(c,T,U,C,A,w),X(c,T+1.5,U+A*.3,C-3,A*.4,P)),X(c,T,U+1,1,A-1,"rgba(255,255,255,0.28)"),X(c,T+C-1.3,U+1,1.3,A-1,"rgba(0,0,0,0.22)")}T+=1.5+E()*3}},u=(c,y,f,m,v)=>{Dn(c,y,m+4,f,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),X(c,y,m,f,4,"#d3d6da"),X(c,y,m+3.2,f,.8,"rgba(40,40,50,0.45)");for(let E=y+4+v()*10;E<y+f-6;E+=14+v()*16)X(c,E,m+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},h=(c,y,f,m,v,E,_)=>{X(c,y,f,m,v,_?"#f3f1ea":"#ece5d8"),X(c,y,f,m,v*.13,_?"#f6f6f2":"#efebe2");for(let P of[.035,.085])X(c,y,f+v*P,m,2.4,"#ffffff"),Dn(c,y,f+v*P+2.4,m,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Dn(c,y,f+v*.13,m,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let P=0,C=y+18+E()*30;P<2&&C<y+m-40;P++,C+=90+E()*40)X(c,C+13,f+v*.13,1,6,"#888"),X(c,C,f+v*.13+6,28,9,a[Math.floor(E()*9)]),X(c,C+4,f+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let R=f+v*.25,w=v*.165;X(c,y,R-4,m,4,"#c9ccd0");for(let P=0;P<4;P++){let C=R+w*(P+1);Dn(c,y,C-w,m,w,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,y,y+m,C,w-6,E),u(c,y,m,C,E)}X(c,y,R+w*4+4,m,f+v-R-w*4-4,"#5c6068"),X(c,y,R+w*4+4,m,1.5,"#8a8e96");for(let P=y+2+E()*20;P<y+m;P+=70+E()*12)X(c,P,R-4,3,w*4+8,"#b4b8be"),X(c,P+2.2,R-4,.8,w*4+8,"rgba(0,0,0,0.3)");if(_){let P=f+v*.7;X(c,y,P+26,m,f+v-P-26,"#7a7e86"),X(c,y,P+26,m,2,"#a8acb2");for(let C=y+2;C<y+m-14;C+=15.5){let A=a[Math.floor(E()*a.length)],L=E()*2;X(c,C,P+L,14,26-L,A),X(c,C,P+L,14,5,E()<.6?"#ffffff":"#e8343a"),X(c,C+2,P+L+8,10,10,E()<.5?"#f2c8a8":a[Math.floor(E()*a.length)]),X(c,C+13,P+L,1,26-L,"rgba(0,0,0,0.25)")}}},d=(c,y,f,m,v,E)=>{X(c,y,f,m,v,"#b88a5e"),Dn(c,y,f,m,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let T=y;T<y+m;T+=9)X(c,T,f+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let _=f+v*.3;for(let T=0;T<2;T++){let R=_+T*22;X(c,y+8,R,m*.55,3,"#6a4428"),l(c,y+10,y+m*.55+6,R,14,E,"ctu")}X(c,y+m*.64,f+v*.22,m*.28,v*.26,"#2e3a32"),X(c,y+m*.64,f+v*.22,m*.28,2,"#6a4428");for(let T=0;T<5;T++)X(c,y+m*.67,f+v*(.27+T*.04),m*(.12+E()*.1),1.6,"rgba(240,240,230,0.75)");X(c,y+4,f+v*.56,m-8,6,"#5a3820"),X(c,y+4,f+v*.56+6,m-8,v*.08,"#7a5232"),X(c,y+m*.3,f+v*.47,18,v*.09,"#c8ccd0"),X(c,y+m*.3+3,f+v*.47+3,12,5,"#3a3a40");for(let T=y+30+E()*20;T<y+m-20;T+=70+E()*20)X(c,T,f,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(T-9,f+v*.2),c.quadraticCurveTo(T+.5,f+v*.12,T+10,f+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(T+.5,f+v*.2,7,2,0,0,7),c.fill();for(let T=y+26+E()*16;T<y+m-26;T+=78+E()*20){X(c,T-16,f+v*.74,32,4,"#4a2e1c"),X(c,T-1.5,f+v*.74+4,3,v*.2,"#2e2420"),X(c,T-8,f+v*.94,16,2,"#2e2420");for(let R of[-24,24])X(c,T+R-6,f+v*.8,12,3,"#3a2618"),X(c,T+R+(R<0?-6:4),f+v*.66,2,v*.17,"#3a2618"),X(c,T+R-5,f+v*.83,1.6,v*.13,"#3a2618"),X(c,T+R+3.4,f+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(T-6,f+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,y,f,m,v,E,_="")=>{let T=Ot(E);if(Fo(c,e,f,m,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let w=m*.22,P=f-12,C=m*.78-4;X(c,6,w,P,C,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),o(c,6,w,P,C,T,_||v),v==="konbini"&&X(c,6,w+4,P,5,"#ffffff"),v==="door"&&(X(c,f/2-30,w+18,60,24,"#fff"),Pt(c,"\u55B6\u696D\u4E2D",f/2,w+30,54,18,"#c82828")),v==="glass"&&!_&&T()<.7&&(X(c,16,w+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),Pt(c,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,w+44,40,16,"#c02020")),pM(c,y,6,w,P,C,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Ps(c,6,w,P,C,T),c.restore(),X(c,6,w,P,4,"#4a4e57"),X(y,6,w,P,4,"#000"),v==="door"&&(X(c,f/2-2,w,4,C,"#4a4e57"),X(y,f/2-2,w,4,C,"#000"),X(c,f/2-14,w+C*.45,3,40,"#c0c4c8"),X(c,f/2+11,w+C*.45,3,40,"#c0c4c8")),v==="cafe"&&(X(c,f*.62,m-70,46,62,"#2c3a30"),X(y,f*.62,m-70,46,62,"#000"),Pt(c,"\u30E9\u30F3\u30C1",f*.62+23,m-50,40,13,"#fff",700))}else if(v==="shutter"){let w=m*.2,P=f-12,C=m*.8;X(c,6,w,P,C,"#b8bcc0");for(let A=w;A<w+C;A+=7)X(c,6,A,P,2,"rgba(60,64,72,0.35)"),X(c,6,A+2,P,1,"rgba(255,255,255,0.35)");X(c,6,w,P,10,"#8f949a"),yn(c,e,f,m,.12),T()<.5&&(X(c,f/2-40,w+C*.35,80,26,"#fff"),Pt(c,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),f/2,w+C*.35+13,74,16,"#333",700))}else if(v==="noren"){X(c,0,0,f,m,"#5b3c28");for(let L=0;L<f;L+=10)X(c,L,m*.2,3,m*.8,"rgba(25,15,8,0.6)");yn(c,e,f,m,.15);let R=f*.12,w=m*.24,P=f*.76,C=m*.34,A=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);X(c,R,w,P,C,A);for(let L=1;L<3;L++)X(c,R+P*L/3-1,w+C*.25,2,C*.75,"rgba(255,255,255,0.25)");Pt(c,t.pick(mM),f/2,w+C*.55,P*.9,46,"#f5f0e6",800),X(c,R,w,P,6,"#3a2a1c"),y.fillStyle="#ffae5c",y.fillRect(R,w+C,P,m-w-C),y.fillStyle="rgba(255,170,90,0.6)",y.fillRect(R,w,P,C),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(f*.9,m*.36,13,19,0,0,7),c.fill(),Pt(c,"\u9152",f*.9,m*.36,16,14,"#fff"),y.fillStyle="#ff6a3a",y.beginPath(),y.ellipse(f*.9,m*.36,13,19,0,0,7),y.fill()}else if(v==="house"){let R=f*.18,w=m*.3,P=f*.34,C=m*.7;X(c,R-6,w-6,P+12,C+6,"#9a9a96"),X(c,R,w,P,C,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),X(c,R+P-14,w+C*.5,4,22,"#d8d0c0"),X(c,R+6,w+10,P-12,C*.25,"rgba(255,255,255,0.18)"),X(c,f*.62,m*.48,30,22,"#cfcfca"),X(c,f*.62+6,m*.48+5,18,4,"#555");let A=f*.6,L=m*.22,D=f*.3,U=m*.2;Bo(c,A,L,D,U,3),Ps(c,A,L,D,U,T,1);for(let V=0;V<3;V++)c.fillStyle="#7b5a43",c.fillRect(f*.6+V*22,m-26,16,18),c.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(f*.6+V*22+8,m-32,11,0,7),c.fill();y.fillStyle="#ffd08a",y.beginPath(),y.arc(R+P+14,w+8,6,0,7),y.fill(),T()<.6&&(y.fillStyle="#ffcf8f",y.fillRect(A,L,D,U))}else if(v==="garage"){let w=m*.25,P=f-16,C=m*.75;X(c,8,w,P,C,"#efefec");for(let A=w;A<w+C;A+=9)X(c,8,A,P,1.5,"rgba(80,80,90,0.25)");yn(c,e,f,m,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,y)=>{e.add("shop_"+c,n,r,(f,m,v,E)=>p(f,m,v,E,c,100+y)),(c==="glass"||c==="noren"||c==="house")&&e.add("shop_"+c+"2",n,r,(f,m,v,E)=>p(f,m,v,E,c,200+y)),c==="glass"&&["bakery","books","florist","clothes"].forEach((f,m)=>e.add("shop_glass"+(m+3),n,r,(v,E,_,T)=>p(v,E,_,T,"glass",300+m,f)))});for(let c=0;c<14;c++)e.add("hs"+c,512,76,(y,f,m,v)=>{let[E,_]=th[c%th.length],T=zm[c*7%zm.length];X(y,0,0,m,v,E),X(y,0,0,m,5,"rgba(255,255,255,0.35)"),X(y,0,v-6,m,6,"rgba(0,0,0,0.18)"),c%3===0&&(X(y,12,12,v-24,v-24,_),Pt(y,T[0],12+(v-24)/2,v/2,v-30,34,E)),Pt(y,T,m/2+(c%3===0?24:0),v/2+2,m*.7,50,_,900),yn(y,e,m,v,.08),f.fillStyle=E==="#fff"||E==="#f5efe0"?"#d9d6cc":E,f.fillRect(0,0,m,v),f.globalAlpha=.9,Pt(f,T,m/2+(c%3===0?24:0),v/2+2,m*.7,50,_==="#fff"?"#ffffff":_,900),f.globalAlpha=1});for(let[c,y,f]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])e.add("hs_"+c,512,76,(m,v,E,_)=>{X(m,0,0,E,_,y),X(m,0,0,E,5,"rgba(255,255,255,0.35)"),X(m,0,_-6,E,6,"rgba(0,0,0,0.18)"),Pt(m,c,E/2,_/2+2,E*.7,50,f,900),yn(m,e,E,_,.08),v.fillStyle=y,v.fillRect(0,0,E,_),v.globalAlpha=.9,Pt(v,c,E/2,_/2+2,E*.7,50,f,900),v.globalAlpha=1});let g=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],b=(c,y,f,m,v,E)=>{c.beginPath(),c.moveTo(y+E,f),c.arcTo(y+m,f,y+m,f+v,E),c.arcTo(y+m,f+v,y,f+v,E),c.arcTo(y,f+v,y,f,E),c.arcTo(y,f,y+m,f,E),c.closePath()};for(let c=0;c<10;c++)e.add("vs"+c,72,288,(y,f,m,v)=>{let E=km[c%km.length],_=g[(c*5+2)%g.length],T=c%10===3||c%10===6||c%10===8,[R,w]=th[(c*3+1)%th.length],P=T?R==="#fff"||R==="#f5efe0"?"#2b2b33":R:"#fbf7ef",C=T?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];X(y,0,0,m,v,"#2a2b30"),b(y,3,3,m-6,v-6,8),y.fillStyle=P,y.fill(),Dn(y,3,3,m-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),y.save(),b(y,8,8,m-16,v-16,6),y.strokeStyle=_,y.globalAlpha=.55,y.lineWidth=7,y.stroke(),y.globalAlpha=1,y.strokeStyle="#fff6fb",y.lineWidth=2.2,y.stroke(),y.restore(),eh(y,E,m/2,18,v-18,50,C,900),yn(y,e,m,v,.06),X(f,0,0,m,v,"#000"),b(f,3,3,m-6,v-6,8),f.fillStyle=T?"#3a3a3e":"#4a4844",f.fill(),f.save(),b(f,8,8,m-16,v-16,6),f.strokeStyle=_,f.lineWidth=7,f.stroke(),f.strokeStyle="#ffffff",f.lineWidth=2.5,f.stroke(),f.restore(),eh(f,E,m/2,18,v-18,50,T?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,y,f],m)=>e.add("bb"+m,512,240,(v,E,_,T)=>{X(v,0,0,_,T,"#fbfaf5"),X(v,0,0,_,T*.62,f),Pt(v,c,_/2,T*.32,_*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Pt(v,y,_/2,T*.8,_*.85,52,"#333",800),yn(v,e,_,T,.08),X(E,0,0,_,T,"#555"),E.globalAlpha=.85,X(E,0,0,_,T*.62,f),Pt(E,c,_/2,T*.32,_*.9,96,"#fff",900),E.globalAlpha=1})),e.add("konbini_band",480,72,(c,y,f,m)=>{X(c,0,0,f,m,"#fbfbf7"),X(c,0,m*.62,f,m*.14,"#2a9a4a"),X(c,0,m*.76,f,m*.12,"#f08a24"),X(c,0,m*.88,f,m*.12,"#2f6fd8"),Pt(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,m*.32,f*.8,40,"#1d3d8a",900),y.fillStyle="#f3f6f0",y.fillRect(0,0,f,m),Pt(y,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",f/2,m*.32,f*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)e.add("vend"+c,128,234,(y,f,m,v)=>{let E=["#d8352a","#2f6fd8","#f4f4f0"][c];X(y,0,0,m,v,E),X(y,8,10,m-16,v*.55,"#eef4f8");let _=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let T=0;T<4;T++)for(let R=0;R<6;R++){let w=14+R*17,P=18+T*30;y.fillStyle=_[(T*6+R+c)%_.length],y.fillRect(w,P,11,20),y.fillStyle="rgba(255,255,255,0.5)",y.fillRect(w+2,P+2,3,14),y.fillStyle="#2a2a2a",y.fillRect(w,P+23,11,3)}X(y,10,v*.62,m-20,22,"#222"),X(y,m-34,v*.66,14,22,"#bbb"),X(y,14,v*.82,m-28,22,"#1b1b1b"),Pt(y,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],m/2,v*.62+11,m-28,14,"#fff",700),yn(y,e,m,v,.08),f.fillStyle="#f2f8ff",f.fillRect(8,10,m-16,v*.55);for(let T=0;T<4;T++)for(let R=0;R<6;R++)f.fillStyle=_[(T*6+R+c)%_.length],f.fillRect(14+R*17,18+T*30,11,20);f.fillStyle="#9fd0ff",f.fillRect(10,v*.62,m-20,22)});e.add("ac",128,88,(c,y,f,m)=>{X(c,0,0,f,m,"#e9e9e4"),Dn(c,0,0,f,m,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(f*.4,m*.5,m*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<m*.36;v+=6)c.beginPath(),c.arc(f*.4,m*.5,v,0,7),c.stroke();for(let v=12;v<m-10;v+=6)X(c,f*.78,v,f*.16,2,"#b8b8b2")}),e.add("plate",128,64,(c,y,f,m)=>{X(c,0,0,f,m,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,f-6,m-6),Pt(c,"\u54C1\u5DDD 580",f/2,16,f*.6,14,"#2f5a2f",700),Pt(c,"\u3042 12-34",f/2,42,f*.85,28,"#2f5a2f",800)}),e.add("sign_stop",128,112,(c,y,f,m)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(f-2,2),c.lineTo(f/2,m-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(f-10,7),c.lineTo(f/2,m-12),c.fill(),Pt(c,"\u6B62\u307E\u308C",f/2,34,f*.62,30,"#fff",900)}),e.add("sign_blue",112,112,(c,y,f,m)=>{c.fillStyle="#fff",c.beginPath(),c.arc(f/2,m/2,f/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(f/2,m/2,f/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(f/2,22),c.lineTo(f/2+22,50),c.lineTo(f/2+8,50),c.lineTo(f/2+8,88),c.lineTo(f/2-8,88),c.lineTo(f/2-8,50),c.lineTo(f/2-22,50),c.fill()}),e.add("sign_speed",112,112,(c,y,f,m)=>{c.fillStyle="#fff",c.beginPath(),c.arc(f/2,m/2,f/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(f/2,m/2,f/2-9,0,7),c.stroke(),Pt(c,"30",f/2,m/2+2,f*.6,50,"#1e4ea8",900)}),e.add("pole_plate",48,144,(c,y,f,m)=>{X(c,0,0,f,m,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,f-6,m-6),eh(c,"\u672C\u753A\u4E8C\u4E01\u76EE",f/2,10,m-10,24,"#fff",700)});for(let c=0;c<4;c++)e.add("poster"+c,64,90,(y,f,m,v)=>{let E=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];X(y,0,0,m,v,E),X(y,4,4,m-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Pt(y,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],m/2,v*.25,m-12,18,"#fff",900);for(let _=0;_<4;_++)X(y,8,v*.58+_*8,m-16-_%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)e.add("bal"+c,n,88,(y,f,m,v)=>{let E=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(Fo(y,e,m,v,E),c===1)for(let _=10;_<m-6;_+=m/6)X(y,_,10,m/6-8,v-20,"rgba(220,235,245,0.9)"),y.fillStyle="rgba(255,255,255,0.45)",y.fillRect(_,10,m/6-8,(v-20)*.4);else{X(y,0,0,m,7,"rgba(255,255,255,0.4)");for(let _=m/3;_<m;_+=m/3)X(y,_-1,0,2,v,"rgba(0,0,0,0.08)")}X(y,0,v-6,m,6,"rgba(0,0,0,0.12)"),Cs(y,m*.3,v-6,10,10,.2)});e.add("kawara",272,256,(c,y,f,m)=>{X(c,0,0,f,m,"#58617a");for(let v=0;v<m;v+=16)Dn(c,0,v,f,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<f;v+=20)X(c,v,0,2,m,"rgba(0,0,0,0.18)");yn(c,e,f,m,.12)}),e.add("wood",256,256,(c,y,f,m)=>{X(c,0,0,f,m,"#6d4c37");for(let v=0;v<m;v+=14)X(c,0,v,f,2,"rgba(25,15,8,0.4)"),X(c,0,v+2,f,1,"rgba(255,220,180,0.07)");yn(c,e,f,m,.16)}),e.add("block",256,128,(c,y,f,m)=>{X(c,0,0,f,m,"#c9c7bf");for(let v=0;v<m;v+=32)for(let E=v/32%2?-32:0;E<f;E+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(E+1,v+1,62,30);for(let v=0;v<f;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);yn(c,e,f,m,.15),Cs(c,0,0,f,40,.1)}),e.add("lantern",64,96,(c,y,f,m)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(f/2,m/2,f/2-2,m/2-8,0,0,7),c.fill();for(let v=16;v<m-12;v+=7)X(c,4,v,f-8,1.5,"rgba(0,0,0,0.2)");X(c,f/2-14,2,28,8,"#222"),X(c,f/2-14,m-10,28,8,"#222"),Pt(c,"\u796D",f/2,m/2,f*.6,28,"#fff",900),y.fillStyle="#ff6a35",y.beginPath(),y.ellipse(f/2,m/2,f/2-2,m/2-8,0,0,7),y.fill()}),e.add("busstop",96,96,(c,y,f,m)=>{c.fillStyle="#fff",c.beginPath(),c.arc(f/2,m/2,f/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(f/2,m/2,f/2-6,0,7),c.stroke(),Pt(c,"\u30D0\u30B9\u505C",f/2,m/2,f*.66,20,"#1d3d8a",900)}),e.add("white",16,16,c=>X(c,0,0,16,16,"#ffffff")),e.add("sign_xing",120,120,(c,y,f,m)=>{c.save(),c.translate(f/2,m/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(f/2-22,m/2-6,44,18),c.fillRect(f/2-16,m/2-16,18,12),c.fillRect(f/2+8,m/2-13,5,7),c.beginPath(),c.arc(f/2-12,m/2+15,5,0,7),c.arc(f/2+12,m/2+15,5,0,7),c.fill(),Pt(c,"\u8E0F\u5207",f/2,m/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,y)=>e.add("bridge"+y,64,176,(f,m,v,E)=>{X(f,0,0,v,E,"#b9b5ab"),yn(f,e,v,E,.2),X(f,6,6,v-12,E-12,"#a7a398"),eh(f,c,v/2,14,E-14,34,"#3f3c37",800)})),e.add("signal",240,84,(c,y,f,m)=>{X(c,0,0,f,m,"#4a4d52"),X(c,0,0,f,5,"#5c6066"),yn(c,e,f,m,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,E])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(E,m/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(E,m/2,27,0,7),c.fill()})}),e.add("ped_sig",64,128,(c,y,f,m)=>{X(c,0,0,f,m,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,f-16,m/2-12),c.fillStyle="#0d4f44",c.fillRect(8,m/2+4,f-16,m/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(f/2,m*.18,6,0,7),c.fill(),c.fillRect(f/2-5,m*.24,10,18)}),e.add("tomare",256,96,(c,y,f,m)=>{c.clearRect(0,0,f,m),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,f,m),Pt(c,"\u6B62\u307E\u308C",f/2,m/2+4,f*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,y)=>e.add("hodokyo"+y,256,44,(f,m,v,E)=>{X(f,0,0,v,E,"#1f4f96"),f.strokeStyle="#fff",f.lineWidth=3,f.strokeRect(4,4,v-8,E-8),Pt(f,c,v/2,E/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,y,f],m)=>{let v=M[(m+3)%4][0],E=M[(m+1)%4][0];e.add("ekimei"+m,320,124,(_,T,R,w)=>{X(_,0,0,R,w,"#3a3d42"),X(_,4,4,R-8,w-8,"#f8f8f3"),Pt(_,y,R/2,20,R*.5,15,"#2b2b2b",700),Pt(_,c,R/2,52,R*.6,40,"#151515",900),Pt(_,f,R/2,80,R*.5,12,"#555",600),X(_,4,w-30,R-8,26,"#1f9a50"),_.fillStyle="#fff",ih(_,12,700),_.textBaseline="middle",_.textAlign="left",_.fillText("\u2190 "+v,12,w-17),_.textAlign="right",_.fillText(E+" \u2192",R-12,w-17),yn(_,e,R,w,.06),X(T,4,4,R-8,w-8,"#8a8a84")}),e.add("ekiplate"+m,220,48,(_,T,R,w)=>{X(_,0,0,R,w,"#4b3326"),yn(_,e,R,w,.2),Pt(_,c+"\u99C5",R/2,w/2+1,R*.8,30,"#f3ead8",800)})});for(let c of["l","r"])e.add("chev_"+c,96,120,(y,f,m,v)=>{X(y,0,0,m,v,"#f4f4ef"),X(y,4,4,m-8,v-8,"#1e5bb8"),y.fillStyle="#f8f8f4",y.beginPath();let E=c==="r"?1:-1,_=m/2,T=v/2;y.moveTo(_-E*26,T-40),y.lineTo(_+E*22,T),y.lineTo(_-E*26,T+40),y.lineTo(_-E*8,T+40),y.lineTo(_+E*40,T),y.lineTo(_-E*8,T-40),y.closePath(),y.fill()});["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,y)=>e.add("tunnel"+y,360,80,(f,m,v,E)=>{X(f,0,0,v,E,"#e9e7e0"),X(f,4,4,v-8,E-8,"#24403b"),yn(f,e,v,E,.08),Pt(f,c,v/2,E*.42,v*.8,38,"#f4f2ea",800),Pt(f,"L = 170 m",v/2,E*.8,v*.4,13,"#c9d6cf",600)})),e.add("yabane",64,112,(c,y,f,m)=>{X(c,0,0,f,m,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<m;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(f/2,v+20),c.lineTo(f-4,v),c.lineTo(f-4,v+11),c.lineTo(f/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,f-3,m-3)}),e.add("xing_plate",128,48,(c,y,f,m)=>{X(c,0,0,f,m,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,f-6,m-6),Pt(c,"\u8E0F\u5207\u6CE8\u610F",f/2,m/2,f*.8,26,"#d8231c",900)}),e.add("rail",240,80,(c,y,f,m)=>{c.clearRect(0,0,f,m),X(c,0,0,f,7,"#e9ebee"),X(c,0,6,f,2,"rgba(60,70,80,0.5)"),X(c,0,m-6,f,6,"#d5d8dc");for(let v=3;v<f;v+=9)X(c,v,7,3,m-13,"#e2e5e9"),X(c,v+2,7,1,m-13,"rgba(70,80,90,0.45)")}),e.add("gogan",256,224,(c,y,f,m)=>{let v=Ot(4242);X(c,0,0,f,m,"#3d3f3c");let E=38,_=E/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,f,m-22),c.clip();for(let T=-2;T*_<m+E;T++)for(let R=-2;R*E<f+E;R++){let w=R*E+(T%2?E/2:0),P=22+T*_,C=.52+v()*.17,A=Math.min(1,Math.max(0,(P-m*.55)/(m*.4))),L=Math.round(255*C*(1-.38*A)),D=`rgb(${L-4},${L-2},${L-9})`;c.fillStyle=D,c.beginPath(),c.moveTo(w,P-_+3.5),c.lineTo(w+_-3.5,P),c.lineTo(w,P+_-3.5),c.lineTo(w-_+3.5,P),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(w,P-_+3.5),c.lineTo(w+_-3.5,P),c.lineTo(w,P),c.closePath(),c.fill(),A>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(w+(v()-.5)*10,P+6,4+v()*6,0,7),c.fill())}c.restore(),Dn(c,0,m*.55,f,m*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),X(c,0,0,f,22,"#8c8d87"),X(c,0,18,f,4,"rgba(0,0,0,0.3)"),X(c,0,0,f,3,"rgba(255,255,255,0.2)"),yn(c,e,f,m,.12)}),e.add("wrail",240,80,(c,y,f,m)=>{c.clearRect(0,0,f,m),X(c,0,0,f,9,"#6a4a34"),X(c,0,0,f,2,"rgba(255,225,190,0.25)"),X(c,0,8,f,2,"rgba(20,10,5,0.45)"),X(c,0,m-10,f,10,"#5e412e"),X(c,0,m-10,f,2,"rgba(255,225,190,0.18)");for(let v=4;v<f;v+=12)X(c,v,9,5,m-19,"#634632"),X(c,v,9,1.2,m-19,"rgba(255,225,190,0.18)"),X(c,v+4,9,1,m-19,"rgba(20,10,5,0.4)");yn(c,e,f,m,.15)}),e.add("woodwall",n,n,(c,y,f,m)=>{let v=Ot(5151);X(c,0,0,f,m,"#5e4130");for(let E=0;E<m;E+=16){let _=v();X(c,0,E,f,16,_<.15?"#6b4b37":_<.3?"#553a2b":"#5e4130"),X(c,0,E,f,2,"rgba(255,220,180,0.12)"),X(c,0,E+14,f,2,"rgba(15,8,4,0.45)");for(let T=v()*80;T<f;T+=60+v()*90)X(c,T,E+2,1.5,12,"rgba(15,8,4,0.35)")}Dn(c,0,0,f,m,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),yn(c,e,f,m,.2)});let x=(c,y,f,m,v,E)=>{let _=Ot(v),T=E===2;X(c,0,0,f,m,"#4b3426"),Dn(c,0,0,f,m,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let R=f*.12,w=m*(T?.3:.17),P=f*.76,C=m*(T?.62:.56);for(let A of[c,y])X(A,R,w,P,C,"#e9b56c"),Dn(A,R,w,P,C,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!T)for(let A=w+C*.32;A<w+C-6;A+=C*.22){for(let L=R+4;L<R+P-10;L+=9+_()*12){let D=10+_()*12;X(c,L,A-D,7,D,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(_()*5)])}X(c,R,A,P,5,"#6e4a30")}T&&(X(c,R,w-m*.12,P,m*.16,"#28356a"),X(y,R,w-m*.12,P,m*.16,"#000")),X(c,R+P/2-4,w,8,C,"#4b3426"),X(y,R+P/2-4,w,8,C,"#000"),X(c,0,w+C,f,6,"#3a281d"),yn(c,e,f,m,.15)};for(let c=0;c<4;c++)e.add("shop_p"+c,360,432,(y,f,m,v)=>x(y,f,m,v,6100+c,c));for(let[c,y]of[["win7",0],["win8",4]])e.add(c,360,348,(f,m,v,E)=>i(f,m,v,E,!1,y)),e.add(c+"L",360,348,(f,m,v,E)=>i(f,m,v,E,!0,y));return e}function Gm(s,e){let t=e.img.width,n=e.img.height;for(let i of e.tiles)s.paintCell(i.name,e.img,i.x*t,i.y*n,i.w*t,i.h*n,i.ey*n)}var Wm={hi:1152,lo:512};function Xm(s,e){let n=s.y+s.rowH+4+12;if(n+e.rows>s.H)return!1;s.x=0,s.y=n,s.rowH=0,s.a.clearRect(0,n-8,nr,s.H-n+8);try{for(let i of e.tiles)s.add(i.name,i.w,i.h,(r,o,a,l)=>{r.clearRect(0,0,a,l),r.drawImage(e.img,i.x,i.y,i.w,i.h,0,0,a,l),o.drawImage(e.img,i.x,i.ey,i.w,i.h,0,0,a,l)})}catch(i){return console.warn("painted houses:",i.message),!1}return!0}function qm(s){let n=nh(1024,3072),i=n.getContext("2d"),r=Ot(321),o={},a=512,l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(x,c,y)=>{let f=l[x],m=256,v=x==="pine",E=x==="sakura";i.save(),i.translate(c,y),i.beginPath(),i.rect(0,0,512,512),i.clip();let _=[[m,m,v?80:92]];for(let R=0;R<(v?10:14);R++){let w=r()*6.28,P=45+r()*120;_.push([m+Math.cos(w)*P,m+Math.sin(w)*P*(v?.42:.9),Math.min(34+r()*52,232-P)])}let T=E?2300:v?2600:2300;for(let R=0;R<T;R++){let w=_[Math.floor(r()*_.length)],P=r()*6.28,C=Math.sqrt(r())*w[2],A=w[0]+Math.cos(P)*C,L=w[1]+Math.sin(P)*C*(v?.45:1),D=C/w[2],U=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(D>.82?.5:0))));if(i.fillStyle=f[U],E){let V=7+r()*8;i.beginPath(),i.arc(A,L,V,0,7),i.fill(),r()<.25&&(i.fillStyle=f[4],i.beginPath(),i.arc(A-V*.3,L-V*.3,V*.4,0,7),i.fill())}else if(v)i.save(),i.translate(A,L),i.rotate((r()-.5)*1.2),i.fillRect(-11,-1.6,22,3.2),i.restore();else if(x==="momiji"){let V=8+r()*7;i.save(),i.translate(A,L),i.rotate(r()*6.28),i.beginPath();for(let O=0;O<10;O++){let k=O%2?V*.42:V,z=O/10*6.2832;i.lineTo(Math.cos(z)*k,Math.sin(z)*k)}i.closePath(),i.fill(),i.restore()}else if(x==="ginkgo"){let V=9+r()*7;i.save(),i.translate(A,L),i.rotate(r()*6.28),i.beginPath(),i.moveTo(0,0),i.arc(0,0,V,-.95,.95),i.closePath(),i.fill(),i.restore()}else{let V=9+r()*10;i.beginPath(),i.ellipse(A,L,V,V*.55,r()*6.28,0,7),i.fill()}}for(let R=0;R<90;R++){let w=r()*6.28,P=150+r()*85,C=m+Math.cos(w)*P,A=m+Math.sin(w)*P*(v?.45:.92);i.fillStyle=f[1+Math.floor(r()*4)],v?(i.save(),i.translate(C,A),i.rotate((r()-.5)*1.2),i.fillRect(-9,-1.6,18,3.2),i.restore()):(i.beginPath(),i.arc(C,A,E?6+r()*6:7+r()*6,0,7),i.fill())}if(E)for(let R=0;R<14;R++){i.strokeStyle="rgba(150,90,100,0.35)",i.lineWidth=1.5;let w=m+(r()-.5)*300,P=m+60+r()*120;i.beginPath(),i.moveTo(w,P),i.lineTo(w+(r()-.5)*40,P-20-r()*30),i.stroke()}i.restore(),o[x]={u0:c/1024,u1:(c+512)/1024,v0:1-(y+512)/3072,v1:1-y/3072}},h=(x,c,y,f)=>{i.save(),i.translate(c,y),i.beginPath(),i.rect(0,0,512,512),i.clip();let m=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],v=f?120:170;for(let E=0;E<v;E++){let _=256+(r()-.5)*(f?330:380)*Math.sqrt(r()),T=150+r()*(f?230:300)*(1-Math.abs(_-256)/300),R=(_-256)*.35+(r()-.5)*90,w=9+r()*9,P=_+R,C=512-T,A=Math.min(4,Math.floor(r()*2.2+T/380*2.6)),L=i.createLinearGradient(0,512,0,C);L.addColorStop(0,m[0]),L.addColorStop(.6,m[Math.max(1,A-1)]),L.addColorStop(1,m[A]),i.fillStyle=L,i.beginPath(),i.moveTo(_-w/2,512),i.quadraticCurveTo(_-w/2+R*.3,512-T*.55,P,C),i.quadraticCurveTo(_+w/2+R*.3,512-T*.5,_+w/2,512),i.fill()}if(f)for(let E=0;E<16;E++){let _=110+r()*290,T=150+r()*200,R=r();if(i.strokeStyle="#3e7334",i.lineWidth=5,i.beginPath(),i.moveTo(_+(r()-.5)*20,512),i.quadraticCurveTo(_+(r()-.5)*30,(T+512)/2,_,T),i.stroke(),R<.55){i.fillStyle="#fbfaf2";for(let w=0;w<12;w++){let P=w/12*6.283;i.beginPath(),i.ellipse(_+Math.cos(P)*11,T+Math.sin(P)*11,9,4.5,P,0,7),i.fill()}i.fillStyle="#f2c230",i.beginPath(),i.arc(_,T,8,0,7),i.fill()}else if(R<.85)i.fillStyle="#f6c62e",i.beginPath(),i.arc(_,T,15,0,7),i.fill(),i.fillStyle="#ffe27a",i.beginPath(),i.arc(_-3,T-3,8,0,7),i.fill();else{i.fillStyle="#9b7fd6";for(let w=0;w<6;w++)i.beginPath(),i.arc(_+(r()-.5)*16,T+(r()-.5)*16,6,0,7),i.fill()}}i.restore(),o[x]={u0:c/1024,u1:(c+512)/1024,v0:1-(y+512)/3072,v1:1-y/3072}},d=(x,c,y)=>{let f=Ot(97);i.save(),i.translate(c,y),i.beginPath(),i.rect(0,0,512,512),i.clip(),i.lineCap="round";let m=(v,E,_,T,R,w)=>{let P=v+Math.cos(_)*T,C=E+Math.sin(_)*T;if(i.strokeStyle=w>3?"#76605f":w>1?"#6c5458":"#62494f",i.lineWidth=R,i.beginPath(),i.moveTo(v,E),i.lineTo(P,C),i.stroke(),w<=0||R<.7)return;let A=2+(f()<.4?1:0);for(let L=0;L<A;L++){let D=_+(f()-.5)*1.1+(L-(A-1)/2)*.42;D=D*.8+-Math.PI/2*.2,m(P,C,D,T*(.62+f()*.2),R*.68,w-1)}};for(let v=0;v<6;v++)m(256+(f()-.5)*40,500,-Math.PI/2+(f()-.5)*.9,110+f()*50,5.6,6);i.restore(),o[x]={u0:c/1024,u1:(c+512)/1024,v0:1-(y+512)/3072,v1:1-y/3072}},p=(x,c,y,f,m)=>{let v=Ot(f),E=1024,_=504;i.save(),i.translate(c,y+8),i.beginPath(),i.rect(0,0,512,_),i.clip(),i.scale(.5,1);let T=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],R=D=>{let U=D/E;return(.5+.5*Math.min(1,U/.45)**.8)*(1-.4*Math.max(0,(U-.9)/.1))},w=(D,U,V,O)=>{U=Math.min(U,_*.985);let k=D+V,z=_-U,K=D+V*.25,le=_-U*.62-Math.abs(V)*.35;i.moveTo(D-O/2,_),i.quadraticCurveTo(K-O*.42,le,k,z),i.quadraticCurveTo(K+O*.42,le+O*.5,D+O/2,_),i.closePath()},P=[];for(let D=24+v()*24;D<E-20;D+=(D<E*.25?56:44)+v()*26)P.push(D);let C=()=>P[Math.floor(v()*P.length)],A=(D,U,V,O,k,z,K,le,Me)=>{let Fe=T.map(()=>[]);for(let Ne=0;Ne<D;Ne++){let J=C(),$=J+(v()-.5)*34,ve=R($),Ae=$/E,pe=_*(U+v()*(V-U))*ve*1.12,Oe=(v()-.5)*O+($-E*.45)*.12;Fe[Math.min(8,le+Math.floor(v()*(Me-le+1)+Ae*1.2))].push([$,pe,Oe,k+v()*(z-k)])}Fe.forEach((Ne,J)=>{if(!Ne.length)return;let $=i.createLinearGradient(0,_,0,_*(1-V*.8));$.addColorStop(0,T[K]),$.addColorStop(.55,T[Math.round((K+J)/2)]),$.addColorStop(1,T[J]),i.fillStyle=$,i.beginPath();for(let ve of Ne)w(ve[0],ve[1],ve[2],ve[3]);i.fill()})};A(360,.25,.55,150,12,22,0,2,3),A(240,.4,.78,260,10,17,1,4,6);let L=[];for(let D=0;D<4;D++){let U=E*(.14+v()*.74),V=R(U);L.push({fx:U,fy:Math.max(56,_-_*(.56+v()*.38)*V*1.05),kind:v()<m?0:1,sz:.85+v()*.4,tilt:.72+v()*.28,rot:v()*6.28,sx:U+(v()-.5)*60})}i.lineCap="round";for(let D of L)i.strokeStyle="#2c6623",i.lineWidth=6,i.beginPath(),i.moveTo(D.sx,_),i.quadraticCurveTo((D.sx+D.fx)/2+(v()-.5)*40,(_+D.fy)/2,D.fx,D.fy+8),i.stroke();A(150,.5,.92,330,9,16,2,6,7);for(let D of L){if(i.save(),i.translate(D.fx,D.fy),i.scale(1,D.tilt),D.kind===0){let U=38*D.sz;for(let V=0;V<16;V++){let O=D.rot+V/16*6.283;i.fillStyle=Math.sin(O)>.4?"#e2e3ea":"#fdfdf6",i.beginPath(),i.ellipse(Math.cos(O)*U*.56,Math.sin(O)*U*.56,U*.48,U*.14,O,0,7),i.fill()}i.fillStyle="#f2b51a",i.beginPath(),i.arc(0,0,U*.28,0,7),i.fill(),i.fillStyle="#fbe060",i.beginPath(),i.arc(-U*.07,-U*.07,U*.14,0,7),i.fill()}else{let U=40*D.sz;for(let V=0;V<5;V++){let O=D.rot+V/5*6.283;i.fillStyle="#fccc1e",i.beginPath(),i.ellipse(Math.cos(O)*U*.52,Math.sin(O)*U*.52,U*.52,U*.38,O,0,7),i.fill()}for(let V=0;V<5;V++){let O=D.rot+V/5*6.283;i.fillStyle="#ffe873",i.beginPath(),i.ellipse(Math.cos(O)*U*.62,Math.sin(O)*U*.62-3,U*.26,U*.15,O,0,7),i.fill()}i.fillStyle="#e39b14",i.beginPath(),i.arc(0,0,U*.2,0,7),i.fill()}i.restore()}A(40,.42,.85,280,8,14,3,6,7),i.restore(),o[x]={u0:c/1024,u1:(c+512)/1024,v0:1-(y+512)/3072,v1:1-(y+8)/3072}},g=(x,c,y,f)=>{let m=Ot(f),v=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];i.save(),i.translate(c,y),i.beginPath(),i.rect(0,0,512,512),i.clip();let E=[];for(let _=0;_<15;_++){let T=(_+m()*.6)/15,R=40+T*432,w=500-300*Math.sqrt(Math.max(0,1-((R-256)/232)**2));E.push([R,w+60+m()*50,54+m()*46])}for(let _=0;_<2600;_++){let T=E[Math.floor(m()*E.length)],R=m()*6.283,w=Math.sqrt(m())*T[2],P=T[0]+Math.cos(R)*w,C=Math.min(505,T[1]+Math.sin(R)*w*.85),A=Math.sin(R)<-.2?1:0,L=Math.max(0,Math.min(6,Math.floor(m()*2.4+(1-C/512)*3.2+A*1.3+w/T[2]*.8)));i.fillStyle=v[L],i.beginPath(),i.ellipse(P,C,7+m()*7,4+m()*4,m()*6.28,0,7),i.fill()}for(let _=0;_<130;_++){let T=E[Math.floor(m()*E.length)],R=-Math.PI*(.1+m()*.8),w=(.35+m()*.6)*T[2],P=T[0]+Math.cos(R)*w,C=T[1]+Math.sin(R)*w*.85;if(C>470)continue;let A=6+m()*5,L=m()*6.28,D=m()<.12;i.fillStyle=D?"#f3d2dc":"#fbfbf6";for(let U=0;U<5;U++){let V=L+U/5*6.283;i.beginPath(),i.ellipse(P+Math.cos(V)*A*.55,C+Math.sin(V)*A*.5,A*.5,A*.36,V,0,7),i.fill()}i.fillStyle="#d9b628",i.beginPath(),i.arc(P,C,A*.22,0,7),i.fill()}i.restore(),o[x]={u0:c/1024,u1:(c+512)/1024,v0:1-(y+512)/3072,v1:1-y/3072}};d("twigs",0,0),g("flowerbush",512,0,6151),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),h("grass",0,a+1536,!1),h("flowers",512,a+1536,!0),p("bankA",0,a+2048,4111,.7),p("bankB",512,a+2048,4127,.35);let b=new ni(n);b.colorSpace=Wt,b.anisotropy=Math.min(4,s.capabilities.getMaxAnisotropy());let S=1-(a+2048)/3072,M=1-(a+2056)/3072;return{tex:b,cells:o,tuftV:[S,1-(a+1536)/3072,M,(S+M)/2]}}var cn=[1,1,1],Se={pole:xe("#b1b0a9"),metal:xe("#8d9198"),black:xe("#2a2b30"),yellow:xe("#f2c230"),white:xe("#f4f3ee"),trans:xe("#a0a3a8"),lampPole:xe("#727780"),lampHead:xe("#dcdcd6"),trunk:xe("#6a5444"),trunkDark:xe("#4b3a33"),bark:xe("#7a6556"),leaf:xe("#86ba4c"),leafShade:xe("#2c6640"),sakura:xe("#ffd3e3"),sakuraShade:xe("#de94b4"),pine:xe("#55874c"),pineShade:xe("#1d4632"),cedar:xe("#41713e"),cedarShade:xe("#1b3e2a"),roof:xe("#bdbbb3"),parapet:xe("#dcdad2"),pipe:xe("#c4c4bf"),orange:xe("#f07a22"),red:xe("#d8352a"),vermilion:xe("#e2482c"),concrete:xe("#c9c7c0"),stone:xe("#a8a69e"),terracotta:xe("#b8653d"),rail:xe("#eeeeea")},yd=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(xe),Is=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(xe),gM=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(xe),vM=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(xe),_d=null;function eg(s){_d=s}var di=s=>_d.uv(s),ko=di,tg=(s,e)=>{let t=1;for(;_d.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(s()*t);return n?e+(n+1):e};function ng(s,e,t,n,i=0){let r=new et().makeRotationY(i);r.setPosition(e,t,n);let o=new et().multiplyMatrices(s,r);return o.groundY=s.groundY,o}var bd=(s,e,t,n)=>{if(!s.hasLit)return;let i=e.charCodeAt(0);if(i===118&&e.charCodeAt(1)===115){s.litV=12;return}if(i===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n"||a==="p")&&(s.litV=6);return}if(i!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+s.e[12]*.731+s.e[14]*.513)*43758.5453;s.litV=24+Math.floor((o-Math.floor(o))*231)},tn=(s,e,t,n,i,r,o,a=cn)=>{bd(s,o,e+r,n),s.quad([t,n,r],[e,n,r],[e,i,r],[t,i,r],a,di(o)),s.litV=0},ns=(s,e,t,n,i,r,o,a=cn)=>{bd(s,o,e+t,i),s.quad([e,i,n],[e,i,t],[e,r,t],[e,r,n],a,di(o)),s.litV=0},is=(s,e,t,n,i,r,o,a=cn)=>{bd(s,o,e+t,i),s.quad([e,i,t],[e,i,n],[e,r,n],[e,r,t],a,di(o)),s.litV=0},zo=(s,e,t,n,i,r)=>s.quad(e,t,n,n,i,r?di(r):void 0),xM=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function ig(s){return xM.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(s))}function Md(s,e,t,n={}){let i=s.color;i.setM(e);let r=11.2;i.cyl(0,0,0,.17,.12,r,10,Se.pole);for(let u=0;u<5;u++)i.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Se.black:Se.yellow,!1);i.box(-.05,r-.65,-.95,.05,r-.53,.95,Se.metal),i.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Se.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)i.cyl(0,r-.53,u,.05,.035,.17,6,Se.white);for(let u of a)i.cyl(0,r-1.65,u,.045,.03,.15,6,Se.white);n.trans&&(i.cyl(0,6.9,.5,.27,.27,.9,12,Se.trans),i.cyl(0,7.8,.5,.27,.18,.1,12,Se.trans),i.box(-.06,7.2,.12,.06,7.35,.26,Se.metal),t()<.5&&i.cyl(0,6,-.48,.2,.2,.62,10,Se.trans)),i.box(-.04,5.6,-.4,.04,5.68,.4,Se.metal),t()<.6&&i.box(-.17,3,-.3,.17,3.5,-.13,Se.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)i.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Se.metal);return s.atlas.setM(e),tn(s.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&tn(s.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var sh=new H;function ir(s,e,t,n,i,r){s.lamps&&(sh.set(t,n,i).applyMatrix4(e),s.lamps.push(sh.x,sh.y,sh.z,r))}function Sd(s,e,t,n={}){let i=s.color;i.setM(e),ir(s,e,0,6.28,-1.42,1.1),i.cyl(0,0,0,.08,.06,6,8,Se.lampPole),i.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Se.lampPole),i.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Se.lampPole),i.box(-.17,6.34,-1.72,.17,6.52,-1.12,Se.lampHead),s.lamp.setM(e),s.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,cn);let r=n.poolY??.04;s.pool.setM(e),s.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],cn,{u0:0,u1:1,v0:0,v1:1})}function sg(s,e,t=.04){let n=s.color;n.setM(e),ir(s,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Se.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Se.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Se.lampHead),s.lamp.setM(e),s.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,cn),s.pool.setM(e),s.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],cn,{u0:0,u1:1,v0:0,v1:1})}function Oo(s,e,t,n,i,r,o=!1,a=!1){let l=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,d]=l[u],[p,g]=l[(u+1)%4];s.quad([h*n,e,d*n],[h*i,t,d*i],[p*i,t,g*i],[p*n,e,g*n],r)}o&&i>.001&&s.quad([-i,t,-i],[-i,t,i],[i,t,i],[i,t,-i],r),a&&s.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var yM=xe("#202127");function pl(s,e){let t=s.color;t.setM(e),ir(s,e,0,3.4,0,.9);let n=yM,i={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Oo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,i);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,i),Oo(t,3.64,3.84,.23,.05,n),Oo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),s.lamp.setM(e),s.lamp.box(-.14,3.17,-.14,.14,3.6,.14,cn),s.pool.setM(e),s.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],cn,{u0:0,u1:1,v0:0,v1:1})}function Ed(s,e,t){let n=Math.floor(t()*3),i=[Se.red,xe("#2f6fd8"),Se.white][n];s.color.setM(e),s.color.box(-.5,0,.01,.5,1.83,.75,i),s.color.box(-.53,1.83,-.06,.53,1.9,.78,Fn(i,.8)),s.atlas.setM(e),tn(s.atlas,-.5,.5,0,1.83,0,"vend"+n)}function vd(s,e,t,n,i){s.color.setM(e),s.color.box(t-.4,n,i,t+.4,n+.56,i+.28,xe("#e6e6e1")),s.atlas.setM(e),tn(s.atlas,t-.4,t+.4,n,n+.56,i-.003,"ac")}function rg(s,e,t){let n=s.color;n.setM(e);let i=t.pick([xe("#c8ccd2"),xe("#c0392b"),xe("#2c6fb7"),xe("#2b2b2b"),xe("#e8c84a"),xe("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let l=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(l)*.33,.34+Math.sin(l)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Se.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,i);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Se.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Se.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Se.metal)}function og(s,e){let t=s.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Se.orange),t.cyl(0,.04,0,.16,.03,.68,10,Se.orange),t.cyl(0,.32,0,.115,.095,.12,10,Se.white,!1)}function Td(s,e,t,n=0,i=0){s.color.setM(e),s.color.cyl(n,0,i,.17,.21,.34,8,Se.terracotta),s.leaf.setM(e),Bi(s,[n,.45,i],n,.62,i,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var _M=[[.35,.455],[.455,.56],[.56,.665]],Ym=xe("#6b4a32");function bM(s,e,t,n,i){let r=s.color,o=s.atlas,a=.62,l=di("shop_p1"),u=l.u1-l.u0,h=l.v1-l.v0;r.setM(e),o.setM(e);for(let d of[-1,1])r.box(t+d*a-.03,0,n-.32,t+d*a+.03,1.32,n+.24,Ym);for(let d=0,p=Math.floor(i()*3);d<3;d++){let g=.2+d*.4,b=g+.36,S=n-.26+d*.16,M=S+.14,[x,c]=_M[(d+p)%3];o.quad([t+a,g,S],[t-a,g,S],[t-a,b,M],[t+a,b,M],cn,{u0:l.u0+u*.14,u1:l.u0+u*.86,v0:l.v1-h*c,v1:l.v1-h*x}),r.box(t-a,g-.05,S-.06,t+a,g,S+.12,Ym)}}function ag(s,e,t,n=.8){s.leaf.setM(e),Bi(s,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function sr(s,e,t,n,i=2.3,r=.6){s.color.setM(e),s.color.cyl(0,0,0,.035,.035,i+r/2,6,Se.metal),s.atlas.setM(e),n<0?is(s.atlas,-.05,-r/2,r/2,i-r/2,i+r/2,t):ns(s.atlas,.05,-r/2,r/2,i-r/2,i+r/2,t)}function wd(s,e,t){let n=s.color;n.setM(e);for(let i=0;i<8;i++)n.cyl(0,i*.5,0,.045,.045,.5,6,i%2?Se.white:Se.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Se.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Se.black),s.atlas.setM(e),t<0?is(s.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):ns(s.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function lg(s,e){let t=s.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,xe("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,xe("#f0a020"))}function Ad(s,e,t){let n=s.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Se.orange);let i=0,r=3.25,o=.42,a=14;for(let l=0;l<a;l++){let u=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2,d=(p,g,b)=>[t*b,r+Math.sin(p)*g,i+Math.cos(p)*g-.25];zo(n,d(0,0,-.02),d(t>0?h:u,o,-.02),d(t>0?u:h,o,-.02),Se.orange),zo(n,d(0,0,-.035),d(t>0?h:u,o*.86,-.035),d(t>0?u:h,o*.86,-.035),xe("#dfe9f2"))}}var ml=null;function cg(s){ml=s}var dl=1;function ug(s){dl=s}function Bi(s,e,t,n,i,r,o,a,l,u,h,d,p=0){let g=ml[o],b=1+(1-dl)*.35;a=Math.max(2,Math.round(a*dl));for(let S=0;S<a;S++){let M=l()*2-1,x=l()*2-1,c=l()*2-1;p&&(x=1.2+l());let y=Math.hypot(M,x,c)||1;M/=y,x/=y,c/=y;let f=-c,m=0,v=M;y=Math.hypot(f,v),y<.1&&(f=1,v=0,y=1),f/=y,v/=y;let E=x*v-c*m,_=c*f-M*v,T=M*m-x*f,R=Math.PI+(l()-.5)*.9,w=Math.cos(R),P=Math.sin(R),C=f*w+E*P,A=m*w+_*P,L=v*w+T*P,D=E*w-f*P,U=_*w-m*P,V=T*w-v*P,O=r*(1.3+l()*.45)*b/2,k=t+(l()-.5)*r*.6,z=n+(l()-.5)*r*(p?.15:.5),K=i+(l()-.5)*r*.6,le=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ne,J])=>[k+(C*Ne+D*J)*O,z+(A*Ne+U*J)*O*(p?.6:1),K+(L*Ne+V*J)*O]),Me=le.map(Ne=>{let J=Ne[0]-e[0],$=Ne[1]-e[1],ve=Ne[2]-e[2],Ae=Math.hypot(J,$,ve)||1;J/=Ae,$/=Ae,ve/=Ae;let pe=Ne[0]-t,Oe=Ne[1]-n,Je=Ne[2]-i;return Ae=Math.hypot(pe,Oe,Je)||1,[J*.7+pe/Ae*.3,$*.7+Oe/Ae*.3+(p?.5:0),ve*.7+Je/Ae*.3]}),Fe=le.map(Ne=>id(h,u,.45+.55*Math.max(0,Math.min(1,(Ne[1]-d[0])/(d[1]-d[0])))));s.leaf.card(le,Me,g,Fe)}}function Rd(s,e,t,n="grass",i=1){let r=ml[n],o=(.42+t()*.38)*i,a=o*1.2,l=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],d=[.6,.64,.58],p=[1,1,1];s.leaf.setM(e);for(let g of[l,l+Math.PI/2]){let b=Math.cos(g)*a/2,S=Math.sin(g)*a/2;s.leaf.card([[-b,-.05,-S],[b,-.05,S],[b,o,S],[-b,o,-S]],h,r,[d,d,p,p])}}function Cd(s,e,t,n=1){let i=ml.flowerbush;if(!i)return;let r=(.8+t()*.35)*n,o=r*1.7,a=t()*Math.PI,l=[0,1,0],u=[l,l,l,l],h=[.6,.64,.6],d=[1,1,1];s.leaf.setM(e);for(let p of[a,a+Math.PI/2]){let g=Math.cos(p)*o/2,b=Math.sin(p)*o/2;s.leaf.card([[-g,-.06,-b],[g,-.06,b],[g,r,b],[-g,r,-b]],u,i,[h,h,d,d])}}var MM=[.62,.68,.74],hg=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],SM=[0,1,2,0,2,3,0,3,4],EM=hg.map(([,s])=>id(MM,cn,s));function Pd(s,e,t,n,i,r,o,a=1){let l=ml[o()<.5?"bankA":"bankB"],u=.82*a,h=(u+.06)*2.03,d=s.leaf;for(let p of SM){let[g,b]=hg[p],S=(g-.5)*h;d.vtx(e+i*S,t+b*(u+.06)-.06,n+r*S,0,1,0,l.u0+(l.u1-l.u0)*g,l.v0+(l.v1-l.v0)*b,EM[p])}}var fg=()=>dl>.7?.9:1.25;function TM(s,e,t,n=1){let i=t.range(5.5,7.5)*n;s.color.setM(e),s.color.cyl(0,0,0,.2*n,.13*n,i*.55,7,Se.trunk);for(let u=0;u<3;u++){let h=t()*6.28;s.color.rod([0,i*.42,0],[Math.cos(h)*1.1*n,i*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Se.trunk)}s.leaf.setM(e);let r=[0,i*.78,0],o=t()<.5?"leafA":"leafB",a=[i*.45,i*1.15],l=7+Math.floor(t()*3);for(let u=0;u<l;u++){let h=t()*6.28,d=(.6+t())*1.3*n;Bi(s,r,Math.cos(h)*d,i*(.62+t()*.3),Math.sin(h)*d,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Bi(s,r,0,i*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function Zm(s,e,t,n=1){let i=t.range(5.5,7)*n;s.color.setM(e),s.color.cyl(0,0,0,.26*n,.17*n,i*.45,7,Se.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,d=(2.2+t()*1.6)*n,p=[Math.cos(h)*d,i*(.62+t()*.18),Math.sin(h)*d];s.color.rod([0,i*.4,0],p,.12*n,.05*n,5,Se.trunkDark),r.push(p),s.color.rod(p,[p[0]*1.25,p[1]+.9*n,p[2]*1.25],.05*n,.02*n,4,Se.trunkDark)}s.leaf.setM(e);let o=[0,i*.72,0],a=[i*.5,i*1.1],l=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Bi(s,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],l,a);Bi(s,o,0,i*.92,0,1.9*n,"sakura",9,t,[1,1,1],l,a)}function wM(s,e,t,n=1){let i=s.color;i.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],l=[r,o*.8,-.2];i.rod([0,0,0],a,.2*n,.15*n,6,Se.trunkDark),i.rod(a,l,.15*n,.09*n,6,Se.trunkDark),s.leaf.setM(e);let u=[[l[0],l[1]+.3,l[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[l[0]+.9*n,l[1]-.6,.8,1.1]];for(let[h,d,p,g]of u)i.rod(h>a[0]?a:l,[h,d-.2,p],.07*n,.04*n,4,Se.trunkDark),Bi(s,[h,d-.8,p],h,d,p,g*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[d-.7,d+.5],1)}function AM(s,e,t,n=1){let i=t.range(4.5,6.5)*n;s.color.setM(e),s.color.cyl(0,0,0,.18*n,.12*n,i*.5,7,Se.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,d=(1.8+t()*1.4)*n,p=[Math.cos(h)*d,i*(.55+t()*.2),Math.sin(h)*d];s.color.rod([0,i*.38,0],p,.09*n,.04*n,5,Se.trunkDark),r.push(p)}s.leaf.setM(e);let o=[0,i*.7,0],a=[i*.45,i*1.1],l=[.62,.52,.56];for(let u of r)Bi(s,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],l,a);Bi(s,o,0,i*.92,0,1.6*n,"momiji",8,t,[1,1,1],l,a)}function RM(s,e,t,n=1){let i=t.range(8,11)*n;s.color.setM(e),s.color.cyl(0,0,0,.22*n,.1*n,i*.85,7,Se.trunk),s.leaf.setM(e);let r=[0,i*.62,0],o=[i*.3,i*1.02],a=[.68,.6,.52];for(let l=0;l<7;l++){let u=i*(.34+l*.09),h=(2.1-l*.24)*n,d=t()*6.28;Bi(s,r,Math.cos(d)*h*.35,u,Math.sin(d)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function CM(s,e,t,n=1){let i=s.color;i.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;i.rod([0,0,0],[o,r,0],.13*n,.05*n,7,xe("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),d=h/r;i.cyl(o*d,h,0,.135*n*(1-d*.6),.13*n*(1-d*.6),.05,7,xe("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),d=t()*6.28,p=(.8+t()*1.6)*n,g=h/r;i.rod([o*g,h,0],[o*g+Math.cos(d)*p,h+p*.9,Math.sin(d)*p],.035*n,.012*n,4,xe("#8b7f78"))}let a=r*.7,l=(1.5+t()*.5)*n;s.leaf.setM(e),Bi(s,[o*.7,a,0],o*.7,a,0,l,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-l,a+l])}function PM(s,e,t,n=1){let i=t.range(9,13)*n;s.color.setM(e),s.color.cyl(0,0,0,.22*n,.15*n,i*.3,6,Se.trunkDark),s.foliage.setM(e);let r=xe("#1d3a2c"),o=xe("#eef2f8"),a=xe("#d7e0ec");for(let l=0;l<4;l++){let u=i*(.16+l*.19),h=(1.9-l*.38)*n,d=i*.3;s.foliage.cyl(0,u,0,h,h*.3,d,9,r),s.foliage.cyl(0,u+d*.45,0,h*.72,.05,d*.62,9,l%2?o:a)}}function IM(s,e,t,n=1){let i=t.range(9,14)*n;s.color.setM(e),s.color.cyl(0,0,0,.22*n,.15*n,i*.3,6,Se.trunkDark),s.foliage.setM(e),s.foliage.cyl(0,i*.18,0,1.9*n,.9*n,i*.45,9,Se.cedarShade),s.foliage.cyl(0,i*.5,0,1.45*n,.05,i*.5,9,Se.cedar)}var Fi={cells:null,bcells:null};function LM(s,e,t,n=1){let i=t()<.3?1.22:1,r=t.range(6.2,8)*n*i,o=s.color;o.setM(e);let a=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*i,.2*n*i,a,8,Se.trunk);let l=r*.64,u=t.range(2.6,3.2)*n*i,h=t.range(2,2.5)*n*i,d=n*i,p=[],g=5+Math.floor(t()*3);for(let y=0;y<g;y++){let f=y/g*6.283+t()*.6,m=t.range(-.15,.75),v=Math.sqrt(1-m*m);p.push([Math.cos(f)*v,m,Math.sin(f)*v])}p.push([0,1,0]);let b=[[0,l+.15*h,0,1.76*d,1]],S=26+Math.floor(t()*7);for(let y=0;y<S;y++){let f=t()*2-1,m=t.range(-.55,1),v=t()*2-1,E=Math.hypot(f,m,v)||1;f/=E,m/=E,v/=E;let _=p[0],T=-2;for(let w of p){let P=w[0]*f+w[1]*m+w[2]*v;P>T&&(T=P,_=w)}f=f*.45+_[0]*.55,m=m*.45+_[1]*.55,v=v*.45+_[2]*.55,E=Math.hypot(f,m,v)||1,f/=E,m/=E,v/=E;let R=t.range(.78,.95);b.push([f*u*R,l+m*h*R,v*u*R,t.range(.8,1.1)*d,0])}for(let y=0;y<4;y++){let f=p[y%g];o.rod([0,a*.9,0],[f[0]*u*.55,l+Math.min(0,f[1])*h*.4-.3*n,f[2]*u*.55],.15*d,.06*n,6,Se.trunk)}let M=t(),x=M<.5?[1,1,.92+M*.16]:[1-(M-.5)*.12,1,.9],c=s.gleaf;c.setM(e);for(let[y,f,m,v,E]of b){let _=y,T=(f-l)*(u/h)+.1*u,R=m,w=Math.hypot(_,T,R)||1;_/=w,T/=w,R/=w,E&&(_=R=0,T=-1);let P=Math.min(1,Math.max(0,(f-(l-h))/(2*h))),C=E?.55:.72+.28*P,A=v/.8*.88;c.bill(y,f,m,_,T,R,A,A,Fi.cells[Math.floor(t()*Fi.cells.length)],[x[0]*C,x[1]*C,x[2]*C],vm,.88)}}function $m(s,e,t,n=1,i=!1){let r=s.color;r.setM(e);let o=i?1:0,a=t.range(2.2,2.7)*n,l=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,a,o*.3*n];r.rod([0,0,0],u,l,l*.8,7,Se.bark),r.cyl(0,0,0,l*1.25,l,.35*n,7,Se.bark,!1);let h=t.range(6.3,6.9)*n,d=-o*.5*n,p=t.range(4,4.5)*n,g=t.range(3.6,4)*n,b=t.range(1.7,2)*n,S=t()<.35?4:3,M=i?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let E=0;E<S;E++){let _=M+E/S*6.283+t.range(-.3,.3),T=Math.cos(_),R=Math.sin(_),w=t.range(.32,.46),P=[u[0]+T*p*w,h-b*t.range(.35,.55),u[2]*.5+d*.4+R*g*w],C=[u[0]+(P[0]-u[0])*.45+T*.25*n,a+(P[1]-a)*.55,u[2]+(P[2]-u[2])*.45+R*.25*n],A=(U,V,O)=>{let k=Math.hypot(V[0]-U[0],V[1]-U[1],V[2]-U[2])||1;return[V[0]-(V[0]-U[0])/k*O,V[1]-(V[1]-U[1])/k*O,V[2]-(V[2]-U[2])/k*O]};r.rod(u,C,l*.62,l*.46,6,Se.bark),r.rod(A(u,C,l*.5),P,l*.47,l*.3,5,Se.bark);let L=A(C,P,l*.35),D=E%2?1:2;for(let U=0;U<D;U++){let V=(U?1:-1)*t.range(.3,.9),O=t.range(1.2,1.9)*n;r.rod(L,[P[0]+Math.cos(_+V)*O,P[1]+t.range(.7,1.2)*n,P[2]+Math.sin(_+V)*O],l*.27,.04*n,4,Se.bark)}}let x=[],c=6+Math.floor(t()*2);for(let E=0;E<c;E++){let _=E/c*6.283+t()*.5,T=t.range(-.2,.6),R=Math.sqrt(1-T*T);x.push([Math.cos(_)*R,T,Math.sin(_)*R])}x.push([0,1,0]);let y=[[-p*.3,h,d,1.75*n,1],[p*.3,h,d,1.75*n,1]],f=21+Math.floor(t()*4);for(let E=0;E<f;E++){let _=t()*2-1,T=t.range(-.3,1),R=t()*2-1,w=Math.hypot(_,T,R)||1;_/=w,T/=w,R/=w;let P=x[0],C=-2;for(let L of x){let D=L[0]*_+L[1]*T+L[2]*R;D>C&&(C=D,P=L)}_=_*.5+P[0]*.5,T=T*.5+P[1]*.5,R=R*.5+P[2]*.5,w=Math.hypot(_,T,R)||1,_/=w,T/=w,R/=w;let A=t.range(.8,.95);y.push([_*p*A,h+T*b*A,d+R*g*A,t.range(1,1.3)*n,0])}let m=[1,t.range(.96,1.03),t.range(.97,1.02)],v=s.gblossom;v.setM(e);for(let[E,_,T,R,w]of y){let P=E/p,C=(_-h)/b+.12,A=(T-d)/g,L=Math.hypot(P,C,A)||1;P/=L,C/=L,A/=L,w&&(P=A=0,C=-1);let D=Math.min(1,Math.max(0,(_-(h-b))/(2*b))),U=w?.62:.8+.2*D,V=R/.8*.86;v.bill(E,_,T,P,C,A,V,V,Fi.bcells[Math.floor(t()*Fi.bcells.length)],[m[0]*U,m[1]*U,m[2]*U],xm,.86)}}var dg={broad:(s,e,t,n)=>(Fi.cells?LM:TM)(s,e,t,n),sakura:(s,e,t,n)=>Fi.bcells?$m(s,e,t,n):Zm(s,e,t,n),sakuraAve:(s,e,t,n)=>Fi.bcells?$m(s,e,t,n,!0):Zm(s,e,t,n),pine:wM,cedar:IM,maple:AM,ginkgo:RM,birch:CM,snowcedar:PM},Km={};function pg(s,e){let t=s+e,n=Km[t];if(!n){let i={color:new ln,foliage:new ln,leaf:new ln({uv:!0}),gleaf:new ln({uv:!0,off:!0}),gblossom:new ln({uv:!0,off:!0})};dg[s](i,new et,Ot(1e3+e*77+s.length*13),1),n=Km[t]={c:i.color.toArrays(),f:i.foliage.toArrays(),l:i.leaf.toArrays(),g:i.gleaf.toArrays(),b:i.gblossom.toArrays()}}return n}function mg(){for(let s in dg)for(let e=0;e<4;e++)pg(s,e)}function Vn(s,e,t,n,i=1){let r=pg(t,Math.floor(n()*4)),o=e.clone().scale(new H(i,i,i));o.groundY=e.groundY,s.color.stamp(r.c,o),s.foliage.stamp(r.f,o),s.leaf.stamp(r.l,o),r.g.n&&s.gleaf.stamp(r.g,o),r.b.n&&s.gblossom.stamp(r.b,o)}var DM=new Set(["win0","win2","win5","win6"]),gs=(s,e,t)=>e<t?s+(e<t*.35&&DM.has(s)?"C":"L"):s;function gl(s,e,t,n,i,r,o){let a=Math.max(1,Math.round(t/3)),l=t/a;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let d=0;d<a;d++){let p=h>0&&r()<.3?gs("win6",r(),o):r()<.2?"win5":"plain";(u>0?ns:is)(s,u*e/2,d*l,(d+1)*l,n[h],n[h+1],p,i)}}function vl(s,e,t,n,i,r=!1){s.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Se.roof);let o=.5,a=.15;if(s.box(-e/2,n,-.02,e/2,n+o,a,Se.parapet),s.box(-e/2,n,t-a,e/2,n+o,t,Se.parapet),s.box(-e/2,n,0,-e/2+a,n+o,t,Se.parapet),s.box(e/2-a,n,0,e/2,n+o,t,Se.parapet),i()<.4){let l=(i()-.5)*e*.5,u=t*(.4+i()*.3);for(let[h,d]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])s.box(l+h-.05,n,u+d-.05,l+h+.05,n+1,u+d+.05,Se.metal);s.cyl(l,n+1,u,.85,.85,1.3,12,xe("#cfd2d4"))}r&&i()<.6&&s.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Se.parapet),i()<.3&&s.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Se.metal)}function rh(s,e,t,n,i){s.color.box(e-.06,t,-.88,e+.06,n,-.12,Se.black);let r="vs"+Math.floor(i()*10);is(s.atlas,e-.065,-.88,-.12,t,n,r),ns(s.atlas,e+.065,-.88,-.12,t,n,r),s.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Se.metal),s.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Se.metal)}function Oi(s,e,t,n){switch(s.atlas.setM(e),s.color.setM(e),s.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Se.concrete,null,{noBottom:!0}),n.type){case"shop":return UM(s,e,t,n);case"machiya":return FM(s,e,t,n);case"apt":return BM(s,e,t,n);case"office":return OM(s,e,t,n);case"konbini":return zM(s,e,t,n);case"house":return n.ptype?GM(s,e,t,n):HM(s,e,t,n);case"tower":return WM(s,e,t,n)}}var gg=new Set(["glass","door","cafe","noren"]),NM={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function UM(s,e,t,n){let{w:i,d:r,floors:o,tint:a,litP:l}=n,u=s.atlas,h=s.color,d=3.6,p=3,g=d+(o-1)*p,b=Math.max(1,Math.round(i/3)),S=i/b,M=-i/2,x=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),c=[],y=0;for(let _=0;_<b;_++){let T=tg(t,"shop_"+x[_%x.length]);c.push(T),!y&&T.startsWith("shop_glass")&&T.length>10&&(y=+T.slice(10))}for(let _=0;_<b;_++){let T=x[_%x.length];tn(u,M+_*S,M+(_+1)*S,0,d,0,y&&T==="glass"?"shop_glass"+y:c[_]),gg.has(T)&&ir(s,e,M+(_+.5)*S,1.9,-.8,.7)}let f=t.pick([0,0,1,5,0,1]),m=[0,d];for(let _=1;_<o;_++)m.push(d+_*p);for(let _=1;_<o;_++)for(let T=0;T<b;T++){let R=T%2===1&&t()<.3?5:f;tn(u,M+T*S,M+(T+1)*S,m[_],m[_+1],0,gs("win"+R,t(),l),a)}gl(u,i,r,m,a,t,l),h.quad([-i/2,0,r],[i/2,0,r],[i/2,g,r],[-i/2,g,r],Fn(a,.8)),vl(h,i,r,g,t);let v=i*.94;h.box(-v/2,d-.8,-.3,v/2,d+.08,-.02,Se.black);let E="hs"+Math.floor(t()*14);if(tn(u,-v/2,v/2,d-.8,d+.08,-.305,NM[y]||E),t()<.55){let _=t.pick(gM),T=d-.85;h.quad([i/2-.2,T-.35,-1.1],[-i/2+.2,T-.35,-1.1],[-i/2+.2,T,-.02],[i/2-.2,T,-.02],_),h.quad([i/2-.2,T-.6,-1.1],[-i/2+.2,T-.6,-1.1],[-i/2+.2,T-.35,-1.1],[i/2-.2,T-.35,-1.1],Fn(_,.85))}if(o>=2&&t()<.85){let _=(t()<.5?1:-1)*(i/2-.35);rh(s,_,d+.3,Math.min(g-.15,d+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let T=Math.floor(t()*b),R=M+T*S+.15,w=M+(T+1)*S-.15,P=m[_];h.box(R,P-.12,-.9,w,P,0,Se.parapet),tn(u,R,w,P,P+1,-.9,"rail"),is(u,R,-.9,0,P,P+1,"rail"),ns(u,w,-.9,0,P,P+1,"rail"),t()<.45&&Mg(h,R+.1,w-.1,P+1.95,-.55,t),t()<.6&&vd(s,e,(R+w)/2+.6,P,-.75)}else if(t()<.35){let T=Math.floor(t()*b);vd(s,e,M+(T+.5)*S,m[_]+.15,-.3),s.color.setM(e),s.atlas.setM(e)}h.cyl(M+.12,0,-.08,.05,.05,g,6,Se.pipe,!1),h.box(i/2-.5,1.2,-.12,i/2-.25,1.55,0,xe("#d9d9d3")),o>=3&&t()<.18&&vg(s,i,g,r,t)}function FM(s,e,t,n){let{w:i,d:r,floors:o,litP:a}=n,l=s.atlas,u=s.color,h=3.6,d=2.9,p=h+(o-1)*d,g=-i/2,b=Math.max(2,Math.round(i/3)),S=i/b,M=xe("#5c4030"),x=xe("#3a2a20"),c=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),y=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),f=[];for(let k=0;k<b;k++){let z=c[k%c.length];f.push(z==="glass"?y:z==="door"?"shop_p2":z==="cafe"?"shop_p3":tg(t,"shop_"+z))}let m=t()<.5?"":c.includes("glass")&&y==="shop_p1"?"hs9":c.includes("cafe")||c.includes("glass")&&y==="shop_p3"?"hs7":"";for(let k=0;k<b;k++){let z=c[k%c.length];tn(l,g+k*S,g+(k+1)*S,0,h,0,f[k]),gg.has(z)&&ir(s,e,g+(k+.5)*S,1.9,-.8,.7)}let v=!!n.plaster,E=n.tint,_=[0,h];for(let k=1;k<o;k++)_.push(h+k*d);for(let k=1;k<o;k++)for(let z=0;z<b;z++){let K=v?z%2===1&&t()<.3?"win5":"win7":"win8";tn(l,g+z*S,g+(z+1)*S,_[k],_[k+1],0,gs(K,t(),a),K==="win5"?E:cn)}{let k=Math.max(1,Math.round(r/3)),z=r/k;for(let K of[-1,1])for(let le=0;le<_.length-1;le++)for(let Me=0;Me<k;Me++){let Fe=v?le>0?gs(t()<.5?"win7":"win6",t(),a):"plain":le>0&&t()<.45?gs("win4",t(),a):"woodwall";(K>0?ns:is)(l,K*i/2,Me*z,(Me+1)*z,_[le],_[le+1],Fe,v&&Fe[3]!=="7"?E:cn)}}u.quad([-i/2,0,r],[i/2,0,r],[i/2,p,r],[-i/2,p,r],v?Fn(E,.8):xe("#6a5240"));for(let k of[g,-g])u.box(k-.09,0,-.12,k+.09,p,.02,x);if(v)for(let k=2;k<o;k++)u.box(g,_[k]-.1,-.08,-g,_[k]+.06,0,x);let{RC:T,k:R}=xg(s,n,i,r,p,t,!v),w=h+.62,P=1.05,C=.7,A=Math.max(2,Math.round((i+.3)/3));for(let k=0;k<A;k++){let z=g-.15+(i+.3)*k/A,K=g-.15+(i+.3)*(k+1)/A;l.quad([K,w-C,-P],[z,w-C,-P],[z,w,0],[K,w,0],T,R)}u.quad([g-.15,w-C-.03,-P],[-g+.15,w-C-.03,-P],[-g+.15,w-.1,0],[g-.15,w-.1,0],M);let L=Math.min(i*.9,4.4),D=w-C+.02,U=D-.62;u.box(-L/2,U,-P-.02,L/2,D,-P+.07,x),tn(l,-L/2,L/2,U,D,-P-.025,m||"hs"+Math.floor(t()*14));for(let k of[-L/2+.25,L/2-.25])u.box(k-.03,D,-P+.02,k+.03,w-C*.1,-P+.06,x);s.sodium.setM(e),u.noShadow=!0;for(let k=0;k<b;k++){let z=g+(k+.5)*S;u.box(z-.008,U-.02,-.62,z+.008,w-C*.6,-.6,x),s.sodium.box(z-.06,U-.16,-.67,z+.06,U-.04,-.55,null)}u.noShadow=!1;let V=!1;if(t()<.5){V=!0;let k=t.pick(vM),z=U-.12;u.quad([i/2-.2,z-.32,-.95],[-i/2+.2,z-.32,-.95],[-i/2+.2,z,-.02],[i/2-.2,z,-.02],k),u.quad([i/2-.2,z-.55,-.95],[-i/2+.2,z-.55,-.95],[-i/2+.2,z-.32,-.95],[i/2-.2,z-.32,-.95],Fn(k,.85))}if(o>=2&&(!v||t()<.5)){let k=_[1]+.42,z=-.5,K=g+.12,le=-g-.12;u.box(K,k-.07,z-.04,le,k,0,M);for(let Me=0;Me<b;Me++)tn(l,g+.12+(i-.24)*Me/b,g+.12+(i-.24)*(Me+1)/b,k,k+.95,z,"wrail");is(l,K,z,0,k,k+.95,"wrail"),ns(l,le,z,0,k,k+.95,"wrail"),s.leaf.setM(e);for(let Me=0;Me<b;Me++)if(t()<.7){let Fe=g+(Me+.5)*S,Ne=Math.min(S*.7,1.6);u.noShadow=!0,u.box(Fe-Ne/2,k+.72,z-.2,Fe+Ne/2,k+.92,z-.02,xe("#7a5236")),u.noShadow=!1;for(let J=Fe-Ne/2+.2;J<Fe+Ne/2-.1;J+=.32)Bi(s,[J,k+.95,z-.11],J,k+1.05,z-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[k+.9,k+1.3])}}if(o>=2&&t()<.9){let k=t()<.5?1:-1;rh(s,k*(i/2-.35),h+.6,Math.min(p-.2,h+2.7),t),i>7&&t()<.35&&rh(s,-k*(i/2-.35),h+.8,Math.min(p-.2,h+2.5),t)}{let k=c.includes("noren")||c.includes("cafe"),z=V?0:k?2:t()<.3?1:0;s.sodium.setM(e);for(let K=0;K<z;K++){let le=z===2?(K?1:-1)*Math.min(1.4,i/2-.6):(t()-.5)*(i-1.5),Me=U-.5;u.noShadow=!0,u.box(le-.006,Me+.42,-P+.12,le+.006,U,-P+.14,x),s.sodium.cyl(le,Me,-P+.13,.11,.16,.18,10,null,!1),s.sodium.cyl(le,Me+.18,-P+.13,.16,.11,.18,10,null,!1),u.cyl(le,Me-.035,-P+.13,.1,.1,.04,8,x),u.cyl(le,Me+.355,-P+.13,.1,.1,.04,8,x),u.noShadow=!1}}let O=1e9;y==="shop_p1"&&c.includes("glass")&&(O=g+(c.indexOf("glass")+.5)*S,bM(s,e,O,-.62,t));for(let k=g+.45+t()*.4;k<-g-.3;k+=.7+t()*1.3)t()<.7&&Math.abs(k-O)>.95&&Td(s,e,t,k,-.4);s.color.setM(e),s.atlas.setM(e)}function vg(s,e,t,n,i){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let l of[-r*.35,r*.35])s.color.box(l-.06,t,a,l+.06,t+1.2+o,a+.12,Se.metal);s.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,Se.metal),tn(s.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(i()*4))}function BM(s,e,t,n){let{w:i,d:r,floors:o,tint:a,litP:l}=n,u=s.atlas,h=s.color,d=3.2,p=2.95,g=d+(o-1)*p,b=Math.max(2,Math.round(i/3.2)),S=i/b,M=-i/2,x=[0,d];for(let f=1;f<o;f++)x.push(d+f*p);for(let f=0;f<b;f++)tn(u,M+f*S,M+(f+1)*S,0,d,0,f===Math.floor(b/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),f===Math.floor(b/2)?cn:a);let c="bal"+Math.floor(t()*3),y=Fn(a,.97);for(let f=1;f<o;f++){let m=x[f];for(let v=0;v<b;v++)tn(u,M+v*S,M+(v+1)*S,m,x[f+1],0,gs("win2",t(),l),a);h.box(M,m-.15,-1.3,-M,m,0,y),h.box(M,m,-1.3,-M,m+1.1,-1.18,y,null,{noBottom:!0});for(let v=0;v<b;v++)tn(u,M+v*S,M+(v+1)*S,m,m+1.1,-1.305,c,a);for(let v=0;v<=b;v++)h.box(M+v*S-.05,m,-1.18,M+v*S+.05,m+2.4,0,Fn(a,.92));for(let v=0;v<b;v++){let E=t(),_=M+v*S+.2,T=M+(v+1)*S-.2;E<.34?Mg(h,_,T,m+2.02,-.98,t):E<.46&&YM(h,_+.25,Math.min(T-.25,_+1.9),m+1.1,-1.3,t)}s.atlas.setM(e);for(let v=0;v<b;v++)t()<.55&&(vd(s,e,M+(v+.78)*S,m,-.55),s.atlas.setM(e),s.color.setM(e))}h.box(M,g-.15,-1.3,-M,g,0,y),gl(u,i,r,x,a,t,l),h.quad([-i/2,0,r],[i/2,0,r],[i/2,g,r],[-i/2,g,r],Fn(a,.8)),vl(h,i,r,g,t,!0)}function OM(s,e,t,n){let{w:i,d:r,floors:o,tint:a,litP:l}=n,u=s.atlas,h=s.color,d=4,p=3.4,g=d+(o-1)*p,b=Math.max(2,Math.round(i/3)),S=i/b,M=-i/2,x=[0,d];for(let c=1;c<o;c++)x.push(d+c*p);for(let c=0;c<b;c++)tn(u,M+c*S,M+(c+1)*S,0,d,0,c===1?"shop_door":"shop_glass");for(let c=1;c<o;c++)for(let y=0;y<b;y++)tn(u,M+y*S,M+(y+1)*S,x[c],x[c+1],0,gs("win3",t(),l),a);gl(u,i,r,x,a,t,l),h.quad([-i/2,0,r],[i/2,0,r],[i/2,g,r],[-i/2,g,r],Fn(a,.8)),vl(h,i,r,g,t,!0),t()<.6&&rh(s,(t()<.5?1:-1)*(i/2-.3),d+.4,Math.min(g-.3,d+4.5),t),t()<.3&&vg(s,i,g,r,t)}function zM(s,e,t,n){let{w:i,d:r}=n,o=s.atlas,a=s.color,l=4.4,u=-i/2,h=Math.max(3,Math.round(i/3)),d=i/h;for(let p=0;p<h;p++)tn(o,u+p*d,u+(p+1)*d,0,3.4,0,"shop_konbini"),ir(s,e,u+(p+.5)*d,1.9,-.8,.8);a.box(u,3.4,-.35,-u,l,0,Se.white),tn(o,u,-u,3.4,l,-.355,"konbini_band"),gl(o,i,r,[0,l],xe("#f2f2ee"),t,0),vl(a,i,r,l,t)}var Jm=(s,e)=>e?xe("#7a5a42"):s.tint,md=null,kM=()=>{if(!md){let s=di("kawara"),e=16/272*(s.u1-s.u0);md={u0:s.u0+e,u1:s.u1-e,v0:s.v0,v1:s.v1}}return md};function xg(s,e,t,n,i,r,o){let a=s.atlas,l=s.color,u=!!e.snow,h=u?.75:.6,d=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),p=u?di("white"):kM(),g=u?xe("#f3f5fa"):xe("#c8ccd8"),b=u?xe("#e4e8f0"):xe("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*h)/3)),M=y=>-t/2-h+(t+2*h)*y/S;for(let y=0;y<S;y++){let f=M(y),m=M(y+1);a.quad([m,i-.25,-h],[f,i-.25,-h],[f,i+d,n/2],[m,i+d,n/2],g,p),a.quad([f,i-.25,n+h],[m,i-.25,n+h],[m,i+d,n/2],[f,i+d,n/2],g,p)}let x=(y,f,m,v,E,_)=>{_<0?(l.quad([f,m,E],[y,m,E],[y,v,E],[f,v,E],b),l.quad([y,m,E],[f,m,E],[f,m,E+.08],[y,m,E+.08],b)):(l.quad([y,m,E],[f,m,E],[f,v,E],[y,v,E],b),l.quad([f,m,E],[y,m,E],[y,m,E-.08],[f,m,E-.08],b))};for(let[y,f]of[[-h,0],[n+h,n]])x(-t/2-h,t/2+h,i-.42,i-.22,y<0?y-.04:y+.04,y<0?-1:1),l.quad(y<0?[-t/2-h,i-.26,y]:[t/2+h,i-.26,y],y<0?[t/2+h,i-.26,y]:[-t/2-h,i-.26,y],y<0?[t/2+h,i-.26,f]:[-t/2-h,i-.26,f],y<0?[-t/2-h,i-.26,f]:[t/2+h,i-.26,f],Fn(Jm(e,o),.62));for(let y of[-1,1]){let f=y*(t/2+h+.02),m=.2,v=[f,i-.25,-h],E=[f,i+d,n/2],_=[f,i-.25,n+h],T=R=>[R[0],R[1]-m,R[2]];y>0?(l.quad(T(E),T(v),v,E,b),l.quad(T(_),T(E),E,_,b)):(l.quad(T(v),T(E),E,v,b),l.quad(T(E),T(_),_,E,b))}let c=Jm(e,o);if(zo(l,[-t/2,i,0],[-t/2,i,n],[-t/2,i+d-.1,n/2],c),zo(l,[t/2,i,n],[t/2,i,0],[t/2,i+d-.1,n/2],c),l.box(-t/2-h,i+d-.05,n/2-.15,t/2+h,i+d+.18,n/2+.15,u?xe("#f6f7fb"):xe("#3d4456")),u){l.box(-t/2-h-.05,i-.42,-h-.1,t/2+h+.05,i-.12,-h+.3,xe("#eef1f7")),l.box(-t/2-h-.05,i-.42,n+h-.3,t/2+h+.05,i-.12,n+h+.1,xe("#eef1f7"));for(let y=-t/2;y<t/2;y+=.45+r()*.5)l.cyl(y,i-.42-.35,-h+.02,0,.04,.35,4,xe("#dfe8f3"),!1)}return{RC:g,k:p,fascia:x,nS:S}}function HM(s,e,t,n){let{w:i,d:r,floors:o,tint:a,litP:l}=n,u=s.atlas,h=s.color,d=2.9,p=o*d,g=-i/2,b=t()<.5,S=Math.max(2,Math.round(i/3)),M=i/S,x=[];for(let E=0;E<=o;E++)x.push(E*d);let c=b?cn:a;for(let E=0;E<o;E++)for(let _=0;_<S;_++){let T=b?"win4":"win0";E===0&&_===0?T="shop_house":T=gs(T,t(),l),tn(u,g+_*M,g+(_+1)*M,x[E],x[E+1],0,T,T==="shop_house"?cn:c)}gl(u,i,r,x,b?xe("#9a7a62"):a,t,l),h.quad([-i/2,0,r],[i/2,0,r],[i/2,p,r],[-i/2,p,r],Fn(a,.75));let{RC:y,k:f,fascia:m,nS:v}=xg(s,n,i,r,p,t,b);if(o>1){let E=d+.05;for(let _=0;_<v;_++){let T=-i/2-.1+(i+.2)*_/v,R=-i/2-.1+(i+.2)*(_+1)/v;u.quad([R,E-.3,-.75],[T,E-.3,-.75],[T,E+.05,0],[R,E+.05,0],y,f)}m(-i/2-.1,i/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,_=1.2;for(let[T,R]of[[-i/2,-1],[.4,i/2]])h.box(T,0,E-.08,R,_,E+.08,Se.concrete),tn(u,T,R,0,_,E-.085,"block")}}var xd={byZone:null};function yg(s){let e={};for(let t of s)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);xd.byZone=e}function oh(s,e){let t=xd.byZone&&xd.byZone[s];return t?t[Math.floor(e()*t.length)]:null}var fl={u0:0,u1:0,v0:0,v1:0},ts=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],jm=(s,e)=>{for(let t=0;t<4;t++)ts[t][0]=s[e+t*3],ts[t][1]=s[e+t*3+1],ts[t][2]=s[e+t*3+2]},VM=(s,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+s.e[12]*.731+s.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function GM(s,e,t,n){let i=n.ptype,r=s.atlas,o=s.color,a=di(i.f),l=di(i.s);for(let u of i.pieces){let h=u.t==="f"?a:l,d=h.u1-h.u0,p=h.v1-h.v0;fl.u0=h.u0+u.uv[0]*d,fl.u1=h.u0+u.uv[2]*d,fl.v1=h.v1-u.uv[1]*p,fl.v0=h.v1-u.uv[3]*p,jm(u.p,0),u.lit&&r.hasLit&&(r.litV=i.day?6:VM(r,u.p[0]+u.p[2],u.p[1])),r.quad(ts[0],ts[1],ts[2],ts[3],cn,fl),r.litV=0}o.noShadow=!0;for(let u of i.soffits)jm(u,0),o.quad(ts[0],ts[1],ts[2],ts[3],i.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,d=i.ww+1;for(let[p,g]of[[-d/2,-1],[.4,d/2]])o.box(p,0,u-.08,g,h,u+.08,Se.concrete),tn(r,p,g,0,h,u-.085,"block")}}function WM(s,e,t,n){let{w:i,d:r,floors:o,tint:a,litP:l}=n,u=s.atlas,h=s.color,d=3.4,p=o*d,g=Math.max(2,Math.round(i/6)),b=i/g,S=-i/2,M=t()<.5?"win3":"win2",x=[];for(let f=0;f<=o;f++)x.push(f*d);for(let f=0;f<o;f++)for(let m=0;m<g;m++)tn(u,S+m*b,S+(m+1)*b,x[f],x[f+1],0,gs(M,t(),l),a);let c=Math.max(1,Math.round(r/6)),y=r/c;for(let f of[-1,1])for(let m=0;m<o;m++)for(let v=0;v<c;v++)(f>0?ns:is)(u,f*i/2,v*y,(v+1)*y,x[m],x[m+1],gs(M,t(),l),a);vl(h,i,r,p,t,!0)}function Id(s,e,t,n){let i=s.color,r=xe("#8d9096"),o=xe("#3a3d42");i.setM(e),i.cyl(0,0,0,.11,.09,6,10,r),i.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,l=-n+.62;i.box(-.14,5.08,a,.14,5.56,l,o);let u=t*.141;s.atlas.setM(e),(t>0?ns:is)(s.atlas,u,a,l,5.08,5.56,"signal");let h=t>0?l:a,d=t>0?-1:1;for(let g=0;g<3;g++){let b=h+d*(.2+g*.4);i.box(t>0?.14:-.36,5.47,b-.15,t>0?.36:-.14,5.5,b+.15,o)}let p=h+d*.2;s.sig.setM(e),s.sig.box(t>0?.145:-.16,5.21,p-.11,t>0?.16:-.145,5.43,p+.11,cn)}function _g(s,e,t,n){let i=s.color,r=xe("#3d6ea8"),o=xe("#e8eef2"),a=xe("#c7c5bf"),l=5.35;i.setM(e),i.box(-1.1,l-.65,-t,1.1,l,t,r);for(let u of[-1.1,1])i.box(u,l,-t,u+.1,l+1.1,t,o),i.box(u-.02,l+1.1,-t,u+.12,l+1.18,t,r);s.atlas.setM(e),is(s.atlas,-1.105,-2.2,2.2,l-.62,l-.06,n),ns(s.atlas,1.105,-2.2,2.2,l-.62,l-.06,n),i.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),d=u*(t-.15),p=Math.min(h,d),g=Math.max(h,d);i.box(-.45,.15,p+.3,.45,l-.65,g-.3,r);let b=20,S=(l-.15)/b;for(let M=0;M<b;M++)i.box(1.1+M*.3,.15,p,1.1+(M+1)*.3,l-(M+1)*S+.04,g,a);i.box(1.1,l-.1,p-.05,1.1+b*.3,l-.02,p+.05,r)}}function bg(s,e,t,n,i,r,o){let a=s.color,l=1.22,u=3.55,h=6.7,d=xe("#c8c5bd"),p=xe("#ebe8de"),g=xe("#7a5a42"),b=xe("#5e4433"),S=xe("#4d5468");a.setM(e),a.box(t,-1.4,u,n,l,h,d,null,{noBottom:!0}),a.box(t,l,u,n,l+.025,u+.32,p),a.box(t,l,u+.6,n,l+.04,u+.9,Se.yellow);let M=Math.sign(i-(t+n)/2),x=M>0?n:t,c=x+M*6.2,y=u+.9,f=h-.2,m=(O,k,z)=>[O,k,z];M>0?a.quad(m(c,.1,f),m(c,.1,y),m(x,l,y),m(x,l,f),d):a.quad(m(c,.1,y),m(c,.1,f),m(x,l,f),m(x,l,y),d);for(let O of[y,f]){let k=xe("#9aa0a6");a.rod([c,.1+.9,O],[x,l+.9,O],.03,.03,5,k);for(let z=0;z<=3;z++){let K=c+(x-c)*z/3,le=.1+(l-.1)*z/3;a.box(K-.03,le,O-.03,K+.03,le+.9,O+.03,k)}}s.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let k=Math.min(n,O+3);s.atlas.quad([O,-.6,h+.004],[k,-.6,h+.004],[k,l,h+.004],[O,l,h+.004],xe("#d8d4ca"),di("concrete"))}a.setM(e);for(let O=t+.4;O<n;O+=2)a.box(O-.05,l,h-.12,O+.05,l+1,h-.02,xe("#8f949a"));for(let O of[.45,.95])a.box(t,l+O,h-.1,n,l+O+.06,h-.04,xe("#8f949a"));let v=n-t,E=O=>M>0?n-v*O:t+v*O,_=E(.47),T=_-2.3,R=_+2.3,w=u+1.35,P=h-.25;a.box(T,l,P-.12,R,l+2.45,P,g);for(let O of[T,R-.12])a.box(O,l,w+.6,O+.12,l+2.45,P,b);for(let O of[T,R-.12])a.box(O,l,w,O+.12,l+2.45,w+.12,b);a.quad([R+.4,l+2.5,w-.45],[T-.4,l+2.5,w-.45],[T-.4,l+2.85,P+.35],[R+.4,l+2.85,P+.35],S),a.quad([T-.4,l+2.42,w-.45],[R+.4,l+2.42,w-.45],[R+.4,l+2.77,P+.35],[T-.4,l+2.77,P+.35],xe("#3a3f50")),a.box(T+.3,l+.42,P-.55,R-.3,l+.48,P-.15,xe("#8a6a4a"));for(let O of[T+.4,R-.5])a.box(O,l,P-.5,O+.08,l+.42,P-.2,Se.metal);s.atlas.setM(e),s.atlas.quad([_-1.1,l+1.55,P+.005],[_+1.1,l+1.55,P+.005],[_+1.1,l+2.03,P+.005],[_-1.1,l+2.03,P+.005],cn,di("ekiplate"+r));let C=E(.2),A=u+1.6,L=1.25,D=l+1.25,U=D+.95;a.setM(e);for(let O of[C-L+.12,C+L-.12])a.cyl(O,l,A,.05,.05,U-l+.05,8,xe("#6b7078"));a.box(C-L,D-.03,A-.03,C+L,U+.03,A+.03,xe("#3a3d42")),s.atlas.setM(e),s.atlas.quad([C-L,D,A+.035],[C+L,D,A+.035],[C+L,U,A+.035],[C-L,U,A+.035],cn,di("ekimei"+r)),s.atlas.quad([C+L,D,A-.035],[C-L,D,A-.035],[C-L,U,A-.035],[C+L,U,A-.035],cn,di("ekimei"+r)),a.setM(e);let V=_-M*4.2;a.box(V-.9,l+.42,h-1.25,V+.9,l+.47,h-.85,xe("#3b6ea8")),a.box(V-.9,l+.47,h-.88,V+.9,l+.9,h-.83,xe("#3b6ea8"));for(let O of[V-.75,V+.7])a.box(O,l,h-1.2,O+.06,l+.42,h-.9,Se.metal);for(let O=t+3;O<n-1;O+=9)pl(s,ng(e,O,l,h-.45))}var XM=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(xe),qM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(xe);function Mg(s,e,t,n,i,r){s.rod([e,n,i],[t,n,i],.018,.018,4,Se.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,l=.36+r()*.42,u=r.pick(XM),h=i+(r()-.5)*.06;s.quad([o+a,n-l,h],[o,n-l,h],[o,n-.02,h],[o+a,n-.02,h],u),s.quad([o,n-l,h+.01],[o+a,n-l,h+.01],[o+a,n-.02,h+.01],[o,n-.02,h+.01],Fn(u,.85)),r()<.4&&s.box(o+a*.45,n-.02,h-.02,o+a*.55,n+.06,h+.02,xe("#d8d8d0")),o+=a+.06+r()*.22}}function YM(s,e,t,n,i,r){let o=r.pick(qM),a=.11;s.box(e,n-.02,i-a,t,n+.09,i+.22,o),s.box(e,n-.72,i-a,t,n+.09,i-.005,o),s.box(e+.08,n-.5,i-a-.004,t-.08,n-.42,i-a+.01,Fn(o,.86))}function Sg(s,e){let t=s.color,n=xe("#a19f97"),i=xe("#6b4a35"),r=xe("#4f4a44"),o=xe("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,xe("#8d8b84"));for(let a of[-.52,.48])for(let l of[-.36,.32])t.box(a,.32,l,a+.05,1.5,l+.05,i);t.box(-.55,1.42,.3,.55,1.5,.4,i),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Fn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,xe("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,xe("#5b8d3d"))}function Eg(s,e){let t=s.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Se.black:Se.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Se.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Se.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Se.black);t.box(-.78,-.9,-.34,.3,0,.34,Se.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,xe("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Se.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new et().multiplyMatrices(e,new et().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let i=0;i<4;i++)t.box(-.6+i*.3,-.075,-.02,-.3+i*.3,.075,.02,i%2?Se.black:Se.yellow)}t.setM(e),s.atlas.setM(e),tn(s.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Tg(s,e){let t=s.color;t.setM(e);let n=Se.stone,i=Fn(Se.stone,1.06),r=Fn(Se.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Oo(t,1,1.1,.16,.3,i,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,i),Oo(t,1.48,1.54,.25,.35,r,!1,!0),Oo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),s.lamp.setM(e),s.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,cn),s.lamp.box(-.1,1.2,.195,.1,1.38,.205,cn)}function Ld(s,e,t,n=6.2){let i=s.color;i.setM(e);for(let r of[-t,t])i.cyl(0,0,r,.32,.27,n,12,Se.vermilion),i.cyl(0,0,r,.38,.38,.5,12,Se.black);i.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Se.vermilion),i.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Se.vermilion),i.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Se.black),i.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Se.vermilion)}function wg(s,e,t){let n=s.color;n.setM(e);for(let i of[-1.5,1.5])n.box(i-.05,0,.6,i+.05,2.4,.7,xe("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,xe("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,xe("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,xe("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Se.metal),n.box(1.1,0,.3,1.2,.42,.55,Se.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Se.metal),s.atlas.setM(e),is(s.atlas,2.25,-.55,.15,2,2.7,"busstop"),ns(s.atlas,2.35,-.55,.15,2,2.7,"busstop")}var ZM=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],$M=xe("#a7a7aa"),KM=[1,.94,.87],Qm={};function Ag(s,e){let t=s*16+e,n=Qm[t];if(!n){let i=new ln,r=Fn($M,KM[s]),o=.4,a=.25;for(let l of ZM){let u=0,h=1,d=0;Math.abs(l[1])>.99&&(u=1,h=0);let p=l[1]*d-l[2]*h,g=l[2]*u-l[0]*d,b=l[0]*h-l[1]*u,S=Math.hypot(p,g,b);p/=S,g/=S,b/=S;let M=g*l[2]-b*l[1],x=b*l[0]-p*l[2],c=p*l[1]-g*l[0],y=[];for(let m=0;m<=e;m++){let v=m/e*Math.PI*2,E=Math.cos(v),_=Math.sin(v);y.push([p*E+M*_,g*E+x*_,b*E+c*_])}let f=(o-a)/1;for(let m=0;m<e;m++){let v=y[m],E=y[m+1],_=[v[0]*o,v[1]*o,v[2]*o],T=[E[0]*o,E[1]*o,E[2]*o],R=[l[0]+E[0]*a,l[1]+E[1]*a,l[2]+E[2]*a],w=[l[0]+v[0]*a,l[1]+v[1]*a,l[2]+v[2]*a],P=[v[0]+l[0]*f,v[1]+l[1]*f,v[2]+l[2]*f],C=[E[0]+l[0]*f,E[1]+l[1]*f,E[2]+l[2]*f];i.vtx(_[0],_[1],_[2],P[0],P[1],P[2],0,0,r),i.vtx(R[0],R[1],R[2],C[0],C[1],C[2],0,0,r),i.vtx(T[0],T[1],T[2],C[0],C[1],C[2],0,0,r),i.vtx(_[0],_[1],_[2],P[0],P[1],P[2],0,0,r),i.vtx(w[0],w[1],w[2],P[0],P[1],P[2],0,0,r),i.vtx(R[0],R[1],R[2],C[0],C[1],C[2],0,0,r),i.vtx(l[0],l[1],l[2],l[0],l[1],l[2],0,0,r),i.vtx(R[0],R[1],R[2],l[0],l[1],l[2],0,0,r),i.vtx(w[0],w[1],w[2],l[0],l[1],l[2],0,0,r)}}n=Qm[t]=i.toArrays()}return n}var JM=new gn,gd=new Zn,jM=new H,QM=new H;function Dd(s,e,t,n,i,r,o=0,a=.6){i()<a?gd.set((i()-.5)*.4,i()*6.283,(i()-.5)*.4):gd.set(i()*6.283,i()*6.283,i()*6.283);let l=new et().compose(jM.set(e,t,n),JM.setFromEuler(gd),QM.set(r,r,r));l.groundY=o,s.color.stamp(Ag(Math.floor(i()*3),dl>.7?8:6),l)}function Rg(){for(let s=0;s<3;s++)for(let e of[6,8])Ag(s,e)}function Cg(s,e){let t=s.color;t.setM(e),s.foliage.setM(e),s.foliage.blob(0,.5,0,6,xe("#8f8a80"),xe("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Se.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Se.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Se.black),t.cyl(0,18.6,0,1,.25,1.2,12,Se.red),s.lamp.setM(e),s.lamp.cyl(0,17.25,0,.95,.95,1.35,12,cn)}function Pg(s,e,t){let n=s.color;n.setM(e);let i=t.pick([xe("#f4f4f0"),xe("#3b6ea5"),xe("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,i),zo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],i),zo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],i),n.box(-2.4,.86,-.95,3,1,.95,Se.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Se.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,xe("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Se.metal)}function Ig(s,e,t){let n=s.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Se.stone),n.box(-.55,.5,.9,.55,1.5,1.8,xe("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],xe("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],xe("#4d5468")),Ld(s,ng(e,0,0,-.3,Math.PI/2),.75,2.2)}var Ho=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(s=>s.map(e=>typeof e=="string"?new _e(e):e)),se={zenith:new _e,horizon:new _e,sunCol:new _e,sunI:1,hemiSky:new _e,hemiGround:new _e,hemiI:1,fog:new _e,cLit:new _e,cShade:new _e,cRim:new _e,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0};function Dg(s){let e=0;for(;e<Ho.length-2&&Ho[e+1][0]<=s;)e++;let t=Ho[e],n=Ho[e+1],i=il($t((s-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],i);r(1,se.zenith),r(2,se.horizon),r(3,se.sunCol),se.sunI=At(t[4],n[4],i),r(5,se.hemiSky),r(6,se.hemiGround),se.hemiI=At(t[7],n[7],i),r(8,se.fog),r(9,se.cLit),r(10,se.cShade),r(11,se.cRim),se.night=At(t[12],n[12],i),se.warm=At(t[13],n[13],i),se.sunEl=Ng(s,se.sunDir,se.moonDir,se.lightDir)}function Ng(s,e,t,n){let i=Math.sin((s-.25)*Math.PI*2)*1.08,r=(s-.25)*Math.PI+.9;return e.set(Math.cos(i)*Math.sin(r),Math.sin(i),Math.cos(i)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(i))*.8+.25,-e.z).normalize(),n.copy(e),i<.08&&n.lerpVectors(t,e,$t((i+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),i}var tS=new H,nS=new H;function Ud(s,e){return Ng((s%1+1)%1,tS,nS,e),e}var Lg={zenith:[new _e("#7b8594"),new _e("#141a28")],horizon:[new _e("#b5bcc6"),new _e("#283042")],fog:[new _e("#a8b0ba"),new _e("#232b3c")],hemiSky:[new _e("#aab3bf"),new _e("#3c4866")],hemiGround:[new _e("#8b8983"),new _e("#1e2030")],cLit:[new _e("#d0d5dc"),new _e("#2c3240")],cShade:[new _e("#7c8593"),new _e("#151922")]},Nd=new _e;function Ug(s,e){if(se.overcast=s,se.rain=e,se.bright=(1-se.night)*(1-se.warm)*(1-s),s<=.001)return;let t=se.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Nd.copy(Lg[n][0]).lerp(Lg[n][1],t),se[n].lerp(Nd,s*(n==="cLit"||n==="cShade"?.75:.85));se.sunI*=1-.82*s,se.warm*=1-s,se.cRim.multiplyScalar(1-s),se.sunCol.lerp(Nd.setRGB(.85,.87,.9),s*.6)}function Fg(){let s=new ut({side:Hn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:se.zenith},uHorizon:{value:se.horizon},uSunDir:{value:se.sunDir},uMoonDir:{value:se.moonDir},uNoiseTex:Be.uNoiseTex,uSunCol:{value:se.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new _e},uOvercast:{value:0},uDeckLit:{value:new _e},uDeckDark:{value:new _e},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${wi}
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
      }`}),e=new ct(new Ba(5e3,48,24),s);return e.renderOrder=1e3,e.frustumCulled=!1,e}function iS(s,e){let t=[],i=e?.6:.88,r=(s()-.5)*.04,o=e?6:9;for(let c=0;c<o;c++){let y=.06+s()*.05;t.push([(c/(o-1)-.5)*i+(s()-.5)*.03,.1+y*.5,(s()-.5)*.2,y])}let a=e?6:2,l=i*.82,u=.1+.09;for(let c=0;c<a;c++){let y=Math.max(1,Math.round(l/.11));for(let f=0;f<y;f++){let m=(y===1?0:f/(y-1)-.5)*l+(s()-.5)*.05+r*c;t.push([m,u+s()*.05,(s()-.5)*.25+.05,(.075+s()*.05)*(e?1.25:1)])}u+=e?.115:.075,l*=e?.8:.66}let h=t.slice();for(let c of h){if(t.length>84)break;let y=1+Math.floor(s()*2);for(let f=0;f<y;f++){let m=.35+s()*2.4,v=c[3]*(.35+s()*.2);t.push([c[0]+Math.cos(m)*c[3]*.82,c[1]+Math.sin(m)*c[3]*.82,c[2]+.04,v])}}let d=t.slice(h.length);for(let c of h){if(c[1]<.1+.12||t.length>104)continue;let y=1+Math.floor(s()*2);for(let f=0;f<y;f++){let m=.3+s()*2.5,v=c[3]*(.3+s()*.4),E=c[3]*(.28+s()*.16);t.push([c[0]+Math.cos(m)*v,c[1]+Math.sin(m)*v,c[2]+Math.sqrt(c[3]*c[3]-v*v)-E*.6,E])}}for(let c of d){if(t.length>124)break;let y=1+Math.floor(s()*2);for(let f=0;f<y;f++){let m=.2+s()*2.7,v=c[3]*(.38+s()*.2);t.push([c[0]+Math.cos(m)*c[3]*.85,c[1]+Math.sin(m)*c[3]*.85,c[2]+.02,v])}}let p=t.slice(0,128),g=1e9,b=-1e9,S=-1e9;for(let c of p)g=Math.min(g,c[0]-c[3]*1.12),b=Math.max(b,c[0]+c[3]*1.12),S=Math.max(S,c[1]+c[3]*1.12);let M=Math.min(1,.92/(b-g),(.95-.1)/(S-.1)),x=(g+b)/2;for(let c of p)c[0]=(c[0]-x)*M,c[1]=.1+(c[1]-.1)*M,c[3]*=M;return p}function Bg(s){let t={value:Array.from({length:128},()=>new dt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",i=new ut({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Be.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${wi}
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
      }`,depthTest:!1,depthWrite:!1,blending:ii}),r=new Xt(1024,1024,{generateMipmaps:!0,minFilter:Pn,magFilter:Bt,depthBuffer:!1}),o=new ut({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Be.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${wi}
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
      }`,depthTest:!1,depthWrite:!1,blending:ii}),a=new ct(new en(1,1),i),l=new yr,u=new Rs;l.add(a);let h=new Xt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Pn,magFilter:Bt}),d=s.getRenderTarget(),p=s.autoClear,g=Ot(99);s.setRenderTarget(h),s.setClearColor(0,0),s.clear(),s.autoClear=!1;let b=[];for(let S=0;S<4;S++){let M=S%2===0,x=iS(g,M);x.forEach((c,y)=>t.value[y].set(c[0],c[1],c[2],c[3])),i.uniforms.uN.value=x.length,i.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,a.material=i,s.setRenderTarget(r),s.render(l,u),a.material=o,h.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),s.setRenderTarget(h),s.render(l,u),b.push({cell:[S%2,Math.floor(S/2)],tall:M})}return h.viewport.set(0,0,1024*2,1024*2),s.autoClear=p,s.setRenderTarget(d),i.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:h.texture,kinds:b,rt:h}}function Og(s){let e=Ot(5),t=22,n=[],i=new en(1,1);i.translate(0,.5,0);let r=new Cn(new Float32Array(t*4),4),o=new Cn(new Float32Array(t),1);i.setAttribute("aD",r),i.setAttribute("aR",o);let a=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:s.tex},uLit:{value:new _e},uShade:{value:se.cShade},uRim:{value:se.cRim},uHaze:{value:se.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),l=new Ki(i,a,t);l.frustumCulled=!1,l.renderOrder=-5;for(let b=0;b<t;b++){let S=b<12,M=s.kinds[(b*3+(S?0:1))%s.kinds.length],x=S?M.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:b/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:x,cell:M.cell,haze:S?.45:.18})}let u=new et,h=new gn,d=new H,p=new H,g=new H(0,1,0);return{group:l,update(b,S){let M=Math.atan2(se.lightDir.x,se.lightDir.z);for(let c of n)c.phi+=S*1.2/c.d;n.slice().sort((c,y)=>y.d-c.d).forEach((c,y)=>{d.set(b.x+Math.sin(c.phi)*c.d,b.y+c.base,b.z+Math.cos(c.phi)*c.d),h.setFromAxisAngle(g,c.phi+Math.PI),p.set(c.size,c.size,1),u.compose(d,h,p),l.setMatrixAt(y,u);let f=M-c.phi;f=Math.atan2(Math.sin(f),Math.cos(f));let m=Math.max(0,Math.min(1,(f+.35)/.7)),v=1-m*m*(3-2*m);r.setXYZW(y,c.cell[0],c.cell[1],v,c.haze),o.setX(y,.35+.9*Math.pow(Math.max(Math.cos(f),0),3)*(.4+se.warm))}),l.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-se.night*.35)*(1-se.overcast*.55)*(1-.85*se.rain),a.uniforms.uLit.value.copy(se.cLit).multiplyScalar(1+.35*se.bright)}}}function zg(){let s=new on;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let d=0;d<=360;d++){let p=d/360*Math.PI*2,g=Math.sin(p)*t.R,b=Math.cos(p)*t.R,S=Xu(d/360*t.k*4,40+n*9),M=Math.pow(Math.max(0,S-.18)/.82,1.6),x=t.h*(.12+M);if(r.push(g,-60,b,g,-60+x,b),o.push(0,d/360,1,d/360),d<360){let c=d*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}}let l=new mt;l.setAttribute("position",new Ze(r,3)),l.setAttribute("hf",new Ze(o,2)),l.setIndex(a);let u=new ut({side:bn,fog:!1,uniforms:{uCol:{value:new _e(t.col)},uHaze:{value:se.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Be.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${wi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ct(l,u);h.frustumCulled=!1,h.renderOrder=999,s.add(h)}),{group:s,update(t,n=0,i=1){if(s.visible=i>.002,!s.visible)return;s.position.set(t.x,0,t.z),s.scale.y=Math.min(1,i);for(let o of s.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-se.night))*(1-.35*se.overcast);for(let o of s.children)o.material.uniforms.uLight.value=r}}}var Nr="./assets/",kg=`
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
}`,Ls=[.299,.587,.114],Vo=[.03,.014,-.018],sS=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4),pi=[0,0,0],Fd=(s,e,t,n,i,r)=>{let o=s-e*(1-n)-t*n*i;return Math.min(.985,Math.max(0,sS(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Hg(s,e,t,n,i){let r=s.toneMappingExposure.value,o=s.uSat.value,a=s.uLo.value,l=s.uDay.value,u=e/255,h=t/255,d=n/255,p=a.x*Ls[0]+a.y*Ls[1]+a.z*Ls[2],g=(Vo[0]*Ls[0]+Vo[1]*Ls[1]+Vo[2]*Ls[2])*l,b=(u*Ls[0]+h*Ls[1]+d*Ls[2]-p)/(1-p+g);pi[0]=Fd(u,a.x,Vo[0],b,l,o),pi[1]=Fd(h,a.y,Vo[1],b,l,o),pi[2]=Fd(d,a.z,Vo[2],b,l,o);let S=.76,M=.24,x=Math.max(pi[0],pi[1],pi[2]);if(x>=S){let f=M*M/(1-x)-M+S,m=1-1/(.15*(f-x)+1),v=f/x;for(let E=0;E<3;E++)pi[E]=(pi[E]-m*x)/Math.max(1-m,.001)*v}let c=Math.min(pi[0],pi[1],pi[2]),y=c<.04?Math.sqrt(Math.max(c,0)/6.25)-c:.04;return i.setRGB((pi[0]+y)/r,(pi[1]+y)/r,(pi[2]+y)/r)}var Vg={value:new Pe(1280,720)};function Gg(s){s.getDrawingBufferSize(Vg.value)}function Wg(s){let e=s.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:Vg}}async function zd(s,e,t){let n=e.files[t]?t:"hi",i=await fetch(s+e.files[n]);if(!i.ok)throw new Error(e.files[n]+" "+i.status);let r=await i.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),a;try{a=await new ka().loadAsync(o)}catch(l){throw URL.revokeObjectURL(o),l}return a.onUpdate=()=>{URL.revokeObjectURL(o),a.onUpdate=null},a.colorSpace=si,a.generateMipmaps=!0,a.minFilter=Pn,a.magFilter=Bt,{tex:a,file:n}}async function Ur(s,e,t){let n,i=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([s,i])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function Xg(s,e=15e3){let t=Nr+"clouds/";return Ur((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let i=await n.json(),r=(i.clouds||[]).filter(a=>a.u1>a.u0&&a.v1>a.v0&&a.w>0&&a.h>0&&a.lum&&a.lum[1]>a.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await zd(t,i,s);return{tex:o,list:r,tier:s}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function qg(s,e=15e3){let t=Nr+"fronts/";return Ur((async()=>{let n=await fetch(t+"fronts.json");if(!n.ok)throw new Error("fronts.json "+n.status);let i=await n.json(),r=(i.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=i.files&&i.files[s]?s:"hi",a=await fetch(t+i.files[o]);if(!a.ok)throw new Error(i.files[o]+" "+a.status);let l=await a.blob();if(i.bytes&&i.bytes[o]&&l.size!==i.bytes[o])throw new Error(i.files[o]+" is "+l.size+" bytes, not "+i.bytes[o]);let u=await createImageBitmap(l);if(i.size&&i.size[o]&&(u.width!==i.size[o][0]||u.height!==i.size[o][1]))throw new Error(i.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function Yg(s,e=15e3){let t=Nr+"houses/";return Ur((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let i=await n.json(),r=i.files&&i.files[s]?s:"hi",o=i.tiles&&i.tiles[r]||[],a=(i.types||[]).filter(d=>d.f&&d.s&&d.pieces&&d.pieces.length&&o.some(p=>p.name===d.f)&&o.some(p=>p.name===d.s));if(!a.length||!(i.rows&&i.rows[r]>0))throw new Error("no houses listed");let l=await fetch(t+i.files[r]);if(!l.ok)throw new Error(i.files[r]+" "+l.status);let u=await l.blob();if(i.bytes&&i.bytes[r]&&u.size!==i.bytes[r])throw new Error(i.files[r]+" is "+u.size+" bytes, not "+i.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(i.size&&i.size[r]&&(h.width!==i.size[r][0]||h.height!==i.size[r][1]))throw new Error(i.files[r]+" has the wrong size");if(o.some(d=>!(d.w>0&&d.h>0&&d.x>=0&&d.x+d.w<=h.width&&d.ey+d.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:a,rows:i.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function Zg(s,e=15e3){let t=Nr+"fields/";return Ur((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let i=await n.json();if(!(i.tile&&i.tile[0]>0&&i.tile[1]>0&&Math.abs(Ti/i.tile[1]-Math.round(Ti/i.tile[1]))<1e-6))throw new Error("bad tile size");if(!(i.mean&&i.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await zd(t,i,s);return r.colorSpace=Wt,r.wrapS=r.wrapT=As,{tex:r,tile:i.tile,mean:i.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var ah=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],rS=140*Math.PI/180,lh=Math.PI/180,or=s=>Math.atan2(Math.sin(s),Math.cos(s));function oS(s,e){let t=Ot(e),n=[],i=t()*Math.PI*2,r=Math.PI*2/ah[0][1];for(let[l,u,h,d,p,g,b]of ah)for(let S=0;S<u;S++){let M;l==="tower"?M=i+S*r+t.range(-.22,.22)*r:l==="mid"?M=i+(S+.5)*r*(ah[0][1]/u)+t.range(-.2,.2)*r:l==="high"?M=i+(S*(ah[0][1]/u)+.5)*r+t.range(-.3,.3)*r:M=i+(S+t())/u*Math.PI*2,n.push({role:l,kinds:g,phi:M,d:t.range(h[0],h[1]),e0:t.range(d[0],d[1])*lh,ah:t.range(p[0],p[1])*lh,haze:b,k:-1,flip:!1})}let o=s.map(()=>[]),a=n.map((l,u)=>u);for(let l=a.length-1;l>0;l--){let u=Math.floor(t()*(l+1)),h=a[l];a[l]=a[u],a[u]=h}for(let l of a){let u=n[l],h=-1,d=1e9;s.forEach((p,g)=>{let b=u.kinds.indexOf(p.kind);if(b<0)return;let M=(o[g].some(x=>Math.abs(or(x-u.phi))<rS)?1e3:0)+o[g].length*10+b*4+t();M<d&&(d=M,h=g)}),h<0&&(h=Math.floor(t()*s.length)),u.k=h,o[h].push(u.phi)}for(let l of n){let u=s[l.k],h=l.d*Math.tan(l.e0);l.y0=h,l.h=l.d*Math.tan(l.e0+l.ah)-h,l.w=l.h*u.w/u.h,l.half=Math.atan2(l.w/2,l.d)}return n.sort((l,u)=>u.d-l.d)}function $g(s,e,t=5){let n=s.list,i=oS(n,t),r=i.length,o=new en(1,1);o.translate(0,.5,0);let a=new Cn(new Float32Array(r*4),4),l=new Cn(new Float32Array(r*4),4),u=new Cn(new Float32Array(r),1);o.setAttribute("aRect",a),o.setAttribute("aInfo",l),o.setAttribute("aRim",u),i.forEach((m,v)=>{let E=n[m.k];a.setXYZW(v,E.u0,E.v0,E.u1-E.u0,E.v1-E.v0),l.setXYZW(v,0,E.lum[0],1/Math.max(.05,E.lum[1]-E.lum[0]),m.haze)});let h=new ut({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:s.tex},uLit:{value:new _e},uShade:{value:se.cShade},uRimCol:{value:se.cRim},uHaze:{value:se.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:s.tier==="hi"?3:2},...Wg(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:kg+`
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
      }`}),d=new Ki(o,h,r);d.frustumCulled=!1,d.renderOrder=-5;let p=new et,g=new gn,b=new H,S=new H,M=new H(0,1,0),x=new H,c=!0;function y(m,v){let E=i.filter(A=>A.role==="tower").sort((A,L)=>or(A.phi-m)-or(L.phi-m)),_=null,T=1e9;for(let A=0;A<E.length;A++){let L=E[A],D=E[(A+1)%E.length],U=v==="center"?L.phi:L.phi+or(D.phi-L.phi)/2,V=Math.abs(or(U-m));V<T&&(T=V,_=v==="center"?[L,L,U]:[L,D,U])}if(!_)return;let[R,w,P]=_,C=or(m-P);for(let A of i)A.phi+=C;for(let A of new Set([R,w])){let L=Math.max(A.ah,31*lh),D=A.d*Math.tan(A.e0+L)-A.y0;A.w*=D/A.h,A.h=D,A.ah=L,A.half=Math.atan2(A.w/2,A.d)}}let f={mesh:d,count:r,opening:"flank",layout:i,update(m,v){let E=m.position,_=Math.atan2(se.lightDir.x,se.lightDir.z);m.getWorldDirection(x);let T=Math.atan2(x.x,x.z),R=Math.atan(Math.tan(m.fov*lh/2)*m.aspect);c&&y(T,f.opening);for(let P=0;P<r;P++){let C=i[P];C.phi+=v*1.2/C.d,b.set(E.x+Math.sin(C.phi)*C.d,E.y+C.y0,E.z+Math.cos(C.phi)*C.d),g.setFromAxisAngle(M,C.phi+Math.PI),S.set(C.w,C.h,1),p.compose(b,g,S),d.setMatrixAt(P,p);let A=or(_-C.phi),L=A>0!==n[C.k].litLeft;L!==C.flip&&Math.abs(Math.sin(A))>.2&&(c||Math.abs(or(C.phi-T))>R+C.half+.05)&&(C.flip=L),l.setX(P,C.flip?1:0);let D=Math.max(Math.cos(A),0);u.setX(P,.35+.9*D*D*D*(.4+se.warm))}c=!1,d.instanceMatrix.needsUpdate=!0,l.needsUpdate=!0,u.needsUpdate=!0;let w=h.uniforms;{let P=Math.min(Math.max((se.bright-.55)/.4,0),1);w.uPaint.value=P*P*(3-2*P)}w.uLit.value.copy(se.cLit).multiplyScalar(1+.35*se.bright),w.uOpacity.value=(1-se.night*.35)*(1-se.overcast*.55)*(1-.85*se.rain)}};return f}async function Kg(s,e=15e3){let t=Nr+"band/";return Ur((async()=>{let n=await fetch(t+"band.json");if(!n.ok)throw new Error("band.json "+n.status);let i=await n.json(),{tex:r,file:o}=await zd(t,i,s),a={};for(let[l,u]of Object.entries(i.zones&&i.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(a[l]=new dt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(a).length)throw new Error("no zones listed");return r.wrapS=As,{tex:r,zones:a,period:i.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var xl=2500,aS=-8,Dr=new H,rr=new _e,Bd=new _e("#fff5dd").multiplyScalar(3.35),Od=new _e("#8fb1ec").multiplyScalar(1.35*2);function Jg(s,e,t){let n=s.zones,i=Math.max(...Object.values(n).map(f=>f.w)),r=192,o=360/s.period,a=new Float32Array((r+1)*6),l=new Float32Array((r+1)*4),u=[],h=Math.tan(aS*Math.PI/180),d=i+.004;for(let f=0;f<=r;f++){let m=f/r*Math.PI*2,v=Math.sin(m)*xl,E=Math.cos(m)*xl;if(a.set([v,h*xl,E,v,d*xl,E],f*6),l.set([-(f/r)*o,h,-(f/r)*o,d],f*4),f<r){let _=f*2;u.push(_,_+2,_+1,_+1,_+2,_+3)}}let p=new mt;p.setAttribute("position",new _t(a,3)),p.setAttribute("uv",new _t(l,2)),p.setIndex(u);let g=Math.PI/180,b=(e.composer.readBuffer.samples||0)>0,S=new ut({fog:!1,side:bn,alphaToCoverage:b,defines:b?{A2C:1}:{},uniforms:{map:{value:s.tex},uRowA:{value:new dt},uRowB:{value:new dt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new _e(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*g)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Pe(h,d)},...Wg(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${xl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:kg+`
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
      }`}),M=new ct(p,S);M.frustumCulled=!1,M.renderOrder=999;let x=S.uniforms,c=new H,y=!0;return{mesh:M,zones:n,hero:.125,update(f,m,v=2.8,E=.0014,_=700){let T=n[m.a],R=n[m.b],w=m.t,P=0;if(T&&R?(x.uRowA.value.copy(T),x.uRowB.value.copy(R),x.uMix.value=T===R?0:w,P=1):(T||R)&&(x.uRowA.value.copy(T||R),x.uMix.value=0,P=T?1-w:w),x.uAlpha.value=P,M.visible=P>.002,!M.visible)return 0;M.position.copy(f.position),x.uGnd.value.set(v,E,_),x.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(v/140)+.3*g)),Math.max(T?T.w:0,R?R.w:0)+.003),y&&(f.getWorldDirection(c),x.uRot.value=this.hero+Math.atan2(c.x,c.z)/(Math.PI*2)*o,y=!1),rr.copy(se.sunCol).multiplyScalar(se.sunI),Dr.set(rr.r,rr.g,rr.b),rr.copy(se.hemiSky).multiplyScalar(se.hemiI*2),Dr.x+=rr.r,Dr.y+=rr.g,Dr.z+=rr.b;let C=Math.min(Math.max((se.bright-.55)/.4,0),1),A=C*C*(3-2*C);x.uLightC.value.setRGB(Dr.x/(Bd.r+Od.r),Dr.y/(Bd.g+Od.g),Dr.z/(Bd.b+Od.b)),x.uPaint.value=A;let L=Math.max(4*x.uMix.value*(1-x.uMix.value),Math.min(1,2*(1-P))),D=b?0:.45*L*L*L;return x.uHaze.value=1-(1-(1-(1-.12*se.warm-.25*se.night)*(1-.55*se.overcast)*(1-.6*se.rain))*(1-A))*(1-D),P}}}async function lS(s){let e=new Uint8Array(s),t=new DataView(s),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((p,g)=>e[g]!==p))throw new Error("not a PNG");let i=8,r=0,o=0,a=[];for(;i+12<=e.length;){let p=t.getUint32(i),g=String.fromCharCode(e[i+4],e[i+5],e[i+6],e[i+7]);if(i+12+p>e.length)throw new Error("PNG truncated");if(g==="IHDR"){if(r=t.getUint32(i+8),o=t.getUint32(i+12),e[i+16]!==8||e[i+17]!==6||e[i+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(g==="IDAT")a.push(e.subarray(i+8,i+8+p));else if(g==="IEND")break;i+=12+p}if(!r||!o||!a.length)throw new Error("PNG has no image");let l=new Uint8Array(await new Response(new Blob(a).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),d=new Uint8Array(u);if(l.length<(u+1)*o)throw new Error("PNG data short");for(let p=0;p<o;p++){let g=l[p*(u+1)],b=p*(u+1)+1,S=(o-1-p)*u,M=p?h.subarray(S+u,S+2*u):d,x=h.subarray(S,S+u),c=l.subarray(b,b+u);if(g===0)x.set(c);else if(g===1){for(let y=0;y<4;y++)x[y]=c[y];for(let y=4;y<u;y++)x[y]=c[y]+x[y-4]}else if(g===2)for(let y=0;y<u;y++)x[y]=c[y]+M[y];else if(g===3){for(let y=0;y<4;y++)x[y]=c[y]+(M[y]>>1);for(let y=4;y<u;y++)x[y]=c[y]+(x[y-4]+M[y]>>1)}else if(g===4){for(let y=0;y<4;y++)x[y]=c[y]+M[y];for(let y=4;y<u;y++){let f=x[y-4],m=M[y],v=M[y-4],E=Math.abs(m-v),_=Math.abs(f-v),T=Math.abs(f+m-v-v);x[y]=c[y]+(E<=_&&E<=T?f:_<=T?m:v)}}else throw new Error("PNG filter "+g)}return{w:r,h:o,data:h}}function cS(s,e,t,n,i,r=.5){let o=[{data:t,width:s,height:e}],a=Math.floor(r*255)+1,l=new Uint32Array(256),u=[],h=(b,S,M,x,c,y)=>{l.fill(0);for(let f=0;f<y;f++){let m=((x+f)*S+M)*4+3;for(let v=0;v<c;v++)l[b[m+v*4]]++}};for(let b=0;b<i;b++)for(let S=0;S<n;S++){let M=s/n,x=e/i;h(t,s,S*M,b*x,M,x);let c=0;for(let y=a;y<256;y++)c+=l[y];u.push(c/(M*x))}let d=s,p=e,g=t;for(;d>1&&p>1;){let b=d>>1,S=p>>1,M=new Uint8Array(b*S*4),x=d*4;for(let f=0;f<S;f++){let m=f*2*x,v=f*b*4;for(let E=0;E<b;E++,m+=8)for(let _=0;_<4;_++,v++)M[v]=g[m+_]+g[m+_+4]+g[m+_+x]+g[m+_+x+4]+2>>2}let c=b/n,y=S/i;if(c>=2&&y>=2&&c===Math.floor(c)&&y===Math.floor(y))for(let f=0;f<i;f++)for(let m=0;m<n;m++){h(M,b,m*c,f*y,c,y);let v=Math.round(u[f*n+m]*c*y),E=255,_=l[255];for(;E>1&&_<v;)_+=l[--E];let T=v>0?Math.min(6,Math.max(.5,a/E)):1;if(T!==1)for(let R=0;R<y;R++){let w=((f*y+R)*b+m*c)*4+3;for(let P=0;P<c;P++)M[w+P*4]=Math.min(255,Math.round(M[w+P*4]*T))}}o.push({data:M,width:b,height:S}),g=M,d=b,p=S}return o}async function jg(s,e=15e3){let t=Nr+"trees/";return Ur((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let i=await n.json(),r=i.files[s]?s:"hi",o=await fetch(t+i.files[r]);if(!o.ok)throw new Error(i.files[r]+" "+o.status);let a=await o.arrayBuffer();if(i.bytes&&i.bytes[r]&&a.byteLength!==i.bytes[r])throw new Error(i.files[r]+" is "+a.byteLength+" bytes, not "+i.bytes[r]);let l=await lS(a),u=i.cols,h=i.rows;if(!(u>0&&h>0)||l.w%u||l.h%h)throw new Error("bad atlas layout");let d=(i.cells||[]).filter(b=>b.col<u&&b.row<h).map(b=>{let S=.5/l.w,M=.5/l.h;return{kind:b.kind,u0:b.col/u+S,u1:(b.col+1)/u-S,v0:1-(b.row+1)/h+M,v1:1-b.row/h-M}});if(!d.some(b=>b.kind==="leaf"))throw new Error("no leaf clusters listed");let p=cS(l.w,l.h,l.data,u,h,.5),g=new $i(l.data,l.w,l.h,Kn);return g.mipmaps=p,g.generateMipmaps=!1,g.minFilter=Pn,g.magFilter=Bt,g.colorSpace=si,g.needsUpdate=!0,{tex:g,cells:d,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var yl={T:6.5,LAM:11,LZ:42},kd=`
float shorePhase(float s, float d){ return uTime * ${(1/yl.T).toFixed(7)} + d * ${(1/yl.LAM).toFixed(7)} - s * ${(1/yl.LZ).toFixed(7)}; }`,uS=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,_l={uNoiseTex:Be.uNoiseTex,uTime:{value:0},uCam:{value:new H},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new _e},uPMid:{value:new _e},uPFace:{value:new _e},uPFar:{value:new _e},uPHz:{value:new _e},uFoamLit:{value:new _e(1,1,1)},uFoamShade:{value:new _e(.5,.6,.8)}},hS={trough:[0,98,182],mid:[10,132,218],face:[42,158,236],far:[66,170,246],hz:[118,188,243],foam:[246,251,254],foamShade:[160,205,240]},e1=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPFar, uPHz, uFoamLit, uFoamShade;
${wi}
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
}`;function t1(){let s=new ut({fog:!1,uniforms:_l,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${e1}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),e=new ct(new en(14e3,14e3),s);e.rotation.x=-Math.PI/2,e.position.y=es,e.renderOrder=998,e.frustumCulled=!1;let t=_l;return{mesh:e,update(n,i,r,o=1,a=null){e.position.x=n.x,e.position.z=n.z,t.uTime.value=i,t.uCam.value.copy(n),t.uNight.value=se.night,t.uBright.value=se.bright,t.uFogD.value=r,t.uVis.value=o,t.uSpecK.value=1-se.overcast*.85;let l=Math.min(Math.max((se.bright-.55)/.4,0),1),u=a?l*l*(3-2*l):0;t.uPaint.value=u;let h=1+.25*se.bright,d=1/(Math.PI*h),p=se.sunCol,g=se.hemiSky,b=se.sunI*.8,S=se.hemiI;if(t.uFoamLit.value.setRGB((p.r*b+g.r*S)*d,(p.g*b+g.g*S)*d,(p.b*b+g.b*S)*d),t.uFoamShade.value.setRGB(g.r*S*.9*d,g.g*S*.9*d,g.b*S*.9*d),u>0){let M=hS;Fr(a,M.trough,t.uPTrough.value),Fr(a,M.mid,t.uPMid.value),Fr(a,M.face,t.uPFace.value),Fr(a,M.far,t.uPFar.value),Fr(a,M.hz,t.uPHz.value),t.uFoamLit.value.lerp(Fr(a,M.foam,Qg),u),t.uFoamShade.value.lerp(Fr(a,M.foamShade,Qg),u)}}}}var Qg=new _e,Fr=(s,e,t)=>Hg(s,e[0],e[1],e[2],t);function n1(s=!1){return new ut({fog:!1,defines:s?{SHORE_LITE:""}:{},uniforms:_l,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${e1}${uS}${kd}
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
      }`})}function i1(){return new ut({fog:!1,uniforms:{uNoiseTex:Be.uNoiseTex,uTime:{value:0},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${wi}
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
      }`})}var ch={n:8};function s1(){return new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:_l,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${kd}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${yl.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
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
      ${wi}
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
      }`})}function r1(s){let e=s.length/8;if(!e)return null;let t=new Float32Array(e*12),n=new Float32Array(e*16),i=new Float32Array(e*12),r=new Uint16Array(e*6),o=[-1,1,1,-1],a=[-1,-1,1,1],l=1/0,u=1/0,h=1/0,d=-1/0,p=-1/0,g=-1/0;for(let S=0;S<e;S++){let M=S*8;for(let x=0;x<4;x++){let c=S*4+x;t[c*3]=s[M],t[c*3+1]=s[M+1],t[c*3+2]=s[M+2],n[c*4]=s[M+3],n[c*4+1]=s[M+4],n[c*4+2]=s[M+5],n[c*4+3]=s[M+6],i[c*3]=o[x],i[c*3+1]=a[x],i[c*3+2]=s[M+7]}r.set([S*4,S*4+1,S*4+2,S*4,S*4+2,S*4+3],S*6),l=Math.min(l,s[M]),u=Math.min(u,s[M+1]),h=Math.min(h,s[M+2]),d=Math.max(d,s[M]),p=Math.max(p,s[M+1]),g=Math.max(g,s[M+2])}let b=new mt;return b.setAttribute("position",new _t(t,3)),b.setAttribute("aB",new _t(n,4)),b.setAttribute("aC",new _t(i,3)),b.setIndex(new _t(r,1)),b.boundingBox=new ui(new H(l-6,u-1,h-6),new H(d+6,p+6,g+6)),b.boundingSphere=b.boundingBox.getBoundingSphere(new hi),b}var Vt=60,Hd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],o1=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],a1=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],bl=32,Vd=[-.2,2.2,5.5,10,17,27,38],Ml=[.025,.026,.032],l1=[.05,.05,.065],c1=new et,vs=(s,e)=>(s%e+e)%e,Ds=(s,e)=>{let t=js(s);return!!t&&Math.abs(s-t.s)<e},uh=s=>vs(s,4)===0,fS=s=>vs(s,2)===0,qd=1.4,u1=s=>uh(s)?4.4:qd+.9,Gd=s=>uh(s)?3.4:qd-.1,Wd=(s,e)=>Math.abs(s-Math.round(s/300)*300)<e,ss=(s,e)=>{let t=Ui(s);return!!t&&Math.abs(s-t.s)<e},ri=(s,e)=>{let t=Ni(s);return!!t&&Math.abs(s-t.s)<e},Xd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let i=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=i+r*t+o,l=a+1,u=a+t,h=u+1;this.I.push(a,l,u,l,h,u)}}gridN(e,t,n,i=0,r=0){let o=t+i+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)a[u*o+h]=n(u,h-i);let l=(u,h)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=i;h<i+t;h++){let d=l(u,h-1),p=l(u,h+1),g=l(u-1,h),b=l(u+1,h),S=a[u*o+h],M=p[0]-d[0],x=p[1]-d[1],c=p[2]-d[2],y=b[0]-g[0],f=b[1]-g[1],m=b[2]-g[2],v=x*m-c*f,E=c*y-M*m,_=M*f-x*y;E<0&&(v=-v,E=-E,_=-_);let T=Math.hypot(v,E,_)||1;S[3]=v/T,S[4]=E/T,S[5]=_/T}this.grid(e,t,(u,h)=>a[u*o+h+i])}build(){let e=new mt;return e.setAttribute("position",new Ze(this.P,3)),e.setAttribute("normal",new Ze(this.N,3)),e.setAttribute("su",new Ze(this.SU,2)),e.setAttribute("zw",new Ze(this.ZW,4)),e.setAttribute("rk",new Ze(this.RK,2)),e.setAttribute("rv",new Ze(this.RV,1)),e.setAttribute("zs",new Ze(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},hh=class{constructor(e,t,n,i){this.path=t,this.M=n,this.riverMat=i,this.heapCache=new Map,this.group=new on,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Vt),i=Math.floor((e+this.ahead)/Vt);for(let[o,a]of this.chunks)(o<n-1||o>i+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>i+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let l=Math.max(0,n);l<=i;l++)if(!this.chunks.has(l)){a=l;break}if(a<0)return 0;a*Vt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,i=1/0){this.chunks.forEach((r,o)=>{let a=o*Vt-e,l=r.group.children;for(let u=0;u<l.length;u++){let h=l[u],d=h.userData.detail;d&&(h.visible=d==="leaf"?a<i:a<t||n&&d==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Vt,i=n+Vt,r=t.at(n),o=r.x,a=r.z,l=Ot(Math.floor(Rn(e,777)*4294967295)),u={atlas:new ln({uv:!0,ao:!0,lit:!0}),color:new ln({ao:!0}),foliage:new ln,leaf:new ln({uv:!0}),lamp:new ln({color:!1}),sig:new ln({color:!1}),sodium:new ln({color:!1}),decal:new ln({uv:!0}),pool:new ln({uv:!0,color:!1}),gleaf:new ln({uv:!0,off:!0}),gblossom:new ln({uv:!0,off:!0})},h=new Xd,d={rows:[],puffs:[]},p=[];u.lamps=[];let g={},b={},S=(R,w)=>{t.at(R,b);let P=Bn(R,"rw");return b.y+Qs(R,w,b.y,P)},M=R=>{let w=Lt(R);return[w.city,w.sakura,w.coast,w.country,w.snow]},x=(R,w,P)=>(t.at(R,g),[g.x+g.rx*w-o,P,g.z+g.rz*w-a]),c=(R,w,P,C=0,A=!0)=>{t.at(R,g);let L=g.h-Math.PI/2+(A&&w<0?Math.PI:0)+C,D=new et().makeRotationY(L);return D.setPosition(g.x+g.rx*w-o,P,g.z+g.rz*w-a),D.groundY=P,D},y=(R,w,P=0,C=0,A=!0)=>{let L=S(R,w),D=c(R,w,L+P,C,A);return D.groundY=L,D},f=R=>t.at(R,b).y,m=R=>Bn(R,"rw"),v=R=>{let w=Lt(R);return w.city+w.sakura>.5?w.city>=w.sakura?3:2.6:0};{let R=Ni(n+Vt/2),w=!!R&&R.s>n-40&&R.s<i+40,P=w?61:21,C=m(n+Vt/2),A=(()=>{let K=[0,...o1].map(le=>le);return a1.forEach(le=>K.push(le-C)),K})(),L=[...A.slice().reverse().map(z=>-z),...A],D=L.length,U=Array.from({length:P},(z,K)=>n+K/(P-1)*Vt);{let z=Ui(n+Vt/2);if(z)for(let K of[z.s-xn,z.s+xn])K>n+.1&&K<i-.1&&U.push(K-.03,K+.03)}U.sort((z,K)=>z-K);let V=D/2,O=U.map(z=>(t.at(z,g),{s:z,f:{...g},rw:m(z),w:M(z),rb:w?mm(z):0})),k=Math.round(V/2);for(let[z,K,le,Me]of[[0,k,0,1],[k-1,V,1,0],[V,V+k+1,0,1],[V+k,D,1,0]])h.gridN(O.length,K-z,(Fe,Ne)=>{let J=O[Fe],$=J.f,ve=z+Ne,Ae=L[ve],pe=Ae===0&&J.w[2]>0?.15:0,Oe=Ae<0||Ae===0&&ve<V?Ae-J.rw+pe:Ae+J.rw-pe,Je=$.y+Qs(J.s,Oe,$.y,J.rw),je=Math.abs(Oe)>J.rw+.98?Math.min(1,Yu/.5):0;return[$.x+$.rx*Oe-o,Je,$.z+$.rz*Oe-a,0,1,0,vs(J.s,Ti),Oe,J.w[0],J.w[1],J.w[2],J.w[3],J.rw,0,J.rb>0?J.rb:-je,J.w[4]]},le,Me),yield}yield,h.grid(31,2,(w,P)=>{let C=n+w/30*Vt,A=m(C),L=P?A:-A;t.at(C,g);let D=g.y,U=(f(C+1)-f(C-1))/2,V=-U*g.fx,O=1,k=-U*g.fz,z=Math.hypot(V,O,k),K=M(C);return[g.x+g.rx*L-o,D,g.z+g.rz*L-a,V/z,O/z,k/z,vs(C,Ti),L,K[0],K[1],K[2],K[3],A,1,0,K[4]]});{let R=[];for(let C=0;C<=30;C++){let A=n+C/30*Vt;R.push({s:A,sw:v(A)})}let w=[],P=null;for(let C of R)C.sw>0?(P||(P=[],w.push(P)),P.push(C)):P=null;for(let C of w)if(!(C.length<2))for(let A of[-1,1])h.grid(C.length,2,(L,D)=>{let{s:U,sw:V}=C[L],O=m(U),k=A*(D===(A>0?0:1)?O:O+V);t.at(U,g);let z=M(U);return[g.x+g.rx*k-o,g.y+.15,g.z+g.rz*k-a,0,1,0,vs(U,Ti),k,z[0],z[1],z[2],z[3],O,2,0,z[4]]}),h.grid(C.length,2,(L,D)=>{let{s:U}=C[L],V=m(U),O=A*V,k=A>0?D:1-D;t.at(U,g);let z=M(U);return[g.x+g.rx*O-o,g.y+(k?.15:0),g.z+g.rz*O-a,-A*g.rx,0,-A*g.rz,vs(U,Ti),O,z[0],z[1],z[2],z[3],V,3,0,z[4]]})}yield,yield*this.placePoles(e,n,i,l,u,c,S,x,f,m);{let R=Math.ceil((n-Pr)/Cr),w=No(R);w<i&&al(w)&&(yield*this.placeCrossing(u,h,w,c,f,m,S,v,o,a));let P=Math.ceil((n-Uo)/Ir),C=od(P);C<i&&ad(C)&&(yield*this.placeRiver(u,h,C,c,f,m,S,v,o,a,l,p));let A=Ui(n+Vt/2);A&&A.s+dn>n&&A.s-dn<i&&(yield*this.placeTunnel(u,h,A,n,i,c,y,S,m,o,a,l))}yield;for(let R=n;R<i;R+=4){let w=an(R);(w==="coast"&&Lt(R).coast>.45||w==="mountain"&&Lt(R).mountain>.45)&&!ss(R+2,dn+4)&&this.guardrail(u,R,Math.min(R+4,i),x,f,m)}yield*this.placeCity(u,l,n,i,c,y,f,m,v,S,h,o,a),yield*this.placeSakura(u,l,n,i,c,y,f,m,S),yield*this.placeCoast(u,l,e,n,i,c,y,m,d,x),yield,yield*this.placeCountry(u,l,n,i,c,y,f,m,S),yield*this.placeMountain(u,l,n,i,c,y,f,m,S),yield*this.placeSnow(u,l,n,i,c,y,f,m,S),yield*this.placeVerge(u,l,n,i,c,S,m,e,o,a),yield;let E=new on,_=(R,w,P,C,A=0,L)=>{if(!R)return null;let D=new ct(R,w);return D.castShadow=P,D.receiveShadow=C,D.renderOrder=A,L&&(D.userData.detail=L),E.add(D),D},T=new Set;for(let R of[n,n+20,n+40,i]){let w=Js(R);T.add(w.a),w.t>0&&T.add(w.b)}_(h.build(),hl([...T]),!1,!0),yield,_(u.atlas.build(),this.M.atlas,!0,!0),yield;{let R=_(u.color.build(),this.M.color,!0,!0);R&&(R.customDepthMaterial=ju)}if(yield,_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let R=_(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");R&&(R.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let R=_(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");R&&(R.customDepthMaterial=this.M.gleafDepth)}if(yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),d.rows.length>1){let R=d.rows,w=Vd.length,P=R.length*w,C=new Float32Array(P*3),A=new Float32Array(P*2),L=new Float32Array(P*2),D=[];R.forEach((V,O)=>{for(let k=0;k<w;k++){let z=O*w+k,K=k*7;C.set(V.subarray(K,K+3),z*3),A[z*2]=V[K+3],A[z*2+1]=V[K+4],L[z*2]=V[K+5],L[z*2+1]=V[K+6]}if(O>0)for(let k=0;k<w-1;k++){let z=(O-1)*w+k,K=z+w;D.push(z,K,z+1,z+1,K,K+1)}});let U=new mt;U.setAttribute("position",new _t(C,3)),U.setAttribute("su",new _t(A,2)),U.setAttribute("hf",new _t(L,2)),U.setIndex(D),U.computeBoundingSphere(),_(U,this.M.shore,!1,!1,997)}d.puffs.length&&_(r1(d.puffs),this.M.surf,!1,!1,2,"small");for(let R of p)_(R,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*bl+6,n=an(t);if(n==="sakura"||Ds(t,6)||ri(t,34)||ss(t,dn+12))return null;let i=Bn(t,"rw"),r=n==="city"?i+.45:n==="coast"?i+1.35:n==="mountain"?-(i+1.45):n==="snow"?i+2.9:i+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,i,r,o,a,l,u,h){let d=Math.ceil((t-6)/bl),p=Math.floor((n-6-.001)/bl);for(let g=d;g<=p;g++){let b=this.poleSpec(g);if(!b)continue;let S=b.z==="city"?u(b.s)+.15:a(b.s,b.u),M=o(b.s,b.u,S),x=Ot(Math.floor(Rn(g,31)*4294967295)),c=Md(r,M,x,{trans:x()<.45});b.z==="city"&&g%2===0&&sg(r,M,-.11),g%2&&(yield);let y=this.poleSpec(g+1);if(y){let f=y.z==="city"?u(y.s)+.15:a(y.s,y.u),m=ig(o(y.s,y.u,f));r.color.setM(new et);let v=[];for(let E=0;E<c.length;E++){let _=c[E],T=m[E],R=.35+x()*.4+(E>=7?.3:0);v.push(R),r.color.wire([_.x,_.y,_.z],[T.x,T.y,T.z],R,E>=7?.022:.015,Ml,10)}if(b.z!=="coast"&&x()<.38){let E=Math.floor(x()*4),_=c[E],T=m[E],R=1+Math.floor(x()*4),w=.18+x()*.5;for(let P=0;P<R;P++){let C=Math.min(.92,w+P*(.018+x()*.025)),A=_.x+(T.x-_.x)*C,L=_.z+(T.z-_.z)*C,D=_.y+(T.y-_.y)*C-v[E]*4*C*(1-C);r.color.box(A-.07,D+.015,L-.07,A+.07,D+.19,L+.07,l1),r.color.box(A-.045,D+.19,L-.045,A+.045,D+.27,L+.045,l1)}}}if(b.z==="city"){r.color.setM(new et);let f=1+Math.floor(x()*3);for(let m=0;m<f;m++){let v=c[7+m%2],E=(x()-.5)*14,_=h(b.s+E),T=x()<.55,R=T?-(_+3.15):_+3.15,w=l(b.s+E,R,u(b.s+E)+5.2+x()*2.5);r.color.wire([v.x,v.y,v.z],w,.25+x()*.4,.012,Ml,8)}}}}*intersection(e,t,n,i,r,o,a,l,u,h,d){let p=this.path.at(n,{}),g=o(n),b=a(n),S=l(n)||3,M=n-.5,x=Lt(n),c=[x.city,x.sakura,x.coast,x.country],y=(E,_,T)=>[p.x+p.fx*(E-.5)+p.rx*_-h,T,p.z+p.fz*(E-.5)+p.rz*_-d],f=b+S+.15,m=uh(i),v=m?3:qd;for(let E of[-1,1]){let _=E*(b+S),T=E*80;if(u.grid(21,2,(C,A)=>{let L=_+(T-_)*C/20,D=(A?-v:v)*E,U=y(D,L,g+.165);return[U[0],U[1],U[2],0,1,0,D*E,L,c[0],c[1],c[2],c[3],b,10]}),m){let C=E*(b+S+3.2),A=-E*1.35,L=1.15,D=.42,U=(V,O)=>y(A+E*V,C-E*O,g+.18);e.decal.setM(new et),e.decal.quad(U(-L,-D),U(L,-D),U(L,D),U(-L,D),[1,1,1],ko("tomare"))}for(let C of[-1,1]){let A=f+15+t()*3;for(;A<52;){let L=t.range(5.5,8.5),D=E*(A+L/2),U=t(),V=r(M+C*(v+.3),D,g+.14,C>0?Math.PI/2:-Math.PI/2,!1);Oi(e,V,t,{type:U<.5?"house":"shop",w:L,d:t.range(7,10),floors:U<.5?2:t.int(2,3),tint:t.pick(Is),litP:.45,fence:0}),A+=L+t.range(.2,1.2),yield}yield}let R=[30,54].map(C=>r(M+v-.2,E*C,g+.15,-Math.PI/2,!1)),w=Ot(Math.floor(Rn(i,E>0?71:73)*4294967295)),P=R.map(C=>Md(e,C,w,{trans:w()<.4}));e.color.setM(new et);for(let C=0;C<7;C++){let A=P[0][C],L=P[1][C];e.color.wire([A.x,A.y,A.z],[L.x,L.y,L.z],.3+w()*.4,.014,Ml,10)}}m&&(Id(e,r(n-9,-(b+.55),g+.15,0,!0),1,b+.55-1.6),Id(e,r(n+8,b+.55,g+.15,0,!0),1,b+.55-1.6),i%8===0&&_g(e,r(n+15,0,g,0,!1),b+S+.1,"hodokyo"+Math.abs(i/8)%3))}*placeCrossing(e,t,n,i,r,o,a,l,u,h){let d=this.path.at(n,{}),p=d.y,g=o(n),b=l(n),S=g+b+.2,M=150,x=p+.18,c=Lt(n),y=[c.city,c.sakura,c.coast,c.country],f=(L,D,U)=>[d.x+d.fx*L+d.rx*D-u,U,d.z+d.fz*L+d.rz*D-h],m=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-M,-S],[S,M]])t.grid(25,m.length,(V,O)=>{let k=L+(D-L)*V/24,z=m[O],le=Math.abs(z)<5?x:Math.min(x-.05,a(n+z,k)-.03),Me=f(z,k,le);return[Me[0],Me[1],Me[2],0,1,0,z,k,y[0],y[1],y[2],y[3],g,5]});let v=(L,D,U)=>t.grid(2,2,(V,O)=>{let k=V?D:L,z=O?-3.3:3.3,K=f(z,k,U);return[K[0],K[1],K[2],0,1,0,z,k,y[0],y[1],y[2],y[3],g,6]});v(-g,g,p+.03),b>0&&(v(-S,-g,p+.165),v(g,S,p+.165));let E=(L,D,U,V)=>t.grid(2,2,(O,k)=>{let z=O?V:U,K=k?D:L,le=f(K,z,p+.025);return[le[0],le[1],le[2],0,1,0,K,z,y[0],y[1],y[2],y[3],g,7]});E(-7.15,-7.6,-g+.3,-.12),E(7.6,7.15,.12,g-.3),yield;let _=i(n,0,p,-Math.PI/2,!1),T=e.color;T.setM(_);let R=[.42,.4,.38],w=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let U=-(L+D);for(let[V,O]of[[-M,-S],[S,M]])T.box(V,.26,U-.035,O,.34,U+.035,R);T.box(-S,0,U-.035,S,.04,U+.035,w)}let C=[-146,-104,-64,-26,26,64,104,146];for(let L of C){for(let D of[-4.95,4.95])T.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,P);T.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let D of[-2,2])T.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,P)}for(let L of[-2,2])for(let D=0;D<C.length-1;D++)T.wire([C[D],5.35,-L],[C[D+1],5.35,-L],.05,.011,Ml,6),T.wire([C[D],6.4,-L],[C[D+1],6.4,-L],.45,.011,Ml,8);yield;let A=Math.round((n-Pr)/Cr);if(c.country>.9&&Rn(A,17)<.7){let L=Rn(A,19)<.5?-1:1,D=L>0?g+9:-(g+9+46),U=L>0?g+9+46:-(g+9);bg(e,_,D,U,L*(g+9),Math.abs(A)%4,Ot(Math.floor(Rn(A,23)*4294967295))),T.setM(_)}yield;for(let L of Qu(this.path,n)){let D=new et().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),Eg(e,D)}sr(e,i(n-70,-(o(n-70)+.6),r(n-70)+.15*(b>0?1:0)),"sign_xing",1,2.2,.85),sr(e,i(n+70,o(n+70)+.6,r(n+70)+.15*(b>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,i,r,o,a,l,u,h,d,p){let g=this.path.at(n,{}),b=g.y,S=o(n),M=l(n),x=Lt(n),c=[x.city,x.sakura,x.coast,x.country],y=x.sakura>.5,f=222,m=S+M+.5,v=b-ll,E=(A,L,D)=>[g.x+g.fx*A+g.rx*L-u,D,g.z+g.fz*A+g.rz*L-h];{let A=[],L=[],D=[];for(let O=0;O<=74;O++){let k=-f+2*f*O/74;for(let z of[14.3,-14.3]){let K=E(z,k,v);A.push(K[0],K[1],K[2]),L.push(z,k)}if(O>0){let z=(O-1)*2;D.push(z,z+1,z+2,z+1,z+3,z+2)}}let V=new mt;V.setAttribute("position",new Ze(A,3)),V.setAttribute("su",new Ze(L,2)),V.setIndex(D),V.computeBoundingSphere(),p.push(V)}for(let[A,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,U]of[[-f,-(S+3.4)],[S+3.4,f]])t.grid(41,2,(V,O)=>{let k=D+(U-D)*V/40,z=O?L:A,K=E(z,k,b+.38);return[K[0],K[1],K[2],0,1,0,z,k,c[0],c[1],c[2],c[3],S,9,1]});yield;let _=i(n,0,b,0,!1),T=e.color,R=[.74,.73,.7],w=y?[.78,.2,.15]:[.55,.72,.64];T.setM(_),T.box(-24.5,-1,-m,24.5,-.03,m,R,null,{noBottom:!1});for(let A of[-1,1])T.box(-24.5,-1.3,A>0?m-.35:-m,24.5,-.95,A>0?m:-m+.35,[.62,.61,.58]);for(let A of[-8,8])T.box(A-.7,-ll-1.4,-m+.6,A+.7,-1,m-.6,R);for(let A of[-25.7,25.7])T.box(A-1.2,-ll+.4,-m-.4,A+1.2,-.05,m+.4,R);for(let A of[-24.5,24.5])T.box(A-.16,.004,-S,A+.16,.016,S,[.33,.32,.31]),T.box(A-.02,.016,-S,A+.02,.02,S,[.2,.19,.19]);let P=M>0?.15:0;for(let A of[-1,1]){let L=A*(m-.14);for(let D=-24;D<=24.01;D+=2)T.box(D-.06,P,L-.06,D+.06,P+1,L+.06,w);T.box(-24,P+.95,L-.08,24,P+1.08,L+.08,w),T.box(-24,P+.48,L-.03,24,P+.54,L+.03,w),T.box(-24,P+.06,L-.03,24,P+.12,L+.03,w)}let C="bridge"+Math.abs(Math.round(n/Ir))%4;for(let A of[-25,25])for(let L of[-1,1]){let D=L*(m-.1),U=[.7,.69,.65];T.box(A-.32,P,D-.32,A+.32,P+1.45,D+.32,U),T.box(A-.38,P+1.45,D-.38,A+.38,P+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(_);let V=(A<0?-1:1)*.325,O=C;A<0?e.atlas.quad([A-.325,P+.3,D-.22],[A-.325,P+.3,D+.22],[A-.325,P+1.3,D+.22],[A-.325,P+1.3,D-.22],[1,1,1],ko(O)):e.atlas.quad([A+.325,P+.3,D+.22],[A+.325,P+.3,D-.22],[A+.325,P+1.3,D-.22],[A+.325,P+1.3,D+.22],[1,1,1],ko(O)),T.setM(_)}pl(e,i(n-14,-(m-.45),b+P,0,!0)),pl(e,i(n+14,m-.45,b+P,0,!0)),yield;{e.atlas.setM(new et);let A=ko("gogan"),L=2.4,D=150;for(let U of[-1,1])for(let V=-D;V<D-.01;V+=L){let O=V+L,k=E(U*13.9,V,v-.12),z=E(U*13.9,O,v-.12),K=E(U*16.05,O,v+.72),le=E(U*16.05,V,v+.72),Me=(z[1]-k[1])*(le[2]-k[2])-(z[2]-k[2])*(le[1]-k[1]),Fe=(z[0]-k[0])*(le[1]-k[1])-(z[1]-k[1])*(le[0]-k[0]),Ne=E(0,(V+O)/2,v),J=Me*(Ne[0]-k[0])+Fe*(Ne[2]-k[2])>0,$={u0:A.u0,u1:A.u1,v0:A.v0,v1:A.v1};J?e.atlas.quad(k,z,K,le,[1,1,1],$):e.atlas.quad(z,k,le,K,[1,1,1],{u0:A.u1,u1:A.u0,v0:A.v0,v1:A.v1})}for(let U of[-1,1])for(let V of[-1,1])for(let O=14+d()*3;O<125;O+=d.range(2.4,5)){if(d()<.35)continue;let k=U*(16.2+d()*1.1),z=V*O,K=1+(d()<.4?1:0);for(let le=0;le<K;le++){let Me=E(k+U*d()*.6,z+(d()-.5)*.9,v+.7),Fe=new et().makeRotationY(d()*6.28);Fe.setPosition(Me[0],Me[1],Me[2]),Rd(e,Fe,d,"grass",d.range(1.9,2.8))}}}yield;for(let A of[-18,18])for(let L of[-1,1]){yield;for(let D=11+d()*4;D<(y?125:170);D+=y?d.range(8.5,11):d.range(18,34)){let U=n+A+(d()-.5)*1.5,V=L*D;Vn(e,i(U,V,a(U,V),d()*6,!1),y?"sakura":"broad",d,y?d.range(1,1.25):d.range(.9,1.25))}}}*placeTunnel(e,t,n,i,r,o,a,l,u,h,d,p){let g=this.path.at(n.s,{}),b=g.y,S=u(n.s),M=S+1.4,x=Lt(n.s),c=[x.city,x.sakura,x.coast,x.country],y=o(n.s,0,b,0,!1),f=e.color,m=Math.max(i,n.s-xn)-n.s,v=Math.min(r,n.s+xn)-n.s;if(v>m+.01){let O=Math.max(2,Math.ceil((v-m)/3)+1),k=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(O,k.length,($,ve)=>{let Ae=m+(v-m)*$/(O-1),pe=n.s+Ae,Oe=k[ve],Je=b+$u(Ae,Oe);return[g.x+g.fx*Ae+g.rx*Oe-h,Je,g.z+g.fz*Ae+g.rz*Oe-d,0,1,0,vs(pe,Ti),Oe,c[0],c[1],c[2],c[3],S,0,-1]});let z=[[-S,0],[-S,.2],[-M,.2],[-M,3.2]];for(let $=1;$<12;$++){let ve=Math.PI*(1-$/12);z.push([M*Math.cos(ve),3.2+3*Math.sin(ve)])}z.push([M,3.2],[M,.2],[S,.2],[S,0]);let K=[.86,.82,.72],le=[.44,.45,.47],Me=[.62,.61,.58],Fe=[];for(let $=m;$<v-.01;$+=6)Fe.push($);Fe.push(v),f.setM(y);for(let $=0;$<Fe.length-1;$++)for(let ve=0;ve<z.length-1;ve++){let[Ae,pe]=z[ve],[Oe,Je]=z[ve+1],je=Math.max(pe,Je)<=.21?Me:Math.abs(Ae)>M-.01&&Math.abs(Oe)>M-.01?K:le;f.quad([Fe[$],pe,Ae],[Fe[$+1],pe,Ae],[Fe[$+1],Je,Oe],[Fe[$],Je,Oe],je)}e.sodium.setM(y),e.sig.setM(y);let Ne=M*Math.cos(Math.PI/6)-.12,J=3.2+3*Math.sin(Math.PI/6)-.08;for(let $=Math.ceil((m+xn-3)/6)*6+3-xn;$<v;$+=6)for(let ve of[-1,1])e.sodium.box($-.45,J-.07,ve*Ne-.13,$+.45,J+.07,ve*Ne+.13,null),ir(e,y,$,J-.1,ve*Ne,1);for(let $=Math.ceil((m+xn)/24)*24-xn;$<v;$+=24)e.sig.box($-.3,.95,-M+.01,$+.3,1.2,-M+.06,null);for(let $=Math.ceil((m+xn-30)/60)*60+30-xn;$<v;$+=60)for(let ve of[-1.15,1.15])f.box($-1.1,5.2,ve-.36,$+1.1,5.78,ve+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),f.box($-.08,5.78,ve-.05,$+.08,6.15,ve+.05,[.4,.4,.42]);yield}let E=(O,k)=>{let z=Math.sin(O*12.9898+k*78.233+n.k*37.719)*43758.5453;return z-Math.floor(z)},_=(O,k,z)=>[O[0]+(k[0]-O[0])*z,O[1]+(k[1]-O[1])*z,O[2]+(k[2]-O[2])*z],T=[.5,.5,.47],R=[.55,.53,.47],w=[.6,.6,.57],P=[.58,.58,.55],C=[.42,.42,.4],A=(O,k)=>{let z=E(O,k);return L?_([.26,.29,.08],[.42,.3,.09],z):_([.22,.29,.08],[.36,.36,.12],z)},L=x.mountain>.5,D=M+2.6,U=2.6;for(let O of[-1,1]){let k=n.s+O*xn,z=O*(xn+.08);if(k<i||k>=r)continue;let K=[];for(let te of o1)te>=1.44&&K.push(S+te,-(S+te));for(let te of a1)te>S+3.5&&te<S+21&&K.push(te,-te);for(let te=0;te<=24;te++)K.push(-M+2*M*te/24);K.push(-M-.01,M+.01,-D,D),K.sort((te,N)=>te-N);let le=te=>3.2+3*Math.sqrt(Math.max(0,1-(te/M)**2)),Me=te=>Math.max(l(k-O*.03,te)-b,$u(O*(xn-.03),te)),Fe=te=>Math.abs(te)<=M+1e-6?le(te):l(k+O*.03,te)-b,Ne=8.4;for(let te of K)Math.abs(te)<=D&&(Ne=Math.min(Ne,Me(te)-.4));let J=Ne>6.6;f.setM(y);let $=O,ve=(te,N,I,G,W,Q,ce,ge)=>{let he=[z,I,te],fe=[z,G,N],we=[z,Q,N],We=[z,W,te],Ce=O<0?[he,fe,we,We]:[fe,he,We,we],Ie=O<0?[ce,ce,ge,ge]:[ce,ce,ge,ge];for(let Ue of[0,1,2,0,2,3])f.vtx(Ce[Ue][0],Ce[Ue][1],Ce[Ue][2],$,0,0,0,0,Ie[Ue])},Ae=(te,N,I)=>te+(N-te)*I;for(let te=0;te<K.length-1;te++){let N=K[te],I=K[te+1];if(I-N<1e-4)continue;let G=Me(N),W=Me(I),Q=Fe(N),ce=Fe(I);if(G-Q<.01&&W-ce<.01)continue;let ge=(N+I)/2,he=J&&Math.abs(ge)<D,fe=Q,we=ce;if(he){let Ue=_(T,[.46,.46,.44],E(Math.floor(ge/2.4),3.1)),Qe=.8+2.6*E(Math.floor(ge/.8),7.7),at=_(Ue,[.27,.27,.26],.35+.3*E(Math.floor(ge/.8),9.9)),Y=Math.min(Ne,G),Le=Math.min(Ne,W),me=Math.max(Q,Y-Qe),De=Math.max(ce,Le-Qe);if(Math.abs(ge)>M){let ze=Math.min(me,Q+.9),Ee=Math.min(De,ce+.9);ve(N,I,Q,ce,ze,Ee,_(Ue,[.25,.29,.18],.45),Ue),ve(N,I,ze,Ee,me,De,Ue,Ue)}else ve(N,I,Q,ce,me,De,Ue,Ue);if(ve(N,I,me,De,Y,Le,Ue,at),fe=Y,we=Le,G-Y<.01&&W-Le<.01)continue}let We=Math.floor(ge/U),Ce=fe,Ie=we;for(let Ue=Math.floor(Math.min(Ce,Ie)/U)+1;Ce<G-.01||Ie<W-.01;Ue++){let Qe=Ue*U,at=Math.min(G,Math.max(Ce,Qe)),Y=Math.min(W,Math.max(Ie,Qe)),Le=A(We,Ue);if(ve(N,I,Ce,Ie,at,Y,_(Le,[.2,.22,.1],.25),Le),Ce=at,Ie=Y,Ue>60)break}}let pe=Math.min(z,z+O*.12),Oe=Math.max(z,z+O*.12),Je=te=>{for(let N=0;N<K.length-1;N++)if(te>=K[N]&&te<=K[N+1]&&K[N+1]>K[N]){let I=(te-K[N])/(K[N+1]-K[N]);return[Ae(Fe(K[N]),Fe(K[N+1]),I),Ae(Me(K[N]),Me(K[N+1]),I)]}return null},je=K[0],Te=K[K.length-1];for(let te=Math.ceil(je/U)*U;te<Te;te+=U){let N=Je(te);if(!N)continue;let I=(J&&Math.abs(te)<D?Math.max(Ne+.3,N[0]):N[0])+.05,G=N[1]-.05;G-I>.4&&!(Math.abs(te)<=M+.3&&!J)&&f.box(pe,I,te-.14,Oe,G,te+.14,R)}for(let te=1;te<60;te++){let N=te*U,I=null,G=()=>{I&&I[1]-I[0]>.3&&f.box(pe,N-.14,I[0],Oe,N+.14,I[1],R),I=null},W=!1;for(let Q=0;Q<K.length-1;Q++){let ce=K[Q],ge=K[Q+1];if(ge-ce<1e-4)continue;let he=(ce+ge)/2,fe=Math.max(Fe(ce),Fe(ge),J&&Math.abs(he)<D?Ne+.3:-1e9),we=Math.min(Me(ce),Me(ge));N>fe+.2&&N<we-.2?(W=!0,I?I[1]=ge:I=[ce,ge]):G()}if(G(),!W&&N>30)break}J&&f.box(Math.min(z,z+O*.32),Ne-.05,-D,Math.max(z,z+O*.32),Ne+.3,D,w);let nt=z+O*.32,ne=te=>-M+2*M*te/24,de=te=>[ne(te),le(ne(te))],j=te=>[ne(te)*1.12,le(ne(te))+.6];for(let te=0;te<24;te++){let[N,I]=de(te),[G,W]=de(te+1),[Q,ce]=j(te),[ge,he]=j(te+1);O<0?f.quad([nt,I,N],[nt,W,G],[nt,he,ge],[nt,ce,Q],P):f.quad([nt,W,G],[nt,I,N],[nt,ce,Q],[nt,he,ge],P),O<0?f.quad([z,I,N],[z,W,G],[nt,W,G],[nt,I,N],C):f.quad([z,W,G],[z,I,N],[nt,I,N],[nt,W,G],C),O<0?f.quad([z,he,ge],[z,ce,Q],[nt,ce,Q],[nt,he,ge],P):f.quad([z,ce,Q],[z,he,ge],[nt,he,ge],[nt,ce,Q],P)}for(let te of[-1,1])f.box(Math.min(z,nt),.2,te>0?M:-M*1.12,Math.max(z,nt),3.2,te>0?M*1.12:-M,P);e.atlas.setM(y);let ie=1.9,ee=7.05,ue=7.85,F=z+O*.03,be=ko("tunnel"+(x.coast>.5?1:Math.abs(n.k)%2?2:0));O<0?e.atlas.quad([F,ee,-ie],[F,ee,ie],[F,ue,ie],[F,ue,-ie],[1,1,1],be):e.atlas.quad([F,ee,ie],[F,ee,-ie],[F,ue,-ie],[F,ue,ie],[1,1,1],be)}yield;let V=x.mountain>.5;for(let O=Math.max(i,n.s-dn*.95)+p()*3;O<Math.min(r,n.s+dn*.95);O+=p.range(4,8)){let k=Math.abs(O-n.s)>xn-4?17:4;for(let z of[-1,1]){let K=z*(S+p.range(k,50)),le=p();Vn(e,a(O,K,-.3,p()*6,!1),V?le<.5?"maple":le<.8?"cedar":"ginkgo":le<.65?"pine":"broad",p,p.range(.9,1.3))}}}*placeSnow(e,t,n,i,r,o,a,l,u){let h=d=>Lt(d).snow;if(!(h(n)<.3&&h(i)<.3)){for(let d of[-1,1]){for(let p=n+t()*20;p<i;p+=t.range(22,40)){if(h(p)<.6||t()<.5)continue;let g=d*t.range(18,90);Oi(e,o(p,g,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Is),litP:.62,fence:0,snow:!0});for(let b=0;b<2+t()*3;b++)Vn(e,o(p+t.range(-9,9),g+d*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let p=n+t()*5;p<i;p+=t.range(3,7))h(p)<.5||(t()<.32&&Vn(e,o(p,d*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Vn(e,o(p,d*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let d=Math.ceil(n/36)*36;d<i;d+=36){if(h(d)<.55)continue;let p=l(d);{let g=r(d,-(p+.95),a(d)+1.3),b=r(d+18,p+.95,a(d+18)+1.3);g.groundY=a(d),b.groundY=a(d+18),wd(e,g,1),wd(e,b,-1)}}}}*placeMountain(e,t,n,i,r,o,a,l,u){let h=d=>Lt(d).mountain;if(!(h(n)<.3&&h(i)<.3)){for(let d of[-1,1]){for(let p=n+t()*4;p<i;p+=t.range(4.5,8.5)){if(h(p)<.45||ss(p,dn+6))continue;let g=l(p),b=t();if(d>0){let S=b<.5?"maple":b<.72?"ginkgo":"cedar";Vn(e,o(p,g+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=b<.55?"maple":b<.8?"cedar":"ginkgo";Vn(e,o(p,-(g+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let d=n+t()*4;d<i;d+=t.range(3,6)){if(h(d)<.5)continue;let p=t()<.7,g=-(l(d)+(p?t.range(108,205):t.range(36,100)));Vn(e,o(d,g,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new et);for(let d=Math.ceil(n/10)*10;d<i;d+=10){if(h(d)<.5||ss(d,dn+4))continue;let p=l(d),g=r(d,-(p+.95),a(d));lg(e,g)}for(let d=Math.ceil(n/14)*14;d<i;d+=14){if(h(d)<.6)continue;let p=this.path.curv(d);if(Math.abs(p)<1/230)continue;let g=l(d);p>0?sr(e,r(d,g+.42,a(d)),"chev_l",-1,1.25,.58):sr(e,r(d,-(g+1.15),a(d)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,i,r,o,a){let l=this.path,u={},h=Ot(Math.floor(Rn(t,1789)*4294967295)),d=fg(),p=Math.floor((n+Vt/2)/600)*600+300,g=Math.floor((n+Vt/2)/700)*700+120,b=Math.floor((n+Vt/2)/380)*380+190,S=Rn(Math.round(b),5)<.5?-1:1;for(let x of[-1,1]){e.leaf.setM(c1);for(let c=n+h()*d;c<i;c+=d*h.range(.75,1.25)){if(an(c)!=="country"||Ds(c,10)||ri(c,31)||x<0&&(Math.abs(c-p)<2.9||c>g-1.3&&c<g+2.7)||x===S&&Math.abs(c-b)<1.6)continue;l.at(c,u);let y=a(c),f=x*(y+.95+(h()-.5)*.36),m=u.y+Qs(c,f,u.y,y),v=(h()-.5)*.8,E=Math.cos(v)*x,_=Math.sin(v)*x;Pd(e,u.x+u.rx*f-r,m,u.z+u.rz*f-o,u.rx*E+u.fx*_,u.rz*E+u.fz*_,h,h.range(.85,1.15))}yield}let M=Ot(Math.floor(Rn(t,2417)*4294967295));for(let x of[-1,1]){e.leaf.setM(c1);for(let c=n+M()*8;c<i;c+=M.range(8,14)){if(Lt(c).sakura<.6||ri(c,31))continue;let y=2+Math.floor(M()*4),f=x*(a(c)+2.85+M()*.5);l.at(c,u);let m=u.y+Qs(c,f,u.y,a(c));for(let v=0;v<y;v++){let E=v*.5+M()*.2,_=f+x*(M()-.5)*.35,T=(M()-.5)*1.2,R=Math.cos(T)*x,w=Math.sin(T)*x;Pd(e,u.x+u.fx*E+u.rx*_-r,m,u.z+u.fz*E+u.rz*_-o,u.rx*R+u.fx*w,u.rz*R+u.fz*w,M,M.range(.42,.58))}}}}*placeVerge(e,t,n,i,r,o,a,l,u,h){yield*this.placeBanks(e,l,n,i,u,h,a);for(let d of[-1,1]){for(let p=n+t()*1.2;p<i;p+=t.range(.55,1.5)){if(Ds(p,10)||ri(p,31)||ss(p,dn+4))continue;let g=an(p),b=a(p),S,M,x=.22,c=1;if(g==="country")S=b+t.range(2.05,2.8),M=.25,x=.35;else if(g==="sakura")S=b+2.68+t()*1.3,M=.55,x=.3;else if(g==="coast"){if(d<0)continue;S=b+.95+t()*1.7,M=.75,x=.18}else{if(g==="snow")continue;if(g==="mountain")S=d<0?b+1+t()*.35:b+.25+t()*.2,M=d<0?.55:.18,x=.12,c=.85;else{if(Wd(p,5))continue;S=b+3.02+t()*.1,M=.1,x=.08,c=.65}}if(t()>M)continue;let y=d*S;Rd(e,r(p,y,o(p,y),t()*6.28,!1),t,t()<x?"flowers":"grass",c*t.range(.8,1.2))}yield}}guardrail(e,t,n,i,r,o){e.color.setM(new et);let a=Math.max(1,Math.round((n-t)/2)),l=Se.rail,u=[.62,.64,.66],h=[.74,.76,.79],d=[.95,.55,.16];for(let p=0;p<a;p++){let g=t+(n-t)*p/a,b=t+(n-t)*(p+1)/a,S=-(o(g)+.95),M=-(o(b)+.95),x=r(g),c=r(b);for(let f=0;f<Hd.length-1;f++){let[m,v]=Hd[f],[E,_]=Hd[f+1];e.color.quad(i(g,S+v,x+m),i(b,M+v,c+m),i(b,M+_,c+E),i(g,S+_,x+E),l)}e.color.quad(i(b,M+.05,c+.5),i(g,S+.05,x+.5),i(g,S+.05,x+.84),i(b,M+.05,c+.84),u),e.color.noShadow=!0;let y=i(g,S-.04,x);if(e.color.cyl(y[0],x,y[2],.055,.055,.8,6,h,!1),Math.round(g/2)%2===0){let f=i(g,S+.035,x+.64),m=i(g+.09,S+.035,x+.64);e.color.quad(m,f,[f[0],f[1]+.07,f[2]],[m[0],m[1]+.07,m[2]],d)}e.color.noShadow=!1}}*placeCity(e,t,n,i,r,o,a,l,u,h,d,p,g){for(let M of[-1,1]){let x=n+t()*2;for(;x<i-2;){{let L=Lt(x);if(L.city<.62||L.mountain>.1){x+=4;continue}}{let L=js(x+6);if(L&&x<L.s+8.5&&x+14>L.s-8.5){x=Math.max(x+1,L.s+8.5);continue}}let c=2*Math.round(x/300),y=c*150;if(x>y-u1(c)&&x<y+Gd(c)){x=y+Gd(c)+.05;continue}let f=l(x),m=u(x)||3,v=f+m+.15,E=t(),_=x<420||E<.84?"machiya":E<.89?"shop":E<.93?"apt":E<.96?"konbini":"house",T=_==="shop"?t.range(5,9):_==="machiya"?t.range(6,9.5):_==="apt"?t.range(10,16):_==="house"?t.range(7,9.5):t.range(12,14);if(x+T>i){if(i-x<5||_==="konbini")break;T=i-x-.2}{let L=x<y?c:c+2,D=L*150-u1(L);if(x+T>D-.1){if(D-.1-x<4){x=L*150+Gd(L)+.05;continue}T=D-.1-x}}let R=x+T/2,w=a(R),P=t.pick(Is),C=.42,A=_==="machiya"&&t()<.6;{let L=r(R,M*v,w+.15),D={type:_,w:T,d:_==="apt"?t.range(10,14):t.range(8,12),floors:_==="shop"?t.int(2,4):_==="machiya"?t()<.7?2:3:_==="apt"?t.int(4,9):2,tint:A?yd[Math.floor(t()*yd.length)]:P,litP:C,plaster:A,fence:_==="house"&&t()<.5?1.2:0};if(Oi(e,L,t,D),_!=="house"&&t()<.28&&Ed(e,r(R+(t()-.5)*(T-1.2),M*(v-.42),w+.15),t),(_==="shop"||_==="konbini"||_==="machiya")&&t()<.3)for(let U=0;U<1+t()*3;U++)rg(e,r(R-T/2+.8+U*.55,M*(v-.75),w+.15,Math.PI/2+.1),t);if(_==="house"&&t()<.6)for(let U=0;U<2+t()*3;U++)Td(e,r(R+1+U*.5,M*(v-.3),w+.15),t);if(t()<.03)for(let U=0;U<3;U++)og(e,r(R+U*.9,M*(f+.35),w))}x+=T+t.range(.05,.5),yield}for(let c=n+t()*10;c<i-8;c+=t.range(14,26)){if(Lt(c).city<.7||Lt(c).mountain>.1||t()<.3||Ds(c,18)||Wd(c,15))continue;let y=l(c),f=r(c,M*(y+3.2+t.range(14,20)),a(c)+.1);Oi(e,f,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Is),litP:.4})}if(Lt(n+30).city>.7&&Lt(n+30).mountain<.1&&t()<.65){let c=n+t()*Vt;if(Ds(c,24)||Wd(c,20))continue;let y=r(c,M*t.range(55,150),a(c));Oi(e,y,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Is),litP:.45})}}let b=Math.ceil(n/150),S=Math.floor((i-.01)/150);for(let M=b;M<=S;M++){let x=M*150;if(!fS(M)||an(x)!=="city"||Lt(x).mountain>.1)continue;let c=l(x);yield*this.intersection(e,t,x,M,r,a,l,u,d,p,g),uh(M)&&(sr(e,r(x-1,-(c+.4),a(x)+.15),"sign_blue",1),sr(e,r(x-6,-(c+.4),a(x)+.15),"sign_stop",1,2.1,.75),Ad(e,r(x+7,c+.4,a(x)+.15),-1),M%8===4&&sr(e,r(x+20,-(c+.4),a(x)+.15),"sign_speed",1))}}houseGarden(e,t,n,i,r,o,a,l,u,h){let d=o.ww/2;if(l)for(let p=-d-.6;p<d+.6;p+=t.range(1.2,1.9)){if(Math.abs(p)<.9&&l===1&&t()<.7)continue;let g=a(n+p,i-r*t.range(1.1,1.7),0,t()*6,!1);l===2&&t()<.6?Cd(e,g,t,t.range(.75,1)):ag(e,g,t,t.range(.5,.75))}for(let p=0;p<u;p++){let g=(p%2?-1:1)*(t()<.5?1:-1);Vn(e,a(n+g*(d+t.range(3.2,5.5)),i+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let p=0;p<h;p++)Vn(e,a(n+t.range(-d-2,d+2),i+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,i,r,o,a,l,u){for(let p of[-1,1]){for(let g=n+t()*4;g<i;g+=t.range(7.5,10)){if(Lt(g).sakura<.45||ri(g,30))continue;let b=l(g);Vn(e,o(g,p*(b+3.7),0,Fi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),t()<.45&&Vn(e,o(g+3,p*(b+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let g=n+(p>0?0:12);g<i;g+=24){if(an(g)!=="sakura"||ri(g,30))continue;let b=l(g);pl(e,r(g,p*(b+2.25),a(g)+.15)),vs(g,48)<24&&Tg(e,r(g+6,p*(b+3),u(g+6,p*(b+3))))}for(let g=n+t()*15;g<i;g+=t.range(14,24)){if(an(g)!=="sakura"||t()<.35||ri(g,45))continue;let b=l(g),S=oh("sakura",t);if(!S){Oi(e,o(g,p*(b+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Is),litP:.45,fence:t()<.6?1.4:0});continue}let M=p*(b+t.range(19,26)),x=t()<.45?1.4:0;Oi(e,o(g,M),t,{type:"house",w:S.ww,d:S.wd,ptype:S,fence:x}),this.houseGarden(e,t,g,M,p,S,o,x?0:1,0,0)}}let d=Math.floor((n+Vt/2)/480)*480+240;d>=n&&d<i&&an(d)==="sakura"&&!ri(d,60)&&Ld(e,r(d,0,a(d),0,!1),l(d)+1.6,6.4)}coastWall(e){return Lt(e).coast>=.7&&!ss(e,dn+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Ot(Math.floor(Rn(e,5501)*4294967295)),i=e*Vt,r=i+Vt;for(let o=i+1+n()*12;o<r-3;o+=n.range(12,26)){let a=n.range(1.25,1.5),l=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+l,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:a,rows:u,dOut:(.8+(u-1)*1.45+.95)*a})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,i,r,o,a,l,u,h){let d=this.path,p={},g=this.coastHeaps(n),b=Ot(Math.floor(Rn(n,5507)*4294967295));for(let v of g){let E=v.L;for(let R=0;R<v.rows;R++){let w=.8*E+R*1.45*E,P=(R===0?.28:R===1?0:-.3)*E;for(let C=v.sa+b()*.7*E;C<v.sb;C+=1.5*E*b.range(.88,1.12)){let A=l(C),L=h(C,-(A+ol+w+(b()-.5)*.45*E),0);if(Dd(e,L[0],es+P+(b()-.5)*.3*E,L[2],b,E*b.range(.92,1.08),es-.7,R===0?.8:.45),R===0&&v.rows>1&&b()<.4){let D=h(C+.7*E,-(A+ol+w+.72*E),0);Dd(e,D[0],es+1.05*E,D[2],b,E*b.range(.9,1),es-.7)}}}let _=Math.max(3,Math.round(ch.n*(v.sb-v.sa+2)/7)),T=vs(i,Ti)-i;for(let R=0;R<_;R++){let w=v.sa+(v.sb-v.sa)*(R+.5)/_+(b()-.5)*1.4,P=l(w);d.at(w,p);let C=h(w,-(P+ol+v.dOut*(.45+.55*b())-.3),es+.35);u.puffs.push(C[0],C[1],C[2],-p.rx,-p.rz,v.dOut,b(),w+T)}}g.length&&(yield);let S=[...this.coastHeaps(n-1),...g,...this.coastHeaps(n+1)],M=vs(i,Ti),x=[];for(let v=0;v<=10;v++)x.push(i+v*6);for(let v of S)for(let E of[v.sa-3.2,v.sa-.4,v.sb+.4,v.sb+3.2])E>i+.5&&E<r-.5&&x.push(E);x.sort((v,E)=>v-E);for(let v=0;v<x.length;v++){let E=x[v];if(v>0&&E-x[v-1]<.6)continue;if(!this.coastWall(E)){if(u.rows.length)break;continue}let _=1;for(let w=1;w<=3;w++)if(!this.coastWall(E-2*w)||!this.coastWall(E+2*w)){_=(w-1)/3;break}let T=l(E),R=new Float32Array(Vd.length*7);Vd.forEach((w,P)=>{let C=h(E,-(T+ol+w),es+.03),A=0;for(let L of S)A=Math.max(A,(1-Et(.4,3.2,Math.max(L.sa-E,E-L.sb,0)))*(1-Et(.2,3.4,w-L.dOut)));R.set([C[0],C[1],C[2],M+(E-i),w,A,_],P*7)}),u.rows.push(R)}u.rows.length&&(yield);let c=Ot(Math.floor(Rn(n,5531)*4294967295)),y=null;if(an(i+30)==="coast"&&c()<.5){let v=i+c()*Vt,E=l(v);ss(v,dn+25)||(y={s:v,rw:E,T:oh("coast",c),u:E+c.range(11,17)})}for(let v=i+t()*6;v<r;v+=t.range(5,9)){if(an(v)!=="coast"||ss(v,dn+6))continue;let E=l(v),_=t();if(_>=.58)continue;let T=E+t.range(4.5,30);y&&y.T&&Math.abs(v-y.s)<y.T.ww/2+2.5&&T>y.u-3.5&&T<y.u+y.T.wd+2.5||Vn(e,a(v,T,0,t()*6,!1),_<.48?"broad":"pine",t,t.range(1,1.4))}for(let v=i+4;v<r;)v+=t.range(18,30);for(let v=i+12;v<r;v+=48){if(an(v)!=="coast"||ss(v,dn+4))continue;let E=l(v);Sd(e,a(v,E+1),t)}let f=Ot(Math.floor(Rn(n,5519)*4294967295));for(let v=i+f()*6;v<r;v+=f.range(6,14)){if(Lt(v).coast<.6||ss(v,dn+6))continue;let E=1+Math.floor(f()*2.4);for(let _=0;_<E;_++){let T=v+_*f.range(.9,1.6),R=l(T)+f.range(1.25,2.4),w=f()*6.28,P=f.range(.85,1.25),C=T-6-Math.round((T-6)/bl)*bl,A=T-12-Math.round((T-12)/48)*48;Math.abs(C)<1.4||Math.abs(A)<1.2||Cd(e,a(T,R,0,w,!1),f,P)}}if(y){let{s:v,rw:E,T:_,u:T}=y;_?(Oi(e,a(v,T),c,{type:"house",w:_.ww,d:_.wd,ptype:_}),this.houseGarden(e,c,v,T,1,_,a,2,1,1)):Oi(e,a(v,E+c.range(9,16)),c,{type:"house",w:c.range(7,10),d:8,floors:c()<.5?2:1,tint:c.pick(Is),litP:.5,fence:0})}if(an(i+30)==="coast"&&t()<.55){let v=i+t()*Vt;Pg(e,o(v,-(l(v)+t.range(45,220)),es-.25,t()*6,!1),t)}let m=Math.floor((i+Vt/2)/1500)*1500+700;m>=i&&m<r&&an(m)==="coast"&&!ss(m,dn*1.6)&&Cg(e,o(m,-(l(m)+75),es-1,0,!1))}*placeCountry(e,t,n,i,r,o,a,l,u){for(let b of[-1,1]){yield;for(let S=n+t()*20;S<i;S+=t.range(20,40)){if(an(S)!=="country"||t()<.55||Ds(S,16)||ri(S,48))continue;let M=b*t.range(16,95),x=o(S,M),c=oh("country",t);if(c){Oi(e,x,t,{type:"house",w:c.ww,d:c.wd,ptype:c}),this.houseGarden(e,t,S,M,b,c,o,1,2,2);continue}Oi(e,x,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Is),litP:.5,fence:0});for(let y=0;y<2+t()*3;y++){let f=M+b*t.range(6,14),m=S+t.range(-8,8);Vn(e,o(m,f,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<i;S+=t.range(5,9)){if(an(S)!=="country"||Ds(S,7)||ri(S,36))continue;let M=b*t.range(140,210);Vn(e,o(S,M,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Ds(S+2,8)&&!ri(S+2,34)&&Vn(e,o(S+2,b*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Vt/2)/600)*600+300;if(h>=n&&h<i&&an(h)==="country"&&!ri(h,40)){let b=l(h);wg(e,r(h,-(b+1.6),a(h)-.08),t)}let d=Math.floor((n+Vt/2)/700)*700+120;if(d>=n&&d<i&&an(d)==="country"&&!ri(d,40)){let b=l(d);Ed(e,r(d,-(b+.95),a(d)-.08),t),Sd(e,r(d+2,-(b+.8),a(d)-.08),t)}let p=Math.floor((n+Vt/2)/900)*900+450;if(p>=n&&p<i&&an(p)==="country"&&!ri(p,40)){let b=l(p);Ig(e,o(p,b+5),t)}let g=Math.floor((n+Vt/2)/380)*380+190;if(g>=n&&g<i&&an(g)==="country"&&!ri(g,40)&&!Ds(g,30)){let b=l(g),S=(Rn(Math.round(g),5)<.5?-1:1)*(b+2.75);Sg(e,o(g,S,0))}for(let b=n;b<i;b+=30){if(an(b)!=="country")continue;let S=this.path.curv(b);if(Math.abs(S)>1/450&&t()<.5){let M=S>0?-1:1,x=l(b);Ad(e,o(b,M*(x+.75)),M>0?-1:1)}}}};var Go={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function h1(s){let e=s.get("weather"),t={mode:Go[e]?e:"auto",kind:Go[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Go[e]&&(t.ov=Go[e][0],t.rain=Go[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[i,r]=Go[t.kind];t.ov+=$t(i-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=$t(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var zi={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new dt(0,-1e3,0,0),new dt(0,-1e3,0,0)]},uLampCol:{value:new _e(1,.8,.52)}},fh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function f1(){let e=new H(42,22,42),t=new en(1,1),n=new hs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let i=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)i[a]=Math.random();n.setAttribute("aOff",new Cn(i,4)),n.instanceCount=2400;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new _e(1,1,1)},...zi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${fh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,l,u,h){o.visible=u>.01,r.uniforms.uTime.value=l,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function d1(){let e=new H(46,24,46),t=new en(1,1);t.translate(0,.5,0);let n=new hs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let i=new Float32Array(2600*4);for(let a=0;a<2600;a++)i[a*4]=Math.random(),i[a*4+1]=Math.random(),i[a*4+2]=Math.random(),i[a*4+3]=Math.random();n.setAttribute("aOff",new Cn(i,4)),n.instanceCount=2600;let r=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new _e(.8,.85,.95)},...zi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${fh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ct(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,l,u,h){o.visible=u>.01,r.uniforms.uTime.value=l,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var oi=64,Yd=[2.2,1.3,2.6],dS=[-2.4,.35,-1.6];function p1(){let s=new Float32Array(oi*3),e=new Float32Array(oi*3),t=new Float32Array(oi*4),n=new Float32Array(oi),i=new Uint8Array(oi),r=new Float32Array(oi);for(let y=0;y<oi;y++)t[y*4]=t[y*4+1]=1;let o=new en(1,1),a=new hs;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let l=new Float32Array(oi*4),u=new Float32Array(oi*4),h={uP:{value:l},uC:{value:u},uNoiseTex:Be.uNoiseTex,uAmb:{value:new _e},uSun:{value:new _e},uTail:{value:new dt},uCam:{value:new H},...zi},d=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${oi}], uC[${oi}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${fh}
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
      }`}),p=new ct(a,d);p.frustumCulled=!1,p.renderOrder=4,p.visible=!1;let g=0,b=0,S=0,M=0,x=!1;function c(y,f,m,v,E,_,T,R,w,P,C){let A=g;g=(g+1)%oi,s[A*3]=f,s[A*3+1]=m,s[A*3+2]=v,e[A*3]=E,e[A*3+1]=_,e[A*3+2]=T,t[A*4]=0,t[A*4+1]=R,t[A*4+2]=w,t[A*4+3]=P,n[A]=C,i[A]=y,r[A]=Math.random()}return{mesh:p,update(y,f,m,v,E,_,T,R,w,P,C){if(!C){if(x){for(let J=0;J<oi;J++)t[J*4]=t[J*4+1];x=!1}p.visible=!1;return}let A=f.position,L=f.rotation.y,D=Math.cos(L),U=Math.sin(L),V=U*m,O=D*m,k=Math.min(1,Math.max(0,(m-2)/14)),z=E>.3?2:0,K=z?E:v;for(b+=24*K*k*y;b>=1;){b-=1;let J=(M^=1)?1:-1,$=J*.67,ve=-1.28-Math.random()*.2,Ae=Math.random(),pe=Math.random(),Oe=1.6+1.6*Ae,Je=z?.5+.7*pe:.9+1*pe,je=J*(.3+.6*Math.random());c(z,A.x+$*D+ve*U,A.y+.12,A.z-$*U+ve*D,V*.55-U*Oe+je*D,Je,O*.55-D*Oe-je*U,z?.45+.3*Ae:.55+.35*Ae,.2+.1*pe,z?.7+.35*pe:.8+.4*pe,.5*(.5+.5*k)*Math.min(1,K*1.5))}for(S+=(5+4*k)*_*y;S>=1;){S-=1;let J=Math.random();c(1,A.x-.42*D-1.78*U,A.y+.26,A.z+.42*U-1.78*D,V*.5-U*.8,.25+.2*J,O*.5-D*.8,1.3+.6*J,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let le=0,Me=Math.exp(-Yd[0]*y),Fe=Math.exp(-Yd[1]*y),Ne=Math.exp(-Yd[2]*y);for(let J=0;J<oi;J++){let $=J*4;if(t[$]>=t[$+1])continue;let ve=t[$]+=y,Ae=t[$+1];if(ve>=Ae)continue;let pe=i[J],Oe=pe===0?Me:pe===1?Fe:Ne,Je=J*3,je=s[Je]-P.x,Te=s[Je+1]-P.y,nt=s[Je+2]-P.z;if(je*je+Te*Te+nt*nt<20.25){t[$]=Ae;continue}e[Je]*=Oe,e[Je+1]=e[Je+1]*Oe+dS[pe]*y,e[Je+2]*=Oe,s[Je]+=e[Je]*y,s[Je+1]=Math.max(A.y+.05,s[Je+1]+e[Je+1]*y),s[Je+2]+=e[Je+2]*y;let ne=ve/Ae,de=le*4;l[de]=s[Je],l[de+1]=s[Je+1],l[de+2]=s[Je+2],l[de+3]=t[$+2]+(t[$+3]-t[$+2])*Math.sqrt(ne),u[de]=n[J]*Math.min(1,ne*6)*(1-ne)*(1-ne),u[de+1]=pe,u[de+2]=r[J],le++}x=le>0,p.visible=x,a.instanceCount=le,x&&(h.uAmb.value.copy(T),h.uSun.value.copy(R),h.uTail.value.copy(w),h.uCam.value.copy(P))},shift(y,f){for(let m=0;m<oi;m++)s[m*3]-=y,s[m*3+2]-=f}}}var Br=24,pS=55,mS=12;function m1(){let s=[],e=new Float32Array(Br*2*2),t=new Float32Array(Br*2*3);for(let u=0;u<Br;u++)if(e.set([u,-1,u,1],u*4),u<Br-1){let h=u*2;s.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new mt;n.setAttribute("position",new _t(t,3)),n.setAttribute("aI",new _t(e,2)),n.setIndex(s);let i=new Float32Array(Br*4),r={uS:{value:i},uW:{value:2.6},uHot:{value:0},uSky:{value:new _e},uTime:{value:0},uNoiseTex:Be.uNoiseTex},o=new ut({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Br}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${wi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new ct(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let l={};return{mesh:a,update(u,h,d,p,g,b,S,M){if(a.visible=b>.01,!!a.visible){for(let x=0;x<Br;x++)u.at(h+pS+x*mS,l),i[x*4]=l.x-d,i[x*4+1]=l.y,i[x*4+2]=l.z-p,i[x*4+3]=l.h;r.uW.value=g*.85,r.uHot.value=b,r.uTime.value=S,r.uSky.value.copy(M)}}}}var Wo=1.6;function g1(s,e=null){let t=s==="high",[n,i,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,a=t?16:14,l=[4,Math.round(i*.4),Math.round(i*.65),i].filter((C,A,L)=>!A||C>L[A-1]),u=[i,Math.round((i+r)/2),r],h=(C,A)=>{let L=new hs;return L.setAttribute("position",new Ze(C,3)),L.setIndex(A),L},d=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],p=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],g=new Float32Array(tr*4),b=new Float32Array(tr),S={uG:{value:g},uGM:{value:b},uGP:{value:new dt(0,1/Wo,3.1,0)},uGQ:{value:new dt(0,1.05,3,0)},uRingD:{value:new dt(i,r,0,0)}},M=[],x=(C,A,L)=>{let D={uRing:{value:new dt(0,0,L?2*n:n,L)},uRingC:{value:new dt(0,0,0,0)}},U=h(...L?p:d);U.instanceCount=0;let V=new ct(U,Lm(D,S));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,M.push({mesh:V,u:D,dA:C,dB:A,size:L?2*n:n,W:L?a:o,last:A===i||A===r})};for(let C=0;C<l.length-1;C++)x(l[C],l[C+1],0);for(let C=0;C<u.length-1;C++)x(u[C],u[C+1],1);let c=new Int32Array(64).fill(-2147483648),y=new Float32Array(64),f=new Uint8Array(64),m=C=>{let A=C&63;if(c[A]!==C){c[A]=C;let L=C*Wo,D=js(L),U=Ni(L),V=Lt(L).country,O=Math.min(1,Math.max(0,(V-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(U?Math.min(1,Math.max(0,(Math.abs(L-U.s)-38)/10)):1);y[A]=O>0?3+4*Math.round(O*15):0,f[A]=V>0?1:0}return A},v=C=>y[m(C)],E=C=>f[m(C)],_={},T=NaN,R=NaN,w=NaN,P=0;return{meshes:M.map(C=>C.mesh),hide(){for(let C=0;C<M.length;C++)M[C].mesh.visible=!1},warm(C){for(let A of M)A.mesh.visible=C,C&&(A.u.uRing.value.y=1,A.u.uRingC.value.set(1,1,A.W,0),A.mesh.geometry.instanceCount=2)},update(C,A,L,D,U,V,O){let k=Math.floor((A-3)/Wo);if(!E(k)&&!E(k+tr-1))P=0;else{if(k!==T||D!==R||U!==w){T=k,R=D,w=U,P=0;for(let z=0;z<tr;z++)C.at((k+z)*Wo,_),g[z*4]=_.x-D,g[z*4+1]=_.y,g[z*4+2]=_.z-U,g[z*4+3]=_.h,P|=b[z]=v(k+z)}S.uGP.value.set(k*Wo,1/Wo,V,A),S.uGQ.value.set(L,O,3,0)}for(let z=0;z<M.length;z++){let K=M[z];if(!P){K.mesh.visible=!1;continue}let le=Math.floor((A+K.dA)/K.size),Me=Math.floor((A+K.dB)/K.size)+(K.last?1:0),Fe=O*K.dB+3,Ne=V+2.6,J=Math.min(K.W,Math.max(0,Fe-(Ne+L))),$=Math.min(K.W,Math.max(0,Fe-(Ne-L))),ve=J>0?Math.ceil(J/K.size)+1:0,Ae=$>0?Math.ceil($/K.size)+1:0;K.u.uRing.value.x=le,K.u.uRing.value.y=Me-le,K.u.uRingC.value.set(ve,Ae,K.W,0),K.mesh.geometry.instanceCount=(Me-le)*(ve+Ae),K.mesh.visible=K.mesh.geometry.instanceCount>0}}}}var Xo=72;function gS(){let s=[],e=[],t=(i,r,o,a,l,u)=>{s.push(...i,...r,...o),e.push(a,l,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let i of[1,-1])t([.05*i,0,.18],[.5*i,0,.05],[.05*i,0,-.12],0,.55,0),t([.5*i,0,.05],[.95*i,0,-.12],[.45*i,0,-.1],.55,1,.5),t([.05*i,0,-.12],[.5*i,0,.05],[.45*i,0,-.1],0,.55,.5);let n=new mt;return n.setAttribute("position",new Ze(s,3)),n.setAttribute("aWing",new Ze(e,1)),n}function v1(){let s=gS(),e=new Cn(new Float32Array(Xo*3),3),t=new Cn(new Float32Array(Xo*2),2);s.setAttribute("aCol",e),s.setAttribute("aFlap",t);let n=new ut({side:bn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:se.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),i=new Ki(s,n,Xo);i.frustumCulled=!1,i.count=0;let r=[],o={small:6,crow:4},a=new et,l=new gn,u=new Zn(0,0,0,"YXZ"),h=new H,d=new H,p=()=>r.reduce((S,M)=>S+M.birds.length,0);function g(S,M,x,c){let y=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(p()+y>Xo)return;let f=45+Math.random()*85,m=(Math.random()-.5)*120,v=Math.random()<.5?1:-1,E=new H().copy(M).addScaledVector(x,f).addScaledVector(c,m-v*75);E.y=M.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let _=S==="small"?11+Math.random()*4:8+Math.random()*3,T=new H().copy(c).multiplyScalar(v*_).addScaledVector(x,(Math.random()-.3)*_*.6),R=S==="small"?.8:1.45,w=Array.from({length:y},(P,C)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:T,birds:w,size:R,life:60})}function b(S,M,x,c){if(r.some(m=>m.kind==="gull")||p()+4>Xo)return;let y=new H().copy(S).addScaledVector(M,70).addScaledVector(x,-c*45);y.y=S.y+18;let f=Array.from({length:4},(m,v)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:v/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:y,vel:new H,birds:f,size:1.25,life:1e9})}return{mesh:i,update(S,M,x,c,y,f,m,v,E){n.uniforms.uTime.value=M,n.uniforms.uCam.value.copy(x);let _=m>.35&&v<.3,T=se.warm>.25&&se.sunEl<.6&&m>.2;_&&(o.small-=S)<0&&(o.small=22+Math.random()*35,f.coast<.6&&g("small",x,c,y)),(T||_&&f.city+f.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=T?14+Math.random()*18:60,g("crow",x,c,y)),f.coast>.6&&_&&b(x,c,y,1);let R=[.1+.08*m,.11+.09*m,.15+.1*m],w=0;for(let P=r.length-1;P>=0;P--){let C=r[P];if(C.kind==="gull"?(C.c.lerp(h.copy(E).addScaledVector(c,60).addScaledVector(y,-42).setY(E.y+16),Math.min(1,S*.25)),(f.coast<.4||!_)&&(C.life=Math.min(C.life,8),C.c.y+=S*6)):C.c.addScaledVector(C.vel,S),C.life-=S,C.life<0||C.kind!=="gull"&&C.c.distanceTo(x)>300){r.splice(P,1);continue}for(let A of C.birds){if(w>=Xo)break;let L,D,U,V;C.kind==="gull"?(A.w+=S*(14/A.r),L=C.c.x+Math.cos(A.w)*A.r,U=C.c.z+Math.sin(A.w)*A.r,D=C.c.y+A.h+Math.sin(M*.4+A.ph)*2,V=Math.atan2(-Math.sin(A.w),Math.cos(A.w))):(L=C.c.x+A.off.x+Math.sin(M*.7+A.ph)*1.2,D=C.c.y+A.off.y+Math.sin(M*1.1+A.ph)*.6,U=C.c.z+A.off.z,V=Math.atan2(C.vel.x,C.vel.z)),u.set(0,V,Math.sin(M+A.ph)*.15),l.setFromEuler(u),d.setScalar(C.size),a.compose(h.set(L,D,U),l,d),i.setMatrixAt(w,a);let O=C.kind==="gull"?[.92*(.5+.5*m),.93*(.5+.5*m),.95*(.5+.5*m)]:C.kind==="crow"?[.05,.05,.07]:R;e.setXYZ(w,O[0],O[1],O[2]),t.setXY(w,A.fq,A.ph),w++}}i.count=w,i.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,M){for(let x of r)x.c.x-=S,x.c.z-=M}}}var Sl=new H;function ki(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Sl.copy(e),Sl[n]=0,Sl.normalize();let u=.5*o/(o+a),h=1-Sl.angleTo(s)/l;return Math.sign(Sl[t])===1?h*u:a/(o+a)+u+u*(1-h)}var On=class s extends Jt{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,u=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,g=this.attributes.uv.array,b=d.length/6,S=new H,M=.5/o;for(let x=0,c=0;x<d.length;x+=3,c+=2)switch(l.fromArray(d,x),u.copy(l),u.x-=Math.sign(u.x)*M,u.y-=Math.sign(u.y)*M,u.z-=Math.sign(u.z)*M,u.normalize(),d[x+0]=h.x*Math.sign(l.x)+u.x*r,d[x+1]=h.y*Math.sign(l.y)+u.y*r,d[x+2]=h.z*Math.sign(l.z)+u.z*r,p[x+0]=u.x,p[x+1]=u.y,p[x+2]=u.z,Math.floor(x/b)){case 0:S.set(1,0,0),g[c+0]=ki(S,u,"z","y",r,n),g[c+1]=1-ki(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),g[c+0]=1-ki(S,u,"z","y",r,n),g[c+1]=1-ki(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),g[c+0]=1-ki(S,u,"x","z",r,e),g[c+1]=ki(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),g[c+0]=1-ki(S,u,"x","z",r,e),g[c+1]=1-ki(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),g[c+0]=1-ki(S,u,"x","y",r,e),g[c+1]=1-ki(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),g[c+0]=ki(S,u,"x","y",r,e),g[c+1]=1-ki(S,u,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function dh(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new mt,u=0;for(let h=0;h<s.length;++h){let d=s[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g])}if(e){let g;if(t)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,g,h),u+=g}}if(t){let h=0,d=[];for(let p=0;p<s.length;++p){let g=s[p].index;for(let b=0;b<g.count;++b)d.push(g.getX(b)+h);h+=s[p].attributes.position.count}l.setIndex(d)}for(let h in r){let d=x1(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){let g=[];for(let S=0;S<o[h].length;++S)g.push(o[h][S][p]);let b=x1(g);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(b)}}}return l}function x1(s){let e,t,n,i=-1,r=0;for(let u=0;u<s.length;++u){let h=s[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new _t(o,t,n),l=0;for(let u=0;u<s.length;++u){let h=s[u];if(h.isInterleavedBufferAttribute){let d=l/t;for(let p=0,g=h.count;p<g;p++)for(let b=0;b<t;b++){let S=h.getComponent(p,b);a.setComponent(p+d,b,S)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function vS(){let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ni(s);return n.colorSpace=Wt,n}var Zd=4;function xS(){let t=document.createElement("canvas");t.width=128*Zd,t.height=128;let n=t.getContext("2d"),i=(o,a,l,u,h)=>{n.beginPath(),n.moveTo(o+h,a),n.arcTo(o+l,a,o+l,a+u,h),n.arcTo(o+l,a+u,o,a+u,h),n.arcTo(o,a+u,o,a,h),n.arcTo(o,a,o+l,a,h),n.closePath(),n.fill()};for(let o=0;o<Zd;o++){let a=o*128,l=n.createLinearGradient(0,0,0,128);l.addColorStop(0,"#9fbfe6"),l.addColorStop(.45,"#4a6690"),l.addColorStop(1,"#1d2638"),n.fillStyle=l,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(i(a+14,84,30,50,9),i(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),i(a+52,92,24,40,7)),o===2&&(i(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(i(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new ni(t);return r.colorSpace=Wt,r}function y1(s,e,t=!1){let n=s.attributes.uv;for(let i=0;i<n.count;i++){let r=n.getX(i);n.setX(i,(e+(t?1-r:r))/Zd)}return s}function _1(){let s=new on,e=new on,t=new on;e.position.y=.35,t.position.y=-.35,e.add(t),s.add(e);let n=[new dt,new dt],i=new _e(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:i}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=fd(new fn({color:"#ffffff",vertexColors:!0,gradientMap:ul}),.85,.06,"paint-l",r),a=(ne,de)=>Object.assign(new _e(ne),{gloss:de}),l=a("#9fd8c8",1),u=a("#eeece4",.6),h=a("#2a2c33",.35),d=a("#1b1c20",.04),p=a("#c8ccd2",.8),g=a("#d4d8de",1.3),b=(ne,de)=>{let j=ne.attributes.position.count,ie=new Float32Array(j*4);for(let ee=0;ee<j;ee++)ie.set([de.r,de.g,de.b,de.gloss],ee*4);return ne.setAttribute("color",new Ze(ie,4)),ne},S=fd(new fn({color:"#ffffff",map:xS(),gradientMap:fi}),1.2,.08,"glass-l",r),M=new fn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:fi}),x=new fn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:fi}),c=new fn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:fi}),y=new fn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:fi}),f=new fn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:fi}),m=new vn({map:vS()}),v=new Map,E=[],_=!1,T=new et,R=new Zn,w=new gn,P=new H(1,1,1),C=(ne,de,j,ie,ee,ue=0,F=0,be=0)=>{let te=ne.index?ne.toNonIndexed():ne;if(de.isColor&&(b(te,de),de=o),R.set(ue,F,be),w.setFromEuler(R),T.compose(new H(j,ie,ee),w,P),te.applyMatrix4(T),_){E.push(te);return}v.has(de)||v.set(de,[]),v.get(de).push(te)},A=a("#16171b",0),L=a("#2b3134",.15),D=a("#b9bfc6",.9),U=a("#4d5258",.4),V=a("#9a1c22",.6),O=1.7,k=.745,z=.3,K=(ne,de,j)=>{let ie=Math.min(1,Math.max(0,(j-ne)/(de-ne)));return ie*ie*(3-2*ie)},le=ne=>ne<.8?1.8:ne<1.22?1.8-.6*K(.8,1.22,ne):1.2-.1*((ne-1.22)/(O-1.22))**2,Me=ne=>1-.085*K(1.15,1.8,ne),Fe=(ne,de)=>{let j=k-de,ie=z+de*.6,ee=le(ne)-de*(ne<0?.4:1),ue=Math.max(.05,.1-de*.5),F=Math.max(.06,(ne<.8?.17:.13)-de*.5),be=[[0,ie],[(j-ue)*.5,ie],[j-ue,ie]];for(let N=1;N<4;N++){let I=-Math.PI/2+N/8*Math.PI;be.push([j-ue+ue*Math.cos(I),ie+ue+ue*Math.sin(I)])}for(let N=0;N<=8;N++)be.push([j,ie+ue+N/8*(ee-F-ie-ue)]);for(let N=1;N<5;N++){let I=N/10*Math.PI;be.push([j-F+F*Math.cos(I),ee-F+F*Math.sin(I)])}be.push([j-F,ee],[(j-F)*.5,ee],[0,ee]);let te=be.map(([N,I])=>[N*Me(I),I]);for(let N=be.length-2;N>0;N--)te.push([-te[N][0],te[N][1]]);return te};{let ne=[];for(let G=0;G<=6;G++){let W=G/6*Math.PI/2;ne.push([-O+.2*(1-Math.cos(W)),.2*(1-Math.sin(W))])}for(let G=-O+.2+.12;G<.78;G+=.13)ne.push([G,0]);for(let G=.8;G<1.225;G+=.06)ne.push([G,0]);for(let G of[1.3,1.39])ne.push([G,0]);for(let G=6;G>=0;G--){let W=G/6*Math.PI/2;ne.push([O-.22*(1-Math.cos(W)),.22*(1-Math.sin(W))])}let ie=[],ee=[],ue=ne.map(([G,W])=>Fe(G,W)),F=ue[0].length;ue.forEach((G,W)=>G.forEach(([Q,ce])=>ie.push(Q,ce,ne[W][0])));for(let G=0;G<ue.length-1;G++)for(let W=0;W<F;W++){let Q=G*F+W,ce=G*F+(W+1)%F,ge=Q+F,he=ce+F;ee.push(Q,ce,ge,ce,he,ge)}for(let[G,W]of[[0,-1],[ue.length-1,1]]){let Q=ie.length/3,ce=ue[G];ie.push(0,(ce[0][1]+ce[F/2|0][1])/2,ne[G][0]);for(let ge=0;ge<F;ge++){let he=G*F+ge,fe=G*F+(ge+1)%F;W<0?ee.push(Q,fe,he):ee.push(Q,he,fe)}}let be=new mt;be.setAttribute("position",new Ze(ie,3)),be.setIndex(ee),be.computeVertexNormals();{let G=be.attributes.normal,W=F*10+12;if(G.getX(W)<0){for(let Q=0;Q<ee.length;Q+=3){let ce=ee[Q+1];ee[Q+1]=ee[Q+2],ee[Q+2]=ce}be.setIndex(ee),be.computeVertexNormals()}}be.setAttribute("uv",new Ze(new Float32Array(ie.length/3*2),2));let te=be.toNonIndexed(),N=te.attributes.position,I=new Float32Array(N.count*4);for(let G=0;G<N.count;G+=3){let W=(N.getY(G)+N.getY(G+1)+N.getY(G+2))/3,Q=(N.getZ(G)+N.getZ(G+1)+N.getZ(G+2))/3,ce=W>1.665&&Q<.84&&Q>-1.52?u:l;for(let ge=0;ge<3;ge++)I.set([ce.r,ce.g,ce.b,ce.gloss],(G+ge)*4)}te.setAttribute("color",new Ze(I,4)),C(te,o,0,0,0)}C(new On(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Ne=(ne,de,j,ie,ee)=>{let ue=new mt,F=[],be=[],te=[],N=[];for(let I=0;I<=j;I++)for(let G=0;G<=de;G++){let W=G/de,Q=I/j,ce=ne(W,Q);F.push(ce[0]+ce[3]*.004,ce[1]+ce[4]*.004,ce[2]+ce[5]*.004),be.push(ce[3],ce[4],ce[5]),te.push(W,Q)}for(let I=0;I<j;I++)for(let G=0;G<de;G++){let W=I*(de+1)+G,Q=W+1,ce=W+de+1,ge=ce+1;N.push(W,Q,ge,W,ge,ce)}ue.setAttribute("position",new Ze(F,3)),ue.setAttribute("normal",new Ze(be,3)),ue.setAttribute("uv",new Ze(te,2)),ue.setIndex(N);{let I=new H().fromArray(F,0),G=new H().fromArray(F,3),W=new H().fromArray(F,(de+1)*3),Q=new H().fromArray(be,0);if(G.sub(I).cross(W.sub(I)).dot(Q)<0){for(let ce=0;ce<N.length;ce+=3){let ge=N[ce+1];N[ce+1]=N[ce+2],N[ce+2]=ge}ue.setIndex(N)}}return y1(ue,ie,ee)},J=ne=>{let j=k*(Me(ne+.01)-Me(ne-.01))/.02,ie=Math.hypot(1,j);return[1/ie,-j/ie]},$=ne=>{let de=.8,j=1.22;for(let ie=0;ie<24;ie++){let ee=(de+j)/2;le(ee)>ne?de=ee:j=ee}return de};for(let ne of[-1,1]){let de=ne<0,j=(ie,ee,ue)=>C(Ne((F,be)=>{let te=1.21+be*.39,N=ne>0?ee(te)+(ie(te)-ee(te))*F:ie(te)+(ee(te)-ie(te))*F,[I,G]=J(te);return[ne*k*Me(te),te,N,ne*I,G,0]},1,6,ue,!1),S,0,0,0);j(()=>.06,ie=>$(ie)-.07,2),j(()=>-.72,()=>-.08,3),j(()=>-1.42,()=>-.84,0),C(new Jt(.012,.41,.07),h,ne*.731,1.405,-.01,0,0,-ne*.07),C(new Jt(.014,.022,2.42),A,ne*.748,1.2,-.26);for(let[ie,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])C(new Jt(.008,1.17-ee,.012),L,ne*.749,(ee+1.17)/2,ie);C(new Jt(.02,.028,.13),L,ne*.752,1.06,.06),C(new Jt(.02,.028,.13),L,ne*.752,1.06,-.2),C(new Jt(.01,.022,.62),L,ne*.749,1.155,-1.08);for(let ie of[1.12,-1.12])C(new _r(.345,18,0,Math.PI),A,ne*.749,.29,ie,0,ne*Math.PI/2,0),C(new Oa(.35,.024,5,18,Math.PI),h,ne*.752,.29,ie,0,ne*Math.PI/2,0);C(new On(.1,.12,.2,2,.04),l,ne*.83,1.24,1.02),C(new Jt(.07,.035,.05),h,ne*.775,1.2,1.03),C(new On(.16,.4,.05,3,.075),g,ne*.56,.95,-1.703),C(new On(.13,.37,.05,3,.062),M,ne*.56,.95,-1.716),C(new On(.036,.27,.02,2,.016),x,ne*.56,.95,-1.742),C(new On(.11,.06,.04,2,.02),y,ne*.56,.69,-1.707)}{let ne=new yo,de=.52,j=1.15,ie=1.66,ee=.07;ne.moveTo(-de+ee,j),ne.lineTo(de-ee,j),ne.absarc(de-ee,j+ee,ee,-Math.PI/2,0),ne.lineTo(de,ie-ee),ne.absarc(de-ee,ie-ee,ee,0,Math.PI/2),ne.lineTo(-de+ee,ie),ne.absarc(-de+ee,ie-ee,ee,Math.PI/2,Math.PI),ne.lineTo(-de,j+ee),ne.absarc(-de+ee,j+ee,ee,Math.PI,Math.PI*1.5);let ue=new Fa(ne,6),F=ue.attributes.position,be=ue.attributes.uv;for(let te=0;te<F.count;te++){let N=F.getX(te),I=F.getY(te),G=(I-j)/(ie-j);be.setXY(te,(N+de)/(2*de),G),F.setX(te,N*(1-.08*G))}C(y1(ue,1),S,0,0,-O-.004,0,Math.PI,0)}C(new On(.36,.04,.03,2,.014),c,0,1.69,-1.712),C(Ne((ne,de)=>{let j=1.19-de*.36,ie=le(j),ee=.56-.07*de,ue=.005,F=(le(j+ue)-le(j-ue))/(2*ue),be=Math.hypot(1,F);return[(ne*2-1)*ee,ie,j,0,1/be,-F/be]},2,7,0,!1),S,0,0,0),C(new On(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),C(new en(.34,.17),m,0,.72,-1.709,0,Math.PI,0),C(new On(.25,.034,.03,2,.013),g,0,.9,-1.708);for(let ne of[-1,1])C(new Jt(.01,.56,.006),L,ne*.47,.85,-1.703);C(new Jt(.95,.01,.006),L,0,.565,-1.703),C(new On(1.5,.2,.26,3,.08),l,0,.44,-1.6),C(new On(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ne of[-1,1])C(new Jt(.13,.035,.01),V,ne*.56,.44,-1.731);C(new Li(.036,.036,.12,12),g,.46,.29,-1.68,Math.PI/2,0,0),C(new Li(.024,.024,.124,10),A,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])C(new On(.4,.26,.04,2,.06),h,ne*.42,.85,1.702),C(new Li(.105,.105,.03,16),f,ne*.46,.85,1.72,Math.PI/2,0,0),C(new Li(.055,.055,.03,12),f,ne*.3,.85,1.718,Math.PI/2,0,0),C(new On(.1,.06,.04,2,.015),y,ne*.52,.66,1.705),C(new Jt(.46,.014,.014),A,ne*.25,1.215,1.2,-.3,ne*.12,0);C(new On(.36,.12,.03,2,.03),A,0,.84,1.704);for(let ne=0;ne<3;ne++)C(new Jt(.32,.012,.012),L,0,.805+ne*.035,1.722);C(new On(1.52,.24,.22,2,.07),h,0,.44,1.62),C(new Jt(.7,.07,.02),A,0,.4,1.732),C(new Jt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),C(new Jt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[ne,de]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){C(new Li(.29,.29,.19,24),d,ne,.29,de,0,0,Math.PI/2),C(new Li(.195,.195,.194,20),D,ne,.29,de,0,0,Math.PI/2),C(new Li(.155,.155,.198,16),U,ne,.29,de,0,0,Math.PI/2);for(let j=0;j<5;j++){let ie=j/5*Math.PI*2+.3;C(new Jt(.202,.03,.15),D,ne,.29-.085*Math.sin(ie),de+.085*Math.cos(ie),ie,0,0)}C(new Li(.045,.045,.206,10),p,ne,.29,de,0,0,Math.PI/2)}_=!1;for(let[ne,de]of v){let j=new ct(dh(de),ne);j.castShadow=ne!==S&&ne!==m&&ne!==c&&ne!==f&&ne!==x,j.receiveShadow=!0,t.add(j)}{let ne=new ct(dh(E),o);ne.castShadow=ne.receiveShadow=!0,s.add(ne)}{let j=document.createElement("canvas");j.width=48,j.height=96;let ie=j.getContext("2d"),ee=ie.createImageData(48,96);for(let F=0;F<96;F++)for(let be=0;be<48;be++){let te=Math.max(0,Math.abs((be+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((F+.5)/96-.5)*2.05-.78),I=Math.hypot(te/.42,N/.24),G=Math.max(0,1-I),W=(F*48+be)*4;ee.data[W]=ee.data[W+1]=ee.data[W+2]=Math.round(255*G*G*(3-2*G)),ee.data[W+3]=255}ie.putImageData(ee,0,0);let ue=new ct(new en(2.2,4.1),new vn({color:0,alphaMap:new ni(j),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ue.rotation.x=-Math.PI/2,ue.position.y=.03,ue.renderOrder=3,s.add(ue)}let ve=(()=>{let j=document.createElement("canvas");j.width=16,j.height=64;let ie=j.getContext("2d"),ee=ie.createImageData(16,64);for(let ue=0;ue<64;ue++)for(let F=0;F<16;F++){let be=1-(ue+.5)/64,te=((F+.5)/16-.5)*2,N=Math.exp(-te*te*5)*Math.min(1,be/.06)*Math.pow(1-be,1.6)*(.78+.22*Math.sin(be*31+te*2)),I=(ue*16+F)*4;ee.data[I]=ee.data[I+1]=ee.data[I+2]=Math.round(255*Math.max(0,N)),ee.data[I+3]=255}return ie.putImageData(ee,0,0),new vn({map:new ni(j),color:16726576,transparent:!0,opacity:0,blending:Ji,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ne=[];for(let j of[-.56,.56]){let ie=new en(.22,1.5);ie.rotateX(-Math.PI/2),ie.translate(j,.035,-1.72-.75),ne.push(ie)}let de=new ct(dh(ne),ve);de.renderOrder=3,de.visible=!1,s.add(de),ve.mesh=de}let Ae=new on;Ae.position.set(.02,1.19,-1.716),t.add(Ae);let pe=new Jt(.52,.026,.02);pe.translate(.27,0,0);let Oe=new ct(b(pe,h),o);Oe.rotation.z=.18,Ae.add(Oe);let Je=0,je=new Ga(16773328,0,70,.55,.65,1.2);je.position.set(0,.8,1.6),je.target.position.set(0,0,18),t.add(je,je.target);let Te={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},nt=(ne,de)=>de*Math.tanh(ne/de);return{group:s,lamps:n,lampCol:i,head:je,update(ne,de,j,ie=0,ee=null,ue=0){if(ee){let F=nt(-ee.lat*.016,.045),be=nt(-ee.lon*.008,.03);Te.rv+=((F-Te.roll)*55-Te.rv*8)*ne,Te.roll+=Te.rv*ne,Te.pv+=((be-Te.pitch)*60-Te.pv*9)*ne+ee.kick,Te.pitch+=Te.pv*ne,Te.yv+=((ee.road-Te.y)*85-Te.yv*8)*ne+ee.jolt,Te.y+=Te.yv*ne,e.rotation.set(Te.pitch,0,Te.roll),e.position.y=.35+Te.y}if(Te.br+=((ee?ee.brake:0)-Te.br)*Math.min(1,ne*14),M.emissiveIntensity=.35+j*3.2+Te.br*(1.7+j*2),c.emissiveIntensity=Te.br*(2.4+j*1.6),x.emissiveIntensity=1+j*3+Te.br*(2+j*2),ve.opacity=ue*Math.min(1,.22+M.emissiveIntensity*.22),ve.mesh.visible=ve.opacity>.01,ie>.15||Je%2.6>.01){Je+=ne;let F=Je%2.6/2.6,be=N=>N*N*(3-2*N),te=F<.25?be(F/.25):F<.5?be(1-(F-.25)/.25):0;Oe.rotation.z=.18+te*2.5,ie<=.15&&F>=.5&&(Je=0)}je.intensity=j*60,f.emissiveIntensity=.15+j*2.6}}}var qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yS=new qs(-1,1,1,-1,0,1),$d=class extends mt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},_S=new $d,ar=class{constructor(e){this._mesh=new ct(_S,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yo=class extends Ai{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ar.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ar(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var El=class extends Ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ph=class extends Ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(qo),this.copyPass.material.blending=ii,this.timer=new Wa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}El!==void 0&&(o instanceof El?n=!0:o instanceof ph&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gh=class extends Ai{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var b1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zo=class s extends Ai{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:An,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Xt(r,o,{type:An,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Xt(r,o,{type:An,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=b1;this.highPassUniforms=Ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ar.clone(qo.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,premultipliedAlpha:!0,blending:Ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new ar(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,u=a+l;i.push((o*a+(o+1)*l)/u),r.push(u)}return new ut({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Zo.BlurDirectionX=new Pe(1,0);Zo.BlurDirectionY=new Pe(0,1);var Kd=class extends Ai{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Xt(4,4,{type:An,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),this.mat=new ut({uniforms:{tDiffuse:{value:null},uTexel:{value:new Pe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new ar(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},bS={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Pe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Pe(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function M1(s,e,t,{msaa:n=4,fxaa:i=!1,scale:r=1}={}){let o=s.getSize(new Pe),a=new Xt(o.x*s.getPixelRatio(),o.y*s.getPixelRatio(),{type:An,samples:n}),l=new mh(s,a);l.addPass(new gh(e,t));let u=new Kd;l.addPass(u);let h=new Zo(new Pe(o.x*r*.5,o.y*r*.5),.42,.55,.86);l.addPass(h);let d=new Yo(bS);d.material.defines=i?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},d.material.toneMapped=!1,l.addPass(d);let p=l.render.bind(l);return l.render=g=>{d.uniforms.toneMappingExposure.value=s.toneMappingExposure,p(g)},{composer:l,bloom:h,grade:d,refl:u}}function S1(){let s=window.AudioContext||window.webkitAudioContext;if(!s)return null;let e=new s,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,i=e.createBuffer(2,n,e.sampleRate);for(let j=0;j<2;j++){let ie=i.getChannelData(j);for(let ee=0;ee<n;ee++)ie[ee]=(Math.random()*2-1)*Math.pow(1-ee/n,3)}let r=e.createConvolver();r.buffer=i;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let l=e.createGain();l.gain.value=.11,a.connect(l),l.connect(t),l.connect(r);let u=(j,ie)=>{let ee=e.createBuffer(1,e.sampleRate*j,e.sampleRate),ue=ee.getChannelData(0),F=0;for(let be=0;be<ue.length;be++)ie?(F=(F+.02*(Math.random()*2-1))/1.02,ue[be]=F*3.5):ue[be]=Math.random()*2-1;return ee},h=(j,ie,ee)=>{let ue=e.createBufferSource();ue.buffer=j,ue.loop=!0;let F=e.createBiquadFilter();F.type=ie,F.frequency.value=ee;let be=e.createGain();return be.gain.value=0,ue.connect(F),F.connect(be),be.connect(t),ue.start(),{f:F,g:be}},d=h(u(2,!0),"lowpass",400),p=h(u(3,!1),"lowpass",700);p.g.connect(r);let g=h(u(2,!1),"bandpass",5200);g.f.Q.value=6;let b=h(u(2,!0),"lowpass",240),S=h(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let M=h(u(2,!0),"lowpass",520),x=h(u(2,!1),"bandpass",1500);x.f.Q.value=.7;let c=e.createBiquadFilter(),y=e.createGain(),f=e.createOscillator(),m=e.createOscillator(),v=e.createGain();f.type="sawtooth",m.type="triangle",c.type="lowpass",c.frequency.value=320,c.Q.value=.6,y.gain.value=0,v.gain.value=.5,f.connect(c),m.connect(v),v.connect(c),c.connect(y),y.connect(t),f.start(),m.start();let E=h(u(3,!1),"bandpass",750);E.f.Q.value=.6;let _=h(u(3,!0),"lowpass",420),T=h(u(2,!0),"lowpass",140),R=u(.03,!1),w=0;function P(j,ie){let ee=e.createBufferSource(),ue=e.createBiquadFilter(),F=e.createGain();ee.buffer=R,ue.type="bandpass",ue.frequency.value=1800+Math.random()*2600,ue.Q.value=1.2,F.gain.setValueAtTime(ie*(.02+Math.random()*.03),j),F.gain.exponentialRampToValueAtTime(1e-4,j+.03),ee.connect(ue),ue.connect(F),F.connect(t),ee.start(j),ee.stop(j+.04)}let C=0,A=0;function L(j,ie){let ee=e.createOscillator(),ue=e.createOscillator(),F=e.createGain(),be=e.createBiquadFilter();be.type="bandpass",be.frequency.value=1150,be.Q.value=2.2,ee.type="square",ee.frequency.value=745,ue.type="triangle",ue.frequency.value=1490,F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.085*ie,j+.004),F.gain.exponentialRampToValueAtTime(1e-4,j+.3),ee.connect(be),ue.connect(be),be.connect(F),F.connect(t),F.connect(r),ee.start(j),ue.start(j),ee.stop(j+.33),ue.stop(j+.33)}function D(j,ie){let ee=e.createOscillator(),ue=e.createGain();ee.type="sine",ee.frequency.setValueAtTime(110,j),ee.frequency.exponentialRampToValueAtTime(48,j+.12),ue.gain.setValueAtTime(1e-4,j),ue.gain.linearRampToValueAtTime(.22*ie,j+.006),ue.gain.exponentialRampToValueAtTime(1e-4,j+.17),ee.connect(ue),ue.connect(t),ee.start(j),ee.stop(j+.2)}let U=e.createGain();U.gain.value=1,U.connect(t);let V=e.createGain();V.gain.value=.35,U.connect(V),V.connect(r);let O=(j=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return U;let ie=e.createStereoPanner();return ie.pan.value=j,ie.connect(U),ie};function k(j,ie,ee,ue,F,be,te="sine",N=0){let I=e.createOscillator(),G=e.createGain();if(I.type=te,I.frequency.setValueAtTime(ie,j),I.frequency.exponentialRampToValueAtTime(ee,j+ue),N){let W=e.createOscillator(),Q=e.createGain();W.frequency.value=N,Q.gain.value=ie*.012,W.connect(Q),Q.connect(I.frequency),W.start(j),W.stop(j+ue+.05)}return G.gain.setValueAtTime(1e-4,j),G.gain.linearRampToValueAtTime(F,j+Math.min(.04,ue*.25)),G.gain.setValueAtTime(F,j+ue*.7),G.gain.exponentialRampToValueAtTime(1e-4,j+ue),I.connect(G),G.connect(be),I.start(j),I.stop(j+ue+.02),G}function z(j,ie){let ee=O(),ue=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let be=0;be<ue;be++){let te=j+be*(.09+Math.random()*.07);k(te,F,F*(1.2+Math.random()*.3),.06,ie*.022,ee)}}function K(j,ie){let ee=O();k(j,1120,1390,1,ie*.03,ee,"sine",5.5),k(j+1.15,2350,2150,.14,ie*.03,ee),k(j+1.32,1700,1520,.13,ie*.028,ee),k(j+1.5,2750,2480,.36,ie*.032,ee)}function le(j,ie){let ee=O(),ue=1+Math.floor(Math.random()*3);for(let F=0;F<ue;F++){let be=j+F*.48,te=e.createOscillator(),N=e.createBiquadFilter(),I=e.createGain();te.type="sawtooth",te.frequency.setValueAtTime(560,be),te.frequency.exponentialRampToValueAtTime(420,be+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,I.gain.setValueAtTime(1e-4,be),I.gain.linearRampToValueAtTime(ie*.03,be+.03),I.gain.exponentialRampToValueAtTime(1e-4,be+.36),te.connect(N),N.connect(I),I.connect(ee),te.start(be),te.stop(be+.4)}}function Me(j,ie){let ee=O(),ue=2+Math.floor(Math.random()*2);for(let F=0;F<ue;F++)k(j+F*.42,1750,1150,.36,ie*.022,ee,"triangle",11)}function Fe(j,ie){let ee=O(),ue=e.createOscillator(),F=e.createBiquadFilter(),be=e.createGain(),te=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ue.type="square",ue.frequency.value=te,F.type="bandpass",F.frequency.value=te*2.4,F.Q.value=3,be.gain.setValueAtTime(1e-4,j);for(let I=0;I<N;I++){let G=j+I*.038;be.gain.linearRampToValueAtTime(ie*.014,G+.008),be.gain.linearRampToValueAtTime(1e-4,G+.028)}ue.connect(F),F.connect(be),be.connect(ee),ue.start(j),ue.stop(j+N*.038+.05)}function Ne(j,ie){let ee=O(),ue=4300+Math.random()*700;for(let F=0;F<3;F++)k(j+F*.055,ue,ue*1.01,.035,ie*.009,ee)}function J(j,ie){let ee=O(0);for(let[ue,F,be]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let te=e.createOscillator(),N=e.createGain();te.type="sine",te.frequency.value=ue,te.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,j),N.gain.linearRampToValueAtTime(ie*.05*F,j+.03),N.gain.exponentialRampToValueAtTime(1e-4,j+be),te.connect(N),N.connect(ee),te.start(j),te.stop(j+be+.1)}}function $(j,ie){let ee=O();for(let ue of[j,j+.22])k(ue,2650,2600,.5,ie*.018,ee),k(ue,3950,3900,.35,ie*.008,ee)}let ve={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ae=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,pe=j=>440*Math.pow(2,(j-69)/12),Oe=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Je=[72,74,76,79,81,84,86,88],je=0,Te=e.currentTime+.2,nt=e.currentTime+3;function ne(j){let ie=Oe[je++%Oe.length],ee=11;for(let ue of ie)for(let F of[-5,5]){let be=e.createOscillator(),te=e.createGain();be.type=F<0?"sine":"triangle",be.frequency.value=pe(ue),be.detune.value=F,te.gain.setValueAtTime(0,j),te.gain.linearRampToValueAtTime(.18,j+3.5),te.gain.setValueAtTime(.18,j+ee-4),te.gain.linearRampToValueAtTime(0,j+ee+1),be.connect(te),te.connect(a),be.start(j),be.stop(j+ee+1.2)}}function de(j){let ie=Je[Math.floor(Math.random()*Je.length)],ee=e.createOscillator(),ue=e.createOscillator(),F=e.createGain(),be=e.createGain();ee.type=ue.type="sine",ee.frequency.value=pe(ie),ue.frequency.value=pe(ie)*2.01,be.gain.value=.25,ue.connect(be),be.connect(F),F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.05,j+.02),F.gain.exponentialRampToValueAtTime(1e-4,j+4),ee.connect(F),F.connect(r),F.connect(t),ee.start(j),ue.start(j),ee.stop(j+4.2),ue.stop(j+4.2)}return{ac:e,muted:!1,tyres:x,engG:y,bump(j){D(e.currentTime+.01,j)},update(j,ie,ee,ue={}){let F=e.currentTime;if((ue.bell||0)>.01)for(C<F&&(C=F+.02);C<F+.12;)L(C,ue.bell),C+=.41;let be=ue.rain||0;S.g.gain.setTargetAtTime(be*.05,F,.6),M.g.gain.setTargetAtTime(be*.05,F,.6);let te=(ue.wetRoad||0)*Math.min(1,j)**1.5,N=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(x.g.gain.setTargetAtTime(te*.045*N,F,.4),x.f.frequency.setTargetAtTime(900+1500*Math.min(j,2),F,.4),be>.05&&ue.roof)for(w<F&&(w=F+.02);w<F+.12;)P(w,be),w+=.04+Math.random()*.12/be;let I=ue.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);E.g.gain.setTargetAtTime(I*.035*G,F,.25),E.f.frequency.setTargetAtTime(600+400*G,F,.25);let W=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),Q=ue.rush||0;_.g.gain.setTargetAtTime(((ie.mountain||0)+(ie.snow||0)*.7)*.06*W+Q*.055,F,.8),_.f.frequency.setTargetAtTime(260+420*W+Q*500,F,.8);let ce=ue.train||0;if(b.g.gain.setTargetAtTime(ce*.16,F,.2),ce>.04)for(A<F&&(A=F+.02);A<F+.12;)D(A,ce),D(A+.15,ce*.8),A+=1.2;for(;Te<F+1;)ne(Te),Te+=8;nt<F+.5&&(de(nt),nt+=1.5+Math.random()*4.5);let ge=ue.tunnel||0;{let Y=ue.speed||0,Le=ue.load||0,me=850+2400*(1-Math.exp(-Y/15))+Math.max(0,Y-25)*60+Le*1300,De=me/40;f.frequency.setTargetAtTime(De,F,.25),m.frequency.setTargetAtTime(De*2,F,.25),c.frequency.setTargetAtTime(200+me*.08+Le*260,F,.3),y.gain.setTargetAtTime((.008+.01*Math.min(1,Y/15)+.024*Le)*(1-.6*(ue.rush||0))*(ue.roof===!1?.5:1)*(1+.7*ge),F,.3)}d.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*ge),F,.35),d.f.frequency.setTargetAtTime((250+j*500)*(1+.5*ge),F,.35),T.g.gain.setTargetAtTime(ge*.07,F,.4),o.gain.setTargetAtTime(.55+.6*ge,F,.4);let he=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);p.g.gain.setTargetAtTime(ie.coast*(.012+he*.05),F,.3),p.f.frequency.setTargetAtTime(400+he*900,F,.3);let fe=1-Math.min(1,be*1.4),we=1-ee,We=ue.dusk||0,Ce=ie.snow||0,Ie=1-Ce,Ue={sparrow:ee*fe*.22*(.3+ie.city*.5+ie.sakura+ie.country*.8+ie.coast*.2+(ie.mountain||0)*.5)*(1-Ce*.8),uguisu:ee*fe*ie.sakura*.06,crow:fe*(We*.14+ee*(ie.city+ie.country+(ie.mountain||0)*1.5+Ce*2.5)*.012),gull:ee*ie.coast*fe*.16,frog:we*(ie.country*5+ie.sakura*.6+ie.coast*.3)*(1+be*.6)*Ie,cricket:we*fe*(1.6-ie.city*1.1+(ie.mountain||0)*.8)*Ie,bike:ee*fe*ie.city*.014,bell:Ce*.022+(ie.mountain||0)*.006},Qe={sparrow:z,uguisu:K,crow:le,gull:Me,frog:Fe,cricket:Ne,bike:$,bell:J};for(let Y in Ue)F<ve[Y]||(Ue[Y]>1e-4&&Qe[Y](F+.05,.6+Math.random()*.4),ve[Y]=F+Math.max(.12,Ae(Ue[Y]||1e-6)));let at=.5+.5*Math.sin(F*7)*Math.sin(F*.4);g.g.gain.setTargetAtTime((ie.country+ie.sakura*.3)*ee*.006*at*(1-(ie.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function E1(s){let t=new en(.075,.05),n=new vn({color:16777215,side:bn}),i=new Ki(t,n,420);i.frustumCulled=!1,i.count=0;let r=new _e("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(f=>new _e(f));for(let f=0;f<420;f++)i.setColorAt(f,r);let a=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),l=new et,u=new gn,h=new Zn,d=new H(1,1,1),p=new H,g=90,b=new Float32Array(g*3),S=Array.from({length:g},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),M=new mt;M.setAttribute("position",new _t(b,3));let x=new vo({color:14221194,size:.35,map:s,transparent:!0,depthWrite:!1,blending:Ji,opacity:0}),c=new Ea(M,x);c.frustumCulled=!1;let y=(f,m,v,E,_)=>{let T=_?8+Math.random()*42:-4+Math.random()*50,R=(Math.random()-.5)*40;f.p.set(m.x+v.x*T+E.x*R,m.y-1+Math.random()*9,m.z+v.z*T+E.z*R)};return{group:[i,c],shift(f,m){for(let v of a)v.p.x-=f,v.p.z-=m;for(let v of S)v.p.x-=f,v.p.z-=m},update(f,m,v,E,_,T,R,w,P,C=0){let A=Math.floor(420*Math.min(1,T*1.1+C*.55));n.color.setScalar(1-.72*w);let L=!1;i.count=A;for(let U=0;U<A;U++){let V=a[U];p.subVectors(V.p,v);let O=p.x*E.x+p.z*E.z,k=p.x*_.x+p.z*_.z;if(V.p.x>1e8||O<-6||O>55||Math.abs(k)>24||V.p.y<R-.5){y(V,v,E,_,V.p.x<1e8);let z=Math.random()*(T+C)<C;(z!==V.leaf||z)&&(V.leaf=z,i.setColorAt(U,z?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*f,V.p.x+=Math.sin(m*.7+V.ph)*.4*f+.25*f,V.p.z+=Math.cos(m*.5+V.ph)*.3*f,h.set(m*V.sp+V.ph,m*V.sp*.7,V.ph),u.setFromEuler(h),d.setScalar(V.leaf?1.9:1),l.compose(V.p,u,d),i.setMatrixAt(U,l)}i.instanceMatrix.needsUpdate=!0,L&&i.instanceColor&&(i.instanceColor.needsUpdate=!0);let D=w*P;if(x.opacity=D,c.visible=D>.01,c.visible){for(let U=0;U<g;U++){let V=S[U];p.subVectors(V.p,v);let O=p.x*E.x+p.z*E.z,k=p.x*_.x+p.z*_.z;if(V.p.x>1e8||O<-4||O>60||Math.abs(k)>30){let z=2+Math.random()*55,K=(Math.random()-.5)*55;V.p.set(v.x+E.x*z+_.x*K,R+.3+Math.random()*2.2,v.z+E.z*z+_.z*K)}V.p.x+=Math.sin(m*.6+V.ph*3)*.3*f,V.p.y+=Math.sin(m*.9+V.ph)*.2*f,V.p.z+=Math.cos(m*.5+V.ph*2)*.3*f,b[U*3]=V.p.x,b[U*3+1]=V.p.y,b[U*3+2]=V.p.z}M.attributes.position.needsUpdate=!0}}}}var ot=new URLSearchParams(location.search),$o=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();$o&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");cm(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);hm(ot.get("env")||"city");var zn=s=>document.getElementById(s),Ko=s=>{let e=zn("loading");e&&(e.textContent=s)};async function MS(){await new Promise(ye=>setTimeout(ye,30));let s=zn("c"),e=new Hu({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||($o||t?"mid":"high"),i=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?$o?1.25:1.4:1);e.setPixelRatio(i),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Wt,e.toneMapping=Xa,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Sr,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=n==="high"&&innerHeight*i>=900?"hi":"lo",a=r==="old"?Promise.resolve(null):Xg(o),l=Kg(o),u=jg(n==="high"&&innerHeight*i>=560?"hi":"lo"),h=Zg(o),d=qg(n==="high"&&innerHeight*i>=560?"hi":"lo"),p=n==="high"&&innerHeight*i>=560?"hi":"lo",g=Yg(p),b=new yr;b.fog=new _a(13032946,.0019,700);let S=new kn(52,innerWidth/innerHeight,.5,7e3),M=new So(16777215,3);M.castShadow=!0;let x=n==="low"?1024:n==="mid"?1536:2048;M.shadow.mapSize.set(x,x),ud(ot.has("pcf")?parseInt(ot.get("pcf")):1);let c=62,y=M.shadow.camera,f=new et,m=new et;Object.assign(y,{left:-c,right:c,top:c,bottom:-c,near:1,far:420});let v=new H(0,1,0),E=new H,_=new H,T=new H,R=new H(0,1,0),w=new H(0,150,60),P=new H,C=new H,A=null,L=0,D=0,U=0;M.shadow.updateMatrices=function(){y.position.copy(w),y.lookAt(P),y.updateMatrixWorld(),y.updateProjectionMatrix(),m.multiplyMatrices(y.matrixWorldInverse,f).multiply(y.matrixWorld),y.projectionMatrix.multiply(m),y.projectionMatrixInverse.copy(y.projectionMatrix).invert(),this._updateMatrix(y,this.matrix,this._frustum)};let V=!0;M.shadow.bias=-4e-4;let O=()=>{M.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*c/M.shadow.mapSize.x};O();{let[ye,vt]=(ot.get("graze")||"0,0.12").split(",").map(Number);Sm(ye,vt)}b.add(M,M.target);let k=new So(16777215,0);k.castShadow=n!=="low"&&!ot.has("nocarsh");{let ye=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;k.shadow.mapSize.set(ye,ye)}if(Object.assign(k.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),k.shadow.bias=-2e-4,k.shadow.normalBias=.025,b.add(k,k.target),k.castShadow){let ye=M.shadow.getFrustum(),vt=k.shadow.getFrustum();for(let it of[ct,Sa]){let sn=it.prototype.intersectsFrustum;it.prototype.intersectsFrustum=function(ei){return ei===vt?this.userData.car===!0:(ei!==ye||this.userData.car!==!0)&&sn.call(this,ei)}}}let z=new Ha(10799359,13154464,1.6);b.add(z),Ko("painting the town\u2026"),await new Promise(ye=>setTimeout(ye,10));let K=Vm(Wm[p]);eg(K);{let ye=await d;ye&&(Gm(K,ye),ye.img.close())}{let ye=await g;ye&&(Xm(K,ye)&&yg(ye.types),ye.img.close())}let le=qm(e);cg(le.cells),Be.uTuftV.value.set(...le.tuftV);let Me=Dm(K.textures(e),le.tex),Fe=Am();Fe.update(e,0,0,0,0),Ko("painting the clouds\u2026"),await new Promise(ye=>setTimeout(ye,10)),ug(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62);{let ye=await u;if(ye){Fi.cells=ye.cells.filter(sn=>sn.kind==="leaf"),ye.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let vt=dd(ye.tex);Me.gleaf=vt.mat,Me.gleafDepth=vt.depth;let it=ye.cells.filter(sn=>sn.kind==="blossom");it.length&&(Fi.bcells=it,Me.gblossom=dd(ye.tex,{blossom:!0}).mat)}}mg(),Rg();let Ne=[2.1,1.75,3.2],J=[1.42,1.47,1.74];{let ye=await h;ye&&(ye.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),Ei.tex=ye.tex,Ei.uFieldK.value.set(1/ye.tile[0],1/ye.tile[1]),Ei.uFieldM.value.set(...ye.mean))}let $=new Zu;Me.shore=n1(n!=="high"),Me.surf=s1(),ch.n=n==="high"?8:4;let ve=i1(),Ae=g1(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let ye of Ae.meshes)b.add(ye);let pe=new hh(b,$,Me,ve),Oe=Fg();b.add(Oe);let Je=zg();b.add(Je.group);let je=t1();b.add(je.mesh);let Te=_1();Te.group.rotation.order="YXZ",b.add(Te.group),Te.group.traverse(ye=>{ye.userData.car=!0});let nt=E1(Me.glowTex);nt.group.forEach(ye=>b.add(ye));let ne=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),de=M1(e,b,S,{msaa:ne==="msaa"?n==="high"?4:2:0,fxaa:ne==="fxaa"});Be.uReflTex.value=de.refl.rt.texture;let j=await a,ie=j?$g(j,de):null;ie&&b.add(ie.mesh);let ee=!ie||r==="both"?Og(Bg(e)):null;ee&&b.add(ee.group);let ue=await l,F=ue?Jg(ue,de,b.fog.color):null;F&&b.add(F.mesh);let be=new H,te=new H,N=ot.get("refl")||"auto",I=ot.has("backlit")?parseFloat(ot.get("backlit")):1,G=[7.5,3,2.3],W=[1.7,1.15,1],Q=.7,ce=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,ge=new H,he=ot.has("haze")?parseFloat(ot.get("haze")):1,fe=Fm();b.add(fe.group);let we=Bm();b.add(we.group);let We=h1(ot),Ce=d1(),Ie=f1();b.add(Ce.mesh,Ie.mesh);let Ue=p1();b.add(Ue.mesh);let Qe=m1();b.add(Qe.mesh);let at=new _e,Y=new _e,Le=new dt,me=v1();b.add(me.mesh);let De=We.W.rain,ze=.4,Ee=5.5,q={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:$t(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??($o?4:0)},Ge=!1;ie&&(ie.opening=["sakura","city"].includes(an(q.s))?"center":"flank"),Ko("building the road\u2026"),await new Promise(ye=>setTimeout(ye,10));let Gt=$o?620:pe.ahead;pe.ahead=260;let Dt=ot.has("detail")?parseFloat(ot.get("detail")):380,mi=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;pe.update(q.s,1e9););pe.flush(),pe.ahead=Gt;{Ko("preparing the light\u2026"),await new Promise(rn=>setTimeout(rn,10));let ye=new on,vt=new mt;vt.setAttribute("position",new Ze([0,0,0,.01,0,0,0,.01,0],3)),vt.setAttribute("normal",new Ze([0,1,0,0,1,0,0,1,0],3)),vt.setAttribute("uv",new Ze([0,0,1,0,0,1],2)),vt.setAttribute("color",new Ze([1,1,1,1,1,1,1,1,1],3));let it=new mt;it.setAttribute("position",vt.attributes.position);let sn=new Set([Me.shore,Me.surf,ve]),ei=[Me.color,Me.atlas,Me.foliage,Me.leaf,Me.lamp,Me.sig,Me.sodium,Me.decal,Me.pool,Me.shore,Me.surf,ve,...Me.gleaf?[Me.gleaf]:[],...Me.gblossom?[Me.gblossom]:[]];for(let rn=0;rn<Si.length;rn++)ei.push(hl([Si[rn]])),ei.push(hl([Si[rn],Si[(rn+1)%Si.length]]));for(let rn of ei){let rs=new ct(sn.has(rn)?it:vt,rn);rs.castShadow=rs.receiveShadow=!sn.has(rn),rs.frustumCulled=!1,(rn===Me.gleaf||rn===Me.gblossom)&&(rs.customDepthMaterial=Me.gleafDepth),ye.add(rs)}ye.position.set(0,0,0),b.add(ye),M.target.position.set(0,0,0),M.position.set(0,150,60);let Sn=[Ce.mesh,Ie.mesh,Ue.mesh,Qe.mesh,we.group,fe.group,je.mesh].filter(rn=>!rn.visible);for(let rn of Sn)rn.visible=!0;Ae.warm(!0),e.setRenderTarget(de.composer.readBuffer),e.compile(b,S),e.render(b,S),e.setRenderTarget(null);for(let rn of Sn)rn.visible=!1;Ae.warm(!1),b.remove(ye),vt.dispose(),it.dispose(),de.bloom.enabled=de.refl.enabled=!0,de.composer.render(0),de.bloom.enabled=de.refl.enabled=!1}let gt={k:Math.ceil((q.s-Pr)/Cr),phase:"idle",raise:1,decided:!1,t2:0},Tt={},zt={},Nt={},Jo=ot.has("yaw")||ot.get("cam")==="top",lr=new H,Ns=new H,Gn=new H,Ri=!1,cr=new H,Or=new H,Tl=zn("spd"),zr=zn("dist"),wl=zn("clock"),xs=zn("zone"),ur=zn("start"),jo=zn("hint"),pn=null,Al=null,Rl=0,Cl=0;function Pl(ye){!Ge||ye===Al||(Al=ye,xs.querySelector(".jp").textContent=sl[ye].jp,xs.querySelector(".en").textContent=sl[ye].en,xs.classList.add("on"),clearTimeout(Rl),Rl=setTimeout(()=>xs.classList.remove("on"),5200))}function B(){if(!Ge){if(Ge=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{pn=S1(),pn&&pn.ac.resume()}catch{pn=null}ur.style.opacity=0,setTimeout(()=>ur.remove(),1500),$o||(jo.style.opacity=.75,setTimeout(()=>jo.style.opacity=0,9e3))}}let Z={};addEventListener("keydown",ye=>{Z[ye.key]=!0,(ye.key==="m"||ye.key==="M")&&ae(),(ye.key==="t"||ye.key==="T")&&He(),(ye.key==="c"||ye.key==="C")&&$e(),(ye.key==="r"||ye.key==="R")&&It(),!Ge&&(ye.key===" "||ye.key==="Enter")&&B()}),addEventListener("keyup",ye=>{Z[ye.key]=!1});let re=null;s.addEventListener("pointerdown",ye=>{re={id:ye.pointerId,x:ye.clientX,y:ye.clientY,sy:ye.clientY,sc:q.mult}});let oe=ye=>$t(ye.sc*Math.exp(-((ye.y-ye.sy)/innerHeight)*3.4),ze,Ee);addEventListener("pointermove",ye=>{re&&ye.pointerId===re.id&&(re.x=ye.clientX,re.y=ye.clientY,q.mult=oe(re))}),addEventListener("pointerup",()=>{re=null}),addEventListener("pointercancel",()=>{re=null}),s.addEventListener("touchstart",ye=>{let vt=ye.changedTouches[0];re={id:"touch",x:vt.clientX,y:vt.clientY,sy:vt.clientY,sc:q.mult},ye.preventDefault()},{passive:!1}),s.addEventListener("touchmove",ye=>{if(!re)return;let vt=ye.changedTouches[0];re.x=vt.clientX,re.y=vt.clientY,q.mult=oe(re),ye.preventDefault()},{passive:!1}),s.addEventListener("touchend",()=>{re=null}),s.addEventListener("touchcancel",()=>{re=null});function ae(){pn&&(pn.toggle(),zn("snd").style.opacity=pn.muted?.4:1)}function He(){q.todPaused=!q.todPaused,zn("tim").style.opacity=q.todPaused?.4:1}let Xe=[0,1,2,4],ke={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function $e(){q.cam=Xe[(Xe.indexOf(q.cam)+1)%Xe.length],zn("cam").textContent=ke[q.cam]||"\u25D0",q.cam===4&&yt()}let tt=["chase","side","road","crane","eye","side","road"],Ye={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function yt(){let ye;do ye=tt[Math.floor(Math.random()*tt.length)];while(ye===Ye.last);{let vt=Ui(q.s+60);vt&&Math.abs(q.s+60-vt.s)<dn+120&&(ye=Math.random()<.6?"chase":"eye")}if(Object.assign(Ye,{type:ye,last:ye,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ye==="road"){let vt=q.s+40+Math.random()*18,it=Bn(vt,"rw"),sn=Math.random()<.6?-1:1,ei=sn*(it+(sn<0?.9:1.3)),Sn=$.at(vt,{}),rn=Sn.y+Qs(vt,ei,Sn.y,it);Ye.anchor={x:Sn.x+Sn.rx*ei,y:Math.max(rn,Sn.y)+1.05,z:Sn.z+Sn.rz*ei,s:vt}}Ri=!1}let Ke={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function It(){zn("wx").textContent=Ke[We.cycle()]}zn("wx").textContent=Ke[We.W.mode],zn("cam").textContent=ke[q.cam]||"\u25D0",q.cam===4&&yt(),zn("wx").onclick=ye=>{ye.stopPropagation(),It()},zn("snd").onclick=ye=>{ye.stopPropagation(),ae()},zn("tim").onclick=ye=>{ye.stopPropagation(),He()},zn("cam").onclick=ye=>{ye.stopPropagation(),$e()};let un=0,qt=ye=>{let vt=performance.now();vt-un<120||(un=vt,ye.cancelable&&ye.type!=="click"&&ye.preventDefault(),B())};for(let ye of["touchstart","pointerdown","mousedown","click"])ur.addEventListener(ye,qt,{passive:!1});let Ht=()=>{pn&&pn.ac.state!=="running"&&pn.ac.resume()};for(let ye of["touchend","click","keydown"])addEventListener(ye,Ht,{passive:!0});document.addEventListener("visibilitychange",()=>{pn&&(document.hidden?pn.ac.suspend():pn.ac.resume())});let mn=!1,qe="",_n=52,bt=0;function jn(){let ye=innerWidth,vt=innerHeight,it=ye/vt,sn=ye+"x"+vt+"@"+i;sn!==qe&&(qe=sn,e.setPixelRatio(i),e.setSize(ye,vt,!1),de.composer.setPixelRatio(i),de.composer.setSize(ye,vt),S.aspect=it,_n=it>=1?52:$t(2*Math.atan(Math.tan(34*Math.PI/180)/it)*180/Math.PI,52,80),S.fov=_n+bt,S.updateProjectionMatrix(),de.grade.uniforms.uAspect.value=it,de.grade.uniforms.uTexel.value.set(1/de.composer.readBuffer.width,1/de.composer.readBuffer.height),Be.uReflRes.value.set(de.composer.readBuffer.width,de.composer.readBuffer.height),Gg(e))}addEventListener("resize",()=>{mn=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{mn=!0}),jn();let Qn=0;function Hi(ye=!0){if(i>1.05)i=Math.max(1,i-.25),mn=!0;else if(V)V=!1,de.bloom.enabled=!1;else if(M.shadow.mapSize.x>1024)M.shadow.mapSize.set(1024,1024),O(),M.shadow.map&&(M.shadow.map.dispose(),M.shadow.map=null);else if(pe.ahead>430)pe.ahead=430;else return;if(Qn++,ye)try{localStorage.setItem("icd-q",String(Qn))}catch{}}try{let ye=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let vt=0;vt<Math.min(ye,6);vt++)Hi(!1);Qn=Math.max(Qn,ye||0)}catch{}let ys=performance.now(),xt=0,nn=0,ai=0,Ut=()=>1-se.night,Ci=0,Ft=0,Qo=0,Mt=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Mt&&(Mt.gl=e.getContext(),Mt.tq=Mt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let gi={p:-1,a:new H,b:new H,next:5},Ct={lat:0,lon:0,road:0,jolt:0,kick:0,u:q.u,vu:0,v:0,s:q.s,yaw:0,brake:0,rk:NaN,rb:null},T1=new _e(3.6,2.8,1.8),w1=[-2.5335,-1.4665,1.4665,2.5335],Jd=[1.12,-1.12],A1=[-24.5,24.5];function jd(ye){requestAnimationFrame(jd);let vt=performance.now();mn&&(mn=!1,jn());let it=Math.min(.05,Math.max(0,(ye-ys)/1e3));ys=ye,xt+=it,q.steer=0,(Z.ArrowLeft||Z.a||Z.A)&&(q.steer=-1),(Z.ArrowRight||Z.d||Z.D)&&(q.steer=1),(Z.ArrowUp||Z.w||Z.W)&&(q.mult=$t(q.mult*Math.exp(it*.9),ze,Ee)),(Z.ArrowDown||Z.s||Z.S)&&(q.mult=$t(q.mult*Math.exp(-it*.9),ze,Ee)),re&&Math.abs(re.y-re.sy)<30&&(q.steer=re.x<innerWidth/2?-1:1),q.steer&&(q.lastInput=ye,q.uHome=q.u);let sn=No(gt.k);q.s-sn>24&&(gt.k++,sn=No(gt.k),Object.assign(gt,{phase:"idle",raise:1,decided:!1}));let ei=al(sn),Sn=sn-q.s;ei&&!gt.decided&&Sn<150&&(gt.decided=!0,Sn>75&&Ge&&q.speed*q.speed/2.5<Sn-14&&(ot.has("xing")||Rn(gt.k,99)<.8)&&(gt.phase="warn",we.start(sn,Rn(gt.k,7)<.5?1:-1,16))),gt.phase==="warn"?(gt.raise=Math.max(0,gt.raise-it/6),we.st.cleared&&(gt.phase="clear",gt.t2=0)):gt.phase==="clear"?(gt.raise=Math.max(0,gt.raise-it/6),(gt.t2+=it)>2.2&&(gt.phase="raise")):gt.phase==="raise"&&(gt.raise=Math.min(1,gt.raise+it/5),gt.raise>=1&&(gt.phase="idle"));let rn=gt.phase==="warn"||gt.phase==="clear"||gt.phase==="raise"&&gt.raise<.25,rs=Bn(q.s,"speed")*q.mult*(Ge?1:.55);if(gt.phase!=="idle"&&gt.raise<.8&&Sn>0){let Re=Sn-11.2,st=Re>0?Math.sqrt(2*1.25*Re):0;rs=Math.min(rs,st),q.speed=Math.min(q.speed,st)}ot.has("park")&&(rs=0,q.speed=0),q.speed+=(rs-q.speed)*Math.min(1,it*.5),q.s+=q.speed*it,q.dist+=q.speed*it;let Il=Bn(q.s,"rw");q.steer?q.u=$t(q.u+q.steer*it*2.4,-Il+.85,Il-.85):ye-q.lastInput>3e3&&(q.u+=($t(q.uHome,-Il+.85,Il-.85)+Math.sin(xt/11)*.1-q.u)*Math.min(1,it*.9)),!q.todPaused&&Ge&&(q.tod=(q.tod+it/480*(se.night>.5?1.7:1))%1),Dg(q.tod),We.update(it);let Wn=We.W.ov,_s=We.W.rain;Ug(Wn,_s),De=$t(De+(_s>.25?it/18:-it/120),0,1);let Qd=performance.now();pe.update(q.s,Ge?3.5:14);let e0=performance.now();if($.at(q.s,Tt),Math.abs(Tt.x-pe.origin.x)>900||Math.abs(Tt.z-pe.origin.z)>900){let Re=Math.round(Tt.x)-pe.origin.x,st=Math.round(Tt.z)-pe.origin.z;pe.setOrigin(Math.round(Tt.x),Math.round(Tt.z)),lr.x-=Re,lr.z-=st,Ns.x-=Re,Ns.z-=st,nt.shift&&nt.shift(Re,st),me.shift(Re,st),Ue.shift(Re,st)}let Vi=pe.origin.x,Gi=pe.origin.z,R1=($.at(q.s+1.5,Nt).y-$.at(q.s-1.5,zt).y)/3,C1=(Nt.h-zt.h)/3;if(Te.group.position.set(Tt.x+Tt.rx*q.u-Vi,Tt.y+.01,Tt.z+Tt.rz*q.u-Gi),it>0){let Re=Ct.vu+((q.u-Ct.u)/it-Ct.vu)*Math.min(1,it*6),st=(Re-Ct.vu)/it;Ct.u=q.u,Ct.vu=Re,Ct.lat=st-q.speed*q.speed*C1,Ct.lon+=((q.speed-Ct.v)/it-Ct.lon)*Math.min(1,it*8),Ct.v=q.speed;let rt=gt.phase!=="idle"&&Sn>0&&Sn<20&&q.speed<.5;if(Ct.brake=Ct.lon<-.6||rt?1:Ct.lon>-.3?0:Ct.brake,Ct.yaw=-$t(Math.atan(Re/Math.max(q.speed,6))*.8,-.1,.1),Ct.road=.004*Math.sin(q.s*.48)+.003*Math.sin(q.s*.86+1.3),Ct.jolt=Ct.kick=0,ei)for(let St=0;St<4;St++)for(let Yt=0;Yt<2;Yt++){let Zt=sn+w1[St]-Jd[Yt];if(Ct.s<Zt&&q.s>=Zt){let jt=.05+Math.min(q.speed,25)*.004;Ct.jolt+=jt,Ct.kick+=Yt?jt*.9:-jt*.9,pn&&pn.bump(.25+Math.min(q.speed,25)/50)}}{let St=Math.round((q.s-Uo)/Ir);St!==Ct.rk&&(Ct.rk=St,Ct.rb=Ni(q.s));let Yt=Ct.rb;if(Yt)for(let Zt=0;Zt<2;Zt++)for(let jt=0;jt<2;jt++){let li=Yt.s+A1[Zt]-Jd[jt];if(Ct.s<li&&q.s>=li){let Nn=.035+Math.min(q.speed,25)*.003;Ct.jolt+=Nn,Ct.kick+=jt?Nn*.9:-Nn*.9,pn&&pn.bump(.2+Math.min(q.speed,25)/60)}}}Ct.s=q.s}Te.group.rotation.set(-Math.atan(R1),Tt.h+Ct.yaw,0);let hr=Ui(q.s);hr&&Math.abs(q.s-hr.s)<700?($.at(hr.s-xn,Nt),Be.uTunA.value.set(Nt.x-Vi,Nt.y,Nt.z-Gi),$.at(hr.s+xn,Nt),Be.uTunB.value.set(Nt.x-Vi,Nt.y,Nt.z-Gi),Be.uTunR.value=Bn(hr.s,"rw")+1.7):(Be.uTunA.value.set(0,-1e4,0),Be.uTunB.value.set(0,-1e4,0));let vh=hr&&Math.abs(q.s+1-hr.s)<xn-1.5?1:0;Ft+=(vh-Ft)*Math.min(1,it*(vh?1.6:.7)),Be.uCarPos.value.set(Te.group.position.x+Tt.fx*1.7,Te.group.position.y+.8,Te.group.position.z+Tt.fz*1.7),Be.uCarFwd.value.set(Tt.fx,-.05,Tt.fz).normalize(),Be.uHead.value=vh,Te.update(it,q.speed,Math.max(se.night,Ft),_s,Ct,Qo),fe.update(ei&&Sn>-24&&Sn<700?Qu($,sn):null,pe.origin,gt.raise,rn,xt),we.update(it,$,pe.origin,Et(.15,.8,se.night),Bn(sn,"rw")+3.2);let xh=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Re,st,rt,St]=ot.get("rig").split(",").map(Number);Object.assign(xh[0],{back:Re,up:st,ahead:rt,lookY:St})}let fr=new H,ea=6,t0=q.cam===2;if(q.cam===4){Ye.t+=it;{let rt=Ui(q.s+30);rt&&Math.abs(q.s+30-rt.s)<dn+70&&Ye.type!=="chase"&&Ye.type!=="eye"&&(Ye.type="chase",Ye.t=0,Ye.dur=20,Ri=!1)}(Ye.t>Ye.dur+(Ye.type==="road"?8:0)||Ye.type==="road"&&Ye.anchor&&q.s>Ye.anchor.s+24)&&yt();let Re=Te.group.position,st=Ye.type;if(st==="chase"||st==="eye"){let rt=xh[st==="eye"?2:0];t0=st==="eye",$.at(q.s-rt.back,zt),$.at(q.s+rt.ahead,Nt),Gn.set(zt.x+zt.rx*q.u*rt.cu-Vi,zt.y+rt.up,zt.z+zt.rz*q.u*rt.cu-Gi),fr.set(Nt.x+Nt.rx*q.u*rt.lu-Vi,Nt.y+rt.lookY,Nt.z+Nt.rz*q.u*rt.lu-Gi)}else if(st==="side"){$.at(q.s+1.5,zt);let rt=Lt(q.s),St=rt.city+rt.sakura>.5,Yt=Bn(q.s,"rw"),Zt=Ye.sideSign>0?Yt+(St?1.45:3.4):-(Yt+1.5),jt=zt.y+Qs(q.s+1.5,Zt,zt.y,Yt);Gn.set(zt.x+zt.rx*Zt-Vi,Math.max(jt+1.55,zt.y+1.25),zt.z+zt.rz*Zt-Gi),fr.set(Re.x+Tt.fx*2.5,Re.y+.9,Re.z+Tt.fz*2.5),ea=4}else if(st==="road"&&Ye.anchor)Gn.set(Ye.anchor.x-Vi,Ye.anchor.y,Ye.anchor.z-Gi),fr.set(Re.x,Re.y+.85,Re.z),ea=30;else{$.at(q.s-20,zt),$.at(q.s+34,Nt);let rt=14+Math.min(Ye.t,20)*.35;Gn.set(zt.x+zt.rx*q.u*.4-Vi,zt.y+rt,zt.z+zt.rz*q.u*.4-Gi),fr.set(Nt.x-Vi,Nt.y+1,Nt.z-Gi),ea=3}}else{let Re=xh[q.cam];$.at(q.s-Re.back,zt),$.at(q.s+Re.ahead,Nt);let st=q.u*Re.cu,rt=st+(Re.side||0);Gn.set(zt.x+zt.rx*rt-Vi,zt.y+Re.up,zt.z+zt.rz*rt-Gi),fr.set(Nt.x+Nt.rx*q.u*Re.lu-Vi,Nt.y+Re.lookY,Nt.z+Nt.rz*q.u*Re.lu-Gi)}Te.group.visible=!t0,q.cam===3?S.up.set(Tt.fx,0,Tt.fz):S.up.set(0,1,0),Ri||(lr.copy(Gn),Ns.copy(fr),Ri=!0);let n0=1+Math.max(0,q.speed-12)/12;lr.lerp(Gn,1-Math.exp(-it*ea*n0)),Ns.lerp(fr,1-Math.exp(-it*Math.min(ea,8)*n0));{let Re=q.cam===3?0:Math.min($t((q.speed-16)*.22,0,11),Math.max(0,84-_n));bt+=(Re-bt)*Math.min(1,it*1.5),Math.abs(S.fov-(_n+bt))>.02&&(S.fov=_n+bt,S.updateProjectionMatrix())}S.position.copy(lr),S.lookAt(Ns),ot.has("yaw")&&S.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&S.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),cr.set(Tt.fx,0,Tt.fz),Or.set(Tt.rx,0,Tt.rz);{let Re=Te.group.position,st=S.position.x-Re.x,rt=S.position.z-Re.z,St=q.cam===4&&Ye.type!=="chase"&&Ye.type!=="eye",Yt=q.s+st*Tt.fx+rt*Tt.fz-(St?10:0),Zt=St||Jo?40:Math.tan(S.fov*Math.PI/360)*S.aspect*1.08;Ae.update($,Yt,q.u+st*Tt.rx+rt*Tt.rz,pe.origin.x,pe.origin.z,Bn(q.s,"rw"),Zt),q.grass||Ae.hide()}let Kt=Lt(q.s),yh=1+.25*se.bright*(1-Ft);M.color.copy(se.sunCol),M.intensity=se.sunI/yh;{let Re=se.lightDir;if(v.angleTo(Re)>.1){let Nn=0;if(Ge&&!q.todPaused)for(let ti=1;ti<=60&&!(Ud(q.tod+ti*.001,C).angleTo(Re)>.09);ti++)Nn=ti;Ud(q.tod+Nn*.001,v),L=D=0}E.crossVectors(R,v).normalize(),_.crossVectors(v,E),T.set(Te.group.position.x+Tt.fx*26,Te.group.position.y,Te.group.position.z+Tt.fz*26),M.target.position.copy(T),M.position.copy(T).addScaledVector(Re,200);let st=2*c/M.shadow.mapSize.x,rt=v.x/v.y-Re.x/Re.y,St=v.z/v.y-Re.z/Re.y;st!==U&&(U=st,L=D=0);{let Nn=Math.round(Te.group.position.y);if(A===null)A=Nn;else if(Math.abs(Te.group.position.y-A)>3){let ti=Nn-A;L-=ti*(rt*E.x+St*E.z),D-=ti*(rt*_.x+St*_.z),A=Nn}}let Yt=pe.origin.x,Zt=pe.origin.z,jt=T.dot(E)+Yt*E.x+Zt*E.z-L,li=T.dot(_)+Yt*_.x+Zt*_.z-D;T.addScaledVector(E,Math.round(jt/st)*st-jt).addScaledVector(_,Math.round(li/st)*st-li),P.copy(T),w.copy(T).addScaledVector(v,200),f.set(1,rt,0,-A*rt,0,1,0,0,0,St,1,-A*St,0,0,0,1)}k.target.position.set(Te.group.position.x,Te.group.position.y+.9,Te.group.position.z),k.position.copy(k.target.position).addScaledVector(se.lightDir,12),z.color.copy(se.hemiSky),z.groundColor.copy(se.hemiGround),z.intensity=se.hemiI/yh;{let Re=(1-se.night)*(1-Wn);if(Re>.001){S.getWorldDirection(ge);let st=ge.x,rt=ge.z,St=Math.hypot(st,rt)||1,Yt=se.sunDir,Zt=0;for(let li=-2;li<=2;li++){let Nn=li*.3,ti=Math.cos(Nn),dr=Math.sin(Nn),Hr=(st*ti-rt*dr)/St,Vr=(st*dr+rt*ti)/St,ta=Math.max(0,Hr*Yt.x+Vr*Yt.z),Gr=ta*ta;Zt+=Gr*Gr*Gr}let jt=Zt/5*(.1+.35*se.warm)*1.4*Re*he;se.fog.r+=se.sunCol.r*jt,se.fog.g+=se.sunCol.g*jt,se.fog.b+=se.sunCol.b*jt}}b.fog.color.copy(se.fog);let i0=(Kt.city*.0022+Kt.sakura*.0019+Kt.coast*.0011+Kt.country*.0014+Kt.mountain*.0017+Kt.snow*.0021)*(1+se.night*.25);b.fog.near=i0*(1+.55*Wn+.45*_s),b.fog.far=pe.ahead*.92,Be.uSkyHor.value.copy(se.horizon),Be.uSkyZen.value.copy(se.zenith),Be.uTime.value=xt,Be.uWet.value=De*(1-Kt.snow),Be.uSakWet.value=Q,Qo=Math.max(Be.uWet.value,Be.uSakWet.value*Kt.sakura)*(1-Ft);{let Re=(Be.uWet.value>.04||Be.uSakWet.value*Math.max(Kt.sakura,fm(q.s+120,"sakura"))>.04)&&n!=="low"&&Ft<.5&&N!=="0";if(de.refl.enabled=Re&&N!=="taps",Be.uReflOn.value=Re&&N!=="copy"?1:0,Re){S.getWorldDirection(te),te.y=0,te.normalize(),be.copy(S.position).addScaledVector(te,1e4).project(S),Be.uHorizon.value=be.y*.5+.5;let st=Math.max(.5,S.position.y-Te.group.position.y);Be.uReflK.value=$t(1-2*st/(5+st),.05,1)}}Be.uOrigin.value.set(pe.origin.x,pe.origin.z),Be.uWind.value=1+.8*_s,Be.uCloudSh.value=(1-Wn)*Et(.04,.3,se.sunEl)*(1-se.night),Be.uCloudSh.value>.001&&Fe.update(e,S.position.x,S.position.z,pe.origin.x,pe.origin.z);let vi=Oe.material.uniforms;if(vi.uBright.value=se.bright,vi.uNight.value=se.night,vi.uWarm.value=se.warm,vi.uTime.value=xt,vi.uCirrusCol.value.copy(se.cLit).lerp(se.horizon,.25),vi.uCirrus.value=.6*(1-Wn)*(1-.65*Et(.4,.9,se.night)),vi.uOvercast.value=Wn,vi.uMilky.value=Et(.55,.95,se.night)*(1-Wn),se.night>.65&&Wn<.3&&gi.p<0&&(gi.next-=it)<0){let Re=Math.atan2(Tt.fx,Tt.fz)+(Math.random()-.5)*1.5,st=.45+Math.random()*.6,rt=.22+Math.random()*.2,St=(Math.random()-.5)*.6,Yt=(Zt,jt)=>new H(Math.cos(Zt)*Math.sin(jt),Math.sin(Zt),Math.cos(Zt)*Math.cos(jt));gi.a.copy(Yt(st,Re)),gi.b.copy(Yt(st-rt,Re+St)),gi.p=0,gi.next=ot.has("meteors")?1:6+Math.random()*20}gi.p>=0&&(gi.p+=it/.85,gi.p>1.3&&(gi.p=-1)),vi.uMetP.value=gi.p,vi.uMetA.value.copy(gi.a),vi.uMetB.value.copy(gi.b),vi.uDeckLit.value.copy(se.horizon).lerp(se.cLit,.35),vi.uDeckDark.value.copy(se.zenith).lerp(se.horizon,.25).multiplyScalar(.82),Oe.position.copy(S.position);{let Re=!!ie&&(q.pclouds!==0||!ee);ie&&(ie.mesh.visible=Re,Re&&ie.update(S,it)),ee&&(ee.group.visible=!Re,Re||ee.update(S.position,it))}let P1=F&&q.band!==0?F.update(S,Js(q.s+200),Math.max(1,S.position.y-Tt.y+.45),b.fog.near,b.fog.far):0;F&&q.band===0&&(F.mesh.visible=!1),Je.update(S.position,Math.max(Kt.snow,Lt(q.s+600).snow*.7),1-P1);let Ll=0;for(let Re of[-150,0,250,500,800])Ll=Math.max(Ll,Lt(q.s+Re).coast);je.mesh.visible=Ll>.001,je.update(S.position,xt,i0*.8,Et(0,.35,Ll),de.grade.uniforms),ve.uniforms.uTime.value=xt,ve.uniforms.uFogD.value=b.fog.near,ve.uniforms.uNight.value=se.night,ve.uniforms.uSpecK.value=1-se.overcast*.85,Be.uSunDir.value.copy(se.lightDir),Be.uSunCol.value.copy(se.sunCol);let Pi=Et(.15,.8,se.night);Me.atlas.emissiveIntensity=.1+Pi*1.05,Be.uBacklit.value=I*1.6*(1-Wn)*(1-se.night)*Et(0,.08,se.sunEl)*(1-Et(.25,.55,se.sunEl))*(1-Ft),Be.uGhShade.value.set(At(.8,.3,se.bright),At(.8,.85,se.bright),At(.8,1.7,se.bright)),Ei.tex&&Ei.uFieldC.value.set(At(J[0],Ne[0],se.bright),At(J[1],Ne[1],se.bright),At(J[2],Ne[2],se.bright)),Be.uBlShade.value.set(At(W[0],G[0],se.bright),At(W[1],G[1],se.bright),At(W[2],G[2],se.bright)),Be.uLightsOn.value=ce>=0?ce:Math.max(Et(.02,.75,se.night),.3*Wn),Me.lamp.color.setRGB(.9,.86,.74).lerp(T1,Pi),Me.pool.opacity=Pi*.42*(1+.8*De);{let Re=Te.group.position,st=Te.lamps,rt=Math.max(Pi,Ft),St=0,Yt=0,Zt=0,jt=-1e3,li=0,Nn=0,ti=-1e3,dr=0,Hr=900,Vr=900;if(rt>.01){let o0=Math.floor(q.s/Vt);for(let _h=o0-1;_h<=o0+1;_h++){let Nl=pe.chunks.get(_h);if(!Nl||!Nl.lamps)continue;let na=Nl.lamps,a0=Nl.group.position;for(let Wr=0;Wr<na.length;Wr+=4){let bh=na[Wr]+a0.x,Mh=na[Wr+1],Sh=na[Wr+2]+a0.z,Eh=(bh-Re.x)**2+(Mh-Re.y)**2+(Sh-Re.z)**2,Ul=na[Wr+3]/(1+.045*Eh);Ul>St?(Yt=St,Vr=Hr,Nn=Zt,ti=jt,dr=li,St=Ul,Hr=Eh,Zt=bh,jt=Mh,li=Sh):Ul>Yt&&(Yt=Ul,Vr=Eh,Nn=bh,ti=Mh,dr=Sh)}}S.updateMatrixWorld()}let ta=rt*St*(1+.045*Hr)*(1-Et(18,30,Math.sqrt(Hr))),Gr=rt*Yt*(1+.045*Vr)*(1-Et(18,30,Math.sqrt(Vr)));st[0].set(Zt,jt,li,1).applyMatrix4(S.matrixWorldInverse).w=ta,st[1].set(Nn,ti,dr,1).applyMatrix4(S.matrixWorldInverse).w=Gr,Te.lampCol.setRGB(1,.8-.32*Ft,.52-.38*Ft),zi.uLampW.value[0].set(Zt,jt,li,ta),zi.uLampW.value[1].set(Nn,ti,dr,Gr),zi.uLampCol.value.copy(Te.lampCol),Te.head.getWorldPosition(zi.uHeadPos.value),Te.head.target.getWorldPosition(ge),zi.uHeadDir.value.copy(ge).sub(zi.uHeadPos.value).normalize(),zi.uHeadI.value=Te.head.intensity/60}Me.pool.visible=Me.pool.opacity>.003,pe.lod(q.s,Dt,Pi>.15,mi),Be.uNight.value=Pi,de.bloom.strength=At(.32,.55,Pi),de.bloom.threshold=At(1.35,.95,Pi),de.bloom.radius=At(.55,.35,Pi);{let Re=Math.max(Pi,Ft,Et(.25,.6,se.warm)*(1-Wn));de.bloom.enabled=V&&Re>.02,de.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=At(1,1.15,Pi)*(1+.35*Ft)*yh,Gn.copy(S.position).addScaledVector(se.sunDir,1e3).project(S);let Us=de.grade.uniforms,I1=Gn.z<1?1:0,L1=Math.max(Math.abs(Gn.x),Math.abs(Gn.y));Us.uSun.value.set(Gn.x*.5+.5,Gn.y*.5+.5),Us.uSunVis.value=I1*(1-Et(1,1.9,L1))*Et(-.02,.15,se.sunEl)*(1-se.night)*(1-Wn)*(1-Ft),Us.uSat.value=1.22-.24*Wn,Us.uVig.value=.55-.43*se.bright,Us.uLo.value.set(-.014+.026*se.bright,0,.03),Us.uDay.value=Ut(),Us.uWarm.value=se.warm,Us.uTime.value=xt,Ce.update(S.position,xt,_s*(1-Ft)*(1-Kt.snow),Ut());{let Re=Ui(q.s+190),st=(Kt.city+Kt.country+Kt.coast)*(1-Wn)*(1-De)*Et(.6,.9,se.sunEl)*(q.mirage??1)*(Re&&Math.abs(q.s+190-Re.s)<330?0:1);Qe.update($,q.s,pe.origin.x,pe.origin.z,Bn(q.s+150,"rw"),st,xt,se.horizon)}{let Re=$t(Kt.snow+Kt.mountain*.6*Math.max(se.night,1-Et(.27,.36,q.tod)),0,1)*(1-Ft);at.copy(se.fog).multiplyScalar(.92),Y.copy(se.sunCol).multiplyScalar(Math.min(1,se.sunI/3)*(1-Wn)*.6);let st=Math.cos(Te.group.rotation.y),rt=Math.sin(Te.group.rotation.y),St=Te.group.position;Le.set(St.x-1.75*rt,St.y+.95,St.z-1.75*st,Math.max(se.night,Ft)*(.5+1.2*Ct.brake)),Ue.update(it,Te.group,q.speed,Be.uWet.value*(1-Ft),Kt.snow*(1-Ft),Re,at,Y,Le,S.position,q.spray)}Ie.update(S.position,xt,Kt.snow*(.3+.7*Wn)*(1-Ft),Ut()),me.setFog(b.fog.near),me.update(it,xt,S.position,cr,Or,Kt,Ut(),_s,Te.group.position);let D1=performance.now();nt.update(it,xt,S.position,cr,Or,Kt.sakura*(1-Ft),Tt.y,Pi,(Kt.country+Kt.sakura*.4)*(1-_s)*(1-Ft),Kt.mountain*(1-Ft));let N1=performance.now();if(pn){$.at(sn,Nt);let Re=Math.hypot(Nt.x-pe.origin.x-S.position.x,Nt.z-pe.origin.z-S.position.z),st=we.st.active?we.group.position.distanceTo(S.position):1e9,rt=q.speed/15;pn.update(rt<1.5?rt:1.5+(rt-1.5)*.4,Kt,Ut(),{rush:$t((q.speed-25)/40,0,1),bell:rn?Math.pow($t(1-Re/260,0,1),1.5):0,train:Math.pow($t(1-st/230,0,1),2),rain:_s*(1-Ft)*(1-Kt.snow),wetRoad:Be.uWet.value*(1-Ft),speed:q.speed,load:$t(Ct.lon/3,0,1),roof:q.cam!==2,tunnel:Ft,water:(()=>{let St=Ni(q.s);return Math.max(St?1-Et(12,150,Math.abs(q.s-St.s)):0,Kt.mountain*.45)})(),dusk:se.warm*(q.tod>.5?1:.3)})}Pl(an(q.s+40)),Mt&&(e.info.autoReset=!1,e.info.reset());let Dl=null;Mt&&Mt.tq&&(Dl=Mt.gl.createQuery(),Mt.gl.beginQuery(Mt.tq.TIME_ELAPSED_EXT,Dl));let s0=performance.now();de.composer.render(it);let r0=performance.now();if(Dl){let Re=Mt.gl;for(Re.endQuery(Mt.tq.TIME_ELAPSED_EXT),Mt.pend.push(Dl);Mt.pend.length&&Re.getQueryParameter(Mt.pend[0],Re.QUERY_RESULT_AVAILABLE);){let st=Mt.pend.shift(),rt=Re.getQueryParameter(st,Re.QUERY_RESULT);Re.deleteQuery(st),Re.getParameter(Mt.tq.GPU_DISJOINT_EXT)||(Mt.gpu=rt/1e6,Mt.gpuN++,Mt.gpuSum+=Mt.gpu,Mt.gpu>Mt.gpuMax&&(Mt.gpuMax=Mt.gpu))}}let kr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(kr.world=kr.world*.95+(e0-Qd)*.05,kr.parts=kr.parts*.95+(N1-D1)*.05,kr.render=kr.render*.95+(r0-s0)*.05,Ci=Ci*.95+(performance.now()-vt)*.05,window.__ft=Ci,Mt){let Re=e.info,st=performance.now()-vt,rt={t:+xt.toFixed(2),s:Math.round(q.s),total:+st.toFixed(1),world:+(e0-Qd).toFixed(1),render:+(r0-s0).toFixed(1),gpu:+(Mt.gpu||0).toFixed(1),progs:Re.programs.length-Mt.progs,geos:Re.memory.geometries-Mt.geos,tex:Re.memory.textures-Mt.tex,calls:Re.render.calls,tris:Re.render.triangles};rt.progs>0&&Ge&&(rt.newProgs=Re.programs.slice(-rt.progs).map(St=>(St.name||"")+":"+String(St.cacheKey).slice(0,60))),Mt.progs=Re.programs.length,Mt.geos=Re.memory.geometries,Mt.tex=Re.memory.textures,Mt.frames++,Mt.sum+=st,st>Mt.max&&(Mt.max=st),st>12&&Ge&&Mt.spikes.push(rt),Mt.last=rt}if((Cl+=it)>.25){Cl=0,Tl.textContent=Math.round(q.speed*3.6),zr.textContent=(q.dist/1e3).toFixed(1);let Re=Math.floor(q.tod*1440);wl.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}nn++,Ge&&nn>150&&it>.03?ai+=it:ai=Math.max(0,ai-it*.5),ai>3&&!ot.has("q")&&(ai=0,Hi())}window.__dbg={renderer:e,st:q,scene:b,camera:S,world:pe,TOD:se,KEYS:Ho,X:gt,train:we,weather:We,U:Be,birds:me,cine:Ye,post:de,car:Te,sun:M,M:Me,clouds:ee,pclouds:ie,band:F,sky:Oe,mountains:Je,shadowDir:v,CM:Ct,spray:Ue,grass:Ae,get audio(){return pn}},Ko(""),ur.classList.add("ready"),ot.has("auto")&&B(),requestAnimationFrame(jd)}MS().catch(s=>{console.error(s),Ko("Something went wrong: "+s.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
