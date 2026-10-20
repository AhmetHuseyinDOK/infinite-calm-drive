var $u=0,yc=1,Ku=2;var ts=1,Qu=2,zs=3,Ui=0,qe=1,Qe=2,dn=0,ks=1,di=2,Mc=3,Sc=4,ju=5;var es=100,th=101,eh=102,nh=103,ih=104,sh=200,rh=201,oh=202,ah=203,bc=204,Tc=205,lh=206,ch=207,uh=208,hh=209,fh=210,dh=211,ph=212,mh=213,gh=214,$o=0,Ko=1,Qo=2,Cs=3,jo=4,ta=5,ea=6,na=7,Ec=0,xh=1,_h=2,Xn=0,Vr=1,Gr=2,Wr=3,Xr=4,qr=5,Yr=6,ns=7;var wc=300,Fi=301,is=302,wa=303,Aa=304,Zr=306,ia=1e3,Kn=1001,sa=1002,Pe=1003,vh=1004;var Jr=1005;var De=1006,Ra=1007;var Cn=1008;var pn=1009,Ac=1010,Rc=1011,Hs=1012,Ca=1013,qn=1014,Pn=1015,Fe=1016,Pa=1017,Ia=1018,Vs=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,In=1023,Qn=1026,Bi=1027,Gs=1028,La=1029,Oi=1030,Da=1031;var Na=1033,$r=33776,Kr=33777,Qr=33778,jr=33779,Ua=35840,Fa=35841,Ba=35842,Oa=35843,za=36196,ka=37492,Ha=37496,Va=37488,Ga=37489,to=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,Qa=37815,ja=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,eo=36285,ul=36286;var _r=2300,ra=2301,Zo=2302,hc=2303,fc=2400,dc=2401,pc=2402;var yh=3200;var hl=0,Mh=1,pi="",Me="srgb",vr="srgb-linear",yr="linear",ie="srgb";var Jo=7680;var Sh=519,bh=512,Th=513,Eh=514,fl=515,wh=516,Ah=517,dl=518,Rh=519,Ch=35044;var Dc="300 es",Vn=2e3,Ps=2001;function md(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=Mr("canvas");return i.style.display="block",i}var Eu={},Is=null;function Nc(...i){let t="THREE."+i.shift();Is?Is("log",t,...i):console.log(t,...i)}function Ih(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Ih(i);let t="THREE."+i.shift();if(Is)Is("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=Ih(i);let t="THREE."+i.shift();if(Is)Is("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ji(...i){let t=i.join(" ");t in Eu||(Eu[t]=!0,Ot(...i))}function Lh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dh={[$o]:Ko,[Qo]:ea,[jo]:na,[Cs]:ta,[Ko]:$o,[ea]:Qo,[na]:jo,[ta]:Cs},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,Sr=180/Math.PI;function no(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function xd(i,t){return(i%t+t)%t}function Gl(i,t,e){return(1-e)*i+e*t}function hr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;var Nt=zc,Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||c!==f||l!==d||u!==m){let g=c*f+l*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,c=c*p+f*o,l=l*p+d*o,u=u*p+m*o,h=h*p+x*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+m*o,h=h*p+x*o;let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*d-l*f,t[e+1]=c*m+u*f+l*h-o*d,t[e+2]=l*m+u*d+o*f-c*h,t[e+3]=u*m-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kc=class kc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;var F=kc,Wl=new F,wu=new Ke,Hc=class Hc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],T=s[4],_=s[7],M=s[2],b=s[5],A=s[8];return r[0]=a*x+o*y+c*M,r[3]=a*g+o*T+c*b,r[6]=a*p+o*_+c*A,r[1]=l*x+u*y+h*M,r[4]=l*g+u*T+h*b,r[7]=l*p+u*_+h*A,r[2]=f*x+d*y+m*M,r[5]=f*g+d*T+m*b,r[8]=f*p+d*_+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,m=e*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;var Vt=Hc,Xl=new Vt,Au=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _d(){let i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var Jt=_d();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Mr("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vd=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=no(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var yd=0,Yl=new F,ln=class i extends jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=De,a=Cn,o=In,c=pn,l=i.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=no(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=wc;ln.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,_=(d+1)/2,M=(p+1)/2,b=(u+f)/4,A=(h+x)/4,v=(m+g)/4;return T>_&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=A/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var pe=Vc,aa=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ln(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xe=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},br=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ea=class Ea{constructor(t,e,n,s,r,a,o,c,l,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,d,m,x,g)}set(t,e,n,s,r,a,o,c,l,u,h,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*h,m=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,m=l*u,x=l*h;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,m=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,d=a*h,m=o*u,x=o*h;e[0]=c*u,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,m=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=m*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*c,d=a*l,m=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Md,t,Sd)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ti.crossVectors(n,xn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ti.crossVectors(n,xn)),Ti.normalize(),wo.crossVectors(xn,Ti),s[0]=Ti.x,s[4]=wo.x,s[8]=xn.x,s[1]=Ti.y,s[5]=wo.y,s[9]=xn.y,s[2]=Ti.z,s[6]=wo.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],T=n[7],_=n[11],M=n[15],b=s[0],A=s[4],v=s[8],E=s[12],P=s[1],L=s[5],R=s[9],U=s[13],C=s[2],D=s[6],N=s[10],V=s[14],G=s[3],B=s[7],z=s[11],X=s[15];return r[0]=a*b+o*P+c*C+l*G,r[4]=a*A+o*L+c*D+l*B,r[8]=a*v+o*R+c*N+l*z,r[12]=a*E+o*U+c*V+l*X,r[1]=u*b+h*P+f*C+d*G,r[5]=u*A+h*L+f*D+d*B,r[9]=u*v+h*R+f*N+d*z,r[13]=u*E+h*U+f*V+d*X,r[2]=m*b+x*P+g*C+p*G,r[6]=m*A+x*L+g*D+p*B,r[10]=m*v+x*R+g*N+p*z,r[14]=m*E+x*U+g*V+p*X,r[3]=y*b+T*P+_*C+M*G,r[7]=y*A+T*L+_*D+M*B,r[11]=y*v+T*R+_*N+M*z,r[15]=y*E+T*U+_*V+M*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=c*d-l*f,T=o*d-l*h,_=o*f-c*h,M=a*d-l*u,b=a*f-c*u,A=a*h-o*u;return e*(x*y-g*T+p*_)-n*(m*y-g*M+p*b)+s*(m*T-x*M+p*A)-r*(m*_-x*b+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*o-n*a,T=e*c-s*a,_=e*l-r*a,M=n*c-s*o,b=n*l-r*o,A=s*l-r*c,v=u*x-h*m,E=u*g-f*m,P=u*p-d*m,L=h*g-f*x,R=h*p-d*x,U=f*p-d*g,C=y*U-T*R+_*L+M*P-b*E+A*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=(o*U-c*R+l*L)*D,t[1]=(s*R-n*U-r*L)*D,t[2]=(x*A-g*b+p*M)*D,t[3]=(f*b-h*A-d*M)*D,t[4]=(c*P-a*U-l*E)*D,t[5]=(e*U-s*P+r*E)*D,t[6]=(g*_-m*A-p*T)*D,t[7]=(u*A-f*_+d*T)*D,t[8]=(a*R-o*P+l*v)*D,t[9]=(n*P-e*R-r*v)*D,t[10]=(m*b-x*_+p*y)*D,t[11]=(h*_-u*b-d*y)*D,t[12]=(o*E-a*L-c*v)*D,t[13]=(e*L-n*E+s*v)*D,t[14]=(x*T-m*M-g*y)*D,t[15]=(u*M-h*T+f*y)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,m=r*h,x=a*u,g=a*h,p=o*h,y=c*l,T=c*u,_=c*h,M=n.x,b=n.y,A=n.z;return s[0]=(1-(x+p))*M,s[1]=(d+_)*M,s[2]=(m-T)*M,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(f+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+T)*A,s[9]=(g-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let l=1/a,u=1/o,h=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,e.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Vn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Vn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ps)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Vn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ps)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;var Ht=Ea,ms=new F,On=new Ht,Md=new F(0,0,0),Sd=new F(1,1,1),Ti=new F,wo=new F,xn=new F,Cu=new Ht,Pu=new Ke,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,Iu=new F,gs=new Ke,ri=new Ht,Ao=new F,fr=new F,Td=new F,Ed=new Ke,Lu=new F(1,0,0),Du=new F(0,1,0),Nu=new F(0,0,1),Uu={type:"added"},wd={type:"removed"},xs={type:"childadded",child:null},Zl={type:"childremoved",child:null},Ne=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Rn,n=new Ke,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Vt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fr,Ao,this.up):ri.lookAt(Ao,fr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ri),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),xs.child=t,this.dispatchEvent(xs),xs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new F(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ad={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ad)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=xd(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Jt.workingToColorSpace($e.copy(this),t),Math.round(Qt($e.r*255,0,255))*65536+Math.round(Qt($e.g*255,0,255))*256+Math.round(Qt($e.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Me){Jt.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Ro);let n=Gl(Ei.h,Ro.h,e),s=Gl(Ei.s,Ro.s,e),r=Gl(Ei.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ot;ot.NAMES=Nh;var Er=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new F,oi=new F,$l=new F,ai=new F,_s=new F,vs=new F,Fu=new F,Kl=new F,Ql=new F,jl=new F,tc=new pe,ec=new pe,nc=new pe,Ci=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),oi.subVectors(n,e),$l.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(oi),c=zn.dot($l),l=oi.dot(oi),u=oi.dot($l),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,m=(a*u-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(o,ai.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),oi.subVectors(t,e),zn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),vs.subVectors(r,n),Kl.subVectors(t,n);let c=_s.dot(Kl),l=vs.dot(Kl);if(c<=0&&l<=0)return e.copy(n);Ql.subVectors(t,s);let u=_s.dot(Ql),h=vs.dot(Ql);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(_s,a);jl.subVectors(t,r);let d=_s.dot(jl),m=vs.dot(jl);if(m>=0&&d<=m)return e.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(vs,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Fu.subVectors(r,s),o=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(Fu,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(_s,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),Po.subVectors(this.max,dr),ys.subVectors(t.a,dr),Ms.subVectors(t.b,dr),Ss.subVectors(t.c,dr),wi.subVectors(Ms,ys),Ai.subVectors(Ss,Ms),Xi.subVectors(ys,Ss);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Xi.z,Xi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Xi.z,0,-Xi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Xi.y,Xi.x,0];return!ic(e,ys,Ms,Ss,Po)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,ys,Ms,Ss,Po))?!1:(Io.crossVectors(wi,Ai),e=[Io.x,Io.y,Io.z],ic(e,ys,Ms,Ss,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,Co=new ti,ys=new F,Ms=new F,Ss=new F,wi=new F,Ai=new F,Xi=new F,dr=new F,Po=new F,Io=new F,qi=new F;function ic(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=t.dot(qi),l=e.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Re=new F,Lo=new Nt,Rd=0,We=class extends jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ch,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cd=new ti,pr=new F,sc=new F,hi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(sc)),this.expandByPoint(pr.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pd=0,An=new Ht,rc=new Ne,bs=new F,_n=new ti,mr=new ti,ze=new F,le=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(md(t)?Ar:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(_n.min,mr.min),_n.expandByPoint(ze),ze.addVectors(_n.max,mr.max),_n.expandByPoint(ze)):(_n.expandByPoint(mr.min),_n.expandByPoint(mr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ze.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),ze.add(bs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;let l=new F,u=new F,h=new F,f=new Nt,d=new Nt,m=new Nt,x=new F,g=new F;function p(v,E,P){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,P),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),u.sub(l),h.sub(l),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),o[v].add(x),o[E].add(x),o[P].add(x),c[v].add(g),c[E].add(g),c[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){let P=y[v],L=P.start,R=P.count;for(let U=L,C=L+R;U<C;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let T=new F,_=new F,M=new F,b=new F;function A(v){M.fromBufferAttribute(s,v),b.copy(M);let E=o[v];T.copy(E),T.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(b,E);let L=_.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,E=y.length;v<E;++v){let P=y[v],L=P.start,R=P.count;for(let U=L,C=L+R;U<C;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new We(f,u,h)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new F,Id=new F,Ld=new Vt,Hn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(Id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ld.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dd=0,fi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=no(),this.name="",this.type="Material",this.blending=ks,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new F,ac=new F,Do=new F,No=new F,Rr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ac.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),No.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Do),o=No.dot(this.direction),c=-No.dot(Do),l=No.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*c-o,f=a*o-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ac).addScaledVector(Do,f),d}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,_=Math.abs(c),M=Math.abs(l),b=Math.abs(u),A,v,E,P,L,R,U,C,D,N,V,G;if(_>=M&&_>=b?(E=c,R=h,D=m,G=p,c>=0?(A=l,v=u,P=f,L=d,U=x,C=g,N=y,V=T):(A=u,v=l,P=d,L=f,U=g,C=x,N=T,V=y)):M>=b?(E=l,R=f,D=x,G=y,l>=0?(A=u,v=c,P=d,L=h,U=g,C=m,N=T,V=p):(A=c,v=u,P=h,L=d,U=m,C=g,N=p,V=T)):(E=u,R=d,D=g,G=T,u>=0?(A=c,v=l,P=h,L=f,U=m,C=x,N=p,V=y):(A=l,v=c,P=f,L=h,U=x,C=m,N=y,V=p)),E===0)return null;let B=A/E,z=v/E,X=1/E,ht=P-B*R,Et=L-z*R,$t=U-B*D,Ut=C-z*D,Gt=N-B*G,K=V-z*G,et=Gt*Ut-K*$t,_t=ht*K-Et*Gt,Bt=$t*Et-Ut*ht;if(s){if(et<0||_t<0||Bt<0)return null}else if((et<0||_t<0||Bt<0)&&(et>0||_t>0||Bt>0))return null;let ct=et+_t+Bt;if(ct===0)return null;let Wt=X*(et*R+_t*D+Bt*G);return(ct>0?Wt<0:Wt>0)?null:this.at(Wt/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bu=new Ht,Yi=new Rr,Uo=new hi,Ou=new F,Fo=new F,Bo=new F,Oo=new F,lc=new F,zo=new F,zu=new F,ko=new F,ee=class extends Ne{constructor(t=new le,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(lc.fromBufferAttribute(h,t),a?zo.addScaledVector(lc,u):zo.addScaledVector(lc.sub(e),u))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Uo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Uo,Ou)===null||Yi.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Bu.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,M=T;_<M;_+=3){let b=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);s=Ho(this,p,t,n,l,u,h,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=Ho(this,a,t,n,l,u,h,y,T,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,M=T;_<M;_+=3){let b=_,A=_+1,v=_+2;s=Ho(this,p,t,n,l,u,h,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,T=g+1,_=g+2;s=Ho(this,a,t,n,l,u,h,y,T,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Nd(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ui,o),c===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ko);return l<e.near||l>e.far?null:{distance:l,point:ko.clone(),object:i}}function Ho(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Fo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,Oo);let u=Nd(i,t,e,n,Fo,Bo,Oo,zu);if(u){let h=new F;Ci.getBarycoord(zu,Fo,Bo,Oo,h),s&&(u.uv=Ci.getInterpolatedAttribute(s,o,c,l,h,new Nt)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,o,c,l,h,new Nt)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new F,materialIndex:0};Ci.getNormal(Fo,Bo,Oo,f.normal),u.face=f,u.barycoord=h}return u}var Ki=class extends ln{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Pe,u=Pe,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new Ht,ku=new Ht,Vo=[],Hu=new ti,Ud=new Ht,gr=new ee,xr=new hi,Qi=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ud)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Hu.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),xr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),ku.multiplyMatrices(n,Ts),gr.matrixWorld=ku,gr.raycast(t,Vo);for(let a=0,o=Vo.length;a<o;a++){let c=Vo[a];c.instanceId=r,c.object=this,e.push(c)}Vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ki(new Float32Array(s*this.count),s,this.count,Gs,Pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new hi,Fd=new Nt(.5,.5),Go=new F,Ns=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],T=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,d-u,p-m,M-y).normalize(),s[1].setComponents(l+a,d+u,p+m,M+y).normalize(),s[2].setComponents(l+o,d+h,p+x,M+T).normalize(),s[3].setComponents(l-o,d-h,p-x,M-T).normalize(),n)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,d-f,p-g,M-_).normalize();else if(s[4].setComponents(l-c,d-f,p-g,M-_).normalize(),e===Vn)s[5].setComponents(l+c,d+f,p+g,M+_).normalize();else if(e===Ps)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=Fd.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vu=new Ht,mc=new Rr,Wo=new hi,Xo=new F,Cr=class extends Ne{constructor(t=new le,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Vu.copy(s).invert(),mc.copy(t.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=l.getX(m);Xo.fromBufferAttribute(h,g),Gu(Xo,g,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Xo.fromBufferAttribute(h,m),Gu(Xo,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(i,t,e,n,s,r,a){let o=mc.distanceSqToPoint(i);if(o<e){let c=new F;mc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends ln{constructor(t=[],e=Fi,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends ln{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends ln{constructor(t,e,n=qn,s,r,a,o=Pe,c=Pe,l,u=Qn,h=1){if(u!==Qn&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ca=class extends Pi{constructor(t,e=qn,n=Fi,s,r,a=Pe,o=Pe,c,l=Qn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ir=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wn=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function m(x,g,p,y,T,_,M,b,A,v,E){let P=_/A,L=M/v,R=_/2,U=M/2,C=b/2,D=A+1,N=v+1,V=0,G=0,B=new F;for(let z=0;z<N;z++){let X=z*L-U;for(let ht=0;ht<D;ht++){let Et=ht*P-R;B[x]=Et*y,B[g]=X*T,B[p]=C,l.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=b>0?1:-1,u.push(B.x,B.y,B.z),h.push(ht/A),h.push(1-z/v),V+=1}}for(let z=0;z<v;z++)for(let X=0;X<A;X++){let ht=f+X+D*z,Et=f+X+D*(z+1),$t=f+(X+1)+D*(z+1),Ut=f+(X+1)+D*z;c.push(ht,Et,Ut),c.push(Et,$t,Ut),G+=6}o.addGroup(d,G,E),d+=G,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Lr=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new F,u=new Nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fs=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,x=[],g=n/2,p=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function y(){let _=new F,M=new F,b=0,A=(e-t)/n;for(let v=0;v<=r;v++){let E=[],P=v/r,L=P*(e-t)+t;for(let R=0;R<=s;R++){let U=R/s,C=U*c+o,D=Math.sin(C),N=Math.cos(C);M.x=L*D,M.y=-P*n+g,M.z=L*N,h.push(M.x,M.y,M.z),_.set(D,A,N).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-P),E.push(m++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let P=x[E][v],L=x[E+1][v],R=x[E+1][v+1],U=x[E][v+1];(t>0||E!==0)&&(u.push(P,L,U),b+=3),(e>0||E!==r-1)&&(u.push(L,R,U),b+=3)}l.addGroup(p,b,0),p+=b}function T(_){let M=m,b=new Nt,A=new F,v=0,E=_===!0?t:e,P=_===!0?1:-1;for(let R=1;R<=s;R++)h.push(0,g*P,0),f.push(0,P,0),d.push(.5,.5),m++;let L=m;for(let R=0;R<=s;R++){let C=R/s*c+o,D=Math.cos(C),N=Math.sin(C);A.x=E*N,A.y=g*P,A.z=E*D,h.push(A.x,A.y,A.z),f.push(0,P,0),b.x=D*.5+.5,b.y=N*.5*P+.5,d.push(b.x,b.y),m++}for(let R=0;R<s;R++){let U=M+R,C=L+R;_===!0?u.push(C,C+1,U):u.push(C+1,C,U),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ua=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new F,_=new F,M=new F;for(let b=0;b<e.length;b+=3)d(e[b+0],T),d(e[b+1],_),d(e[b+2],M),c(T,_,M,y)}function c(y,T,_,M){let b=M+1,A=[];for(let v=0;v<=b;v++){A[v]=[];let E=y.clone().lerp(_,v/b),P=T.clone().lerp(_,v/b),L=b-v;for(let R=0;R<=L;R++)R===0&&v===b?A[v][R]=E:A[v][R]=E.clone().lerp(P,R/L)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){let P=Math.floor(E/2);E%2===0?(f(A[v][P+1]),f(A[v+1][P]),f(A[v][P])):(f(A[v][P+1]),f(A[v+1][P+1]),f(A[v+1][P]))}}function l(y){let T=new F;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(y),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function u(){let y=new F;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let _=g(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;a.push(_,1-M)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let T=a[y+0],_=a[y+2],M=a[y+4],b=Math.max(T,_,M),A=Math.min(T,_,M);b>.9&&A<.1&&(T<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,T){let _=y*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function m(){let y=new F,T=new F,_=new F,M=new F,b=new Nt,A=new Nt,v=new Nt;for(let E=0,P=0;E<r.length;E+=9,P+=6){y.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),M.copy(y).add(T).add(_).divideScalar(3);let L=g(M);x(b,P+0,y,L),x(A,P+2,T,L),x(v,P+4,_,L)}}function x(y,T,_,M){M<0&&y.x===1&&(a[T]=y.x-1),_.x===0&&_.z===0&&(a[T]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Dr=class i extends ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ue=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*f-a;for(let T=0;T<l;T++){let _=T*h-r;m.push(_,-y,0),x.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let T=y+l*p,_=y+l*(p+1),M=y+1+l*(p+1),b=y+1+l*p;d.push(T,_,b),d.push(_,M,b)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Nr=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new F,f=new F,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],T=p/n,_=a+T*o,M=t*Math.cos(_),b=Math.sqrt(t*t-M*M),A=0;p===0&&a===0?A=.5/e:p===n&&c===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let E=v/e,P=s+E*r;h.x=-b*Math.cos(P),h.y=M,h.z=b*Math.sin(P),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(E+A,1-T),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let T=u[p][y+1],_=u[p][y],M=u[p+1][y],b=u[p+1][y+1];(p!==0||a>0)&&d.push(T,_,b),(p!==n-1||c<Math.PI)&&d.push(_,M,b)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Wu(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var mi={clone:ss,merge:je},Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Bs=class extends re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xe=class extends fi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ha=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Es(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-n;break;case pc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,c=2*n-e;break;case pc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,T=(-1-d)*g+(1.5+d)*x+.5*m,_=d*g-d*x;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+y*a[l+M]+T*a[c+M]+_*a[h+M];return r}},pa=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},ma=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ga=class extends Ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let f=o*2,d=t-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=d*f+m*2,y=h[p],T=h[p+1],_=t*f+m*2,M=u[_],b=u[_+1],A=Hd(n,e,y,M,s);r[m]=Uh(A,x,T,b,g)}return r}};function Uh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function kd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Uh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=kd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),cc(t.settings)&&(n.settings={inTangents:Es(t.settings.inTangents,Array),outTangents:Es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case ra:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;cc(this.settings)&&(Xu(this.settings.inTangents,t),Xu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){kt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&gd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ra;var Li=class extends yn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=_r;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="color";var _a=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var va=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ke.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ur=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends yn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=_r;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var Ma=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fh=new Ma,Sa=class{constructor(t){this.manager=t!==void 0?t:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fr=class extends Os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},uc=new Ht,qu=new F,Yu=new F,Br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qo=new F,Yo=new Ke,$n=new F,ji=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qo,Yo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qo,Yo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new F,Zu=new Nt,Ju=new Nt,Ge=class extends ji{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,Ju),e.subVectors(Ju,Zu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gc=class extends Br{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Sr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Or=class extends Os{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Ni=class extends ji{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xc=class extends Br{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zr=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var kr=class extends le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ws=-90,As=1,ba=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(ws,As,t,e);s.layers=this.layers,this.add(s);let r=new Ge(ws,As,t,e);r.layers=this.layers,this.add(r);let a=new Ge(ws,As,t,e);a.layers=this.layers,this.add(a);let o=new Ge(ws,As,t,e);o.layers=this.layers,this.add(o);let c=new Ge(ws,As,t,e);c.layers=this.layers,this.add(c);let l=new Ge(ws,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Hr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vd(){this._document.hidden===!1&&this.reset()}var Fc="\\[\\]\\.:\\/",Gd=new RegExp("["+Fc+"]","g"),Bc="[^"+Fc+"]",Wd="[^"+Fc.replace("\\.","")+"]",Xd=/((?:WC+[\/:])*)/.source.replace("WC",Bc),qd=/(WCOD+)?/.source.replace("WCOD",Wd),Yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Zd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Jd=new RegExp("^"+Xd+qd+Yd+Zd+"$"),$d=["material","materials","bones","map"],_c=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gd,"")}static parseTrackName(t){let e=Jd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$d.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_c;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);var Gc=class Gc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Gc.prototype.isMatrix2=!0;var vc=Gc;function Oc(i,t,e,n){let s=Kd(n);switch(e){case Ic:return i*t;case Gs:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Oi:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case za:case ka:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case to:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kd(i){switch(i){case pn:case Ac:return{byteLength:1,components:1};case Hs:case Rc:case Fe:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case qn:case Ca:case Pn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:up,aomap_fragment:hp,aomap_pars_fragment:fp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Tp,color_pars_fragment:Ep,color_pars_vertex:wp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Fp,envmap_fragment:Bp,envmap_common_pars_fragment:Op,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Kp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:jp,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,lightprobes_pars_fragment:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:h0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphinstance_vertex:_0,morphcolor_vertex:v0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:E0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:L0,opaque_fragment:D0,packing:N0,premultiplied_alpha_fragment:U0,project_vertex:F0,dithering_fragment:B0,dithering_pars_fragment:O0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:$0,tonemapping_fragment:K0,tonemapping_pars_fragment:Q0,transmission_fragment:j0,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:um,depth_vert:hm,depth_frag:fm,distance_vert:dm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:ym,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:bm,meshmatcap_frag:Tm,meshnormal_vert:Em,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Im,meshtoon_frag:Lm,points_vert:Dm,points_frag:Nm,shadow_vert:Um,shadow_frag:Fm,sprite_vert:Bm,sprite_frag:Om},Mt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ni={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ni.physical={uniforms:je([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var pl={r:0,b:0,g:0},zm=new Ht,of=new Vt;of.set(-1,0,0,0,1,0,0,0,1);function km(i,t,e,n,s,r){let a=new ot(0),o=s===!0?0:1,c,l,u=null,h=0,f=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let _=y.backgroundBlurriness>0;T=t.get(T,_)}return T}function m(y){let T=!1,_=d(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,T){let _=d(T);_&&(_.isCubeTexture||_.mapping===Zr)?(l===void 0&&(l=new ee(new Wn(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:ss(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(of),l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ie,(u!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ee(new Ue(2,2),new re({name:"BackgroundMaterial",uniforms:ss(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,T){y.getRGB(pl,Uc(i)),e.buffers.color.setClear(pl.r,pl.g,pl.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Hm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,R,U,C,D){let N=!1,V=h(L,C,U,R);r!==V&&(r=V,l(r.object)),N=d(L,C,U,D),N&&m(L,C,U,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(L,R,U,C),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,R,U,C){let D=C.wireframe===!0,N=n[R.id];N===void 0&&(N={},n[R.id]=N);let V=L.isInstancedMesh===!0?L.id:0,G=N[V];G===void 0&&(G={},N[V]=G);let B=G[U.id];B===void 0&&(B={},G[U.id]=B);let z=B[D];return z===void 0&&(z=f(c()),B[D]=z),z}function f(L){let R=[],U=[],C=[];for(let D=0;D<e;D++)R[D]=0,U[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,R,U,C){let D=r.attributes,N=R.attributes,V=0,G=U.getAttributes();for(let B in G)if(G[B].location>=0){let X=D[B],ht=N[B];if(ht===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),X===void 0||X.attribute!==ht||ht&&X.data!==ht.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function m(L,R,U,C){let D={},N=R.attributes,V=0,G=U.getAttributes();for(let B in G)if(G[B].location>=0){let X=N[B];X===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let ht={};ht.attribute=X,X&&X.data&&(ht.data=X.data),D[B]=ht,V++}r.attributes=D,r.attributesNum=V,r.index=C}function x(){let L=r.newAttributes;for(let R=0,U=L.length;R<U;R++)L[R]=0}function g(L){p(L,0)}function p(L,R){let U=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;U[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),D[L]!==R&&(i.vertexAttribDivisor(L,R),D[L]=R)}function y(){let L=r.newAttributes,R=r.enabledAttributes;for(let U=0,C=R.length;U<C;U++)R[U]!==L[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function T(L,R,U,C,D,N,V){V===!0?i.vertexAttribIPointer(L,R,U,D,N):i.vertexAttribPointer(L,R,U,C,D,N)}function _(L,R,U,C){x();let D=C.attributes,N=U.getAttributes(),V=R.defaultAttributeValues;for(let G in N){let B=N[G];if(B.location>=0){let z=D[G];if(z===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let X=z.normalized,ht=z.itemSize,Et=t.get(z);if(Et===void 0)continue;let $t=Et.buffer,Ut=Et.type,Gt=Et.bytesPerElement,K=Ut===i.INT||Ut===i.UNSIGNED_INT||z.gpuType===Ca;if(z.isInterleavedBufferAttribute){let et=z.data,_t=et.stride,Bt=z.offset;if(et.isInstancedInterleavedBuffer){for(let ct=0;ct<B.locationSize;ct++)p(B.location+ct,et.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<B.locationSize;ct++)g(B.location+ct);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ct=0;ct<B.locationSize;ct++)T(B.location+ct,ht/B.locationSize,Ut,X,_t*Gt,(Bt+ht/B.locationSize*ct)*Gt,K)}else{if(z.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)p(B.location+et,z.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let et=0;et<B.locationSize;et++)g(B.location+et);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let et=0;et<B.locationSize;et++)T(B.location+et,ht/B.locationSize,Ut,X,ht*Gt,ht/B.locationSize*et*Gt,K)}}else if(V!==void 0){let X=V[G];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(B.location,X);break;case 3:i.vertexAttrib3fv(B.location,X);break;case 4:i.vertexAttrib4fv(B.location,X);break;default:i.vertexAttrib1fv(B.location,X)}}}}y()}function M(){E();for(let L in n){let R=n[L];for(let U in R){let C=R[U];for(let D in C){let N=C[D];for(let V in N)u(N[V].object),delete N[V];delete C[D]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let R=n[L.id];for(let U in R){let C=R[U];for(let D in C){let N=C[D];for(let V in N)u(N[V].object),delete N[V];delete C[D]}}delete n[L.id]}function A(L){for(let R in n){let U=n[R];for(let C in U){let D=U[C];if(D[L.id]===void 0)continue;let N=D[L.id];for(let V in N)u(N[V].object),delete N[V];delete D[L.id]}}}function v(L){for(let R in n){let U=n[R],C=L.isInstancedMesh===!0?L.id:0,D=U[C];if(D!==void 0){for(let N in D){let V=D[N];for(let G in V)u(V[G].object),delete V[G];delete D[N]}delete U[C],Object.keys(U).length===0&&delete n[R]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Vm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Fe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Pn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ot("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:_,maxSamples:M,samples:b}}function Wm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let y=r?0:n,T=y*4,_=p.clippingState||null;c.value=_,_=u(m,f,T,d);for(let M=0;M!==T;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,_=d;T!==x;++T,_+=4)a.copy(h[T]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Xs=4,Xm=6,qm=20,Ym=256,io=new Ni,Bh=new ot,Wc=null,Xc=0,qc=0,Yc=!1,Zm=new F,rs=new F,gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Zm}=r;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Fe,format:In,colorSpace:vr,depthBuffer:!1},s=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jm(r)),this._blurMaterial=Km(r,t,e),this._ggxMaterial=$m(r,t,e)}return s}_compileMaterial(t){let e=new ee(new le,t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s,r){let c=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new Wn,new ke({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(Bh),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let M=this._cubeSize;Ws(s,_*M,T>2?M:0,M,M),h.setRenderTarget(s),p&&h.render(x,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fi||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ws(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Xs?n-m+Xs:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Ws(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,io),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Ws(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(o,io)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Xs?s-this._lodMax+Xs:0),f=4*(this._cubeSize-u);Ws(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(c,io)}};function Jm(i){let t=[],e=[],n=i,s=i-Xs+1+Xm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,T=p>2?0:-1,_=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];m.set(_,d*f*p);for(let M=0;M<f;M++){let b=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?rs.set(1,A,b):p===1?rs.set(-b,1,-A):p===2?rs.set(-b,A,1):p===3?rs.set(-1,A,-b):p===4?rs.set(-b,-1,A):rs.set(b,A,-1),rs.toArray(x,(p*f+M)*d)}}let g=new le;g.setAttribute("position",new We(m,d)),g.setAttribute("outputDirection",new We(x,d)),e.push(new ee(g,null)),n>Xs&&n--}return{lodMeshes:e,sizeLods:t}}function Oh(i,t,e){let n=new xe(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $m(i,t,e){return new re({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Km(i,t,e){return new re({name:"SphericalGaussianBlur",defines:{SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function zh(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function kh(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xl=class extends xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new re({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:dn});r.uniforms.tEquirect.value=e;let a=new ee(s,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=De),new ba(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Qm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===wa||d===Aa)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new xl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===wa||d===Aa,x=d===Fi||d===is;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new gl(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new gl(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,d){return d===wa?f.mapping=Fi:d===Aa&&(f.mapping=is),f}function c(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let T=0,_=y.length;T<_;T+=3){let M=y[T+0],b=y[T+1],A=y[T+2];f.push(M,b,b,A,A,M)}}else{let y=m.array;x=m.version;for(let T=0,_=y.length/3-1;T<_;T+=3){let M=T+0,b=T+1,A=T+2;f.push(M,b,b,A,A,M)}}let g=new(m.count>=65535?Ar:wr)(f,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function eg(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*a,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let _=o.attributes.position.count*T,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*M*4*h),A=new br(b,_,M,h);A.type=Pn,A.needsUpdate=!0;let v=T*4;for(let P=0;P<h;P++){let L=g[P],R=p[P],U=y[P],C=_*M*4*P;for(let D=0;D<L.count;D++){let N=D*v;d===!0&&(s.fromBufferAttribute(L,D),b[C+N+0]=s.x,b[C+N+1]=s.y,b[C+N+2]=s.z,b[C+N+3]=0),m===!0&&(s.fromBufferAttribute(R,D),b[C+N+4]=s.x,b[C+N+5]=s.y,b[C+N+6]=s.z,b[C+N+7]=0),x===!0&&(s.fromBufferAttribute(U,D),b[C+N+8]=s.x,b[C+N+9]=s.y,b[C+N+10]=s.z,b[C+N+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Nt(_,M)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function sg(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var rg={[Vr]:"LINEAR_TONE_MAPPING",[Gr]:"REINHARD_TONE_MAPPING",[Wr]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[Yr]:"AGX_TONE_MAPPING",[ns]:"NEUTRAL_TONE_MAPPING",[qr]:"CUSTOM_TONE_MAPPING"};function og(i,t,e,n,s,r){let a=new xe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new le;l.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let u=new Bs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ee(l,u),f=new Ni(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,y=[],T=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),c!==null&&c.setSize(_,M);for(let b=0;b<y.length;b++){let A=y[b];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){y=_,T=y.length>0&&y[0].isRenderPass===!0;let M=a.width,b=a.height;y.length>0&&o===null&&(o=new xe(M,b,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),c=new xe(M,b,{type:Fe,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(M,b)}},this.begin=function(_,M){if(x||_.toneMapping===Xn&&y.length===0)return!1;if(p=M,M!==null){let b=M.width,A=M.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return T===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Xn,!0},this.hasRenderPass=function(){return T},this.end=function(_,M){_.toneMapping=g,x=!0;let b=a,A=o;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,A,b,M),E.needsSwap!==!1&&(b=A,A=A===o?c:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,u.defines={},Jt.getTransfer(d)===ie&&(u.defines.SRGB_TRANSFER="");let v=rg[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var af=new ln,$c=new Pi(1,1),lf=new br,cf=new la,uf=new Pr,Hh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Oe(e,n)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Oe(e,n)}}function dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Oe(e,n)}}function pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?dl:fl,r=$c):r=af,e.setTexture2D(t||r,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cf,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uf,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lf,s)}function wg(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return hg;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Ag(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Cg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Ig(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function Og(i,t){i.uniform1uiv(this.addr,t)}function zg(i,t){i.uniform2uiv(this.addr,t)}function kg(i,t){i.uniform3uiv(this.addr,t)}function Hg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$c:a=af;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Gg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cf,r[a])}function Wg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uf,r[a])}function Xg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return Og;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}var Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wg(e.type)}},Qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function qh(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){let n=i.name,s=n.length;for(Zc.lastIndex=0;;){let r=Zc.exec(n),a=Zc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qh(e,l===void 0?new Kc(o,i,t):new Qc(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new jc(o),qh(e,h)),e=h}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Yg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Yh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Zg=37297,Jg=0;function $g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zh=new Vt;function Kg(i){Jt._getMatrix(Zh,Jt.workingColorSpace,i);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(t),o)}else return r}function Qg(i,t){let e=Kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jg={[Vr]:"Linear",[Gr]:"Reinhard",[Wr]:"Cineon",[Xr]:"ACESFilmic",[Yr]:"AgX",[ns]:"Neutral",[qr]:"Custom"};function tx(i,t){let e=jg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ml=new F;function ex(){Jt.getLuminanceCoefficients(ml);let i=ml.x.toFixed(4),t=ml.y.toFixed(4),e=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function ix(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ro(i){return i!==""}function $h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(rx,ax)}var ox=new Map;function ax(i,t){let e=qt[t];if(e===void 0){let n=ox.get(t);if(n!==void 0)e=qt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tu(e)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(lx,cx)}function cx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ux={[ts]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function hx(i){return ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fx={[Fi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function dx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var px={[is]:"ENVMAP_MODE_REFRACTION"};function mx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":px[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gx={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[xh]:"ENVMAP_BLENDING_MIX",[_h]:"ENVMAP_BLENDING_ADD"};function xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gx[i.combine]||"ENVMAP_BLENDING_NONE"}function _x(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=hx(e),l=dx(e),u=mx(e),h=xx(e),f=_x(e),d=nx(e),m=ix(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(g=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),a=tu(a),a=$h(a,e),a=Kh(a,e),o=tu(o),o=$h(o,e),o=Kh(o,e),a=Qh(a),o=Qh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=y+g+a,_=y+p+o,M=Yh(s,s.VERTEX_SHADER,T),b=Yh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(b)||"",D=R.trim(),N=U.trim(),V=C.trim(),G=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,b);else{let z=Jh(s,M,"vertex"),X=Jh(s,b,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+z+`
`+X)}else D!==""?Ot("WebGLProgram: Program Info Log:",D):(N===""||V==="")&&(B=!1);B&&(L.diagnostics={runnable:G,programLog:D,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(M),s.deleteShader(b),v=new qs(s,x),E=sx(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,Zg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=b,this}var yx=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=yx++,this.code=t,this.usedTimes=0}};function Mx(i){return i===Oi||i===to||i===eo}function Sx(i,t,e,n,s,r){let a=new Tr,o=new eu,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,P,L,R,U){let C=L.fog,D=R.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||N,V),B=G&&G.mapping===Zr?G.image.height:null,z=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ht=X!==void 0?X.length:0,Et=0;D.morphAttributes.position!==void 0&&(Et=1),D.morphAttributes.normal!==void 0&&(Et=2),D.morphAttributes.color!==void 0&&(Et=3);let $t,Ut,Gt,K;if(z){let ce=ni[z];$t=ce.vertexShader,Ut=ce.fragmentShader}else{$t=v.vertexShader,Ut=v.fragmentShader;let ce=o.getVertexShaderStage(v),ne=o.getFragmentShaderStage(v);o.update(v,ce,ne),Gt=ce.id,K=ne.id}let et=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Bt=R.isInstancedMesh===!0,ct=R.isBatchedMesh===!0,Wt=!!v.map,Se=!!v.matcap,Yt=!!G,jt=!!v.aoMap,oe=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,zt=!!v.normalMap,be=!!v.displacementMap,Ve=!!v.emissiveMap,fe=!!v.metalnessMap,ye=!!v.roughnessMap,H=v.anisotropy>0,Le=v.clearcoat>0,se=v.dispersion>0,I=v.retroreflectivity>0,S=v.iridescence>0,W=v.sheen>0,Z=v.transmission>0,Q=H&&!!v.anisotropyMap,lt=Le&&!!v.clearcoatMap,ft=Le&&!!v.clearcoatNormalMap,$=Le&&!!v.clearcoatRoughnessMap,nt=S&&!!v.iridescenceMap,ut=S&&!!v.iridescenceThicknessMap,Pt=W&&!!v.sheenColorMap,xt=W&&!!v.sheenRoughnessMap,pt=!!v.specularMap,j=!!v.specularColorMap,Tt=!!v.specularIntensityMap,vt=Z&&!!v.transmissionMap,O=Z&&!!v.thicknessMap,mt=!!v.gradientMap,tt=!!v.alphaMap,gt=v.alphaTest>0,yt=!!v.alphaHash,it=!!v.extensions,Ct=Xn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let wt={shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:$t,fragmentShader:Ut,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ct,batchingColor:ct&&R._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&R.instanceColor!==null,instancingMorph:Bt&&R.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:Se,envMap:Yt,envMapMode:Yt&&G.mapping,envMapCubeUVHeight:B,aoMap:jt,lightMap:oe,bumpMap:Ft,normalMap:zt,displacementMap:be,emissiveMap:Ve,normalMapObjectSpace:zt&&v.normalMapType===Mh,normalMapTangentSpace:zt&&v.normalMapType===hl,packedNormalMap:zt&&v.normalMapType===hl&&Mx(v.normalMap.format),metalnessMap:fe,roughnessMap:ye,anisotropy:H,anisotropyMap:Q,clearcoat:Le,clearcoatMap:lt,clearcoatNormalMap:ft,clearcoatRoughnessMap:$,dispersion:se,retroreflection:I,iridescence:S,iridescenceMap:nt,iridescenceThicknessMap:ut,sheen:W,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:j,specularIntensityMap:Tt,transmission:Z,transmissionMap:vt,thicknessMap:O,gradientMap:mt,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:yt,combine:v.combine,mapUv:Wt&&m(v.map.channel),aoMapUv:jt&&m(v.aoMap.channel),lightMapUv:oe&&m(v.lightMap.channel),bumpMapUv:Ft&&m(v.bumpMap.channel),normalMapUv:zt&&m(v.normalMap.channel),displacementMapUv:be&&m(v.displacementMap.channel),emissiveMapUv:Ve&&m(v.emissiveMap.channel),metalnessMapUv:fe&&m(v.metalnessMap.channel),roughnessMapUv:ye&&m(v.roughnessMap.channel),anisotropyMapUv:Q&&m(v.anisotropyMap.channel),clearcoatMapUv:lt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&m(v.sheenRoughnessMap.channel),specularMapUv:pt&&m(v.specularMap.channel),specularColorMapUv:j&&m(v.specularColorMap.channel),specularIntensityMapUv:Tt&&m(v.specularIntensityMap.channel),transmissionMapUv:vt&&m(v.transmissionMap.channel),thicknessMapUv:O&&m(v.thicknessMap.channel),alphaMapUv:tt&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(zt||H),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(Wt||tt),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&zt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Et,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:Ve&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let E=d[v.type],P;if(E){let L=ni[E];P=mi.clone(L.uniforms)}else P=v.uniforms;return P}function _(v,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new vx(i,E,v,s),l.push(P),u.set(E,P)),P}function M(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:A}}function bx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,x,g,p){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=a(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=p),t++,y}function c(f,d,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let T=o(f,d,m,x,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function l(f,d,m,x,g,p){let y=o(f,d,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function u(f,d){e.length>1&&e.sort(f||Tx),n.length>1&&n.sort(d||tf),s.length>1&&s.sort(d||tf)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Ex(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ef,i.set(n,[a])):s>=r.length?(a=new ef,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new ot};break;case"SpotLight":e={position:new F,direction:new F,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Rx=0;function Cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){let t=new wx,e=Ax(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new Ht,a=new Ht;function o(l){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,T=0,_=0,M=0,b=0,A=0,v=0,E=0,P=0;l.sort(Cx);for(let R=0,U=l.length;R<U;R++){let C=l[R],D=C.color,N=C.intensity,V=C.distance,G=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Oi?G=C.shadow.map.texture:G=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*N,h+=D.g*N,f+=D.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],N);P++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,X=e.get(C);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=G;let ht=z.getViewportCount();for(let Et=0;Et<ht;Et++)n.sunShadowMatrix[x+Et]=z.getMatrix(Et),n.sunShadowCascade[x+Et]=z._cascadeData[Et];x+=ht,m++}n.sun[d]=B,d++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,X=e.get(C);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=C.shadow.matrix,M++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(D).multiplyScalar(N),B.distance=V,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[y]=B;let z=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,z.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[y]=z.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=G,A++}y++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(D).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=B,T++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let z=C.shadow,X=e.get(C);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[_]=B,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==_||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==v||L.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=_,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=v,L.numLightProbes=P,n.version=Rx++)}function c(l,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let _=l[y];if(_.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(_.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function nf(i){let t=new Px(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ix(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new nf(i),t.set(s,[o])):r>=a.length?(o=new nf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`,Nx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ux=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],sf=new Ht,so=new F,Jc=new F;function Fx(i,t,e){let n=new Ns,s=new Nt,r=new Nt,a=new pe,o=new ha,c=new fa,l={},u=e.maxTextureSize,h={[Ui]:qe,[qe]:Ui,[Qe]:Qe},f=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new le;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let p=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Qu&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),R=i.state;R.setBlending(dn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let U=p!==this.type;U&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=b.length;C<D;C++){let N=b[C],V=N.shadow;if(V===void 0){Ot("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let G=V.getFrameExtents();s.multiply(G),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,V.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=B,V.map===null||U===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zs){if(N.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new xe(s.x,s.y,{format:Oi,type:Fe,minFilter:De,magFilter:De,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new Pi(s.x,s.y,Pn),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=Qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pe,V.map.depthTexture.magFilter=Pe}else N.isPointLight?(V.map=new xl(s.x),V.map.depthTexture=new ca(s.x,qn)):(V.map=new xe(s.x,s.y),V.map.depthTexture=new Pi(s.x,s.y,qn)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=Qn,this.type===ts?(V.map.depthTexture.compareFunction=B?dl:fl,V.map.depthTexture.minFilter=De,V.map.depthTexture.magFilter=De):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pe,V.map.depthTexture.magFilter=Pe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let z=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();N.isPointLight!==!0&&V.updateMatrices(N,v);for(let X=0;X<z;X++){let ht=V.getCamera(X);if(N.isPointLight){let Et=V.camera,$t=V.matrix,Ut=N.distance||Et.far;Ut!==Et.far&&(Et.far=Ut,Et.updateProjectionMatrix()),so.setFromMatrixPosition(N.matrixWorld),Et.position.copy(so),Jc.copy(Et.position),Jc.add(Nx[X]),Et.up.copy(Ux[X]),Et.lookAt(Jc),Et.updateMatrixWorld(),$t.makeTranslation(-so.x,-so.y,-so.z),sf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sf,Et.coordinateSystem,Et.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,X),i.clear();else{X===0&&(i.setRenderTarget(V.map),i.clear());let Et=V.getViewport(X);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),R.viewport(a)}n=V.getFrustum(X),_(A,v,ht,N,this.type)}V.isPointLightShadow!==!0&&this.type===zs&&y(V,v),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,P,L)};function y(b,A){let v=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new xe(s.x,s.y,{format:Oi,type:Fe}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,v,d,x,null)}function T(b,A,v,E){let P=null,L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let R=P.uuid,U=A.uuid,C=l[R];C===void 0&&(C={},l[R]=C);let D=C[U];D===void 0&&(D=P.clone(),C[U]=D,A.addEventListener("dispose",M)),P=D}if(P.visible=A.visible,P.wireframe=A.wireframe,E===zs?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let R=i.properties.get(P);R.light=v}return P}function _(b,A,v,E,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===zs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let U=t.update(b),C=b.material;if(Array.isArray(C)){let D=U.groups;for(let N=0,V=D.length;N<V;N++){let G=D[N],B=C[G.materialIndex];if(B&&B.visible){let z=T(b,B,E,P);b.onBeforeShadow(i,b,A,v,U,z,G),i.renderBufferDirect(v,null,U,z,b,G),b.onAfterShadow(i,b,A,v,U,z,G)}}}else if(C.visible){let D=T(b,C,E,P);b.onBeforeShadow(i,b,A,v,U,D,null),i.renderBufferDirect(v,null,U,D,b,null),b.onAfterShadow(i,b,A,v,U,D,null)}}let R=b.children;for(let U=0,C=R.length;U<C;U++)_(R[U],A,v,E,P)}function M(b){b.target.removeEventListener("dispose",M);for(let v in l){let E=l[v],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Bx(i,t){function e(){let O=!1,mt=new pe,tt=null,gt=new pe(0,0,0,0);return{setMask:function(yt){tt!==yt&&!O&&(i.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){O=yt},setClear:function(yt,it,Ct,wt,ce){ce===!0&&(yt*=wt,it*=wt,Ct*=wt),mt.set(yt,it,Ct,wt),gt.equals(mt)===!1&&(i.clearColor(yt,it,Ct,wt),gt.copy(mt))},reset:function(){O=!1,tt=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,tt=null,gt=null,yt=null;return{setReversed:function(it){if(mt!==it){let Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),mt=it;let wt=yt;yt=null,this.setClear(wt)}},getReversed:function(){return mt},setTest:function(it){it?et(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(it){tt!==it&&!O&&(i.depthMask(it),tt=it)},setFunc:function(it){if(mt&&(it=Dh[it]),gt!==it){switch(it){case $o:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=it}},setLocked:function(it){O=it},setClear:function(it){yt!==it&&(yt=it,mt&&(it=1-it),i.clearDepth(it))},reset:function(){O=!1,tt=null,gt=null,yt=null,mt=!1}}}function s(){let O=!1,mt=null,tt=null,gt=null,yt=null,it=null,Ct=null,wt=null,ce=null;return{setTest:function(ne){O||(ne?et(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ne){mt!==ne&&!O&&(i.stencilMask(ne),mt=ne)},setFunc:function(ne,rn,hn){(tt!==ne||gt!==rn||yt!==hn)&&(i.stencilFunc(ne,rn,hn),tt=ne,gt=rn,yt=hn)},setOp:function(ne,rn,hn){(it!==ne||Ct!==rn||wt!==hn)&&(i.stencilOp(ne,rn,hn),it=ne,Ct=rn,wt=hn)},setLocked:function(ne){O=ne},setClear:function(ne){ce!==ne&&(i.clearStencil(ne),ce=ne)},reset:function(){O=!1,mt=null,tt=null,gt=null,yt=null,it=null,Ct=null,wt=null,ce=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,T=null,_=null,M=null,b=null,A=null,v=new ot(0,0,0),E=0,P=!1,L=null,R=null,U=null,C=null,D=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,G=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=G>=2);let z=null,X={},ht=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),$t=new pe().fromArray(ht),Ut=new pe().fromArray(Et);function Gt(O,mt,tt,gt){let yt=new Uint8Array(4),it=i.createTexture();i.bindTexture(O,it),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<tt;Ct++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(mt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return it}let K={};K[i.TEXTURE_2D]=Gt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Cs),Ft(!1),zt(yc),et(i.CULL_FACE),jt(dn);function et(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function _t(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Bt(O,mt){return f[O]!==mt?(i.bindFramebuffer(O,mt),f[O]=mt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function ct(O,mt){let tt=m,gt=!1;if(O){tt=d.get(mt),tt===void 0&&(tt=[],d.set(mt,tt));let yt=O.textures;if(tt.length!==yt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ct=yt.length;it<Ct;it++)tt[it]=i.COLOR_ATTACHMENT0+it;tt.length=yt.length,gt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(tt)}function Wt(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Se={[es]:i.FUNC_ADD,[th]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};Se[nh]=i.MIN,Se[ih]=i.MAX;let Yt={[sh]:i.ZERO,[rh]:i.ONE,[oh]:i.SRC_COLOR,[bc]:i.SRC_ALPHA,[fh]:i.SRC_ALPHA_SATURATE,[uh]:i.DST_COLOR,[lh]:i.DST_ALPHA,[ah]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[ch]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[ph]:i.ONE_MINUS_CONSTANT_COLOR,[mh]:i.CONSTANT_ALPHA,[gh]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(O,mt,tt,gt,yt,it,Ct,wt,ce,ne){if(O===dn){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),O!==ju){if(O!==p||ne!==P){if((y!==es||M!==es)&&(i.blendEquation(i.FUNC_ADD),y=es,M=es),ne)switch(O){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",O);break}else switch(O){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",O);break}T=null,_=null,b=null,A=null,v.set(0,0,0),E=0,p=O,P=ne}return}yt=yt||mt,it=it||tt,Ct=Ct||gt,(mt!==y||yt!==M)&&(i.blendEquationSeparate(Se[mt],Se[yt]),y=mt,M=yt),(tt!==T||gt!==_||it!==b||Ct!==A)&&(i.blendFuncSeparate(Yt[tt],Yt[gt],Yt[it],Yt[Ct]),T=tt,_=gt,b=it,A=Ct),(wt.equals(v)===!1||ce!==E)&&(i.blendColor(wt.r,wt.g,wt.b,ce),v.copy(wt),E=ce),p=O,P=!1}function oe(O,mt){O.side===Qe?_t(i.CULL_FACE):et(i.CULL_FACE);let tt=O.side===qe;mt&&(tt=!tt),Ft(tt),O.blending===ks&&O.transparent===!1?jt(dn):jt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let gt=O.stencilWrite;o.setTest(gt),gt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){L!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),L=O)}function zt(O){O!==$u?(et(i.CULL_FACE),O!==R&&(O===yc?i.cullFace(i.BACK):O===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),R=O}function be(O){O!==U&&(V&&i.lineWidth(O),U=O)}function Ve(O,mt,tt){O?(et(i.POLYGON_OFFSET_FILL),(C!==mt||D!==tt)&&(C=mt,D=tt,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,tt))):_t(i.POLYGON_OFFSET_FILL)}function fe(O){O?et(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function ye(O){O===void 0&&(O=i.TEXTURE0+N-1),z!==O&&(i.activeTexture(O),z=O)}function H(O,mt,tt){tt===void 0&&(z===null?tt=i.TEXTURE0+N-1:tt=z);let gt=X[tt];gt===void 0&&(gt={type:void 0,texture:void 0},X[tt]=gt),(gt.type!==O||gt.texture!==mt)&&(z!==tt&&(i.activeTexture(tt),z=tt),i.bindTexture(O,mt||K[O]),gt.type=O,gt.texture=mt)}function Le(){let O=X[z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function S(){try{i.texSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function W(){try{i.texSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function lt(){try{i.texStorage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function ft(){try{i.texStorage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function nt(){try{i.texImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function ut(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function Pt(O,mt){h[O]!==mt&&(i.pixelStorei(O,mt),h[O]=mt)}function xt(O){$t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function pt(O){Ut.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ut.copy(O))}function j(O,mt){let tt=l.get(mt);tt===void 0&&(tt=new WeakMap,l.set(mt,tt));let gt=tt.get(O);gt===void 0&&(gt=i.getUniformBlockIndex(mt,O.name),tt.set(O,gt))}function Tt(O,mt){let gt=l.get(mt).get(O);c.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,O.__bindingPointIndex),c.set(mt,gt))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,X={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,T=null,_=null,M=null,b=null,A=null,v=new ot(0,0,0),E=0,P=!1,L=null,R=null,U=null,C=null,D=null,$t.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:Bt,drawBuffers:ct,useProgram:Wt,setBlending:jt,setMaterial:oe,setFlipSided:Ft,setCullFace:zt,setLineWidth:be,setPolygonOffset:Ve,setScissorTest:fe,activeTexture:ye,bindTexture:H,unbindTexture:Le,compressedTexImage2D:se,compressedTexImage3D:I,texImage2D:$,texImage3D:nt,pixelStorei:Pt,getParameter:ut,updateUBOMapping:j,uniformBlockBinding:Tt,texStorage2D:lt,texStorage3D:ft,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:xt,viewport:pt,reset:vt}}function Ox(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return m?new OffscreenCanvas(I,S):Mr("canvas")}function g(I,S,W){let Z=1,Q=se(I);if((Q.width>W||Q.height>W)&&(Z=W/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let lt=Math.floor(Z*Q.width),ft=Math.floor(Z*Q.height);f===void 0&&(f=x(lt,ft));let $=S?x(lt,ft):f;return $.width=lt,$.height=ft,$.getContext("2d").drawImage(I,0,0,lt,ft),Ot("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+lt+"x"+ft+")."),$}else return"data"in I&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,S,W,Z,Q,lt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft;Z&&(ft=t.get("EXT_texture_norm16"),ft||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8),W===i.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),W===i.SHORT&&ft&&($=ft.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),S===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8),W===i.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),W===i.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),W===i.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let nt=lt?yr:Jt.getTransfer(Q);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=nt===ie?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),W===i.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(I,S){let W;return I?S===null||S===qn||S===Vs?W=i.DEPTH24_STENCIL8:S===Pn?W=i.DEPTH32F_STENCIL8:S===Hs&&(W=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===Vs?W=i.DEPTH_COMPONENT24:S===Pn?W=i.DEPTH_COMPONENT32F:S===Hs&&(W=i.DEPTH_COMPONENT16),W}function b(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pe&&I.minFilter!==De?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function v(I){let S=I.target;S.removeEventListener("dispose",v),L(S)}function E(I){let S=n.get(I);if(S.__webglInit===void 0)return;let W=I.source,Z=d.get(W);if(Z){let Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(I),Object.keys(Z).length===0&&d.delete(W)}n.remove(I)}function P(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let W=I.source,Z=d.get(W);delete Z[S.__cacheKey],a.memory.textures--}function L(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=I.textures;for(let Z=0,Q=W.length;Z<Q;Z++){let lt=n.get(W[Z]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(I)}let R=0;function U(){R=0}function C(){return R}function D(I){R=I}function N(){let I=R;return I>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function V(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){let W=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let Z=I.image;if(Z===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(W,I,S);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function B(I,S){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){_t(W,I,S);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function z(I,S){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){_t(W,I,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function X(I,S){let W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){Bt(W,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let ht={[ia]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Et={[Pe]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},$t={[bh]:i.NEVER,[Rh]:i.ALWAYS,[Th]:i.LESS,[fl]:i.LEQUAL,[Eh]:i.EQUAL,[dl]:i.GEQUAL,[wh]:i.GREATER,[Ah]:i.NOTEQUAL};function Ut(I,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===De||S.magFilter===Ra||S.magFilter===Jr||S.magFilter===Cn||S.minFilter===De||S.minFilter===Ra||S.minFilter===Jr||S.minFilter===Cn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ht[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ht[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ht[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Et[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,$t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==Jr&&S.minFilter!==Cn||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Gt(I,S){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let Z=S.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let lt=V(S);if(lt!==I.__cacheKey){Q[lt]===void 0&&(Q[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[lt].usedTimes++;let ft=Q[I.__cacheKey];ft!==void 0&&(Q[I.__cacheKey].usedTimes--,ft.usedTimes===0&&P(S)),I.__cacheKey=lt,I.__webglTexture=Q[lt].texture}return W}function K(I,S,W){return Math.floor(Math.floor(I/W)/S)}function et(I,S,W,Z){let lt=I.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,Z,S.data);else{lt.sort((Pt,xt)=>Pt.start-xt.start);let ft=0;for(let Pt=1;Pt<lt.length;Pt++){let xt=lt[ft],pt=lt[Pt],j=xt.start+xt.count,Tt=K(pt.start,S.width,4),vt=K(xt.start,S.width,4);pt.start<=j+1&&Tt===vt&&K(pt.start+pt.count-1,S.width,4)===Tt?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++ft,lt[ft]=pt)}lt.length=ft+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Pt=0,xt=lt.length;Pt<xt;Pt++){let pt=lt[Pt],j=Math.floor(pt.start/4),Tt=Math.ceil(pt.count/4),vt=j%S.width,O=Math.floor(j/S.width),mt=Tt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,vt,O,mt,tt,W,Z,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function _t(I,S,W){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);let Q=Gt(I,S),lt=S.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+W);let ft=n.get(lt);if(lt.version!==ft.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let tt=Jt.getPrimaries(Jt.workingColorSpace),gt=S.colorSpace===pi?null:Jt.getPrimaries(S.colorSpace),yt=S.colorSpace===pi||tt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let nt=g(S.image,!1,s.maxTextureSize);nt=Le(S,nt);let ut=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),xt=_(S.internalFormat,ut,Pt,S.normalized,S.colorSpace,S.isVideoTexture);Ut(Z,S);let pt,j=S.mipmaps,Tt=S.isVideoTexture!==!0,vt=ft.__version===void 0||Q===!0,O=lt.dataReady,mt=b(S,nt);if(S.isDepthTexture)xt=M(S.format===Bi,S.type),vt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,xt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,xt,nt.width,nt.height,0,ut,Pt,null));else if(S.isDataTexture)if(j.length>0){Tt&&vt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,j[0].width,j[0].height);for(let tt=0,gt=j.length;tt<gt;tt++)pt=j[tt],Tt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,ut,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ut,Pt,pt.data);S.generateMipmaps=!1}else Tt?(vt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,nt.width,nt.height),O&&et(S,nt,ut,Pt)):e.texImage2D(i.TEXTURE_2D,0,xt,nt.width,nt.height,0,ut,Pt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Tt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,xt,j[0].width,j[0].height,nt.depth);for(let tt=0,gt=j.length;tt<gt;tt++)if(pt=j[tt],S.format!==In)if(ut!==null)if(Tt){if(O)if(S.layerUpdates.size>0){let yt=Oc(pt.width,pt.height,S.format,S.type);for(let it of S.layerUpdates){let Ct=pt.data.subarray(it*yt/pt.data.BYTES_PER_ELEMENT,(it+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,it,pt.width,pt.height,1,ut,Ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ut,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,pt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ut,Pt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,ut,Pt,pt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Tt&&vt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,j[0].width,j[0].height);for(let tt=0,gt=j.length;tt<gt;tt++)pt=j[tt],S.format!==In?ut!==null?Tt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,ut,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,xt,pt.width,pt.height,0,pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,ut,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ut,Pt,pt.data)}else if(S.isDataArrayTexture)if(Tt){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,xt,nt.width,nt.height,nt.depth),O)if(S.layerUpdates.size>0){let tt=Oc(nt.width,nt.height,S.format,S.type);for(let gt of S.layerUpdates){let yt=nt.data.subarray(gt*tt/nt.data.BYTES_PER_ELEMENT,(gt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,ut,Pt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Pt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,ut,Pt,nt.data);else if(S.isData3DTexture)Tt?(vt&&e.texStorage3D(i.TEXTURE_3D,mt,xt,nt.width,nt.height,nt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Pt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,ut,Pt,nt.data);else if(S.isFramebufferTexture){if(vt)if(Tt)e.texStorage2D(i.TEXTURE_2D,mt,xt,nt.width,nt.height);else{let tt=nt.width,gt=nt.height;for(let yt=0;yt<mt;yt++)e.texImage2D(i.TEXTURE_2D,yt,xt,tt,gt,0,ut,Pt,null),tt>>=1,gt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),h.add(S),tt.onpaint=gt=>{let yt=gt.changedElements;for(let it of h)yt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let yt=i.RGBA,it=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,it,Ct,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(j.length>0){if(Tt&&vt){let tt=se(j[0]);e.texStorage2D(i.TEXTURE_2D,mt,xt,tt.width,tt.height)}for(let tt=0,gt=j.length;tt<gt;tt++)pt=j[tt],Tt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut,Pt,pt):e.texImage2D(i.TEXTURE_2D,tt,xt,ut,Pt,pt);S.generateMipmaps=!1}else if(Tt){if(vt){let tt=se(nt);e.texStorage2D(i.TEXTURE_2D,mt,xt,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Pt,nt)}else e.texImage2D(i.TEXTURE_2D,0,xt,ut,Pt,nt);p(S)&&y(Z),ft.__version=lt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Bt(I,S,W){if(S.image.length!==6)return;let Z=Gt(I,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let lt=n.get(Q);if(Q.version!==lt.__version||Z===!0){e.activeTexture(i.TEXTURE0+W);let ft=Jt.getPrimaries(Jt.workingColorSpace),$=S.colorSpace===pi?null:Jt.getPrimaries(S.colorSpace),nt=S.colorSpace===pi||ft===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,Pt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let it=0;it<6;it++)!ut&&!Pt?xt[it]=g(S.image[it],!0,s.maxCubemapSize):xt[it]=Pt?S.image[it].image:S.image[it],xt[it]=Le(S,xt[it]);let pt=xt[0],j=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),vt=_(S.internalFormat,j,Tt,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,mt=lt.__version===void 0||Z===!0,tt=Q.dataReady,gt=b(S,pt);Ut(i.TEXTURE_CUBE_MAP,S);let yt;if(ut){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,vt,pt.width,pt.height);for(let it=0;it<6;it++){yt=xt[it].mipmaps;for(let Ct=0;Ct<yt.length;Ct++){let wt=yt[Ct];S.format!==In?j!==null?O?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,wt.width,wt.height,j,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,vt,wt.width,wt.height,0,wt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,wt.width,wt.height,j,Tt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,vt,wt.width,wt.height,0,j,Tt,wt.data)}}}else{if(yt=S.mipmaps,O&&mt){yt.length>0&&gt++;let it=se(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,vt,it.width,it.height)}for(let it=0;it<6;it++)if(Pt){O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt[it].width,xt[it].height,j,Tt,xt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,vt,xt[it].width,xt[it].height,0,j,Tt,xt[it].data);for(let Ct=0;Ct<yt.length;Ct++){let ce=yt[Ct].image[it].image;O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,ce.width,ce.height,j,Tt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,vt,ce.width,ce.height,0,j,Tt,ce.data)}}else{O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,j,Tt,xt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,vt,j,Tt,xt[it]);for(let Ct=0;Ct<yt.length;Ct++){let wt=yt[Ct];O?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,j,Tt,wt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,vt,j,Tt,wt.image[it])}}}p(S)&&y(i.TEXTURE_CUBE_MAP),lt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ct(I,S,W,Z,Q,lt){let ft=r.convert(W.format,W.colorSpace),$=r.convert(W.type),nt=_(W.internalFormat,ft,$,W.normalized,W.colorSpace),ut=n.get(S),Pt=n.get(W);if(Pt.__renderTarget=S,!ut.__hasExternalTextures){let xt=Math.max(1,S.width>>lt),pt=Math.max(1,S.height>>lt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,lt,nt,xt,pt,S.depth,0,ft,$,null):e.texImage2D(Q,lt,nt,xt,pt,0,ft,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,Pt.__webglTexture,0,fe(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,Pt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(I,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,lt=M(S.stencilBuffer,Q),ft=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(S),lt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(S),lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,I)}else{let Z=S.textures;for(let Q=0;Q<Z.length;Q++){let lt=Z[Q],ft=r.convert(lt.format,lt.colorSpace),$=r.convert(lt.type),nt=_(lt.internalFormat,ft,$,lt.normalized,lt.colorSpace);ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(S),nt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(S),nt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,nt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(I,S,W){let Z=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,S.depthTexture);let ut=r.convert(S.depthTexture.format),Pt=r.convert(S.depthTexture.type),xt;S.depthTexture.format===Qn?xt=i.DEPTH_COMPONENT24:S.depthTexture.format===Bi&&(xt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,S.width,S.height,0,ut,Pt,null)}}else G(S.depthTexture,0);let lt=Q.__webglTexture,ft=fe(S),$=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,nt=S.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qn)ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,$,lt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,$,lt,0);else if(S.depthTexture.format===Bi)ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,$,lt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,$,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(I){let S=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Se(S.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?Se(S.__webglFramebuffer[0],I,0):Se(S.__webglFramebuffer,I,0)}else if(W){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),Wt(S.__webglDepthbuffer[Z],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Wt(S.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(I,S,W){let Z=n.get(I);S!==void 0&&ct(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Yt(I)}function oe(I){let S=I.texture,W=n.get(I),Z=n.get(S);I.addEventListener("dispose",v);let Q=I.textures,lt=I.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),lt){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let nt=0;nt<S.mipmaps.length;nt++)W.__webglFramebuffer[$][nt]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ft)for(let $=0,nt=Q.length;$<nt;$++){let ut=n.get(Q[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let nt=Q[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);let ut=r.convert(nt.format,nt.colorSpace),Pt=r.convert(nt.type),xt=_(nt.internalFormat,ut,Pt,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),pt=fe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(W.__webglFramebuffer[$][nt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt);else ct(W.__webglFramebuffer[$],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(S)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let $=0,nt=Q.length;$<nt;$++){let ut=Q[$],Pt=n.get(ut),xt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Pt.__webglTexture),Ut(xt,ut),ct(W.__webglFramebuffer,I,ut,i.COLOR_ATTACHMENT0+$,xt,0),p(ut)&&y(xt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,Z.__webglTexture),Ut($,S),S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(W.__webglFramebuffer[nt],I,S,i.COLOR_ATTACHMENT0,$,nt);else ct(W.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,$,0);p(S)&&y($),e.unbindTexture()}I.depthBuffer&&Yt(I)}function Ft(I){let S=I.textures;for(let W=0,Z=S.length;W<Z;W++){let Q=S[W];if(p(Q)){let lt=T(I),ft=n.get(Q).__webglTexture;e.bindTexture(lt,ft),y(lt),e.unbindTexture()}}}let zt=[],be=[];function Ve(I){if(I.samples>0){if(ye(I)===!1){let S=I.textures,W=I.width,Z=I.height,Q=i.COLOR_BUFFER_BIT,lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(I),$=S.length>1;if($)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let nt=I.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let Pt=n.get(S[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,Q,i.NEAREST),c===!0&&(zt.length=0,be.length=0,zt.push(i.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(zt.push(lt),be.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let Pt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function fe(I){return Math.min(s.maxSamples,I.samples)}function ye(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(I){let S=a.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Le(I,S){let W=I.colorSpace,Z=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==vr&&W!==pi&&(Jt.getTransfer(W)===ie?(Z!==In||Q!==pn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",W)),S}function se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zx(i,t){function e(n,s=pi){let r,a=Jt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Fe)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Lc)return i.RGB;if(n===In)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Gs)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===$r||n===Kr||n===Qr||n===jr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha||n===Va||n===Ga||n===to||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===to)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===eo||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new re({vertexShader:kx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends jn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new iu,p={},y=e.getContextAttributes(),T=null,_=null,M=[],b=[],A=new Nt,v=null,E=null,P=new Ge;P.viewport=new pe;let L=new Ge;L.viewport=new pe;let R=[P,L],U=new Ta,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=M[K];return et===void 0&&(et=new Ds,M[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=M[K];return et===void 0&&(et=new Ds,M[K]=et),et.getGripSpace()},this.getHand=function(K){let et=M[K];return et===void 0&&(et=new Ds,M[K]=et),et.getHandSpace()};function N(K){let et=b.indexOf(K.inputSource);if(et===-1)return;let _t=M[et];_t!==void 0&&(_t.update(K.inputSource,K.frame,l||a),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let K=0;K<M.length;K++){let et=b[K];et!==null&&(b[K]=null,M[K].disconnect(et))}C=null,D=null,g.reset();for(let K in p)delete p[K];if(t.setRenderTarget(T),d=null,f=null,h=null,s=null,_=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Bt=null,ct=null;y.depth&&(ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?Bi:Qn,Bt=y.stencil?Vs:qn);let Wt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new xe(f.textureWidth,f.textureHeight,{format:In,type:pn,depthTexture:new Pi(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xe(d.framebufferWidth,d.framebufferHeight,{format:In,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let et=0;et<K.removed.length;et++){let _t=K.removed[et],Bt=b.indexOf(_t);Bt>=0&&(b[Bt]=null,M[Bt].disconnect(_t))}for(let et=0;et<K.added.length;et++){let _t=K.added[et],Bt=b.indexOf(_t);if(Bt===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=b.length){b.push(_t),Bt=Wt;break}else if(b[Wt]===null){b[Wt]=_t,Bt=Wt;break}if(Bt===-1)break}let ct=M[Bt];ct&&ct.connect(_t)}}let B=new F,z=new F;function X(K,et,_t){B.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(_t.matrixWorld);let Bt=B.distanceTo(z),ct=et.projectionMatrix.elements,Wt=_t.projectionMatrix.elements,Se=ct[14]/(ct[10]-1),Yt=ct[14]/(ct[10]+1),jt=(ct[9]+1)/ct[5],oe=(ct[9]-1)/ct[5],Ft=(ct[8]-1)/ct[0],zt=(Wt[8]+1)/Wt[0],be=Se*Ft,Ve=Se*zt,fe=Bt/(-Ft+zt),ye=fe*-Ft;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ye),K.translateZ(fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ct[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let H=Se+fe,Le=Yt+fe,se=be-ye,I=Ve+(Bt-ye),S=jt*Yt/Le*H,W=oe*Yt/Le*H;K.projectionMatrix.makePerspective(se,I,S,W,H,Le),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,_t=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),U.near=L.near=P.near=et,U.far=L.far=P.far=_t,(C!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,D=U.far),U.layers.mask=K.layers.mask|6,P.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Bt=K.parent,ct=U.cameras;ht(U,Bt);for(let Wt=0;Wt<ct.length;Wt++)ht(ct[Wt],Bt);ct.length===2?X(U,P,L):U.projectionMatrix.copy(P.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Et(K,U,Bt)};function Et(K,et,_t){_t===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let $t=null;function Ut(K,et){if(u=et.getViewerPose(l||a),m=et,u!==null){let _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Bt=!1;_t.length!==U.cameras.length&&(U.cameras.length=0,Bt=!0);for(let Yt=0;Yt<_t.length;Yt++){let jt=_t[Yt],oe=null;if(d!==null)oe=d.getViewport(jt);else{let zt=h.getViewSubImage(f,jt);oe=zt.viewport,Yt===0&&(t.setRenderTargetTextures(_,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(_))}let Ft=R[Yt];Ft===void 0&&(Ft=new Ge,Ft.layers.enable(Yt),Ft.viewport=new pe,R[Yt]=Ft),Ft.matrix.fromArray(jt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(jt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(oe.x,oe.y,oe.width,oe.height),Yt===0&&(U.matrix.copy(Ft.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Bt===!0&&U.cameras.push(Ft)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Yt=h.getDepthInformation(_t[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,s.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Yt=0;Yt<_t.length;Yt++){let jt=_t[Yt].camera;if(jt){let oe=p[jt];oe||(oe=new Ir,p[jt]=oe);let Ft=h.getCameraImage(jt);oe.sourceTexture=Ft}}}}for(let _t=0;_t<M.length;_t++){let Bt=b[_t],ct=M[_t];Bt!==null&&ct!==void 0&&ct.update(Bt,et,l||a)}$t&&$t(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Gt=new rf;Gt.setAnimationLoop(Ut),this.setAnimationLoop=function(K){$t=K},this.dispose=function(){}}},Vx=new Ht,hf=new Vt;hf.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),T=y.envMap,_=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let b=M.program;n.uniformBlockBinding(_,b)}function l(_,M){let b=s[_.id];b===void 0&&(g(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",y));let A=M.program;n.updateUBOMapping(_,A);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function u(_){let M=h();_.__bindingPointIndex=M;let b=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],b=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=b.length;v<E;v++){let P=b[v];if(Array.isArray(P))for(let L=0,R=P.length;L<R;L++)d(P[L],v,L,A);else d(P,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,b,A){if(x(_,M,b,A)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let R=E[L],U=p(R);m(R,_.__data,P),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function x(_,M,b,A){let v=_.value,E=M+"_"+b;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let P=A[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(_){let M=_.uniforms,b=0,A=16;for(let E=0,P=M.length;E<P;E++){let L=Array.isArray(M[E])?M[E]:[M[E]];for(let R=0,U=L.length;R<U;R++){let C=L[R],D=Array.isArray(C.value)?C.value:[C.value];for(let N=0,V=D.length;N<V;N++){let G=D[N],B=p(G),z=b%A,X=z%B.boundary,ht=z+X;b+=X,ht!==0&&A-ht<B.storage&&(b+=A-ht),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=B.storage}}}let v=b%A;return v>0&&(b+=A-v),_.__size=b,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function qx(){return ei===null&&(ei=new Ki(Xx,16,16,Oi,Fe),ei.name="DFG_LUT",ei.minFilter=De,ei.magFilter=De,ei.wrapS=Kn,ei.wrapT=Kn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var _l=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([Na,Da,La]),p=new Set([pn,qn,Hs,Vs,Pa,Ia]),y=new Uint32Array(4),T=new Int32Array(4),_=new F,M=null,b=null,A=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,R=null,U=null,C=null,D=null;this._outputColorSpace=Me;let N=0,V=0,G=null,B=-1,z=null,X=new pe,ht=new pe,Et=null,$t=new ot(0),Ut=0,Gt=e.width,K=e.height,et=1,_t=null,Bt=null,ct=new pe(0,0,Gt,K),Wt=new pe(0,0,Gt,K),Se=!1,Yt=new Ns,jt=!1,oe=!1,Ft=new Ht,zt=new F,be=new pe,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function ye(){return G===null?et:1}let H=n;function Le(w,k){return e.getContext(w,k)}let se,I,S,W,Z,Q,lt,ft,$,nt,ut,Pt,xt,pt,j,Tt,vt,O,mt,tt,gt,yt,it;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",rn,!1),H===null){let k="webgl2";if(H=Le(k,w),H===null)throw Le(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(w){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),kt("WebGLRenderer: "+w.message),w}function Ct(){se=new jm(H),se.init(),gt=new zx(H,se),I=new Gm(H,se,t,gt),S=new Bx(H,se),I.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),U=H.createFramebuffer(),C=H.createFramebuffer(),D=H.createFramebuffer(),W=new ng(H),Z=new bx,Q=new Ox(H,se,S,Z,I,gt,W),lt=new Qm(P),ft=new sp(H),yt=new Hm(H,ft),$=new tg(H,ft,W,yt),nt=new sg(H,$,ft,yt,W),O=new ig(H,I,Q),j=new Wm(Z),ut=new Sx(P,lt,se,I,yt,j),Pt=new Gx(P,Z),xt=new Ex,pt=new Ix(se),vt=new km(P,lt,S,nt,m,c),Tt=new Fx(P,nt,I),it=new Wx(H,W,I,S),mt=new Vm(H,se,W),tt=new eg(H,se,W),W.programs=ut.programs,P.capabilities=I,P.extensions=se,P.properties=Z,P.renderLists=xt,P.shadowMap=Tt,P.state=S,P.info=W}x!==pn&&(E=new og(x,e.width,e.height,o,s,r));let wt=new su(P,H);this.xr=wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(Gt,K,!1))},this.getSize=function(w){return w.set(Gt,K)},this.setSize=function(w,k,J=!0){if(wt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=w,K=k,e.width=Math.floor(w*et),e.height=Math.floor(k*et),J===!0&&(e.style.width=w+"px",e.style.height=k+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Gt*et,K*et).floor()},this.setDrawingBufferSize=function(w,k,J){Gt=w,K=k,et=J,e.width=Math.floor(w*J),e.height=Math.floor(k*J),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(x===pn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,k,J,q){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,k,J,q),S.viewport(X.copy(ct).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,k,J,q){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,k,J,q),S.scissor(ht.copy(Wt).multiplyScalar(et).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){S.setScissorTest(Se=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){Bt=w},this.getClearColor=function(w){return w.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,J=!0){let q=0;if(w){let Y=!1;if(G!==null){let bt=G.texture.format;Y=g.has(bt)}if(Y){let bt=G.texture.type,Rt=p.has(bt),St=vt.getClearColor(),It=vt.getClearAlpha(),Dt=St.r,Zt=St.g,Kt=St.b;Rt?(y[0]=Dt,y[1]=Zt,y[2]=Kt,y[3]=It,H.clearBufferuiv(H.COLOR,0,y)):(T[0]=Dt,T[1]=Zt,T[2]=Kt,T[3]=It,H.clearBufferiv(H.COLOR,0,T))}else q|=H.COLOR_BUFFER_BIT}k&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),R=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),vt.dispose(),xt.dispose(),pt.dispose(),Z.dispose(),lt.dispose(),nt.dispose(),yt.dispose(),it.dispose(),ut.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ur),wt.removeEventListener("sessionend",Un),Zn.stop()};function ce(w){w.preventDefault(),Nc("WebGLRenderer: Context Lost."),L=!0}function ne(){Nc("WebGLRenderer: Context Restored."),L=!1;let w=W.autoReset,k=Tt.enabled,J=Tt.autoUpdate,q=Tt.needsUpdate,Y=Tt.type;Ct(),W.autoReset=w,Tt.enabled=k,Tt.autoUpdate=J,Tt.needsUpdate=q,Tt.type=Y}function rn(w){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function hn(w){let k=w.target;k.removeEventListener("dispose",hn),Ol(k)}function Ol(w){zl(w),Z.remove(w)}function zl(w){let k=Z.get(w).programs;k!==void 0&&(k.forEach(function(J){ut.releaseProgram(J)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,J,q,Y,bt){k===null&&(k=Ve);let Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,St=Hl(w,k,J,q,Y);S.setMaterial(q,Rt);let It=J.index,Dt=1;if(q.wireframe===!0){if(It=$.getWireframeAttribute(J),It===void 0)return;Dt=2}let Zt=J.drawRange,Kt=J.attributes.position,Lt=Zt.start*Dt,ae=(Zt.start+Zt.count)*Dt;bt!==null&&(Lt=Math.max(Lt,bt.start*Dt),ae=Math.min(ae,(bt.start+bt.count)*Dt)),It!==null?(Lt=Math.max(Lt,0),ae=Math.min(ae,It.count)):Kt!=null&&(Lt=Math.max(Lt,0),ae=Math.min(ae,Kt.count));let Ae=ae-Lt;if(Ae<0||Ae===1/0)return;yt.setup(Y,q,St,J,It);let me,he=mt;if(It!==null&&(me=ft.get(It),he=tt,he.setIndex(me)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*ye()),he.setMode(H.LINES)):he.setMode(H.TRIANGLES);else if(Y.isLine){let Ze=q.linewidth;Ze===void 0&&(Ze=1),S.setLineWidth(Ze*ye()),Y.isLineSegments?he.setMode(H.LINES):Y.isLineLoop?he.setMode(H.LINE_LOOP):he.setMode(H.LINE_STRIP)}else Y.isPoints?he.setMode(H.POINTS):Y.isSprite&&he.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ze=Y._multiDrawStarts,At=Y._multiDrawCounts,an=Y._multiDrawCount,te=It?ft.get(It).bytesPerElement:1,wn=Z.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<an;Jn++)wn.setValue(H,"_gl_DrawID",Jn),he.render(Ze[Jn]/te,At[Jn])}else if(Y.isInstancedMesh)he.renderInstances(Lt,Ae,Y.count);else if(J.isInstancedBufferGeometry){let Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,At=Math.min(J.instanceCount,Ze);he.renderInstances(Lt,Ae,At)}else he.render(Lt,Ae)};function Nn(w,k,J,q){R!==null&&w.isNodeMaterial&&R.setObject(q,w),jt===!0&&j.setState(w,J,!1),w.transparent===!0&&w.side===Qe&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,hs(w,k,q),w.side=Ui,w.needsUpdate=!0,hs(w,k,q),w.side=Qe):hs(w,k,q)}this.compile=function(w,k,J=null){J===null&&(J=w),R!==null&&R.renderStart(w,k,J),b=pt.get(J),b.init(k),v.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,jt=j.init(this.clippingPlanes,oe),jt===!0&&j.setGlobalState(this.clippingPlanes,k),R!==null&&Tt.render(b.state.shadowsArray,J,k);let q=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let bt=Y.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){let St=bt[Rt];Nn(St,J,k,Y),q.add(St)}else Nn(bt,J,k,Y),q.add(bt)}),b=v.pop(),R!==null&&R.renderEnd(),q},this.compileAsync=function(w,k,J=null){let q=this.compile(w,k,J);return new Promise(Y=>{function bt(){if(q.forEach(function(Rt){let It=Z.get(Rt).currentProgram;(It===void 0||It.isReady())&&q.delete(Rt)}),q.size===0){Y(w);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Mo=null;function So(w){Mo&&Mo(w)}function ur(){Zn.stop()}function Un(){Zn.start()}let Zn=new rf;Zn.setAnimationLoop(So),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){Mo=w,wt.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},wt.addEventListener("sessionstart",ur),wt.addEventListener("sessionend",Un),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R!==null&&R.renderStart(w,k);let J=wt.enabled===!0&&wt.isPresenting===!0,q=E!==null&&(G===null||J)&&E.begin(P,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(k),k=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,k,G),b=pt.get(w,v.length),b.init(k),b.state.textureUnits=Q.getTextureUnits(),v.push(b),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Yt.setFromProjectionMatrix(Ft,Vn,k.reversedDepth),oe=this.localClippingEnabled,jt=j.init(this.clippingPlanes,oe),M=xt.get(w,A.length),M.init(),A.push(M),wt.enabled===!0&&wt.isPresenting===!0){let Rt=P.xr.getDepthSensingMesh();Rt!==null&&Tn(Rt,k,-1/0,P.sortObjects)}Tn(w,k,0,P.sortObjects),M.finish(),R!==null&&R.updateLights(b.state.lightsArray),P.sortObjects===!0&&M.sort(_t,Bt),fe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,fe&&vt.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&j.beginShadows();let Y=b.state.shadowsArray;if(Tt.render(Y,w,k),jt===!0&&j.endShadows(),(q&&E.hasRenderPass())===!1){let Rt=M.opaque,St=M.transmissive;if(b.setupLights(),k.isArrayCamera){let It=k.cameras;if(St.length>0)for(let Dt=0,Zt=It.length;Dt<Zt;Dt++){let Kt=It[Dt];En(Rt,St,w,Kt)}fe&&vt.render(w);for(let Dt=0,Zt=It.length;Dt<Zt;Dt++){let Kt=It[Dt];Wi(M,w,Kt,Kt.viewport)}}else St.length>0&&En(Rt,St,w,k),fe&&vt.render(w),Wi(M,w,k)}G!==null&&V===0&&(Q.updateMultisampleRenderTarget(G),Q.updateRenderTargetMipmap(G)),q&&E.end(P),w.isScene===!0&&w.onAfterRender(P,w,k),yt.resetDefaultState(),B=-1,z=null,v.pop(),v.length>0?(b=v[v.length-1],Q.setTextureUnits(b.state.textureUnits),jt===!0&&j.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,R!==null&&R.renderEnd()};function Tn(w,k,J,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Yt)){q&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);let Rt=nt.update(w),St=w.material;St.visible&&M.push(w,Rt,St,J,be.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Yt))){let Rt=nt.update(w),St=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),be.copy(Rt.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(St)){let It=Rt.groups;for(let Dt=0,Zt=It.length;Dt<Zt;Dt++){let Kt=It[Dt],Lt=St[Kt.materialIndex];Lt&&Lt.visible&&M.push(w,Rt,Lt,J,be.z,Kt,k)}}else St.visible&&M.push(w,Rt,St,J,be.z,null,k)}}let bt=w.children;for(let Rt=0,St=bt.length;Rt<St;Rt++)Tn(bt[Rt],k,J,q)}function Wi(w,k,J,q){let{opaque:Y,transmissive:bt,transparent:Rt}=w;b.setupLightsView(J),jt===!0&&j.setGlobalState(P.clippingPlanes,J),q&&S.viewport(X.copy(q)),Y.length>0&&Fn(Y,k,J),bt.length>0&&Fn(bt,k,J),Rt.length>0&&Fn(Rt,k,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function En(w,k,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let Lt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new xe(1,1,{generateMipmaps:!0,type:Lt?Fe:pn,minFilter:Cn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let bt=b.state.transmissionRenderTarget[q.id],Rt=q.viewport||X;bt.setSize(Rt.z*P.transmissionResolutionScale,Rt.w*P.transmissionResolutionScale);let St=P.getRenderTarget(),It=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor($t),Ut=P.getClearAlpha(),Ut<1&&P.setClearColor(16777215,.5),P.clear(),fe&&vt.render(J);let Zt=P.toneMapping;P.toneMapping=Xn;let Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),jt===!0&&j.setGlobalState(P.clippingPlanes,q),Fn(w,J,q),Q.updateMultisampleRenderTarget(bt),Q.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ae=0,Ae=k.length;ae<Ae;ae++){let me=k[ae],{object:he,geometry:Ze,material:At,group:an}=me;if(At.side===Qe&&he.layers.test(q.layers)){let te=At.side;At.side=qe,At.needsUpdate=!0,bo(he,J,q,Ze,At,an),At.side=te,At.needsUpdate=!0,Lt=!0}}Lt===!0&&(Q.updateMultisampleRenderTarget(bt),Q.updateRenderTargetMipmap(bt))}P.setRenderTarget(St,It,Dt),P.setClearColor($t,Ut),Kt!==void 0&&(q.viewport=Kt),P.toneMapping=Zt}function Fn(w,k,J){let q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,bt=w.length;Y<bt;Y++){let Rt=w[Y],{object:St,geometry:It,group:Dt}=Rt,Zt=Rt.material;Zt.allowOverride===!0&&q!==null&&(Zt=q),St.layers.test(J.layers)&&bo(St,k,J,It,Zt,Dt)}}function bo(w,k,J,q,Y,bt){R!==null&&Y.isNodeMaterial&&R.setObject(w,Y),w.onBeforeRender(P,k,J,q,Y,bt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(P,k,J,q,w,bt),Y.transparent===!0&&Y.side===Qe&&Y.forceSinglePass===!1?(Y.side=qe,Y.needsUpdate=!0,P.renderBufferDirect(J,k,q,Y,w,bt),Y.side=Ui,Y.needsUpdate=!0,P.renderBufferDirect(J,k,q,Y,w,bt),Y.side=Qe):P.renderBufferDirect(J,k,q,Y,w,bt),w.onAfterRender(P,k,J,q,Y,bt)}function hs(w,k,J){k.isScene!==!0&&(k=Ve);let q=Z.get(w),Y=b.state.lights,bt=b.state.shadowsArray,Rt=Y.state.version,St=ut.getParameters(w,Y.state,bt,k,J,b.state.lightProbeGridArray),It=ut.getProgramCacheKey(St),Dt=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let Zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=lt.get(w.envMap||q.environment,Zt),q.envMapRotation=q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",hn),Dt=new Map,q.programs=Dt);let Kt=Dt.get(It);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===Rt)return Eo(w,St),Kt}else St.uniforms=ut.getUniforms(w),R!==null&&w.isNodeMaterial&&R.build(w,J,St),w.onBeforeCompile(St,P),Kt=ut.acquireProgram(St,It),Dt.set(It,Kt),q.uniforms=St.uniforms;let Lt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=j.uniform),Eo(w,St),q.needsLights=on(w),q.lightsStateVersion=Rt,q.needsLights&&(Lt.ambientLightColor.value=Y.state.ambient,Lt.lightProbe.value=Y.state.probe,Lt.sunLights.value=Y.state.sun,Lt.sunLightShadows.value=Y.state.sunShadow,Lt.directionalLights.value=Y.state.directional,Lt.directionalLightShadows.value=Y.state.directionalShadow,Lt.spotLights.value=Y.state.spot,Lt.spotLightShadows.value=Y.state.spotShadow,Lt.rectAreaLights.value=Y.state.rectArea,Lt.ltc_1.value=Y.state.rectAreaLTC1,Lt.ltc_2.value=Y.state.rectAreaLTC2,Lt.pointLights.value=Y.state.point,Lt.pointLightShadows.value=Y.state.pointShadow,Lt.hemisphereLights.value=Y.state.hemi,Lt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Lt.sunShadowCascade.value=Y.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Y.state.spotLightMatrix,Lt.spotLightMap.value=Y.state.spotLightMap,Lt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=Kt,q.uniformsList=null,Kt}function To(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=qs.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Eo(w,k){let J=Z.get(w);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function kl(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let J=0,q=w.length;J<q;J++){let Y=w[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function Hl(w,k,J,q,Y){k.isScene!==!0&&(k=Ve),Q.resetTextureUnits();let bt=k.fog,Rt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,St=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Jt.workingColorSpace,It=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Dt=lt.get(q.envMap||Rt,It),Zt=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Kt=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,Ae=!!J.morphAttributes.color,me=Xn;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(me=P.toneMapping);let he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ze=he!==void 0?he.length:0,At=Z.get(q),an=b.state.lights;if(jt===!0&&(oe===!0||w!==z)){let de=w===z&&q.id===B;j.setState(q,w,de)}let te=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==an.state.version||At.outputColorSpace!==St||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Dt||q.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==j.numPlanes||At.numIntersection!==j.numIntersection)||At.vertexAlphas!==Zt||At.vertexTangents!==Kt||At.morphTargets!==Lt||At.morphNormals!==ae||At.morphColors!==Ae||At.toneMapping!==me||At.morphTargetsCount!==Ze||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,At.__version=q.version);let wn=At.currentProgram;te===!0&&(wn=hs(q,k,Y),R&&q.isNodeMaterial&&R.onUpdateProgram(q,wn,At));let Jn=!1,Mi=!1,fs=!1,ue=wn.getUniforms(),Te=At.uniforms;if(S.useProgram(wn.program)&&(Jn=!0,Mi=!0,fs=!0),q.id!==B&&(B=q.id,Mi=!0),At.needsLights){let de=kl(b.state.lightProbeGridArray,Y);At.lightProbeGrid!==de&&(At.lightProbeGrid=de,Mi=!0)}if(Jn||z!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(H,"projectionMatrix",w.projectionMatrix),ue.setValue(H,"viewMatrix",w.matrixWorldInverse);let bi=ue.map.cameraPosition;bi!==void 0&&bi.setValue(H,zt.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&ue.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Mi=!0,fs=!0)}if(At.needsLights&&(an.state.sunShadowMap.length>0&&ue.setValue(H,"sunShadowMap",an.state.sunShadowMap,Q),an.state.directionalShadowMap.length>0&&ue.setValue(H,"directionalShadowMap",an.state.directionalShadowMap,Q),an.state.spotShadowMap.length>0&&ue.setValue(H,"spotShadowMap",an.state.spotShadowMap,Q),an.state.pointShadowMap.length>0&&ue.setValue(H,"pointShadowMap",an.state.pointShadowMap,Q)),Y.isSkinnedMesh){ue.setOptional(H,Y,"bindMatrix"),ue.setOptional(H,Y,"bindMatrixInverse");let de=Y.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),ue.setValue(H,"boneTexture",de.boneTexture,Q))}Y.isBatchedMesh&&(ue.setOptional(H,Y,"batchingTexture"),ue.setValue(H,"batchingTexture",Y._matricesTexture,Q),ue.setOptional(H,Y,"batchingIdTexture"),ue.setValue(H,"batchingIdTexture",Y._indirectTexture,Q),ue.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(H,"batchingColorTexture",Y._colorsTexture,Q));let Si=J.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&O.update(Y,J,wn),(Mi||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,ue.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Te.envMapIntensity.value=k.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=qx()),Mi){if(ue.setValue(H,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&yi(Te,fs),bt&&q.fog===!0&&Pt.refreshFogUniforms(Te,bt),Pt.refreshMaterialUniforms(Te,q,et,K,b.state.transmissionRenderTarget[w.id]),At.needsLights&&At.lightProbeGrid){let de=At.lightProbeGrid;Te.probesSH.value=de.texture,Te.probesMin.value.copy(de.boundingBox.min),Te.probesMax.value.copy(de.boundingBox.max),Te.probesResolution.value.copy(de.resolution)}qs.upload(H,To(At),Te,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(qs.upload(H,To(At),Te,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(H,"center",Y.center),ue.setValue(H,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(H,"normalMatrix",Y.normalMatrix),ue.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let de=q.uniformsGroups;for(let bi=0,ds=de.length;bi<ds;bi++){let Tu=de[bi];it.update(Tu,wn),it.bind(Tu,wn)}}return wn}function yi(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function on(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,k,J){let q=Z.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(w.texture).__webglTexture=k,Z.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let J=Z.get(w);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,J=0){G=w,N=k,V=J;let q=null,Y=!1,bt=!1;if(w){let St=Z.get(w);if(St.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,St.__webglFramebuffer),X.copy(w.viewport),ht.copy(w.scissor),Et=w.scissorTest,S.viewport(X),S.scissor(ht),S.setScissorTest(Et),B=-1;return}else if(St.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(St.__hasExternalTextures)Q.rebindTextures(w,Z.get(w.texture).__webglTexture,Z.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Zt=w.depthTexture;if(St.__boundDepthTexture!==Zt){if(Zt!==null&&Z.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let Dt=Z.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[k])?q=Dt[k][J]:q=Dt[k],Y=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?q=Z.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?q=Dt[J]:q=Dt,X.copy(w.viewport),ht.copy(w.scissor),Et=w.scissorTest}else X.copy(ct).multiplyScalar(et).floor(),ht.copy(Wt).multiplyScalar(et).floor(),Et=Se;if(J!==0&&(q=U),S.bindFramebuffer(H.FRAMEBUFFER,q)&&S.drawBuffers(w,q),S.viewport(X),S.scissor(ht),S.setScissorTest(Et),Y){let St=Z.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,J)}else if(bt){let St=k;for(let It=0;It<w.textures.length;It++){let Dt=Z.get(w.textures[It]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+It,Dt.__webglTexture,J,St)}}else if(w!==null&&J!==0){let St=Z.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,J)}B=-1};function Bn(w){let k=Z.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=I.textureFormatReadable(w.format),k.__typeReadable=I.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,J,q,Y,bt,Rt,St=0){if(!(w&&w.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){S.bindFramebuffer(H.FRAMEBUFFER,It);try{let Dt=w.textures[St],Zt=Dt.format,Kt=Dt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);let Lt=Bn(Dt);if(Lt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&J>=0&&J<=w.height-Y&&H.readPixels(k,J,q,Y,gt.convert(Zt),gt.convert(Kt),bt)}finally{let Dt=G!==null?Z.get(G).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,k,J,q,Y,bt,Rt,St=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(k>=0&&k<=w.width-q&&J>=0&&J<=w.height-Y){S.bindFramebuffer(H.FRAMEBUFFER,It);let Dt=w.textures[St],Zt=Dt.format,Kt=Dt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St);let Lt=Bn(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),H.readPixels(k,J,q,Y,gt.convert(Zt),gt.convert(Kt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ae=G!==null?Z.get(G).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Ae);let me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Lh(H,me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ae),H.deleteSync(me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(w.image.width*q),bt=Math.floor(w.image.height*q),Rt=k!==null?k.x:0,St=k!==null?k.y:0;Q.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Rt,St,Y,bt),S.unbindTexture()},this.copyTextureToTexture=function(w,k,J=null,q=null,Y=0,bt=0){let Rt,St,It,Dt,Zt,Kt,Lt,ae,Ae,me=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(J!==null)Rt=J.max.x-J.min.x,St=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,Zt=J.min.y,Kt=J.isBox3?J.min.z:0;else{let Te=Math.pow(2,-Y);Rt=Math.floor(me.width*Te),St=Math.floor(me.height*Te),w.isDataArrayTexture?It=me.depth:w.isData3DTexture?It=Math.floor(me.depth*Te):It=1,Dt=0,Zt=0,Kt=0}q!==null?(Lt=q.x,ae=q.y,Ae=q.z):(Lt=0,ae=0,Ae=0);let he=gt.convert(k.format),Ze=gt.convert(k.type),At;k.isData3DTexture?(Q.setTexture3D(k,0),At=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),At=H.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),At=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let an=S.getParameter(H.UNPACK_ROW_LENGTH),te=S.getParameter(H.UNPACK_IMAGE_HEIGHT),wn=S.getParameter(H.UNPACK_SKIP_PIXELS),Jn=S.getParameter(H.UNPACK_SKIP_ROWS),Mi=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,me.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,me.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Dt),S.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Kt);let fs=w.isDataArrayTexture||w.isData3DTexture,ue=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Te=Z.get(w),Si=Z.get(k),de=Z.get(Te.__renderTarget),bi=Z.get(Si.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,de.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ds=0;ds<It;ds++)fs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(w).__webglTexture,Y,Kt+ds),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,bt,Ae+ds)),H.blitFramebuffer(Dt,Zt,Rt,St,Lt,ae,Rt,St,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Z.has(w)){let Te=Z.get(w),Si=Z.get(k);S.bindFramebuffer(H.READ_FRAMEBUFFER,C),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,D);for(let de=0;de<It;de++)fs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.__webglTexture,Y,Kt+de):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Te.__webglTexture,Y),ue?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Si.__webglTexture,bt,Ae+de):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Si.__webglTexture,bt),Y!==0?H.blitFramebuffer(Dt,Zt,Rt,St,Lt,ae,Rt,St,H.COLOR_BUFFER_BIT,H.NEAREST):ue?H.copyTexSubImage3D(At,bt,Lt,ae,Ae+de,Dt,Zt,Rt,St):H.copyTexSubImage2D(At,bt,Lt,ae,Dt,Zt,Rt,St);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(At,bt,Lt,ae,Ae,Rt,St,It,he,Ze,me.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(At,bt,Lt,ae,Ae,Rt,St,It,he,me.data):H.texSubImage3D(At,bt,Lt,ae,Ae,Rt,St,It,he,Ze,me):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,Lt,ae,Rt,St,he,Ze,me.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,Lt,ae,me.width,me.height,he,me.data):H.texSubImage2D(H.TEXTURE_2D,bt,Lt,ae,Rt,St,he,Ze,me);S.pixelStorei(H.UNPACK_ROW_LENGTH,an),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,te),S.pixelStorei(H.UNPACK_SKIP_PIXELS,wn),S.pixelStorei(H.UNPACK_SKIP_ROWS,Jn),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),bt===0&&k.generateMipmaps&&H.generateMipmap(At),S.unbindTexture()},this.initRenderTarget=function(w){Z.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){N=0,V=0,G=null,S.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var Ee=(i,t,e)=>i<t?t:i>e?e:i,_e=(i,t,e)=>i+(t-i)*e,Sl=i=>i*i*(3-2*i),gn=(i,t,e)=>{let n=Ee((e-i)/(t-i),0,1);return n*n*(3-2*n)},ff=1337;function df(i){ff=i|0}function Yx(i){return i=i^ff|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var xi=(i,t)=>Yx(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function gi(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return _e(xi(e,t),xi(e+1,t),s)}var bl=(i,t=0)=>gi(i,t)*.55+gi(i*2.03,t+7)*.3+gi(i*4.1,t+13)*.15;function cn(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var Ml=new ot,dt=i=>(Ml.set(i),[Ml.r,Ml.g,Ml.b]),pf=(i,t,e)=>[_e(i[0],t[0],e),_e(i[1],t[1],e),_e(i[2],t[2],e)],Mn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var ou=["city","sakura","coast","country"],oo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5}},ru=1500,mf=260,zi=0,au=0;function xf(i){au=Math.max(0,ou.indexOf(i))}function El(i){let t=Math.floor(i/ru),e=i-t*ru,n=Sl(Ee((e-(ru-mf))/mf,0,1));return{a:ou[((t+au)%4+4)%4],b:ou[((t+au+1)%4+4)%4],t:n}}function tn(i){let t=El(i),e={city:0,sakura:0,coast:0,country:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var we=i=>{let t=El(i);return t.t<.5?t.a:t.b};function Sn(i,t){let e=El(i);return _e(oo[e.a][t],oo[e.b][t],e.t)}var Zs=650,Js=375,$s=i=>i*Zs+Js;function ao(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=tn(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}function lo(i){let t=Math.round((i-Js)/Zs),e=$s(t);return ao(e)?{k:t,s:e}:null}function Zx(i){let t=lo(i);return t?1-gn(8,45,Math.abs(i-t.s)):0}var ii=2,Tl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(gi(t/300,11)-.5)*2+(gi(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*Sn(t,"curv")*(1-Zx(t))}elevRaw(t){return Sn(t,"base")+Sn(t,"hill")*(bl(t/380,29)-.5)*2}elev(t){let e=lo(t);if(!e)return this.elevRaw(t);let n=1-gn(8,45,Math.abs(t-e.s));return n>0?_e(this.elevRaw(t),this.elevRaw(e.s),n):this.elevRaw(t)}ensure(t){for(;(this.X.length-1)*ii<t+ii;){let e=this.X.length-1,n=e*ii,s=this.curv(n+ii/2)*ii,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*ii),this.Z.push(this.Z[e]+Math.cos(r+s/2)*ii),this.H.push(r+s),this.Y.push(this.elev(n+ii))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+ii);let n=t/ii,s=Math.floor(n),r=n-s;e.x=_e(this.X[s],this.X[s+1],r),e.z=_e(this.Z[s],this.Z[s+1],r),e.y=_e(this.Y[s],this.Y[s+1],r),e.h=_e(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),o=Math.cos(e.h);return e.fx=a,e.fz=o,e.rx=-o,e.rz=a,e}};function gf(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+gn(45,190,r)*16*(.45+.55*gi(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+gn(s+1.5,80,r)*24*(.5+.5*gi(t/170,5))+gn(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?_e(1.25,-1.6,a/26):_e(-1.6,-7,Ee((a-26)/20,0,1)))-n}case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+gn(135,215,r)*36*(.4+.6*gi(t/210+(e>0?9:0),7))}}function lu(i,t,e,n){let s=El(i),r=gf(s.a,i,t,e,n);return s.t>0?_e(r,gf(s.b,i,t,e,n),s.t):r}var co=new F,wl=new F,Jx=[1,1,1],He=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.P=[],this.N=[],this.U=[],this.Cl=[],this.m=new Ht,this.nm=new Vt,this.e=this.m.elements,this.ne=this.nm.elements}get count(){return this.P.length/3}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,o,c,l){let u=this.e,h=this.ne;this.P.push(u[0]*t+u[4]*e+u[8]*n+u[12],u[1]*t+u[5]*e+u[9]*n+u[13],u[2]*t+u[6]*e+u[10]*n+u[14]);let f=h[0]*s+h[3]*r+h[6]*a,d=h[1]*s+h[4]*r+h[7]*a,m=h[2]*s+h[5]*r+h[8]*a,x=1/(Math.sqrt(f*f+d*d+m*m)||1);if(this.N.push(f*x,d*x,m*x),this.hasUV&&this.U.push(o,c),this.hasColor){let g=l||Jx;this.Cl.push(g[0],g[1],g[2])}}quad(t,e,n,s,r,a){co.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),wl.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),wl.lengthSq()<1e-12&&wl.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),co.cross(wl).normalize();let o=co.x,c=co.y,l=co.z,u=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,d=a?a.v1:1;this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(e[0],e[1],e[2],o,c,l,h,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,d,r),this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,d,r),this.vtx(s[0],s[1],s[2],o,c,l,u,d,r)}box(t,e,n,s,r,a,o,c=null,l=null){let u=c||{},h=l||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||o,u.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||o,u.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||o,u.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||o,u.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||o,u.py),l&&l.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||o,u.ny)}cyl(t,e,n,s,r,a,o,c,l=!0){let u=(s-r)/a;for(let h=0;h<o;h++){let f=h/o*Math.PI*2,d=(h+1)/o*Math.PI*2,m=Math.cos(f),x=Math.sin(f),g=Math.cos(d),p=Math.sin(d),y=[t+m*s,e,n+x*s],T=[t+g*s,e,n+p*s],_=[t+g*r,e+a,n+p*r],M=[t+m*r,e+a,n+x*r];this.vtx(y[0],y[1],y[2],m,u,x,0,0,c),this.vtx(M[0],M[1],M[2],m,u,x,0,0,c),this.vtx(_[0],_[1],_[2],g,u,p,0,0,c),this.vtx(y[0],y[1],y[2],m,u,x,0,0,c),this.vtx(_[0],_[1],_[2],g,u,p,0,0,c),this.vtx(T[0],T[1],T[2],g,u,p,0,0,c),l&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c),this.vtx(M[0],M[1],M[2],0,1,0,0,0,c))}}rod(t,e,n,s,r,a){let o=e[0]-t[0],c=e[1]-t[1],l=e[2]-t[2],u=Math.hypot(o,c,l);o/=u,c/=u,l/=u;let h=0,f=1,d=0;Math.abs(c)>.99&&(h=1,f=0);let m=c*d-l*f,x=l*h-o*d,g=o*f-c*h,p=Math.hypot(m,x,g);m/=p,x/=p,g/=p;let y=x*l-g*c,T=g*o-m*l,_=m*c-x*o;for(let M=0;M<r;M++){let b=M/r*Math.PI*2,A=(M+1)/r*Math.PI*2,v=Math.cos(b),E=Math.sin(b),P=Math.cos(A),L=Math.sin(A),R=m*v+y*E,U=x*v+T*E,C=g*v+_*E,D=m*P+y*L,N=x*P+T*L,V=g*P+_*L,G=[t[0]+R*n,t[1]+U*n,t[2]+C*n],B=[t[0]+D*n,t[1]+N*n,t[2]+V*n],z=[e[0]+D*s,e[1]+N*s,e[2]+V*s],X=[e[0]+R*s,e[1]+U*s,e[2]+C*s];this.vtx(G[0],G[1],G[2],R,U,C,0,0,a),this.vtx(B[0],B[1],B[2],D,N,V,0,0,a),this.vtx(z[0],z[1],z[2],D,N,V,0,0,a),this.vtx(G[0],G[1],G[2],R,U,C,0,0,a),this.vtx(z[0],z[1],z[2],D,N,V,0,0,a),this.vtx(X[0],X[1],X[2],R,U,C,0,0,a)}return u}blob(t,e,n,s,r,a,o=0,c=1){let l=_f[o%_f.length],u=l.attributes.position.array,h=l.attributes.normal.array,f=l.userData.disp;for(let d=0;d<u.length;d+=3){let m=1+f[d/3],x=Math.max(0,Math.min(1,h[d+1]*.5+.5)),g=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+u[d]*s*m,e+u[d+1]*s*m*c,n+u[d+2]*s*m,h[d],h[d+1],h[d+2],0,0,g)}}wire(t,e,n,s,r,a=10){let o=t;for(let c=1;c<=a;c++){let l=c/a,u=[t[0]+(e[0]-t[0])*l,t[1]+(e[1]-t[1])*l-n*4*l*(1-l),t[2]+(e[2]-t[2])*l];this.rod(o,u,s,s,3,r),o=u}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,o,c]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],o,c,s[a])}toArrays(){return{P:new Float32Array(this.P),N:new Float32Array(this.N),C:this.hasColor?new Float32Array(this.Cl):null,U:this.hasUV?new Float32Array(this.U):null}}stamp(t,e){if(!t||!t.P.length)return;this.setM(e);let n=this.e,s=this.ne,r=t.P,a=t.N,o=t.C,c=t.U,l=this.P,u=this.N;for(let h=0;h<r.length;h+=3){let f=r[h],d=r[h+1],m=r[h+2];l.push(n[0]*f+n[4]*d+n[8]*m+n[12],n[1]*f+n[5]*d+n[9]*m+n[13],n[2]*f+n[6]*d+n[10]*m+n[14]);let x=a[h],g=a[h+1],p=a[h+2],y=s[0]*x+s[3]*g+s[6]*p,T=s[1]*x+s[4]*g+s[7]*p,_=s[2]*x+s[5]*g+s[8]*p,M=1/(Math.sqrt(y*y+T*T+_*_)||1);u.push(y*M,T*M,_*M)}if(this.hasColor)if(o)for(let h=0;h<o.length;h++)this.Cl.push(o[h]);else for(let h=0;h<r.length;h++)this.Cl.push(1);if(this.hasUV)if(c)for(let h=0;h<c.length;h++)this.U.push(c[h]);else for(let h=0;h<r.length/3*2;h++)this.U.push(0)}build(){if(!this.P.length)return null;let t=new le;return t.setAttribute("position",new Xt(this.P,3)),t.setAttribute("normal",new Xt(this.N,3)),this.hasUV&&t.setAttribute("uv",new Xt(this.U,2)),this.hasColor&&t.setAttribute("color",new Xt(this.Cl,3)),t.computeBoundingSphere(),t}},_f=[0,1,2,3].map(i=>{let t=new Dr(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,o)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(o*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});qt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var os=4200,en={uSkyHor:{value:new ot(.7,.8,.9)},uSkyZen:{value:new ot(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Nt}};function Mf(i){let t=new Ki(new Uint8Array(i),i.length,1,Gs);return t.minFilter=t.magFilter=Pe,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Yn=Mf([16,16,16,70,200,255,255,255]),vf=Mf([28,40,70,130,200,240,255,255]),ki=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.,0.)), u.x), mix(hash12(i+vec2(0.,1.)), hash12(i+vec2(1.,1.)), u.x), u.y); }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,$x=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,Kx=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`;function uo(i,t="",e=""){i.uniforms.uOrigin=en.uOrigin,i.uniforms.uCloudSh=en.uCloudSh,i.uniforms.uTime=en.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;
${ki}${$x}${t}`).replace("#include <opaque_fragment>",`${Kx}${e}
#include <opaque_fragment>`)}var Qx=`
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
  float city = vZW.x, paint = 0.0;
  paint += step(abs(a - (rw - 0.28)), 0.07);
  paint += (1.0 - step(0.5, city)) * step(a, 0.07) * step(fract(s/10.0), 0.55);
  float cs = mod(s, 150.0);
  if (city > 0.5) {
    if (cs < 4.0 && a < rw - 0.45) paint += step(0.5, fract(u/0.9 + 0.25));
    if (cs > 147.2 && cs < 147.65 && u < -0.1 && u > -rw + 0.4) paint += 1.0;
    vec2 dm = vec2((cs - 118.0)/3.2, (u + 1.55)/0.62); float dd = abs(dm.x) + abs(dm.y);
    if (dd < 1.0 && dd > 0.82) paint += 1.0;
  }
  paint = clamp(paint, 0.0, 1.0) * (0.8 + 0.2*vnoise(p*6.0));
  return mix(c, L(vec3(0.96, 0.96, 0.93)), paint);
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
    if (h < 0.28) field = mix(water, field, rows*0.5);
    else if (h > 0.86) field = L(vec3(0.40, 0.52, 0.22)) * (0.88 + 0.16*rows);
    float ridge = max(max(step(f.x, 0.025), step(0.975, f.x)), max(step(f.y, 0.04), step(0.96, f.y)));
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
vec3 groundAlbedo(){
  float s = vSU.x, u = vSU.y, rw = vRK.x, kind = vRK.y;
  if (kind > 0.5 && kind < 1.5) return roadCol(s, u, rw);
  if (kind > 1.5 && kind < 2.5) return sidewalkCol(s, u, rw);
  if (kind > 2.5 && kind < 3.5) return L(vec3(0.80, 0.80, 0.78)) * (0.9 + 0.12*fbm2(vec2(s, u)*2.0));
  if (kind > 4.5 && kind < 5.5) return trackBed(s, u);
  if (kind > 5.5 && kind < 6.5) return crossingPanel(s, u);
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`,jx=`
if (uWet > 0.01) {
  float kind = vRK.y;
  float hard = (kind > 0.5 && kind < 7.5) ? 1.0 : 0.0;
  float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  float isRoad = step(0.5, kind) * step(kind, 1.5);
  float puddle = smoothstep(0.6, 0.72, fbm2(vSU * vec2(0.22, 0.35) + 3.7)) * isRoad;
  vec2 rc = vSU * 1.6, fp = fract(rc) - 0.5; float ph = fract(uTime * 0.85 + hash12(floor(rc)));
  float ring = (1.0 - smoothstep(0.0, 0.045, abs(length(fp) - ph * 0.48))) * (1.0 - ph) * puddle;
  vec3 refl = mix(uSkyHor, uSkyZen, 0.35) * (0.75 - 0.4 * uNight);
  float k = uWet * hard * clamp(0.05 + fr * 0.55 + puddle * 0.6, 0.0, 0.9);
  outgoingLight = mix(outgoingLight * (1.0 - 0.38 * uWet * hard), refl, k) + ring * 0.1 * uWet * (refl + 0.05);
  outgoingLight *= 1.0 - 0.12 * uWet * (1.0 - hard);
}`;function t_(){let i=new Xe({color:16777215,gradientMap:Yn});return i.onBeforeCompile=t=>{t.uniforms.uSkyHor=en.uSkyHor,t.uniforms.uSkyZen=en.uSkyZen,t.uniforms.uWet=en.uWet,t.uniforms.uNight=en.uNight,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vWY = (modelMatrix * vec4(position, 1.0)).y;`),uo(t,`
uniform vec3 uSkyHor, uSkyZen; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY;
${Qx}`,jx),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},i.customProgramCacheKey=()=>"ground-v4",i}function yf(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),uo(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var e_=0;function Ks(i){let t="cs"+ ++e_;return i.onBeforeCompile=e=>uo(e),i.customProgramCacheKey=()=>t,i}function Sf(i,t){let e={};e.ground=t_(),e.color=yf(new Xe({vertexColors:!0,gradientMap:Yn}),1.6,.1,"color-v2"),e.atlas=new Xe({vertexColors:!0,gradientMap:Yn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=o=>uo(o),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=yf(new Xe({vertexColors:!0,gradientMap:vf}),2.6,.24,"foliage-v2"),e.lamp=new ke({color:15789798}),t&&(e.leaf=new Xe({map:t,vertexColors:!0,gradientMap:vf,alphaTest:.42,side:Qe}),e.leaf.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",qt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),uo(o)},e.leaf.customProgramCacheKey=()=>"leaf-v2"),e.wire=new ke({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new vn(n);return e.pool=new ke({map:a,color:16762746,transparent:!0,opacity:0,blending:di,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var n_=dt("#f2c230"),bf=dt("#26272c");function Al(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=Sn(s,"rw"),o=n*(a+.8),c=tn(s),l=c.city+c.sakura>.5;e.push({x:r.x+r.rx*o,z:r.z+r.rz*o,y:r.y+(l?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function Tf(){let i=new Ce,t=Ks(new Xe({vertexColors:!0,gradientMap:Yn})),e=new ke({color:new ot(6,.45,.3)}),n=new ke({color:new ot(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Ce,a=new Ce;r.add(a),a.position.set(-.42,1.02,-.02);let o=new He,c=3.6;for(let h=0,f=0;f<c;h++,f+=.45)o.box(-Math.min(f+.45,c),-.065,-.065,-f,.065,.065,h%2?bf:n_);o.box(0,-.09,-.07,.38,.09,.07,bf);let l=new ee(o.build(),t);l.castShadow=!0,a.add(l);let u=[-.28,.28].map(h=>{let f=new ee(new Lr(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:l,lamps:u,L:c}});return i.visible=!1,{group:i,update(r,a,o,c,l){i.visible=!!r,r&&r.forEach((u,h)=>{let f=s[h];f.root.position.set(u.x-a.x,u.y,u.z-a.z),f.root.rotation.y=u.yaw,f.arm.scale.x=(u.rw+.25)/f.L,f.pivot.rotation.z=-o*(Math.PI/2-.06);let d=Math.floor(l*2.5)%2;f.lamps[0].material=c&&d===0?e:n,f.lamps[1].material=c&&d===1?e:n})}}}function i_(){let e=()=>{let p=document.createElement("canvas");return p.width=1024,p.height=512,p},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),o='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let p=0;p<1024;p+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(p,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let l=[.1,.36,.62,.88].map(p=>p*1024),u=(p,y,T,_)=>{let M=r.createLinearGradient(p,y,p+T*.3,y+_);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(p,y,T,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(p+T*.2,y),r.lineTo(p+T*.38,y),r.lineTo(p+T*.1,y+_),r.lineTo(p-T*.08,y+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(p,y,T,_)};for(let p=0;p<l.length-1;p++){let y=l[p]+40,T=l[p+1]-40,_=3,M=(T-y)/_;for(let b=0;b<_;b++)r.fillStyle="#6b737c",r.fillRect(y+b*M+2,34,M-4,58),u(y+b*M+6,38,M-12,50)}for(let p of[l[0]-70,l[3]+40])r.fillStyle="#6b737c",r.fillRect(p+2,34,28,58),u(p+5,38,22,50);for(let p of l)r.fillStyle="#c3c8ce",r.fillRect(p-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(p-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(p-30,22,60,c-36),u(p-24,34,20,46),u(p+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let p of l)r.fillStyle="#c3c8ce",r.fillRect(p-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${o}`,r.fillText("\u30AF\u30CF 205-17",l[1]+40,136);let h=0,f=176,d=256,m=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,d,m),r.fillStyle="#20262e",r.fillRect(h+14,f+44,d-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+d/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,d-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${o}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,d,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,d,7);for(let p of[h+40,h+d-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(p,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(p+(p<h+d/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+m-30,d,30),r.fillStyle="#3a3f46",r.font=`800 16px ${o}`,r.fillText("17",h+d/2,f+220),a.fillStyle="#111",a.fillRect(h,f,d,m),a.fillStyle="#ff9a2a",a.font=`800 18px ${o}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,f+26);for(let p of[h+40,h+d-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(p,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=p=>{let y=new vn(p);return y.colorSpace=Me,y.anisotropy=4,y},g=(p,y,T,_)=>({u0:p/1024,u1:(p+T)/1024,v0:1-(y+_)/512,v1:1-y/512});return{map:x(n),em:x(s),side:g(0,0,1024,c),sideR:{...g(0,0,1024,c),flip:!0},front:g(h,f,d,m),plain:g(342,202,28,28)}}function Ef(){let i=i_(),t=Ks(new Xe({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Yn})),e=new He({uv:!0}),n=[1,1,1],s=dt("#9aa1a9"),r=dt("#3b4047"),a=dt("#2a2d33"),o=19.5,c=.6,l=3,u=1.45,h=.95,f=4,d=l*o+(l-1)*c;for(let y=0;y<l;y++){let T=-d/2+o/2+y*(o+c),_=T-o/2,M=T+o/2;e.quad([_,h,u],[M,h,u],[M,f,u],[_,f,u],n,i.side),e.quad([M,h,-u],[_,h,-u],[_,f,-u],[M,f,-u],n,i.side);let b=y===l-1,A=y===0;e.quad([M,h,u],[M,h,-u],[M,f,-u],[M,f,u],b?n:dt("#c9ced4"),b?i.front:i.plain),e.quad([_,h,-u],[_,h,u],[_,f,u],[_,f,-u],A?n:dt("#c9ced4"),A?i.front:i.plain),e.box(_+.1,f,-u+.1,M-.1,f+.14,u-.1,s,null,{noBottom:!0});for(let v of[T-5.5,T+5.5])e.box(v-1.3,f+.14,-.8,v+1.3,f+.55,.8,dt("#c4c9cf"),null,{noBottom:!0});e.box(_+2,.45,-u+.25,M-2,h,u-.25,a);for(let v of[T-7,T+7])e.box(v-1.3,.1,-1.2,v+1.3,.75,1.2,r);if(y===0){let v=T-3,E=f+.55;e.box(v-.6,f+.14,-.6,v+.6,f+.3,.6,r),e.rod([v-.5,f+.3,0],[v,E+.9,0],.03,.03,4,r),e.rod([v+.5,f+.3,0],[v,E+.9,0],.03,.03,4,r),e.rod([v,E+.9,-.85],[v,E+.9,.85],.03,.03,4,r)}}let m=new ee(e.build(),t);m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1;let x=new Ce;x.add(m),x.visible=!1;let g={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:d},p={};return{group:x,st:g,start(y,T,_=16){Object.assign(g,{active:!0,sx:y,dir:T,speed:_,u:-T*290,ds:T>0?-2:2,cleared:!1}),x.visible=!0},update(y,T,_,M,b){if(!g.active)return;g.u+=g.dir*g.speed*y;let A=g.u-g.dir*g.length/2;if(!g.cleared&&(g.dir>0?A>b+1:A<-b-1)&&(g.cleared=!0),Math.abs(g.u)>330){g.active=!1,x.visible=!1;return}T.at(g.sx,p),x.position.set(p.x+p.fx*g.ds+p.rx*g.u-_.x,p.y+.34,p.z+p.fz*g.ds+p.rz*g.u-_.z),x.rotation.y=p.h+(g.dir>0?Math.PI:0),t.emissiveIntensity=.3+M*1.1}}}var s_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',as=2048,ls=4096;function Cl(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Cf=Cl(256,256);{let i=Cf.getContext("2d"),t=i.createImageData(256,256),e=cn(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var uu=class{constructor(){this.cA=Cl(as,ls),this.cE=Cl(as/2,ls/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,as/2,ls/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,as,ls),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Cf,"repeat")}add(t,e,n,s){if(this.x+e+4>as&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>ls)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(a.x,a.y),c.beginPath(),c.rect(0,0,e,n),c.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let o=.5;return this.cells[t]={u0:(a.x+o)/as,u1:(a.x+e-o)/as,v0:1-(a.y+n-o)/ls,v1:1-(a.y+o)/ls,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new vn(n);return s.colorSpace=Me,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=Cn,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function Ln(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function Pl(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.fillRect(t,e,n,s)}function Qs(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),Pl(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}Ln(i,t,e,n,.13)}function _i(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function rt(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function js(i,t,e,n,s,r,a="#d9dde2",o="rgba(40,45,60,0.55)"){rt(i,t-r,e-r,n+2*r,s+2*r,a),rt(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=o,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function vi(i,t,e,n,s,r,a=0){let o=i.createLinearGradient(t,e,t+n*.35,e+s),c=a?"#4f78b8":"#5f93d6",l=a?"#86a9d4":"#a6c8ec";o.addColorStop(0,c),o.addColorStop(.55,l),o.addColorStop(1,"#dbe9f6"),i.fillStyle=o,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=t+n*r();i.beginPath(),i.moveTo(u,e),i.lineTo(u+n*.18,e),i.lineTo(u-n*.25,e+s),i.lineTo(u-n*.43,e+s),i.fill(),i.restore()}function wf(i,t,e,n,s,r="#efe6d2"){rt(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);Pl(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function hu(i,t,e=800){i.font=`${e} ${t}px ${s_}`}function ve(i,t,e,n,s,r,a,o=800,c=null){hu(i,r,o);let l=r;for(;i.measureText(t).width>s&&l>6;)l-=1,hu(i,l,o);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,l*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function cu(i,t,e,n,s,r,a,o=800,c=null){let l=[...t],u=l.length,h=Math.min(r*1.05,(s-n)/u),f=Math.min(r,h*.95);hu(i,f,o),i.textAlign="center",i.textBaseline="middle",l.forEach((d,m)=>{let x=n+(s-n-h*u)/2+h*(m+.5);c&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=c,i.strokeText(d,e,x)),i.fillStyle=a,i.fillText(d,e,x)})}function ho(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,rt(i,t,e,n,s,r),i.restore()}var Af=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Rl=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Rf=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],r_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Pf(){let i=new uu,t=cn(2024),e=240,n=(o,c,l,u,h,f)=>{Qs(o,i,l,u,"#ece8e0",0);let d=cn(f*31+(h?7:0)+5);if(f===0){let m=l*.14,x=u*.22,g=l*.72,p=u*.5;js(o,m,x,g,p,5),vi(o,m,x,g/2,p,d),vi(o,m+g/2,x,g/2,p,d),d()<.8&&wf(o,m+2,x+2,g*(.18+d()*.25),p-4,d()<.5?"#efe6d2":"#d9e4ea"),rt(o,m+g/2-2,x,4,p,"#cfd4da"),rt(o,m-8,x+p+5,g+16,6,"#d8d8d4"),_i(o,m-4,x+p+11,8,60),_i(o,m+g-4,x+p+11,8,60),h&&(ho(c,m,x,g,p,"#ffcf8f",0),c.fillStyle="rgba(255,240,210,0.85)",c.fillRect(m+2,x+2,g*.3,p-4))}else if(f===1){for(let m of[.12,.56]){let x=l*m,g=u*.28,p=l*.3,y=u*.36;js(o,x,g,p,y,4),vi(o,x,g,p,y,d,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(x,g,p,y*.45),_i(o,x,g+y+6,p,40,.1),h&&d()<.8&&ho(c,x,g,p,y,d()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(l*.88,u*.2,9,0,7),o.fill()}else if(f===2){let m=l*.1,x=u*.12,g=l*.8,p=u*.84;js(o,m,x,g,p,4),vi(o,m,x,g/2,p,d),vi(o,m+g/2,x,g/2,p,d),wf(o,m+2,x+2,g*(.2+d()*.3),p-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),rt(o,m+g/2-2,x,4,p,"#cfd4da"),h&&(ho(c,m,x,g,p,"#ffcb85",0),c.fillStyle="rgba(255,236,200,0.9)",c.fillRect(m+2,x+2,g*.35,p-4))}else if(f===3){Qs(o,i,l,u,"#dfe3e6",0);let m=u*.25,x=u*.55;vi(o,0,m,l,x,d,1);for(let g=0;g<=l;g+=l/4)rt(o,g-2,m,4,x,"#8d98a6");if(rt(o,0,m-4,l,4,"#8d98a6"),rt(o,0,m+x,l,5,"#7d8796"),h)for(let g=0;g<4;g++)d()<.7&&(c.fillStyle=d()<.6?"#f2f6ff":"#ffe2b0",c.fillRect(g*l/4+2,m,l/4-4,x))}else if(f===4){o.fillStyle="#6b4a35",o.fillRect(0,0,l,u);for(let y=0;y<u;y+=12)rt(o,0,y,l,2,"rgba(30,18,10,0.35)"),rt(o,0,y+2,l,1,"rgba(255,220,180,0.06)");Ln(o,i,l,u,.15);let m=l*.18,x=u*.25,g=l*.64,p=u*.45;rt(o,m-6,x-6,g+12,p+12,"#4a3020"),rt(o,m,x,g,p,"#efe4c8"),o.fillStyle="#5a3a26";for(let y=1;y<6;y++)o.fillRect(m+y*g/6-1.5,x,3,p);for(let y=1;y<3;y++)o.fillRect(m,x+y*p/3-1.5,g,3);if(h){c.fillStyle="#ffc070",c.fillRect(m,x,g,p),c.fillStyle="#000";for(let y=1;y<6;y++)c.fillRect(m+y*g/6-1.5,x,3,p)}}else if(f===5){rt(o,l*.08,0,7,u,"#bdbdb6"),rt(o,l*.08+5,0,2,u,"rgba(0,0,0,0.2)");let m=l*.55,x=u*.3,g=l*.22,p=u*.24;js(o,m,x,g,p,3),rt(o,m,x,g,p,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,x,g,p/2),_i(o,m,x+p+4,g,50,.12),rt(o,l*.22,u*.55,26,34,"#cfcfca"),rt(o,l*.22+4,u*.55+6,18,12,"#9aa2a8"),h&&ho(c,m,x,g,p,"#fff0d8",0)}else if(f===6){let m=l*.4,x=u*.35,g=l*.2,p=u*.28;js(o,m,x,g,p,3),vi(o,m,x,g,p,d,1),_i(o,m,x+p+4,g,70,.14),h&&ho(c,m,x,g,p,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(c,l,u,h)=>n(c,l,u,h,!1,o)),i.add("win"+o+"L",e,e,(c,l,u,h)=>n(c,l,u,h,!0,o));i.add("plain",e,e,(o,c,l,u)=>{Qs(o,i,l,u,"#ece8e0"),_i(o,l*.3,0,12,u*.6,.06)}),i.add("concrete",e,e,(o,c,l,u)=>{Qs(o,i,l,u,"#d9d7d0",60);for(let h=0;h<6;h++)_i(o,h*41%l,0,10,u*.5,.07)});let s=288,r=(o,c,l,u,h,f)=>{let d=cn(f);if(Qs(o,i,l,u,"#e6e2da"),h==="glass"||h==="door"||h==="konbini"||h==="cafe"){let x=u*.22,g=l-12,p=u*.78-4;rt(o,6,x,g,p,h==="konbini"?"#f6f4ea":h==="cafe"?"#7a5a40":"#8a7a68");for(let _=x+p*.25;_<x+p;_+=p*.22){rt(o,6,_,g,3,"rgba(60,50,40,0.5)");for(let M=9;M<6+g-6;M+=6+d()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(M,_-6-d()*10,4+d()*5,6+d()*10)}h==="konbini"&&rt(o,6,x+4,g,5,"#ffffff"),o.save(),o.globalAlpha=.35,vi(o,6,x,g,p,d),o.restore(),rt(o,6,x,g,4,"#4a4e57"),h==="door"&&(rt(o,l/2-2,x,4,p,"#4a4e57"),rt(o,l/2-14,x+p*.45,3,40,"#c0c4c8"),rt(o,l/2+11,x+p*.45,3,40,"#c0c4c8"),rt(o,l/2-30,x+18,60,24,"#fff"),ve(o,"\u55B6\u696D\u4E2D",l/2,x+30,54,18,"#c82828")),h==="glass"&&d()<.7&&(rt(o,16,x+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),ve(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,x+44,40,16,"#c02020")),h==="cafe"&&(rt(o,l*.62,u-70,46,62,"#2c3a30"),ve(o,"\u30E9\u30F3\u30C1",l*.62+23,u-50,40,13,"#fff",700));let T=h==="konbini"?"#c9d6e2":h==="cafe"?"#e8a060":"#e6c296";c.fillStyle=T,c.fillRect(6,x,g,p),c.fillStyle="rgba(0,0,0,0.35)";for(let _=x+p*.25;_<x+p;_+=p*.22)c.fillRect(6,_,g,3)}else if(h==="shutter"){let x=u*.2,g=l-12,p=u*.8;rt(o,6,x,g,p,"#b8bcc0");for(let y=x;y<x+p;y+=7)rt(o,6,y,g,2,"rgba(60,64,72,0.35)"),rt(o,6,y+2,g,1,"rgba(255,255,255,0.35)");rt(o,6,x,g,10,"#8f949a"),Ln(o,i,l,u,.12),d()<.5&&(rt(o,l/2-40,x+p*.35,80,26,"#fff"),ve(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),l/2,x+p*.35+13,74,16,"#333",700))}else if(h==="noren"){rt(o,0,0,l,u,"#5b3c28");for(let T=0;T<l;T+=10)rt(o,T,u*.2,3,u*.8,"rgba(25,15,8,0.6)");Ln(o,i,l,u,.15);let m=l*.12,x=u*.24,g=l*.76,p=u*.34,y=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);rt(o,m,x,g,p,y);for(let T=1;T<3;T++)rt(o,m+g*T/3-1,x+p*.25,2,p*.75,"rgba(255,255,255,0.25)");ve(o,t.pick(r_),l/2,x+p*.55,g*.9,46,"#f5f0e6",800),rt(o,m,x,g,6,"#3a2a1c"),c.fillStyle="#ffae5c",c.fillRect(m,x+p,g,u-x-p),c.fillStyle="rgba(255,170,90,0.6)",c.fillRect(m,x,g,p),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l*.9,u*.36,13,19,0,0,7),o.fill(),ve(o,"\u9152",l*.9,u*.36,16,14,"#fff"),c.fillStyle="#ff6a3a",c.beginPath(),c.ellipse(l*.9,u*.36,13,19,0,0,7),c.fill()}else if(h==="house"){let m=l*.18,x=u*.3,g=l*.34,p=u*.7;rt(o,m-6,x-6,g+12,p+6,"#9a9a96"),rt(o,m,x,g,p,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),rt(o,m+g-14,x+p*.5,4,22,"#d8d0c0"),rt(o,m+6,x+10,g-12,p*.25,"rgba(255,255,255,0.18)"),rt(o,l*.62,u*.48,30,22,"#cfcfca"),rt(o,l*.62+6,u*.48+5,18,4,"#555");let y=l*.6,T=u*.22,_=l*.3,M=u*.2;js(o,y,T,_,M,3),vi(o,y,T,_,M,d,1);for(let b=0;b<3;b++)o.fillStyle="#7b5a43",o.fillRect(l*.6+b*22,u-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(l*.6+b*22+8,u-32,11,0,7),o.fill();c.fillStyle="#ffd08a",c.beginPath(),c.arc(m+g+14,x+8,6,0,7),c.fill(),d()<.6&&(c.fillStyle="#ffcf8f",c.fillRect(y,T,_,M))}else if(h==="garage"){let x=u*.25,g=l-16,p=u*.75;rt(o,8,x,g,p,"#efefec");for(let y=x;y<x+p;y+=9)rt(o,8,y,g,1.5,"rgba(80,80,90,0.25)");Ln(o,i,l,u,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,c)=>{i.add("shop_"+o,e,s,(l,u,h,f)=>r(l,u,h,f,o,100+c)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(l,u,h,f)=>r(l,u,h,f,o,200+c))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(c,l,u,h)=>{let[f,d]=Rl[o%Rl.length],m=Af[o*7%Af.length];rt(c,0,0,u,h,f),rt(c,0,0,u,5,"rgba(255,255,255,0.35)"),rt(c,0,h-6,u,6,"rgba(0,0,0,0.18)"),o%3===0&&(rt(c,12,12,h-24,h-24,d),ve(c,m[0],12+(h-24)/2,h/2,h-30,34,f)),ve(c,m,u/2+(o%3===0?24:0),h/2+2,u*.7,50,d,900),Ln(c,i,u,h,.08),l.fillStyle=f==="#fff"||f==="#f5efe0"?"#d9d6cc":f,l.fillRect(0,0,u,h),l.globalAlpha=.9,ve(l,m,u/2+(o%3===0?24:0),h/2+2,u*.7,50,d==="#fff"?"#ffffff":d,900),l.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(c,l,u,h)=>{let[f,d]=Rl[(o*3+1)%Rl.length],m=Rf[o%Rf.length];rt(c,0,0,u,h,f),c.strokeStyle="rgba(0,0,0,0.3)",c.lineWidth=4,c.strokeRect(2,2,u-4,h-4),cu(c,m,u/2,12,h-12,56,d,900),Ln(c,i,u,h,.08),rt(l,0,0,u,h,f==="#fff"?"#e8e8e8":f),cu(l,m,u/2,12,h-12,56,d==="#fff"?"#fff":d,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,c,l],u)=>i.add("bb"+u,512,240,(h,f,d,m)=>{rt(h,0,0,d,m,"#fbfaf5"),rt(h,0,0,d,m*.62,l),ve(h,o,d/2,m*.32,d*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),ve(h,c,d/2,m*.8,d*.85,52,"#333",800),Ln(h,i,d,m,.08),rt(f,0,0,d,m,"#555"),f.globalAlpha=.85,rt(f,0,0,d,m*.62,l),ve(f,o,d/2,m*.32,d*.9,96,"#fff",900),f.globalAlpha=1})),i.add("konbini_band",480,72,(o,c,l,u)=>{rt(o,0,0,l,u,"#fbfbf7"),rt(o,0,u*.62,l,u*.14,"#2a9a4a"),rt(o,0,u*.76,l,u*.12,"#f08a24"),rt(o,0,u*.88,l,u*.12,"#2f6fd8"),ve(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900),c.fillStyle="#f3f6f0",c.fillRect(0,0,l,u),ve(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(c,l,u,h)=>{let f=["#d8352a","#2f6fd8","#f4f4f0"][o];rt(c,0,0,u,h,f),rt(c,8,10,u-16,h*.55,"#eef4f8");let d=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let m=0;m<4;m++)for(let x=0;x<6;x++){let g=14+x*17,p=18+m*30;c.fillStyle=d[(m*6+x+o)%d.length],c.fillRect(g,p,11,20),c.fillStyle="rgba(255,255,255,0.5)",c.fillRect(g+2,p+2,3,14),c.fillStyle="#2a2a2a",c.fillRect(g,p+23,11,3)}rt(c,10,h*.62,u-20,22,"#222"),rt(c,u-34,h*.66,14,22,"#bbb"),rt(c,14,h*.82,u-28,22,"#1b1b1b"),ve(c,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],u/2,h*.62+11,u-28,14,"#fff",700),Ln(c,i,u,h,.08),l.fillStyle="#f2f8ff",l.fillRect(8,10,u-16,h*.55);for(let m=0;m<4;m++)for(let x=0;x<6;x++)l.fillStyle=d[(m*6+x+o)%d.length],l.fillRect(14+x*17,18+m*30,11,20);l.fillStyle="#9fd0ff",l.fillRect(10,h*.62,u-20,22)});i.add("ac",128,88,(o,c,l,u)=>{rt(o,0,0,l,u,"#e9e9e4"),Pl(o,0,0,l,u,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(l*.4,u*.5,u*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let h=6;h<u*.36;h+=6)o.beginPath(),o.arc(l*.4,u*.5,h,0,7),o.stroke();for(let h=12;h<u-10;h+=6)rt(o,l*.78,h,l*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,c,l,u)=>{rt(o,0,0,l,u,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,l-6,u-6),ve(o,"\u54C1\u5DDD 580",l/2,16,l*.6,14,"#2f5a2f",700),ve(o,"\u3042 12-34",l/2,42,l*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(l-2,2),o.lineTo(l/2,u-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(l-10,7),o.lineTo(l/2,u-12),o.fill(),ve(o,"\u6B62\u307E\u308C",l/2,34,l*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,22),o.lineTo(l/2+22,50),o.lineTo(l/2+8,50),o.lineTo(l/2+8,88),o.lineTo(l/2-8,88),o.lineTo(l/2-8,50),o.lineTo(l/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(l/2,u/2,l/2-9,0,7),o.stroke(),ve(o,"30",l/2,u/2+2,l*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,c,l,u)=>{rt(o,0,0,l,u,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,l-6,u-6),cu(o,"\u672C\u753A\u4E8C\u4E01\u76EE",l/2,10,u-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(c,l,u,h)=>{let f=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];rt(c,0,0,u,h,f),rt(c,4,4,u-8,h*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),ve(c,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],u/2,h*.25,u-12,18,"#fff",900);for(let d=0;d<4;d++)rt(c,8,h*.58+d*8,u-16-d%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(c,l,u,h)=>{let f=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Qs(c,i,u,h,f),o===1)for(let d=10;d<u-6;d+=u/6)rt(c,d,10,u/6-8,h-20,"rgba(220,235,245,0.9)"),c.fillStyle="rgba(255,255,255,0.45)",c.fillRect(d,10,u/6-8,(h-20)*.4);else{rt(c,0,0,u,7,"rgba(255,255,255,0.4)");for(let d=u/3;d<u;d+=u/3)rt(c,d-1,0,2,h,"rgba(0,0,0,0.08)")}rt(c,0,h-6,u,6,"rgba(0,0,0,0.12)"),_i(c,u*.3,h-6,10,10,.2)});return i.add("kawara",256,256,(o,c,l,u)=>{rt(o,0,0,l,u,"#58617a");for(let h=0;h<u;h+=16)Pl(o,0,h,l,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let h=0;h<l;h+=20)rt(o,h,0,2,u,"rgba(0,0,0,0.18)");Ln(o,i,l,u,.12)}),i.add("wood",256,256,(o,c,l,u)=>{rt(o,0,0,l,u,"#6d4c37");for(let h=0;h<u;h+=14)rt(o,0,h,l,2,"rgba(25,15,8,0.4)"),rt(o,0,h+2,l,1,"rgba(255,220,180,0.07)");Ln(o,i,l,u,.16)}),i.add("block",256,128,(o,c,l,u)=>{rt(o,0,0,l,u,"#c9c7bf");for(let h=0;h<u;h+=32)for(let f=h/32%2?-32:0;f<l;f+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(f+1,h+1,62,30);for(let h=0;h<l;h+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(h+20,40,24,16);Ln(o,i,l,u,.15),_i(o,0,0,l,40,.1)}),i.add("lantern",64,96,(o,c,l,u)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),o.fill();for(let h=16;h<u-12;h+=7)rt(o,4,h,l-8,1.5,"rgba(0,0,0,0.2)");rt(o,l/2-14,2,28,8,"#222"),rt(o,l/2-14,u-10,28,8,"#222"),ve(o,"\u796D",l/2,u/2,l*.6,28,"#fff",900),c.fillStyle="#ff6a35",c.beginPath(),c.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),c.fill()}),i.add("busstop",96,96,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.stroke(),ve(o,"\u30D0\u30B9\u505C",l/2,u/2,l*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>rt(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,c,l,u)=>{o.save(),o.translate(l/2,u/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(l/2-22,u/2-6,44,18),o.fillRect(l/2-16,u/2-16,18,12),o.fillRect(l/2+8,u/2-13,5,7),o.beginPath(),o.arc(l/2-12,u/2+15,5,0,7),o.arc(l/2+12,u/2+15,5,0,7),o.fill(),ve(o,"\u8E0F\u5207",l/2,u/2+34,40,13,"#1b1b1b",900)}),i.add("xing_plate",128,48,(o,c,l,u)=>{rt(o,0,0,l,u,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,l-6,u-6),ve(o,"\u8E0F\u5207\u6CE8\u610F",l/2,u/2,l*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,c,l,u)=>{o.clearRect(0,0,l,u),rt(o,0,0,l,7,"#e9ebee"),rt(o,0,6,l,2,"rgba(60,70,80,0.5)"),rt(o,0,u-6,l,6,"#d5d8dc");for(let h=3;h<l;h+=9)rt(o,h,7,3,u-13,"#e2e5e9"),rt(o,h+2,7,1,u-13,"rgba(70,80,90,0.45)")}),i}function If(i){let e=Cl(1024,1024),n=e.getContext("2d"),s=cn(321),r={},a={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"]},o=(l,u,h)=>{let f=a[l],d=256,m=l==="pine",x=l==="sakura";n.save(),n.translate(u,h),n.beginPath(),n.rect(0,0,512,512),n.clip();let g=[[d,d,140]];for(let y=0;y<(m?6:7);y++){let T=s()*6.28,_=30+s()*85;g.push([d+Math.cos(T)*_,d+Math.sin(T)*_*(m?.4:.85),Math.min(70+s()*55,228-_)])}let p=x?2100:m?2600:2200;for(let y=0;y<p;y++){let T=g[Math.floor(s()*g.length)],_=s()*6.28,M=Math.sqrt(s())*T[2],b=T[0]+Math.cos(_)*M,A=T[1]+Math.sin(_)*M*(m?.45:1),v=1-A/512,E=M/T[2],P=Math.min(4,Math.max(0,Math.floor(v*2.2+s()*2.2+(E>.8?.6:0)-.3)));if(n.fillStyle=f[P],x){let L=7+s()*8;n.beginPath(),n.arc(b,A,L,0,7),n.fill(),s()<.25&&(n.fillStyle=f[4],n.beginPath(),n.arc(b-L*.3,A-L*.3,L*.4,0,7),n.fill())}else if(m)n.save(),n.translate(b,A),n.rotate((s()-.5)*1.2),n.fillRect(-11,-1.6,22,3.2),n.restore();else{let L=9+s()*10;n.beginPath(),n.ellipse(b,A,L,L*.55,s()*6.28,0,7),n.fill()}}if(x)for(let y=0;y<14;y++){n.strokeStyle="rgba(150,90,100,0.35)",n.lineWidth=1.5;let T=d+(s()-.5)*300,_=d+60+s()*120;n.beginPath(),n.moveTo(T,_),n.lineTo(T+(s()-.5)*40,_-20-s()*30),n.stroke()}n.restore(),r[l]={u0:u/1024,u1:(u+512)/1024,v0:1-(h+512)/1024,v1:1-h/1024}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512);let c=new vn(e);return c.colorSpace=Me,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:r}}var un=[1,1,1],st={pole:dt("#b1b0a9"),metal:dt("#8d9198"),black:dt("#2a2b30"),yellow:dt("#f2c230"),white:dt("#f4f3ee"),trans:dt("#a0a3a8"),lampPole:dt("#727780"),lampHead:dt("#dcdcd6"),trunk:dt("#6a5444"),trunkDark:dt("#4b3a33"),leaf:dt("#86ba4c"),leafShade:dt("#2c6640"),sakura:dt("#ffd3e3"),sakuraShade:dt("#de94b4"),pine:dt("#55874c"),pineShade:dt("#1d4632"),cedar:dt("#41713e"),cedarShade:dt("#1b3e2a"),roof:dt("#bdbbb3"),parapet:dt("#dcdad2"),pipe:dt("#c4c4bf"),orange:dt("#f07a22"),red:dt("#d8352a"),vermilion:dt("#e2482c"),concrete:dt("#c9c7c0"),stone:dt("#a8a69e"),terracotta:dt("#b8653d"),rail:dt("#eeeeea")},cs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(dt),o_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(dt),du=null;function Df(i){du=i}var fo=i=>du.uv(i),a_=(i,t)=>du.has(t+"2")&&i()<.5?t+"2":t;function pu(i,t,e,n,s=0){let r=new Ht().makeRotationY(s);return r.setPosition(t,e,n),new Ht().multiplyMatrices(i,r)}var Ie=(i,t,e,n,s,r,a,o=un)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o,fo(a)),nr=(i,t,e,n,s,r,a,o=un)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],o,fo(a)),ir=(i,t,e,n,s,r,a,o=un)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],o,fo(a)),tr=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?fo(r):void 0);function mu(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,st.pole);for(let l=0;l<5;l++)s.cyl(0,.25+l*.3,0,.185,.185,.15,10,l%2?st.black:st.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,st.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,st.metal);let a=[-.85,-.3,.3,.85],o=[-.7,0,.7];for(let l of a)s.cyl(0,r-.53,l,.05,.035,.17,6,st.white);for(let l of o)s.cyl(0,r-1.65,l,.045,.03,.15,6,st.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,st.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,st.trans),s.box(-.06,7.2,.12,.06,7.35,.26,st.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,st.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,st.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,st.concrete);for(let l=2.4,u=0;l<r-2;l+=.45,u++)s.rod([0,l,0],[u%2?.3:-.3,l,0],.015,.015,3,st.metal);return i.atlas.setM(t),Ie(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&Ie(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(l=>[0,r-.4,l]),...o.map(l=>[0,r-1.52,l]),[0,5.72,-.3],[0,5.72,.3]].map(l=>new F(l[0],l[1],l[2]).applyMatrix4(t))}function gu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,st.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,st.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,st.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,st.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Nf(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,st.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,st.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,st.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Uf(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,dt("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,dt("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,dt("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,un),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function xu(i,t,e){let n=Math.floor(e()*3),s=[st.red,dt("#2f6fd8"),st.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Mn(s,.8)),i.atlas.setM(t),Ie(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function fu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,dt("#e6e6e1")),i.atlas.setM(t),Ie(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function Ff(i,t,e){let n=i.color;n.setM(t);let s=e.pick([dt("#c8ccd2"),dt("#c0392b"),dt("#2c6fb7"),dt("#2b2b2b"),dt("#e8c84a"),dt("#e98fb0")]);for(let a of[-.52,.52])for(let o=0;o<12;o++){let c=o/12*Math.PI*2,l=(o+1)/12*Math.PI*2;n.rod([a+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[a+Math.cos(l)*.33,.34+Math.sin(l)*.33,0],.022,.022,3,st.black)}let r=(a,o)=>n.rod(a,o,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,st.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,st.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,st.metal)}function Bf(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,st.orange),e.cyl(0,.04,0,.16,.03,.68,10,st.orange),e.cyl(0,.32,0,.115,.095,.12,10,st.white,!1)}function Of(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,st.terracotta),i.leaf.setM(t),er(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function sr(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,st.metal),i.atlas.setM(t),n<0?ir(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):nr(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function _u(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,st.orange);let s=0,r=3.25,a=.42,o=14;for(let c=0;c<o;c++){let l=c/o*Math.PI*2,u=(c+1)/o*Math.PI*2,h=(f,d,m)=>[e*m,r+Math.sin(f)*d,s+Math.cos(f)*d-.25];tr(n,h(0,0,-.02),h(e>0?u:l,a,-.02),h(e>0?l:u,a,-.02),st.orange),tr(n,h(0,0,-.035),h(e>0?u:l,a*.86,-.035),h(e>0?l:u,a*.86,-.035),dt("#dfe9f2"))}}var zf=null;function kf(i){zf=i}function er(i,t,e,n,s,r,a,o,c,l,u,h,f=0){let d=zf[a];for(let m=0;m<o;m++){let x=c()*2-1,g=c()*2-1,p=c()*2-1;f&&(g=1.2+c());let y=Math.hypot(x,g,p)||1;x/=y,g/=y,p/=y;let T=-p,_=0,M=x;y=Math.hypot(T,M),y<.1&&(T=1,M=0,y=1),T/=y,M/=y;let b=g*M-p*_,A=p*T-x*M,v=x*_-g*T,E=c()*6.28,P=Math.cos(E),L=Math.sin(E),R=T*P+b*L,U=_*P+A*L,C=M*P+v*L,D=b*P-T*L,N=A*P-_*L,V=v*P-M*L,G=r*(1.45+c()*.5)/2,B=e+(c()-.5)*r*.6,z=n+(c()-.5)*r*(f?.15:.5),X=s+(c()-.5)*r*.6,ht=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ut,Gt])=>[B+(R*Ut+D*Gt)*G,z+(U*Ut+N*Gt)*G*(f?.6:1),X+(C*Ut+V*Gt)*G]),Et=ht.map(Ut=>{let Gt=Ut[0]-t[0],K=Ut[1]-t[1],et=Ut[2]-t[2],_t=Math.hypot(Gt,K,et)||1;Gt/=_t,K/=_t,et/=_t;let Bt=Ut[0]-e,ct=Ut[1]-n,Wt=Ut[2]-s;return _t=Math.hypot(Bt,ct,Wt)||1,[Gt*.7+Bt/_t*.3,K*.7+ct/_t*.3+(f?.5:0),et*.7+Wt/_t*.3]}),$t=ht.map(Ut=>pf(u,l,.45+.55*Math.max(0,Math.min(1,(Ut[1]-h[0])/(h[1]-h[0])))));i.leaf.card(ht,Et,d,$t)}}function l_(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,st.trunk);for(let l=0;l<3;l++){let u=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,st.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",o=[s*.45,s*1.15],c=7+Math.floor(e()*3);for(let l=0;l<c;l++){let u=e()*6.28,h=(.6+e())*1.3*n;er(i,r,Math.cos(u)*h,s*(.62+e()*.3),Math.sin(u)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],o)}er(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],o)}function c_(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,st.trunkDark);let r=[];for(let l=0;l<5;l++){let u=l/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(u)*h,s*(.62+e()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,st.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,st.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],o=[s*.5,s*1.1],c=[.72,.62,.72];for(let l of r)for(let u=0;u<2;u++)er(i,a,l[0]+(e()-.5)*1.4*n,l[1]+e()*.9*n,l[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],c,o);er(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],c,o)}function u_(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,o=[r*.4,a*.45,.2],c=[r,a*.8,-.2];s.rod([0,0,0],o,.2*n,.15*n,6,st.trunkDark),s.rod(o,c,.15*n,.09*n,6,st.trunkDark),i.leaf.setM(t);let l=[[c[0],c[1]+.3,c[2],1.7],[o[0]+1.4*n,o[1]+.8,.5,1.3],[o[0]-1.3*n,o[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[u,h,f,d]of l)s.rod(u>o[0]?o:c,[u,h-.2,f],.07*n,.04*n,4,st.trunkDark),er(i,[u,h-.8,f],u,h,f,d*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function h_(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,st.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,st.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,st.cedar)}var f_={broad:l_,sakura:c_,pine:u_,cedar:h_},Lf={};function Hi(i,t,e,n,s=1){let r=Math.floor(n()*4),a=e+r,o=Lf[a];if(!o){let l={color:new He,foliage:new He,leaf:new He({uv:!0})};f_[e](l,new Ht,cn(1e3+r*77+e.length*13),1),o=Lf[a]={c:l.color.toArrays(),f:l.foliage.toArrays(),l:l.leaf.toArrays()}}let c=t.clone().scale(new F(s,s,s));i.color.stamp(o.c,c),i.foliage.stamp(o.f,c),i.leaf.stamp(o.l,c)}function po(i,t,e,n,s,r,a){let o=Math.max(1,Math.round(e/3)),c=e/o;for(let l of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<o;h++){let f=u>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(l>0?nr:ir)(i,l*t/2,h*c,(h+1)*c,n[u],n[u+1],f,s)}}function mo(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],st.roof);let a=.5,o=.15;if(i.box(-t/2,n,-.02,t/2,n+a,o,st.parapet),i.box(-t/2,n,e-o,t/2,n+a,e,st.parapet),i.box(-t/2,n,0,-t/2+o,n+a,e,st.parapet),i.box(t/2-o,n,0,t/2,n+a,e,st.parapet),s()<.4){let c=(s()-.5)*t*.5,l=e*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+u-.05,n,l+h-.05,c+u+.05,n+1,l+h+.05,st.metal);i.cyl(c,n+1,l,.85,.85,1.3,12,dt("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,st.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,st.metal)}function Hf(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,st.black);let r="vs"+Math.floor(s()*10);ir(i.atlas,t-.065,-.88,-.12,e,n,r),nr(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,st.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,st.metal)}function us(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,st.concrete,null,{noBottom:!0}),n.type){case"shop":return d_(i,t,e,n);case"apt":return p_(i,t,e,n);case"office":return m_(i,t,e,n);case"konbini":return g_(i,t,e,n);case"house":return x_(i,t,e,n);case"tower":return __(i,t,e,n)}}function d_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.6,f=3,d=h+(a-1)*f,m=Math.max(1,Math.round(s/3)),x=s/m,g=-s/2,p=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let M=0;M<m;M++)Ie(l,g+M*x,g+(M+1)*x,0,h,0,a_(e,"shop_"+p[M%p.length]));let y=e.pick([0,0,1,5,0,1]),T=[0,h];for(let M=1;M<a;M++)T.push(h+M*f);for(let M=1;M<a;M++)for(let b=0;b<m;b++){let A=b%2===1&&e()<.3?5:y;Ie(l,g+b*x,g+(b+1)*x,T[M],T[M+1],0,"win"+A+(e()<c?"L":""),o)}po(l,s,r,T,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Mn(o,.8)),mo(u,s,r,d,e);let _=s*.94;if(u.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,st.black),Ie(l,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let M=e.pick(o_),b=h-.85;u.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],M),u.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],Mn(M,.85))}if(a>=2&&e()<.65){let M=(e()<.5?1:-1)*(s/2-.35);Hf(i,M,h+.3,Math.min(d-.15,h+2.8),e)}for(let M=1;M<a;M++)if(e()<.4){let b=Math.floor(e()*m),A=g+b*x+.15,v=g+(b+1)*x-.15,E=T[M];u.box(A,E-.12,-.9,v,E,0,st.parapet),Ie(l,A,v,E,E+1,-.9,"rail"),ir(l,A,-.9,0,E,E+1,"rail"),nr(l,v,-.9,0,E,E+1,"rail"),e()<.6&&fu(i,t,(A+v)/2+.6,E,-.75)}else if(e()<.35){let b=Math.floor(e()*m);fu(i,t,g+(b+.5)*x,T[M]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}u.cyl(g+.12,0,-.08,.05,.05,d,6,st.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,dt("#d9d9d3")),a>=3&&e()<.18&&Vf(i,s,d,r,e)}function Vf(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,o=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,e,o,c+.06,e+1.2+a,o+.12,st.metal);i.color.box(-r/2,e+1.2,o+.12,r/2,e+1.2+a,o+.3,st.metal),Ie(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,o+.115,"bb"+Math.floor(s()*4))}function p_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.2,f=2.95,d=h+(a-1)*f,m=Math.max(2,Math.round(s/3.2)),x=s/m,g=-s/2,p=[0,h];for(let _=1;_<a;_++)p.push(h+_*f);for(let _=0;_<m;_++)Ie(l,g+_*x,g+(_+1)*x,0,h,0,_===Math.floor(m/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),_===Math.floor(m/2)?un:o);let y="bal"+Math.floor(e()*3),T=Mn(o,.97);for(let _=1;_<a;_++){let M=p[_];for(let b=0;b<m;b++)Ie(l,g+b*x,g+(b+1)*x,M,p[_+1],0,"win2"+(e()<c?"L":""),o);u.box(g,M-.15,-1.3,-g,M,0,T),u.box(g,M,-1.3,-g,M+1.1,-1.18,T,null,{noBottom:!0});for(let b=0;b<m;b++)Ie(l,g+b*x,g+(b+1)*x,M,M+1.1,-1.305,y,o);for(let b=0;b<=m;b++)u.box(g+b*x-.05,M,-1.18,g+b*x+.05,M+2.4,0,Mn(o,.92));i.atlas.setM(t);for(let b=0;b<m;b++)e()<.55&&(fu(i,t,g+(b+.78)*x,M,-.55),i.atlas.setM(t),i.color.setM(t))}u.box(g,d-.15,-1.3,-g,d,0,T),po(l,s,r,p,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Mn(o,.8)),mo(u,s,r,d,e,!0)}function m_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=4,f=3.4,d=h+(a-1)*f,m=Math.max(2,Math.round(s/3)),x=s/m,g=-s/2,p=[0,h];for(let y=1;y<a;y++)p.push(h+y*f);for(let y=0;y<m;y++)Ie(l,g+y*x,g+(y+1)*x,0,h,0,y===1?"shop_door":"shop_glass");for(let y=1;y<a;y++)for(let T=0;T<m;T++)Ie(l,g+T*x,g+(T+1)*x,p[y],p[y+1],0,"win3"+(e()<c?"L":""),o);po(l,s,r,p,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Mn(o,.8)),mo(u,s,r,d,e,!0),e()<.6&&Hf(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(d-.3,h+4.5),e),e()<.3&&Vf(i,s,d,r,e)}function g_(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,o=i.color,c=4.4,l=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let f=0;f<u;f++)Ie(a,l+f*h,l+(f+1)*h,0,3.4,0,"shop_konbini");o.box(l,3.4,-.35,-l,c,0,st.white),Ie(a,l,-l,3.4,c,-.355,"konbini_band"),po(a,s,r,[0,c],dt("#f2f2ee"),e,0),mo(o,s,r,c,e)}function x_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=2.9,f=a*h,d=-s/2,m=e()<.5,x=Math.max(2,Math.round(s/3)),g=s/x,p=[];for(let v=0;v<=a;v++)p.push(v*h);let y=m?un:o;for(let v=0;v<a;v++)for(let E=0;E<x;E++){let P=m?"win4":"win0";v===0&&E===0?P="shop_house":e()<c&&(P+="L"),Ie(l,d+E*g,d+(E+1)*g,p[v],p[v+1],0,P,P==="shop_house"?un:y)}po(l,s,r,p,m?dt("#9a7a62"):o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],Mn(o,.75));let T=.6,_=Math.min(2.4,r*.32),M=fo("kawara"),b=dt("#c8ccd8");l.quad([s/2+T,f-.25,-T],[-s/2-T,f-.25,-T],[-s/2-T,f+_,r/2],[s/2+T,f+_,r/2],b,M),l.quad([-s/2-T,f-.25,r+T],[s/2+T,f-.25,r+T],[s/2+T,f+_,r/2],[-s/2-T,f+_,r/2],b,M);let A=m?dt("#7a5a42"):o;if(tr(u,[-s/2,f,0],[-s/2,f,r],[-s/2,f+_-.1,r/2],A),tr(u,[s/2,f,r],[s/2,f,0],[s/2,f+_-.1,r/2],A),u.box(-s/2-T,f+_-.05,r/2-.15,s/2+T,f+_+.18,r/2+.15,dt("#3d4456")),a>1){let v=h+.05;l.quad([s/2+.1,v-.3,-.75],[-s/2-.1,v-.3,-.75],[-s/2-.1,v+.05,0],[s/2+.1,v+.05,0],b,M)}if(n.fence){let v=-n.fence,E=1.2;for(let[P,L]of[[-s/2,-1],[.4,s/2]])u.box(P,0,v-.08,L,E,v+.08,st.concrete),Ie(l,P,L,0,E,v-.085,"block")}}function __(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.4,f=a*h,d=Math.max(2,Math.round(s/6)),m=s/d,x=-s/2,g=e()<.5?"win3":"win2",p=[];for(let _=0;_<=a;_++)p.push(_*h);for(let _=0;_<a;_++)for(let M=0;M<d;M++)Ie(l,x+M*m,x+(M+1)*m,p[_],p[_+1],0,g+(e()<c?"L":""),o);let y=Math.max(1,Math.round(r/6)),T=r/y;for(let _ of[-1,1])for(let M=0;M<a;M++)for(let b=0;b<y;b++)(_>0?nr:ir)(l,_*s/2,b*T,(b+1)*T,p[M],p[M+1],g+(e()<c?"L":""),o);mo(u,s,r,f,e,!0)}function Gf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([dt("#f2f2ee"),dt("#c9cdd2"),dt("#2b2f38"),dt("#b33a32"),dt("#9fc6c0"),dt("#e7d9b4"),dt("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,Mn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,dt("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,st.black)}function Wf(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?st.black:st.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,st.black),e.box(-.5,2.55,-.06,.5,2.95,.02,st.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,st.black);e.box(-.78,-.9,-.34,.3,0,.34,st.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,dt("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,st.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new Ht().multiplyMatrices(t,new Ht().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?st.black:st.yellow)}e.setM(t),i.atlas.setM(t),Ie(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Xf(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,st.stone),e.cyl(0,.25,0,.14,.12,.95,8,st.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,st.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,Mn(st.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,Mn(st.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,un),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,un)}function vu(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,st.vermilion),s.cyl(0,0,r,.38,.38,.5,12,st.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,st.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,st.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,st.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,st.vermilion)}function qf(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,dt("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,dt("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,dt("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,dt("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,st.metal),n.box(1.1,0,.3,1.2,.42,.55,st.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,st.metal),i.atlas.setM(t),ir(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),nr(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Yf(i,t,e,n=1){let s=i.color;s.setM(t);let r=Mn(st.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],o=.55*n;for(let c of a)s.rod([0,o,0],[c[0]*.95*n,o+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function Zf(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,dt("#8f8a80"),dt("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,st.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,st.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,st.black),e.cyl(0,18.6,0,1,.25,1.2,12,st.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function Jf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([dt("#f4f4f0"),dt("#3b6ea5"),dt("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),tr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),tr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,st.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,st.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,dt("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,st.metal)}function $f(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,st.stone),n.box(-.55,.5,.9,.55,1.5,1.8,dt("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],dt("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],dt("#4d5468")),vu(i,pu(t,0,0,-.3,Math.PI/2),.75,2.2)}var Ye=60,y_=[.7,.9,1.5,1.9,2,2.1,2.65,3.05,3.4],M_=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],yu=32,Il=[.025,.026,.032],Vi=(i,t)=>(i%t+t)%t,rr=(i,t)=>{let e=lo(i);return!!e&&Math.abs(i-e.s)<t},Mu=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=n(r,a);this.P.push(o[0],o[1],o[2]),this.N.push(o[3],o[4],o[5]),this.SU.push(o[6],o[7]),this.ZW.push(o[8],o[9],o[10],o[11]),this.RK.push(o[12],o[13])}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let o=s+r*e+a,c=o+1,l=o+e,u=l+1;this.I.push(o,c,l,c,u,l)}}build(){let t=new le;return t.setAttribute("position",new Xt(this.P,3)),t.setAttribute("normal",new Xt(this.N,3)),t.setAttribute("su",new Xt(this.SU,2)),t.setAttribute("zw",new Xt(this.ZW,4)),t.setAttribute("rk",new Xt(this.RK,2)),t.setIndex(this.I),t.computeBoundingSphere(),t}},Ll=class{constructor(t,e,n,s){this.path=e,this.M=n,this.foamMat=s,this.group=new Ce,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/Ye),s=Math.floor((t+this.ahead)/Ye);for(let[a,o]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(o),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);let r=performance.now();for(;;){if(!this.job){let o=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){o=c;break}if(o<0)return 0;this.job={c:o,it:this.gen(o)}}let a=this.job.it.next();if(a.done&&(this.chunks.set(this.job.c,a.value),this.group.add(a.value.group),this.job=null),performance.now()-r>e)return 1}}dispose(t){this.group.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}*gen(t){let e=this.path,n=t*Ye,s=n+Ye,r=e.at(n),a=r.x,o=r.z,c=cn(Math.floor(xi(t,777)*4294967295)),l={atlas:new He({uv:!0}),color:new He,foliage:new He,leaf:new He({uv:!0}),lamp:new He({color:!1}),pool:new He({uv:!0,color:!1})},u=new Mu,h=[],f={},d={},m=(v,E)=>{e.at(v,d);let P=Sn(v,"rw");return d.y+lu(v,E,d.y,P)},x=v=>{let E=tn(v);return[E.city,E.sakura,E.coast,E.country]},g=(v,E,P)=>(e.at(v,f),[f.x+f.rx*E-a,P,f.z+f.rz*E-o]),p=(v,E,P,L=0,R=!0)=>{e.at(v,f);let U=f.h-Math.PI/2+(R&&E<0?Math.PI:0)+L,C=new Ht().makeRotationY(U);return C.setPosition(f.x+f.rx*E-a,P,f.z+f.rz*E-o),C},y=(v,E,P=0,L=0,R=!0)=>p(v,E,m(v,E)+P,L,R),T=v=>e.at(v,d).y,_=v=>Sn(v,"rw"),M=v=>{let E=tn(v);return E.city+E.sakura>.5?E.city>=E.sakura?3:2.6:0};{let E=_(n+Ye/2),P=(()=>{let C=[0,...y_].map(D=>D);return M_.forEach(D=>C.push(D-E)),C})(),L=[...P.slice().reverse().map(U=>-U),...P],R=L.length;u.grid(21,R,(U,C)=>{let D=n+U/20*Ye,N=_(D),V=L[C],G=V<0||V===0&&C<R/2?V-N:V+N;e.at(D,f);let B=f.y,z=B+lu(D,G,B,N),X=.6,ht=(m(D,G+X)-m(D,G-X))/(2*X),Et=(m(D+X,G)-m(D-X,G))/(2*X),$t=-ht*f.rx-Et*f.fx,Ut=1,Gt=-ht*f.rz-Et*f.fz,K=Math.hypot($t,Ut,Gt);$t/=K,Ut/=K,Gt/=K;let et=x(D);return[f.x+f.rx*G-a,z,f.z+f.rz*G-o,$t,Ut,Gt,Vi(D,os),G,et[0],et[1],et[2],et[3],N,0]})}yield,u.grid(31,2,(E,P)=>{let L=n+E/30*Ye,R=_(L),U=P?R:-R;e.at(L,f);let C=f.y,D=(T(L+1)-T(L-1))/2,N=-D*f.fx,V=1,G=-D*f.fz,B=Math.hypot(N,V,G),z=x(L);return[f.x+f.rx*U-a,C,f.z+f.rz*U-o,N/B,V/B,G/B,Vi(L,os),U,z[0],z[1],z[2],z[3],R,1]});{let v=[];for(let L=0;L<=30;L++){let R=n+L/30*Ye;v.push({s:R,sw:M(R)})}let E=[],P=null;for(let L of v)L.sw>0?(P||(P=[],E.push(P)),P.push(L)):P=null;for(let L of E)if(!(L.length<2))for(let R of[-1,1])u.grid(L.length,2,(U,C)=>{let{s:D,sw:N}=L[U],V=_(D),G=R*(C===(R>0?0:1)?V:V+N);e.at(D,f);let B=x(D);return[f.x+f.rx*G-a,f.y+.15,f.z+f.rz*G-o,0,1,0,Vi(D,os),G,B[0],B[1],B[2],B[3],V,2]}),u.grid(L.length,2,(U,C)=>{let{s:D}=L[U],N=_(D),V=R*N,G=R>0?C:1-C;e.at(D,f);let B=x(D);return[f.x+f.rx*V-a,f.y+(G?.15:0),f.z+f.rz*V-o,-R*f.rx,0,-R*f.rz,Vi(D,os),V,B[0],B[1],B[2],B[3],N,3]})}yield,this.placePoles(t,n,s,c,l,p,m,g,T,_);{let v=Math.ceil((n-Js)/Zs),E=$s(v);E<s&&ao(E)&&this.placeCrossing(l,u,E,p,T,_,m,M,a,o)}yield;for(let v=n;v<s;v+=4)we(v)==="coast"&&tn(v).coast>.45&&this.guardrail(l,v,Math.min(v+4,s),g,T,_);yield*this.placeCity(l,c,n,s,p,y,T,_,M,m),yield*this.placeSakura(l,c,n,s,p,y,T,_,m),this.placeCoast(l,c,n,s,p,y,T,_,m,h,g),yield,this.placeCountry(l,c,n,s,p,y,T,_,m),yield;let b=new Ce,A=(v,E,P,L,R=0)=>{if(!v)return;let U=new ee(v,E);U.castShadow=P,U.receiveShadow=L,U.renderOrder=R,b.add(U)};if(A(u.build(),this.M.ground,!1,!0),yield,A(l.atlas.build(),this.M.atlas,!0,!0),yield,A(l.color.build(),this.M.color,!0,!0),yield,A(l.foliage.build(),this.M.foliage,!0,!0),A(l.leaf.build(),this.M.leaf,!0,!0),yield,A(l.lamp.build(),this.M.lamp,!1,!1),A(l.pool.build(),this.M.pool,!1,!1,2),h.length){let v=new le,E=[],P=[],L=[];h.forEach((R,U)=>{for(let C of R)E.push(C[0],C[1],C[2]),P.push(C[3],C[4]);if(U>0){let C=(U-1)*2;L.push(C,C+2,C+1,C+1,C+2,C+3)}}),v.setAttribute("position",new Xt(E,3)),v.setAttribute("su",new Xt(P,2)),v.setIndex(L),v.computeBoundingSphere(),A(v,this.foamMat,!1,!1,1)}return b.position.set(a-this.origin.x,0,o-this.origin.z),{group:b,ox:a,oz:o,s0:n}}poleSpec(t){let e=t*yu+6,n=we(e);if(n==="sakura"||rr(e,6))return null;let s=Sn(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:s+2.35;return{s:e,u:r,z:n}}placePoles(t,e,n,s,r,a,o,c,l,u){let h=Math.ceil((e-6)/yu),f=Math.floor((n-6-.001)/yu);for(let d=h;d<=f;d++){let m=this.poleSpec(d);if(!m)continue;let x=m.z==="city"?l(m.s)+.15:o(m.s,m.u),g=a(m.s,m.u,x),p=cn(Math.floor(xi(d,31)*4294967295)),y=mu(r,g,p,{trans:p()<.45});m.z==="city"&&d%2===0&&Nf(r,g,-.11);let T=this.poleSpec(d+1);if(T){let _=T.z==="city"?l(T.s)+.15:o(T.s,T.u),M=a(T.s,T.u,_),b=mu({color:new He,atlas:new He({uv:!0})},M,cn(Math.floor(xi(d+1,31)*4294967295)),{});r.color.setM(new Ht);for(let A=0;A<y.length;A++){let v=y[A],E=b[A],P=.35+p()*.4+(A>=7?.3:0);r.color.wire([v.x,v.y,v.z],[E.x,E.y,E.z],P,A>=7?.022:.015,Il,10)}}if(m.z==="city"){r.color.setM(new Ht);let _=1+Math.floor(p()*3);for(let M=0;M<_;M++){let b=y[7+M%2],A=(p()-.5)*14,v=u(m.s+A),E=p()<.55,P=E?-(v+3.15):v+3.15,L=c(m.s+A,P,l(m.s+A)+5.2+p()*2.5);r.color.wire([b.x,b.y,b.z],L,.25+p()*.4,.012,Il,8)}}}}placeCrossing(t,e,n,s,r,a,o,c,l,u){let h=this.path.at(n,{}),f=h.y,d=a(n),m=c(n),x=d+m+.2,g=150,p=f+.18,y=tn(n),T=[y.city,y.sakura,y.coast,y.country],_=(C,D,N)=>[h.x+h.fx*C+h.rx*D-l,N,h.z+h.fz*C+h.rz*D-u],M=[7.6,4.7,-4.7,-7.6];for(let[C,D]of[[-g,-x],[x,g]])e.grid(25,M.length,(V,G)=>{let B=C+(D-C)*V/24,z=M[G],ht=Math.abs(z)<5?p:Math.min(p-.05,o(n+z,B)-.03),Et=_(z,B,ht);return[Et[0],Et[1],Et[2],0,1,0,z,B,T[0],T[1],T[2],T[3],d,5]});let b=(C,D,N)=>e.grid(2,2,(V,G)=>{let B=V?D:C,z=G?-3.3:3.3,X=_(z,B,N);return[X[0],X[1],X[2],0,1,0,z,B,T[0],T[1],T[2],T[3],d,6]});b(-d,d,f+.03),m>0&&(b(-x,-d,f+.165),b(d,x,f+.165));let A=(C,D,N,V)=>e.grid(2,2,(G,B)=>{let z=G?V:N,X=B?D:C,ht=_(X,z,f+.025);return[ht[0],ht[1],ht[2],0,1,0,X,z,T[0],T[1],T[2],T[3],d,7]});A(-7.15,-7.6,-d+.3,-.12),A(7.6,7.15,.12,d-.3);let v=s(n,0,f,-Math.PI/2,!1),E=t.color;E.setM(v);let P=[.42,.4,.38],L=[.3,.29,.28],R=[.55,.57,.6];for(let C of[-2,2])for(let D of[-.5335,.5335]){let N=-(C+D);for(let[V,G]of[[-g,-x],[x,g]])E.box(V,.26,N-.035,G,.34,N+.035,P);E.box(-x,0,N-.035,x,.04,N+.035,L)}let U=[-146,-104,-64,-26,26,64,104,146];for(let C of U){for(let D of[-4.95,4.95])E.box(C-.12,.18,D-.12,C+.12,7.4,D+.12,R);E.box(C-.1,6.95,-5.15,C+.1,7.2,5.15,R);for(let D of[-2,2])E.box(C-.04,6.3,-D-.04,C+.04,6.95,-D+.04,R)}for(let C of[-2,2])for(let D=0;D<U.length-1;D++)E.wire([U[D],5.35,-C],[U[D+1],5.35,-C],.05,.011,Il,6),E.wire([U[D],6.4,-C],[U[D+1],6.4,-C],.45,.011,Il,8);for(let C of Al(this.path,n)){let D=new Ht().makeRotationY(C.yaw);D.setPosition(C.x-l,C.y,C.z-u),Wf(t,D)}sr(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(m>0?1:0)),"sign_xing",1,2.2,.85),sr(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(m>0?1:0)),"sign_xing",-1,2.2,.85)}guardrail(t,e,n,s,r,a){t.color.setM(new Ht);let o=Math.max(1,Math.round((n-e)/2));for(let c=0;c<o;c++){let l=e+(n-e)*c/o,u=e+(n-e)*(c+1)/o,h=-(a(l)+.95),f=-(a(u)+.95),d=r(l),m=r(u),x=(M,b,A)=>s(M,b,A),g=x(l,h,d+.52),p=x(u,f,m+.52),y=x(l,h,d+.84),T=x(u,f,m+.84);t.color.quad(g,p,T,y,st.rail),t.color.quad(p,g,y,T,[.62,.64,.66]);let _=s(l,h-.05,d);t.color.box(_[0]-.05,d,_[2]-.05,_[0]+.05,d+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,o,c,l,u){for(let d of[-1,1]){let m=n+e()*2;for(;m<s-2;){if(tn(m).city<.62){m+=4;continue}{let P=lo(m+6);if(P&&m<P.s+8.5&&m+14>P.s-8.5){m=Math.max(m+1,P.s+8.5);continue}}let x=Vi(m,150);if(x>143||x<6){m+=3;continue}let g=c(m),p=l(m)||3,y=g+p+.15,T=e(),_=T<.42?"shop":T<.58?"apt":T<.68?"office":T<.82?"house":T<.88?"konbini":T<.94?"parking":"gap",M=_==="shop"?e.range(5,9):_==="apt"?e.range(10,16):_==="office"?e.range(10,14):_==="house"?e.range(7,9.5):_==="konbini"?e.range(12,14):_==="parking"?e.range(7,11):e.range(2,3.5);if(m+M>s){if(s-m<5||_==="konbini")break;M=s-m-.2}let b=m+M/2,A=o(b),v=e.pick(cs),E=.42;if(_==="parking"){let P=r(b,d*(y+3),A+.15);e()<.8&&Gf(t,pu(P,0,0,.5,(e()-.5)*.1),e),t.color.setM(P),t.color.box(-M/2,0,5.5,M/2,1.6,5.7,st.concrete)}else if(_!=="gap"){let P=r(b,d*y,A+.15),L={type:_,w:M,d:_==="apt"||_==="office"?e.range(10,14):e.range(8,12),floors:_==="shop"?e.int(2,4):_==="apt"?e.int(4,9):_==="office"?e.int(4,8):2,tint:v,litP:E,fence:_==="house"&&e()<.5?1.2:0};if(us(t,P,e,L),_!=="house"&&e()<.28&&xu(t,r(b+(e()-.5)*(M-1.2),d*(y-.42),A+.15),e),(_==="shop"||_==="konbini")&&e()<.3)for(let R=0;R<1+e()*3;R++)Ff(t,r(b-M/2+.8+R*.55,d*(y-.75),A+.15,Math.PI/2+.1),e);if(_==="house"&&e()<.6)for(let R=0;R<2+e()*3;R++)Of(t,r(b+1+R*.5,d*(y-.3),A+.15),e);if(e()<.03)for(let R=0;R<3;R++)Bf(t,r(b+R*.9,d*(g+.35),A))}m+=M+e.range(.05,.5),yield}for(let x=n+e()*10;x<s-8;x+=e.range(14,26)){if(tn(x).city<.7||e()<.3||rr(x,18))continue;let g=c(x),p=r(x,d*(g+3.2+e.range(14,20)),o(x)+.1);us(t,p,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(cs),litP:.4})}if(tn(n+30).city>.7&&e()<.65){let x=n+e()*Ye;if(rr(x,24))continue;let g=r(x,d*e.range(55,150),o(x));us(t,g,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(cs),litP:.45})}}let h=Math.ceil(n/150),f=Math.floor((s-.01)/150);for(let d=h;d<=f;d++){let m=d*150;if(we(m)!=="city")continue;let x=c(m);sr(t,r(m-1,-(x+.4),o(m)+.15),"sign_blue",1),sr(t,r(m-6,-(x+.4),o(m)+.15),"sign_stop",1,2.1,.75),_u(t,r(m+7,x+.4,o(m)+.15),-1),d%3===0&&sr(t,r(m+20,-(x+.4),o(m)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,o,c,l){for(let f of[-1,1]){for(let d=n+e()*4;d<s;d+=e.range(7.5,10)){if(tn(d).sakura<.45)continue;let m=c(d);Hi(t,a(d,f*(m+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&Hi(t,a(d+3,f*(m+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let d=n+(f>0?0:12);d<s;d+=24){if(we(d)!=="sakura")continue;let m=c(d);Uf(t,r(d,f*(m+2.25),o(d)+.15)),Vi(d,48)<24&&Xf(t,r(d+6,f*(m+3),l(d+6,f*(m+3))))}for(let d=n+e()*15;d<s;d+=e.range(14,24)){if(we(d)!=="sakura"||e()<.35)continue;let m=c(d);us(t,a(d,f*(m+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(cs),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+Ye/2)/480)*480+240;h>=n&&h<s&&we(h)==="sakura"&&vu(t,r(h,0,o(h),0,!1),c(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,o,c,l,u,h){for(let m=0;m<=20;m++){let x=n+m/20*Ye;if(tn(x).coast<.85){u.length&&u[u.length-1]!==null&&u.push(null);continue}let p=c(x),y=p+11,T=p+19,_=h(x,-y,zi+.06),M=h(x,-T,zi+.06);u.push([[_[0],_[1],_[2],Vi(x,os),0],[M[0],M[1],M[2],Vi(x,os),1]])}let f=u.indexOf(null);f>=0&&(u.length=f),u.length<2&&(u.length=0);for(let m=n+e()*6;m<s;m+=e.range(5,9)){if(we(m)!=="coast")continue;let x=c(m);e()<.7&&Hi(t,a(m,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&Hi(t,a(m+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let m=n+4;m<s;m+=e.range(18,30)){if(we(m)!=="coast"||e()<.4)continue;let x=c(m),g=3+Math.floor(e()*5);for(let p=0;p<g;p++){let y=-(x+e.range(12,17)),T=m+e.range(-3,3);Yf(t,r(T,y,Math.max(l(T,y),zi-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let m=n+12;m<s;m+=48){if(we(m)!=="coast")continue;let x=c(m);gu(t,a(m,x+1),e)}if(we(n+30)==="coast"&&e()<.5){let m=n+e()*Ye,x=c(m);us(t,a(m,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(cs),litP:.5,fence:0})}if(we(n+30)==="coast"&&e()<.55){let m=n+e()*Ye;Jf(t,r(m,-(c(m)+e.range(45,220)),zi-.25,e()*6,!1),e)}let d=Math.floor((n+Ye/2)/1500)*1500+700;d>=n&&d<s&&we(d)==="coast"&&Zf(t,r(d,-(c(d)+75),zi-1,0,!1))}placeCountry(t,e,n,s,r,a,o,c,l){for(let d of[-1,1]){for(let m=n+e()*20;m<s;m+=e.range(20,40)){if(we(m)!=="country"||e()<.55||rr(m,16))continue;let x=d*e.range(16,95),g=a(m,x);us(t,g,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(cs),litP:.5,fence:0});for(let p=0;p<2+e()*3;p++){let y=x+d*e.range(6,14),T=m+e.range(-8,8);Hi(t,a(T,y,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let m=n+e()*8;m<s;m+=e.range(5,9)){if(we(m)!=="country"||rr(m,7))continue;let x=d*e.range(140,210);Hi(t,a(m,x,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!rr(m+2,8)&&Hi(t,a(m+2,d*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let u=Math.floor((n+Ye/2)/600)*600+300;if(u>=n&&u<s&&we(u)==="country"){let d=c(u);qf(t,r(u,-(d+1.6),o(u)-.08),e)}let h=Math.floor((n+Ye/2)/700)*700+120;if(h>=n&&h<s&&we(h)==="country"){let d=c(h);xu(t,r(h,-(d+.95),o(h)-.08),e),gu(t,r(h+2,-(d+.8),o(h)-.08),e)}let f=Math.floor((n+Ye/2)/900)*900+450;if(f>=n&&f<s&&we(f)==="country"){let d=c(f);$f(t,a(f,d+5),e)}for(let d=n;d<s;d+=30){if(we(d)!=="country")continue;let m=this.path.curv(d);if(Math.abs(m)>1/450&&e()<.5){let x=m>0?-1:1,g=c(d);_u(t,a(d,x*(g+.75)),x>0?-1:1)}}}};var Dl=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new ot(t):t)),at={zenith:new ot,horizon:new ot,sunCol:new ot,sunI:1,hemiSky:new ot,hemiGround:new ot,hemiI:1,fog:new ot,cLit:new ot,cShade:new ot,cRim:new ot,night:0,warm:0,overcast:0,rain:0,sunDir:new F,moonDir:new F,lightDir:new F,sunEl:0};function Qf(i){let t=0;for(;t<Dl.length-2&&Dl[t+1][0]<=i;)t++;let e=Dl[t],n=Dl[t+1],s=Sl(Ee((i-e[0])/(n[0]-e[0]),0,1)),r=(c,l)=>l.copy(e[c]).lerp(n[c],s);r(1,at.zenith),r(2,at.horizon),r(3,at.sunCol),at.sunI=_e(e[4],n[4],s),r(5,at.hemiSky),r(6,at.hemiGround),at.hemiI=_e(e[7],n[7],s),r(8,at.fog),r(9,at.cLit),r(10,at.cShade),r(11,at.cRim),at.night=_e(e[12],n[12],s),at.warm=_e(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,o=(i-.25)*Math.PI+.9;at.sunEl=a,at.sunDir.set(Math.cos(a)*Math.sin(o),Math.sin(a),Math.cos(a)*Math.cos(o)).normalize(),at.moonDir.set(-at.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-at.sunDir.z).normalize(),at.lightDir.copy(at.sunDir),a<.08&&at.lightDir.lerpVectors(at.moonDir,at.sunDir,Ee((a+.12)/.2,0,1)).normalize(),at.lightDir.y<.12&&(at.lightDir.y=.12,at.lightDir.normalize())}var Kf={zenith:[new ot("#7b8594"),new ot("#141a28")],horizon:[new ot("#b5bcc6"),new ot("#283042")],fog:[new ot("#a8b0ba"),new ot("#232b3c")],hemiSky:[new ot("#aab3bf"),new ot("#3c4866")],hemiGround:[new ot("#8b8983"),new ot("#1e2030")],cLit:[new ot("#d0d5dc"),new ot("#2c3240")],cShade:[new ot("#7c8593"),new ot("#151922")]},Su=new ot;function jf(i,t){if(at.overcast=i,at.rain=t,i<=.001)return;let e=at.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Su.copy(Kf[n][0]).lerp(Kf[n][1],e),at[n].lerp(Su,i*(n==="cLit"||n==="cShade"?.75:.85));at.sunI*=1-.82*i,at.warm*=1-i,at.cRim.multiplyScalar(1-i),at.sunCol.lerp(Su.setRGB(.85,.87,.9),i*.6)}function td(){let i=new re({side:qe,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:at.zenith},uHorizon:{value:at.horizon},uSunDir:{value:at.sunDir},uMoonDir:{value:at.moonDir},uSunCol:{value:at.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new ot},uOvercast:{value:0},uDeckLit:{value:new ot},uDeckDark:{value:new ot}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark; uniform float uNight, uWarm, uTime, uCirrus, uOvercast;
      varying vec3 vDir;
      ${ki}
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
        if (uNight * (1.0 - uOvercast) > 0.01 && e > 0.0) {
          vec3 sp = d * 380.0; vec3 cell = floor(sp); float hs = hash13(cell);
          if (hs > 0.9965) { float st = (1.0 - smoothstep(0.0, 0.42, length(fract(sp) - 0.5))) * (0.55 + 0.45 * sin(uTime * 1.7 + hs * 400.0));
            col += vec3(0.85, 0.9, 1.0) * st * uNight * smoothstep(0.0, 0.25, e) * 1.3; }
          float md = dot(d, uMoonDir);
          col += vec3(0.5, 0.58, 0.85) * pow(max(md, 0.0), 60.0) * 0.35 * uNight;
          col = mix(col, vec3(1.6, 1.6, 1.5), smoothstep(0.99955, 0.9998, md) * uNight);
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),t=new ee(new Nr(5e3,48,24),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function S_(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let p=0;p<a;p++){let y=.06+i()*.05;e.push([(p/(a-1)-.5)*s+(i()-.5)*.03,.1+y*.5,(i()-.5)*.2,y])}let o=t?6:2,c=s*.82,l=.1+.09;for(let p=0;p<o;p++){let y=Math.max(1,Math.round(c/.11));for(let T=0;T<y;T++){let _=(y===1?0:T/(y-1)-.5)*c+(i()-.5)*.05+r*p;e.push([_,l+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}l+=t?.115:.075,c*=t?.8:.66}let u=e.slice();for(let p of u){if(e.length>92)break;let y=1+Math.floor(i()*2);for(let T=0;T<y;T++){let _=.35+i()*2.4,M=p[3]*(.35+i()*.2);e.push([p[0]+Math.cos(_)*p[3]*.82,p[1]+Math.sin(_)*p[3]*.82,p[2]+.04,M])}}let h=e.slice(0,96),f=1e9,d=-1e9,m=-1e9;for(let p of h)f=Math.min(f,p[0]-p[3]*1.12),d=Math.max(d,p[0]+p[3]*1.12),m=Math.max(m,p[1]+p[3]*1.12);let x=Math.min(1,.92/(d-f),(.95-.1)/(m-.1)),g=(f+d)/2;for(let p of h)p[0]=(p[0]-g)*x,p[1]=.1+(p[1]-.1)*x,p[3]*=x;return h}function ed(i){let e={value:Array.from({length:96},()=>new pe)},n=new re({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${ki}
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
      }`,depthTest:!1,depthWrite:!1,blending:dn}),s=new ee(new Ue(1,1),n),r=new $i,a=new ji;r.add(s);let o=new xe(1024*2,1024*2,{generateMipmaps:!0,minFilter:Cn,magFilter:De}),c=i.getRenderTarget(),l=i.autoClear,u=cn(99);i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let d=f%2===0,m=S_(u,d);m.forEach((x,g)=>e.value[g].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=m.length,n.uniforms.uSeed.value=f*13.7,o.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(o),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:d})}return o.viewport.set(0,0,1024*2,1024*2),i.autoClear=l,i.setRenderTarget(c),n.dispose(),s.geometry.dispose(),{tex:o.texture,kinds:h,rt:o}}function nd(i){let t=cn(5),e=22,n=[],s=new Ue(1,1);s.translate(0,.5,0);let r=new Gn(new Float32Array(e*4),4),a=new Gn(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let o=new re({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:at.cLit},uShade:{value:at.cShade},uRim:{value:at.cRim},uHaze:{value:at.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Qi(s,o,e);c.frustumCulled=!1,c.renderOrder=-5;for(let m=0;m<e;m++){let x=m<12,g=i.kinds[(m*3+(x?0:1))%i.kinds.length],p=x?g.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:m/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:p,cell:g.cell,haze:x?.45:.18})}let l=new Ht,u=new Ke,h=new F,f=new F,d=new F(0,1,0);return{group:c,update(m,x){let g=Math.atan2(at.lightDir.x,at.lightDir.z);for(let y of n)y.phi+=x*1.2/y.d;n.slice().sort((y,T)=>T.d-y.d).forEach((y,T)=>{h.set(m.x+Math.sin(y.phi)*y.d,m.y+y.base,m.z+Math.cos(y.phi)*y.d),u.setFromAxisAngle(d,y.phi+Math.PI),f.set(y.size,y.size,1),l.compose(h,u,f),c.setMatrixAt(T,l);let _=g-y.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let M=Math.max(0,Math.min(1,(_+.35)/.7)),b=1-M*M*(3-2*M);r.setXYZW(T,y.cell[0],y.cell[1],b,y.haze),a.setX(T,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+at.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,o.uniforms.uOpacity.value=(1-at.night*.35)*(1-at.overcast*.55)}}}function id(){let i=new Ce;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],o=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,d=Math.sin(f)*e.R,m=Math.cos(f)*e.R,x=bl(h/360*e.k*4,40+n*9),g=Math.pow(Math.max(0,x-.18)/.82,1.6),p=e.h*(.12+g);if(r.push(d,-60,m,d,-60+p,m),a.push(0,h/360,1,h/360),h<360){let y=h*2;o.push(y,y+1,y+2,y+1,y+3,y+2)}}let c=new le;c.setAttribute("position",new Xt(r,3)),c.setAttribute("hf",new Xt(a,2)),c.setIndex(o);let l=new re({side:Qe,fog:!1,uniforms:{uCol:{value:new ot(e.col)},uHaze:{value:at.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17}},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed; varying vec2 vH; varying float vY;
        ${ki}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new ee(c,l);u.frustumCulled=!1,u.renderOrder=-8,i.add(u)}),{group:i,update(e){i.position.set(e.x,0,e.z);let n=(.35+.65*(1-at.night))*(1-.35*at.overcast);for(let s of i.children)s.material.uniforms.uLight.value=n}}}var or={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function sd(i){let t=i.get("weather"),e={mode:or[t]?t:"auto",kind:or[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return or[t]&&(e.ov=or[t][0],e.rain=or[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let o=Math.random();e.kind=e.kind==="clear"?o<.5?"cloudy":o<.72?"rain":"clear":e.kind==="cloudy"?o<.5?"clear":o<.85?"rain":"cloudy":o<.55?"cloudy":"clear"}let[s,r]=or[e.kind];e.ov+=Ee(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=Ee(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function rd(){let t=new F(46,24,46),e=new Ue(1,1);e.translate(0,.5,0);let n=new kr;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let o=0;o<2600;o++)s[o*4]=Math.random(),s[o*4+1]=Math.random(),s[o*4+2]=Math.random(),s[o*4+3]=Math.random();n.setAttribute("aOff",new Gn(s,4)),n.instanceCount=2600;let r=new re({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new F},uRain:{value:0},uBox:{value:t},uCol:{value:new ot(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ee(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(o,c,l,u){a.visible=l>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(o),r.uniforms.uRain.value=l,r.uniforms.uCol.value.setRGB(.55+.35*u,.6+.35*u,.7+.3*u)}}}function od(){let i=new re({fog:!1,uniforms:{uTime:{value:0},uCam:{value:new F},uSunDir:{value:at.lightDir},uSunCol:{value:at.sunCol},uHorizon:{value:at.horizon},uZenith:{value:at.zenith},uFog:{value:at.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${ki}
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
      }`}),t=new ee(new Ue(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=zi,t.renderOrder=-6,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=at.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-at.overcast*.85}}}function ad(){return new re({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new ot(1,1,1)}},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${ki}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}var go=new F;function Dn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;go.copy(t),go[n]=0,go.normalize();let l=.5*a/(a+o),u=1-go.angleTo(i)/c;return Math.sign(go[e])===1?u*l:o/(a+o)+l+l*(1-u)}var si=class i extends Wn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,u=new F(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,x=new F,g=.5/a;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[y+0]=Dn(x,l,"z","y",r,n),d[y+1]=1-Dn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[y+0]=1-Dn(x,l,"z","y",r,n),d[y+1]=1-Dn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[y+0]=1-Dn(x,l,"x","z",r,t),d[y+1]=Dn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-Dn(x,l,"x","z",r,t),d[y+1]=1-Dn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-Dn(x,l,"x","y",r,t),d[y+1]=1-Dn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[y+0]=Dn(x,l,"x","y",r,t),d[y+1]=1-Dn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function cd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new le,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=ld(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][f]);let m=ld(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function ld(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new We(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let x=u.getComponent(f,m);o.setComponent(f+h,m,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function b_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new vn(i);return n.colorSpace=Me,n}function T_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new vn(i);return n.colorSpace=Me,n}function ud(){let i=new Ce,t=(b,A={})=>Ks(new Xe({color:b,gradientMap:Yn,...A})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),o=Ks(new Xe({color:"#ffffff",map:T_(),gradientMap:Yn})),c=new Xe({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Yn}),l=new Xe({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Yn}),u=new ke({map:b_()}),h=new Map,f=new Ht,d=new Rn,m=new Ke,x=new F(1,1,1),g=(b,A,v,E,P,L=0,R=0,U=0)=>{let C=b.index?b.toNonIndexed():b;d.set(L,R,U),m.setFromEuler(d),f.compose(new F(v,E,P),m,x),C.applyMatrix4(f),h.has(A)||h.set(A,[]),h.get(A).push(C)};g(new si(1.48,.86,3.38,4,.15),e,0,.77,0),g(new si(1.42,.66,2.6,4,.17),e,0,1.5,-.25),g(new si(1.38,.09,2.5,3,.04),n,0,1.84,-.25),g(new Ue(1.16,.5),o,0,1.53,-1.556,0,Math.PI,0);for(let b of[-1,1])g(new Ue(2.25,.46),o,b*.712,1.54,-.2,0,b*Math.PI/2,0),g(new si(.1,.12,.2,2,.04),e,b*.82,1.2,.95),g(new si(.14,.48,.08,2,.035),c,b*.64,1,-1.67),g(new si(.12,.08,.06,2,.02),l,b*.64,.7,-1.67);g(new Ue(1.2,.52),o,0,1.52,1.056,-.12,0,0),g(new si(1.52,.22,.22,2,.07),s,0,.42,-1.62),g(new Wn(.24,.04,.05),s,0,.84,-1.69),g(new Ue(.34,.17),u,0,.72,-1.7,0,Math.PI,0);for(let[b,A]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])g(new Fs(.29,.29,.2,20),r,b,.29,A,0,0,Math.PI/2),g(new Fs(.16,.16,.205,12),a,b,.29,A,0,0,Math.PI/2);for(let[b,A]of h){let v=new ee(cd(A),b);v.castShadow=b!==o&&b!==u,v.receiveShadow=!0,i.add(v)}let p=new Ce;p.position.set(.02,1.3,-1.57),i.add(p);let y=new Wn(.52,.026,.02);y.translate(.27,0,0);let T=new ee(y,s);T.rotation.z=.18,p.add(T);let _=0,M=new Or(16773328,0,70,.55,.65,1.2);return M.position.set(0,.8,1.6),M.target.position.set(0,0,18),i.add(M,M.target),{group:i,mBody:e,update(b,A,v,E=0){if(c.emissiveIntensity=.35+v*3.2,E>.15||_%2.6>.01){_+=b;let P=_%2.6/2.6,L=U=>U*U*(3-2*U),R=P<.25?L(P/.25):P<.5?L(1-(P-.25)/.25):0;T.rotation.z=.18+R*2.5,E<=.15&&P>=.5&&(_=0)}M.intensity=v*60}}}var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},E_=new Ni(-1,1,1,-1,0,1),bu=class extends le{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},w_=new bu,Gi=class{constructor(t){this._mesh=new ee(w_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,E_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lr=class extends bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mi.clone(t.uniforms),this.material=new re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xo=class extends bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nl=class extends bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ul=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Nt);this._width=n.width,this._height=n.height,e=new xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(ar),this.copyPass.material.blending=dn,this.timer=new Hr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xo!==void 0&&(a instanceof xo?n=!0:a instanceof Nl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fl=class extends bn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var hd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cr=class i extends bn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xe(r,a,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new xe(r,a,{type:Fe,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new xe(r,a,{type:Fe,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=hd;this.highPassUniforms=mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone(ar.uniforms),this.blendMaterial=new re({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,premultipliedAlpha:!0,blending:di,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new ke,this._fsQuad=new Gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new re({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};cr.BlurDirectionX=new Nt(1,0);cr.BlurDirectionY=new Nt(0,1);var _o={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bl=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=mi.clone(_o.uniforms),this.material=new Bs({name:_o.name,uniforms:this.uniforms,vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader}),this._fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var A_={uniforms:{tDiffuse:{value:null},uSun:{value:new Nt(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function fd(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new Nt),a=new xe(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:Fe,samples:n}),o=new Ul(i,a);o.addPass(new Fl(t,e));let c=new cr(new Nt(r.x*s*.5,r.y*s*.5),.42,.55,.86);o.addPass(c),o.addPass(new Bl);let l=new lr(A_);return o.addPass(l),{composer:o,bloom:c,grade:l}}function dd(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let N=0;N<2;N++){let V=s.getChannelData(N);for(let G=0;G<n;G++)V[G]=(Math.random()*2-1)*Math.pow(1-G/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=900,o.Q.value=.3;let c=t.createGain();c.gain.value=.11,o.connect(c),c.connect(e),c.connect(r);let l=(N,V)=>{let G=t.createBuffer(1,t.sampleRate*N,t.sampleRate),B=G.getChannelData(0),z=0;for(let X=0;X<B.length;X++)V?(z=(z+.02*(Math.random()*2-1))/1.02,B[X]=z*3.5):B[X]=Math.random()*2-1;return G},u=(N,V,G)=>{let B=t.createBufferSource();B.buffer=N,B.loop=!0;let z=t.createBiquadFilter();z.type=V,z.frequency.value=G;let X=t.createGain();return X.gain.value=0,B.connect(z),z.connect(X),X.connect(e),B.start(),{f:z,g:X}},h=u(l(2,!0),"lowpass",400),f=u(l(3,!1),"lowpass",700);f.g.connect(r);let d=u(l(2,!1),"bandpass",5200);d.f.Q.value=6;let m=u(l(2,!0),"lowpass",240),x=u(l(3,!1),"bandpass",2600);x.f.Q.value=.35;let g=u(l(2,!0),"lowpass",520),p=l(.03,!1),y=0;function T(N,V){let G=t.createBufferSource(),B=t.createBiquadFilter(),z=t.createGain();G.buffer=p,B.type="bandpass",B.frequency.value=1800+Math.random()*2600,B.Q.value=1.2,z.gain.setValueAtTime(V*(.02+Math.random()*.03),N),z.gain.exponentialRampToValueAtTime(1e-4,N+.03),G.connect(B),B.connect(z),z.connect(e),G.start(N),G.stop(N+.04)}let _=0,M=0;function b(N,V){let G=t.createOscillator(),B=t.createOscillator(),z=t.createGain(),X=t.createBiquadFilter();X.type="bandpass",X.frequency.value=1150,X.Q.value=2.2,G.type="square",G.frequency.value=745,B.type="triangle",B.frequency.value=1490,z.gain.setValueAtTime(0,N),z.gain.linearRampToValueAtTime(.085*V,N+.004),z.gain.exponentialRampToValueAtTime(1e-4,N+.3),G.connect(X),B.connect(X),X.connect(z),z.connect(e),z.connect(r),G.start(N),B.start(N),G.stop(N+.33),B.stop(N+.33)}function A(N,V){let G=t.createOscillator(),B=t.createGain();G.type="sine",G.frequency.setValueAtTime(110,N),G.frequency.exponentialRampToValueAtTime(48,N+.12),B.gain.setValueAtTime(1e-4,N),B.gain.linearRampToValueAtTime(.22*V,N+.006),B.gain.exponentialRampToValueAtTime(1e-4,N+.17),G.connect(B),B.connect(e),G.start(N),G.stop(N+.2)}let v=N=>440*Math.pow(2,(N-69)/12),E=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],P=[72,74,76,79,81,84,86,88],L=0,R=t.currentTime+.2,U=t.currentTime+3;function C(N){let V=E[L++%E.length],G=11;for(let B of V)for(let z of[-5,5]){let X=t.createOscillator(),ht=t.createGain();X.type=z<0?"sine":"triangle",X.frequency.value=v(B),X.detune.value=z,ht.gain.setValueAtTime(0,N),ht.gain.linearRampToValueAtTime(.18,N+3.5),ht.gain.setValueAtTime(.18,N+G-4),ht.gain.linearRampToValueAtTime(0,N+G+1),X.connect(ht),ht.connect(o),X.start(N),X.stop(N+G+1.2)}}function D(N){let V=P[Math.floor(Math.random()*P.length)],G=t.createOscillator(),B=t.createOscillator(),z=t.createGain(),X=t.createGain();G.type=B.type="sine",G.frequency.value=v(V),B.frequency.value=v(V)*2.01,X.gain.value=.25,B.connect(X),X.connect(z),z.gain.setValueAtTime(0,N),z.gain.linearRampToValueAtTime(.05,N+.02),z.gain.exponentialRampToValueAtTime(1e-4,N+4),G.connect(z),z.connect(r),z.connect(e),G.start(N),B.start(N),G.stop(N+4.2),B.stop(N+4.2)}return{ac:t,muted:!1,update(N,V,G,B={}){let z=t.currentTime;if((B.bell||0)>.01)for(_<z&&(_=z+.02);_<z+.12;)b(_,B.bell),_+=.41;let X=B.rain||0;if(x.g.gain.setTargetAtTime(X*.05,z,.6),g.g.gain.setTargetAtTime(X*.05,z,.6),X>.05&&B.roof)for(y<z&&(y=z+.02);y<z+.12;)T(y,X),y+=.04+Math.random()*.12/X;let ht=B.train||0;if(m.g.gain.setTargetAtTime(ht*.16,z,.2),ht>.04)for(M<z&&(M=z+.02);M<z+.12;)A(M,ht),A(M+.15,ht*.8),M+=1.2;for(;R<z+1;)C(R),R+=8;U<z+.5&&(D(U),U+=1.5+Math.random()*4.5),h.g.gain.setTargetAtTime(.03+N*.06,z,.5),h.f.frequency.setTargetAtTime(250+N*500,z,.5);let Et=.5+.5*Math.sin(z*.55)*Math.sin(z*.21+1);f.g.gain.setTargetAtTime(V.coast*(.012+Et*.05),z,.3),f.f.frequency.setTargetAtTime(400+Et*900,z,.3);let $t=.5+.5*Math.sin(z*7)*Math.sin(z*.4);d.g.gain.setTargetAtTime((V.country+V.sakura*.3)*G*.006*$t,z,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function pd(i){let e=new Ue(.075,.05),n=new ke({color:new ot("#ffd0de"),side:Qe}),s=new Qi(e,n,420);s.frustumCulled=!1,s.count=0;let r=Array.from({length:420},()=>({p:new F(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6})),a=new Ht,o=new Ke,c=new Rn,l=new F(1,1,1),u=new F,h=90,f=new Float32Array(h*3),d=Array.from({length:h},()=>({p:new F(1e9,0,0),ph:Math.random()*6.28})),m=new le;m.setAttribute("position",new We(f,3));let x=new Us({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:di,opacity:0}),g=new Cr(m,x);g.frustumCulled=!1;let p=(y,T,_,M,b)=>{let A=b?8+Math.random()*42:-4+Math.random()*50,v=(Math.random()-.5)*40;y.p.set(T.x+_.x*A+M.x*v,T.y-1+Math.random()*9,T.z+_.z*A+M.z*v)};return{group:[s,g],shift(y,T){for(let _ of r)_.p.x-=y,_.p.z-=T;for(let _ of d)_.p.x-=y,_.p.z-=T},update(y,T,_,M,b,A,v,E,P){let L=Math.floor(420*Math.min(1,A*1.1));s.count=L;for(let U=0;U<L;U++){let C=r[U];u.subVectors(C.p,_);let D=u.x*M.x+u.z*M.z,N=u.x*b.x+u.z*b.z;(C.p.x>1e8||D<-6||D>55||Math.abs(N)>24||C.p.y<v-.5)&&p(C,_,M,b,C.p.x<1e8),C.p.y-=C.v*y,C.p.x+=Math.sin(T*.7+C.ph)*.4*y+.25*y,C.p.z+=Math.cos(T*.5+C.ph)*.3*y,c.set(T*C.sp+C.ph,T*C.sp*.7,C.ph),o.setFromEuler(c),a.compose(C.p,o,l),s.setMatrixAt(U,a)}s.instanceMatrix.needsUpdate=!0;let R=E*P;if(x.opacity=R,g.visible=R>.01,g.visible){for(let U=0;U<h;U++){let C=d[U];u.subVectors(C.p,_);let D=u.x*M.x+u.z*M.z,N=u.x*b.x+u.z*b.z;if(C.p.x>1e8||D<-4||D>60||Math.abs(N)>30){let V=2+Math.random()*55,G=(Math.random()-.5)*55;C.p.set(_.x+M.x*V+b.x*G,v+.3+Math.random()*2.2,_.z+M.z*V+b.z*G)}C.p.x+=Math.sin(T*.6+C.ph*3)*.3*y,C.p.y+=Math.sin(T*.9+C.ph)*.2*y,C.p.z+=Math.cos(T*.5+C.ph*2)*.3*y,f[U*3]=C.p.x,f[U*3+1]=C.p.y,f[U*3+2]=C.p.z}m.attributes.position.needsUpdate=!0}}}}var sn=new URLSearchParams(location.search),vo=sn.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();vo&&document.body.classList.add("embed");sn.has("shot")&&document.body.classList.add("shot");df(sn.has("seed")?parseInt(sn.get("seed")):Math.random()*1e9|0);xf(sn.get("env")||"city");var nn=i=>document.getElementById(i),yo=i=>{let t=nn("loading");t&&(t.textContent=i)};async function R_(){await new Promise(j=>setTimeout(j,30));let i=nn("c"),t=new _l({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=sn.get("q")||(vo||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?vo?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=Me,t.toneMapping=ns,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ts;let r=new $i;r.fog=new Er(13032946,.0019,700);let a=new Ge(52,innerWidth/innerHeight,.5,7e3),o=new zr(16777215,3);o.castShadow=!0;let c=n==="low"?1024:2048;o.shadow.mapSize.set(c,c),Object.assign(o.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:420}),o.shadow.bias=-4e-4,o.shadow.normalBias=.05,r.add(o,o.target);let l=new Fr(10799359,13154464,1.6);r.add(l),yo("painting the town\u2026"),await new Promise(j=>setTimeout(j,10));let u=Pf();Df(u);let h=If(t);kf(h.cells);let f=Sf(u.textures(t),h.tex);yo("painting the clouds\u2026"),await new Promise(j=>setTimeout(j,10));let d=new Tl,m=ad(),x=new Ll(r,d,f,m),g=td();r.add(g);let p=nd(ed(t));r.add(p.group);let y=id();r.add(y.group);let T=od();r.add(T.mesh);let _=ud();_.group.rotation.order="YXZ",r.add(_.group);let M=pd(f.glowTex);M.group.forEach(j=>r.add(j));let b=fd(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),A=Tf();r.add(A.group);let v=Ef();r.add(v.group);let E=sd(sn),P=rd();r.add(P.mesh);let L=E.W.rain,R={s:Math.max(100,parseFloat(sn.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ee(parseFloat(sn.get("t"))||.4,0,.999),todPaused:sn.has("freeze"),dist:0,cam:{low:1,eye:2}[sn.get("cam")]||0},U=!1;yo("building the road\u2026"),await new Promise(j=>setTimeout(j,10));let C=vo?620:x.ahead;for(x.ahead=260;x.update(R.s,1e9););x.ahead=C;let D={k:Math.ceil((R.s-Js)/Zs),phase:"idle",raise:1,decided:!1,t2:0},N={},V={},G={},B=new F,z=new F,X=new F,ht=!1,Et=new F,$t=new F,Ut=nn("spd"),Gt=nn("dist"),K=nn("clock"),et=nn("zone"),_t=nn("start"),Bt=nn("hint"),ct=null,Wt=null,Se=0,Yt=0;function jt(j){!U||j===Wt||(Wt=j,et.querySelector(".jp").textContent=oo[j].jp,et.querySelector(".en").textContent=oo[j].en,et.classList.add("on"),clearTimeout(Se),Se=setTimeout(()=>et.classList.remove("on"),5200))}function oe(){if(!U){if(U=!0,document.body.classList.remove("pre"),!sn.has("auto"))try{ct=dd(),ct&&ct.ac.resume()}catch{ct=null}_t.style.opacity=0,setTimeout(()=>_t.remove(),1500),vo||(Bt.style.opacity=.75,setTimeout(()=>Bt.style.opacity=0,9e3))}}let Ft={};addEventListener("keydown",j=>{Ft[j.key]=!0,(j.key==="m"||j.key==="M")&&be(),(j.key==="t"||j.key==="T")&&Ve(),(j.key==="c"||j.key==="C")&&fe(),(j.key==="r"||j.key==="R")&&H(),!U&&(j.key===" "||j.key==="Enter")&&oe()}),addEventListener("keyup",j=>{Ft[j.key]=!1});let zt=null;i.addEventListener("pointerdown",j=>{zt={id:j.pointerId,x:j.clientX,y:j.clientY,sy:j.clientY,sc:R.mult}}),addEventListener("pointermove",j=>{zt&&j.pointerId===zt.id&&(zt.x=j.clientX,zt.y=j.clientY,R.mult=Ee(zt.sc-(zt.y-zt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{zt=null}),addEventListener("pointercancel",()=>{zt=null}),i.addEventListener("touchstart",j=>{let Tt=j.changedTouches[0];zt={id:"touch",x:Tt.clientX,y:Tt.clientY,sy:Tt.clientY,sc:R.mult},j.preventDefault()},{passive:!1}),i.addEventListener("touchmove",j=>{if(!zt)return;let Tt=j.changedTouches[0];zt.x=Tt.clientX,zt.y=Tt.clientY,R.mult=Ee(zt.sc-(zt.y-zt.sy)/innerHeight*1.6,.4,1.8),j.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{zt=null}),i.addEventListener("touchcancel",()=>{zt=null});function be(){ct&&(ct.toggle(),nn("snd").style.opacity=ct.muted?.4:1)}function Ve(){R.todPaused=!R.todPaused,nn("tim").style.opacity=R.todPaused?.4:1}function fe(){R.cam=(R.cam+1)%3}let ye={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function H(){nn("wx").textContent=ye[E.cycle()]}nn("wx").textContent=ye[E.W.mode],nn("wx").onclick=j=>{j.stopPropagation(),H()},nn("snd").onclick=j=>{j.stopPropagation(),be()},nn("tim").onclick=j=>{j.stopPropagation(),Ve()},nn("cam").onclick=j=>{j.stopPropagation(),fe()};let Le=0,se=j=>{let Tt=performance.now();Tt-Le<120||(Le=Tt,j.cancelable&&j.type!=="click"&&j.preventDefault(),oe())};for(let j of["touchstart","pointerdown","mousedown","click"])_t.addEventListener(j,se,{passive:!1});let I=()=>{ct&&ct.ac.state!=="running"&&ct.ac.resume()};for(let j of["touchend","click","keydown"])addEventListener(j,I,{passive:!0});document.addEventListener("visibilitychange",()=>{ct&&(document.hidden?ct.ac.suspend():ct.ac.resume())});let S=!1,W="";function Z(){let j=innerWidth,Tt=innerHeight,vt=j/Tt,O=j+"x"+Tt+"@"+s;O!==W&&(W=O,t.setPixelRatio(s),t.setSize(j,Tt,!1),b.composer.setPixelRatio(s),b.composer.setSize(j,Tt),a.aspect=vt,a.fov=vt>=1?52:Ee(2*Math.atan(Math.tan(34*Math.PI/180)/vt)*180/Math.PI,52,80),a.updateProjectionMatrix(),b.grade.uniforms.uAspect.value=vt)}addEventListener("resize",()=>{S=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{S=!0}),Z();let Q=0;function lt(j=!0){if(s>1.05)s=Math.max(1,s-.25),S=!0;else if(b.bloom.enabled)b.bloom.enabled=!1;else if(o.shadow.mapSize.x>1024)o.shadow.mapSize.set(1024,1024),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null);else if(x.ahead>430)x.ahead=430;else return;if(Q++,j)try{localStorage.setItem("icd-q",String(Q))}catch{}}try{let j=parseInt(localStorage.getItem("icd-q")||"0");if(!sn.has("q"))for(let Tt=0;Tt<Math.min(j,6);Tt++)lt(!1);Q=Math.max(Q,j||0)}catch{}let ft=performance.now(),$=0,nt=0,ut=0,Pt=()=>1-at.night,xt=0;function pt(j){requestAnimationFrame(pt);let Tt=performance.now();S&&(S=!1,Z());let vt=Math.min(.05,(j-ft)/1e3);ft=j,$+=vt,R.steer=0,(Ft.ArrowLeft||Ft.a||Ft.A)&&(R.steer=-1),(Ft.ArrowRight||Ft.d||Ft.D)&&(R.steer=1),(Ft.ArrowUp||Ft.w||Ft.W)&&(R.mult=Ee(R.mult+vt*.4,.4,1.8)),(Ft.ArrowDown||Ft.s||Ft.S)&&(R.mult=Ee(R.mult-vt*.4,.4,1.8)),zt&&Math.abs(zt.y-zt.sy)<30&&(R.steer=zt.x<innerWidth/2?-1:1),R.steer&&(R.lastInput=j);let O=$s(D.k);R.s-O>24&&(D.k++,O=$s(D.k),Object.assign(D,{phase:"idle",raise:1,decided:!1}));let mt=ao(O),tt=O-R.s;mt&&!D.decided&&tt<150&&(D.decided=!0,tt>75&&U&&(sn.has("xing")||xi(D.k,99)<.8)&&(D.phase="warn",v.start(O,xi(D.k,7)<.5?1:-1,16))),D.phase==="warn"?(D.raise=Math.max(0,D.raise-vt/6),v.st.cleared&&(D.phase="clear",D.t2=0)):D.phase==="clear"?(D.raise=Math.max(0,D.raise-vt/6),(D.t2+=vt)>2.2&&(D.phase="raise")):D.phase==="raise"&&(D.raise=Math.min(1,D.raise+vt/5),D.raise>=1&&(D.phase="idle"));let gt=D.phase==="warn"||D.phase==="clear"||D.phase==="raise"&&D.raise<.25,yt=Sn(R.s,"speed")*R.mult*(U?1:.55);if(D.phase!=="idle"&&D.raise<.8&&tt>0){let on=tt-11.2,Bn=on>0?Math.sqrt(2*1.25*on):0;yt=Math.min(yt,Bn),R.speed=Math.min(R.speed,Bn)}R.speed+=(yt-R.speed)*Math.min(1,vt*.5),R.s+=R.speed*vt,R.dist+=R.speed*vt;let it=Sn(R.s,"rw");R.steer?R.u=Ee(R.u+R.steer*vt*2.4,-it+.85,it-.85):j-R.lastInput>3e3&&(R.u+=(-1.65+Math.sin($/11)*.1-R.u)*Math.min(1,vt*.9)),!R.todPaused&&U&&(R.tod=(R.tod+vt/480*(at.night>.5?1.7:1))%1),Qf(R.tod),E.update(vt);let Ct=E.W.ov,wt=E.W.rain;jf(Ct,wt),L=Ee(L+(wt>.25?vt/18:-vt/120),0,1);let ce=performance.now();x.update(R.s,U?6:14);let ne=performance.now();if(d.at(R.s,N),Math.abs(N.x-x.origin.x)>900||Math.abs(N.z-x.origin.z)>900){let on=Math.round(N.x)-x.origin.x,Bn=Math.round(N.z)-x.origin.z;x.setOrigin(Math.round(N.x),Math.round(N.z)),B.x-=on,B.z-=Bn,z.x-=on,z.z-=Bn,M.shift&&M.shift(on,Bn)}let rn=x.origin.x,hn=x.origin.z,Ol=(d.at(R.s+1.5,G).y-d.at(R.s-1.5,V).y)/3;_.group.position.set(N.x+N.rx*R.u-rn,N.y+.01,N.z+N.rz*R.u-hn);let zl=R.steer?-R.steer*.05:0;_.group.rotation.set(-Math.atan(Ol),N.h+zl,0),_.update(vt,R.speed,at.night,wt),A.update(mt&&tt>-24&&tt<700?Al(d,O):null,x.origin,D.raise,gt,$),v.update(vt,d,x.origin,gn(.15,.8,at.night),Sn(O,"rw")+3.2);let Nn=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6}][R.cam];_.group.visible=R.cam!==2,d.at(R.s-Nn.back,V),d.at(R.s+Nn.ahead,G);let So=R.u*Nn.cu+(Nn.side||0);X.set(V.x+V.rx*So-rn,V.y+Nn.up,V.z+V.rz*So-hn);let ur=new F(G.x+G.rx*R.u*Nn.lu-rn,G.y+Nn.lookY,G.z+G.rz*R.u*Nn.lu-hn);ht||(B.copy(X),z.copy(ur),ht=!0),B.lerp(X,1-Math.exp(-vt*6)),z.lerp(ur,1-Math.exp(-vt*5)),a.position.copy(B),a.lookAt(z),Et.set(N.fx,0,N.fz),$t.set(N.rx,0,N.rz);let Un=tn(R.s);o.color.copy(at.sunCol),o.intensity=at.sunI,o.target.position.set(_.group.position.x+N.fx*30,_.group.position.y,_.group.position.z+N.fz*30),o.position.copy(o.target.position).addScaledVector(at.lightDir,200),l.color.copy(at.hemiSky),l.groundColor.copy(at.hemiGround),l.intensity=at.hemiI,r.fog.color.copy(at.fog);let Zn=(Un.city*.0022+Un.sakura*.0019+Un.coast*.0011+Un.country*.0014)*(1+at.night*.25);r.fog.near=Zn*(1+.55*Ct+.45*wt),r.fog.far=x.ahead*.92,en.uSkyHor.value.copy(at.horizon),en.uSkyZen.value.copy(at.zenith),en.uTime.value=$,en.uWet.value=L,en.uOrigin.value.set(x.origin.x,x.origin.z),en.uCloudSh.value=(1-Ct)*gn(.04,.3,at.sunEl)*(1-at.night);let Tn=g.material.uniforms;Tn.uNight.value=at.night,Tn.uWarm.value=at.warm,Tn.uTime.value=$,Tn.uCirrusCol.value.copy(at.cLit).lerp(at.horizon,.25),Tn.uCirrus.value=.6*(1-Ct),Tn.uOvercast.value=Ct,Tn.uDeckLit.value.copy(at.horizon).lerp(at.cLit,.35),Tn.uDeckDark.value.copy(at.zenith).lerp(at.horizon,.25).multiplyScalar(.82),g.position.copy(a.position),p.update(a.position,vt),y.update(a.position);let Wi=0;for(let on of[-150,0,250,500,800])Wi=Math.max(Wi,tn(R.s+on).coast);T.mesh.visible=Wi>.001,T.update(a.position,$,Zn*.8,gn(0,.35,Wi)),m.uniforms.uTime.value=$,m.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Pt());let En=gn(.15,.8,at.night);f.atlas.emissiveIntensity=.1+En*1.05,f.lamp.color.setRGB(.85,.85,.8).lerp(new ot(3.6,2.8,1.8),En),f.pool.opacity=En*.42*(1+.8*L),en.uNight.value=En,b.bloom.strength=_e(.32,.55,En),b.bloom.threshold=_e(1.35,.95,En),b.bloom.radius=_e(.55,.35,En),t.toneMappingExposure=_e(1,1.15,En),X.copy(a.position).addScaledVector(at.sunDir,1e3).project(a);let Fn=b.grade.uniforms,bo=X.z<1?1:0,hs=Math.max(Math.abs(X.x),Math.abs(X.y));Fn.uSun.value.set(X.x*.5+.5,X.y*.5+.5),Fn.uSunVis.value=bo*(1-gn(1,1.9,hs))*gn(-.02,.15,at.sunEl)*(1-at.night)*(1-Ct),Fn.uSat.value=1.1-.12*Ct,Fn.uDay.value=Pt(),Fn.uWarm.value=at.warm,Fn.uTime.value=$,P.update(a.position,$,wt,Pt());let To=performance.now();M.update(vt,$,a.position,Et,$t,Un.sakura,N.y,En,Un.country+Un.sakura*.4);let Eo=performance.now();if(ct){d.at(O,G);let on=Math.hypot(G.x-x.origin.x-a.position.x,G.z-x.origin.z-a.position.z),Bn=v.st.active?v.group.position.distanceTo(a.position):1e9;ct.update(R.speed/15,Un,Pt(),{bell:gt?Math.pow(Ee(1-on/260,0,1),1.5):0,train:Math.pow(Ee(1-Bn/230,0,1),2),rain:wt,roof:R.cam!==2})}jt(we(R.s+40));let kl=performance.now();b.composer.render(vt);let Hl=performance.now(),yi=window.__pb||(window.__pb={world:0,parts:0,render:0});if(yi.world=yi.world*.95+(ne-ce)*.05,yi.parts=yi.parts*.95+(Eo-To)*.05,yi.render=yi.render*.95+(Hl-kl)*.05,xt=xt*.95+(performance.now()-Tt)*.05,window.__ft=xt,(Yt+=vt)>.25){Yt=0,Ut.textContent=Math.round(R.speed*3.6),Gt.textContent=(R.dist/1e3).toFixed(1);let on=Math.floor(R.tod*1440);K.textContent=`${String(Math.floor(on/60)).padStart(2,"0")}:${String(on%60).padStart(2,"0")}`}nt++,U&&nt>150&&vt>.03?ut+=vt:ut=Math.max(0,ut-vt*.5),ut>3&&!sn.has("q")&&(ut=0,lt())}window.__dbg={renderer:t,st:R,scene:r,camera:a,world:x,TOD:at,X:D,train:v,weather:E,U:en},yo(""),_t.classList.add("ready"),sn.has("auto")&&oe(),requestAnimationFrame(pt)}R_().catch(i=>{console.error(i),yo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
