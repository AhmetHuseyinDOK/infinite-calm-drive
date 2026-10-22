var Nf=0,Pu=1,Uf=2;var Fs=1,Ff=2,Fr=3,ms=0,Mn=1,vn=2,Gn=0,Or=1,Xi=2,Iu=3,Lu=4,Of=5;var Os=100,Bf=101,zf=102,kf=103,Hf=104,Vf=200,Gf=201,Wf=202,Xf=203,Du=204,Nu=205,qf=206,Yf=207,Zf=208,$f=209,Jf=210,Kf=211,jf=212,Qf=213,ed=214,$a=0,Ja=1,Ka=2,Sr=3,ja=4,Qa=5,el=6,tl=7,Uu=0,td=1,nd=2,_i=0,Fu=1,Ou=2,Bu=3,zu=4,ku=5,Hu=6,Xo=7;var Vu=300,gs=301,Bs=302,Al=303,Rl=304,qo=306,Tr=1e3,Ai=1001,nl=1002,sn=1003,id=1004;var Yo=1005;var kt=1006,Cl=1007;var Wn=1008;var Rn=1009,Gu=1010,Wu=1011,Br=1012,Pl=1013,yi=1014,ai=1015,on=1016,Il=1017,Ll=1018,zr=1020,Xu=35902,qu=35899,Yu=1021,Zu=1022,Xn=1023,Ri=1026,xs=1027,zs=1028,Dl=1029,vs=1030,Nl=1031;var Ul=1033,Zo=33776,$o=33777,Jo=33778,Ko=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,kl=36196,Hl=37492,Vl=37496,Gl=37488,Wl=37489,jo=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,$l=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,lc=36495,cc=36283,uc=36284,Qo=36285,hc=36286;var So=2300,il=2301,Ya=2302,Mu=2303,bu=2400,Su=2401,Tu=2402;var sd=3200;var fc=0,rd=1,Mi="",Jt="srgb",To="srgb-linear",Eo="linear",Ct="srgb";var Za=7680;var od=519,ad=512,ld=513,cd=514,dc=515,ud=516,hd=517,pc=518,fd=519,dd=35044;var $u="300 es",xi=2e3,Er=2001;function Ip(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=wo("canvas");return i.style.display="block",i}var af={},wr=null;function Ju(...i){let e="THREE."+i.shift();wr?wr("log",e,...i):console.log(e,...i)}function md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=md(i);let e="THREE."+i.shift();if(wr)wr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=md(i);let e="THREE."+i.shift();if(wr)wr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){let e=i.join(" ");e in af||(af[e]=!0,nt(...i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xd={[$a]:Ja,[Ka]:el,[ja]:tl,[Sr]:Qa,[Ja]:$a,[el]:Ka,[tl]:ja,[Qa]:Sr},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kc=Math.PI/180,Ao=180/Math.PI;function ea(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Dp(i,e){return(i%e+e)%e}function jc(i,e,t){return(1-t)*i+t*e}function mo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var qe=th,xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let o=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||u!==p||c!==g){let m=o*f+u*p+c*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);d=Math.sin(d*v)/b,l=Math.sin(l*v)/b,o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l}else{o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=v,u*=v,c*=v,h*=v}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],o=n[s+1],u=n[s+2],c=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=l*g+c*h+o*p-u*f,e[t+1]=o*g+c*f+u*h-l*p,e[t+2]=u*g+c*p+l*f-o*h,e[t+3]=c*g-l*h-o*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,u=l(n/2),c=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],u=t[2],c=t[6],h=t[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(c-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=n*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-n*u,this._z=r*c+a*u+n*o-s*l,this._w=a*c-n*l-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nh=class nh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,u=2*(a*s-l*n),c=2*(l*t-r*s),h=2*(r*n-a*t);return this.x=t+o*u+a*h-l*c,this.y=n+o*c+l*u-r*h,this.z=s+o*h+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;var H=nh,Qc=new H,lf=new xn,ih=class ih{constructor(e,t,n,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u)}set(e,t,n,s,r,a,l,o,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],o=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],b=s[4],_=s[7],y=s[2],S=s[5],R=s[8];return r[0]=a*x+l*v+o*y,r[3]=a*m+l*b+o*S,r[6]=a*d+l*_+o*R,r[1]=u*x+c*v+h*y,r[4]=u*m+c*b+h*S,r[7]=u*d+c*_+h*R,r[2]=f*x+p*v+g*y,r[5]=f*m+p*b+g*S,r[8]=f*d+p*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*a*c-t*l*u-n*r*c+n*l*o+s*r*u-s*a*o}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=c*a-l*u,f=l*o-c*r,p=u*r-a*o,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*u-c*n)*x,e[2]=(l*n-s*a)*x,e[3]=f*x,e[4]=(c*t-s*o)*x,e[5]=(s*r-l*t)*x,e[6]=p*x,e[7]=(n*o-u*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let o=Math.cos(r),u=Math.sin(r);return this.set(n*o,n*u,-n*(o*a+u*l)+a+e,-s*u,s*o,-s*(-u*a+o*l)+l+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;var ut=ih,eu=new ut,cf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){let i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ct&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:cf,fromXYZ:uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:cf,fromXYZ:uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var _t=Np();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lr,sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lr===void 0&&(lr=wo("canvas")),lr.width=e.width,lr.height=e.height;let s=lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Up=0,Ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(tu(s[a].image)):r.push(tu(s[a]))}else r=tu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var Fp=0,nu=new H,Nn=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=kt,a=Wn,l=Xn,o=Rn,u=i.DEFAULT_ANISOTROPY,c=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=ea(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Vu;Nn.DEFAULT_ANISOTROPY=1;var sh=class sh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(u+1)/2,_=(p+1)/2,y=(d+1)/2,S=(c+f)/4,R=(h+x)/4,M=(g+m)/4;return b>_&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=R/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;var yt=sh,rl=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Nn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wl=class wl{constructor(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m)}set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=-o*h,t[8]=u,t[1]=p+g*u,t[5]=f-x*u,t[9]=-l*o,t[2]=x-f*u,t[6]=g+p*u,t[10]=a*o}else if(e.order==="YXZ"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f+x*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-l,t[2]=p*l-g,t[6]=x+f*l,t[10]=a*o}else if(e.order==="ZXY"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f-x*l,t[4]=-a*h,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*c,t[9]=x-f*l,t[2]=-a*u,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=g*u-p,t[8]=f*u+x,t[1]=o*h,t[5]=x*u+f,t[9]=p*u-g,t[2]=-u,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-l*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=-h,t[8]=u*c,t[1]=f*h+x,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=l*c,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Bp)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ns.crossVectors(n,Yn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ns.crossVectors(n,Yn)),ns.normalize(),Sa.crossVectors(Yn,ns),s[0]=ns.x,s[4]=Sa.x,s[8]=Yn.x,s[1]=ns.y,s[5]=Sa.y,s[9]=Yn.y,s[2]=ns.z,s[6]=Sa.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],o=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],b=n[7],_=n[11],y=n[15],S=s[0],R=s[4],M=s[8],E=s[12],A=s[1],P=s[5],L=s[9],N=s[13],w=s[2],D=s[6],U=s[10],B=s[14],k=s[3],z=s[7],V=s[11],G=s[15];return r[0]=a*S+l*A+o*w+u*k,r[4]=a*R+l*P+o*D+u*z,r[8]=a*M+l*L+o*U+u*V,r[12]=a*E+l*N+o*B+u*G,r[1]=c*S+h*A+f*w+p*k,r[5]=c*R+h*P+f*D+p*z,r[9]=c*M+h*L+f*U+p*V,r[13]=c*E+h*N+f*B+p*G,r[2]=g*S+x*A+m*w+d*k,r[6]=g*R+x*P+m*D+d*z,r[10]=g*M+x*L+m*U+d*V,r[14]=g*E+x*N+m*B+d*G,r[3]=v*S+b*A+_*w+y*k,r[7]=v*R+b*P+_*D+y*z,r[11]=v*M+b*L+_*U+y*V,r[15]=v*E+b*N+_*B+y*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],v=o*p-u*f,b=l*p-u*h,_=l*f-o*h,y=a*p-u*c,S=a*f-o*c,R=a*h-l*c;return t*(x*v-m*b+d*_)-n*(g*v-m*y+d*S)+s*(g*b-x*y+d*R)-r*(g*_-x*S+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],u=e[6],c=e[10];return t*(a*c-l*u)-n*(r*c-l*o)+s*(r*u-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=t*l-n*a,b=t*o-s*a,_=t*u-r*a,y=n*o-s*l,S=n*u-r*l,R=s*u-r*o,M=c*x-h*g,E=c*m-f*g,A=c*d-p*g,P=h*m-f*x,L=h*d-p*x,N=f*d-p*m,w=v*N-b*L+_*P+y*A-S*E+R*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/w;return e[0]=(l*N-o*L+u*P)*D,e[1]=(s*L-n*N-r*P)*D,e[2]=(x*R-m*S+d*y)*D,e[3]=(f*S-h*R-p*y)*D,e[4]=(o*A-a*N-u*E)*D,e[5]=(t*N-s*A+r*E)*D,e[6]=(m*_-g*R-d*b)*D,e[7]=(c*R-f*_+p*b)*D,e[8]=(a*L-l*A+u*M)*D,e[9]=(n*A-t*L-r*M)*D,e[10]=(g*S-x*_+d*v)*D,e[11]=(h*_-c*S-p*v)*D,e[12]=(l*E-a*P-o*M)*D,e[13]=(t*P-n*E+s*M)*D,e[14]=(x*b-g*y-m*v)*D,e[15]=(c*y-h*b+f*v)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,o=e.z,u=r*a,c=r*l;return this.set(u*a+n,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+n,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,u=r+r,c=a+a,h=l+l,f=r*u,p=r*c,g=r*h,x=a*c,m=a*h,d=l*h,v=o*u,b=o*c,_=o*h,y=n.x,S=n.y,R=n.z;return s[0]=(1-(x+d))*y,s[1]=(p+_)*y,s[2]=(g-b)*y,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+b)*R,s[9]=(m-v)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cr.set(s[0],s[1],s[2]).length(),l=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),di.copy(this);let u=1/a,c=1/l,h=1/o;return di.elements[0]*=u,di.elements[1]*=u,di.elements[2]*=u,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,s,r,a,l=xi,o=!1){let u=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===xi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===Er)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=xi,o=!1){let u=this.elements,c=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===xi)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===Er)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wl.prototype.isMatrix4=!0;var Je=wl,cr=new H,di=new Je,Op=new H(0,0,0),Bp=new H(1,1,1),ns=new H,Sa=new H,Yn=new H,hf=new Je,ff=new xn,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,df=new H,ur=new xn,Oi=new Je,Ta=new H,go=new H,kp=new H,Hp=new xn,pf=new H(1,0,0),mf=new H(0,1,0),gf=new H(0,0,1),xf={type:"added"},Vp={type:"removed"},hr={type:"childadded",child:null},iu={type:"childremoved",child:null},rn=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Hn,n=new xn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new ut}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(go,Ta,this.up):Oi.lookAt(Ta,go,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Oi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),hr.child=e,this.dispatchEvent(hr),hr.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let h=o[u];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){let l=a(e.geometries),o=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new H(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gp={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Dp(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=su(a,r,e+1/3),this.g=su(a,r,e),this.b=su(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return _t.workingToColorSpace(An.copy(this),e),Math.round(Mt(An.r*255,0,255))*65536+Math.round(Mt(An.g*255,0,255))*256+Math.round(Mt(An.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,u,c=(l+a)/2;if(l===a)o=0,u=0;else{let h=a-l;switch(u=c<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Jt){_t.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Ea);let n=jc(is.h,Ea.h,t),s=jc(is.s,Ea.s,t),r=jc(is.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new fe;fe.NAMES=vd;var Po=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new H,Bi=new H,ru=new H,zi=new H,fr=new H,dr=new H,vf=new H,ou=new H,au=new H,lu=new H,cu=new yt,uu=new yt,hu=new yt,as=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Bi.subVectors(n,t),ru.subVectors(e,t);let a=pi.dot(pi),l=pi.dot(Bi),o=pi.dot(ru),u=Bi.dot(Bi),c=Bi.dot(ru),h=a*u-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(u*o-l*c)*f,g=(a*c-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,a,l,o){return this.getBarycoord(e,t,n,s,zi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,zi.x),o.addScaledVector(a,zi.y),o.addScaledVector(l,zi.z),o)}static getInterpolatedAttribute(e,t,n,s,r,a){return cu.setScalar(0),uu.setScalar(0),hu.setScalar(0),cu.fromBufferAttribute(e,t),uu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cu,r.x),a.addScaledVector(uu,r.y),a.addScaledVector(hu,r.z),a}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Bi.subVectors(e,t),pi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),pi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;fr.subVectors(s,n),dr.subVectors(r,n),ou.subVectors(e,n);let o=fr.dot(ou),u=dr.dot(ou);if(o<=0&&u<=0)return t.copy(n);au.subVectors(e,s);let c=fr.dot(au),h=dr.dot(au);if(c>=0&&h<=c)return t.copy(s);let f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(n).addScaledVector(fr,a);lu.subVectors(e,r);let p=fr.dot(lu),g=dr.dot(lu);if(g>=0&&p<=g)return t.copy(r);let x=p*u-o*g;if(x<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(dr,l);let m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return vf.subVectors(r,s),l=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(vf,l);let d=1/(m+x+f);return a=x*d,l=f*d,t.copy(n).addScaledVector(fr,a).addScaledVector(dr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Aa.subVectors(this.max,xo),pr.subVectors(e.a,xo),mr.subVectors(e.b,xo),gr.subVectors(e.c,xo),ss.subVectors(mr,pr),rs.subVectors(gr,mr),Ps.subVectors(pr,gr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ps.z,Ps.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ps.z,0,-Ps.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ps.y,Ps.x,0];return!fu(t,pr,mr,gr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,pr,mr,gr,Aa))?!1:(Ra.crossVectors(ss,rs),t=[Ra.x,Ra.y,Ra.z],fu(t,pr,mr,gr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new H,new H,new H,new H,new H,new H,new H,new H],mi=new H,wa=new ri,pr=new H,mr=new H,gr=new H,ss=new H,rs=new H,Ps=new H,xo=new H,Aa=new H,Ra=new H,Is=new H;function fu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);let l=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),o=e.dot(Is),u=t.dot(Is),c=n.dot(Is);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var nn=new H,Ca=new qe,Wp=0,zt=class extends Ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dd,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xp=new ri,vo=new H,du=new H,oi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(du)),this.expandByPoint(vo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qp=0,si=new Je,pu=new rn,xr=new H,Zn=new ri,_o=new ri,gn=new H,xt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?Lo:Io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];_o.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(Zn.min,_o.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,_o.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(_o.min),Zn.expandByPoint(_o.max))}Zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)gn.fromBufferAttribute(l,u),o&&(xr.fromBufferAttribute(e,u),gn.add(xr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new H,o[M]=new H;let u=new H,c=new H,h=new H,f=new qe,p=new qe,g=new qe,x=new H,m=new H;function d(M,E,A){u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),l[M].add(x),l[E].add(x),l[A].add(x),o[M].add(m),o[E].add(m),o[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,E=v.length;M<E;++M){let A=v[M],P=A.start,L=A.count;for(let N=P,w=P+L;N<w;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let b=new H,_=new H,y=new H,S=new H;function R(M){y.fromBufferAttribute(s,M),S.copy(y);let E=l[M];b.copy(E),b.sub(y.multiplyScalar(y.dot(E))).normalize(),_.crossVectors(S,E);let P=_.dot(o[M])<0?-1:1;a.setXYZW(M,b.x,b.y,b.z,P)}for(let M=0,E=v.length;M<E;++M){let A=v[M],P=A.start,L=A.count;for(let N=P,w=P+L;N<w;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,l=new H,o=new H,u=new H,c=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),l.add(c),o.add(c),u.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(l,o){let u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new zt(f,c,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],u=e(o,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let o=[],u=r[l];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=e(f,n);o.push(p)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let o in n){let u=n[o];e.data.attributes[o]=u.toJSON(e.data)}let s={},r=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[o]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mu=new H,Yp=new H,Zp=new ut,gi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mu.subVectors(n,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$p=0,Pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Or,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hi=new H,gu=new H,Pa=new H,Ia=new H,Cr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gu.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(gu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),u=Ia.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*o-l,f=a*l-o,g=r*c,h>=0)if(f>=-g)if(f<=g){let x=1/c;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+u}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+u):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gu).addScaledVector(Pa,f),p}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,o,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,d=n.x-a.x,v=n.y-a.y,b=n.z-a.z,_=Math.abs(o),y=Math.abs(u),S=Math.abs(c),R,M,E,A,P,L,N,w,D,U,B,k;if(_>=y&&_>=S?(E=o,L=h,D=g,k=d,o>=0?(R=u,M=c,A=f,P=p,N=x,w=m,U=v,B=b):(R=c,M=u,A=p,P=f,N=m,w=x,U=b,B=v)):y>=S?(E=u,L=f,D=x,k=v,u>=0?(R=c,M=o,A=p,P=h,N=m,w=g,U=b,B=d):(R=o,M=c,A=h,P=p,N=g,w=m,U=d,B=b)):(E=c,L=p,D=m,k=b,c>=0?(R=o,M=u,A=h,P=f,N=g,w=x,U=d,B=v):(R=u,M=o,A=f,P=h,N=x,w=g,U=v,B=d)),E===0)return null;let z=R/E,V=M/E,G=1/E,J=A-z*L,re=P-V*L,Ve=N-z*D,ge=w-V*D,Oe=U-z*k,q=B-V*k,$=Oe*ge-q*Ve,Me=J*q-re*Oe,Ne=Ve*re-ge*J;if(s){if($<0||Me<0||Ne<0)return null}else if(($<0||Me<0||Ne<0)&&($>0||Me>0||Ne>0))return null;let xe=$+Me+Ne;if(xe===0)return null;let Ye=G*($*L+Me*D+Ne*k);return(xe>0?Ye<0:Ye>0)?null:this.at(Ye/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_f=new Je,Ls=new Cr,La=new oi,yf=new H,Da=new H,Na=new H,Ua=new H,xu=new H,Fa=new H,Mf=new H,Oa=new H,ht=class extends rn{constructor(e=new xt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Fa.set(0,0,0);for(let o=0,u=r.length;o<u;o++){let c=l[o],h=r[o];c!==0&&(xu.fromBufferAttribute(h,e),a?Fa.addScaledVector(xu,c):Fa.addScaledVector(xu.sub(t),c))}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(La.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(La,yf)===null||Ls.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(_f.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(_f),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=b;_<y;_+=3){let S=l.getX(_),R=l.getX(_+1),M=l.getX(_+2);s=Ba(this,d,e,n,u,c,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),b=l.getX(m+1),_=l.getX(m+2);s=Ba(this,a,e,n,u,c,h,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=b;_<y;_+=3){let S=_,R=_+1,M=_+2;s=Ba(this,d,e,n,u,c,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,b=m+1,_=m+2;s=Ba(this,a,e,n,u,c,h,v,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jp(i,e,t,n,s,r,a,l){let o;if(e.side===Mn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,e.side===ms,l),o===null)return null;Oa.copy(l),Oa.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Oa);return u<t.near||u>t.far?null:{distance:u,point:Oa.clone(),object:i}}function Ba(i,e,t,n,s,r,a,l,o,u){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(u,Ua);let c=Jp(i,e,t,n,Da,Na,Ua,Mf);if(c){let h=new H;as.getBarycoord(Mf,Da,Na,Ua,h),s&&(c.uv=as.getInterpolatedAttribute(s,l,o,u,h,new qe)),r&&(c.uv1=as.getInterpolatedAttribute(r,l,o,u,h,new qe)),a&&(c.normal=as.getInterpolatedAttribute(a,l,o,u,h,new H),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new H,materialIndex:0};as.getNormal(Da,Na,Ua,f.normal),c.face=f,c.barycoord=h}return c}var ls=class extends Nn{constructor(e=null,t=1,n=1,s,r,a,l,o,u=sn,c=sn,h,f){super(null,a,l,o,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new Je,bf=new Je,za=[],Sf=new ri,Kp=new Je,yo=new ht,Mo=new oi,Gi=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Sf.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Mo.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),bf.multiplyMatrices(n,vr),yo.matrixWorld=bf,yo.raycast(e,za);for(let a=0,l=za.length;a<l;a++){let o=za[a];o.instanceId=r,o.object=this,t.push(o)}za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,zs,ai));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new oi,jp=new qe(.5,.5),ka=new H,Pr=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],b=r[13],_=r[14],y=r[15];if(s[0].setComponents(u-a,p-c,d-g,y-v).normalize(),s[1].setComponents(u+a,p+c,d+g,y+v).normalize(),s[2].setComponents(u+l,p+h,d+x,y+b).normalize(),s[3].setComponents(u-l,p-h,d-x,y-b).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(u-o,p-f,d-m,y-_).normalize();else if(s[4].setComponents(u-o,p-f,d-m,y-_).normalize(),t===xi)s[5].setComponents(u+o,p+f,d+m,y+_).normalize();else if(t===Er)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=jp.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var al=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ll=new H,cl=new H,Tf=new Je,bo=new Cr,Ha=new oi,vu=new H,Ef=new H,Do=class extends rn{constructor(e=new xt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new Qe(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Tf.copy(s).invert(),bo.copy(e.ray).applyMatrix4(Tf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=c.getX(x),v=c.getX(x+1),b=Va(this,e,bo,o,d,v,x);b&&t.push(b)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(p),d=Va(this,e,bo,o,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=Va(this,e,bo,o,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Va(this,e,bo,o,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Va(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(ll.fromBufferAttribute(l,s),cl.fromBufferAttribute(l,r),t.distanceSqToSegment(ll,cl,vu,Ef)>n)return;vu.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(vu);if(!(u<e.near||u>e.far))return{distance:u,point:Ef.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ir=class extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wf=new Je,Eu=new Cr,Ga=new oi,Wa=new H,No=class extends rn{constructor(e=new xt,t=new Ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;wf.copy(s).invert(),Eu.copy(e.ray).applyMatrix4(wf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=u.getX(g);Wa.fromBufferAttribute(h,m),Af(Wa,m,o,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Wa.fromBufferAttribute(h,g),Af(Wa,g,o,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Af(i,e,t,n,s,r,a){let l=Eu.distanceSqToPoint(i);if(l<t){let o=new H;Eu.closestPointToPoint(i,o),o.applyMatrix4(n);let u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Uo=class extends Nn{constructor(e=[],t=gs,n,s,r,a,l,o,u,c){super(e,t,n,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vn=class extends Nn{constructor(e,t,n,s,r,a,l,o,u){super(e,t,n,s,r,a,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends Nn{constructor(e,t,n=yi,s,r,a,l=sn,o=sn,u,c=Ri,h=1){if(c!==Ri&&c!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,l,o,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends cs{constructor(e,t=yi,n=gs,s,r,a=sn,l=sn,o,u=Ri){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,l,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vi=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,d,v,b,_,y,S,R,M,E){let A=_/R,P=y/M,L=_/2,N=y/2,w=S/2,D=R+1,U=M+1,B=0,k=0,z=new H;for(let V=0;V<U;V++){let G=V*P-N;for(let J=0;J<D;J++){let re=J*A-L;z[x]=re*v,z[m]=G*b,z[d]=w,u.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[d]=S>0?1:-1,c.push(z.x,z.y,z.z),h.push(J/R),h.push(1-V/M),B+=1}}for(let V=0;V<M;V++)for(let G=0;G<R;G++){let J=f+G+D*V,re=f+G+D*(V+1),Ve=f+(G+1)+D*(V+1),ge=f+(G+1)+D*V;o.push(J,re,ge),o.push(re,Ve,ge),k+=6}l.addGroup(p,k,E),p+=k,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oo=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],o=[],u=new H,c=new qe;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;u.x=e*Math.cos(p),u.y=e*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),c.x=(a[f]/e+1)/2,c.y=(a[f+1]/e+1)/2,o.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lr=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function v(){let _=new H,y=new H,S=0,R=(t-e)/n;for(let M=0;M<=r;M++){let E=[],A=M/r,P=A*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,w=N*o+l,D=Math.sin(w),U=Math.cos(w);y.x=P*D,y.y=-A*n+m,y.z=P*U,h.push(y.x,y.y,y.z),_.set(D,R,U).normalize(),f.push(_.x,_.y,_.z),p.push(N,1-A),E.push(g++)}x.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let A=x[E][M],P=x[E+1][M],L=x[E+1][M+1],N=x[E][M+1];(e>0||E!==0)&&(c.push(A,P,N),S+=3),(t>0||E!==r-1)&&(c.push(P,L,N),S+=3)}u.addGroup(d,S,0),d+=S}function b(_){let y=g,S=new qe,R=new H,M=0,E=_===!0?e:t,A=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let w=L/s*o+l,D=Math.cos(w),U=Math.sin(w);R.x=E*U,R.y=m*A,R.z=E*D,h.push(R.x,R.y,R.z),f.push(0,A,0),S.x=D*.5+.5,S.y=U*.5*A+.5,p.push(S.x,S.y),g++}for(let L=0;L<s;L++){let N=y+L,w=P+L;_===!0?c.push(w,w+1,N):c.push(w+1,w,N),M+=3}u.addGroup(d,M,_===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hl=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),u(n),c(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let b=new H,_=new H,y=new H;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],_),p(t[S+2],y),o(b,_,y,v)}function o(v,b,_,y){let S=y+1,R=[];for(let M=0;M<=S;M++){R[M]=[];let E=v.clone().lerp(_,M/S),A=b.clone().lerp(_,M/S),P=S-M;for(let L=0;L<=P;L++)L===0&&M===S?R[M][L]=E:R[M][L]=E.clone().lerp(A,L/P)}for(let M=0;M<S;M++)for(let E=0;E<2*(S-M)-1;E++){let A=Math.floor(E/2);E%2===0?(f(R[M][A+1]),f(R[M+1][A]),f(R[M][A])):(f(R[M][A+1]),f(R[M+1][A+1]),f(R[M+1][A]))}}function u(v){let b=new H;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function c(){let v=new H;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=m(v)/2/Math.PI+.5,y=d(v)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let b=a[v+0],_=a[v+2],y=a[v+4],S=Math.max(b,_,y),R=Math.min(b,_,y);S>.9&&R<.1&&(b<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let v=new H,b=new H,_=new H,y=new H,S=new qe,R=new qe,M=new qe;for(let E=0,A=0;E<r.length;E+=9,A+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),y.copy(v).add(b).add(_).divideScalar(3);let P=m(y);x(S,A+0,v,P),x(R,A+2,b,P),x(M,A+4,_,P)}}function x(v,b,_,y){y<0&&v.x===1&&(a[b]=v.x-1),_.x===0&&_.z===0&&(a[b]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Bo=class i extends hl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Xt=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),o=Math.floor(s),u=l+1,c=o+1,h=e/l,f=t/o,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){let v=d*f-a;for(let b=0;b<u;b++){let _=b*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(b/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let b=v+u*d,_=v+u*(d+1),y=v+1+u*(d+1),S=v+1+u*d;p.push(b,_,S),p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zo=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),u=0,c=[],h=new H,f=new H,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],b=d/n,_=a+b*l,y=e*Math.cos(_),S=Math.sqrt(e*e-y*y),R=0;d===0&&a===0?R=.5/t:d===n&&o===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){let E=M/t,A=s+E*r;h.x=-S*Math.cos(A),h.y=y,h.z=S*Math.sin(A),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+R,1-b),v.push(u++)}c.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let b=c[d][v+1],_=c[d][v],y=c[d+1][v],S=c[d+1][v+1];(d!==0||a>0)&&p.push(b,_,S),(d!==n-1||o<Math.PI)&&p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Rf(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rf(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Rf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ku(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Hs={clone:ks,merge:Cn},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fl=class extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ln=class extends Pi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dr=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _r(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _u(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Su:r=e,l=2*t-n;break;case Tu:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Su:a=e,o=2*n-t;break;case Tu:a=1,o=n+s[1]-s[0];break;default:a=e-1,o=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let y=0;y!==l;++y)r[y]=d*a[c+y]+v*a[u+y]+b*a[o+y]+_*a[h+y];return r}},ml=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(n-t)/(s-t),h=1-c;for(let f=0;f!==l;++f)r[f]=a[u+f]*h+a[o+f]*c;return r}},gl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends us{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==l;++m)r[m]=a[u+m]*x+a[o+m]*g;return r}let f=l*2,p=e-1;for(let g=0;g!==l;++g){let x=a[u+g],m=a[o+g],d=p*f+g*2,v=h[d],b=h[d+1],_=e*f+g*2,y=c[_],S=c[_+1],R=im(n,t,v,y,s);r[g]=_d(R,x,b,S,m)}return r}};function _d(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function nm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function im(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=_d(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let o=nm(r,e,t,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var $n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_u(e.settings)&&(n.settings={inTangents:_r(e.settings.inTangents,Array),outTangents:_r(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case Mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_u(this.settings)&&(Cf(this.settings.inTangents,e),Cf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){lt("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(a!==null&&a>o){lt("KeyframeTrack: Out of order keys.",this,l,o,a),e=!1;break}a=o}if(s!==void 0&&Lp(s))for(let l=0,o=s.length;l!==o;++l){let u=s[l];if(isNaN(u)){lt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let l=1;l<r;++l){let o=!1,u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){o=!0;break}}}if(o){if(l!==a){e[a]=e[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,o=a*n,u=0;u!==n;++u)t[o+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_u(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=il;var hs=class extends $n{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=So;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="color";var _l=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="number";var yl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-t)/(s-t),u=e*l;for(let c=u+l;u!==c;u+=4)xn.slerpFlat(r,0,a,u-l,a,u,o);return r}},ko=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends $n{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=So;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){l++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,l),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new bl,Sl=class{constructor(e){this.manager=e!==void 0?e:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ho=class extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yu=new Je,Pf=new H,If=new H,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Er||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new H,qa=new xn,wi=new H,Wi=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new H,Lf=new qe,Df=new qe,yn=class extends Wi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Lf,Df),t.subVectors(Df,Lf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*n/u,s*=a.width/o,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wu=class extends Vo{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ao*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Go=class extends Nr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var ds=class extends Wi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends Vo{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ps=class extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var yr=-90,Mr=1,Tl=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(yr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new yn(yr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new yn(yr,Mr,e,t);a.layers=this.layers,this.add(a);let l=new yn(yr,Mr,e,t);l.layers=this.layers,this.add(l);let o=new yn(yr,Mr,e,t);o.layers=this.layers,this.add(o);let u=new yn(yr,Mr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,o]=t;for(let u of t)this.remove(u);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},El=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sm(){this._document.hidden===!1&&this.reset()}var ju="\\[\\]\\.:\\/",rm=new RegExp("["+ju+"]","g"),Qu="[^"+ju+"]",om="[^"+ju.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",Qu),lm=/(WCOD+)?/.source.replace("WCOD",om),cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),hm=new RegExp("^"+am+lm+cm+um+"$"),fm=["material","materials","bones","map"],Ru=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rm,"")}static parseTrackName(e){let t=hm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let o=n(l.children);if(o)return o}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Ru;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var rh=class rh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};rh.prototype.isMatrix2=!0;var Cu=rh;function eh(i,e,t,n){let s=dm(n);switch(t){case Yu:return i*e;case zs:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case vs:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case Zu:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Hl:case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case jo:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case ac:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(i){switch(i){case Rn:case Gu:return{byteLength:1,components:1};case Br:case Wu:case on:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case yi:case Pl:case ai:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ym(i){let e=new WeakMap;function t(l,o){let u=l.array,c=l.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,u,c),l.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,u){let c=o.array,h=o.updateRanges;if(i.bindBuffer(u,l),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=e.get(l);o&&(i.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Um=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,_g=`uniform sampler2D dfgLUT;
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
}`,yg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define STANDARD
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
}`,Yx=`#define TOON
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
}`,Zx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,ev=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Mm,alphahash_pars_fragment:bm,alphamap_fragment:Sm,alphamap_pars_fragment:Tm,alphatest_fragment:Em,alphatest_pars_fragment:wm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Im,beginnormal_vertex:Lm,bsdfs:Dm,iridescence_fragment:Nm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:zm,color_fragment:km,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Zm,emissivemap_fragment:$m,emissivemap_pars_fragment:Jm,colorspace_fragment:Km,colorspace_pars_fragment:jm,envmap_fragment:Qm,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:dg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:fg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:_g,lights_fragment_begin:yg,lights_fragment_maps:Mg,lights_fragment_end:bg,lightprobes_pars_fragment:Sg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:Zg,opaque_fragment:$g,packing:Jg,premultiplied_alpha_fragment:Kg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:xx,uv_pars_vertex:vx,uv_vertex:_x,worldpos_vertex:yx,background_vert:Mx,background_frag:bx,backgroundCube_vert:Sx,backgroundCube_frag:Tx,cube_vert:Ex,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distance_vert:Cx,distance_frag:Px,equirect_vert:Ix,equirect_frag:Lx,linedashed_vert:Dx,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:kx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:Zx,points_vert:$x,points_frag:Jx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Qx,sprite_frag:ev},ze={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Li={basic:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Cn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Cn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Cn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new fe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Cn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Cn([ze.points,ze.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Cn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Cn([ze.common,ze.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Cn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Cn([ze.sprite,ze.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Cn([ze.common,ze.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Cn([ze.lights,ze.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Li.physical={uniforms:Cn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var mc={r:0,b:0,g:0},tv=new Je,Gd=new ut;Gd.set(-1,0,0,0,1,0,0,0,1);function nv(i,e,t,n,s,r){let a=new fe(0),l=s===!0?0:1,o,u,c=null,h=0,f=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(v){let b=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),b=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===qo)?(u===void 0&&(u=new ht(new vi(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:ks(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Gd),u.material.toneMapped=_t.getTransfer(_.colorSpace)!==Ct,(c!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new ht(new Xt(2,2),new dt({name:"BackgroundMaterial",uniforms:ks(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=_t.getTransfer(_.colorSpace)!==Ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,b){v.getRGB(mc,Ku(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,b,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function iv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(P,L,N,w,D){let U=!1,B=h(P,w,N,L);r!==B&&(r=B,u(r.object)),U=p(P,w,N,D),U&&g(P,w,N,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(P,L,N,w),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function o(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function h(P,L,N,w){let D=w.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let B=P.isInstancedMesh===!0?P.id:0,k=U[B];k===void 0&&(k={},U[B]=k);let z=k[N.id];z===void 0&&(z={},k[N.id]=z);let V=z[D];return V===void 0&&(V=f(o()),z[D]=V),V}function f(P){let L=[],N=[],w=[];for(let D=0;D<t;D++)L[D]=0,N[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:w,object:P,attributes:{},index:null}}function p(P,L,N,w){let D=r.attributes,U=L.attributes,B=0,k=N.getAttributes();for(let z in k)if(k[z].location>=0){let G=D[z],J=U[z];if(J===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==w}function g(P,L,N,w){let D={},U=L.attributes,B=0,k=N.getAttributes();for(let z in k)if(k[z].location>=0){let G=U[z];G===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),D[z]=J,B++}r.attributes=D,r.attributesNum=B,r.index=w}function x(){let P=r.newAttributes;for(let L=0,N=P.length;L<N;L++)P[L]=0}function m(P){d(P,0)}function d(P,L){let N=r.newAttributes,w=r.enabledAttributes,D=r.attributeDivisors;N[P]=1,w[P]===0&&(i.enableVertexAttribArray(P),w[P]=1),D[P]!==L&&(i.vertexAttribDivisor(P,L),D[P]=L)}function v(){let P=r.newAttributes,L=r.enabledAttributes;for(let N=0,w=L.length;N<w;N++)L[N]!==P[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function b(P,L,N,w,D,U,B){B===!0?i.vertexAttribIPointer(P,L,N,D,U):i.vertexAttribPointer(P,L,N,w,D,U)}function _(P,L,N,w){x();let D=w.attributes,U=N.getAttributes(),B=L.defaultAttributeValues;for(let k in U){let z=U[k];if(z.location>=0){let V=D[k];if(V===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let G=V.normalized,J=V.itemSize,re=e.get(V);if(re===void 0)continue;let Ve=re.buffer,ge=re.type,Oe=re.bytesPerElement,q=ge===i.INT||ge===i.UNSIGNED_INT||V.gpuType===Pl;if(V.isInterleavedBufferAttribute){let $=V.data,Me=$.stride,Ne=V.offset;if($.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)d(z.location+xe,$.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let xe=0;xe<z.locationSize;xe++)b(z.location+xe,J/z.locationSize,ge,G,Me*Oe,(Ne+J/z.locationSize*xe)*Oe,q)}else{if(V.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)d(z.location+$,V.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let $=0;$<z.locationSize;$++)b(z.location+$,J/z.locationSize,ge,G,J*Oe,J/z.locationSize*$*Oe,q)}}else if(B!==void 0){let G=B[k];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(z.location,G);break;case 3:i.vertexAttrib3fv(z.location,G);break;case 4:i.vertexAttrib4fv(z.location,G);break;default:i.vertexAttrib1fv(z.location,G)}}}}v()}function y(){E();for(let P in n){let L=n[P];for(let N in L){let w=L[N];for(let D in w){let U=w[D];for(let B in U)c(U[B].object),delete U[B];delete w[D]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let N in L){let w=L[N];for(let D in w){let U=w[D];for(let B in U)c(U[B].object),delete U[B];delete w[D]}}delete n[P.id]}function R(P){for(let L in n){let N=n[L];for(let w in N){let D=N[w];if(D[P.id]===void 0)continue;let U=D[P.id];for(let B in U)c(U[B].object),delete U[B];delete D[P.id]}}}function M(P){for(let L in n){let N=n[L],w=P.isInstancedMesh===!0?P.id:0,D=N[w];if(D!==void 0){for(let U in D){let B=D[U];for(let k in B)c(B[k].object),delete B[k];delete D[U]}delete N[w],Object.keys(N).length===0&&delete n[L]}}}function E(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function sv(i,e,t){let n;function s(o){n=o}function r(o,u){i.drawArrays(n,o,u),t.update(u,n,1)}function a(o,u,c){c!==0&&(i.drawArraysInstanced(n,o,u,c),t.update(u,n,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function rv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let M=R===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Rn&&R!==ai&&!M&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",c=o(u);c!==u&&(nt("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:y,samples:S}}function ov(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gi,l=new ut,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let v=r?0:n,b=v*4,_=d.clippingState||null;o.value=_,_=c(g,f,b,p);for(let y=0;y!==b;++y)_[y]=t[y];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=p;b!==x;++b,_+=4)a.copy(h[b]).applyMatrix4(v,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Hr=4,av=6,lv=20,cv=256,ta=new ds,Md=new fe,oh=null,ah=0,lh=0,ch=!1,uv=new H,Vs=new H,xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=uv}=r;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:on,format:Xn,colorSpace:To,depthBuffer:!1},s=bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hv(r)),this._blurMaterial=dv(r,e,t),this._ggxMaterial=fv(r,e,t)}return s}_compileMaterial(e){let t=new ht(new xt,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s,r){let o=new yn(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Md),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new vi,new tn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(Md),d=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(o.up.set(0,u[b],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[b],r.y,r.z)):_===1?(o.up.set(0,0,u[b]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[b],r.z)):(o.up.set(0,u[b],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[b]));let y=this._cubeSize;kr(s,_*y,b>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(x,o),h.render(e,o)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let o=this._cubeSize;kr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Hr?n-g+Hr:0),d=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-t,kr(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,ta),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,kr(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(l,ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),f=4*(this._cubeSize-c);kr(t,h,f,3*c,2*c),a.setRenderTarget(t),a.render(o,ta)}};function hv(i){let e=[],t=[],n=i,s=i-Hr+1+av;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),o=-l,u=1+l,c=[o,o,u,o,u,u,o,o,u,u,o,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,b=d>2?0:-1,_=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];g.set(_,p*f*d);for(let y=0;y<f;y++){let S=c[y*2]*2-1,R=c[y*2+1]*2-1;d===0?Vs.set(1,R,S):d===1?Vs.set(-S,1,-R):d===2?Vs.set(-S,R,1):d===3?Vs.set(-1,R,-S):d===4?Vs.set(-S,-1,R):Vs.set(S,R,-1),Vs.toArray(x,(d*f+y)*p)}}let m=new xt;m.setAttribute("position",new zt(g,p)),m.setAttribute("outputDirection",new zt(x,p)),t.push(new ht(m,null)),n>Hr&&n--}return{lodMeshes:t,sizeLods:e}}function bd(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fv(i,e,t){return new dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function dv(i,e,t){return new dt({name:"SphericalGaussianBlur",defines:{SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Sd(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Td(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Gn});r.uniforms.tEquirect.value=t;let a=new ht(s,r),l=t.minFilter;return t.minFilter===Wn&&(t.minFilter=kt),new Tl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function pv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Al||p===Rl)if(e.has(f)){let g=e.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new vc(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",u),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Al||p===Rl,x=p===gs||p===Bs;if(g||x){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new xc(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new xc(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,p){return p===Al?f.mapping=gs:p===Rl&&(f.mapping=Bs),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function mv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function gv(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let b=0,_=v.length;b<_;b+=3){let y=v[b+0],S=v[b+1],R=v[b+2];f.push(y,S,S,R,R,y)}}else{let v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let y=b+0,S=b+1,R=b+2;f.push(y,S,S,R,R,y)}}let m=new(g.count>=65535?Lo:Io)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function c(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:c}}function xv(i,e,t){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function vv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _v(i,e,t){let n=new WeakMap,s=new yt;function r(a,l,o){let u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(l);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=l.attributes.position.count*b,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*y*4*h),R=new Ro(S,_,y,h);R.type=ai,R.needsUpdate=!0;let M=b*4;for(let A=0;A<h;A++){let P=m[A],L=d[A],N=v[A],w=_*y*4*A;for(let D=0;D<P.count;D++){let U=D*M;p===!0&&(s.fromBufferAttribute(P,D),S[w+U+0]=s.x,S[w+U+1]=s.y,S[w+U+2]=s.z,S[w+U+3]=0),g===!0&&(s.fromBufferAttribute(L,D),S[w+U+4]=s.x,S[w+U+5]=s.y,S[w+U+6]=s.z,S[w+U+7]=0),x===!0&&(s.fromBufferAttribute(N,D),S[w+U+8]=s.x,S[w+U+9]=s.y,S[w+U+10]=s.z,S[w+U+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new qe(_,y)},n.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",u)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yv(i,e,t,n,s){let r=new WeakMap;function a(u){let c=s.render.frame,h=u.geometry,f=e.get(u,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function l(){r=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:l}}var Mv={[Fu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function bv(i,e,t,n,s,r){let a=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new xt;u.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let c=new fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ht(u,c),f=new ds(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],b=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),o!==null&&o.setSize(_,y);for(let S=0;S<v.length;S++){let R=v[S];R.setSize&&R.setSize(_,y)}},this.setEffects=function(_){v=_,b=v.length>0&&v[0].isRenderPass===!0;let y=a.width,S=a.height;v.length>0&&l===null&&(l=new Ft(y,S,{type:on,depthBuffer:!1,stencilBuffer:!1}),o=new Ft(y,S,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let M=v[R];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(x||_.toneMapping===_i&&v.length===0)return!1;if(d=y,y!==null){let S=y.width,R=y.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=_i,!0},this.hasRenderPass=function(){return b},this.end=function(_,y){_.toneMapping=m,x=!0;let S=a,R=l;for(let M=0;M<v.length;M++){let E=v[M];E.enabled!==!1&&(E.render(_,R,S,y),E.needsSwap!==!1&&(S=R,R=R===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},_t.getTransfer(p)===Ct&&(c.defines.SRGB_TRANSFER="");let M=Mv[g];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var Wd=new Nn,fh=new cs(1,1),Xd=new Ro,qd=new ol,Yd=new Uo,Ed=[],wd=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mc(i,e){let t=wd[e];t===void 0&&(t=new Int32Array(e),wd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Cd.set(n),i.uniformMatrix2fv(this.addr,!1,Cd),un(t,n)}}function Rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),un(t,n)}}function Cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),un(t,n)}}function Pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=t.isReversedDepthBuffer()?pc:dc,r=fh):r=Wd,t.setTexture2D(e||r,s)}function zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yd,s)}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function Vv(i){switch(i){case 5126:return Sv;case 35664:return Tv;case 35665:return Ev;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Gv(i,e){i.uniform1fv(this.addr,e)}function Wv(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xv(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function qv(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Yv(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zv(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $v(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jv(i,e){i.uniform1iv(this.addr,e)}function Kv(i,e){i.uniform2iv(this.addr,e)}function jv(i,e){i.uniform3iv(this.addr,e)}function Qv(i,e){i.uniform4iv(this.addr,e)}function e1(i,e){i.uniform1uiv(this.addr,e)}function t1(i,e){i.uniform2uiv(this.addr,e)}function n1(i,e){i.uniform3uiv(this.addr,e)}function i1(i,e){i.uniform4uiv(this.addr,e)}function s1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fh:a=Wd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function r1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qd,r[a])}function o1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yd,r[a])}function a1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xd,r[a])}function l1(i){switch(i){case 5126:return Gv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Jv;case 35667:case 35671:return Kv;case 35668:case 35672:return jv;case 35669:case 35673:return Qv;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vv(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l1(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Pd(i,e){i.seq.push(e),i.map[e.id]=e}function c1(i,e,t){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,l=r[1],o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){Pd(t,u===void 0?new dh(l,i,e):new ph(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new mh(l),Pd(t,h)),t=h}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);c1(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Id(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u1=37297,h1=0;function f1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Ld=new ut;function d1(i){_t._getMatrix(Ld,_t.workingColorSpace,i);let e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Eo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f1(i.getShaderSource(e),l)}else return r}function p1(i,e){let t=d1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var m1={[Fu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[zu]:"ACESFilmic",[Hu]:"AgX",[Xo]:"Neutral",[ku]:"Custom"};function g1(i,e){let t=m1[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new H;function x1(){_t.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function _1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ia(i){return i!==""}function Nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(M1,S1)}var b1=new Map;function S1(i,e){let t=rt[e];if(t===void 0){let n=b1.get(e);if(n!==void 0)t=rt[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gh(t)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(i){return i.replace(T1,E1)}function E1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Od(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var w1={[Fs]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function A1(i){return w1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R1={[gs]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function C1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var P1={[Bs]:"ENVMAP_MODE_REFRACTION"};function I1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var L1={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function D1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L1[i.combine]||"ENVMAP_BLENDING_NONE"}function N1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,o=A1(t),u=C1(t),c=I1(t),h=D1(t),f=N1(t),p=v1(t),g=_1(r),x=s.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?rt.tonemapping_pars_fragment:"",t.toneMapping!==_i?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=gh(a),a=Nd(a,t),a=Ud(a,t),l=gh(l),l=Nd(l,t),l=Ud(l,t),a=Fd(a),l=Fd(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=v+m+a,_=v+d+l,y=Id(s,s.VERTEX_SHADER,b),S=Id(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(S)||"",D=L.trim(),U=N.trim(),B=w.trim(),k=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,S);else{let V=Dd(s,y,"vertex"),G=Dd(s,S,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+V+`
`+G)}else D!==""?nt("WebGLProgram: Program Info Log:",D):(U===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(y),s.deleteShader(S),M=new Vr(s,x),E=y1(s,x)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,u1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=S,this}var F1=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vh(e),t.set(e,n)),n}},vh=class{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}};function O1(i){return i===vs||i===jo||i===Qo}function B1(i,e,t,n,s,r){let a=new Co,l=new xh,o=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return o.add(M),M===0?"uv":`uv${M}`}function x(M,E,A,P,L,N){let w=P.fog,D=L.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,k=e.get(M.envMap||U,B),z=k&&k.mapping===qo?k.image.height:null,V=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&nt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=G!==void 0?G.length:0,re=0;D.morphAttributes.position!==void 0&&(re=1),D.morphAttributes.normal!==void 0&&(re=2),D.morphAttributes.color!==void 0&&(re=3);let Ve,ge,Oe,q;if(V){let Lt=Li[V];Ve=Lt.vertexShader,ge=Lt.fragmentShader}else{Ve=M.vertexShader,ge=M.fragmentShader;let Lt=l.getVertexShaderStage(M),bt=l.getFragmentShaderStage(M);l.update(M,Lt,bt),Oe=Lt.id,q=bt.id}let $=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Ye=!!M.map,it=!!M.matcap,st=!!k,ot=!!M.aoMap,pt=!!M.lightMap,ct=!!M.bumpMap&&M.wireframe===!1,gt=!!M.normalMap,se=!!M.displacementMap,be=!!M.emissiveMap,ve=!!M.metalnessMap,pe=!!M.roughnessMap,F=M.anisotropy>0,Pe=M.clearcoat>0,We=M.dispersion>0,O=M.retroreflectivity>0,T=M.iridescence>0,I=M.sheen>0,Z=M.transmission>0,te=F&&!!M.anisotropyMap,_e=Pe&&!!M.clearcoatMap,Se=Pe&&!!M.clearcoatNormalMap,K=Pe&&!!M.clearcoatRoughnessMap,Q=T&&!!M.iridescenceMap,he=T&&!!M.iridescenceThicknessMap,ye=I&&!!M.sheenColorMap,Te=I&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,Be=!!M.specularColorMap,$e=!!M.specularIntensityMap,at=Z&&!!M.transmissionMap,W=Z&&!!M.thicknessMap,Ae=!!M.gradientMap,ne=!!M.alphaMap,Re=M.alphaTest>0,Ue=!!M.alphaHash,ue=!!M.extensions,Ze=_i;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Ie={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:ge,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:it,envMap:st,envMapMode:st&&k.mapping,envMapCubeUVHeight:z,aoMap:ot,lightMap:pt,bumpMap:ct,normalMap:gt,displacementMap:se,emissiveMap:be,normalMapObjectSpace:gt&&M.normalMapType===rd,normalMapTangentSpace:gt&&M.normalMapType===fc,packedNormalMap:gt&&M.normalMapType===fc&&O1(M.normalMap.format),metalnessMap:ve,roughnessMap:pe,anisotropy:F,anisotropyMap:te,clearcoat:Pe,clearcoatMap:_e,clearcoatNormalMap:Se,clearcoatRoughnessMap:K,dispersion:We,retroreflection:O,iridescence:T,iridescenceMap:Q,iridescenceThicknessMap:he,sheen:I,sheenColorMap:ye,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:Be,specularIntensityMap:$e,transmission:Z,transmissionMap:at,thicknessMap:W,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===Or&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:Re,alphaHash:Ue,combine:M.combine,mapUv:Ye&&g(M.map.channel),aoMapUv:ot&&g(M.aoMap.channel),lightMapUv:pt&&g(M.lightMap.channel),bumpMapUv:ct&&g(M.bumpMap.channel),normalMapUv:gt&&g(M.normalMap.channel),displacementMapUv:se&&g(M.displacementMap.channel),emissiveMapUv:be&&g(M.emissiveMap.channel),metalnessMapUv:ve&&g(M.metalnessMap.channel),roughnessMapUv:pe&&g(M.roughnessMap.channel),anisotropyMapUv:te&&g(M.anisotropyMap.channel),clearcoatMapUv:_e&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(M.sheenRoughnessMap.channel),specularMapUv:Ee&&g(M.specularMap.channel),specularColorMapUv:Be&&g(M.specularColorMap.channel),specularIntensityMapUv:$e&&g(M.specularIntensityMap.channel),transmissionMapUv:at&&g(M.transmissionMap.channel),thicknessMapUv:W&&g(M.thicknessMap.channel),alphaMapUv:ne&&g(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||F),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Ye||ne),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&_t.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ue&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&M.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=o.has(1),Ie.vertexUv2s=o.has(2),Ie.vertexUv3s=o.has(3),o.clear(),Ie}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(d(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function d(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function b(M){let E=p[M.type],A;if(E){let P=Li[E];A=Hs.clone(P.uniforms)}else A=M.uniforms;return A}function _(M,E){let A=c.get(E);return A!==void 0?++A.usedTimes:(A=new U1(i,E,M,s),u.push(A),c.set(E,A)),A}function y(M){if(--M.usedTimes===0){let E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),c.delete(M.cacheKey),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:u,dispose:R}}function z1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let b=l(f,p,g,x,m,d);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function u(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,p){t.length>1&&t.sort(f||k1),n.length>1&&n.sort(p||Bd),s.length>1&&s.sort(p||Bd)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:h,sort:c}}function H1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new zd,i.set(n,[a])):s>=r.length?(a=new zd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function V1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new fe};break;case"SpotLight":t={position:new H,direction:new H,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function G1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var W1=0;function X1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q1(i){let e=new V1,t=G1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new Je,a=new Je;function l(u){let c=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,b=0,_=0,y=0,S=0,R=0,M=0,E=0,A=0;u.sort(X1);for(let L=0,N=u.length;L<N;L++){let w=u[L],D=w.color,U=w.intensity,B=w.distance,k=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===vs?k=w.shadow.map.texture:k=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=D.r*U,h+=D.g*U,f+=D.b*U;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],U);A++}else if(w.isSunLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=k;let J=V.getViewportCount();for(let re=0;re<J;re++)n.sunShadowMatrix[x+re]=V.getMatrix(re),n.sunShadowCascade[x+re]=V._cascadeData[re];x+=J,g++}n.sun[p]=z,p++}else if(w.isDirectionalLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=z,m++}else if(w.isSpotLight){let z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(D).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[v]=z;let V=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,V.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=V.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=k,R++}v++}else if(w.isRectAreaLight){let z=e.get(w);z.color.copy(D).multiplyScalar(U),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[b]=z,b++}else if(w.isPointLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,n.pointShadow[d]=G,n.pointShadowMap[d]=k,n.pointShadowMatrix[d]=w.shadow.matrix,S++}n.point[d]=z,d++}else if(w.isHemisphereLight){let z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(U),z.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[_]=z,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==R||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=R,P.numSpotMaps=M,P.numLightProbes=A,n.version=W1++)}function o(u,c){let h=0,f=0,p=0,g=0,x=0,m=0,d=c.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){let _=u[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function kd(i){let e=new q1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function Y1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new kd(i),e.set(s,[l])):r>=a.length?(l=new kd(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`,J1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],K1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Hd=new Je,na=new H,hh=new H;function j1(i,e,t){let n=new Pr,s=new qe,r=new qe,a=new yt,l=new Dr,o=new dl,u={},c=t.maxTextureSize,h={[ms]:Mn,[Mn]:ms,[vn]:vn},f=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Z1,fragmentShader:$1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let d=this.type;this.render=function(S,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ff&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=d!==this.type;N&&R.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(D=>D.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,D=S.length;w<D;w++){let U=S[w],B=U.shadow;if(B===void 0){nt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let k=B.getFrameExtents();s.multiply(k),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/k.x),s.x=r.x*k.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/k.y),s.y=r.y*k.y,B.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fr){if(U.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ft(s.x,s.y,{format:vs,type:on,minFilter:kt,magFilter:kt,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new cs(s.x,s.y,ai),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ri,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn}else U.isPointLight?(B.map=new vc(s.x),B.map.depthTexture=new ul(s.x,yi)):(B.map=new Ft(s.x,s.y),B.map.depthTexture=new cs(s.x,s.y,yi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ri,this.type===Fs?(B.map.depthTexture.compareFunction=z?pc:dc,B.map.depthTexture.minFilter=kt,B.map.depthTexture.magFilter=kt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let V=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,M);for(let G=0;G<V;G++){let J=B.getCamera(G);if(U.isPointLight){let re=B.camera,Ve=B.matrix,ge=U.distance||re.far;ge!==re.far&&(re.far=ge,re.updateProjectionMatrix()),na.setFromMatrixPosition(U.matrixWorld),re.position.copy(na),hh.copy(re.position),hh.add(J1[G]),re.up.copy(K1[G]),re.lookAt(hh),re.updateMatrixWorld(),Ve.makeTranslation(-na.x,-na.y,-na.z),Hd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hd,re.coordinateSystem,re.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,G),i.clear();else{G===0&&(i.setRenderTarget(B.map),i.clear());let re=B.getViewport(G);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),L.viewport(a)}n=B.getFrustum(G),_(R,M,J,U,this.type)}B.isPointLightShadow!==!0&&this.type===Fr&&v(B,M),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,P)};function v(S,R){let M=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ft(s.x,s.y,{format:vs,type:on}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,M,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,M,p,x,null)}function b(S,R,M,E){let A=null,P=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=M.isPointLight===!0?o:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=A.uuid,N=R.uuid,w=u[L];w===void 0&&(w={},u[L]=w);let D=w[N];D===void 0&&(D=A.clone(),w[N]=D,R.addEventListener("dispose",y)),A=D}if(A.visible=R.visible,A.wireframe=R.wireframe,E===Fr?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:h[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=M}return A}function _(S,R,M,E,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Fr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let N=e.update(S),w=S.material;if(Array.isArray(w)){let D=N.groups;for(let U=0,B=D.length;U<B;U++){let k=D[U],z=w[k.materialIndex];if(z&&z.visible){let V=b(S,z,E,A);S.onBeforeShadow(i,S,R,M,N,V,k),i.renderBufferDirect(M,null,N,V,S,k),S.onAfterShadow(i,S,R,M,N,V,k)}}}else if(w.visible){let D=b(S,w,E,A);S.onBeforeShadow(i,S,R,M,N,D,null),i.renderBufferDirect(M,null,N,D,S,null),S.onAfterShadow(i,S,R,M,N,D,null)}}let L=S.children;for(let N=0,w=L.length;N<w;N++)_(L[N],R,M,E,A)}function y(S){S.target.removeEventListener("dispose",y);for(let M in u){let E=u[M],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Q1(i,e){function t(){let W=!1,Ae=new yt,ne=null,Re=new yt(0,0,0,0);return{setMask:function(Ue){ne!==Ue&&!W&&(i.colorMask(Ue,Ue,Ue,Ue),ne=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,ue,Ze,Ie,Lt){Lt===!0&&(Ue*=Ie,ue*=Ie,Ze*=Ie),Ae.set(Ue,ue,Ze,Ie),Re.equals(Ae)===!1&&(i.clearColor(Ue,ue,Ze,Ie),Re.copy(Ae))},reset:function(){W=!1,ne=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,Ae=!1,ne=null,Re=null,Ue=null;return{setReversed:function(ue){if(Ae!==ue){let Ze=e.get("EXT_clip_control");ue?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=ue;let Ie=Ue;Ue=null,this.setClear(Ie)}},getReversed:function(){return Ae},setTest:function(ue){ue?$(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ue){ne!==ue&&!W&&(i.depthMask(ue),ne=ue)},setFunc:function(ue){if(Ae&&(ue=xd[ue]),Re!==ue){switch(ue){case $a:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ue}},setLocked:function(ue){W=ue},setClear:function(ue){Ue!==ue&&(Ue=ue,Ae&&(ue=1-ue),i.clearDepth(ue))},reset:function(){W=!1,ne=null,Re=null,Ue=null,Ae=!1}}}function s(){let W=!1,Ae=null,ne=null,Re=null,Ue=null,ue=null,Ze=null,Ie=null,Lt=null;return{setTest:function(bt){W||(bt?$(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(bt){Ae!==bt&&!W&&(i.stencilMask(bt),Ae=bt)},setFunc:function(bt,On,ti){(ne!==bt||Re!==On||Ue!==ti)&&(i.stencilFunc(bt,On,ti),ne=bt,Re=On,Ue=ti)},setOp:function(bt,On,ti){(ue!==bt||Ze!==On||Ie!==ti)&&(i.stencilOp(bt,On,ti),ue=bt,Ze=On,Ie=ti)},setLocked:function(bt){W=bt},setClear:function(bt){Lt!==bt&&(i.clearStencil(bt),Lt=bt)},reset:function(){W=!1,Ae=null,ne=null,Re=null,Ue=null,ue=null,Ze=null,Ie=null,Lt=null}}}let r=new t,a=new n,l=new s,o=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,b=null,_=null,y=null,S=null,R=null,M=new fe(0,0,0),E=0,A=!1,P=null,L=null,N=null,w=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=k>=2);let V=null,G={},J=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Ve=new yt().fromArray(J),ge=new yt().fromArray(re);function Oe(W,Ae,ne,Re){let Ue=new Uint8Array(4),ue=i.createTexture();i.bindTexture(W,ue),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ne;Ze++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ae+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return ue}let q={};q[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),$(i.DEPTH_TEST),a.setFunc(Sr),ct(!1),gt(Pu),$(i.CULL_FACE),ot(Gn);function $(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function Me(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function Ne(W,Ae){return f[W]!==Ae?(i.bindFramebuffer(W,Ae),f[W]=Ae,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ae),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function xe(W,Ae){let ne=g,Re=!1;if(W){ne=p.get(Ae),ne===void 0&&(ne=[],p.set(Ae,ne));let Ue=W.textures;if(ne.length!==Ue.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ze=Ue.length;ue<Ze;ue++)ne[ue]=i.COLOR_ATTACHMENT0+ue;ne.length=Ue.length,Re=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ne)}function Ye(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let it={[Os]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[zf]:i.FUNC_REVERSE_SUBTRACT};it[kf]=i.MIN,it[Hf]=i.MAX;let st={[Vf]:i.ZERO,[Gf]:i.ONE,[Wf]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[Nu]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[jf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(W,Ae,ne,Re,Ue,ue,Ze,Ie,Lt,bt){if(W===Gn){m===!0&&(Me(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),W!==Of){if(W!==d||bt!==A){if((v!==Os||y!==Os)&&(i.blendEquation(i.FUNC_ADD),v=Os,y=Os),bt)switch(W){case Or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",W);break}else switch(W){case Or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",W);break}b=null,_=null,S=null,R=null,M.set(0,0,0),E=0,d=W,A=bt}return}Ue=Ue||Ae,ue=ue||ne,Ze=Ze||Re,(Ae!==v||Ue!==y)&&(i.blendEquationSeparate(it[Ae],it[Ue]),v=Ae,y=Ue),(ne!==b||Re!==_||ue!==S||Ze!==R)&&(i.blendFuncSeparate(st[ne],st[Re],st[ue],st[Ze]),b=ne,_=Re,S=ue,R=Ze),(Ie.equals(M)===!1||Lt!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Lt),M.copy(Ie),E=Lt),d=W,A=!1}function pt(W,Ae){W.side===vn?Me(i.CULL_FACE):$(i.CULL_FACE);let ne=W.side===Mn;Ae&&(ne=!ne),ct(ne),W.blending===Or&&W.transparent===!1?ot(Gn):ot(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Re=W.stencilWrite;l.setTest(Re),Re&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function gt(W){W!==Nf?($(i.CULL_FACE),W!==L&&(W===Pu?i.cullFace(i.BACK):W===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),L=W}function se(W){W!==N&&(B&&i.lineWidth(W),N=W)}function be(W,Ae,ne){W?($(i.POLYGON_OFFSET_FILL),(w!==Ae||D!==ne)&&(w=Ae,D=ne,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ne))):Me(i.POLYGON_OFFSET_FILL)}function ve(W){W?$(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function pe(W){W===void 0&&(W=i.TEXTURE0+U-1),V!==W&&(i.activeTexture(W),V=W)}function F(W,Ae,ne){ne===void 0&&(V===null?ne=i.TEXTURE0+U-1:ne=V);let Re=G[ne];Re===void 0&&(Re={type:void 0,texture:void 0},G[ne]=Re),(Re.type!==W||Re.texture!==Ae)&&(V!==ne&&(i.activeTexture(ne),V=ne),i.bindTexture(W,Ae||q[W]),Re.type=W,Re.texture=Ae)}function Pe(){let W=G[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function I(){try{i.texSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function _e(){try{i.texStorage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function Se(){try{i.texStorage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function K(){try{i.texImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function Q(){try{i.texImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function he(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function ye(W,Ae){h[W]!==Ae&&(i.pixelStorei(W,Ae),h[W]=Ae)}function Te(W){Ve.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ve.copy(W))}function Ee(W){ge.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ge.copy(W))}function Be(W,Ae){let ne=u.get(Ae);ne===void 0&&(ne=new WeakMap,u.set(Ae,ne));let Re=ne.get(W);Re===void 0&&(Re=i.getUniformBlockIndex(Ae,W.name),ne.set(W,Re))}function $e(W,Ae){let Re=u.get(Ae).get(W);o.get(Ae)!==Re&&(i.uniformBlockBinding(Ae,Re,W.__bindingPointIndex),o.set(Ae,Re))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},V=null,G={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,b=null,_=null,y=null,S=null,R=null,M=new fe(0,0,0),E=0,A=!1,P=null,L=null,N=null,w=null,D=null,Ve.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:$,disable:Me,bindFramebuffer:Ne,drawBuffers:xe,useProgram:Ye,setBlending:ot,setMaterial:pt,setFlipSided:ct,setCullFace:gt,setLineWidth:se,setPolygonOffset:be,setScissorTest:ve,activeTexture:pe,bindTexture:F,unbindTexture:Pe,compressedTexImage2D:We,compressedTexImage3D:O,texImage2D:K,texImage3D:Q,pixelStorei:ye,getParameter:he,updateUBOMapping:Be,uniformBlockBinding:$e,texStorage2D:_e,texStorage3D:Se,texSubImage2D:T,texSubImage3D:I,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Te,viewport:Ee,reset:at}}function e_(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,T){return g?new OffscreenCanvas(O,T):wo("canvas")}function m(O,T,I){let Z=1,te=We(O);if((te.width>I||te.height>I)&&(Z=I/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let _e=Math.floor(Z*te.width),Se=Math.floor(Z*te.height);f===void 0&&(f=x(_e,Se));let K=T?x(_e,Se):f;return K.width=_e,K.height=Se,K.getContext("2d").drawImage(O,0,0,_e,Se),nt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+_e+"x"+Se+")."),K}else return"data"in O&&nt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),O;return O}function d(O){return O.generateMipmaps}function v(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(O,T,I,Z,te,_e=!1){if(O!==null){if(i[O]!==void 0)return i[O];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Se;Z&&(Se=e.get("EXT_texture_norm16"),Se||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===i.RED&&(I===i.FLOAT&&(K=i.R32F),I===i.HALF_FLOAT&&(K=i.R16F),I===i.UNSIGNED_BYTE&&(K=i.R8),I===i.UNSIGNED_SHORT&&Se&&(K=Se.R16_EXT),I===i.SHORT&&Se&&(K=Se.R16_SNORM_EXT)),T===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.R8UI),I===i.UNSIGNED_SHORT&&(K=i.R16UI),I===i.UNSIGNED_INT&&(K=i.R32UI),I===i.BYTE&&(K=i.R8I),I===i.SHORT&&(K=i.R16I),I===i.INT&&(K=i.R32I)),T===i.RG&&(I===i.FLOAT&&(K=i.RG32F),I===i.HALF_FLOAT&&(K=i.RG16F),I===i.UNSIGNED_BYTE&&(K=i.RG8),I===i.UNSIGNED_SHORT&&Se&&(K=Se.RG16_EXT),I===i.SHORT&&Se&&(K=Se.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RG8UI),I===i.UNSIGNED_SHORT&&(K=i.RG16UI),I===i.UNSIGNED_INT&&(K=i.RG32UI),I===i.BYTE&&(K=i.RG8I),I===i.SHORT&&(K=i.RG16I),I===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGB8UI),I===i.UNSIGNED_SHORT&&(K=i.RGB16UI),I===i.UNSIGNED_INT&&(K=i.RGB32UI),I===i.BYTE&&(K=i.RGB8I),I===i.SHORT&&(K=i.RGB16I),I===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),I===i.UNSIGNED_INT&&(K=i.RGBA32UI),I===i.BYTE&&(K=i.RGBA8I),I===i.SHORT&&(K=i.RGBA16I),I===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(I===i.UNSIGNED_SHORT&&Se&&(K=Se.RGB16_EXT),I===i.SHORT&&Se&&(K=Se.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){let Q=_e?Eo:_t.getTransfer(te);I===i.FLOAT&&(K=i.RGBA32F),I===i.HALF_FLOAT&&(K=i.RGBA16F),I===i.UNSIGNED_BYTE&&(K=Q===Ct?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&Se&&(K=Se.RGBA16_EXT),I===i.SHORT&&Se&&(K=Se.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(O,T){let I;return O?T===null||T===yi||T===zr?I=i.DEPTH24_STENCIL8:T===ai?I=i.DEPTH32F_STENCIL8:T===Br&&(I=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yi||T===zr?I=i.DEPTH_COMPONENT24:T===ai?I=i.DEPTH_COMPONENT32F:T===Br&&(I=i.DEPTH_COMPONENT16),I}function S(O,T){return d(O)===!0||O.isFramebufferTexture&&O.minFilter!==sn&&O.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function R(O){let T=O.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&h.delete(T)}function M(O){let T=O.target;T.removeEventListener("dispose",M),P(T)}function E(O){let T=n.get(O);if(T.__webglInit===void 0)return;let I=O.source,Z=p.get(I);if(Z){let te=Z[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(O),Object.keys(Z).length===0&&p.delete(I)}n.remove(O)}function A(O){let T=n.get(O);i.deleteTexture(T.__webglTexture);let I=O.source,Z=p.get(I);delete Z[T.__cacheKey],a.memory.textures--}function P(O){let T=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let te=0;te<T.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(T.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let I=O.textures;for(let Z=0,te=I.length;Z<te;Z++){let _e=n.get(I[Z]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(I[Z])}n.remove(O)}let L=0;function N(){L=0}function w(){return L}function D(O){L=O}function U(){let O=L;return O>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,O}function B(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function k(O,T){let I=n.get(O);if(O.isVideoTexture&&F(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&I.__version!==O.version){let Z=O.image;if(Z===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(I,O,T);return}}else O.isExternalTexture&&(I.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+T)}function z(O,T){let I=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&I.__version!==O.version){Me(I,O,T);return}else O.isExternalTexture&&(I.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+T)}function V(O,T){let I=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&I.__version!==O.version){Me(I,O,T);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+T)}function G(O,T){let I=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&I.__version!==O.version){Ne(I,O,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+T)}let J={[Tr]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},re={[sn]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Ve={[ad]:i.NEVER,[fd]:i.ALWAYS,[ld]:i.LESS,[dc]:i.LEQUAL,[cd]:i.EQUAL,[pc]:i.GEQUAL,[ud]:i.GREATER,[hd]:i.NOTEQUAL};function ge(O,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===Cl||T.magFilter===Yo||T.magFilter===Wn||T.minFilter===kt||T.minFilter===Cl||T.minFilter===Yo||T.minFilter===Wn)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,J[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,re[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Ve[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===sn||T.minFilter!==Yo&&T.minFilter!==Wn||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(O,T){let I=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",R));let Z=T.source,te=p.get(Z);te===void 0&&(te={},p.set(Z,te));let _e=B(T);if(_e!==O.__cacheKey){te[_e]===void 0&&(te[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),te[_e].usedTimes++;let Se=te[O.__cacheKey];Se!==void 0&&(te[O.__cacheKey].usedTimes--,Se.usedTimes===0&&A(T)),O.__cacheKey=_e,O.__webglTexture=te[_e].texture}return I}function q(O,T,I){return Math.floor(Math.floor(O/I)/T)}function $(O,T,I,Z){let _e=O.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,I,Z,T.data);else{_e.sort((ye,Te)=>ye.start-Te.start);let Se=0;for(let ye=1;ye<_e.length;ye++){let Te=_e[Se],Ee=_e[ye],Be=Te.start+Te.count,$e=q(Ee.start,T.width,4),at=q(Te.start,T.width,4);Ee.start<=Be+1&&$e===at&&q(Ee.start+Ee.count-1,T.width,4)===$e?Te.count=Math.max(Te.count,Ee.start+Ee.count-Te.start):(++Se,_e[Se]=Ee)}_e.length=Se+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Te=_e.length;ye<Te;ye++){let Ee=_e[ye],Be=Math.floor(Ee.start/4),$e=Math.ceil(Ee.count/4),at=Be%T.width,W=Math.floor(Be/T.width),Ae=$e,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,at,W,Ae,ne,I,Z,T.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Me(O,T,I){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);let te=Oe(O,T),_e=T.source;t.bindTexture(Z,O.__webglTexture,i.TEXTURE0+I);let Se=n.get(_e);if(_e.version!==Se.__version||te===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ne=_t.getPrimaries(_t.workingColorSpace),Re=T.colorSpace===Mi?null:_t.getPrimaries(T.colorSpace),Ue=T.colorSpace===Mi||ne===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=m(T.image,!1,s.maxTextureSize);Q=Pe(T,Q);let he=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),Te=_(T.internalFormat,he,ye,T.normalized,T.colorSpace,T.isVideoTexture);ge(Z,T);let Ee,Be=T.mipmaps,$e=T.isVideoTexture!==!0,at=Se.__version===void 0||te===!0,W=_e.dataReady,Ae=S(T,Q);if(T.isDepthTexture)Te=y(T.format===xs,T.type),at&&($e?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,ye,null));else if(T.isDataTexture)if(Be.length>0){$e&&at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,Be[0].width,Be[0].height);for(let ne=0,Re=Be.length;ne<Re;ne++)Ee=Be[ne],$e?W&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,he,ye,Ee.data):t.texImage2D(i.TEXTURE_2D,ne,Te,Ee.width,Ee.height,0,he,ye,Ee.data);T.generateMipmaps=!1}else $e?(at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,Q.width,Q.height),W&&$(T,Q,he,ye)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,he,ye,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Te,Be[0].width,Be[0].height,Q.depth);for(let ne=0,Re=Be.length;ne<Re;ne++)if(Ee=Be[ne],T.format!==Xn)if(he!==null)if($e){if(W)if(T.layerUpdates.size>0){let Ue=eh(Ee.width,Ee.height,T.format,T.type);for(let ue of T.layerUpdates){let Ze=Ee.data.subarray(ue*Ue/Ee.data.BYTES_PER_ELEMENT,(ue+1)*Ue/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ue,Ee.width,Ee.height,1,he,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,Q.depth,he,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Te,Ee.width,Ee.height,Q.depth,0,Ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,Q.depth,he,ye,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Te,Ee.width,Ee.height,Q.depth,0,he,ye,Ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{$e&&at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,Be[0].width,Be[0].height);for(let ne=0,Re=Be.length;ne<Re;ne++)Ee=Be[ne],T.format!==Xn?he!==null?$e?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,he,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Te,Ee.width,Ee.height,0,Ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?W&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,he,ye,Ee.data):t.texImage2D(i.TEXTURE_2D,ne,Te,Ee.width,Ee.height,0,he,ye,Ee.data)}else if(T.isDataArrayTexture)if($e){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Te,Q.width,Q.height,Q.depth),W)if(T.layerUpdates.size>0){let ne=eh(Q.width,Q.height,T.format,T.type);for(let Re of T.layerUpdates){let Ue=Q.data.subarray(Re*ne/Q.data.BYTES_PER_ELEMENT,(Re+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,Q.width,Q.height,1,he,ye,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,ye,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,he,ye,Q.data);else if(T.isData3DTexture)$e?(at&&t.texStorage3D(i.TEXTURE_3D,Ae,Te,Q.width,Q.height,Q.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,ye,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,he,ye,Q.data);else if(T.isFramebufferTexture){if(at)if($e)t.texStorage2D(i.TEXTURE_2D,Ae,Te,Q.width,Q.height);else{let ne=Q.width,Re=Q.height;for(let Ue=0;Ue<Ae;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Te,ne,Re,0,he,ye,null),ne>>=1,Re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Q.parentNode!==ne){ne.appendChild(Q),h.add(T),ne.onpaint=Re=>{let Ue=Re.changedElements;for(let ue of h)Ue.includes(ue.image)&&(ue.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Ue=i.RGBA,ue=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,ue,Ze,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if($e&&at){let ne=We(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Te,ne.width,ne.height)}for(let ne=0,Re=Be.length;ne<Re;ne++)Ee=Be[ne],$e?W&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he,ye,Ee):t.texImage2D(i.TEXTURE_2D,ne,Te,he,ye,Ee);T.generateMipmaps=!1}else if($e){if(at){let ne=We(Q);t.texStorage2D(i.TEXTURE_2D,Ae,Te,ne.width,ne.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,ye,Q)}else t.texImage2D(i.TEXTURE_2D,0,Te,he,ye,Q);d(T)&&v(Z),Se.__version=_e.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ne(O,T,I){if(T.image.length!==6)return;let Z=Oe(O,T),te=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+I);let _e=n.get(te);if(te.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+I);let Se=_t.getPrimaries(_t.workingColorSpace),K=T.colorSpace===Mi?null:_t.getPrimaries(T.colorSpace),Q=T.colorSpace===Mi||Se===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let he=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let ue=0;ue<6;ue++)!he&&!ye?Te[ue]=m(T.image[ue],!0,s.maxCubemapSize):Te[ue]=ye?T.image[ue].image:T.image[ue],Te[ue]=Pe(T,Te[ue]);let Ee=Te[0],Be=r.convert(T.format,T.colorSpace),$e=r.convert(T.type),at=_(T.internalFormat,Be,$e,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ae=_e.__version===void 0||Z===!0,ne=te.dataReady,Re=S(T,Ee);ge(i.TEXTURE_CUBE_MAP,T);let Ue;if(he){W&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,at,Ee.width,Ee.height);for(let ue=0;ue<6;ue++){Ue=Te[ue].mipmaps;for(let Ze=0;Ze<Ue.length;Ze++){let Ie=Ue[Ze];T.format!==Xn?Be!==null?W?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,at,Ie.width,Ie.height,0,Ie.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,0,0,Ie.width,Ie.height,Be,$e,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze,at,Ie.width,Ie.height,0,Be,$e,Ie.data)}}}else{if(Ue=T.mipmaps,W&&Ae){Ue.length>0&&Re++;let ue=We(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,at,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ye){W?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Te[ue].width,Te[ue].height,Be,$e,Te[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,at,Te[ue].width,Te[ue].height,0,Be,$e,Te[ue].data);for(let Ze=0;Ze<Ue.length;Ze++){let Lt=Ue[Ze].image[ue].image;W?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,Lt.width,Lt.height,Be,$e,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,at,Lt.width,Lt.height,0,Be,$e,Lt.data)}}else{W?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be,$e,Te[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,at,Be,$e,Te[ue]);for(let Ze=0;Ze<Ue.length;Ze++){let Ie=Ue[Ze];W?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,0,0,Be,$e,Ie.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ze+1,at,Be,$e,Ie.image[ue])}}}d(T)&&v(i.TEXTURE_CUBE_MAP),_e.__version=te.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function xe(O,T,I,Z,te,_e){let Se=r.convert(I.format,I.colorSpace),K=r.convert(I.type),Q=_(I.internalFormat,Se,K,I.normalized,I.colorSpace),he=n.get(T),ye=n.get(I);if(ye.__renderTarget=T,!he.__hasExternalTextures){let Te=Math.max(1,T.width>>_e),Ee=Math.max(1,T.height>>_e);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,_e,Q,Te,Ee,T.depth,0,Se,K,null):t.texImage2D(te,_e,Q,Te,Ee,0,Se,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,ye.__webglTexture,0,ve(T)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,ye.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(O,T,I){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){let Z=T.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,_e=y(T.stencilBuffer,te),Se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(T),_e,T.width,T.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(T),_e,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_e,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,O)}else{let Z=T.textures;for(let te=0;te<Z.length;te++){let _e=Z[te],Se=r.convert(_e.format,_e.colorSpace),K=r.convert(_e.type),Q=_(_e.internalFormat,Se,K,_e.normalized,_e.colorSpace);pe(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(T),Q,T.width,T.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(T),Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(O,T,I){let Z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(T.depthTexture);if(te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T.depthTexture);let he=r.convert(T.depthTexture.format),ye=r.convert(T.depthTexture.type),Te;T.depthTexture.format===Ri?Te=i.DEPTH_COMPONENT24:T.depthTexture.format===xs&&(Te=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,T.width,T.height,0,he,ye,null)}}else k(T.depthTexture,0);let _e=te.__webglTexture,Se=ve(T),K=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Q=T.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ri)pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,_e,0);else if(T.depthTexture.format===xs)pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(O){let T=n.get(O),I=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let Z=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Z}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)it(T.__webglFramebuffer[Z],O,Z);else{let Z=O.texture.mipmaps;Z&&Z.length>0?it(T.__webglFramebuffer[0],O,0):it(T.__webglFramebuffer,O,0)}else if(I){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ye(T.__webglDepthbuffer[Z],O,!1);else{let te=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,_e)}}else{let Z=O.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ye(T.__webglDepthbuffer,O,!1);else{let te=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(O,T,I){let Z=n.get(O);T!==void 0&&xe(Z.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&st(O)}function pt(O){let T=O.texture,I=n.get(O),Z=n.get(T);O.addEventListener("dispose",M);let te=O.textures,_e=O.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,a.memory.textures++),_e){I.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer[K]=[];for(let Q=0;Q<T.mipmaps.length;Q++)I.__webglFramebuffer[K][Q]=i.createFramebuffer()}else I.__webglFramebuffer[K]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)I.__webglFramebuffer[K]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Se)for(let K=0,Q=te.length;K<Q;K++){let he=n.get(te[K]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&pe(O)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){let Q=te[K];I.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[K]);let he=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),Te=_(Q.internalFormat,he,ye,Q.normalized,Q.colorSpace,O.isXRRenderTarget===!0),Ee=ve(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Te,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,I.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(I.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)xe(I.__webglFramebuffer[K][Q],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else xe(I.__webglFramebuffer[K],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(T)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let K=0,Q=te.length;K<Q;K++){let he=te[K],ye=n.get(he),Te=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ye.__webglTexture),ge(Te,he),xe(I.__webglFramebuffer,O,he,i.COLOR_ATTACHMENT0+K,Te,0),d(he)&&v(Te)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(K=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,Z.__webglTexture),ge(K,T),T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)xe(I.__webglFramebuffer[Q],O,T,i.COLOR_ATTACHMENT0,K,Q);else xe(I.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,K,0);d(T)&&v(K),t.unbindTexture()}O.depthBuffer&&st(O)}function ct(O){let T=O.textures;for(let I=0,Z=T.length;I<Z;I++){let te=T[I];if(d(te)){let _e=b(O),Se=n.get(te).__webglTexture;t.bindTexture(_e,Se),v(_e),t.unbindTexture()}}}let gt=[],se=[];function be(O){if(O.samples>0){if(pe(O)===!1){let T=O.textures,I=O.width,Z=O.height,te=i.COLOR_BUFFER_BIT,_e=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(O),K=T.length>1;if(K)for(let he=0;he<T.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let Q=O.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<T.length;he++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);let ye=n.get(T[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,I,Z,0,0,I,Z,te,i.NEAREST),o===!0&&(gt.length=0,se.length=0,gt.push(i.COLOR_ATTACHMENT0+he),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(gt.push(_e),se.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let he=0;he<T.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);let ye=n.get(T[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&o){let T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ve(O){return Math.min(s.maxSamples,O.samples)}function pe(O){let T=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(O){let T=a.render.frame;c.get(O)!==T&&(c.set(O,T),O.update())}function Pe(O,T){let I=O.colorSpace,Z=O.format,te=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||I!==To&&I!==Mi&&(_t.getTransfer(I)===Ct?(Z!==Xn||te!==Rn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",I)),T}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=w,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function t_(i,e){function t(n,s=Mi){let r,a=_t.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===Zu)return i.RGB;if(n===Xn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===zs)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===Zo||n===$o||n===Jo||n===Ko)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===jo||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Hl)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===uc||n===Qo||n===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dt({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new _h,d={},v=t.getContextAttributes(),b=null,_=null,y=[],S=[],R=new qe,M=null,E=null,A=new yn;A.viewport=new yt;let P=new yn;P.viewport=new yt;let L=[A,P],N=new El,w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=y[q];return $===void 0&&($=new Rr,y[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=y[q];return $===void 0&&($=new Rr,y[q]=$),$.getGripSpace()},this.getHand=function(q){let $=y[q];return $===void 0&&($=new Rr,y[q]=$),$.getHandSpace()};function U(q){let $=S.indexOf(q.inputSource);if($===-1)return;let Me=y[$];Me!==void 0&&(Me.update(q.inputSource,q.frame,u||a),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let q=0;q<y.length;q++){let $=S[q];$!==null&&(S[q]=null,y[q].disconnect($))}w=null,D=null,m.reset();for(let q in d)delete d[q];if(e.setRenderTarget(b),p=null,f=null,h=null,s=null,_=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?xs:Ri,Ne=v.stencil?zr:yi);let Ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ft(f.textureWidth,f.textureHeight,{format:Xn,type:Rn,depthTexture:new cs(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ft(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(q){for(let $=0;$<q.removed.length;$++){let Me=q.removed[$],Ne=S.indexOf(Me);Ne>=0&&(S[Ne]=null,y[Ne].disconnect(Me))}for(let $=0;$<q.added.length;$++){let Me=q.added[$],Ne=S.indexOf(Me);if(Ne===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=S.length){S.push(Me),Ne=Ye;break}else if(S[Ye]===null){S[Ye]=Me,Ne=Ye;break}if(Ne===-1)break}let xe=y[Ne];xe&&xe.connect(Me)}}let z=new H,V=new H;function G(q,$,Me){z.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(Me.matrixWorld);let Ne=z.distanceTo(V),xe=$.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,it=xe[14]/(xe[10]-1),st=xe[14]/(xe[10]+1),ot=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],ct=(xe[8]-1)/xe[0],gt=(Ye[8]+1)/Ye[0],se=it*ct,be=it*gt,ve=Ne/(-ct+gt),pe=ve*-ct;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let F=it+ve,Pe=st+ve,We=se-pe,O=be+(Ne-pe),T=ot*st/Pe*F,I=pt*st/Pe*F;q.projectionMatrix.makePerspective(We,O,T,I,F,Pe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,Me=q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),N.near=P.near=A.near=$,N.far=P.far=A.far=Me,(w!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),w=N.near,D=N.far),N.layers.mask=q.layers.mask|6,A.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let Ne=q.parent,xe=N.cameras;J(N,Ne);for(let Ye=0;Ye<xe.length;Ye++)J(xe[Ye],Ne);xe.length===2?G(N,A,P):N.projectionMatrix.copy(A.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),re(q,N,Ne)};function re(q,$,Me){Me===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ao*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(q){o=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(q){return d[q]};let Ve=null;function ge(q,$){if(c=$.getViewerPose(u||a),g=$,c!==null){let Me=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ne=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,Ne=!0);for(let st=0;st<Me.length;st++){let ot=Me[st],pt=null;if(p!==null)pt=p.getViewport(ot);else{let gt=h.getViewSubImage(f,ot);pt=gt.viewport,st===0&&(e.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(_))}let ct=L[st];ct===void 0&&(ct=new yn,ct.layers.enable(st),ct.viewport=new yt,L[st]=ct),ct.matrix.fromArray(ot.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ot.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(N.matrix.copy(ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ne===!0&&N.cameras.push(ct)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let st=h.getDepthInformation(Me[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let st=0;st<Me.length;st++){let ot=Me[st].camera;if(ot){let pt=d[ot];pt||(pt=new Fo,d[ot]=pt);let ct=h.getCameraImage(ot);pt.sourceTexture=ct}}}}for(let Me=0;Me<y.length;Me++){let Ne=S[Me],xe=y[Me];Ne!==null&&xe!==void 0&&xe.update(Ne,$,u||a)}Ve&&Ve(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Oe=new Vd;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(q){Ve=q},this.dispose=function(){}}},s_=new Je,Zd=new ut;Zd.set(-1,0,0,0,1,0,0,0,1);function r_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ku(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,b,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,b):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),b=v.envMap,_=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,y){let S=y.program;n.uniformBlockBinding(_,S)}function u(_,y){let S=s[_.id];S===void 0&&(m(_),S=c(_),s[_.id]=S,_.addEventListener("dispose",v));let R=y.program;n.updateUBOMapping(_,R);let M=e.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function c(_){let y=h();_.__bindingPointIndex=y;let S=i.createBuffer(),R=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=S.length;M<E;M++){let A=S[M];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)p(A[P],M,P,R);else p(A,M,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,S,R){if(x(_,y,S,R)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let L=E[P],N=d(L);g(L,_.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,S){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,S)}function x(_,y,S,R){let M=_.value,E=y+"_"+S;if(R[E]===void 0)return typeof M=="number"||typeof M=="boolean"?R[E]=M:ArrayBuffer.isView(M)?R[E]=M.slice():R[E]=M.clone(),!0;{let A=R[E];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function m(_){let y=_.uniforms,S=0,R=16;for(let E=0,A=y.length;E<A;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let L=0,N=P.length;L<N;L++){let w=P[L],D=Array.isArray(w.value)?w.value:[w.value];for(let U=0,B=D.length;U<B;U++){let k=D[U],z=d(k),V=S%R,G=V%z.boundary,J=V+G;S+=G,J!==0&&R-J<z.storage&&(S+=R-J),w.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=z.storage}}}let M=S%R;return M>0&&(S+=R-M),_.__size=S,_.__cache={},this}function d(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:u,dispose:b}}var a_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function l_(){return Ii===null&&(Ii=new ls(a_,16,16,vs,on),Ii.name="DFG_LUT",Ii.minFilter=kt,Ii.magFilter=kt,Ii.wrapS=Ai,Ii.wrapT=Ai,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var _c=class{constructor(e={}){let{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([Ul,Nl,Dl]),d=new Set([Rn,yi,Br,zr,Il,Ll]),v=new Uint32Array(4),b=new Int32Array(4),_=new H,y=null,S=null,R=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,N=null,w=null,D=null;this._outputColorSpace=Jt;let U=0,B=0,k=null,z=-1,V=null,G=new yt,J=new yt,re=null,Ve=new fe(0),ge=0,Oe=t.width,q=t.height,$=1,Me=null,Ne=null,xe=new yt(0,0,Oe,q),Ye=new yt(0,0,Oe,q),it=!1,st=new Pr,ot=!1,pt=!1,ct=new Je,gt=new H,se=new yt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function pe(){return k===null?$:1}let F=n;function Pe(C,X){return t.getContext(C,X)}let We,O,T,I,Z,te,_e,Se,K,Q,he,ye,Te,Ee,Be,$e,at,W,Ae,ne,Re,Ue,ue;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",On,!1),F===null){let X="webgl2";if(F=Pe(X,C),F===null)throw Pe(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(C){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),lt("WebGLRenderer: "+C.message),C}function Ze(){We=new mv(F),We.init(),Re=new t_(F,We),O=new rv(F,We,e,Re),T=new Q1(F,We),O.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),N=F.createFramebuffer(),w=F.createFramebuffer(),D=F.createFramebuffer(),I=new vv(F),Z=new z1,te=new e_(F,We,T,Z,O,Re,I),_e=new pv(A),Se=new ym(F),Ue=new iv(F,Se),K=new gv(F,Se,I,Ue),Q=new yv(F,K,Se,Ue,I),W=new _v(F,O,te),Be=new ov(Z),he=new B1(A,_e,We,O,Ue,Be),ye=new r_(A,Z),Te=new H1,Ee=new Y1(We),at=new nv(A,_e,T,Q,g,o),$e=new j1(A,Q,O),ue=new o_(F,I,O,T),Ae=new sv(F,We,I),ne=new xv(F,We,I),I.programs=he.programs,A.capabilities=O,A.extensions=We,A.properties=Z,A.renderLists=Te,A.shadowMap=$e,A.state=T,A.info=I}x!==Rn&&(E=new bv(x,t.width,t.height,l,s,r));let Ie=new yh(A,F);this.xr=Ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(Oe,q,!1))},this.getSize=function(C){return C.set(Oe,q)},this.setSize=function(C,X,ee=!0){if(Ie.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=C,q=X,t.width=Math.floor(C*$),t.height=Math.floor(X*$),ee===!0&&(t.style.width=C+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Oe*$,q*$).floor()},this.setDrawingBufferSize=function(C,X,ee){Oe=C,q=X,$=ee,t.width=Math.floor(C*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(x===Rn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,X,ee,j){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,X,ee,j),T.viewport(G.copy(xe).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(Ye)},this.setScissor=function(C,X,ee,j){C.isVector4?Ye.set(C.x,C.y,C.z,C.w):Ye.set(C,X,ee,j),T.scissor(J.copy(Ye).multiplyScalar($).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){T.setScissorTest(it=C)},this.setOpaqueSort=function(C){Me=C},this.setTransparentSort=function(C){Ne=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ee=!0){let j=0;if(C){let Y=!1;if(k!==null){let Fe=k.texture.format;Y=m.has(Fe)}if(Y){let Fe=k.texture.type,ke=d.has(Fe),Le=at.getClearColor(),Ge=at.getClearAlpha(),Ce=Le.r,De=Le.g,et=Le.b;ke?(v[0]=Ce,v[1]=De,v[2]=et,v[3]=Ge,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=Ce,b[1]=De,b[2]=et,b[3]=Ge,F.clearBufferiv(F.COLOR,0,b))}else j|=F.COLOR_BUFFER_BIT}X&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),at.dispose(),Te.dispose(),Ee.dispose(),Z.dispose(),_e.dispose(),Q.dispose(),Ue.dispose(),ue.dispose(),he.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ao),Ie.removeEventListener("sessionend",er),Ei.stop()};function Lt(C){C.preventDefault(),Ju("WebGLRenderer: Context Lost."),P=!0}function bt(){Ju("WebGLRenderer: Context Restored."),P=!1;let C=I.autoReset,X=$e.enabled,ee=$e.autoUpdate,j=$e.needsUpdate,Y=$e.type;Ze(),I.autoReset=C,$e.enabled=X,$e.autoUpdate=ee,$e.needsUpdate=j,$e.type=Y}function On(C){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){let X=C.target;X.removeEventListener("dispose",ti),oo(X)}function oo(C){En(C),Z.remove(C)}function En(C){let X=Z.get(C).programs;X!==void 0&&(X.forEach(function(ee){he.releaseProgram(ee)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,j,Y,Fe){X===null&&(X=be);let ke=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=Es(C,X,ee,j,Y);T.setMaterial(j,ke);let Ge=ee.index,Ce=1;if(j.wireframe===!0){if(Ge=K.getWireframeAttribute(ee),Ge===void 0)return;Ce=2}let De=ee.drawRange,et=ee.attributes.position,me=De.start*Ce,wt=(De.start+De.count)*Ce;Fe!==null&&(me=Math.max(me,Fe.start*Ce),wt=Math.min(wt,(Fe.start+Fe.count)*Ce)),Ge!==null?(me=Math.max(me,0),wt=Math.min(wt,Ge.count)):et!=null&&(me=Math.max(me,0),wt=Math.min(wt,et.count));let $t=wt-me;if($t<0||$t===1/0)return;Ue.setup(Y,j,Le,ee,Ge);let Ut,Rt=Ae;if(Ge!==null&&(Ut=Se.get(Ge),Rt=ne,Rt.setIndex(Ut)),Y.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*pe()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(Y.isLine){let oe=j.linewidth;oe===void 0&&(oe=1),T.setLineWidth(oe*pe()),Y.isLineSegments?Rt.setMode(F.LINES):Y.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else Y.isPoints?Rt.setMode(F.POINTS):Y.isSprite&&Rt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let oe=Y._multiDrawStarts,de=Y._multiDrawCounts,He=Y._multiDrawCount,Ke=Ge?Se.get(Ge).bytesPerElement:1,mt=Z.get(j).currentProgram.getUniforms();for(let St=0;St<He;St++)mt.setValue(F,"_gl_DrawID",St),Rt.render(oe[St]/Ke,de[St])}else if(Y.isInstancedMesh)Rt.renderInstances(me,$t,Y.count);else if(ee.isInstancedBufferGeometry){let oe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,de=Math.min(ee.instanceCount,oe);Rt.renderInstances(me,$t,de)}else Rt.render(me,$t)};function Qt(C,X,ee,j){L!==null&&C.isNodeMaterial&&L.setObject(j,C),ot===!0&&Be.setState(C,ee,!1),C.transparent===!0&&C.side===vn&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,Ts(C,X,j),C.side=ms,C.needsUpdate=!0,Ts(C,X,j),C.side=vn):Ts(C,X,j)}this.compile=function(C,X,ee=null){ee===null&&(ee=C),L!==null&&L.renderStart(C,X,ee),S=Ee.get(ee),S.init(X),M.push(S),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),C!==ee&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),pt=this.localClippingEnabled,ot=Be.init(this.clippingPlanes,pt),ot===!0&&Be.setGlobalState(this.clippingPlanes,X),L!==null&&$e.render(S.state.shadowsArray,ee,X);let j=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Fe=Y.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){let Le=Fe[ke];Qt(Le,ee,X,Y),j.add(Le)}else Qt(Fe,ee,X,Y),j.add(Fe)}),S=M.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(C,X,ee=null){let j=this.compile(C,X,ee);return new Promise(Y=>{function Fe(){if(j.forEach(function(ke){let Ge=Z.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&j.delete(ke)}),j.size===0){Y(C);return}setTimeout(Fe,10)}We.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Qs=null;function ga(C){Qs&&Qs(C)}function ao(){Ei.stop()}function er(){Ei.start()}let Ei=new Vd;Ei.setAnimationLoop(ga),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){Qs=C,Ie.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},Ie.addEventListener("sessionstart",ao),Ie.addEventListener("sessionend",er),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(C,X);let ee=Ie.enabled===!0&&Ie.isPresenting===!0,j=E!==null&&(k===null||ee)&&E.begin(A,k);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(X),X=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,k),S=Ee.get(C,M.length),S.init(X),S.state.textureUnits=te.getTextureUnits(),M.push(S),ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),st.setFromProjectionMatrix(ct,xi,X.reversedDepth),pt=this.localClippingEnabled,ot=Be.init(this.clippingPlanes,pt),y=Te.get(C,R.length),y.init(),R.push(y),Ie.enabled===!0&&Ie.isPresenting===!0){let ke=A.xr.getDepthSensingMesh();ke!==null&&tr(ke,X,-1/0,A.sortObjects)}tr(C,X,0,A.sortObjects),y.finish(),L!==null&&L.updateLights(S.state.lightsArray),A.sortObjects===!0&&y.sort(Me,Ne),ve=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ve&&at.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Be.beginShadows();let Y=S.state.shadowsArray;if($e.render(Y,C,X),ot===!0&&Be.endShadows(),(j&&E.hasRenderPass())===!1){let ke=y.opaque,Le=y.transmissive;if(S.setupLights(),X.isArrayCamera){let Ge=X.cameras;if(Le.length>0)for(let Ce=0,De=Ge.length;Ce<De;Ce++){let et=Ge[Ce];Bt(ke,Le,C,et)}ve&&at.render(C);for(let Ce=0,De=Ge.length;Ce<De;Ce++){let et=Ge[Ce];lo(y,C,et,et.viewport)}}else Le.length>0&&Bt(ke,Le,C,X),ve&&at.render(C),lo(y,C,X)}k!==null&&B===0&&(te.updateMultisampleRenderTarget(k),te.updateRenderTargetMipmap(k)),j&&E.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),Ue.resetDefaultState(),z=-1,V=null,M.pop(),M.length>0?(S=M[M.length-1],te.setTextureUnits(S.state.textureUnits),ot===!0&&Be.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,L!==null&&L.renderEnd()};function tr(C,X,ee,j){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(st)){j&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let ke=Q.update(C),Le=C.material;Le.visible&&y.push(C,ke,Le,ee,se.z,null,X)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(st))){let ke=Q.update(C),Le=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),se.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),se.copy(ke.boundingSphere.center)),se.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Le)){let Ge=ke.groups;for(let Ce=0,De=Ge.length;Ce<De;Ce++){let et=Ge[Ce],me=Le[et.materialIndex];me&&me.visible&&y.push(C,ke,me,ee,se.z,et,X)}}else Le.visible&&y.push(C,ke,Le,ee,se.z,null,X)}}let Fe=C.children;for(let ke=0,Le=Fe.length;ke<Le;ke++)tr(Fe[ke],X,ee,j)}function lo(C,X,ee,j){let{opaque:Y,transmissive:Fe,transparent:ke}=C;S.setupLightsView(ee),ot===!0&&Be.setGlobalState(A.clippingPlanes,ee),j&&T.viewport(G.copy(j)),Y.length>0&&es(Y,X,ee),Fe.length>0&&es(Fe,X,ee),ke.length>0&&es(ke,X,ee),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Bt(C,X,ee,j){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let me=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new Ft(1,1,{generateMipmaps:!0,type:me?on:Rn,minFilter:Wn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Fe=S.state.transmissionRenderTarget[j.id],ke=j.viewport||G;Fe.setSize(ke.z*A.transmissionResolutionScale,ke.w*A.transmissionResolutionScale);let Le=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Ce=A.getActiveMipmapLevel();A.setRenderTarget(Fe),A.getClearColor(Ve),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),ve&&at.render(ee);let De=A.toneMapping;A.toneMapping=_i;let et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),ot===!0&&Be.setGlobalState(A.clippingPlanes,j),es(C,ee,j),te.updateMultisampleRenderTarget(Fe),te.updateRenderTargetMipmap(Fe),We.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let wt=0,$t=X.length;wt<$t;wt++){let Ut=X[wt],{object:Rt,geometry:oe,material:de,group:He}=Ut;if(de.side===vn&&Rt.layers.test(j.layers)){let Ke=de.side;de.side=Mn,de.needsUpdate=!0,co(Rt,ee,j,oe,de,He),de.side=Ke,de.needsUpdate=!0,me=!0}}me===!0&&(te.updateMultisampleRenderTarget(Fe),te.updateRenderTargetMipmap(Fe))}A.setRenderTarget(Le,Ge,Ce),A.setClearColor(Ve,ge),et!==void 0&&(j.viewport=et),A.toneMapping=De}function es(C,X,ee){let j=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Fe=C.length;Y<Fe;Y++){let ke=C[Y],{object:Le,geometry:Ge,group:Ce}=ke,De=ke.material;De.allowOverride===!0&&j!==null&&(De=j),Le.layers.test(ee.layers)&&co(Le,X,ee,Ge,De,Ce)}}function co(C,X,ee,j,Y,Fe){L!==null&&Y.isNodeMaterial&&L.setObject(C,Y),C.onBeforeRender(A,X,ee,j,Y,Fe),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(A,X,ee,j,C,Fe),Y.transparent===!0&&Y.side===vn&&Y.forceSinglePass===!1?(Y.side=Mn,Y.needsUpdate=!0,A.renderBufferDirect(ee,X,j,Y,C,Fe),Y.side=ms,Y.needsUpdate=!0,A.renderBufferDirect(ee,X,j,Y,C,Fe),Y.side=vn):A.renderBufferDirect(ee,X,j,Y,C,Fe),C.onAfterRender(A,X,ee,j,Y,Fe)}function Ts(C,X,ee){X.isScene!==!0&&(X=be);let j=Z.get(C),Y=S.state.lights,Fe=S.state.shadowsArray,ke=Y.state.version,Le=he.getParameters(C,Y.state,Fe,X,ee,S.state.lightProbeGridArray),Ge=he.getProgramCacheKey(Le),Ce=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,j.fog=X.fog;let De=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=_e.get(C.envMap||j.environment,De),j.envMapRotation=j.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",ti),Ce=new Map,j.programs=Ce);let et=Ce.get(Ge);if(et!==void 0){if(j.currentProgram===et&&j.lightsStateVersion===ke)return xa(C,Le),et}else Le.uniforms=he.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,ee,Le),C.onBeforeCompile(Le,A),et=he.acquireProgram(Le,Ge),Ce.set(Ge,et),j.uniforms=Le.uniforms;let me=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(me.clippingPlanes=Be.uniform),xa(C,Le),j.needsLights=ws(C),j.lightsStateVersion=ke,j.needsLights&&(me.ambientLightColor.value=Y.state.ambient,me.lightProbe.value=Y.state.probe,me.sunLights.value=Y.state.sun,me.sunLightShadows.value=Y.state.sunShadow,me.directionalLights.value=Y.state.directional,me.directionalLightShadows.value=Y.state.directionalShadow,me.spotLights.value=Y.state.spot,me.spotLightShadows.value=Y.state.spotShadow,me.rectAreaLights.value=Y.state.rectArea,me.ltc_1.value=Y.state.rectAreaLTC1,me.ltc_2.value=Y.state.rectAreaLTC2,me.pointLights.value=Y.state.point,me.pointLightShadows.value=Y.state.pointShadow,me.hemisphereLights.value=Y.state.hemi,me.sunShadowMatrix.value=Y.state.sunShadowMatrix,me.sunShadowCascade.value=Y.state.sunShadowCascade,me.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,me.spotLightMatrix.value=Y.state.spotLightMatrix,me.spotLightMap.value=Y.state.spotLightMap,me.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.lightProbeGrid=S.state.lightProbeGridArray.length>0,j.currentProgram=et,j.uniformsList=null,et}function uo(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=Vr.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function xa(C,X){let ee=Z.get(C);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Wc(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let ee=0,j=C.length;ee<j;ee++){let Y=C[ee];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function Es(C,X,ee,j,Y){X.isScene!==!0&&(X=be),te.resetTextureUnits();let Fe=X.fog,ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?X.environment:null,Le=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:_t.workingColorSpace,Ge=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ce=_e.get(j.envMap||ke,Ge),De=j.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,et=!!ee.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),me=!!ee.morphAttributes.position,wt=!!ee.morphAttributes.normal,$t=!!ee.morphAttributes.color,Ut=_i;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let Rt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,oe=Rt!==void 0?Rt.length:0,de=Z.get(j),He=S.state.lights;if(ot===!0&&(pt===!0||C!==V)){let Dt=C===V&&j.id===z;Be.setState(j,C,Dt)}let Ke=!1;j.version===de.__version?(de.needsLights&&de.lightsStateVersion!==He.state.version||de.outputColorSpace!==Le||Y.isBatchedMesh&&de.batching===!1||!Y.isBatchedMesh&&de.batching===!0||Y.isBatchedMesh&&de.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&de.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&de.instancing===!1||!Y.isInstancedMesh&&de.instancing===!0||Y.isSkinnedMesh&&de.skinning===!1||!Y.isSkinnedMesh&&de.skinning===!0||Y.isInstancedMesh&&de.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&de.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&de.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&de.instancingMorph===!1&&Y.morphTexture!==null||de.envMap!==Ce||j.fog===!0&&de.fog!==Fe||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Be.numPlanes||de.numIntersection!==Be.numIntersection)||de.vertexAlphas!==De||de.vertexTangents!==et||de.morphTargets!==me||de.morphNormals!==wt||de.morphColors!==$t||de.toneMapping!==Ut||de.morphTargetsCount!==oe||!!de.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,de.__version=j.version);let mt=de.currentProgram;Ke===!0&&(mt=Ts(j,X,Y),L&&j.isNodeMaterial&&L.onUpdateProgram(j,mt,de));let St=!1,qn=!1,hi=!1,Tt=mt.getUniforms(),vt=de.uniforms;if(T.useProgram(mt.program)&&(St=!0,qn=!0,hi=!0),j.id!==z&&(z=j.id,qn=!0),de.needsLights){let Dt=Wc(S.state.lightProbeGridArray,Y);de.lightProbeGrid!==Dt&&(de.lightProbeGrid=Dt,qn=!0)}if(St||V!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Tt.setValue(F,"projectionMatrix",C.projectionMatrix),Tt.setValue(F,"viewMatrix",C.matrixWorldInverse);let fi=Tt.map.cameraPosition;fi!==void 0&&fi.setValue(F,gt.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&Tt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,qn=!0,hi=!0)}if(de.needsLights&&(He.state.sunShadowMap.length>0&&Tt.setValue(F,"sunShadowMap",He.state.sunShadowMap,te),He.state.directionalShadowMap.length>0&&Tt.setValue(F,"directionalShadowMap",He.state.directionalShadowMap,te),He.state.spotShadowMap.length>0&&Tt.setValue(F,"spotShadowMap",He.state.spotShadowMap,te),He.state.pointShadowMap.length>0&&Tt.setValue(F,"pointShadowMap",He.state.pointShadowMap,te)),Y.isSkinnedMesh){Tt.setOptional(F,Y,"bindMatrix"),Tt.setOptional(F,Y,"bindMatrixInverse");let Dt=Y.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Tt.setValue(F,"boneTexture",Dt.boneTexture,te))}Y.isBatchedMesh&&(Tt.setOptional(F,Y,"batchingTexture"),Tt.setValue(F,"batchingTexture",Y._matricesTexture,te),Tt.setOptional(F,Y,"batchingIdTexture"),Tt.setValue(F,"batchingIdTexture",Y._indirectTexture,te),Tt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Tt.setValue(F,"batchingColorTexture",Y._colorsTexture,te));let dn=ee.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&W.update(Y,ee,mt),(qn||de.receiveShadow!==Y.receiveShadow)&&(de.receiveShadow=Y.receiveShadow,Tt.setValue(F,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&X.environment!==null&&(vt.envMapIntensity.value=X.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=l_()),qn){if(Tt.setValue(F,"toneMappingExposure",A.toneMappingExposure),de.needsLights&&va(vt,hi),Fe&&j.fog===!0&&ye.refreshFogUniforms(vt,Fe),ye.refreshMaterialUniforms(vt,j,$,q,S.state.transmissionRenderTarget[C.id]),de.needsLights&&de.lightProbeGrid){let Dt=de.lightProbeGrid;vt.probesSH.value=Dt.texture,vt.probesMin.value.copy(Dt.boundingBox.min),vt.probesMax.value.copy(Dt.boundingBox.max),vt.probesResolution.value.copy(Dt.resolution)}Vr.upload(F,uo(de),vt,te)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vr.upload(F,uo(de),vt,te),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(F,"center",Y.center),Tt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Tt.setValue(F,"normalMatrix",Y.normalMatrix),Tt.setValue(F,"modelMatrix",Y.matrixWorld),j.uniformsGroups!==void 0){let Dt=j.uniformsGroups;for(let fi=0,pn=Dt.length;fi<pn;fi++){let Bn=Dt[fi];ue.update(Bn,mt),ue.bind(Bn,mt)}}return mt}function va(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ws(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,X,ee){let j=Z.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=X,Z.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ee,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){let ee=Z.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ee=0){k=C,U=X,B=ee;let j=null,Y=!1,Fe=!1;if(C){let Le=Z.get(C);if(Le.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,Le.__webglFramebuffer),G.copy(C.viewport),J.copy(C.scissor),re=C.scissorTest,T.viewport(G),T.scissor(J),T.setScissorTest(re),z=-1;return}else if(Le.__webglFramebuffer===void 0)te.setupRenderTarget(C);else if(Le.__hasExternalTextures)te.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let De=C.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&Z.has(De)&&(C.width!==De.image.width||C.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(C)}}let Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Fe=!0);let Ce=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ce[X])?j=Ce[X][ee]:j=Ce[X],Y=!0):C.samples>0&&te.useMultisampledRTT(C)===!1?j=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?j=Ce[ee]:j=Ce,G.copy(C.viewport),J.copy(C.scissor),re=C.scissorTest}else G.copy(xe).multiplyScalar($).floor(),J.copy(Ye).multiplyScalar($).floor(),re=it;if(ee!==0&&(j=N),T.bindFramebuffer(F.FRAMEBUFFER,j)&&T.drawBuffers(C,j),T.viewport(G),T.scissor(J),T.setScissorTest(re),Y){let Le=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ee)}else if(Fe){let Le=X;for(let Ge=0;Ge<C.textures.length;Ge++){let Ce=Z.get(C.textures[Ge]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ge,Ce.__webglTexture,ee,Le)}}else if(C!==null&&ee!==0){let Le=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,ee)}z=-1};function ts(C){let X=Z.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=O.textureFormatReadable(C.format),X.__typeReadable=O.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,ee,j,Y,Fe,ke,Le=0){if(!(C&&C.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){T.bindFramebuffer(F.FRAMEBUFFER,Ge);try{let Ce=C.textures[Le],De=Ce.format,et=Ce.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let me=ts(Ce);if(me.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(me.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-j&&ee>=0&&ee<=C.height-Y&&F.readPixels(X,ee,j,Y,Re.convert(De),Re.convert(et),Fe)}finally{let Ce=k!==null?Z.get(k).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,X,ee,j,Y,Fe,ke,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(X>=0&&X<=C.width-j&&ee>=0&&ee<=C.height-Y){T.bindFramebuffer(F.FRAMEBUFFER,Ge);let Ce=C.textures[Le],De=Ce.format,et=Ce.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let me=ts(Ce);if(me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.bufferData(F.PIXEL_PACK_BUFFER,Fe.byteLength,F.STREAM_READ),F.readPixels(X,ee,j,Y,Re.convert(De),Re.convert(et),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $t=k!==null?Z.get(k).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,$t);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gd(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Fe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(wt),F.deleteSync(Ut),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ee=0){let j=Math.pow(2,-ee),Y=Math.floor(C.image.width*j),Fe=Math.floor(C.image.height*j),ke=X!==null?X.x:0,Le=X!==null?X.y:0;te.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,ke,Le,Y,Fe),T.unbindTexture()},this.copyTextureToTexture=function(C,X,ee=null,j=null,Y=0,Fe=0){let ke,Le,Ge,Ce,De,et,me,wt,$t,Ut=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(ee!==null)ke=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,Ce=ee.min.x,De=ee.min.y,et=ee.isBox3?ee.min.z:0;else{let vt=Math.pow(2,-Y);ke=Math.floor(Ut.width*vt),Le=Math.floor(Ut.height*vt),C.isDataArrayTexture?Ge=Ut.depth:C.isData3DTexture?Ge=Math.floor(Ut.depth*vt):Ge=1,Ce=0,De=0,et=0}j!==null?(me=j.x,wt=j.y,$t=j.z):(me=0,wt=0,$t=0);let Rt=Re.convert(X.format),oe=Re.convert(X.type),de;X.isData3DTexture?(te.setTexture3D(X,0),de=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(te.setTexture2DArray(X,0),de=F.TEXTURE_2D_ARRAY):(te.setTexture2D(X,0),de=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let He=T.getParameter(F.UNPACK_ROW_LENGTH),Ke=T.getParameter(F.UNPACK_IMAGE_HEIGHT),mt=T.getParameter(F.UNPACK_SKIP_PIXELS),St=T.getParameter(F.UNPACK_SKIP_ROWS),qn=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),T.pixelStorei(F.UNPACK_SKIP_ROWS,De),T.pixelStorei(F.UNPACK_SKIP_IMAGES,et);let hi=C.isDataArrayTexture||C.isData3DTexture,Tt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){let vt=Z.get(C),dn=Z.get(X),Dt=Z.get(vt.__renderTarget),fi=Z.get(dn.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,Dt.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pn=0;pn<Ge;pn++)hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,Y,et+pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(X).__webglTexture,Fe,$t+pn)),F.blitFramebuffer(Ce,De,ke,Le,me,wt,ke,Le,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Z.has(C)){let vt=Z.get(C),dn=Z.get(X);T.bindFramebuffer(F.READ_FRAMEBUFFER,w),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let Dt=0;Dt<Ge;Dt++)hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,Y,et+Dt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,Y),Tt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Fe,$t+Dt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Fe),Y!==0?F.blitFramebuffer(Ce,De,ke,Le,me,wt,ke,Le,F.COLOR_BUFFER_BIT,F.NEAREST):Tt?F.copyTexSubImage3D(de,Fe,me,wt,$t+Dt,Ce,De,ke,Le):F.copyTexSubImage2D(de,Fe,me,wt,Ce,De,ke,Le);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(de,Fe,me,wt,$t,ke,Le,Ge,Rt,oe,Ut.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(de,Fe,me,wt,$t,ke,Le,Ge,Rt,Ut.data):F.texSubImage3D(de,Fe,me,wt,$t,ke,Le,Ge,Rt,oe,Ut):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Fe,me,wt,ke,Le,Rt,oe,Ut.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Fe,me,wt,Ut.width,Ut.height,Rt,Ut.data):F.texSubImage2D(F.TEXTURE_2D,Fe,me,wt,ke,Le,Rt,oe,Ut);T.pixelStorei(F.UNPACK_ROW_LENGTH,He),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ke),T.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),T.pixelStorei(F.UNPACK_SKIP_ROWS,St),T.pixelStorei(F.UNPACK_SKIP_IMAGES,qn),Fe===0&&X.generateMipmaps&&F.generateMipmap(de),T.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&te.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?te.setTextureCube(C,0):C.isData3DTexture?te.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?te.setTexture2DArray(C,0):te.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,k=null,T.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Ot=(i,e,t)=>i<e?e:i>t?t:i,Pt=(i,e,t)=>i+(e-i)*t,Sc=i=>i*i*(3-2*i),It=(i,e,t)=>{let n=Ot((t-i)/(e-i),0,1);return n*n*(3-2*n)},$d=1337;function Jd(i){$d=i|0}function c_(i){return i=i^$d|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Kn=(i,e)=>c_(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Jn(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Pt(Kn(t,e),Kn(t+1,e),s)}var Tc=(i,e=0)=>Jn(i,e)*.55+Jn(i*2.03,e+7)*.3+Jn(i*4.1,e+13)*.15;function Pn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var bc=new fe,ie=i=>(bc.set(i),[bc.r,bc.g,bc.b]),Kd=(i,e,t)=>[Pt(i[0],e[0],t),Pt(i[1],e[1],t),Pt(i[2],e[2],t)],In=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ni=["city","sakura","coast","country","mountain","snow"],sa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Mh=1500,jd=260,_s=0,bh=0;function e0(i){bh=Math.max(0,Ni.indexOf(i))}function Wr(i){let e=Math.floor(i/Mh),t=i-e*Mh,n=Sc(Ot((t-(Mh-jd))/jd,0,1)),s=Ni.length;return{a:Ni[((e+bh)%s+s)%s],b:Ni[((e+bh+1)%s+s)%s],t:n}}function Nt(i){let e=Wr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Kt=i=>{let e=Wr(i);return e.t<.5?e.a:e.b};function Sn(i,e){let t=Wr(i);return Pt(sa[t.a][e],sa[t.b][e],t.t)}var Gs=650,Ws=375,Xr=i=>i*Gs+Ws;function ra(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Nt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Sh={x:new Map,r:new Map,t:new Map};function Th(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function qr(i){let e=Math.round((i-Ws)/Gs);return Th(Sh.x,e,()=>{let t=Xr(e);return ra(t)?{k:e,s:t}:null})}function u_(i){let e=qr(i);return e?1-It(8,45,Math.abs(i-e.s)):0}var Xs=1150,Yr=820,oa=4.6,Eh=i=>i*Xs+Yr;function wh(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Nt(i+t);if(n.country+n.sakura<.9)return!1}let e=qr(i);return!(e&&Math.abs(e.s-i)<170)}function Ui(i){let e=Math.round((i-Yr)/Xs);return Th(Sh.r,e,()=>{let t=Eh(e);return wh(t)?{k:e,s:t}:null})}function h_(i){let e=Ui(i);return e?1-It(30,70,Math.abs(i-e.s)):0}function f_(i){let e=-oa;return i<11?e-1.3:i<16?Pt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Pt(e+.7,.35,(i-20)/5.5):.35}var t0=1050,n0=525,en=85,jt=125,d_=24,p_=i=>i*t0+n0;function m_(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Nt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function li(i){let e=Math.round((i-n0)/t0);return Th(Sh.t,e,()=>{let t=p_(e);return m_(t)?{k:e,s:t}:null})}function g_(i){let e=li(i);return e?1-It(en+20,jt+25,Math.abs(i-e.s)):0}var Ec=0,Ac=(i,e)=>{let t=i/jt;return d_*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Di=2,wc=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Jn(e/300,11)-.5)*2+(Jn(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Sn(e,"curv")*(1-Math.max(u_(e),h_(e),g_(e)))}elevRaw(e){return Sn(e,"base")+Sn(e,"hill")*(Tc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=qr(e);if(n){let a=1-It(8,45,Math.abs(e-n.s));a>0&&(t=Pt(t,this.elevRaw(n.s),a))}let s=Ui(e);if(s){let a=1-It(30,70,Math.abs(e-s.s));a>0&&(t=Pt(t,this.elevRaw(s.s),a))}let r=li(e);if(r){let a=1-It(en+10,jt+45,Math.abs(e-r.s));a>0&&(t=Pt(t,this.elevRaw(r.s),a))}return t}ensure(e){for(;(this.X.length-1)*Di<e+Di;){let t=this.X.length-1,n=t*Di,s=this.curv(n+Di/2)*Di,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Di),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Di),this.H.push(r+s),this.Y.push(this.elev(n+Di))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Di);let n=e/Di,s=Math.floor(n),r=n-s;t.x=Pt(this.X[s],this.X[s+1],r),t.z=Pt(this.Z[s],this.Z[s+1],r),t.y=Pt(this.Y[s],this.Y[s+1],r),t.h=Pt(this.H[s],this.H[s+1],r);let a=Math.sin(t.h),l=Math.cos(t.h);return t.fx=a,t.fz=l,t.rx=-l,t.rz=a,t}};function Qd(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+It(45,190,r)*16*(.45+.55*Jn(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+It(s+1.5,80,r)*24*(.5+.5*Jn(e/170,5))+It(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Pt(1.25,-1.6,a/26):Pt(-1.6,-7,Ot((a-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Jn(e/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+It(105,230,r)*95*(.6+.4*Jn(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Pt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Jn(e/40+(t>0?3:0),71)-.5):.55+It(125,210,r)*40*(.45+.55*Jn(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+It(135,215,r)*36*(.4+.6*Jn(e/210+(t>0?9:0),7))}}function Zr(i,e,t,n){let s=Wr(i),r=Qd(s.a,i,e,t,n),a=s.t>0?Pt(r,Qd(s.b,i,e,t,n),s.t):r;Ec=0;let l=Ui(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let x=g<29?f_(g):Pt(.35,a,It(29,36,g));return Math.abs(e)<n+3.2&&(x=Math.min(x,-.08)),x}let o=li(i);if(!o)return a;let u=i-o.s,c=Math.abs(u);if(c>=2*jt)return a;let h=Math.abs(e),f=Ac(u,e),p;return c<en?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),Ec=Math.max(0,p-a),p}function i0(i){let e=Ui(i);return e?1-It(27,34,Math.abs(i-e.s)):0}var aa=new H,Rc=new H,x_=[1,1,1],hn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Je,this.nm=new ut,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(t*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(t*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}if(this.hasAO){let a=new Uint8Array(t);this.A&&a.set(this.A.subarray(0,n)),this.A=a}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,a,l,o,u){this.n>=this.cap&&this.grow(this.n+1);let c=this.e,h=this.ne,f=this.n*3,p=this.P,g=this.bb,x=c[0]*e+c[4]*t+c[8]*n+c[12],m=c[1]*e+c[5]*t+c[9]*n+c[13],d=c[2]*e+c[6]*t+c[10]*n+c[14];p[f]=x,p[f+1]=m,p[f+2]=d,x<g[0]&&(g[0]=x),m<g[1]&&(g[1]=m),d<g[2]&&(g[2]=d),x>g[3]&&(g[3]=x),m>g[4]&&(g[4]=m),d>g[5]&&(g[5]=d);let v=h[0]*s+h[3]*r+h[6]*a,b=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,y=127/(Math.sqrt(v*v+b*b+_*_)||1);if(this.N[f]=Math.round(v*y),this.N[f+1]=Math.round(b*y),this.N[f+2]=Math.round(_*y),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=o),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(m)),this.hasColor){let S=u||x_,R=this.Cl;R[f]=S[0]>=1?255:S[0]<=0?0:S[0]*255+.5,R[f+1]=S[1]>=1?255:S[1]<=0?0:S[1]*255+.5,R[f+2]=S[2]>=1?255:S[2]<=0?0:S[2]*255+.5}this.n++}quad(e,t,n,s,r,a){aa.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Rc.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Rc.lengthSq()<1e-12&&Rc.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),aa.cross(Rc).normalize();let l=aa.x,o=aa.y,u=aa.z,c=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(t[0],t[1],t[2],l,o,u,h,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(s[0],s[1],s[2],l,o,u,c,p,r)}box(e,t,n,s,r,a,l,o=null,u=null){let c=o||{},h=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],h.nz||l,c.nz),this.quad([e,t,a],[s,t,a],[s,r,a],[e,r,a],h.pz||l,c.pz),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],h.nx||l,c.nx),this.quad([s,t,a],[s,t,n],[s,r,n],[s,r,a],h.px||l,c.px),this.quad([e,r,a],[s,r,a],[s,r,n],[e,r,n],h.py||l,c.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,a],[e,t,a],h.ny||l,c.ny)}cyl(e,t,n,s,r,a,l,o,u=!0){let c=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[e+g*s,t,n+x*s],b=[e+m*s,t,n+d*s],_=[e+m*r,t+a,n+d*r],y=[e+g*r,t+a,n+x*r];this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(y[0],y[1],y[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(b[0],b[1],b[2],m,c,d,0,0,o),u&&r>.001&&(this.vtx(e,t+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(y[0],y[1],y[2],0,1,0,0,0,o))}}rod(e,t,n,s,r,a){let l=t[0]-e[0],o=t[1]-e[1],u=t[2]-e[2],c=Math.hypot(l,o,u);l/=c,o/=c,u/=c;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-u*f,x=u*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*u-m*o,b=m*l-g*u,_=g*o-x*l;for(let y=0;y<r;y++){let S=y/r*Math.PI*2,R=(y+1)/r*Math.PI*2,M=Math.cos(S),E=Math.sin(S),A=Math.cos(R),P=Math.sin(R),L=g*M+v*E,N=x*M+b*E,w=m*M+_*E,D=g*A+v*P,U=x*A+b*P,B=m*A+_*P,k=[e[0]+L*n,e[1]+N*n,e[2]+w*n],z=[e[0]+D*n,e[1]+U*n,e[2]+B*n],V=[t[0]+D*s,t[1]+U*s,t[2]+B*s],G=[t[0]+L*s,t[1]+N*s,t[2]+w*s];this.vtx(k[0],k[1],k[2],L,N,w,0,0,a),this.vtx(z[0],z[1],z[2],D,U,B,0,0,a),this.vtx(V[0],V[1],V[2],D,U,B,0,0,a),this.vtx(k[0],k[1],k[2],L,N,w,0,0,a),this.vtx(V[0],V[1],V[2],D,U,B,0,0,a),this.vtx(G[0],G[1],G[2],L,N,w,0,0,a)}return c}blob(e,t,n,s,r,a,l=0,o=1){let u=s0[l%s0.length],c=u.attributes.position.array,h=u.attributes.normal.array,f=u.userData.disp;for(let p=0;p<c.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(e+c[p]*s*g,t+c[p+1]*s*g*o,n+c[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(e,t,n,s,r,a=10){let l=e;this.noShadow=!0;for(let o=1;o<=a;o++){let u=o/a,c=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,c,s,s,3,r),l=c}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(e[a][0],e[a][1],e[a][2],t[a][0],t[a][1],t[a][2],l,o,s[a])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,a=e.N,l=e.C,o=e.U,u=this.n,c=this.bb;for(let h=0;h<e.n*3;h+=3){let f=r[h],p=r[h+1],g=r[h+2],x=u*3+h,m=n[0]*f+n[4]*p+n[8]*g+n[12],d=n[1]*f+n[5]*p+n[9]*g+n[13],v=n[2]*f+n[6]*p+n[10]*g+n[14];this.P[x]=m,this.P[x+1]=d,this.P[x+2]=v,this.hasAO&&(this.A[u+h/3]=this.aoByte(d)),m<c[0]&&(c[0]=m),d<c[1]&&(c[1]=d),v<c[2]&&(c[2]=v),m>c[3]&&(c[3]=m),d>c[4]&&(c[4]=d),v>c[5]&&(c[5]=v);let b=a[h],_=a[h+1],y=a[h+2],S=s[0]*b+s[3]*_+s[6]*y,R=s[1]*b+s[4]*_+s[7]*y,M=s[2]*b+s[5]*_+s[8]*y,E=127/(Math.sqrt(S*S+R*R+M*M)||1);this.N[x]=Math.round(S*E),this.N[x+1]=Math.round(R*E),this.N[x+2]=Math.round(M*E)}this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(o?this.U.set(o,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new xt,t=this.n,n=this.bb;return e.setAttribute("position",new zt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new zt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new zt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new zt(this.A.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new zt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ri(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new oi),e}},s0=[0,1,2,3].map(i=>{let e=new Bo(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});rt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var v_=rt.shadowmap_pars_fragment;function Rh(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;rt.shadowmap_pars_fragment=v_.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}Rh(1);function c0(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";rt.shadowmap_pars_fragment=t+rt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}rt.lights_fragment_begin=rt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ys=4200,Xe={uSkyHor:{value:new fe(.7,.8,.9)},uSkyZen:{value:new fe(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new qe},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new fe(1,1,1)},uTuftV:{value:new qe(0,.333)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:__()},uCloudTex:{value:null},uCloudOrg:{value:new qe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new qe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function u0(i){let e=new ls(new Uint8Array(i),i.length,1,zs);return e.minFilter=e.magFilter=sn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var jn=u0([16,16,16,70,200,255,255,255]),r0=u0([28,40,70,130,200,240,255,255]);function __(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ls(e,256,256,Xn);return s.wrapS=s.wrapT=Tr,s.magFilter=kt,s.minFilter=Wn,s.generateMipmaps=!0,s.colorSpace=Mi,s.needsUpdate=!0,s}var bi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Cc=1600,Ah=256,y_=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Cc).toFixed(8)} + 0.5).r * uCloudSh; }`,M_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,b_=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Cc).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,S_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,T_=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,E_=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Pc=new Dr;Pc.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Pc.customProgramCacheKey=()=>"propdepth";function h0(){let i=new Ft(Ah,Ah,{format:zs,type:Rn,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),e=new dt({uniforms:{uCenter:{value:new qe},uOrigin:Xe.uOrigin,uTime:Xe.uTime,uNoiseTex:Xe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Cc.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ht(new Xt(2,2),e),n=new Wi;t.frustumCulled=!1,Xe.uCloudTex.value=i.texture,Xe.uCloudTex.rt=i;let s=Cc/Ah;return{update(r,a,l,o,u){let c=Math.round((a+o)/s)*s-o,h=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(c,h),Xe.uCloudOrg.value.set(c,h);let f=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(f)}}}function qs(i,e="",t="",n=!0){i.uniforms.uOrigin=Xe.uOrigin,i.uniforms.uCloudSh=Xe.uCloudSh,i.uniforms.uTime=Xe.uTime,i.uniforms.uNoiseTex=Xe.uNoiseTex,i.uniforms.uCloudTex=Xe.uCloudTex,i.uniforms.uCloudOrg=Xe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Xe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?b_:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${bi}${y_}${T_}${e}`).replace("#include <opaque_fragment>",`${n?S_:M_}${t}${E_}
#include <opaque_fragment>`)}var w_=`
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
`,A_=`
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
#endif`,R_=`
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
}`,f0={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function d0(i){let e={};for(let t of i)e[f0[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var o0=new Map;function la(i){let e=[...new Set(i)].sort().join("+"),t=o0.get(e);return t||(t=p0(d0(e.split("+")),e),o0.set(e,t)),t}function p0(i=d0(Object.keys(f0)),e="all"){let t=new ln({color:16777215,gradientMap:jn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=Xe.uSkyHor,n.uniforms.uSkyZen=Xe.uSkyZen,n.uniforms.uWet=Xe.uWet,n.uniforms.uNight=Xe.uNight,n.uniforms.uSunDir=Xe.uSunDir,n.uniforms.uSunCol=Xe.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=Xe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),qs(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${w_}`,R_+A_,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v16-"+e,t}function a0(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),qs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function l0(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Ch(i){return i.onBeforeCompile=e=>qs(e),i.customProgramCacheKey=()=>"cs",i}var C_="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",P_=(i,e,t="")=>`
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
}`;function Ph(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let a of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[a]=Xe[a];s&&Object.assign(r.uniforms,s.uniforms),qs(r,C_+(s?s.pars:""),P_(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function m0(i,e){let t={};t.ground=p0(),t.color=a0(new ln({vertexColors:!0,gradientMap:jn}),1.6,.1,"color-v3",l0),t.atlas=new ln({vertexColors:!0,gradientMap:jn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{l0(l),qs(l)},t.atlas.customProgramCacheKey=()=>"atlas-v3",t.foliage=a0(new ln({vertexColors:!0,gradientMap:r0}),2.6,.24,"foliage-v2"),t.lamp=new tn({color:15789798}),t.sig=new tn({color:new fe(.15,1.7,1.1)}),t.sodium=new tn({color:new fe(5,2.3,.65)}),t.decal=new ln({vertexColors:!0,gradientMap:jn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>qs(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new ln({map:e,vertexColors:!0,gradientMap:r0,alphaTest:.42,side:vn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",rt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),qs(l),l.uniforms.uTuftV=Xe.uTuftV,l.uniforms.uWind=Xe.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v3"),t.wire=new tn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Vn(n);return t.pool=new tn({map:a,color:16762746,transparent:!0,opacity:0,blending:Xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=a,t}var I_=ie("#f2c230"),g0=ie("#26272c");function Ic(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),a=Sn(s,"rw"),l=n*(a+.8),o=Nt(s),u=o.city+o.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return t}function x0(){let i=new Zt,e=Ch(new ln({vertexColors:!0,gradientMap:jn})),t=new tn({color:new fe(6,.45,.3)}),n=new tn({color:new fe(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Zt,a=new Zt;r.add(a),a.position.set(-.42,1.02,-.02);let l=new hn,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?g0:I_);l.box(0,-.09,-.07,.38,.09,.07,g0);let u=new ht(l.build(),e);u.castShadow=!0,a.add(u);let c=[-.28,.28].map(h=>{let f=new ht(new Oo(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:u,lamps:c,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,u){i.visible=!!r,r&&r.forEach((c,h)=>{let f=s[h];f.root.position.set(c.x-a.x,c.y,c.z-a.z),f.root.rotation.y=c.yaw,f.arm.scale.x=(c.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(u*2.5)%2;f.lamps[0].material=o&&p===0?t:n,f.lamps[1].material=o&&p===1?t:n})}}}function L_(){let t=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=t(),s=t(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let u=[.1,.36,.62,.88].map(d=>d*1024),c=(d,v,b,_)=>{let y=r.createLinearGradient(d,v,d+b*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(d,v,b,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+b*.2,v),r.lineTo(d+b*.38,v),r.lineTo(d+b*.1,v+_),r.lineTo(d-b*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,b,_)};for(let d=0;d<u.length-1;d++){let v=u[d]+40,b=u[d+1]-40,_=3,y=(b-v)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(v+S*y+2,34,y-4,58),c(v+S*y+6,38,y-12,50)}for(let d of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),c(d+5,38,22,50);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),c(d-24,34,20,46),c(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new Vn(d);return v.colorSpace=Jt,v.anisotropy=4,v},m=(d,v,b,_)=>({u0:d/1024,u1:(d+b)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function v0(){let i=L_(),e=Ch(new ln({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:jn})),t=new hn({uv:!0}),n=[1,1,1],s=ie("#9aa1a9"),r=ie("#3b4047"),a=ie("#2a2d33"),l=19.5,o=.6,u=3,c=1.45,h=.95,f=4,p=u*l+(u-1)*o;for(let v=0;v<u;v++){let b=-p/2+l/2+v*(l+o),_=b-l/2,y=b+l/2;t.quad([_,h,c],[y,h,c],[y,f,c],[_,f,c],n,i.side),t.quad([y,h,-c],[_,h,-c],[_,f,-c],[y,f,-c],n,i.side);let S=v===u-1,R=v===0;t.quad([y,h,c],[y,h,-c],[y,f,-c],[y,f,c],S?n:ie("#c9ced4"),S?i.front:i.plain),t.quad([_,h,-c],[_,h,c],[_,f,c],[_,f,-c],R?n:ie("#c9ced4"),R?i.front:i.plain),t.box(_+.1,f,-c+.1,y-.1,f+.14,c-.1,s,null,{noBottom:!0});for(let M of[b-5.5,b+5.5])t.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,ie("#c4c9cf"),null,{noBottom:!0});t.box(_+2,.45,-c+.25,y-2,h,c-.25,a);for(let M of[b-7,b+7])t.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(v===0){let M=b-3,E=f+.55;t.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),t.rod([M-.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M+.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M,E+.9,-.85],[M,E+.9,.85],.03,.03,4,r)}}let g=new ht(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Zt;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,b,_=16){Object.assign(m,{active:!0,sx:v,dir:b,speed:_,u:-b*290,ds:b>0?-2:2,cleared:!1}),x.visible=!0},update(v,b,_,y,S){if(!m.active)return;m.u+=m.dir*m.speed*v;let R=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?R>S+1:R<-S-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}b.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),e.emissiveIntensity=.3+y*1.1}}}var D_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Ys=2048,Zs=4096;function Nc(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var b0=Nc(256,256);{let i=b0.getContext("2d"),e=i.createImageData(256,256),t=Pn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Ih=class{constructor(){this.cA=Nc(Ys,Zs),this.cE=Nc(Ys/2,Zs/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Ys/2,Zs/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Ys,Zs),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(b0,"repeat")}add(e,t,n,s){if(this.x+t+4>Ys&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Zs)throw new Error("atlas full at "+e);let a={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,t,n),o.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(a.x+l)/Ys,u1:(a.x+t-l)/Ys,v0:1-(a.y+n-l)/Zs,v1:1-(a.y+l)/Zs,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Vn(n);return s.colorSpace=Jt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Wn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function Tn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Kr(i,e,t,n,s,r){let a=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(e,t,n,s)}function $r(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Kr(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,t,1.5)}Tn(i,e,t,n,.13)}function qi(i,e,t,n,s,r=.13){let a=i.createLinearGradient(0,t,0,t+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(e,t,n,s)}function ae(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Jr(i,e,t,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ae(i,e-r,t-r,n+2*r,s+2*r,a),ae(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Yi(i,e,t,n,s,r,a=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),o=a?"#4f78b8":"#5f93d6",u=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let c=e+n*r();i.beginPath(),i.moveTo(c,t),i.lineTo(c+n*.18,t),i.lineTo(c-n*.25,t+s),i.lineTo(c-n*.43,t+s),i.fill(),i.restore()}function _0(i,e,t,n,s,r="#efe6d2"){ae(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(e+a,t,1.5,s);Kr(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Uc(i,e,t=800){i.font=`${t} ${e}px ${D_}`}function At(i,e,t,n,s,r,a,l=800,o=null){Uc(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Uc(i,u,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=a,i.fillText(e,t,n)}function Lc(i,e,t,n,s,r,a,l=800,o=null){let u=[...e],c=u.length,h=Math.min(r*1.05,(s-n)/c),f=Math.min(r,h*.95);Uc(i,f,l),i.textAlign="center",i.textBaseline="middle",u.forEach((p,g)=>{let x=n+(s-n-h*c)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,t,x)),i.fillStyle=a,i.fillText(p,t,x)})}function $s(i,e,t,n,s,r,a,l=!0){if(ae(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Kr(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let o=e+n*.2*a();o<e+n-4;o+=n*(.18+a()*.3)){let u=Math.min(n*(.1+a()*.2),e+n-o),c=s*(.12+a()*.25);i.fillRect(o,t+s-c,u,c)}}i.restore()}function N_(i,e,t,n,s,r,a){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",ae(e,t,n,s,r,a),e.globalCompositeOperation="lighter",e.globalAlpha=.22,ae(e,t,n,s,r,a),e.globalCompositeOperation="multiply",e.globalAlpha=1,Kr(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var y0=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Dc=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],M0=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],U_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function S0(){let i=new Ih,e=Pn(2024),t=240,n=(o,u,c,h,f,p,g=!1)=>{$r(o,i,c,h,"#ece8e0",0);let x=Pn(p*31+(f?7:0)+5);if(p===0){let m=c*.14,d=h*.22,v=c*.72,b=h*.5;Jr(o,m,d,v,b,5),Yi(o,m,d,v/2,b,x),Yi(o,m+v/2,d,v/2,b,x);let _=x()<.8?v*(.18+x()*.25):0;_&&_0(o,m+2,d+2,_,b-4,x()<.5?"#efe6d2":"#d9e4ea"),ae(o,m+v/2-2,d,4,b,"#cfd4da"),ae(o,m-8,d+b+5,v+16,6,"#d8d8d4"),qi(o,m-4,d+b+11,8,60),qi(o,m+v-4,d+b+11,8,60),f&&($s(u,m,d,v,b,g?"#e6eeff":"#ffcf8f",x),_&&ae(u,m+2,d+2,_,b-4,g?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),ae(u,m+v/2-2,d,4,b,"#000"))}else if(p===1){for(let m of[.12,.56]){let d=c*m,v=h*.28,b=c*.3,_=h*.36;Jr(o,d,v,b,_,4),Yi(o,d,v,b,_,x,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(d,v,b,_*.45),qi(o,d,v+_+6,b,40,.1),f&&x()<.8&&$s(u,d,v,b,_,x()<.5?"#ffd9a0":"#e8f0ff",x)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(c*.88,h*.2,9,0,7),o.fill()}else if(p===2){let m=c*.1,d=h*.12,v=c*.8,b=h*.84;Jr(o,m,d,v,b,4),Yi(o,m,d,v/2,b,x),Yi(o,m+v/2,d,v/2,b,x);let _=v*(.2+x()*.3);_0(o,m+2,d+2,_,b-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ae(o,m+v/2-2,d,4,b,"#cfd4da"),f&&($s(u,m,d,v,b,g?"#e6eeff":"#ffcb85",x),ae(u,m+2,d+2,_,b-4,g?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),ae(u,m+v/2-2,d,4,b,"#000"))}else if(p===3){$r(o,i,c,h,"#dfe3e6",0);let m=h*.25,d=h*.55;Yi(o,0,m,c,d,x,1);for(let v=0;v<=c;v+=c/4)ae(o,v-2,m,4,d,"#8d98a6");if(ae(o,0,m-4,c,4,"#8d98a6"),ae(o,0,m+d,c,5,"#7d8796"),f)for(let v=0;v<4;v++)x()<.7&&$s(u,v*c/4+2,m,c/4-4,d,x()<.6?"#f2f6ff":"#ffe2b0",x)}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,c,h);for(let _=0;_<h;_+=12)ae(o,0,_,c,2,"rgba(30,18,10,0.35)"),ae(o,0,_+2,c,1,"rgba(255,220,180,0.06)");Tn(o,i,c,h,.15);let m=c*.18,d=h*.25,v=c*.64,b=h*.45;ae(o,m-6,d-6,v+12,b+12,"#4a3020"),ae(o,m,d,v,b,"#efe4c8"),o.fillStyle="#5a3a26";for(let _=1;_<6;_++)o.fillRect(m+_*v/6-1.5,d,3,b);for(let _=1;_<3;_++)o.fillRect(m,d+_*b/3-1.5,v,3);if(f){$s(u,m,d,v,b,"#ffc070",x,!1),u.fillStyle="#000";for(let _=1;_<6;_++)u.fillRect(m+_*v/6-1.5,d,3,b);for(let _=1;_<3;_++)u.fillRect(m,d+_*b/3-1.5,v,3)}}else if(p===5){ae(o,c*.08,0,7,h,"#bdbdb6"),ae(o,c*.08+5,0,2,h,"rgba(0,0,0,0.2)");let m=c*.55,d=h*.3,v=c*.22,b=h*.24;Jr(o,m,d,v,b,3),ae(o,m,d,v,b,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,d,v,b/2),qi(o,m,d+b+4,v,50,.12),ae(o,c*.22,h*.55,26,34,"#cfcfca"),ae(o,c*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&$s(u,m,d,v,b,g?"#eef2ff":"#fff0d8",x,!1)}else if(p===6){let m=c*.4,d=h*.35,v=c*.2,b=h*.28;Jr(o,m,d,v,b,3),Yi(o,m,d,v,b,x,1),qi(o,m,d+b+4,v,70,.14),f&&$s(u,m,d,v,b,g?"#e8efff":"#ffd9a0",x)}};for(let o=0;o<7;o++)i.add("win"+o,t,t,(u,c,h,f)=>n(u,c,h,f,!1,o)),i.add("win"+o+"L",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o));for(let o of[0,2,5,6])i.add("win"+o+"C",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o,!0));i.add("plain",t,t,(o,u,c,h)=>{$r(o,i,c,h,"#ece8e0"),qi(o,c*.3,0,12,h*.6,.06)}),i.add("concrete",t,t,(o,u,c,h)=>{$r(o,i,c,h,"#d9d7d0",60);for(let f=0;f<6;f++)qi(o,f*41%c,0,10,h*.5,.07)});let s=288,r=(o,u,c,h,f,p)=>{let g=Pn(p);if($r(o,i,c,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=c-12,v=h*.78-4;ae(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let _=m+v*.25;_<m+v;_+=v*.22){ae(o,6,_,d,3,"rgba(60,50,40,0.5)");for(let y=9;y<6+d-6;y+=6+g()*8)o.fillStyle=e.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(y,_-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ae(o,6,m+4,d,5,"#ffffff"),f==="door"&&(ae(o,c/2-30,m+18,60,24,"#fff"),At(o,"\u55B6\u696D\u4E2D",c/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ae(o,16,m+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),At(o,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),N_(o,u,6,m,d,v,f==="konbini"?"#e4eef8":f==="cafe"?"#f0a868":"#f2d2a6"),o.save(),o.globalAlpha=.35,Yi(o,6,m,d,v,g),o.restore(),ae(o,6,m,d,4,"#4a4e57"),ae(u,6,m,d,4,"#000"),f==="door"&&(ae(o,c/2-2,m,4,v,"#4a4e57"),ae(u,c/2-2,m,4,v,"#000"),ae(o,c/2-14,m+v*.45,3,40,"#c0c4c8"),ae(o,c/2+11,m+v*.45,3,40,"#c0c4c8")),f==="cafe"&&(ae(o,c*.62,h-70,46,62,"#2c3a30"),ae(u,c*.62,h-70,46,62,"#000"),At(o,"\u30E9\u30F3\u30C1",c*.62+23,h-50,40,13,"#fff",700))}else if(f==="shutter"){let m=h*.2,d=c-12,v=h*.8;ae(o,6,m,d,v,"#b8bcc0");for(let b=m;b<m+v;b+=7)ae(o,6,b,d,2,"rgba(60,64,72,0.35)"),ae(o,6,b+2,d,1,"rgba(255,255,255,0.35)");ae(o,6,m,d,10,"#8f949a"),Tn(o,i,c,h,.12),g()<.5&&(ae(o,c/2-40,m+v*.35,80,26,"#fff"),At(o,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),c/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){ae(o,0,0,c,h,"#5b3c28");for(let _=0;_<c;_+=10)ae(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");Tn(o,i,c,h,.15);let x=c*.12,m=h*.24,d=c*.76,v=h*.34,b=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ae(o,x,m,d,v,b);for(let _=1;_<3;_++)ae(o,x+d*_/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");At(o,e.pick(U_),c/2,m+v*.55,d*.9,46,"#f5f0e6",800),ae(o,x,m,d,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(x,m+v,d,h-m-v),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c*.9,h*.36,13,19,0,0,7),o.fill(),At(o,"\u9152",c*.9,h*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(c*.9,h*.36,13,19,0,0,7),u.fill()}else if(f==="house"){let x=c*.18,m=h*.3,d=c*.34,v=h*.7;ae(o,x-6,m-6,d+12,v+6,"#9a9a96"),ae(o,x,m,d,v,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ae(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),ae(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),ae(o,c*.62,h*.48,30,22,"#cfcfca"),ae(o,c*.62+6,h*.48+5,18,4,"#555");let b=c*.6,_=h*.22,y=c*.3,S=h*.2;Jr(o,b,_,y,S,3),Yi(o,b,_,y,S,g,1);for(let R=0;R<3;R++)o.fillStyle="#7b5a43",o.fillRect(c*.6+R*22,h-26,16,18),o.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(c*.6+R*22+8,h-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(x+d+14,m+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(b,_,y,S))}else if(f==="garage"){let m=h*.25,d=c-16,v=h*.75;ae(o,8,m,d,v,"#efefec");for(let b=m;b<m+v;b+=9)ae(o,8,b,d,1.5,"rgba(80,80,90,0.25)");Tn(o,i,c,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,t,s,(c,h,f,p)=>r(c,h,f,p,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",t,s,(c,h,f,p)=>r(c,h,f,p,o,200+u))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,c,h,f)=>{let[p,g]=Dc[o%Dc.length],x=y0[o*7%y0.length];ae(u,0,0,h,f,p),ae(u,0,0,h,5,"rgba(255,255,255,0.35)"),ae(u,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ae(u,12,12,f-24,f-24,g),At(u,x[0],12+(f-24)/2,f/2,f-30,34,p)),At(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),Tn(u,i,h,f,.08),c.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,c.fillRect(0,0,h,f),c.globalAlpha=.9,At(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),c.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,c,h,f)=>{let[p,g]=Dc[(o*3+1)%Dc.length],x=M0[o%M0.length];ae(u,0,0,h,f,p),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,h-4,f-4),Lc(u,x,h/2,12,f-12,56,g,900),Tn(u,i,h,f,.08),ae(c,0,0,h,f,p==="#fff"?"#e8e8e8":p),Lc(c,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,c],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{ae(f,0,0,g,x,"#fbfaf5"),ae(f,0,0,g,x*.62,c),At(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),At(f,u,g/2,x*.8,g*.85,52,"#333",800),Tn(f,i,g,x,.08),ae(p,0,0,g,x,"#555"),p.globalAlpha=.85,ae(p,0,0,g,x*.62,c),At(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,c,h)=>{ae(o,0,0,c,h,"#fbfbf7"),ae(o,0,h*.62,c,h*.14,"#2a9a4a"),ae(o,0,h*.76,c,h*.12,"#f08a24"),ae(o,0,h*.88,c,h*.12,"#2f6fd8"),At(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,c,h),At(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,c,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ae(u,0,0,h,f,p),ae(u,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(d,v,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(d+2,v+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(d,v+23,11,3)}ae(u,10,f*.62,h-20,22,"#222"),ae(u,h-34,f*.66,14,22,"#bbb"),ae(u,14,f*.82,h-28,22,"#1b1b1b"),At(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),Tn(u,i,h,f,.08),c.fillStyle="#f2f8ff",c.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(14+m*17,18+x*30,11,20);c.fillStyle="#9fd0ff",c.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,u,c,h)=>{ae(o,0,0,c,h,"#e9e9e4"),Kr(o,0,0,c,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(c*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(c*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ae(o,c*.78,f,c*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,c,h)=>{ae(o,0,0,c,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,c-6,h-6),At(o,"\u54C1\u5DDD 580",c/2,16,c*.6,14,"#2f5a2f",700),At(o,"\u3042 12-34",c/2,42,c*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(c-2,2),o.lineTo(c/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(c-10,7),o.lineTo(c/2,h-12),o.fill(),At(o,"\u6B62\u307E\u308C",c/2,34,c*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(c/2,22),o.lineTo(c/2+22,50),o.lineTo(c/2+8,50),o.lineTo(c/2+8,88),o.lineTo(c/2-8,88),o.lineTo(c/2-8,50),o.lineTo(c/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(c/2,h/2,c/2-9,0,7),o.stroke(),At(o,"30",c/2,h/2+2,c*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,c,h)=>{ae(o,0,0,c,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,c-6,h-6),Lc(o,"\u672C\u753A\u4E8C\u4E01\u76EE",c/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,c,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ae(u,0,0,h,f,p),ae(u,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),At(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ae(u,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,t,88,(u,c,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if($r(u,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ae(u,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(g,10,h/6-8,(f-20)*.4);else{ae(u,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ae(u,g-1,0,2,f,"rgba(0,0,0,0.08)")}ae(u,0,f-6,h,6,"rgba(0,0,0,0.12)"),qi(u,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,u,c,h)=>{ae(o,0,0,c,h,"#58617a");for(let f=0;f<h;f+=16)Kr(o,0,f,c,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<c;f+=20)ae(o,f,0,2,h,"rgba(0,0,0,0.18)");Tn(o,i,c,h,.12)}),i.add("wood",256,256,(o,u,c,h)=>{ae(o,0,0,c,h,"#6d4c37");for(let f=0;f<h;f+=14)ae(o,0,f,c,2,"rgba(25,15,8,0.4)"),ae(o,0,f+2,c,1,"rgba(255,220,180,0.07)");Tn(o,i,c,h,.16)}),i.add("block",256,128,(o,u,c,h)=>{ae(o,0,0,c,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<c;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<c;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);Tn(o,i,c,h,.15),qi(o,0,0,c,40,.1)}),i.add("lantern",64,96,(o,u,c,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ae(o,4,f,c-8,1.5,"rgba(0,0,0,0.2)");ae(o,c/2-14,2,28,8,"#222"),ae(o,c/2-14,h-10,28,8,"#222"),At(o,"\u796D",c/2,h/2,c*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.stroke(),At(o,"\u30D0\u30B9\u505C",c/2,h/2,c*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ae(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,c,h)=>{o.save(),o.translate(c/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(c/2-22,h/2-6,44,18),o.fillRect(c/2-16,h/2-16,18,12),o.fillRect(c/2+8,h/2-13,5,7),o.beginPath(),o.arc(c/2-12,h/2+15,5,0,7),o.arc(c/2+12,h/2+15,5,0,7),o.fill(),At(o,"\u8E0F\u5207",c/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(c,h,f,p)=>{ae(c,0,0,f,p,"#b9b5ab"),Tn(c,i,f,p,.2),ae(c,6,6,f-12,p-12,"#a7a398"),Lc(c,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,c,h)=>{ae(o,0,0,c,h,"#4a4d52"),ae(o,0,0,c,5,"#5c6066"),Tn(o,i,c,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,c,h)=>{ae(o,0,0,c,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,c-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,c-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(c/2,h*.18,6,0,7),o.fill(),o.fillRect(c/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,u,c,h)=>{o.clearRect(0,0,c,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,c,h),At(o,"\u6B62\u307E\u308C",c/2,h/2+4,c*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(c,h,f,p)=>{ae(c,0,0,f,p,"#1f4f96"),c.strokeStyle="#fff",c.lineWidth=3,c.strokeRect(4,4,f-8,p-8),At(c,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,u,c],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{ae(g,0,0,m,d,"#3a3d42"),ae(g,4,4,m-8,d-8,"#f8f8f3"),At(g,u,m/2,20,m*.5,15,"#2b2b2b",700),At(g,o,m/2,52,m*.6,40,"#151515",900),At(g,c,m/2,80,m*.5,12,"#555",600),ae(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",Uc(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),Tn(g,i,m,d,.06),ae(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{ae(g,0,0,m,d,"#4b3326"),Tn(g,i,m,d,.2),At(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,c,h,f)=>{ae(u,0,0,h,f,"#f4f4ef"),ae(u,4,4,h-8,f-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;u.moveTo(g-p*26,x-40),u.lineTo(g+p*22,x),u.lineTo(g-p*26,x+40),u.lineTo(g-p*8,x+40),u.lineTo(g+p*40,x),u.lineTo(g-p*8,x-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(c,h,f,p)=>{ae(c,0,0,f,p,"#e9e7e0"),ae(c,4,4,f-8,p-8,"#24403b"),Tn(c,i,f,p,.08),At(c,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),At(c,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,c,h)=>{ae(o,0,0,c,h,"#f6f6f2"),o.fillStyle="#d42a22";for(let f=-20;f<h;f+=26)o.beginPath(),o.moveTo(4,f),o.lineTo(c/2,f+20),o.lineTo(c-4,f),o.lineTo(c-4,f+11),o.lineTo(c/2,f+31),o.lineTo(4,f+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,h-3)}),i.add("xing_plate",128,48,(o,u,c,h)=>{ae(o,0,0,c,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,c-6,h-6),At(o,"\u8E0F\u5207\u6CE8\u610F",c/2,h/2,c*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,c,h)=>{o.clearRect(0,0,c,h),ae(o,0,0,c,7,"#e9ebee"),ae(o,0,6,c,2,"rgba(60,70,80,0.5)"),ae(o,0,h-6,c,6,"#d5d8dc");for(let f=3;f<c;f+=9)ae(o,f,7,3,h-13,"#e2e5e9"),ae(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function T0(i){let n=Nc(1024,2048),s=n.getContext("2d"),r=Pn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let _=0;_<(m?10:14);_++){let y=r()*6.28,S=45+r()*120;v.push([x+Math.cos(y)*S,x+Math.sin(y)*S*(m?.42:.9),Math.min(34+r()*52,232-S)])}let b=d?2300:m?2600:2300;for(let _=0;_<b;_++){let y=v[Math.floor(r()*v.length)],S=r()*6.28,R=Math.sqrt(r())*y[2],M=y[0]+Math.cos(S)*R,E=y[1]+Math.sin(S)*R*(m?.45:1),A=R/y[2],P=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(A>.82?.5:0))));if(s.fillStyle=g[P],d){let L=7+r()*8;s.beginPath(),s.arc(M,E,L,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(M-L*.3,E-L*.3,L*.4,0,7),s.fill())}else if(m)s.save(),s.translate(M,E),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let L=8+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath();for(let N=0;N<10;N++){let w=N%2?L*.42:L,D=N/10*6.2832;s.lineTo(Math.cos(D)*w,Math.sin(D)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let L=9+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,L,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let L=9+r()*10;s.beginPath(),s.ellipse(M,E,L,L*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,S=150+r()*85,R=x+Math.cos(y)*S,M=x+Math.sin(y)*S*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(R,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(R,M,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=x+(r()-.5)*300,S=x+60+r()*120;s.beginPath(),s.moveTo(y,S),s.lineTo(y+(r()-.5)*40,S-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},u=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),b=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,y=9+r()*9,S=v+_,R=512-b,M=Math.min(4,Math.floor(r()*2.2+b/380*2.6)),E=s.createLinearGradient(0,512,0,R);E.addColorStop(0,x[0]),E.addColorStop(.6,x[Math.max(1,M-1)]),E.addColorStop(1,x[M]),s.fillStyle=E,s.beginPath(),s.moveTo(v-y/2,512),s.quadraticCurveTo(v-y/2+_*.3,512-b*.55,S,R),s.quadraticCurveTo(v+y/2+_*.3,512-b*.5,v+y/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,b=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(b+512)/2,v,b),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let S=y/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(S)*11,b+Math.sin(S)*11,9,4.5,S,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,b,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,b,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,b-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(v+(r()-.5)*16,b+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),u("grass",0,1536,!1),u("flowers",512,1536,!0);let c=new Vn(n);return c.colorSpace=Jt,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:a,tuftV:[0,1-1536/2048]}}var fn=[1,1,1],ce={pole:ie("#b1b0a9"),metal:ie("#8d9198"),black:ie("#2a2b30"),yellow:ie("#f2c230"),white:ie("#f4f3ee"),trans:ie("#a0a3a8"),lampPole:ie("#727780"),lampHead:ie("#dcdcd6"),trunk:ie("#6a5444"),trunkDark:ie("#4b3a33"),leaf:ie("#86ba4c"),leafShade:ie("#2c6640"),sakura:ie("#ffd3e3"),sakuraShade:ie("#de94b4"),pine:ie("#55874c"),pineShade:ie("#1d4632"),cedar:ie("#41713e"),cedarShade:ie("#1b3e2a"),roof:ie("#bdbbb3"),parapet:ie("#dcdad2"),pipe:ie("#c4c4bf"),orange:ie("#f07a22"),red:ie("#d8352a"),vermilion:ie("#e2482c"),concrete:ie("#c9c7c0"),stone:ie("#a8a69e"),terracotta:ie("#b8653d"),rail:ie("#eeeeea")},$i=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ie),F_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ie),Nh=null;function w0(i){Nh=i}var Fi=i=>Nh.uv(i),ca=Fi,O_=(i,e)=>Nh.has(e+"2")&&i()<.5?e+"2":e;function Oc(i,e,t,n,s=0){let r=new Je().makeRotationY(s);r.setPosition(e,t,n);let a=new Je().multiplyMatrices(i,r);return a.groundY=i.groundY,a}var an=(i,e,t,n,s,r,a,l=fn)=>i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Fi(a)),Ji=(i,e,t,n,s,r,a,l=fn)=>i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Fi(a)),Ki=(i,e,t,n,s,r,a,l=fn)=>i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Fi(a)),jr=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Fi(r):void 0),B_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function A0(i){return B_.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function Uh(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ce.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?ce.black:ce.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ce.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ce.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of a)s.cyl(0,r-.53,u,.05,.035,.17,6,ce.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,ce.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ce.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ce.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ce.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ce.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ce.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ce.concrete);for(let u=2.4,c=0;u<r-2;u+=.45,c++)s.rod([0,u,0],[c%2?.3:-.3,u,0],.015,.015,3,ce.metal);return i.atlas.setM(e),an(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&an(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...a.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Fc=new H;function Ks(i,e,t,n,s,r){i.lamps&&(Fc.set(t,n,s).applyMatrix4(e),i.lamps.push(Fc.x,Fc.y,Fc.z,r))}function Fh(i,e,t,n={}){let s=i.color;s.setM(e),Ks(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,ce.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ce.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ce.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ce.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,fn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function R0(i,e,t=.04){let n=i.color;n.setM(e),Ks(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ce.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ce.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ce.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,fn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function ua(i,e){let t=i.color;t.setM(e),Ks(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,ie("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,ie("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,ie("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,fn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],fn,{u0:0,u1:1,v0:0,v1:1})}function Oh(i,e,t){let n=Math.floor(t()*3),s=[ce.red,ie("#2f6fd8"),ce.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,In(s,.8)),i.atlas.setM(e),an(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Lh(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ie("#e6e6e1")),i.atlas.setM(e),an(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function C0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ie("#c8ccd2"),ie("#c0392b"),ie("#2c6fb7"),ie("#2b2b2b"),ie("#e8c84a"),ie("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,ce.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ce.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ce.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ce.metal)}function P0(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,ce.orange),t.cyl(0,.04,0,.16,.03,.68,10,ce.orange),t.cyl(0,.32,0,.115,.095,.12,10,ce.white,!1)}function I0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,ce.terracotta),i.leaf.setM(e),Zi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Ms(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ce.metal),i.atlas.setM(e),n<0?Ki(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ji(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Bh(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?ce.white:ce.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,ce.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,ce.black),i.atlas.setM(e),t<0?Ki(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ji(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function L0(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ie("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ie("#f0a020"))}function zh(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,ce.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let u=o/l*Math.PI*2,c=(o+1)/l*Math.PI*2,h=(f,p,g)=>[t*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];jr(n,h(0,0,-.02),h(t>0?c:u,a,-.02),h(t>0?u:c,a,-.02),ce.orange),jr(n,h(0,0,-.035),h(t>0?c:u,a*.86,-.035),h(t>0?u:c,a*.86,-.035),ie("#dfe9f2"))}}var kh=null;function D0(i){kh=i}var Dh=1;function N0(i){Dh=i}function Zi(i,e,t,n,s,r,a,l,o,u,c,h,f=0){let p=kh[a],g=1+(1-Dh)*.35;l=Math.max(2,Math.round(l*Dh));for(let x=0;x<l;x++){let m=o()*2-1,d=o()*2-1,v=o()*2-1;f&&(d=1.2+o());let b=Math.hypot(m,d,v)||1;m/=b,d/=b,v/=b;let _=-v,y=0,S=m;b=Math.hypot(_,S),b<.1&&(_=1,S=0,b=1),_/=b,S/=b;let R=d*S-v*y,M=v*_-m*S,E=m*y-d*_,A=Math.PI+(o()-.5)*.9,P=Math.cos(A),L=Math.sin(A),N=_*P+R*L,w=y*P+M*L,D=S*P+E*L,U=R*P-_*L,B=M*P-y*L,k=E*P-S*L,z=r*(1.3+o()*.45)*g/2,V=t+(o()-.5)*r*.6,G=n+(o()-.5)*r*(f?.15:.5),J=s+(o()-.5)*r*.6,re=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Oe,q])=>[V+(N*Oe+U*q)*z,G+(w*Oe+B*q)*z*(f?.6:1),J+(D*Oe+k*q)*z]),Ve=re.map(Oe=>{let q=Oe[0]-e[0],$=Oe[1]-e[1],Me=Oe[2]-e[2],Ne=Math.hypot(q,$,Me)||1;q/=Ne,$/=Ne,Me/=Ne;let xe=Oe[0]-t,Ye=Oe[1]-n,it=Oe[2]-s;return Ne=Math.hypot(xe,Ye,it)||1,[q*.7+xe/Ne*.3,$*.7+Ye/Ne*.3+(f?.5:0),Me*.7+it/Ne*.3]}),ge=re.map(Oe=>Kd(c,u,.45+.55*Math.max(0,Math.min(1,(Oe[1]-h[0])/(h[1]-h[0])))));i.leaf.card(re,Ve,p,ge)}}function U0(i,e,t,n="grass",s=1){let r=kh[n],a=(.42+t()*.38)*s,l=a*1.2,o=t()*Math.PI,u=[0,1,0],c=[u,u,u,u],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(e);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],c,r,[h,h,f,f])}}function z_(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ce.trunk);for(let u=0;u<3;u++){let c=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(c)*1.1*n,s*.68,Math.sin(c)*1.1*n],.09*n,.05*n,5,ce.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],a=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(t()*3);for(let u=0;u<o;u++){let c=t()*6.28,h=(.6+t())*1.3*n;Zi(i,r,Math.cos(c)*h,s*(.62+t()*.3),Math.sin(c)*h,(1.1+t()*.6)*n,a,6,t,[1,1,1],[.55,.62,.7],l)}Zi(i,r,0,s*.98,0,1.4*n,a,7,t,[1,1,1],[.55,.62,.7],l)}function k_(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ce.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(2.2+t()*1.6)*n,f=[Math.cos(c)*h,s*(.62+t()*.18),Math.sin(c)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ce.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ce.trunkDark)}i.leaf.setM(e);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let u of r)for(let c=0;c<2;c++)Zi(i,a,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],o,l);Zi(i,a,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],o,l)}function H_(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,a=t.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,ce.trunkDark),s.rod(l,o,.15*n,.09*n,6,ce.trunkDark),i.leaf.setM(e);let u=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[c,h,f,p]of u)s.rod(c>l[0]?l:o,[c,h-.2,f],.07*n,.04*n,4,ce.trunkDark),Zi(i,[c,h-.8,f],c,h,f,p*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function V_(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,ce.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(1.8+t()*1.4)*n,f=[Math.cos(c)*h,s*(.55+t()*.2),Math.sin(c)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,ce.trunkDark),r.push(f)}i.leaf.setM(e);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let u of r)Zi(i,a,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],o,l);Zi(i,a,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],o,l)}function G_(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,ce.trunk),i.leaf.setM(e);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let u=s*(.34+o*.09),c=(2.1-o*.24)*n,h=t()*6.28;Zi(i,r,Math.cos(h)*c*.35,u,Math.sin(h)*c*.35,Math.max(.7,c)*1.05,"ginkgo",5,t,[1,1,1],l,a)}}function W_(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,a=(t()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,ie("#eeece6"));for(let l=0;l<7;l++){let o=t.range(.4,r*.85),u=o/r;s.cyl(a*u,o,0,.135*n*(1-u*.6),.13*n*(1-u*.6),.05,7,ie("#2b2b30"),!1)}for(let l=0;l<7;l++){let o=r*(.45+t()*.5),u=t()*6.28,c=(.8+t()*1.6)*n,h=o/r;s.rod([a*h,o,0],[a*h+Math.cos(u)*c,o+c*.9,Math.sin(u)*c],.035*n,.012*n,4,ie("#8b7f78"))}}function X_(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ce.trunkDark),i.foliage.setM(e);let r=ie("#1d3a2c"),a=ie("#eef2f8"),l=ie("#d7e0ec");for(let o=0;o<4;o++){let u=s*(.16+o*.19),c=(1.9-o*.38)*n,h=s*.3;i.foliage.cyl(0,u,0,c,c*.3,h,9,r),i.foliage.cyl(0,u+h*.45,0,c*.72,.05,h*.62,9,o%2?a:l)}}function q_(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ce.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ce.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ce.cedar)}var F0={broad:z_,sakura:k_,pine:H_,cedar:q_,maple:V_,ginkgo:G_,birch:W_,snowcedar:X_},E0={};function O0(i,e){let t=i+e,n=E0[t];if(!n){let s={color:new hn,foliage:new hn,leaf:new hn({uv:!0})};F0[i](s,new Je,Pn(1e3+e*77+i.length*13),1),n=E0[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function B0(){for(let i in F0)for(let e=0;e<4;e++)O0(i,e)}function Ln(i,e,t,n,s=1){let r=O0(t,Math.floor(n()*4)),a=e.clone().scale(new H(s,s,s));a.groundY=e.groundY,i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}var Y_=new Set(["win0","win2","win5","win6"]),Js=(i,e,t)=>e<t?i+(e<t*.35&&Y_.has(i)?"C":"L"):i;function ha(i,e,t,n,s,r,a){let l=Math.max(1,Math.round(t/3)),o=t/l;for(let u of[-1,1])for(let c=0;c<n.length-1;c++)for(let h=0;h<l;h++){let f=c>0&&r()<.3?Js("win6",r(),a):r()<.2?"win5":"plain";(u>0?Ji:Ki)(i,u*e/2,h*o,(h+1)*o,n[c],n[c+1],f,s)}}function fa(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],ce.roof);let a=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+a,l,ce.parapet),i.box(-e/2,n,t-l,e/2,n+a,t,ce.parapet),i.box(-e/2,n,0,-e/2+l,n+a,t,ce.parapet),i.box(e/2-l,n,0,e/2,n+a,t,ce.parapet),s()<.4){let o=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+c-.05,n,u+h-.05,o+c+.05,n+1,u+h+.05,ce.metal);i.cyl(o,n+1,u,.85,.85,1.3,12,ie("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,ce.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,ce.metal)}function z0(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,ce.black);let r="vs"+Math.floor(s()*10);Ki(i.atlas,e-.065,-.88,-.12,t,n,r),Ji(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,ce.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,ce.metal)}function ji(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ce.concrete,null,{noBottom:!0}),n.type){case"shop":return $_(i,e,t,n);case"apt":return J_(i,e,t,n);case"office":return K_(i,e,t,n);case"konbini":return j_(i,e,t,n);case"house":return Q_(i,e,t,n);case"tower":return ey(i,e,t,n)}}var Z_=new Set(["glass","door","cafe","noren"]);function $_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++){let S=d[y%d.length];an(u,m+y*x,m+(y+1)*x,0,h,0,O_(t,"shop_"+S)),Z_.has(S)&&Ks(i,e,m+(y+.5)*x,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,h];for(let y=1;y<a;y++)b.push(h+y*f);for(let y=1;y<a;y++)for(let S=0;S<g;S++){let R=S%2===1&&t()<.3?5:v;an(u,m+S*x,m+(S+1)*x,b[y],b[y+1],0,Js("win"+R,t(),o),l)}ha(u,s,r,b,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t);let _=s*.94;if(c.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ce.black),an(u,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(t()*14)),t()<.55){let y=t.pick(F_),S=h-.85;c.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),c.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],In(y,.85))}if(a>=2&&t()<.65){let y=(t()<.5?1:-1)*(s/2-.35);z0(i,y,h+.3,Math.min(p-.15,h+2.8),t)}for(let y=1;y<a;y++)if(t()<.4){let S=Math.floor(t()*g),R=m+S*x+.15,M=m+(S+1)*x-.15,E=b[y];c.box(R,E-.12,-.9,M,E,0,ce.parapet),an(u,R,M,E,E+1,-.9,"rail"),Ki(u,R,-.9,0,E,E+1,"rail"),Ji(u,M,-.9,0,E,E+1,"rail"),t()<.45&&W0(c,R+.1,M-.1,E+1.95,-.55,t),t()<.6&&Lh(i,e,(R+M)/2+.6,E,-.75)}else if(t()<.35){let S=Math.floor(t()*g);Lh(i,e,m+(S+.5)*x,b[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}c.cyl(m+.12,0,-.08,.05,.05,p,6,ce.pipe,!1),c.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ie("#d9d9d3")),a>=3&&t()<.18&&k0(i,s,p,r,t)}function k0(i,e,t,n,s){let r=Math.min(e*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,t,l,o+.06,t+1.2+a,l+.12,ce.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+a,l+.3,ce.metal),an(i.atlas,-r/2,r/2,t+1.2,t+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function J_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)an(u,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?fn:l);let v="bal"+Math.floor(t()*3),b=In(l,.97);for(let _=1;_<a;_++){let y=d[_];for(let S=0;S<g;S++)an(u,m+S*x,m+(S+1)*x,y,d[_+1],0,Js("win2",t(),o),l);c.box(m,y-.15,-1.3,-m,y,0,b),c.box(m,y,-1.3,-m,y+1.1,-1.18,b,null,{noBottom:!0});for(let S=0;S<g;S++)an(u,m+S*x,m+(S+1)*x,y,y+1.1,-1.305,v,l);for(let S=0;S<=g;S++)c.box(m+S*x-.05,y,-1.18,m+S*x+.05,y+2.4,0,In(l,.92));for(let S=0;S<g;S++){let R=t(),M=m+S*x+.2,E=m+(S+1)*x-.2;R<.34?W0(c,M,E,y+2.02,-.98,t):R<.46&&iy(c,M+.25,Math.min(E-.25,M+1.9),y+1.1,-1.3,t)}i.atlas.setM(e);for(let S=0;S<g;S++)t()<.55&&(Lh(i,e,m+(S+.78)*x,y,-.55),i.atlas.setM(e),i.color.setM(e))}c.box(m,p-.15,-1.3,-m,p,0,b),ha(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t,!0)}function K_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)an(u,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let b=0;b<g;b++)an(u,m+b*x,m+(b+1)*x,d[v],d[v+1],0,Js("win3",t(),o),l);ha(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t,!0),t()<.6&&z0(i,(t()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),t),t()<.3&&k0(i,s,p,r,t)}function j_(i,e,t,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,u=-s/2,c=Math.max(3,Math.round(s/3)),h=s/c;for(let f=0;f<c;f++)an(a,u+f*h,u+(f+1)*h,0,3.4,0,"shop_konbini"),Ks(i,e,u+(f+.5)*h,1.9,-.8,.8);l.box(u,3.4,-.35,-u,o,0,ce.white),an(a,u,-u,3.4,o,-.355,"konbini_band"),ha(a,s,r,[0,o],ie("#f2f2ee"),t,0),fa(l,s,r,o,t)}function Q_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=2.9,f=a*h,p=-s/2,g=t()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let E=0;E<=a;E++)d.push(E*h);let v=g?fn:l;for(let E=0;E<a;E++)for(let A=0;A<x;A++){let P=g?"win4":"win0";E===0&&A===0?P="shop_house":P=Js(P,t(),o),an(u,p+A*m,p+(A+1)*m,d[E],d[E+1],0,P,P==="shop_house"?fn:v)}ha(u,s,r,d,g?ie("#9a7a62"):l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],In(l,.75));let b=!!n.snow,_=b?.75:.6,y=b?Math.min(3.4,r*.46):Math.min(2.4,r*.32),S=Fi(b?"white":"kawara"),R=b?ie("#f3f5fa"):ie("#c8ccd8");u.quad([s/2+_,f-.25,-_],[-s/2-_,f-.25,-_],[-s/2-_,f+y,r/2],[s/2+_,f+y,r/2],R,S),u.quad([-s/2-_,f-.25,r+_],[s/2+_,f-.25,r+_],[s/2+_,f+y,r/2],[-s/2-_,f+y,r/2],R,S);let M=g?ie("#7a5a42"):l;if(jr(c,[-s/2,f,0],[-s/2,f,r],[-s/2,f+y-.1,r/2],M),jr(c,[s/2,f,r],[s/2,f,0],[s/2,f+y-.1,r/2],M),c.box(-s/2-_,f+y-.05,r/2-.15,s/2+_,f+y+.18,r/2+.15,b?ie("#f6f7fb"):ie("#3d4456")),b){c.box(-s/2-_-.05,f-.42,-_-.1,s/2+_+.05,f-.12,-_+.3,ie("#eef1f7")),c.box(-s/2-_-.05,f-.42,r+_-.3,s/2+_+.05,f-.12,r+_+.1,ie("#eef1f7"));for(let E=-s/2;E<s/2;E+=.45+t()*.5)c.cyl(E,f-.42-.35,-_+.02,0,.04,.35,4,ie("#dfe8f3"),!1)}if(a>1){let E=h+.05;u.quad([s/2+.1,E-.3,-.75],[-s/2-.1,E-.3,-.75],[-s/2-.1,E+.05,0],[s/2+.1,E+.05,0],R,S)}if(n.fence){let E=-n.fence,A=1.2;for(let[P,L]of[[-s/2,-1],[.4,s/2]])c.box(P,0,E-.08,L,A,E+.08,ce.concrete),an(u,P,L,0,A,E-.085,"block")}}function ey(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=t()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<p;y++)an(u,x+y*g,x+(y+1)*g,d[_],d[_+1],0,Js(m,t(),o),l);let v=Math.max(1,Math.round(r/6)),b=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let S=0;S<v;S++)(_>0?Ji:Ki)(u,_*s/2,S*b,(S+1)*b,d[y],d[y+1],Js(m,t(),o),l);fa(c,s,r,f,t,!0)}function H0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ie("#f2f2ee"),ie("#c9cdd2"),ie("#2b2f38"),ie("#b33a32"),ie("#9fc6c0"),ie("#e7d9b4"),ie("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,In(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,ie("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ce.black)}function Hh(i,e,t,n){let s=i.color,r=ie("#8d9096"),a=ie("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let u=t*.141;i.atlas.setM(e),(t>0?Ji:Ki)(i.atlas,u,l,o,5.08,5.56,"signal");let c=t>0?o:l,h=t>0?-1:1;for(let p=0;p<3;p++){let g=c+h*(.2+p*.4);s.box(t>0?.14:-.36,5.47,g-.15,t>0?.36:-.14,5.5,g+.15,a)}let f=c+h*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,f-.11,t>0?.16:-.145,5.43,f+.11,fn)}function V0(i,e,t,n){let s=i.color,r=ie("#3d6ea8"),a=ie("#e8eef2"),l=ie("#c7c5bf"),o=5.35;s.setM(e),s.box(-1.1,o-.65,-t,1.1,o,t,r);for(let u of[-1.1,1])s.box(u,o,-t,u+.1,o+1.1,t,a),s.box(u-.02,o+1.1,-t,u+.12,o+1.18,t,r);i.atlas.setM(e),Ki(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),Ji(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(e);for(let u of[-1,1]){let c=u*(t-1.65),h=u*(t-.15),f=Math.min(c,h),p=Math.max(c,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function G0(i,e,t,n,s,r,a){let l=i.color,o=1.22,u=3.55,c=6.7,h=ie("#c8c5bd"),f=ie("#ebe8de"),p=ie("#7a5a42"),g=ie("#5e4433"),x=ie("#4d5468");l.setM(e),l.box(t,-1.4,u,n,o,c,h,null,{noBottom:!0}),l.box(t,o,u,n,o+.025,u+.32,f),l.box(t,o,u+.6,n,o+.04,u+.9,ce.yellow);let m=Math.sign(s-(t+n)/2),d=m>0?n:t,v=d+m*6.2,b=u+.9,_=c-.2,y=(z,V,G)=>[z,V,G];m>0?l.quad(y(v,.1,_),y(v,.1,b),y(d,o,b),y(d,o,_),h):l.quad(y(v,.1,b),y(v,.1,_),y(d,o,_),y(d,o,b),h);for(let z of[b,_]){let V=ie("#9aa0a6");l.rod([v,.1+.9,z],[d,o+.9,z],.03,.03,5,V);for(let G=0;G<=3;G++){let J=v+(d-v)*G/3,re=.1+(o-.1)*G/3;l.box(J-.03,re,z-.03,J+.03,re+.9,z+.03,V)}}i.atlas.setM(e);for(let z=t;z<n-.01;z+=3){let V=Math.min(n,z+3);i.atlas.quad([z,-.6,c+.004],[V,-.6,c+.004],[V,o,c+.004],[z,o,c+.004],ie("#d8d4ca"),Fi("concrete"))}l.setM(e);for(let z=t+.4;z<n;z+=2)l.box(z-.05,o,c-.12,z+.05,o+1,c-.02,ie("#8f949a"));for(let z of[.45,.95])l.box(t,o+z,c-.1,n,o+z+.06,c-.04,ie("#8f949a"));let S=n-t,R=z=>m>0?n-S*z:t+S*z,M=R(.47),E=M-2.3,A=M+2.3,P=u+1.35,L=c-.25;l.box(E,o,L-.12,A,o+2.45,L,p);for(let z of[E,A-.12])l.box(z,o,P+.6,z+.12,o+2.45,L,g);for(let z of[E,A-.12])l.box(z,o,P,z+.12,o+2.45,P+.12,g);l.quad([A+.4,o+2.5,P-.45],[E-.4,o+2.5,P-.45],[E-.4,o+2.85,L+.35],[A+.4,o+2.85,L+.35],x),l.quad([E-.4,o+2.42,P-.45],[A+.4,o+2.42,P-.45],[A+.4,o+2.77,L+.35],[E-.4,o+2.77,L+.35],ie("#3a3f50")),l.box(E+.3,o+.42,L-.55,A-.3,o+.48,L-.15,ie("#8a6a4a"));for(let z of[E+.4,A-.5])l.box(z,o,L-.5,z+.08,o+.42,L-.2,ce.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,o+1.55,L+.005],[M+1.1,o+1.55,L+.005],[M+1.1,o+2.03,L+.005],[M-1.1,o+2.03,L+.005],fn,Fi("ekiplate"+r));let N=R(.2),w=u+1.6,D=1.25,U=o+1.25,B=U+.95;l.setM(e);for(let z of[N-D+.12,N+D-.12])l.cyl(z,o,w,.05,.05,B-o+.05,8,ie("#6b7078"));l.box(N-D,U-.03,w-.03,N+D,B+.03,w+.03,ie("#3a3d42")),i.atlas.setM(e),i.atlas.quad([N-D,U,w+.035],[N+D,U,w+.035],[N+D,B,w+.035],[N-D,B,w+.035],fn,Fi("ekimei"+r)),i.atlas.quad([N+D,U,w-.035],[N-D,U,w-.035],[N-D,B,w-.035],[N+D,B,w-.035],fn,Fi("ekimei"+r)),l.setM(e);let k=M-m*4.2;l.box(k-.9,o+.42,c-1.25,k+.9,o+.47,c-.85,ie("#3b6ea8")),l.box(k-.9,o+.47,c-.88,k+.9,o+.9,c-.83,ie("#3b6ea8"));for(let z of[k-.75,k+.7])l.box(z,o,c-1.2,z+.06,o+.42,c-.9,ce.metal);for(let z=t+3;z<n-1;z+=9)ua(i,Oc(e,z,o,c-.45))}var ty=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ie),ny=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ie);function W0(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,ce.metal);let a=e+.12+r()*.2;for(;a<t-.35;){let l=.28+r()*.34,o=.36+r()*.42,u=r.pick(ty),c=s+(r()-.5)*.06;i.quad([a+l,n-o,c],[a,n-o,c],[a,n-.02,c],[a+l,n-.02,c],u),i.quad([a,n-o,c+.01],[a+l,n-o,c+.01],[a+l,n-.02,c+.01],[a,n-.02,c+.01],In(u,.85)),r()<.4&&i.box(a+l*.45,n-.02,c-.02,a+l*.55,n+.06,c+.02,ie("#d8d8d0")),a+=l+.06+r()*.22}}function iy(i,e,t,n,s,r){let a=r.pick(ny),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,a),i.box(e,n-.72,s-l,t,n+.09,s-.005,a),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,In(a,.86))}function X0(i,e){let t=i.color,n=ie("#a19f97"),s=ie("#6b4a35"),r=ie("#4f4a44"),a=ie("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ie("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])t.box(l,.32,o,l+.05,1.5,o+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,In(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,a,!1),t.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,ie("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ie("#5b8d3d"))}function q0(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ce.black:ce.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,ce.black),t.box(-.5,2.55,-.06,.5,2.95,.02,ce.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ce.black);t.box(-.78,-.9,-.34,.3,0,.34,ce.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ie("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,ce.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Je().multiplyMatrices(e,new Je().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ce.black:ce.yellow)}t.setM(e),i.atlas.setM(e),an(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Y0(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,ce.stone),t.cyl(0,.25,0,.14,.12,.95,8,ce.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,ce.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,In(ce.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,In(ce.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,fn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,fn)}function Vh(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,ce.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ce.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,ce.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,ce.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,ce.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ce.vermilion)}function Z0(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ie("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ie("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ie("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ie("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ce.metal),n.box(1.1,0,.3,1.2,.42,.55,ce.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ce.metal),i.atlas.setM(e),Ki(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ji(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function $0(i,e,t,n=1){let s=i.color;s.setM(e);let r=In(ce.concrete,.85+t()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function J0(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ie("#8f8a80"),ie("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,ce.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ce.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,ce.black),t.cyl(0,18.6,0,1,.25,1.2,12,ce.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,fn)}function K0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ie("#f4f4f0"),ie("#3b6ea5"),ie("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),jr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),jr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ce.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ce.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ie("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ce.metal)}function j0(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,ce.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ie("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ie("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ie("#4d5468")),Vh(i,Oc(e,0,0,-.3,Math.PI/2),.75,2.2)}var qt=60,Q0=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],ep=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Gh=32,da=[.025,.026,.032],tp=[.05,.05,.065],Qi=(i,e)=>(i%e+e)%e,bs=(i,e)=>{let t=qr(i);return!!t&&Math.abs(i-t.s)<e},Wh=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Si=(i,e)=>{let t=li(i);return!!t&&Math.abs(i-t.s)<e},Qn=(i,e)=>{let t=Ui(i);return!!t&&Math.abs(i-t.s)<e},Xh=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let a=0;a<t-1;a++){let l=s+r*t+a,o=l+1,u=l+t,c=u+1;this.I.push(l,o,u,o,c,u)}}gridN(e,t,n,s=0,r=0){let a=t+s+r,l=new Array(e*a);for(let u=0;u<e;u++)for(let c=0;c<a;c++)l[u*a+c]=n(u,c-s);let o=(u,c)=>l[Math.min(e-1,Math.max(0,u))*a+Math.min(a-1,Math.max(0,c))];for(let u=0;u<e;u++)for(let c=s;c<s+t;c++){let h=o(u,c-1),f=o(u,c+1),p=o(u-1,c),g=o(u+1,c),x=l[u*a+c],m=f[0]-h[0],d=f[1]-h[1],v=f[2]-h[2],b=g[0]-p[0],_=g[1]-p[1],y=g[2]-p[2],S=d*y-v*_,R=v*b-m*y,M=m*_-d*b;R<0&&(S=-S,R=-R,M=-M);let E=Math.hypot(S,R,M)||1;x[3]=S/E,x[4]=R/E,x[5]=M/E}this.grid(e,t,(u,c)=>l[u*a+c+s])}build(){let e=new xt;return e.setAttribute("position",new Qe(this.P,3)),e.setAttribute("normal",new Qe(this.N,3)),e.setAttribute("su",new Qe(this.SU,2)),e.setAttribute("zw",new Qe(this.ZW,4)),e.setAttribute("rk",new Qe(this.RK,2)),e.setAttribute("rv",new Qe(this.RV,1)),e.setAttribute("zs",new Qe(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Bc=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Zt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/qt),s=Math.floor((e+this.ahead)/qt);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;l*qt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,a)=>{let l=a*qt-e,o=r.group.children;for(let u=0;u<o.length;u++){let c=o[u],h=c.userData.detail;h&&(c.visible=h==="leaf"?l<s:l<t||n&&h==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*qt,s=n+qt,r=t.at(n),a=r.x,l=r.z,o=Pn(Math.floor(Kn(e,777)*4294967295)),u={atlas:new hn({uv:!0,ao:!0}),color:new hn({ao:!0}),foliage:new hn,leaf:new hn({uv:!0}),lamp:new hn({color:!1}),sig:new hn({color:!1}),sodium:new hn({color:!1}),decal:new hn({uv:!0}),pool:new hn({uv:!0,color:!1})},c=new Xh,h=[],f=[];u.lamps=[];let p={},g={},x=(A,P)=>{t.at(A,g);let L=Sn(A,"rw");return g.y+Zr(A,P,g.y,L)},m=A=>{let P=Nt(A);return[P.city,P.sakura,P.coast,P.country,P.snow]},d=(A,P,L)=>(t.at(A,p),[p.x+p.rx*P-a,L,p.z+p.rz*P-l]),v=(A,P,L,N=0,w=!0)=>{t.at(A,p);let D=p.h-Math.PI/2+(w&&P<0?Math.PI:0)+N,U=new Je().makeRotationY(D);return U.setPosition(p.x+p.rx*P-a,L,p.z+p.rz*P-l),U.groundY=L,U},b=(A,P,L=0,N=0,w=!0)=>{let D=x(A,P),U=v(A,P,D+L,N,w);return U.groundY=D,U},_=A=>t.at(A,g).y,y=A=>Sn(A,"rw"),S=A=>{let P=Nt(A);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let A=Ui(n+qt/2),P=!!A&&A.s>n-40&&A.s<s+40,L=P?61:21,N=y(n+qt/2),w=(()=>{let J=[0,...Q0].map(re=>re);return ep.forEach(re=>J.push(re-N)),J})(),D=[...w.slice().reverse().map(G=>-G),...w],U=D.length,B=Array.from({length:L},(G,J)=>n+J/(L-1)*qt);{let G=li(n+qt/2);if(G)for(let J of[G.s-en,G.s+en])J>n+.1&&J<s-.1&&B.push(J-.03,J+.03)}B.sort((G,J)=>G-J);let k=U/2,z=B.map(G=>(t.at(G,p),{s:G,f:{...p},rw:y(G),w:m(G),rb:P?i0(G):0})),V=Math.round(k/2);for(let[G,J,re,Ve]of[[0,V,0,1],[V-1,k,1,0],[k,k+V+1,0,1],[k+V,U,1,0]])c.gridN(z.length,J-G,(ge,Oe)=>{let q=z[ge],$=q.f,Me=G+Oe,Ne=D[Me],xe=Ne<0||Ne===0&&Me<k?Ne-q.rw:Ne+q.rw,Ye=$.y+Zr(q.s,xe,$.y,q.rw),it=Math.abs(xe)>q.rw+.98?Math.min(1,Ec/.5):0;return[$.x+$.rx*xe-a,Ye,$.z+$.rz*xe-l,0,1,0,Qi(q.s,ys),xe,q.w[0],q.w[1],q.w[2],q.w[3],q.rw,0,q.rb>0?q.rb:-it,q.w[4]]},re,Ve),yield}yield,c.grid(31,2,(P,L)=>{let N=n+P/30*qt,w=y(N),D=L?w:-w;t.at(N,p);let U=p.y,B=(_(N+1)-_(N-1))/2,k=-B*p.fx,z=1,V=-B*p.fz,G=Math.hypot(k,z,V),J=m(N);return[p.x+p.rx*D-a,U,p.z+p.rz*D-l,k/G,z/G,V/G,Qi(N,ys),D,J[0],J[1],J[2],J[3],w,1,0,J[4]]});{let A=[];for(let N=0;N<=30;N++){let w=n+N/30*qt;A.push({s:w,sw:S(w)})}let P=[],L=null;for(let N of A)N.sw>0?(L||(L=[],P.push(L)),L.push(N)):L=null;for(let N of P)if(!(N.length<2))for(let w of[-1,1])c.grid(N.length,2,(D,U)=>{let{s:B,sw:k}=N[D],z=y(B),V=w*(U===(w>0?0:1)?z:z+k);t.at(B,p);let G=m(B);return[p.x+p.rx*V-a,p.y+.15,p.z+p.rz*V-l,0,1,0,Qi(B,ys),V,G[0],G[1],G[2],G[3],z,2,0,G[4]]}),c.grid(N.length,2,(D,U)=>{let{s:B}=N[D],k=y(B),z=w*k,V=w>0?U:1-U;t.at(B,p);let G=m(B);return[p.x+p.rx*z-a,p.y+(V?.15:0),p.z+p.rz*z-l,-w*p.rx,0,-w*p.rz,Qi(B,ys),z,G[0],G[1],G[2],G[3],k,3,0,G[4]]})}yield,yield*this.placePoles(e,n,s,o,u,v,x,d,_,y);{let A=Math.ceil((n-Ws)/Gs),P=Xr(A);P<s&&ra(P)&&(yield*this.placeCrossing(u,c,P,v,_,y,x,S,a,l));let L=Math.ceil((n-Yr)/Xs),N=Eh(L);N<s&&wh(N)&&(yield*this.placeRiver(u,c,N,v,_,y,x,S,a,l,o,f));let w=li(n+qt/2);w&&w.s+jt>n&&w.s-jt<s&&(yield*this.placeTunnel(u,c,w,n,s,v,b,x,y,a,l,o))}yield;for(let A=n;A<s;A+=4){let P=Kt(A);(P==="coast"&&Nt(A).coast>.45||P==="mountain"&&Nt(A).mountain>.45)&&!Si(A+2,jt+4)&&this.guardrail(u,A,Math.min(A+4,s),d,_,y)}yield*this.placeCity(u,o,n,s,v,b,_,y,S,x,c,a,l),yield*this.placeSakura(u,o,n,s,v,b,_,y,x),this.placeCoast(u,o,n,s,v,b,_,y,x,h,d),yield,yield*this.placeCountry(u,o,n,s,v,b,_,y,x),yield*this.placeMountain(u,o,n,s,v,b,_,y,x),yield*this.placeSnow(u,o,n,s,v,b,_,y,x),yield*this.placeVerge(u,o,n,s,v,x,y),yield;let R=new Zt,M=(A,P,L,N,w=0,D)=>{if(!A)return null;let U=new ht(A,P);return U.castShadow=L,U.receiveShadow=N,U.renderOrder=w,D&&(U.userData.detail=D),R.add(U),U},E=new Set;for(let A of[n,n+20,n+40,s]){let P=Wr(A);E.add(P.a),P.t>0&&E.add(P.b)}M(c.build(),la([...E]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield;{let A=M(u.color.build(),this.M.color,!0,!0);A&&(A.customDepthMaterial=Pc)}if(yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(u.sig.build(),this.M.sig,!1,!1,0,"small"),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1,"small"),M(u.pool.build(),this.M.pool,!1,!1,2,"light"),h.length){let A=new xt,P=[],L=[],N=[];h.forEach((w,D)=>{for(let U of w)P.push(U[0],U[1],U[2]),L.push(U[3],U[4]);if(D>0){let U=(D-1)*2;N.push(U,U+2,U+1,U+1,U+2,U+3)}}),A.setAttribute("position",new Qe(P,3)),A.setAttribute("su",new Qe(L,2)),A.setIndex(N),A.computeBoundingSphere(),M(A,this.foamMat,!1,!1,1)}for(let A of f)M(A,this.riverMat,!1,!0);return R.position.set(a-this.origin.x,0,l-this.origin.z),{group:R,ox:a,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Gh+6,n=Kt(t);if(n==="sakura"||bs(t,6)||Qn(t,34)||Si(t,jt+12))return null;let s=Sn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,a,l,o,u,c){let h=Math.ceil((t-6)/Gh),f=Math.floor((n-6-.001)/Gh);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?u(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=Pn(Math.floor(Kn(p,31)*4294967295)),v=Uh(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&R0(r,m,-.11),p%2&&(yield);let b=this.poleSpec(p+1);if(b){let _=b.z==="city"?u(b.s)+.15:l(b.s,b.u),y=A0(a(b.s,b.u,_));r.color.setM(new Je);let S=[];for(let R=0;R<v.length;R++){let M=v[R],E=y[R],A=.35+d()*.4+(R>=7?.3:0);S.push(A),r.color.wire([M.x,M.y,M.z],[E.x,E.y,E.z],A,R>=7?.022:.015,da,10)}if(g.z!=="coast"&&d()<.38){let R=Math.floor(d()*4),M=v[R],E=y[R],A=1+Math.floor(d()*4),P=.18+d()*.5;for(let L=0;L<A;L++){let N=Math.min(.92,P+L*(.018+d()*.025)),w=M.x+(E.x-M.x)*N,D=M.z+(E.z-M.z)*N,U=M.y+(E.y-M.y)*N-S[R]*4*N*(1-N);r.color.box(w-.07,U+.015,D-.07,w+.07,U+.19,D+.07,tp),r.color.box(w-.045,U+.19,D-.045,w+.045,U+.27,D+.045,tp)}}}if(g.z==="city"){r.color.setM(new Je);let _=1+Math.floor(d()*3);for(let y=0;y<_;y++){let S=v[7+y%2],R=(d()-.5)*14,M=c(g.s+R),E=d()<.55,A=E?-(M+3.15):M+3.15,P=o(g.s+R,A,u(g.s+R)+5.2+d()*2.5);r.color.wire([S.x,S.y,S.z],P,.25+d()*.4,.012,da,8)}}}}*intersection(e,t,n,s,r,a,l,o,u,c,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=Nt(n),v=[d.city,d.sakura,d.coast,d.country],b=(y,S,R)=>[f.x+f.fx*(y-.5)+f.rx*S-c,R,f.z+f.fz*(y-.5)+f.rz*S-h],_=g+x+.15;for(let y of[-1,1]){let S=y*(g+x),R=y*80;u.grid(21,2,(P,L)=>{let N=S+(R-S)*P/20,w=(L?-3:3)*y,D=b(w,N,p+.165);return[D[0],D[1],D[2],0,1,0,w*y,N,v[0],v[1],v[2],v[3],g,10]});{let P=y*(g+x+3.2),L=-y*1.35,N=1.15,w=.42,D=(U,B)=>b(L+y*U,P-y*B,p+.18);e.decal.setM(new Je),e.decal.quad(D(-N,-w),D(N,-w),D(N,w),D(-N,w),[1,1,1],ca("tomare"))}for(let P of[-1,1]){let L=_+15+t()*3;for(;L<52;){let N=t.range(5.5,8.5),w=y*(L+N/2),D=t(),U=r(m+P*3.3,w,p+.14,P>0?Math.PI/2:-Math.PI/2,!1);ji(e,U,t,{type:D<.5?"house":"shop",w:N,d:t.range(7,10),floors:D<.5?2:t.int(2,3),tint:t.pick($i),litP:.45,fence:0}),L+=N+t.range(.2,1.2),yield}yield}let M=[30,54].map(P=>r(m+2.8,y*P,p+.15,-Math.PI/2,!1)),E=Pn(Math.floor(Kn(s,y>0?71:73)*4294967295)),A=M.map(P=>Uh(e,P,E,{trans:E()<.4}));e.color.setM(new Je);for(let P=0;P<7;P++){let L=A[0][P],N=A[1][P];e.color.wire([L.x,L.y,L.z],[N.x,N.y,N.z],.3+E()*.4,.014,da,10)}}Hh(e,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),Hh(e,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&V0(e,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,a,l,o,u,c){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=Nt(n),b=[v.city,v.sakura,v.coast,v.country],_=(D,U,B)=>[h.x+h.fx*D+h.rx*U-u,B,h.z+h.fz*D+h.rz*U-c],y=[7.6,4.7,-4.7,-7.6];for(let[D,U]of[[-m,-x],[x,m]])t.grid(25,y.length,(k,z)=>{let V=D+(U-D)*k/24,G=y[z],re=Math.abs(G)<5?d:Math.min(d-.05,l(n+G,V)-.03),Ve=_(G,V,re);return[Ve[0],Ve[1],Ve[2],0,1,0,G,V,b[0],b[1],b[2],b[3],p,5]});let S=(D,U,B)=>t.grid(2,2,(k,z)=>{let V=k?U:D,G=z?-3.3:3.3,J=_(G,V,B);return[J[0],J[1],J[2],0,1,0,G,V,b[0],b[1],b[2],b[3],p,6]});S(-p,p,f+.03),g>0&&(S(-x,-p,f+.165),S(p,x,f+.165));let R=(D,U,B,k)=>t.grid(2,2,(z,V)=>{let G=z?k:B,J=V?U:D,re=_(J,G,f+.025);return[re[0],re[1],re[2],0,1,0,J,G,b[0],b[1],b[2],b[3],p,7]});R(-7.15,-7.6,-p+.3,-.12),R(7.6,7.15,.12,p-.3),yield;let M=s(n,0,f,-Math.PI/2,!1),E=e.color;E.setM(M);let A=[.42,.4,.38],P=[.3,.29,.28],L=[.55,.57,.6];for(let D of[-2,2])for(let U of[-.5335,.5335]){let B=-(D+U);for(let[k,z]of[[-m,-x],[x,m]])E.box(k,.26,B-.035,z,.34,B+.035,A);E.box(-x,0,B-.035,x,.04,B+.035,P)}let N=[-146,-104,-64,-26,26,64,104,146];for(let D of N){for(let U of[-4.95,4.95])E.box(D-.12,.18,U-.12,D+.12,7.4,U+.12,L);E.box(D-.1,6.95,-5.15,D+.1,7.2,5.15,L);for(let U of[-2,2])E.box(D-.04,6.3,-U-.04,D+.04,6.95,-U+.04,L)}for(let D of[-2,2])for(let U=0;U<N.length-1;U++)E.wire([N[U],5.35,-D],[N[U+1],5.35,-D],.05,.011,da,6),E.wire([N[U],6.4,-D],[N[U+1],6.4,-D],.45,.011,da,8);yield;let w=Math.round((n-Ws)/Gs);if(v.country>.9&&Kn(w,17)<.7){let D=Kn(w,19)<.5?-1:1,U=D>0?p+9:-(p+9+46),B=D>0?p+9+46:-(p+9);G0(e,M,U,B,D*(p+9),Math.abs(w)%4,Pn(Math.floor(Kn(w,23)*4294967295))),E.setM(M)}yield;for(let D of Ic(this.path,n)){let U=new Je().makeRotationY(D.yaw);U.setPosition(D.x-u,D.y,D.z-c),q0(e,U)}Ms(e,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),Ms(e,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=Nt(n),v=[d.city,d.sakura,d.coast,d.country],b=d.sakura>.5,_=222,y=x+m+.5,S=g-oa,R=(w,D,U)=>[p.x+p.fx*w+p.rx*D-u,U,p.z+p.fz*w+p.rz*D-c];{let w=[],D=[],U=[];for(let z=0;z<=74;z++){let V=-_+2*_*z/74;for(let G of[12.5,-12.5]){let J=R(G,V,S);w.push(J[0],J[1],J[2]),D.push(G,V)}if(z>0){let G=(z-1)*2;U.push(G,G+1,G+2,G+1,G+3,G+2)}}let k=new xt;k.setAttribute("position",new Qe(w,3)),k.setAttribute("su",new Qe(D,2)),k.setIndex(U),k.computeBoundingSphere(),f.push(k)}for(let[w,D]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,B]of[[-_,-(x+3.4)],[x+3.4,_]])t.grid(41,2,(k,z)=>{let V=U+(B-U)*k/40,G=z?D:w,J=R(G,V,g+.38);return[J[0],J[1],J[2],0,1,0,G,V,v[0],v[1],v[2],v[3],x,9,1]});yield;let M=s(n,0,g,0,!1),E=e.color,A=[.74,.73,.7],P=b?[.78,.2,.15]:[.55,.72,.64];E.setM(M),E.box(-24.5,-1,-y,24.5,-.03,y,A,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-oa-1.4,-y+.6,w+.7,-1,y-.6,A);for(let w of[-25.7,25.7])E.box(w-1.2,-oa+.4,-y-.4,w+1.2,-.05,y+.4,A);for(let w of[-24.5,24.5])E.box(w-.16,.004,-x,w+.16,.016,x,[.33,.32,.31]),E.box(w-.02,.016,-x,w+.02,.02,x,[.2,.19,.19]);let L=m>0?.15:0;for(let w of[-1,1]){let D=w*(y-.14);for(let U=-24;U<=24.01;U+=2)E.box(U-.06,L,D-.06,U+.06,L+1,D+.06,P);E.box(-24,L+.95,D-.08,24,L+1.08,D+.08,P),E.box(-24,L+.48,D-.03,24,L+.54,D+.03,P),E.box(-24,L+.06,D-.03,24,L+.12,D+.03,P)}let N="bridge"+Math.abs(Math.round(n/Xs))%4;for(let w of[-25,25])for(let D of[-1,1]){let U=D*(y-.1),B=[.7,.69,.65];E.box(w-.32,L,U-.32,w+.32,L+1.45,U+.32,B),E.box(w-.38,L+1.45,U-.38,w+.38,L+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(M);let k=(w<0?-1:1)*.325,z=N;w<0?e.atlas.quad([w-.325,L+.3,U-.22],[w-.325,L+.3,U+.22],[w-.325,L+1.3,U+.22],[w-.325,L+1.3,U-.22],[1,1,1],ca(z)):e.atlas.quad([w+.325,L+.3,U+.22],[w+.325,L+.3,U-.22],[w+.325,L+1.3,U-.22],[w+.325,L+1.3,U+.22],[1,1,1],ca(z)),E.setM(M)}ua(e,s(n-14,-(y-.45),g+L,0,!0)),ua(e,s(n+14,y-.45,g+L,0,!0)),yield;for(let w of[-18,18])for(let D of[-1,1]){yield;for(let U=11+h()*4;U<(b?125:170);U+=b?h.range(8.5,11):h.range(18,34)){let B=n+w+(h()-.5)*1.5,k=D*U;Ln(e,s(B,k,l(B,k),h()*6,!1),b?"sakura":"broad",h,b?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n.s,{}),g=p.y,x=u(n.s),m=x+1.4,d=Nt(n.s),v=[d.city,d.sakura,d.coast,d.country],b=a(n.s,0,g,0,!1),_=e.color,y=Math.max(s,n.s-en)-n.s,S=Math.min(r,n.s+en)-n.s;if(S>y+.01){let M=Math.max(2,Math.ceil((S-y)/3)+1),E=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];t.gridN(M,E.length,(B,k)=>{let z=y+(S-y)*B/(M-1),V=n.s+z,G=E[k],J=g+Ac(z,G);return[p.x+p.fx*z+p.rx*G-c,J,p.z+p.fz*z+p.rz*G-h,0,1,0,Qi(V,ys),G,v[0],v[1],v[2],v[3],x,0,-1]});let A=[[-x,0],[-x,.2],[-m,.2],[-m,3.2]];for(let B=1;B<12;B++){let k=Math.PI*(1-B/12);A.push([m*Math.cos(k),3.2+3*Math.sin(k)])}A.push([m,3.2],[m,.2],[x,.2],[x,0]);let P=[.86,.82,.72],L=[.44,.45,.47],N=[.62,.61,.58],w=[];for(let B=y;B<S-.01;B+=6)w.push(B);w.push(S),_.setM(b);for(let B=0;B<w.length-1;B++)for(let k=0;k<A.length-1;k++){let[z,V]=A[k],[G,J]=A[k+1],re=Math.max(V,J)<=.21?N:Math.abs(z)>m-.01&&Math.abs(G)>m-.01?P:L;_.quad([w[B],V,z],[w[B+1],V,z],[w[B+1],J,G],[w[B],J,G],re)}e.sodium.setM(b),e.sig.setM(b);let D=m*Math.cos(Math.PI/6)-.12,U=3.2+3*Math.sin(Math.PI/6)-.08;for(let B=Math.ceil((y+en-3)/6)*6+3-en;B<S;B+=6)for(let k of[-1,1])e.sodium.box(B-.45,U-.07,k*D-.13,B+.45,U+.07,k*D+.13,null),Ks(e,b,B,U-.1,k*D,1);for(let B=Math.ceil((y+en)/24)*24-en;B<S;B+=24)e.sig.box(B-.3,.95,-m+.01,B+.3,1.2,-m+.06,null);for(let B=Math.ceil((y+en-30)/60)*60+30-en;B<S;B+=60)for(let k of[-1.15,1.15])_.box(B-1.1,5.2,k-.36,B+1.1,5.78,k+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(B-.08,5.78,k-.05,B+.08,6.15,k+.05,[.4,.4,.42]);yield}for(let M of[-1,1]){let E=n.s+M*en,A=M*(en+.08);if(E<s||E>=r)continue;let P=[];for(let J of Q0)J>=1.44&&P.push(x+J,-(x+J));for(let J of ep)J>x+3.5&&J<x+21&&P.push(J,-J);for(let J=0;J<=24;J++)P.push(-m+2*m*J/24);P.push(-m-.01,m+.01),P.sort((J,re)=>J-re);let L=J=>3.2+3*Math.sqrt(Math.max(0,1-(J/m)**2)),N=J=>Math.max(o(E-M*.03,J)-g,Ac(M*(en-.03),J)),w=J=>Math.abs(J)<=m+1e-6?L(J):o(E+M*.03,J)-g,D=[.78,.77,.73],U=[.66,.65,.62];_.setM(b);for(let J=0;J<P.length-1;J++){let re=P[J],Ve=P[J+1];if(Ve-re<1e-4)continue;let ge=N(re),Oe=N(Ve),q=w(re),$=w(Ve);ge-q<.01&&Oe-$<.01||(M<0?_.quad([A,q,re],[A,$,Ve],[A,Oe,Ve],[A,ge,re],D):_.quad([A,$,Ve],[A,q,re],[A,ge,re],[A,Oe,Ve],D))}for(let J=0;J<24;J++){let re=-m+2*m*J/24,Ve=-m+2*m*(J+1)/24,ge=L(re),Oe=L(Ve),q=A+M*.02;M<0?_.quad([q,ge,re],[q,Oe,Ve],[q,Oe+.55,Ve*1.08],[q,ge+.55,re*1.08],U):_.quad([q,Oe,Ve],[q,ge,re],[q,ge+.55,re*1.08],[q,Oe+.55,Ve*1.08],U)}e.atlas.setM(b);let B=1.9,k=7.05,z=7.85,V=A+M*.03,G=ca("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));M<0?e.atlas.quad([V,k,-B],[V,k,B],[V,z,B],[V,z,-B],[1,1,1],G):e.atlas.quad([V,k,B],[V,k,-B],[V,z,-B],[V,z,B],[1,1,1],G)}yield;let R=d.mountain>.5;for(let M=Math.max(s,n.s-jt*.95)+f()*3;M<Math.min(r,n.s+jt*.95);M+=f.range(4,8)){let E=Math.abs(M-n.s)>en-4?17:4;for(let A of[-1,1]){let P=A*(x+f.range(E,50)),L=f();Ln(e,l(M,P,-.3,f()*6,!1),R?L<.5?"maple":L<.8?"cedar":"ginkgo":L<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,a,l,o,u){let c=h=>Nt(h).snow;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*20;f<s;f+=t.range(22,40)){if(c(f)<.6||t()<.5)continue;let p=h*t.range(18,90);ji(e,a(f,p,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick($i),litP:.62,fence:0,snow:!0});for(let g=0;g<2+t()*3;g++)Ln(e,a(f+t.range(-9,9),p+h*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let f=n+t()*5;f<s;f+=t.range(3,7))c(f)<.5||(t()<.32&&Ln(e,a(f,h*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Ln(e,a(f,h*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(c(h)<.55)continue;let f=o(h);{let p=r(h,-(f+.95),l(h)+1.3),g=r(h+18,f+.95,l(h+18)+1.3);p.groundY=l(h),g.groundY=l(h+18),Bh(e,p,1),Bh(e,g,-1)}}}}*placeMountain(e,t,n,s,r,a,l,o,u){let c=h=>Nt(h).mountain;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*4;f<s;f+=t.range(4.5,8.5)){if(c(f)<.45||Si(f,jt+6))continue;let p=o(f),g=t();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";Ln(e,a(f,p+t.range(17,70),-.25,t()*6,!1),x,t,t.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";Ln(e,a(f,-(p+t.range(3.5,34)),-.25,t()*6,!1),x,t,t.range(.95,1.35))}}yield}for(let h=n+t()*4;h<s;h+=t.range(3,6)){if(c(h)<.5)continue;let f=t()<.7,p=-(o(h)+(f?t.range(108,205):t.range(36,100)));Ln(e,a(h,p,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Je);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(c(h)<.5||Si(h,jt+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));L0(e,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(c(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?Ms(e,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):Ms(e,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,a,l){for(let o of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(bs(u,10)||Qn(u,31)||Si(u,jt+4))continue;let c=Kt(u),h=l(u),f,p,g=.22,x=1;if(c==="country")f=h+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),p=.95;else if(c==="sakura")f=h+2.68+t()*1.3,p=.55,g=.3;else if(c==="coast"){if(o<0)continue;f=h+.95+t()*1.7,p=.75,g=.18}else{if(c==="snow")continue;if(c==="mountain")f=o<0?h+1+t()*.35:h+.25+t()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(Wh(u,5))continue;f=h+3.02+t()*.1,p=.1,g=.08,x=.65}}if(t()>p)continue;let m=o*f;U0(e,r(u,m,a(u,m),t()*6.28,!1),t,t()<g?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,a){e.color.setM(new Je);let l=Math.max(1,Math.round((n-t)/2));for(let o=0;o<l;o++){let u=t+(n-t)*o/l,c=t+(n-t)*(o+1)/l,h=-(a(u)+.95),f=-(a(c)+.95),p=r(u),g=r(c),x=(y,S,R)=>s(y,S,R),m=x(u,h,p+.52),d=x(c,f,g+.52),v=x(u,h,p+.84),b=x(c,f,g+.84);e.color.quad(m,d,b,v,ce.rail),e.color.quad(d,m,v,b,[.62,.64,.66]);let _=s(u,h-.05,p);e.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(e,t,n,s,r,a,l,o,u,c,h,f,p){for(let m of[-1,1]){let d=n+t()*2;for(;d<s-2;){{let N=Nt(d);if(N.city<.62||N.mountain>.1){d+=4;continue}}{let N=qr(d+6);if(N&&d<N.s+8.5&&d+14>N.s-8.5){d=Math.max(d+1,N.s+8.5);continue}}let v=Qi(d,150);if(v>145.6||v<3.4){d+=1;continue}let b=o(d),_=u(d)||3,y=b+_+.15,S=t(),R=S<.42?"shop":S<.58?"apt":S<.68?"office":S<.82?"house":S<.88?"konbini":S<.94?"parking":"gap",M=R==="shop"?t.range(5,9):R==="apt"?t.range(10,16):R==="office"?t.range(10,14):R==="house"?t.range(7,9.5):R==="konbini"?t.range(12,14):R==="parking"?t.range(7,11):t.range(2,3.5);if(d+M>s){if(s-d<5||R==="konbini")break;M=s-d-.2}{let N=Math.ceil((d+4.4)/150)*150-4.4;if(d+M>N-.1){if(N-.1-d<4){d=N+7.9;continue}M=N-.1-d}}let E=d+M/2,A=l(E),P=t.pick($i),L=.42;if(R==="parking"){let N=r(E,m*(y+3),A+.15);t()<.8&&H0(e,Oc(N,0,0,.5,(t()-.5)*.1),t),e.color.setM(N),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,ce.concrete)}else if(R!=="gap"){let N=r(E,m*y,A+.15),w={type:R,w:M,d:R==="apt"||R==="office"?t.range(10,14):t.range(8,12),floors:R==="shop"?t.int(2,4):R==="apt"?t.int(4,9):R==="office"?t.int(4,8):2,tint:P,litP:L,fence:R==="house"&&t()<.5?1.2:0};if(ji(e,N,t,w),R!=="house"&&t()<.28&&Oh(e,r(E+(t()-.5)*(M-1.2),m*(y-.42),A+.15),t),(R==="shop"||R==="konbini")&&t()<.3)for(let D=0;D<1+t()*3;D++)C0(e,r(E-M/2+.8+D*.55,m*(y-.75),A+.15,Math.PI/2+.1),t);if(R==="house"&&t()<.6)for(let D=0;D<2+t()*3;D++)I0(e,r(E+1+D*.5,m*(y-.3),A+.15),t);if(t()<.03)for(let D=0;D<3;D++)P0(e,r(E+D*.9,m*(b+.35),A))}d+=M+t.range(.05,.5),yield}for(let v=n+t()*10;v<s-8;v+=t.range(14,26)){if(Nt(v).city<.7||Nt(v).mountain>.1||t()<.3||bs(v,18)||Wh(v,15))continue;let b=o(v),_=r(v,m*(b+3.2+t.range(14,20)),l(v)+.1);ji(e,_,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick($i),litP:.4})}if(Nt(n+30).city>.7&&Nt(n+30).mountain<.1&&t()<.65){let v=n+t()*qt;if(bs(v,24)||Wh(v,20))continue;let b=r(v,m*t.range(55,150),l(v));ji(e,b,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick($i),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(Kt(d)!=="city"||Nt(d).mountain>.1)continue;let v=o(d);yield*this.intersection(e,t,d,m,r,l,o,u,h,f,p),Ms(e,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),Ms(e,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),zh(e,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&Ms(e,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,a,l,o,u){for(let f of[-1,1]){for(let p=n+t()*4;p<s;p+=t.range(7.5,10)){if(Nt(p).sakura<.45||Qn(p,30))continue;let g=o(p);Ln(e,a(p,f*(g+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&Ln(e,a(p+3,f*(g+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Kt(p)!=="sakura"||Qn(p,30))continue;let g=o(p);ua(e,r(p,f*(g+2.25),l(p)+.15)),Qi(p,48)<24&&Y0(e,r(p+6,f*(g+3),u(p+6,f*(g+3))))}for(let p=n+t()*15;p<s;p+=t.range(14,24)){if(Kt(p)!=="sakura"||t()<.35||Qn(p,45))continue;let g=o(p);ji(e,a(p,f*(g+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick($i),litP:.45,fence:t()<.6?1.4:0})}}let h=Math.floor((n+qt/2)/480)*480+240;h>=n&&h<s&&Kt(h)==="sakura"&&!Qn(h,60)&&Vh(e,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(e,t,n,s,r,a,l,o,u,c,h){for(let g=0;g<=20;g++){let x=n+g/20*qt;if(Nt(x).coast<.85||Si(x,jt*1.25)){c.length&&c[c.length-1]!==null&&c.push(null);continue}let d=o(x),v=d+11,b=d+19,_=h(x,-v,_s+.06),y=h(x,-b,_s+.06);c.push([[_[0],_[1],_[2],Qi(x,ys),0],[y[0],y[1],y[2],Qi(x,ys),1]])}let f=c.indexOf(null);f>=0&&(c.length=f),c.length<2&&(c.length=0);for(let g=n+t()*6;g<s;g+=t.range(5,9)){if(Kt(g)!=="coast"||Si(g,jt+6))continue;let x=o(g);t()<.7&&Ln(e,a(g,x+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Ln(e,a(g+2,-(x+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let g=n+4;g<s;g+=t.range(18,30)){if(Kt(g)!=="coast"||t()<.4||Si(g,jt*1.4))continue;let x=o(g),m=3+Math.floor(t()*5);for(let d=0;d<m;d++){let v=-(x+t.range(12,17)),b=g+t.range(-3,3);$0(e,r(b,v,Math.max(u(b,v),_s-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Kt(g)!=="coast"||Si(g,jt+4))continue;let x=o(g);Fh(e,a(g,x+1),t)}if(Kt(n+30)==="coast"&&t()<.5){let g=n+t()*qt,x=o(g);Si(g,jt+25)||ji(e,a(g,x+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick($i),litP:.5,fence:0})}if(Kt(n+30)==="coast"&&t()<.55){let g=n+t()*qt;K0(e,r(g,-(o(g)+t.range(45,220)),_s-.25,t()*6,!1),t)}let p=Math.floor((n+qt/2)/1500)*1500+700;p>=n&&p<s&&Kt(p)==="coast"&&!Si(p,jt*1.6)&&J0(e,r(p,-(o(p)+75),_s-1,0,!1))}*placeCountry(e,t,n,s,r,a,l,o,u){for(let g of[-1,1]){yield;for(let x=n+t()*20;x<s;x+=t.range(20,40)){if(Kt(x)!=="country"||t()<.55||bs(x,16)||Qn(x,48))continue;let m=g*t.range(16,95),d=a(x,m);ji(e,d,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick($i),litP:.5,fence:0});for(let v=0;v<2+t()*3;v++){let b=m+g*t.range(6,14),_=x+t.range(-8,8);Ln(e,a(_,b,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let x=n+t()*8;x<s;x+=t.range(5,9)){if(Kt(x)!=="country"||bs(x,7)||Qn(x,36))continue;let m=g*t.range(140,210);Ln(e,a(x,m,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!bs(x+2,8)&&!Qn(x+2,34)&&Ln(e,a(x+2,g*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let c=Math.floor((n+qt/2)/600)*600+300;if(c>=n&&c<s&&Kt(c)==="country"&&!Qn(c,40)){let g=o(c);Z0(e,r(c,-(g+1.6),l(c)-.08),t)}let h=Math.floor((n+qt/2)/700)*700+120;if(h>=n&&h<s&&Kt(h)==="country"&&!Qn(h,40)){let g=o(h);Oh(e,r(h,-(g+.95),l(h)-.08),t),Fh(e,r(h+2,-(g+.8),l(h)-.08),t)}let f=Math.floor((n+qt/2)/900)*900+450;if(f>=n&&f<s&&Kt(f)==="country"&&!Qn(f,40)){let g=o(f);j0(e,a(f,g+5),t)}let p=Math.floor((n+qt/2)/380)*380+190;if(p>=n&&p<s&&Kt(p)==="country"&&!Qn(p,40)&&!bs(p,30)){let g=o(p),x=(Kn(Math.round(p),5)<.5?-1:1)*(g+2.75);X0(e,a(p,x,0))}for(let g=n;g<s;g+=30){if(Kt(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&t()<.5){let m=x>0?-1:1,d=o(g);zh(e,a(g,m*(d+.75)),m>0?-1:1)}}}};var zc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new fe(e):e)),le={zenith:new fe,horizon:new fe,sunCol:new fe,sunI:1,hemiSky:new fe,hemiGround:new fe,hemiI:1,fog:new fe,cLit:new fe,cShade:new fe,cRim:new fe,night:0,warm:0,overcast:0,rain:0,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0};function ip(i){let e=0;for(;e<zc.length-2&&zc[e+1][0]<=i;)e++;let t=zc[e],n=zc[e+1],s=Sc(Ot((i-t[0])/(n[0]-t[0]),0,1)),r=(a,l)=>l.copy(t[a]).lerp(n[a],s);r(1,le.zenith),r(2,le.horizon),r(3,le.sunCol),le.sunI=Pt(t[4],n[4],s),r(5,le.hemiSky),r(6,le.hemiGround),le.hemiI=Pt(t[7],n[7],s),r(8,le.fog),r(9,le.cLit),r(10,le.cShade),r(11,le.cRim),le.night=Pt(t[12],n[12],s),le.warm=Pt(t[13],n[13],s),le.sunEl=sp(i,le.sunDir,le.moonDir,le.lightDir)}function sp(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Ot((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var ry=new H,oy=new H;function Yh(i,e){return sp((i%1+1)%1,ry,oy,e),e}var np={zenith:[new fe("#7b8594"),new fe("#141a28")],horizon:[new fe("#b5bcc6"),new fe("#283042")],fog:[new fe("#a8b0ba"),new fe("#232b3c")],hemiSky:[new fe("#aab3bf"),new fe("#3c4866")],hemiGround:[new fe("#8b8983"),new fe("#1e2030")],cLit:[new fe("#d0d5dc"),new fe("#2c3240")],cShade:[new fe("#7c8593"),new fe("#151922")]},qh=new fe;function rp(i,e){if(le.overcast=i,le.rain=e,i<=.001)return;let t=le.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])qh.copy(np[n][0]).lerp(np[n][1],t),le[n].lerp(qh,i*(n==="cLit"||n==="cShade"?.75:.85));le.sunI*=1-.82*i,le.warm*=1-i,le.cRim.multiplyScalar(1-i),le.sunCol.lerp(qh.setRGB(.85,.87,.9),i*.6)}function op(){let i=new dt({side:Mn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:le.zenith},uHorizon:{value:le.horizon},uSunDir:{value:le.sunDir},uMoonDir:{value:le.moonDir},uNoiseTex:Xe.uNoiseTex,uSunCol:{value:le.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new fe},uOvercast:{value:0},uDeckLit:{value:new fe},uDeckDark:{value:new fe},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
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
      }`}),e=new ht(new zo(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function ay(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,a=e?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;t.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=e?6:2,o=s*.82,u=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let b=0;b<v;b++){let _=(v===1?0:b/(v-1)-.5)*o+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,o*=e?.8:.66}let c=t.slice();for(let d of c){if(t.length>92)break;let v=1+Math.floor(i()*2);for(let b=0;b<v;b++){let _=.35+i()*2.4,y=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,y])}}let h=t.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function ap(i){let t={value:Array.from({length:96},()=>new yt)},n=new dt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Xe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),s=new ht(new Xt(1,1),n),r=new Us,a=new Wi;r.add(s);let l=new Ft(1024*2,1024*2,{generateMipmaps:!0,minFilter:Wn,magFilter:kt}),o=i.getRenderTarget(),u=i.autoClear,c=Pn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=ay(c,p);g.forEach((x,m)=>t.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=u,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function lp(i){let e=Pn(5),t=22,n=[],s=new Xt(1,1);s.translate(0,.5,0);let r=new Un(new Float32Array(t*4),4),a=new Un(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new dt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:le.cLit},uShade:{value:le.cShade},uRim:{value:le.cRim},uHaze:{value:le.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new Gi(s,l,t);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<t;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:g/t*Math.PI*2+e.range(-.15,.15),d:x?e.range(2600,3400):e.range(1300,2200),base:x?e.range(-60,60):e.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let u=new Je,c=new xn,h=new H,f=new H,p=new H(0,1,0);return{group:o,update(g,x){let m=Math.atan2(le.lightDir.x,le.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,b)=>b.d-v.d).forEach((v,b)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),c.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),u.compose(h,c,f),o.setMatrixAt(b,u);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-y*y*(3-2*y);r.setXYZW(b,v.cell[0],v.cell[1],S,v.haze),a.setX(b,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+le.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-le.night*.35)*(1-le.overcast*.55)*(1-.85*le.rain)}}}function cp(){let i=new Zt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*t.R,g=Math.cos(f)*t.R,x=Tc(h/360*t.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=t.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new xt;o.setAttribute("position",new Qe(r,3)),o.setAttribute("hf",new Qe(a,2)),o.setIndex(l);let u=new dt({side:vn,fog:!1,uniforms:{uCol:{value:new fe(t.col)},uHaze:{value:le.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Xe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${bi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),c=new ht(o,u);c.frustumCulled=!1,c.renderOrder=999,i.add(c)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-le.night))*(1-.35*le.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var Qr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function up(i){let e=i.get("weather"),t={mode:Qr[e]?e:"auto",kind:Qr[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Qr[e]&&(t.ov=Qr[e][0],t.rain=Qr[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Qr[t.kind];t.ov+=Ot(s-t.ov,-n/28,n/28);let a=t.ov>.75?r:0;t.rain+=Ot(a-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var ci={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new yt(0,-1e3,0,0),new yt(0,-1e3,0,0)]},uLampCol:{value:new fe(1,.8,.52)}},kc=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function hp(){let e=new H(42,22,42),t=new Xt(1,1),n=new ps;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2400;let r=new dt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new fe(1,1,1)},...ci},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${kc}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new ht(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*c,.33+.67*c,.42+.58*c)}}}function fp(){let e=new H(46,24,46),t=new Xt(1,1);t.translate(0,.5,0);let n=new ps;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2600;let r=new dt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new fe(.8,.85,.95)},...ci},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${kc}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ht(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*c,.12+.83*c,.16+.84*c)}}}var Fn=64,Zh=[2.2,1.3,2.6],ly=[-2.4,.35,-1.6];function dp(){let i=new Float32Array(Fn*3),e=new Float32Array(Fn*3),t=new Float32Array(Fn*4),n=new Float32Array(Fn),s=new Uint8Array(Fn),r=new Float32Array(Fn);for(let b=0;b<Fn;b++)t[b*4]=t[b*4+1]=1;let a=new Xt(1,1),l=new ps;l.index=a.index,l.setAttribute("position",a.attributes.position),l.setAttribute("uv",a.attributes.uv),l.instanceCount=0;let o=new Float32Array(Fn*4),u=new Float32Array(Fn*4),c={uP:{value:o},uC:{value:u},uNoiseTex:Xe.uNoiseTex,uAmb:{value:new fe},uSun:{value:new fe},uTail:{value:new yt},uCam:{value:new H},...ci},h=new dt({transparent:!0,depthWrite:!1,fog:!1,uniforms:c,vertexShader:`
      uniform vec4 uP[${Fn}], uC[${Fn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${kc}
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
      }`}),f=new ht(l,h);f.frustumCulled=!1,f.renderOrder=4,f.visible=!1;let p=0,g=0,x=0,m=0,d=!1;function v(b,_,y,S,R,M,E,A,P,L,N){let w=p;p=(p+1)%Fn,i[w*3]=_,i[w*3+1]=y,i[w*3+2]=S,e[w*3]=R,e[w*3+1]=M,e[w*3+2]=E,t[w*4]=0,t[w*4+1]=A,t[w*4+2]=P,t[w*4+3]=L,n[w]=N,s[w]=b,r[w]=Math.random()}return{mesh:f,update(b,_,y,S,R,M,E,A,P,L,N){if(!N){if(d){for(let q=0;q<Fn;q++)t[q*4]=t[q*4+1];d=!1}f.visible=!1;return}let w=_.position,D=_.rotation.y,U=Math.cos(D),B=Math.sin(D),k=B*y,z=U*y,V=Math.min(1,Math.max(0,(y-2)/14)),G=R>.3?2:0,J=G?R:S;for(g+=24*J*V*b;g>=1;){g-=1;let q=(m^=1)?1:-1,$=q*.67,Me=-1.28-Math.random()*.2,Ne=Math.random(),xe=Math.random(),Ye=1.6+1.6*Ne,it=G?.5+.7*xe:.9+1*xe,st=q*(.3+.6*Math.random());v(G,w.x+$*U+Me*B,w.y+.12,w.z-$*B+Me*U,k*.55-B*Ye+st*U,it,z*.55-U*Ye-st*B,G?.45+.3*Ne:.55+.35*Ne,.2+.1*xe,G?.7+.35*xe:.8+.4*xe,.5*(.5+.5*V)*Math.min(1,J*1.5))}for(x+=(5+4*V)*M*b;x>=1;){x-=1;let q=Math.random();v(1,w.x-.42*U-1.78*B,w.y+.26,w.z+.42*B-1.78*U,k*.5-B*.8,.25+.2*q,z*.5-U*.8,1.3+.6*q,.14,.8+.4*Math.random(),.32*Math.min(1,M*1.5))}let re=0,Ve=Math.exp(-Zh[0]*b),ge=Math.exp(-Zh[1]*b),Oe=Math.exp(-Zh[2]*b);for(let q=0;q<Fn;q++){let $=q*4;if(t[$]>=t[$+1])continue;let Me=t[$]+=b,Ne=t[$+1];if(Me>=Ne)continue;let xe=s[q],Ye=xe===0?Ve:xe===1?ge:Oe,it=q*3,st=i[it]-L.x,ot=i[it+1]-L.y,pt=i[it+2]-L.z;if(st*st+ot*ot+pt*pt<20.25){t[$]=Ne;continue}e[it]*=Ye,e[it+1]=e[it+1]*Ye+ly[xe]*b,e[it+2]*=Ye,i[it]+=e[it]*b,i[it+1]=Math.max(w.y+.05,i[it+1]+e[it+1]*b),i[it+2]+=e[it+2]*b;let ct=Me/Ne,gt=re*4;o[gt]=i[it],o[gt+1]=i[it+1],o[gt+2]=i[it+2],o[gt+3]=t[$+2]+(t[$+3]-t[$+2])*Math.sqrt(ct),u[gt]=n[q]*Math.min(1,ct*6)*(1-ct)*(1-ct),u[gt+1]=xe,u[gt+2]=r[q],re++}d=re>0,f.visible=d,l.instanceCount=re,d&&(c.uAmb.value.copy(E),c.uSun.value.copy(A),c.uTail.value.copy(P),c.uCam.value.copy(L))},shift(b,_){for(let y=0;y<Fn;y++)i[y*3]-=b,i[y*3+2]-=_}}}var js=24,cy=55,uy=12;function pp(){let i=[],e=new Float32Array(js*2*2),t=new Float32Array(js*2*3);for(let u=0;u<js;u++)if(e.set([u,-1,u,1],u*4),u<js-1){let c=u*2;i.push(c,c+1,c+2,c+1,c+3,c+2)}let n=new xt;n.setAttribute("position",new zt(t,3)),n.setAttribute("aI",new zt(e,2)),n.setIndex(i);let s=new Float32Array(js*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new fe},uTime:{value:0},uNoiseTex:Xe.uNoiseTex},a=new dt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${js}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${bi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new ht(n,a);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let o={};return{mesh:l,update(u,c,h,f,p,g,x,m){if(l.visible=g>.01,!!l.visible){for(let d=0;d<js;d++)u.at(c+cy+d*uy,o),s[d*4]=o.x-h,s[d*4+1]=o.y,s[d*4+2]=o.z-f,s[d*4+3]=o.h;r.uW.value=p*.85,r.uHot.value=g,r.uTime.value=x,r.uSky.value.copy(m)}}}}var eo=72;function hy(){let i=[],e=[],t=(s,r,a,l,o,u)=>{i.push(...s,...r,...a),e.push(l,o,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new xt;return n.setAttribute("position",new Qe(i,3)),n.setAttribute("aWing",new Qe(e,1)),n}function mp(){let i=hy(),e=new Un(new Float32Array(eo*3),3),t=new Un(new Float32Array(eo*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new dt({side:vn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:le.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Gi(i,n,eo);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new Je,o=new xn,u=new Hn(0,0,0,"YXZ"),c=new H,h=new H,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let b=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+b>eo)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,R=new H().copy(m).addScaledVector(d,_).addScaledVector(v,y-S*75);R.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new H().copy(v).multiplyScalar(S*M).addScaledVector(d,(Math.random()-.3)*M*.6),A=x==="small"?.8:1.45,P=Array.from({length:b},(L,N)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:R,vel:E,birds:P,size:A,life:60})}function g(x,m,d,v){if(r.some(y=>y.kind==="gull")||f()+4>eo)return;let b=new H().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);b.y=x.y+18;let _=Array.from({length:4},(y,S)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:b,vel:new H,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,b,_,y,S,R){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let M=y>.35&&S<.3,E=le.warm>.25&&le.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,v,b)),(E||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,p("crow",d,v,b)),_.coast>.6&&M&&g(d,v,b,1);let A=[.1+.08*y,.11+.09*y,.15+.1*y],P=0;for(let L=r.length-1;L>=0;L--){let N=r[L];if(N.kind==="gull"?(N.c.lerp(c.copy(R).addScaledVector(v,60).addScaledVector(b,-42).setY(R.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(N.life=Math.min(N.life,8),N.c.y+=x*6)):N.c.addScaledVector(N.vel,x),N.life-=x,N.life<0||N.kind!=="gull"&&N.c.distanceTo(d)>300){r.splice(L,1);continue}for(let w of N.birds){if(P>=eo)break;let D,U,B,k;N.kind==="gull"?(w.w+=x*(14/w.r),D=N.c.x+Math.cos(w.w)*w.r,B=N.c.z+Math.sin(w.w)*w.r,U=N.c.y+w.h+Math.sin(m*.4+w.ph)*2,k=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(D=N.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,U=N.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,B=N.c.z+w.off.z,k=Math.atan2(N.vel.x,N.vel.z)),u.set(0,k,Math.sin(m+w.ph)*.15),o.setFromEuler(u),h.setScalar(N.size),l.compose(c.set(D,U,B),o,h),s.setMatrixAt(P,l);let z=N.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:N.kind==="crow"?[.05,.05,.07]:A;e.setXYZ(P,z[0],z[1],z[2]),t.setXY(P,w.fq,w.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function gp(){let i=new dt({fog:!1,uniforms:{uNoiseTex:Xe.uNoiseTex,uTime:{value:0},uCam:{value:new H},uSunDir:{value:le.lightDir},uSunCol:{value:le.sunCol},uHorizon:{value:le.horizon},uZenith:{value:le.zenith},uFog:{value:le.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`}),e=new ht(new Xt(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=_s,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=le.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-le.overcast*.85}}}function xp(){return new dt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new fe(1,1,1)},uNoiseTex:Xe.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${bi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function vp(){return new dt({fog:!1,uniforms:{uNoiseTex:Xe.uNoiseTex,uTime:{value:0},uSunDir:{value:le.lightDir},uSunCol:{value:le.sunCol},uHorizon:{value:le.horizon},uZenith:{value:le.zenith},uFog:{value:le.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`})}var pa=new H;function ui(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;pa.copy(e),pa[n]=0,pa.normalize();let u=.5*a/(a+l),c=1-pa.angleTo(i)/o;return Math.sign(pa[t])===1?c*u:l/(a+l)+u+u*(1-c)}var Ti=class i extends vi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new H,u=new H,c=new H(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new H,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),u.copy(o),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),h[d+0]=c.x*Math.sign(o.x)+u.x*r,h[d+1]=c.y*Math.sign(o.y)+u.y*r,h[d+2]=c.z*Math.sign(o.z)+u.z*r,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=ui(x,u,"z","y",r,n),p[v+1]=1-ui(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),p[v+0]=1-ui(x,u,"z","y",r,n),p[v+1]=1-ui(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),p[v+0]=1-ui(x,u,"x","z",r,e),p[v+1]=ui(x,u,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-ui(x,u,"x","z",r,e),p[v+1]=1-ui(x,u,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-ui(x,u,"x","y",r,e),p[v+1]=1-ui(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),p[v+0]=ui(x,u,"x","y",r,e),p[v+1]=1-ui(x,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function $h(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new xt,u=0;for(let c=0;c<i.length;++c){let h=i[c],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,p,c),u+=p}}if(t){let c=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}o.setIndex(h)}for(let c in r){let h=_p(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(let c in a){let h=a[c][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][f]);let g=_p(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function _p(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let a=new e(r),l=new zt(a,t,n),o=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute){let h=o/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){let x=c.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(c.array,o);o+=c.count*t}return s!==void 0&&(l.gpuType=s),l}function fy(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Vn(i);return n.colorSpace=Jt,n}function dy(){let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#9fbfe6"),t.addColorStop(.45,"#4a6690"),t.addColorStop(1,"#1d2638"),e.fillStyle=t,e.fillRect(0,0,64,128),e.fillStyle="rgba(255,255,255,0.35)",e.beginPath(),e.moveTo(20,0),e.lineTo(34,0),e.lineTo(10,128),e.lineTo(-4,128),e.fill();let n=new Vn(i);return n.colorSpace=Jt,n}function yp(){let i=new Zt,e=new Zt,t=new Zt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new yt,new yt],s=new fe(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},a=Ph(new ln({color:"#ffffff",vertexColors:!0,gradientMap:jn}),.85,.06,"paint-l",r),l=(k,z)=>Object.assign(new fe(k),{gloss:z}),o=l("#9fd8c8",1),u=l("#e9e7e0",.55),c=l("#2a2c33",.35),h=l("#1b1c20",.04),f=l("#c8ccd2",.8),p=(k,z)=>{let V=k.attributes.position.count,G=new Float32Array(V*4);for(let J=0;J<V;J++)G.set([z.r,z.g,z.b,z.gloss],J*4);return k.setAttribute("color",new Qe(G,4)),k},g=Ph(new ln({color:"#ffffff",map:dy(),gradientMap:jn}),1.2,.08,"glass-l",r),x=new ln({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:jn}),m=new ln({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:jn}),d=new ln({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:jn}),v=new tn({map:fy()}),b=new Map,_=[],y=!1,S=new Je,R=new Hn,M=new xn,E=new H(1,1,1),A=(k,z,V,G,J,re=0,Ve=0,ge=0)=>{let Oe=k.index?k.toNonIndexed():k;if(z.isColor&&(p(Oe,z),z=a),R.set(re,Ve,ge),M.setFromEuler(R),S.compose(new H(V,G,J),M,E),Oe.applyMatrix4(S),y){_.push(Oe);return}b.has(z)||b.set(z,[]),b.get(z).push(Oe)};A(new Ti(1.48,.86,3.38,4,.15),o,0,.77,0),A(new Ti(1.42,.66,2.6,4,.17),o,0,1.5,-.25),A(new Ti(1.38,.09,2.5,3,.04),u,0,1.84,-.25),A(new Xt(1.16,.5),g,0,1.53,-1.556,0,Math.PI,0),A(new Ti(.42,.045,.04,2,.015),m,0,1.752,-1.578);for(let k of[-1,1])A(new Xt(2.25,.46),g,k*.712,1.54,-.2,0,k*Math.PI/2,0),A(new Ti(.1,.12,.2,2,.04),o,k*.82,1.2,.95),A(new Ti(.14,.48,.08,2,.035),x,k*.64,1,-1.67),A(new Ti(.12,.08,.06,2,.02),d,k*.64,.7,-1.67);A(new Xt(1.2,.52),g,0,1.52,1.056,-.12,0,0),A(new Ti(1.52,.22,.22,2,.07),c,0,.42,-1.62),A(new vi(.24,.04,.05),c,0,.84,-1.69),A(new Xt(.34,.17),v,0,.72,-1.7,0,Math.PI,0),y=!0;for(let[k,z]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])A(new Lr(.29,.29,.2,20),h,k,.29,z,0,0,Math.PI/2),A(new Lr(.16,.16,.205,12),f,k,.29,z,0,0,Math.PI/2);y=!1;for(let[k,z]of b){let V=new ht($h(z),k);V.castShadow=k!==g&&k!==v&&k!==m,V.receiveShadow=!0,t.add(V)}{let k=new ht($h(_),a);k.castShadow=k.receiveShadow=!0,i.add(k)}{let V=document.createElement("canvas");V.width=48,V.height=96;let G=V.getContext("2d"),J=G.createImageData(48,96);for(let Ve=0;Ve<96;Ve++)for(let ge=0;ge<48;ge++){let Oe=Math.max(0,Math.abs((ge+.5)/48-.5)*2.1-.62),q=Math.max(0,Math.abs((Ve+.5)/96-.5)*2.05-.78),$=Math.hypot(Oe/.42,q/.24),Me=Math.max(0,1-$),Ne=(Ve*48+ge)*4;J.data[Ne]=J.data[Ne+1]=J.data[Ne+2]=Math.round(255*Me*Me*(3-2*Me)),J.data[Ne+3]=255}G.putImageData(J,0,0);let re=new ht(new Xt(2.2,4.1),new tn({color:0,alphaMap:new Vn(V),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,i.add(re)}let P=new Zt;P.position.set(.02,1.3,-1.57),t.add(P);let L=new vi(.52,.026,.02);L.translate(.27,0,0);let N=new ht(p(L,c),a);N.rotation.z=.18,P.add(N);let w=0,D=new Go(16773328,0,70,.55,.65,1.2);D.position.set(0,.8,1.6),D.target.position.set(0,0,18),t.add(D,D.target);let U={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},B=(k,z)=>z*Math.tanh(k/z);return{group:i,lamps:n,lampCol:s,head:D,update(k,z,V,G=0,J=null){if(J){let re=B(-J.lat*.016,.045),Ve=B(-J.lon*.008,.03);U.rv+=((re-U.roll)*55-U.rv*8)*k,U.roll+=U.rv*k,U.pv+=((Ve-U.pitch)*60-U.pv*9)*k+J.kick,U.pitch+=U.pv*k,U.yv+=((J.road-U.y)*85-U.yv*8)*k+J.jolt,U.y+=U.yv*k,e.rotation.set(U.pitch,0,U.roll),e.position.y=.35+U.y}if(U.br+=((J?J.brake:0)-U.br)*Math.min(1,k*14),x.emissiveIntensity=.35+V*3.2+U.br*(1.7+V*2),m.emissiveIntensity=U.br*(2.4+V*1.6),G>.15||w%2.6>.01){w+=k;let re=w%2.6/2.6,Ve=Oe=>Oe*Oe*(3-2*Oe),ge=re<.25?Ve(re/.25):re<.5?Ve(1-(re-.25)/.25):0;N.rotation.z=.18+ge*2.5,G<=.15&&re>=.5&&(w=0)}D.intensity=V*60}}}var to={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},py=new ds(-1,1,1,-1,0,1),Jh=class extends xt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},my=new Jh,Ss=class{constructor(e){this._mesh=new ht(my,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var no=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hs.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Hc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new qe);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new no(to),this.copyPass.material.blending=Gn,this.timer=new Wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(a instanceof ma?n=!0:a instanceof Hc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gc=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var io=class i extends ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new qe(e.x,e.y):new qe(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Ft(r,a,{type:on,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Ft(r,a,{type:on,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=Mp;this.highPassUniforms=Hs.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new qe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hs.clone(to.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new Ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new qe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],o=a+1<e?t[a+1]:0,u=l+o;s.push((a*l+(a+1)*o)/u),r.push(u)}return new dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new qe(.5,.5)},direction:{value:new qe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};io.BlurDirectionX=new qe(1,0);io.BlurDirectionY=new qe(0,1);var Kh=class extends ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ft(4,4,{type:on,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),this.mat=new dt({uniforms:{tDiffuse:{value:null},uTexel:{value:new qe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Ss(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},gy={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new qe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new qe(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function bp(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let a=i.getSize(new qe),l=new Ft(a.x*i.getPixelRatio(),a.y*i.getPixelRatio(),{type:on,samples:n}),o=new Vc(i,l);o.addPass(new Gc(e,t));let u=new Kh;o.addPass(u);let c=new io(new qe(a.x*r*.5,a.y*r*.5),.42,.55,.86);o.addPass(c);let h=new no(gy);h.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},h.material.toneMapped=!1,o.addPass(h);let f=o.render.bind(o);return o.render=p=>{h.uniforms.toneMappingExposure.value=i.toneMappingExposure,f(p)},{composer:o,bloom:c,grade:h,refl:u}}function Sp(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let se=0;se<2;se++){let be=s.getChannelData(se);for(let ve=0;ve<n;ve++)be[ve]=(Math.random()*2-1)*Math.pow(1-ve/n,3)}let r=e.createConvolver();r.buffer=s;let a=e.createGain();a.gain.value=.55,r.connect(a),a.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=e.createGain();o.gain.value=.11,l.connect(o),o.connect(t),o.connect(r);let u=(se,be)=>{let ve=e.createBuffer(1,e.sampleRate*se,e.sampleRate),pe=ve.getChannelData(0),F=0;for(let Pe=0;Pe<pe.length;Pe++)be?(F=(F+.02*(Math.random()*2-1))/1.02,pe[Pe]=F*3.5):pe[Pe]=Math.random()*2-1;return ve},c=(se,be,ve)=>{let pe=e.createBufferSource();pe.buffer=se,pe.loop=!0;let F=e.createBiquadFilter();F.type=be,F.frequency.value=ve;let Pe=e.createGain();return Pe.gain.value=0,pe.connect(F),F.connect(Pe),Pe.connect(t),pe.start(),{f:F,g:Pe}},h=c(u(2,!0),"lowpass",400),f=c(u(3,!1),"lowpass",700);f.g.connect(r);let p=c(u(2,!1),"bandpass",5200);p.f.Q.value=6;let g=c(u(2,!0),"lowpass",240),x=c(u(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=c(u(2,!0),"lowpass",520),d=c(u(2,!1),"bandpass",1500);d.f.Q.value=.7;let v=e.createBiquadFilter(),b=e.createGain(),_=e.createOscillator(),y=e.createOscillator(),S=e.createGain();_.type="sawtooth",y.type="triangle",v.type="lowpass",v.frequency.value=320,v.Q.value=.6,b.gain.value=0,S.gain.value=.5,_.connect(v),y.connect(S),S.connect(v),v.connect(b),b.connect(t),_.start(),y.start();let R=c(u(3,!1),"bandpass",750);R.f.Q.value=.6;let M=c(u(3,!0),"lowpass",420),E=c(u(2,!0),"lowpass",140),A=u(.03,!1),P=0;function L(se,be){let ve=e.createBufferSource(),pe=e.createBiquadFilter(),F=e.createGain();ve.buffer=A,pe.type="bandpass",pe.frequency.value=1800+Math.random()*2600,pe.Q.value=1.2,F.gain.setValueAtTime(be*(.02+Math.random()*.03),se),F.gain.exponentialRampToValueAtTime(1e-4,se+.03),ve.connect(pe),pe.connect(F),F.connect(t),ve.start(se),ve.stop(se+.04)}let N=0,w=0;function D(se,be){let ve=e.createOscillator(),pe=e.createOscillator(),F=e.createGain(),Pe=e.createBiquadFilter();Pe.type="bandpass",Pe.frequency.value=1150,Pe.Q.value=2.2,ve.type="square",ve.frequency.value=745,pe.type="triangle",pe.frequency.value=1490,F.gain.setValueAtTime(0,se),F.gain.linearRampToValueAtTime(.085*be,se+.004),F.gain.exponentialRampToValueAtTime(1e-4,se+.3),ve.connect(Pe),pe.connect(Pe),Pe.connect(F),F.connect(t),F.connect(r),ve.start(se),pe.start(se),ve.stop(se+.33),pe.stop(se+.33)}function U(se,be){let ve=e.createOscillator(),pe=e.createGain();ve.type="sine",ve.frequency.setValueAtTime(110,se),ve.frequency.exponentialRampToValueAtTime(48,se+.12),pe.gain.setValueAtTime(1e-4,se),pe.gain.linearRampToValueAtTime(.22*be,se+.006),pe.gain.exponentialRampToValueAtTime(1e-4,se+.17),ve.connect(pe),pe.connect(t),ve.start(se),ve.stop(se+.2)}let B=e.createGain();B.gain.value=1,B.connect(t);let k=e.createGain();k.gain.value=.35,B.connect(k),k.connect(r);let z=(se=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return B;let be=e.createStereoPanner();return be.pan.value=se,be.connect(B),be};function V(se,be,ve,pe,F,Pe,We="sine",O=0){let T=e.createOscillator(),I=e.createGain();if(T.type=We,T.frequency.setValueAtTime(be,se),T.frequency.exponentialRampToValueAtTime(ve,se+pe),O){let Z=e.createOscillator(),te=e.createGain();Z.frequency.value=O,te.gain.value=be*.012,Z.connect(te),te.connect(T.frequency),Z.start(se),Z.stop(se+pe+.05)}return I.gain.setValueAtTime(1e-4,se),I.gain.linearRampToValueAtTime(F,se+Math.min(.04,pe*.25)),I.gain.setValueAtTime(F,se+pe*.7),I.gain.exponentialRampToValueAtTime(1e-4,se+pe),T.connect(I),I.connect(Pe),T.start(se),T.stop(se+pe+.02),I}function G(se,be){let ve=z(),pe=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let Pe=0;Pe<pe;Pe++){let We=se+Pe*(.09+Math.random()*.07);V(We,F,F*(1.2+Math.random()*.3),.06,be*.022,ve)}}function J(se,be){let ve=z();V(se,1120,1390,1,be*.03,ve,"sine",5.5),V(se+1.15,2350,2150,.14,be*.03,ve),V(se+1.32,1700,1520,.13,be*.028,ve),V(se+1.5,2750,2480,.36,be*.032,ve)}function re(se,be){let ve=z(),pe=1+Math.floor(Math.random()*3);for(let F=0;F<pe;F++){let Pe=se+F*.48,We=e.createOscillator(),O=e.createBiquadFilter(),T=e.createGain();We.type="sawtooth",We.frequency.setValueAtTime(560,Pe),We.frequency.exponentialRampToValueAtTime(420,Pe+.32),O.type="bandpass",O.frequency.value=1150,O.Q.value=1.6,T.gain.setValueAtTime(1e-4,Pe),T.gain.linearRampToValueAtTime(be*.03,Pe+.03),T.gain.exponentialRampToValueAtTime(1e-4,Pe+.36),We.connect(O),O.connect(T),T.connect(ve),We.start(Pe),We.stop(Pe+.4)}}function Ve(se,be){let ve=z(),pe=2+Math.floor(Math.random()*2);for(let F=0;F<pe;F++)V(se+F*.42,1750,1150,.36,be*.022,ve,"triangle",11)}function ge(se,be){let ve=z(),pe=e.createOscillator(),F=e.createBiquadFilter(),Pe=e.createGain(),We=240+Math.random()*220,O=5+Math.floor(Math.random()*4);pe.type="square",pe.frequency.value=We,F.type="bandpass",F.frequency.value=We*2.4,F.Q.value=3,Pe.gain.setValueAtTime(1e-4,se);for(let T=0;T<O;T++){let I=se+T*.038;Pe.gain.linearRampToValueAtTime(be*.014,I+.008),Pe.gain.linearRampToValueAtTime(1e-4,I+.028)}pe.connect(F),F.connect(Pe),Pe.connect(ve),pe.start(se),pe.stop(se+O*.038+.05)}function Oe(se,be){let ve=z(),pe=4300+Math.random()*700;for(let F=0;F<3;F++)V(se+F*.055,pe,pe*1.01,.035,be*.009,ve)}function q(se,be){let ve=z(0);for(let[pe,F,Pe]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let We=e.createOscillator(),O=e.createGain();We.type="sine",We.frequency.value=pe,We.detune.value=(Math.random()-.5)*8,O.gain.setValueAtTime(1e-4,se),O.gain.linearRampToValueAtTime(be*.05*F,se+.03),O.gain.exponentialRampToValueAtTime(1e-4,se+Pe),We.connect(O),O.connect(ve),We.start(se),We.stop(se+Pe+.1)}}function $(se,be){let ve=z();for(let pe of[se,se+.22])V(pe,2650,2600,.5,be*.018,ve),V(pe,3950,3900,.35,be*.008,ve)}let Me={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ne=se=>se>1e-4?-Math.log(1-Math.random()*.98)/se:1e9,xe=se=>440*Math.pow(2,(se-69)/12),Ye=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],it=[72,74,76,79,81,84,86,88],st=0,ot=e.currentTime+.2,pt=e.currentTime+3;function ct(se){let be=Ye[st++%Ye.length],ve=11;for(let pe of be)for(let F of[-5,5]){let Pe=e.createOscillator(),We=e.createGain();Pe.type=F<0?"sine":"triangle",Pe.frequency.value=xe(pe),Pe.detune.value=F,We.gain.setValueAtTime(0,se),We.gain.linearRampToValueAtTime(.18,se+3.5),We.gain.setValueAtTime(.18,se+ve-4),We.gain.linearRampToValueAtTime(0,se+ve+1),Pe.connect(We),We.connect(l),Pe.start(se),Pe.stop(se+ve+1.2)}}function gt(se){let be=it[Math.floor(Math.random()*it.length)],ve=e.createOscillator(),pe=e.createOscillator(),F=e.createGain(),Pe=e.createGain();ve.type=pe.type="sine",ve.frequency.value=xe(be),pe.frequency.value=xe(be)*2.01,Pe.gain.value=.25,pe.connect(Pe),Pe.connect(F),F.gain.setValueAtTime(0,se),F.gain.linearRampToValueAtTime(.05,se+.02),F.gain.exponentialRampToValueAtTime(1e-4,se+4),ve.connect(F),F.connect(r),F.connect(t),ve.start(se),pe.start(se),ve.stop(se+4.2),pe.stop(se+4.2)}return{ac:e,muted:!1,tyres:d,engG:b,bump(se){U(e.currentTime+.01,se)},update(se,be,ve,pe={}){let F=e.currentTime;if((pe.bell||0)>.01)for(N<F&&(N=F+.02);N<F+.12;)D(N,pe.bell),N+=.41;let Pe=pe.rain||0;x.g.gain.setTargetAtTime(Pe*.05,F,.6),m.g.gain.setTargetAtTime(Pe*.05,F,.6);let We=(pe.wetRoad||0)*Math.min(1,se)**1.5,O=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(d.g.gain.setTargetAtTime(We*.045*O,F,.4),d.f.frequency.setTargetAtTime(900+1500*Math.min(se,2),F,.4),Pe>.05&&pe.roof)for(P<F&&(P=F+.02);P<F+.12;)L(P,Pe),P+=.04+Math.random()*.12/Pe;let T=pe.water||0,I=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);R.g.gain.setTargetAtTime(T*.035*I,F,.25),R.f.frequency.setTargetAtTime(600+400*I,F,.25);let Z=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),te=pe.rush||0;M.g.gain.setTargetAtTime(((be.mountain||0)+(be.snow||0)*.7)*.06*Z+te*.055,F,.8),M.f.frequency.setTargetAtTime(260+420*Z+te*500,F,.8);let _e=pe.train||0;if(g.g.gain.setTargetAtTime(_e*.16,F,.2),_e>.04)for(w<F&&(w=F+.02);w<F+.12;)U(w,_e),U(w+.15,_e*.8),w+=1.2;for(;ot<F+1;)ct(ot),ot+=8;pt<F+.5&&(gt(pt),pt+=1.5+Math.random()*4.5);let Se=pe.tunnel||0;{let W=pe.speed||0,Ae=pe.load||0,ne=850+2400*(1-Math.exp(-W/15))+Math.max(0,W-25)*60+Ae*1300,Re=ne/40;_.frequency.setTargetAtTime(Re,F,.25),y.frequency.setTargetAtTime(Re*2,F,.25),v.frequency.setTargetAtTime(200+ne*.08+Ae*260,F,.3),b.gain.setTargetAtTime((.008+.01*Math.min(1,W/15)+.024*Ae)*(1-.6*(pe.rush||0))*(pe.roof===!1?.5:1)*(1+.7*Se),F,.3)}h.g.gain.setTargetAtTime((.03+se*.06)*(1+1.6*Se),F,.35),h.f.frequency.setTargetAtTime((250+se*500)*(1+.5*Se),F,.35),E.g.gain.setTargetAtTime(Se*.07,F,.4),a.gain.setTargetAtTime(.55+.6*Se,F,.4);let K=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);f.g.gain.setTargetAtTime(be.coast*(.012+K*.05),F,.3),f.f.frequency.setTargetAtTime(400+K*900,F,.3);let Q=1-Math.min(1,Pe*1.4),he=1-ve,ye=pe.dusk||0,Te=be.snow||0,Ee=1-Te,Be={sparrow:ve*Q*.22*(.3+be.city*.5+be.sakura+be.country*.8+be.coast*.2+(be.mountain||0)*.5)*(1-Te*.8),uguisu:ve*Q*be.sakura*.06,crow:Q*(ye*.14+ve*(be.city+be.country+(be.mountain||0)*1.5+Te*2.5)*.012),gull:ve*be.coast*Q*.16,frog:he*(be.country*5+be.sakura*.6+be.coast*.3)*(1+Pe*.6)*Ee,cricket:he*Q*(1.6-be.city*1.1+(be.mountain||0)*.8)*Ee,bike:ve*Q*be.city*.014,bell:Te*.022+(be.mountain||0)*.006},$e={sparrow:G,uguisu:J,crow:re,gull:Ve,frog:ge,cricket:Oe,bike:$,bell:q};for(let W in Be)F<Me[W]||(Be[W]>1e-4&&$e[W](F+.05,.6+Math.random()*.4),Me[W]=F+Math.max(.12,Ne(Be[W]||1e-6)));let at=.5+.5*Math.sin(F*7)*Math.sin(F*.4);p.g.gain.setTargetAtTime((be.country+be.sakura*.3)*ve*.006*at*(1-(be.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Tp(i){let t=new Xt(.075,.05),n=new tn({color:16777215,side:vn}),s=new Gi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new fe("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new fe(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new Je,u=new xn,c=new Hn,h=new H(1,1,1),f=new H,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),m=new xt;m.setAttribute("position",new zt(g,3));let d=new Ir({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Xi,opacity:0}),v=new No(m,d);v.frustumCulled=!1;let b=(_,y,S,R,M)=>{let E=M?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;_.p.set(y.x+S.x*E+R.x*A,y.y-1+Math.random()*9,y.z+S.z*E+R.z*A)};return{group:[s,v],shift(_,y){for(let S of l)S.p.x-=_,S.p.z-=y;for(let S of x)S.p.x-=_,S.p.z-=y},update(_,y,S,R,M,E,A,P,L,N=0){let w=Math.floor(420*Math.min(1,E*1.1+N*.55)),D=!1;s.count=w;for(let B=0;B<w;B++){let k=l[B];f.subVectors(k.p,S);let z=f.x*R.x+f.z*R.z,V=f.x*M.x+f.z*M.z;if(k.p.x>1e8||z<-6||z>55||Math.abs(V)>24||k.p.y<A-.5){b(k,S,R,M,k.p.x<1e8);let G=Math.random()*(E+N)<N;(G!==k.leaf||G)&&(k.leaf=G,s.setColorAt(B,G?a[Math.floor(Math.random()*a.length)]:r),D=!0)}k.p.y-=k.v*_,k.p.x+=Math.sin(y*.7+k.ph)*.4*_+.25*_,k.p.z+=Math.cos(y*.5+k.ph)*.3*_,c.set(y*k.sp+k.ph,y*k.sp*.7,k.ph),u.setFromEuler(c),h.setScalar(k.leaf?1.9:1),o.compose(k.p,u,h),s.setMatrixAt(B,o)}s.instanceMatrix.needsUpdate=!0,D&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=P*L;if(d.opacity=U,v.visible=U>.01,v.visible){for(let B=0;B<p;B++){let k=x[B];f.subVectors(k.p,S);let z=f.x*R.x+f.z*R.z,V=f.x*M.x+f.z*M.z;if(k.p.x>1e8||z<-4||z>60||Math.abs(V)>30){let G=2+Math.random()*55,J=(Math.random()-.5)*55;k.p.set(S.x+R.x*G+M.x*J,A+.3+Math.random()*2.2,S.z+R.z*G+M.z*J)}k.p.x+=Math.sin(y*.6+k.ph*3)*.3*_,k.p.y+=Math.sin(y*.9+k.ph)*.2*_,k.p.z+=Math.cos(y*.5+k.ph*2)*.3*_,g[B*3]=k.p.x,g[B*3+1]=k.p.y,g[B*3+2]=k.p.z}m.attributes.position.needsUpdate=!0}}}}var ft=new URLSearchParams(location.search),so=ft.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();so&&document.body.classList.add("embed");ft.has("shot")&&document.body.classList.add("shot");Jd(ft.has("seed")?parseInt(ft.get("seed")):Math.random()*1e9|0);e0(ft.get("env")||"city");var _n=i=>document.getElementById(i),ro=i=>{let e=_n("loading");e&&(e.textContent=i)};async function xy(){await new Promise(oe=>setTimeout(oe,30));let i=_n("c"),e=new _c({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ft.get("q")||(so||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?so?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Jt,e.toneMapping=Xo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Fs,e.debug.checkShaderErrors=ft.has("debug");let r=new Us;r.fog=new Po(13032946,.0019,700);let a=new yn(52,innerWidth/innerHeight,.5,7e3),l=new Ur(16777215,3);l.castShadow=!0;let o=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(o,o),Rh(ft.has("pcf")?parseInt(ft.get("pcf")):1);let u=62,c=l.shadow.camera,h=new Je,f=new Je;Object.assign(c,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let p=new H(0,1,0),g=new H,x=new H,m=new H,d=new H(0,1,0),v=new H(0,150,60),b=new H,_=new H,y=null,S=0,R=0,M=0;l.shadow.updateMatrices=function(){c.position.copy(v),c.lookAt(b),c.updateMatrixWorld(),c.updateProjectionMatrix(),f.multiplyMatrices(c.matrixWorldInverse,h).multiply(c.matrixWorld),c.projectionMatrix.multiply(f),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this._updateMatrix(c,this.matrix,this._frustum)};let E=!0;l.shadow.bias=-4e-4;let A=()=>{l.shadow.normalBias=ft.has("nb")?parseFloat(ft.get("nb")):1.5*2*u/l.shadow.mapSize.x};A();{let[oe,de]=(ft.get("graze")||"0,0.12").split(",").map(Number);c0(oe,de)}r.add(l,l.target);let P=new Ur(16777215,0);P.castShadow=n!=="low"&&!ft.has("nocarsh");{let oe=ft.has("carsm")?parseInt(ft.get("carsm")):n==="high"?512:384;P.shadow.mapSize.set(oe,oe)}if(Object.assign(P.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),P.shadow.bias=-2e-4,P.shadow.normalBias=.025,r.add(P,P.target),P.castShadow){let oe=l.shadow.getFrustum(),de=P.shadow.getFrustum();for(let He of[ht,Do]){let Ke=He.prototype.intersectsFrustum;He.prototype.intersectsFrustum=function(mt){return mt===de?this.userData.car===!0:(mt!==oe||this.userData.car!==!0)&&Ke.call(this,mt)}}}let L=new Ho(10799359,13154464,1.6);r.add(L),ro("painting the town\u2026"),await new Promise(oe=>setTimeout(oe,10));let N=S0();w0(N);let w=T0(e);D0(w.cells),Xe.uTuftV.value.set(w.tuftV[0],w.tuftV[1]);let D=m0(N.textures(e),w.tex),U=h0();U.update(e,0,0,0,0),ro("painting the clouds\u2026"),await new Promise(oe=>setTimeout(oe,10)),N0(ft.has("leafd")?parseFloat(ft.get("leafd")):n==="high"?.72:.62),B0();let B=new wc,k=xp(),z=vp(),V=new Bc(r,B,D,k,z),G=op();r.add(G);let J=lp(ap(e));r.add(J.group);let re=cp();r.add(re.group);let Ve=gp();r.add(Ve.mesh);let ge=yp();ge.group.rotation.order="YXZ",r.add(ge.group),ge.group.traverse(oe=>{oe.userData.car=!0});let Oe=Tp(D.glowTex);Oe.group.forEach(oe=>r.add(oe));let q=ft.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),$=bp(e,r,a,{msaa:q==="msaa"?n==="high"?4:2:0,fxaa:q==="fxaa"});Xe.uReflTex.value=$.refl.rt.texture;let Me=new H,Ne=new H,xe=ft.get("refl")||"auto",Ye=new H,it=ft.has("haze")?parseFloat(ft.get("haze")):1,st=x0();r.add(st.group);let ot=v0();r.add(ot.group);let pt=up(ft),ct=fp(),gt=hp();r.add(ct.mesh,gt.mesh);let se=dp();r.add(se.mesh);let be=pp();r.add(be.mesh);let ve=new fe,pe=new fe,F=new yt,Pe=mp();r.add(Pe.mesh);let We=pt.W.rain,O=.4,T=5.5,I={s:Math.max(100,parseFloat(ft.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ot(parseFloat(ft.get("t"))||.4,0,.999),todPaused:ft.has("freeze"),dist:0,spray:ft.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ft.get("cam")]??(so?4:0)},Z=!1;ro("building the road\u2026"),await new Promise(oe=>setTimeout(oe,10));let te=so?620:V.ahead;V.ahead=260;let _e=ft.has("detail")?parseFloat(ft.get("detail")):380,Se=ft.has("farleaf")?parseFloat(ft.get("farleaf")):540;for(;V.update(I.s,1e9););V.flush(),V.ahead=te;{ro("preparing the light\u2026"),await new Promise(mt=>setTimeout(mt,10));let oe=new Zt,de=new xt;de.setAttribute("position",new Qe([0,0,0,.01,0,0,0,.01,0],3)),de.setAttribute("normal",new Qe([0,1,0,0,1,0,0,1,0],3)),de.setAttribute("uv",new Qe([0,0,1,0,0,1],2)),de.setAttribute("color",new Qe([1,1,1,1,1,1,1,1,1],3));let He=[D.color,D.atlas,D.foliage,D.leaf,D.lamp,D.sig,D.sodium,D.decal,D.pool,k,z];for(let mt=0;mt<Ni.length;mt++)He.push(la([Ni[mt]])),He.push(la([Ni[mt],Ni[(mt+1)%Ni.length]]));for(let mt of He){let St=new ht(de,mt);St.castShadow=St.receiveShadow=!0,St.frustumCulled=!1,oe.add(St)}oe.position.set(0,0,0),r.add(oe),l.target.position.set(0,0,0),l.position.set(0,150,60);let Ke=[ct.mesh,gt.mesh,se.mesh,be.mesh,ot.group,st.group,Ve.mesh].filter(mt=>!mt.visible);for(let mt of Ke)mt.visible=!0;e.setRenderTarget($.composer.readBuffer),e.compile(r,a),e.render(r,a),e.setRenderTarget(null);for(let mt of Ke)mt.visible=!1;r.remove(oe),de.dispose(),$.bloom.enabled=$.refl.enabled=!0,$.composer.render(0),$.bloom.enabled=$.refl.enabled=!1}let K={k:Math.ceil((I.s-Ws)/Gs),phase:"idle",raise:1,decided:!1,t2:0},Q={},he={},ye={},Te=new H,Ee=new H,Be=new H,$e=!1,at=new H,W=new H,Ae=_n("spd"),ne=_n("dist"),Re=_n("clock"),Ue=_n("zone"),ue=_n("start"),Ze=_n("hint"),Ie=null,Lt=null,bt=0,On=0;function ti(oe){!Z||oe===Lt||(Lt=oe,Ue.querySelector(".jp").textContent=sa[oe].jp,Ue.querySelector(".en").textContent=sa[oe].en,Ue.classList.add("on"),clearTimeout(bt),bt=setTimeout(()=>Ue.classList.remove("on"),5200))}function oo(){if(!Z){if(Z=!0,document.body.classList.remove("pre"),!ft.has("auto"))try{Ie=Sp(),Ie&&Ie.ac.resume()}catch{Ie=null}ue.style.opacity=0,setTimeout(()=>ue.remove(),1500),so||(Ze.style.opacity=.75,setTimeout(()=>Ze.style.opacity=0,9e3))}}let En={};addEventListener("keydown",oe=>{En[oe.key]=!0,(oe.key==="m"||oe.key==="M")&&ga(),(oe.key==="t"||oe.key==="T")&&ao(),(oe.key==="c"||oe.key==="C")&&tr(),(oe.key==="r"||oe.key==="R")&&Ts(),!Z&&(oe.key===" "||oe.key==="Enter")&&oo()}),addEventListener("keyup",oe=>{En[oe.key]=!1});let Qt=null;i.addEventListener("pointerdown",oe=>{Qt={id:oe.pointerId,x:oe.clientX,y:oe.clientY,sy:oe.clientY,sc:I.mult}});let Qs=oe=>Ot(oe.sc*Math.exp(-((oe.y-oe.sy)/innerHeight)*3.4),O,T);addEventListener("pointermove",oe=>{Qt&&oe.pointerId===Qt.id&&(Qt.x=oe.clientX,Qt.y=oe.clientY,I.mult=Qs(Qt))}),addEventListener("pointerup",()=>{Qt=null}),addEventListener("pointercancel",()=>{Qt=null}),i.addEventListener("touchstart",oe=>{let de=oe.changedTouches[0];Qt={id:"touch",x:de.clientX,y:de.clientY,sy:de.clientY,sc:I.mult},oe.preventDefault()},{passive:!1}),i.addEventListener("touchmove",oe=>{if(!Qt)return;let de=oe.changedTouches[0];Qt.x=de.clientX,Qt.y=de.clientY,I.mult=Qs(Qt),oe.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Qt=null}),i.addEventListener("touchcancel",()=>{Qt=null});function ga(){Ie&&(Ie.toggle(),_n("snd").style.opacity=Ie.muted?.4:1)}function ao(){I.todPaused=!I.todPaused,_n("tim").style.opacity=I.todPaused?.4:1}let er=[0,1,2,4],Ei={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function tr(){I.cam=er[(er.indexOf(I.cam)+1)%er.length],_n("cam").textContent=Ei[I.cam]||"\u25D0",I.cam===4&&es()}let lo=["chase","side","road","crane","eye","side","road"],Bt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function es(){let oe;do oe=lo[Math.floor(Math.random()*lo.length)];while(oe===Bt.last);{let de=li(I.s+60);de&&Math.abs(I.s+60-de.s)<jt+120&&(oe=Math.random()<.6?"chase":"eye")}if(Object.assign(Bt,{type:oe,last:oe,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),oe==="road"){let de=I.s+40+Math.random()*18,He=Sn(de,"rw"),Ke=Math.random()<.6?-1:1,mt=Ke*(He+(Ke<0?.9:1.3)),St=B.at(de,{}),qn=St.y+Zr(de,mt,St.y,He);Bt.anchor={x:St.x+St.rx*mt,y:Math.max(qn,St.y)+1.05,z:St.z+St.rz*mt,s:de}}$e=!1}let co={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Ts(){_n("wx").textContent=co[pt.cycle()]}_n("wx").textContent=co[pt.W.mode],_n("cam").textContent=Ei[I.cam]||"\u25D0",I.cam===4&&es(),_n("wx").onclick=oe=>{oe.stopPropagation(),Ts()},_n("snd").onclick=oe=>{oe.stopPropagation(),ga()},_n("tim").onclick=oe=>{oe.stopPropagation(),ao()},_n("cam").onclick=oe=>{oe.stopPropagation(),tr()};let uo=0,xa=oe=>{let de=performance.now();de-uo<120||(uo=de,oe.cancelable&&oe.type!=="click"&&oe.preventDefault(),oo())};for(let oe of["touchstart","pointerdown","mousedown","click"])ue.addEventListener(oe,xa,{passive:!1});let Wc=()=>{Ie&&Ie.ac.state!=="running"&&Ie.ac.resume()};for(let oe of["touchend","click","keydown"])addEventListener(oe,Wc,{passive:!0});document.addEventListener("visibilitychange",()=>{Ie&&(document.hidden?Ie.ac.suspend():Ie.ac.resume())});let Es=!1,va="",ws=52,ts=0;function C(){let oe=innerWidth,de=innerHeight,He=oe/de,Ke=oe+"x"+de+"@"+s;Ke!==va&&(va=Ke,e.setPixelRatio(s),e.setSize(oe,de,!1),$.composer.setPixelRatio(s),$.composer.setSize(oe,de),a.aspect=He,ws=He>=1?52:Ot(2*Math.atan(Math.tan(34*Math.PI/180)/He)*180/Math.PI,52,80),a.fov=ws+ts,a.updateProjectionMatrix(),$.grade.uniforms.uAspect.value=He,$.grade.uniforms.uTexel.value.set(1/$.composer.readBuffer.width,1/$.composer.readBuffer.height),Xe.uReflRes.value.set($.composer.readBuffer.width,$.composer.readBuffer.height))}addEventListener("resize",()=>{Es=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Es=!0}),C();let X=0;function ee(oe=!0){if(s>1.05)s=Math.max(1,s-.25),Es=!0;else if(E)E=!1,$.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),A(),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(V.ahead>430)V.ahead=430;else return;if(X++,oe)try{localStorage.setItem("icd-q",String(X))}catch{}}try{let oe=parseInt(localStorage.getItem("icd-q")||"0");if(!ft.has("q"))for(let de=0;de<Math.min(oe,6);de++)ee(!1);X=Math.max(X,oe||0)}catch{}let j=performance.now(),Y=0,Fe=0,ke=0,Le=()=>1-le.night,Ge=0,Ce=0,De=ft.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;De&&(De.gl=e.getContext(),De.tq=De.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let et={p:-1,a:new H,b:new H,next:5},me={lat:0,lon:0,road:0,jolt:0,kick:0,u:I.u,vu:0,v:0,s:I.s,yaw:0,brake:0,rk:NaN,rb:null},wt=[-2.5335,-1.4665,1.4665,2.5335],$t=[1.12,-1.12],Ut=[-24.5,24.5];function Rt(oe){requestAnimationFrame(Rt);let de=performance.now();Es&&(Es=!1,C());let He=Math.min(.05,Math.max(0,(oe-j)/1e3));j=oe,Y+=He,I.steer=0,(En.ArrowLeft||En.a||En.A)&&(I.steer=-1),(En.ArrowRight||En.d||En.D)&&(I.steer=1),(En.ArrowUp||En.w||En.W)&&(I.mult=Ot(I.mult*Math.exp(He*.9),O,T)),(En.ArrowDown||En.s||En.S)&&(I.mult=Ot(I.mult*Math.exp(-He*.9),O,T)),Qt&&Math.abs(Qt.y-Qt.sy)<30&&(I.steer=Qt.x<innerWidth/2?-1:1),I.steer&&(I.lastInput=oe,I.uHome=I.u);let Ke=Xr(K.k);I.s-Ke>24&&(K.k++,Ke=Xr(K.k),Object.assign(K,{phase:"idle",raise:1,decided:!1}));let mt=ra(Ke),St=Ke-I.s;mt&&!K.decided&&St<150&&(K.decided=!0,St>75&&Z&&I.speed*I.speed/2.5<St-14&&(ft.has("xing")||Kn(K.k,99)<.8)&&(K.phase="warn",ot.start(Ke,Kn(K.k,7)<.5?1:-1,16))),K.phase==="warn"?(K.raise=Math.max(0,K.raise-He/6),ot.st.cleared&&(K.phase="clear",K.t2=0)):K.phase==="clear"?(K.raise=Math.max(0,K.raise-He/6),(K.t2+=He)>2.2&&(K.phase="raise")):K.phase==="raise"&&(K.raise=Math.min(1,K.raise+He/5),K.raise>=1&&(K.phase="idle"));let qn=K.phase==="warn"||K.phase==="clear"||K.phase==="raise"&&K.raise<.25,hi=Sn(I.s,"speed")*I.mult*(Z?1:.55);if(K.phase!=="idle"&&K.raise<.8&&St>0){let we=St-11.2,je=we>0?Math.sqrt(2*1.25*we):0;hi=Math.min(hi,je),I.speed=Math.min(I.speed,je)}ft.has("park")&&(hi=0,I.speed=0),I.speed+=(hi-I.speed)*Math.min(1,He*.5),I.s+=I.speed*He,I.dist+=I.speed*He;let Tt=Sn(I.s,"rw");I.steer?I.u=Ot(I.u+I.steer*He*2.4,-Tt+.85,Tt-.85):oe-I.lastInput>3e3&&(I.u+=(Ot(I.uHome,-Tt+.85,Tt-.85)+Math.sin(Y/11)*.1-I.u)*Math.min(1,He*.9)),!I.todPaused&&Z&&(I.tod=(I.tod+He/480*(le.night>.5?1.7:1))%1),ip(I.tod),pt.update(He);let vt=pt.W.ov,dn=pt.W.rain;rp(vt,dn),We=Ot(We+(dn>.25?He/18:-He/120),0,1);let Dt=performance.now();V.update(I.s,Z?3.5:14);let fi=performance.now();if(B.at(I.s,Q),Math.abs(Q.x-V.origin.x)>900||Math.abs(Q.z-V.origin.z)>900){let we=Math.round(Q.x)-V.origin.x,je=Math.round(Q.z)-V.origin.z;V.setOrigin(Math.round(Q.x),Math.round(Q.z)),Te.x-=we,Te.z-=je,Ee.x-=we,Ee.z-=je,Oe.shift&&Oe.shift(we,je),Pe.shift(we,je),se.shift(we,je)}let pn=V.origin.x,Bn=V.origin.z,Ep=(B.at(I.s+1.5,ye).y-B.at(I.s-1.5,he).y)/3,wp=(ye.h-he.h)/3;if(ge.group.position.set(Q.x+Q.rx*I.u-pn,Q.y+.01,Q.z+Q.rz*I.u-Bn),He>0){let we=me.vu+((I.u-me.u)/He-me.vu)*Math.min(1,He*6),je=(we-me.vu)/He;me.u=I.u,me.vu=we,me.lat=je-I.speed*I.speed*wp,me.lon+=((I.speed-me.v)/He-me.lon)*Math.min(1,He*8),me.v=I.speed;let tt=K.phase!=="idle"&&St>0&&St<20&&I.speed<.5;if(me.brake=me.lon<-.6||tt?1:me.lon>-.3?0:me.brake,me.yaw=-Ot(Math.atan(we/Math.max(I.speed,6))*.8,-.1,.1),me.road=.004*Math.sin(I.s*.48)+.003*Math.sin(I.s*.86+1.3),me.jolt=me.kick=0,mt)for(let Et=0;Et<4;Et++)for(let Ht=0;Ht<2;Ht++){let Vt=Ke+wt[Et]-$t[Ht];if(me.s<Vt&&I.s>=Vt){let Gt=.05+Math.min(I.speed,25)*.004;me.jolt+=Gt,me.kick+=Ht?Gt*.9:-Gt*.9,Ie&&Ie.bump(.25+Math.min(I.speed,25)/50)}}{let Et=Math.round((I.s-Yr)/Xs);Et!==me.rk&&(me.rk=Et,me.rb=Ui(I.s));let Ht=me.rb;if(Ht)for(let Vt=0;Vt<2;Vt++)for(let Gt=0;Gt<2;Gt++){let zn=Ht.s+Ut[Vt]-$t[Gt];if(me.s<zn&&I.s>=zn){let mn=.035+Math.min(I.speed,25)*.003;me.jolt+=mn,me.kick+=Gt?mn*.9:-mn*.9,Ie&&Ie.bump(.2+Math.min(I.speed,25)/60)}}}me.s=I.s}ge.group.rotation.set(-Math.atan(Ep),Q.h+me.yaw,0);let As=li(I.s);As&&Math.abs(I.s-As.s)<700?(B.at(As.s-en,ye),Xe.uTunA.value.set(ye.x-pn,ye.y,ye.z-Bn),B.at(As.s+en,ye),Xe.uTunB.value.set(ye.x-pn,ye.y,ye.z-Bn),Xe.uTunR.value=Sn(As.s,"rw")+1.7):(Xe.uTunA.value.set(0,-1e4,0),Xe.uTunB.value.set(0,-1e4,0));let Xc=As&&Math.abs(I.s+1-As.s)<en-1.5?1:0;Ce+=(Xc-Ce)*Math.min(1,He*(Xc?1.6:.7)),Xe.uCarPos.value.set(ge.group.position.x+Q.fx*1.7,ge.group.position.y+.8,ge.group.position.z+Q.fz*1.7),Xe.uCarFwd.value.set(Q.fx,-.05,Q.fz).normalize(),Xe.uHead.value=Xc,ge.update(He,I.speed,Math.max(le.night,Ce),dn,me),st.update(mt&&St>-24&&St<700?Ic(B,Ke):null,V.origin,K.raise,qn,Y),ot.update(He,B,V.origin,It(.15,.8,le.night),Sn(Ke,"rw")+3.2);let jh=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ft.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],Rs=new H,ho=6,Qh=I.cam===2;if(I.cam===4){Bt.t+=He;{let tt=li(I.s+30);tt&&Math.abs(I.s+30-tt.s)<jt+70&&Bt.type!=="chase"&&Bt.type!=="eye"&&(Bt.type="chase",Bt.t=0,Bt.dur=20,$e=!1)}(Bt.t>Bt.dur+(Bt.type==="road"?8:0)||Bt.type==="road"&&Bt.anchor&&I.s>Bt.anchor.s+24)&&es();let we=ge.group.position,je=Bt.type;if(je==="chase"||je==="eye"){let tt=jh[je==="eye"?2:0];Qh=je==="eye",B.at(I.s-tt.back,he),B.at(I.s+tt.ahead,ye),Be.set(he.x+he.rx*I.u*tt.cu-pn,he.y+tt.up,he.z+he.rz*I.u*tt.cu-Bn),Rs.set(ye.x+ye.rx*I.u*tt.lu-pn,ye.y+tt.lookY,ye.z+ye.rz*I.u*tt.lu-Bn)}else if(je==="side"){B.at(I.s+1.5,he);let tt=Nt(I.s),Et=tt.city+tt.sakura>.5,Ht=Sn(I.s,"rw"),Vt=Bt.sideSign>0?Ht+(Et?1.45:3.4):-(Ht+1.5),Gt=he.y+Zr(I.s+1.5,Vt,he.y,Ht);Be.set(he.x+he.rx*Vt-pn,Math.max(Gt+1.55,he.y+1.25),he.z+he.rz*Vt-Bn),Rs.set(we.x+Q.fx*2.5,we.y+.9,we.z+Q.fz*2.5),ho=4}else if(je==="road"&&Bt.anchor)Be.set(Bt.anchor.x-pn,Bt.anchor.y,Bt.anchor.z-Bn),Rs.set(we.x,we.y+.85,we.z),ho=30;else{B.at(I.s-20,he),B.at(I.s+34,ye);let tt=14+Math.min(Bt.t,20)*.35;Be.set(he.x+he.rx*I.u*.4-pn,he.y+tt,he.z+he.rz*I.u*.4-Bn),Rs.set(ye.x-pn,ye.y+1,ye.z-Bn),ho=3}}else{let we=jh[I.cam];B.at(I.s-we.back,he),B.at(I.s+we.ahead,ye);let je=I.u*we.cu,tt=je+(we.side||0);Be.set(he.x+he.rx*tt-pn,he.y+we.up,he.z+he.rz*tt-Bn),Rs.set(ye.x+ye.rx*I.u*we.lu-pn,ye.y+we.lookY,ye.z+ye.rz*I.u*we.lu-Bn)}ge.group.visible=!Qh,I.cam===3?a.up.set(Q.fx,0,Q.fz):a.up.set(0,1,0),$e||(Te.copy(Be),Ee.copy(Rs),$e=!0);let ef=1+Math.max(0,I.speed-12)/12;Te.lerp(Be,1-Math.exp(-He*ho*ef)),Ee.lerp(Rs,1-Math.exp(-He*Math.min(ho,8)*ef));{let we=I.cam===3?0:Math.min(Ot((I.speed-16)*.22,0,11),Math.max(0,84-ws));ts+=(we-ts)*Math.min(1,He*1.5),Math.abs(a.fov-(ws+ts))>.02&&(a.fov=ws+ts,a.updateProjectionMatrix())}a.position.copy(Te),a.lookAt(Ee),ft.has("yaw")&&a.rotateY(parseFloat(ft.get("yaw"))*Math.PI/180),ft.has("pitch")&&a.rotateX(parseFloat(ft.get("pitch"))*Math.PI/180),at.set(Q.fx,0,Q.fz),W.set(Q.rx,0,Q.rz);let Yt=Nt(I.s);l.color.copy(le.sunCol),l.intensity=le.sunI;{let we=le.lightDir;if(p.angleTo(we)>.1){let mn=0;if(Z&&!I.todPaused)for(let Dn=1;Dn<=60&&!(Yh(I.tod+Dn*.001,_).angleTo(we)>.09);Dn++)mn=Dn;Yh(I.tod+mn*.001,p),S=R=0}g.crossVectors(d,p).normalize(),x.crossVectors(p,g),m.set(ge.group.position.x+Q.fx*26,ge.group.position.y,ge.group.position.z+Q.fz*26),l.target.position.copy(m),l.position.copy(m).addScaledVector(we,200);let je=2*u/l.shadow.mapSize.x,tt=p.x/p.y-we.x/we.y,Et=p.z/p.y-we.z/we.y;je!==M&&(M=je,S=R=0);{let mn=Math.round(ge.group.position.y);if(y===null)y=mn;else if(Math.abs(ge.group.position.y-y)>3){let Dn=mn-y;S-=Dn*(tt*g.x+Et*g.z),R-=Dn*(tt*x.x+Et*x.z),y=mn}}let Ht=V.origin.x,Vt=V.origin.z,Gt=m.dot(g)+Ht*g.x+Vt*g.z-S,zn=m.dot(x)+Ht*x.x+Vt*x.z-R;m.addScaledVector(g,Math.round(Gt/je)*je-Gt).addScaledVector(x,Math.round(zn/je)*je-zn),b.copy(m),v.copy(m).addScaledVector(p,200),h.set(1,tt,0,-y*tt,0,1,0,0,0,Et,1,-y*Et,0,0,0,1)}P.target.position.set(ge.group.position.x,ge.group.position.y+.9,ge.group.position.z),P.position.copy(P.target.position).addScaledVector(le.lightDir,12),L.color.copy(le.hemiSky),L.groundColor.copy(le.hemiGround),L.intensity=le.hemiI;{let we=(1-le.night)*(1-vt);if(we>.001){a.getWorldDirection(Ye);let je=Ye.x,tt=Ye.z,Et=Math.hypot(je,tt)||1,Ht=le.sunDir,Vt=0;for(let zn=-2;zn<=2;zn++){let mn=zn*.3,Dn=Math.cos(mn),Cs=Math.sin(mn),sr=(je*Dn-tt*Cs)/Et,rr=(je*Cs+tt*Dn)/Et,fo=Math.max(0,sr*Ht.x+rr*Ht.z),or=fo*fo;Vt+=or*or*or}let Gt=Vt/5*(.1+.35*le.warm)*1.4*we*it;le.fog.r+=le.sunCol.r*Gt,le.fog.g+=le.sunCol.g*Gt,le.fog.b+=le.sunCol.b*Gt}}r.fog.color.copy(le.fog);let tf=(Yt.city*.0022+Yt.sakura*.0019+Yt.coast*.0011+Yt.country*.0014+Yt.mountain*.0017+Yt.snow*.0021)*(1+le.night*.25);r.fog.near=tf*(1+.55*vt+.45*dn),r.fog.far=V.ahead*.92,Xe.uSkyHor.value.copy(le.horizon),Xe.uSkyZen.value.copy(le.zenith),Xe.uTime.value=Y,Xe.uWet.value=We*(1-Yt.snow);{let we=Xe.uWet.value>.04&&n!=="low"&&Ce<.5&&xe!=="0";if($.refl.enabled=we&&xe!=="taps",Xe.uReflOn.value=we&&xe!=="copy"?1:0,we){a.getWorldDirection(Ne),Ne.y=0,Ne.normalize(),Me.copy(a.position).addScaledVector(Ne,1e4).project(a),Xe.uHorizon.value=Me.y*.5+.5;let je=Math.max(.5,a.position.y-ge.group.position.y);Xe.uReflK.value=Ot(1-2*je/(5+je),.05,1)}}Xe.uOrigin.value.set(V.origin.x,V.origin.z),Xe.uWind.value=1+.8*dn,Xe.uCloudSh.value=(1-vt)*It(.04,.3,le.sunEl)*(1-le.night),Xe.uCloudSh.value>.001&&U.update(e,a.position.x,a.position.z,V.origin.x,V.origin.z);let ni=G.material.uniforms;if(ni.uNight.value=le.night,ni.uWarm.value=le.warm,ni.uTime.value=Y,ni.uCirrusCol.value.copy(le.cLit).lerp(le.horizon,.25),ni.uCirrus.value=.6*(1-vt)*(1-.65*It(.4,.9,le.night)),ni.uOvercast.value=vt,ni.uMilky.value=It(.55,.95,le.night)*(1-vt),le.night>.65&&vt<.3&&et.p<0&&(et.next-=He)<0){let we=Math.atan2(Q.fx,Q.fz)+(Math.random()-.5)*1.5,je=.45+Math.random()*.6,tt=.22+Math.random()*.2,Et=(Math.random()-.5)*.6,Ht=(Vt,Gt)=>new H(Math.cos(Vt)*Math.sin(Gt),Math.sin(Vt),Math.cos(Vt)*Math.cos(Gt));et.a.copy(Ht(je,we)),et.b.copy(Ht(je-tt,we+Et)),et.p=0,et.next=ft.has("meteors")?1:6+Math.random()*20}et.p>=0&&(et.p+=He/.85,et.p>1.3&&(et.p=-1)),ni.uMetP.value=et.p,ni.uMetA.value.copy(et.a),ni.uMetB.value.copy(et.b),ni.uDeckLit.value.copy(le.horizon).lerp(le.cLit,.35),ni.uDeckDark.value.copy(le.zenith).lerp(le.horizon,.25).multiplyScalar(.82),G.position.copy(a.position),J.update(a.position,He),re.update(a.position,Math.max(Yt.snow,Nt(I.s+600).snow*.7));let _a=0;for(let we of[-150,0,250,500,800])_a=Math.max(_a,Nt(I.s+we).coast);Ve.mesh.visible=_a>.001,Ve.update(a.position,Y,tf*.8,It(0,.35,_a)),z.uniforms.uTime.value=Y,z.uniforms.uFogD.value=r.fog.near,z.uniforms.uNight.value=le.night,z.uniforms.uSpecK.value=1-le.overcast*.85,Xe.uSunDir.value.copy(le.lightDir),Xe.uSunCol.value.copy(le.sunCol),k.uniforms.uTime.value=Y,k.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Le());let ii=It(.15,.8,le.night);D.atlas.emissiveIntensity=.1+ii*1.05,D.lamp.color.setRGB(.85,.85,.8).lerp(new fe(3.6,2.8,1.8),ii),D.pool.opacity=ii*.42*(1+.8*We);{let we=ge.group.position,je=ge.lamps,tt=Math.max(ii,Ce),Et=0,Ht=0,Vt=0,Gt=-1e3,zn=0,mn=0,Dn=-1e3,Cs=0,sr=900,rr=900;if(tt>.01){let rf=Math.floor(I.s/qt);for(let qc=rf-1;qc<=rf+1;qc++){let Ma=V.chunks.get(qc);if(!Ma||!Ma.lamps)continue;let po=Ma.lamps,of=Ma.group.position;for(let ar=0;ar<po.length;ar+=4){let Yc=po[ar]+of.x,Zc=po[ar+1],$c=po[ar+2]+of.z,Jc=(Yc-we.x)**2+(Zc-we.y)**2+($c-we.z)**2,ba=po[ar+3]/(1+.045*Jc);ba>Et?(Ht=Et,rr=sr,mn=Vt,Dn=Gt,Cs=zn,Et=ba,sr=Jc,Vt=Yc,Gt=Zc,zn=$c):ba>Ht&&(Ht=ba,rr=Jc,mn=Yc,Dn=Zc,Cs=$c)}}a.updateMatrixWorld()}let fo=tt*Et*(1+.045*sr)*(1-It(18,30,Math.sqrt(sr))),or=tt*Ht*(1+.045*rr)*(1-It(18,30,Math.sqrt(rr)));je[0].set(Vt,Gt,zn,1).applyMatrix4(a.matrixWorldInverse).w=fo,je[1].set(mn,Dn,Cs,1).applyMatrix4(a.matrixWorldInverse).w=or,ge.lampCol.setRGB(1,.8-.32*Ce,.52-.38*Ce),ci.uLampW.value[0].set(Vt,Gt,zn,fo),ci.uLampW.value[1].set(mn,Dn,Cs,or),ci.uLampCol.value.copy(ge.lampCol),ge.head.getWorldPosition(ci.uHeadPos.value),ge.head.target.getWorldPosition(Ye),ci.uHeadDir.value.copy(Ye).sub(ci.uHeadPos.value).normalize(),ci.uHeadI.value=ge.head.intensity/60}D.pool.visible=D.pool.opacity>.003,V.lod(I.s,_e,ii>.15,Se),Xe.uNight.value=ii,$.bloom.strength=Pt(.32,.55,ii),$.bloom.threshold=Pt(1.35,.95,ii),$.bloom.radius=Pt(.55,.35,ii);{let we=Math.max(ii,Ce,It(.25,.6,le.warm)*(1-vt));$.bloom.enabled=E&&we>.02,$.bloom.strength*=Math.min(1,we*4)}e.toneMappingExposure=Pt(1,1.15,ii)*(1+.35*Ce),Be.copy(a.position).addScaledVector(le.sunDir,1e3).project(a);let nr=$.grade.uniforms,Ap=Be.z<1?1:0,Rp=Math.max(Math.abs(Be.x),Math.abs(Be.y));nr.uSun.value.set(Be.x*.5+.5,Be.y*.5+.5),nr.uSunVis.value=Ap*(1-It(1,1.9,Rp))*It(-.02,.15,le.sunEl)*(1-le.night)*(1-vt)*(1-Ce),nr.uSat.value=1.1-.12*vt,nr.uDay.value=Le(),nr.uWarm.value=le.warm,nr.uTime.value=Y,ct.update(a.position,Y,dn*(1-Ce)*(1-Yt.snow),Le());{let we=li(I.s+190),je=(Yt.city+Yt.country+Yt.coast)*(1-vt)*(1-We)*It(.6,.9,le.sunEl)*(I.mirage??1)*(we&&Math.abs(I.s+190-we.s)<330?0:1);be.update(B,I.s,V.origin.x,V.origin.z,Sn(I.s+150,"rw"),je,Y,le.horizon)}{let we=Ot(Yt.snow+Yt.mountain*.6*Math.max(le.night,1-It(.27,.36,I.tod)),0,1)*(1-Ce);ve.copy(le.fog).multiplyScalar(.92),pe.copy(le.sunCol).multiplyScalar(Math.min(1,le.sunI/3)*(1-vt)*.6);let je=Math.cos(ge.group.rotation.y),tt=Math.sin(ge.group.rotation.y),Et=ge.group.position;F.set(Et.x-1.75*tt,Et.y+.95,Et.z-1.75*je,Math.max(le.night,Ce)*(.5+1.2*me.brake)),se.update(He,ge.group,I.speed,Xe.uWet.value*(1-Ce),Yt.snow*(1-Ce),we,ve,pe,F,a.position,I.spray)}gt.update(a.position,Y,Yt.snow*(.3+.7*vt)*(1-Ce),Le()),Pe.setFog(r.fog.near),Pe.update(He,Y,a.position,at,W,Yt,Le(),dn,ge.group.position);let Cp=performance.now();Oe.update(He,Y,a.position,at,W,Yt.sakura*(1-Ce),Q.y,ii,(Yt.country+Yt.sakura*.4)*(1-dn)*(1-Ce),Yt.mountain*(1-Ce));let Pp=performance.now();if(Ie){B.at(Ke,ye);let we=Math.hypot(ye.x-V.origin.x-a.position.x,ye.z-V.origin.z-a.position.z),je=ot.st.active?ot.group.position.distanceTo(a.position):1e9,tt=I.speed/15;Ie.update(tt<1.5?tt:1.5+(tt-1.5)*.4,Yt,Le(),{rush:Ot((I.speed-25)/40,0,1),bell:qn?Math.pow(Ot(1-we/260,0,1),1.5):0,train:Math.pow(Ot(1-je/230,0,1),2),rain:dn*(1-Ce)*(1-Yt.snow),wetRoad:Xe.uWet.value*(1-Ce),speed:I.speed,load:Ot(me.lon/3,0,1),roof:I.cam!==2,tunnel:Ce,water:(()=>{let Et=Ui(I.s);return Math.max(Et?1-It(12,150,Math.abs(I.s-Et.s)):0,Yt.mountain*.45)})(),dusk:le.warm*(I.tod>.5?1:.3)})}ti(Kt(I.s+40)),De&&(e.info.autoReset=!1,e.info.reset());let ya=null;De&&De.tq&&(ya=De.gl.createQuery(),De.gl.beginQuery(De.tq.TIME_ELAPSED_EXT,ya));let nf=performance.now();$.composer.render(He);let sf=performance.now();if(ya){let we=De.gl;for(we.endQuery(De.tq.TIME_ELAPSED_EXT),De.pend.push(ya);De.pend.length&&we.getQueryParameter(De.pend[0],we.QUERY_RESULT_AVAILABLE);){let je=De.pend.shift(),tt=we.getQueryParameter(je,we.QUERY_RESULT);we.deleteQuery(je),we.getParameter(De.tq.GPU_DISJOINT_EXT)||(De.gpu=tt/1e6,De.gpuN++,De.gpuSum+=De.gpu,De.gpu>De.gpuMax&&(De.gpuMax=De.gpu))}}let ir=window.__pb||(window.__pb={world:0,parts:0,render:0});if(ir.world=ir.world*.95+(fi-Dt)*.05,ir.parts=ir.parts*.95+(Pp-Cp)*.05,ir.render=ir.render*.95+(sf-nf)*.05,Ge=Ge*.95+(performance.now()-de)*.05,window.__ft=Ge,De){let we=e.info,je=performance.now()-de,tt={t:+Y.toFixed(2),s:Math.round(I.s),total:+je.toFixed(1),world:+(fi-Dt).toFixed(1),render:+(sf-nf).toFixed(1),gpu:+(De.gpu||0).toFixed(1),progs:we.programs.length-De.progs,geos:we.memory.geometries-De.geos,tex:we.memory.textures-De.tex,calls:we.render.calls,tris:we.render.triangles};tt.progs>0&&Z&&(tt.newProgs=we.programs.slice(-tt.progs).map(Et=>(Et.name||"")+":"+String(Et.cacheKey).slice(0,60))),De.progs=we.programs.length,De.geos=we.memory.geometries,De.tex=we.memory.textures,De.frames++,De.sum+=je,je>De.max&&(De.max=je),je>12&&Z&&De.spikes.push(tt),De.last=tt}if((On+=He)>.25){On=0,Ae.textContent=Math.round(I.speed*3.6),ne.textContent=(I.dist/1e3).toFixed(1);let we=Math.floor(I.tod*1440);Re.textContent=`${String(Math.floor(we/60)).padStart(2,"0")}:${String(we%60).padStart(2,"0")}`}Fe++,Z&&Fe>150&&He>.03?ke+=He:ke=Math.max(0,ke-He*.5),ke>3&&!ft.has("q")&&(ke=0,ee())}window.__dbg={renderer:e,st:I,scene:r,camera:a,world:V,TOD:le,X:K,train:ot,weather:pt,U:Xe,birds:Pe,cine:Bt,post:$,car:ge,sun:l,M:D,clouds:J,sky:G,mountains:re,shadowDir:p,CM:me,spray:se,get audio(){return Ie}},ro(""),ue.classList.add("ready"),ft.has("auto")&&oo(),requestAnimationFrame(Rt)}xy().catch(i=>{console.error(i),ro("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
