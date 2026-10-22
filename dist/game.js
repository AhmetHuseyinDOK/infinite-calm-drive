var Hf=0,Nu=1,Vf=2;var zs=1,Gf=2,Fr=3,vs=0,En=1,Mn=2,Xn=0,Br=1,Yi=2,Uu=3,Fu=4,Wf=5;var ks=100,Xf=101,qf=102,Yf=103,Zf=104,$f=200,Jf=201,Kf=202,jf=203,Bu=204,Ou=205,Qf=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,od=213,ad=214,Ka=0,ja=1,Qa=2,Tr=3,el=4,tl=5,nl=6,il=7,zu=0,ld=1,cd=2,Mi=0,ku=1,Hu=2,Vu=3,Gu=4,Wu=5,Xu=6,Yo=7;var qu=300,xs=301,Hs=302,Cl=303,Pl=304,Zo=306,Er=1e3,Ci=1001,sl=1002,on=1003,ud=1004;var $o=1005;var Wt=1006,Il=1007;var qn=1008;var In=1009,Yu=1010,Zu=1011,Or=1012,Ll=1013,bi=1014,ci=1015,cn=1016,Dl=1017,Nl=1018,zr=1020,$u=35902,Ju=35899,Ku=1021,ju=1022,Yn=1023,Pi=1026,_s=1027,Vs=1028,Ul=1029,ys=1030,Fl=1031;var Bl=1033,Jo=33776,Ko=33777,jo=33778,Qo=33779,Ol=35840,zl=35841,kl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37488,ql=37489,ea=37490,Yl=37491,Zl=37808,$l=37809,Jl=37810,Kl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,uc=36495,hc=36283,fc=36284,ta=36285,dc=36286;var Eo=2300,rl=2301,$a=2302,Eu=2303,wu=2400,Au=2401,Ru=2402;var hd=3200;var pc=0,fd=1,Si="",jt="srgb",wo="srgb-linear",Ao="linear",It="srgb";var Ja=7680;var dd=519,pd=512,md=513,gd=514,mc=515,vd=516,xd=517,gc=518,_d=519,yd=35044;var Qu="300 es",_i=2e3,wr=2001;function zp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Ro("canvas");return i.style.display="block",i}var pf={},Ar=null;function eh(...i){let e="THREE."+i.shift();Ar?Ar("log",e,...i):console.log(e,...i)}function bd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=bd(i);let e="THREE."+i.shift();if(Ar)Ar("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=bd(i);let e="THREE."+i.shift();if(Ar)Ar("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in pf||(pf[e]=!0,at(...i))}function Sd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Td={[Ka]:ja,[Qa]:nl,[el]:il,[Tr]:tl,[ja]:Ka,[nl]:Qa,[il]:el,[tl]:Tr},Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var tu=Math.PI/180,Co=180/Math.PI;function na(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Hp(i,e){return(i%e+e)%e}function nu(i,e,t){return(1-t)*i+t*e}function vo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var qe=rh,yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let f=n[s+0],o=n[s+1],u=n[s+2],h=n[s+3],c=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||f!==c||o!==d||u!==m){let g=f*c+o*d+u*m+h*x;g<0&&(c=-c,d=-d,m=-m,x=-x,g=-g);let p=1-l;if(g<.9995){let v=Math.acos(g),b=Math.sin(v);p=Math.sin(p*v)/b,l=Math.sin(l*v)/b,f=f*p+c*l,o=o*p+d*l,u=u*p+m*l,h=h*p+x*l}else{f=f*p+c*l,o=o*p+d*l,u=u*p+m*l,h=h*p+x*l;let v=1/Math.sqrt(f*f+o*o+u*u+h*h);f*=v,o*=v,u*=v,h*=v}}e[t]=f,e[t+1]=o,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],f=n[s+1],o=n[s+2],u=n[s+3],h=r[a],c=r[a+1],d=r[a+2],m=r[a+3];return e[t]=l*m+u*h+f*d-o*c,e[t+1]=f*m+u*c+o*h-l*d,e[t+2]=o*m+u*d+l*c-f*h,e[t+3]=u*m-l*h-f*c-o*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,f=Math.sin,o=l(n/2),u=l(s/2),h=l(r/2),c=f(n/2),d=f(s/2),m=f(r/2);switch(a){case"XYZ":this._x=c*u*h+o*d*m,this._y=o*d*h-c*u*m,this._z=o*u*m+c*d*h,this._w=o*u*h-c*d*m;break;case"YXZ":this._x=c*u*h+o*d*m,this._y=o*d*h-c*u*m,this._z=o*u*m-c*d*h,this._w=o*u*h+c*d*m;break;case"ZXY":this._x=c*u*h-o*d*m,this._y=o*d*h+c*u*m,this._z=o*u*m+c*d*h,this._w=o*u*h-c*d*m;break;case"ZYX":this._x=c*u*h-o*d*m,this._y=o*d*h+c*u*m,this._z=o*u*m-c*d*h,this._w=o*u*h+c*d*m;break;case"YZX":this._x=c*u*h+o*d*m,this._y=o*d*h+c*u*m,this._z=o*u*m-c*d*h,this._w=o*u*h-c*d*m;break;case"XZY":this._x=c*u*h-o*d*m,this._y=o*d*h-c*u*m,this._z=o*u*m+c*d*h,this._w=o*u*h+c*d*m;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],f=t[9],o=t[2],u=t[6],h=t[10],c=n+l+h;if(c>0){let d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(u-f)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(n>l&&n>h){let d=2*Math.sqrt(1+n-l-h);this._w=(u-f)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>h){let d=2*Math.sqrt(1+l-n-h);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(f+u)/d}else{let d=2*Math.sqrt(1+h-n-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(f+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,f=t._y,o=t._z,u=t._w;return this._x=n*u+a*l+s*o-r*f,this._y=s*u+a*f+r*l-n*o,this._z=r*u+a*o+n*f-s*l,this._w=a*u-n*l-s*f-r*o,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let f=1-t;if(l<.9995){let o=Math.acos(l),u=Math.sin(o);f=Math.sin(f*o)/u,t=Math.sin(t*o)/u,this._x=this._x*f+n*t,this._y=this._y*f+s*t,this._z=this._z*f+r*t,this._w=this._w*f+a*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+s*t,this._z=this._z*f+r*t,this._w=this._w*f+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,f=e.w,o=2*(a*s-l*n),u=2*(l*t-r*s),h=2*(r*n-a*t);return this.x=t+f*o+a*h-l*u,this.y=n+f*u+l*o-r*h,this.z=s+f*h+r*u-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,f=t.z;return this.x=s*f-r*l,this.y=r*a-n*f,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var k=oh,iu=new k,mf=new yn,ah=class ah{constructor(e,t,n,s,r,a,l,f,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,f,o)}set(e,t,n,s,r,a,l,f,o){let u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=f,u[6]=n,u[7]=a,u[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],f=n[6],o=n[1],u=n[4],h=n[7],c=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],b=s[4],_=s[7],y=s[2],S=s[5],R=s[8];return r[0]=a*x+l*v+f*y,r[3]=a*g+l*b+f*S,r[6]=a*p+l*_+f*R,r[1]=o*x+u*v+h*y,r[4]=o*g+u*b+h*S,r[7]=o*p+u*_+h*R,r[2]=c*x+d*v+m*y,r[5]=c*g+d*b+m*S,r[8]=c*p+d*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],f=e[6],o=e[7],u=e[8];return t*a*u-t*l*o-n*r*u+n*l*f+s*r*o-s*a*f}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],f=e[6],o=e[7],u=e[8],h=u*a-l*o,c=l*f-u*r,d=o*r-a*f,m=t*h+n*c+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*o-u*n)*x,e[2]=(l*n-s*a)*x,e[3]=c*x,e[4]=(u*t-s*f)*x,e[5]=(s*r-l*t)*x,e[6]=d*x,e[7]=(n*f-o*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let f=Math.cos(r),o=Math.sin(r);return this.set(n*f,n*o,-n*(f*a+o*l)+a+e,-s*o,s*f,-s*(-o*a+f*l)+l+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;var ht=ah,su=new ht,gf=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){let i={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===It&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wo]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:gf,fromXYZ:vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:gf,fromXYZ:vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var bt=Vp();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=Ro("canvas")),cr.width=e.width,cr.height=e.height;let s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,Rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ru(s[a].image)):r.push(ru(s[a]))}else r=ru(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var Wp=0,ou=new k,Fn=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=Wt,a=qn,l=Yn,f=In,o=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=na(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=f,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=qu;Fn.DEFAULT_ANISOTROPY=1;var lh=class lh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,f=e.elements,o=f[0],u=f[4],h=f[8],c=f[1],d=f[5],m=f[9],x=f[2],g=f[6],p=f[10];if(Math.abs(u-c)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+c)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(o+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(o+1)/2,_=(d+1)/2,y=(p+1)/2,S=(u+c)/4,R=(h+x)/4,M=(m+g)/4;return b>_&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=R/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(c-u)*(c-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(c-u)/v,this.w=Math.acos((o+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lh.prototype.isVector4=!0;var St=lh,al=class extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Fn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rl=class Rl{constructor(e,t,n,s,r,a,l,f,o,u,h,c,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,f,o,u,h,c,d,m,x,g)}set(e,t,n,s,r,a,l,f,o,u,h,c,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=f,p[2]=o,p[6]=u,p[10]=h,p[14]=c,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),f=Math.cos(s),o=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let c=a*u,d=a*h,m=l*u,x=l*h;t[0]=f*u,t[4]=-f*h,t[8]=o,t[1]=d+m*o,t[5]=c-x*o,t[9]=-l*f,t[2]=x-c*o,t[6]=m+d*o,t[10]=a*f}else if(e.order==="YXZ"){let c=f*u,d=f*h,m=o*u,x=o*h;t[0]=c+x*l,t[4]=m*l-d,t[8]=a*o,t[1]=a*h,t[5]=a*u,t[9]=-l,t[2]=d*l-m,t[6]=x+c*l,t[10]=a*f}else if(e.order==="ZXY"){let c=f*u,d=f*h,m=o*u,x=o*h;t[0]=c-x*l,t[4]=-a*h,t[8]=m+d*l,t[1]=d+m*l,t[5]=a*u,t[9]=x-c*l,t[2]=-a*o,t[6]=l,t[10]=a*f}else if(e.order==="ZYX"){let c=a*u,d=a*h,m=l*u,x=l*h;t[0]=f*u,t[4]=m*o-d,t[8]=c*o+x,t[1]=f*h,t[5]=x*o+c,t[9]=d*o-m,t[2]=-o,t[6]=l*f,t[10]=a*f}else if(e.order==="YZX"){let c=a*f,d=a*o,m=l*f,x=l*o;t[0]=f*u,t[4]=x-c*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-l*u,t[2]=-o*u,t[6]=d*h+m,t[10]=c-x*h}else if(e.order==="XZY"){let c=a*f,d=a*o,m=l*f,x=l*o;t[0]=f*u,t[4]=-h,t[8]=o*u,t[1]=c*h+x,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=l*u,t[10]=x*h+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xp,e,qp)}lookAt(e,t,n){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ss.crossVectors(n,Kn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ss.crossVectors(n,Kn)),ss.normalize(),Ea.crossVectors(Kn,ss),s[0]=ss.x,s[4]=Ea.x,s[8]=Kn.x,s[1]=ss.y,s[5]=Ea.y,s[9]=Kn.y,s[2]=ss.z,s[6]=Ea.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],f=n[8],o=n[12],u=n[1],h=n[5],c=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],b=n[7],_=n[11],y=n[15],S=s[0],R=s[4],M=s[8],E=s[12],C=s[1],A=s[5],D=s[9],P=s[13],w=s[2],I=s[6],U=s[10],N=s[14],V=s[3],z=s[7],H=s[11],G=s[15];return r[0]=a*S+l*C+f*w+o*V,r[4]=a*R+l*A+f*I+o*z,r[8]=a*M+l*D+f*U+o*H,r[12]=a*E+l*P+f*N+o*G,r[1]=u*S+h*C+c*w+d*V,r[5]=u*R+h*A+c*I+d*z,r[9]=u*M+h*D+c*U+d*H,r[13]=u*E+h*P+c*N+d*G,r[2]=m*S+x*C+g*w+p*V,r[6]=m*R+x*A+g*I+p*z,r[10]=m*M+x*D+g*U+p*H,r[14]=m*E+x*P+g*N+p*G,r[3]=v*S+b*C+_*w+y*V,r[7]=v*R+b*A+_*I+y*z,r[11]=v*M+b*D+_*U+y*H,r[15]=v*E+b*P+_*N+y*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],f=e[9],o=e[13],u=e[2],h=e[6],c=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=f*d-o*c,b=l*d-o*h,_=l*c-f*h,y=a*d-o*u,S=a*c-f*u,R=a*h-l*u;return t*(x*v-g*b+p*_)-n*(m*v-g*y+p*S)+s*(m*b-x*y+p*R)-r*(m*_-x*S+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],f=e[2],o=e[6],u=e[10];return t*(a*u-l*o)-n*(r*u-l*f)+s*(r*o-a*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],f=e[6],o=e[7],u=e[8],h=e[9],c=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*l-n*a,b=t*f-s*a,_=t*o-r*a,y=n*f-s*l,S=n*o-r*l,R=s*o-r*f,M=u*x-h*m,E=u*g-c*m,C=u*p-d*m,A=h*g-c*x,D=h*p-d*x,P=c*p-d*g,w=v*P-b*D+_*A+y*C-S*E+R*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/w;return e[0]=(l*P-f*D+o*A)*I,e[1]=(s*D-n*P-r*A)*I,e[2]=(x*R-g*S+p*y)*I,e[3]=(c*S-h*R-d*y)*I,e[4]=(f*C-a*P-o*E)*I,e[5]=(t*P-s*C+r*E)*I,e[6]=(g*_-m*R-p*b)*I,e[7]=(u*R-c*_+d*b)*I,e[8]=(a*D-l*C+o*M)*I,e[9]=(n*C-t*D-r*M)*I,e[10]=(m*S-x*_+p*v)*I,e[11]=(h*_-u*S-d*v)*I,e[12]=(l*E-a*A-f*M)*I,e[13]=(t*A-n*E+s*M)*I,e[14]=(x*b-m*y-g*v)*I,e[15]=(u*y-h*b+c*v)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,f=e.z,o=r*a,u=r*l;return this.set(o*a+n,o*l-s*f,o*f+s*l,0,o*l+s*f,u*l+n,u*f-s*a,0,o*f-s*l,u*f+s*a,r*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,f=t._w,o=r+r,u=a+a,h=l+l,c=r*o,d=r*u,m=r*h,x=a*u,g=a*h,p=l*h,v=f*o,b=f*u,_=f*h,y=n.x,S=n.y,R=n.z;return s[0]=(1-(x+p))*y,s[1]=(d+_)*y,s[2]=(m-b)*y,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(c+p))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(m+b)*R,s[9]=(g-v)*R,s[10]=(1-(c+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),l=ur.set(s[4],s[5],s[6]).length(),f=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mi.copy(this);let o=1/a,u=1/l,h=1/f;return mi.elements[0]*=o,mi.elements[1]*=o,mi.elements[2]*=o,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=a,n.y=l,n.z=f,this}makePerspective(e,t,n,s,r,a,l=_i,f=!1){let o=this.elements,u=2*r/(t-e),h=2*r/(n-s),c=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(f)m=r/(a-r),x=a*r/(a-r);else if(l===_i)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===wr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=x,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=_i,f=!1){let o=this.elements,u=2/(t-e),h=2/(n-s),c=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(f)m=1/(a-r),x=a/(a-r);else if(l===_i)m=-2/(a-r),x=-(a+r)/(a-r);else if(l===wr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=0,o[12]=c,o[1]=0,o[5]=h,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=m,o[14]=x,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Rl.prototype.isMatrix4=!0;var et=Rl,ur=new k,mi=new et,Xp=new k(0,0,0),qp=new k(1,1,1),ss=new k,Ea=new k,Kn=new k,xf=new et,_f=new yn,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],f=s[1],o=s[5],u=s[9],h=s[2],c=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(f,o)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,o),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yp=0,yf=new k,hr=new yn,zi=new et,wa=new k,xo=new k,Zp=new k,$p=new yn,Mf=new k(1,0,0),bf=new k(0,1,0),Sf=new k(0,0,1),Tf={type:"added"},Jp={type:"removed"},fr={type:"childadded",child:null},au={type:"childremoved",child:null},an=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Gn,n=new yn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new ht}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(xo,wa,this.up):zi.lookAt(wa,xo,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(zi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tf),fr.child=e,this.dispatchEvent(fr),fr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let f=l.shapes;if(Array.isArray(f))for(let o=0,u=f.length;o<u;o++){let h=f[o];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let f=0,o=this.material.length;f<o;f++)l.push(r(e.materials,this.material[f]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let f=this.animations[l];s.animations.push(r(e.animations,f))}}if(t){let l=a(e.geometries),f=a(e.materials),o=a(e.textures),u=a(e.images),h=a(e.shapes),c=a(e.skeletons),d=a(e.animations),m=a(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),o.length>0&&(n.textures=o),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(l){let f=[];for(let o in l){let u=l[o];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,f=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(o,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=o.joints["index-finger-tip"],h=o.joints["thumb-tip"],c=u.position.distanceTo(h.position),d=.02,m=.005;o.inputState.pinching&&c>d+m?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&c<=d-m&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return l!==null&&(l.visible=s!==null),f!==null&&(f.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function lu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Hp(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lu(a,r,e+1/3),this.g=lu(a,r,e),this.b=lu(a,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return bt.workingToColorSpace(Pn.copy(this),e),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),f,o,u=(l+a)/2;if(l===a)f=0,o=0;else{let h=a-l;switch(o=u<=.5?h/(a+l):h/(2-a-l),a){case n:f=(s-r)/h+(s<r?6:0);break;case s:f=(r-n)/h+2;break;case r:f=(n-s)/h+4;break}f/=6}return e.h=f,e.s=o,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=jt){bt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Aa);let n=nu(rs.h,Aa.h,t),s=nu(rs.s,Aa.s,t),r=nu(rs.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new me;me.NAMES=Ed;var Lo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bs=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gi=new k,ki=new k,cu=new k,Hi=new k,dr=new k,pr=new k,Ef=new k,uu=new k,hu=new k,fu=new k,du=new St,pu=new St,mu=new St,cs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),ki.subVectors(n,t),cu.subVectors(e,t);let a=gi.dot(gi),l=gi.dot(ki),f=gi.dot(cu),o=ki.dot(ki),u=ki.dot(cu),h=a*o-l*l;if(h===0)return r.set(0,0,0),null;let c=1/h,d=(o*f-l*u)*c,m=(a*u-l*f)*c;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,a,l,f){return this.getBarycoord(e,t,n,s,Hi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,Hi.x),f.addScaledVector(a,Hi.y),f.addScaledVector(l,Hi.z),f)}static getInterpolatedAttribute(e,t,n,s,r,a){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(du,r.x),a.addScaledVector(pu,r.y),a.addScaledVector(mu,r.z),a}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),ki.subVectors(e,t),gi.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),gi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;dr.subVectors(s,n),pr.subVectors(r,n),uu.subVectors(e,n);let f=dr.dot(uu),o=pr.dot(uu);if(f<=0&&o<=0)return t.copy(n);hu.subVectors(e,s);let u=dr.dot(hu),h=pr.dot(hu);if(u>=0&&h<=u)return t.copy(s);let c=f*h-u*o;if(c<=0&&f>=0&&u<=0)return a=f/(f-u),t.copy(n).addScaledVector(dr,a);fu.subVectors(e,r);let d=dr.dot(fu),m=pr.dot(fu);if(m>=0&&d<=m)return t.copy(r);let x=d*o-f*m;if(x<=0&&o>=0&&m<=0)return l=o/(o-m),t.copy(n).addScaledVector(pr,l);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Ef.subVectors(r,s),l=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(Ef,l);let p=1/(g+x+c);return a=x*p,l=c*p,t.copy(n).addScaledVector(dr,a).addScaledVector(pr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Ca.subVectors(this.max,_o),mr.subVectors(e.a,_o),gr.subVectors(e.b,_o),vr.subVectors(e.c,_o),os.subVectors(gr,mr),as.subVectors(vr,gr),Ls.subVectors(mr,vr);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Ls.z,Ls.y,os.z,0,-os.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-os.y,os.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!gu(t,mr,gr,vr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,mr,gr,vr,Ca))?!1:(Pa.crossVectors(os,as),t=[Pa.x,Pa.y,Pa.z],gu(t,mr,gr,vr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new k,new k,new k,new k,new k,new k,new k,new k],vi=new k,Ra=new ai,mr=new k,gr=new k,vr=new k,os=new k,as=new k,Ls=new k,_o=new k,Ca=new k,Pa=new k,Ds=new k;function gu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ds.fromArray(i,r);let l=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),f=e.dot(Ds),o=t.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(f,o,u),Math.min(f,o,u))>l)return!1}return!0}var rn=new k,Ia=new qe,jp=0,Bt=class extends Ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yd,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array),r=Vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Do=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var No=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qp=new ai,yo=new k,vu=new k,li=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(vu)),this.expandByPoint(yo.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},em=0,oi=new et,xu=new an,xr=new k,jn=new ai,Mo=new ai,_n=new k,yt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?No:Do)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Mo.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(jn.min,Mo.min),jn.expandByPoint(_n),_n.addVectors(jn.max,Mo.max),jn.expandByPoint(_n)):(jn.expandByPoint(Mo.min),jn.expandByPoint(Mo.max))}jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],f=this.morphTargetsRelative;for(let o=0,u=l.count;o<u;o++)_n.fromBufferAttribute(l,o),f&&(xr.fromBufferAttribute(e,o),_n.add(xr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],f=[];for(let M=0;M<n.count;M++)l[M]=new k,f[M]=new k;let o=new k,u=new k,h=new k,c=new qe,d=new qe,m=new qe,x=new k,g=new k;function p(M,E,C){o.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),u.sub(o),h.sub(o),d.sub(c),m.sub(c);let A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(A),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(A),l[M].add(x),l[E].add(x),l[C].add(x),f[M].add(g),f[E].add(g),f[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,E=v.length;M<E;++M){let C=v[M],A=C.start,D=C.count;for(let P=A,w=A+D;P<w;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new k,_=new k,y=new k,S=new k;function R(M){y.fromBufferAttribute(s,M),S.copy(y);let E=l[M];b.copy(E),b.sub(y.multiplyScalar(y.dot(E))).normalize(),_.crossVectors(S,E);let A=_.dot(f[M])<0?-1:1;a.setXYZW(M,b.x,b.y,b.z,A)}for(let M=0,E=v.length;M<E;++M){let C=v[M],A=C.start,D=C.count;for(let P=A,w=A+D;P<w;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);let s=new k,r=new k,a=new k,l=new k,f=new k,o=new k,u=new k,h=new k;if(e)for(let c=0,d=e.count;c<d;c+=3){let m=e.getX(c+0),x=e.getX(c+1),g=e.getX(c+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,m),f.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),l.add(u),f.add(u),o.add(u),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,f.x,f.y,f.z),n.setXYZ(g,o.x,o.y,o.z)}else for(let c=0,d=t.count;c<d;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(c+0,u.x,u.y,u.z),n.setXYZ(c+1,u.x,u.y,u.z),n.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(l,f){let o=l.array,u=l.itemSize,h=l.normalized,c=new o.constructor(f.length*u),d=0,m=0;for(let x=0,g=f.length;x<g;x++){l.isInterleavedBufferAttribute?d=f[x]*l.data.stride+l.offset:d=f[x]*u;for(let p=0;p<u;p++)c[m++]=o[d++]}return new Bt(c,u,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let f=s[l],o=e(f,n);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let f=[],o=r[l];for(let u=0,h=o.length;u<h;u++){let c=o[u],d=e(c,n);f.push(d)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,f=a.length;l<f;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let f=this.parameters;for(let o in f)f[o]!==void 0&&(e[o]=f[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let f in n){let o=n[f];e.data.attributes[f]=o.toJSON(e.data)}let s={},r=!1;for(let f in this.morphAttributes){let o=this.morphAttributes[f],u=[];for(let h=0,c=o.length;h<c;h++){let d=o[h];u.push(d.toJSON(e.data))}u.length>0&&(s[f]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let o in s){let u=s[o];this.setAttribute(o,u.clone(t))}let r=e.morphAttributes;for(let o in r){let u=[],h=r[o];for(let c=0,d=h.length;c<d;c++)u.push(h[c].clone(t));this.morphAttributes[o]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,u=a.length;o<u;o++){let h=a[o];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _u=new k,tm=new k,nm=new ht,xi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_u.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_u),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nm.getNormalMatrix(e),s=this.coplanarPoint(_u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},im=0,Li=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Br,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Ou,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let f=r[l];delete f.metadata,a.push(f)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new k,yu=new k,La=new k,Da=new k,Pr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yu.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(yu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),l=Da.dot(this.direction),f=-Da.dot(La),o=Da.lengthSq(),u=Math.abs(1-a*a),h,c,d,m;if(u>0)if(h=a*f-l,c=a*l-f,m=r*u,h>=0)if(c>=-m)if(c<=m){let x=1/u;h*=x,c*=x,d=h*(h+a*c+2*l)+c*(a*h+c+2*f)+o}else c=r,h=Math.max(0,-(a*c+l)),d=-h*h+c*(c+2*f)+o;else c=-r,h=Math.max(0,-(a*c+l)),d=-h*h+c*(c+2*f)+o;else c<=-m?(h=Math.max(0,-(-a*r+l)),c=h>0?-r:Math.min(Math.max(-r,-f),r),d=-h*h+c*(c+2*f)+o):c<=m?(h=0,c=Math.min(Math.max(-r,-f),r),d=c*(c+2*f)+o):(h=Math.max(0,-(a*r+l)),c=h>0?r:Math.min(Math.max(-r,-f),r),d=-h*h+c*(c+2*f)+o);else c=a>0?-r:r,h=Math.max(0,-(a*c+l)),d=-h*h+c*(c+2*f)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yu).addScaledVector(La,c),d}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,f=n+a;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,f,o=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,c=this.origin;return o>=0?(n=(e.min.x-c.x)*o,s=(e.max.x-c.x)*o):(n=(e.max.x-c.x)*o,s=(e.min.x-c.x)*o),u>=0?(r=(e.min.y-c.y)*u,a=(e.max.y-c.y)*u):(r=(e.max.y-c.y)*u,a=(e.min.y-c.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(e.min.z-c.z)*h,f=(e.max.z-c.z)*h):(l=(e.max.z-c.z)*h,f=(e.min.z-c.z)*h),n>f||l>s)||((l>n||n!==n)&&(n=l),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,f=l.x,o=l.y,u=l.z,h=e.x-a.x,c=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,b=n.z-a.z,_=Math.abs(f),y=Math.abs(o),S=Math.abs(u),R,M,E,C,A,D,P,w,I,U,N,V;if(_>=y&&_>=S?(E=f,D=h,I=m,V=p,f>=0?(R=o,M=u,C=c,A=d,P=x,w=g,U=v,N=b):(R=u,M=o,C=d,A=c,P=g,w=x,U=b,N=v)):y>=S?(E=o,D=c,I=x,V=v,o>=0?(R=u,M=f,C=d,A=h,P=g,w=m,U=b,N=p):(R=f,M=u,C=h,A=d,P=m,w=g,U=p,N=b)):(E=u,D=d,I=g,V=b,u>=0?(R=f,M=o,C=h,A=c,P=m,w=x,U=p,N=v):(R=o,M=f,C=c,A=h,P=x,w=m,U=v,N=p)),E===0)return null;let z=R/E,H=M/E,G=1/E,$=C-z*D,oe=A-H*D,re=P-z*I,le=w-H*I,Se=U-z*V,X=N-H*V,Y=Se*le-X*re,ye=$*X-oe*Se,Ce=re*oe-le*$;if(s){if(Y<0||ye<0||Ce<0)return null}else if((Y<0||ye<0||Ce<0)&&(Y>0||ye>0||Ce>0))return null;let ve=Y+ye+Ce;if(ve===0)return null;let Ge=G*(Y*D+ye*I+Ce*V);return(ve>0?Ge<0:Ge>0)?null:this.at(Ge/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wf=new et,Ns=new Pr,Na=new li,Af=new k,Ua=new k,Fa=new k,Ba=new k,Mu=new k,Oa=new k,Rf=new k,za=new k,dt=class extends an{constructor(e=new yt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Oa.set(0,0,0);for(let f=0,o=r.length;f<o;f++){let u=l[f],h=r[f];u!==0&&(Mu.fromBufferAttribute(h,e),a?Oa.addScaledVector(Mu,u):Oa.addScaledVector(Mu.sub(t),u))}t.add(Oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Na.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Na,Af)===null||Ns.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(wf.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(wf),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,f=r.attributes.position,o=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,c=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let m=0,x=c.length;m<x;m++){let g=c[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,y=b;_<y;_+=3){let S=l.getX(_),R=l.getX(_+1),M=l.getX(_+2);s=ka(this,p,e,n,o,u,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=l.getX(g),b=l.getX(g+1),_=l.getX(g+2);s=ka(this,a,e,n,o,u,h,v,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(a))for(let m=0,x=c.length;m<x;m++){let g=c[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(f.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,y=b;_<y;_+=3){let S=_,R=_+1,M=_+2;s=ka(this,p,e,n,o,u,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(f.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,b=g+1,_=g+2;s=ka(this,a,e,n,o,u,h,v,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function sm(i,e,t,n,s,r,a,l){let f;if(e.side===En?f=n.intersectTriangle(a,r,s,!0,l):f=n.intersectTriangle(s,r,a,e.side===vs,l),f===null)return null;za.copy(l),za.applyMatrix4(i.matrixWorld);let o=t.ray.origin.distanceTo(za);return o<t.near||o>t.far?null:{distance:o,point:za.clone(),object:i}}function ka(i,e,t,n,s,r,a,l,f,o){i.getVertexPosition(l,Ua),i.getVertexPosition(f,Fa),i.getVertexPosition(o,Ba);let u=sm(i,e,t,n,Ua,Fa,Ba,Rf);if(u){let h=new k;cs.getBarycoord(Rf,Ua,Fa,Ba,h),s&&(u.uv=cs.getInterpolatedAttribute(s,l,f,o,h,new qe)),r&&(u.uv1=cs.getInterpolatedAttribute(r,l,f,o,h,new qe)),a&&(u.normal=cs.getInterpolatedAttribute(a,l,f,o,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let c={a:l,b:f,c:o,normal:new k,materialIndex:0};cs.getNormal(Ua,Fa,Ba,c.normal),u.face=c,u.barycoord=h}return u}var us=class extends Fn{constructor(e=null,t=1,n=1,s,r,a,l,f,o=on,u=on,h,c){super(null,a,l,f,o,u,s,r,h,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new et,Cf=new et,Ha=[],Pf=new ai,rm=new et,bo=new dt,So=new li,Xi=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Pf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),So.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),e.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Cf.multiplyMatrices(n,_r),bo.matrixWorld=Cf,bo.raycast(e,Ha);for(let a=0,l=Ha.length;a<l;a++){let f=Ha[a];f.instanceId=r,f.object=this,t.push(f)}Ha.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(s*this.count),s,this.count,Vs,ci));let r=this.morphTexture.source.data.data,a=0;for(let o=0;o<n.length;o++)a+=n[o];let l=this.geometry.morphTargetsRelative?1:1-a,f=s*e;return r[f]=l,r.set(n,f+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new li,om=new qe(.5,.5),Va=new k,Ir=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],f=r[2],o=r[3],u=r[4],h=r[5],c=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],b=r[13],_=r[14],y=r[15];if(s[0].setComponents(o-a,d-u,p-m,y-v).normalize(),s[1].setComponents(o+a,d+u,p+m,y+v).normalize(),s[2].setComponents(o+l,d+h,p+x,y+b).normalize(),s[3].setComponents(o-l,d-h,p-x,y-b).normalize(),n)s[4].setComponents(f,c,g,_).normalize(),s[5].setComponents(o-f,d-c,p-g,y-_).normalize();else if(s[4].setComponents(o-f,d-c,p-g,y-_).normalize(),t===_i)s[5].setComponents(o+f,d+c,p+g,y+_).normalize();else if(t===wr)s[5].setComponents(f,c,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=om.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cl=class extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ul=new k,hl=new k,If=new et,To=new Pr,Ga=new li,bu=new k,Lf=new k,Uo=class extends an{constructor(e=new yt,t=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ul.fromBufferAttribute(t,s-1),hl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ul.distanceTo(hl);e.setAttribute("lineDistance",new je(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;If.copy(s).invert(),To.copy(e.ray).applyMatrix4(If);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,o=this.isLineSegments?2:1,u=n.index,c=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=o){let p=u.getX(x),v=u.getX(x+1),b=Wa(this,e,To,f,p,v,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Wa(this,e,To,f,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=o){let p=Wa(this,e,To,f,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Wa(this,e,To,f,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Wa(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(ul.fromBufferAttribute(l,s),hl.fromBufferAttribute(l,r),t.distanceSqToSegment(ul,hl,bu,Lf)>n)return;bu.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(bu);if(!(o<e.near||o>e.far))return{distance:o,point:Lf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Lr=class extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Df=new et,Cu=new Pr,Xa=new li,qa=new k,Fo=class extends an{constructor(e=new yt,t=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;Df.copy(s).invert(),Cu.copy(e.ray).applyMatrix4(Df);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,o=n.index,h=n.attributes.position;if(o!==null){let c=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let m=c,x=d;m<x;m++){let g=o.getX(m);qa.fromBufferAttribute(h,g),Nf(qa,g,f,s,e,t,this)}}else{let c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=c,x=d;m<x;m++)qa.fromBufferAttribute(h,m),Nf(qa,m,f,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Nf(i,e,t,n,s,r,a){let l=Cu.distanceSqToPoint(i);if(l<t){let f=new k;Cu.closestPointToPoint(i,f),f.applyMatrix4(n);let o=s.ray.origin.distanceTo(f);if(o<s.near||o>s.far)return;r.push({distance:o,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Bo=class extends Fn{constructor(e=[],t=xs,n,s,r,a,l,f,o,u){super(e,t,n,s,r,a,l,f,o,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wn=class extends Fn{constructor(e,t,n,s,r,a,l,f,o){super(e,t,n,s,r,a,l,f,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends Fn{constructor(e,t,n=bi,s,r,a,l=on,f=on,o,u=Pi,h=1){if(u!==Pi&&u!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:t,depth:h};super(c,s,r,a,l,f,u,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fl=class extends hs{constructor(e,t=bi,n=xs,s,r,a=on,l=on,f,o=Pi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,l,f,o),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oo=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let f=[],o=[],u=[],h=[],c=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(f),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function m(x,g,p,v,b,_,y,S,R,M,E){let C=_/R,A=y/M,D=_/2,P=y/2,w=S/2,I=R+1,U=M+1,N=0,V=0,z=new k;for(let H=0;H<U;H++){let G=H*A-P;for(let $=0;$<I;$++){let oe=$*C-D;z[x]=oe*v,z[g]=G*b,z[p]=w,o.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[p]=S>0?1:-1,u.push(z.x,z.y,z.z),h.push($/R),h.push(1-H/M),N+=1}}for(let H=0;H<M;H++)for(let G=0;G<R;G++){let $=c+G+I*H,oe=c+G+I*(H+1),re=c+(G+1)+I*(H+1),le=c+(G+1)+I*H;f.push($,oe,le),f.push(oe,re,le),V+=6}l.addGroup(d,V,E),d+=V,c+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Os=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],f=[],o=new k,u=new qe;a.push(0,0,0),l.push(0,0,1),f.push(.5,.5);for(let h=0,c=3;h<=t;h++,c+=3){let d=n+h/t*s;o.x=e*Math.cos(d),o.y=e*Math.sin(d),a.push(o.x,o.y,o.z),l.push(0,0,1),u.x=(a[c]/e+1)/2,u.y=(a[c+1]/e+1)/2,f.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:f};let o=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],c=[],d=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(d,2));function v(){let _=new k,y=new k,S=0,R=(t-e)/n;for(let M=0;M<=r;M++){let E=[],C=M/r,A=C*(t-e)+e;for(let D=0;D<=s;D++){let P=D/s,w=P*f+l,I=Math.sin(w),U=Math.cos(w);y.x=A*I,y.y=-C*n+g,y.z=A*U,h.push(y.x,y.y,y.z),_.set(I,R,U).normalize(),c.push(_.x,_.y,_.z),d.push(P,1-C),E.push(m++)}x.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let C=x[E][M],A=x[E+1][M],D=x[E+1][M+1],P=x[E][M+1];(e>0||E!==0)&&(u.push(C,A,P),S+=3),(t>0||E!==r-1)&&(u.push(A,D,P),S+=3)}o.addGroup(p,S,0),p+=S}function b(_){let y=m,S=new qe,R=new k,M=0,E=_===!0?e:t,C=_===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*C,0),c.push(0,C,0),d.push(.5,.5),m++;let A=m;for(let D=0;D<=s;D++){let w=D/s*f+l,I=Math.cos(w),U=Math.sin(w);R.x=E*U,R.y=g*C,R.z=E*I,h.push(R.x,R.y,R.z),c.push(0,C,0),S.x=I*.5+.5,S.y=U*.5*C+.5,d.push(S.x,S.y),m++}for(let D=0;D<s;D++){let P=y+D,w=A+D;_===!0?u.push(w,w+1,P):u.push(w+1,w,P),M+=3}o.addGroup(p,M,_===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dl=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),o(n),u(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let b=new k,_=new k,y=new k;for(let S=0;S<t.length;S+=3)d(t[S+0],b),d(t[S+1],_),d(t[S+2],y),f(b,_,y,v)}function f(v,b,_,y){let S=y+1,R=[];for(let M=0;M<=S;M++){R[M]=[];let E=v.clone().lerp(_,M/S),C=b.clone().lerp(_,M/S),A=S-M;for(let D=0;D<=A;D++)D===0&&M===S?R[M][D]=E:R[M][D]=E.clone().lerp(C,D/A)}for(let M=0;M<S;M++)for(let E=0;E<2*(S-M)-1;E++){let C=Math.floor(E/2);E%2===0?(c(R[M][C+1]),c(R[M+1][C]),c(R[M][C])):(c(R[M][C+1]),c(R[M+1][C+1]),c(R[M+1][C]))}}function o(v){let b=new k;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let v=new k;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=g(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;a.push(_,1-y)}m(),h()}function h(){for(let v=0;v<a.length;v+=6){let b=a[v+0],_=a[v+2],y=a[v+4],S=Math.max(b,_,y),R=Math.min(b,_,y);S>.9&&R<.1&&(b<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function c(v){r.push(v.x,v.y,v.z)}function d(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function m(){let v=new k,b=new k,_=new k,y=new k,S=new qe,R=new qe,M=new qe;for(let E=0,C=0;E<r.length;E+=9,C+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),y.copy(v).add(b).add(_).divideScalar(3);let A=g(y);x(S,C+0,v,A),x(R,C+2,b,A),x(M,C+4,_,A)}}function x(v,b,_,y){y<0&&v.x===1&&(a[b]=v.x-1),_.x===0&&_.z===0&&(a[b]=y/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var zo=class i extends dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var kt=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),f=Math.floor(s),o=l+1,u=f+1,h=e/l,c=t/f,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*c-a;for(let b=0;b<o;b++){let _=b*h-r;m.push(_,-v,0),x.push(0,0,1),g.push(b/l),g.push(1-p/f)}}for(let p=0;p<f;p++)for(let v=0;v<l;v++){let b=v+o*p,_=v+o*(p+1),y=v+1+o*(p+1),S=v+1+o*p;d.push(b,_,S),d.push(_,y,S)}this.setIndex(d),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ko=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let f=Math.min(a+l,Math.PI),o=0,u=[],h=new k,c=new k,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],b=p/n,_=a+b*l,y=e*Math.cos(_),S=Math.sqrt(e*e-y*y),R=0;p===0&&a===0?R=.5/t:p===n&&f===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){let E=M/t,C=s+E*r;h.x=-S*Math.cos(C),h.y=y,h.z=S*Math.sin(C),m.push(h.x,h.y,h.z),c.copy(h).normalize(),x.push(c.x,c.y,c.z),g.push(E+R,1-b),v.push(o++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let b=u[p][v+1],_=u[p][v],y=u[p+1][v],S=u[p+1][v+1];(p!==0||a>0)&&d.push(b,_,S),(p!==n-1||f<Math.PI)&&d.push(_,y,S)}this.setIndex(d),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ho=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let f=[],o=[],u=[],h=[],c=new k,d=new k,m=new k;for(let x=0;x<=n;x++){let g=a+x/n*l;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),m.subVectors(d,c).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,_=(s+1)*x+g;f.push(p,v,_),f.push(v,b,_)}this.setIndex(f),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Uf(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uf(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function Uf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Ws={clone:Gs,merge:Ln},lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pl=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ln=class extends Li{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dr=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Su(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let f=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gl=class extends fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],f=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Au:r=e,l=2*t-n;break;case Ru:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(f===void 0)switch(this.getSettings_().endingEnd){case Au:a=e,f=2*n-t;break;case Ru:a=1,f=n+s[1]-s[0];break;default:a=e-1,f=t}let o=(n-t)*.5,u=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(f-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,f=e*l,o=f-l,u=this._offsetPrev,h=this._offsetNext,c=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-c*g+2*c*x-c*m,v=(1+c)*g+(-1.5-2*c)*x+(-.5+c)*m+1,b=(-1-d)*g+(1.5+d)*x+.5*m,_=d*g-d*x;for(let y=0;y!==l;++y)r[y]=p*a[u+y]+v*a[o+y]+b*a[f+y]+_*a[h+y];return r}},vl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,f=e*l,o=f-l,u=(n-t)/(s-t),h=1-u;for(let c=0;c!==l;++c)r[c]=a[o+c]*h+a[f+c]*u;return r}},xl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_l=class extends fs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,f=e*l,o=f-l,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==l;++g)r[g]=a[o+g]*x+a[f+g]*m;return r}let c=l*2,d=e-1;for(let m=0;m!==l;++m){let x=a[o+m],g=a[f+m],p=d*c+m*2,v=h[p],b=h[p+1],_=e*c+m*2,y=u[_],S=u[_+1],R=hm(n,t,v,y,s);r[m]=wd(R,x,b,S,g)}return r}};function wd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function um(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=wd(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let f=um(r,e,t,n,s);if(Math.abs(f)<1e-10)break;r=Math.max(0,Math.min(1,r-l/f))}return r}var Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Su(e.settings)&&(n.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _l(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case rl:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case Eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Su(this.settings)&&(Ff(this.settings.inTangents,e),Ff(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let f=n[l];if(typeof f=="number"&&isNaN(f)){ct("KeyframeTrack: Time is not a valid number.",this,l,f),e=!1;break}if(a!==null&&a>f){ct("KeyframeTrack: Out of order keys.",this,l,f,a),e=!1;break}a=f}if(s!==void 0&&kp(s))for(let l=0,f=s.length;l!==f;++l){let o=s[l];if(isNaN(o)){ct("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let l=1;l<r;++l){let f=!1,o=e[l],u=e[l+1];if(o!==u&&(l!==1||o!==e[0]))if(s)f=!0;else{let h=l*n,c=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[c+m]||x!==t[d+m]){f=!0;break}}}if(f){if(l!==a){e[a]=e[l];let h=l*n,c=a*n;for(let d=0;d!==n;++d)t[c+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,f=a*n,o=0;o!==n;++o)t[f+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Su(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=rl;var ds=class extends Qn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Eo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="color";var Ml=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="number";var bl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,f=(n-t)/(s-t),o=e*l;for(let u=o+l;o!==u;o+=4)yn.slerpFlat(r,0,a,o-l,a,o,f);return r}},Vo=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Qn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Eo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}};Sl.prototype.ValueTypeName="vector";var Tl=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,f,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return o.push(u,h),this},this.removeHandler=function(u){let h=o.indexOf(u);return h!==-1&&o.splice(h,2),this},this.getHandler=function(u){for(let h=0,c=o.length;h<c;h+=2){let d=o[h],m=o[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ad=new Tl,El=class{constructor(e){this.manager=e!==void 0?e:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Go=class extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tu=new et,Bf=new k,Of=new k,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Tu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,f=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===wr||e.reversedDepth?t.set(.5*a,0,0,.5*a+f,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+f,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new k,Za=new yn,Ri=new k,qi=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Za,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ya,Za,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new k,zf=new qe,kf=new qe,Tn=class extends qi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,zf,kf),t.subVectors(kf,zf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let f=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/f,t-=a.offsetY*n/o,s*=a.width/f,n*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends Wo{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xo=class extends Nr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var ms=class extends qi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,f=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=u*this.view.offsetY,f=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Iu=class extends Wo{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Iu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=class extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Mr=-90,br=1,wl=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Mr,br,e,t);s.layers=this.layers,this.add(s);let r=new Tn(Mr,br,e,t);r.layers=this.layers,this.add(r);let a=new Tn(Mr,br,e,t);a.layers=this.layers,this.add(a);let l=new Tn(Mr,br,e,t);l.layers=this.layers,this.add(l);let f=new Tn(Mr,br,e,t);f.layers=this.layers,this.add(f);let o=new Tn(Mr,br,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,f]=t;for(let o of t)this.remove(o);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,f,o,u]=this.children,h=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,c,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Al=class extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=fm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function fm(){this._document.hidden===!1&&this.reset()}var nh="\\[\\]\\.:\\/",dm=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",pm="[^"+nh.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",ih),gm=/(WCOD+)?/.source.replace("WCOD",pm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),_m=new RegExp("^"+mm+gm+vm+xm+"$"),ym=["material","materials","bones","map"],Lu=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=_m.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let f=n(l.children);if(f)return f}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===o){o=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}f=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(f=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Lu;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var ch=class ch{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ch.prototype.isMatrix2=!0;var Du=ch;function sh(i,e,t,n){let s=Mm(n);switch(t){case Ku:return i*e;case Vs:return i*e/s.components*s.byteLength;case Ul:return i*e/s.components*s.byteLength;case ys:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case ju:return i*e*3/s.components*s.byteLength;case Yn:return i*e*4/s.components*s.byteLength;case Bl:return i*e*4/s.components*s.byteLength;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case kl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Gl:case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wl:case ea:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ta:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(i){switch(i){case In:case Yu:return{byteLength:1,components:1};case Or:case Zu:case cn:return{byteLength:2,components:1};case Dl:case Nl:return{byteLength:2,components:4};case bi:case Ll:case ci:return{byteLength:4,components:1};case $u:case Ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $d(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rm(i){let e=new WeakMap;function t(l,f){let o=l.array,u=l.usage,h=o.byteLength,c=i.createBuffer();i.bindBuffer(f,c),i.bufferData(f,o,u),l.onUploadCallback();let d;if(o instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=i.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:c,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,f,o){let u=f.array,h=f.updateRanges;if(i.bindBuffer(o,l),h.length===0)i.bufferSubData(o,0,u);else{h.sort((d,m)=>d.start-m.start);let c=0;for(let d=1;d<h.length;d++){let m=h[c],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++c,h[c]=x)}h.length=c+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(o,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let f=e.get(l);f&&(i.deleteBuffer(f.buffer),e.delete(l))}function a(l,f){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,f));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,f),o.version=l.version}}return{get:s,remove:r,update:a}}var Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
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
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Ag=`uniform sampler2D dfgLUT;
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
}`,Rg=`
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Fv=`#if DEPTH_PACKING == 3200
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
}`,Bv=`#define DISTANCE
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
}`,Ov=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ox=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Cm,alphahash_pars_fragment:Pm,alphamap_fragment:Im,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:Bm,batching_vertex:Om,begin_vertex:zm,beginnormal_vertex:km,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:Zm,color_pars_fragment:$m,color_pars_vertex:Jm,color_vertex:Km,common:jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:hg,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:_g,lights_pars_begin:yg,lights_toon_fragment:bg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Eg,lights_physical_fragment:wg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Pg,lightprobes_pars_fragment:Ig,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Bg,map_particle_fragment:Og,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Vg,morphcolor_vertex:Gg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:Zg,normal_pars_fragment:$g,normal_pars_vertex:Jg,normal_vertex:Kg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:fv,shadowmap_vertex:dv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:vv,skinnormal_vertex:xv,specularmap_fragment:_v,specularmap_pars_fragment:yv,tonemapping_fragment:Mv,tonemapping_pars_fragment:bv,transmission_fragment:Sv,transmission_pars_fragment:Tv,uv_pars_fragment:Ev,uv_pars_vertex:wv,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Iv,backgroundCube_frag:Lv,cube_vert:Dv,cube_frag:Nv,depth_vert:Uv,depth_frag:Fv,distance_vert:Bv,distance_frag:Ov,equirect_vert:zv,equirect_frag:kv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:Zv,meshnormal_vert:$v,meshnormal_frag:Jv,meshphong_vert:Kv,meshphong_frag:jv,meshphysical_vert:Qv,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},Ue={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ni={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ni.physical={uniforms:Ln([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var vc={r:0,b:0,g:0},cx=new et,Jd=new ht;Jd.set(-1,0,0,0,1,0,0,0,1);function ux(i,e,t,n,s,r){let a=new me(0),l=s===!0?0:1,f,o,u=null,h=0,c=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=e.get(b,_)}return b}function m(v){let b=!1,_=d(v);_===null?g(a,l):_&&_.isColor&&(g(_,1),b=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,b){let _=d(b);_&&(_.isCubeTexture||_.mapping===Zo)?(o===void 0&&(o=new dt(new zt(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Gs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(y,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=_,o.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Jd),o.material.toneMapped=bt.getTransfer(_.colorSpace)!==It,(u!==_||h!==_.version||c!==i.toneMapping)&&(o.material.needsUpdate=!0,u=_,h=_.version,c=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null)):_&&_.isTexture&&(f===void 0&&(f=new dt(new kt(2,2),new vt({name:"BackgroundMaterial",uniforms:Gs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=_,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=bt.getTransfer(_.colorSpace)!==It,_.matrixAutoUpdate===!0&&_.updateMatrix(),f.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||c!==i.toneMapping)&&(f.material.needsUpdate=!0,u=_,h=_.version,c=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null))}function g(v,b){v.getRGB(vc,th(i)),t.buffers.color.setClear(vc.r,vc.g,vc.b,b,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:m,addToRenderList:x,dispose:p}}function hx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null),r=s,a=!1;function l(A,D,P,w,I){let U=!1,N=h(A,w,P,D);r!==N&&(r=N,o(r.object)),U=d(A,w,P,I),U&&m(A,w,P,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(A,D,P,w),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function f(){return i.createVertexArray()}function o(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,D,P,w){let I=w.wireframe===!0,U=n[D.id];U===void 0&&(U={},n[D.id]=U);let N=A.isInstancedMesh===!0?A.id:0,V=U[N];V===void 0&&(V={},U[N]=V);let z=V[P.id];z===void 0&&(z={},V[P.id]=z);let H=z[I];return H===void 0&&(H=c(f()),z[I]=H),H}function c(A){let D=[],P=[],w=[];for(let I=0;I<t;I++)D[I]=0,P[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:w,object:A,attributes:{},index:null}}function d(A,D,P,w){let I=r.attributes,U=D.attributes,N=0,V=P.getAttributes();for(let z in V)if(V[z].location>=0){let G=I[z],$=U[z];if($===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function m(A,D,P,w){let I={},U=D.attributes,N=0,V=P.getAttributes();for(let z in V)if(V[z].location>=0){let G=U[z];G===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(G=A.instanceColor));let $={};$.attribute=G,G&&G.data&&($.data=G.data),I[z]=$,N++}r.attributes=I,r.attributesNum=N,r.index=w}function x(){let A=r.newAttributes;for(let D=0,P=A.length;D<P;D++)A[D]=0}function g(A){p(A,0)}function p(A,D){let P=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;P[A]=1,w[A]===0&&(i.enableVertexAttribArray(A),w[A]=1),I[A]!==D&&(i.vertexAttribDivisor(A,D),I[A]=D)}function v(){let A=r.newAttributes,D=r.enabledAttributes;for(let P=0,w=D.length;P<w;P++)D[P]!==A[P]&&(i.disableVertexAttribArray(P),D[P]=0)}function b(A,D,P,w,I,U,N){N===!0?i.vertexAttribIPointer(A,D,P,I,U):i.vertexAttribPointer(A,D,P,w,I,U)}function _(A,D,P,w){x();let I=w.attributes,U=P.getAttributes(),N=D.defaultAttributeValues;for(let V in U){let z=U[V];if(z.location>=0){let H=I[V];if(H===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),H!==void 0){let G=H.normalized,$=H.itemSize,oe=e.get(H);if(oe===void 0)continue;let re=oe.buffer,le=oe.type,Se=oe.bytesPerElement,X=le===i.INT||le===i.UNSIGNED_INT||H.gpuType===Ll;if(H.isInterleavedBufferAttribute){let Y=H.data,ye=Y.stride,Ce=H.offset;if(Y.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,Y.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ve=0;ve<z.locationSize;ve++)g(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve,$/z.locationSize,le,G,ye*Se,(Ce+$/z.locationSize*ve)*Se,X)}else{if(H.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)p(z.location+Y,H.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Y=0;Y<z.locationSize;Y++)g(z.location+Y);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Y=0;Y<z.locationSize;Y++)b(z.location+Y,$/z.locationSize,le,G,$*Se,$/z.locationSize*Y*Se,X)}}else if(N!==void 0){let G=N[V];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(z.location,G);break;case 3:i.vertexAttrib3fv(z.location,G);break;case 4:i.vertexAttrib4fv(z.location,G);break;default:i.vertexAttrib1fv(z.location,G)}}}}v()}function y(){E();for(let A in n){let D=n[A];for(let P in D){let w=D[P];for(let I in w){let U=w[I];for(let N in U)u(U[N].object),delete U[N];delete w[I]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let D=n[A.id];for(let P in D){let w=D[P];for(let I in w){let U=w[I];for(let N in U)u(U[N].object),delete U[N];delete w[I]}}delete n[A.id]}function R(A){for(let D in n){let P=n[D];for(let w in P){let I=P[w];if(I[A.id]===void 0)continue;let U=I[A.id];for(let N in U)u(U[N].object),delete U[N];delete I[A.id]}}}function M(A){for(let D in n){let P=n[D],w=A.isInstancedMesh===!0?A.id:0,I=P[w];if(I!==void 0){for(let U in I){let N=I[U];for(let V in N)u(N[V].object),delete N[V];delete I[U]}delete P[w],Object.keys(P).length===0&&delete n[D]}}}function E(){C(),a=!0,r!==s&&(r=s,o(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function fx(i,e,t){let n;function s(f){n=f}function r(f,o){i.drawArrays(n,f,o),t.update(o,n,1)}function a(f,o,u){u!==0&&(i.drawArraysInstanced(n,f,o,u),t.update(o,n,u))}function l(f,o,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,o,0,u);let c=0;for(let d=0;d<u;d++)c+=o[d];t.update(c,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function dx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let M=R===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&R!==ci&&!M&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function f(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",u=f(o);u!==o&&(at("WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);let h=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&c===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:h,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:y,samples:S}}function px(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xi,l=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c){let d=h.length!==0||c||n!==0||s;return s=c,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,c){t=u(h,c,0)},this.setState=function(h,c,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):o();else{let v=r?0:n,b=v*4,_=p.clippingState||null;f.value=_,_=u(m,c,b,d);for(let y=0;y!==b;++y)_[y]=t[y];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function o(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,c,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=f.value,m!==!0||g===null){let p=d+x*4,v=c.matrixWorldInverse;l.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=d;b!==x;++b,_+=4)a.copy(h[b]).applyMatrix4(v,l),a.normal.toArray(g,_),g[_+3]=a.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Hr=4,mx=6,gx=20,vx=256,ia=new ms,Rd=new me,uh=null,hh=0,fh=0,dh=!1,xx=new k,Xs=new k,_c=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=xx}=r;uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,l),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,hh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:cn,format:Yn,colorSpace:wo,depthBuffer:!1},s=Cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_x(r)),this._blurMaterial=Mx(r,e,t),this._ggxMaterial=yx(r,e,t)}return s}_compileMaterial(e){let t=new dt(new yt,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,s,r){let f=new Tn(90,1,t,n),o=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(Rd),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new zt,new sn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(Rd),p=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(f.up.set(0,o[b],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[b],r.y,r.z)):_===1?(f.up.set(0,0,o[b]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[b],r.z)):(f.up.set(0,o[b],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[b]));let y=this._cubeSize;kr(s,_*y,b>2?y:0,y,y),h.setRenderTarget(s),p&&h.render(x,f),h.render(e,f)}h.toneMapping=d,h.autoClear=c,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let f=this._cubeSize;kr(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(a,ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let f=a.uniforms,o=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(o*o-u*u),c=o*1.25,d=h*c,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Hr?n-m+Hr:0),p=4*(this._cubeSize-x);f.envMap.value=e.texture,f.roughness.value=d,f.mipInt.value=m-t,kr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(l,ia),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-n,kr(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(l,ia)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,f=this._lodMeshes[s];f.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),c=4*(this._cubeSize-u);kr(t,h,c,3*u,2*u),a.setRenderTarget(t),a.render(f,ia)}};function _x(i){let e=[],t=[],n=i,s=i-Hr+1+mx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),f=-l,o=1+l,u=[f,f,o,f,o,o,f,f,o,o,f,o],h=6,c=6,d=3,m=new Float32Array(d*c*h),x=new Float32Array(d*c*h);for(let p=0;p<h;p++){let v=p%3*2/3-1,b=p>2?0:-1,_=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];m.set(_,d*c*p);for(let y=0;y<c;y++){let S=u[y*2]*2-1,R=u[y*2+1]*2-1;p===0?Xs.set(1,R,S):p===1?Xs.set(-S,1,-R):p===2?Xs.set(-S,R,1):p===3?Xs.set(-1,R,-S):p===4?Xs.set(-S,-1,R):Xs.set(S,R,-1),Xs.toArray(x,(p*c+y)*d)}}let g=new yt;g.setAttribute("position",new Bt(m,d)),g.setAttribute("outputDirection",new Bt(x,d)),t.push(new dt(g,null)),n>Hr&&n--}return{lodMeshes:t,sizeLods:e}}function Cd(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yx(i,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mx(i,e,t){return new vt({name:"SphericalGaussianBlur",defines:{SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Pd(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Id(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Xn});r.uniforms.tEquirect.value=t;let a=new dt(s,r),l=t.minFilter;return t.minFilter===qn&&(t.minFilter=Wt),new wl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function bx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(c,d=!1){return c==null?null:d?a(c):r(c)}function r(c){if(c&&c.isTexture){let d=c.mapping;if(d===Cl||d===Pl)if(e.has(c)){let m=e.get(c).texture;return l(m,c.mapping)}else{let m=c.image;if(m&&m.height>0){let x=new yc(m.height);return x.fromEquirectangularTexture(i,c),e.set(c,x),c.addEventListener("dispose",o),l(x.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let d=c.mapping,m=d===Cl||d===Pl,x=d===xs||d===Hs;if(m||x){let g=t.get(c),p=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return n===null&&(n=new _c(i)),g=m?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,t.set(c,g),g.texture;if(g!==void 0)return g.texture;{let v=c.image;return m&&v&&v.height>0||x&&v&&f(v)?(n===null&&(n=new _c(i)),g=m?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,t.set(c,g),c.addEventListener("dispose",u),g.texture):null}}}return c}function l(c,d){return d===Cl?c.mapping=xs:d===Pl&&(c.mapping=Hs),c}function f(c){let d=0,m=6;for(let x=0;x<m;x++)c[x]!==void 0&&d++;return d===m}function o(c){let d=c.target;d.removeEventListener("dispose",o);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(c){let d=c.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Sx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Tx(i,e,t,n){let s={},r=new WeakMap;function a(h){let c=h.target;c.index!==null&&e.remove(c.index);for(let m in c.attributes)e.remove(c.attributes[m]);c.removeEventListener("dispose",a),delete s[c.id];let d=r.get(c);d&&(e.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(h,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c}function f(h){let c=h.attributes;for(let d in c)e.update(c[d],i.ARRAY_BUFFER)}function o(h){let c=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let b=0,_=v.length;b<_;b+=3){let y=v[b+0],S=v[b+1],R=v[b+2];c.push(y,S,S,R,R,y)}}else{let v=m.array;x=m.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let y=b+0,S=b+1,R=b+2;c.push(y,S,S,R,R,y)}}let g=new(m.count>=65535?No:Do)(c,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let c=r.get(h);if(c){let d=h.index;d!==null&&c.version<d.version&&o(h)}else o(h);return r.get(h)}return{get:l,update:f,getWireframeAttribute:u}}function Ex(i,e,t){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function f(h,c){i.drawElements(n,c,r,h*a),t.update(c,n,1)}function o(h,c,d){d!==0&&(i.drawElementsInstanced(n,c,r,h*a,d),t.update(c,n,d))}function u(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=c[g];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=f,this.renderInstances=o,this.renderMultiDraw=u}function wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ax(i,e,t){let n=new WeakMap,s=new St;function r(a,l,f){let o=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,c=n.get(l);if(c===void 0||c.count!==h){let E=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",E)};c!==void 0&&c.texture.dispose();let d=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let _=l.attributes.position.count*b,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*y*4*h),R=new Po(S,_,y,h);R.type=ci,R.needsUpdate=!0;let M=b*4;for(let C=0;C<h;C++){let A=g[C],D=p[C],P=v[C],w=_*y*4*C;for(let I=0;I<A.count;I++){let U=I*M;d===!0&&(s.fromBufferAttribute(A,I),S[w+U+0]=s.x,S[w+U+1]=s.y,S[w+U+2]=s.z,S[w+U+3]=0),m===!0&&(s.fromBufferAttribute(D,I),S[w+U+4]=s.x,S[w+U+5]=s.y,S[w+U+6]=s.z,S[w+U+7]=0),x===!0&&(s.fromBufferAttribute(P,I),S[w+U+8]=s.x,S[w+U+9]=s.y,S[w+U+10]=s.z,S[w+U+11]=P.itemSize===4?s.w:1)}}c={count:h,texture:R,size:new qe(_,y)},n.set(l,c),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<o.length;x++)d+=o[x];let m=l.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",o)}f.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function Rx(i,e,t,n,s){let r=new WeakMap;function a(o){let u=s.render.frame,h=o.geometry,c=e.get(o,h);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),o.isInstancedMesh&&(o.hasEventListener("dispose",f)===!1&&o.addEventListener("dispose",f),r.get(o)!==u&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,u))),o.isSkinnedMesh){let d=o.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function l(){r=new WeakMap}function f(o){let u=o.target;u.removeEventListener("dispose",f),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}var Cx={[ku]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Vu]:"CINEON_TONE_MAPPING",[Gu]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[Yo]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function Px(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,f=null,o=new yt;o.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new je([0,2,0,0,2,0],2));let u=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new dt(o,u),c=new ms(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,v=[],b=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),f!==null&&f.setSize(_,y);for(let S=0;S<v.length;S++){let R=v[S];R.setSize&&R.setSize(_,y)}},this.setEffects=function(_){v=_,b=v.length>0&&v[0].isRenderPass===!0;let y=a.width,S=a.height;v.length>0&&l===null&&(l=new Ot(y,S,{type:cn,depthBuffer:!1,stencilBuffer:!1}),f=new Ot(y,S,{type:cn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let M=v[R];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(x||_.toneMapping===Mi&&v.length===0)return!1;if(p=y,y!==null){let S=y.width,R=y.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return b===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Mi,!0},this.hasRenderPass=function(){return b},this.end=function(_,y){_.toneMapping=g,x=!0;let S=a,R=l;for(let M=0;M<v.length;M++){let E=v[M];E.enabled!==!1&&(E.render(_,R,S,y),E.needsSwap!==!1&&(S=R,R=R===l?f:l))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,u.defines={},bt.getTransfer(d)===It&&(u.defines.SRGB_TRANSFER="");let M=Cx[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(h,c),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),f!==null&&f.dispose(),o.dispose(),u.dispose()}}var Kd=new Fn,gh=new hs(1,1),jd=new Po,Qd=new ll,e0=new Bo,Ld=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),fn(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),fn(t,n)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),fn(t,n)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gh.compareFunction=t.isReversedDepthBuffer()?gc:mc,r=gh):r=Kd,t.setTexture2D(e||r,s)}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qd,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||e0,s)}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jd,s)}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Ux;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return Ox;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}function Kx(i,e){i.uniform1fv(this.addr,e)}function jx(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qx(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function e1(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function t1(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n1(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i1(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s1(i,e){i.uniform1iv(this.addr,e)}function r1(i,e){i.uniform2iv(this.addr,e)}function o1(i,e){i.uniform3iv(this.addr,e)}function a1(i,e){i.uniform4iv(this.addr,e)}function l1(i,e){i.uniform1uiv(this.addr,e)}function c1(i,e){i.uniform2uiv(this.addr,e)}function u1(i,e){i.uniform3uiv(this.addr,e)}function h1(i,e){i.uniform4uiv(this.addr,e)}function f1(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gh:a=Kd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function d1(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qd,r[a])}function p1(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||e0,r[a])}function m1(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jd,r[a])}function g1(i){switch(i){case 5126:return Kx;case 35664:return jx;case 35665:return Qx;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}var vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Bd(i,e){i.seq.push(e),i.map[e.id]=e}function v1(i,e,t){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),a=ph.lastIndex,l=r[1],f=r[2]==="]",o=r[3];if(f&&(l=l|0),o===void 0||o==="["&&a+2===s){Bd(t,o===void 0?new vh(l,i,e):new xh(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new _h(l),Bd(t,h)),t=h}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);v1(l,f,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x1=37297,_1=0;function y1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var zd=new ht;function M1(i){bt._getMatrix(zd,bt.workingColorSpace,i);let e=`mat3( ${zd.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+y1(i.getShaderSource(e),l)}else return r}function b1(i,e){let t=M1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var S1={[ku]:"Linear",[Hu]:"Reinhard",[Vu]:"Cineon",[Gu]:"ACESFilmic",[Xu]:"AgX",[Yo]:"Neutral",[Wu]:"Custom"};function T1(i,e){let t=S1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new k;function E1(){bt.getLuminanceCoefficients(xc);let i=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function A1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ra(i){return i!==""}function Hd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(C1,I1)}var P1=new Map;function I1(i,e){let t=lt[e];if(t===void 0){let n=P1.get(e);if(n!==void 0)t=lt[n],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yh(t)}var L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(L1,D1)}function D1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var N1={[zs]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function U1(i){return N1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F1={[xs]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function B1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O1={[Hs]:"ENVMAP_MODE_REFRACTION"};function z1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k1={[zu]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function H1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k1[i.combine]||"ENVMAP_BLENDING_NONE"}function V1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function G1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,f=U1(t),o=B1(t),u=z1(t),h=H1(t),c=V1(t),d=w1(t),m=A1(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ra).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(g=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Mi?T1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=yh(a),a=Hd(a,t),a=Vd(a,t),l=yh(l),l=Hd(l,t),l=Vd(l,t),a=Gd(a),l=Gd(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=v+g+a,_=v+p+l,y=Od(s,s.VERTEX_SHADER,b),S=Od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",P=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(S)||"",I=D.trim(),U=P.trim(),N=w.trim(),V=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,S);else{let H=kd(s,y,"vertex"),G=kd(s,S,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+H+`
`+G)}else I!==""?at("WebGLProgram: Program Info Log:",I):(U===""||N==="")&&(z=!1);z&&(A.diagnostics={runnable:V,programLog:I,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:p}})}s.deleteShader(y),s.deleteShader(S),M=new Vr(s,x),E=R1(s,x)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,x1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=S,this}var W1=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=W1++,this.code=e,this.usedTimes=0}};function X1(i){return i===ys||i===ea||i===ta}function q1(i,e,t,n,s,r){let a=new Io,l=new Mh,f=new Set,o=[],u=new Map,h=n.logarithmicDepthBuffer,c=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return f.add(M),M===0?"uv":`uv${M}`}function x(M,E,C,A,D,P){let w=A.fog,I=D.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||U,N),z=V&&V.mapping===Zo?V.image.height:null,H=d[M.type];M.precision!==null&&(c=n.getMaxPrecision(M.precision),c!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",c,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=G!==void 0?G.length:0,oe=0;I.morphAttributes.position!==void 0&&(oe=1),I.morphAttributes.normal!==void 0&&(oe=2),I.morphAttributes.color!==void 0&&(oe=3);let re,le,Se,X;if(H){let Dt=Ni[H];re=Dt.vertexShader,le=Dt.fragmentShader}else{re=M.vertexShader,le=M.fragmentShader;let Dt=l.getVertexShaderStage(M),rt=l.getFragmentShaderStage(M);l.update(M,Dt,rt),Se=Dt.id,X=rt.id}let Y=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,ve=D.isBatchedMesh===!0,Ge=!!M.map,it=!!M.matcap,nt=!!V,ft=!!M.aoMap,xt=!!M.lightMap,st=!!M.bumpMap&&M.wireframe===!1,_t=!!M.normalMap,ce=!!M.displacementMap,Ee=!!M.emissiveMap,be=!!M.metalnessMap,Me=!!M.roughnessMap,F=M.anisotropy>0,Le=M.clearcoat>0,Ye=M.dispersion>0,B=M.retroreflectivity>0,T=M.iridescence>0,Z=M.sheen>0,K=M.transmission>0,O=F&&!!M.anisotropyMap,xe=Le&&!!M.clearcoatMap,we=Le&&!!M.clearcoatNormalMap,te=Le&&!!M.clearcoatRoughnessMap,se=T&&!!M.iridescenceMap,he=T&&!!M.iridescenceThicknessMap,Te=Z&&!!M.sheenColorMap,pe=Z&&!!M.sheenRoughnessMap,de=!!M.specularMap,Ve=!!M.specularColorMap,Je=!!M.specularIntensityMap,Ke=K&&!!M.transmissionMap,W=K&&!!M.thicknessMap,Ae=!!M.gradientMap,ie=!!M.alphaMap,Pe=M.alphaTest>0,Be=!!M.alphaHash,ge=!!M.extensions,Ze=Mi;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Xe={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:le,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:c,batching:ve,batchingColor:ve&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:it,envMap:nt,envMapMode:nt&&V.mapping,envMapCubeUVHeight:z,aoMap:ft,lightMap:xt,bumpMap:st,normalMap:_t,displacementMap:ce,emissiveMap:Ee,normalMapObjectSpace:_t&&M.normalMapType===fd,normalMapTangentSpace:_t&&M.normalMapType===pc,packedNormalMap:_t&&M.normalMapType===pc&&X1(M.normalMap.format),metalnessMap:be,roughnessMap:Me,anisotropy:F,anisotropyMap:O,clearcoat:Le,clearcoatMap:xe,clearcoatNormalMap:we,clearcoatRoughnessMap:te,dispersion:Ye,retroreflection:B,iridescence:T,iridescenceMap:se,iridescenceThicknessMap:he,sheen:Z,sheenColorMap:Te,sheenRoughnessMap:pe,specularMap:de,specularColorMap:Ve,specularIntensityMap:Je,transmission:K,transmissionMap:Ke,thicknessMap:W,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===Br&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Pe,alphaHash:Be,combine:M.combine,mapUv:Ge&&m(M.map.channel),aoMapUv:ft&&m(M.aoMap.channel),lightMapUv:xt&&m(M.lightMap.channel),bumpMapUv:st&&m(M.bumpMap.channel),normalMapUv:_t&&m(M.normalMap.channel),displacementMapUv:ce&&m(M.displacementMap.channel),emissiveMapUv:Ee&&m(M.emissiveMap.channel),metalnessMapUv:be&&m(M.metalnessMap.channel),roughnessMapUv:Me&&m(M.roughnessMap.channel),anisotropyMapUv:O&&m(M.anisotropyMap.channel),clearcoatMapUv:xe&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&m(M.sheenRoughnessMap.channel),specularMapUv:de&&m(M.specularMap.channel),specularColorMapUv:Ve&&m(M.specularColorMap.channel),specularIntensityMapUv:Je&&m(M.specularIntensityMap.channel),transmissionMapUv:Ke&&m(M.transmissionMap.channel),thicknessMapUv:W&&m(M.thicknessMap.channel),alphaMapUv:ie&&m(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||F),vertexNormals:!!I.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ge||ie),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:oe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:Ee&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=f.has(1),Xe.vertexUv2s=f.has(2),Xe.vertexUv3s=f.has(3),f.clear(),Xe}function g(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(p(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function p(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function b(M){let E=d[M.type],C;if(E){let A=Ni[E];C=Ws.clone(A.uniforms)}else C=M.uniforms;return C}function _(M,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new G1(i,E,M,s),o.push(C),u.set(E,C)),C}function y(M){if(--M.usedTimes===0){let E=o.indexOf(M);o[E]=o[o.length-1],o.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:o,dispose:R}}function Y1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,f){i.get(a)[l]=f}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Z1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(c){let d=0;return c.isInstancedMesh&&(d+=2),c.isSkinnedMesh&&(d+=1),d}function l(c,d,m,x,g,p){let v=i[e];return v===void 0?(v={id:c.id,object:c,geometry:d,material:m,materialVariant:a(c),groupOrder:x,renderOrder:c.renderOrder,z:g,group:p},i[e]=v):(v.id=c.id,v.object=c,v.geometry=d,v.material=m,v.materialVariant=a(c),v.groupOrder=x,v.renderOrder=c.renderOrder,v.z=g,v.group=p),e++,v}function f(c,d,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let b=l(c,d,m,x,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function o(c,d,m,x,g,p){let v=l(c,d,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function u(c,d){t.length>1&&t.sort(c||Z1),n.length>1&&n.sort(d||Xd),s.length>1&&s.sort(d||Xd)}function h(){for(let c=e,d=i.length;c<d;c++){let m=i[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:f,unshift:o,finish:h,sort:u}}function $1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qd,i.set(n,[a])):s>=r.length?(a=new qd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function J1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new me};break;case"SpotLight":t={position:new k,direction:new k,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function K1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var j1=0;function Q1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e_(i){let e=new J1,t=K1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new k);let s=new k,r=new et,a=new et;function l(o){let u=0,h=0,c=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,b=0,_=0,y=0,S=0,R=0,M=0,E=0,C=0;o.sort(Q1);for(let D=0,P=o.length;D<P;D++){let w=o[D],I=w.color,U=w.intensity,N=w.distance,V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ys?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=I.r*U,h+=I.g*U,c+=I.b*U;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],U);C++}else if(w.isSunLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let H=w.shadow,G=t.get(w);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[m]=G,n.sunShadowMap[m]=V;let $=H.getViewportCount();for(let oe=0;oe<$;oe++)n.sunShadowMatrix[x+oe]=H.getMatrix(oe),n.sunShadowCascade[x+oe]=H._cascadeData[oe];x+=$,m++}n.sun[d]=z,d++}else if(w.isDirectionalLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let H=w.shadow,G=t.get(w);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=w.shadow.matrix,y++}n.directional[g]=z,g++}else if(w.isSpotLight){let z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(I).multiplyScalar(U),z.distance=N,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[v]=z;let H=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,H.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=H.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=V,R++}v++}else if(w.isRectAreaLight){let z=e.get(w);z.color.copy(I).multiplyScalar(U),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[b]=z,b++}else if(w.isPointLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let H=w.shadow,G=t.get(w);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=w.shadow.matrix,S++}n.point[p]=z,p++}else if(w.isHemisphereLight){let z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(U),z.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[_]=z,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=c;let A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==v||A.rectAreaLength!==b||A.hemiLength!==_||A.numSunShadows!==m||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==R||A.numSpotMaps!==M||A.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=b,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,A.sunLength=d,A.directionalLength=g,A.pointLength=p,A.spotLength=v,A.rectAreaLength=b,A.hemiLength=_,A.numSunShadows=m,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=R,A.numSpotMaps=M,A.numLightProbes=C,n.version=j1++)}function f(o,u){let h=0,c=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let v=0,b=o.length;v<b;v++){let _=o[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let y=n.directional[c];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),c++}else if(_.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:l,setupView:f,state:n}}function Yd(i){let e=new e_(i),t=[],n=[],s=[];function r(c){h.camera=c,t.length=0,n.length=0,s.length=0}function a(c){t.push(c)}function l(c){n.push(c)}function f(c){s.push(c)}function o(){e.setup(t)}function u(c){e.setupView(t,c)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:o,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:f}}function t_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Yd(i),e.set(s,[l])):r>=a.length?(l=new Yd(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`,s_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],r_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Zd=new et,sa=new k,mh=new k;function o_(i,e,t){let n=new Ir,s=new qe,r=new qe,a=new St,l=new Dr,f=new ml,o={},u=t.maxTextureSize,h={[vs]:En,[En]:vs,[Mn]:Mn},c=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),d=c.clone();d.defines.HORIZONTAL_PASS=1;let m=new yt;m.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(m,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let p=this.type;this.render=function(S,R,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Gf&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let P=p!==this.type;P&&R.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(I=>I.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,I=S.length;w<I;w++){let U=S[w],N=U.shadow;if(N===void 0){at("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let V=N.getFrameExtents();s.multiply(V),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,N.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=z,N.map===null||P===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fr){if(U.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ot(s.x,s.y,{format:ys,type:cn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new hs(s.x,s.y,ci),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=Pi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on}else U.isPointLight?(N.map=new yc(s.x),N.map.depthTexture=new fl(s.x,bi)):(N.map=new Ot(s.x,s.y),N.map.depthTexture=new hs(s.x,s.y,bi)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=Pi,this.type===zs?(N.map.depthTexture.compareFunction=z?gc:mc,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let H=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();U.isPointLight!==!0&&N.updateMatrices(U,M);for(let G=0;G<H;G++){let $=N.getCamera(G);if(U.isPointLight){let oe=N.camera,re=N.matrix,le=U.distance||oe.far;le!==oe.far&&(oe.far=le,oe.updateProjectionMatrix()),sa.setFromMatrixPosition(U.matrixWorld),oe.position.copy(sa),mh.copy(oe.position),mh.add(s_[G]),oe.up.copy(r_[G]),oe.lookAt(mh),oe.updateMatrixWorld(),re.makeTranslation(-sa.x,-sa.y,-sa.z),Zd.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Zd,oe.coordinateSystem,oe.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,G),i.clear();else{G===0&&(i.setRenderTarget(N.map),i.clear());let oe=N.getViewport(G);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),D.viewport(a)}n=N.getFrustum(G),_(R,M,$,U,this.type)}N.isPointLightShadow!==!0&&this.type===Fr&&v(N,M),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,A)};function v(S,R){let M=e.update(x);c.defines.VSM_SAMPLES!==S.blurSamples&&(c.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ot(s.x,s.y,{format:ys,type:cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),c.uniforms.shadow_pass.value=S.map.depthTexture,c.uniforms.resolution.value.set(S.map.width,S.map.height),c.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,M,c,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,M,d,x,null)}function b(S,R,M,E){let C=null,A=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)C=A;else if(C=M.isPointLight===!0?f:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=C.uuid,P=R.uuid,w=o[D];w===void 0&&(w={},o[D]=w);let I=w[P];I===void 0&&(I=C.clone(),w[P]=I,R.addEventListener("dispose",y)),C=I}if(C.visible=R.visible,C.wireframe=R.wireframe,E===Fr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=M}return C}function _(S,R,M,E,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Fr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let P=e.update(S),w=S.material;if(Array.isArray(w)){let I=P.groups;for(let U=0,N=I.length;U<N;U++){let V=I[U],z=w[V.materialIndex];if(z&&z.visible){let H=b(S,z,E,C);S.onBeforeShadow(i,S,R,M,P,H,V),i.renderBufferDirect(M,null,P,H,S,V),S.onAfterShadow(i,S,R,M,P,H,V)}}}else if(w.visible){let I=b(S,w,E,C);S.onBeforeShadow(i,S,R,M,P,I,null),i.renderBufferDirect(M,null,P,I,S,null),S.onAfterShadow(i,S,R,M,P,I,null)}}let D=S.children;for(let P=0,w=D.length;P<w;P++)_(D[P],R,M,E,C)}function y(S){S.target.removeEventListener("dispose",y);for(let M in o){let E=o[M],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function a_(i,e){function t(){let W=!1,Ae=new St,ie=null,Pe=new St(0,0,0,0);return{setMask:function(Be){ie!==Be&&!W&&(i.colorMask(Be,Be,Be,Be),ie=Be)},setLocked:function(Be){W=Be},setClear:function(Be,ge,Ze,Xe,Dt){Dt===!0&&(Be*=Xe,ge*=Xe,Ze*=Xe),Ae.set(Be,ge,Ze,Xe),Pe.equals(Ae)===!1&&(i.clearColor(Be,ge,Ze,Xe),Pe.copy(Ae))},reset:function(){W=!1,ie=null,Pe.set(-1,0,0,0)}}}function n(){let W=!1,Ae=!1,ie=null,Pe=null,Be=null;return{setReversed:function(ge){if(Ae!==ge){let Ze=e.get("EXT_clip_control");ge?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=ge;let Xe=Be;Be=null,this.setClear(Xe)}},getReversed:function(){return Ae},setTest:function(ge){ge?Y(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ge){ie!==ge&&!W&&(i.depthMask(ge),ie=ge)},setFunc:function(ge){if(Ae&&(ge=Td[ge]),Pe!==ge){switch(ge){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Be!==ge&&(Be=ge,Ae&&(ge=1-ge),i.clearDepth(ge))},reset:function(){W=!1,ie=null,Pe=null,Be=null,Ae=!1}}}function s(){let W=!1,Ae=null,ie=null,Pe=null,Be=null,ge=null,Ze=null,Xe=null,Dt=null;return{setTest:function(rt){W||(rt?Y(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(rt){Ae!==rt&&!W&&(i.stencilMask(rt),Ae=rt)},setFunc:function(rt,kn,$n){(ie!==rt||Pe!==kn||Be!==$n)&&(i.stencilFunc(rt,kn,$n),ie=rt,Pe=kn,Be=$n)},setOp:function(rt,kn,$n){(ge!==rt||Ze!==kn||Xe!==$n)&&(i.stencilOp(rt,kn,$n),ge=rt,Ze=kn,Xe=$n)},setLocked:function(rt){W=rt},setClear:function(rt){Dt!==rt&&(i.clearStencil(rt),Dt=rt)},reset:function(){W=!1,Ae=null,ie=null,Pe=null,Be=null,ge=null,Ze=null,Xe=null,Dt=null}}}let r=new t,a=new n,l=new s,f=new WeakMap,o=new WeakMap,u={},h={},c={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,b=null,_=null,y=null,S=null,R=null,M=new me(0,0,0),E=0,C=!1,A=null,D=null,P=null,w=null,I=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=V>=2);let H=null,G={},$=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),re=new St().fromArray($),le=new St().fromArray(oe);function Se(W,Ae,ie,Pe){let Be=new Uint8Array(4),ge=i.createTexture();i.bindTexture(W,ge),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ie;Ze++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ae+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return ge}let X={};X[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Tr),st(!1),_t(Nu),Y(i.CULL_FACE),ft(Xn);function Y(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ye(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Ce(W,Ae){return c[W]!==Ae?(i.bindFramebuffer(W,Ae),c[W]=Ae,W===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=Ae),W===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ve(W,Ae){let ie=m,Pe=!1;if(W){ie=d.get(Ae),ie===void 0&&(ie=[],d.set(Ae,ie));let Be=W.textures;if(ie.length!==Be.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ze=Be.length;ge<Ze;ge++)ie[ge]=i.COLOR_ATTACHMENT0+ge;ie.length=Be.length,Pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ie)}function Ge(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let it={[ks]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};it[Yf]=i.MIN,it[Zf]=i.MAX;let nt={[$f]:i.ZERO,[Jf]:i.ONE,[Kf]:i.SRC_COLOR,[Bu]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[ed]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(W,Ae,ie,Pe,Be,ge,Ze,Xe,Dt,rt){if(W===Xn){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),W!==Wf){if(W!==p||rt!==C){if((v!==ks||y!==ks)&&(i.blendEquation(i.FUNC_ADD),v=ks,y=ks),rt)switch(W){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",W);break}else switch(W){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",W);break}b=null,_=null,S=null,R=null,M.set(0,0,0),E=0,p=W,C=rt}return}Be=Be||Ae,ge=ge||ie,Ze=Ze||Pe,(Ae!==v||Be!==y)&&(i.blendEquationSeparate(it[Ae],it[Be]),v=Ae,y=Be),(ie!==b||Pe!==_||ge!==S||Ze!==R)&&(i.blendFuncSeparate(nt[ie],nt[Pe],nt[ge],nt[Ze]),b=ie,_=Pe,S=ge,R=Ze),(Xe.equals(M)===!1||Dt!==E)&&(i.blendColor(Xe.r,Xe.g,Xe.b,Dt),M.copy(Xe),E=Dt),p=W,C=!1}function xt(W,Ae){W.side===Mn?ye(i.CULL_FACE):Y(i.CULL_FACE);let ie=W.side===En;Ae&&(ie=!ie),st(ie),W.blending===Br&&W.transparent===!1?ft(Xn):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pe=W.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ee(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(W){A!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),A=W)}function _t(W){W!==Hf?(Y(i.CULL_FACE),W!==D&&(W===Nu?i.cullFace(i.BACK):W===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),D=W}function ce(W){W!==P&&(N&&i.lineWidth(W),P=W)}function Ee(W,Ae,ie){W?(Y(i.POLYGON_OFFSET_FILL),(w!==Ae||I!==ie)&&(w=Ae,I=ie,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ie))):ye(i.POLYGON_OFFSET_FILL)}function be(W){W?Y(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Me(W){W===void 0&&(W=i.TEXTURE0+U-1),H!==W&&(i.activeTexture(W),H=W)}function F(W,Ae,ie){ie===void 0&&(H===null?ie=i.TEXTURE0+U-1:ie=H);let Pe=G[ie];Pe===void 0&&(Pe={type:void 0,texture:void 0},G[ie]=Pe),(Pe.type!==W||Pe.texture!==Ae)&&(H!==ie&&(i.activeTexture(ie),H=ie),i.bindTexture(W,Ae||X[W]),Pe.type=W,Pe.texture=Ae)}function Le(){let W=G[H];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function xe(){try{i.texStorage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function we(){try{i.texStorage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function te(){try{i.texImage2D(...arguments)}catch(W){ct("WebGLState:",W)}}function se(){try{i.texImage3D(...arguments)}catch(W){ct("WebGLState:",W)}}function he(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Te(W,Ae){h[W]!==Ae&&(i.pixelStorei(W,Ae),h[W]=Ae)}function pe(W){re.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),re.copy(W))}function de(W){le.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),le.copy(W))}function Ve(W,Ae){let ie=o.get(Ae);ie===void 0&&(ie=new WeakMap,o.set(Ae,ie));let Pe=ie.get(W);Pe===void 0&&(Pe=i.getUniformBlockIndex(Ae,W.name),ie.set(W,Pe))}function Je(W,Ae){let Pe=o.get(Ae).get(W);f.get(Ae)!==Pe&&(i.uniformBlockBinding(Ae,Pe,W.__bindingPointIndex),f.set(Ae,Pe))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},H=null,G={},c={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,b=null,_=null,y=null,S=null,R=null,M=new me(0,0,0),E=0,C=!1,A=null,D=null,P=null,w=null,I=null,re.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Y,disable:ye,bindFramebuffer:Ce,drawBuffers:ve,useProgram:Ge,setBlending:ft,setMaterial:xt,setFlipSided:st,setCullFace:_t,setLineWidth:ce,setPolygonOffset:Ee,setScissorTest:be,activeTexture:Me,bindTexture:F,unbindTexture:Le,compressedTexImage2D:Ye,compressedTexImage3D:B,texImage2D:te,texImage3D:se,pixelStorei:Te,getParameter:he,updateUBOMapping:Ve,uniformBlockBinding:Je,texStorage2D:xe,texStorage3D:we,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:O,scissor:pe,viewport:de,reset:Ke}}function l_(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new qe,u=new WeakMap,h=new Set,c,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,T){return m?new OffscreenCanvas(B,T):Ro("canvas")}function g(B,T,Z){let K=1,O=Ye(B);if((O.width>Z||O.height>Z)&&(K=Z/Math.max(O.width,O.height)),K<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let xe=Math.floor(K*O.width),we=Math.floor(K*O.height);c===void 0&&(c=x(xe,we));let te=T?x(xe,we):c;return te.width=xe,te.height=we,te.getContext("2d").drawImage(B,0,0,xe,we),at("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+xe+"x"+we+")."),te}else return"data"in B&&at("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),B;return B}function p(B){return B.generateMipmaps}function v(B){i.generateMipmap(B)}function b(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(B,T,Z,K,O,xe=!1){if(B!==null){if(i[B]!==void 0)return i[B];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let we;K&&(we=e.get("EXT_texture_norm16"),we||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=T;if(T===i.RED&&(Z===i.FLOAT&&(te=i.R32F),Z===i.HALF_FLOAT&&(te=i.R16F),Z===i.UNSIGNED_BYTE&&(te=i.R8),Z===i.UNSIGNED_SHORT&&we&&(te=we.R16_EXT),Z===i.SHORT&&we&&(te=we.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.R8UI),Z===i.UNSIGNED_SHORT&&(te=i.R16UI),Z===i.UNSIGNED_INT&&(te=i.R32UI),Z===i.BYTE&&(te=i.R8I),Z===i.SHORT&&(te=i.R16I),Z===i.INT&&(te=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(te=i.RG32F),Z===i.HALF_FLOAT&&(te=i.RG16F),Z===i.UNSIGNED_BYTE&&(te=i.RG8),Z===i.UNSIGNED_SHORT&&we&&(te=we.RG16_EXT),Z===i.SHORT&&we&&(te=we.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RG8UI),Z===i.UNSIGNED_SHORT&&(te=i.RG16UI),Z===i.UNSIGNED_INT&&(te=i.RG32UI),Z===i.BYTE&&(te=i.RG8I),Z===i.SHORT&&(te=i.RG16I),Z===i.INT&&(te=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(te=i.RGB16UI),Z===i.UNSIGNED_INT&&(te=i.RGB32UI),Z===i.BYTE&&(te=i.RGB8I),Z===i.SHORT&&(te=i.RGB16I),Z===i.INT&&(te=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),Z===i.UNSIGNED_INT&&(te=i.RGBA32UI),Z===i.BYTE&&(te=i.RGBA8I),Z===i.SHORT&&(te=i.RGBA16I),Z===i.INT&&(te=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&we&&(te=we.RGB16_EXT),Z===i.SHORT&&we&&(te=we.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),T===i.RGBA){let se=xe?Ao:bt.getTransfer(O);Z===i.FLOAT&&(te=i.RGBA32F),Z===i.HALF_FLOAT&&(te=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(te=se===It?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&we&&(te=we.RGBA16_EXT),Z===i.SHORT&&we&&(te=we.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(B,T){let Z;return B?T===null||T===bi||T===zr?Z=i.DEPTH24_STENCIL8:T===ci?Z=i.DEPTH32F_STENCIL8:T===Or&&(Z=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bi||T===zr?Z=i.DEPTH_COMPONENT24:T===ci?Z=i.DEPTH_COMPONENT32F:T===Or&&(Z=i.DEPTH_COMPONENT16),Z}function S(B,T){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==on&&B.minFilter!==Wt?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function R(B){let T=B.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function M(B){let T=B.target;T.removeEventListener("dispose",M),A(T)}function E(B){let T=n.get(B);if(T.__webglInit===void 0)return;let Z=B.source,K=d.get(Z);if(K){let O=K[T.__cacheKey];O.usedTimes--,O.usedTimes===0&&C(B),Object.keys(K).length===0&&d.delete(Z)}n.remove(B)}function C(B){let T=n.get(B);i.deleteTexture(T.__webglTexture);let Z=B.source,K=d.get(Z);delete K[T.__cacheKey],a.memory.textures--}function A(B){let T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let O=0;O<T.__webglFramebuffer[K].length;O++)i.deleteFramebuffer(T.__webglFramebuffer[K][O]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Z=B.textures;for(let K=0,O=Z.length;K<O;K++){let xe=n.get(Z[K]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(Z[K])}n.remove(B)}let D=0;function P(){D=0}function w(){return D}function I(B){D=B}function U(){let B=D;return B>=s.maxTextures&&at("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,B}function N(B){let T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function V(B,T){let Z=n.get(B);if(B.isVideoTexture&&F(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Z.__version!==B.version){let K=B.image;if(K===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,B,T);return}}else B.isExternalTexture&&(Z.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function z(B,T){let Z=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Z.__version!==B.version){ye(Z,B,T);return}else B.isExternalTexture&&(Z.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function H(B,T){let Z=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Z.__version!==B.version){ye(Z,B,T);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function G(B,T){let Z=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Z.__version!==B.version){Ce(Z,B,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let $={[Er]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[sl]:i.MIRRORED_REPEAT},oe={[on]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},re={[pd]:i.NEVER,[_d]:i.ALWAYS,[md]:i.LESS,[mc]:i.LEQUAL,[gd]:i.EQUAL,[gc]:i.GEQUAL,[vd]:i.GREATER,[xd]:i.NOTEQUAL};function le(B,T){if(T.type===ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wt||T.magFilter===Il||T.magFilter===$o||T.magFilter===qn||T.minFilter===Wt||T.minFilter===Il||T.minFilter===$o||T.minFilter===qn)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,$[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,$[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,$[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,oe[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===on||T.minFilter!==$o&&T.minFilter!==qn||T.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Se(B,T){let Z=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",R));let K=T.source,O=d.get(K);O===void 0&&(O={},d.set(K,O));let xe=N(T);if(xe!==B.__cacheKey){O[xe]===void 0&&(O[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),O[xe].usedTimes++;let we=O[B.__cacheKey];we!==void 0&&(O[B.__cacheKey].usedTimes--,we.usedTimes===0&&C(T)),B.__cacheKey=xe,B.__webglTexture=O[xe].texture}return Z}function X(B,T,Z){return Math.floor(Math.floor(B/Z)/T)}function Y(B,T,Z,K){let xe=B.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,K,T.data);else{xe.sort((Te,pe)=>Te.start-pe.start);let we=0;for(let Te=1;Te<xe.length;Te++){let pe=xe[we],de=xe[Te],Ve=pe.start+pe.count,Je=X(de.start,T.width,4),Ke=X(pe.start,T.width,4);de.start<=Ve+1&&Je===Ke&&X(de.start+de.count-1,T.width,4)===Je?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++we,xe[we]=de)}xe.length=we+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Te=0,pe=xe.length;Te<pe;Te++){let de=xe[Te],Ve=Math.floor(de.start/4),Je=Math.ceil(de.count/4),Ke=Ve%T.width,W=Math.floor(Ve/T.width),Ae=Je,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Ke,W,Ae,ie,Z,K,T.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function ye(B,T,Z){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let O=Se(B,T),xe=T.source;t.bindTexture(K,B.__webglTexture,i.TEXTURE0+Z);let we=n.get(xe);if(xe.version!==we.__version||O===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ie=bt.getPrimaries(bt.workingColorSpace),Pe=T.colorSpace===Si?null:bt.getPrimaries(T.colorSpace),Be=T.colorSpace===Si||ie===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let se=g(T.image,!1,s.maxTextureSize);se=Le(T,se);let he=r.convert(T.format,T.colorSpace),Te=r.convert(T.type),pe=_(T.internalFormat,he,Te,T.normalized,T.colorSpace,T.isVideoTexture);le(K,T);let de,Ve=T.mipmaps,Je=T.isVideoTexture!==!0,Ke=we.__version===void 0||O===!0,W=xe.dataReady,Ae=S(T,se);if(T.isDepthTexture)pe=y(T.format===_s,T.type),Ke&&(Je?t.texStorage2D(i.TEXTURE_2D,1,pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,he,Te,null));else if(T.isDataTexture)if(Ve.length>0){Je&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ae,pe,Ve[0].width,Ve[0].height);for(let ie=0,Pe=Ve.length;ie<Pe;ie++)de=Ve[ie],Je?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,ie,pe,de.width,de.height,0,he,Te,de.data);T.generateMipmaps=!1}else Je?(Ke&&t.texStorage2D(i.TEXTURE_2D,Ae,pe,se.width,se.height),W&&Y(T,se,he,Te)):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,he,Te,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Je&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,pe,Ve[0].width,Ve[0].height,se.depth);for(let ie=0,Pe=Ve.length;ie<Pe;ie++)if(de=Ve[ie],T.format!==Yn)if(he!==null)if(Je){if(W)if(T.layerUpdates.size>0){let Be=sh(de.width,de.height,T.format,T.type);for(let ge of T.layerUpdates){let Ze=de.data.subarray(ge*Be/de.data.BYTES_PER_ELEMENT,(ge+1)*Be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ge,de.width,de.height,1,he,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,se.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,pe,de.width,de.height,se.depth,0,de.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,se.depth,he,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,pe,de.width,de.height,se.depth,0,he,Te,de.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Je&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ae,pe,Ve[0].width,Ve[0].height);for(let ie=0,Pe=Ve.length;ie<Pe;ie++)de=Ve[ie],T.format!==Yn?he!==null?Je?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,pe,de.width,de.height,0,de.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,ie,pe,de.width,de.height,0,he,Te,de.data)}else if(T.isDataArrayTexture)if(Je){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,pe,se.width,se.height,se.depth),W)if(T.layerUpdates.size>0){let ie=sh(se.width,se.height,T.format,T.type);for(let Pe of T.layerUpdates){let Be=se.data.subarray(Pe*ie/se.data.BYTES_PER_ELEMENT,(Pe+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,se.width,se.height,1,he,Te,Be)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Te,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,se.width,se.height,se.depth,0,he,Te,se.data);else if(T.isData3DTexture)Je?(Ke&&t.texStorage3D(i.TEXTURE_3D,Ae,pe,se.width,se.height,se.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Te,se.data)):t.texImage3D(i.TEXTURE_3D,0,pe,se.width,se.height,se.depth,0,he,Te,se.data);else if(T.isFramebufferTexture){if(Ke)if(Je)t.texStorage2D(i.TEXTURE_2D,Ae,pe,se.width,se.height);else{let ie=se.width,Pe=se.height;for(let Be=0;Be<Ae;Be++)t.texImage2D(i.TEXTURE_2D,Be,pe,ie,Pe,0,he,Te,null),ie>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),h.add(T),ie.onpaint=Pe=>{let Be=Pe.changedElements;for(let ge of h)Be.includes(ge.image)&&(ge.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Be=i.RGBA,ge=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,ge,Ze,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Je&&Ke){let ie=Ye(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Ae,pe,ie.width,ie.height)}for(let ie=0,Pe=Ve.length;ie<Pe;ie++)de=Ve[ie],Je?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he,Te,de):t.texImage2D(i.TEXTURE_2D,ie,pe,he,Te,de);T.generateMipmaps=!1}else if(Je){if(Ke){let ie=Ye(se);t.texStorage2D(i.TEXTURE_2D,Ae,pe,ie.width,ie.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,se)}else t.texImage2D(i.TEXTURE_2D,0,pe,he,Te,se);p(T)&&v(K),we.__version=xe.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Ce(B,T,Z){if(T.image.length!==6)return;let K=Se(B,T),O=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+Z);let xe=n.get(O);if(O.version!==xe.__version||K===!0){t.activeTexture(i.TEXTURE0+Z);let we=bt.getPrimaries(bt.workingColorSpace),te=T.colorSpace===Si?null:bt.getPrimaries(T.colorSpace),se=T.colorSpace===Si||we===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let he=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ge=0;ge<6;ge++)!he&&!Te?pe[ge]=g(T.image[ge],!0,s.maxCubemapSize):pe[ge]=Te?T.image[ge].image:T.image[ge],pe[ge]=Le(T,pe[ge]);let de=pe[0],Ve=r.convert(T.format,T.colorSpace),Je=r.convert(T.type),Ke=_(T.internalFormat,Ve,Je,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ae=xe.__version===void 0||K===!0,ie=O.dataReady,Pe=S(T,de);le(i.TEXTURE_CUBE_MAP,T);let Be;if(he){W&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ke,de.width,de.height);for(let ge=0;ge<6;ge++){Be=pe[ge].mipmaps;for(let Ze=0;Ze<Be.length;Ze++){let Xe=Be[Ze];T.format!==Yn?Ve!==null?W?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,Xe.width,Xe.height,Ve,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,Ke,Xe.width,Xe.height,0,Xe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,0,0,Xe.width,Xe.height,Ve,Je,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze,Ke,Xe.width,Xe.height,0,Ve,Je,Xe.data)}}}else{if(Be=T.mipmaps,W&&Ae){Be.length>0&&Pe++;let ge=Ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ke,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pe[ge].width,pe[ge].height,Ve,Je,pe[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,pe[ge].width,pe[ge].height,0,Ve,Je,pe[ge].data);for(let Ze=0;Ze<Be.length;Ze++){let Dt=Be[Ze].image[ge].image;W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,Dt.width,Dt.height,Ve,Je,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,Ke,Dt.width,Dt.height,0,Ve,Je,Dt.data)}}else{W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Je,pe[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ke,Ve,Je,pe[ge]);for(let Ze=0;Ze<Be.length;Ze++){let Xe=Be[Ze];W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,0,0,Ve,Je,Xe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ze+1,Ke,Ve,Je,Xe.image[ge])}}}p(T)&&v(i.TEXTURE_CUBE_MAP),xe.__version=O.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function ve(B,T,Z,K,O,xe){let we=r.convert(Z.format,Z.colorSpace),te=r.convert(Z.type),se=_(Z.internalFormat,we,te,Z.normalized,Z.colorSpace),he=n.get(T),Te=n.get(Z);if(Te.__renderTarget=T,!he.__hasExternalTextures){let pe=Math.max(1,T.width>>xe),de=Math.max(1,T.height>>xe);O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?t.texImage3D(O,xe,se,pe,de,T.depth,0,we,te,null):t.texImage2D(O,xe,se,pe,de,0,we,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Me(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,O,Te.__webglTexture,0,be(T)):(O===i.TEXTURE_2D||O>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,O,Te.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(B,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){let K=T.depthTexture,O=K&&K.isDepthTexture?K.type:null,xe=y(T.stencilBuffer,O),we=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(T),xe,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(T),xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,B)}else{let K=T.textures;for(let O=0;O<K.length;O++){let xe=K[O],we=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),se=_(xe.internalFormat,we,te,xe.normalized,xe.colorSpace);Me(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(T),se,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(T),se,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,se,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(B,T,Z){let K=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O=n.get(T.depthTexture);if(O.__renderTarget=T,(!O.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(O.__webglInit===void 0&&(O.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),O.__webglTexture===void 0){O.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),le(i.TEXTURE_CUBE_MAP,T.depthTexture);let he=r.convert(T.depthTexture.format),Te=r.convert(T.depthTexture.type),pe;T.depthTexture.format===Pi?pe=i.DEPTH_COMPONENT24:T.depthTexture.format===_s&&(pe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,T.width,T.height,0,he,Te,null)}}else V(T.depthTexture,0);let xe=O.__webglTexture,we=be(T),te=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,se=T.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pi)Me(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,xe,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,xe,0);else if(T.depthTexture.format===_s)Me(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,xe,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(B){let T=n.get(B),Z=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){let K=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let O=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",O)};K.addEventListener("dispose",O),T.__depthDisposeCallback=O}T.__boundDepthTexture=K}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let K=0;K<6;K++)it(T.__webglFramebuffer[K],B,K);else{let K=B.texture.mipmaps;K&&K.length>0?it(T.__webglFramebuffer[0],B,0):it(T.__webglFramebuffer,B,0)}else if(Z){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Ge(T.__webglDepthbuffer[K],B,!1);else{let O=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,xe)}}else{let K=B.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ge(T.__webglDepthbuffer,B,!1);else{let O=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(B,T,Z){let K=n.get(B);T!==void 0&&ve(K.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&nt(B)}function xt(B){let T=B.texture,Z=n.get(B),K=n.get(T);B.addEventListener("dispose",M);let O=B.textures,xe=B.isWebGLCubeRenderTarget===!0,we=O.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,a.memory.textures++),xe){Z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[te]=[];for(let se=0;se<T.mipmaps.length;se++)Z.__webglFramebuffer[te][se]=i.createFramebuffer()}else Z.__webglFramebuffer[te]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let te=0;te<T.mipmaps.length;te++)Z.__webglFramebuffer[te]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(we)for(let te=0,se=O.length;te<se;te++){let he=n.get(O[te]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&Me(B)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let te=0;te<O.length;te++){let se=O[te];Z.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[te]);let he=r.convert(se.format,se.colorSpace),Te=r.convert(se.type),pe=_(se.internalFormat,he,Te,se.normalized,se.colorSpace,B.isXRRenderTarget===!0),de=be(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,Z.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(Z.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),le(i.TEXTURE_CUBE_MAP,T);for(let te=0;te<6;te++)if(T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)ve(Z.__webglFramebuffer[te][se],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else ve(Z.__webglFramebuffer[te],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(T)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let te=0,se=O.length;te<se;te++){let he=O[te],Te=n.get(he),pe=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Te.__webglTexture),le(pe,he),ve(Z.__webglFramebuffer,B,he,i.COLOR_ATTACHMENT0+te,pe,0),p(he)&&v(pe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(te=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,K.__webglTexture),le(te,T),T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)ve(Z.__webglFramebuffer[se],B,T,i.COLOR_ATTACHMENT0,te,se);else ve(Z.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,te,0);p(T)&&v(te),t.unbindTexture()}B.depthBuffer&&nt(B)}function st(B){let T=B.textures;for(let Z=0,K=T.length;Z<K;Z++){let O=T[Z];if(p(O)){let xe=b(B),we=n.get(O).__webglTexture;t.bindTexture(xe,we),v(xe),t.unbindTexture()}}}let _t=[],ce=[];function Ee(B){if(B.samples>0){if(Me(B)===!1){let T=B.textures,Z=B.width,K=B.height,O=i.COLOR_BUFFER_BIT,xe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(B),te=T.length>1;if(te)for(let he=0;he<T.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let se=B.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<T.length;he++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(O|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(O|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Te=n.get(T[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,Z,K,0,0,Z,K,O,i.NEAREST),f===!0&&(_t.length=0,ce.length=0,_t.push(i.COLOR_ATTACHMENT0+he),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(_t.push(xe),ce.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let he=0;he<T.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Te=n.get(T[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&f){let T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function be(B){return Math.min(s.maxSamples,B.samples)}function Me(B){let T=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(B){let T=a.render.frame;u.get(B)!==T&&(u.set(B,T),B.update())}function Le(B,T){let Z=B.colorSpace,K=B.format,O=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Z!==wo&&Z!==Si&&(bt.getTransfer(Z)===It?(K!==Yn||O!==In)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",Z)),T}function Ye(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(o.width=B.naturalWidth||B.width,o.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(o.width=B.displayWidth,o.height=B.displayHeight):(o.width=B.width,o.height=B.height),o}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=w,this.setTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=ft,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c_(i,e){function t(n,s=Si){let r,a=bt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return i.BYTE;if(n===Zu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Ku)return i.ALPHA;if(n===ju)return i.RGB;if(n===Yn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===Jo||n===Ko||n===jo||n===Qo)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===zl||n===kl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===ea||n===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===fc||n===ta||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:u_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",f=1,o=null,u=null,h=null,c=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Sh,p={},v=t.getContextAttributes(),b=null,_=null,y=[],S=[],R=new qe,M=null,E=null,C=new Tn;C.viewport=new St;let A=new Tn;A.viewport=new St;let D=[C,A],P=new Al,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=y[X];return Y===void 0&&(Y=new Cr,y[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=y[X];return Y===void 0&&(Y=new Cr,y[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=y[X];return Y===void 0&&(Y=new Cr,y[X]=Y),Y.getHandSpace()};function U(X){let Y=S.indexOf(X.inputSource);if(Y===-1)return;let ye=y[Y];ye!==void 0&&(ye.update(X.inputSource,X.frame,o||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){let Y=S[X];Y!==null&&(S[X]=null,y[X].disconnect(Y))}w=null,I=null,g.reset();for(let X in p)delete p[X];if(e.setRenderTarget(b),d=null,c=null,h=null,s=null,_=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ce=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?_s:Pi,Ce=v.stencil?zr:bi);let Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),c=h.createProjectionLayer(Ge),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),_=new Ot(c.textureWidth,c.textureHeight,{format:Yn,type:In,depthTexture:new hs(c.textureWidth,c.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ot(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(f),o=null,a=await s.requestReferenceSpace(l),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(X){for(let Y=0;Y<X.removed.length;Y++){let ye=X.removed[Y],Ce=S.indexOf(ye);Ce>=0&&(S[Ce]=null,y[Ce].disconnect(ye))}for(let Y=0;Y<X.added.length;Y++){let ye=X.added[Y],Ce=S.indexOf(ye);if(Ce===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=S.length){S.push(ye),Ce=Ge;break}else if(S[Ge]===null){S[Ge]=ye,Ce=Ge;break}if(Ce===-1)break}let ve=y[Ce];ve&&ve.connect(ye)}}let z=new k,H=new k;function G(X,Y,ye){z.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(ye.matrixWorld);let Ce=z.distanceTo(H),ve=Y.projectionMatrix.elements,Ge=ye.projectionMatrix.elements,it=ve[14]/(ve[10]-1),nt=ve[14]/(ve[10]+1),ft=(ve[9]+1)/ve[5],xt=(ve[9]-1)/ve[5],st=(ve[8]-1)/ve[0],_t=(Ge[8]+1)/Ge[0],ce=it*st,Ee=it*_t,be=Ce/(-st+_t),Me=be*-st;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Me),X.translateZ(be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let F=it+be,Le=nt+be,Ye=ce-Me,B=Ee+(Ce-Me),T=ft*nt/Le*F,Z=xt*nt/Le*F;X.projectionMatrix.makePerspective(Ye,B,T,Z,F,Le),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Y=X.near,ye=X.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),P.near=A.near=C.near=Y,P.far=A.far=C.far=ye,(w!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),w=P.near,I=P.far),P.layers.mask=X.layers.mask|6,C.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let Ce=X.parent,ve=P.cameras;$(P,Ce);for(let Ge=0;Ge<ve.length;Ge++)$(ve[Ge],Ce);ve.length===2?G(P,C,A):P.projectionMatrix.copy(C.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),oe(X,P,Ce)};function oe(X,Y,ye){ye===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Co*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(c===null&&d===null))return f},this.setFoveation=function(X){f=X,c!==null&&(c.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(X){return p[X]};let re=null;function le(X,Y){if(u=Y.getViewerPose(o||a),m=Y,u!==null){let ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ce=!1;ye.length!==P.cameras.length&&(P.cameras.length=0,Ce=!0);for(let nt=0;nt<ye.length;nt++){let ft=ye[nt],xt=null;if(d!==null)xt=d.getViewport(ft);else{let _t=h.getViewSubImage(c,ft);xt=_t.viewport,nt===0&&(e.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(_))}let st=D[nt];st===void 0&&(st=new Tn,st.layers.enable(nt),st.viewport=new St,D[nt]=st),st.matrix.fromArray(ft.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ft.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(xt.x,xt.y,xt.width,xt.height),nt===0&&(P.matrix.copy(st.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ce===!0&&P.cameras.push(st)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let nt=h.getDepthInformation(ye[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let nt=0;nt<ye.length;nt++){let ft=ye[nt].camera;if(ft){let xt=p[ft];xt||(xt=new Oo,p[ft]=xt);let st=h.getCameraImage(ft);xt.sourceTexture=st}}}}for(let ye=0;ye<y.length;ye++){let Ce=S[ye],ve=y[ye];Ce!==null&&ve!==void 0&&ve.update(Ce,Y,o||a)}re&&re(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let Se=new $d;Se.setAnimationLoop(le),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}},f_=new et,t0=new ht;t0.set(-1,0,0,0,1,0,0,0,1);function d_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,th(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),c(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?f(g,p,v,b):p.isSpriteMaterial?o(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===En&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===En&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),b=v.envMap,_=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(t0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function f(g,p,v,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function c(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(_,y){let S=y.program;n.uniformBlockBinding(_,S)}function o(_,y){let S=s[_.id];S===void 0&&(g(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",v));let R=y.program;n.updateUBOMapping(_,R);let M=e.render.frame;r[_.id]!==M&&(c(_),r[_.id]=M)}function u(_){let y=h();_.__bindingPointIndex=y;let S=i.createBuffer(),R=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){let y=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=S.length;M<E;M++){let C=S[M];if(Array.isArray(C))for(let A=0,D=C.length;A<D;A++)d(C[A],M,A,R);else d(C,M,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,S,R){if(x(_,y,S,R)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let C=0;for(let A=0;A<E.length;A++){let D=E[A],P=p(D);m(D,_.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function m(_,y,S){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,S)}function x(_,y,S,R){let M=_.value,E=y+"_"+S;if(R[E]===void 0)return typeof M=="number"||typeof M=="boolean"?R[E]=M:ArrayBuffer.isView(M)?R[E]=M.slice():R[E]=M.clone(),!0;{let C=R[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return R[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(_){let y=_.uniforms,S=0,R=16;for(let E=0,C=y.length;E<C;E++){let A=Array.isArray(y[E])?y[E]:[y[E]];for(let D=0,P=A.length;D<P;D++){let w=A[D],I=Array.isArray(w.value)?w.value:[w.value];for(let U=0,N=I.length;U<N;U++){let V=I[U],z=p(V),H=S%R,G=H%z.boundary,$=H+G;S+=G,$!==0&&R-$<z.storage&&(S+=R-$),w.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=z.storage}}}let M=S%R;return M>0&&(S+=R-M),_.__size=S,_.__cache={},this}function p(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):at("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:f,update:o,dispose:b}}var m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function g_(){return Di===null&&(Di=new us(m_,16,16,ys,cn),Di.name="DFG_LUT",Di.minFilter=Wt,Di.magFilter=Wt,Di.wrapS=Ci,Di.wrapT=Ci,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var Mc=class{constructor(e={}){let{canvas:t=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:o=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:c=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([Bl,Fl,Ul]),p=new Set([In,bi,Or,zr,Dl,Nl]),v=new Uint32Array(4),b=new Int32Array(4),_=new k,y=null,S=null,R=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,A=!1,D=null,P=null,w=null,I=null;this._outputColorSpace=jt;let U=0,N=0,V=null,z=-1,H=null,G=new St,$=new St,oe=null,re=new me(0),le=0,Se=t.width,X=t.height,Y=1,ye=null,Ce=null,ve=new St(0,0,Se,X),Ge=new St(0,0,Se,X),it=!1,nt=new Ir,ft=!1,xt=!1,st=new et,_t=new k,ce=new St,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Me(){return V===null?Y:1}let F=n;function Le(L,q){return t.getContext(L,q)}let Ye,B,T,Z,K,O,xe,we,te,se,he,Te,pe,de,Ve,Je,Ke,W,Ae,ie,Pe,Be,ge;try{let L={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),F===null){let q="webgl2";if(F=Le(q,L),F===null)throw Le(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(L){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),ct("WebGLRenderer: "+L.message),L}function Ze(){Ye=new Sx(F),Ye.init(),Pe=new c_(F,Ye),B=new dx(F,Ye,e,Pe),T=new a_(F,Ye),B.reversedDepthBuffer&&c&&T.buffers.depth.setReversed(!0),P=F.createFramebuffer(),w=F.createFramebuffer(),I=F.createFramebuffer(),Z=new wx(F),K=new Y1,O=new l_(F,Ye,T,K,B,Pe,Z),xe=new bx(C),we=new Rm(F),Be=new hx(F,we),te=new Tx(F,we,Z,Be),se=new Rx(F,te,we,Be,Z),W=new Ax(F,B,O),Ve=new px(K),he=new q1(C,xe,Ye,B,Be,Ve),Te=new d_(C,K),pe=new $1,de=new t_(Ye),Ke=new ux(C,xe,T,se,m,f),Je=new o_(C,se,B),ge=new p_(F,Z,B,T),Ae=new fx(F,Ye,Z),ie=new Ex(F,Ye,Z),Z.programs=he.programs,C.capabilities=B,C.extensions=Ye,C.properties=K,C.renderLists=pe,C.shadowMap=Je,C.state=T,C.info=Z}x!==In&&(E=new Px(x,t.width,t.height,l,s,r));let Xe=new Th(C,F);this.xr=Xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let L=Ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(Se,X,!1))},this.getSize=function(L){return L.set(Se,X)},this.setSize=function(L,q,Q=!0){if(Xe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=L,X=q,t.width=Math.floor(L*Y),t.height=Math.floor(q*Y),Q===!0&&(t.style.width=L+"px",t.style.height=q+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(Se*Y,X*Y).floor()},this.setDrawingBufferSize=function(L,q,Q){Se=L,X=q,Y=Q,t.width=Math.floor(L*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(x===In){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(ve)},this.setViewport=function(L,q,Q,J){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,q,Q,J),T.viewport(G.copy(ve).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(Ge)},this.setScissor=function(L,q,Q,J){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,q,Q,J),T.scissor($.copy(Ge).multiplyScalar(Y).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(L){T.setScissorTest(it=L)},this.setOpaqueSort=function(L){ye=L},this.setTransparentSort=function(L){Ce=L},this.getClearColor=function(L){return L.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,Q=!0){let J=0;if(L){let j=!1;if(V!==null){let Ne=V.texture.format;j=g.has(Ne)}if(j){let Ne=V.texture.type,Ie=p.has(Ne),De=Ke.getClearColor(),ke=Ke.getClearAlpha(),We=De.r,pt=De.g,$e=De.b;Ie?(v[0]=We,v[1]=pt,v[2]=$e,v[3]=ke,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=We,b[1]=pt,b[2]=$e,b[3]=ke,F.clearBufferiv(F.COLOR,0,b))}else J|=F.COLOR_BUFFER_BIT}q&&(J|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Ke.dispose(),pe.dispose(),de.dispose(),K.dispose(),xe.dispose(),se.dispose(),Be.dispose(),ge.dispose(),he.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",ro),Xe.removeEventListener("sessionend",oo),Ai.stop()};function Dt(L){L.preventDefault(),eh("WebGLRenderer: Context Lost."),A=!0}function rt(){eh("WebGLRenderer: Context Restored."),A=!1;let L=Z.autoReset,q=Je.enabled,Q=Je.autoUpdate,J=Je.needsUpdate,j=Je.type;Ze(),Z.autoReset=L,Je.enabled=q,Je.autoUpdate=Q,Je.needsUpdate=J,Je.type=j}function kn(L){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function $n(L){let q=L.target;q.removeEventListener("dispose",$n),_a(q)}function _a(L){qc(L),K.remove(L)}function qc(L){let q=K.get(L).programs;q!==void 0&&(q.forEach(function(Q){he.releaseProgram(Q)}),L.isShaderMaterial&&he.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,Q,J,j,Ne){q===null&&(q=Ee);let Ie=j.isMesh&&j.matrixWorld.determinantAffine()<0,De=Yc(L,q,Q,J,j);T.setMaterial(J,Ie);let ke=Q.index,We=1;if(J.wireframe===!0){if(ke=te.getWireframeAttribute(Q),ke===void 0)return;We=2}let pt=Q.drawRange,$e=Q.attributes.position,_e=pt.start*We,mt=(pt.start+pt.count)*We;Ne!==null&&(_e=Math.max(_e,Ne.start*We),mt=Math.min(mt,(Ne.start+Ne.count)*We)),ke!==null?(_e=Math.max(_e,0),mt=Math.min(mt,ke.count)):$e!=null&&(_e=Math.max(_e,0),mt=Math.min(mt,$e.count));let Qe=mt-_e;if(Qe<0||Qe===1/0)return;Be.setup(j,J,De,Q,ke);let Ft,Pt=Ae;if(ke!==null&&(Ft=we.get(ke),Pt=ie,Pt.setIndex(Ft)),j.isMesh)J.wireframe===!0?(T.setLineWidth(J.wireframeLinewidth*Me()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(j.isLine){let gn=J.linewidth;gn===void 0&&(gn=1),T.setLineWidth(gn*Me()),j.isLineSegments?Pt.setMode(F.LINES):j.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else j.isPoints?Pt.setMode(F.POINTS):j.isSprite&&Pt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let gn=j._multiDrawStarts,Oe=j._multiDrawCounts,ue=j._multiDrawCount,Fe=ke?we.get(ke).bytesPerElement:1,He=K.get(J).currentProgram.getUniforms();for(let Ct=0;Ct<ue;Ct++)He.setValue(F,"_gl_DrawID",Ct),Pt.render(gn[Ct]/Fe,Oe[Ct])}else if(j.isInstancedMesh)Pt.renderInstances(_e,Qe,j.count);else if(Q.isInstancedBufferGeometry){let gn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Oe=Math.min(Q.instanceCount,gn);Pt.renderInstances(_e,Qe,Oe)}else Pt.render(_e,Qe)};function nr(L,q,Q,J){D!==null&&L.isNodeMaterial&&D.setObject(J,L),ft===!0&&Ve.setState(L,Q,!1),L.transparent===!0&&L.side===Mn&&L.forceSinglePass===!1?(L.side=En,L.needsUpdate=!0,is(L,q,J),L.side=vs,L.needsUpdate=!0,is(L,q,J),L.side=Mn):is(L,q,J)}this.compile=function(L,q,Q=null){Q===null&&(Q=L),D!==null&&D.renderStart(L,q,Q),S=de.get(Q),S.init(q),M.push(S),Q.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),L!==Q&&L.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),xt=this.localClippingEnabled,ft=Ve.init(this.clippingPlanes,xt),ft===!0&&Ve.setGlobalState(this.clippingPlanes,q),D!==null&&Je.render(S.state.shadowsArray,Q,q);let J=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ne=j.material;if(Ne)if(Array.isArray(Ne))for(let Ie=0;Ie<Ne.length;Ie++){let De=Ne[Ie];nr(De,Q,q,j),J.add(De)}else nr(Ne,Q,q,j),J.add(Ne)}),S=M.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(L,q,Q=null){let J=this.compile(L,q,Q);return new Promise(j=>{function Ne(){if(J.forEach(function(Ie){let ke=K.get(Ie).currentProgram;(ke===void 0||ke.isReady())&&J.delete(Ie)}),J.size===0){j(L);return}setTimeout(Ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let mn=null;function nn(L){mn&&mn(L)}function ro(){Ai.stop()}function oo(){Ai.start()}let Ai=new $d;Ai.setAnimationLoop(nn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(L){mn=L,Xe.setAnimationLoop(L),L===null?Ai.stop():Ai.start()},Xe.addEventListener("sessionstart",ro),Xe.addEventListener("sessionend",oo),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;D!==null&&D.renderStart(L,q);let Q=Xe.enabled===!0&&Xe.isPresenting===!0,J=E!==null&&(V===null||Q)&&E.begin(C,V);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(q),q=Xe.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,q,V),S=de.get(L,M.length),S.init(q),S.state.textureUnits=O.getTextureUnits(),M.push(S),st.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),nt.setFromProjectionMatrix(st,_i,q.reversedDepth),xt=this.localClippingEnabled,ft=Ve.init(this.clippingPlanes,xt),y=pe.get(L,R.length),y.init(),R.push(y),Xe.enabled===!0&&Xe.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&ws(Ie,q,-1/0,C.sortObjects)}ws(L,q,0,C.sortObjects),y.finish(),D!==null&&D.updateLights(S.state.lightsArray),C.sortObjects===!0&&y.sort(ye,Ce),be=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,be&&Ke.addToRenderList(y,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ve.beginShadows();let j=S.state.shadowsArray;if(Je.render(j,L,q),ft===!0&&Ve.endShadows(),(J&&E.hasRenderPass())===!1){let Ie=y.opaque,De=y.transmissive;if(S.setupLights(),q.isArrayCamera){let ke=q.cameras;if(De.length>0)for(let We=0,pt=ke.length;We<pt;We++){let $e=ke[We];lo(Ie,De,L,$e)}be&&Ke.render(L);for(let We=0,pt=ke.length;We<pt;We++){let $e=ke[We];ao(y,L,$e,$e.viewport)}}else De.length>0&&lo(Ie,De,L,q),be&&Ke.render(L),ao(y,L,q)}V!==null&&N===0&&(O.updateMultisampleRenderTarget(V),O.updateRenderTargetMipmap(V)),J&&E.end(C),L.isScene===!0&&L.onAfterRender(C,L,q),Be.resetDefaultState(),z=-1,H=null,M.pop(),M.length>0?(S=M[M.length-1],O.setTextureUnits(S.state.textureUnits),ft===!0&&Ve.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,D!==null&&D.renderEnd()};function ws(L,q,Q,J){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLightProbeGrid)S.pushLightProbeGrid(L);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(nt)){J&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(st);let Ie=se.update(L),De=L.material;De.visible&&y.push(L,Ie,De,Q,ce.z,null,q)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(nt))){let Ie=se.update(L),De=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(st)),Array.isArray(De)){let ke=Ie.groups;for(let We=0,pt=ke.length;We<pt;We++){let $e=ke[We],_e=De[$e.materialIndex];_e&&_e.visible&&y.push(L,Ie,_e,Q,ce.z,$e,q)}}else De.visible&&y.push(L,Ie,De,Q,ce.z,null,q)}}let Ne=L.children;for(let Ie=0,De=Ne.length;Ie<De;Ie++)ws(Ne[Ie],q,Q,J)}function ao(L,q,Q,J){let{opaque:j,transmissive:Ne,transparent:Ie}=L;S.setupLightsView(Q),ft===!0&&Ve.setGlobalState(C.clippingPlanes,Q),J&&T.viewport(G.copy(J)),j.length>0&&As(j,q,Q),Ne.length>0&&As(Ne,q,Q),Ie.length>0&&As(Ie,q,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function lo(L,q,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let _e=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new Ot(1,1,{generateMipmaps:!0,type:_e?cn:In,minFilter:qn,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Ne=S.state.transmissionRenderTarget[J.id],Ie=J.viewport||G;Ne.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let De=C.getRenderTarget(),ke=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(re),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),be&&Ke.render(Q);let pt=C.toneMapping;C.toneMapping=Mi;let $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),ft===!0&&Ve.setGlobalState(C.clippingPlanes,J),As(L,Q,J),O.updateMultisampleRenderTarget(Ne),O.updateRenderTargetMipmap(Ne),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let mt=0,Qe=q.length;mt<Qe;mt++){let Ft=q[mt],{object:Pt,geometry:gn,material:Oe,group:ue}=Ft;if(Oe.side===Mn&&Pt.layers.test(J.layers)){let Fe=Oe.side;Oe.side=En,Oe.needsUpdate=!0,Vt(Pt,Q,J,gn,Oe,ue),Oe.side=Fe,Oe.needsUpdate=!0,_e=!0}}_e===!0&&(O.updateMultisampleRenderTarget(Ne),O.updateRenderTargetMipmap(Ne))}C.setRenderTarget(De,ke,We),C.setClearColor(re,le),$e!==void 0&&(J.viewport=$e),C.toneMapping=pt}function As(L,q,Q){let J=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ne=L.length;j<Ne;j++){let Ie=L[j],{object:De,geometry:ke,group:We}=Ie,pt=Ie.material;pt.allowOverride===!0&&J!==null&&(pt=J),De.layers.test(Q.layers)&&Vt(De,q,Q,ke,pt,We)}}function Vt(L,q,Q,J,j,Ne){D!==null&&j.isNodeMaterial&&D.setObject(L,j),L.onBeforeRender(C,q,Q,J,j,Ne),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(C,q,Q,J,L,Ne),j.transparent===!0&&j.side===Mn&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,C.renderBufferDirect(Q,q,J,j,L,Ne),j.side=vs,j.needsUpdate=!0,C.renderBufferDirect(Q,q,J,j,L,Ne),j.side=Mn):C.renderBufferDirect(Q,q,J,j,L,Ne),L.onAfterRender(C,q,Q,J,j,Ne)}function is(L,q,Q){q.isScene!==!0&&(q=Ee);let J=K.get(L),j=S.state.lights,Ne=S.state.shadowsArray,Ie=j.state.version,De=he.getParameters(L,j.state,Ne,q,Q,S.state.lightProbeGridArray),ke=he.getProgramCacheKey(De),We=J.programs;J.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,J.fog=q.fog;let pt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;J.envMap=xe.get(L.envMap||J.environment,pt),J.envMapRotation=J.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,We===void 0&&(L.addEventListener("dispose",$n),We=new Map,J.programs=We);let $e=We.get(ke);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Ie)return uo(L,De),$e}else De.uniforms=he.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,Q,De),L.onBeforeCompile(De,C),$e=he.acquireProgram(De,ke),We.set(ke,$e),J.uniforms=De.uniforms;let _e=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(_e.clippingPlanes=Ve.uniform),uo(L,De),J.needsLights=Rs(L),J.lightsStateVersion=Ie,J.needsLights&&(_e.ambientLightColor.value=j.state.ambient,_e.lightProbe.value=j.state.probe,_e.sunLights.value=j.state.sun,_e.sunLightShadows.value=j.state.sunShadow,_e.directionalLights.value=j.state.directional,_e.directionalLightShadows.value=j.state.directionalShadow,_e.spotLights.value=j.state.spot,_e.spotLightShadows.value=j.state.spotShadow,_e.rectAreaLights.value=j.state.rectArea,_e.ltc_1.value=j.state.rectAreaLTC1,_e.ltc_2.value=j.state.rectAreaLTC2,_e.pointLights.value=j.state.point,_e.pointLightShadows.value=j.state.pointShadow,_e.hemisphereLights.value=j.state.hemi,_e.sunShadowMatrix.value=j.state.sunShadowMatrix,_e.sunShadowCascade.value=j.state.sunShadowCascade,_e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,_e.spotLightMatrix.value=j.state.spotLightMatrix,_e.spotLightMap.value=j.state.spotLightMap,_e.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=S.state.lightProbeGridArray.length>0,J.currentProgram=$e,J.uniformsList=null,$e}function co(L){if(L.uniformsList===null){let q=L.currentProgram.getUniforms();L.uniformsList=Vr.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function uo(L,q){let Q=K.get(L);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function ya(L,q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;_.setFromMatrixPosition(q.matrixWorld);for(let Q=0,J=L.length;Q<J;Q++){let j=L[Q];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function Yc(L,q,Q,J,j){q.isScene!==!0&&(q=Ee),O.resetTextureUnits();let Ne=q.fog,Ie=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?q.environment:null,De=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:bt.workingColorSpace,ke=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,We=xe.get(J.envMap||Ie,ke),pt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),_e=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,Qe=!!Q.morphAttributes.color,Ft=Mi;J.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ft=C.toneMapping);let Pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gn=Pt!==void 0?Pt.length:0,Oe=K.get(J),ue=S.state.lights;if(ft===!0&&(xt===!0||L!==H)){let gt=L===H&&J.id===z;Ve.setState(J,L,gt)}let Fe=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ue.state.version||Oe.outputColorSpace!==De||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==We||J.fog===!0&&Oe.fog!==Ne||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ve.numPlanes||Oe.numIntersection!==Ve.numIntersection)||Oe.vertexAlphas!==pt||Oe.vertexTangents!==$e||Oe.morphTargets!==_e||Oe.morphNormals!==mt||Oe.morphColors!==Qe||Oe.toneMapping!==Ft||Oe.morphTargetsCount!==gn||!!Oe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Oe.__version=J.version);let He=Oe.currentProgram;Fe===!0&&(He=is(J,q,j),D&&J.isNodeMaterial&&D.onUpdateProgram(J,He,Oe));let Ct=!1,Mt=!1,Nt=!1,wt=He.getUniforms(),Gt=Oe.uniforms;if(T.useProgram(He.program)&&(Ct=!0,Mt=!0,Nt=!0),J.id!==z&&(z=J.id,Mt=!0),Oe.needsLights){let gt=ya(S.state.lightProbeGridArray,j);Oe.lightProbeGrid!==gt&&(Oe.lightProbeGrid=gt,Mt=!0)}if(Ct||H!==L){T.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),wt.setValue(F,"projectionMatrix",L.projectionMatrix),wt.setValue(F,"viewMatrix",L.matrixWorldInverse);let vn=wt.map.cameraPosition;vn!==void 0&&vn.setValue(F,_t.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),H!==L&&(H=L,Mt=!0,Nt=!0)}if(Oe.needsLights&&(ue.state.sunShadowMap.length>0&&wt.setValue(F,"sunShadowMap",ue.state.sunShadowMap,O),ue.state.directionalShadowMap.length>0&&wt.setValue(F,"directionalShadowMap",ue.state.directionalShadowMap,O),ue.state.spotShadowMap.length>0&&wt.setValue(F,"spotShadowMap",ue.state.spotShadowMap,O),ue.state.pointShadowMap.length>0&&wt.setValue(F,"pointShadowMap",ue.state.pointShadowMap,O)),j.isSkinnedMesh){wt.setOptional(F,j,"bindMatrix"),wt.setOptional(F,j,"bindMatrixInverse");let gt=j.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),wt.setValue(F,"boneTexture",gt.boneTexture,O))}j.isBatchedMesh&&(wt.setOptional(F,j,"batchingTexture"),wt.setValue(F,"batchingTexture",j._matricesTexture,O),wt.setOptional(F,j,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",j._indirectTexture,O),wt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",j._colorsTexture,O));let Jn=Q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&W.update(j,Q,He),(Mt||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,wt.setValue(F,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&q.environment!==null&&(Gt.envMapIntensity.value=q.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=g_()),Mt){if(wt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&Zc(Gt,Nt),Ne&&J.fog===!0&&Te.refreshFogUniforms(Gt,Ne),Te.refreshMaterialUniforms(Gt,J,Y,X,S.state.transmissionRenderTarget[L.id]),Oe.needsLights&&Oe.lightProbeGrid){let gt=Oe.lightProbeGrid;Gt.probesSH.value=gt.texture,Gt.probesMin.value.copy(gt.boundingBox.min),Gt.probesMax.value.copy(gt.boundingBox.max),Gt.probesResolution.value.copy(gt.resolution)}Vr.upload(F,co(Oe),Gt,O)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vr.upload(F,co(Oe),Gt,O),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(F,"center",j.center),wt.setValue(F,"modelViewMatrix",j.modelViewMatrix),wt.setValue(F,"normalMatrix",j.normalMatrix),wt.setValue(F,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let gt=J.uniformsGroups;for(let vn=0,Oi=gt.length;vn<Oi;vn++){let fo=gt[vn];ge.update(fo,He),ge.bind(fo,He)}}return He}function Zc(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.sunLights.needsUpdate=q,L.sunLightShadows.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Rs(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,q,Q){let J=K.get(L);J.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(L.texture).__webglTexture=q,K.get(L.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){let Q=K.get(L);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,Q=0){V=L,U=q,N=Q;let J=null,j=!1,Ne=!1;if(L){let De=K.get(L);if(De.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,De.__webglFramebuffer),G.copy(L.viewport),$.copy(L.scissor),oe=L.scissorTest,T.viewport(G),T.scissor($),T.setScissorTest(oe),z=-1;return}else if(De.__webglFramebuffer===void 0)O.setupRenderTarget(L);else if(De.__hasExternalTextures)O.rebindTextures(L,K.get(L.texture).__webglTexture,K.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let pt=L.depthTexture;if(De.__boundDepthTexture!==pt){if(pt!==null&&K.has(pt)&&(L.width!==pt.image.width||L.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(L)}}let ke=L.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);let We=K.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(We[q])?J=We[q][Q]:J=We[q],j=!0):L.samples>0&&O.useMultisampledRTT(L)===!1?J=K.get(L).__webglMultisampledFramebuffer:Array.isArray(We)?J=We[Q]:J=We,G.copy(L.viewport),$.copy(L.scissor),oe=L.scissorTest}else G.copy(ve).multiplyScalar(Y).floor(),$.copy(Ge).multiplyScalar(Y).floor(),oe=it;if(Q!==0&&(J=P),T.bindFramebuffer(F.FRAMEBUFFER,J)&&T.drawBuffers(L,J),T.viewport(G),T.scissor($),T.setScissorTest(oe),j){let De=K.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,Q)}else if(Ne){let De=q;for(let ke=0;ke<L.textures.length;ke++){let We=K.get(L.textures[ke]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ke,We.__webglTexture,Q,De)}}else if(L!==null&&Q!==0){let De=K.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,De.__webglTexture,Q)}z=-1};function ho(L){let q=K.get(L);return(q.__readFormat!==L.format||q.__readType!==L.type)&&(q.__readFormat=L.format,q.__readType=L.type,q.__formatReadable=B.textureFormatReadable(L.format),q.__typeReadable=B.textureTypeReadable(L.type)),q}this.readRenderTargetPixels=function(L,q,Q,J,j,Ne,Ie,De=0){if(!(L&&L.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=K.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){T.bindFramebuffer(F.FRAMEBUFFER,ke);try{let We=L.textures[De],pt=We.format,$e=We.type;L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De);let _e=ho(We);if(_e.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-J&&Q>=0&&Q<=L.height-j&&F.readPixels(q,Q,J,j,Pe.convert(pt),Pe.convert($e),Ne)}finally{let We=V!==null?K.get(V).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(L,q,Q,J,j,Ne,Ie,De=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=K.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke)if(q>=0&&q<=L.width-J&&Q>=0&&Q<=L.height-j){T.bindFramebuffer(F.FRAMEBUFFER,ke);let We=L.textures[De],pt=We.format,$e=We.type;L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De);let _e=ho(We);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Ne.byteLength,F.STREAM_READ),F.readPixels(q,Q,J,j,Pe.convert(pt),Pe.convert($e),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Qe=V!==null?K.get(V).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Qe);let Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Sd(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ne),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(mt),F.deleteSync(Ft),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,Q=0){let J=Math.pow(2,-Q),j=Math.floor(L.image.width*J),Ne=Math.floor(L.image.height*J),Ie=q!==null?q.x:0,De=q!==null?q.y:0;O.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ie,De,j,Ne),T.unbindTexture()},this.copyTextureToTexture=function(L,q,Q=null,J=null,j=0,Ne=0){let Ie,De,ke,We,pt,$e,_e,mt,Qe,Ft=L.isCompressedTexture?L.mipmaps[Ne]:L.image;if(Q!==null)Ie=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,We=Q.min.x,pt=Q.min.y,$e=Q.isBox3?Q.min.z:0;else{let Gt=Math.pow(2,-j);Ie=Math.floor(Ft.width*Gt),De=Math.floor(Ft.height*Gt),L.isDataArrayTexture?ke=Ft.depth:L.isData3DTexture?ke=Math.floor(Ft.depth*Gt):ke=1,We=0,pt=0,$e=0}J!==null?(_e=J.x,mt=J.y,Qe=J.z):(_e=0,mt=0,Qe=0);let Pt=Pe.convert(q.format),gn=Pe.convert(q.type),Oe;q.isData3DTexture?(O.setTexture3D(q,0),Oe=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),Oe=F.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),Oe=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);let ue=T.getParameter(F.UNPACK_ROW_LENGTH),Fe=T.getParameter(F.UNPACK_IMAGE_HEIGHT),He=T.getParameter(F.UNPACK_SKIP_PIXELS),Ct=T.getParameter(F.UNPACK_SKIP_ROWS),Mt=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,We),T.pixelStorei(F.UNPACK_SKIP_ROWS,pt),T.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);let Nt=L.isDataArrayTexture||L.isData3DTexture,wt=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){let Gt=K.get(L),Jn=K.get(q),gt=K.get(Gt.__renderTarget),vn=K.get(Jn.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,gt.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Oi=0;Oi<ke;Oi++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,K.get(L).__webglTexture,j,$e+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,K.get(q).__webglTexture,Ne,Qe+Oi)),F.blitFramebuffer(We,pt,Ie,De,_e,mt,Ie,De,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||K.has(L)){let Gt=K.get(L),Jn=K.get(q);T.bindFramebuffer(F.READ_FRAMEBUFFER,w),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let gt=0;gt<ke;gt++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.__webglTexture,j,$e+gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gt.__webglTexture,j),wt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jn.__webglTexture,Ne,Qe+gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jn.__webglTexture,Ne),j!==0?F.blitFramebuffer(We,pt,Ie,De,_e,mt,Ie,De,F.COLOR_BUFFER_BIT,F.NEAREST):wt?F.copyTexSubImage3D(Oe,Ne,_e,mt,Qe+gt,We,pt,Ie,De):F.copyTexSubImage2D(Oe,Ne,_e,mt,We,pt,Ie,De);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wt?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Oe,Ne,_e,mt,Qe,Ie,De,ke,Pt,gn,Ft.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,Ne,_e,mt,Qe,Ie,De,ke,Pt,Ft.data):F.texSubImage3D(Oe,Ne,_e,mt,Qe,Ie,De,ke,Pt,gn,Ft):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ne,_e,mt,Ie,De,Pt,gn,Ft.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ne,_e,mt,Ft.width,Ft.height,Pt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,Ne,_e,mt,Ie,De,Pt,gn,Ft);T.pixelStorei(F.UNPACK_ROW_LENGTH,ue),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe),T.pixelStorei(F.UNPACK_SKIP_PIXELS,He),T.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),T.pixelStorei(F.UNPACK_SKIP_IMAGES,Mt),Ne===0&&q.generateMipmaps&&F.generateMipmap(Oe),T.unbindTexture()},this.initRenderTarget=function(L){K.get(L).__webglFramebuffer===void 0&&O.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?O.setTextureCube(L,0):L.isData3DTexture?O.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?O.setTexture2DArray(L,0):O.setTexture2D(L,0),T.unbindTexture()},this.resetState=function(){U=0,N=0,V=null,T.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Ht=(i,e,t)=>i<e?e:i>t?t:i,Lt=(i,e,t)=>i+(e-i)*t,Ec=i=>i*i*(3-2*i),Rt=(i,e,t)=>{let n=Ht((t-i)/(e-i),0,1);return n*n*(3-2*n)},n0=1337;function i0(i){n0=i|0}function v_(i){return i=i^n0|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var ti=(i,e)=>v_(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function ei(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Lt(ti(t,e),ti(t+1,e),s)}var wc=(i,e=0)=>ei(i,e)*.55+ei(i*2.03,e+7)*.3+ei(i*4.1,e+13)*.15;function Dn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Tc=new me,ne=i=>(Tc.set(i),[Tc.r,Tc.g,Tc.b]),s0=(i,e,t)=>[Lt(i[0],e[0],t),Lt(i[1],e[1],t),Lt(i[2],e[2],t)],An=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Fi=["city","sakura","coast","country","mountain","snow"],oa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Eh=1500,r0=260,Ms=0,wh=0;function a0(i){wh=Math.max(0,Fi.indexOf(i))}function Wr(i){let e=Math.floor(i/Eh),t=i-e*Eh,n=Ec(Ht((t-(Eh-r0))/r0,0,1)),s=Fi.length;return{a:Fi[((e+wh)%s+s)%s],b:Fi[((e+wh+1)%s+s)%s],t:n}}function Ut(i){let e=Wr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Qt=i=>{let e=Wr(i);return e.t<.5?e.a:e.b};function Rn(i,e){let t=Wr(i);return Lt(oa[t.a][e],oa[t.b][e],t.t)}var qs=650,Ys=375,Xr=i=>i*qs+Ys;function aa(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Ut(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Ah={x:new Map,r:new Map,t:new Map};function Rh(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function qr(i){let e=Math.round((i-Ys)/qs);return Rh(Ah.x,e,()=>{let t=Xr(e);return aa(t)?{k:e,s:t}:null})}function x_(i){let e=qr(i);return e?1-Rt(8,45,Math.abs(i-e.s)):0}var Zs=1150,Yr=820,la=4.6,Ch=i=>i*Zs+Yr;function Ph(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Ut(i+t);if(n.country+n.sakura<.9)return!1}let e=qr(i);return!(e&&Math.abs(e.s-i)<170)}function Bi(i){let e=Math.round((i-Yr)/Zs);return Rh(Ah.r,e,()=>{let t=Ch(e);return Ph(t)?{k:e,s:t}:null})}function __(i){let e=Bi(i);return e?1-Rt(30,70,Math.abs(i-e.s)):0}function y_(i){let e=-la;return i<11?e-1.3:i<16?Lt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Lt(e+.7,.35,(i-20)/5.5):.35}var l0=1050,c0=525,tn=85,en=125,M_=24,b_=i=>i*l0+c0;function S_(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Ut(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function ui(i){let e=Math.round((i-c0)/l0);return Rh(Ah.t,e,()=>{let t=b_(e);return S_(t)?{k:e,s:t}:null})}function T_(i){let e=ui(i);return e?1-Rt(tn+20,en+25,Math.abs(i-e.s)):0}var Ac=0,Cc=(i,e)=>{let t=i/en;return M_*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Ui=2,Rc=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(ei(e/300,11)-.5)*2+(ei(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Rn(e,"curv")*(1-Math.max(x_(e),__(e),T_(e)))}elevRaw(e){return Rn(e,"base")+Rn(e,"hill")*(wc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=qr(e);if(n){let a=1-Rt(8,45,Math.abs(e-n.s));a>0&&(t=Lt(t,this.elevRaw(n.s),a))}let s=Bi(e);if(s){let a=1-Rt(30,70,Math.abs(e-s.s));a>0&&(t=Lt(t,this.elevRaw(s.s),a))}let r=ui(e);if(r){let a=1-Rt(tn+10,en+45,Math.abs(e-r.s));a>0&&(t=Lt(t,this.elevRaw(r.s),a))}return t}ensure(e){for(;(this.X.length-1)*Ui<e+Ui;){let t=this.X.length-1,n=t*Ui,s=this.curv(n+Ui/2)*Ui,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Ui),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Ui),this.H.push(r+s),this.Y.push(this.elev(n+Ui))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Ui);let n=e/Ui,s=Math.floor(n),r=n-s;t.x=Lt(this.X[s],this.X[s+1],r),t.z=Lt(this.Z[s],this.Z[s+1],r),t.y=Lt(this.Y[s],this.Y[s+1],r),t.h=Lt(this.H[s],this.H[s+1],r);let a=Math.sin(t.h),l=Math.cos(t.h);return t.fx=a,t.fz=l,t.rx=-l,t.rz=a,t}};function o0(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Rt(45,190,r)*16*(.45+.55*ei(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Rt(s+1.5,80,r)*24*(.5+.5*ei(e/170,5))+Rt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Lt(1.25,-1.6,a/26):Lt(-1.6,-7,Ht((a-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*ei(e/140,61),f=r-(s+1);return f<l?f:Math.min(l+(f-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Rt(105,230,r)*95*(.6+.4*ei(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Lt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(ei(e/40+(t>0?3:0),71)-.5):.55+Rt(125,210,r)*40*(.45+.55*ei(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Rt(135,215,r)*36*(.4+.6*ei(e/210+(t>0?9:0),7))}}function Zr(i,e,t,n){let s=Wr(i),r=o0(s.a,i,e,t,n),a=s.t>0?Lt(r,o0(s.b,i,e,t,n),s.t):r;Ac=0;let l=Bi(i);if(l){let m=Math.abs(i-l.s);if(m>=36)return a;let x=m<29?y_(m):Lt(.35,a,Rt(29,36,m));return Math.abs(e)<n+3.2&&(x=Math.min(x,-.08)),x}let f=ui(i);if(!f)return a;let o=i-f.s,u=Math.abs(o);if(u>=2*en)return a;let h=Math.abs(e),c=Cc(o,e),d;return u<tn?d=h<=n+1.46?-.25:Math.max(a,c):d=Math.max(a,Math.min(c,h<n+1?-.06:h-(n+1))),Ac=Math.max(0,d-a),d}function u0(i){let e=Bi(i);return e?1-Rt(27,34,Math.abs(i-e.s)):0}var ca=new k,Pc=new k,E_=[1,1,1],dn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new et,this.nm=new ht,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(t*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(t*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}if(this.hasAO){let a=new Uint8Array(t);this.A&&a.set(this.A.subarray(0,n)),this.A=a}if(this.hasLit){let a=new Uint8Array(t);this.Lt&&a.set(this.Lt.subarray(0,n)),this.Lt=a}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,a,l,f,o){this.n>=this.cap&&this.grow(this.n+1);let u=this.e,h=this.ne,c=this.n*3,d=this.P,m=this.bb,x=u[0]*e+u[4]*t+u[8]*n+u[12],g=u[1]*e+u[5]*t+u[9]*n+u[13],p=u[2]*e+u[6]*t+u[10]*n+u[14];d[c]=x,d[c+1]=g,d[c+2]=p,x<m[0]&&(m[0]=x),g<m[1]&&(m[1]=g),p<m[2]&&(m[2]=p),x>m[3]&&(m[3]=x),g>m[4]&&(m[4]=g),p>m[5]&&(m[5]=p);let v=h[0]*s+h[3]*r+h[6]*a,b=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,y=127/(Math.sqrt(v*v+b*b+_*_)||1);if(this.N[c]=Math.round(v*y),this.N[c+1]=Math.round(b*y),this.N[c+2]=Math.round(_*y),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=f),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(g)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let S=o||E_,R=this.Cl;R[c]=S[0]>=1?255:S[0]<=0?0:S[0]*255+.5,R[c+1]=S[1]>=1?255:S[1]<=0?0:S[1]*255+.5,R[c+2]=S[2]>=1?255:S[2]<=0?0:S[2]*255+.5}this.n++}quad(e,t,n,s,r,a){ca.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Pc.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Pc.lengthSq()<1e-12&&Pc.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),ca.cross(Pc).normalize();let l=ca.x,f=ca.y,o=ca.z,u=a?a.u0:0,h=a?a.u1:1,c=a?a.v0:0,d=a?a.v1:1;this.vtx(e[0],e[1],e[2],l,f,o,u,c,r),this.vtx(t[0],t[1],t[2],l,f,o,h,c,r),this.vtx(n[0],n[1],n[2],l,f,o,h,d,r),this.vtx(e[0],e[1],e[2],l,f,o,u,c,r),this.vtx(n[0],n[1],n[2],l,f,o,h,d,r),this.vtx(s[0],s[1],s[2],l,f,o,u,d,r)}box(e,t,n,s,r,a,l,f=null,o=null){let u=f||{},h=o||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],h.nz||l,u.nz),this.quad([e,t,a],[s,t,a],[s,r,a],[e,r,a],h.pz||l,u.pz),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],h.nx||l,u.nx),this.quad([s,t,a],[s,t,n],[s,r,n],[s,r,a],h.px||l,u.px),this.quad([e,r,a],[s,r,a],[s,r,n],[e,r,n],h.py||l,u.py),o&&o.noBottom||this.quad([e,t,n],[s,t,n],[s,t,a],[e,t,a],h.ny||l,u.ny)}cyl(e,t,n,s,r,a,l,f,o=!0){let u=(s-r)/a;for(let h=0;h<l;h++){let c=h/l*Math.PI*2,d=(h+1)/l*Math.PI*2,m=Math.cos(c),x=Math.sin(c),g=Math.cos(d),p=Math.sin(d),v=[e+m*s,t,n+x*s],b=[e+g*s,t,n+p*s],_=[e+g*r,t+a,n+p*r],y=[e+m*r,t+a,n+x*r];this.vtx(v[0],v[1],v[2],m,u,x,0,0,f),this.vtx(y[0],y[1],y[2],m,u,x,0,0,f),this.vtx(_[0],_[1],_[2],g,u,p,0,0,f),this.vtx(v[0],v[1],v[2],m,u,x,0,0,f),this.vtx(_[0],_[1],_[2],g,u,p,0,0,f),this.vtx(b[0],b[1],b[2],g,u,p,0,0,f),o&&r>.001&&(this.vtx(e,t+a,n,0,1,0,0,0,f),this.vtx(_[0],_[1],_[2],0,1,0,0,0,f),this.vtx(y[0],y[1],y[2],0,1,0,0,0,f))}}rod(e,t,n,s,r,a){let l=t[0]-e[0],f=t[1]-e[1],o=t[2]-e[2],u=Math.hypot(l,f,o);l/=u,f/=u,o/=u;let h=0,c=1,d=0;Math.abs(f)>.99&&(h=1,c=0);let m=f*d-o*c,x=o*h-l*d,g=l*c-f*h,p=Math.hypot(m,x,g);m/=p,x/=p,g/=p;let v=x*o-g*f,b=g*l-m*o,_=m*f-x*l;for(let y=0;y<r;y++){let S=y/r*Math.PI*2,R=(y+1)/r*Math.PI*2,M=Math.cos(S),E=Math.sin(S),C=Math.cos(R),A=Math.sin(R),D=m*M+v*E,P=x*M+b*E,w=g*M+_*E,I=m*C+v*A,U=x*C+b*A,N=g*C+_*A,V=[e[0]+D*n,e[1]+P*n,e[2]+w*n],z=[e[0]+I*n,e[1]+U*n,e[2]+N*n],H=[t[0]+I*s,t[1]+U*s,t[2]+N*s],G=[t[0]+D*s,t[1]+P*s,t[2]+w*s];this.vtx(V[0],V[1],V[2],D,P,w,0,0,a),this.vtx(z[0],z[1],z[2],I,U,N,0,0,a),this.vtx(H[0],H[1],H[2],I,U,N,0,0,a),this.vtx(V[0],V[1],V[2],D,P,w,0,0,a),this.vtx(H[0],H[1],H[2],I,U,N,0,0,a),this.vtx(G[0],G[1],G[2],D,P,w,0,0,a)}return u}blob(e,t,n,s,r,a,l=0,f=1){let o=h0[l%h0.length],u=o.attributes.position.array,h=o.attributes.normal.array,c=o.userData.disp;for(let d=0;d<u.length;d+=3){let m=1+c[d/3],x=Math.max(0,Math.min(1,h[d+1]*.5+.5)),g=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(e+u[d]*s*m,t+u[d+1]*s*m*f,n+u[d+2]*s*m,h[d],h[d+1],h[d+2],0,0,g)}}wire(e,t,n,s,r,a=10){let l=e;this.noShadow=!0;for(let f=1;f<=a;f++){let o=f/a,u=[e[0]+(t[0]-e[0])*o,e[1]+(t[1]-e[1])*o-n*4*o*(1-o),e[2]+(t[2]-e[2])*o];this.rod(l,u,s,s,3,r),l=u}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,f]of r)this.vtx(e[a][0],e[a][1],e[a][2],t[a][0],t[a][1],t[a][2],l,f,s[a])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,a=e.N,l=e.C,f=e.U,o=this.n,u=this.bb;for(let h=0;h<e.n*3;h+=3){let c=r[h],d=r[h+1],m=r[h+2],x=o*3+h,g=n[0]*c+n[4]*d+n[8]*m+n[12],p=n[1]*c+n[5]*d+n[9]*m+n[13],v=n[2]*c+n[6]*d+n[10]*m+n[14];this.P[x]=g,this.P[x+1]=p,this.P[x+2]=v,this.hasAO&&(this.A[o+h/3]=this.aoByte(p)),g<u[0]&&(u[0]=g),p<u[1]&&(u[1]=p),v<u[2]&&(u[2]=v),g>u[3]&&(u[3]=g),p>u[4]&&(u[4]=p),v>u[5]&&(u[5]=v);let b=a[h],_=a[h+1],y=a[h+2],S=s[0]*b+s[3]*_+s[6]*y,R=s[1]*b+s[4]*_+s[7]*y,M=s[2]*b+s[5]*_+s[8]*y,E=127/(Math.sqrt(S*S+R*R+M*M)||1);this.N[x]=Math.round(S*E),this.N[x+1]=Math.round(R*E),this.N[x+2]=Math.round(M*E)}this.hasColor&&(l?this.Cl.set(l,o*3):this.Cl.fill(255,o*3,(o+e.n)*3)),this.hasUV&&(f?this.U.set(f,o*2):this.U.fill(0,o*2,(o+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new yt,t=this.n,n=this.bb;return e.setAttribute("position",new Bt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Bt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Bt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Bt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Bt(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Bt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ai(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new li),e}},h0=[0,1,2,3].map(i=>{let e=new zo(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});lt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var w_=lt.shadowmap_pars_fragment;function Lh(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;lt.shadowmap_pars_fragment=w_.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}Lh(1);function g0(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";lt.shadowmap_pars_fragment=t+lt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}lt.lights_fragment_begin=lt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var bs=4200,ze={uSkyHor:{value:new me(.7,.8,.9)},uSkyZen:{value:new me(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new qe},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new me(1,1,1)},uTuftV:{value:new qe(0,.333)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:A_()},uCloudTex:{value:null},uCloudOrg:{value:new qe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new qe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function v0(i){let e=new us(new Uint8Array(i),i.length,1,Vs);return e.minFilter=e.magFilter=on,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Zn=v0([16,16,16,70,200,255,255,255]),f0=v0([28,40,70,130,200,240,255,255]);function A_(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new us(e,256,256,Yn);return s.wrapS=s.wrapT=Er,s.magFilter=Wt,s.minFilter=qn,s.generateMipmaps=!0,s.colorSpace=Si,s.needsUpdate=!0,s}var Ti=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Ic=1600,Ih=256,R_=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Ic).toFixed(8)} + 0.5).r * uCloudSh; }`,C_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,P_=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Ic).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,I_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,L_=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,D_=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Lc=new Dr;Lc.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Lc.customProgramCacheKey=()=>"propdepth";function x0(){let i=new Ot(Ih,Ih,{format:Vs,type:In,depthBuffer:!1,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),e=new vt({uniforms:{uCenter:{value:new qe},uOrigin:ze.uOrigin,uTime:ze.uTime,uNoiseTex:ze.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Ic.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new dt(new kt(2,2),e),n=new qi;t.frustumCulled=!1,ze.uCloudTex.value=i.texture,ze.uCloudTex.rt=i;let s=Ic/Ih;return{update(r,a,l,f,o){let u=Math.round((a+f)/s)*s-f,h=Math.round((l+o)/s)*s-o;e.uniforms.uCenter.value.set(u,h),ze.uCloudOrg.value.set(u,h);let c=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(c)}}}function $s(i,e="",t="",n=!0){i.uniforms.uOrigin=ze.uOrigin,i.uniforms.uCloudSh=ze.uCloudSh,i.uniforms.uTime=ze.uTime,i.uniforms.uNoiseTex=ze.uNoiseTex,i.uniforms.uCloudTex=ze.uCloudTex,i.uniforms.uCloudOrg=ze.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=ze[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?P_:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ti}${R_}${L_}${e}`).replace("#include <opaque_fragment>",`${n?I_:C_}${t}${D_}
#include <opaque_fragment>`)}var N_=`
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
    // rows of rice 33 cm apart, hills 16 cm apart along them. Anti-aliased: once a row is narrower than ~2 pixels it
    // fades to its average (the bare smoothstep used to crawl in moir\xE9 bands across the far fields as we drove)
    vec2 cg = vec2(pu / 0.33, s / 0.16), cf = fract(cg) - 0.5;
    float aa = clamp(max(fwidth(cg.x), fwidth(cg.y)) * 1.6 - 0.3, 0.0, 1.0);
    float rows = mix(smoothstep(0.30, 0.48, abs(cf.x)), 0.4, aa);
    vec3 field = mix(L(vec3(0.47, 0.66, 0.24)), L(vec3(0.62, 0.76, 0.32)), h) * (0.88 + 0.14*rows);
    if (h < 0.28) {
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
`,U_=`
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
#endif`,F_=`
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
}`,_0={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function y0(i){let e={};for(let t of i)e[_0[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var d0=new Map;function ua(i){let e=[...new Set(i)].sort().join("+"),t=d0.get(e);return t||(t=M0(y0(e.split("+")),e),d0.set(e,t)),t}function M0(i=y0(Object.keys(_0)),e="all"){let t=new ln({color:16777215,gradientMap:Zn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=ze.uSkyHor,n.uniforms.uSkyZen=ze.uSkyZen,n.uniforms.uWet=ze.uWet,n.uniforms.uNight=ze.uNight,n.uniforms.uSunDir=ze.uSunDir,n.uniforms.uSunCol=ze.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=ze[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),$s(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${N_}`,F_+U_,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function p0(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),$s(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function B_(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=ze[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function O_(i){i.uniforms.uLightsOn=ze.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function m0(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Dh(i){return i.onBeforeCompile=e=>$s(e),i.customProgramCacheKey=()=>"cs",i}var z_="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",k_=(i,e,t="")=>`
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
}`;function Nh(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let a of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[a]=ze[a];s&&Object.assign(r.uniforms,s.uniforms),$s(r,z_+(s?s.pars:""),k_(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function b0(i,e){let t={};t.ground=M0(),t.color=p0(new ln({vertexColors:!0,gradientMap:Zn}),1.6,.1,"color-v3",m0),t.atlas=new ln({vertexColors:!0,gradientMap:Zn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{m0(l),O_(l),$s(l)},t.atlas.customProgramCacheKey=()=>"atlas-v4",t.foliage=p0(new ln({vertexColors:!0,gradientMap:f0}),2.6,.24,"foliage-v2"),t.lamp=new sn({color:15789798}),t.sig=new sn({color:new me(.15,1.7,1.1)}),t.sodium=new sn({color:new me(5,2.3,.65)}),t.decal=new ln({vertexColors:!0,gradientMap:Zn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>$s(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new ln({map:e,vertexColors:!0,gradientMap:f0,alphaTest:.42,side:Mn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",lt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),$s(l),B_(l),l.uniforms.uTuftV=ze.uTuftV,l.uniforms.uWind=ze.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v4"),t.wire=new sn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Wn(n);return t.pool=new sn({map:a,color:16762746,transparent:!0,opacity:0,blending:Yi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=a,t}var H_=ne("#f2c230"),S0=ne("#26272c");function Dc(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),a=Rn(s,"rw"),l=n*(a+.8),f=Ut(s),o=f.city+f.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(o?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return t}function T0(){let i=new Kt,e=Dh(new ln({vertexColors:!0,gradientMap:Zn})),t=new sn({color:new me(6,.45,.3)}),n=new sn({color:new me(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Kt,a=new Kt;r.add(a),a.position.set(-.42,1.02,-.02);let l=new dn,f=3.6;for(let h=0,c=0;c<f;h++,c+=.45)l.box(-Math.min(c+.45,f),-.065,-.065,-c,.065,.065,h%2?S0:H_);l.box(0,-.09,-.07,.38,.09,.07,S0);let o=new dt(l.build(),e);o.castShadow=!0,a.add(o);let u=[-.28,.28].map(h=>{let c=new dt(new Os(.13,18),n);return c.position.set(h,2.75,-.1),c.rotation.y=Math.PI,r.add(c),c});return i.add(r),{root:r,pivot:a,arm:o,lamps:u,L:f}});return i.visible=!1,{group:i,update(r,a,l,f,o){i.visible=!!r,r&&r.forEach((u,h)=>{let c=s[h];c.root.position.set(u.x-a.x,u.y,u.z-a.z),c.root.rotation.y=u.yaw,c.arm.scale.x=(u.rw+.25)/c.L,c.pivot.rotation.z=-l*(Math.PI/2-.06);let d=Math.floor(o*2.5)%2;c.lamps[0].material=f&&d===0?t:n,c.lamps[1].material=f&&d===1?t:n})}}}function V_(){let t=()=>{let p=document.createElement("canvas");return p.width=1024,p.height=512,p},n=t(),s=t(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let f=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,f);for(let p=0;p<1024;p+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(p,0,2,f);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,f-14,1024,14);let o=[.1,.36,.62,.88].map(p=>p*1024),u=(p,v,b,_)=>{let y=r.createLinearGradient(p,v,p+b*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(p,v,b,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(p+b*.2,v),r.lineTo(p+b*.38,v),r.lineTo(p+b*.1,v+_),r.lineTo(p-b*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(p,v,b,_)};for(let p=0;p<o.length-1;p++){let v=o[p]+40,b=o[p+1]-40,_=3,y=(b-v)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(v+S*y+2,34,y-4,58),u(v+S*y+6,38,y-12,50)}for(let p of[o[0]-70,o[3]+40])r.fillStyle="#6b737c",r.fillRect(p+2,34,28,58),u(p+5,38,22,50);for(let p of o)r.fillStyle="#c3c8ce",r.fillRect(p-30,22,60,f-36),r.fillStyle="#7b828a",r.fillRect(p-1,22,2,f-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(p-30,22,60,f-36),u(p-24,34,20,46),u(p+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let p of o)r.fillStyle="#c3c8ce",r.fillRect(p-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",o[1]+40,136);let h=0,c=176,d=256,m=256;r.fillStyle="#d3d7dc",r.fillRect(h,c,d,m),r.fillStyle="#20262e",r.fillRect(h+14,c+44,d-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,c+44),r.lineTo(h+80,c+44),r.lineTo(h+40,c+140),r.lineTo(h+14,c+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+d/2-4,c+44,8,96),r.fillStyle="#111",r.fillRect(h+50,c+12,d-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,c+26),r.fillStyle="#1f9a50",r.fillRect(h,c+150,d,18),r.fillStyle="#e8892b",r.fillRect(h,c+170,d,7);for(let p of[h+40,h+d-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(p,c+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(p+(p<h+d/2?28:-28),c+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,c+m-30,d,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+d/2,c+220),a.fillStyle="#111",a.fillRect(h,c,d,m),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,c+26);for(let p of[h+40,h+d-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(p,c+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=p=>{let v=new Wn(p);return v.colorSpace=jt,v.anisotropy=4,v},g=(p,v,b,_)=>({u0:p/1024,u1:(p+b)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:g(0,0,1024,f),sideR:{...g(0,0,1024,f),flip:!0},front:g(h,c,d,m),plain:g(342,202,28,28)}}function E0(){let i=V_(),e=Dh(new ln({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Zn})),t=new dn({uv:!0}),n=[1,1,1],s=ne("#9aa1a9"),r=ne("#3b4047"),a=ne("#2a2d33"),l=19.5,f=.6,o=3,u=1.45,h=.95,c=4,d=4,m=.3,x=ne("#33363b"),g={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},p=(M,E,C,A,D,P,w,I=!1)=>t.box(M,E,C,A,D,P,w,g,I?{noBottom:!0}:null),v=(M,E,C,A,D,P)=>{let I=C-D/2,U=C+D/2;for(let N=0;N<12;N++){let V=N/12*Math.PI*2,z=(N+1)/12*Math.PI*2,H=M+Math.cos(V)*A,G=E+Math.sin(V)*A,$=M+Math.cos(z)*A,oe=E+Math.sin(z)*A;t.quad([H,G,I],[$,oe,I],[$,oe,U],[H,G,U],P,i.plain),t.quad([M,E,U],[H,G,U],[$,oe,U],[$,oe,U],P,i.plain),t.quad([M,E,I],[$,oe,I],[H,G,I],[H,G,I],P,i.plain)}},b=o*l+(o-1)*f;for(let M=0;M<o;M++){let E=-b/2+l/2+M*(l+f),C=E-l/2,A=E+l/2;t.quad([C,h,u],[A,h,u],[A,c,u],[C,c,u],n,i.side),t.quad([A,h,-u],[C,h,-u],[C,c,-u],[A,c,-u],n,i.side);let D=M===o-1,P=M===0;t.quad([A,h,u],[A,h,-u],[A,c,-u],[A,c,u],D?n:ne("#c9ced4"),D?i.front:i.plain),t.quad([C,h,-u],[C,h,u],[C,c,u],[C,c,-u],P?n:ne("#c9ced4"),P?i.front:i.plain);for(let w=0;w<d;w++)for(let I of[1,-1]){let U=w/d*Math.PI/2,N=(w+1)/d*Math.PI/2,V=I*u*Math.cos(U),z=c+m*Math.sin(U),H=I*u*Math.cos(N),G=c+m*Math.sin(N);t.quad([C,z,V],[A,z,V],[A,G,H],[C,G,H],s,i.plain);for(let $ of[C,A]){let oe=[[$,c,0],[$,z,V],[$,G,H]];t.quad(oe[0],oe[1],oe[2],oe[2],s,i.plain),t.quad(oe[0],oe[2],oe[1],oe[1],s,i.plain)}}for(let w of[1,-1])p(C,c-.02,w*u-.04,A,c+.05,w*u+.04,r);for(let w of[E-5.5,E+5.5])p(w-1.3,c+.2,-.8,w+1.3,c+.62,.8,ne("#c4c9cf"),!0);p(C+.3,.82,-u+.1,A-.3,h,u-.1,a);for(let[w,I,U,N]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])p(E+w-I/2,.82-U,-1.15+N*.2,E+w+I/2,.82,1.15+N*.2,N>0?a:r);for(let w of[E-7,E+7]){for(let I of[1,-1]){p(w-1.35,.32,I*.86,w+1.35,.56,I*1.02,r);for(let U of[-1.05,1.05])p(w+U-.17,.3,I*.84,w+U+.17,.58,I*1.06,a)}p(w-.35,.5,-1,w+.35,.8,1,r);for(let I of[-1.05,1.05])for(let U of[1,-1])v(w+I,.43,U*.6,.43,.13,x)}if(M<o-1&&p(A,h+.15,-.95,A+f,c-.1,.95,ne("#3a3e44")),M===0){let w=E-3,I=c+.7;t.box(w-.6,c+.26,-.6,w+.6,c+.42,.6,r),t.rod([w-.5,c+.42,0],[w,I+.9,0],.03,.03,4,r),t.rod([w+.5,c+.42,0],[w,I+.9,0],.03,.03,4,r),t.rod([w,I+.9,-.85],[w,I+.9,.85],.03,.03,4,r)}}let _=new dt(t.build(),e);_.castShadow=!0,_.receiveShadow=!0,_.frustumCulled=!1;let y=new Kt;y.add(_),y.visible=!1;let S={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:b},R={};return{group:y,st:S,start(M,E,C=16){Object.assign(S,{active:!0,sx:M,dir:E,speed:C,u:-E*290,ds:E>0?-2:2,cleared:!1}),y.visible=!0},update(M,E,C,A,D){if(!S.active)return;S.u+=S.dir*S.speed*M;let P=S.u-S.dir*S.length/2;if(!S.cleared&&(S.dir>0?P>D+1:P<-D-1)&&(S.cleared=!0),Math.abs(S.u)>330){S.active=!1,y.visible=!1;return}E.at(S.sx,R),y.position.set(R.x+R.fx*S.ds+R.rx*S.u-C.x,R.y+.34,R.z+R.fz*S.ds+R.rz*S.u-C.z),y.rotation.y=R.h+(S.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var G_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Js=2048,Ks=4096;function Fc(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var C0=Fc(256,256);{let i=C0.getContext("2d"),e=i.createImageData(256,256),t=Dn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Uh=class{constructor(){this.cA=Fc(Js,Ks),this.cE=Fc(Js/2,Ks/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Js/2,Ks/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Js,Ks),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(C0,"repeat")}add(e,t,n,s){if(this.x+t+4>Js&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ks)throw new Error("atlas full at "+e);let a={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let f of[this.a,this.e])f.save(),f===this.e&&f.scale(.5,.5),f.translate(a.x,a.y),f.beginPath(),f.rect(0,0,t,n),f.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(a.x+l)/Js,u1:(a.x+t-l)/Js,v0:1-(a.y+n-l)/Ks,v1:1-(a.y+l)/Ks,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Wn(n);return s.colorSpace=jt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=qn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function bn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Ji(i,e,t,n,s,r){let a=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,f])=>a.addColorStop(l,f)),i.fillStyle=a,i.fillRect(e,t,n,s)}function $r(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Ji(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,t,1.5)}bn(i,e,t,n,.13)}function Zi(i,e,t,n,s,r=.13){let a=i.createLinearGradient(0,t,0,t+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(e,t,n,s)}function ee(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Jr(i,e,t,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ee(i,e-r,t-r,n+2*r,s+2*r,a),ee(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function $i(i,e,t,n,s,r,a=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),f=a?"#4f78b8":"#5f93d6",o=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,f),l.addColorStop(.55,o),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=e+n*r();i.beginPath(),i.moveTo(u,t),i.lineTo(u+n*.18,t),i.lineTo(u-n*.25,t+s),i.lineTo(u-n*.43,t+s),i.fill(),i.restore()}function w0(i,e,t,n,s,r="#efe6d2"){ee(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(e+a,t,1.5,s);Ji(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Bc(i,e,t=800){i.font=`${t} ${e}px ${G_}`}function Et(i,e,t,n,s,r,a,l=800,f=null){Bc(i,r,l);let o=r;for(;i.measureText(e).width>s&&o>6;)o-=1,Bc(i,o,l);i.textAlign="center",i.textBaseline="middle",f&&(i.lineWidth=Math.max(2,o*.12),i.strokeStyle=f,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=a,i.fillText(e,t,n)}function Nc(i,e,t,n,s,r,a,l=800,f=null){let o=[...e],u=o.length,h=Math.min(r*1.05,(s-n)/u),c=Math.min(r,h*.95);Bc(i,c,l),i.textAlign="center",i.textBaseline="middle",o.forEach((d,m)=>{let x=n+(s-n-h*u)/2+h*(m+.5);f&&(i.lineWidth=Math.max(2,c*.12),i.strokeStyle=f,i.strokeText(d,t,x)),i.fillStyle=a,i.fillText(d,t,x)})}function js(i,e,t,n,s,r,a,l=!0){if(ee(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Ji(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let f=e+n*.2*a();f<e+n-4;f+=n*(.18+a()*.3)){let o=Math.min(n*(.1+a()*.2),e+n-f),u=s*(.12+a()*.25);i.fillRect(f,t+s-u,o,u)}}i.restore()}function W_(i,e,t,n,s,r,a){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",ee(e,t,n,s,r,a),e.globalCompositeOperation="lighter",e.globalAlpha=.22,ee(e,t,n,s,r,a),e.globalCompositeOperation="multiply",e.globalAlpha=1,Ji(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var A0=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Uc=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],R0=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],X_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function P0(){let i=new Uh,e=Dn(2024),t=240,n=(o,u,h,c,d,m,x=!1)=>{$r(o,i,h,c,"#ece8e0",0);let g=Dn(m*31+(d?7:0)+5);if(m===0){let p=h*.14,v=c*.22,b=h*.72,_=c*.5;Jr(o,p,v,b,_,5),$i(o,p,v,b/2,_,g),$i(o,p+b/2,v,b/2,_,g);let y=g()<.8?b*(.18+g()*.25):0;y&&w0(o,p+2,v+2,y,_-4,g()<.5?"#efe6d2":"#d9e4ea"),ee(o,p+b/2-2,v,4,_,"#cfd4da"),ee(o,p-8,v+_+5,b+16,6,"#d8d8d4"),Zi(o,p-4,v+_+11,8,60),Zi(o,p+b-4,v+_+11,8,60),d&&(js(u,p,v,b,_,x?"#e6eeff":"#ffcf8f",g),y&&ee(u,p+2,v+2,y,_-4,x?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),ee(u,p+b/2-2,v,4,_,"#000"))}else if(m===1){for(let p of[.12,.56]){let v=h*p,b=c*.28,_=h*.3,y=c*.36;Jr(o,v,b,_,y,4),$i(o,v,b,_,y,g,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(v,b,_,y*.45),Zi(o,v,b+y+6,_,40,.1),d&&g()<.8&&js(u,v,b,_,y,g()<.5?"#ffd9a0":"#e8f0ff",g)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(h*.88,c*.2,9,0,7),o.fill()}else if(m===2){let p=h*.1,v=c*.12,b=h*.8,_=c*.84;Jr(o,p,v,b,_,4),$i(o,p,v,b/2,_,g),$i(o,p+b/2,v,b/2,_,g);let y=b*(.2+g()*.3);w0(o,p+2,v+2,y,_-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ee(o,p+b/2-2,v,4,_,"#cfd4da"),d&&(js(u,p,v,b,_,x?"#e6eeff":"#ffcb85",g),ee(u,p+2,v+2,y,_-4,x?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),ee(u,p+b/2-2,v,4,_,"#000"))}else if(m===3){$r(o,i,h,c,"#dfe3e6",0);let p=c*.25,v=c*.55;$i(o,0,p,h,v,g,1);for(let b=0;b<=h;b+=h/4)ee(o,b-2,p,4,v,"#8d98a6");if(ee(o,0,p-4,h,4,"#8d98a6"),ee(o,0,p+v,h,5,"#7d8796"),d)for(let b=0;b<4;b++)g()<.7&&js(u,b*h/4+2,p,h/4-4,v,g()<.6?"#f2f6ff":"#ffe2b0",g)}else if(m===4){o.fillStyle="#6b4a35",o.fillRect(0,0,h,c);for(let y=0;y<c;y+=12)ee(o,0,y,h,2,"rgba(30,18,10,0.35)"),ee(o,0,y+2,h,1,"rgba(255,220,180,0.06)");bn(o,i,h,c,.15);let p=h*.18,v=c*.25,b=h*.64,_=c*.45;ee(o,p-6,v-6,b+12,_+12,"#4a3020"),ee(o,p,v,b,_,"#efe4c8"),o.fillStyle="#5a3a26";for(let y=1;y<6;y++)o.fillRect(p+y*b/6-1.5,v,3,_);for(let y=1;y<3;y++)o.fillRect(p,v+y*_/3-1.5,b,3);if(d){js(u,p,v,b,_,"#ffc070",g,!1),u.fillStyle="#000";for(let y=1;y<6;y++)u.fillRect(p+y*b/6-1.5,v,3,_);for(let y=1;y<3;y++)u.fillRect(p,v+y*_/3-1.5,b,3)}}else if(m===5){ee(o,h*.08,0,7,c,"#bdbdb6"),ee(o,h*.08+5,0,2,c,"rgba(0,0,0,0.2)");let p=h*.55,v=c*.3,b=h*.22,_=c*.24;Jr(o,p,v,b,_,3),ee(o,p,v,b,_,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(p,v,b,_/2),Zi(o,p,v+_+4,b,50,.12),ee(o,h*.22,c*.55,26,34,"#cfcfca"),ee(o,h*.22+4,c*.55+6,18,12,"#9aa2a8"),d&&js(u,p,v,b,_,x?"#eef2ff":"#fff0d8",g,!1)}else if(m===6){let p=h*.4,v=c*.35,b=h*.2,_=c*.28;Jr(o,p,v,b,_,3),$i(o,p,v,b,_,g,1),Zi(o,p,v+_+4,b,70,.14),d&&js(u,p,v,b,_,x?"#e8efff":"#ffd9a0",g)}};for(let o=0;o<7;o++)i.add("win"+o,t,t,(u,h,c,d)=>n(u,h,c,d,!1,o)),i.add("win"+o+"L",t,t,(u,h,c,d)=>n(u,h,c,d,!0,o));for(let o of[0,2,5,6])i.add("win"+o+"C",t,t,(u,h,c,d)=>n(u,h,c,d,!0,o,!0));i.add("plain",t,t,(o,u,h,c)=>{$r(o,i,h,c,"#ece8e0"),Zi(o,h*.3,0,12,c*.6,.06)}),i.add("concrete",t,t,(o,u,h,c)=>{$r(o,i,h,c,"#d9d7d0",60);for(let d=0;d<6;d++)Zi(o,d*41%h,0,10,c*.5,.07)});let s=288,r=(o,u,h,c,d,m,x)=>{let g=(v,b,_,y,S,R=0)=>{o.fillStyle=S,o.beginPath(),o.ellipse(v,b,_,y,R,0,7),o.fill()},p=v=>v[Math.floor(m()*v.length)];if(x==="bakery"){ee(o,u,h,c,d,"#d9b98a"),Ji(o,u,h,c,d,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let v=h+d*.28;v<h+d*.72;v+=d*.2){ee(o,u,v,c,5,"#8a5a32");for(let b=u+8;b<u+c-8;b+=15+m()*10){let _=7+m()*6,y=4+m()*3;g(b,v-y,_,y,p(["#c98a3e","#b4732e","#d9a256","#a4632a"])),g(b-_*.2,v-y*1.4,_*.5,y*.35,"rgba(255,230,180,0.5)")}}ee(o,u+4,h+d*.8,c-8,d*.2,"#efe7d8"),ee(o,u+4,h+d*.8,c-8,3,"#9a9a96");for(let v=u+14;v<u+c-10;v+=18)g(v,h+d*.9,6,4,p(["#e8b35a","#c06a3a","#f2d29a"]));ee(o,u+c-64,h+10,52,22,"#7a3e1e"),Et(o,"\u713C\u304D\u305F\u3066",u+c-38,h+21,46,14,"#fff3dc",800)}else if(x==="books"){ee(o,u,h,c,d,"#6f5a46");for(let v=h+6;v<h+d*.72;v+=d*.17){ee(o,u,v+d*.15,c,4,"#4a3828");for(let b=u+3;b<u+c-4;){let _=3+m()*4,y=d*(.1+m()*.045);ee(o,b,v+d*.15-y,_,y,p(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),b+=_+(m()<.1?4:.6)}}ee(o,u+4,h+d*.76,c-8,d*.24,"#8a7560");for(let v=u+8;v<u+c-22;v+=24)ee(o,v,h+d*.79,20,28,p(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),ee(o,v+3,h+d*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(x==="florist"){ee(o,u,h,c,d,"#e8e2d2"),Ji(o,u,h,c,d,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let v=0;v<7;v++){let b=u+8+m()*(c-16),_=d*(.15+m()*.25);for(let y=0;y<_;y+=3.5)g(b+Math.sin(y*.25+v)*4+(m()-.5)*6,h+4+y,3.4,1.8,p(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),m()*3)}for(let v=0;v<3;v++){let b=h+d*(.5+v*.17);ee(o,u,b+14,c,4,"#9a8a76");for(let _=u+10+v*6;_<u+c-8;_+=19){let y=p(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let S=0;S<6;S++){o.strokeStyle="#4a7a3a",o.lineWidth=1.2,o.beginPath();let R=_+(m()-.5)*14;o.moveTo(_,b+10),o.lineTo(R,b-6-m()*8),o.stroke(),g(R,b-8-m()*8,3.2,3,y)}ee(o,_-6,b+4,12,11,p(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(x==="clothes"){ee(o,u,h,c,d,"#efece6"),Ji(o,u,h,c,d,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),ee(o,u+6,h+d*.18,c-60,3,"#7a7a7a");for(let b=u+12;b<u+c-66;b+=13+m()*5){o.fillStyle=p(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let _=h+d*.18+3,y=d*(.3+m()*.2);o.beginPath(),o.moveTo(b-5,_),o.lineTo(b+5,_),o.lineTo(b+8,_+y),o.lineTo(b-8,_+y),o.closePath(),o.fill()}let v=u+c-32;g(v,h+d*.16,7,8,"#d8cfc4"),o.fillStyle=p(["#c84a5a","#4a6a9a","#e8d8b8"]),o.beginPath(),o.moveTo(v-14,h+d*.24),o.lineTo(v+14,h+d*.24),o.lineTo(v+18,h+d*.66),o.lineTo(v-18,h+d*.66),o.closePath(),o.fill(),ee(o,v-2,h+d*.66,4,d*.24,"#8a8a8a"),ee(o,u+8,h+d*.74,c*.55,6,"#8a6a4a");for(let b=u+12;b<u+c*.55;b+=14)ee(o,b,h+d*.74-8,11,8,p(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else for(let v=h+d*.25;v<h+d;v+=d*.22){ee(o,u,v,c,3,"rgba(60,50,40,0.5)");for(let b=u+3;b<u+c-6;b+=6+m()*8)o.fillStyle=e.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(b,v-6-m()*10,4+m()*5,6+m()*10)}},a=(o,u,h,c,d,m,x="")=>{let g=Dn(m);if($r(o,i,h,c,"#e6e2da"),d==="glass"||d==="door"||d==="konbini"||d==="cafe"){let v=c*.22,b=h-12,_=c*.78-4;ee(o,6,v,b,_,d==="konbini"?"#f6f4ea":d==="cafe"?"#7a5a40":"#8a7a68"),r(o,6,v,b,_,g,x),d==="konbini"&&ee(o,6,v+4,b,5,"#ffffff"),d==="door"&&(ee(o,h/2-30,v+18,60,24,"#fff"),Et(o,"\u55B6\u696D\u4E2D",h/2,v+30,54,18,"#c82828")),d==="glass"&&!x&&g()<.7&&(ee(o,16,v+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Et(o,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,v+44,40,16,"#c02020")),W_(o,u,6,v,b,_,d==="konbini"?"#e4eef8":d==="cafe"?"#f0a868":"#f2d2a6"),o.save(),o.globalAlpha=.35,$i(o,6,v,b,_,g),o.restore(),ee(o,6,v,b,4,"#4a4e57"),ee(u,6,v,b,4,"#000"),d==="door"&&(ee(o,h/2-2,v,4,_,"#4a4e57"),ee(u,h/2-2,v,4,_,"#000"),ee(o,h/2-14,v+_*.45,3,40,"#c0c4c8"),ee(o,h/2+11,v+_*.45,3,40,"#c0c4c8")),d==="cafe"&&(ee(o,h*.62,c-70,46,62,"#2c3a30"),ee(u,h*.62,c-70,46,62,"#000"),Et(o,"\u30E9\u30F3\u30C1",h*.62+23,c-50,40,13,"#fff",700))}else if(d==="shutter"){let v=c*.2,b=h-12,_=c*.8;ee(o,6,v,b,_,"#b8bcc0");for(let y=v;y<v+_;y+=7)ee(o,6,y,b,2,"rgba(60,64,72,0.35)"),ee(o,6,y+2,b,1,"rgba(255,255,255,0.35)");ee(o,6,v,b,10,"#8f949a"),bn(o,i,h,c,.12),g()<.5&&(ee(o,h/2-40,v+_*.35,80,26,"#fff"),Et(o,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),h/2,v+_*.35+13,74,16,"#333",700))}else if(d==="noren"){ee(o,0,0,h,c,"#5b3c28");for(let S=0;S<h;S+=10)ee(o,S,c*.2,3,c*.8,"rgba(25,15,8,0.6)");bn(o,i,h,c,.15);let p=h*.12,v=c*.24,b=h*.76,_=c*.34,y=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ee(o,p,v,b,_,y);for(let S=1;S<3;S++)ee(o,p+b*S/3-1,v+_*.25,2,_*.75,"rgba(255,255,255,0.25)");Et(o,e.pick(X_),h/2,v+_*.55,b*.9,46,"#f5f0e6",800),ee(o,p,v,b,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(p,v+_,b,c-v-_),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(p,v,b,_),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(h*.9,c*.36,13,19,0,0,7),o.fill(),Et(o,"\u9152",h*.9,c*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(h*.9,c*.36,13,19,0,0,7),u.fill()}else if(d==="house"){let p=h*.18,v=c*.3,b=h*.34,_=c*.7;ee(o,p-6,v-6,b+12,_+6,"#9a9a96"),ee(o,p,v,b,_,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ee(o,p+b-14,v+_*.5,4,22,"#d8d0c0"),ee(o,p+6,v+10,b-12,_*.25,"rgba(255,255,255,0.18)"),ee(o,h*.62,c*.48,30,22,"#cfcfca"),ee(o,h*.62+6,c*.48+5,18,4,"#555");let y=h*.6,S=c*.22,R=h*.3,M=c*.2;Jr(o,y,S,R,M,3),$i(o,y,S,R,M,g,1);for(let E=0;E<3;E++)o.fillStyle="#7b5a43",o.fillRect(h*.6+E*22,c-26,16,18),o.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(h*.6+E*22+8,c-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(p+b+14,v+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(y,S,R,M))}else if(d==="garage"){let v=c*.25,b=h-16,_=c*.75;ee(o,8,v,b,_,"#efefec");for(let y=v;y<v+_;y+=9)ee(o,8,y,b,1.5,"rgba(80,80,90,0.25)");bn(o,i,h,c,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,t,s,(h,c,d,m)=>a(h,c,d,m,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",t,s,(h,c,d,m)=>a(h,c,d,m,o,200+u)),o==="glass"&&["bakery","books","florist","clothes"].forEach((h,c)=>i.add("shop_glass"+(c+3),t,s,(d,m,x,g)=>a(d,m,x,g,"glass",300+c,h)))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,h,c,d)=>{let[m,x]=Uc[o%Uc.length],g=A0[o*7%A0.length];ee(u,0,0,c,d,m),ee(u,0,0,c,5,"rgba(255,255,255,0.35)"),ee(u,0,d-6,c,6,"rgba(0,0,0,0.18)"),o%3===0&&(ee(u,12,12,d-24,d-24,x),Et(u,g[0],12+(d-24)/2,d/2,d-30,34,m)),Et(u,g,c/2+(o%3===0?24:0),d/2+2,c*.7,50,x,900),bn(u,i,c,d,.08),h.fillStyle=m==="#fff"||m==="#f5efe0"?"#d9d6cc":m,h.fillRect(0,0,c,d),h.globalAlpha=.9,Et(h,g,c/2+(o%3===0?24:0),d/2+2,c*.7,50,x==="#fff"?"#ffffff":x,900),h.globalAlpha=1});for(let[o,u,h]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+o,512,76,(c,d,m,x)=>{ee(c,0,0,m,x,u),ee(c,0,0,m,5,"rgba(255,255,255,0.35)"),ee(c,0,x-6,m,6,"rgba(0,0,0,0.18)"),Et(c,o,m/2,x/2+2,m*.7,50,h,900),bn(c,i,m,x,.08),d.fillStyle=u,d.fillRect(0,0,m,x),d.globalAlpha=.9,Et(d,o,m/2,x/2+2,m*.7,50,h,900),d.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,h,c,d)=>{let[m,x]=Uc[(o*3+1)%Uc.length],g=R0[o%R0.length];ee(u,0,0,c,d,m),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,c-4,d-4),Nc(u,g,c/2,12,d-12,56,x,900),bn(u,i,c,d,.08),ee(h,0,0,c,d,m==="#fff"?"#e8e8e8":m),Nc(h,g,c/2,12,d-12,56,x==="#fff"?"#fff":x,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,h],c)=>i.add("bb"+c,512,240,(d,m,x,g)=>{ee(d,0,0,x,g,"#fbfaf5"),ee(d,0,0,x,g*.62,h),Et(d,o,x/2,g*.32,x*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Et(d,u,x/2,g*.8,x*.85,52,"#333",800),bn(d,i,x,g,.08),ee(m,0,0,x,g,"#555"),m.globalAlpha=.85,ee(m,0,0,x,g*.62,h),Et(m,o,x/2,g*.32,x*.9,96,"#fff",900),m.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,h,c)=>{ee(o,0,0,h,c,"#fbfbf7"),ee(o,0,c*.62,h,c*.14,"#2a9a4a"),ee(o,0,c*.76,h,c*.12,"#f08a24"),ee(o,0,c*.88,h,c*.12,"#2f6fd8"),Et(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",h/2,c*.32,h*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,h,c),Et(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",h/2,c*.32,h*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,h,c,d)=>{let m=["#d8352a","#2f6fd8","#f4f4f0"][o];ee(u,0,0,c,d,m),ee(u,8,10,c-16,d*.55,"#eef4f8");let x=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let g=0;g<4;g++)for(let p=0;p<6;p++){let v=14+p*17,b=18+g*30;u.fillStyle=x[(g*6+p+o)%x.length],u.fillRect(v,b,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(v+2,b+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(v,b+23,11,3)}ee(u,10,d*.62,c-20,22,"#222"),ee(u,c-34,d*.66,14,22,"#bbb"),ee(u,14,d*.82,c-28,22,"#1b1b1b"),Et(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],c/2,d*.62+11,c-28,14,"#fff",700),bn(u,i,c,d,.08),h.fillStyle="#f2f8ff",h.fillRect(8,10,c-16,d*.55);for(let g=0;g<4;g++)for(let p=0;p<6;p++)h.fillStyle=x[(g*6+p+o)%x.length],h.fillRect(14+p*17,18+g*30,11,20);h.fillStyle="#9fd0ff",h.fillRect(10,d*.62,c-20,22)});i.add("ac",128,88,(o,u,h,c)=>{ee(o,0,0,h,c,"#e9e9e4"),Ji(o,0,0,h,c,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(h*.4,c*.5,c*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let d=6;d<c*.36;d+=6)o.beginPath(),o.arc(h*.4,c*.5,d,0,7),o.stroke();for(let d=12;d<c-10;d+=6)ee(o,h*.78,d,h*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,h,c)=>{ee(o,0,0,h,c,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,h-6,c-6),Et(o,"\u54C1\u5DDD 580",h/2,16,h*.6,14,"#2f5a2f",700),Et(o,"\u3042 12-34",h/2,42,h*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,h,c)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(h-2,2),o.lineTo(h/2,c-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(h-10,7),o.lineTo(h/2,c-12),o.fill(),Et(o,"\u6B62\u307E\u308C",h/2,34,h*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,h,c)=>{o.fillStyle="#fff",o.beginPath(),o.arc(h/2,c/2,h/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(h/2,c/2,h/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(h/2,22),o.lineTo(h/2+22,50),o.lineTo(h/2+8,50),o.lineTo(h/2+8,88),o.lineTo(h/2-8,88),o.lineTo(h/2-8,50),o.lineTo(h/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,h,c)=>{o.fillStyle="#fff",o.beginPath(),o.arc(h/2,c/2,h/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(h/2,c/2,h/2-9,0,7),o.stroke(),Et(o,"30",h/2,c/2+2,h*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,h,c)=>{ee(o,0,0,h,c,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,h-6,c-6),Nc(o,"\u672C\u753A\u4E8C\u4E01\u76EE",h/2,10,c-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,h,c,d)=>{let m=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ee(u,0,0,c,d,m),ee(u,4,4,c-8,d*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),Et(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],c/2,d*.25,c-12,18,"#fff",900);for(let x=0;x<4;x++)ee(u,8,d*.58+x*8,c-16-x%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,t,88,(u,h,c,d)=>{let m=["#e9e3d6","#dfe6ea","#efe2dc"][o];if($r(u,i,c,d,m),o===1)for(let x=10;x<c-6;x+=c/6)ee(u,x,10,c/6-8,d-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(x,10,c/6-8,(d-20)*.4);else{ee(u,0,0,c,7,"rgba(255,255,255,0.4)");for(let x=c/3;x<c;x+=c/3)ee(u,x-1,0,2,d,"rgba(0,0,0,0.08)")}ee(u,0,d-6,c,6,"rgba(0,0,0,0.12)"),Zi(u,c*.3,d-6,10,10,.2)});i.add("kawara",272,256,(o,u,h,c)=>{ee(o,0,0,h,c,"#58617a");for(let d=0;d<c;d+=16)Ji(o,0,d,h,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let d=-4;d<h;d+=20)ee(o,d,0,2,c,"rgba(0,0,0,0.18)");bn(o,i,h,c,.12)}),i.add("wood",256,256,(o,u,h,c)=>{ee(o,0,0,h,c,"#6d4c37");for(let d=0;d<c;d+=14)ee(o,0,d,h,2,"rgba(25,15,8,0.4)"),ee(o,0,d+2,h,1,"rgba(255,220,180,0.07)");bn(o,i,h,c,.16)}),i.add("block",256,128,(o,u,h,c)=>{ee(o,0,0,h,c,"#c9c7bf");for(let d=0;d<c;d+=32)for(let m=d/32%2?-32:0;m<h;m+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(m+1,d+1,62,30);for(let d=0;d<h;d+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(d+20,40,24,16);bn(o,i,h,c,.15),Zi(o,0,0,h,40,.1)}),i.add("lantern",64,96,(o,u,h,c)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(h/2,c/2,h/2-2,c/2-8,0,0,7),o.fill();for(let d=16;d<c-12;d+=7)ee(o,4,d,h-8,1.5,"rgba(0,0,0,0.2)");ee(o,h/2-14,2,28,8,"#222"),ee(o,h/2-14,c-10,28,8,"#222"),Et(o,"\u796D",h/2,c/2,h*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(h/2,c/2,h/2-2,c/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,h,c)=>{o.fillStyle="#fff",o.beginPath(),o.arc(h/2,c/2,h/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(h/2,c/2,h/2-6,0,7),o.stroke(),Et(o,"\u30D0\u30B9\u505C",h/2,c/2,h*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ee(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,h,c)=>{o.save(),o.translate(h/2,c/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(h/2-22,c/2-6,44,18),o.fillRect(h/2-16,c/2-16,18,12),o.fillRect(h/2+8,c/2-13,5,7),o.beginPath(),o.arc(h/2-12,c/2+15,5,0,7),o.arc(h/2+12,c/2+15,5,0,7),o.fill(),Et(o,"\u8E0F\u5207",h/2,c/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(h,c,d,m)=>{ee(h,0,0,d,m,"#b9b5ab"),bn(h,i,d,m,.2),ee(h,6,6,d-12,m-12,"#a7a398"),Nc(h,o,d/2,14,m-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,h,c)=>{ee(o,0,0,h,c,"#4a4d52"),ee(o,0,0,h,5,"#5c6066"),bn(o,i,h,c,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([d,m])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(m,c/2,33,0,7),o.fill(),o.fillStyle=d,o.beginPath(),o.arc(m,c/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,h,c)=>{ee(o,0,0,h,c,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,h-16,c/2-12),o.fillStyle="#0d4f44",o.fillRect(8,c/2+4,h-16,c/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(h/2,c*.18,6,0,7),o.fill(),o.fillRect(h/2-5,c*.24,10,18)}),i.add("tomare",256,96,(o,u,h,c)=>{o.clearRect(0,0,h,c),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,h,c),Et(o,"\u6B62\u307E\u308C",h/2,c/2+4,h*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(h,c,d,m)=>{ee(h,0,0,d,m,"#1f4f96"),h.strokeStyle="#fff",h.lineWidth=3,h.strokeRect(4,4,d-8,m-8),Et(h,o,d/2,m/2+1,d*.85,28,"#fff",800)}));let f=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];f.forEach(([o,u,h],c)=>{let d=f[(c+3)%4][0],m=f[(c+1)%4][0];i.add("ekimei"+c,320,124,(x,g,p,v)=>{ee(x,0,0,p,v,"#3a3d42"),ee(x,4,4,p-8,v-8,"#f8f8f3"),Et(x,u,p/2,20,p*.5,15,"#2b2b2b",700),Et(x,o,p/2,52,p*.6,40,"#151515",900),Et(x,h,p/2,80,p*.5,12,"#555",600),ee(x,4,v-30,p-8,26,"#1f9a50"),x.fillStyle="#fff",Bc(x,12,700),x.textBaseline="middle",x.textAlign="left",x.fillText("\u2190 "+d,12,v-17),x.textAlign="right",x.fillText(m+" \u2192",p-12,v-17),bn(x,i,p,v,.06),ee(g,4,4,p-8,v-8,"#8a8a84")}),i.add("ekiplate"+c,220,48,(x,g,p,v)=>{ee(x,0,0,p,v,"#4b3326"),bn(x,i,p,v,.2),Et(x,o+"\u99C5",p/2,v/2+1,p*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,h,c,d)=>{ee(u,0,0,c,d,"#f4f4ef"),ee(u,4,4,c-8,d-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let m=o==="r"?1:-1,x=c/2,g=d/2;u.moveTo(x-m*26,g-40),u.lineTo(x+m*22,g),u.lineTo(x-m*26,g+40),u.lineTo(x-m*8,g+40),u.lineTo(x+m*40,g),u.lineTo(x-m*8,g-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(h,c,d,m)=>{ee(h,0,0,d,m,"#e9e7e0"),ee(h,4,4,d-8,m-8,"#24403b"),bn(h,i,d,m,.08),Et(h,o,d/2,m*.42,d*.8,38,"#f4f2ea",800),Et(h,"L = 170 m",d/2,m*.8,d*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,h,c)=>{ee(o,0,0,h,c,"#f6f6f2"),o.fillStyle="#d42a22";for(let d=-20;d<c;d+=26)o.beginPath(),o.moveTo(4,d),o.lineTo(h/2,d+20),o.lineTo(h-4,d),o.lineTo(h-4,d+11),o.lineTo(h/2,d+31),o.lineTo(4,d+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,h-3,c-3)}),i.add("xing_plate",128,48,(o,u,h,c)=>{ee(o,0,0,h,c,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,h-6,c-6),Et(o,"\u8E0F\u5207\u6CE8\u610F",h/2,c/2,h*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,h,c)=>{o.clearRect(0,0,h,c),ee(o,0,0,h,7,"#e9ebee"),ee(o,0,6,h,2,"rgba(60,70,80,0.5)"),ee(o,0,c-6,h,6,"#d5d8dc");for(let d=3;d<h;d+=9)ee(o,d,7,3,c-13,"#e2e5e9"),ee(o,d+2,7,1,c-13,"rgba(70,80,90,0.45)")}),i}function I0(i){let n=Fc(1024,2048),s=n.getContext("2d"),r=Dn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},f=(h,c,d)=>{let m=l[h],x=256,g=h==="pine",p=h==="sakura";s.save(),s.translate(c,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,g?80:92]];for(let _=0;_<(g?10:14);_++){let y=r()*6.28,S=45+r()*120;v.push([x+Math.cos(y)*S,x+Math.sin(y)*S*(g?.42:.9),Math.min(34+r()*52,232-S)])}let b=p?2300:g?2600:2300;for(let _=0;_<b;_++){let y=v[Math.floor(r()*v.length)],S=r()*6.28,R=Math.sqrt(r())*y[2],M=y[0]+Math.cos(S)*R,E=y[1]+Math.sin(S)*R*(g?.45:1),C=R/y[2],A=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(C>.82?.5:0))));if(s.fillStyle=m[A],p){let D=7+r()*8;s.beginPath(),s.arc(M,E,D,0,7),s.fill(),r()<.25&&(s.fillStyle=m[4],s.beginPath(),s.arc(M-D*.3,E-D*.3,D*.4,0,7),s.fill())}else if(g)s.save(),s.translate(M,E),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let D=8+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath();for(let P=0;P<10;P++){let w=P%2?D*.42:D,I=P/10*6.2832;s.lineTo(Math.cos(I)*w,Math.sin(I)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let D=9+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,D,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let D=9+r()*10;s.beginPath(),s.ellipse(M,E,D,D*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,S=150+r()*85,R=x+Math.cos(y)*S,M=x+Math.sin(y)*S*(g?.45:.92);s.fillStyle=m[1+Math.floor(r()*4)],g?(s.save(),s.translate(R,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(R,M,p?6+r()*6:7+r()*6,0,7),s.fill())}if(p)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=x+(r()-.5)*300,S=x+60+r()*120;s.beginPath(),s.moveTo(y,S),s.lineTo(y+(r()-.5)*40,S-20-r()*30),s.stroke()}s.restore(),a[h]={u0:c/1024,u1:(c+512)/1024,v0:1-(d+512)/2048,v1:1-d/2048}},o=(h,c,d,m)=>{s.save(),s.translate(c,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],g=m?120:170;for(let p=0;p<g;p++){let v=256+(r()-.5)*(m?330:380)*Math.sqrt(r()),b=150+r()*(m?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,y=9+r()*9,S=v+_,R=512-b,M=Math.min(4,Math.floor(r()*2.2+b/380*2.6)),E=s.createLinearGradient(0,512,0,R);E.addColorStop(0,x[0]),E.addColorStop(.6,x[Math.max(1,M-1)]),E.addColorStop(1,x[M]),s.fillStyle=E,s.beginPath(),s.moveTo(v-y/2,512),s.quadraticCurveTo(v-y/2+_*.3,512-b*.55,S,R),s.quadraticCurveTo(v+y/2+_*.3,512-b*.5,v+y/2,512),s.fill()}if(m)for(let p=0;p<16;p++){let v=110+r()*290,b=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(b+512)/2,v,b),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let S=y/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(S)*11,b+Math.sin(S)*11,9,4.5,S,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,b,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,b,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,b-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(v+(r()-.5)*16,b+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:c/1024,u1:(c+512)/1024,v0:1-(d+512)/2048,v1:1-d/2048}};f("leafA",0,0),f("leafB",512,0),f("sakura",0,512),f("pine",512,512),f("momiji",0,1024),f("ginkgo",512,1024),o("grass",0,1536,!1),o("flowers",512,1536,!0);let u=new Wn(n);return u.colorSpace=jt,u.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:u,cells:a,tuftV:[0,1-1536/2048]}}var pn=[1,1,1],fe={pole:ne("#b1b0a9"),metal:ne("#8d9198"),black:ne("#2a2b30"),yellow:ne("#f2c230"),white:ne("#f4f3ee"),trans:ne("#a0a3a8"),lampPole:ne("#727780"),lampHead:ne("#dcdcd6"),trunk:ne("#6a5444"),trunkDark:ne("#4b3a33"),leaf:ne("#86ba4c"),leafShade:ne("#2c6640"),sakura:ne("#ffd3e3"),sakuraShade:ne("#de94b4"),pine:ne("#55874c"),pineShade:ne("#1d4632"),cedar:ne("#41713e"),cedarShade:ne("#1b3e2a"),roof:ne("#bdbbb3"),parapet:ne("#dcdad2"),pipe:ne("#c4c4bf"),orange:ne("#f07a22"),red:ne("#d8352a"),vermilion:ne("#e2482c"),concrete:ne("#c9c7c0"),stone:ne("#a8a69e"),terracotta:ne("#b8653d"),rail:ne("#eeeeea")},ji=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ne),q_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ne),zh=null;function N0(i){zh=i}var Ei=i=>zh.uv(i),ha=Ei,Y_=(i,e)=>{let t=1;for(;zh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function zc(i,e,t,n,s=0){let r=new et().makeRotationY(s);r.setPosition(e,t,n);let a=new et().multiplyMatrices(i,r);return a.groundY=i.groundY,a}var kh=(i,e,t,n)=>{if(!i.hasLit||e.charCodeAt(0)!==119)return;let s=e.charCodeAt(e.length-1);if(s!==76&&s!==67)return;let r=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((r-Math.floor(r))*231)},un=(i,e,t,n,s,r,a,l=pn)=>{kh(i,a,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Ei(a)),i.litV=0},Qi=(i,e,t,n,s,r,a,l=pn)=>{kh(i,a,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Ei(a)),i.litV=0},es=(i,e,t,n,s,r,a,l=pn)=>{kh(i,a,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Ei(a)),i.litV=0},Kr=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ei(r):void 0),Z_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function U0(i){return Z_.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function Hh(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,fe.pole);for(let o=0;o<5;o++)s.cyl(0,.25+o*.3,0,.185,.185,.15,10,o%2?fe.black:fe.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,fe.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,fe.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let o of a)s.cyl(0,r-.53,o,.05,.035,.17,6,fe.white);for(let o of l)s.cyl(0,r-1.65,o,.045,.03,.15,6,fe.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,fe.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,fe.trans),s.box(-.06,7.2,.12,.06,7.35,.26,fe.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,fe.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,fe.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,fe.concrete);for(let o=2.4,u=0;o<r-2;o+=.45,u++)s.rod([0,o,0],[u%2?.3:-.3,o,0],.015,.015,3,fe.metal);return i.atlas.setM(e),un(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&un(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...a.map(o=>[0,r-.4,o]),...l.map(o=>[0,r-1.52,o]),[0,5.72,-.3],[0,5.72,.3]].map(o=>new k(o[0],o[1],o[2]).applyMatrix4(e))}var Oc=new k;function er(i,e,t,n,s,r){i.lamps&&(Oc.set(t,n,s).applyMatrix4(e),i.lamps.push(Oc.x,Oc.y,Oc.z,r))}function Vh(i,e,t,n={}){let s=i.color;s.setM(e),er(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,fe.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,fe.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,fe.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,fe.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,pn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function F0(i,e,t=.04){let n=i.color;n.setM(e),er(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,fe.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,fe.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,fe.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,pn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function fa(i,e){let t=i.color;t.setM(e),er(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,ne("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,ne("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,ne("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,pn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],pn,{u0:0,u1:1,v0:0,v1:1})}function Gh(i,e,t){let n=Math.floor(t()*3),s=[fe.red,ne("#2f6fd8"),fe.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,An(s,.8)),i.atlas.setM(e),un(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Bh(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ne("#e6e6e1")),i.atlas.setM(e),un(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function B0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ne("#c8ccd2"),ne("#c0392b"),ne("#2c6fb7"),ne("#2b2b2b"),ne("#e8c84a"),ne("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let f=l/12*Math.PI*2,o=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(f)*.33,.34+Math.sin(f)*.33,0],[a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],.022,.022,3,fe.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,fe.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,fe.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,fe.metal)}function O0(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,fe.orange),t.cyl(0,.04,0,.16,.03,.68,10,fe.orange),t.cyl(0,.32,0,.115,.095,.12,10,fe.white,!1)}function z0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,fe.terracotta),i.leaf.setM(e),Ki(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Ss(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,fe.metal),i.atlas.setM(e),n<0?es(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Qi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Wh(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?fe.white:fe.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,fe.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,fe.black),i.atlas.setM(e),t<0?es(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Qi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function k0(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ne("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ne("#f0a020"))}function Xh(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,fe.orange);let s=0,r=3.25,a=.42,l=14;for(let f=0;f<l;f++){let o=f/l*Math.PI*2,u=(f+1)/l*Math.PI*2,h=(c,d,m)=>[t*m,r+Math.sin(c)*d,s+Math.cos(c)*d-.25];Kr(n,h(0,0,-.02),h(t>0?u:o,a,-.02),h(t>0?o:u,a,-.02),fe.orange),Kr(n,h(0,0,-.035),h(t>0?u:o,a*.86,-.035),h(t>0?o:u,a*.86,-.035),ne("#dfe9f2"))}}var qh=null;function H0(i){qh=i}var Oh=1;function V0(i){Oh=i}function Ki(i,e,t,n,s,r,a,l,f,o,u,h,c=0){let d=qh[a],m=1+(1-Oh)*.35;l=Math.max(2,Math.round(l*Oh));for(let x=0;x<l;x++){let g=f()*2-1,p=f()*2-1,v=f()*2-1;c&&(p=1.2+f());let b=Math.hypot(g,p,v)||1;g/=b,p/=b,v/=b;let _=-v,y=0,S=g;b=Math.hypot(_,S),b<.1&&(_=1,S=0,b=1),_/=b,S/=b;let R=p*S-v*y,M=v*_-g*S,E=g*y-p*_,C=Math.PI+(f()-.5)*.9,A=Math.cos(C),D=Math.sin(C),P=_*A+R*D,w=y*A+M*D,I=S*A+E*D,U=R*A-_*D,N=M*A-y*D,V=E*A-S*D,z=r*(1.3+f()*.45)*m/2,H=t+(f()-.5)*r*.6,G=n+(f()-.5)*r*(c?.15:.5),$=s+(f()-.5)*r*.6,oe=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Se,X])=>[H+(P*Se+U*X)*z,G+(w*Se+N*X)*z*(c?.6:1),$+(I*Se+V*X)*z]),re=oe.map(Se=>{let X=Se[0]-e[0],Y=Se[1]-e[1],ye=Se[2]-e[2],Ce=Math.hypot(X,Y,ye)||1;X/=Ce,Y/=Ce,ye/=Ce;let ve=Se[0]-t,Ge=Se[1]-n,it=Se[2]-s;return Ce=Math.hypot(ve,Ge,it)||1,[X*.7+ve/Ce*.3,Y*.7+Ge/Ce*.3+(c?.5:0),ye*.7+it/Ce*.3]}),le=oe.map(Se=>s0(u,o,.45+.55*Math.max(0,Math.min(1,(Se[1]-h[0])/(h[1]-h[0])))));i.leaf.card(oe,re,d,le)}}function G0(i,e,t,n="grass",s=1){let r=qh[n],a=(.42+t()*.38)*s,l=a*1.2,f=t()*Math.PI,o=[0,1,0],u=[o,o,o,o],h=[.6,.64,.58],c=[1,1,1];i.leaf.setM(e);for(let d of[f,f+Math.PI/2]){let m=Math.cos(d)*l/2,x=Math.sin(d)*l/2;i.leaf.card([[-m,-.05,-x],[m,-.05,x],[m,a,x],[-m,a,-x]],u,r,[h,h,c,c])}}function $_(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,fe.trunk);for(let o=0;o<3;o++){let u=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,fe.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],a=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],f=7+Math.floor(t()*3);for(let o=0;o<f;o++){let u=t()*6.28,h=(.6+t())*1.3*n;Ki(i,r,Math.cos(u)*h,s*(.62+t()*.3),Math.sin(u)*h,(1.1+t()*.6)*n,a,6,t,[1,1,1],[.55,.62,.7],l)}Ki(i,r,0,s*.98,0,1.4*n,a,7,t,[1,1,1],[.55,.62,.7],l)}function J_(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,fe.trunkDark);let r=[];for(let o=0;o<5;o++){let u=o/5*6.28+t()*.8,h=(2.2+t()*1.6)*n,c=[Math.cos(u)*h,s*(.62+t()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],c,.12*n,.05*n,5,fe.trunkDark),r.push(c),i.color.rod(c,[c[0]*1.25,c[1]+.9*n,c[2]*1.25],.05*n,.02*n,4,fe.trunkDark)}i.leaf.setM(e);let a=[0,s*.72,0],l=[s*.5,s*1.1],f=[.72,.62,.72];for(let o of r)for(let u=0;u<2;u++)Ki(i,a,o[0]+(t()-.5)*1.4*n,o[1]+t()*.9*n,o[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],f,l);Ki(i,a,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],f,l)}function K_(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,a=t.range(5,7.5)*n,l=[r*.4,a*.45,.2],f=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,fe.trunkDark),s.rod(l,f,.15*n,.09*n,6,fe.trunkDark),i.leaf.setM(e);let o=[[f[0],f[1]+.3,f[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[f[0]+.9*n,f[1]-.6,.8,1.1]];for(let[u,h,c,d]of o)s.rod(u>l[0]?l:f,[u,h-.2,c],.07*n,.04*n,4,fe.trunkDark),Ki(i,[u,h-.8,c],u,h,c,d*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function j_(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,fe.trunkDark);let r=[];for(let o=0;o<5;o++){let u=o/5*6.28+t()*.8,h=(1.8+t()*1.4)*n,c=[Math.cos(u)*h,s*(.55+t()*.2),Math.sin(u)*h];i.color.rod([0,s*.38,0],c,.09*n,.04*n,5,fe.trunkDark),r.push(c)}i.leaf.setM(e);let a=[0,s*.7,0],l=[s*.45,s*1.1],f=[.62,.52,.56];for(let o of r)Ki(i,a,o[0],o[1]+.4*n,o[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],f,l);Ki(i,a,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],f,l)}function Q_(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,fe.trunk),i.leaf.setM(e);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let f=0;f<7;f++){let o=s*(.34+f*.09),u=(2.1-f*.24)*n,h=t()*6.28;Ki(i,r,Math.cos(h)*u*.35,o,Math.sin(h)*u*.35,Math.max(.7,u)*1.05,"ginkgo",5,t,[1,1,1],l,a)}}function ey(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,a=(t()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,ne("#eeece6"));for(let l=0;l<7;l++){let f=t.range(.4,r*.85),o=f/r;s.cyl(a*o,f,0,.135*n*(1-o*.6),.13*n*(1-o*.6),.05,7,ne("#2b2b30"),!1)}for(let l=0;l<7;l++){let f=r*(.45+t()*.5),o=t()*6.28,u=(.8+t()*1.6)*n,h=f/r;s.rod([a*h,f,0],[a*h+Math.cos(o)*u,f+u*.9,Math.sin(o)*u],.035*n,.012*n,4,ne("#8b7f78"))}}function ty(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,fe.trunkDark),i.foliage.setM(e);let r=ne("#1d3a2c"),a=ne("#eef2f8"),l=ne("#d7e0ec");for(let f=0;f<4;f++){let o=s*(.16+f*.19),u=(1.9-f*.38)*n,h=s*.3;i.foliage.cyl(0,o,0,u,u*.3,h,9,r),i.foliage.cyl(0,o+h*.45,0,u*.72,.05,h*.62,9,f%2?a:l)}}function ny(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,fe.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,fe.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,fe.cedar)}var W0={broad:$_,sakura:J_,pine:K_,cedar:ny,maple:j_,ginkgo:Q_,birch:ey,snowcedar:ty},L0={};function X0(i,e){let t=i+e,n=L0[t];if(!n){let s={color:new dn,foliage:new dn,leaf:new dn({uv:!0})};W0[i](s,new et,Dn(1e3+e*77+i.length*13),1),n=L0[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function q0(){for(let i in W0)for(let e=0;e<4;e++)X0(i,e)}function Nn(i,e,t,n,s=1){let r=X0(t,Math.floor(n()*4)),a=e.clone().scale(new k(s,s,s));a.groundY=e.groundY,i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}var iy=new Set(["win0","win2","win5","win6"]),Qs=(i,e,t)=>e<t?i+(e<t*.35&&iy.has(i)?"C":"L"):i;function da(i,e,t,n,s,r,a){let l=Math.max(1,Math.round(t/3)),f=t/l;for(let o of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<l;h++){let c=u>0&&r()<.3?Qs("win6",r(),a):r()<.2?"win5":"plain";(o>0?Qi:es)(i,o*e/2,h*f,(h+1)*f,n[u],n[u+1],c,s)}}function pa(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],fe.roof);let a=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+a,l,fe.parapet),i.box(-e/2,n,t-l,e/2,n+a,t,fe.parapet),i.box(-e/2,n,0,-e/2+l,n+a,t,fe.parapet),i.box(e/2-l,n,0,e/2,n+a,t,fe.parapet),s()<.4){let f=(s()-.5)*e*.5,o=t*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(f+u-.05,n,o+h-.05,f+u+.05,n+1,o+h+.05,fe.metal);i.cyl(f,n+1,o,.85,.85,1.3,12,ne("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,fe.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,fe.metal)}function Y0(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,fe.black);let r="vs"+Math.floor(s()*10);es(i.atlas,e-.065,-.88,-.12,t,n,r),Qi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,fe.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,fe.metal)}function ts(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,fe.concrete,null,{noBottom:!0}),n.type){case"shop":return oy(i,e,t,n);case"apt":return ay(i,e,t,n);case"office":return ly(i,e,t,n);case"konbini":return cy(i,e,t,n);case"house":return hy(i,e,t,n);case"tower":return fy(i,e,t,n)}}var sy=new Set(["glass","door","cafe","noren"]),ry={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function oy(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:f}=n,o=i.atlas,u=i.color,h=3.6,c=3,d=h+(a-1)*c,m=Math.max(1,Math.round(s/3)),x=s/m,g=-s/2,p=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),v=0;for(let R=0;R<m;R++){let M=p[R%p.length],E=Y_(t,"shop_"+M);un(o,g+R*x,g+(R+1)*x,0,h,0,E),!v&&E.startsWith("shop_glass")&&E.length>10&&(v=+E.slice(10)),sy.has(M)&&er(i,e,g+(R+.5)*x,1.9,-.8,.7)}let b=t.pick([0,0,1,5,0,1]),_=[0,h];for(let R=1;R<a;R++)_.push(h+R*c);for(let R=1;R<a;R++)for(let M=0;M<m;M++){let E=M%2===1&&t()<.3?5:b;un(o,g+M*x,g+(M+1)*x,_[R],_[R+1],0,Qs("win"+E,t(),f),l)}da(o,s,r,_,l,t,f),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],An(l,.8)),pa(u,s,r,d,t);let y=s*.94;u.box(-y/2,h-.8,-.3,y/2,h+.08,-.02,fe.black);let S="hs"+Math.floor(t()*14);if(un(o,-y/2,y/2,h-.8,h+.08,-.305,ry[v]||S),t()<.55){let R=t.pick(q_),M=h-.85;u.quad([s/2-.2,M-.35,-1.1],[-s/2+.2,M-.35,-1.1],[-s/2+.2,M,-.02],[s/2-.2,M,-.02],R),u.quad([s/2-.2,M-.6,-1.1],[-s/2+.2,M-.6,-1.1],[-s/2+.2,M-.35,-1.1],[s/2-.2,M-.35,-1.1],An(R,.85))}if(a>=2&&t()<.65){let R=(t()<.5?1:-1)*(s/2-.35);Y0(i,R,h+.3,Math.min(d-.15,h+2.8),t)}for(let R=1;R<a;R++)if(t()<.4){let M=Math.floor(t()*m),E=g+M*x+.15,C=g+(M+1)*x-.15,A=_[R];u.box(E,A-.12,-.9,C,A,0,fe.parapet),un(o,E,C,A,A+1,-.9,"rail"),es(o,E,-.9,0,A,A+1,"rail"),Qi(o,C,-.9,0,A,A+1,"rail"),t()<.45&&j0(u,E+.1,C-.1,A+1.95,-.55,t),t()<.6&&Bh(i,e,(E+C)/2+.6,A,-.75)}else if(t()<.35){let M=Math.floor(t()*m);Bh(i,e,g+(M+.5)*x,_[R]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}u.cyl(g+.12,0,-.08,.05,.05,d,6,fe.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ne("#d9d9d3")),a>=3&&t()<.18&&Z0(i,s,d,r,t)}function Z0(i,e,t,n,s){let r=Math.min(e*.85,7),a=r*.47,l=n*.3;for(let f of[-r*.35,r*.35])i.color.box(f-.06,t,l,f+.06,t+1.2+a,l+.12,fe.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+a,l+.3,fe.metal),un(i.atlas,-r/2,r/2,t+1.2,t+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function ay(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:f}=n,o=i.atlas,u=i.color,h=3.2,c=2.95,d=h+(a-1)*c,m=Math.max(2,Math.round(s/3.2)),x=s/m,g=-s/2,p=[0,h];for(let _=1;_<a;_++)p.push(h+_*c);for(let _=0;_<m;_++)un(o,g+_*x,g+(_+1)*x,0,h,0,_===Math.floor(m/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),_===Math.floor(m/2)?pn:l);let v="bal"+Math.floor(t()*3),b=An(l,.97);for(let _=1;_<a;_++){let y=p[_];for(let S=0;S<m;S++)un(o,g+S*x,g+(S+1)*x,y,p[_+1],0,Qs("win2",t(),f),l);u.box(g,y-.15,-1.3,-g,y,0,b),u.box(g,y,-1.3,-g,y+1.1,-1.18,b,null,{noBottom:!0});for(let S=0;S<m;S++)un(o,g+S*x,g+(S+1)*x,y,y+1.1,-1.305,v,l);for(let S=0;S<=m;S++)u.box(g+S*x-.05,y,-1.18,g+S*x+.05,y+2.4,0,An(l,.92));for(let S=0;S<m;S++){let R=t(),M=g+S*x+.2,E=g+(S+1)*x-.2;R<.34?j0(u,M,E,y+2.02,-.98,t):R<.46&&my(u,M+.25,Math.min(E-.25,M+1.9),y+1.1,-1.3,t)}i.atlas.setM(e);for(let S=0;S<m;S++)t()<.55&&(Bh(i,e,g+(S+.78)*x,y,-.55),i.atlas.setM(e),i.color.setM(e))}u.box(g,d-.15,-1.3,-g,d,0,b),da(o,s,r,p,l,t,f),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],An(l,.8)),pa(u,s,r,d,t,!0)}function ly(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:f}=n,o=i.atlas,u=i.color,h=4,c=3.4,d=h+(a-1)*c,m=Math.max(2,Math.round(s/3)),x=s/m,g=-s/2,p=[0,h];for(let v=1;v<a;v++)p.push(h+v*c);for(let v=0;v<m;v++)un(o,g+v*x,g+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let b=0;b<m;b++)un(o,g+b*x,g+(b+1)*x,p[v],p[v+1],0,Qs("win3",t(),f),l);da(o,s,r,p,l,t,f),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],An(l,.8)),pa(u,s,r,d,t,!0),t()<.6&&Y0(i,(t()<.5?1:-1)*(s/2-.3),h+.4,Math.min(d-.3,h+4.5),t),t()<.3&&Z0(i,s,d,r,t)}function cy(i,e,t,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,f=4.4,o=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let c=0;c<u;c++)un(a,o+c*h,o+(c+1)*h,0,3.4,0,"shop_konbini"),er(i,e,o+(c+.5)*h,1.9,-.8,.8);l.box(o,3.4,-.35,-o,f,0,fe.white),un(a,o,-o,3.4,f,-.355,"konbini_band"),da(a,s,r,[0,f],ne("#f2f2ee"),t,0),pa(l,s,r,f,t)}var D0=(i,e)=>e?ne("#7a5a42"):i.tint,Fh=null,uy=()=>{if(!Fh){let i=Ei("kawara"),e=16/272*(i.u1-i.u0);Fh={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return Fh};function hy(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:f}=n,o=i.atlas,u=i.color,h=2.9,c=a*h,d=-s/2,m=t()<.5,x=Math.max(2,Math.round(s/3)),g=s/x,p=[];for(let P=0;P<=a;P++)p.push(P*h);let v=m?pn:l;for(let P=0;P<a;P++)for(let w=0;w<x;w++){let I=m?"win4":"win0";P===0&&w===0?I="shop_house":I=Qs(I,t(),f),un(o,d+w*g,d+(w+1)*g,p[P],p[P+1],0,I,I==="shop_house"?pn:v)}da(o,s,r,p,m?ne("#9a7a62"):l,t,f),u.quad([-s/2,0,r],[s/2,0,r],[s/2,c,r],[-s/2,c,r],An(l,.75));let b=!!n.snow,_=b?.75:.6,y=b?Math.min(3.4,r*.46):Math.min(2.4,r*.32),S=b?Ei("white"):uy(),R=b?ne("#f3f5fa"):ne("#c8ccd8"),M=b?ne("#e4e8f0"):ne("#3d4456"),E=b?1:Math.max(2,Math.round((s+2*_)/3)),C=P=>-s/2-_+(s+2*_)*P/E;for(let P=0;P<E;P++){let w=C(P),I=C(P+1);o.quad([I,c-.25,-_],[w,c-.25,-_],[w,c+y,r/2],[I,c+y,r/2],R,S),o.quad([w,c-.25,r+_],[I,c-.25,r+_],[I,c+y,r/2],[w,c+y,r/2],R,S)}let A=(P,w,I,U,N,V)=>{V<0?(u.quad([w,I,N],[P,I,N],[P,U,N],[w,U,N],M),u.quad([P,I,N],[w,I,N],[w,I,N+.08],[P,I,N+.08],M)):(u.quad([P,I,N],[w,I,N],[w,U,N],[P,U,N],M),u.quad([w,I,N],[P,I,N],[P,I,N-.08],[w,I,N-.08],M))};for(let[P,w]of[[-_,0],[r+_,r]])A(-s/2-_,s/2+_,c-.42,c-.22,P<0?P-.04:P+.04,P<0?-1:1),u.quad(P<0?[-s/2-_,c-.26,P]:[s/2+_,c-.26,P],P<0?[s/2+_,c-.26,P]:[-s/2-_,c-.26,P],P<0?[s/2+_,c-.26,w]:[-s/2-_,c-.26,w],P<0?[-s/2-_,c-.26,w]:[s/2+_,c-.26,w],An(D0(n,m),.62));for(let P of[-1,1]){let w=P*(s/2+_+.02),I=.2,U=[w,c-.25,-_],N=[w,c+y,r/2],V=[w,c-.25,r+_],z=H=>[H[0],H[1]-I,H[2]];P>0?(u.quad(z(N),z(U),U,N,M),u.quad(z(V),z(N),N,V,M)):(u.quad(z(U),z(N),N,U,M),u.quad(z(N),z(V),V,N,M))}let D=D0(n,m);if(Kr(u,[-s/2,c,0],[-s/2,c,r],[-s/2,c+y-.1,r/2],D),Kr(u,[s/2,c,r],[s/2,c,0],[s/2,c+y-.1,r/2],D),u.box(-s/2-_,c+y-.05,r/2-.15,s/2+_,c+y+.18,r/2+.15,b?ne("#f6f7fb"):ne("#3d4456")),b){u.box(-s/2-_-.05,c-.42,-_-.1,s/2+_+.05,c-.12,-_+.3,ne("#eef1f7")),u.box(-s/2-_-.05,c-.42,r+_-.3,s/2+_+.05,c-.12,r+_+.1,ne("#eef1f7"));for(let P=-s/2;P<s/2;P+=.45+t()*.5)u.cyl(P,c-.42-.35,-_+.02,0,.04,.35,4,ne("#dfe8f3"),!1)}if(a>1){let P=h+.05;for(let w=0;w<E;w++){let I=-s/2-.1+(s+.2)*w/E,U=-s/2-.1+(s+.2)*(w+1)/E;o.quad([U,P-.3,-.75],[I,P-.3,-.75],[I,P+.05,0],[U,P+.05,0],R,S)}A(-s/2-.1,s/2+.1,P-.42,P-.28,-.79,-1)}if(n.fence){let P=-n.fence,w=1.2;for(let[I,U]of[[-s/2,-1],[.4,s/2]])u.box(I,0,P-.08,U,w,P+.08,fe.concrete),un(o,I,U,0,w,P-.085,"block")}}function fy(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:f}=n,o=i.atlas,u=i.color,h=3.4,c=a*h,d=Math.max(2,Math.round(s/6)),m=s/d,x=-s/2,g=t()<.5?"win3":"win2",p=[];for(let _=0;_<=a;_++)p.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<d;y++)un(o,x+y*m,x+(y+1)*m,p[_],p[_+1],0,Qs(g,t(),f),l);let v=Math.max(1,Math.round(r/6)),b=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let S=0;S<v;S++)(_>0?Qi:es)(o,_*s/2,S*b,(S+1)*b,p[y],p[y+1],Qs(g,t(),f),l);pa(u,s,r,c,t,!0)}function $0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ne("#f2f2ee"),ne("#c9cdd2"),ne("#2b2f38"),ne("#b33a32"),ne("#9fc6c0"),ne("#e7d9b4"),ne("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,An(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,ne("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,fe.black)}function Yh(i,e,t,n){let s=i.color,r=ne("#8d9096"),a=ne("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,f=-n+.62;s.box(-.14,5.08,l,.14,5.56,f,a);let o=t*.141;i.atlas.setM(e),(t>0?Qi:es)(i.atlas,o,l,f,5.08,5.56,"signal");let u=t>0?f:l,h=t>0?-1:1;for(let d=0;d<3;d++){let m=u+h*(.2+d*.4);s.box(t>0?.14:-.36,5.47,m-.15,t>0?.36:-.14,5.5,m+.15,a)}let c=u+h*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,c-.11,t>0?.16:-.145,5.43,c+.11,pn)}function J0(i,e,t,n){let s=i.color,r=ne("#3d6ea8"),a=ne("#e8eef2"),l=ne("#c7c5bf"),f=5.35;s.setM(e),s.box(-1.1,f-.65,-t,1.1,f,t,r);for(let o of[-1.1,1])s.box(o,f,-t,o+.1,f+1.1,t,a),s.box(o-.02,f+1.1,-t,o+.12,f+1.18,t,r);i.atlas.setM(e),es(i.atlas,-1.105,-2.2,2.2,f-.62,f-.06,n),Qi(i.atlas,1.105,-2.2,2.2,f-.62,f-.06,n),s.setM(e);for(let o of[-1,1]){let u=o*(t-1.65),h=o*(t-.15),c=Math.min(u,h),d=Math.max(u,h);s.box(-.45,.15,c+.3,.45,f-.65,d-.3,r);let m=20,x=(f-.15)/m;for(let g=0;g<m;g++)s.box(1.1+g*.3,.15,c,1.1+(g+1)*.3,f-(g+1)*x+.04,d,l);s.box(1.1,f-.1,c-.05,1.1+m*.3,f-.02,c+.05,r)}}function K0(i,e,t,n,s,r,a){let l=i.color,f=1.22,o=3.55,u=6.7,h=ne("#c8c5bd"),c=ne("#ebe8de"),d=ne("#7a5a42"),m=ne("#5e4433"),x=ne("#4d5468");l.setM(e),l.box(t,-1.4,o,n,f,u,h,null,{noBottom:!0}),l.box(t,f,o,n,f+.025,o+.32,c),l.box(t,f,o+.6,n,f+.04,o+.9,fe.yellow);let g=Math.sign(s-(t+n)/2),p=g>0?n:t,v=p+g*6.2,b=o+.9,_=u-.2,y=(z,H,G)=>[z,H,G];g>0?l.quad(y(v,.1,_),y(v,.1,b),y(p,f,b),y(p,f,_),h):l.quad(y(v,.1,b),y(v,.1,_),y(p,f,_),y(p,f,b),h);for(let z of[b,_]){let H=ne("#9aa0a6");l.rod([v,.1+.9,z],[p,f+.9,z],.03,.03,5,H);for(let G=0;G<=3;G++){let $=v+(p-v)*G/3,oe=.1+(f-.1)*G/3;l.box($-.03,oe,z-.03,$+.03,oe+.9,z+.03,H)}}i.atlas.setM(e);for(let z=t;z<n-.01;z+=3){let H=Math.min(n,z+3);i.atlas.quad([z,-.6,u+.004],[H,-.6,u+.004],[H,f,u+.004],[z,f,u+.004],ne("#d8d4ca"),Ei("concrete"))}l.setM(e);for(let z=t+.4;z<n;z+=2)l.box(z-.05,f,u-.12,z+.05,f+1,u-.02,ne("#8f949a"));for(let z of[.45,.95])l.box(t,f+z,u-.1,n,f+z+.06,u-.04,ne("#8f949a"));let S=n-t,R=z=>g>0?n-S*z:t+S*z,M=R(.47),E=M-2.3,C=M+2.3,A=o+1.35,D=u-.25;l.box(E,f,D-.12,C,f+2.45,D,d);for(let z of[E,C-.12])l.box(z,f,A+.6,z+.12,f+2.45,D,m);for(let z of[E,C-.12])l.box(z,f,A,z+.12,f+2.45,A+.12,m);l.quad([C+.4,f+2.5,A-.45],[E-.4,f+2.5,A-.45],[E-.4,f+2.85,D+.35],[C+.4,f+2.85,D+.35],x),l.quad([E-.4,f+2.42,A-.45],[C+.4,f+2.42,A-.45],[C+.4,f+2.77,D+.35],[E-.4,f+2.77,D+.35],ne("#3a3f50")),l.box(E+.3,f+.42,D-.55,C-.3,f+.48,D-.15,ne("#8a6a4a"));for(let z of[E+.4,C-.5])l.box(z,f,D-.5,z+.08,f+.42,D-.2,fe.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,f+1.55,D+.005],[M+1.1,f+1.55,D+.005],[M+1.1,f+2.03,D+.005],[M-1.1,f+2.03,D+.005],pn,Ei("ekiplate"+r));let P=R(.2),w=o+1.6,I=1.25,U=f+1.25,N=U+.95;l.setM(e);for(let z of[P-I+.12,P+I-.12])l.cyl(z,f,w,.05,.05,N-f+.05,8,ne("#6b7078"));l.box(P-I,U-.03,w-.03,P+I,N+.03,w+.03,ne("#3a3d42")),i.atlas.setM(e),i.atlas.quad([P-I,U,w+.035],[P+I,U,w+.035],[P+I,N,w+.035],[P-I,N,w+.035],pn,Ei("ekimei"+r)),i.atlas.quad([P+I,U,w-.035],[P-I,U,w-.035],[P-I,N,w-.035],[P+I,N,w-.035],pn,Ei("ekimei"+r)),l.setM(e);let V=M-g*4.2;l.box(V-.9,f+.42,u-1.25,V+.9,f+.47,u-.85,ne("#3b6ea8")),l.box(V-.9,f+.47,u-.88,V+.9,f+.9,u-.83,ne("#3b6ea8"));for(let z of[V-.75,V+.7])l.box(z,f,u-1.2,z+.06,f+.42,u-.9,fe.metal);for(let z=t+3;z<n-1;z+=9)fa(i,zc(e,z,f,u-.45))}var dy=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ne),py=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ne);function j0(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,fe.metal);let a=e+.12+r()*.2;for(;a<t-.35;){let l=.28+r()*.34,f=.36+r()*.42,o=r.pick(dy),u=s+(r()-.5)*.06;i.quad([a+l,n-f,u],[a,n-f,u],[a,n-.02,u],[a+l,n-.02,u],o),i.quad([a,n-f,u+.01],[a+l,n-f,u+.01],[a+l,n-.02,u+.01],[a,n-.02,u+.01],An(o,.85)),r()<.4&&i.box(a+l*.45,n-.02,u-.02,a+l*.55,n+.06,u+.02,ne("#d8d8d0")),a+=l+.06+r()*.22}}function my(i,e,t,n,s,r){let a=r.pick(py),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,a),i.box(e,n-.72,s-l,t,n+.09,s-.005,a),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,An(a,.86))}function Q0(i,e){let t=i.color,n=ne("#a19f97"),s=ne("#6b4a35"),r=ne("#4f4a44"),a=ne("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ne("#8d8b84"));for(let l of[-.52,.48])for(let f of[-.36,.32])t.box(l,.32,f,l+.05,1.5,f+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,An(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,a,!1),t.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,ne("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ne("#5b8d3d"))}function ep(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?fe.black:fe.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,fe.black),t.box(-.5,2.55,-.06,.5,2.95,.02,fe.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,fe.black);t.box(-.78,-.9,-.34,.3,0,.34,fe.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ne("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,fe.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new et().multiplyMatrices(e,new et().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?fe.black:fe.yellow)}t.setM(e),i.atlas.setM(e),un(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function tp(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,fe.stone),t.cyl(0,.25,0,.14,.12,.95,8,fe.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,fe.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,An(fe.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,An(fe.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,pn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,pn)}function Zh(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,fe.vermilion),s.cyl(0,0,r,.38,.38,.5,12,fe.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,fe.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,fe.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,fe.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,fe.vermilion)}function np(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ne("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ne("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ne("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ne("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,fe.metal),n.box(1.1,0,.3,1.2,.42,.55,fe.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,fe.metal),i.atlas.setM(e),es(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Qi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function ip(i,e,t,n=1){let s=i.color;s.setM(e);let r=An(fe.concrete,.85+t()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let f of a)s.rod([0,l,0],[f[0]*.95*n,l+f[1]*.95*n,f[2]*.95*n],.42*n,.26*n,7,r)}function sp(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ne("#8f8a80"),ne("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,fe.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,fe.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,fe.black),t.cyl(0,18.6,0,1,.25,1.2,12,fe.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,pn)}function rp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ne("#f4f4f0"),ne("#3b6ea5"),ne("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Kr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Kr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,fe.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,fe.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ne("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,fe.metal)}function op(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,fe.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ne("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ne("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ne("#4d5468")),Zh(i,zc(e,0,0,-.3,Math.PI/2),.75,2.2)}var $t=60,ap=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],lp=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],$h=32,ma=[.025,.026,.032],cp=[.05,.05,.065],ns=(i,e)=>(i%e+e)%e,Ts=(i,e)=>{let t=qr(i);return!!t&&Math.abs(i-t.s)<e},Jh=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,wi=(i,e)=>{let t=ui(i);return!!t&&Math.abs(i-t.s)<e},ni=(i,e)=>{let t=Bi(i);return!!t&&Math.abs(i-t.s)<e},Kh=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let a=0;a<t-1;a++){let l=s+r*t+a,f=l+1,o=l+t,u=o+1;this.I.push(l,f,o,f,u,o)}}gridN(e,t,n,s=0,r=0){let a=t+s+r,l=new Array(e*a);for(let o=0;o<e;o++)for(let u=0;u<a;u++)l[o*a+u]=n(o,u-s);let f=(o,u)=>l[Math.min(e-1,Math.max(0,o))*a+Math.min(a-1,Math.max(0,u))];for(let o=0;o<e;o++)for(let u=s;u<s+t;u++){let h=f(o,u-1),c=f(o,u+1),d=f(o-1,u),m=f(o+1,u),x=l[o*a+u],g=c[0]-h[0],p=c[1]-h[1],v=c[2]-h[2],b=m[0]-d[0],_=m[1]-d[1],y=m[2]-d[2],S=p*y-v*_,R=v*b-g*y,M=g*_-p*b;R<0&&(S=-S,R=-R,M=-M);let E=Math.hypot(S,R,M)||1;x[3]=S/E,x[4]=R/E,x[5]=M/E}this.grid(e,t,(o,u)=>l[o*a+u+s])}build(){let e=new yt;return e.setAttribute("position",new je(this.P,3)),e.setAttribute("normal",new je(this.N,3)),e.setAttribute("su",new je(this.SU,2)),e.setAttribute("zw",new je(this.ZW,4)),e.setAttribute("rk",new je(this.RK,2)),e.setAttribute("rv",new je(this.RV,1)),e.setAttribute("zs",new je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},kc=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Kt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/$t),s=Math.floor((e+this.ahead)/$t);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let f=Math.max(0,n);f<=s;f++)if(!this.chunks.has(f)){l=f;break}if(l<0)return 0;l*$t-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,a)=>{let l=a*$t-e,f=r.group.children;for(let o=0;o<f.length;o++){let u=f[o],h=u.userData.detail;h&&(u.visible=h==="leaf"?l<s:l<t||n&&h==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*$t,s=n+$t,r=t.at(n),a=r.x,l=r.z,f=Dn(Math.floor(ti(e,777)*4294967295)),o={atlas:new dn({uv:!0,ao:!0,lit:!0}),color:new dn({ao:!0}),foliage:new dn,leaf:new dn({uv:!0}),lamp:new dn({color:!1}),sig:new dn({color:!1}),sodium:new dn({color:!1}),decal:new dn({uv:!0}),pool:new dn({uv:!0,color:!1})},u=new Kh,h=[],c=[];o.lamps=[];let d={},m={},x=(C,A)=>{t.at(C,m);let D=Rn(C,"rw");return m.y+Zr(C,A,m.y,D)},g=C=>{let A=Ut(C);return[A.city,A.sakura,A.coast,A.country,A.snow]},p=(C,A,D)=>(t.at(C,d),[d.x+d.rx*A-a,D,d.z+d.rz*A-l]),v=(C,A,D,P=0,w=!0)=>{t.at(C,d);let I=d.h-Math.PI/2+(w&&A<0?Math.PI:0)+P,U=new et().makeRotationY(I);return U.setPosition(d.x+d.rx*A-a,D,d.z+d.rz*A-l),U.groundY=D,U},b=(C,A,D=0,P=0,w=!0)=>{let I=x(C,A),U=v(C,A,I+D,P,w);return U.groundY=I,U},_=C=>t.at(C,m).y,y=C=>Rn(C,"rw"),S=C=>{let A=Ut(C);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let C=Bi(n+$t/2),A=!!C&&C.s>n-40&&C.s<s+40,D=A?61:21,P=y(n+$t/2),w=(()=>{let $=[0,...ap].map(oe=>oe);return lp.forEach(oe=>$.push(oe-P)),$})(),I=[...w.slice().reverse().map(G=>-G),...w],U=I.length,N=Array.from({length:D},(G,$)=>n+$/(D-1)*$t);{let G=ui(n+$t/2);if(G)for(let $ of[G.s-tn,G.s+tn])$>n+.1&&$<s-.1&&N.push($-.03,$+.03)}N.sort((G,$)=>G-$);let V=U/2,z=N.map(G=>(t.at(G,d),{s:G,f:{...d},rw:y(G),w:g(G),rb:A?u0(G):0})),H=Math.round(V/2);for(let[G,$,oe,re]of[[0,H,0,1],[H-1,V,1,0],[V,V+H+1,0,1],[V+H,U,1,0]])u.gridN(z.length,$-G,(le,Se)=>{let X=z[le],Y=X.f,ye=G+Se,Ce=I[ye],ve=Ce<0||Ce===0&&ye<V?Ce-X.rw:Ce+X.rw,Ge=Y.y+Zr(X.s,ve,Y.y,X.rw),it=Math.abs(ve)>X.rw+.98?Math.min(1,Ac/.5):0;return[Y.x+Y.rx*ve-a,Ge,Y.z+Y.rz*ve-l,0,1,0,ns(X.s,bs),ve,X.w[0],X.w[1],X.w[2],X.w[3],X.rw,0,X.rb>0?X.rb:-it,X.w[4]]},oe,re),yield}yield,u.grid(31,2,(A,D)=>{let P=n+A/30*$t,w=y(P),I=D?w:-w;t.at(P,d);let U=d.y,N=(_(P+1)-_(P-1))/2,V=-N*d.fx,z=1,H=-N*d.fz,G=Math.hypot(V,z,H),$=g(P);return[d.x+d.rx*I-a,U,d.z+d.rz*I-l,V/G,z/G,H/G,ns(P,bs),I,$[0],$[1],$[2],$[3],w,1,0,$[4]]});{let C=[];for(let P=0;P<=30;P++){let w=n+P/30*$t;C.push({s:w,sw:S(w)})}let A=[],D=null;for(let P of C)P.sw>0?(D||(D=[],A.push(D)),D.push(P)):D=null;for(let P of A)if(!(P.length<2))for(let w of[-1,1])u.grid(P.length,2,(I,U)=>{let{s:N,sw:V}=P[I],z=y(N),H=w*(U===(w>0?0:1)?z:z+V);t.at(N,d);let G=g(N);return[d.x+d.rx*H-a,d.y+.15,d.z+d.rz*H-l,0,1,0,ns(N,bs),H,G[0],G[1],G[2],G[3],z,2,0,G[4]]}),u.grid(P.length,2,(I,U)=>{let{s:N}=P[I],V=y(N),z=w*V,H=w>0?U:1-U;t.at(N,d);let G=g(N);return[d.x+d.rx*z-a,d.y+(H?.15:0),d.z+d.rz*z-l,-w*d.rx,0,-w*d.rz,ns(N,bs),z,G[0],G[1],G[2],G[3],V,3,0,G[4]]})}yield,yield*this.placePoles(e,n,s,f,o,v,x,p,_,y);{let C=Math.ceil((n-Ys)/qs),A=Xr(C);A<s&&aa(A)&&(yield*this.placeCrossing(o,u,A,v,_,y,x,S,a,l));let D=Math.ceil((n-Yr)/Zs),P=Ch(D);P<s&&Ph(P)&&(yield*this.placeRiver(o,u,P,v,_,y,x,S,a,l,f,c));let w=ui(n+$t/2);w&&w.s+en>n&&w.s-en<s&&(yield*this.placeTunnel(o,u,w,n,s,v,b,x,y,a,l,f))}yield;for(let C=n;C<s;C+=4){let A=Qt(C);(A==="coast"&&Ut(C).coast>.45||A==="mountain"&&Ut(C).mountain>.45)&&!wi(C+2,en+4)&&this.guardrail(o,C,Math.min(C+4,s),p,_,y)}yield*this.placeCity(o,f,n,s,v,b,_,y,S,x,u,a,l),yield*this.placeSakura(o,f,n,s,v,b,_,y,x),this.placeCoast(o,f,n,s,v,b,_,y,x,h,p),yield,yield*this.placeCountry(o,f,n,s,v,b,_,y,x),yield*this.placeMountain(o,f,n,s,v,b,_,y,x),yield*this.placeSnow(o,f,n,s,v,b,_,y,x),yield*this.placeVerge(o,f,n,s,v,x,y),yield;let R=new Kt,M=(C,A,D,P,w=0,I)=>{if(!C)return null;let U=new dt(C,A);return U.castShadow=D,U.receiveShadow=P,U.renderOrder=w,I&&(U.userData.detail=I),R.add(U),U},E=new Set;for(let C of[n,n+20,n+40,s]){let A=Wr(C);E.add(A.a),A.t>0&&E.add(A.b)}M(u.build(),ua([...E]),!1,!0),yield,M(o.atlas.build(),this.M.atlas,!0,!0),yield;{let C=M(o.color.build(),this.M.color,!0,!0);C&&(C.customDepthMaterial=Lc)}if(yield,M(o.foliage.build(),this.M.foliage,!0,!0),M(o.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(o.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(o.sig.build(),this.M.sig,!1,!1,0,"small"),M(o.sodium.build(),this.M.sodium,!1,!1),M(o.decal.build(),this.M.decal,!1,!0,1,"small"),M(o.pool.build(),this.M.pool,!1,!1,2,"light"),h.length){let C=new yt,A=[],D=[],P=[];h.forEach((w,I)=>{for(let U of w)A.push(U[0],U[1],U[2]),D.push(U[3],U[4]);if(I>0){let U=(I-1)*2;P.push(U,U+2,U+1,U+1,U+2,U+3)}}),C.setAttribute("position",new je(A,3)),C.setAttribute("su",new je(D,2)),C.setIndex(P),C.computeBoundingSphere(),M(C,this.foamMat,!1,!1,1)}for(let C of c)M(C,this.riverMat,!1,!0);return R.position.set(a-this.origin.x,0,l-this.origin.z),{group:R,ox:a,oz:l,s0:n,lamps:new Float32Array(o.lamps)}}poleSpec(e){let t=e*$h+6,n=Qt(t);if(n==="sakura"||Ts(t,6)||ni(t,34)||wi(t,en+12))return null;let s=Rn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,a,l,f,o,u){let h=Math.ceil((t-6)/$h),c=Math.floor((n-6-.001)/$h);for(let d=h;d<=c;d++){let m=this.poleSpec(d);if(!m)continue;let x=m.z==="city"?o(m.s)+.15:l(m.s,m.u),g=a(m.s,m.u,x),p=Dn(Math.floor(ti(d,31)*4294967295)),v=Hh(r,g,p,{trans:p()<.45});m.z==="city"&&d%2===0&&F0(r,g,-.11),d%2&&(yield);let b=this.poleSpec(d+1);if(b){let _=b.z==="city"?o(b.s)+.15:l(b.s,b.u),y=U0(a(b.s,b.u,_));r.color.setM(new et);let S=[];for(let R=0;R<v.length;R++){let M=v[R],E=y[R],C=.35+p()*.4+(R>=7?.3:0);S.push(C),r.color.wire([M.x,M.y,M.z],[E.x,E.y,E.z],C,R>=7?.022:.015,ma,10)}if(m.z!=="coast"&&p()<.38){let R=Math.floor(p()*4),M=v[R],E=y[R],C=1+Math.floor(p()*4),A=.18+p()*.5;for(let D=0;D<C;D++){let P=Math.min(.92,A+D*(.018+p()*.025)),w=M.x+(E.x-M.x)*P,I=M.z+(E.z-M.z)*P,U=M.y+(E.y-M.y)*P-S[R]*4*P*(1-P);r.color.box(w-.07,U+.015,I-.07,w+.07,U+.19,I+.07,cp),r.color.box(w-.045,U+.19,I-.045,w+.045,U+.27,I+.045,cp)}}}if(m.z==="city"){r.color.setM(new et);let _=1+Math.floor(p()*3);for(let y=0;y<_;y++){let S=v[7+y%2],R=(p()-.5)*14,M=u(m.s+R),E=p()<.55,C=E?-(M+3.15):M+3.15,A=f(m.s+R,C,o(m.s+R)+5.2+p()*2.5);r.color.wire([S.x,S.y,S.z],A,.25+p()*.4,.012,ma,8)}}}}*intersection(e,t,n,s,r,a,l,f,o,u,h){let c=this.path.at(n,{}),d=a(n),m=l(n),x=f(n)||3,g=n-.5,p=Ut(n),v=[p.city,p.sakura,p.coast,p.country],b=(y,S,R)=>[c.x+c.fx*(y-.5)+c.rx*S-u,R,c.z+c.fz*(y-.5)+c.rz*S-h],_=m+x+.15;for(let y of[-1,1]){let S=y*(m+x),R=y*80;o.grid(21,2,(A,D)=>{let P=S+(R-S)*A/20,w=(D?-3:3)*y,I=b(w,P,d+.165);return[I[0],I[1],I[2],0,1,0,w*y,P,v[0],v[1],v[2],v[3],m,10]});{let A=y*(m+x+3.2),D=-y*1.35,P=1.15,w=.42,I=(U,N)=>b(D+y*U,A-y*N,d+.18);e.decal.setM(new et),e.decal.quad(I(-P,-w),I(P,-w),I(P,w),I(-P,w),[1,1,1],ha("tomare"))}for(let A of[-1,1]){let D=_+15+t()*3;for(;D<52;){let P=t.range(5.5,8.5),w=y*(D+P/2),I=t(),U=r(g+A*3.3,w,d+.14,A>0?Math.PI/2:-Math.PI/2,!1);ts(e,U,t,{type:I<.5?"house":"shop",w:P,d:t.range(7,10),floors:I<.5?2:t.int(2,3),tint:t.pick(ji),litP:.45,fence:0}),D+=P+t.range(.2,1.2),yield}yield}let M=[30,54].map(A=>r(g+2.8,y*A,d+.15,-Math.PI/2,!1)),E=Dn(Math.floor(ti(s,y>0?71:73)*4294967295)),C=M.map(A=>Hh(e,A,E,{trans:E()<.4}));e.color.setM(new et);for(let A=0;A<7;A++){let D=C[0][A],P=C[1][A];e.color.wire([D.x,D.y,D.z],[P.x,P.y,P.z],.3+E()*.4,.014,ma,10)}}Yh(e,r(n-9,-(m+.55),d+.15,0,!0),1,m+.55-1.6),Yh(e,r(n+8,m+.55,d+.15,0,!0),1,m+.55-1.6),s%3===1&&J0(e,r(n+15,0,d,0,!1),m+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,a,l,f,o,u){let h=this.path.at(n,{}),c=h.y,d=a(n),m=f(n),x=d+m+.2,g=150,p=c+.18,v=Ut(n),b=[v.city,v.sakura,v.coast,v.country],_=(I,U,N)=>[h.x+h.fx*I+h.rx*U-o,N,h.z+h.fz*I+h.rz*U-u],y=[7.6,4.7,-4.7,-7.6];for(let[I,U]of[[-g,-x],[x,g]])t.grid(25,y.length,(V,z)=>{let H=I+(U-I)*V/24,G=y[z],oe=Math.abs(G)<5?p:Math.min(p-.05,l(n+G,H)-.03),re=_(G,H,oe);return[re[0],re[1],re[2],0,1,0,G,H,b[0],b[1],b[2],b[3],d,5]});let S=(I,U,N)=>t.grid(2,2,(V,z)=>{let H=V?U:I,G=z?-3.3:3.3,$=_(G,H,N);return[$[0],$[1],$[2],0,1,0,G,H,b[0],b[1],b[2],b[3],d,6]});S(-d,d,c+.03),m>0&&(S(-x,-d,c+.165),S(d,x,c+.165));let R=(I,U,N,V)=>t.grid(2,2,(z,H)=>{let G=z?V:N,$=H?U:I,oe=_($,G,c+.025);return[oe[0],oe[1],oe[2],0,1,0,$,G,b[0],b[1],b[2],b[3],d,7]});R(-7.15,-7.6,-d+.3,-.12),R(7.6,7.15,.12,d-.3),yield;let M=s(n,0,c,-Math.PI/2,!1),E=e.color;E.setM(M);let C=[.42,.4,.38],A=[.3,.29,.28],D=[.55,.57,.6];for(let I of[-2,2])for(let U of[-.5335,.5335]){let N=-(I+U);for(let[V,z]of[[-g,-x],[x,g]])E.box(V,.26,N-.035,z,.34,N+.035,C);E.box(-x,0,N-.035,x,.04,N+.035,A)}let P=[-146,-104,-64,-26,26,64,104,146];for(let I of P){for(let U of[-4.95,4.95])E.box(I-.12,.18,U-.12,I+.12,7.4,U+.12,D);E.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,D);for(let U of[-2,2])E.box(I-.04,6.3,-U-.04,I+.04,6.95,-U+.04,D)}for(let I of[-2,2])for(let U=0;U<P.length-1;U++)E.wire([P[U],5.35,-I],[P[U+1],5.35,-I],.05,.011,ma,6),E.wire([P[U],6.4,-I],[P[U+1],6.4,-I],.45,.011,ma,8);yield;let w=Math.round((n-Ys)/qs);if(v.country>.9&&ti(w,17)<.7){let I=ti(w,19)<.5?-1:1,U=I>0?d+9:-(d+9+46),N=I>0?d+9+46:-(d+9);K0(e,M,U,N,I*(d+9),Math.abs(w)%4,Dn(Math.floor(ti(w,23)*4294967295))),E.setM(M)}yield;for(let I of Dc(this.path,n)){let U=new et().makeRotationY(I.yaw);U.setPosition(I.x-o,I.y,I.z-u),ep(e,U)}Ss(e,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(m>0?1:0)),"sign_xing",1,2.2,.85),Ss(e,s(n+70,a(n+70)+.6,r(n+70)+.15*(m>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,a,l,f,o,u,h,c){let d=this.path.at(n,{}),m=d.y,x=a(n),g=f(n),p=Ut(n),v=[p.city,p.sakura,p.coast,p.country],b=p.sakura>.5,_=222,y=x+g+.5,S=m-la,R=(w,I,U)=>[d.x+d.fx*w+d.rx*I-o,U,d.z+d.fz*w+d.rz*I-u];{let w=[],I=[],U=[];for(let z=0;z<=74;z++){let H=-_+2*_*z/74;for(let G of[12.5,-12.5]){let $=R(G,H,S);w.push($[0],$[1],$[2]),I.push(G,H)}if(z>0){let G=(z-1)*2;U.push(G,G+1,G+2,G+1,G+3,G+2)}}let V=new yt;V.setAttribute("position",new je(w,3)),V.setAttribute("su",new je(I,2)),V.setIndex(U),V.computeBoundingSphere(),c.push(V)}for(let[w,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,N]of[[-_,-(x+3.4)],[x+3.4,_]])t.grid(41,2,(V,z)=>{let H=U+(N-U)*V/40,G=z?I:w,$=R(G,H,m+.38);return[$[0],$[1],$[2],0,1,0,G,H,v[0],v[1],v[2],v[3],x,9,1]});yield;let M=s(n,0,m,0,!1),E=e.color,C=[.74,.73,.7],A=b?[.78,.2,.15]:[.55,.72,.64];E.setM(M),E.box(-24.5,-1,-y,24.5,-.03,y,C,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-la-1.4,-y+.6,w+.7,-1,y-.6,C);for(let w of[-25.7,25.7])E.box(w-1.2,-la+.4,-y-.4,w+1.2,-.05,y+.4,C);for(let w of[-24.5,24.5])E.box(w-.16,.004,-x,w+.16,.016,x,[.33,.32,.31]),E.box(w-.02,.016,-x,w+.02,.02,x,[.2,.19,.19]);let D=g>0?.15:0;for(let w of[-1,1]){let I=w*(y-.14);for(let U=-24;U<=24.01;U+=2)E.box(U-.06,D,I-.06,U+.06,D+1,I+.06,A);E.box(-24,D+.95,I-.08,24,D+1.08,I+.08,A),E.box(-24,D+.48,I-.03,24,D+.54,I+.03,A),E.box(-24,D+.06,I-.03,24,D+.12,I+.03,A)}let P="bridge"+Math.abs(Math.round(n/Zs))%4;for(let w of[-25,25])for(let I of[-1,1]){let U=I*(y-.1),N=[.7,.69,.65];E.box(w-.32,D,U-.32,w+.32,D+1.45,U+.32,N),E.box(w-.38,D+1.45,U-.38,w+.38,D+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(M);let V=(w<0?-1:1)*.325,z=P;w<0?e.atlas.quad([w-.325,D+.3,U-.22],[w-.325,D+.3,U+.22],[w-.325,D+1.3,U+.22],[w-.325,D+1.3,U-.22],[1,1,1],ha(z)):e.atlas.quad([w+.325,D+.3,U+.22],[w+.325,D+.3,U-.22],[w+.325,D+1.3,U-.22],[w+.325,D+1.3,U+.22],[1,1,1],ha(z)),E.setM(M)}fa(e,s(n-14,-(y-.45),m+D,0,!0)),fa(e,s(n+14,y-.45,m+D,0,!0)),yield;for(let w of[-18,18])for(let I of[-1,1]){yield;for(let U=11+h()*4;U<(b?125:170);U+=b?h.range(8.5,11):h.range(18,34)){let N=n+w+(h()-.5)*1.5,V=I*U;Nn(e,s(N,V,l(N,V),h()*6,!1),b?"sakura":"broad",h,b?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,a,l,f,o,u,h,c){let d=this.path.at(n.s,{}),m=d.y,x=o(n.s),g=x+1.4,p=Ut(n.s),v=[p.city,p.sakura,p.coast,p.country],b=a(n.s,0,m,0,!1),_=e.color,y=Math.max(s,n.s-tn)-n.s,S=Math.min(r,n.s+tn)-n.s;if(S>y+.01){let M=Math.max(2,Math.ceil((S-y)/3)+1),E=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];t.gridN(M,E.length,(N,V)=>{let z=y+(S-y)*N/(M-1),H=n.s+z,G=E[V],$=m+Cc(z,G);return[d.x+d.fx*z+d.rx*G-u,$,d.z+d.fz*z+d.rz*G-h,0,1,0,ns(H,bs),G,v[0],v[1],v[2],v[3],x,0,-1]});let C=[[-x,0],[-x,.2],[-g,.2],[-g,3.2]];for(let N=1;N<12;N++){let V=Math.PI*(1-N/12);C.push([g*Math.cos(V),3.2+3*Math.sin(V)])}C.push([g,3.2],[g,.2],[x,.2],[x,0]);let A=[.86,.82,.72],D=[.44,.45,.47],P=[.62,.61,.58],w=[];for(let N=y;N<S-.01;N+=6)w.push(N);w.push(S),_.setM(b);for(let N=0;N<w.length-1;N++)for(let V=0;V<C.length-1;V++){let[z,H]=C[V],[G,$]=C[V+1],oe=Math.max(H,$)<=.21?P:Math.abs(z)>g-.01&&Math.abs(G)>g-.01?A:D;_.quad([w[N],H,z],[w[N+1],H,z],[w[N+1],$,G],[w[N],$,G],oe)}e.sodium.setM(b),e.sig.setM(b);let I=g*Math.cos(Math.PI/6)-.12,U=3.2+3*Math.sin(Math.PI/6)-.08;for(let N=Math.ceil((y+tn-3)/6)*6+3-tn;N<S;N+=6)for(let V of[-1,1])e.sodium.box(N-.45,U-.07,V*I-.13,N+.45,U+.07,V*I+.13,null),er(e,b,N,U-.1,V*I,1);for(let N=Math.ceil((y+tn)/24)*24-tn;N<S;N+=24)e.sig.box(N-.3,.95,-g+.01,N+.3,1.2,-g+.06,null);for(let N=Math.ceil((y+tn-30)/60)*60+30-tn;N<S;N+=60)for(let V of[-1.15,1.15])_.box(N-1.1,5.2,V-.36,N+1.1,5.78,V+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(N-.08,5.78,V-.05,N+.08,6.15,V+.05,[.4,.4,.42]);yield}for(let M of[-1,1]){let E=n.s+M*tn,C=M*(tn+.08);if(E<s||E>=r)continue;let A=[];for(let $ of ap)$>=1.44&&A.push(x+$,-(x+$));for(let $ of lp)$>x+3.5&&$<x+21&&A.push($,-$);for(let $=0;$<=24;$++)A.push(-g+2*g*$/24);A.push(-g-.01,g+.01),A.sort(($,oe)=>$-oe);let D=$=>3.2+3*Math.sqrt(Math.max(0,1-($/g)**2)),P=$=>Math.max(f(E-M*.03,$)-m,Cc(M*(tn-.03),$)),w=$=>Math.abs($)<=g+1e-6?D($):f(E+M*.03,$)-m,I=[.78,.77,.73],U=[.66,.65,.62];_.setM(b);for(let $=0;$<A.length-1;$++){let oe=A[$],re=A[$+1];if(re-oe<1e-4)continue;let le=P(oe),Se=P(re),X=w(oe),Y=w(re);le-X<.01&&Se-Y<.01||(M<0?_.quad([C,X,oe],[C,Y,re],[C,Se,re],[C,le,oe],I):_.quad([C,Y,re],[C,X,oe],[C,le,oe],[C,Se,re],I))}for(let $=0;$<24;$++){let oe=-g+2*g*$/24,re=-g+2*g*($+1)/24,le=D(oe),Se=D(re),X=C+M*.02;M<0?_.quad([X,le,oe],[X,Se,re],[X,Se+.55,re*1.08],[X,le+.55,oe*1.08],U):_.quad([X,Se,re],[X,le,oe],[X,le+.55,oe*1.08],[X,Se+.55,re*1.08],U)}e.atlas.setM(b);let N=1.9,V=7.05,z=7.85,H=C+M*.03,G=ha("tunnel"+(p.coast>.5?1:Math.abs(n.k)%2?2:0));M<0?e.atlas.quad([H,V,-N],[H,V,N],[H,z,N],[H,z,-N],[1,1,1],G):e.atlas.quad([H,V,N],[H,V,-N],[H,z,-N],[H,z,N],[1,1,1],G)}yield;let R=p.mountain>.5;for(let M=Math.max(s,n.s-en*.95)+c()*3;M<Math.min(r,n.s+en*.95);M+=c.range(4,8)){let E=Math.abs(M-n.s)>tn-4?17:4;for(let C of[-1,1]){let A=C*(x+c.range(E,50)),D=c();Nn(e,l(M,A,-.3,c()*6,!1),R?D<.5?"maple":D<.8?"cedar":"ginkgo":D<.65?"pine":"broad",c,c.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,a,l,f,o){let u=h=>Ut(h).snow;if(!(u(n)<.3&&u(s)<.3)){for(let h of[-1,1]){for(let c=n+t()*20;c<s;c+=t.range(22,40)){if(u(c)<.6||t()<.5)continue;let d=h*t.range(18,90);ts(e,a(c,d,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(ji),litP:.62,fence:0,snow:!0});for(let m=0;m<2+t()*3;m++)Nn(e,a(c+t.range(-9,9),d+h*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let c=n+t()*5;c<s;c+=t.range(3,7))u(c)<.5||(t()<.32&&Nn(e,a(c,h*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Nn(e,a(c,h*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(u(h)<.55)continue;let c=f(h);{let d=r(h,-(c+.95),l(h)+1.3),m=r(h+18,c+.95,l(h+18)+1.3);d.groundY=l(h),m.groundY=l(h+18),Wh(e,d,1),Wh(e,m,-1)}}}}*placeMountain(e,t,n,s,r,a,l,f,o){let u=h=>Ut(h).mountain;if(!(u(n)<.3&&u(s)<.3)){for(let h of[-1,1]){for(let c=n+t()*4;c<s;c+=t.range(4.5,8.5)){if(u(c)<.45||wi(c,en+6))continue;let d=f(c),m=t();if(h>0){let x=m<.5?"maple":m<.72?"ginkgo":"cedar";Nn(e,a(c,d+t.range(17,70),-.25,t()*6,!1),x,t,t.range(.9,1.3))}else{let x=m<.55?"maple":m<.8?"cedar":"ginkgo";Nn(e,a(c,-(d+t.range(3.5,34)),-.25,t()*6,!1),x,t,t.range(.95,1.35))}}yield}for(let h=n+t()*4;h<s;h+=t.range(3,6)){if(u(h)<.5)continue;let c=t()<.7,d=-(f(h)+(c?t.range(108,205):t.range(36,100)));Nn(e,a(h,d,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new et);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(u(h)<.5||wi(h,en+4))continue;let c=f(h),d=r(h,-(c+.95),l(h));k0(e,d)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(u(h)<.6)continue;let c=this.path.curv(h);if(Math.abs(c)<1/230)continue;let d=f(h);c>0?Ss(e,r(h,d+.42,l(h)),"chev_l",-1,1.25,.58):Ss(e,r(h,-(d+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,a,l){for(let f of[-1,1]){for(let o=n+t()*1.2;o<s;o+=t.range(.55,1.5)){if(Ts(o,10)||ni(o,31)||wi(o,en+4))continue;let u=Qt(o),h=l(o),c,d,m=.22,x=1;if(u==="country")c=h+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),d=.95;else if(u==="sakura")c=h+2.68+t()*1.3,d=.55,m=.3;else if(u==="coast"){if(f<0)continue;c=h+.95+t()*1.7,d=.75,m=.18}else{if(u==="snow")continue;if(u==="mountain")c=f<0?h+1+t()*.35:h+.25+t()*.2,d=f<0?.55:.18,m=.12,x=.85;else{if(Jh(o,5))continue;c=h+3.02+t()*.1,d=.1,m=.08,x=.65}}if(t()>d)continue;let g=f*c;G0(e,r(o,g,a(o,g),t()*6.28,!1),t,t()<m?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,a){e.color.setM(new et);let l=Math.max(1,Math.round((n-t)/2));for(let f=0;f<l;f++){let o=t+(n-t)*f/l,u=t+(n-t)*(f+1)/l,h=-(a(o)+.95),c=-(a(u)+.95),d=r(o),m=r(u),x=(y,S,R)=>s(y,S,R),g=x(o,h,d+.52),p=x(u,c,m+.52),v=x(o,h,d+.84),b=x(u,c,m+.84);e.color.quad(g,p,b,v,fe.rail),e.color.quad(p,g,v,b,[.62,.64,.66]);let _=s(o,h-.05,d);e.color.box(_[0]-.05,d,_[2]-.05,_[0]+.05,d+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(e,t,n,s,r,a,l,f,o,u,h,c,d){for(let g of[-1,1]){let p=n+t()*2;for(;p<s-2;){{let P=Ut(p);if(P.city<.62||P.mountain>.1){p+=4;continue}}{let P=qr(p+6);if(P&&p<P.s+8.5&&p+14>P.s-8.5){p=Math.max(p+1,P.s+8.5);continue}}let v=ns(p,150);if(v>145.6||v<3.4){p+=1;continue}let b=f(p),_=o(p)||3,y=b+_+.15,S=t(),R=S<.42?"shop":S<.58?"apt":S<.68?"office":S<.82?"house":S<.88?"konbini":S<.94?"parking":"gap",M=R==="shop"?t.range(5,9):R==="apt"?t.range(10,16):R==="office"?t.range(10,14):R==="house"?t.range(7,9.5):R==="konbini"?t.range(12,14):R==="parking"?t.range(7,11):t.range(2,3.5);if(p+M>s){if(s-p<5||R==="konbini")break;M=s-p-.2}{let P=Math.ceil((p+4.4)/150)*150-4.4;if(p+M>P-.1){if(P-.1-p<4){p=P+7.9;continue}M=P-.1-p}}let E=p+M/2,C=l(E),A=t.pick(ji),D=.42;if(R==="parking"){let P=r(E,g*(y+3),C+.15);t()<.8&&$0(e,zc(P,0,0,.5,(t()-.5)*.1),t),e.color.setM(P),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,fe.concrete)}else if(R!=="gap"){let P=r(E,g*y,C+.15),w={type:R,w:M,d:R==="apt"||R==="office"?t.range(10,14):t.range(8,12),floors:R==="shop"?t.int(2,4):R==="apt"?t.int(4,9):R==="office"?t.int(4,8):2,tint:A,litP:D,fence:R==="house"&&t()<.5?1.2:0};if(ts(e,P,t,w),R!=="house"&&t()<.28&&Gh(e,r(E+(t()-.5)*(M-1.2),g*(y-.42),C+.15),t),(R==="shop"||R==="konbini")&&t()<.3)for(let I=0;I<1+t()*3;I++)B0(e,r(E-M/2+.8+I*.55,g*(y-.75),C+.15,Math.PI/2+.1),t);if(R==="house"&&t()<.6)for(let I=0;I<2+t()*3;I++)z0(e,r(E+1+I*.5,g*(y-.3),C+.15),t);if(t()<.03)for(let I=0;I<3;I++)O0(e,r(E+I*.9,g*(b+.35),C))}p+=M+t.range(.05,.5),yield}for(let v=n+t()*10;v<s-8;v+=t.range(14,26)){if(Ut(v).city<.7||Ut(v).mountain>.1||t()<.3||Ts(v,18)||Jh(v,15))continue;let b=f(v),_=r(v,g*(b+3.2+t.range(14,20)),l(v)+.1);ts(e,_,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(ji),litP:.4})}if(Ut(n+30).city>.7&&Ut(n+30).mountain<.1&&t()<.65){let v=n+t()*$t;if(Ts(v,24)||Jh(v,20))continue;let b=r(v,g*t.range(55,150),l(v));ts(e,b,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(ji),litP:.45})}}let m=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let g=m;g<=x;g++){let p=g*150;if(Qt(p)!=="city"||Ut(p).mountain>.1)continue;let v=f(p);yield*this.intersection(e,t,p,g,r,l,f,o,h,c,d),Ss(e,r(p-1,-(v+.4),l(p)+.15),"sign_blue",1),Ss(e,r(p-6,-(v+.4),l(p)+.15),"sign_stop",1,2.1,.75),Xh(e,r(p+7,v+.4,l(p)+.15),-1),g%3===0&&Ss(e,r(p+20,-(v+.4),l(p)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,a,l,f,o){for(let c of[-1,1]){for(let d=n+t()*4;d<s;d+=t.range(7.5,10)){if(Ut(d).sakura<.45||ni(d,30))continue;let m=f(d);Nn(e,a(d,c*(m+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&Nn(e,a(d+3,c*(m+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let d=n+(c>0?0:12);d<s;d+=24){if(Qt(d)!=="sakura"||ni(d,30))continue;let m=f(d);fa(e,r(d,c*(m+2.25),l(d)+.15)),ns(d,48)<24&&tp(e,r(d+6,c*(m+3),o(d+6,c*(m+3))))}for(let d=n+t()*15;d<s;d+=t.range(14,24)){if(Qt(d)!=="sakura"||t()<.35||ni(d,45))continue;let m=f(d);ts(e,a(d,c*(m+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(ji),litP:.45,fence:t()<.6?1.4:0})}}let h=Math.floor((n+$t/2)/480)*480+240;h>=n&&h<s&&Qt(h)==="sakura"&&!ni(h,60)&&Zh(e,r(h,0,l(h),0,!1),f(h)+1.6,6.4)}placeCoast(e,t,n,s,r,a,l,f,o,u,h){for(let m=0;m<=20;m++){let x=n+m/20*$t;if(Ut(x).coast<.85||wi(x,en*1.25)){u.length&&u[u.length-1]!==null&&u.push(null);continue}let p=f(x),v=p+11,b=p+19,_=h(x,-v,Ms+.06),y=h(x,-b,Ms+.06);u.push([[_[0],_[1],_[2],ns(x,bs),0],[y[0],y[1],y[2],ns(x,bs),1]])}let c=u.indexOf(null);c>=0&&(u.length=c),u.length<2&&(u.length=0);for(let m=n+t()*6;m<s;m+=t.range(5,9)){if(Qt(m)!=="coast"||wi(m,en+6))continue;let x=f(m);t()<.7&&Nn(e,a(m,x+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Nn(e,a(m+2,-(x+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let m=n+4;m<s;m+=t.range(18,30)){if(Qt(m)!=="coast"||t()<.4||wi(m,en*1.4))continue;let x=f(m),g=3+Math.floor(t()*5);for(let p=0;p<g;p++){let v=-(x+t.range(12,17)),b=m+t.range(-3,3);ip(e,r(b,v,Math.max(o(b,v),Ms-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let m=n+12;m<s;m+=48){if(Qt(m)!=="coast"||wi(m,en+4))continue;let x=f(m);Vh(e,a(m,x+1),t)}if(Qt(n+30)==="coast"&&t()<.5){let m=n+t()*$t,x=f(m);wi(m,en+25)||ts(e,a(m,x+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(ji),litP:.5,fence:0})}if(Qt(n+30)==="coast"&&t()<.55){let m=n+t()*$t;rp(e,r(m,-(f(m)+t.range(45,220)),Ms-.25,t()*6,!1),t)}let d=Math.floor((n+$t/2)/1500)*1500+700;d>=n&&d<s&&Qt(d)==="coast"&&!wi(d,en*1.6)&&sp(e,r(d,-(f(d)+75),Ms-1,0,!1))}*placeCountry(e,t,n,s,r,a,l,f,o){for(let m of[-1,1]){yield;for(let x=n+t()*20;x<s;x+=t.range(20,40)){if(Qt(x)!=="country"||t()<.55||Ts(x,16)||ni(x,48))continue;let g=m*t.range(16,95),p=a(x,g);ts(e,p,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(ji),litP:.5,fence:0});for(let v=0;v<2+t()*3;v++){let b=g+m*t.range(6,14),_=x+t.range(-8,8);Nn(e,a(_,b,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let x=n+t()*8;x<s;x+=t.range(5,9)){if(Qt(x)!=="country"||Ts(x,7)||ni(x,36))continue;let g=m*t.range(140,210);Nn(e,a(x,g,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Ts(x+2,8)&&!ni(x+2,34)&&Nn(e,a(x+2,m*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let u=Math.floor((n+$t/2)/600)*600+300;if(u>=n&&u<s&&Qt(u)==="country"&&!ni(u,40)){let m=f(u);np(e,r(u,-(m+1.6),l(u)-.08),t)}let h=Math.floor((n+$t/2)/700)*700+120;if(h>=n&&h<s&&Qt(h)==="country"&&!ni(h,40)){let m=f(h);Gh(e,r(h,-(m+.95),l(h)-.08),t),Vh(e,r(h+2,-(m+.8),l(h)-.08),t)}let c=Math.floor((n+$t/2)/900)*900+450;if(c>=n&&c<s&&Qt(c)==="country"&&!ni(c,40)){let m=f(c);op(e,a(c,m+5),t)}let d=Math.floor((n+$t/2)/380)*380+190;if(d>=n&&d<s&&Qt(d)==="country"&&!ni(d,40)&&!Ts(d,30)){let m=f(d),x=(ti(Math.round(d),5)<.5?-1:1)*(m+2.75);Q0(e,a(d,x,0))}for(let m=n;m<s;m+=30){if(Qt(m)!=="country")continue;let x=this.path.curv(m);if(Math.abs(x)>1/450&&t()<.5){let g=x>0?-1:1,p=f(m);Xh(e,a(m,g*(p+.75)),g>0?-1:1)}}}};var Hc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new me(e):e)),ae={zenith:new me,horizon:new me,sunCol:new me,sunI:1,hemiSky:new me,hemiGround:new me,hemiI:1,fog:new me,cLit:new me,cShade:new me,cRim:new me,night:0,warm:0,overcast:0,rain:0,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function hp(i){let e=0;for(;e<Hc.length-2&&Hc[e+1][0]<=i;)e++;let t=Hc[e],n=Hc[e+1],s=Ec(Ht((i-t[0])/(n[0]-t[0]),0,1)),r=(a,l)=>l.copy(t[a]).lerp(n[a],s);r(1,ae.zenith),r(2,ae.horizon),r(3,ae.sunCol),ae.sunI=Lt(t[4],n[4],s),r(5,ae.hemiSky),r(6,ae.hemiGround),ae.hemiI=Lt(t[7],n[7],s),r(8,ae.fog),r(9,ae.cLit),r(10,ae.cShade),r(11,ae.cRim),ae.night=Lt(t[12],n[12],s),ae.warm=Lt(t[13],n[13],s),ae.sunEl=fp(i,ae.sunDir,ae.moonDir,ae.lightDir)}function fp(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Ht((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var vy=new k,xy=new k;function Qh(i,e){return fp((i%1+1)%1,vy,xy,e),e}var up={zenith:[new me("#7b8594"),new me("#141a28")],horizon:[new me("#b5bcc6"),new me("#283042")],fog:[new me("#a8b0ba"),new me("#232b3c")],hemiSky:[new me("#aab3bf"),new me("#3c4866")],hemiGround:[new me("#8b8983"),new me("#1e2030")],cLit:[new me("#d0d5dc"),new me("#2c3240")],cShade:[new me("#7c8593"),new me("#151922")]},jh=new me;function dp(i,e){if(ae.overcast=i,ae.rain=e,i<=.001)return;let t=ae.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])jh.copy(up[n][0]).lerp(up[n][1],t),ae[n].lerp(jh,i*(n==="cLit"||n==="cShade"?.75:.85));ae.sunI*=1-.82*i,ae.warm*=1-i,ae.cRim.multiplyScalar(1-i),ae.sunCol.lerp(jh.setRGB(.85,.87,.9),i*.6)}function pp(){let i=new vt({side:En,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ae.zenith},uHorizon:{value:ae.horizon},uSunDir:{value:ae.sunDir},uMoonDir:{value:ae.moonDir},uNoiseTex:ze.uNoiseTex,uSunCol:{value:ae.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new me},uOvercast:{value:0},uDeckLit:{value:new me},uDeckDark:{value:new me},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${Ti}
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
      }`}),e=new dt(new ko(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function _y(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,a=e?6:9;for(let p=0;p<a;p++){let v=.06+i()*.05;t.push([(p/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=e?6:2,f=s*.82,o=.1+.09;for(let p=0;p<l;p++){let v=Math.max(1,Math.round(f/.11));for(let b=0;b<v;b++){let _=(v===1?0:b/(v-1)-.5)*f+(i()-.5)*.05+r*p;t.push([_,o+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}o+=e?.115:.075,f*=e?.8:.66}let u=t.slice();for(let p of u){if(t.length>92)break;let v=1+Math.floor(i()*2);for(let b=0;b<v;b++){let _=.35+i()*2.4,y=p[3]*(.35+i()*.2);t.push([p[0]+Math.cos(_)*p[3]*.82,p[1]+Math.sin(_)*p[3]*.82,p[2]+.04,y])}}let h=t.slice(0,96),c=1e9,d=-1e9,m=-1e9;for(let p of h)c=Math.min(c,p[0]-p[3]*1.12),d=Math.max(d,p[0]+p[3]*1.12),m=Math.max(m,p[1]+p[3]*1.12);let x=Math.min(1,.92/(d-c),(.95-.1)/(m-.1)),g=(c+d)/2;for(let p of h)p[0]=(p[0]-g)*x,p[1]=.1+(p[1]-.1)*x,p[3]*=x;return h}function mp(i){let t={value:Array.from({length:96},()=>new St)},n=new vt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:ze.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ti}
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
      }`,depthTest:!1,depthWrite:!1,blending:Xn}),s=new dt(new kt(1,1),n),r=new Bs,a=new qi;r.add(s);let l=new Ot(1024*2,1024*2,{generateMipmaps:!0,minFilter:qn,magFilter:Wt}),f=i.getRenderTarget(),o=i.autoClear,u=Dn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let c=0;c<4;c++){let d=c%2===0,m=_y(u,d);m.forEach((x,g)=>t.value[g].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=m.length,n.uniforms.uSeed.value=c*13.7,l.viewport.set(c%2*1024,Math.floor(c/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[c%2,Math.floor(c/2)],tall:d})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=o,i.setRenderTarget(f),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function gp(i){let e=Dn(5),t=22,n=[],s=new kt(1,1);s.translate(0,.5,0);let r=new Bn(new Float32Array(t*4),4),a=new Bn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new vt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ae.cLit},uShade:{value:ae.cShade},uRim:{value:ae.cRim},uHaze:{value:ae.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),f=new Xi(s,l,t);f.frustumCulled=!1,f.renderOrder=-5;for(let m=0;m<t;m++){let x=m<12,g=i.kinds[(m*3+(x?0:1))%i.kinds.length],p=x?g.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:m/t*Math.PI*2+e.range(-.15,.15),d:x?e.range(2600,3400):e.range(1300,2200),base:x?e.range(-60,60):e.range(260,700),size:p,cell:g.cell,haze:x?.45:.18})}let o=new et,u=new yn,h=new k,c=new k,d=new k(0,1,0);return{group:f,update(m,x){let g=Math.atan2(ae.lightDir.x,ae.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,b)=>b.d-v.d).forEach((v,b)=>{h.set(m.x+Math.sin(v.phi)*v.d,m.y+v.base,m.z+Math.cos(v.phi)*v.d),u.setFromAxisAngle(d,v.phi+Math.PI),c.set(v.size,v.size,1),o.compose(h,u,c),f.setMatrixAt(b,o);let _=g-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-y*y*(3-2*y);r.setXYZW(b,v.cell[0],v.cell[1],S,v.haze),a.setX(b,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ae.warm))}),f.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ae.night*.35)*(1-ae.overcast*.55)*(1-.85*ae.rain)}}}function vp(){let i=new Kt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let c=h/360*Math.PI*2,d=Math.sin(c)*t.R,m=Math.cos(c)*t.R,x=wc(h/360*t.k*4,40+n*9),g=Math.pow(Math.max(0,x-.18)/.82,1.6),p=t.h*(.12+g);if(r.push(d,-60,m,d,-60+p,m),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let f=new yt;f.setAttribute("position",new je(r,3)),f.setAttribute("hf",new je(a,2)),f.setIndex(l);let o=new vt({side:Mn,fog:!1,uniforms:{uCol:{value:new me(t.col)},uHaze:{value:ae.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:ze.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ti}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new dt(f,o);u.frustumCulled=!1,u.renderOrder=999,i.add(u)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ae.night))*(1-.35*ae.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var jr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function xp(i){let e=i.get("weather"),t={mode:jr[e]?e:"auto",kind:jr[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return jr[e]&&(t.ov=jr[e][0],t.rain=jr[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=jr[t.kind];t.ov+=Ht(s-t.ov,-n/28,n/28);let a=t.ov>.75?r:0;t.rain+=Ht(a-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var hi={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new St(0,-1e3,0,0),new St(0,-1e3,0,0)]},uLampCol:{value:new me(1,.8,.52)}},Vc=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function _p(){let e=new k(42,22,42),t=new kt(1,1),n=new gs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Bn(s,4)),n.instanceCount=2400;let r=new vt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new me(1,1,1)},...hi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Vc}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new dt(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,f,o,u){a.visible=o>.01,r.uniforms.uTime.value=f,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=o,r.uniforms.uCol.value.setRGB(.3+.7*u,.33+.67*u,.42+.58*u)}}}function yp(){let e=new k(46,24,46),t=new kt(1,1);t.translate(0,.5,0);let n=new gs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Bn(s,4)),n.instanceCount=2600;let r=new vt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new me(.8,.85,.95)},...hi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Vc}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new dt(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,f,o,u){a.visible=o>.01,r.uniforms.uTime.value=f,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=o,r.uniforms.uCol.value.setRGB(.1+.8*u,.12+.83*u,.16+.84*u)}}}var On=64,ef=[2.2,1.3,2.6],yy=[-2.4,.35,-1.6];function Mp(){let i=new Float32Array(On*3),e=new Float32Array(On*3),t=new Float32Array(On*4),n=new Float32Array(On),s=new Uint8Array(On),r=new Float32Array(On);for(let b=0;b<On;b++)t[b*4]=t[b*4+1]=1;let a=new kt(1,1),l=new gs;l.index=a.index,l.setAttribute("position",a.attributes.position),l.setAttribute("uv",a.attributes.uv),l.instanceCount=0;let f=new Float32Array(On*4),o=new Float32Array(On*4),u={uP:{value:f},uC:{value:o},uNoiseTex:ze.uNoiseTex,uAmb:{value:new me},uSun:{value:new me},uTail:{value:new St},uCam:{value:new k},...hi},h=new vt({transparent:!0,depthWrite:!1,fog:!1,uniforms:u,vertexShader:`
      uniform vec4 uP[${On}], uC[${On}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Vc}
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
      }`}),c=new dt(l,h);c.frustumCulled=!1,c.renderOrder=4,c.visible=!1;let d=0,m=0,x=0,g=0,p=!1;function v(b,_,y,S,R,M,E,C,A,D,P){let w=d;d=(d+1)%On,i[w*3]=_,i[w*3+1]=y,i[w*3+2]=S,e[w*3]=R,e[w*3+1]=M,e[w*3+2]=E,t[w*4]=0,t[w*4+1]=C,t[w*4+2]=A,t[w*4+3]=D,n[w]=P,s[w]=b,r[w]=Math.random()}return{mesh:c,update(b,_,y,S,R,M,E,C,A,D,P){if(!P){if(p){for(let X=0;X<On;X++)t[X*4]=t[X*4+1];p=!1}c.visible=!1;return}let w=_.position,I=_.rotation.y,U=Math.cos(I),N=Math.sin(I),V=N*y,z=U*y,H=Math.min(1,Math.max(0,(y-2)/14)),G=R>.3?2:0,$=G?R:S;for(m+=24*$*H*b;m>=1;){m-=1;let X=(g^=1)?1:-1,Y=X*.67,ye=-1.28-Math.random()*.2,Ce=Math.random(),ve=Math.random(),Ge=1.6+1.6*Ce,it=G?.5+.7*ve:.9+1*ve,nt=X*(.3+.6*Math.random());v(G,w.x+Y*U+ye*N,w.y+.12,w.z-Y*N+ye*U,V*.55-N*Ge+nt*U,it,z*.55-U*Ge-nt*N,G?.45+.3*Ce:.55+.35*Ce,.2+.1*ve,G?.7+.35*ve:.8+.4*ve,.5*(.5+.5*H)*Math.min(1,$*1.5))}for(x+=(5+4*H)*M*b;x>=1;){x-=1;let X=Math.random();v(1,w.x-.42*U-1.78*N,w.y+.26,w.z+.42*N-1.78*U,V*.5-N*.8,.25+.2*X,z*.5-U*.8,1.3+.6*X,.14,.8+.4*Math.random(),.32*Math.min(1,M*1.5))}let oe=0,re=Math.exp(-ef[0]*b),le=Math.exp(-ef[1]*b),Se=Math.exp(-ef[2]*b);for(let X=0;X<On;X++){let Y=X*4;if(t[Y]>=t[Y+1])continue;let ye=t[Y]+=b,Ce=t[Y+1];if(ye>=Ce)continue;let ve=s[X],Ge=ve===0?re:ve===1?le:Se,it=X*3,nt=i[it]-D.x,ft=i[it+1]-D.y,xt=i[it+2]-D.z;if(nt*nt+ft*ft+xt*xt<20.25){t[Y]=Ce;continue}e[it]*=Ge,e[it+1]=e[it+1]*Ge+yy[ve]*b,e[it+2]*=Ge,i[it]+=e[it]*b,i[it+1]=Math.max(w.y+.05,i[it+1]+e[it+1]*b),i[it+2]+=e[it+2]*b;let st=ye/Ce,_t=oe*4;f[_t]=i[it],f[_t+1]=i[it+1],f[_t+2]=i[it+2],f[_t+3]=t[Y+2]+(t[Y+3]-t[Y+2])*Math.sqrt(st),o[_t]=n[X]*Math.min(1,st*6)*(1-st)*(1-st),o[_t+1]=ve,o[_t+2]=r[X],oe++}p=oe>0,c.visible=p,l.instanceCount=oe,p&&(u.uAmb.value.copy(E),u.uSun.value.copy(C),u.uTail.value.copy(A),u.uCam.value.copy(D))},shift(b,_){for(let y=0;y<On;y++)i[y*3]-=b,i[y*3+2]-=_}}}var tr=24,My=55,by=12;function bp(){let i=[],e=new Float32Array(tr*2*2),t=new Float32Array(tr*2*3);for(let o=0;o<tr;o++)if(e.set([o,-1,o,1],o*4),o<tr-1){let u=o*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}let n=new yt;n.setAttribute("position",new Bt(t,3)),n.setAttribute("aI",new Bt(e,2)),n.setIndex(i);let s=new Float32Array(tr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new me},uTime:{value:0},uNoiseTex:ze.uNoiseTex},a=new vt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${tr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ti}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new dt(n,a);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let f={};return{mesh:l,update(o,u,h,c,d,m,x,g){if(l.visible=m>.01,!!l.visible){for(let p=0;p<tr;p++)o.at(u+My+p*by,f),s[p*4]=f.x-h,s[p*4+1]=f.y,s[p*4+2]=f.z-c,s[p*4+3]=f.h;r.uW.value=d*.85,r.uHot.value=m,r.uTime.value=x,r.uSky.value.copy(g)}}}}var Qr=72;function Sy(){let i=[],e=[],t=(s,r,a,l,f,o)=>{i.push(...s,...r,...a),e.push(l,f,o)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new yt;return n.setAttribute("position",new je(i,3)),n.setAttribute("aWing",new je(e,1)),n}function Sp(){let i=Sy(),e=new Bn(new Float32Array(Qr*3),3),t=new Bn(new Float32Array(Qr*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new vt({side:Mn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ae.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Xi(i,n,Qr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new et,f=new yn,o=new Gn(0,0,0,"YXZ"),u=new k,h=new k,c=()=>r.reduce((x,g)=>x+g.birds.length,0);function d(x,g,p,v){let b=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(c()+b>Qr)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,R=new k().copy(g).addScaledVector(p,_).addScaledVector(v,y-S*75);R.y=g.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new k().copy(v).multiplyScalar(S*M).addScaledVector(p,(Math.random()-.3)*M*.6),C=x==="small"?.8:1.45,A=Array.from({length:b},(D,P)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:R,vel:E,birds:A,size:C,life:60})}function m(x,g,p,v){if(r.some(y=>y.kind==="gull")||c()+4>Qr)return;let b=new k().copy(x).addScaledVector(g,70).addScaledVector(p,-v*45);b.y=x.y+18;let _=Array.from({length:4},(y,S)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:b,vel:new k,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,g,p,v,b,_,y,S,R){n.uniforms.uTime.value=g,n.uniforms.uCam.value.copy(p);let M=y>.35&&S<.3,E=ae.warm>.25&&ae.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&d("small",p,v,b)),(E||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,d("crow",p,v,b)),_.coast>.6&&M&&m(p,v,b,1);let C=[.1+.08*y,.11+.09*y,.15+.1*y],A=0;for(let D=r.length-1;D>=0;D--){let P=r[D];if(P.kind==="gull"?(P.c.lerp(u.copy(R).addScaledVector(v,60).addScaledVector(b,-42).setY(R.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(P.life=Math.min(P.life,8),P.c.y+=x*6)):P.c.addScaledVector(P.vel,x),P.life-=x,P.life<0||P.kind!=="gull"&&P.c.distanceTo(p)>300){r.splice(D,1);continue}for(let w of P.birds){if(A>=Qr)break;let I,U,N,V;P.kind==="gull"?(w.w+=x*(14/w.r),I=P.c.x+Math.cos(w.w)*w.r,N=P.c.z+Math.sin(w.w)*w.r,U=P.c.y+w.h+Math.sin(g*.4+w.ph)*2,V=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(I=P.c.x+w.off.x+Math.sin(g*.7+w.ph)*1.2,U=P.c.y+w.off.y+Math.sin(g*1.1+w.ph)*.6,N=P.c.z+w.off.z,V=Math.atan2(P.vel.x,P.vel.z)),o.set(0,V,Math.sin(g+w.ph)*.15),f.setFromEuler(o),h.setScalar(P.size),l.compose(u.set(I,U,N),f,h),s.setMatrixAt(A,l);let z=P.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:P.kind==="crow"?[.05,.05,.07]:C;e.setXYZ(A,z[0],z[1],z[2]),t.setXY(A,w.fq,w.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,g){for(let p of r)p.c.x-=x,p.c.z-=g}}}function Tp(){let i=new vt({fog:!1,uniforms:{uNoiseTex:ze.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Ti}
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
      }`}),e=new dt(new kt(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Ms,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ae.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ae.overcast*.85}}}function Ep(){return new vt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new me(1,1,1)},uNoiseTex:ze.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Ti}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function wp(){return new vt({fog:!1,uniforms:{uNoiseTex:ze.uNoiseTex,uTime:{value:0},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ti}
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
      }`})}var ga=new k;function fi(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),f=Math.PI/4;ga.copy(e),ga[n]=0,ga.normalize();let o=.5*a/(a+l),u=1-ga.angleTo(i)/f;return Math.sign(ga[t])===1?u*o:l/(a+l)+o+o*(1-u)}var zn=class i extends zt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let f=new k,o=new k,u=new k(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,c=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,x=new k,g=.5/a;for(let p=0,v=0;p<h.length;p+=3,v+=2)switch(f.fromArray(h,p),o.copy(f),o.x-=Math.sign(o.x)*g,o.y-=Math.sign(o.y)*g,o.z-=Math.sign(o.z)*g,o.normalize(),h[p+0]=u.x*Math.sign(f.x)+o.x*r,h[p+1]=u.y*Math.sign(f.y)+o.y*r,h[p+2]=u.z*Math.sign(f.z)+o.z*r,c[p+0]=o.x,c[p+1]=o.y,c[p+2]=o.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[v+0]=fi(x,o,"z","y",r,n),d[v+1]=1-fi(x,o,"y","z",r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-fi(x,o,"z","y",r,n),d[v+1]=1-fi(x,o,"y","z",r,t);break;case 2:x.set(0,1,0),d[v+0]=1-fi(x,o,"x","z",r,e),d[v+1]=fi(x,o,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-fi(x,o,"x","z",r,e),d[v+1]=1-fi(x,o,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-fi(x,o,"x","y",r,e),d[v+1]=1-fi(x,o,"y","x",r,t);break;case 5:x.set(0,0,-1),d[v+0]=fi(x,o,"x","y",r,e),d[v+1]=1-fi(x,o,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function tf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,f=new yt,o=0;for(let u=0;u<i.length;++u){let h=i[u],c=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;f.addGroup(o,d,u),o+=d}}if(t){let u=0,h=[];for(let c=0;c<i.length;++c){let d=i[c].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=i[c].attributes.position.count}f.setIndex(h)}for(let u in r){let h=Ap(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;f.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){f.morphAttributes=f.morphAttributes||{},f.morphAttributes[u]=[];for(let c=0;c<h;++c){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][c]);let m=Ap(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;f.morphAttributes[u].push(m)}}}return f}function Ap(i){let e,t,n,s=-1,r=0;for(let o=0;o<i.length;++o){let u=i[o];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),l=new Bt(a,t,n),f=0;for(let o=0;o<i.length;++o){let u=i[o];if(u.isInterleavedBufferAttribute){let h=f/t;for(let c=0,d=u.count;c<d;c++)for(let m=0;m<t;m++){let x=u.getComponent(c,m);l.setComponent(c+h,m,x)}}else a.set(u.array,f);f+=u.count*t}return s!==void 0&&(l.gpuType=s),l}function Ty(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Wn(i);return n.colorSpace=jt,n}var nf=4;function Ey(){let t=document.createElement("canvas");t.width=128*nf,t.height=128;let n=t.getContext("2d"),s=(a,l,f,o,u)=>{n.beginPath(),n.moveTo(a+u,l),n.arcTo(a+f,l,a+f,l+o,u),n.arcTo(a+f,l+o,a,l+o,u),n.arcTo(a,l+o,a,l,u),n.arcTo(a,l,a+f,l,u),n.closePath(),n.fill()};for(let a=0;a<nf;a++){let l=a*128,f=n.createLinearGradient(0,0,0,128);f.addColorStop(0,"#9fbfe6"),f.addColorStop(.45,"#4a6690"),f.addColorStop(1,"#1d2638"),n.fillStyle=f,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",a===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),a===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),a===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new Wn(t);return r.colorSpace=jt,r}function va(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/nf)}return i}function Rp(){let i=new Kt,e=new Kt,t=new Kt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new St,new St],s=new me(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},a=Nh(new ln({color:"#ffffff",vertexColors:!0,gradientMap:Zn}),.85,.06,"paint-l",r),l=(re,le)=>Object.assign(new me(re),{gloss:le}),f=l("#9fd8c8",1),o=l("#e9e7e0",.55),u=l("#2a2c33",.35),h=l("#1b1c20",.04),c=l("#c8ccd2",.8),d=(re,le)=>{let Se=re.attributes.position.count,X=new Float32Array(Se*4);for(let Y=0;Y<Se;Y++)X.set([le.r,le.g,le.b,le.gloss],Y*4);return re.setAttribute("color",new je(X,4)),re},m=Nh(new ln({color:"#ffffff",map:Ey(),gradientMap:Zn}),1.2,.08,"glass-l",r),x=new ln({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Zn}),g=new ln({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:Zn}),p=new ln({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Zn}),v=new ln({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:Zn}),b=new sn({map:Ty()}),_=new Map,y=[],S=!1,R=new et,M=new Gn,E=new yn,C=new k(1,1,1),A=(re,le,Se,X,Y,ye=0,Ce=0,ve=0)=>{let Ge=re.index?re.toNonIndexed():re;if(le.isColor&&(d(Ge,le),le=a),M.set(ye,Ce,ve),E.setFromEuler(M),R.compose(new k(Se,X,Y),E,C),Ge.applyMatrix4(R),S){y.push(Ge);return}_.has(le)||_.set(le,[]),_.get(le).push(Ge)};A(new zn(1.48,.86,3.38,4,.15),f,0,.77,0),A(new zn(1.42,.66,2.6,4,.17),f,0,1.5,-.25),A(new zn(1.38,.09,2.5,3,.04),o,0,1.84,-.25),A(va(new kt(1.16,.5),1),m,0,1.53,-1.556,0,Math.PI,0),A(new zn(.42,.045,.04,2,.015),g,0,1.752,-1.578);let D=l("#16171b",0),P=l("#2b3134",.15),w=l("#b9bfc6",.9),I=l("#4d5258",.4),U=l("#9a1c22",.6);for(let re of[-1,1]){let le=re*Math.PI/2,Se=re<0,X=re*.712;A(va(new kt(.94,.46),2,Se),m,X,1.54,.45,0,le,0),A(va(new kt(.62,.46),3,Se),m,X,1.54,-.41,0,le,0),A(va(new kt(.5,.46),0,Se),m,X,1.54,-1.07,0,le,0),A(new zt(.012,.47,.085),u,re*.716,1.54,-.06),A(new zt(.014,.022,2.3),D,re*.718,1.305,-.2);for(let[Y,ye]of[[.8,.64],[-.06,.42],[-.76,.64]])A(new zt(.008,1.19-ye,.012),P,re*.742,(ye+1.19)/2,Y);A(new zt(.02,.028,.13),P,re*.748,1.06,.06),A(new zt(.02,.028,.13),P,re*.748,1.06,-.2),A(new zt(.01,.022,.62),P,re*.743,1.165,-1.08);for(let Y of[1.12,-1.12])A(new Os(.345,18,0,Math.PI),D,re*.741,.29,Y,0,le,0),A(new Ho(.35,.024,5,18,Math.PI),u,re*.744,.29,Y,0,le,0);A(new zn(.1,.12,.2,2,.04),f,re*.82,1.2,.95),A(new zt(.07,.035,.05),u,re*.765,1.16,.96),A(new zn(.14,.48,.08,2,.035),x,re*.64,1,-1.67),A(new zn(.12,.08,.06,2,.02),p,re*.64,.7,-1.67)}A(va(new kt(1.2,.52),0),m,0,1.52,1.056,-.12,0,0),A(new zn(1.52,.22,.22,2,.07),u,0,.42,-1.62),A(new zt(.24,.04,.05),u,0,.84,-1.69),A(new kt(.34,.17),b,0,.72,-1.7,0,Math.PI,0);for(let re of[-1,1])A(new zn(.4,.26,.04,2,.06),u,re*.5,.99,1.692),A(new yi(.105,.105,.03,16),v,re*.55,.99,1.71,Math.PI/2,0,0),A(new yi(.055,.055,.03,12),v,re*.38,.99,1.708,Math.PI/2,0,0),A(new zn(.1,.06,.04,2,.015),p,re*.62,.79,1.69),A(new zt(.46,.014,.014),D,re*.25,1.285,1.085,-.12,re*.12,0);A(new zn(.5,.12,.03,2,.03),D,0,.98,1.694);for(let re=0;re<3;re++)A(new zt(.46,.012,.012),P,0,.945+re*.035,1.712);A(new zn(1.52,.24,.22,2,.07),u,0,.44,1.62),A(new zt(.7,.07,.02),D,0,.4,1.732),A(new zt(.34,.17,.01),l("#f0cc38",.3),0,.66,1.733),A(new zt(.3,.05,.004),l("#2f5a2f",.1),0,.64,1.739);for(let re of[-1,1])A(new zt(.012,.63,.008),P,re*.55,.875,-1.693),A(new zt(.13,.045,.01),U,re*.6,.44,-1.734);A(new zt(1.1,.012,.008),P,0,.56,-1.693),A(new yi(.035,.035,.14,8),D,-.42,.27,-1.68,Math.PI/2,0,0),S=!0;for(let[re,le]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){A(new yi(.29,.29,.19,24),h,re,.29,le,0,0,Math.PI/2),A(new yi(.195,.195,.194,20),w,re,.29,le,0,0,Math.PI/2),A(new yi(.155,.155,.198,16),I,re,.29,le,0,0,Math.PI/2);for(let Se=0;Se<5;Se++){let X=Se/5*Math.PI*2+.3;A(new zt(.202,.03,.15),w,re,.29-.085*Math.sin(X),le+.085*Math.cos(X),X,0,0)}A(new yi(.045,.045,.206,10),c,re,.29,le,0,0,Math.PI/2)}S=!1;for(let[re,le]of _){let Se=new dt(tf(le),re);Se.castShadow=re!==m&&re!==b&&re!==g&&re!==v,Se.receiveShadow=!0,t.add(Se)}{let re=new dt(tf(y),a);re.castShadow=re.receiveShadow=!0,i.add(re)}{let Se=document.createElement("canvas");Se.width=48,Se.height=96;let X=Se.getContext("2d"),Y=X.createImageData(48,96);for(let Ce=0;Ce<96;Ce++)for(let ve=0;ve<48;ve++){let Ge=Math.max(0,Math.abs((ve+.5)/48-.5)*2.1-.62),it=Math.max(0,Math.abs((Ce+.5)/96-.5)*2.05-.78),nt=Math.hypot(Ge/.42,it/.24),ft=Math.max(0,1-nt),xt=(Ce*48+ve)*4;Y.data[xt]=Y.data[xt+1]=Y.data[xt+2]=Math.round(255*ft*ft*(3-2*ft)),Y.data[xt+3]=255}X.putImageData(Y,0,0);let ye=new dt(new kt(2.2,4.1),new sn({color:0,alphaMap:new Wn(Se),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ye.rotation.x=-Math.PI/2,ye.position.y=.03,ye.renderOrder=3,i.add(ye)}let N=new Kt;N.position.set(.02,1.3,-1.57),t.add(N);let V=new zt(.52,.026,.02);V.translate(.27,0,0);let z=new dt(d(V,u),a);z.rotation.z=.18,N.add(z);let H=0,G=new Xo(16773328,0,70,.55,.65,1.2);G.position.set(0,.8,1.6),G.target.position.set(0,0,18),t.add(G,G.target);let $={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},oe=(re,le)=>le*Math.tanh(re/le);return{group:i,lamps:n,lampCol:s,head:G,update(re,le,Se,X=0,Y=null){if(Y){let ye=oe(-Y.lat*.016,.045),Ce=oe(-Y.lon*.008,.03);$.rv+=((ye-$.roll)*55-$.rv*8)*re,$.roll+=$.rv*re,$.pv+=((Ce-$.pitch)*60-$.pv*9)*re+Y.kick,$.pitch+=$.pv*re,$.yv+=((Y.road-$.y)*85-$.yv*8)*re+Y.jolt,$.y+=$.yv*re,e.rotation.set($.pitch,0,$.roll),e.position.y=.35+$.y}if($.br+=((Y?Y.brake:0)-$.br)*Math.min(1,re*14),x.emissiveIntensity=.35+Se*3.2+$.br*(1.7+Se*2),g.emissiveIntensity=$.br*(2.4+Se*1.6),X>.15||H%2.6>.01){H+=re;let ye=H%2.6/2.6,Ce=Ge=>Ge*Ge*(3-2*Ge),ve=ye<.25?Ce(ye/.25):ye<.5?Ce(1-(ye-.25)/.25):0;z.rotation.z=.18+ve*2.5,X<=.15&&ye>=.5&&(H=0)}G.intensity=Se*60,v.emissiveIntensity=.15+Se*2.6}}}var eo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wy=new ms(-1,1,1,-1,0,1),sf=class extends yt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},Ay=new sf,Es=class{constructor(e){this._mesh=new dt(Ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var to=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ws.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Es(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xa=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Gc=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new qe);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new to(eo),this.copyPass.material.blending=Xn,this.timer=new qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}xa!==void 0&&(a instanceof xa?n=!0:a instanceof Gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc=class extends ii{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Cp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var no=class i extends ii{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new qe(e.x,e.y):new qe(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Ot(r,a,{type:cn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let c=new Ot(r,a,{type:cn,depthBuffer:!1});c.texture.name="UnrealBloomPass.v"+u,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),r=Math.round(r/2),a=Math.round(a/2)}let l=Cp;this.highPassUniforms=Ws.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let f=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new qe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let o=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=o,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ws.clone(eo.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new sn,this._fsQuad=new Es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new qe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[f].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],f=a+1<e?t[a+1]:0,o=l+f;s.push((a*l+(a+1)*f)/o),r.push(o)}return new vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new qe(.5,.5)},direction:{value:new qe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};no.BlurDirectionX=new qe(1,0);no.BlurDirectionY=new qe(0,1);var rf=class extends ii{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ot(4,4,{type:cn,depthBuffer:!1,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),this.mat=new vt({uniforms:{tDiffuse:{value:null},uTexel:{value:new qe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Es(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},Ry={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new qe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new qe(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Pp(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let a=i.getSize(new qe),l=new Ot(a.x*i.getPixelRatio(),a.y*i.getPixelRatio(),{type:cn,samples:n}),f=new Wc(i,l);f.addPass(new Xc(e,t));let o=new rf;f.addPass(o);let u=new no(new qe(a.x*r*.5,a.y*r*.5),.42,.55,.86);f.addPass(u);let h=new to(Ry);h.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},h.material.toneMapped=!1,f.addPass(h);let c=f.render.bind(f);return f.render=d=>{h.uniforms.toneMappingExposure.value=i.toneMappingExposure,c(d)},{composer:f,bloom:u,grade:h,refl:o}}function Ip(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let ce=0;ce<2;ce++){let Ee=s.getChannelData(ce);for(let be=0;be<n;be++)Ee[be]=(Math.random()*2-1)*Math.pow(1-be/n,3)}let r=e.createConvolver();r.buffer=s;let a=e.createGain();a.gain.value=.55,r.connect(a),a.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let f=e.createGain();f.gain.value=.11,l.connect(f),f.connect(t),f.connect(r);let o=(ce,Ee)=>{let be=e.createBuffer(1,e.sampleRate*ce,e.sampleRate),Me=be.getChannelData(0),F=0;for(let Le=0;Le<Me.length;Le++)Ee?(F=(F+.02*(Math.random()*2-1))/1.02,Me[Le]=F*3.5):Me[Le]=Math.random()*2-1;return be},u=(ce,Ee,be)=>{let Me=e.createBufferSource();Me.buffer=ce,Me.loop=!0;let F=e.createBiquadFilter();F.type=Ee,F.frequency.value=be;let Le=e.createGain();return Le.gain.value=0,Me.connect(F),F.connect(Le),Le.connect(t),Me.start(),{f:F,g:Le}},h=u(o(2,!0),"lowpass",400),c=u(o(3,!1),"lowpass",700);c.g.connect(r);let d=u(o(2,!1),"bandpass",5200);d.f.Q.value=6;let m=u(o(2,!0),"lowpass",240),x=u(o(3,!1),"bandpass",2600);x.f.Q.value=.35;let g=u(o(2,!0),"lowpass",520),p=u(o(2,!1),"bandpass",1500);p.f.Q.value=.7;let v=e.createBiquadFilter(),b=e.createGain(),_=e.createOscillator(),y=e.createOscillator(),S=e.createGain();_.type="sawtooth",y.type="triangle",v.type="lowpass",v.frequency.value=320,v.Q.value=.6,b.gain.value=0,S.gain.value=.5,_.connect(v),y.connect(S),S.connect(v),v.connect(b),b.connect(t),_.start(),y.start();let R=u(o(3,!1),"bandpass",750);R.f.Q.value=.6;let M=u(o(3,!0),"lowpass",420),E=u(o(2,!0),"lowpass",140),C=o(.03,!1),A=0;function D(ce,Ee){let be=e.createBufferSource(),Me=e.createBiquadFilter(),F=e.createGain();be.buffer=C,Me.type="bandpass",Me.frequency.value=1800+Math.random()*2600,Me.Q.value=1.2,F.gain.setValueAtTime(Ee*(.02+Math.random()*.03),ce),F.gain.exponentialRampToValueAtTime(1e-4,ce+.03),be.connect(Me),Me.connect(F),F.connect(t),be.start(ce),be.stop(ce+.04)}let P=0,w=0;function I(ce,Ee){let be=e.createOscillator(),Me=e.createOscillator(),F=e.createGain(),Le=e.createBiquadFilter();Le.type="bandpass",Le.frequency.value=1150,Le.Q.value=2.2,be.type="square",be.frequency.value=745,Me.type="triangle",Me.frequency.value=1490,F.gain.setValueAtTime(0,ce),F.gain.linearRampToValueAtTime(.085*Ee,ce+.004),F.gain.exponentialRampToValueAtTime(1e-4,ce+.3),be.connect(Le),Me.connect(Le),Le.connect(F),F.connect(t),F.connect(r),be.start(ce),Me.start(ce),be.stop(ce+.33),Me.stop(ce+.33)}function U(ce,Ee){let be=e.createOscillator(),Me=e.createGain();be.type="sine",be.frequency.setValueAtTime(110,ce),be.frequency.exponentialRampToValueAtTime(48,ce+.12),Me.gain.setValueAtTime(1e-4,ce),Me.gain.linearRampToValueAtTime(.22*Ee,ce+.006),Me.gain.exponentialRampToValueAtTime(1e-4,ce+.17),be.connect(Me),Me.connect(t),be.start(ce),be.stop(ce+.2)}let N=e.createGain();N.gain.value=1,N.connect(t);let V=e.createGain();V.gain.value=.35,N.connect(V),V.connect(r);let z=(ce=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return N;let Ee=e.createStereoPanner();return Ee.pan.value=ce,Ee.connect(N),Ee};function H(ce,Ee,be,Me,F,Le,Ye="sine",B=0){let T=e.createOscillator(),Z=e.createGain();if(T.type=Ye,T.frequency.setValueAtTime(Ee,ce),T.frequency.exponentialRampToValueAtTime(be,ce+Me),B){let K=e.createOscillator(),O=e.createGain();K.frequency.value=B,O.gain.value=Ee*.012,K.connect(O),O.connect(T.frequency),K.start(ce),K.stop(ce+Me+.05)}return Z.gain.setValueAtTime(1e-4,ce),Z.gain.linearRampToValueAtTime(F,ce+Math.min(.04,Me*.25)),Z.gain.setValueAtTime(F,ce+Me*.7),Z.gain.exponentialRampToValueAtTime(1e-4,ce+Me),T.connect(Z),Z.connect(Le),T.start(ce),T.stop(ce+Me+.02),Z}function G(ce,Ee){let be=z(),Me=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let Le=0;Le<Me;Le++){let Ye=ce+Le*(.09+Math.random()*.07);H(Ye,F,F*(1.2+Math.random()*.3),.06,Ee*.022,be)}}function $(ce,Ee){let be=z();H(ce,1120,1390,1,Ee*.03,be,"sine",5.5),H(ce+1.15,2350,2150,.14,Ee*.03,be),H(ce+1.32,1700,1520,.13,Ee*.028,be),H(ce+1.5,2750,2480,.36,Ee*.032,be)}function oe(ce,Ee){let be=z(),Me=1+Math.floor(Math.random()*3);for(let F=0;F<Me;F++){let Le=ce+F*.48,Ye=e.createOscillator(),B=e.createBiquadFilter(),T=e.createGain();Ye.type="sawtooth",Ye.frequency.setValueAtTime(560,Le),Ye.frequency.exponentialRampToValueAtTime(420,Le+.32),B.type="bandpass",B.frequency.value=1150,B.Q.value=1.6,T.gain.setValueAtTime(1e-4,Le),T.gain.linearRampToValueAtTime(Ee*.03,Le+.03),T.gain.exponentialRampToValueAtTime(1e-4,Le+.36),Ye.connect(B),B.connect(T),T.connect(be),Ye.start(Le),Ye.stop(Le+.4)}}function re(ce,Ee){let be=z(),Me=2+Math.floor(Math.random()*2);for(let F=0;F<Me;F++)H(ce+F*.42,1750,1150,.36,Ee*.022,be,"triangle",11)}function le(ce,Ee){let be=z(),Me=e.createOscillator(),F=e.createBiquadFilter(),Le=e.createGain(),Ye=240+Math.random()*220,B=5+Math.floor(Math.random()*4);Me.type="square",Me.frequency.value=Ye,F.type="bandpass",F.frequency.value=Ye*2.4,F.Q.value=3,Le.gain.setValueAtTime(1e-4,ce);for(let T=0;T<B;T++){let Z=ce+T*.038;Le.gain.linearRampToValueAtTime(Ee*.014,Z+.008),Le.gain.linearRampToValueAtTime(1e-4,Z+.028)}Me.connect(F),F.connect(Le),Le.connect(be),Me.start(ce),Me.stop(ce+B*.038+.05)}function Se(ce,Ee){let be=z(),Me=4300+Math.random()*700;for(let F=0;F<3;F++)H(ce+F*.055,Me,Me*1.01,.035,Ee*.009,be)}function X(ce,Ee){let be=z(0);for(let[Me,F,Le]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let Ye=e.createOscillator(),B=e.createGain();Ye.type="sine",Ye.frequency.value=Me,Ye.detune.value=(Math.random()-.5)*8,B.gain.setValueAtTime(1e-4,ce),B.gain.linearRampToValueAtTime(Ee*.05*F,ce+.03),B.gain.exponentialRampToValueAtTime(1e-4,ce+Le),Ye.connect(B),B.connect(be),Ye.start(ce),Ye.stop(ce+Le+.1)}}function Y(ce,Ee){let be=z();for(let Me of[ce,ce+.22])H(Me,2650,2600,.5,Ee*.018,be),H(Me,3950,3900,.35,Ee*.008,be)}let ye={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ce=ce=>ce>1e-4?-Math.log(1-Math.random()*.98)/ce:1e9,ve=ce=>440*Math.pow(2,(ce-69)/12),Ge=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],it=[72,74,76,79,81,84,86,88],nt=0,ft=e.currentTime+.2,xt=e.currentTime+3;function st(ce){let Ee=Ge[nt++%Ge.length],be=11;for(let Me of Ee)for(let F of[-5,5]){let Le=e.createOscillator(),Ye=e.createGain();Le.type=F<0?"sine":"triangle",Le.frequency.value=ve(Me),Le.detune.value=F,Ye.gain.setValueAtTime(0,ce),Ye.gain.linearRampToValueAtTime(.18,ce+3.5),Ye.gain.setValueAtTime(.18,ce+be-4),Ye.gain.linearRampToValueAtTime(0,ce+be+1),Le.connect(Ye),Ye.connect(l),Le.start(ce),Le.stop(ce+be+1.2)}}function _t(ce){let Ee=it[Math.floor(Math.random()*it.length)],be=e.createOscillator(),Me=e.createOscillator(),F=e.createGain(),Le=e.createGain();be.type=Me.type="sine",be.frequency.value=ve(Ee),Me.frequency.value=ve(Ee)*2.01,Le.gain.value=.25,Me.connect(Le),Le.connect(F),F.gain.setValueAtTime(0,ce),F.gain.linearRampToValueAtTime(.05,ce+.02),F.gain.exponentialRampToValueAtTime(1e-4,ce+4),be.connect(F),F.connect(r),F.connect(t),be.start(ce),Me.start(ce),be.stop(ce+4.2),Me.stop(ce+4.2)}return{ac:e,muted:!1,tyres:p,engG:b,bump(ce){U(e.currentTime+.01,ce)},update(ce,Ee,be,Me={}){let F=e.currentTime;if((Me.bell||0)>.01)for(P<F&&(P=F+.02);P<F+.12;)I(P,Me.bell),P+=.41;let Le=Me.rain||0;x.g.gain.setTargetAtTime(Le*.05,F,.6),g.g.gain.setTargetAtTime(Le*.05,F,.6);let Ye=(Me.wetRoad||0)*Math.min(1,ce)**1.5,B=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(p.g.gain.setTargetAtTime(Ye*.045*B,F,.4),p.f.frequency.setTargetAtTime(900+1500*Math.min(ce,2),F,.4),Le>.05&&Me.roof)for(A<F&&(A=F+.02);A<F+.12;)D(A,Le),A+=.04+Math.random()*.12/Le;let T=Me.water||0,Z=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);R.g.gain.setTargetAtTime(T*.035*Z,F,.25),R.f.frequency.setTargetAtTime(600+400*Z,F,.25);let K=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),O=Me.rush||0;M.g.gain.setTargetAtTime(((Ee.mountain||0)+(Ee.snow||0)*.7)*.06*K+O*.055,F,.8),M.f.frequency.setTargetAtTime(260+420*K+O*500,F,.8);let xe=Me.train||0;if(m.g.gain.setTargetAtTime(xe*.16,F,.2),xe>.04)for(w<F&&(w=F+.02);w<F+.12;)U(w,xe),U(w+.15,xe*.8),w+=1.2;for(;ft<F+1;)st(ft),ft+=8;xt<F+.5&&(_t(xt),xt+=1.5+Math.random()*4.5);let we=Me.tunnel||0;{let W=Me.speed||0,Ae=Me.load||0,ie=850+2400*(1-Math.exp(-W/15))+Math.max(0,W-25)*60+Ae*1300,Pe=ie/40;_.frequency.setTargetAtTime(Pe,F,.25),y.frequency.setTargetAtTime(Pe*2,F,.25),v.frequency.setTargetAtTime(200+ie*.08+Ae*260,F,.3),b.gain.setTargetAtTime((.008+.01*Math.min(1,W/15)+.024*Ae)*(1-.6*(Me.rush||0))*(Me.roof===!1?.5:1)*(1+.7*we),F,.3)}h.g.gain.setTargetAtTime((.03+ce*.06)*(1+1.6*we),F,.35),h.f.frequency.setTargetAtTime((250+ce*500)*(1+.5*we),F,.35),E.g.gain.setTargetAtTime(we*.07,F,.4),a.gain.setTargetAtTime(.55+.6*we,F,.4);let te=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);c.g.gain.setTargetAtTime(Ee.coast*(.012+te*.05),F,.3),c.f.frequency.setTargetAtTime(400+te*900,F,.3);let se=1-Math.min(1,Le*1.4),he=1-be,Te=Me.dusk||0,pe=Ee.snow||0,de=1-pe,Ve={sparrow:be*se*.22*(.3+Ee.city*.5+Ee.sakura+Ee.country*.8+Ee.coast*.2+(Ee.mountain||0)*.5)*(1-pe*.8),uguisu:be*se*Ee.sakura*.06,crow:se*(Te*.14+be*(Ee.city+Ee.country+(Ee.mountain||0)*1.5+pe*2.5)*.012),gull:be*Ee.coast*se*.16,frog:he*(Ee.country*5+Ee.sakura*.6+Ee.coast*.3)*(1+Le*.6)*de,cricket:he*se*(1.6-Ee.city*1.1+(Ee.mountain||0)*.8)*de,bike:be*se*Ee.city*.014,bell:pe*.022+(Ee.mountain||0)*.006},Je={sparrow:G,uguisu:$,crow:oe,gull:re,frog:le,cricket:Se,bike:Y,bell:X};for(let W in Ve)F<ye[W]||(Ve[W]>1e-4&&Je[W](F+.05,.6+Math.random()*.4),ye[W]=F+Math.max(.12,Ce(Ve[W]||1e-6)));let Ke=.5+.5*Math.sin(F*7)*Math.sin(F*.4);d.g.gain.setTargetAtTime((Ee.country+Ee.sakura*.3)*be*.006*Ke*(1-(Ee.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Lp(i){let t=new kt(.075,.05),n=new sn({color:16777215,side:Mn}),s=new Xi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new me("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new me(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),f=new et,o=new yn,u=new Gn,h=new k(1,1,1),c=new k,d=90,m=new Float32Array(d*3),x=Array.from({length:d},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),g=new yt;g.setAttribute("position",new Bt(m,3));let p=new Lr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Yi,opacity:0}),v=new Fo(g,p);v.frustumCulled=!1;let b=(_,y,S,R,M)=>{let E=M?8+Math.random()*42:-4+Math.random()*50,C=(Math.random()-.5)*40;_.p.set(y.x+S.x*E+R.x*C,y.y-1+Math.random()*9,y.z+S.z*E+R.z*C)};return{group:[s,v],shift(_,y){for(let S of l)S.p.x-=_,S.p.z-=y;for(let S of x)S.p.x-=_,S.p.z-=y},update(_,y,S,R,M,E,C,A,D,P=0){let w=Math.floor(420*Math.min(1,E*1.1+P*.55)),I=!1;s.count=w;for(let N=0;N<w;N++){let V=l[N];c.subVectors(V.p,S);let z=c.x*R.x+c.z*R.z,H=c.x*M.x+c.z*M.z;if(V.p.x>1e8||z<-6||z>55||Math.abs(H)>24||V.p.y<C-.5){b(V,S,R,M,V.p.x<1e8);let G=Math.random()*(E+P)<P;(G!==V.leaf||G)&&(V.leaf=G,s.setColorAt(N,G?a[Math.floor(Math.random()*a.length)]:r),I=!0)}V.p.y-=V.v*_,V.p.x+=Math.sin(y*.7+V.ph)*.4*_+.25*_,V.p.z+=Math.cos(y*.5+V.ph)*.3*_,u.set(y*V.sp+V.ph,y*V.sp*.7,V.ph),o.setFromEuler(u),h.setScalar(V.leaf?1.9:1),f.compose(V.p,o,h),s.setMatrixAt(N,f)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=A*D;if(p.opacity=U,v.visible=U>.01,v.visible){for(let N=0;N<d;N++){let V=x[N];c.subVectors(V.p,S);let z=c.x*R.x+c.z*R.z,H=c.x*M.x+c.z*M.z;if(V.p.x>1e8||z<-4||z>60||Math.abs(H)>30){let G=2+Math.random()*55,$=(Math.random()-.5)*55;V.p.set(S.x+R.x*G+M.x*$,C+.3+Math.random()*2.2,S.z+R.z*G+M.z*$)}V.p.x+=Math.sin(y*.6+V.ph*3)*.3*_,V.p.y+=Math.sin(y*.9+V.ph)*.2*_,V.p.z+=Math.cos(y*.5+V.ph*2)*.3*_,m[N*3]=V.p.x,m[N*3+1]=V.p.y,m[N*3+2]=V.p.z}g.attributes.position.needsUpdate=!0}}}}var ut=new URLSearchParams(location.search),io=ut.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();io&&document.body.classList.add("embed");ut.has("shot")&&document.body.classList.add("shot");i0(ut.has("seed")?parseInt(ut.get("seed")):Math.random()*1e9|0);a0(ut.get("env")||"city");var Sn=i=>document.getElementById(i),so=i=>{let e=Sn("loading");e&&(e.textContent=i)};async function Cy(){await new Promise(ue=>setTimeout(ue,30));let i=Sn("c"),e=new Mc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ut.get("q")||(io||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?io?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=jt,e.toneMapping=Yo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=zs,e.debug.checkShaderErrors=ut.has("debug");let r=new Bs;r.fog=new Lo(13032946,.0019,700);let a=new Tn(52,innerWidth/innerHeight,.5,7e3),l=new Ur(16777215,3);l.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(f,f),Lh(ut.has("pcf")?parseInt(ut.get("pcf")):1);let o=62,u=l.shadow.camera,h=new et,c=new et;Object.assign(u,{left:-o,right:o,top:o,bottom:-o,near:1,far:420});let d=new k(0,1,0),m=new k,x=new k,g=new k,p=new k(0,1,0),v=new k(0,150,60),b=new k,_=new k,y=null,S=0,R=0,M=0;l.shadow.updateMatrices=function(){u.position.copy(v),u.lookAt(b),u.updateMatrixWorld(),u.updateProjectionMatrix(),c.multiplyMatrices(u.matrixWorldInverse,h).multiply(u.matrixWorld),u.projectionMatrix.multiply(c),u.projectionMatrixInverse.copy(u.projectionMatrix).invert(),this._updateMatrix(u,this.matrix,this._frustum)};let E=!0;l.shadow.bias=-4e-4;let C=()=>{l.shadow.normalBias=ut.has("nb")?parseFloat(ut.get("nb")):1.5*2*o/l.shadow.mapSize.x};C();{let[ue,Fe]=(ut.get("graze")||"0,0.12").split(",").map(Number);g0(ue,Fe)}r.add(l,l.target);let A=new Ur(16777215,0);A.castShadow=n!=="low"&&!ut.has("nocarsh");{let ue=ut.has("carsm")?parseInt(ut.get("carsm")):n==="high"?512:384;A.shadow.mapSize.set(ue,ue)}if(Object.assign(A.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),A.shadow.bias=-2e-4,A.shadow.normalBias=.025,r.add(A,A.target),A.castShadow){let ue=l.shadow.getFrustum(),Fe=A.shadow.getFrustum();for(let He of[dt,Uo]){let Ct=He.prototype.intersectsFrustum;He.prototype.intersectsFrustum=function(Mt){return Mt===Fe?this.userData.car===!0:(Mt!==ue||this.userData.car!==!0)&&Ct.call(this,Mt)}}}let D=new Go(10799359,13154464,1.6);r.add(D),so("painting the town\u2026"),await new Promise(ue=>setTimeout(ue,10));let P=P0();N0(P);let w=I0(e);H0(w.cells),ze.uTuftV.value.set(w.tuftV[0],w.tuftV[1]);let I=b0(P.textures(e),w.tex),U=x0();U.update(e,0,0,0,0),so("painting the clouds\u2026"),await new Promise(ue=>setTimeout(ue,10)),V0(ut.has("leafd")?parseFloat(ut.get("leafd")):n==="high"?.72:.62),q0();let N=new Rc,V=Ep(),z=wp(),H=new kc(r,N,I,V,z),G=pp();r.add(G);let $=gp(mp(e));r.add($.group);let oe=vp();r.add(oe.group);let re=Tp();r.add(re.mesh);let le=Rp();le.group.rotation.order="YXZ",r.add(le.group),le.group.traverse(ue=>{ue.userData.car=!0});let Se=Lp(I.glowTex);Se.group.forEach(ue=>r.add(ue));let X=ut.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Y=Pp(e,r,a,{msaa:X==="msaa"?n==="high"?4:2:0,fxaa:X==="fxaa"});ze.uReflTex.value=Y.refl.rt.texture;let ye=new k,Ce=new k,ve=ut.get("refl")||"auto",Ge=ut.has("backlit")?parseFloat(ut.get("backlit")):1,it=ut.has("lightson")?parseFloat(ut.get("lightson")):-1,nt=new k,ft=ut.has("haze")?parseFloat(ut.get("haze")):1,xt=T0();r.add(xt.group);let st=E0();r.add(st.group);let _t=xp(ut),ce=yp(),Ee=_p();r.add(ce.mesh,Ee.mesh);let be=Mp();r.add(be.mesh);let Me=bp();r.add(Me.mesh);let F=new me,Le=new me,Ye=new St,B=Sp();r.add(B.mesh);let T=_t.W.rain,Z=.4,K=5.5,O={s:Math.max(100,parseFloat(ut.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ht(parseFloat(ut.get("t"))||.4,0,.999),todPaused:ut.has("freeze"),dist:0,spray:ut.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ut.get("cam")]??(io?4:0)},xe=!1;so("building the road\u2026"),await new Promise(ue=>setTimeout(ue,10));let we=io?620:H.ahead;H.ahead=260;let te=ut.has("detail")?parseFloat(ut.get("detail")):380,se=ut.has("farleaf")?parseFloat(ut.get("farleaf")):540;for(;H.update(O.s,1e9););H.flush(),H.ahead=we;{so("preparing the light\u2026"),await new Promise(Mt=>setTimeout(Mt,10));let ue=new Kt,Fe=new yt;Fe.setAttribute("position",new je([0,0,0,.01,0,0,0,.01,0],3)),Fe.setAttribute("normal",new je([0,1,0,0,1,0,0,1,0],3)),Fe.setAttribute("uv",new je([0,0,1,0,0,1],2)),Fe.setAttribute("color",new je([1,1,1,1,1,1,1,1,1],3));let He=[I.color,I.atlas,I.foliage,I.leaf,I.lamp,I.sig,I.sodium,I.decal,I.pool,V,z];for(let Mt=0;Mt<Fi.length;Mt++)He.push(ua([Fi[Mt]])),He.push(ua([Fi[Mt],Fi[(Mt+1)%Fi.length]]));for(let Mt of He){let Nt=new dt(Fe,Mt);Nt.castShadow=Nt.receiveShadow=!0,Nt.frustumCulled=!1,ue.add(Nt)}ue.position.set(0,0,0),r.add(ue),l.target.position.set(0,0,0),l.position.set(0,150,60);let Ct=[ce.mesh,Ee.mesh,be.mesh,Me.mesh,st.group,xt.group,re.mesh].filter(Mt=>!Mt.visible);for(let Mt of Ct)Mt.visible=!0;e.setRenderTarget(Y.composer.readBuffer),e.compile(r,a),e.render(r,a),e.setRenderTarget(null);for(let Mt of Ct)Mt.visible=!1;r.remove(ue),Fe.dispose(),Y.bloom.enabled=Y.refl.enabled=!0,Y.composer.render(0),Y.bloom.enabled=Y.refl.enabled=!1}let he={k:Math.ceil((O.s-Ys)/qs),phase:"idle",raise:1,decided:!1,t2:0},Te={},pe={},de={},Ve=new k,Je=new k,Ke=new k,W=!1,Ae=new k,ie=new k,Pe=Sn("spd"),Be=Sn("dist"),ge=Sn("clock"),Ze=Sn("zone"),Xe=Sn("start"),Dt=Sn("hint"),rt=null,kn=null,$n=0,_a=0;function qc(ue){!xe||ue===kn||(kn=ue,Ze.querySelector(".jp").textContent=oa[ue].jp,Ze.querySelector(".en").textContent=oa[ue].en,Ze.classList.add("on"),clearTimeout($n),$n=setTimeout(()=>Ze.classList.remove("on"),5200))}function nr(){if(!xe){if(xe=!0,document.body.classList.remove("pre"),!ut.has("auto"))try{rt=Ip(),rt&&rt.ac.resume()}catch{rt=null}Xe.style.opacity=0,setTimeout(()=>Xe.remove(),1500),io||(Dt.style.opacity=.75,setTimeout(()=>Dt.style.opacity=0,9e3))}}let mn={};addEventListener("keydown",ue=>{mn[ue.key]=!0,(ue.key==="m"||ue.key==="M")&&oo(),(ue.key==="t"||ue.key==="T")&&Ai(),(ue.key==="c"||ue.key==="C")&&lo(),(ue.key==="r"||ue.key==="R")&&uo(),!xe&&(ue.key===" "||ue.key==="Enter")&&nr()}),addEventListener("keyup",ue=>{mn[ue.key]=!1});let nn=null;i.addEventListener("pointerdown",ue=>{nn={id:ue.pointerId,x:ue.clientX,y:ue.clientY,sy:ue.clientY,sc:O.mult}});let ro=ue=>Ht(ue.sc*Math.exp(-((ue.y-ue.sy)/innerHeight)*3.4),Z,K);addEventListener("pointermove",ue=>{nn&&ue.pointerId===nn.id&&(nn.x=ue.clientX,nn.y=ue.clientY,O.mult=ro(nn))}),addEventListener("pointerup",()=>{nn=null}),addEventListener("pointercancel",()=>{nn=null}),i.addEventListener("touchstart",ue=>{let Fe=ue.changedTouches[0];nn={id:"touch",x:Fe.clientX,y:Fe.clientY,sy:Fe.clientY,sc:O.mult},ue.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ue=>{if(!nn)return;let Fe=ue.changedTouches[0];nn.x=Fe.clientX,nn.y=Fe.clientY,O.mult=ro(nn),ue.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{nn=null}),i.addEventListener("touchcancel",()=>{nn=null});function oo(){rt&&(rt.toggle(),Sn("snd").style.opacity=rt.muted?.4:1)}function Ai(){O.todPaused=!O.todPaused,Sn("tim").style.opacity=O.todPaused?.4:1}let ws=[0,1,2,4],ao={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function lo(){O.cam=ws[(ws.indexOf(O.cam)+1)%ws.length],Sn("cam").textContent=ao[O.cam]||"\u25D0",O.cam===4&&is()}let As=["chase","side","road","crane","eye","side","road"],Vt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function is(){let ue;do ue=As[Math.floor(Math.random()*As.length)];while(ue===Vt.last);{let Fe=ui(O.s+60);Fe&&Math.abs(O.s+60-Fe.s)<en+120&&(ue=Math.random()<.6?"chase":"eye")}if(Object.assign(Vt,{type:ue,last:ue,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ue==="road"){let Fe=O.s+40+Math.random()*18,He=Rn(Fe,"rw"),Ct=Math.random()<.6?-1:1,Mt=Ct*(He+(Ct<0?.9:1.3)),Nt=N.at(Fe,{}),wt=Nt.y+Zr(Fe,Mt,Nt.y,He);Vt.anchor={x:Nt.x+Nt.rx*Mt,y:Math.max(wt,Nt.y)+1.05,z:Nt.z+Nt.rz*Mt,s:Fe}}W=!1}let co={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function uo(){Sn("wx").textContent=co[_t.cycle()]}Sn("wx").textContent=co[_t.W.mode],Sn("cam").textContent=ao[O.cam]||"\u25D0",O.cam===4&&is(),Sn("wx").onclick=ue=>{ue.stopPropagation(),uo()},Sn("snd").onclick=ue=>{ue.stopPropagation(),oo()},Sn("tim").onclick=ue=>{ue.stopPropagation(),Ai()},Sn("cam").onclick=ue=>{ue.stopPropagation(),lo()};let ya=0,Yc=ue=>{let Fe=performance.now();Fe-ya<120||(ya=Fe,ue.cancelable&&ue.type!=="click"&&ue.preventDefault(),nr())};for(let ue of["touchstart","pointerdown","mousedown","click"])Xe.addEventListener(ue,Yc,{passive:!1});let Zc=()=>{rt&&rt.ac.state!=="running"&&rt.ac.resume()};for(let ue of["touchend","click","keydown"])addEventListener(ue,Zc,{passive:!0});document.addEventListener("visibilitychange",()=>{rt&&(document.hidden?rt.ac.suspend():rt.ac.resume())});let Rs=!1,ho="",L=52,q=0;function Q(){let ue=innerWidth,Fe=innerHeight,He=ue/Fe,Ct=ue+"x"+Fe+"@"+s;Ct!==ho&&(ho=Ct,e.setPixelRatio(s),e.setSize(ue,Fe,!1),Y.composer.setPixelRatio(s),Y.composer.setSize(ue,Fe),a.aspect=He,L=He>=1?52:Ht(2*Math.atan(Math.tan(34*Math.PI/180)/He)*180/Math.PI,52,80),a.fov=L+q,a.updateProjectionMatrix(),Y.grade.uniforms.uAspect.value=He,Y.grade.uniforms.uTexel.value.set(1/Y.composer.readBuffer.width,1/Y.composer.readBuffer.height),ze.uReflRes.value.set(Y.composer.readBuffer.width,Y.composer.readBuffer.height))}addEventListener("resize",()=>{Rs=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Rs=!0}),Q();let J=0;function j(ue=!0){if(s>1.05)s=Math.max(1,s-.25),Rs=!0;else if(E)E=!1,Y.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),C(),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(H.ahead>430)H.ahead=430;else return;if(J++,ue)try{localStorage.setItem("icd-q",String(J))}catch{}}try{let ue=parseInt(localStorage.getItem("icd-q")||"0");if(!ut.has("q"))for(let Fe=0;Fe<Math.min(ue,6);Fe++)j(!1);J=Math.max(J,ue||0)}catch{}let Ne=performance.now(),Ie=0,De=0,ke=0,We=()=>1-ae.night,pt=0,$e=0,_e=ut.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;_e&&(_e.gl=e.getContext(),_e.tq=_e.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let mt={p:-1,a:new k,b:new k,next:5},Qe={lat:0,lon:0,road:0,jolt:0,kick:0,u:O.u,vu:0,v:0,s:O.s,yaw:0,brake:0,rk:NaN,rb:null},Ft=[-2.5335,-1.4665,1.4665,2.5335],Pt=[1.12,-1.12],gn=[-24.5,24.5];function Oe(ue){requestAnimationFrame(Oe);let Fe=performance.now();Rs&&(Rs=!1,Q());let He=Math.min(.05,Math.max(0,(ue-Ne)/1e3));Ne=ue,Ie+=He,O.steer=0,(mn.ArrowLeft||mn.a||mn.A)&&(O.steer=-1),(mn.ArrowRight||mn.d||mn.D)&&(O.steer=1),(mn.ArrowUp||mn.w||mn.W)&&(O.mult=Ht(O.mult*Math.exp(He*.9),Z,K)),(mn.ArrowDown||mn.s||mn.S)&&(O.mult=Ht(O.mult*Math.exp(-He*.9),Z,K)),nn&&Math.abs(nn.y-nn.sy)<30&&(O.steer=nn.x<innerWidth/2?-1:1),O.steer&&(O.lastInput=ue,O.uHome=O.u);let Ct=Xr(he.k);O.s-Ct>24&&(he.k++,Ct=Xr(he.k),Object.assign(he,{phase:"idle",raise:1,decided:!1}));let Mt=aa(Ct),Nt=Ct-O.s;Mt&&!he.decided&&Nt<150&&(he.decided=!0,Nt>75&&xe&&O.speed*O.speed/2.5<Nt-14&&(ut.has("xing")||ti(he.k,99)<.8)&&(he.phase="warn",st.start(Ct,ti(he.k,7)<.5?1:-1,16))),he.phase==="warn"?(he.raise=Math.max(0,he.raise-He/6),st.st.cleared&&(he.phase="clear",he.t2=0)):he.phase==="clear"?(he.raise=Math.max(0,he.raise-He/6),(he.t2+=He)>2.2&&(he.phase="raise")):he.phase==="raise"&&(he.raise=Math.min(1,he.raise+He/5),he.raise>=1&&(he.phase="idle"));let wt=he.phase==="warn"||he.phase==="clear"||he.phase==="raise"&&he.raise<.25,Gt=Rn(O.s,"speed")*O.mult*(xe?1:.55);if(he.phase!=="idle"&&he.raise<.8&&Nt>0){let Re=Nt-11.2,tt=Re>0?Math.sqrt(2*1.25*Re):0;Gt=Math.min(Gt,tt),O.speed=Math.min(O.speed,tt)}ut.has("park")&&(Gt=0,O.speed=0),O.speed+=(Gt-O.speed)*Math.min(1,He*.5),O.s+=O.speed*He,O.dist+=O.speed*He;let Jn=Rn(O.s,"rw");O.steer?O.u=Ht(O.u+O.steer*He*2.4,-Jn+.85,Jn-.85):ue-O.lastInput>3e3&&(O.u+=(Ht(O.uHome,-Jn+.85,Jn-.85)+Math.sin(Ie/11)*.1-O.u)*Math.min(1,He*.9)),!O.todPaused&&xe&&(O.tod=(O.tod+He/480*(ae.night>.5?1.7:1))%1),hp(O.tod),_t.update(He);let gt=_t.W.ov,vn=_t.W.rain;dp(gt,vn),T=Ht(T+(vn>.25?He/18:-He/120),0,1);let Oi=performance.now();H.update(O.s,xe?3.5:14);let fo=performance.now();if(N.at(O.s,Te),Math.abs(Te.x-H.origin.x)>900||Math.abs(Te.z-H.origin.z)>900){let Re=Math.round(Te.x)-H.origin.x,tt=Math.round(Te.z)-H.origin.z;H.setOrigin(Math.round(Te.x),Math.round(Te.z)),Ve.x-=Re,Ve.z-=tt,Je.x-=Re,Je.z-=tt,Se.shift&&Se.shift(Re,tt),B.shift(Re,tt),be.shift(Re,tt)}let di=H.origin.x,pi=H.origin.z,Dp=(N.at(O.s+1.5,de).y-N.at(O.s-1.5,pe).y)/3,Np=(de.h-pe.h)/3;if(le.group.position.set(Te.x+Te.rx*O.u-di,Te.y+.01,Te.z+Te.rz*O.u-pi),He>0){let Re=Qe.vu+((O.u-Qe.u)/He-Qe.vu)*Math.min(1,He*6),tt=(Re-Qe.vu)/He;Qe.u=O.u,Qe.vu=Re,Qe.lat=tt-O.speed*O.speed*Np,Qe.lon+=((O.speed-Qe.v)/He-Qe.lon)*Math.min(1,He*8),Qe.v=O.speed;let ot=he.phase!=="idle"&&Nt>0&&Nt<20&&O.speed<.5;if(Qe.brake=Qe.lon<-.6||ot?1:Qe.lon>-.3?0:Qe.brake,Qe.yaw=-Ht(Math.atan(Re/Math.max(O.speed,6))*.8,-.1,.1),Qe.road=.004*Math.sin(O.s*.48)+.003*Math.sin(O.s*.86+1.3),Qe.jolt=Qe.kick=0,Mt)for(let At=0;At<4;At++)for(let Xt=0;Xt<2;Xt++){let qt=Ct+Ft[At]-Pt[Xt];if(Qe.s<qt&&O.s>=qt){let Yt=.05+Math.min(O.speed,25)*.004;Qe.jolt+=Yt,Qe.kick+=Xt?Yt*.9:-Yt*.9,rt&&rt.bump(.25+Math.min(O.speed,25)/50)}}{let At=Math.round((O.s-Yr)/Zs);At!==Qe.rk&&(Qe.rk=At,Qe.rb=Bi(O.s));let Xt=Qe.rb;if(Xt)for(let qt=0;qt<2;qt++)for(let Yt=0;Yt<2;Yt++){let Hn=Xt.s+gn[qt]-Pt[Yt];if(Qe.s<Hn&&O.s>=Hn){let xn=.035+Math.min(O.speed,25)*.003;Qe.jolt+=xn,Qe.kick+=Yt?xn*.9:-xn*.9,rt&&rt.bump(.2+Math.min(O.speed,25)/60)}}}Qe.s=O.s}le.group.rotation.set(-Math.atan(Dp),Te.h+Qe.yaw,0);let Cs=ui(O.s);Cs&&Math.abs(O.s-Cs.s)<700?(N.at(Cs.s-tn,de),ze.uTunA.value.set(de.x-di,de.y,de.z-pi),N.at(Cs.s+tn,de),ze.uTunB.value.set(de.x-di,de.y,de.z-pi),ze.uTunR.value=Rn(Cs.s,"rw")+1.7):(ze.uTunA.value.set(0,-1e4,0),ze.uTunB.value.set(0,-1e4,0));let $c=Cs&&Math.abs(O.s+1-Cs.s)<tn-1.5?1:0;$e+=($c-$e)*Math.min(1,He*($c?1.6:.7)),ze.uCarPos.value.set(le.group.position.x+Te.fx*1.7,le.group.position.y+.8,le.group.position.z+Te.fz*1.7),ze.uCarFwd.value.set(Te.fx,-.05,Te.fz).normalize(),ze.uHead.value=$c,le.update(He,O.speed,Math.max(ae.night,$e),vn,Qe),xt.update(Mt&&Nt>-24&&Nt<700?Dc(N,Ct):null,H.origin,he.raise,wt,Ie),st.update(He,N,H.origin,Rt(.15,.8,ae.night),Rn(Ct,"rw")+3.2);let of=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ut.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],Ps=new k,po=6,af=O.cam===2;if(O.cam===4){Vt.t+=He;{let ot=ui(O.s+30);ot&&Math.abs(O.s+30-ot.s)<en+70&&Vt.type!=="chase"&&Vt.type!=="eye"&&(Vt.type="chase",Vt.t=0,Vt.dur=20,W=!1)}(Vt.t>Vt.dur+(Vt.type==="road"?8:0)||Vt.type==="road"&&Vt.anchor&&O.s>Vt.anchor.s+24)&&is();let Re=le.group.position,tt=Vt.type;if(tt==="chase"||tt==="eye"){let ot=of[tt==="eye"?2:0];af=tt==="eye",N.at(O.s-ot.back,pe),N.at(O.s+ot.ahead,de),Ke.set(pe.x+pe.rx*O.u*ot.cu-di,pe.y+ot.up,pe.z+pe.rz*O.u*ot.cu-pi),Ps.set(de.x+de.rx*O.u*ot.lu-di,de.y+ot.lookY,de.z+de.rz*O.u*ot.lu-pi)}else if(tt==="side"){N.at(O.s+1.5,pe);let ot=Ut(O.s),At=ot.city+ot.sakura>.5,Xt=Rn(O.s,"rw"),qt=Vt.sideSign>0?Xt+(At?1.45:3.4):-(Xt+1.5),Yt=pe.y+Zr(O.s+1.5,qt,pe.y,Xt);Ke.set(pe.x+pe.rx*qt-di,Math.max(Yt+1.55,pe.y+1.25),pe.z+pe.rz*qt-pi),Ps.set(Re.x+Te.fx*2.5,Re.y+.9,Re.z+Te.fz*2.5),po=4}else if(tt==="road"&&Vt.anchor)Ke.set(Vt.anchor.x-di,Vt.anchor.y,Vt.anchor.z-pi),Ps.set(Re.x,Re.y+.85,Re.z),po=30;else{N.at(O.s-20,pe),N.at(O.s+34,de);let ot=14+Math.min(Vt.t,20)*.35;Ke.set(pe.x+pe.rx*O.u*.4-di,pe.y+ot,pe.z+pe.rz*O.u*.4-pi),Ps.set(de.x-di,de.y+1,de.z-pi),po=3}}else{let Re=of[O.cam];N.at(O.s-Re.back,pe),N.at(O.s+Re.ahead,de);let tt=O.u*Re.cu,ot=tt+(Re.side||0);Ke.set(pe.x+pe.rx*ot-di,pe.y+Re.up,pe.z+pe.rz*ot-pi),Ps.set(de.x+de.rx*O.u*Re.lu-di,de.y+Re.lookY,de.z+de.rz*O.u*Re.lu-pi)}le.group.visible=!af,O.cam===3?a.up.set(Te.fx,0,Te.fz):a.up.set(0,1,0),W||(Ve.copy(Ke),Je.copy(Ps),W=!0);let lf=1+Math.max(0,O.speed-12)/12;Ve.lerp(Ke,1-Math.exp(-He*po*lf)),Je.lerp(Ps,1-Math.exp(-He*Math.min(po,8)*lf));{let Re=O.cam===3?0:Math.min(Ht((O.speed-16)*.22,0,11),Math.max(0,84-L));q+=(Re-q)*Math.min(1,He*1.5),Math.abs(a.fov-(L+q))>.02&&(a.fov=L+q,a.updateProjectionMatrix())}a.position.copy(Ve),a.lookAt(Je),ut.has("yaw")&&a.rotateY(parseFloat(ut.get("yaw"))*Math.PI/180),ut.has("pitch")&&a.rotateX(parseFloat(ut.get("pitch"))*Math.PI/180),Ae.set(Te.fx,0,Te.fz),ie.set(Te.rx,0,Te.rz);let Jt=Ut(O.s);l.color.copy(ae.sunCol),l.intensity=ae.sunI;{let Re=ae.lightDir;if(d.angleTo(Re)>.1){let xn=0;if(xe&&!O.todPaused)for(let Un=1;Un<=60&&!(Qh(O.tod+Un*.001,_).angleTo(Re)>.09);Un++)xn=Un;Qh(O.tod+xn*.001,d),S=R=0}m.crossVectors(p,d).normalize(),x.crossVectors(d,m),g.set(le.group.position.x+Te.fx*26,le.group.position.y,le.group.position.z+Te.fz*26),l.target.position.copy(g),l.position.copy(g).addScaledVector(Re,200);let tt=2*o/l.shadow.mapSize.x,ot=d.x/d.y-Re.x/Re.y,At=d.z/d.y-Re.z/Re.y;tt!==M&&(M=tt,S=R=0);{let xn=Math.round(le.group.position.y);if(y===null)y=xn;else if(Math.abs(le.group.position.y-y)>3){let Un=xn-y;S-=Un*(ot*m.x+At*m.z),R-=Un*(ot*x.x+At*x.z),y=xn}}let Xt=H.origin.x,qt=H.origin.z,Yt=g.dot(m)+Xt*m.x+qt*m.z-S,Hn=g.dot(x)+Xt*x.x+qt*x.z-R;g.addScaledVector(m,Math.round(Yt/tt)*tt-Yt).addScaledVector(x,Math.round(Hn/tt)*tt-Hn),b.copy(g),v.copy(g).addScaledVector(d,200),h.set(1,ot,0,-y*ot,0,1,0,0,0,At,1,-y*At,0,0,0,1)}A.target.position.set(le.group.position.x,le.group.position.y+.9,le.group.position.z),A.position.copy(A.target.position).addScaledVector(ae.lightDir,12),D.color.copy(ae.hemiSky),D.groundColor.copy(ae.hemiGround),D.intensity=ae.hemiI;{let Re=(1-ae.night)*(1-gt);if(Re>.001){a.getWorldDirection(nt);let tt=nt.x,ot=nt.z,At=Math.hypot(tt,ot)||1,Xt=ae.sunDir,qt=0;for(let Hn=-2;Hn<=2;Hn++){let xn=Hn*.3,Un=Math.cos(xn),Is=Math.sin(xn),rr=(tt*Un-ot*Is)/At,or=(tt*Is+ot*Un)/At,mo=Math.max(0,rr*Xt.x+or*Xt.z),ar=mo*mo;qt+=ar*ar*ar}let Yt=qt/5*(.1+.35*ae.warm)*1.4*Re*ft;ae.fog.r+=ae.sunCol.r*Yt,ae.fog.g+=ae.sunCol.g*Yt,ae.fog.b+=ae.sunCol.b*Yt}}r.fog.color.copy(ae.fog);let cf=(Jt.city*.0022+Jt.sakura*.0019+Jt.coast*.0011+Jt.country*.0014+Jt.mountain*.0017+Jt.snow*.0021)*(1+ae.night*.25);r.fog.near=cf*(1+.55*gt+.45*vn),r.fog.far=H.ahead*.92,ze.uSkyHor.value.copy(ae.horizon),ze.uSkyZen.value.copy(ae.zenith),ze.uTime.value=Ie,ze.uWet.value=T*(1-Jt.snow);{let Re=ze.uWet.value>.04&&n!=="low"&&$e<.5&&ve!=="0";if(Y.refl.enabled=Re&&ve!=="taps",ze.uReflOn.value=Re&&ve!=="copy"?1:0,Re){a.getWorldDirection(Ce),Ce.y=0,Ce.normalize(),ye.copy(a.position).addScaledVector(Ce,1e4).project(a),ze.uHorizon.value=ye.y*.5+.5;let tt=Math.max(.5,a.position.y-le.group.position.y);ze.uReflK.value=Ht(1-2*tt/(5+tt),.05,1)}}ze.uOrigin.value.set(H.origin.x,H.origin.z),ze.uWind.value=1+.8*vn,ze.uCloudSh.value=(1-gt)*Rt(.04,.3,ae.sunEl)*(1-ae.night),ze.uCloudSh.value>.001&&U.update(e,a.position.x,a.position.z,H.origin.x,H.origin.z);let si=G.material.uniforms;if(si.uNight.value=ae.night,si.uWarm.value=ae.warm,si.uTime.value=Ie,si.uCirrusCol.value.copy(ae.cLit).lerp(ae.horizon,.25),si.uCirrus.value=.6*(1-gt)*(1-.65*Rt(.4,.9,ae.night)),si.uOvercast.value=gt,si.uMilky.value=Rt(.55,.95,ae.night)*(1-gt),ae.night>.65&&gt<.3&&mt.p<0&&(mt.next-=He)<0){let Re=Math.atan2(Te.fx,Te.fz)+(Math.random()-.5)*1.5,tt=.45+Math.random()*.6,ot=.22+Math.random()*.2,At=(Math.random()-.5)*.6,Xt=(qt,Yt)=>new k(Math.cos(qt)*Math.sin(Yt),Math.sin(qt),Math.cos(qt)*Math.cos(Yt));mt.a.copy(Xt(tt,Re)),mt.b.copy(Xt(tt-ot,Re+At)),mt.p=0,mt.next=ut.has("meteors")?1:6+Math.random()*20}mt.p>=0&&(mt.p+=He/.85,mt.p>1.3&&(mt.p=-1)),si.uMetP.value=mt.p,si.uMetA.value.copy(mt.a),si.uMetB.value.copy(mt.b),si.uDeckLit.value.copy(ae.horizon).lerp(ae.cLit,.35),si.uDeckDark.value.copy(ae.zenith).lerp(ae.horizon,.25).multiplyScalar(.82),G.position.copy(a.position),$.update(a.position,He),oe.update(a.position,Math.max(Jt.snow,Ut(O.s+600).snow*.7));let Ma=0;for(let Re of[-150,0,250,500,800])Ma=Math.max(Ma,Ut(O.s+Re).coast);re.mesh.visible=Ma>.001,re.update(a.position,Ie,cf*.8,Rt(0,.35,Ma)),z.uniforms.uTime.value=Ie,z.uniforms.uFogD.value=r.fog.near,z.uniforms.uNight.value=ae.night,z.uniforms.uSpecK.value=1-ae.overcast*.85,ze.uSunDir.value.copy(ae.lightDir),ze.uSunCol.value.copy(ae.sunCol),V.uniforms.uTime.value=Ie,V.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*We());let ri=Rt(.15,.8,ae.night);I.atlas.emissiveIntensity=.1+ri*1.05,ze.uBacklit.value=Ge*1.6*(1-gt)*(1-ae.night)*Rt(0,.08,ae.sunEl)*(1-Rt(.25,.55,ae.sunEl))*(1-$e),ze.uLightsOn.value=it>=0?it:Math.max(Rt(.02,.75,ae.night),.3*gt),I.lamp.color.setRGB(.85,.85,.8).lerp(new me(3.6,2.8,1.8),ri),I.pool.opacity=ri*.42*(1+.8*T);{let Re=le.group.position,tt=le.lamps,ot=Math.max(ri,$e),At=0,Xt=0,qt=0,Yt=-1e3,Hn=0,xn=0,Un=-1e3,Is=0,rr=900,or=900;if(ot>.01){let ff=Math.floor(O.s/$t);for(let Jc=ff-1;Jc<=ff+1;Jc++){let Sa=H.chunks.get(Jc);if(!Sa||!Sa.lamps)continue;let go=Sa.lamps,df=Sa.group.position;for(let lr=0;lr<go.length;lr+=4){let Kc=go[lr]+df.x,jc=go[lr+1],Qc=go[lr+2]+df.z,eu=(Kc-Re.x)**2+(jc-Re.y)**2+(Qc-Re.z)**2,Ta=go[lr+3]/(1+.045*eu);Ta>At?(Xt=At,or=rr,xn=qt,Un=Yt,Is=Hn,At=Ta,rr=eu,qt=Kc,Yt=jc,Hn=Qc):Ta>Xt&&(Xt=Ta,or=eu,xn=Kc,Un=jc,Is=Qc)}}a.updateMatrixWorld()}let mo=ot*At*(1+.045*rr)*(1-Rt(18,30,Math.sqrt(rr))),ar=ot*Xt*(1+.045*or)*(1-Rt(18,30,Math.sqrt(or)));tt[0].set(qt,Yt,Hn,1).applyMatrix4(a.matrixWorldInverse).w=mo,tt[1].set(xn,Un,Is,1).applyMatrix4(a.matrixWorldInverse).w=ar,le.lampCol.setRGB(1,.8-.32*$e,.52-.38*$e),hi.uLampW.value[0].set(qt,Yt,Hn,mo),hi.uLampW.value[1].set(xn,Un,Is,ar),hi.uLampCol.value.copy(le.lampCol),le.head.getWorldPosition(hi.uHeadPos.value),le.head.target.getWorldPosition(nt),hi.uHeadDir.value.copy(nt).sub(hi.uHeadPos.value).normalize(),hi.uHeadI.value=le.head.intensity/60}I.pool.visible=I.pool.opacity>.003,H.lod(O.s,te,ri>.15,se),ze.uNight.value=ri,Y.bloom.strength=Lt(.32,.55,ri),Y.bloom.threshold=Lt(1.35,.95,ri),Y.bloom.radius=Lt(.55,.35,ri);{let Re=Math.max(ri,$e,Rt(.25,.6,ae.warm)*(1-gt));Y.bloom.enabled=E&&Re>.02,Y.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=Lt(1,1.15,ri)*(1+.35*$e),Ke.copy(a.position).addScaledVector(ae.sunDir,1e3).project(a);let ir=Y.grade.uniforms,Up=Ke.z<1?1:0,Fp=Math.max(Math.abs(Ke.x),Math.abs(Ke.y));ir.uSun.value.set(Ke.x*.5+.5,Ke.y*.5+.5),ir.uSunVis.value=Up*(1-Rt(1,1.9,Fp))*Rt(-.02,.15,ae.sunEl)*(1-ae.night)*(1-gt)*(1-$e),ir.uSat.value=1.1-.12*gt,ir.uDay.value=We(),ir.uWarm.value=ae.warm,ir.uTime.value=Ie,ce.update(a.position,Ie,vn*(1-$e)*(1-Jt.snow),We());{let Re=ui(O.s+190),tt=(Jt.city+Jt.country+Jt.coast)*(1-gt)*(1-T)*Rt(.6,.9,ae.sunEl)*(O.mirage??1)*(Re&&Math.abs(O.s+190-Re.s)<330?0:1);Me.update(N,O.s,H.origin.x,H.origin.z,Rn(O.s+150,"rw"),tt,Ie,ae.horizon)}{let Re=Ht(Jt.snow+Jt.mountain*.6*Math.max(ae.night,1-Rt(.27,.36,O.tod)),0,1)*(1-$e);F.copy(ae.fog).multiplyScalar(.92),Le.copy(ae.sunCol).multiplyScalar(Math.min(1,ae.sunI/3)*(1-gt)*.6);let tt=Math.cos(le.group.rotation.y),ot=Math.sin(le.group.rotation.y),At=le.group.position;Ye.set(At.x-1.75*ot,At.y+.95,At.z-1.75*tt,Math.max(ae.night,$e)*(.5+1.2*Qe.brake)),be.update(He,le.group,O.speed,ze.uWet.value*(1-$e),Jt.snow*(1-$e),Re,F,Le,Ye,a.position,O.spray)}Ee.update(a.position,Ie,Jt.snow*(.3+.7*gt)*(1-$e),We()),B.setFog(r.fog.near),B.update(He,Ie,a.position,Ae,ie,Jt,We(),vn,le.group.position);let Bp=performance.now();Se.update(He,Ie,a.position,Ae,ie,Jt.sakura*(1-$e),Te.y,ri,(Jt.country+Jt.sakura*.4)*(1-vn)*(1-$e),Jt.mountain*(1-$e));let Op=performance.now();if(rt){N.at(Ct,de);let Re=Math.hypot(de.x-H.origin.x-a.position.x,de.z-H.origin.z-a.position.z),tt=st.st.active?st.group.position.distanceTo(a.position):1e9,ot=O.speed/15;rt.update(ot<1.5?ot:1.5+(ot-1.5)*.4,Jt,We(),{rush:Ht((O.speed-25)/40,0,1),bell:wt?Math.pow(Ht(1-Re/260,0,1),1.5):0,train:Math.pow(Ht(1-tt/230,0,1),2),rain:vn*(1-$e)*(1-Jt.snow),wetRoad:ze.uWet.value*(1-$e),speed:O.speed,load:Ht(Qe.lon/3,0,1),roof:O.cam!==2,tunnel:$e,water:(()=>{let At=Bi(O.s);return Math.max(At?1-Rt(12,150,Math.abs(O.s-At.s)):0,Jt.mountain*.45)})(),dusk:ae.warm*(O.tod>.5?1:.3)})}qc(Qt(O.s+40)),_e&&(e.info.autoReset=!1,e.info.reset());let ba=null;_e&&_e.tq&&(ba=_e.gl.createQuery(),_e.gl.beginQuery(_e.tq.TIME_ELAPSED_EXT,ba));let uf=performance.now();Y.composer.render(He);let hf=performance.now();if(ba){let Re=_e.gl;for(Re.endQuery(_e.tq.TIME_ELAPSED_EXT),_e.pend.push(ba);_e.pend.length&&Re.getQueryParameter(_e.pend[0],Re.QUERY_RESULT_AVAILABLE);){let tt=_e.pend.shift(),ot=Re.getQueryParameter(tt,Re.QUERY_RESULT);Re.deleteQuery(tt),Re.getParameter(_e.tq.GPU_DISJOINT_EXT)||(_e.gpu=ot/1e6,_e.gpuN++,_e.gpuSum+=_e.gpu,_e.gpu>_e.gpuMax&&(_e.gpuMax=_e.gpu))}}let sr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(sr.world=sr.world*.95+(fo-Oi)*.05,sr.parts=sr.parts*.95+(Op-Bp)*.05,sr.render=sr.render*.95+(hf-uf)*.05,pt=pt*.95+(performance.now()-Fe)*.05,window.__ft=pt,_e){let Re=e.info,tt=performance.now()-Fe,ot={t:+Ie.toFixed(2),s:Math.round(O.s),total:+tt.toFixed(1),world:+(fo-Oi).toFixed(1),render:+(hf-uf).toFixed(1),gpu:+(_e.gpu||0).toFixed(1),progs:Re.programs.length-_e.progs,geos:Re.memory.geometries-_e.geos,tex:Re.memory.textures-_e.tex,calls:Re.render.calls,tris:Re.render.triangles};ot.progs>0&&xe&&(ot.newProgs=Re.programs.slice(-ot.progs).map(At=>(At.name||"")+":"+String(At.cacheKey).slice(0,60))),_e.progs=Re.programs.length,_e.geos=Re.memory.geometries,_e.tex=Re.memory.textures,_e.frames++,_e.sum+=tt,tt>_e.max&&(_e.max=tt),tt>12&&xe&&_e.spikes.push(ot),_e.last=ot}if((_a+=He)>.25){_a=0,Pe.textContent=Math.round(O.speed*3.6),Be.textContent=(O.dist/1e3).toFixed(1);let Re=Math.floor(O.tod*1440);ge.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}De++,xe&&De>150&&He>.03?ke+=He:ke=Math.max(0,ke-He*.5),ke>3&&!ut.has("q")&&(ke=0,j())}window.__dbg={renderer:e,st:O,scene:r,camera:a,world:H,TOD:ae,X:he,train:st,weather:_t,U:ze,birds:B,cine:Vt,post:Y,car:le,sun:l,M:I,clouds:$,sky:G,mountains:oe,shadowDir:d,CM:Qe,spray:be,get audio(){return rt}},so(""),Xe.classList.add("ready"),ut.has("auto")&&nr(),requestAnimationFrame(Oe)}Cy().catch(i=>{console.error(i),so("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
