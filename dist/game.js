var oh=0,Rc=1,ah=2;var ts=1,lh=2,Os=3,zi=0,Qe=1,Xe=2,pn=0,zs=1,mi=2,Cc=3,Pc=4,ch=5;var es=100,uh=101,hh=102,fh=103,dh=104,ph=200,mh=201,gh=202,xh=203,Ic=204,Lc=205,_h=206,vh=207,yh=208,Mh=209,Sh=210,bh=211,Th=212,Eh=213,wh=214,ta=0,ea=1,na=2,Rs=3,ia=4,sa=5,ra=6,oa=7,Dc=0,Ah=1,Rh=2,Hn=0,Zr=1,Jr=2,$r=3,Kr=4,Qr=5,jr=6,ns=7;var Nc=300,ki=301,is=302,Pa=303,Ia=304,to=306,aa=1e3,$n=1001,la=1002,Le=1003,Ch=1004;var eo=1005;var Ue=1006,La=1007;var Pn=1008;var mn=1009,Uc=1010,Fc=1011,ks=1012,Da=1013,Gn=1014,In=1015,Oe=1016,Na=1017,Ua=1018,Vs=1020,Bc=35902,Oc=35899,zc=1021,kc=1022,Ln=1023,Kn=1026,Vi=1027,Hs=1028,Fa=1029,Hi=1030,Ba=1031;var Oa=1033,no=33776,io=33777,so=33778,ro=33779,za=35840,ka=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,oo=37490,Za=37491,Ja=37808,$a=37809,Ka=37810,Qa=37811,ja=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,ul=36494,hl=36495,fl=36283,dl=36284,ao=36285,pl=36286;var Tr=2300,ca=2301,Qo=2302,vc=2303,yc=2400,Mc=2401,Sc=2402;var Ph=3200;var ml=0,Ih=1,gi="",Te="srgb",Er="srgb-linear",wr="linear",he="srgb";var jo=7680;var Lh=519,Dh=512,Nh=513,Uh=514,gl=515,Fh=516,Bh=517,xl=518,Oh=519,zh=35044;var Vc="300 es",kn=2e3,Cs=2001;function Rd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=Ar("canvas");return i.style.display="block",i}var Uu={},Ps=null;function Hc(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function Vh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=Vh(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Vh(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $i(...i){let t=i.join(" ");t in Uu||(Uu[t]=!0,Yt(...i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gh={[ta]:ea,[na]:ra,[ia]:oa,[Rs]:sa,[ea]:ta,[ra]:na,[oa]:ia,[sa]:Rs},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $l=Math.PI/180,Rr=180/Math.PI;function lo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Pd(i,t){return(i%t+t)%t}function Kl(i,t,e){return(1-e)*i+e*t}function xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yc=class Yc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yc.prototype.isVector2=!0;var Ot=Yc,Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||c!==f||l!==d||u!==g){let m=c*f+l*d+u*g+h*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+x*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+x*o;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-o*d,t[e+2]=l*g+u*d+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zc=class Zc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ql.copy(this).projectOnVector(t),this.sub(Ql)}reflect(t){return this.sub(Ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zc.prototype.isVector3=!0;var U=Zc,Ql=new U,Fu=new Ge,Jc=class Jc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],T=s[4],_=s[7],y=s[2],S=s[5],C=s[8];return r[0]=a*x+o*v+c*y,r[3]=a*m+o*T+c*S,r[6]=a*p+o*_+c*C,r[1]=l*x+u*v+h*y,r[4]=l*m+u*T+h*S,r[7]=l*p+u*_+h*C,r[2]=f*x+d*v+g*y,r[5]=f*m+d*T+g*S,r[8]=f*p+d*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(t,e)),this}rotate(t){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jc.prototype.isMatrix3=!0;var Kt=Jc,jl=new Kt,Bu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Bu,fromXYZ:Ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Bu,fromXYZ:Ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var ne=Id();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Ar("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var Dd=0,ec=new U,an=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=Ue,a=Pn,o=Ln,c=mn,l=i.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=lo(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Nc;an.DEFAULT_ANISOTROPY=1;var $c=class $c{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,_=(d+1)/2,y=(p+1)/2,S=(u+f)/4,C=(h+x)/4,M=(g+m)/4;return T>_&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=C/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=C/r,s=M/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$c.prototype.isVector4=!0;var _e=$c,ha=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new an(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Se=class extends ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ca=class Ca{constructor(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Ud)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ri.crossVectors(n,_n),Ri.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ri.crossVectors(n,_n)),Ri.normalize(),Po.crossVectors(_n,Ri),s[0]=Ri.x,s[4]=Po.x,s[8]=_n.x,s[1]=Ri.y,s[5]=Po.y,s[9]=_n.y,s[2]=Ri.z,s[6]=Po.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],T=n[7],_=n[11],y=n[15],S=s[0],C=s[4],M=s[8],E=s[12],R=s[1],I=s[5],P=s[9],N=s[13],w=s[2],D=s[6],B=s[10],O=s[14],V=s[3],H=s[7],W=s[11],Z=s[15];return r[0]=a*S+o*R+c*w+l*V,r[4]=a*C+o*I+c*D+l*H,r[8]=a*M+o*P+c*B+l*W,r[12]=a*E+o*N+c*O+l*Z,r[1]=u*S+h*R+f*w+d*V,r[5]=u*C+h*I+f*D+d*H,r[9]=u*M+h*P+f*B+d*W,r[13]=u*E+h*N+f*O+d*Z,r[2]=g*S+x*R+m*w+p*V,r[6]=g*C+x*I+m*D+p*H,r[10]=g*M+x*P+m*B+p*W,r[14]=g*E+x*N+m*O+p*Z,r[3]=v*S+T*R+_*w+y*V,r[7]=v*C+T*I+_*D+y*H,r[11]=v*M+T*P+_*B+y*W,r[15]=v*E+T*N+_*O+y*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=c*d-l*f,T=o*d-l*h,_=o*f-c*h,y=a*d-l*u,S=a*f-c*u,C=a*h-o*u;return e*(x*v-m*T+p*_)-n*(g*v-m*y+p*S)+s*(g*T-x*y+p*C)-r*(g*_-x*S+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*o-n*a,T=e*c-s*a,_=e*l-r*a,y=n*c-s*o,S=n*l-r*o,C=s*l-r*c,M=u*x-h*g,E=u*m-f*g,R=u*p-d*g,I=h*m-f*x,P=h*p-d*x,N=f*p-d*m,w=v*N-T*P+_*I+y*R-S*E+C*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/w;return t[0]=(o*N-c*P+l*I)*D,t[1]=(s*P-n*N-r*I)*D,t[2]=(x*C-m*S+p*y)*D,t[3]=(f*S-h*C-d*y)*D,t[4]=(c*R-a*N-l*E)*D,t[5]=(e*N-s*R+r*E)*D,t[6]=(m*_-g*C-p*T)*D,t[7]=(u*C-f*_+d*T)*D,t[8]=(a*P-o*R+l*M)*D,t[9]=(n*R-e*P-r*M)*D,t[10]=(g*S-x*_+p*v)*D,t[11]=(h*_-u*S-d*v)*D,t[12]=(o*E-a*I-c*M)*D,t[13]=(e*I-n*E+s*M)*D,t[14]=(x*T-g*y-m*v)*D,t[15]=(u*y-h*T+f*v)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,x=a*u,m=a*h,p=o*h,v=c*l,T=c*u,_=c*h,y=n.x,S=n.y,C=n.z;return s[0]=(1-(x+p))*y,s[1]=(d+_)*y,s[2]=(g-T)*y,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(f+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+T)*C,s[9]=(m-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let l=1/a,u=1/o,h=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=kn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===kn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===kn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ca.prototype.isMatrix4=!0;var Zt=Ca,ps=new U,Fn=new Zt,Nd=new U(0,0,0),Ud=new U(1,1,1),Ri=new U,Po=new U,_n=new U,zu=new Zt,ku=new Ge,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fd=0,Vu=new U,ms=new Ge,oi=new Zt,Io=new U,_r=new U,Bd=new U,Od=new Ge,Hu=new U(1,0,0),Gu=new U(0,1,0),Wu=new U(0,0,1),Xu={type:"added"},zd={type:"removed"},gs={type:"childadded",child:null},nc={type:"childremoved",child:null},Fe=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new fn,n=new Ge,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Kt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(_r,Io,this.up):oi.lookAt(Io,_r,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(oi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xu),gs.child=t,this.dispatchEvent(gs),gs.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xu),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new U(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ie=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},kd={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Pd(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ic(a,r,t+1/3),this.g=ic(a,r,t),this.b=ic(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ne.workingToColorSpace(en.copy(this),t),Math.round(se(en.r*255,0,255))*65536+Math.round(se(en.g*255,0,255))*256+Math.round(se(en.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Te){ne.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Lo);let n=Kl(Ci.h,Lo.h,e),s=Kl(Ci.s,Lo.s,e),r=Kl(Ci.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new dt;dt.NAMES=Wh;var Ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ki=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new U,ai=new U,sc=new U,li=new U,xs=new U,_s=new U,qu=new U,rc=new U,oc=new U,ac=new U,lc=new _e,cc=new _e,uc=new _e,Di=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ai.subVectors(n,e),sc.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(ai),c=Bn.dot(sc),l=ai.dot(ai),u=ai.dot(sc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ai.subVectors(t,e),Bn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Bn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xs.subVectors(s,n),_s.subVectors(r,n),rc.subVectors(t,n);let c=xs.dot(rc),l=_s.dot(rc);if(c<=0&&l<=0)return e.copy(n);oc.subVectors(t,s);let u=xs.dot(oc),h=_s.dot(oc);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(xs,a);ac.subVectors(t,r);let d=xs.dot(ac),g=_s.dot(ac);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(_s,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return qu.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(qu,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(xs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),No.subVectors(this.max,vr),vs.subVectors(t.a,vr),ys.subVectors(t.b,vr),Ms.subVectors(t.c,vr),Pi.subVectors(ys,vs),Ii.subVectors(Ms,ys),qi.subVectors(vs,Ms);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-qi.z,qi.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,qi.z,0,-qi.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-qi.y,qi.x,0];return!hc(e,vs,ys,Ms,No)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,vs,ys,Ms,No))?!1:(Uo.crossVectors(Pi,Ii),e=[Uo.x,Uo.y,Uo.z],hc(e,vs,ys,Ms,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,Do=new jn,vs=new U,ys=new U,Ms=new U,Pi=new U,Ii=new U,qi=new U,vr=new U,No=new U,Uo=new U,Yi=new U;function hc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Pe=new U,Fo=new Ot,Vd=0,$e=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hd=new jn,yr=new U,fc=new U,fi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(fc)),this.expandByPoint(yr.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gd=0,Cn=new Zt,dc=new Fe,Ss=new U,vn=new jn,Mr=new jn,He=new U,fe=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(vn.min,Mr.min),vn.expandByPoint(He),He.addVectors(vn.max,Mr.max),vn.expandByPoint(He)):(vn.expandByPoint(Mr.min),vn.expandByPoint(Mr.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)He.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(t,l),He.add(Ss)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new U,c[M]=new U;let l=new U,u=new U,h=new U,f=new Ot,d=new Ot,g=new Ot,x=new U,m=new U;function p(M,E,R){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[M].add(x),o[E].add(x),o[R].add(x),c[M].add(m),c[E].add(m),c[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,E=v.length;M<E;++M){let R=v[M],I=R.start,P=R.count;for(let N=I,w=I+P;N<w;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let T=new U,_=new U,y=new U,S=new U;function C(M){y.fromBufferAttribute(s,M),S.copy(y);let E=o[M];T.copy(E),T.sub(y.multiplyScalar(y.dot(E))).normalize(),_.crossVectors(S,E);let I=_.dot(c[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,I)}for(let M=0,E=v.length;M<E;++M){let R=v[M],I=R.start,P=R.count;for(let N=I,w=I+P;N<w;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new $e(f,u,h)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pc=new U,Wd=new U,Xd=new Kt,zn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pc.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(pc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qd=0,di=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=zs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ui=new U,mc=new U,Bo=new U,Oo=new U,Nr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(mc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Bo),o=Oo.dot(this.direction),c=-Oo.dot(Bo),l=Oo.lengthSq(),u=Math.abs(1-a*a),h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mc).addScaledVector(Bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,T=n.z-a.z,_=Math.abs(c),y=Math.abs(l),S=Math.abs(u),C,M,E,R,I,P,N,w,D,B,O,V;if(_>=y&&_>=S?(E=c,P=h,D=g,V=p,c>=0?(C=l,M=u,R=f,I=d,N=x,w=m,B=v,O=T):(C=u,M=l,R=d,I=f,N=m,w=x,B=T,O=v)):y>=S?(E=l,P=f,D=x,V=v,l>=0?(C=u,M=c,R=d,I=h,N=m,w=g,B=T,O=p):(C=c,M=u,R=h,I=d,N=g,w=m,B=p,O=T)):(E=u,P=d,D=m,V=T,u>=0?(C=c,M=l,R=h,I=f,N=g,w=x,B=p,O=v):(C=l,M=c,R=f,I=h,N=x,w=g,B=v,O=p)),E===0)return null;let H=C/E,W=M/E,Z=1/E,xt=R-H*P,Et=I-W*P,jt=N-H*D,zt=w-W*D,Wt=B-H*V,K=O-W*V,it=Wt*zt-K*jt,St=xt*K-Et*Wt,$=jt*Et-zt*xt;if(s){if(it<0||St<0||$<0)return null}else if((it<0||St<0||$<0)&&(it>0||St>0||$>0))return null;let Q=it+St+$;if(Q===0)return null;let at=Z*(it*P+St*D+$*V);return(Q>0?at<0:at>0)?null:this.at(at/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yu=new Zt,Zi=new Nr,zo=new fi,Zu=new U,ko=new U,Vo=new U,Ho=new U,gc=new U,Go=new U,Ju=new U,Wo=new U,ue=class extends Fe{constructor(t=new fe,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(gc.fromBufferAttribute(h,t),a?Go.addScaledVector(gc,u):Go.addScaledVector(gc.sub(e),u))}e.add(Go)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(zo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(zo,Zu)===null||Zi.origin.distanceToSquared(Zu)>(t.far-t.near)**2))&&(Yu.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,y=T;_<y;_+=3){let S=o.getX(_),C=o.getX(_+1),M=o.getX(_+2);s=Xo(this,p,t,n,l,u,h,S,C,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),T=o.getX(m+1),_=o.getX(m+2);s=Xo(this,a,t,n,l,u,h,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,y=T;_<y;_+=3){let S=_,C=_+1,M=_+2;s=Xo(this,p,t,n,l,u,h,S,C,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,T=m+1,_=m+2;s=Xo(this,a,t,n,l,u,h,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yd(i,t,e,n,s,r,a,o){let c;if(t.side===Qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===zi,o),c===null)return null;Wo.copy(o),Wo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ko),i.getVertexPosition(c,Vo),i.getVertexPosition(l,Ho);let u=Yd(i,t,e,n,ko,Vo,Ho,Ju);if(u){let h=new U;Di.getBarycoord(Ju,ko,Vo,Ho,h),s&&(u.uv=Di.getInterpolatedAttribute(s,o,c,l,h,new Ot)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,c,l,h,new Ot)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};Di.getNormal(ko,Vo,Ho,f.normal),u.face=f,u.barycoord=h}return u}var Qi=class extends an{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Le,u=Le,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new Zt,$u=new Zt,qo=[],Ku=new jn,Zd=new Zt,Sr=new ue,br=new fi,pi=class extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Ku.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),br.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),$u.multiplyMatrices(n,bs),Sr.matrixWorld=$u,Sr.raycast(t,qo);for(let a=0,o=qo.length;a<o;a++){let c=qo[a];c.instanceId=r,c.object=this,e.push(c)}qo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,Hs,In));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new fi,Jd=new Ot(.5,.5),Yo=new U,Ds=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],T=r[13],_=r[14],y=r[15];if(s[0].setComponents(l-a,d-u,p-g,y-v).normalize(),s[1].setComponents(l+a,d+u,p+g,y+v).normalize(),s[2].setComponents(l+o,d+h,p+x,y+T).normalize(),s[3].setComponents(l-o,d-h,p-x,y-T).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,p-m,y-_).normalize();else if(s[4].setComponents(l-c,d-f,p-m,y-_).normalize(),e===kn)s[5].setComponents(l+c,d+f,p+m,y+_).normalize();else if(e===Cs)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=Jd.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yo.x=s.normal.x>0?t.max.x:t.min.x,Yo.y=s.normal.y>0?t.max.y:t.min.y,Yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ns=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qu=new Zt,bc=new Nr,Zo=new fi,Jo=new U,Ur=class extends Fe{constructor(t=new fe,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Qu.copy(s).invert(),bc.copy(t.ray).applyMatrix4(Qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);Jo.fromBufferAttribute(h,m),ju(Jo,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Jo.fromBufferAttribute(h,g),ju(Jo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ju(i,t,e,n,s,r,a){let o=bc.distanceSqToPoint(i);if(o<e){let c=new U;bc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends an{constructor(t=[],e=ki,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends an{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends an{constructor(t,e,n=Gn,s,r,a,o=Le,c=Le,l,u=Kn,h=1){if(u!==Kn&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},da=class extends Ni{constructor(t,e=Gn,n=ki,s,r,a=Le,o=Le,c,l=Kn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Br=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(x,m,p,v,T,_,y,S,C,M,E){let R=_/C,I=y/M,P=_/2,N=y/2,w=S/2,D=C+1,B=M+1,O=0,V=0,H=new U;for(let W=0;W<B;W++){let Z=W*I-N;for(let xt=0;xt<D;xt++){let Et=xt*R-P;H[x]=Et*v,H[m]=Z*T,H[p]=w,l.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[p]=S>0?1:-1,u.push(H.x,H.y,H.z),h.push(xt/C),h.push(1-W/M),O+=1}}for(let W=0;W<M;W++)for(let Z=0;Z<C;Z++){let xt=f+Z+D*W,Et=f+Z+D*(W+1),jt=f+(Z+1)+D*(W+1),zt=f+(Z+1)+D*W;c.push(xt,Et,zt),c.push(Et,jt,zt),V+=6}o.addGroup(d,V,E),d+=V,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Or=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new U,u=new Ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Us=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function v(){let _=new U,y=new U,S=0,C=(e-t)/n;for(let M=0;M<=r;M++){let E=[],R=M/r,I=R*(e-t)+t;for(let P=0;P<=s;P++){let N=P/s,w=N*c+o,D=Math.sin(w),B=Math.cos(w);y.x=I*D,y.y=-R*n+m,y.z=I*B,h.push(y.x,y.y,y.z),_.set(D,C,B).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-R),E.push(g++)}x.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let R=x[E][M],I=x[E+1][M],P=x[E+1][M+1],N=x[E][M+1];(t>0||E!==0)&&(u.push(R,I,N),S+=3),(e>0||E!==r-1)&&(u.push(I,P,N),S+=3)}l.addGroup(p,S,0),p+=S}function T(_){let y=g,S=new Ot,C=new U,M=0,E=_===!0?t:e,R=_===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;let I=g;for(let P=0;P<=s;P++){let w=P/s*c+o,D=Math.cos(w),B=Math.sin(w);C.x=E*B,C.y=m*R,C.z=E*D,h.push(C.x,C.y,C.z),f.push(0,R,0),S.x=D*.5+.5,S.y=B*.5*R+.5,d.push(S.x,S.y),g++}for(let P=0;P<s;P++){let N=y+P,w=I+P;_===!0?u.push(w,w+1,N):u.push(w+1,w,N),M+=3}l.addGroup(p,M,_===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pa=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new U,_=new U,y=new U;for(let S=0;S<e.length;S+=3)d(e[S+0],T),d(e[S+1],_),d(e[S+2],y),c(T,_,y,v)}function c(v,T,_,y){let S=y+1,C=[];for(let M=0;M<=S;M++){C[M]=[];let E=v.clone().lerp(_,M/S),R=T.clone().lerp(_,M/S),I=S-M;for(let P=0;P<=I;P++)P===0&&M===S?C[M][P]=E:C[M][P]=E.clone().lerp(R,P/I)}for(let M=0;M<S;M++)for(let E=0;E<2*(S-M)-1;E++){let R=Math.floor(E/2);E%2===0?(f(C[M][R+1]),f(C[M+1][R]),f(C[M][R])):(f(C[M][R+1]),f(C[M+1][R+1]),f(C[M+1][R]))}}function l(v){let T=new U;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(v),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function u(){let v=new U;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let _=m(v)/2/Math.PI+.5,y=p(v)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let T=a[v+0],_=a[v+2],y=a[v+4],S=Math.max(T,_,y),C=Math.min(T,_,y);S>.9&&C<.1&&(T<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,T){let _=v*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function g(){let v=new U,T=new U,_=new U,y=new U,S=new Ot,C=new Ot,M=new Ot;for(let E=0,R=0;E<r.length;E+=9,R+=6){v.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),y.copy(v).add(T).add(_).divideScalar(3);let I=m(y);x(S,R+0,v,I),x(C,R+2,T,I),x(M,R+4,_,I)}}function x(v,T,_,y){y<0&&v.x===1&&(a[T]=v.x-1),_.x===0&&_.z===0&&(a[T]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var zr=class i extends pa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Be=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*f-a;for(let T=0;T<l;T++){let _=T*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let T=v+l*p,_=v+l*(p+1),y=v+1+l*(p+1),S=v+1+l*p;d.push(T,_,S),d.push(_,y,S)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var kr=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],T=p/n,_=a+T*o,y=t*Math.cos(_),S=Math.sqrt(t*t-y*y),C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let M=0;M<=e;M++){let E=M/e,R=s+E*r;h.x=-S*Math.cos(R),h.y=y,h.z=S*Math.sin(R),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+C,1-T),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let T=u[p][v+1],_=u[p][v],y=u[p+1][v],S=u[p+1][v+1];(p!==0||a>0)&&d.push(T,_,S),(p!==n-1||c<Math.PI)&&d.push(_,y,S)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(th(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(th(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var xi={clone:ss,merge:nn},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fs=class extends ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ke=class extends di{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new dt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ma=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,o=2*e-n;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mc:a=t,c=2*n-e;break;case Sc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let y=0;y!==o;++y)r[y]=p*a[u+y]+v*a[l+y]+T*a[c+y]+_*a[h+y];return r}},_a=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},va=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ya=class extends Ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=d*f+g*2,v=h[p],T=h[p+1],_=t*f+g*2,y=u[_],S=u[_+1],C=tp(n,e,v,y,s);r[g]=Xh(C,x,T,S,m)}return r}};function Xh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function jd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function tp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Xh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=jd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xc(t.settings)&&(n.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ya(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tr:e=this.InterpolantFactoryMethodDiscrete;break;case ca:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break;case vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xc(this.settings)&&(eh(this.settings.inTangents,t),eh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Cd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ca;var Fi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Tr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ma.prototype.ValueTypeName="color";var Sa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="number";var ba=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Tr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="vector";var Ea=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new Ea,wa=class{constructor(t){this.manager=t!==void 0?t:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_c=new Zt,nh=new U,ih=new U,Gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_c,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$o=new U,Ko=new Ge,Jn=new U,ji=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($o,Ko,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Ko,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($o,Ko,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Ko,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new U,sh=new Ot,rh=new Ot,Je=class extends ji{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($l*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Tc=class extends Gr{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Wr=class extends Bs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Oi=class extends ji{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ec=class extends Gr{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Ec}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qr=class extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Es=-90,ws=1,Aa=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Es,ws,t,e);s.layers=this.layers,this.add(s);let r=new Je(Es,ws,t,e);r.layers=this.layers,this.add(r);let a=new Je(Es,ws,t,e);a.layers=this.layers,this.add(a);let o=new Je(Es,ws,t,e);o.layers=this.layers,this.add(o);let c=new Je(Es,ws,t,e);c.layers=this.layers,this.add(c);let l=new Je(Es,ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ra=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Yr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ep.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ep(){this._document.hidden===!1&&this.reset()}var Wc="\\[\\]\\.:\\/",np=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",ip="[^"+Wc.replace("\\.","")+"]",sp=/((?:WC+[\/:])*)/.source.replace("WC",Xc),rp=/(WCOD+)?/.source.replace("WCOD",ip),op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),lp=new RegExp("^"+sp+rp+op+ap+"$"),cp=["material","materials","bones","map"],wc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(np,"")}static parseTrackName(t){let e=lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=wc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var Kc=class Kc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Kc.prototype.isMatrix2=!0;var Ac=Kc;function qc(i,t,e,n){let s=up(n);switch(e){case zc:return i*t;case Hs:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case Hi:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Oa:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case za:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Wa:case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case oo:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cl:case ul:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fl:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function up(i){switch(i){case mn:case Uc:return{byteLength:1,components:1};case ks:case Fc:case Oe:return{byteLength:2,components:1};case Na:case Ua:return{byteLength:2,components:4};case Gn:case Da:case In:return{byteLength:4,components:1};case Bc:case Oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xp(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:yp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Tp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Fp,color_fragment:Bp,color_pars_fragment:Op,color_pars_vertex:zp,color_vertex:kp,common:Vp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:Jp,envmap_fragment:$p,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Qp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:u0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:v0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:E0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:B0,normal_pars_fragment:O0,normal_pars_vertex:z0,normal_vertex:k0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:um,tonemapping_pars_fragment:hm,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:xm,background_vert:_m,background_frag:vm,backgroundCube_vert:ym,backgroundCube_frag:Mm,cube_vert:Sm,cube_frag:bm,depth_vert:Tm,depth_frag:Em,distance_vert:wm,distance_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Nm,meshlambert_frag:Um,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:Om,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Vm,meshphysical_vert:Hm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:$m,sprite_frag:Km},wt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ei={basic:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:nn([wt.common,wt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:nn([wt.lights,wt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ei.physical={uniforms:nn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var _l={r:0,b:0,g:0},Qm=new Zt,gf=new Kt;gf.set(-1,0,0,0,1,0,0,0,1);function jm(i,t,e,n,s,r){let a=new dt(0),o=s===!0?0:1,c,l,u=null,h=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let _=v.backgroundBlurriness>0;T=t.get(T,_)}return T}function g(v){let T=!1,_=d(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),T=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let _=d(T);_&&(_.isCubeTexture||_.mapping===to)?(l===void 0&&(l=new ue(new Vn(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:ss(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gf),l.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,(u!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ue(new Be(2,2),new ae({name:"BackgroundMaterial",uniforms:ss(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ne.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,T){v.getRGB(_l,Gc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:p}}function tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(I,P,N,w,D){let B=!1,O=h(I,w,N,P);r!==O&&(r=O,l(r.object)),B=d(I,w,N,D),B&&g(I,w,N,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(I,P,N,w),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,P,N,w){let D=w.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let O=I.isInstancedMesh===!0?I.id:0,V=B[O];V===void 0&&(V={},B[O]=V);let H=V[N.id];H===void 0&&(H={},V[N.id]=H);let W=H[D];return W===void 0&&(W=f(c()),H[D]=W),W}function f(I){let P=[],N=[],w=[];for(let D=0;D<e;D++)P[D]=0,N[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:w,object:I,attributes:{},index:null}}function d(I,P,N,w){let D=r.attributes,B=P.attributes,O=0,V=N.getAttributes();for(let H in V)if(V[H].location>=0){let Z=D[H],xt=B[H];if(xt===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor)),Z===void 0||Z.attribute!==xt||xt&&Z.data!==xt.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function g(I,P,N,w){let D={},B=P.attributes,O=0,V=N.getAttributes();for(let H in V)if(V[H].location>=0){let Z=B[H];Z===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let xt={};xt.attribute=Z,Z&&Z.data&&(xt.data=Z.data),D[H]=xt,O++}r.attributes=D,r.attributesNum=O,r.index=w}function x(){let I=r.newAttributes;for(let P=0,N=I.length;P<N;P++)I[P]=0}function m(I){p(I,0)}function p(I,P){let N=r.newAttributes,w=r.enabledAttributes,D=r.attributeDivisors;N[I]=1,w[I]===0&&(i.enableVertexAttribArray(I),w[I]=1),D[I]!==P&&(i.vertexAttribDivisor(I,P),D[I]=P)}function v(){let I=r.newAttributes,P=r.enabledAttributes;for(let N=0,w=P.length;N<w;N++)P[N]!==I[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function T(I,P,N,w,D,B,O){O===!0?i.vertexAttribIPointer(I,P,N,D,B):i.vertexAttribPointer(I,P,N,w,D,B)}function _(I,P,N,w){x();let D=w.attributes,B=N.getAttributes(),O=P.defaultAttributeValues;for(let V in B){let H=B[V];if(H.location>=0){let W=D[V];if(W===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let Z=W.normalized,xt=W.itemSize,Et=t.get(W);if(Et===void 0)continue;let jt=Et.buffer,zt=Et.type,Wt=Et.bytesPerElement,K=zt===i.INT||zt===i.UNSIGNED_INT||W.gpuType===Da;if(W.isInterleavedBufferAttribute){let it=W.data,St=it.stride,$=W.offset;if(it.isInstancedInterleavedBuffer){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,it.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Q=0;Q<H.locationSize;Q++)T(H.location+Q,xt/H.locationSize,zt,Z,St*Wt,($+xt/H.locationSize*Q)*Wt,K)}else{if(W.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)p(H.location+it,W.meshPerAttribute);I.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let it=0;it<H.locationSize;it++)m(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let it=0;it<H.locationSize;it++)T(H.location+it,xt/H.locationSize,zt,Z,xt*Wt,xt/H.locationSize*it*Wt,K)}}else if(O!==void 0){let Z=O[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(H.location,Z);break;case 3:i.vertexAttrib3fv(H.location,Z);break;case 4:i.vertexAttrib4fv(H.location,Z);break;default:i.vertexAttrib1fv(H.location,Z)}}}}v()}function y(){E();for(let I in n){let P=n[I];for(let N in P){let w=P[N];for(let D in w){let B=w[D];for(let O in B)u(B[O].object),delete B[O];delete w[D]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let N in P){let w=P[N];for(let D in w){let B=w[D];for(let O in B)u(B[O].object),delete B[O];delete w[D]}}delete n[I.id]}function C(I){for(let P in n){let N=n[P];for(let w in N){let D=N[w];if(D[I.id]===void 0)continue;let B=D[I.id];for(let O in B)u(B[O].object),delete B[O];delete D[I.id]}}}function M(I){for(let P in n){let N=n[P],w=I.isInstancedMesh===!0?I.id:0,D=N[w];if(D!==void 0){for(let B in D){let O=D[B];for(let V in O)u(O[V].object),delete O[V];delete D[B]}delete N[w],Object.keys(N).length===0&&delete n[P]}}}function E(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function eg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let M=C===Oe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&C!==In&&!M&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Yt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:_,maxSamples:y,samples:S}}function ig(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,T=v*4,_=p.clippingState||null;c.value=_,_=u(g,f,T,d);for(let y=0;y!==T;++y)_[y]=e[y];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,_=d;T!==x;++T,_+=4)a.copy(h[T]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ws=4,sg=6,rg=20,og=256,co=new Oi,Yh=new dt,Qc=null,jc=0,tu=0,eu=!1,ag=new U,rs=new U,yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ag}=r;Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qc,jc,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Oe,format:Ln,colorSpace:Er,depthBuffer:!1},s=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lg(r)),this._blurMaterial=ug(r,t,e),this._ggxMaterial=cg(r,t,e)}return s}_compileMaterial(t){let e=new ue(new fe,t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s,r){let c=new Je(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Yh),h.toneMapping=Hn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Vn,new We({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Yh),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let y=this._cubeSize;Gs(s,_*y,T>2?y:0,y,y),h.setRenderTarget(s),p&&h.render(x,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ws?n-g+Ws:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Gs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,co),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Gs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,co)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),f=4*(this._cubeSize-u);Gs(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(c,co)}};function lg(i){let t=[],e=[],n=i,s=i-Ws+1+sg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,g=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let v=p%3*2/3-1,T=p>2?0:-1,_=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(_,d*f*p);for(let y=0;y<f;y++){let S=u[y*2]*2-1,C=u[y*2+1]*2-1;p===0?rs.set(1,C,S):p===1?rs.set(-S,1,-C):p===2?rs.set(-S,C,1):p===3?rs.set(-1,C,-S):p===4?rs.set(-S,-1,C):rs.set(S,C,-1),rs.toArray(x,(p*f+y)*d)}}let m=new fe;m.setAttribute("position",new $e(g,d)),m.setAttribute("outputDirection",new $e(x,d)),e.push(new ue(m,null)),n>Ws&&n--}return{lodMeshes:e,sizeLods:t}}function Zh(i,t,e){let n=new Se(i,t,e);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cg(i,t,e){return new ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ug(i,t,e){return new ae({name:"SphericalGaussianBlur",defines:{SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Jh(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function $h(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends Se{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:pn});r.uniforms.tEquirect.value=e;let a=new ue(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Ue),new Aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Pa||d===Ia)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Ml(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Pa||d===Ia,x=d===ki||d===is;if(g||x){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new yl(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new yl(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===Pa?f.mapping=ki:d===Ia&&(f.mapping=is),f}function c(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$i("WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let T=0,_=v.length;T<_;T+=3){let y=v[T+0],S=v[T+1],C=v[T+2];f.push(y,S,S,C,C,y)}}else{let v=g.array;x=g.version;for(let T=0,_=v.length/3-1;T<_;T+=3){let y=T+0,S=T+1,C=T+2;f.push(y,S,S,C,C,y)}}let m=new(g.count>=65535?Dr:Lr)(f,1);m.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function pg(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*a,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function mg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){let n=new WeakMap,s=new _e;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let _=o.attributes.position.count*T,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*y*4*h),C=new Cr(S,_,y,h);C.type=In,C.needsUpdate=!0;let M=T*4;for(let R=0;R<h;R++){let I=m[R],P=p[R],N=v[R],w=_*y*4*R;for(let D=0;D<I.count;D++){let B=D*M;d===!0&&(s.fromBufferAttribute(I,D),S[w+B+0]=s.x,S[w+B+1]=s.y,S[w+B+2]=s.z,S[w+B+3]=0),g===!0&&(s.fromBufferAttribute(P,D),S[w+B+4]=s.x,S[w+B+5]=s.y,S[w+B+6]=s.z,S[w+B+7]=0),x===!0&&(s.fromBufferAttribute(N,D),S[w+B+8]=s.x,S[w+B+9]=s.y,S[w+B+10]=s.z,S[w+B+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Ot(_,y)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xg(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var _g={[Zr]:"LINEAR_TONE_MAPPING",[Jr]:"REINHARD_TONE_MAPPING",[$r]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[jr]:"AGX_TONE_MAPPING",[ns]:"NEUTRAL_TONE_MAPPING",[Qr]:"CUSTOM_TONE_MAPPING"};function vg(i,t,e,n,s,r){let a=new Se(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new fe;l.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qt([0,2,0,0,2,0],2));let u=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ue(l,u),f=new Oi(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],T=!1;this.setSize=function(_,y){a.setSize(_,y),o!==null&&o.setSize(_,y),c!==null&&c.setSize(_,y);for(let S=0;S<v.length;S++){let C=v[S];C.setSize&&C.setSize(_,y)}},this.setEffects=function(_){v=_,T=v.length>0&&v[0].isRenderPass===!0;let y=a.width,S=a.height;v.length>0&&o===null&&(o=new Se(y,S,{type:Oe,depthBuffer:!1,stencilBuffer:!1}),c=new Se(y,S,{type:Oe,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let M=v[C];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(x||_.toneMapping===Hn&&v.length===0)return!1;if(p=y,y!==null){let S=y.width,C=y.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return T===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Hn,!0},this.hasRenderPass=function(){return T},this.end=function(_,y){_.toneMapping=m,x=!0;let S=a,C=o;for(let M=0;M<v.length;M++){let E=v[M];E.enabled!==!1&&(E.render(_,C,S,y),E.needsSwap!==!1&&(S=C,C=C===o?c:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},ne.getTransfer(d)===he&&(u.defines.SRGB_TRANSFER="");let M=_g[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var xf=new an,su=new Ni(1,1),_f=new Cr,vf=new fa,yf=new Fr,Kh=[],Qh=[],jh=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tl(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),ke(e,n)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;tf.set(n),i.uniformMatrix3fv(this.addr,!1,tf),ke(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),ke(e,n)}}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=e.isReversedDepthBuffer()?xl:gl,r=su):r=xf,e.setTexture2D(t||r,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vf,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yf,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Tg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Og}}function kg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function tx(i,t){i.uniform4uiv(this.addr,t)}function ex(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=su:a=xf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function nx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vf,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yf,r[a])}function sx(i,t,e){let n=this.cache,s=t.length,r=Tl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_f,r[a])}function rx(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Qg;case 36295:return jg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}var ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rx(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function nf(i,t){i.seq.push(t),i.map[t.id]=t}function ox(i,t,e){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),a=nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){nf(e,l===void 0?new ru(o,i,t):new ou(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new au(o),nf(e,h)),e=h}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);ox(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function sf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ax=37297,lx=0;function cx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var rf=new Kt;function ux(i){ne._getMatrix(rf,ne.workingColorSpace,i);let t=`mat3( ${rf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function of(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cx(i.getShaderSource(t),o)}else return r}function hx(i,t){let e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fx={[Zr]:"Linear",[Jr]:"Reinhard",[$r]:"Cineon",[Kr]:"ACESFilmic",[jr]:"AgX",[ns]:"Neutral",[Qr]:"Custom"};function dx(i,t){let e=fx[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vl=new U;function px(){ne.getLuminanceCoefficients(vl);let i=vl.x.toFixed(4),t=vl.y.toFixed(4),e=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ho(i){return i!==""}function af(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(_x,yx)}var vx=new Map;function yx(i,t){let e=Qt[t];if(e===void 0){let n=vx.get(t);if(n!==void 0)e=Qt[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lu(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(Mx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var bx={[ts]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Tx(i){return bx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ex={[ki]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function wx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ex[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ax={[is]:"ENVMAP_MODE_REFRACTION"};function Rx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cx={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Rh]:"ENVMAP_BLENDING_ADD"};function Px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ix(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Tx(e),l=wx(e),u=Rx(e),h=Px(e),f=Ix(e),d=mx(e),g=gx(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,hx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),a=lu(a),a=af(a,e),a=lf(a,e),o=lu(o),o=af(o,e),o=lf(o,e),a=cf(a),o=cf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+m+a,_=v+p+o,y=sf(s,s.VERTEX_SHADER,T),S=sf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(I){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(S)||"",D=P.trim(),B=N.trim(),O=w.trim(),V=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,S);else{let W=of(s,y,"vertex"),Z=of(s,S,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+W+`
`+Z)}else D!==""?Yt("WebGLProgram: Program Info Log:",D):(B===""||O==="")&&(H=!1);H&&(I.diagnostics={runnable:V,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(y),s.deleteShader(S),M=new Xs(s,x),E=xx(s,x)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,ax)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=S,this}var Dx=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uu(t),e.set(t,n)),n}},uu=class{constructor(t){this.id=Dx++,this.code=t,this.usedTimes=0}};function Nx(i){return i===Hi||i===oo||i===ao}function Ux(i,t,e,n,s,r){let a=new Pr,o=new cu,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,E,R,I,P,N){let w=I.fog,D=P.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=t.get(M.envMap||B,O),H=V&&V.mapping===to?V.image.height:null,W=d[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Yt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,xt=Z!==void 0?Z.length:0,Et=0;D.morphAttributes.position!==void 0&&(Et=1),D.morphAttributes.normal!==void 0&&(Et=2),D.morphAttributes.color!==void 0&&(Et=3);let jt,zt,Wt,K;if(W){let oe=ei[W];jt=oe.vertexShader,zt=oe.fragmentShader}else{jt=M.vertexShader,zt=M.fragmentShader;let oe=o.getVertexShaderStage(M),ee=o.getFragmentShaderStage(M);o.update(M,oe,ee),Wt=oe.id,K=ee.id}let it=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),$=P.isInstancedMesh===!0,Q=P.isBatchedMesh===!0,at=!!M.map,ut=!!M.matcap,nt=!!V,pt=!!M.aoMap,Ht=!!M.lightMap,Vt=!!M.bumpMap&&M.wireframe===!1,Gt=!!M.normalMap,$t=!!M.displacementMap,Xt=!!M.emissiveMap,le=!!M.metalnessMap,ve=!!M.roughnessMap,k=M.anisotropy>0,Ee=M.clearcoat>0,re=M.dispersion>0,L=M.retroreflectivity>0,b=M.iridescence>0,G=M.sheen>0,Y=M.transmission>0,j=k&&!!M.anisotropyMap,gt=Ee&&!!M.clearcoatMap,_t=Ee&&!!M.clearcoatNormalMap,et=Ee&&!!M.clearcoatRoughnessMap,st=b&&!!M.iridescenceMap,mt=b&&!!M.iridescenceThicknessMap,Ut=G&&!!M.sheenColorMap,yt=G&&!!M.sheenRoughnessMap,vt=!!M.specularMap,Nt=!!M.specularColorMap,kt=!!M.specularIntensityMap,rt=Y&&!!M.transmissionMap,F=Y&&!!M.thicknessMap,ot=!!M.gradientMap,tt=!!M.alphaMap,bt=M.alphaTest>0,Tt=!!M.alphaHash,lt=!!M.extensions,Ft=Hn;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let It={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:zt,defines:M.defines,customVertexShaderID:Wt,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Q,batchingColor:Q&&P._colorsTexture!==null,instancing:$,instancingColor:$&&P.instanceColor!==null,instancingMorph:$&&P.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:ut,envMap:nt,envMapMode:nt&&V.mapping,envMapCubeUVHeight:H,aoMap:pt,lightMap:Ht,bumpMap:Vt,normalMap:Gt,displacementMap:$t,emissiveMap:Xt,normalMapObjectSpace:Gt&&M.normalMapType===Ih,normalMapTangentSpace:Gt&&M.normalMapType===ml,packedNormalMap:Gt&&M.normalMapType===ml&&Nx(M.normalMap.format),metalnessMap:le,roughnessMap:ve,anisotropy:k,anisotropyMap:j,clearcoat:Ee,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:et,dispersion:re,retroreflection:L,iridescence:b,iridescenceMap:st,iridescenceThicknessMap:mt,sheen:G,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:Nt,specularIntensityMap:kt,transmission:Y,transmissionMap:rt,thicknessMap:F,gradientMap:ot,opaque:M.transparent===!1&&M.blending===zs&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:bt,alphaHash:Tt,combine:M.combine,mapUv:at&&g(M.map.channel),aoMapUv:pt&&g(M.aoMap.channel),lightMapUv:Ht&&g(M.lightMap.channel),bumpMapUv:Vt&&g(M.bumpMap.channel),normalMapUv:Gt&&g(M.normalMap.channel),displacementMapUv:$t&&g(M.displacementMap.channel),emissiveMapUv:Xt&&g(M.emissiveMap.channel),metalnessMapUv:le&&g(M.metalnessMap.channel),roughnessMapUv:ve&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:gt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(M.sheenRoughnessMap.channel),specularMapUv:vt&&g(M.specularMap.channel),specularColorMapUv:Nt&&g(M.specularColorMap.channel),specularIntensityMapUv:kt&&g(M.specularIntensityMap.channel),transmissionMapUv:rt&&g(M.transmissionMap.channel),thicknessMapUv:F&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Gt||k),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(at||tt),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&Gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Et,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:Xt&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===Qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&M.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)E.push(R),E.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(p(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function p(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let E=d[M.type],R;if(E){let I=ei[E];R=xi.clone(I.uniforms)}else R=M.uniforms;return R}function _(M,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new Lx(i,E,M,s),l.push(R),u.set(E,R)),R}function y(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){o.remove(M)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:l,dispose:C}}function Fx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=p),t++,v}function c(f,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let T=o(f,d,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(f,d,g,x,m,p){let v=o(f,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||Bx),n.length>1&&n.sort(d||hf),s.length>1&&s.sort(d||hf)}function h(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ff,i.set(n,[a])):s>=r.length?(a=new ff,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new dt};break;case"SpotLight":e={position:new U,direction:new U,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vx=0;function Hx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gx(i){let t=new zx,e=kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Zt,a=new Zt;function o(l){let u=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,T=0,_=0,y=0,S=0,C=0,M=0,E=0,R=0;l.sort(Hx);for(let P=0,N=l.length;P<N;P++){let w=l[P],D=w.color,B=w.intensity,O=w.distance,V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Hi?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=D.r*B,h+=D.g*B,f+=D.b*B;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],B);R++}else if(w.isSunLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let W=w.shadow,Z=e.get(w);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=V;let xt=W.getViewportCount();for(let Et=0;Et<xt;Et++)n.sunShadowMatrix[x+Et]=W.getMatrix(Et),n.sunShadowCascade[x+Et]=W._cascadeData[Et];x+=xt,g++}n.sun[d]=H,d++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let W=w.shadow,Z=e.get(w);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=H,m++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(D).multiplyScalar(B),H.distance=O,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[v]=H;let W=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,W.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=W.matrix,w.castShadow){let Z=e.get(w);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=V,C++}v++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(D).multiplyScalar(B),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[T]=H,T++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let W=w.shadow,Z=e.get(w);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=w.shadow.matrix,S++}n.point[p]=H,p++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(B),H.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[_]=H,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==T||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==C||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=T,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=C,I.numSpotMaps=M,I.numLightProbes=R,n.version=Vx++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){let _=l[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function df(i){let t=new Gx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Wx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new df(i),t.set(s,[o])):r>=a.length?(o=new df(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
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
}`,Yx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Zx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],pf=new Zt,uo=new U,iu=new U;function Jx(i,t,e){let n=new Ds,s=new Ot,r=new Ot,a=new _e,o=new ma,c=new ga,l={},u=e.maxTextureSize,h={[zi]:Qe,[Qe]:zi,[Xe]:Xe},f=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Xx,fragmentShader:qx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let p=this.type;this.render=function(S,C,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===lh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(pn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=p!==this.type;N&&C.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(D=>D.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,D=S.length;w<D;w++){let B=S[w],O=B.shadow;if(O===void 0){Yt("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Os){if(B.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Se(s.x,s.y,{format:Hi,type:Oe,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Ni(s.x,s.y,In),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Kn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le}else B.isPointLight?(O.map=new Ml(s.x),O.map.depthTexture=new da(s.x,Gn)):(O.map=new Se(s.x,s.y),O.map.depthTexture=new Ni(s.x,s.y,Gn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Kn,this.type===ts?(O.map.depthTexture.compareFunction=H?xl:gl,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let W=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();B.isPointLight!==!0&&O.updateMatrices(B,M);for(let Z=0;Z<W;Z++){let xt=O.getCamera(Z);if(B.isPointLight){let Et=O.camera,jt=O.matrix,zt=B.distance||Et.far;zt!==Et.far&&(Et.far=zt,Et.updateProjectionMatrix()),uo.setFromMatrixPosition(B.matrixWorld),Et.position.copy(uo),iu.copy(Et.position),iu.add(Yx[Z]),Et.up.copy(Zx[Z]),Et.lookAt(iu),Et.updateMatrixWorld(),jt.makeTranslation(-uo.x,-uo.y,-uo.z),pf.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),O._frustum.setFromProjectionMatrix(pf,Et.coordinateSystem,Et.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let Et=O.getViewport(Z);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),P.viewport(a)}n=O.getFrustum(Z),_(C,M,xt,B,this.type)}O.isPointLightShadow!==!0&&this.type===Os&&v(O,M),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,I)};function v(S,C){let M=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Se(s.x,s.y,{format:Hi,type:Oe}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,M,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,M,d,x,null)}function T(S,C,M,E){let R=null,I=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let P=R.uuid,N=C.uuid,w=l[P];w===void 0&&(w={},l[P]=w);let D=w[N];D===void 0&&(D=R.clone(),w[N]=D,C.addEventListener("dispose",y)),R=D}if(R.visible=C.visible,R.wireframe=C.wireframe,E===Os?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=M}return R}function _(S,C,M,E,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Os)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let N=t.update(S),w=S.material;if(Array.isArray(w)){let D=N.groups;for(let B=0,O=D.length;B<O;B++){let V=D[B],H=w[V.materialIndex];if(H&&H.visible){let W=T(S,H,E,R);S.onBeforeShadow(i,S,C,M,N,W,V),i.renderBufferDirect(M,null,N,W,S,V),S.onAfterShadow(i,S,C,M,N,W,V)}}}else if(w.visible){let D=T(S,w,E,R);S.onBeforeShadow(i,S,C,M,N,D,null),i.renderBufferDirect(M,null,N,D,S,null),S.onAfterShadow(i,S,C,M,N,D,null)}}let P=S.children;for(let N=0,w=P.length;N<w;N++)_(P[N],C,M,E,R)}function y(S){S.target.removeEventListener("dispose",y);for(let M in l){let E=l[M],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function $x(i,t){function e(){let F=!1,ot=new _e,tt=null,bt=new _e(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,lt,Ft,It,oe){oe===!0&&(Tt*=It,lt*=It,Ft*=It),ot.set(Tt,lt,Ft,It),bt.equals(ot)===!1&&(i.clearColor(Tt,lt,Ft,It),bt.copy(ot))},reset:function(){F=!1,tt=null,bt.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,tt=null,bt=null,Tt=null;return{setReversed:function(lt){if(ot!==lt){let Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),ot=lt;let It=Tt;Tt=null,this.setClear(It)}},getReversed:function(){return ot},setTest:function(lt){lt?it(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(lt){tt!==lt&&!F&&(i.depthMask(lt),tt=lt)},setFunc:function(lt){if(ot&&(lt=Gh[lt]),bt!==lt){switch(lt){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){Tt!==lt&&(Tt=lt,ot&&(lt=1-lt),i.clearDepth(lt))},reset:function(){F=!1,tt=null,bt=null,Tt=null,ot=!1}}}function s(){let F=!1,ot=null,tt=null,bt=null,Tt=null,lt=null,Ft=null,It=null,oe=null;return{setTest:function(ee){F||(ee?it(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ee){ot!==ee&&!F&&(i.stencilMask(ee),ot=ee)},setFunc:function(ee,gn,wn){(tt!==ee||bt!==gn||Tt!==wn)&&(i.stencilFunc(ee,gn,wn),tt=ee,bt=gn,Tt=wn)},setOp:function(ee,gn,wn){(lt!==ee||Ft!==gn||It!==wn)&&(i.stencilOp(ee,gn,wn),lt=ee,Ft=gn,It=wn)},setLocked:function(ee){F=ee},setClear:function(ee){oe!==ee&&(i.clearStencil(ee),oe=ee)},reset:function(){F=!1,ot=null,tt=null,bt=null,Tt=null,lt=null,Ft=null,It=null,oe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,_=null,y=null,S=null,C=null,M=new dt(0,0,0),E=0,R=!1,I=null,P=null,N=null,w=null,D=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=V>=2);let W=null,Z={},xt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),jt=new _e().fromArray(xt),zt=new _e().fromArray(Et);function Wt(F,ot,tt,bt){let Tt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<tt;Ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(ot+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return lt}let K={};K[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(Rs),Vt(!1),Gt(Rc),it(i.CULL_FACE),pt(pn);function it(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function St(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function $(F,ot){return f[F]!==ot?(i.bindFramebuffer(F,ot),f[F]=ot,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Q(F,ot){let tt=g,bt=!1;if(F){tt=d.get(ot),tt===void 0&&(tt=[],d.set(ot,tt));let Tt=F.textures;if(tt.length!==Tt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ft=Tt.length;lt<Ft;lt++)tt[lt]=i.COLOR_ATTACHMENT0+lt;tt.length=Tt.length,bt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(tt)}function at(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ut={[es]:i.FUNC_ADD,[uh]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};ut[fh]=i.MIN,ut[dh]=i.MAX;let nt={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Sh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Mh]:i.ONE_MINUS_DST_COLOR,[vh]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[Th]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(F,ot,tt,bt,Tt,lt,Ft,It,oe,ee){if(F===pn){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),F!==ch){if(F!==p||ee!==R){if((v!==es||y!==es)&&(i.blendEquation(i.FUNC_ADD),v=es,y=es),ee)switch(F){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",F);break}else switch(F){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",F);break}T=null,_=null,S=null,C=null,M.set(0,0,0),E=0,p=F,R=ee}return}Tt=Tt||ot,lt=lt||tt,Ft=Ft||bt,(ot!==v||Tt!==y)&&(i.blendEquationSeparate(ut[ot],ut[Tt]),v=ot,y=Tt),(tt!==T||bt!==_||lt!==S||Ft!==C)&&(i.blendFuncSeparate(nt[tt],nt[bt],nt[lt],nt[Ft]),T=tt,_=bt,S=lt,C=Ft),(It.equals(M)===!1||oe!==E)&&(i.blendColor(It.r,It.g,It.b,oe),M.copy(It),E=oe),p=F,R=!1}function Ht(F,ot){F.side===Xe?St(i.CULL_FACE):it(i.CULL_FACE);let tt=F.side===Qe;ot&&(tt=!tt),Vt(tt),F.blending===zs&&F.transparent===!1?pt(pn):pt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let bt=F.stencilWrite;o.setTest(bt),bt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function Gt(F){F!==oh?(it(i.CULL_FACE),F!==P&&(F===Rc?i.cullFace(i.BACK):F===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=F}function $t(F){F!==N&&(O&&i.lineWidth(F),N=F)}function Xt(F,ot,tt){F?(it(i.POLYGON_OFFSET_FILL),(w!==ot||D!==tt)&&(w=ot,D=tt,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,tt))):St(i.POLYGON_OFFSET_FILL)}function le(F){F?it(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ve(F){F===void 0&&(F=i.TEXTURE0+B-1),W!==F&&(i.activeTexture(F),W=F)}function k(F,ot,tt){tt===void 0&&(W===null?tt=i.TEXTURE0+B-1:tt=W);let bt=Z[tt];bt===void 0&&(bt={type:void 0,texture:void 0},Z[tt]=bt),(bt.type!==F||bt.texture!==ot)&&(W!==tt&&(i.activeTexture(tt),W=tt),i.bindTexture(F,ot||K[F]),bt.type=F,bt.texture=ot)}function Ee(){let F=Z[W];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function b(){try{i.texSubImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function G(){try{i.texSubImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function gt(){try{i.texStorage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function _t(){try{i.texStorage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function et(){try{i.texImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function mt(F){return h[F]!==void 0?h[F]:i.getParameter(F)}function Ut(F,ot){h[F]!==ot&&(i.pixelStorei(F,ot),h[F]=ot)}function yt(F){jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function vt(F){zt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function Nt(F,ot){let tt=l.get(ot);tt===void 0&&(tt=new WeakMap,l.set(ot,tt));let bt=tt.get(F);bt===void 0&&(bt=i.getUniformBlockIndex(ot,F.name),tt.set(F,bt))}function kt(F,ot){let bt=l.get(ot).get(F);c.get(ot)!==bt&&(i.uniformBlockBinding(ot,bt,F.__bindingPointIndex),c.set(ot,bt))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},W=null,Z={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,_=null,y=null,S=null,C=null,M=new dt(0,0,0),E=0,R=!1,I=null,P=null,N=null,w=null,D=null,jt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:St,bindFramebuffer:$,drawBuffers:Q,useProgram:at,setBlending:pt,setMaterial:Ht,setFlipSided:Vt,setCullFace:Gt,setLineWidth:$t,setPolygonOffset:Xt,setScissorTest:le,activeTexture:ve,bindTexture:k,unbindTexture:Ee,compressedTexImage2D:re,compressedTexImage3D:L,texImage2D:et,texImage3D:st,pixelStorei:Ut,getParameter:mt,updateUBOMapping:Nt,uniformBlockBinding:kt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:yt,viewport:vt,reset:rt}}function Kx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return g?new OffscreenCanvas(L,b):Ar("canvas")}function m(L,b,G){let Y=1,j=re(L);if((j.width>G||j.height>G)&&(Y=G/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let gt=Math.floor(Y*j.width),_t=Math.floor(Y*j.height);f===void 0&&(f=x(gt,_t));let et=b?x(gt,_t):f;return et.width=gt,et.height=_t,et.getContext("2d").drawImage(L,0,0,gt,_t),Yt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+gt+"x"+_t+")."),et}else return"data"in L&&Yt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function p(L){return L.generateMipmaps}function v(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,b,G,Y,j,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t;Y&&(_t=t.get("EXT_texture_norm16"),_t||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=b;if(b===i.RED&&(G===i.FLOAT&&(et=i.R32F),G===i.HALF_FLOAT&&(et=i.R16F),G===i.UNSIGNED_BYTE&&(et=i.R8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.R16_EXT),G===i.SHORT&&_t&&(et=_t.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.R8UI),G===i.UNSIGNED_SHORT&&(et=i.R16UI),G===i.UNSIGNED_INT&&(et=i.R32UI),G===i.BYTE&&(et=i.R8I),G===i.SHORT&&(et=i.R16I),G===i.INT&&(et=i.R32I)),b===i.RG&&(G===i.FLOAT&&(et=i.RG32F),G===i.HALF_FLOAT&&(et=i.RG16F),G===i.UNSIGNED_BYTE&&(et=i.RG8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.RG16_EXT),G===i.SHORT&&_t&&(et=_t.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RG8UI),G===i.UNSIGNED_SHORT&&(et=i.RG16UI),G===i.UNSIGNED_INT&&(et=i.RG32UI),G===i.BYTE&&(et=i.RG8I),G===i.SHORT&&(et=i.RG16I),G===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGB8UI),G===i.UNSIGNED_SHORT&&(et=i.RGB16UI),G===i.UNSIGNED_INT&&(et=i.RGB32UI),G===i.BYTE&&(et=i.RGB8I),G===i.SHORT&&(et=i.RGB16I),G===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),G===i.UNSIGNED_INT&&(et=i.RGBA32UI),G===i.BYTE&&(et=i.RGBA8I),G===i.SHORT&&(et=i.RGBA16I),G===i.INT&&(et=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&_t&&(et=_t.RGB16_EXT),G===i.SHORT&&_t&&(et=_t.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),b===i.RGBA){let st=gt?wr:ne.getTransfer(j);G===i.FLOAT&&(et=i.RGBA32F),G===i.HALF_FLOAT&&(et=i.RGBA16F),G===i.UNSIGNED_BYTE&&(et=st===he?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&_t&&(et=_t.RGBA16_EXT),G===i.SHORT&&_t&&(et=_t.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(L,b){let G;return L?b===null||b===Gn||b===Vs?G=i.DEPTH24_STENCIL8:b===In?G=i.DEPTH32F_STENCIL8:b===ks&&(G=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gn||b===Vs?G=i.DEPTH_COMPONENT24:b===In?G=i.DEPTH_COMPONENT32F:b===ks&&(G=i.DEPTH_COMPONENT16),G}function S(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Le&&L.minFilter!==Ue?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){let b=L.target;b.removeEventListener("dispose",C),E(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function M(L){let b=L.target;b.removeEventListener("dispose",M),I(b)}function E(L){let b=n.get(L);if(b.__webglInit===void 0)return;let G=L.source,Y=d.get(G);if(Y){let j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(L),Object.keys(Y).length===0&&d.delete(G)}n.remove(L)}function R(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let G=L.source,Y=d.get(G);delete Y[b.__cacheKey],a.memory.textures--}function I(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=L.textures;for(let Y=0,j=G.length;Y<j;Y++){let gt=n.get(G[Y]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(G[Y])}n.remove(L)}let P=0;function N(){P=0}function w(){return P}function D(L){P=L}function B(){let L=P;return L>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function O(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){let G=n.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){let Y=L.image;if(Y===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(G,L,b);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function H(L,b){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){St(G,L,b);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function W(L,b){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){St(G,L,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function Z(L,b){let G=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){$(G,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let xt={[aa]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Et={[Le]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},jt={[Dh]:i.NEVER,[Oh]:i.ALWAYS,[Nh]:i.LESS,[gl]:i.LEQUAL,[Uh]:i.EQUAL,[xl]:i.GEQUAL,[Fh]:i.GREATER,[Bh]:i.NOTEQUAL};function zt(L,b){if(b.type===In&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ue||b.magFilter===La||b.magFilter===eo||b.magFilter===Pn||b.minFilter===Ue||b.minFilter===La||b.minFilter===eo||b.minFilter===Pn)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,xt[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,xt[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,xt[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Et[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,jt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==eo&&b.minFilter!==Pn||b.type===In&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Wt(L,b){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",C));let Y=b.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let gt=O(b);if(gt!==L.__cacheKey){j[gt]===void 0&&(j[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),j[gt].usedTimes++;let _t=j[L.__cacheKey];_t!==void 0&&(j[L.__cacheKey].usedTimes--,_t.usedTimes===0&&R(b)),L.__cacheKey=gt,L.__webglTexture=j[gt].texture}return G}function K(L,b,G){return Math.floor(Math.floor(L/G)/b)}function it(L,b,G,Y){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,Y,b.data);else{gt.sort((Ut,yt)=>Ut.start-yt.start);let _t=0;for(let Ut=1;Ut<gt.length;Ut++){let yt=gt[_t],vt=gt[Ut],Nt=yt.start+yt.count,kt=K(vt.start,b.width,4),rt=K(yt.start,b.width,4);vt.start<=Nt+1&&kt===rt&&K(vt.start+vt.count-1,b.width,4)===kt?yt.count=Math.max(yt.count,vt.start+vt.count-yt.start):(++_t,gt[_t]=vt)}gt.length=_t+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ut=0,yt=gt.length;Ut<yt;Ut++){let vt=gt[Ut],Nt=Math.floor(vt.start/4),kt=Math.ceil(vt.count/4),rt=Nt%b.width,F=Math.floor(Nt/b.width),ot=kt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,rt,F,ot,tt,G,Y,b.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function St(L,b,G){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let j=Wt(L,b),gt=b.source;e.bindTexture(Y,L.__webglTexture,i.TEXTURE0+G);let _t=n.get(gt);if(gt.version!==_t.__version||j===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let tt=ne.getPrimaries(ne.workingColorSpace),bt=b.colorSpace===gi?null:ne.getPrimaries(b.colorSpace),Tt=b.colorSpace===gi||tt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let st=m(b.image,!1,s.maxTextureSize);st=Ee(b,st);let mt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),yt=_(b.internalFormat,mt,Ut,b.normalized,b.colorSpace,b.isVideoTexture);zt(Y,b);let vt,Nt=b.mipmaps,kt=b.isVideoTexture!==!0,rt=_t.__version===void 0||j===!0,F=gt.dataReady,ot=S(b,st);if(b.isDepthTexture)yt=y(b.format===Vi,b.type),rt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,yt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,mt,Ut,null));else if(b.isDataTexture)if(Nt.length>0){kt&&rt&&e.texStorage2D(i.TEXTURE_2D,ot,yt,Nt[0].width,Nt[0].height);for(let tt=0,bt=Nt.length;tt<bt;tt++)vt=Nt[tt],kt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,mt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,tt,yt,vt.width,vt.height,0,mt,Ut,vt.data);b.generateMipmaps=!1}else kt?(rt&&e.texStorage2D(i.TEXTURE_2D,ot,yt,st.width,st.height),F&&it(b,st,mt,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,mt,Ut,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,yt,Nt[0].width,Nt[0].height,st.depth);for(let tt=0,bt=Nt.length;tt<bt;tt++)if(vt=Nt[tt],b.format!==Ln)if(mt!==null)if(kt){if(F)if(b.layerUpdates.size>0){let Tt=qc(vt.width,vt.height,b.format,b.type);for(let lt of b.layerUpdates){let Ft=vt.data.subarray(lt*Tt/vt.data.BYTES_PER_ELEMENT,(lt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,lt,vt.width,vt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,st.depth,mt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,yt,vt.width,vt.height,st.depth,0,vt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,st.depth,mt,Ut,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,yt,vt.width,vt.height,st.depth,0,mt,Ut,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{kt&&rt&&e.texStorage2D(i.TEXTURE_2D,ot,yt,Nt[0].width,Nt[0].height);for(let tt=0,bt=Nt.length;tt<bt;tt++)vt=Nt[tt],b.format!==Ln?mt!==null?kt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,mt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,yt,vt.width,vt.height,0,vt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,vt.width,vt.height,mt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,tt,yt,vt.width,vt.height,0,mt,Ut,vt.data)}else if(b.isDataArrayTexture)if(kt){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,yt,st.width,st.height,st.depth),F)if(b.layerUpdates.size>0){let tt=qc(st.width,st.height,b.format,b.type);for(let bt of b.layerUpdates){let Tt=st.data.subarray(bt*tt/st.data.BYTES_PER_ELEMENT,(bt+1)*tt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,st.width,st.height,1,mt,Ut,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,st.width,st.height,st.depth,0,mt,Ut,st.data);else if(b.isData3DTexture)kt?(rt&&e.texStorage3D(i.TEXTURE_3D,ot,yt,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,yt,st.width,st.height,st.depth,0,mt,Ut,st.data);else if(b.isFramebufferTexture){if(rt)if(kt)e.texStorage2D(i.TEXTURE_2D,ot,yt,st.width,st.height);else{let tt=st.width,bt=st.height;for(let Tt=0;Tt<ot;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,yt,tt,bt,0,mt,Ut,null),tt>>=1,bt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),st.parentNode!==tt){tt.appendChild(st),h.add(b),tt.onpaint=bt=>{let Tt=bt.changedElements;for(let lt of h)Tt.includes(lt.image)&&(lt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Tt=i.RGBA,lt=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,lt,Ft,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(kt&&rt){let tt=re(Nt[0]);e.texStorage2D(i.TEXTURE_2D,ot,yt,tt.width,tt.height)}for(let tt=0,bt=Nt.length;tt<bt;tt++)vt=Nt[tt],kt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,mt,Ut,vt):e.texImage2D(i.TEXTURE_2D,tt,yt,mt,Ut,vt);b.generateMipmaps=!1}else if(kt){if(rt){let tt=re(st);e.texStorage2D(i.TEXTURE_2D,ot,yt,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Ut,st);p(b)&&v(Y),_t.__version=gt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $(L,b,G){if(b.image.length!==6)return;let Y=Wt(L,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);let gt=n.get(j);if(j.version!==gt.__version||Y===!0){e.activeTexture(i.TEXTURE0+G);let _t=ne.getPrimaries(ne.workingColorSpace),et=b.colorSpace===gi?null:ne.getPrimaries(b.colorSpace),st=b.colorSpace===gi||_t===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ut=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!mt&&!Ut?yt[lt]=m(b.image[lt],!0,s.maxCubemapSize):yt[lt]=Ut?b.image[lt].image:b.image[lt],yt[lt]=Ee(b,yt[lt]);let vt=yt[0],Nt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),rt=_(b.internalFormat,Nt,kt,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,ot=gt.__version===void 0||Y===!0,tt=j.dataReady,bt=S(b,vt);zt(i.TEXTURE_CUBE_MAP,b);let Tt;if(mt){F&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,rt,vt.width,vt.height);for(let lt=0;lt<6;lt++){Tt=yt[lt].mipmaps;for(let Ft=0;Ft<Tt.length;Ft++){let It=Tt[Ft];b.format!==Ln?Nt!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,rt,It.width,It.height,0,It.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,It.width,It.height,Nt,kt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,rt,It.width,It.height,0,Nt,kt,It.data)}}}else{if(Tt=b.mipmaps,F&&ot){Tt.length>0&&bt++;let lt=re(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,rt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ut){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Nt,kt,yt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,rt,yt[lt].width,yt[lt].height,0,Nt,kt,yt[lt].data);for(let Ft=0;Ft<Tt.length;Ft++){let oe=Tt[Ft].image[lt].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,oe.width,oe.height,Nt,kt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,rt,oe.width,oe.height,0,Nt,kt,oe.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,kt,yt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,rt,Nt,kt,yt[lt]);for(let Ft=0;Ft<Tt.length;Ft++){let It=Tt[Ft];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Nt,kt,It.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,rt,Nt,kt,It.image[lt])}}}p(b)&&v(i.TEXTURE_CUBE_MAP),gt.__version=j.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Q(L,b,G,Y,j,gt){let _t=r.convert(G.format,G.colorSpace),et=r.convert(G.type),st=_(G.internalFormat,_t,et,G.normalized,G.colorSpace),mt=n.get(b),Ut=n.get(G);if(Ut.__renderTarget=b,!mt.__hasExternalTextures){let yt=Math.max(1,b.width>>gt),vt=Math.max(1,b.height>>gt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,gt,st,yt,vt,b.depth,0,_t,et,null):e.texImage2D(j,gt,st,yt,vt,0,_t,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Ut.__webglTexture,0,le(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Ut.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(L,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,gt=y(b.stencilBuffer,j),_t=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(b),gt,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(b),gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,L)}else{let Y=b.textures;for(let j=0;j<Y.length;j++){let gt=Y[j],_t=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),st=_(gt.internalFormat,_t,et,gt.normalized,gt.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(b),st,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(b),st,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,st,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,b,G){let Y=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,b.depthTexture);let mt=r.convert(b.depthTexture.format),Ut=r.convert(b.depthTexture.type),yt;b.depthTexture.format===Kn?yt=i.DEPTH_COMPONENT24:b.depthTexture.format===Vi&&(yt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,b.width,b.height,0,mt,Ut,null)}}else V(b.depthTexture,0);let gt=j.__webglTexture,_t=le(b),et=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,st=b.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Kn)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,gt,0);else if(b.depthTexture.format===Vi)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(L){let b=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let Y=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)ut(b.__webglFramebuffer[Y],L,Y);else{let Y=L.texture.mipmaps;Y&&Y.length>0?ut(b.__webglFramebuffer[0],L,0):ut(b.__webglFramebuffer,L,0)}else if(G){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(b.__webglDepthbuffer[Y],L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,gt)}}else{let Y=L.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(L,b,G){let Y=n.get(L);b!==void 0&&Q(Y.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&nt(L)}function Ht(L){let b=L.texture,G=n.get(L),Y=n.get(b);L.addEventListener("dispose",M);let j=L.textures,gt=L.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),gt){G.__webglFramebuffer=[];for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[et]=[];for(let st=0;st<b.mipmaps.length;st++)G.__webglFramebuffer[et][st]=i.createFramebuffer()}else G.__webglFramebuffer[et]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let et=0;et<b.mipmaps.length;et++)G.__webglFramebuffer[et]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_t)for(let et=0,st=j.length;et<st;et++){let mt=n.get(j[et]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&ve(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){let st=j[et];G.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[et]);let mt=r.convert(st.format,st.colorSpace),Ut=r.convert(st.type),yt=_(st.internalFormat,mt,Ut,st.normalized,st.colorSpace,L.isXRRenderTarget===!0),vt=le(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,G.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),at(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,b);for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)Q(G.__webglFramebuffer[et][st],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else Q(G.__webglFramebuffer[et],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(b)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let et=0,st=j.length;et<st;et++){let mt=j[et],Ut=n.get(mt),yt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),zt(yt,mt),Q(G.__webglFramebuffer,L,mt,i.COLOR_ATTACHMENT0+et,yt,0),p(mt)&&v(yt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,Y.__webglTexture),zt(et,b),b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)Q(G.__webglFramebuffer[st],L,b,i.COLOR_ATTACHMENT0,et,st);else Q(G.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,et,0);p(b)&&v(et),e.unbindTexture()}L.depthBuffer&&nt(L)}function Vt(L){let b=L.textures;for(let G=0,Y=b.length;G<Y;G++){let j=b[G];if(p(j)){let gt=T(L),_t=n.get(j).__webglTexture;e.bindTexture(gt,_t),v(gt),e.unbindTexture()}}}let Gt=[],$t=[];function Xt(L){if(L.samples>0){if(ve(L)===!1){let b=L.textures,G=L.width,Y=L.height,j=i.COLOR_BUFFER_BIT,gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(L),et=b.length>1;if(et)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let st=L.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[mt]);let Ut=n.get(b[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,j,i.NEAREST),c===!0&&(Gt.length=0,$t.length=0,Gt.push(i.COLOR_ATTACHMENT0+mt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Gt.push(gt),$t.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[mt]);let Ut=n.get(b[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function le(L){return Math.min(s.maxSamples,L.samples)}function ve(L){let b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function k(L){let b=a.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Ee(L,b){let G=L.colorSpace,Y=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Er&&G!==gi&&(ne.getTransfer(G)===he?(Y!==Ln||j!==mn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",G)),b}function re(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.getTextureUnits=w,this.setTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=pt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qx(i,t){function e(n,s=gi){let r,a=ne.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Oe)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===kc)return i.RGB;if(n===Ln)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Hs)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Va||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===oo||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ul||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===dl||n===ao||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ae({vertexShader:jx,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new hu,p={},v=e.getContextAttributes(),T=null,_=null,y=[],S=[],C=new Ot,M=null,E=null,R=new Je;R.viewport=new _e;let I=new Je;I.viewport=new _e;let P=[R,I],N=new Ra,w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=y[K];return it===void 0&&(it=new Ls,y[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=y[K];return it===void 0&&(it=new Ls,y[K]=it),it.getGripSpace()},this.getHand=function(K){let it=y[K];return it===void 0&&(it=new Ls,y[K]=it),it.getHandSpace()};function B(K){let it=S.indexOf(K.inputSource);if(it===-1)return;let St=y[it];St!==void 0&&(St.update(K.inputSource,K.frame,l||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let K=0;K<y.length;K++){let it=S[K];it!==null&&(S[K]=null,y[K].disconnect(it))}w=null,D=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(T),d=null,f=null,h=null,s=null,_=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,$=null,Q=null;v.depth&&(Q=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Vi:Kn,$=v.stencil?Vs:Gn);let at={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Se(f.textureWidth,f.textureHeight,{format:Ln,type:mn,depthTexture:new Ni(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Se(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let it=0;it<K.removed.length;it++){let St=K.removed[it],$=S.indexOf(St);$>=0&&(S[$]=null,y[$].disconnect(St))}for(let it=0;it<K.added.length;it++){let St=K.added[it],$=S.indexOf(St);if($===-1){for(let at=0;at<y.length;at++)if(at>=S.length){S.push(St),$=at;break}else if(S[at]===null){S[at]=St,$=at;break}if($===-1)break}let Q=y[$];Q&&Q.connect(St)}}let H=new U,W=new U;function Z(K,it,St){H.setFromMatrixPosition(it.matrixWorld),W.setFromMatrixPosition(St.matrixWorld);let $=H.distanceTo(W),Q=it.projectionMatrix.elements,at=St.projectionMatrix.elements,ut=Q[14]/(Q[10]-1),nt=Q[14]/(Q[10]+1),pt=(Q[9]+1)/Q[5],Ht=(Q[9]-1)/Q[5],Vt=(Q[8]-1)/Q[0],Gt=(at[8]+1)/at[0],$t=ut*Vt,Xt=ut*Gt,le=$/(-Vt+Gt),ve=le*-Vt;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Q[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let k=ut+le,Ee=nt+le,re=$t-ve,L=Xt+($-ve),b=pt*nt/Ee*k,G=Ht*nt/Ee*k;K.projectionMatrix.makePerspective(re,L,b,G,k,Ee),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xt(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,St=K.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(St=m.depthFar)),N.near=I.near=R.near=it,N.far=I.far=R.far=St,(w!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),w=N.near,D=N.far),N.layers.mask=K.layers.mask|6,R.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let $=K.parent,Q=N.cameras;xt(N,$);for(let at=0;at<Q.length;at++)xt(Q[at],$);Q.length===2?Z(N,R,I):N.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Et(K,N,$)};function Et(K,it,St){St===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let jt=null;function zt(K,it){if(u=it.getViewerPose(l||a),g=it,u!==null){let St=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let $=!1;St.length!==N.cameras.length&&(N.cameras.length=0,$=!0);for(let nt=0;nt<St.length;nt++){let pt=St[nt],Ht=null;if(d!==null)Ht=d.getViewport(pt);else{let Gt=h.getViewSubImage(f,pt);Ht=Gt.viewport,nt===0&&(t.setRenderTargetTextures(_,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(_))}let Vt=P[nt];Vt===void 0&&(Vt=new Je,Vt.layers.enable(nt),Vt.viewport=new _e,P[nt]=Vt),Vt.matrix.fromArray(pt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(pt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),nt===0&&(N.matrix.copy(Vt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),$===!0&&N.cameras.push(Vt)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let nt=h.getDepthInformation(St[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Q&&Q.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let nt=0;nt<St.length;nt++){let pt=St[nt].camera;if(pt){let Ht=p[pt];Ht||(Ht=new Br,p[pt]=Ht);let Vt=h.getCameraImage(pt);Ht.sourceTexture=Vt}}}}for(let St=0;St<y.length;St++){let $=S[St],Q=y[St];$!==null&&Q!==void 0&&Q.update($,it,l||a)}jt&&jt(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Wt=new mf;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(K){jt=K},this.dispose=function(){}}},e_=new Zt,Mf=new Kt;Mf.set(-1,0,0,0,1,0,0,0,1);function n_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,_=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){let S=y.program;n.uniformBlockBinding(_,S)}function l(_,y){let S=s[_.id];S===void 0&&(m(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",v));let C=y.program;n.updateUBOMapping(_,C);let M=t.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function u(_){let y=h();_.__bindingPointIndex=y;let S=i.createBuffer(),C=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],S=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=S.length;M<E;M++){let R=S[M];if(Array.isArray(R))for(let I=0,P=R.length;I<P;I++)d(R[I],M,I,C);else d(R,M,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,S,C){if(x(_,y,S,C)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let P=E[I],N=p(P);g(P,_.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,S){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,S)}function x(_,y,S,C){let M=_.value,E=y+"_"+S;if(C[E]===void 0)return typeof M=="number"||typeof M=="boolean"?C[E]=M:ArrayBuffer.isView(M)?C[E]=M.slice():C[E]=M.clone(),!0;{let R=C[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return C[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function m(_){let y=_.uniforms,S=0,C=16;for(let E=0,R=y.length;E<R;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let P=0,N=I.length;P<N;P++){let w=I[P],D=Array.isArray(w.value)?w.value:[w.value];for(let B=0,O=D.length;B<O;B++){let V=D[B],H=p(V),W=S%C,Z=W%H.boundary,xt=W+Z;S+=Z,xt!==0&&C-xt<H.storage&&(S+=C-xt),w.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=H.storage}}}let M=S%C;return M>0&&(S+=C-M),_.__size=S,_.__cache={},this}function p(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var s_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function r_(){return ti===null&&(ti=new Qi(s_,16,16,Hi,Oe),ti.name="DFG_LUT",ti.minFilter=Ue,ti.magFilter=Ue,ti.wrapS=$n,ti.wrapT=$n,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Sl=class{constructor(t={}){let{canvas:e=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([Oa,Ba,Fa]),p=new Set([mn,Gn,ks,Vs,Na,Ua]),v=new Uint32Array(4),T=new Int32Array(4),_=new U,y=null,S=null,C=[],M=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,P=null,N=null,w=null,D=null;this._outputColorSpace=Te;let B=0,O=0,V=null,H=-1,W=null,Z=new _e,xt=new _e,Et=null,jt=new dt(0),zt=0,Wt=e.width,K=e.height,it=1,St=null,$=null,Q=new _e(0,0,Wt,K),at=new _e(0,0,Wt,K),ut=!1,nt=new Ds,pt=!1,Ht=!1,Vt=new Zt,Gt=new U,$t=new _e,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ve(){return V===null?it:1}let k=n;function Ee(A,z){return e.getContext(A,z)}let re,L,b,G,Y,j,gt,_t,et,st,mt,Ut,yt,vt,Nt,kt,rt,F,ot,tt,bt,Tt,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",gn,!1),k===null){let z="webgl2";if(k=Ee(z,A),k===null)throw Ee(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(A){throw e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Jt("WebGLRenderer: "+A.message),A}function Ft(){re=new fg(k),re.init(),bt=new Qx(k,re),L=new ng(k,re,t,bt),b=new $x(k,re),L.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),N=k.createFramebuffer(),w=k.createFramebuffer(),D=k.createFramebuffer(),G=new mg(k),Y=new Fx,j=new Kx(k,re,b,Y,L,bt,G),gt=new hg(R),_t=new xp(k),Tt=new tg(k,_t),et=new dg(k,_t,G,Tt),st=new xg(k,et,_t,Tt,G),F=new gg(k,L,j),Nt=new ig(Y),mt=new Ux(R,gt,re,L,Tt,Nt),Ut=new n_(R,Y),yt=new Ox,vt=new Wx(re),rt=new jm(R,gt,b,st,g,c),kt=new Jx(R,st,L),lt=new i_(k,G,L,b),ot=new eg(k,re,G),tt=new pg(k,re,G),G.programs=mt.programs,R.capabilities=L,R.extensions=re,R.properties=Y,R.renderLists=yt,R.shadowMap=kt,R.state=b,R.info=G}x!==mn&&(E=new vg(x,e.width,e.height,o,s,r));let It=new fu(R,k);this.xr=It,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(Wt,K,!1))},this.getSize=function(A){return A.set(Wt,K)},this.setSize=function(A,z,J=!0){if(It.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=A,K=z,e.width=Math.floor(A*it),e.height=Math.floor(z*it),J===!0&&(e.style.width=A+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Wt*it,K*it).floor()},this.setDrawingBufferSize=function(A,z,J){Wt=A,K=z,it=J,e.width=Math.floor(A*J),e.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===mn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,z,J,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,J,X),b.viewport(Z.copy(Q).multiplyScalar(it).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,z,J,X){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,z,J,X),b.scissor(xt.copy(at).multiplyScalar(it).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){b.setScissorTest(ut=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let X=0;if(A){let q=!1;if(V!==null){let Rt=V.texture.format;q=m.has(Rt)}if(q){let Rt=V.texture.type,Pt=p.has(Rt),At=rt.getClearColor(),Lt=rt.getClearAlpha(),Bt=At.r,te=At.g,ie=At.b;Pt?(v[0]=Bt,v[1]=te,v[2]=ie,v[3]=Lt,k.clearBufferuiv(k.COLOR,0,v)):(T[0]=Bt,T[1]=te,T[2]=ie,T[3]=Lt,k.clearBufferiv(k.COLOR,0,T))}else X|=k.COLOR_BUFFER_BIT}z&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),rt.dispose(),yt.dispose(),vt.dispose(),Y.dispose(),gt.dispose(),st.dispose(),Tt.dispose(),lt.dispose(),mt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Xl),It.removeEventListener("sessionend",mr),Yn.stop()};function oe(A){A.preventDefault(),Hc("WebGLRenderer: Context Lost."),I=!0}function ee(){Hc("WebGLRenderer: Context Restored."),I=!1;let A=G.autoReset,z=kt.enabled,J=kt.autoUpdate,X=kt.needsUpdate,q=kt.type;Ft(),G.autoReset=A,kt.enabled=z,kt.autoUpdate=J,kt.needsUpdate=X,kt.type=q}function gn(A){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wn(A){let z=A.target;z.removeEventListener("dispose",wn),fr(z)}function fr(A){dr(A),Y.remove(A)}function dr(A){let z=Y.get(A).programs;z!==void 0&&(z.forEach(function(J){mt.releaseProgram(J)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,X,q,Rt){z===null&&(z=Xt);let Pt=q.isMesh&&q.matrixWorld.determinantAffine()<0,At=Yl(A,z,J,X,q);b.setMaterial(X,Pt);let Lt=J.index,Bt=1;if(X.wireframe===!0){if(Lt=et.getWireframeAttribute(J),Lt===void 0)return;Bt=2}let te=J.drawRange,ie=J.attributes.position,Dt=te.start*Bt,de=(te.start+te.count)*Bt;Rt!==null&&(Dt=Math.max(Dt,Rt.start*Bt),de=Math.min(de,(Rt.start+Rt.count)*Bt)),Lt!==null?(Dt=Math.max(Dt,0),de=Math.min(de,Lt.count)):ie!=null&&(Dt=Math.max(Dt,0),de=Math.min(de,ie.count));let Ce=de-Dt;if(Ce<0||Ce===1/0)return;Tt.setup(q,X,At,J,Lt);let ye,ge=ot;if(Lt!==null&&(ye=_t.get(Lt),ge=tt,ge.setIndex(ye)),q.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*ve()),ge.setMode(k.LINES)):ge.setMode(k.TRIANGLES);else if(q.isLine){let je=X.linewidth;je===void 0&&(je=1),b.setLineWidth(je*ve()),q.isLineSegments?ge.setMode(k.LINES):q.isLineLoop?ge.setMode(k.LINE_LOOP):ge.setMode(k.LINE_STRIP)}else q.isPoints?ge.setMode(k.POINTS):q.isSprite&&ge.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let je=q._multiDrawStarts,Ct=q._multiDrawCounts,on=q._multiDrawCount,ce=Lt?_t.get(Lt).bytesPerElement:1,Rn=Y.get(X).currentProgram.getUniforms();for(let Zn=0;Zn<on;Zn++)Rn.setValue(k,"_gl_DrawID",Zn),ge.render(je[Zn]/ce,Ct[Zn])}else if(q.isInstancedMesh)ge.renderInstances(Dt,Ce,q.count);else if(J.isInstancedBufferGeometry){let je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,je);ge.renderInstances(Dt,Ce,Ct)}else ge.render(Dt,Ce)};function Ao(A,z,J,X){P!==null&&A.isNodeMaterial&&P.setObject(X,A),pt===!0&&Nt.setState(A,J,!1),A.transparent===!0&&A.side===Xe&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,Un(A,z,X),A.side=zi,A.needsUpdate=!0,Un(A,z,X),A.side=Xe):Un(A,z,X)}this.compile=function(A,z,J=null){J===null&&(J=A),P!==null&&P.renderStart(A,z,J),S=vt.get(J),S.init(z),M.push(S),J.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),A!==J&&A.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),Ht=this.localClippingEnabled,pt=Nt.init(this.clippingPlanes,Ht),pt===!0&&Nt.setGlobalState(this.clippingPlanes,z),P!==null&&kt.render(S.state.shadowsArray,J,z);let X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Pt=0;Pt<Rt.length;Pt++){let At=Rt[Pt];Ao(At,J,z,q),X.add(At)}else Ao(Rt,J,z,q),X.add(Rt)}),S=M.pop(),P!==null&&P.renderEnd(),X},this.compileAsync=function(A,z,J=null){let X=this.compile(A,z,J);return new Promise(q=>{function Rt(){if(X.forEach(function(Pt){let Lt=Y.get(Pt).currentProgram;(Lt===void 0||Lt.isReady())&&X.delete(Pt)}),X.size===0){q(A);return}setTimeout(Rt,10)}re.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let pr=null;function qn(A){pr&&pr(A)}function Xl(){Yn.stop()}function mr(){Yn.start()}let Yn=new mf;Yn.setAnimationLoop(qn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){pr=A,It.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},It.addEventListener("sessionstart",Xl),It.addEventListener("sessionend",mr),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(A,z);let J=It.enabled===!0&&It.isPresenting===!0,X=E!==null&&(V===null||J)&&E.begin(R,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(z),z=It.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,V),S=vt.get(A,M.length),S.init(z),S.state.textureUnits=j.getTextureUnits(),M.push(S),Vt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(Vt,kn,z.reversedDepth),Ht=this.localClippingEnabled,pt=Nt.init(this.clippingPlanes,Ht),y=yt.get(A,C.length),y.init(),C.push(y),It.enabled===!0&&It.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&xn(Pt,z,-1/0,R.sortObjects)}xn(A,z,0,R.sortObjects),y.finish(),P!==null&&P.updateLights(S.state.lightsArray),R.sortObjects===!0&&y.sort(St,$),le=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,le&&rt.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Nt.beginShadows();let q=S.state.shadowsArray;if(kt.render(q,A,z),pt===!0&&Nt.endShadows(),(X&&E.hasRenderPass())===!1){let Pt=y.opaque,At=y.transmissive;if(S.setupLights(),z.isArrayCamera){let Lt=z.cameras;if(At.length>0)for(let Bt=0,te=Lt.length;Bt<te;Bt++){let ie=Lt[Bt];Nn(Pt,At,A,ie)}le&&rt.render(A);for(let Bt=0,te=Lt.length;Bt<te;Bt++){let ie=Lt[Bt];gr(y,A,ie,ie.viewport)}}else At.length>0&&Nn(Pt,At,A,z),le&&rt.render(A),gr(y,A,z)}V!==null&&O===0&&(j.updateMultisampleRenderTarget(V),j.updateRenderTargetMipmap(V)),X&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),Tt.resetDefaultState(),H=-1,W=null,M.pop(),M.length>0?(S=M[M.length-1],j.setTextureUnits(S.state.textureUnits),pt===!0&&Nt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,P!==null&&P.renderEnd()};function xn(A,z,J,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(nt)){X&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);let Pt=st.update(A),At=A.material;At.visible&&y.push(A,Pt,At,J,$t.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(nt))){let Pt=st.update(A),At=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),$t.copy(Pt.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(At)){let Lt=Pt.groups;for(let Bt=0,te=Lt.length;Bt<te;Bt++){let ie=Lt[Bt],Dt=At[ie.materialIndex];Dt&&Dt.visible&&y.push(A,Pt,Dt,J,$t.z,ie,z)}}else At.visible&&y.push(A,Pt,At,J,$t.z,null,z)}}let Rt=A.children;for(let Pt=0,At=Rt.length;Pt<At;Pt++)xn(Rt[Pt],z,J,X)}function gr(A,z,J,X){let{opaque:q,transmissive:Rt,transparent:Pt}=A;S.setupLightsView(J),pt===!0&&Nt.setGlobalState(R.clippingPlanes,J),X&&b.viewport(Z.copy(X)),q.length>0&&si(q,z,J),Rt.length>0&&si(Rt,z,J),Pt.length>0&&si(Pt,z,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Nn(A,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Dt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Se(1,1,{generateMipmaps:!0,type:Dt?Oe:mn,minFilter:Pn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Rt=S.state.transmissionRenderTarget[X.id],Pt=X.viewport||Z;Rt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let At=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(jt),zt=R.getClearAlpha(),zt<1&&R.setClearColor(16777215,.5),R.clear(),le&&rt.render(J);let te=R.toneMapping;R.toneMapping=Hn;let ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),pt===!0&&Nt.setGlobalState(R.clippingPlanes,X),si(A,J,X),j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let de=0,Ce=z.length;de<Ce;de++){let ye=z[de],{object:ge,geometry:je,material:Ct,group:on}=ye;if(Ct.side===Xe&&ge.layers.test(X.layers)){let ce=Ct.side;Ct.side=Qe,Ct.needsUpdate=!0,An(ge,J,X,je,Ct,on),Ct.side=ce,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt))}R.setRenderTarget(At,Lt,Bt),R.setClearColor(jt,zt),ie!==void 0&&(X.viewport=ie),R.toneMapping=te}function si(A,z,J){let X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Rt=A.length;q<Rt;q++){let Pt=A[q],{object:At,geometry:Lt,group:Bt}=Pt,te=Pt.material;te.allowOverride===!0&&X!==null&&(te=X),At.layers.test(J.layers)&&An(At,z,J,Lt,te,Bt)}}function An(A,z,J,X,q,Rt){P!==null&&q.isNodeMaterial&&P.setObject(A,q),A.onBeforeRender(R,z,J,X,q,Rt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,z,J,X,A,Rt),q.transparent===!0&&q.side===Xe&&q.forceSinglePass===!1?(q.side=Qe,q.needsUpdate=!0,R.renderBufferDirect(J,z,X,q,A,Rt),q.side=zi,q.needsUpdate=!0,R.renderBufferDirect(J,z,X,q,A,Rt),q.side=Xe):R.renderBufferDirect(J,z,X,q,A,Rt),A.onAfterRender(R,z,J,X,q,Rt)}function Un(A,z,J){z.isScene!==!0&&(z=Xt);let X=Y.get(A),q=S.state.lights,Rt=S.state.shadowsArray,Pt=q.state.version,At=mt.getParameters(A,q.state,Rt,z,J,S.state.lightProbeGridArray),Lt=mt.getProgramCacheKey(At),Bt=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=gt.get(A.envMap||X.environment,te),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",wn),Bt=new Map,X.programs=Bt);let ie=Bt.get(Lt);if(ie!==void 0){if(X.currentProgram===ie&&X.lightsStateVersion===Pt)return Co(A,At),ie}else At.uniforms=mt.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,J,At),A.onBeforeCompile(At,R),ie=mt.acquireProgram(At,Lt),Bt.set(Lt,ie),X.uniforms=At.uniforms;let Dt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=Nt.uniform),Co(A,At),X.needsLights=Jl(A),X.lightsStateVersion=Pt,X.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.sunLights.value=q.state.sun,Dt.sunLightShadows.value=q.state.sunShadow,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.sunShadowMatrix.value=q.state.sunShadowMatrix,Dt.sunShadowCascade.value=q.state.sunShadowCascade,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=ie,X.uniformsList=null,ie}function Ro(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Co(A,z){let J=Y.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function ql(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let J=0,X=A.length;J<X;J++){let q=A[J];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function Yl(A,z,J,X,q){z.isScene!==!0&&(z=Xt),j.resetTextureUnits();let Rt=z.fog,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,At=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ne.workingColorSpace,Lt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Bt=gt.get(X.envMap||Pt,Lt),te=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ie=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,Ce=!!J.morphAttributes.color,ye=Hn;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ye=R.toneMapping);let ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,je=ge!==void 0?ge.length:0,Ct=Y.get(X),on=S.state.lights;if(pt===!0&&(Ht===!0||A!==W)){let xe=A===W&&X.id===H;Nt.setState(X,A,xe)}let ce=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==on.state.version||Ct.outputColorSpace!==At||q.isBatchedMesh&&Ct.batching===!1||!q.isBatchedMesh&&Ct.batching===!0||q.isBatchedMesh&&Ct.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ct.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ct.instancing===!1||!q.isInstancedMesh&&Ct.instancing===!0||q.isSkinnedMesh&&Ct.skinning===!1||!q.isSkinnedMesh&&Ct.skinning===!0||q.isInstancedMesh&&Ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ct.instancingMorph===!1&&q.morphTexture!==null||Ct.envMap!==Bt||X.fog===!0&&Ct.fog!==Rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Nt.numPlanes||Ct.numIntersection!==Nt.numIntersection)||Ct.vertexAlphas!==te||Ct.vertexTangents!==ie||Ct.morphTargets!==Dt||Ct.morphNormals!==de||Ct.morphColors!==Ce||Ct.toneMapping!==ye||Ct.morphTargetsCount!==je||!!Ct.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ct.__version=X.version);let Rn=Ct.currentProgram;ce===!0&&(Rn=Un(X,z,q),P&&X.isNodeMaterial&&P.onUpdateProgram(X,Rn,Ct));let Zn=!1,Ei=!1,hs=!1,pe=Rn.getUniforms(),we=Ct.uniforms;if(b.useProgram(Rn.program)&&(Zn=!0,Ei=!0,hs=!0),X.id!==H&&(H=X.id,Ei=!0),Ct.needsLights){let xe=ql(S.state.lightProbeGridArray,q);Ct.lightProbeGrid!==xe&&(Ct.lightProbeGrid=xe,Ei=!0)}if(Zn||W!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(k,"projectionMatrix",A.projectionMatrix),pe.setValue(k,"viewMatrix",A.matrixWorldInverse);let Ai=pe.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,Gt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&pe.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,Ei=!0,hs=!0)}if(Ct.needsLights&&(on.state.sunShadowMap.length>0&&pe.setValue(k,"sunShadowMap",on.state.sunShadowMap,j),on.state.directionalShadowMap.length>0&&pe.setValue(k,"directionalShadowMap",on.state.directionalShadowMap,j),on.state.spotShadowMap.length>0&&pe.setValue(k,"spotShadowMap",on.state.spotShadowMap,j),on.state.pointShadowMap.length>0&&pe.setValue(k,"pointShadowMap",on.state.pointShadowMap,j)),q.isSkinnedMesh){pe.setOptional(k,q,"bindMatrix"),pe.setOptional(k,q,"bindMatrixInverse");let xe=q.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),pe.setValue(k,"boneTexture",xe.boneTexture,j))}q.isBatchedMesh&&(pe.setOptional(k,q,"batchingTexture"),pe.setValue(k,"batchingTexture",q._matricesTexture,j),pe.setOptional(k,q,"batchingIdTexture"),pe.setValue(k,"batchingIdTexture",q._indirectTexture,j),pe.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&pe.setValue(k,"batchingColorTexture",q._colorsTexture,j));let wi=J.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&F.update(q,J,Rn),(Ei||Ct.receiveShadow!==q.receiveShadow)&&(Ct.receiveShadow=q.receiveShadow,pe.setValue(k,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(we.envMapIntensity.value=z.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=r_()),Ei){if(pe.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&Zl(we,hs),Rt&&X.fog===!0&&Ut.refreshFogUniforms(we,Rt),Ut.refreshMaterialUniforms(we,X,it,K,S.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.lightProbeGrid){let xe=Ct.lightProbeGrid;we.probesSH.value=xe.texture,we.probesMin.value.copy(xe.boundingBox.min),we.probesMax.value.copy(xe.boundingBox.max),we.probesResolution.value.copy(xe.resolution)}Xs.upload(k,Ro(Ct),we,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xs.upload(k,Ro(Ct),we,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(k,"center",q.center),pe.setValue(k,"modelViewMatrix",q.modelViewMatrix),pe.setValue(k,"normalMatrix",q.normalMatrix),pe.setValue(k,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let xe=X.uniformsGroups;for(let Ai=0,fs=xe.length;Ai<fs;Ai++){let Nu=xe[Ai];lt.update(Nu,Rn),lt.bind(Nu,Rn)}}return Rn}function Zl(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,z,J){let X=Y.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=z,Y.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=Y.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){V=A,B=z,O=J;let X=null,q=!1,Rt=!1;if(A){let At=Y.get(A);if(At.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(k.FRAMEBUFFER,At.__webglFramebuffer),Z.copy(A.viewport),xt.copy(A.scissor),Et=A.scissorTest,b.viewport(Z),b.scissor(xt),b.setScissorTest(Et),H=-1;return}else if(At.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(At.__hasExternalTextures)j.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(At.__boundDepthTexture!==te){if(te!==null&&Y.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Rt=!0);let Bt=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[z])?X=Bt[z][J]:X=Bt[z],q=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?X=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?X=Bt[J]:X=Bt,Z.copy(A.viewport),xt.copy(A.scissor),Et=A.scissorTest}else Z.copy(Q).multiplyScalar(it).floor(),xt.copy(at).multiplyScalar(it).floor(),Et=ut;if(J!==0&&(X=N),b.bindFramebuffer(k.FRAMEBUFFER,X)&&b.drawBuffers(A,X),b.viewport(Z),b.scissor(xt),b.setScissorTest(Et),q){let At=Y.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,J)}else if(Rt){let At=z;for(let Lt=0;Lt<A.textures.length;Lt++){let Bt=Y.get(A.textures[Lt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Lt,Bt.__webglTexture,J,At)}}else if(A!==null&&J!==0){let At=Y.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,At.__webglTexture,J)}H=-1};function ri(A){let z=Y.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,J,X,q,Rt,Pt,At=0){if(!(A&&A.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){b.bindFramebuffer(k.FRAMEBUFFER,Lt);try{let Bt=A.textures[At],te=Bt.format,ie=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+At);let Dt=ri(Bt);if(Dt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&J>=0&&J<=A.height-q&&k.readPixels(z,J,X,q,bt.convert(te),bt.convert(ie),Rt)}finally{let Bt=V!==null?Y.get(V).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,X,q,Rt,Pt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(z>=0&&z<=A.width-X&&J>=0&&J<=A.height-q){b.bindFramebuffer(k.FRAMEBUFFER,Lt);let Bt=A.textures[At],te=Bt.format,ie=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+At);let Dt=ri(Bt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,de),k.bufferData(k.PIXEL_PACK_BUFFER,Rt.byteLength,k.STREAM_READ),k.readPixels(z,J,X,q,bt.convert(te),bt.convert(ie),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ce=V!==null?Y.get(V).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,Ce);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Hh(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,de),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Rt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(de),k.deleteSync(ye),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let X=Math.pow(2,-J),q=Math.floor(A.image.width*X),Rt=Math.floor(A.image.height*X),Pt=z!==null?z.x:0,At=z!==null?z.y:0;j.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Pt,At,q,Rt),b.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,X=null,q=0,Rt=0){let Pt,At,Lt,Bt,te,ie,Dt,de,Ce,ye=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(J!==null)Pt=J.max.x-J.min.x,At=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,te=J.min.y,ie=J.isBox3?J.min.z:0;else{let we=Math.pow(2,-q);Pt=Math.floor(ye.width*we),At=Math.floor(ye.height*we),A.isDataArrayTexture?Lt=ye.depth:A.isData3DTexture?Lt=Math.floor(ye.depth*we):Lt=1,Bt=0,te=0,ie=0}X!==null?(Dt=X.x,de=X.y,Ce=X.z):(Dt=0,de=0,Ce=0);let ge=bt.convert(z.format),je=bt.convert(z.type),Ct;z.isData3DTexture?(j.setTexture3D(z,0),Ct=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Ct=k.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Ct=k.TEXTURE_2D),b.activeTexture(k.TEXTURE0),b.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let on=b.getParameter(k.UNPACK_ROW_LENGTH),ce=b.getParameter(k.UNPACK_IMAGE_HEIGHT),Rn=b.getParameter(k.UNPACK_SKIP_PIXELS),Zn=b.getParameter(k.UNPACK_SKIP_ROWS),Ei=b.getParameter(k.UNPACK_SKIP_IMAGES);b.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),b.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(k.UNPACK_SKIP_ROWS,te),b.pixelStorei(k.UNPACK_SKIP_IMAGES,ie);let hs=A.isDataArrayTexture||A.isData3DTexture,pe=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let we=Y.get(A),wi=Y.get(z),xe=Y.get(we.__renderTarget),Ai=Y.get(wi.__renderTarget);b.bindFramebuffer(k.READ_FRAMEBUFFER,xe.__webglFramebuffer),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let fs=0;fs<Lt;fs++)hs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,q,ie+fs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,Rt,Ce+fs)),k.blitFramebuffer(Bt,te,Pt,At,Dt,de,Pt,At,k.DEPTH_BUFFER_BIT,k.NEAREST);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Y.has(A)){let we=Y.get(A),wi=Y.get(z);b.bindFramebuffer(k.READ_FRAMEBUFFER,w),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,D);for(let xe=0;xe<Lt;xe++)hs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,q,ie+xe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,q),pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wi.__webglTexture,Rt,Ce+xe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wi.__webglTexture,Rt),q!==0?k.blitFramebuffer(Bt,te,Pt,At,Dt,de,Pt,At,k.COLOR_BUFFER_BIT,k.NEAREST):pe?k.copyTexSubImage3D(Ct,Rt,Dt,de,Ce+xe,Bt,te,Pt,At):k.copyTexSubImage2D(Ct,Rt,Dt,de,Bt,te,Pt,At);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pe?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ct,Rt,Dt,de,Ce,Pt,At,Lt,ge,je,ye.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ct,Rt,Dt,de,Ce,Pt,At,Lt,ge,ye.data):k.texSubImage3D(Ct,Rt,Dt,de,Ce,Pt,At,Lt,ge,je,ye):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Rt,Dt,de,Pt,At,ge,je,ye.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Rt,Dt,de,ye.width,ye.height,ge,ye.data):k.texSubImage2D(k.TEXTURE_2D,Rt,Dt,de,Pt,At,ge,je,ye);b.pixelStorei(k.UNPACK_ROW_LENGTH,on),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce),b.pixelStorei(k.UNPACK_SKIP_PIXELS,Rn),b.pixelStorei(k.UNPACK_SKIP_ROWS,Zn),b.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),Rt===0&&z.generateMipmaps&&k.generateMipmap(Ct),b.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,O=0,V=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Ae=(i,t,e)=>i<t?t:i>e?e:i,me=(i,t,e)=>i+(t-i)*e,wl=i=>i*i*(3-2*i),Ve=(i,t,e)=>{let n=Ae((e-i)/(t-i),0,1);return n*n*(3-2*n)},Sf=1337;function bf(i){Sf=i|0}function o_(i){return i=i^Sf|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var vi=(i,t)=>o_(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function _i(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return me(vi(e,t),vi(e+1,t),s)}var Al=(i,t=0)=>_i(i,t)*.55+_i(i*2.03,t+7)*.3+_i(i*4.1,t+13)*.15;function cn(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var El=new dt,Mt=i=>(El.set(i),[El.r,El.g,El.b]),Tf=(i,t,e)=>[me(i[0],t[0],e),me(i[1],t[1],e),me(i[2],t[2],e)],Sn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var pu=["city","sakura","coast","country"],fo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5}},du=1500,Ef=260,Gi=0,mu=0;function Af(i){mu=Math.max(0,pu.indexOf(i))}function Cl(i){let t=Math.floor(i/du),e=i-t*du,n=wl(Ae((e-(du-Ef))/Ef,0,1));return{a:pu[((t+mu)%4+4)%4],b:pu[((t+mu+1)%4+4)%4],t:n}}function qe(i){let t=Cl(i),e={city:0,sakura:0,coast:0,country:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var Re=i=>{let t=Cl(i);return t.t<.5?t.a:t.b};function bn(i,t){let e=Cl(i);return me(fo[e.a][t],fo[e.b][t],e.t)}var Ys=650,Zs=375,Js=i=>i*Ys+Zs;function po(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=qe(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}function $s(i){let t=Math.round((i-Zs)/Ys),e=Js(t);return po(e)?{k:t,s:e}:null}function a_(i){let t=$s(i);return t?1-Ve(8,45,Math.abs(i-t.s)):0}var mo=1150,Pl=820,go=4.6,gu=i=>i*mo+Pl;function xu(i){if(i<400)return!1;for(let e of[-90,0,90]){let n=qe(i+e);if(n.country+n.sakura<.9)return!1}let t=$s(i);return!(t&&Math.abs(t.s-i)<170)}function yi(i){let t=Math.round((i-Pl)/mo),e=gu(t);return xu(e)?{k:t,s:e}:null}function l_(i){let t=yi(i);return t?1-Ve(30,70,Math.abs(i-t.s)):0}function c_(i){let t=-go;return i<11?t-1.3:i<16?me(t-1.3,t+.7,(i-11)/5):i<20?t+.7:i<25.5?me(t+.7,.35,(i-20)/5.5):.35}var ni=2,Rl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(_i(t/300,11)-.5)*2+(_i(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*bn(t,"curv")*(1-Math.max(a_(t),l_(t)))}elevRaw(t){return bn(t,"base")+bn(t,"hill")*(Al(t/380,29)-.5)*2}elev(t){let e=this.elevRaw(t),n=$s(t);if(n){let r=1-Ve(8,45,Math.abs(t-n.s));r>0&&(e=me(e,this.elevRaw(n.s),r))}let s=yi(t);if(s){let r=1-Ve(30,70,Math.abs(t-s.s));r>0&&(e=me(e,this.elevRaw(s.s),r))}return e}ensure(t){for(;(this.X.length-1)*ni<t+ni;){let e=this.X.length-1,n=e*ni,s=this.curv(n+ni/2)*ni,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*ni),this.Z.push(this.Z[e]+Math.cos(r+s/2)*ni),this.H.push(r+s),this.Y.push(this.elev(n+ni))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+ni);let n=t/ni,s=Math.floor(n),r=n-s;e.x=me(this.X[s],this.X[s+1],r),e.z=me(this.Z[s],this.Z[s+1],r),e.y=me(this.Y[s],this.Y[s+1],r),e.h=me(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),o=Math.cos(e.h);return e.fx=a,e.fz=o,e.rx=-o,e.rz=a,e}};function wf(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Ve(45,190,r)*16*(.45+.55*_i(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+Ve(s+1.5,80,r)*24*(.5+.5*_i(t/170,5))+Ve(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?me(1.25,-1.6,a/26):me(-1.6,-7,Ae((a-26)/20,0,1)))-n}case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Ve(135,215,r)*36*(.4+.6*_i(t/210+(e>0?9:0),7))}}function _u(i,t,e,n){let s=Cl(i),r=wf(s.a,i,t,e,n),a=s.t>0?me(r,wf(s.b,i,t,e,n),s.t):r,o=yi(i);if(!o)return a;let c=Math.abs(i-o.s);if(c>=36)return a;let l=c<29?c_(c):me(.35,a,Ve(29,36,c));return Math.abs(t)<n+3.2&&(l=Math.min(l,-.08)),l}function Rf(i){let t=yi(i);return t?1-Ve(27,34,Math.abs(i-t.s)):0}var xo=new U,Il=new U,u_=[1,1,1],Ye=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.P=[],this.N=[],this.U=[],this.Cl=[],this.m=new Zt,this.nm=new Kt,this.e=this.m.elements,this.ne=this.nm.elements}get count(){return this.P.length/3}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,o,c,l){let u=this.e,h=this.ne;this.P.push(u[0]*t+u[4]*e+u[8]*n+u[12],u[1]*t+u[5]*e+u[9]*n+u[13],u[2]*t+u[6]*e+u[10]*n+u[14]);let f=h[0]*s+h[3]*r+h[6]*a,d=h[1]*s+h[4]*r+h[7]*a,g=h[2]*s+h[5]*r+h[8]*a,x=1/(Math.sqrt(f*f+d*d+g*g)||1);if(this.N.push(f*x,d*x,g*x),this.hasUV&&this.U.push(o,c),this.hasColor){let m=l||u_;this.Cl.push(m[0],m[1],m[2])}}quad(t,e,n,s,r,a){xo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Il.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),Il.lengthSq()<1e-12&&Il.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),xo.cross(Il).normalize();let o=xo.x,c=xo.y,l=xo.z,u=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,d=a?a.v1:1;this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(e[0],e[1],e[2],o,c,l,h,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,d,r),this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,d,r),this.vtx(s[0],s[1],s[2],o,c,l,u,d,r)}box(t,e,n,s,r,a,o,c=null,l=null){let u=c||{},h=l||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||o,u.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||o,u.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||o,u.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||o,u.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||o,u.py),l&&l.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||o,u.ny)}cyl(t,e,n,s,r,a,o,c,l=!0){let u=(s-r)/a;for(let h=0;h<o;h++){let f=h/o*Math.PI*2,d=(h+1)/o*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(d),p=Math.sin(d),v=[t+g*s,e,n+x*s],T=[t+m*s,e,n+p*s],_=[t+m*r,e+a,n+p*r],y=[t+g*r,e+a,n+x*r];this.vtx(v[0],v[1],v[2],g,u,x,0,0,c),this.vtx(y[0],y[1],y[2],g,u,x,0,0,c),this.vtx(_[0],_[1],_[2],m,u,p,0,0,c),this.vtx(v[0],v[1],v[2],g,u,x,0,0,c),this.vtx(_[0],_[1],_[2],m,u,p,0,0,c),this.vtx(T[0],T[1],T[2],m,u,p,0,0,c),l&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c),this.vtx(y[0],y[1],y[2],0,1,0,0,0,c))}}rod(t,e,n,s,r,a){let o=e[0]-t[0],c=e[1]-t[1],l=e[2]-t[2],u=Math.hypot(o,c,l);o/=u,c/=u,l/=u;let h=0,f=1,d=0;Math.abs(c)>.99&&(h=1,f=0);let g=c*d-l*f,x=l*h-o*d,m=o*f-c*h,p=Math.hypot(g,x,m);g/=p,x/=p,m/=p;let v=x*l-m*c,T=m*o-g*l,_=g*c-x*o;for(let y=0;y<r;y++){let S=y/r*Math.PI*2,C=(y+1)/r*Math.PI*2,M=Math.cos(S),E=Math.sin(S),R=Math.cos(C),I=Math.sin(C),P=g*M+v*E,N=x*M+T*E,w=m*M+_*E,D=g*R+v*I,B=x*R+T*I,O=m*R+_*I,V=[t[0]+P*n,t[1]+N*n,t[2]+w*n],H=[t[0]+D*n,t[1]+B*n,t[2]+O*n],W=[e[0]+D*s,e[1]+B*s,e[2]+O*s],Z=[e[0]+P*s,e[1]+N*s,e[2]+w*s];this.vtx(V[0],V[1],V[2],P,N,w,0,0,a),this.vtx(H[0],H[1],H[2],D,B,O,0,0,a),this.vtx(W[0],W[1],W[2],D,B,O,0,0,a),this.vtx(V[0],V[1],V[2],P,N,w,0,0,a),this.vtx(W[0],W[1],W[2],D,B,O,0,0,a),this.vtx(Z[0],Z[1],Z[2],P,N,w,0,0,a)}return u}blob(t,e,n,s,r,a,o=0,c=1){let l=Cf[o%Cf.length],u=l.attributes.position.array,h=l.attributes.normal.array,f=l.userData.disp;for(let d=0;d<u.length;d+=3){let g=1+f[d/3],x=Math.max(0,Math.min(1,h[d+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+u[d]*s*g,e+u[d+1]*s*g*c,n+u[d+2]*s*g,h[d],h[d+1],h[d+2],0,0,m)}}wire(t,e,n,s,r,a=10){let o=t;for(let c=1;c<=a;c++){let l=c/a,u=[t[0]+(e[0]-t[0])*l,t[1]+(e[1]-t[1])*l-n*4*l*(1-l),t[2]+(e[2]-t[2])*l];this.rod(o,u,s,s,3,r),o=u}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,o,c]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],o,c,s[a])}toArrays(){return{P:new Float32Array(this.P),N:new Float32Array(this.N),C:this.hasColor?new Float32Array(this.Cl):null,U:this.hasUV?new Float32Array(this.U):null}}stamp(t,e){if(!t||!t.P.length)return;this.setM(e);let n=this.e,s=this.ne,r=t.P,a=t.N,o=t.C,c=t.U,l=this.P,u=this.N;for(let h=0;h<r.length;h+=3){let f=r[h],d=r[h+1],g=r[h+2];l.push(n[0]*f+n[4]*d+n[8]*g+n[12],n[1]*f+n[5]*d+n[9]*g+n[13],n[2]*f+n[6]*d+n[10]*g+n[14]);let x=a[h],m=a[h+1],p=a[h+2],v=s[0]*x+s[3]*m+s[6]*p,T=s[1]*x+s[4]*m+s[7]*p,_=s[2]*x+s[5]*m+s[8]*p,y=1/(Math.sqrt(v*v+T*T+_*_)||1);u.push(v*y,T*y,_*y)}if(this.hasColor)if(o)for(let h=0;h<o.length;h++)this.Cl.push(o[h]);else for(let h=0;h<r.length;h++)this.Cl.push(1);if(this.hasUV)if(c)for(let h=0;h<c.length;h++)this.U.push(c[h]);else for(let h=0;h<r.length/3*2;h++)this.U.push(0)}build(){if(!this.P.length)return null;let t=new fe;return t.setAttribute("position",new qt(this.P,3)),t.setAttribute("normal",new qt(this.N,3)),this.hasUV&&t.setAttribute("uv",new qt(this.U,2)),this.hasColor&&t.setAttribute("color",new qt(this.Cl,3)),t.computeBoundingSphere(),t}},Cf=[0,1,2,3].map(i=>{let t=new zr(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,o)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(o*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});Qt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var os=4200,De={uSkyHor:{value:new dt(.7,.8,.9)},uSkyZen:{value:new dt(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ot},uSunDir:{value:new U(0,1,0)},uSunCol:{value:new dt(1,1,1)}};function Lf(i){let t=new Qi(new Uint8Array(i),i.length,1,Hs);return t.minFilter=t.magFilter=Le,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Wn=Lf([16,16,16,70,200,255,255,255]),Pf=Lf([28,40,70,130,200,240,255,255]),Mi=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.,0.)), u.x), mix(hash12(i+vec2(0.,1.)), hash12(i+vec2(1.,1.)), u.x), u.y); }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,h_=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,f_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`;function _o(i,t="",e=""){i.uniforms.uOrigin=De.uOrigin,i.uniforms.uCloudSh=De.uCloudSh,i.uniforms.uTime=De.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;
${Mi}${h_}${t}`).replace("#include <opaque_fragment>",`${f_}${e}
#include <opaque_fragment>`)}var d_=`
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
  if (kind > 8.5) return L(vec3(0.78, 0.72, 0.6)) * (0.86 + 0.18 * vnoise(vec2(s, u) * 3.0));   // levee-top path
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
  gWater *= vZW.w * (1.0 - vRV);
  c = mix(c, riverBankCol(s, u), vRV);
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`,p_=`
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
}`,m_=`
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
}`;function g_(){let i=new Ke({color:16777215,gradientMap:Wn});return i.onBeforeCompile=t=>{t.uniforms.uSkyHor=De.uSkyHor,t.uniforms.uSkyZen=De.uSkyZen,t.uniforms.uWet=De.uWet,t.uniforms.uNight=De.uNight,t.uniforms.uSunDir=De.uSunDir,t.uniforms.uSunCol=De.uSunCol,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vWY = (modelMatrix * vec4(position, 1.0)).y;`),_o(t,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV;
float gWater = 0.0;
${d_}`,m_+p_),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},i.customProgramCacheKey=()=>"ground-v5",i}function If(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),_o(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var x_=0;function Ks(i){let t="cs"+ ++x_;return i.onBeforeCompile=e=>_o(e),i.customProgramCacheKey=()=>t,i}function Df(i,t){let e={};e.ground=g_(),e.color=If(new Ke({vertexColors:!0,gradientMap:Wn}),1.6,.1,"color-v2"),e.atlas=new Ke({vertexColors:!0,gradientMap:Wn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=o=>_o(o),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=If(new Ke({vertexColors:!0,gradientMap:Pf}),2.6,.24,"foliage-v2"),e.lamp=new We({color:15789798}),t&&(e.leaf=new Ke({map:t,vertexColors:!0,gradientMap:Pf,alphaTest:.42,side:Xe}),e.leaf.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",Qt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),_o(o)},e.leaf.customProgramCacheKey=()=>"leaf-v2"),e.wire=new We({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new yn(n);return e.pool=new We({map:a,color:16762746,transparent:!0,opacity:0,blending:mi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var __=Mt("#f2c230"),Nf=Mt("#26272c");function Ll(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=bn(s,"rw"),o=n*(a+.8),c=qe(s),l=c.city+c.sakura>.5;e.push({x:r.x+r.rx*o,z:r.z+r.rz*o,y:r.y+(l?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function Uf(){let i=new Ie,t=Ks(new Ke({vertexColors:!0,gradientMap:Wn})),e=new We({color:new dt(6,.45,.3)}),n=new We({color:new dt(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Ie,a=new Ie;r.add(a),a.position.set(-.42,1.02,-.02);let o=new Ye,c=3.6;for(let h=0,f=0;f<c;h++,f+=.45)o.box(-Math.min(f+.45,c),-.065,-.065,-f,.065,.065,h%2?Nf:__);o.box(0,-.09,-.07,.38,.09,.07,Nf);let l=new ue(o.build(),t);l.castShadow=!0,a.add(l);let u=[-.28,.28].map(h=>{let f=new ue(new Or(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:l,lamps:u,L:c}});return i.visible=!1,{group:i,update(r,a,o,c,l){i.visible=!!r,r&&r.forEach((u,h)=>{let f=s[h];f.root.position.set(u.x-a.x,u.y,u.z-a.z),f.root.rotation.y=u.yaw,f.arm.scale.x=(u.rw+.25)/f.L,f.pivot.rotation.z=-o*(Math.PI/2-.06);let d=Math.floor(l*2.5)%2;f.lamps[0].material=c&&d===0?e:n,f.lamps[1].material=c&&d===1?e:n})}}}function v_(){let e=()=>{let p=document.createElement("canvas");return p.width=1024,p.height=512,p},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),o='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let p=0;p<1024;p+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(p,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let l=[.1,.36,.62,.88].map(p=>p*1024),u=(p,v,T,_)=>{let y=r.createLinearGradient(p,v,p+T*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(p,v,T,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(p+T*.2,v),r.lineTo(p+T*.38,v),r.lineTo(p+T*.1,v+_),r.lineTo(p-T*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(p,v,T,_)};for(let p=0;p<l.length-1;p++){let v=l[p]+40,T=l[p+1]-40,_=3,y=(T-v)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(v+S*y+2,34,y-4,58),u(v+S*y+6,38,y-12,50)}for(let p of[l[0]-70,l[3]+40])r.fillStyle="#6b737c",r.fillRect(p+2,34,28,58),u(p+5,38,22,50);for(let p of l)r.fillStyle="#c3c8ce",r.fillRect(p-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(p-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(p-30,22,60,c-36),u(p-24,34,20,46),u(p+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let p of l)r.fillStyle="#c3c8ce",r.fillRect(p-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${o}`,r.fillText("\u30AF\u30CF 205-17",l[1]+40,136);let h=0,f=176,d=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,d,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,d-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+d/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,d-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${o}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,d,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,d,7);for(let p of[h+40,h+d-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(p,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(p+(p<h+d/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,d,30),r.fillStyle="#3a3f46",r.font=`800 16px ${o}`,r.fillText("17",h+d/2,f+220),a.fillStyle="#111",a.fillRect(h,f,d,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${o}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+d/2,f+26);for(let p of[h+40,h+d-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(p,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=p=>{let v=new yn(p);return v.colorSpace=Te,v.anisotropy=4,v},m=(p,v,T,_)=>({u0:p/1024,u1:(p+T)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,c),sideR:{...m(0,0,1024,c),flip:!0},front:m(h,f,d,g),plain:m(342,202,28,28)}}function Ff(){let i=v_(),t=Ks(new Ke({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Wn})),e=new Ye({uv:!0}),n=[1,1,1],s=Mt("#9aa1a9"),r=Mt("#3b4047"),a=Mt("#2a2d33"),o=19.5,c=.6,l=3,u=1.45,h=.95,f=4,d=l*o+(l-1)*c;for(let v=0;v<l;v++){let T=-d/2+o/2+v*(o+c),_=T-o/2,y=T+o/2;e.quad([_,h,u],[y,h,u],[y,f,u],[_,f,u],n,i.side),e.quad([y,h,-u],[_,h,-u],[_,f,-u],[y,f,-u],n,i.side);let S=v===l-1,C=v===0;e.quad([y,h,u],[y,h,-u],[y,f,-u],[y,f,u],S?n:Mt("#c9ced4"),S?i.front:i.plain),e.quad([_,h,-u],[_,h,u],[_,f,u],[_,f,-u],C?n:Mt("#c9ced4"),C?i.front:i.plain),e.box(_+.1,f,-u+.1,y-.1,f+.14,u-.1,s,null,{noBottom:!0});for(let M of[T-5.5,T+5.5])e.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,Mt("#c4c9cf"),null,{noBottom:!0});e.box(_+2,.45,-u+.25,y-2,h,u-.25,a);for(let M of[T-7,T+7])e.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(v===0){let M=T-3,E=f+.55;e.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),e.rod([M-.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),e.rod([M+.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),e.rod([M,E+.9,-.85],[M,E+.9,.85],.03,.03,4,r)}}let g=new ue(e.build(),t);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Ie;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:d},p={};return{group:x,st:m,start(v,T,_=16){Object.assign(m,{active:!0,sx:v,dir:T,speed:_,u:-T*290,ds:T>0?-2:2,cleared:!1}),x.visible=!0},update(v,T,_,y,S){if(!m.active)return;m.u+=m.dir*m.speed*v;let C=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?C>S+1:C<-S-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}T.at(m.sx,p),x.position.set(p.x+p.fx*m.ds+p.rx*m.u-_.x,p.y+.34,p.z+p.fz*m.ds+p.rz*m.u-_.z),x.rotation.y=p.h+(m.dir>0?Math.PI:0),t.emissiveIntensity=.3+y*1.1}}}var y_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',as=2048,ls=4096;function Ul(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var kf=Ul(256,256);{let i=kf.getContext("2d"),t=i.createImageData(256,256),e=cn(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var vu=class{constructor(){this.cA=Ul(as,ls),this.cE=Ul(as/2,ls/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,as/2,ls/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,as,ls),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(kf,"repeat")}add(t,e,n,s){if(this.x+e+4>as&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>ls)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(a.x,a.y),c.beginPath(),c.rect(0,0,e,n),c.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let o=.5;return this.cells[t]={u0:(a.x+o)/as,u1:(a.x+e-o)/as,v0:1-(a.y+n-o)/ls,v1:1-(a.y+o)/ls,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new yn(n);return s.colorSpace=Te,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=Pn,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function Tn(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function Fl(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.fillRect(t,e,n,s)}function Qs(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),Fl(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}Tn(i,t,e,n,.13)}function Si(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function ft(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function js(i,t,e,n,s,r,a="#d9dde2",o="rgba(40,45,60,0.55)"){ft(i,t-r,e-r,n+2*r,s+2*r,a),ft(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=o,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function bi(i,t,e,n,s,r,a=0){let o=i.createLinearGradient(t,e,t+n*.35,e+s),c=a?"#4f78b8":"#5f93d6",l=a?"#86a9d4":"#a6c8ec";o.addColorStop(0,c),o.addColorStop(.55,l),o.addColorStop(1,"#dbe9f6"),i.fillStyle=o,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=t+n*r();i.beginPath(),i.moveTo(u,e),i.lineTo(u+n*.18,e),i.lineTo(u-n*.25,e+s),i.lineTo(u-n*.43,e+s),i.fill(),i.restore()}function Bf(i,t,e,n,s,r="#efe6d2"){ft(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);Fl(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function yu(i,t,e=800){i.font=`${e} ${t}px ${y_}`}function be(i,t,e,n,s,r,a,o=800,c=null){yu(i,r,o);let l=r;for(;i.measureText(t).width>s&&l>6;)l-=1,yu(i,l,o);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,l*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function Dl(i,t,e,n,s,r,a,o=800,c=null){let l=[...t],u=l.length,h=Math.min(r*1.05,(s-n)/u),f=Math.min(r,h*.95);yu(i,f,o),i.textAlign="center",i.textBaseline="middle",l.forEach((d,g)=>{let x=n+(s-n-h*u)/2+h*(g+.5);c&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=c,i.strokeText(d,e,x)),i.fillStyle=a,i.fillText(d,e,x)})}function vo(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,ft(i,t,e,n,s,r),i.restore()}var Of=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Nl=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],zf=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],M_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Vf(){let i=new vu,t=cn(2024),e=240,n=(o,c,l,u,h,f)=>{Qs(o,i,l,u,"#ece8e0",0);let d=cn(f*31+(h?7:0)+5);if(f===0){let g=l*.14,x=u*.22,m=l*.72,p=u*.5;js(o,g,x,m,p,5),bi(o,g,x,m/2,p,d),bi(o,g+m/2,x,m/2,p,d),d()<.8&&Bf(o,g+2,x+2,m*(.18+d()*.25),p-4,d()<.5?"#efe6d2":"#d9e4ea"),ft(o,g+m/2-2,x,4,p,"#cfd4da"),ft(o,g-8,x+p+5,m+16,6,"#d8d8d4"),Si(o,g-4,x+p+11,8,60),Si(o,g+m-4,x+p+11,8,60),h&&(vo(c,g,x,m,p,"#ffcf8f",0),c.fillStyle="rgba(255,240,210,0.85)",c.fillRect(g+2,x+2,m*.3,p-4))}else if(f===1){for(let g of[.12,.56]){let x=l*g,m=u*.28,p=l*.3,v=u*.36;js(o,x,m,p,v,4),bi(o,x,m,p,v,d,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(x,m,p,v*.45),Si(o,x,m+v+6,p,40,.1),h&&d()<.8&&vo(c,x,m,p,v,d()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(l*.88,u*.2,9,0,7),o.fill()}else if(f===2){let g=l*.1,x=u*.12,m=l*.8,p=u*.84;js(o,g,x,m,p,4),bi(o,g,x,m/2,p,d),bi(o,g+m/2,x,m/2,p,d),Bf(o,g+2,x+2,m*(.2+d()*.3),p-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ft(o,g+m/2-2,x,4,p,"#cfd4da"),h&&(vo(c,g,x,m,p,"#ffcb85",0),c.fillStyle="rgba(255,236,200,0.9)",c.fillRect(g+2,x+2,m*.35,p-4))}else if(f===3){Qs(o,i,l,u,"#dfe3e6",0);let g=u*.25,x=u*.55;bi(o,0,g,l,x,d,1);for(let m=0;m<=l;m+=l/4)ft(o,m-2,g,4,x,"#8d98a6");if(ft(o,0,g-4,l,4,"#8d98a6"),ft(o,0,g+x,l,5,"#7d8796"),h)for(let m=0;m<4;m++)d()<.7&&(c.fillStyle=d()<.6?"#f2f6ff":"#ffe2b0",c.fillRect(m*l/4+2,g,l/4-4,x))}else if(f===4){o.fillStyle="#6b4a35",o.fillRect(0,0,l,u);for(let v=0;v<u;v+=12)ft(o,0,v,l,2,"rgba(30,18,10,0.35)"),ft(o,0,v+2,l,1,"rgba(255,220,180,0.06)");Tn(o,i,l,u,.15);let g=l*.18,x=u*.25,m=l*.64,p=u*.45;ft(o,g-6,x-6,m+12,p+12,"#4a3020"),ft(o,g,x,m,p,"#efe4c8"),o.fillStyle="#5a3a26";for(let v=1;v<6;v++)o.fillRect(g+v*m/6-1.5,x,3,p);for(let v=1;v<3;v++)o.fillRect(g,x+v*p/3-1.5,m,3);if(h){c.fillStyle="#ffc070",c.fillRect(g,x,m,p),c.fillStyle="#000";for(let v=1;v<6;v++)c.fillRect(g+v*m/6-1.5,x,3,p)}}else if(f===5){ft(o,l*.08,0,7,u,"#bdbdb6"),ft(o,l*.08+5,0,2,u,"rgba(0,0,0,0.2)");let g=l*.55,x=u*.3,m=l*.22,p=u*.24;js(o,g,x,m,p,3),ft(o,g,x,m,p,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(g,x,m,p/2),Si(o,g,x+p+4,m,50,.12),ft(o,l*.22,u*.55,26,34,"#cfcfca"),ft(o,l*.22+4,u*.55+6,18,12,"#9aa2a8"),h&&vo(c,g,x,m,p,"#fff0d8",0)}else if(f===6){let g=l*.4,x=u*.35,m=l*.2,p=u*.28;js(o,g,x,m,p,3),bi(o,g,x,m,p,d,1),Si(o,g,x+p+4,m,70,.14),h&&vo(c,g,x,m,p,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(c,l,u,h)=>n(c,l,u,h,!1,o)),i.add("win"+o+"L",e,e,(c,l,u,h)=>n(c,l,u,h,!0,o));i.add("plain",e,e,(o,c,l,u)=>{Qs(o,i,l,u,"#ece8e0"),Si(o,l*.3,0,12,u*.6,.06)}),i.add("concrete",e,e,(o,c,l,u)=>{Qs(o,i,l,u,"#d9d7d0",60);for(let h=0;h<6;h++)Si(o,h*41%l,0,10,u*.5,.07)});let s=288,r=(o,c,l,u,h,f)=>{let d=cn(f);if(Qs(o,i,l,u,"#e6e2da"),h==="glass"||h==="door"||h==="konbini"||h==="cafe"){let x=u*.22,m=l-12,p=u*.78-4;ft(o,6,x,m,p,h==="konbini"?"#f6f4ea":h==="cafe"?"#7a5a40":"#8a7a68");for(let _=x+p*.25;_<x+p;_+=p*.22){ft(o,6,_,m,3,"rgba(60,50,40,0.5)");for(let y=9;y<6+m-6;y+=6+d()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(y,_-6-d()*10,4+d()*5,6+d()*10)}h==="konbini"&&ft(o,6,x+4,m,5,"#ffffff"),o.save(),o.globalAlpha=.35,bi(o,6,x,m,p,d),o.restore(),ft(o,6,x,m,4,"#4a4e57"),h==="door"&&(ft(o,l/2-2,x,4,p,"#4a4e57"),ft(o,l/2-14,x+p*.45,3,40,"#c0c4c8"),ft(o,l/2+11,x+p*.45,3,40,"#c0c4c8"),ft(o,l/2-30,x+18,60,24,"#fff"),be(o,"\u55B6\u696D\u4E2D",l/2,x+30,54,18,"#c82828")),h==="glass"&&d()<.7&&(ft(o,16,x+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),be(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,x+44,40,16,"#c02020")),h==="cafe"&&(ft(o,l*.62,u-70,46,62,"#2c3a30"),be(o,"\u30E9\u30F3\u30C1",l*.62+23,u-50,40,13,"#fff",700));let T=h==="konbini"?"#c9d6e2":h==="cafe"?"#e8a060":"#e6c296";c.fillStyle=T,c.fillRect(6,x,m,p),c.fillStyle="rgba(0,0,0,0.35)";for(let _=x+p*.25;_<x+p;_+=p*.22)c.fillRect(6,_,m,3)}else if(h==="shutter"){let x=u*.2,m=l-12,p=u*.8;ft(o,6,x,m,p,"#b8bcc0");for(let v=x;v<x+p;v+=7)ft(o,6,v,m,2,"rgba(60,64,72,0.35)"),ft(o,6,v+2,m,1,"rgba(255,255,255,0.35)");ft(o,6,x,m,10,"#8f949a"),Tn(o,i,l,u,.12),d()<.5&&(ft(o,l/2-40,x+p*.35,80,26,"#fff"),be(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),l/2,x+p*.35+13,74,16,"#333",700))}else if(h==="noren"){ft(o,0,0,l,u,"#5b3c28");for(let T=0;T<l;T+=10)ft(o,T,u*.2,3,u*.8,"rgba(25,15,8,0.6)");Tn(o,i,l,u,.15);let g=l*.12,x=u*.24,m=l*.76,p=u*.34,v=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ft(o,g,x,m,p,v);for(let T=1;T<3;T++)ft(o,g+m*T/3-1,x+p*.25,2,p*.75,"rgba(255,255,255,0.25)");be(o,t.pick(M_),l/2,x+p*.55,m*.9,46,"#f5f0e6",800),ft(o,g,x,m,6,"#3a2a1c"),c.fillStyle="#ffae5c",c.fillRect(g,x+p,m,u-x-p),c.fillStyle="rgba(255,170,90,0.6)",c.fillRect(g,x,m,p),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l*.9,u*.36,13,19,0,0,7),o.fill(),be(o,"\u9152",l*.9,u*.36,16,14,"#fff"),c.fillStyle="#ff6a3a",c.beginPath(),c.ellipse(l*.9,u*.36,13,19,0,0,7),c.fill()}else if(h==="house"){let g=l*.18,x=u*.3,m=l*.34,p=u*.7;ft(o,g-6,x-6,m+12,p+6,"#9a9a96"),ft(o,g,x,m,p,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ft(o,g+m-14,x+p*.5,4,22,"#d8d0c0"),ft(o,g+6,x+10,m-12,p*.25,"rgba(255,255,255,0.18)"),ft(o,l*.62,u*.48,30,22,"#cfcfca"),ft(o,l*.62+6,u*.48+5,18,4,"#555");let v=l*.6,T=u*.22,_=l*.3,y=u*.2;js(o,v,T,_,y,3),bi(o,v,T,_,y,d,1);for(let S=0;S<3;S++)o.fillStyle="#7b5a43",o.fillRect(l*.6+S*22,u-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(l*.6+S*22+8,u-32,11,0,7),o.fill();c.fillStyle="#ffd08a",c.beginPath(),c.arc(g+m+14,x+8,6,0,7),c.fill(),d()<.6&&(c.fillStyle="#ffcf8f",c.fillRect(v,T,_,y))}else if(h==="garage"){let x=u*.25,m=l-16,p=u*.75;ft(o,8,x,m,p,"#efefec");for(let v=x;v<x+p;v+=9)ft(o,8,v,m,1.5,"rgba(80,80,90,0.25)");Tn(o,i,l,u,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,c)=>{i.add("shop_"+o,e,s,(l,u,h,f)=>r(l,u,h,f,o,100+c)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(l,u,h,f)=>r(l,u,h,f,o,200+c))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(c,l,u,h)=>{let[f,d]=Nl[o%Nl.length],g=Of[o*7%Of.length];ft(c,0,0,u,h,f),ft(c,0,0,u,5,"rgba(255,255,255,0.35)"),ft(c,0,h-6,u,6,"rgba(0,0,0,0.18)"),o%3===0&&(ft(c,12,12,h-24,h-24,d),be(c,g[0],12+(h-24)/2,h/2,h-30,34,f)),be(c,g,u/2+(o%3===0?24:0),h/2+2,u*.7,50,d,900),Tn(c,i,u,h,.08),l.fillStyle=f==="#fff"||f==="#f5efe0"?"#d9d6cc":f,l.fillRect(0,0,u,h),l.globalAlpha=.9,be(l,g,u/2+(o%3===0?24:0),h/2+2,u*.7,50,d==="#fff"?"#ffffff":d,900),l.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(c,l,u,h)=>{let[f,d]=Nl[(o*3+1)%Nl.length],g=zf[o%zf.length];ft(c,0,0,u,h,f),c.strokeStyle="rgba(0,0,0,0.3)",c.lineWidth=4,c.strokeRect(2,2,u-4,h-4),Dl(c,g,u/2,12,h-12,56,d,900),Tn(c,i,u,h,.08),ft(l,0,0,u,h,f==="#fff"?"#e8e8e8":f),Dl(l,g,u/2,12,h-12,56,d==="#fff"?"#fff":d,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,c,l],u)=>i.add("bb"+u,512,240,(h,f,d,g)=>{ft(h,0,0,d,g,"#fbfaf5"),ft(h,0,0,d,g*.62,l),be(h,o,d/2,g*.32,d*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),be(h,c,d/2,g*.8,d*.85,52,"#333",800),Tn(h,i,d,g,.08),ft(f,0,0,d,g,"#555"),f.globalAlpha=.85,ft(f,0,0,d,g*.62,l),be(f,o,d/2,g*.32,d*.9,96,"#fff",900),f.globalAlpha=1})),i.add("konbini_band",480,72,(o,c,l,u)=>{ft(o,0,0,l,u,"#fbfbf7"),ft(o,0,u*.62,l,u*.14,"#2a9a4a"),ft(o,0,u*.76,l,u*.12,"#f08a24"),ft(o,0,u*.88,l,u*.12,"#2f6fd8"),be(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900),c.fillStyle="#f3f6f0",c.fillRect(0,0,l,u),be(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(c,l,u,h)=>{let f=["#d8352a","#2f6fd8","#f4f4f0"][o];ft(c,0,0,u,h,f),ft(c,8,10,u-16,h*.55,"#eef4f8");let d=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let g=0;g<4;g++)for(let x=0;x<6;x++){let m=14+x*17,p=18+g*30;c.fillStyle=d[(g*6+x+o)%d.length],c.fillRect(m,p,11,20),c.fillStyle="rgba(255,255,255,0.5)",c.fillRect(m+2,p+2,3,14),c.fillStyle="#2a2a2a",c.fillRect(m,p+23,11,3)}ft(c,10,h*.62,u-20,22,"#222"),ft(c,u-34,h*.66,14,22,"#bbb"),ft(c,14,h*.82,u-28,22,"#1b1b1b"),be(c,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],u/2,h*.62+11,u-28,14,"#fff",700),Tn(c,i,u,h,.08),l.fillStyle="#f2f8ff",l.fillRect(8,10,u-16,h*.55);for(let g=0;g<4;g++)for(let x=0;x<6;x++)l.fillStyle=d[(g*6+x+o)%d.length],l.fillRect(14+x*17,18+g*30,11,20);l.fillStyle="#9fd0ff",l.fillRect(10,h*.62,u-20,22)});i.add("ac",128,88,(o,c,l,u)=>{ft(o,0,0,l,u,"#e9e9e4"),Fl(o,0,0,l,u,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(l*.4,u*.5,u*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let h=6;h<u*.36;h+=6)o.beginPath(),o.arc(l*.4,u*.5,h,0,7),o.stroke();for(let h=12;h<u-10;h+=6)ft(o,l*.78,h,l*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,c,l,u)=>{ft(o,0,0,l,u,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,l-6,u-6),be(o,"\u54C1\u5DDD 580",l/2,16,l*.6,14,"#2f5a2f",700),be(o,"\u3042 12-34",l/2,42,l*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(l-2,2),o.lineTo(l/2,u-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(l-10,7),o.lineTo(l/2,u-12),o.fill(),be(o,"\u6B62\u307E\u308C",l/2,34,l*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,22),o.lineTo(l/2+22,50),o.lineTo(l/2+8,50),o.lineTo(l/2+8,88),o.lineTo(l/2-8,88),o.lineTo(l/2-8,50),o.lineTo(l/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(l/2,u/2,l/2-9,0,7),o.stroke(),be(o,"30",l/2,u/2+2,l*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,c,l,u)=>{ft(o,0,0,l,u,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,l-6,u-6),Dl(o,"\u672C\u753A\u4E8C\u4E01\u76EE",l/2,10,u-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(c,l,u,h)=>{let f=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ft(c,0,0,u,h,f),ft(c,4,4,u-8,h*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),be(c,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],u/2,h*.25,u-12,18,"#fff",900);for(let d=0;d<4;d++)ft(c,8,h*.58+d*8,u-16-d%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(c,l,u,h)=>{let f=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Qs(c,i,u,h,f),o===1)for(let d=10;d<u-6;d+=u/6)ft(c,d,10,u/6-8,h-20,"rgba(220,235,245,0.9)"),c.fillStyle="rgba(255,255,255,0.45)",c.fillRect(d,10,u/6-8,(h-20)*.4);else{ft(c,0,0,u,7,"rgba(255,255,255,0.4)");for(let d=u/3;d<u;d+=u/3)ft(c,d-1,0,2,h,"rgba(0,0,0,0.08)")}ft(c,0,h-6,u,6,"rgba(0,0,0,0.12)"),Si(c,u*.3,h-6,10,10,.2)});return i.add("kawara",256,256,(o,c,l,u)=>{ft(o,0,0,l,u,"#58617a");for(let h=0;h<u;h+=16)Fl(o,0,h,l,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let h=0;h<l;h+=20)ft(o,h,0,2,u,"rgba(0,0,0,0.18)");Tn(o,i,l,u,.12)}),i.add("wood",256,256,(o,c,l,u)=>{ft(o,0,0,l,u,"#6d4c37");for(let h=0;h<u;h+=14)ft(o,0,h,l,2,"rgba(25,15,8,0.4)"),ft(o,0,h+2,l,1,"rgba(255,220,180,0.07)");Tn(o,i,l,u,.16)}),i.add("block",256,128,(o,c,l,u)=>{ft(o,0,0,l,u,"#c9c7bf");for(let h=0;h<u;h+=32)for(let f=h/32%2?-32:0;f<l;f+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(f+1,h+1,62,30);for(let h=0;h<l;h+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(h+20,40,24,16);Tn(o,i,l,u,.15),Si(o,0,0,l,40,.1)}),i.add("lantern",64,96,(o,c,l,u)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),o.fill();for(let h=16;h<u-12;h+=7)ft(o,4,h,l-8,1.5,"rgba(0,0,0,0.2)");ft(o,l/2-14,2,28,8,"#222"),ft(o,l/2-14,u-10,28,8,"#222"),be(o,"\u796D",l/2,u/2,l*.6,28,"#fff",900),c.fillStyle="#ff6a35",c.beginPath(),c.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),c.fill()}),i.add("busstop",96,96,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.stroke(),be(o,"\u30D0\u30B9\u505C",l/2,u/2,l*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ft(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,c,l,u)=>{o.save(),o.translate(l/2,u/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(l/2-22,u/2-6,44,18),o.fillRect(l/2-16,u/2-16,18,12),o.fillRect(l/2+8,u/2-13,5,7),o.beginPath(),o.arc(l/2-12,u/2+15,5,0,7),o.arc(l/2+12,u/2+15,5,0,7),o.fill(),be(o,"\u8E0F\u5207",l/2,u/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,c)=>i.add("bridge"+c,64,176,(l,u,h,f)=>{ft(l,0,0,h,f,"#b9b5ab"),Tn(l,i,h,f,.2),ft(l,6,6,h-12,f-12,"#a7a398"),Dl(l,o,h/2,14,f-14,34,"#3f3c37",800)})),i.add("xing_plate",128,48,(o,c,l,u)=>{ft(o,0,0,l,u,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,l-6,u-6),be(o,"\u8E0F\u5207\u6CE8\u610F",l/2,u/2,l*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,c,l,u)=>{o.clearRect(0,0,l,u),ft(o,0,0,l,7,"#e9ebee"),ft(o,0,6,l,2,"rgba(60,70,80,0.5)"),ft(o,0,u-6,l,6,"#d5d8dc");for(let h=3;h<l;h+=9)ft(o,h,7,3,u-13,"#e2e5e9"),ft(o,h+2,7,1,u-13,"rgba(70,80,90,0.45)")}),i}function Hf(i){let e=Ul(1024,1024),n=e.getContext("2d"),s=cn(321),r={},a={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"]},o=(l,u,h)=>{let f=a[l],d=256,g=l==="pine",x=l==="sakura";n.save(),n.translate(u,h),n.beginPath(),n.rect(0,0,512,512),n.clip();let m=[[d,d,140]];for(let v=0;v<(g?6:7);v++){let T=s()*6.28,_=30+s()*85;m.push([d+Math.cos(T)*_,d+Math.sin(T)*_*(g?.4:.85),Math.min(70+s()*55,228-_)])}let p=x?2100:g?2600:2200;for(let v=0;v<p;v++){let T=m[Math.floor(s()*m.length)],_=s()*6.28,y=Math.sqrt(s())*T[2],S=T[0]+Math.cos(_)*y,C=T[1]+Math.sin(_)*y*(g?.45:1),M=1-C/512,E=y/T[2],R=Math.min(4,Math.max(0,Math.floor(M*2.2+s()*2.2+(E>.8?.6:0)-.3)));if(n.fillStyle=f[R],x){let I=7+s()*8;n.beginPath(),n.arc(S,C,I,0,7),n.fill(),s()<.25&&(n.fillStyle=f[4],n.beginPath(),n.arc(S-I*.3,C-I*.3,I*.4,0,7),n.fill())}else if(g)n.save(),n.translate(S,C),n.rotate((s()-.5)*1.2),n.fillRect(-11,-1.6,22,3.2),n.restore();else{let I=9+s()*10;n.beginPath(),n.ellipse(S,C,I,I*.55,s()*6.28,0,7),n.fill()}}if(x)for(let v=0;v<14;v++){n.strokeStyle="rgba(150,90,100,0.35)",n.lineWidth=1.5;let T=d+(s()-.5)*300,_=d+60+s()*120;n.beginPath(),n.moveTo(T,_),n.lineTo(T+(s()-.5)*40,_-20-s()*30),n.stroke()}n.restore(),r[l]={u0:u/1024,u1:(u+512)/1024,v0:1-(h+512)/1024,v1:1-h/1024}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512);let c=new yn(e);return c.colorSpace=Te,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:r}}var un=[1,1,1],ht={pole:Mt("#b1b0a9"),metal:Mt("#8d9198"),black:Mt("#2a2b30"),yellow:Mt("#f2c230"),white:Mt("#f4f3ee"),trans:Mt("#a0a3a8"),lampPole:Mt("#727780"),lampHead:Mt("#dcdcd6"),trunk:Mt("#6a5444"),trunkDark:Mt("#4b3a33"),leaf:Mt("#86ba4c"),leafShade:Mt("#2c6640"),sakura:Mt("#ffd3e3"),sakuraShade:Mt("#de94b4"),pine:Mt("#55874c"),pineShade:Mt("#1d4632"),cedar:Mt("#41713e"),cedarShade:Mt("#1b3e2a"),roof:Mt("#bdbbb3"),parapet:Mt("#dcdad2"),pipe:Mt("#c4c4bf"),orange:Mt("#f07a22"),red:Mt("#d8352a"),vermilion:Mt("#e2482c"),concrete:Mt("#c9c7c0"),stone:Mt("#a8a69e"),terracotta:Mt("#b8653d"),rail:Mt("#eeeeea")},cs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(Mt),S_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(Mt),Su=null;function Wf(i){Su=i}var nr=i=>Su.uv(i),bu=nr,b_=(i,t)=>Su.has(t+"2")&&i()<.5?t+"2":t;function Tu(i,t,e,n,s=0){let r=new Zt().makeRotationY(s);return r.setPosition(t,e,n),new Zt().multiplyMatrices(i,r)}var Ne=(i,t,e,n,s,r,a,o=un)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o,nr(a)),ir=(i,t,e,n,s,r,a,o=un)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],o,nr(a)),sr=(i,t,e,n,s,r,a,o=un)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],o,nr(a)),tr=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?nr(r):void 0);function Eu(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ht.pole);for(let l=0;l<5;l++)s.cyl(0,.25+l*.3,0,.185,.185,.15,10,l%2?ht.black:ht.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ht.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ht.metal);let a=[-.85,-.3,.3,.85],o=[-.7,0,.7];for(let l of a)s.cyl(0,r-.53,l,.05,.035,.17,6,ht.white);for(let l of o)s.cyl(0,r-1.65,l,.045,.03,.15,6,ht.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ht.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ht.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ht.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ht.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ht.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ht.concrete);for(let l=2.4,u=0;l<r-2;l+=.45,u++)s.rod([0,l,0],[u%2?.3:-.3,l,0],.015,.015,3,ht.metal);return i.atlas.setM(t),Ne(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&Ne(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(l=>[0,r-.4,l]),...o.map(l=>[0,r-1.52,l]),[0,5.72,-.3],[0,5.72,.3]].map(l=>new U(l[0],l[1],l[2]).applyMatrix4(t))}function wu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,ht.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ht.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ht.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ht.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Xf(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ht.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ht.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ht.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Bl(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,Mt("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,Mt("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,Mt("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,un),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function Au(i,t,e){let n=Math.floor(e()*3),s=[ht.red,Mt("#2f6fd8"),ht.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Sn(s,.8)),i.atlas.setM(t),Ne(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Mu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,Mt("#e6e6e1")),i.atlas.setM(t),Ne(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function qf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([Mt("#c8ccd2"),Mt("#c0392b"),Mt("#2c6fb7"),Mt("#2b2b2b"),Mt("#e8c84a"),Mt("#e98fb0")]);for(let a of[-.52,.52])for(let o=0;o<12;o++){let c=o/12*Math.PI*2,l=(o+1)/12*Math.PI*2;n.rod([a+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[a+Math.cos(l)*.33,.34+Math.sin(l)*.33,0],.022,.022,3,ht.black)}let r=(a,o)=>n.rod(a,o,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ht.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ht.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ht.metal)}function Yf(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,ht.orange),e.cyl(0,.04,0,.16,.03,.68,10,ht.orange),e.cyl(0,.32,0,.115,.095,.12,10,ht.white,!1)}function Zf(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,ht.terracotta),i.leaf.setM(t),er(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function rr(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ht.metal),i.atlas.setM(t),n<0?sr(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):ir(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function Ru(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,ht.orange);let s=0,r=3.25,a=.42,o=14;for(let c=0;c<o;c++){let l=c/o*Math.PI*2,u=(c+1)/o*Math.PI*2,h=(f,d,g)=>[e*g,r+Math.sin(f)*d,s+Math.cos(f)*d-.25];tr(n,h(0,0,-.02),h(e>0?u:l,a,-.02),h(e>0?l:u,a,-.02),ht.orange),tr(n,h(0,0,-.035),h(e>0?u:l,a*.86,-.035),h(e>0?l:u,a*.86,-.035),Mt("#dfe9f2"))}}var Jf=null;function $f(i){Jf=i}function er(i,t,e,n,s,r,a,o,c,l,u,h,f=0){let d=Jf[a];for(let g=0;g<o;g++){let x=c()*2-1,m=c()*2-1,p=c()*2-1;f&&(m=1.2+c());let v=Math.hypot(x,m,p)||1;x/=v,m/=v,p/=v;let T=-p,_=0,y=x;v=Math.hypot(T,y),v<.1&&(T=1,y=0,v=1),T/=v,y/=v;let S=m*y-p*_,C=p*T-x*y,M=x*_-m*T,E=c()*6.28,R=Math.cos(E),I=Math.sin(E),P=T*R+S*I,N=_*R+C*I,w=y*R+M*I,D=S*R-T*I,B=C*R-_*I,O=M*R-y*I,V=r*(1.45+c()*.5)/2,H=e+(c()-.5)*r*.6,W=n+(c()-.5)*r*(f?.15:.5),Z=s+(c()-.5)*r*.6,xt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([zt,Wt])=>[H+(P*zt+D*Wt)*V,W+(N*zt+B*Wt)*V*(f?.6:1),Z+(w*zt+O*Wt)*V]),Et=xt.map(zt=>{let Wt=zt[0]-t[0],K=zt[1]-t[1],it=zt[2]-t[2],St=Math.hypot(Wt,K,it)||1;Wt/=St,K/=St,it/=St;let $=zt[0]-e,Q=zt[1]-n,at=zt[2]-s;return St=Math.hypot($,Q,at)||1,[Wt*.7+$/St*.3,K*.7+Q/St*.3+(f?.5:0),it*.7+at/St*.3]}),jt=xt.map(zt=>Tf(u,l,.45+.55*Math.max(0,Math.min(1,(zt[1]-h[0])/(h[1]-h[0])))));i.leaf.card(xt,Et,d,jt)}}function T_(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ht.trunk);for(let l=0;l<3;l++){let u=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,ht.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",o=[s*.45,s*1.15],c=7+Math.floor(e()*3);for(let l=0;l<c;l++){let u=e()*6.28,h=(.6+e())*1.3*n;er(i,r,Math.cos(u)*h,s*(.62+e()*.3),Math.sin(u)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],o)}er(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],o)}function E_(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ht.trunkDark);let r=[];for(let l=0;l<5;l++){let u=l/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(u)*h,s*(.62+e()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ht.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ht.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],o=[s*.5,s*1.1],c=[.72,.62,.72];for(let l of r)for(let u=0;u<2;u++)er(i,a,l[0]+(e()-.5)*1.4*n,l[1]+e()*.9*n,l[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],c,o);er(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],c,o)}function w_(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,o=[r*.4,a*.45,.2],c=[r,a*.8,-.2];s.rod([0,0,0],o,.2*n,.15*n,6,ht.trunkDark),s.rod(o,c,.15*n,.09*n,6,ht.trunkDark),i.leaf.setM(t);let l=[[c[0],c[1]+.3,c[2],1.7],[o[0]+1.4*n,o[1]+.8,.5,1.3],[o[0]-1.3*n,o[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[u,h,f,d]of l)s.rod(u>o[0]?o:c,[u,h-.2,f],.07*n,.04*n,4,ht.trunkDark),er(i,[u,h-.8,f],u,h,f,d*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function A_(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ht.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ht.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ht.cedar)}var R_={broad:T_,sakura:E_,pine:w_,cedar:A_},Gf={};function Ti(i,t,e,n,s=1){let r=Math.floor(n()*4),a=e+r,o=Gf[a];if(!o){let l={color:new Ye,foliage:new Ye,leaf:new Ye({uv:!0})};R_[e](l,new Zt,cn(1e3+r*77+e.length*13),1),o=Gf[a]={c:l.color.toArrays(),f:l.foliage.toArrays(),l:l.leaf.toArrays()}}let c=t.clone().scale(new U(s,s,s));i.color.stamp(o.c,c),i.foliage.stamp(o.f,c),i.leaf.stamp(o.l,c)}function yo(i,t,e,n,s,r,a){let o=Math.max(1,Math.round(e/3)),c=e/o;for(let l of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<o;h++){let f=u>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(l>0?ir:sr)(i,l*t/2,h*c,(h+1)*c,n[u],n[u+1],f,s)}}function Mo(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],ht.roof);let a=.5,o=.15;if(i.box(-t/2,n,-.02,t/2,n+a,o,ht.parapet),i.box(-t/2,n,e-o,t/2,n+a,e,ht.parapet),i.box(-t/2,n,0,-t/2+o,n+a,e,ht.parapet),i.box(t/2-o,n,0,t/2,n+a,e,ht.parapet),s()<.4){let c=(s()-.5)*t*.5,l=e*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+u-.05,n,l+h-.05,c+u+.05,n+1,l+h+.05,ht.metal);i.cyl(c,n+1,l,.85,.85,1.3,12,Mt("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,ht.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,ht.metal)}function Kf(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,ht.black);let r="vs"+Math.floor(s()*10);sr(i.atlas,t-.065,-.88,-.12,e,n,r),ir(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,ht.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,ht.metal)}function us(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ht.concrete,null,{noBottom:!0}),n.type){case"shop":return C_(i,t,e,n);case"apt":return P_(i,t,e,n);case"office":return I_(i,t,e,n);case"konbini":return L_(i,t,e,n);case"house":return D_(i,t,e,n);case"tower":return N_(i,t,e,n)}}function C_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.6,f=3,d=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,p=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++)Ne(l,m+y*x,m+(y+1)*x,0,h,0,b_(e,"shop_"+p[y%p.length]));let v=e.pick([0,0,1,5,0,1]),T=[0,h];for(let y=1;y<a;y++)T.push(h+y*f);for(let y=1;y<a;y++)for(let S=0;S<g;S++){let C=S%2===1&&e()<.3?5:v;Ne(l,m+S*x,m+(S+1)*x,T[y],T[y+1],0,"win"+C+(e()<c?"L":""),o)}yo(l,s,r,T,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Sn(o,.8)),Mo(u,s,r,d,e);let _=s*.94;if(u.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ht.black),Ne(l,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let y=e.pick(S_),S=h-.85;u.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),u.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],Sn(y,.85))}if(a>=2&&e()<.65){let y=(e()<.5?1:-1)*(s/2-.35);Kf(i,y,h+.3,Math.min(d-.15,h+2.8),e)}for(let y=1;y<a;y++)if(e()<.4){let S=Math.floor(e()*g),C=m+S*x+.15,M=m+(S+1)*x-.15,E=T[y];u.box(C,E-.12,-.9,M,E,0,ht.parapet),Ne(l,C,M,E,E+1,-.9,"rail"),sr(l,C,-.9,0,E,E+1,"rail"),ir(l,M,-.9,0,E,E+1,"rail"),e()<.6&&Mu(i,t,(C+M)/2+.6,E,-.75)}else if(e()<.35){let S=Math.floor(e()*g);Mu(i,t,m+(S+.5)*x,T[y]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}u.cyl(m+.12,0,-.08,.05,.05,d,6,ht.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,Mt("#d9d9d3")),a>=3&&e()<.18&&Qf(i,s,d,r,e)}function Qf(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,o=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,e,o,c+.06,e+1.2+a,o+.12,ht.metal);i.color.box(-r/2,e+1.2,o+.12,r/2,e+1.2+a,o+.3,ht.metal),Ne(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,o+.115,"bb"+Math.floor(s()*4))}function P_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.2,f=2.95,d=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,p=[0,h];for(let _=1;_<a;_++)p.push(h+_*f);for(let _=0;_<g;_++)Ne(l,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?un:o);let v="bal"+Math.floor(e()*3),T=Sn(o,.97);for(let _=1;_<a;_++){let y=p[_];for(let S=0;S<g;S++)Ne(l,m+S*x,m+(S+1)*x,y,p[_+1],0,"win2"+(e()<c?"L":""),o);u.box(m,y-.15,-1.3,-m,y,0,T),u.box(m,y,-1.3,-m,y+1.1,-1.18,T,null,{noBottom:!0});for(let S=0;S<g;S++)Ne(l,m+S*x,m+(S+1)*x,y,y+1.1,-1.305,v,o);for(let S=0;S<=g;S++)u.box(m+S*x-.05,y,-1.18,m+S*x+.05,y+2.4,0,Sn(o,.92));i.atlas.setM(t);for(let S=0;S<g;S++)e()<.55&&(Mu(i,t,m+(S+.78)*x,y,-.55),i.atlas.setM(t),i.color.setM(t))}u.box(m,d-.15,-1.3,-m,d,0,T),yo(l,s,r,p,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Sn(o,.8)),Mo(u,s,r,d,e,!0)}function I_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=4,f=3.4,d=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,p=[0,h];for(let v=1;v<a;v++)p.push(h+v*f);for(let v=0;v<g;v++)Ne(l,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let T=0;T<g;T++)Ne(l,m+T*x,m+(T+1)*x,p[v],p[v+1],0,"win3"+(e()<c?"L":""),o);yo(l,s,r,p,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Sn(o,.8)),Mo(u,s,r,d,e,!0),e()<.6&&Kf(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(d-.3,h+4.5),e),e()<.3&&Qf(i,s,d,r,e)}function L_(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,o=i.color,c=4.4,l=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let f=0;f<u;f++)Ne(a,l+f*h,l+(f+1)*h,0,3.4,0,"shop_konbini");o.box(l,3.4,-.35,-l,c,0,ht.white),Ne(a,l,-l,3.4,c,-.355,"konbini_band"),yo(a,s,r,[0,c],Mt("#f2f2ee"),e,0),Mo(o,s,r,c,e)}function D_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=2.9,f=a*h,d=-s/2,g=e()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,p=[];for(let M=0;M<=a;M++)p.push(M*h);let v=g?un:o;for(let M=0;M<a;M++)for(let E=0;E<x;E++){let R=g?"win4":"win0";M===0&&E===0?R="shop_house":e()<c&&(R+="L"),Ne(l,d+E*m,d+(E+1)*m,p[M],p[M+1],0,R,R==="shop_house"?un:v)}yo(l,s,r,p,g?Mt("#9a7a62"):o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],Sn(o,.75));let T=.6,_=Math.min(2.4,r*.32),y=nr("kawara"),S=Mt("#c8ccd8");l.quad([s/2+T,f-.25,-T],[-s/2-T,f-.25,-T],[-s/2-T,f+_,r/2],[s/2+T,f+_,r/2],S,y),l.quad([-s/2-T,f-.25,r+T],[s/2+T,f-.25,r+T],[s/2+T,f+_,r/2],[-s/2-T,f+_,r/2],S,y);let C=g?Mt("#7a5a42"):o;if(tr(u,[-s/2,f,0],[-s/2,f,r],[-s/2,f+_-.1,r/2],C),tr(u,[s/2,f,r],[s/2,f,0],[s/2,f+_-.1,r/2],C),u.box(-s/2-T,f+_-.05,r/2-.15,s/2+T,f+_+.18,r/2+.15,Mt("#3d4456")),a>1){let M=h+.05;l.quad([s/2+.1,M-.3,-.75],[-s/2-.1,M-.3,-.75],[-s/2-.1,M+.05,0],[s/2+.1,M+.05,0],S,y)}if(n.fence){let M=-n.fence,E=1.2;for(let[R,I]of[[-s/2,-1],[.4,s/2]])u.box(R,0,M-.08,I,E,M+.08,ht.concrete),Ne(l,R,I,0,E,M-.085,"block")}}function N_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.4,f=a*h,d=Math.max(2,Math.round(s/6)),g=s/d,x=-s/2,m=e()<.5?"win3":"win2",p=[];for(let _=0;_<=a;_++)p.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<d;y++)Ne(l,x+y*g,x+(y+1)*g,p[_],p[_+1],0,m+(e()<c?"L":""),o);let v=Math.max(1,Math.round(r/6)),T=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let S=0;S<v;S++)(_>0?ir:sr)(l,_*s/2,S*T,(S+1)*T,p[y],p[y+1],m+(e()<c?"L":""),o);Mo(u,s,r,f,e,!0)}function jf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([Mt("#f2f2ee"),Mt("#c9cdd2"),Mt("#2b2f38"),Mt("#b33a32"),Mt("#9fc6c0"),Mt("#e7d9b4"),Mt("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,Sn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,Mt("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ht.black)}function td(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ht.black:ht.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,ht.black),e.box(-.5,2.55,-.06,.5,2.95,.02,ht.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ht.black);e.box(-.78,-.9,-.34,.3,0,.34,ht.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,Mt("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,ht.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new Zt().multiplyMatrices(t,new Zt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ht.black:ht.yellow)}e.setM(t),i.atlas.setM(t),Ne(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function ed(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,ht.stone),e.cyl(0,.25,0,.14,.12,.95,8,ht.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,ht.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,Sn(ht.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,Sn(ht.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,un),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,un)}function Cu(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,ht.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ht.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,ht.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,ht.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,ht.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ht.vermilion)}function nd(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,Mt("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,Mt("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,Mt("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,Mt("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ht.metal),n.box(1.1,0,.3,1.2,.42,.55,ht.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ht.metal),i.atlas.setM(t),sr(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),ir(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function id(i,t,e,n=1){let s=i.color;s.setM(t);let r=Sn(ht.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],o=.55*n;for(let c of a)s.rod([0,o,0],[c[0]*.95*n,o+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function sd(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,Mt("#8f8a80"),Mt("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,ht.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ht.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,ht.black),e.cyl(0,18.6,0,1,.25,1.2,12,ht.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function rd(i,t,e){let n=i.color;n.setM(t);let s=e.pick([Mt("#f4f4f0"),Mt("#3b6ea5"),Mt("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),tr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),tr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ht.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ht.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,Mt("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ht.metal)}function od(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,ht.stone),n.box(-.55,.5,.9,.55,1.5,1.8,Mt("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],Mt("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],Mt("#4d5468")),Cu(i,Tu(t,0,0,-.3,Math.PI/2),.75,2.2)}var Ze=60,F_=[.7,.9,1.5,1.9,2,2.1,2.65,3.05,3.4],B_=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Pu=32,Ol=[.025,.026,.032],ad=[.05,.05,.065],Wi=(i,t)=>(i%t+t)%t,or=(i,t)=>{let e=$s(i);return!!e&&Math.abs(i-e.s)<t},Xn=(i,t)=>{let e=yi(i);return!!e&&Math.abs(i-e.s)<t},Iu=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=n(r,a);this.P.push(o[0],o[1],o[2]),this.N.push(o[3],o[4],o[5]),this.SU.push(o[6],o[7]),this.ZW.push(o[8],o[9],o[10],o[11]),this.RK.push(o[12],o[13]),this.RV.push(o[14]||0)}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let o=s+r*e+a,c=o+1,l=o+e,u=l+1;this.I.push(o,c,l,c,u,l)}}build(){let t=new fe;return t.setAttribute("position",new qt(this.P,3)),t.setAttribute("normal",new qt(this.N,3)),t.setAttribute("su",new qt(this.SU,2)),t.setAttribute("zw",new qt(this.ZW,4)),t.setAttribute("rk",new qt(this.RK,2)),t.setAttribute("rv",new qt(this.RV,1)),t.setIndex(this.I),t.computeBoundingSphere(),t}},zl=class{constructor(t,e,n,s,r){this.path=e,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Ie,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/Ze),s=Math.floor((t+this.ahead)/Ze);for(let[a,o]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(o),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);let r=performance.now();for(;;){if(!this.job){let o=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){o=c;break}if(o<0)return 0;this.job={c:o,it:this.gen(o)}}let a=this.job.it.next();if(a.done&&(this.chunks.set(this.job.c,a.value),this.group.add(a.value.group),this.job=null),performance.now()-r>e)return 1}}dispose(t){this.group.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}*gen(t){let e=this.path,n=t*Ze,s=n+Ze,r=e.at(n),a=r.x,o=r.z,c=cn(Math.floor(vi(t,777)*4294967295)),l={atlas:new Ye({uv:!0}),color:new Ye,foliage:new Ye,leaf:new Ye({uv:!0}),lamp:new Ye({color:!1}),pool:new Ye({uv:!0,color:!1})},u=new Iu,h=[],f=[],d={},g={},x=(E,R)=>{e.at(E,g);let I=bn(E,"rw");return g.y+_u(E,R,g.y,I)},m=E=>{let R=qe(E);return[R.city,R.sakura,R.coast,R.country]},p=(E,R,I)=>(e.at(E,d),[d.x+d.rx*R-a,I,d.z+d.rz*R-o]),v=(E,R,I,P=0,N=!0)=>{e.at(E,d);let w=d.h-Math.PI/2+(N&&R<0?Math.PI:0)+P,D=new Zt().makeRotationY(w);return D.setPosition(d.x+d.rx*R-a,I,d.z+d.rz*R-o),D},T=(E,R,I=0,P=0,N=!0)=>v(E,R,x(E,R)+I,P,N),_=E=>e.at(E,g).y,y=E=>bn(E,"rw"),S=E=>{let R=qe(E);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let E=yi(n+Ze/2),R=!!E&&E.s>n-40&&E.s<s+40,I=R?61:21,P=y(n+Ze/2),N=(()=>{let O=[0,...F_].map(V=>V);return B_.forEach(V=>O.push(V-P)),O})(),w=[...N.slice().reverse().map(B=>-B),...N],D=w.length;u.grid(I,D,(B,O)=>{let V=n+B/(I-1)*Ze,H=y(V),W=w[O],Z=W<0||W===0&&O<D/2?W-H:W+H;e.at(V,d);let xt=d.y,Et=xt+_u(V,Z,xt,H),jt=.6,zt=(x(V,Z+jt)-x(V,Z-jt))/(2*jt),Wt=(x(V+jt,Z)-x(V-jt,Z))/(2*jt),K=-zt*d.rx-Wt*d.fx,it=1,St=-zt*d.rz-Wt*d.fz,$=Math.hypot(K,it,St);K/=$,it/=$,St/=$;let Q=m(V);return[d.x+d.rx*Z-a,Et,d.z+d.rz*Z-o,K,it,St,Wi(V,os),Z,Q[0],Q[1],Q[2],Q[3],H,0,R?Rf(V):0]})}yield,u.grid(31,2,(R,I)=>{let P=n+R/30*Ze,N=y(P),w=I?N:-N;e.at(P,d);let D=d.y,B=(_(P+1)-_(P-1))/2,O=-B*d.fx,V=1,H=-B*d.fz,W=Math.hypot(O,V,H),Z=m(P);return[d.x+d.rx*w-a,D,d.z+d.rz*w-o,O/W,V/W,H/W,Wi(P,os),w,Z[0],Z[1],Z[2],Z[3],N,1]});{let E=[];for(let P=0;P<=30;P++){let N=n+P/30*Ze;E.push({s:N,sw:S(N)})}let R=[],I=null;for(let P of E)P.sw>0?(I||(I=[],R.push(I)),I.push(P)):I=null;for(let P of R)if(!(P.length<2))for(let N of[-1,1])u.grid(P.length,2,(w,D)=>{let{s:B,sw:O}=P[w],V=y(B),H=N*(D===(N>0?0:1)?V:V+O);e.at(B,d);let W=m(B);return[d.x+d.rx*H-a,d.y+.15,d.z+d.rz*H-o,0,1,0,Wi(B,os),H,W[0],W[1],W[2],W[3],V,2]}),u.grid(P.length,2,(w,D)=>{let{s:B}=P[w],O=y(B),V=N*O,H=N>0?D:1-D;e.at(B,d);let W=m(B);return[d.x+d.rx*V-a,d.y+(H?.15:0),d.z+d.rz*V-o,-N*d.rx,0,-N*d.rz,Wi(B,os),V,W[0],W[1],W[2],W[3],O,3]})}yield,this.placePoles(t,n,s,c,l,v,x,p,_,y);{let E=Math.ceil((n-Zs)/Ys),R=Js(E);R<s&&po(R)&&this.placeCrossing(l,u,R,v,_,y,x,S,a,o);let I=Math.ceil((n-Pl)/mo),P=gu(I);P<s&&xu(P)&&this.placeRiver(l,u,P,v,_,y,x,S,a,o,c,f)}yield;for(let E=n;E<s;E+=4)Re(E)==="coast"&&qe(E).coast>.45&&this.guardrail(l,E,Math.min(E+4,s),p,_,y);yield*this.placeCity(l,c,n,s,v,T,_,y,S,x),yield*this.placeSakura(l,c,n,s,v,T,_,y,x),this.placeCoast(l,c,n,s,v,T,_,y,x,h,p),yield,this.placeCountry(l,c,n,s,v,T,_,y,x),yield;let C=new Ie,M=(E,R,I,P,N=0)=>{if(!E)return;let w=new ue(E,R);w.castShadow=I,w.receiveShadow=P,w.renderOrder=N,C.add(w)};if(M(u.build(),this.M.ground,!1,!0),yield,M(l.atlas.build(),this.M.atlas,!0,!0),yield,M(l.color.build(),this.M.color,!0,!0),yield,M(l.foliage.build(),this.M.foliage,!0,!0),M(l.leaf.build(),this.M.leaf,!0,!0),yield,M(l.lamp.build(),this.M.lamp,!1,!1),M(l.pool.build(),this.M.pool,!1,!1,2),h.length){let E=new fe,R=[],I=[],P=[];h.forEach((N,w)=>{for(let D of N)R.push(D[0],D[1],D[2]),I.push(D[3],D[4]);if(w>0){let D=(w-1)*2;P.push(D,D+2,D+1,D+1,D+2,D+3)}}),E.setAttribute("position",new qt(R,3)),E.setAttribute("su",new qt(I,2)),E.setIndex(P),E.computeBoundingSphere(),M(E,this.foamMat,!1,!1,1)}for(let E of f)M(E,this.riverMat,!1,!0);return C.position.set(a-this.origin.x,0,o-this.origin.z),{group:C,ox:a,oz:o,s0:n}}poleSpec(t){let e=t*Pu+6,n=Re(e);if(n==="sakura"||or(e,6)||Xn(e,34))return null;let s=bn(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:s+2.35;return{s:e,u:r,z:n}}placePoles(t,e,n,s,r,a,o,c,l,u){let h=Math.ceil((e-6)/Pu),f=Math.floor((n-6-.001)/Pu);for(let d=h;d<=f;d++){let g=this.poleSpec(d);if(!g)continue;let x=g.z==="city"?l(g.s)+.15:o(g.s,g.u),m=a(g.s,g.u,x),p=cn(Math.floor(vi(d,31)*4294967295)),v=Eu(r,m,p,{trans:p()<.45});g.z==="city"&&d%2===0&&Xf(r,m,-.11);let T=this.poleSpec(d+1);if(T){let _=T.z==="city"?l(T.s)+.15:o(T.s,T.u),y=a(T.s,T.u,_),S=Eu({color:new Ye,atlas:new Ye({uv:!0})},y,cn(Math.floor(vi(d+1,31)*4294967295)),{});r.color.setM(new Zt);let C=[];for(let M=0;M<v.length;M++){let E=v[M],R=S[M],I=.35+p()*.4+(M>=7?.3:0);C.push(I),r.color.wire([E.x,E.y,E.z],[R.x,R.y,R.z],I,M>=7?.022:.015,Ol,10)}if(g.z!=="coast"&&p()<.38){let M=Math.floor(p()*4),E=v[M],R=S[M],I=1+Math.floor(p()*4),P=.18+p()*.5;for(let N=0;N<I;N++){let w=Math.min(.92,P+N*(.018+p()*.025)),D=E.x+(R.x-E.x)*w,B=E.z+(R.z-E.z)*w,O=E.y+(R.y-E.y)*w-C[M]*4*w*(1-w);r.color.box(D-.07,O+.015,B-.07,D+.07,O+.19,B+.07,ad),r.color.box(D-.045,O+.19,B-.045,D+.045,O+.27,B+.045,ad)}}}if(g.z==="city"){r.color.setM(new Zt);let _=1+Math.floor(p()*3);for(let y=0;y<_;y++){let S=v[7+y%2],C=(p()-.5)*14,M=u(g.s+C),E=p()<.55,R=E?-(M+3.15):M+3.15,I=c(g.s+C,R,l(g.s+C)+5.2+p()*2.5);r.color.wire([S.x,S.y,S.z],I,.25+p()*.4,.012,Ol,8)}}}}placeCrossing(t,e,n,s,r,a,o,c,l,u){let h=this.path.at(n,{}),f=h.y,d=a(n),g=c(n),x=d+g+.2,m=150,p=f+.18,v=qe(n),T=[v.city,v.sakura,v.coast,v.country],_=(w,D,B)=>[h.x+h.fx*w+h.rx*D-l,B,h.z+h.fz*w+h.rz*D-u],y=[7.6,4.7,-4.7,-7.6];for(let[w,D]of[[-m,-x],[x,m]])e.grid(25,y.length,(O,V)=>{let H=w+(D-w)*O/24,W=y[V],xt=Math.abs(W)<5?p:Math.min(p-.05,o(n+W,H)-.03),Et=_(W,H,xt);return[Et[0],Et[1],Et[2],0,1,0,W,H,T[0],T[1],T[2],T[3],d,5]});let S=(w,D,B)=>e.grid(2,2,(O,V)=>{let H=O?D:w,W=V?-3.3:3.3,Z=_(W,H,B);return[Z[0],Z[1],Z[2],0,1,0,W,H,T[0],T[1],T[2],T[3],d,6]});S(-d,d,f+.03),g>0&&(S(-x,-d,f+.165),S(d,x,f+.165));let C=(w,D,B,O)=>e.grid(2,2,(V,H)=>{let W=V?O:B,Z=H?D:w,xt=_(Z,W,f+.025);return[xt[0],xt[1],xt[2],0,1,0,Z,W,T[0],T[1],T[2],T[3],d,7]});C(-7.15,-7.6,-d+.3,-.12),C(7.6,7.15,.12,d-.3);let M=s(n,0,f,-Math.PI/2,!1),E=t.color;E.setM(M);let R=[.42,.4,.38],I=[.3,.29,.28],P=[.55,.57,.6];for(let w of[-2,2])for(let D of[-.5335,.5335]){let B=-(w+D);for(let[O,V]of[[-m,-x],[x,m]])E.box(O,.26,B-.035,V,.34,B+.035,R);E.box(-x,0,B-.035,x,.04,B+.035,I)}let N=[-146,-104,-64,-26,26,64,104,146];for(let w of N){for(let D of[-4.95,4.95])E.box(w-.12,.18,D-.12,w+.12,7.4,D+.12,P);E.box(w-.1,6.95,-5.15,w+.1,7.2,5.15,P);for(let D of[-2,2])E.box(w-.04,6.3,-D-.04,w+.04,6.95,-D+.04,P)}for(let w of[-2,2])for(let D=0;D<N.length-1;D++)E.wire([N[D],5.35,-w],[N[D+1],5.35,-w],.05,.011,Ol,6),E.wire([N[D],6.4,-w],[N[D+1],6.4,-w],.45,.011,Ol,8);for(let w of Ll(this.path,n)){let D=new Zt().makeRotationY(w.yaw);D.setPosition(w.x-l,w.y,w.z-u),td(t,D)}rr(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),rr(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",-1,2.2,.85)}placeRiver(t,e,n,s,r,a,o,c,l,u,h,f){let d=this.path.at(n,{}),g=d.y,x=a(n),m=c(n),p=qe(n),v=[p.city,p.sakura,p.coast,p.country],T=p.sakura>.5,_=222,y=x+m+.5,S=g-go,C=(w,D,B)=>[d.x+d.fx*w+d.rx*D-l,B,d.z+d.fz*w+d.rz*D-u];{let w=[],D=[],B=[];for(let H=0;H<=74;H++){let W=-_+2*_*H/74;for(let Z of[12.5,-12.5]){let xt=C(Z,W,S);w.push(xt[0],xt[1],xt[2]),D.push(Z,W)}if(H>0){let Z=(H-1)*2;B.push(Z,Z+1,Z+2,Z+1,Z+3,Z+2)}}let V=new fe;V.setAttribute("position",new qt(w,3)),V.setAttribute("su",new qt(D,2)),V.setIndex(B),V.computeBoundingSphere(),f.push(V)}for(let[w,D]of[[28.9,25.7],[-25.7,-28.9]])for(let[B,O]of[[-_,-(x+3.4)],[x+3.4,_]])e.grid(41,2,(V,H)=>{let W=B+(O-B)*V/40,Z=H?D:w,xt=C(Z,W,g+.38);return[xt[0],xt[1],xt[2],0,1,0,Z,W,v[0],v[1],v[2],v[3],x,9,1]});let M=s(n,0,g,0,!1),E=t.color,R=[.74,.73,.7],I=T?[.78,.2,.15]:[.55,.72,.64];E.setM(M),E.box(-24.5,-1,-y,24.5,-.03,y,R,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-go-1.4,-y+.6,w+.7,-1,y-.6,R);for(let w of[-25.7,25.7])E.box(w-1.2,-go+.4,-y-.4,w+1.2,-.05,y+.4,R);let P=m>0?.15:0;for(let w of[-1,1]){let D=w*(y-.14);for(let B=-24;B<=24.01;B+=2)E.box(B-.06,P,D-.06,B+.06,P+1,D+.06,I);E.box(-24,P+.95,D-.08,24,P+1.08,D+.08,I),E.box(-24,P+.48,D-.03,24,P+.54,D+.03,I),E.box(-24,P+.06,D-.03,24,P+.12,D+.03,I)}let N="bridge"+Math.abs(Math.round(n/mo))%4;for(let w of[-25,25])for(let D of[-1,1]){let B=D*(y-.1),O=[.7,.69,.65];E.box(w-.32,P,B-.32,w+.32,P+1.45,B+.32,O),E.box(w-.38,P+1.45,B-.38,w+.38,P+1.58,B+.38,[.62,.61,.57]),t.atlas.setM(M);let V=(w<0?-1:1)*.325,H=N;w<0?t.atlas.quad([w-.325,P+.3,B-.22],[w-.325,P+.3,B+.22],[w-.325,P+1.3,B+.22],[w-.325,P+1.3,B-.22],[1,1,1],bu(H)):t.atlas.quad([w+.325,P+.3,B+.22],[w+.325,P+.3,B-.22],[w+.325,P+1.3,B-.22],[w+.325,P+1.3,B+.22],[1,1,1],bu(H)),E.setM(M)}Bl(t,s(n-14,-(y-.45),g+P,0,!0)),Bl(t,s(n+14,y-.45,g+P,0,!0));for(let w of[-18,18])for(let D of[-1,1])for(let B=11+h()*4;B<(T?125:170);B+=T?h.range(8.5,11):h.range(18,34)){let O=n+w+(h()-.5)*1.5,V=D*B;Ti(t,s(O,V,o(O,V),h()*6,!1),T?"sakura":"broad",h,T?h.range(1,1.25):h.range(.9,1.25))}}guardrail(t,e,n,s,r,a){t.color.setM(new Zt);let o=Math.max(1,Math.round((n-e)/2));for(let c=0;c<o;c++){let l=e+(n-e)*c/o,u=e+(n-e)*(c+1)/o,h=-(a(l)+.95),f=-(a(u)+.95),d=r(l),g=r(u),x=(y,S,C)=>s(y,S,C),m=x(l,h,d+.52),p=x(u,f,g+.52),v=x(l,h,d+.84),T=x(u,f,g+.84);t.color.quad(m,p,T,v,ht.rail),t.color.quad(p,m,v,T,[.62,.64,.66]);let _=s(l,h-.05,d);t.color.box(_[0]-.05,d,_[2]-.05,_[0]+.05,d+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,o,c,l,u){for(let d of[-1,1]){let g=n+e()*2;for(;g<s-2;){if(qe(g).city<.62){g+=4;continue}{let R=$s(g+6);if(R&&g<R.s+8.5&&g+14>R.s-8.5){g=Math.max(g+1,R.s+8.5);continue}}let x=Wi(g,150);if(x>143||x<6){g+=3;continue}let m=c(g),p=l(g)||3,v=m+p+.15,T=e(),_=T<.42?"shop":T<.58?"apt":T<.68?"office":T<.82?"house":T<.88?"konbini":T<.94?"parking":"gap",y=_==="shop"?e.range(5,9):_==="apt"?e.range(10,16):_==="office"?e.range(10,14):_==="house"?e.range(7,9.5):_==="konbini"?e.range(12,14):_==="parking"?e.range(7,11):e.range(2,3.5);if(g+y>s){if(s-g<5||_==="konbini")break;y=s-g-.2}let S=g+y/2,C=o(S),M=e.pick(cs),E=.42;if(_==="parking"){let R=r(S,d*(v+3),C+.15);e()<.8&&jf(t,Tu(R,0,0,.5,(e()-.5)*.1),e),t.color.setM(R),t.color.box(-y/2,0,5.5,y/2,1.6,5.7,ht.concrete)}else if(_!=="gap"){let R=r(S,d*v,C+.15),I={type:_,w:y,d:_==="apt"||_==="office"?e.range(10,14):e.range(8,12),floors:_==="shop"?e.int(2,4):_==="apt"?e.int(4,9):_==="office"?e.int(4,8):2,tint:M,litP:E,fence:_==="house"&&e()<.5?1.2:0};if(us(t,R,e,I),_!=="house"&&e()<.28&&Au(t,r(S+(e()-.5)*(y-1.2),d*(v-.42),C+.15),e),(_==="shop"||_==="konbini")&&e()<.3)for(let P=0;P<1+e()*3;P++)qf(t,r(S-y/2+.8+P*.55,d*(v-.75),C+.15,Math.PI/2+.1),e);if(_==="house"&&e()<.6)for(let P=0;P<2+e()*3;P++)Zf(t,r(S+1+P*.5,d*(v-.3),C+.15),e);if(e()<.03)for(let P=0;P<3;P++)Yf(t,r(S+P*.9,d*(m+.35),C))}g+=y+e.range(.05,.5),yield}for(let x=n+e()*10;x<s-8;x+=e.range(14,26)){if(qe(x).city<.7||e()<.3||or(x,18))continue;let m=c(x),p=r(x,d*(m+3.2+e.range(14,20)),o(x)+.1);us(t,p,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(cs),litP:.4})}if(qe(n+30).city>.7&&e()<.65){let x=n+e()*Ze;if(or(x,24))continue;let m=r(x,d*e.range(55,150),o(x));us(t,m,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(cs),litP:.45})}}let h=Math.ceil(n/150),f=Math.floor((s-.01)/150);for(let d=h;d<=f;d++){let g=d*150;if(Re(g)!=="city")continue;let x=c(g);rr(t,r(g-1,-(x+.4),o(g)+.15),"sign_blue",1),rr(t,r(g-6,-(x+.4),o(g)+.15),"sign_stop",1,2.1,.75),Ru(t,r(g+7,x+.4,o(g)+.15),-1),d%3===0&&rr(t,r(g+20,-(x+.4),o(g)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,o,c,l){for(let f of[-1,1]){for(let d=n+e()*4;d<s;d+=e.range(7.5,10)){if(qe(d).sakura<.45||Xn(d,30))continue;let g=c(d);Ti(t,a(d,f*(g+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&Ti(t,a(d+3,f*(g+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let d=n+(f>0?0:12);d<s;d+=24){if(Re(d)!=="sakura"||Xn(d,30))continue;let g=c(d);Bl(t,r(d,f*(g+2.25),o(d)+.15)),Wi(d,48)<24&&ed(t,r(d+6,f*(g+3),l(d+6,f*(g+3))))}for(let d=n+e()*15;d<s;d+=e.range(14,24)){if(Re(d)!=="sakura"||e()<.35||Xn(d,45))continue;let g=c(d);us(t,a(d,f*(g+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(cs),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+Ze/2)/480)*480+240;h>=n&&h<s&&Re(h)==="sakura"&&!Xn(h,60)&&Cu(t,r(h,0,o(h),0,!1),c(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,o,c,l,u,h){for(let g=0;g<=20;g++){let x=n+g/20*Ze;if(qe(x).coast<.85){u.length&&u[u.length-1]!==null&&u.push(null);continue}let p=c(x),v=p+11,T=p+19,_=h(x,-v,Gi+.06),y=h(x,-T,Gi+.06);u.push([[_[0],_[1],_[2],Wi(x,os),0],[y[0],y[1],y[2],Wi(x,os),1]])}let f=u.indexOf(null);f>=0&&(u.length=f),u.length<2&&(u.length=0);for(let g=n+e()*6;g<s;g+=e.range(5,9)){if(Re(g)!=="coast")continue;let x=c(g);e()<.7&&Ti(t,a(g,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&Ti(t,a(g+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let g=n+4;g<s;g+=e.range(18,30)){if(Re(g)!=="coast"||e()<.4)continue;let x=c(g),m=3+Math.floor(e()*5);for(let p=0;p<m;p++){let v=-(x+e.range(12,17)),T=g+e.range(-3,3);id(t,r(T,v,Math.max(l(T,v),Gi-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Re(g)!=="coast")continue;let x=c(g);wu(t,a(g,x+1),e)}if(Re(n+30)==="coast"&&e()<.5){let g=n+e()*Ze,x=c(g);us(t,a(g,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(cs),litP:.5,fence:0})}if(Re(n+30)==="coast"&&e()<.55){let g=n+e()*Ze;rd(t,r(g,-(c(g)+e.range(45,220)),Gi-.25,e()*6,!1),e)}let d=Math.floor((n+Ze/2)/1500)*1500+700;d>=n&&d<s&&Re(d)==="coast"&&sd(t,r(d,-(c(d)+75),Gi-1,0,!1))}placeCountry(t,e,n,s,r,a,o,c,l){for(let d of[-1,1]){for(let g=n+e()*20;g<s;g+=e.range(20,40)){if(Re(g)!=="country"||e()<.55||or(g,16)||Xn(g,48))continue;let x=d*e.range(16,95),m=a(g,x);us(t,m,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(cs),litP:.5,fence:0});for(let p=0;p<2+e()*3;p++){let v=x+d*e.range(6,14),T=g+e.range(-8,8);Ti(t,a(T,v,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let g=n+e()*8;g<s;g+=e.range(5,9)){if(Re(g)!=="country"||or(g,7)||Xn(g,36))continue;let x=d*e.range(140,210);Ti(t,a(g,x,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!or(g+2,8)&&!Xn(g+2,34)&&Ti(t,a(g+2,d*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let u=Math.floor((n+Ze/2)/600)*600+300;if(u>=n&&u<s&&Re(u)==="country"&&!Xn(u,40)){let d=c(u);nd(t,r(u,-(d+1.6),o(u)-.08),e)}let h=Math.floor((n+Ze/2)/700)*700+120;if(h>=n&&h<s&&Re(h)==="country"&&!Xn(h,40)){let d=c(h);Au(t,r(h,-(d+.95),o(h)-.08),e),wu(t,r(h+2,-(d+.8),o(h)-.08),e)}let f=Math.floor((n+Ze/2)/900)*900+450;if(f>=n&&f<s&&Re(f)==="country"&&!Xn(f,40)){let d=c(f);od(t,a(f,d+5),e)}for(let d=n;d<s;d+=30){if(Re(d)!=="country")continue;let g=this.path.curv(d);if(Math.abs(g)>1/450&&e()<.5){let x=g>0?-1:1,m=c(d);Ru(t,a(d,x*(m+.75)),x>0?-1:1)}}}};var kl=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new dt(t):t)),ct={zenith:new dt,horizon:new dt,sunCol:new dt,sunI:1,hemiSky:new dt,hemiGround:new dt,hemiI:1,fog:new dt,cLit:new dt,cShade:new dt,cRim:new dt,night:0,warm:0,overcast:0,rain:0,sunDir:new U,moonDir:new U,lightDir:new U,sunEl:0};function cd(i){let t=0;for(;t<kl.length-2&&kl[t+1][0]<=i;)t++;let e=kl[t],n=kl[t+1],s=wl(Ae((i-e[0])/(n[0]-e[0]),0,1)),r=(c,l)=>l.copy(e[c]).lerp(n[c],s);r(1,ct.zenith),r(2,ct.horizon),r(3,ct.sunCol),ct.sunI=me(e[4],n[4],s),r(5,ct.hemiSky),r(6,ct.hemiGround),ct.hemiI=me(e[7],n[7],s),r(8,ct.fog),r(9,ct.cLit),r(10,ct.cShade),r(11,ct.cRim),ct.night=me(e[12],n[12],s),ct.warm=me(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,o=(i-.25)*Math.PI+.9;ct.sunEl=a,ct.sunDir.set(Math.cos(a)*Math.sin(o),Math.sin(a),Math.cos(a)*Math.cos(o)).normalize(),ct.moonDir.set(-ct.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-ct.sunDir.z).normalize(),ct.lightDir.copy(ct.sunDir),a<.08&&ct.lightDir.lerpVectors(ct.moonDir,ct.sunDir,Ae((a+.12)/.2,0,1)).normalize(),ct.lightDir.y<.12&&(ct.lightDir.y=.12,ct.lightDir.normalize())}var ld={zenith:[new dt("#7b8594"),new dt("#141a28")],horizon:[new dt("#b5bcc6"),new dt("#283042")],fog:[new dt("#a8b0ba"),new dt("#232b3c")],hemiSky:[new dt("#aab3bf"),new dt("#3c4866")],hemiGround:[new dt("#8b8983"),new dt("#1e2030")],cLit:[new dt("#d0d5dc"),new dt("#2c3240")],cShade:[new dt("#7c8593"),new dt("#151922")]},Lu=new dt;function ud(i,t){if(ct.overcast=i,ct.rain=t,i<=.001)return;let e=ct.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Lu.copy(ld[n][0]).lerp(ld[n][1],e),ct[n].lerp(Lu,i*(n==="cLit"||n==="cShade"?.75:.85));ct.sunI*=1-.82*i,ct.warm*=1-i,ct.cRim.multiplyScalar(1-i),ct.sunCol.lerp(Lu.setRGB(.85,.87,.9),i*.6)}function hd(){let i=new ae({side:Qe,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ct.zenith},uHorizon:{value:ct.horizon},uSunDir:{value:ct.sunDir},uMoonDir:{value:ct.moonDir},uSunCol:{value:ct.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new dt},uOvercast:{value:0},uDeckLit:{value:new dt},uDeckDark:{value:new dt}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark; uniform float uNight, uWarm, uTime, uCirrus, uOvercast;
      varying vec3 vDir;
      ${Mi}
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
      }`}),t=new ue(new kr(5e3,48,24),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function O_(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let p=0;p<a;p++){let v=.06+i()*.05;e.push([(p/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let o=t?6:2,c=s*.82,l=.1+.09;for(let p=0;p<o;p++){let v=Math.max(1,Math.round(c/.11));for(let T=0;T<v;T++){let _=(v===1?0:T/(v-1)-.5)*c+(i()-.5)*.05+r*p;e.push([_,l+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}l+=t?.115:.075,c*=t?.8:.66}let u=e.slice();for(let p of u){if(e.length>92)break;let v=1+Math.floor(i()*2);for(let T=0;T<v;T++){let _=.35+i()*2.4,y=p[3]*(.35+i()*.2);e.push([p[0]+Math.cos(_)*p[3]*.82,p[1]+Math.sin(_)*p[3]*.82,p[2]+.04,y])}}let h=e.slice(0,96),f=1e9,d=-1e9,g=-1e9;for(let p of h)f=Math.min(f,p[0]-p[3]*1.12),d=Math.max(d,p[0]+p[3]*1.12),g=Math.max(g,p[1]+p[3]*1.12);let x=Math.min(1,.92/(d-f),(.95-.1)/(g-.1)),m=(f+d)/2;for(let p of h)p[0]=(p[0]-m)*x,p[1]=.1+(p[1]-.1)*x,p[3]*=x;return h}function fd(i){let e={value:Array.from({length:96},()=>new _e)},n=new ae({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Mi}
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
      }`,depthTest:!1,depthWrite:!1,blending:pn}),s=new ue(new Be(1,1),n),r=new Ki,a=new ji;r.add(s);let o=new Se(1024*2,1024*2,{generateMipmaps:!0,minFilter:Pn,magFilter:Ue}),c=i.getRenderTarget(),l=i.autoClear,u=cn(99);i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let d=f%2===0,g=O_(u,d);g.forEach((x,m)=>e.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,o.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(o),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:d})}return o.viewport.set(0,0,1024*2,1024*2),i.autoClear=l,i.setRenderTarget(c),n.dispose(),s.geometry.dispose(),{tex:o.texture,kinds:h,rt:o}}function dd(i){let t=cn(5),e=22,n=[],s=new Be(1,1);s.translate(0,.5,0);let r=new dn(new Float32Array(e*4),4),a=new dn(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let o=new ae({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ct.cLit},uShade:{value:ct.cShade},uRim:{value:ct.cRim},uHaze:{value:ct.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new pi(s,o,e);c.frustumCulled=!1,c.renderOrder=-5;for(let g=0;g<e;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],p=x?m.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:g/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:p,cell:m.cell,haze:x?.45:.18})}let l=new Zt,u=new Ge,h=new U,f=new U,d=new U(0,1,0);return{group:c,update(g,x){let m=Math.atan2(ct.lightDir.x,ct.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,T)=>T.d-v.d).forEach((v,T)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),u.setFromAxisAngle(d,v.phi+Math.PI),f.set(v.size,v.size,1),l.compose(h,u,f),c.setMatrixAt(T,l);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-y*y*(3-2*y);r.setXYZW(T,v.cell[0],v.cell[1],S,v.haze),a.setX(T,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ct.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,o.uniforms.uOpacity.value=(1-ct.night*.35)*(1-ct.overcast*.55)}}}function pd(){let i=new Ie;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],o=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,d=Math.sin(f)*e.R,g=Math.cos(f)*e.R,x=Al(h/360*e.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),p=e.h*(.12+m);if(r.push(d,-60,g,d,-60+p,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;o.push(v,v+1,v+2,v+1,v+3,v+2)}}let c=new fe;c.setAttribute("position",new qt(r,3)),c.setAttribute("hf",new qt(a,2)),c.setIndex(o);let l=new ae({side:Xe,fog:!1,uniforms:{uCol:{value:new dt(e.col)},uHaze:{value:ct.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17}},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed; varying vec2 vH; varying float vY;
        ${Mi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new ue(c,l);u.frustumCulled=!1,u.renderOrder=-8,i.add(u)}),{group:i,update(e){i.position.set(e.x,0,e.z);let n=(.35+.65*(1-ct.night))*(1-.35*ct.overcast);for(let s of i.children)s.material.uniforms.uLight.value=n}}}var ar={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function md(i){let t=i.get("weather"),e={mode:ar[t]?t:"auto",kind:ar[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ar[t]&&(e.ov=ar[t][0],e.rain=ar[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let o=Math.random();e.kind=e.kind==="clear"?o<.5?"cloudy":o<.72?"rain":"clear":e.kind==="cloudy"?o<.5?"clear":o<.85?"rain":"cloudy":o<.55?"cloudy":"clear"}let[s,r]=ar[e.kind];e.ov+=Ae(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=Ae(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function gd(){let t=new U(46,24,46),e=new Be(1,1);e.translate(0,.5,0);let n=new qr;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let o=0;o<2600;o++)s[o*4]=Math.random(),s[o*4+1]=Math.random(),s[o*4+2]=Math.random(),s[o*4+3]=Math.random();n.setAttribute("aOff",new dn(s,4)),n.instanceCount=2600;let r=new ae({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new U},uRain:{value:0},uBox:{value:t},uCol:{value:new dt(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ue(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(o,c,l,u){a.visible=l>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(o),r.uniforms.uRain.value=l,r.uniforms.uCol.value.setRGB(.55+.35*u,.6+.35*u,.7+.3*u)}}}var lr=72;function z_(){let i=[],t=[],e=(s,r,a,o,c,l)=>{i.push(...s,...r,...a),t.push(o,c,l)};e([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),e([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),e([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),e([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])e([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),e([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),e([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new fe;return n.setAttribute("position",new qt(i,3)),n.setAttribute("aWing",new qt(t,1)),n}function xd(){let i=z_(),t=new dn(new Float32Array(lr*3),3),e=new dn(new Float32Array(lr*2),2);i.setAttribute("aCol",t),i.setAttribute("aFlap",e);let n=new ae({side:Xe,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ct.fog},uFogD:{value:.002},uCam:{value:new U}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new pi(i,n,lr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},o=new Zt,c=new Ge,l=new fn(0,0,0,"YXZ"),u=new U,h=new U,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function d(x,m,p,v){let T=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+T>lr)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,C=new U().copy(m).addScaledVector(p,_).addScaledVector(v,y-S*75);C.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new U().copy(v).multiplyScalar(S*M).addScaledVector(p,(Math.random()-.3)*M*.6),R=x==="small"?.8:1.45,I=Array.from({length:T},(P,N)=>({off:new U((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:C,vel:E,birds:I,size:R,life:60})}function g(x,m,p,v){if(r.some(y=>y.kind==="gull")||f()+4>lr)return;let T=new U().copy(x).addScaledVector(m,70).addScaledVector(p,-v*45);T.y=x.y+18;let _=Array.from({length:4},(y,S)=>({off:new U,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:T,vel:new U,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,p,v,T,_,y,S,C){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(p);let M=y>.35&&S<.3,E=ct.warm>.25&&ct.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&d("small",p,v,T)),(E||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,d("crow",p,v,T)),_.coast>.6&&M&&g(p,v,T,1);let R=[.1+.08*y,.11+.09*y,.15+.1*y],I=0;for(let P=r.length-1;P>=0;P--){let N=r[P];if(N.kind==="gull"?(N.c.lerp(u.copy(C).addScaledVector(v,60).addScaledVector(T,-42).setY(C.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(N.life=Math.min(N.life,8),N.c.y+=x*6)):N.c.addScaledVector(N.vel,x),N.life-=x,N.life<0||N.kind!=="gull"&&N.c.distanceTo(p)>300){r.splice(P,1);continue}for(let w of N.birds){if(I>=lr)break;let D,B,O,V;N.kind==="gull"?(w.w+=x*(14/w.r),D=N.c.x+Math.cos(w.w)*w.r,O=N.c.z+Math.sin(w.w)*w.r,B=N.c.y+w.h+Math.sin(m*.4+w.ph)*2,V=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(D=N.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,B=N.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,O=N.c.z+w.off.z,V=Math.atan2(N.vel.x,N.vel.z)),l.set(0,V,Math.sin(m+w.ph)*.15),c.setFromEuler(l),h.setScalar(N.size),o.compose(u.set(D,B,O),c,h),s.setMatrixAt(I,o);let H=N.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:N.kind==="crow"?[.05,.05,.07]:R;t.setXYZ(I,H[0],H[1],H[2]),e.setXY(I,w.fq,w.ph),I++}}s.count=I,s.instanceMatrix.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let p of r)p.c.x-=x,p.c.z-=m}}}function _d(){let i=new ae({fog:!1,uniforms:{uTime:{value:0},uCam:{value:new U},uSunDir:{value:ct.lightDir},uSunCol:{value:ct.sunCol},uHorizon:{value:ct.horizon},uZenith:{value:ct.zenith},uFog:{value:ct.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Mi}
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
      }`}),t=new ue(new Be(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=Gi,t.renderOrder=-6,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=ct.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ct.overcast*.85}}}function vd(){return new ae({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new dt(1,1,1)}},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Mi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function yd(){return new ae({fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:ct.lightDir},uSunCol:{value:ct.sunCol},uHorizon:{value:ct.horizon},uZenith:{value:ct.zenith},uFog:{value:ct.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Mi}
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
      }`})}var So=new U;function Dn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;So.copy(t),So[n]=0,So.normalize();let l=.5*a/(a+o),u=1-So.angleTo(i)/c;return Math.sign(So[e])===1?u*l:o/(a+o)+l+l*(1-u)}var ii=class i extends Vn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,u=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,x=new U,m=.5/a;for(let p=0,v=0;p<h.length;p+=3,v+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[v+0]=Dn(x,l,"z","y",r,n),d[v+1]=1-Dn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[v+0]=1-Dn(x,l,"z","y",r,n),d[v+1]=1-Dn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[v+0]=1-Dn(x,l,"x","z",r,t),d[v+1]=Dn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-Dn(x,l,"x","z",r,t),d[v+1]=1-Dn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-Dn(x,l,"x","y",r,t),d[v+1]=1-Dn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[v+0]=Dn(x,l,"x","y",r,t),d[v+1]=1-Dn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Sd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new fe,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Md(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][f]);let g=Md(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Md(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new $e(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let x=u.getComponent(f,g);o.setComponent(f+h,g,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function k_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new yn(i);return n.colorSpace=Te,n}function V_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new yn(i);return n.colorSpace=Te,n}function bd(){let i=new Ie,t=(S,C={})=>Ks(new Ke({color:S,gradientMap:Wn,...C})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),o=Ks(new Ke({color:"#ffffff",map:V_(),gradientMap:Wn})),c=new Ke({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Wn}),l=new Ke({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Wn}),u=new We({map:k_()}),h=new Map,f=new Zt,d=new fn,g=new Ge,x=new U(1,1,1),m=(S,C,M,E,R,I=0,P=0,N=0)=>{let w=S.index?S.toNonIndexed():S;d.set(I,P,N),g.setFromEuler(d),f.compose(new U(M,E,R),g,x),w.applyMatrix4(f),h.has(C)||h.set(C,[]),h.get(C).push(w)};m(new ii(1.48,.86,3.38,4,.15),e,0,.77,0),m(new ii(1.42,.66,2.6,4,.17),e,0,1.5,-.25),m(new ii(1.38,.09,2.5,3,.04),n,0,1.84,-.25),m(new Be(1.16,.5),o,0,1.53,-1.556,0,Math.PI,0);for(let S of[-1,1])m(new Be(2.25,.46),o,S*.712,1.54,-.2,0,S*Math.PI/2,0),m(new ii(.1,.12,.2,2,.04),e,S*.82,1.2,.95),m(new ii(.14,.48,.08,2,.035),c,S*.64,1,-1.67),m(new ii(.12,.08,.06,2,.02),l,S*.64,.7,-1.67);m(new Be(1.2,.52),o,0,1.52,1.056,-.12,0,0),m(new ii(1.52,.22,.22,2,.07),s,0,.42,-1.62),m(new Vn(.24,.04,.05),s,0,.84,-1.69),m(new Be(.34,.17),u,0,.72,-1.7,0,Math.PI,0);for(let[S,C]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])m(new Us(.29,.29,.2,20),r,S,.29,C,0,0,Math.PI/2),m(new Us(.16,.16,.205,12),a,S,.29,C,0,0,Math.PI/2);for(let[S,C]of h){let M=new ue(Sd(C),S);M.castShadow=S!==o&&S!==u,M.receiveShadow=!0,i.add(M)}let p=new Ie;p.position.set(.02,1.3,-1.57),i.add(p);let v=new Vn(.52,.026,.02);v.translate(.27,0,0);let T=new ue(v,s);T.rotation.z=.18,p.add(T);let _=0,y=new Wr(16773328,0,70,.55,.65,1.2);return y.position.set(0,.8,1.6),y.target.position.set(0,0,18),i.add(y,y.target),{group:i,mBody:e,update(S,C,M,E=0){if(c.emissiveIntensity=.35+M*3.2,E>.15||_%2.6>.01){_+=S;let R=_%2.6/2.6,I=N=>N*N*(3-2*N),P=R<.25?I(R/.25):R<.5?I(1-(R-.25)/.25):0;T.rotation.z=.18+P*2.5,E<=.15&&R>=.5&&(_=0)}y.intensity=M*60}}}var cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},H_=new Oi(-1,1,1,-1,0,1),Du=class extends fe{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},G_=new Du,Xi=class{constructor(t){this._mesh=new ue(G_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ur=class extends En{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xi.clone(t.uniforms),this.material=new ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Xi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bo=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vl=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Hl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ot);this._width=n.width,this._height=n.height,e=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ur(cr),this.copyPass.material.blending=pn,this.timer=new Yr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(a instanceof bo?n=!0:a instanceof Vl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gl=class extends En{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new dt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Td={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var hr=class i extends En{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ot(t.x,t.y):new Ot(256,256),this.clearColor=new dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(r,a,{type:Oe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Se(r,a,{type:Oe,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Se(r,a,{type:Oe,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Td;this.highPassUniforms=xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xi.clone(cr.uniforms),this.blendMaterial=new ae({uniforms:this.copyUniforms,vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,premultipliedAlpha:!0,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new dt,this._oldClearAlpha=1,this._basic=new We,this._fsQuad=new Xi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new ae({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ot(.5,.5)},direction:{value:new Ot(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};hr.BlurDirectionX=new Ot(1,0);hr.BlurDirectionY=new Ot(0,1);var To={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wl=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=xi.clone(To.uniforms),this.material=new Fs({name:To.name,uniforms:this.uniforms,vertexShader:To.vertexShader,fragmentShader:To.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var W_={uniforms:{tDiffuse:{value:null},uSun:{value:new Ot(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Ed(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new Ot),a=new Se(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:Oe,samples:n}),o=new Hl(i,a);o.addPass(new Gl(t,e));let c=new hr(new Ot(r.x*s*.5,r.y*s*.5),.42,.55,.86);o.addPass(c),o.addPass(new Wl);let l=new ur(W_);return o.addPass(l),{composer:o,bloom:c,grade:l}}function wd(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let $=0;$<2;$++){let Q=s.getChannelData($);for(let at=0;at<n;at++)Q[at]=(Math.random()*2-1)*Math.pow(1-at/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=900,o.Q.value=.3;let c=t.createGain();c.gain.value=.11,o.connect(c),c.connect(e),c.connect(r);let l=($,Q)=>{let at=t.createBuffer(1,t.sampleRate*$,t.sampleRate),ut=at.getChannelData(0),nt=0;for(let pt=0;pt<ut.length;pt++)Q?(nt=(nt+.02*(Math.random()*2-1))/1.02,ut[pt]=nt*3.5):ut[pt]=Math.random()*2-1;return at},u=($,Q,at)=>{let ut=t.createBufferSource();ut.buffer=$,ut.loop=!0;let nt=t.createBiquadFilter();nt.type=Q,nt.frequency.value=at;let pt=t.createGain();return pt.gain.value=0,ut.connect(nt),nt.connect(pt),pt.connect(e),ut.start(),{f:nt,g:pt}},h=u(l(2,!0),"lowpass",400),f=u(l(3,!1),"lowpass",700);f.g.connect(r);let d=u(l(2,!1),"bandpass",5200);d.f.Q.value=6;let g=u(l(2,!0),"lowpass",240),x=u(l(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=u(l(2,!0),"lowpass",520),p=u(l(3,!1),"bandpass",750);p.f.Q.value=.6;let v=l(.03,!1),T=0;function _($,Q){let at=t.createBufferSource(),ut=t.createBiquadFilter(),nt=t.createGain();at.buffer=v,ut.type="bandpass",ut.frequency.value=1800+Math.random()*2600,ut.Q.value=1.2,nt.gain.setValueAtTime(Q*(.02+Math.random()*.03),$),nt.gain.exponentialRampToValueAtTime(1e-4,$+.03),at.connect(ut),ut.connect(nt),nt.connect(e),at.start($),at.stop($+.04)}let y=0,S=0;function C($,Q){let at=t.createOscillator(),ut=t.createOscillator(),nt=t.createGain(),pt=t.createBiquadFilter();pt.type="bandpass",pt.frequency.value=1150,pt.Q.value=2.2,at.type="square",at.frequency.value=745,ut.type="triangle",ut.frequency.value=1490,nt.gain.setValueAtTime(0,$),nt.gain.linearRampToValueAtTime(.085*Q,$+.004),nt.gain.exponentialRampToValueAtTime(1e-4,$+.3),at.connect(pt),ut.connect(pt),pt.connect(nt),nt.connect(e),nt.connect(r),at.start($),ut.start($),at.stop($+.33),ut.stop($+.33)}function M($,Q){let at=t.createOscillator(),ut=t.createGain();at.type="sine",at.frequency.setValueAtTime(110,$),at.frequency.exponentialRampToValueAtTime(48,$+.12),ut.gain.setValueAtTime(1e-4,$),ut.gain.linearRampToValueAtTime(.22*Q,$+.006),ut.gain.exponentialRampToValueAtTime(1e-4,$+.17),at.connect(ut),ut.connect(e),at.start($),at.stop($+.2)}let E=t.createGain();E.gain.value=1,E.connect(e);let R=t.createGain();R.gain.value=.35,E.connect(R),R.connect(r);let I=($=(Math.random()-.5)*1.4)=>{if(!t.createStereoPanner)return E;let Q=t.createStereoPanner();return Q.pan.value=$,Q.connect(E),Q};function P($,Q,at,ut,nt,pt,Ht="sine",Vt=0){let Gt=t.createOscillator(),$t=t.createGain();if(Gt.type=Ht,Gt.frequency.setValueAtTime(Q,$),Gt.frequency.exponentialRampToValueAtTime(at,$+ut),Vt){let Xt=t.createOscillator(),le=t.createGain();Xt.frequency.value=Vt,le.gain.value=Q*.012,Xt.connect(le),le.connect(Gt.frequency),Xt.start($),Xt.stop($+ut+.05)}return $t.gain.setValueAtTime(1e-4,$),$t.gain.linearRampToValueAtTime(nt,$+Math.min(.04,ut*.25)),$t.gain.setValueAtTime(nt,$+ut*.7),$t.gain.exponentialRampToValueAtTime(1e-4,$+ut),Gt.connect($t),$t.connect(pt),Gt.start($),Gt.stop($+ut+.02),$t}function N($,Q){let at=I(),ut=2+Math.floor(Math.random()*4),nt=3200+Math.random()*1500;for(let pt=0;pt<ut;pt++){let Ht=$+pt*(.09+Math.random()*.07);P(Ht,nt,nt*(1.2+Math.random()*.3),.06,Q*.022,at)}}function w($,Q){let at=I();P($,1120,1390,1,Q*.03,at,"sine",5.5),P($+1.15,2350,2150,.14,Q*.03,at),P($+1.32,1700,1520,.13,Q*.028,at),P($+1.5,2750,2480,.36,Q*.032,at)}function D($,Q){let at=I(),ut=1+Math.floor(Math.random()*3);for(let nt=0;nt<ut;nt++){let pt=$+nt*.48,Ht=t.createOscillator(),Vt=t.createBiquadFilter(),Gt=t.createGain();Ht.type="sawtooth",Ht.frequency.setValueAtTime(560,pt),Ht.frequency.exponentialRampToValueAtTime(420,pt+.32),Vt.type="bandpass",Vt.frequency.value=1150,Vt.Q.value=1.6,Gt.gain.setValueAtTime(1e-4,pt),Gt.gain.linearRampToValueAtTime(Q*.03,pt+.03),Gt.gain.exponentialRampToValueAtTime(1e-4,pt+.36),Ht.connect(Vt),Vt.connect(Gt),Gt.connect(at),Ht.start(pt),Ht.stop(pt+.4)}}function B($,Q){let at=I(),ut=2+Math.floor(Math.random()*2);for(let nt=0;nt<ut;nt++)P($+nt*.42,1750,1150,.36,Q*.022,at,"triangle",11)}function O($,Q){let at=I(),ut=t.createOscillator(),nt=t.createBiquadFilter(),pt=t.createGain(),Ht=240+Math.random()*220,Vt=5+Math.floor(Math.random()*4);ut.type="square",ut.frequency.value=Ht,nt.type="bandpass",nt.frequency.value=Ht*2.4,nt.Q.value=3,pt.gain.setValueAtTime(1e-4,$);for(let Gt=0;Gt<Vt;Gt++){let $t=$+Gt*.038;pt.gain.linearRampToValueAtTime(Q*.014,$t+.008),pt.gain.linearRampToValueAtTime(1e-4,$t+.028)}ut.connect(nt),nt.connect(pt),pt.connect(at),ut.start($),ut.stop($+Vt*.038+.05)}function V($,Q){let at=I(),ut=4300+Math.random()*700;for(let nt=0;nt<3;nt++)P($+nt*.055,ut,ut*1.01,.035,Q*.009,at)}function H($,Q){let at=I();for(let ut of[$,$+.22])P(ut,2650,2600,.5,Q*.018,at),P(ut,3950,3900,.35,Q*.008,at)}let W={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30},Z=$=>$>1e-4?-Math.log(1-Math.random()*.98)/$:1e9,xt=$=>440*Math.pow(2,($-69)/12),Et=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],jt=[72,74,76,79,81,84,86,88],zt=0,Wt=t.currentTime+.2,K=t.currentTime+3;function it($){let Q=Et[zt++%Et.length],at=11;for(let ut of Q)for(let nt of[-5,5]){let pt=t.createOscillator(),Ht=t.createGain();pt.type=nt<0?"sine":"triangle",pt.frequency.value=xt(ut),pt.detune.value=nt,Ht.gain.setValueAtTime(0,$),Ht.gain.linearRampToValueAtTime(.18,$+3.5),Ht.gain.setValueAtTime(.18,$+at-4),Ht.gain.linearRampToValueAtTime(0,$+at+1),pt.connect(Ht),Ht.connect(o),pt.start($),pt.stop($+at+1.2)}}function St($){let Q=jt[Math.floor(Math.random()*jt.length)],at=t.createOscillator(),ut=t.createOscillator(),nt=t.createGain(),pt=t.createGain();at.type=ut.type="sine",at.frequency.value=xt(Q),ut.frequency.value=xt(Q)*2.01,pt.gain.value=.25,ut.connect(pt),pt.connect(nt),nt.gain.setValueAtTime(0,$),nt.gain.linearRampToValueAtTime(.05,$+.02),nt.gain.exponentialRampToValueAtTime(1e-4,$+4),at.connect(nt),nt.connect(r),nt.connect(e),at.start($),ut.start($),at.stop($+4.2),ut.stop($+4.2)}return{ac:t,muted:!1,update($,Q,at,ut={}){let nt=t.currentTime;if((ut.bell||0)>.01)for(y<nt&&(y=nt+.02);y<nt+.12;)C(y,ut.bell),y+=.41;let pt=ut.rain||0;if(x.g.gain.setTargetAtTime(pt*.05,nt,.6),m.g.gain.setTargetAtTime(pt*.05,nt,.6),pt>.05&&ut.roof)for(T<nt&&(T=nt+.02);T<nt+.12;)_(T,pt),T+=.04+Math.random()*.12/pt;let Ht=ut.water||0,Vt=.6+.4*Math.sin(nt*1.3)*Math.sin(nt*.37);p.g.gain.setTargetAtTime(Ht*.035*Vt,nt,.25),p.f.frequency.setTargetAtTime(600+400*Vt,nt,.25);let Gt=ut.train||0;if(g.g.gain.setTargetAtTime(Gt*.16,nt,.2),Gt>.04)for(S<nt&&(S=nt+.02);S<nt+.12;)M(S,Gt),M(S+.15,Gt*.8),S+=1.2;for(;Wt<nt+1;)it(Wt),Wt+=8;K<nt+.5&&(St(K),K+=1.5+Math.random()*4.5),h.g.gain.setTargetAtTime(.03+$*.06,nt,.5),h.f.frequency.setTargetAtTime(250+$*500,nt,.5);let $t=.5+.5*Math.sin(nt*.55)*Math.sin(nt*.21+1);f.g.gain.setTargetAtTime(Q.coast*(.012+$t*.05),nt,.3),f.f.frequency.setTargetAtTime(400+$t*900,nt,.3);let Xt=1-Math.min(1,pt*1.4),le=1-at,ve=ut.dusk||0,k={sparrow:at*Xt*.22*(.3+Q.city*.5+Q.sakura+Q.country*.8+Q.coast*.2),uguisu:at*Xt*Q.sakura*.06,crow:Xt*(ve*.14+at*(Q.city+Q.country)*.012),gull:at*Q.coast*Xt*.16,frog:le*(Q.country*5+Q.sakura*.6+Q.coast*.3)*(1+pt*.6),cricket:le*Xt*(1.6-Q.city*1.1),bike:at*Xt*Q.city*.014},Ee={sparrow:N,uguisu:w,crow:D,gull:B,frog:O,cricket:V,bike:H};for(let L in k)nt<W[L]||(k[L]>1e-4&&Ee[L](nt+.05,.6+Math.random()*.4),W[L]=nt+Math.max(.12,Z(k[L]||1e-6)));let re=.5+.5*Math.sin(nt*7)*Math.sin(nt*.4);d.g.gain.setTargetAtTime((Q.country+Q.sakura*.3)*at*.006*re,nt,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function Ad(i){let e=new Be(.075,.05),n=new We({color:new dt("#ffd0de"),side:Xe}),s=new pi(e,n,420);s.frustumCulled=!1,s.count=0;let r=Array.from({length:420},()=>({p:new U(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6})),a=new Zt,o=new Ge,c=new fn,l=new U(1,1,1),u=new U,h=90,f=new Float32Array(h*3),d=Array.from({length:h},()=>({p:new U(1e9,0,0),ph:Math.random()*6.28})),g=new fe;g.setAttribute("position",new $e(f,3));let x=new Ns({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:mi,opacity:0}),m=new Ur(g,x);m.frustumCulled=!1;let p=(v,T,_,y,S)=>{let C=S?8+Math.random()*42:-4+Math.random()*50,M=(Math.random()-.5)*40;v.p.set(T.x+_.x*C+y.x*M,T.y-1+Math.random()*9,T.z+_.z*C+y.z*M)};return{group:[s,m],shift(v,T){for(let _ of r)_.p.x-=v,_.p.z-=T;for(let _ of d)_.p.x-=v,_.p.z-=T},update(v,T,_,y,S,C,M,E,R){let I=Math.floor(420*Math.min(1,C*1.1));s.count=I;for(let N=0;N<I;N++){let w=r[N];u.subVectors(w.p,_);let D=u.x*y.x+u.z*y.z,B=u.x*S.x+u.z*S.z;(w.p.x>1e8||D<-6||D>55||Math.abs(B)>24||w.p.y<M-.5)&&p(w,_,y,S,w.p.x<1e8),w.p.y-=w.v*v,w.p.x+=Math.sin(T*.7+w.ph)*.4*v+.25*v,w.p.z+=Math.cos(T*.5+w.ph)*.3*v,c.set(T*w.sp+w.ph,T*w.sp*.7,w.ph),o.setFromEuler(c),a.compose(w.p,o,l),s.setMatrixAt(N,a)}s.instanceMatrix.needsUpdate=!0;let P=E*R;if(x.opacity=P,m.visible=P>.01,m.visible){for(let N=0;N<h;N++){let w=d[N];u.subVectors(w.p,_);let D=u.x*y.x+u.z*y.z,B=u.x*S.x+u.z*S.z;if(w.p.x>1e8||D<-4||D>60||Math.abs(B)>30){let O=2+Math.random()*55,V=(Math.random()-.5)*55;w.p.set(_.x+y.x*O+S.x*V,M+.3+Math.random()*2.2,_.z+y.z*O+S.z*V)}w.p.x+=Math.sin(T*.6+w.ph*3)*.3*v,w.p.y+=Math.sin(T*.9+w.ph)*.2*v,w.p.z+=Math.cos(T*.5+w.ph*2)*.3*v,f[N*3]=w.p.x,f[N*3+1]=w.p.y,f[N*3+2]=w.p.z}g.attributes.position.needsUpdate=!0}}}}var rn=new URLSearchParams(location.search),Eo=rn.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Eo&&document.body.classList.add("embed");rn.has("shot")&&document.body.classList.add("shot");bf(rn.has("seed")?parseInt(rn.get("seed")):Math.random()*1e9|0);Af(rn.get("env")||"city");var sn=i=>document.getElementById(i),wo=i=>{let t=sn("loading");t&&(t.textContent=i)};async function X_(){await new Promise(rt=>setTimeout(rt,30));let i=sn("c"),t=new Sl({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=rn.get("q")||(Eo||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Eo?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=Te,t.toneMapping=ns,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ts;let r=new Ki;r.fog=new Ir(13032946,.0019,700);let a=new Je(52,innerWidth/innerHeight,.5,7e3),o=new Xr(16777215,3);o.castShadow=!0;let c=n==="low"?1024:2048;o.shadow.mapSize.set(c,c),Object.assign(o.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:420}),o.shadow.bias=-4e-4,o.shadow.normalBias=.05,r.add(o,o.target);let l=new Hr(10799359,13154464,1.6);r.add(l),wo("painting the town\u2026"),await new Promise(rt=>setTimeout(rt,10));let u=Vf();Wf(u);let h=Hf(t);$f(h.cells);let f=Df(u.textures(t),h.tex);wo("painting the clouds\u2026"),await new Promise(rt=>setTimeout(rt,10));let d=new Rl,g=vd(),x=yd(),m=new zl(r,d,f,g,x),p=hd();r.add(p);let v=dd(fd(t));r.add(v.group);let T=pd();r.add(T.group);let _=_d();r.add(_.mesh);let y=bd();y.group.rotation.order="YXZ",r.add(y.group);let S=Ad(f.glowTex);S.group.forEach(rt=>r.add(rt));let C=Ed(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),M=Uf();r.add(M.group);let E=Ff();r.add(E.group);let R=md(rn),I=gd();r.add(I.mesh);let P=xd();r.add(P.mesh);let N=R.W.rain,w={s:Math.max(100,parseFloat(rn.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ae(parseFloat(rn.get("t"))||.4,0,.999),todPaused:rn.has("freeze"),dist:0,cam:{low:1,eye:2}[rn.get("cam")]||0},D=!1;wo("building the road\u2026"),await new Promise(rt=>setTimeout(rt,10));let B=Eo?620:m.ahead;for(m.ahead=260;m.update(w.s,1e9););m.ahead=B;let O={k:Math.ceil((w.s-Zs)/Ys),phase:"idle",raise:1,decided:!1,t2:0},V={},H={},W={},Z=new U,xt=new U,Et=new U,jt=!1,zt=new U,Wt=new U,K=sn("spd"),it=sn("dist"),St=sn("clock"),$=sn("zone"),Q=sn("start"),at=sn("hint"),ut=null,nt=null,pt=0,Ht=0;function Vt(rt){!D||rt===nt||(nt=rt,$.querySelector(".jp").textContent=fo[rt].jp,$.querySelector(".en").textContent=fo[rt].en,$.classList.add("on"),clearTimeout(pt),pt=setTimeout(()=>$.classList.remove("on"),5200))}function Gt(){if(!D){if(D=!0,document.body.classList.remove("pre"),!rn.has("auto"))try{ut=wd(),ut&&ut.ac.resume()}catch{ut=null}Q.style.opacity=0,setTimeout(()=>Q.remove(),1500),Eo||(at.style.opacity=.75,setTimeout(()=>at.style.opacity=0,9e3))}}let $t={};addEventListener("keydown",rt=>{$t[rt.key]=!0,(rt.key==="m"||rt.key==="M")&&le(),(rt.key==="t"||rt.key==="T")&&ve(),(rt.key==="c"||rt.key==="C")&&k(),(rt.key==="r"||rt.key==="R")&&re(),!D&&(rt.key===" "||rt.key==="Enter")&&Gt()}),addEventListener("keyup",rt=>{$t[rt.key]=!1});let Xt=null;i.addEventListener("pointerdown",rt=>{Xt={id:rt.pointerId,x:rt.clientX,y:rt.clientY,sy:rt.clientY,sc:w.mult}}),addEventListener("pointermove",rt=>{Xt&&rt.pointerId===Xt.id&&(Xt.x=rt.clientX,Xt.y=rt.clientY,w.mult=Ae(Xt.sc-(Xt.y-Xt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{Xt=null}),addEventListener("pointercancel",()=>{Xt=null}),i.addEventListener("touchstart",rt=>{let F=rt.changedTouches[0];Xt={id:"touch",x:F.clientX,y:F.clientY,sy:F.clientY,sc:w.mult},rt.preventDefault()},{passive:!1}),i.addEventListener("touchmove",rt=>{if(!Xt)return;let F=rt.changedTouches[0];Xt.x=F.clientX,Xt.y=F.clientY,w.mult=Ae(Xt.sc-(Xt.y-Xt.sy)/innerHeight*1.6,.4,1.8),rt.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Xt=null}),i.addEventListener("touchcancel",()=>{Xt=null});function le(){ut&&(ut.toggle(),sn("snd").style.opacity=ut.muted?.4:1)}function ve(){w.todPaused=!w.todPaused,sn("tim").style.opacity=w.todPaused?.4:1}function k(){w.cam=(w.cam+1)%3}let Ee={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function re(){sn("wx").textContent=Ee[R.cycle()]}sn("wx").textContent=Ee[R.W.mode],sn("wx").onclick=rt=>{rt.stopPropagation(),re()},sn("snd").onclick=rt=>{rt.stopPropagation(),le()},sn("tim").onclick=rt=>{rt.stopPropagation(),ve()},sn("cam").onclick=rt=>{rt.stopPropagation(),k()};let L=0,b=rt=>{let F=performance.now();F-L<120||(L=F,rt.cancelable&&rt.type!=="click"&&rt.preventDefault(),Gt())};for(let rt of["touchstart","pointerdown","mousedown","click"])Q.addEventListener(rt,b,{passive:!1});let G=()=>{ut&&ut.ac.state!=="running"&&ut.ac.resume()};for(let rt of["touchend","click","keydown"])addEventListener(rt,G,{passive:!0});document.addEventListener("visibilitychange",()=>{ut&&(document.hidden?ut.ac.suspend():ut.ac.resume())});let Y=!1,j="";function gt(){let rt=innerWidth,F=innerHeight,ot=rt/F,tt=rt+"x"+F+"@"+s;tt!==j&&(j=tt,t.setPixelRatio(s),t.setSize(rt,F,!1),C.composer.setPixelRatio(s),C.composer.setSize(rt,F),a.aspect=ot,a.fov=ot>=1?52:Ae(2*Math.atan(Math.tan(34*Math.PI/180)/ot)*180/Math.PI,52,80),a.updateProjectionMatrix(),C.grade.uniforms.uAspect.value=ot)}addEventListener("resize",()=>{Y=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Y=!0}),gt();let _t=0;function et(rt=!0){if(s>1.05)s=Math.max(1,s-.25),Y=!0;else if(C.bloom.enabled)C.bloom.enabled=!1;else if(o.shadow.mapSize.x>1024)o.shadow.mapSize.set(1024,1024),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null);else if(m.ahead>430)m.ahead=430;else return;if(_t++,rt)try{localStorage.setItem("icd-q",String(_t))}catch{}}try{let rt=parseInt(localStorage.getItem("icd-q")||"0");if(!rn.has("q"))for(let F=0;F<Math.min(rt,6);F++)et(!1);_t=Math.max(_t,rt||0)}catch{}let st=performance.now(),mt=0,Ut=0,yt=0,vt=()=>1-ct.night,Nt=0;function kt(rt){requestAnimationFrame(kt);let F=performance.now();Y&&(Y=!1,gt());let ot=Math.min(.05,(rt-st)/1e3);st=rt,mt+=ot,w.steer=0,($t.ArrowLeft||$t.a||$t.A)&&(w.steer=-1),($t.ArrowRight||$t.d||$t.D)&&(w.steer=1),($t.ArrowUp||$t.w||$t.W)&&(w.mult=Ae(w.mult+ot*.4,.4,1.8)),($t.ArrowDown||$t.s||$t.S)&&(w.mult=Ae(w.mult-ot*.4,.4,1.8)),Xt&&Math.abs(Xt.y-Xt.sy)<30&&(w.steer=Xt.x<innerWidth/2?-1:1),w.steer&&(w.lastInput=rt);let tt=Js(O.k);w.s-tt>24&&(O.k++,tt=Js(O.k),Object.assign(O,{phase:"idle",raise:1,decided:!1}));let bt=po(tt),Tt=tt-w.s;bt&&!O.decided&&Tt<150&&(O.decided=!0,Tt>75&&D&&(rn.has("xing")||vi(O.k,99)<.8)&&(O.phase="warn",E.start(tt,vi(O.k,7)<.5?1:-1,16))),O.phase==="warn"?(O.raise=Math.max(0,O.raise-ot/6),E.st.cleared&&(O.phase="clear",O.t2=0)):O.phase==="clear"?(O.raise=Math.max(0,O.raise-ot/6),(O.t2+=ot)>2.2&&(O.phase="raise")):O.phase==="raise"&&(O.raise=Math.min(1,O.raise+ot/5),O.raise>=1&&(O.phase="idle"));let lt=O.phase==="warn"||O.phase==="clear"||O.phase==="raise"&&O.raise<.25,Ft=bn(w.s,"speed")*w.mult*(D?1:.55);if(O.phase!=="idle"&&O.raise<.8&&Tt>0){let A=Tt-11.2,z=A>0?Math.sqrt(2*1.25*A):0;Ft=Math.min(Ft,z),w.speed=Math.min(w.speed,z)}w.speed+=(Ft-w.speed)*Math.min(1,ot*.5),w.s+=w.speed*ot,w.dist+=w.speed*ot;let It=bn(w.s,"rw");w.steer?w.u=Ae(w.u+w.steer*ot*2.4,-It+.85,It-.85):rt-w.lastInput>3e3&&(w.u+=(-1.65+Math.sin(mt/11)*.1-w.u)*Math.min(1,ot*.9)),!w.todPaused&&D&&(w.tod=(w.tod+ot/480*(ct.night>.5?1.7:1))%1),cd(w.tod),R.update(ot);let oe=R.W.ov,ee=R.W.rain;ud(oe,ee),N=Ae(N+(ee>.25?ot/18:-ot/120),0,1);let gn=performance.now();m.update(w.s,D?6:14);let wn=performance.now();if(d.at(w.s,V),Math.abs(V.x-m.origin.x)>900||Math.abs(V.z-m.origin.z)>900){let A=Math.round(V.x)-m.origin.x,z=Math.round(V.z)-m.origin.z;m.setOrigin(Math.round(V.x),Math.round(V.z)),Z.x-=A,Z.z-=z,xt.x-=A,xt.z-=z,S.shift&&S.shift(A,z),P.shift(A,z)}let fr=m.origin.x,dr=m.origin.z,Ao=(d.at(w.s+1.5,W).y-d.at(w.s-1.5,H).y)/3;y.group.position.set(V.x+V.rx*w.u-fr,V.y+.01,V.z+V.rz*w.u-dr);let pr=w.steer?-w.steer*.05:0;y.group.rotation.set(-Math.atan(Ao),V.h+pr,0),y.update(ot,w.speed,ct.night,ee),M.update(bt&&Tt>-24&&Tt<700?Ll(d,tt):null,m.origin,O.raise,lt,mt),E.update(ot,d,m.origin,Ve(.15,.8,ct.night),bn(tt,"rw")+3.2);let qn=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6}][w.cam];y.group.visible=w.cam!==2,d.at(w.s-qn.back,H),d.at(w.s+qn.ahead,W);let mr=w.u*qn.cu+(qn.side||0);Et.set(H.x+H.rx*mr-fr,H.y+qn.up,H.z+H.rz*mr-dr);let Yn=new U(W.x+W.rx*w.u*qn.lu-fr,W.y+qn.lookY,W.z+W.rz*w.u*qn.lu-dr);jt||(Z.copy(Et),xt.copy(Yn),jt=!0),Z.lerp(Et,1-Math.exp(-ot*6)),xt.lerp(Yn,1-Math.exp(-ot*5)),a.position.copy(Z),a.lookAt(xt),zt.set(V.fx,0,V.fz),Wt.set(V.rx,0,V.rz);let xn=qe(w.s);o.color.copy(ct.sunCol),o.intensity=ct.sunI,o.target.position.set(y.group.position.x+V.fx*30,y.group.position.y,y.group.position.z+V.fz*30),o.position.copy(o.target.position).addScaledVector(ct.lightDir,200),l.color.copy(ct.hemiSky),l.groundColor.copy(ct.hemiGround),l.intensity=ct.hemiI,r.fog.color.copy(ct.fog);let gr=(xn.city*.0022+xn.sakura*.0019+xn.coast*.0011+xn.country*.0014)*(1+ct.night*.25);r.fog.near=gr*(1+.55*oe+.45*ee),r.fog.far=m.ahead*.92,De.uSkyHor.value.copy(ct.horizon),De.uSkyZen.value.copy(ct.zenith),De.uTime.value=mt,De.uWet.value=N,De.uOrigin.value.set(m.origin.x,m.origin.z),De.uCloudSh.value=(1-oe)*Ve(.04,.3,ct.sunEl)*(1-ct.night);let Nn=p.material.uniforms;Nn.uNight.value=ct.night,Nn.uWarm.value=ct.warm,Nn.uTime.value=mt,Nn.uCirrusCol.value.copy(ct.cLit).lerp(ct.horizon,.25),Nn.uCirrus.value=.6*(1-oe),Nn.uOvercast.value=oe,Nn.uDeckLit.value.copy(ct.horizon).lerp(ct.cLit,.35),Nn.uDeckDark.value.copy(ct.zenith).lerp(ct.horizon,.25).multiplyScalar(.82),p.position.copy(a.position),v.update(a.position,ot),T.update(a.position);let si=0;for(let A of[-150,0,250,500,800])si=Math.max(si,qe(w.s+A).coast);_.mesh.visible=si>.001,_.update(a.position,mt,gr*.8,Ve(0,.35,si)),x.uniforms.uTime.value=mt,x.uniforms.uFogD.value=r.fog.near,x.uniforms.uNight.value=ct.night,x.uniforms.uSpecK.value=1-ct.overcast*.85,De.uSunDir.value.copy(ct.lightDir),De.uSunCol.value.copy(ct.sunCol),g.uniforms.uTime.value=mt,g.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*vt());let An=Ve(.15,.8,ct.night);f.atlas.emissiveIntensity=.1+An*1.05,f.lamp.color.setRGB(.85,.85,.8).lerp(new dt(3.6,2.8,1.8),An),f.pool.opacity=An*.42*(1+.8*N),De.uNight.value=An,C.bloom.strength=me(.32,.55,An),C.bloom.threshold=me(1.35,.95,An),C.bloom.radius=me(.55,.35,An),t.toneMappingExposure=me(1,1.15,An),Et.copy(a.position).addScaledVector(ct.sunDir,1e3).project(a);let Un=C.grade.uniforms,Ro=Et.z<1?1:0,Co=Math.max(Math.abs(Et.x),Math.abs(Et.y));Un.uSun.value.set(Et.x*.5+.5,Et.y*.5+.5),Un.uSunVis.value=Ro*(1-Ve(1,1.9,Co))*Ve(-.02,.15,ct.sunEl)*(1-ct.night)*(1-oe),Un.uSat.value=1.1-.12*oe,Un.uDay.value=vt(),Un.uWarm.value=ct.warm,Un.uTime.value=mt,I.update(a.position,mt,ee,vt()),P.setFog(r.fog.near),P.update(ot,mt,a.position,zt,Wt,xn,vt(),ee,y.group.position);let ql=performance.now();S.update(ot,mt,a.position,zt,Wt,xn.sakura,V.y,An,xn.country+xn.sakura*.4);let Yl=performance.now();if(ut){d.at(tt,W);let A=Math.hypot(W.x-m.origin.x-a.position.x,W.z-m.origin.z-a.position.z),z=E.st.active?E.group.position.distanceTo(a.position):1e9;ut.update(w.speed/15,xn,vt(),{bell:lt?Math.pow(Ae(1-A/260,0,1),1.5):0,train:Math.pow(Ae(1-z/230,0,1),2),rain:ee,roof:w.cam!==2,water:(()=>{let J=yi(w.s);return J?1-Ve(12,150,Math.abs(w.s-J.s)):0})(),dusk:ct.warm*(w.tod>.5?1:.3)})}Vt(Re(w.s+40));let Zl=performance.now();C.composer.render(ot);let Jl=performance.now(),ri=window.__pb||(window.__pb={world:0,parts:0,render:0});if(ri.world=ri.world*.95+(wn-gn)*.05,ri.parts=ri.parts*.95+(Yl-ql)*.05,ri.render=ri.render*.95+(Jl-Zl)*.05,Nt=Nt*.95+(performance.now()-F)*.05,window.__ft=Nt,(Ht+=ot)>.25){Ht=0,K.textContent=Math.round(w.speed*3.6),it.textContent=(w.dist/1e3).toFixed(1);let A=Math.floor(w.tod*1440);St.textContent=`${String(Math.floor(A/60)).padStart(2,"0")}:${String(A%60).padStart(2,"0")}`}Ut++,D&&Ut>150&&ot>.03?yt+=ot:yt=Math.max(0,yt-ot*.5),yt>3&&!rn.has("q")&&(yt=0,et())}window.__dbg={renderer:t,st:w,scene:r,camera:a,world:m,TOD:ct,X:O,train:E,weather:R,U:De,birds:P},wo(""),Q.classList.add("ready"),rn.has("auto")&&Gt(),requestAnimationFrame(kt)}X_().catch(i=>{console.error(i),wo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
