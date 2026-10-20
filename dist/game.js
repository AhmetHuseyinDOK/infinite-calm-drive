var Ku=0,yc=1,Qu=2;var Qi=1,ju=2,Os=3,Ni=0,$e=1,Ge=2,xn=0,zs=1,fi=2,Mc=3,Sc=4,th=5;var ji=100,eh=101,nh=102,ih=103,sh=104,rh=200,oh=201,ah=202,lh=203,bc=204,Tc=205,ch=206,uh=207,hh=208,fh=209,dh=210,ph=211,mh=212,gh=213,xh=214,$o=0,Ko=1,Qo=2,Rs=3,jo=4,ta=5,ea=6,na=7,Ec=0,_h=1,vh=2,Gn=0,Wr=1,Xr=2,qr=3,Yr=4,Zr=5,Jr=6,ts=7;var wc=300,Ui=301,es=302,wa=303,Aa=304,$r=306,ia=1e3,Zn=1001,sa=1002,Ie=1003,yh=1004;var Kr=1005;var Ne=1006,Ra=1007;var In=1008;var _n=1009,Ac=1010,Rc=1011,ks=1012,Ca=1013,Wn=1014,Ln=1015,Be=1016,Pa=1017,Ia=1018,Hs=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,Dn=1023,Jn=1026,Fi=1027,Vs=1028,La=1029,Bi=1030,Da=1031;var Na=1033,Qr=33776,jr=33777,to=33778,eo=33779,Ua=35840,Fa=35841,Ba=35842,Oa=35843,za=36196,ka=37492,Ha=37496,Va=37488,Ga=37489,no=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,Qa=37815,ja=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,io=36285,ul=36286;var yr=2300,ra=2301,Zo=2302,hc=2303,fc=2400,dc=2401,pc=2402;var Mh=3200;var hl=0,Sh=1,di="",Te="srgb",Mr="srgb-linear",Sr="linear",ce="srgb";var Jo=7680;var bh=519,Th=512,Eh=513,wh=514,fl=515,Ah=516,Rh=517,dl=518,Ch=519,Ph=35044;var Dc="300 es",Hn=2e3,Cs=2001;function _d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ih(){let i=br("canvas");return i.style.display="block",i}var wu={},Ps=null;function Nc(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function Lh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Lh(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=Lh(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zi(...i){let t=i.join(" ");t in wu||(wu[t]=!0,Xt(...i))}function Dh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Nh={[$o]:Ko,[Qo]:ea,[jo]:na,[Rs]:ta,[Ko]:$o,[ea]:Qo,[na]:jo,[ta]:Rs},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,Tr=180/Math.PI;function so(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function yd(i,t){return(i%t+t)%t}function Gl(i,t,e){return(1-e)*i+e*t}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;var Ht=zc,He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||c!==f||l!==p||u!==m){let g=c*f+l*p+u*m+h*x;g<0&&(f=-f,p=-p,m=-m,x=-x,g=-g);let d=1-o;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);d=Math.sin(d*y)/T,o=Math.sin(o*y)/T,c=c*d+f*o,l=l*d+p*o,u=u*d+m*o,h=h*d+x*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+m*o,h=h*d+x*o;let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*p-l*f,t[e+1]=c*m+u*f+l*h-o*p,t[e+2]=l*m+u*p+o*f-c*h,t[e+3]=u*m-o*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h+f*p*m;break;case"YZX":this._x=f*u*h+l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h-f*p*m;break;case"XZY":this._x=f*u*h-l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h+f*p*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kc=class kc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;var F=kc,Wl=new F,Au=new He,Hc=class Hc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],y=s[1],T=s[4],_=s[7],M=s[2],S=s[5],R=s[8];return r[0]=a*x+o*y+c*M,r[3]=a*g+o*T+c*S,r[6]=a*d+o*_+c*R,r[1]=l*x+u*y+h*M,r[4]=l*g+u*T+h*S,r[7]=l*d+u*_+h*R,r[2]=f*x+p*y+m*M,r[5]=f*g+p*T+m*S,r[8]=f*d+p*_+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;var Jt=Hc,Xl=new Jt,Ru=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var te=Md();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=br("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sd=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=so(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var bd=0,Yl=new F,ln=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=Ne,a=In,o=Dn,c=_n,l=i.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=so(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=wc;ln.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],m=c[9],x=c[2],g=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,_=(p+1)/2,M=(d+1)/2,S=(u+f)/4,R=(h+x)/4,v=(m+g)/4;return T>_&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=R/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var ge=Vc,aa=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ln(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ea=class Ea{constructor(t,e,n,s,r,a,o,c,l,u,h,f,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,p,m,x,g)}set(t,e,n,s,r,a,o,c,l,u,h,f,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,m=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+m*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,m=l*u,x=l*h;e[0]=f+x*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,m=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,p=a*h,m=o*u,x=o*h;e[0]=c*u,e[4]=m*l-p,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=m*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*c,p=a*l,m=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-m,e[2]=m*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ed)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),bi.crossVectors(n,Mn),bi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),bi.crossVectors(n,Mn)),bi.normalize(),wo.crossVectors(Mn,bi),s[0]=bi.x,s[4]=wo.x,s[8]=Mn.x,s[1]=bi.y,s[5]=wo.y,s[9]=Mn.y,s[2]=bi.z,s[6]=wo.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],y=n[3],T=n[7],_=n[11],M=n[15],S=s[0],R=s[4],v=s[8],E=s[12],P=s[1],I=s[5],D=s[9],C=s[13],A=s[2],N=s[6],B=s[10],k=s[14],Y=s[3],H=s[7],Z=s[11],Q=s[15];return r[0]=a*S+o*P+c*A+l*Y,r[4]=a*R+o*I+c*N+l*H,r[8]=a*v+o*D+c*B+l*Z,r[12]=a*E+o*C+c*k+l*Q,r[1]=u*S+h*P+f*A+p*Y,r[5]=u*R+h*I+f*N+p*H,r[9]=u*v+h*D+f*B+p*Z,r[13]=u*E+h*C+f*k+p*Q,r[2]=m*S+x*P+g*A+d*Y,r[6]=m*R+x*I+g*N+d*H,r[10]=m*v+x*D+g*B+d*Z,r[14]=m*E+x*C+g*k+d*Q,r[3]=y*S+T*P+_*A+M*Y,r[7]=y*R+T*I+_*N+M*H,r[11]=y*v+T*D+_*B+M*Z,r[15]=y*E+T*C+_*k+M*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15],y=c*p-l*f,T=o*p-l*h,_=o*f-c*h,M=a*p-l*u,S=a*f-c*u,R=a*h-o*u;return e*(x*y-g*T+d*_)-n*(m*y-g*M+d*S)+s*(m*T-x*M+d*R)-r*(m*_-x*S+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],y=e*o-n*a,T=e*c-s*a,_=e*l-r*a,M=n*c-s*o,S=n*l-r*o,R=s*l-r*c,v=u*x-h*m,E=u*g-f*m,P=u*d-p*m,I=h*g-f*x,D=h*d-p*x,C=f*d-p*g,A=y*C-T*D+_*I+M*P-S*E+R*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return t[0]=(o*C-c*D+l*I)*N,t[1]=(s*D-n*C-r*I)*N,t[2]=(x*R-g*S+d*M)*N,t[3]=(f*S-h*R-p*M)*N,t[4]=(c*P-a*C-l*E)*N,t[5]=(e*C-s*P+r*E)*N,t[6]=(g*_-m*R-d*T)*N,t[7]=(u*R-f*_+p*T)*N,t[8]=(a*D-o*P+l*v)*N,t[9]=(n*P-e*D-r*v)*N,t[10]=(m*S-x*_+d*y)*N,t[11]=(h*_-u*S-p*y)*N,t[12]=(o*E-a*I-c*v)*N,t[13]=(e*I-n*E+s*v)*N,t[14]=(x*T-m*M-g*y)*N,t[15]=(u*M-h*T+f*y)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,m=r*h,x=a*u,g=a*h,d=o*h,y=c*l,T=c*u,_=c*h,M=n.x,S=n.y,R=n.z;return s[0]=(1-(x+d))*M,s[1]=(p+_)*M,s[2]=(m-T)*M,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+T)*R,s[9]=(g-y)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let l=1/a,u=1/o,h=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,e.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Hn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Hn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Hn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ea.prototype.isMatrix4=!0;var qt=Ea,ps=new F,Bn=new qt,Td=new F(0,0,0),Ed=new F(1,1,1),bi=new F,wo=new F,Mn=new F,Pu=new qt,Iu=new He,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wd=0,Lu=new F,ms=new He,ii=new qt,Ao=new F,pr=new F,Ad=new F,Rd=new He,Du=new F(1,0,0),Nu=new F(0,1,0),Uu=new F(0,0,1),Fu={type:"added"},Cd={type:"removed"},gs={type:"childadded",child:null},Zl={type:"childremoved",child:null},Ue=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new mn,n=new He,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Jt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(pr,Ao,this.up):ii.lookAt(Ao,pr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ii),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),gs.child=t,this.dispatchEvent(gs),gs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ue.DEFAULT_UP=new F(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pd={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(l,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=yd(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(tn.copy(this),t),Math.round(ne(tn.r*255,0,255))*65536+Math.round(ne(tn.g*255,0,255))*256+Math.round(ne(tn.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Te){te.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Ro);let n=Gl(Ti.h,Ro.h,e),s=Gl(Ti.s,Ro.s,e),r=Gl(Ti.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new dt;dt.NAMES=Uh;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ji=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new F,si=new F,$l=new F,ri=new F,xs=new F,_s=new F,Bu=new F,Kl=new F,Ql=new F,jl=new F,tc=new ge,ec=new ge,nc=new ge,Ri=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),si.subVectors(n,e),$l.subVectors(t,e);let a=On.dot(On),o=On.dot(si),c=On.dot($l),l=si.dot(si),u=si.dot($l),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,m=(a*u-o*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),si.subVectors(t,e),On.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xs.subVectors(s,n),_s.subVectors(r,n),Kl.subVectors(t,n);let c=xs.dot(Kl),l=_s.dot(Kl);if(c<=0&&l<=0)return e.copy(n);Ql.subVectors(t,s);let u=xs.dot(Ql),h=_s.dot(Ql);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(xs,a);jl.subVectors(t,r);let p=xs.dot(jl),m=_s.dot(jl);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(_s,o);let g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Bu.subVectors(r,s),o=(h-u)/(h-u+(p-m)),e.copy(s).addScaledVector(Bu,o);let d=1/(g+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(xs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Po.subVectors(this.max,mr),vs.subVectors(t.a,mr),ys.subVectors(t.b,mr),Ms.subVectors(t.c,mr),Ei.subVectors(ys,vs),wi.subVectors(Ms,ys),Wi.subVectors(vs,Ms);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!ic(e,vs,ys,Ms,Po)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,vs,ys,Ms,Po))?!1:(Io.crossVectors(Ei,wi),e=[Io.x,Io.y,Io.z],ic(e,vs,ys,Ms,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,Co=new Kn,vs=new F,ys=new F,Ms=new F,Ei=new F,wi=new F,Wi=new F,mr=new F,Po=new F,Io=new F,Xi=new F;function ic(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ce=new F,Lo=new Ht,Id=0,Ze=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Id++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ld=new Kn,gr=new F,sc=new F,ci=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(sc)),this.expandByPoint(gr.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dd=0,Pn=new qt,rc=new Ue,Ss=new F,Sn=new Kn,xr=new Kn,ke=new F,ue=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(Sn.min,xr.min),Sn.expandByPoint(ke),ke.addVectors(Sn.max,xr.max),Sn.expandByPoint(ke)):(Sn.expandByPoint(xr.min),Sn.expandByPoint(xr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ke.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(t,l),ke.add(Ss)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new F,c[v]=new F;let l=new F,u=new F,h=new F,f=new Ht,p=new Ht,m=new Ht,x=new F,g=new F;function d(v,E,P){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,P),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),u.sub(l),h.sub(l),p.sub(f),m.sub(f);let I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),o[v].add(x),o[E].add(x),o[P].add(x),c[v].add(g),c[E].add(g),c[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){let P=y[v],I=P.start,D=P.count;for(let C=I,A=I+D;C<A;C+=3)d(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let T=new F,_=new F,M=new F,S=new F;function R(v){M.fromBufferAttribute(s,v),S.copy(M);let E=o[v];T.copy(E),T.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(S,E);let I=_.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,E=y.length;v<E;++v){let P=y[v],I=P.start,D=P.count;for(let C=I,A=I+D;C<A;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)f[m++]=l[p++]}return new Ze(f,u,h)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new F,Nd=new F,Ud=new Jt,kn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(Nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fd=0,ui=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=so(),this.name="",this.type="Material",this.blending=zs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new F,ac=new F,Do=new F,No=new F,Pr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ac.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),No.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Do),o=No.dot(this.direction),c=-No.dot(Do),l=No.lengthSq(),u=Math.abs(1-a*a),h,f,p,m;if(u>0)if(h=a*c-o,f=a*o-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ac).addScaledVector(Do,f),p}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=t.x-a.x,f=t.y-a.y,p=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,d=n.x-a.x,y=n.y-a.y,T=n.z-a.z,_=Math.abs(c),M=Math.abs(l),S=Math.abs(u),R,v,E,P,I,D,C,A,N,B,k,Y;if(_>=M&&_>=S?(E=c,D=h,N=m,Y=d,c>=0?(R=l,v=u,P=f,I=p,C=x,A=g,B=y,k=T):(R=u,v=l,P=p,I=f,C=g,A=x,B=T,k=y)):M>=S?(E=l,D=f,N=x,Y=y,l>=0?(R=u,v=c,P=p,I=h,C=g,A=m,B=T,k=d):(R=c,v=u,P=h,I=p,C=m,A=g,B=d,k=T)):(E=u,D=p,N=g,Y=T,u>=0?(R=c,v=l,P=h,I=f,C=m,A=x,B=d,k=y):(R=l,v=c,P=f,I=h,C=x,A=m,B=y,k=d)),E===0)return null;let H=R/E,Z=v/E,Q=1/E,St=P-H*D,At=I-Z*D,jt=C-H*N,Ot=A-Z*N,Gt=B-H*Y,$=k-Z*Y,it=Gt*Ot-$*jt,G=St*$-At*Gt,ot=jt*At-Ot*St;if(s){if(it<0||G<0||ot<0)return null}else if((it<0||G<0||ot<0)&&(it>0||G>0||ot>0))return null;let K=it+G+ot;if(K===0)return null;let st=Q*(it*D+G*N+ot*Y);return(K>0?st<0:st>0)?null:this.at(st/K,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ou=new qt,qi=new Pr,Uo=new ci,zu=new F,Fo=new F,Bo=new F,Oo=new F,lc=new F,zo=new F,ku=new F,ko=new F,re=class extends Ue{constructor(t=new ue,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(lc.fromBufferAttribute(h,t),a?zo.addScaledVector(lc,u):zo.addScaledVector(lc.sub(e),u))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Uo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Uo,zu)===null||qi.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=a[g.materialIndex],y=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,M=T;_<M;_+=3){let S=o.getX(_),R=o.getX(_+1),v=o.getX(_+2);s=Ho(this,d,t,n,l,u,h,S,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let y=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=Ho(this,a,t,n,l,u,h,y,T,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=a[g.materialIndex],y=Math.max(g.start,p.start),T=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,M=T;_<M;_+=3){let S=_,R=_+1,v=_+2;s=Ho(this,d,t,n,l,u,h,S,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let y=g,T=g+1,_=g+2;s=Ho(this,a,t,n,l,u,h,y,T,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Bd(i,t,e,n,s,r,a,o){let c;if(t.side===$e?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ni,o),c===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ko);return l<e.near||l>e.far?null:{distance:l,point:ko.clone(),object:i}}function Ho(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Fo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,Oo);let u=Bd(i,t,e,n,Fo,Bo,Oo,ku);if(u){let h=new F;Ri.getBarycoord(ku,Fo,Bo,Oo,h),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,c,l,h,new Ht)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,c,l,h,new Ht)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new F,materialIndex:0};Ri.getNormal(Fo,Bo,Oo,f.normal),u.face=f,u.barycoord=h}return u}var $i=class extends ln{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ie,u=Ie,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new qt,Hu=new qt,Vo=[],Vu=new Kn,Od=new qt,_r=new re,vr=new ci,hi=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Od)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Vu.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Vu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),vr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Hu.multiplyMatrices(n,bs),_r.matrixWorld=Hu,_r.raycast(t,Vo);for(let a=0,o=Vo.length;a<o;a++){let c=Vo[a];c.instanceId=r,c.object=this,e.push(c)}Vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,Vs,Ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yi=new ci,zd=new Ht(.5,.5),Go=new F,Ds=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],y=r[12],T=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,p-u,d-m,M-y).normalize(),s[1].setComponents(l+a,p+u,d+m,M+y).normalize(),s[2].setComponents(l+o,p+h,d+x,M+T).normalize(),s[3].setComponents(l-o,p-h,d-x,M-T).normalize(),n)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,p-f,d-g,M-_).normalize();else if(s[4].setComponents(l-c,p-f,d-g,M-_).normalize(),e===Hn)s[5].setComponents(l+c,p+f,d+g,M+_).normalize();else if(e===Cs)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=zd.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ns=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gu=new qt,mc=new Pr,Wo=new ci,Xo=new F,Ir=class extends Ue{constructor(t=new ue,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Gu.copy(s).invert(),mc.copy(t.ray).applyMatrix4(Gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=f,x=p;m<x;m++){let g=l.getX(m);Xo.fromBufferAttribute(h,g),Wu(Xo,g,c,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=f,x=p;m<x;m++)Xo.fromBufferAttribute(h,m),Wu(Xo,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wu(i,t,e,n,s,r,a){let o=mc.distanceSqToPoint(i);if(o<e){let c=new F;mc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Lr=class extends ln{constructor(t=[],e=Ui,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bn=class extends ln{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends ln{constructor(t,e,n=Wn,s,r,a,o=Ie,c=Ie,l,u=Jn,h=1){if(u!==Jn&&u!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ca=class extends Ci{constructor(t,e=Wn,n=Ui,s,r,a=Ie,o=Ie,c,l=Jn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function m(x,g,d,y,T,_,M,S,R,v,E){let P=_/R,I=M/v,D=_/2,C=M/2,A=S/2,N=R+1,B=v+1,k=0,Y=0,H=new F;for(let Z=0;Z<B;Z++){let Q=Z*I-C;for(let St=0;St<N;St++){let At=St*P-D;H[x]=At*y,H[g]=Q*T,H[d]=A,l.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[d]=S>0?1:-1,u.push(H.x,H.y,H.z),h.push(St/R),h.push(1-Z/v),k+=1}}for(let Z=0;Z<v;Z++)for(let Q=0;Q<R;Q++){let St=f+Q+N*Z,At=f+Q+N*(Z+1),jt=f+(Q+1)+N*(Z+1),Ot=f+(Q+1)+N*Z;c.push(St,At,Ot),c.push(At,jt,Ot),Y+=6}o.addGroup(p,Y,E),p+=Y,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Nr=class i extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new F,u=new Ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Us=class i extends ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],m=0,x=[],g=n/2,d=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(p,2));function y(){let _=new F,M=new F,S=0,R=(e-t)/n;for(let v=0;v<=r;v++){let E=[],P=v/r,I=P*(e-t)+t;for(let D=0;D<=s;D++){let C=D/s,A=C*c+o,N=Math.sin(A),B=Math.cos(A);M.x=I*N,M.y=-P*n+g,M.z=I*B,h.push(M.x,M.y,M.z),_.set(N,R,B).normalize(),f.push(_.x,_.y,_.z),p.push(C,1-P),E.push(m++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let P=x[E][v],I=x[E+1][v],D=x[E+1][v+1],C=x[E][v+1];(t>0||E!==0)&&(u.push(P,I,C),S+=3),(e>0||E!==r-1)&&(u.push(I,D,C),S+=3)}l.addGroup(d,S,0),d+=S}function T(_){let M=m,S=new Ht,R=new F,v=0,E=_===!0?t:e,P=_===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*P,0),f.push(0,P,0),p.push(.5,.5),m++;let I=m;for(let D=0;D<=s;D++){let A=D/s*c+o,N=Math.cos(A),B=Math.sin(A);R.x=E*B,R.y=g*P,R.z=E*N,h.push(R.x,R.y,R.z),f.push(0,P,0),S.x=N*.5+.5,S.y=B*.5*P+.5,p.push(S.x,S.y),m++}for(let D=0;D<s;D++){let C=M+D,A=I+D;_===!0?u.push(A,A+1,C):u.push(A+1,A,C),v+=3}l.addGroup(d,v,_===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ua=class i extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new F,_=new F,M=new F;for(let S=0;S<e.length;S+=3)p(e[S+0],T),p(e[S+1],_),p(e[S+2],M),c(T,_,M,y)}function c(y,T,_,M){let S=M+1,R=[];for(let v=0;v<=S;v++){R[v]=[];let E=y.clone().lerp(_,v/S),P=T.clone().lerp(_,v/S),I=S-v;for(let D=0;D<=I;D++)D===0&&v===S?R[v][D]=E:R[v][D]=E.clone().lerp(P,D/I)}for(let v=0;v<S;v++)for(let E=0;E<2*(S-v)-1;E++){let P=Math.floor(E/2);E%2===0?(f(R[v][P+1]),f(R[v+1][P]),f(R[v][P])):(f(R[v][P+1]),f(R[v+1][P+1]),f(R[v+1][P]))}}function l(y){let T=new F;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(y),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function u(){let y=new F;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let _=g(y)/2/Math.PI+.5,M=d(y)/Math.PI+.5;a.push(_,1-M)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let T=a[y+0],_=a[y+2],M=a[y+4],S=Math.max(T,_,M),R=Math.min(T,_,M);S>.9&&R<.1&&(T<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,T){let _=y*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function m(){let y=new F,T=new F,_=new F,M=new F,S=new Ht,R=new Ht,v=new Ht;for(let E=0,P=0;E<r.length;E+=9,P+=6){y.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),M.copy(y).add(T).add(_).divideScalar(3);let I=g(M);x(S,P+0,y,I),x(R,P+2,T,I),x(v,P+4,_,I)}}function x(y,T,_,M){M<0&&y.x===1&&(a[T]=y.x-1),_.x===0&&_.z===0&&(a[T]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ur=class i extends ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fe=class i extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,p=[],m=[],x=[],g=[];for(let d=0;d<u;d++){let y=d*f-a;for(let T=0;T<l;T++){let _=T*h-r;m.push(_,-y,0),x.push(0,0,1),g.push(T/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){let T=y+l*d,_=y+l*(d+1),M=y+1+l*(d+1),S=y+1+l*d;p.push(T,_,S),p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Fr=class i extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new F,f=new F,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let y=[],T=d/n,_=a+T*o,M=t*Math.cos(_),S=Math.sqrt(t*t-M*M),R=0;d===0&&a===0?R=.5/e:d===n&&c===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){let E=v/e,P=s+E*r;h.x=-S*Math.cos(P),h.y=M,h.z=S*Math.sin(P),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(E+R,1-T),y.push(l++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let T=u[d][y+1],_=u[d][y],M=u[d+1][y],S=u[d+1][y+1];(d!==0||a>0)&&p.push(T,_,S),(d!==n-1||c<Math.PI)&&p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var pi={clone:ns,merge:en},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fs=class extends oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Je=class extends ui{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new dt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ha=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-n;break;case pc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,c=2*n-e;break;case pc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,T=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let M=0;M!==o;++M)r[M]=d*a[u+M]+y*a[l+M]+T*a[c+M]+_*a[h+M];return r}},pa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},ma=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ga=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let f=o*2,p=t-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],d=p*f+m*2,y=h[d],T=h[d+1],_=t*f+m*2,M=u[_],S=u[_+1],R=Wd(n,e,y,M,s);r[m]=Fh(R,x,T,S,g)}return r}};function Fh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Wd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Fh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Gd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),cc(t.settings)&&(n.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case ra:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;cc(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&vd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ra;var Ii=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=yr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="color";var _a=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var va=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)He.slerpFlat(r,0,a,l-o,a,l,c);return r}},Br=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Tn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=yr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var Ma=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bh=new Ma,Sa=class{constructor(t){this.manager=t!==void 0?t:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},uc=new qt,Yu=new F,Zu=new F,zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qo=new F,Yo=new He,Yn=new F,Ki=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qo,Yo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qo,Yo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new F,Ju=new Ht,$u=new Ht,Ye=class extends Ki{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,$u),e.subVectors($u,Ju)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gc=class extends zr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},kr=class extends Bs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Di=class extends Ki{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xc=class extends zr{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Vr=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Es=-90,ws=1,ba=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(Es,ws,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Es,ws,t,e);r.layers=this.layers,this.add(r);let a=new Ye(Es,ws,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Es,ws,t,e);o.layers=this.layers,this.add(o);let c=new Ye(Es,ws,t,e);c.layers=this.layers,this.add(c);let l=new Ye(Es,ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Gr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Xd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xd(){this._document.hidden===!1&&this.reset()}var Fc="\\[\\]\\.:\\/",qd=new RegExp("["+Fc+"]","g"),Bc="[^"+Fc+"]",Yd="[^"+Fc.replace("\\.","")+"]",Zd=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Jd=/(WCOD+)?/.source.replace("WCOD",Yd),$d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Qd=new RegExp("^"+Zd+Jd+$d+Kd+"$"),jd=["material","materials","bones","map"],_c=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qd,"")}static parseTrackName(t){let e=Qd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=_c;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var Gc=class Gc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Gc.prototype.isMatrix2=!0;var vc=Gc;function Oc(i,t,e,n){let s=tp(n);switch(e){case Ic:return i*t;case Vs:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Qr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case za:case ka:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case no:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case _n:case Ac:return{byteLength:1,components:1};case ks:case Rc:case Be:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case Wn:case Ca:case Ln:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function of(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){let m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,o0=`uniform sampler2D dfgLUT;
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
}`,a0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
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
}`,mm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Bp,colorspace_fragment:Op,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:t0,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:$p,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Qp,lights_pars_begin:jp,lights_toon_fragment:e0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,lightprobes_pars_fragment:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:x0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:y0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:b0,morphtarget_pars_vertex:T0,morphtarget_vertex:E0,normal_fragment_begin:w0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:F0,packing:B0,premultiplied_alpha_fragment:O0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:$0,skinnormal_vertex:K0,specularmap_fragment:Q0,specularmap_pars_fragment:j0,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distance_vert:gm,distance_frag:xm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:bm,meshlambert_vert:Tm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Im,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Bm,shadow_vert:Om,shadow_frag:zm,sprite_vert:km,sprite_frag:Hm},bt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},jn={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new dt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};jn.physical={uniforms:en([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var pl={r:0,b:0,g:0},Vm=new qt,af=new Jt;af.set(-1,0,0,0,1,0,0,0,1);function Gm(i,t,e,n,s,r){let a=new dt(0),o=s===!0?0:1,c,l,u=null,h=0,f=null;function p(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let _=y.backgroundBlurriness>0;T=t.get(T,_)}return T}function m(y){let T=!1,_=p(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,T){let _=p(T);_&&(_.isCubeTexture||_.mapping===$r)?(l===void 0&&(l=new re(new Vn(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:ns(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(af),l.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,(u!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new Fe(2,2),new oe({name:"BackgroundMaterial",uniforms:ns(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,T){y.getRGB(pl,Uc(i)),e.buffers.color.setClear(pl.r,pl.g,pl.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:x,dispose:d}}function Wm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(I,D,C,A,N){let B=!1,k=h(I,A,C,D);r!==k&&(r=k,l(r.object)),B=p(I,A,C,N),B&&m(I,A,C,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(I,D,C,A),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,D,C,A){let N=A.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let k=I.isInstancedMesh===!0?I.id:0,Y=B[k];Y===void 0&&(Y={},B[k]=Y);let H=Y[C.id];H===void 0&&(H={},Y[C.id]=H);let Z=H[N];return Z===void 0&&(Z=f(c()),H[N]=Z),Z}function f(I){let D=[],C=[],A=[];for(let N=0;N<e;N++)D[N]=0,C[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:A,object:I,attributes:{},index:null}}function p(I,D,C,A){let N=r.attributes,B=D.attributes,k=0,Y=C.getAttributes();for(let H in Y)if(Y[H].location>=0){let Q=N[H],St=B[H];if(St===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),Q===void 0||Q.attribute!==St||St&&Q.data!==St.data)return!0;k++}return r.attributesNum!==k||r.index!==A}function m(I,D,C,A){let N={},B=D.attributes,k=0,Y=C.getAttributes();for(let H in Y)if(Y[H].location>=0){let Q=B[H];Q===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let St={};St.attribute=Q,Q&&Q.data&&(St.data=Q.data),N[H]=St,k++}r.attributes=N,r.attributesNum=k,r.index=A}function x(){let I=r.newAttributes;for(let D=0,C=I.length;D<C;D++)I[D]=0}function g(I){d(I,0)}function d(I,D){let C=r.newAttributes,A=r.enabledAttributes,N=r.attributeDivisors;C[I]=1,A[I]===0&&(i.enableVertexAttribArray(I),A[I]=1),N[I]!==D&&(i.vertexAttribDivisor(I,D),N[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let C=0,A=D.length;C<A;C++)D[C]!==I[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function T(I,D,C,A,N,B,k){k===!0?i.vertexAttribIPointer(I,D,C,N,B):i.vertexAttribPointer(I,D,C,A,N,B)}function _(I,D,C,A){x();let N=A.attributes,B=C.getAttributes(),k=D.defaultAttributeValues;for(let Y in B){let H=B[Y];if(H.location>=0){let Z=N[Y];if(Z===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let Q=Z.normalized,St=Z.itemSize,At=t.get(Z);if(At===void 0)continue;let jt=At.buffer,Ot=At.type,Gt=At.bytesPerElement,$=Ot===i.INT||Ot===i.UNSIGNED_INT||Z.gpuType===Ca;if(Z.isInterleavedBufferAttribute){let it=Z.data,G=it.stride,ot=Z.offset;if(it.isInstancedInterleavedBuffer){for(let K=0;K<H.locationSize;K++)d(H.location+K,it.meshPerAttribute);I.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let K=0;K<H.locationSize;K++)g(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let K=0;K<H.locationSize;K++)T(H.location+K,St/H.locationSize,Ot,Q,G*Gt,(ot+St/H.locationSize*K)*Gt,$)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)d(H.location+it,Z.meshPerAttribute);I.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let it=0;it<H.locationSize;it++)T(H.location+it,St/H.locationSize,Ot,Q,St*Gt,St/H.locationSize*it*Gt,$)}}else if(k!==void 0){let Q=k[Y];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}y()}function M(){E();for(let I in n){let D=n[I];for(let C in D){let A=D[C];for(let N in A){let B=A[N];for(let k in B)u(B[k].object),delete B[k];delete A[N]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let C in D){let A=D[C];for(let N in A){let B=A[N];for(let k in B)u(B[k].object),delete B[k];delete A[N]}}delete n[I.id]}function R(I){for(let D in n){let C=n[D];for(let A in C){let N=C[A];if(N[I.id]===void 0)continue;let B=N[I.id];for(let k in B)u(B[k].object),delete B[k];delete N[I.id]}}}function v(I){for(let D in n){let C=n[D],A=I.isInstancedMesh===!0?I.id:0,N=C[A];if(N!==void 0){for(let B in N){let k=N[B];for(let Y in k)u(k[Y].object),delete k[Y];delete N[B]}delete C[A],Object.keys(C).length===0&&delete n[D]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Xm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let p=0;p<u;p++)f+=l[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&R!==Ln&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Xt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:_,maxSamples:M,samples:S}}function Ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let y=r?0:n,T=y*4,_=d.clippingState||null;c.value=_,_=u(m,f,T,p);for(let M=0;M!==T;++M)_[M]=e[M];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let d=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<d)&&(g=new Float32Array(d));for(let T=0,_=p;T!==x;++T,_+=4)a.copy(h[T]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ws=4,Zm=6,Jm=20,$m=256,ro=new Di,Oh=new dt,Wc=null,Xc=0,qc=0,Yc=!1,Km=new F,is=new F,gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Km}=r;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Be,format:Dn,colorSpace:Mr,depthBuffer:!1},s=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qm(r)),this._blurMaterial=tg(r,t,e),this._ggxMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new re(new ue,t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,s,r){let c=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Oh),h.toneMapping=Gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new Vn,new Ve({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,d=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,d=!0):(g.color.copy(Oh),d=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let M=this._cubeSize;Gs(s,_*M,T>2?M:0,M,M),h.setRenderTarget(s),d&&h.render(x,c),h.render(t,c)}h.toneMapping=p,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ro)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,p=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ws?n-m+Ws:0),d=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=m-e,Gs(r,g,d,3*x,2*x),s.setRenderTarget(r),s.render(o,ro),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Gs(t,g,d,3*x,2*x),s.setRenderTarget(t),s.render(o,ro)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),f=4*(this._cubeSize-u);Gs(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(c,ro)}};function Qm(i){let t=[],e=[],n=i,s=i-Ws+1+Zm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,p=3,m=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let y=d%3*2/3-1,T=d>2?0:-1,_=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];m.set(_,p*f*d);for(let M=0;M<f;M++){let S=u[M*2]*2-1,R=u[M*2+1]*2-1;d===0?is.set(1,R,S):d===1?is.set(-S,1,-R):d===2?is.set(-S,R,1):d===3?is.set(-1,R,-S):d===4?is.set(-S,-1,R):is.set(S,R,-1),is.toArray(x,(d*f+M)*p)}}let g=new ue;g.setAttribute("position",new Ze(m,p)),g.setAttribute("outputDirection",new Ze(x,p)),e.push(new re(g,null)),n>Ws&&n--}return{lodMeshes:e,sizeLods:t}}function zh(i,t,e){let n=new Me(i,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){return new oe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function tg(i,t,e){return new oe({name:"SphericalGaussianBlur",defines:{SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function kh(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Hh(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xl=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:xn});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===In&&(e.minFilter=Ne),new ba(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function eg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===wa||p===Aa)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new xl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,m=p===wa||p===Aa,x=p===Ui||p===es;if(m||x){let g=e.get(f),d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new gl(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new gl(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,p){return p===wa?f.mapping=Ui:p===Aa&&(f.mapping=es),f}function c(f){let p=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){let p=f.target;p.removeEventListener("dispose",l);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function ng(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zi("WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(p!==null){let y=p.array;x=p.version;for(let T=0,_=y.length;T<_;T+=3){let M=y[T+0],S=y[T+1],R=y[T+2];f.push(M,S,S,R,R,M)}}else{let y=m.array;x=m.version;for(let T=0,_=y.length/3-1;T<_;T+=3){let M=T+0,S=T+1,R=T+2;f.push(M,S,S,R,R,M)}}let g=new(m.count>=65535?Cr:Rr)(f,1);g.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,g)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function sg(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function og(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;p===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let _=o.attributes.position.count*T,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*M*4*h),R=new Er(S,_,M,h);R.type=Ln,R.needsUpdate=!0;let v=T*4;for(let P=0;P<h;P++){let I=g[P],D=d[P],C=y[P],A=_*M*4*P;for(let N=0;N<I.count;N++){let B=N*v;p===!0&&(s.fromBufferAttribute(I,N),S[A+B+0]=s.x,S[A+B+1]=s.y,S[A+B+2]=s.z,S[A+B+3]=0),m===!0&&(s.fromBufferAttribute(D,N),S[A+B+4]=s.x,S[A+B+5]=s.y,S[A+B+6]=s.z,S[A+B+7]=0),x===!0&&(s.fromBufferAttribute(C,N),S[A+B+8]=s.x,S[A+B+9]=s.y,S[A+B+10]=s.z,S[A+B+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Ht(_,M)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ag(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var lg={[Wr]:"LINEAR_TONE_MAPPING",[Xr]:"REINHARD_TONE_MAPPING",[qr]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[Jr]:"AGX_TONE_MAPPING",[ts]:"NEUTRAL_TONE_MAPPING",[Zr]:"CUSTOM_TONE_MAPPING"};function cg(i,t,e,n,s,r){let a=new Me(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ue;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let u=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new re(l,u),f=new Di(-1,1,1,-1,0,1),p=null,m=null,x=!1,g,d=null,y=[],T=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),c!==null&&c.setSize(_,M);for(let S=0;S<y.length;S++){let R=y[S];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){y=_,T=y.length>0&&y[0].isRenderPass===!0;let M=a.width,S=a.height;y.length>0&&o===null&&(o=new Me(M,S,{type:Be,depthBuffer:!1,stencilBuffer:!1}),c=new Me(M,S,{type:Be,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let v=y[R];v.setSize&&v.setSize(M,S)}},this.begin=function(_,M){if(x||_.toneMapping===Gn&&y.length===0)return!1;if(d=M,M!==null){let S=M.width,R=M.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return T===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Gn,!0},this.hasRenderPass=function(){return T},this.end=function(_,M){_.toneMapping=g,x=!0;let S=a,R=o;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,R,S,M),E.needsSwap!==!1&&(S=R,R=R===o?c:o))}if(p!==_.outputColorSpace||m!==_.toneMapping){p=_.outputColorSpace,m=_.toneMapping,u.defines={},te.getTransfer(p)===ce&&(u.defines.SRGB_TRANSFER="");let v=lg[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var lf=new ln,$c=new Ci(1,1),cf=new Er,uf=new la,hf=new Lr,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),ze(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),ze(e,n)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),ze(e,n)}}function xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?dl:fl,r=$c):r=lf,e.setTexture2D(t||r,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uf,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hf,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cf,s)}function Cg(i){switch(i){case 5126:return ug;case 35664:return hg;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lg(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ng(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ug(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bg(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function zg(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Vg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$c:a=lf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function qg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||uf,r[a])}function Yg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function Zg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cf,r[a])}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return Og;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}},Qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Yh(i,t){i.seq.push(t),i.map[t.id]=t}function $g(i,t,e){let n=i.name,s=n.length;for(Zc.lastIndex=0;;){let r=Zc.exec(n),a=Zc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yh(e,l===void 0?new Kc(o,i,t):new Qc(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new jc(o),Yh(e,h)),e=h}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);$g(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Zh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kg=37297,Qg=0;function jg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Jh=new Jt;function tx(i){te._getMatrix(Jh,te.workingColorSpace,i);let t=`mat3( ${Jh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $h(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),o)}else return r}function ex(i,t){let e=tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var nx={[Wr]:"Linear",[Xr]:"Reinhard",[qr]:"Cineon",[Yr]:"ACESFilmic",[Jr]:"AgX",[ts]:"Neutral",[Zr]:"Custom"};function ix(i,t){let e=nx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ml=new F;function sx(){te.getLuminanceCoefficients(ml);let i=ml.x.toFixed(4),t=ml.y.toFixed(4),e=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function ox(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ao(i){return i!==""}function Kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(lx,ux)}var cx=new Map;function ux(i,t){let e=Kt[t];if(e===void 0){let n=cx.get(t);if(n!==void 0)e=Kt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tu(e)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(hx,fx)}function fx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var dx={[Qi]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function px(i){return dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mx={[Ui]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function gx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xx={[es]:"ENVMAP_MODE_REFRACTION"};function _x(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vx={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[vh]:"ENVMAP_BLENDING_ADD"};function yx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vx[i.combine]||"ENVMAP_BLENDING_NONE"}function Mx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=px(e),l=gx(e),u=_x(e),h=yx(e),f=Mx(e),p=rx(e),m=ox(r),x=s.createProgram(),g,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(g=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),a=tu(a),a=Kh(a,e),a=Qh(a,e),o=tu(o),o=Kh(o,e),o=Qh(o,e),a=jh(a),o=jh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=y+g+a,_=y+d+o,M=Zh(s,s.VERTEX_SHADER,T),S=Zh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",C=s.getShaderInfoLog(M)||"",A=s.getShaderInfoLog(S)||"",N=D.trim(),B=C.trim(),k=A.trim(),Y=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let Z=$h(s,M,"vertex"),Q=$h(s,S,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+Q)}else N!==""?Xt("WebGLProgram: Program Info Log:",N):(B===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:Y,programLog:N,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:d}})}s.deleteShader(M),s.deleteShader(S),v=new Xs(s,x),E=ax(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,Kg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var bx=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function Tx(i){return i===Bi||i===no||i===io}function Ex(i,t,e,n,s,r){let a=new wr,o=new eu,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,P,I,D,C){let A=I.fog,N=D.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||B,k),H=Y&&Y.mapping===$r?Y.image.height:null,Z=p[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=Q!==void 0?Q.length:0,At=0;N.morphAttributes.position!==void 0&&(At=1),N.morphAttributes.normal!==void 0&&(At=2),N.morphAttributes.color!==void 0&&(At=3);let jt,Ot,Gt,$;if(Z){let ie=jn[Z];jt=ie.vertexShader,Ot=ie.fragmentShader}else{jt=v.vertexShader,Ot=v.fragmentShader;let ie=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,ie,le),Gt=ie.id,$=le.id}let it=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),ot=D.isInstancedMesh===!0,K=D.isBatchedMesh===!0,st=!!v.map,lt=!!v.matcap,ut=!!Y,Ft=!!v.aoMap,$t=!!v.lightMap,It=!!v.bumpMap&&v.wireframe===!1,Vt=!!v.normalMap,Wt=!!v.displacementMap,xe=!!v.emissiveMap,fe=!!v.metalnessMap,_e=!!v.roughnessMap,O=v.anisotropy>0,De=v.clearcoat>0,ae=v.dispersion>0,L=v.retroreflectivity>0,b=v.iridescence>0,V=v.sheen>0,q=v.transmission>0,j=O&&!!v.anisotropyMap,pt=De&&!!v.clearcoatMap,xt=De&&!!v.clearcoatNormalMap,tt=De&&!!v.clearcoatRoughnessMap,et=b&&!!v.iridescenceMap,Mt=b&&!!v.iridescenceThicknessMap,Lt=V&&!!v.sheenColorMap,_t=V&&!!v.sheenRoughnessMap,vt=!!v.specularMap,Bt=!!v.specularColorMap,nt=!!v.specularIntensityMap,Dt=q&&!!v.transmissionMap,U=q&&!!v.thicknessMap,mt=!!v.gradientMap,rt=!!v.alphaMap,gt=v.alphaTest>0,Tt=!!v.alphaHash,at=!!v.extensions,zt=Gn;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Rt={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:Ot,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:K,batchingColor:K&&D._colorsTexture!==null,instancing:ot,instancingColor:ot&&D.instanceColor!==null,instancingMorph:ot&&D.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:st,matcap:lt,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:H,aoMap:Ft,lightMap:$t,bumpMap:It,normalMap:Vt,displacementMap:Wt,emissiveMap:xe,normalMapObjectSpace:Vt&&v.normalMapType===Sh,normalMapTangentSpace:Vt&&v.normalMapType===hl,packedNormalMap:Vt&&v.normalMapType===hl&&Tx(v.normalMap.format),metalnessMap:fe,roughnessMap:_e,anisotropy:O,anisotropyMap:j,clearcoat:De,clearcoatMap:pt,clearcoatNormalMap:xt,clearcoatRoughnessMap:tt,dispersion:ae,retroreflection:L,iridescence:b,iridescenceMap:et,iridescenceThicknessMap:Mt,sheen:V,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:vt,specularColorMap:Bt,specularIntensityMap:nt,transmission:q,transmissionMap:Dt,thicknessMap:U,gradientMap:mt,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:gt,alphaHash:Tt,combine:v.combine,mapUv:st&&m(v.map.channel),aoMapUv:Ft&&m(v.aoMap.channel),lightMapUv:$t&&m(v.lightMap.channel),bumpMapUv:It&&m(v.bumpMap.channel),normalMapUv:Vt&&m(v.normalMap.channel),displacementMapUv:Wt&&m(v.displacementMap.channel),emissiveMapUv:xe&&m(v.emissiveMap.channel),metalnessMapUv:fe&&m(v.metalnessMap.channel),roughnessMapUv:_e&&m(v.roughnessMap.channel),anisotropyMapUv:j&&m(v.anisotropyMap.channel),clearcoatMapUv:pt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:xt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(v.sheenRoughnessMap.channel),specularMapUv:vt&&m(v.specularMap.channel),specularColorMapUv:Bt&&m(v.specularColorMap.channel),specularIntensityMapUv:nt&&m(v.specularIntensityMap.channel),transmissionMapUv:Dt&&m(v.transmissionMap.channel),thicknessMapUv:U&&m(v.thicknessMap.channel),alphaMapUv:rt&&m(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Vt||O),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(st||rt),fog:!!A,useFog:v.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:G,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:At,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:st&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:xe&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ge,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||K)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let E=p[v.type],P;if(E){let I=jn[E];P=pi.clone(I.uniforms)}else P=v.uniforms;return P}function _(v,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new Sx(i,E,v,s),l.push(P),u.set(E,P)),P}function M(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:R}}function wx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,x,g,d){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},i[t]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=m,y.materialVariant=a(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=d),t++,y}function c(f,p,m,x,g,d,y){y.reversedDepth===!0&&(g=-g);let T=o(f,p,m,x,g,d);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function l(f,p,m,x,g,d){let y=o(f,p,m,x,g,d);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function u(f,p){e.length>1&&e.sort(f||Ax),n.length>1&&n.sort(p||ef),s.length>1&&s.sort(p||ef)}function h(){for(let f=t,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Rx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new nf,i.set(n,[a])):s>=r.length?(a=new nf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new dt};break;case"SpotLight":e={position:new F,direction:new F,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ix=0;function Lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dx(i){let t=new Cx,e=Px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new qt,a=new qt;function o(l){let u=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,y=0,T=0,_=0,M=0,S=0,R=0,v=0,E=0,P=0;l.sort(Lx);for(let D=0,C=l.length;D<C;D++){let A=l[D],N=A.color,B=A.intensity,k=A.distance,Y=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Bi?Y=A.shadow.map.texture:Y=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=N.r*B,h+=N.g*B,f+=N.b*B;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],B);P++}else if(A.isSunLight){let H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,Q=e.get(A);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=Y;let St=Z.getViewportCount();for(let At=0;At<St;At++)n.sunShadowMatrix[x+At]=Z.getMatrix(At),n.sunShadowCascade[x+At]=Z._cascadeData[At];x+=St,m++}n.sun[p]=H,p++}else if(A.isDirectionalLight){let H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,Q=e.get(A);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=A.shadow.matrix,M++}n.directional[g]=H,g++}else if(A.isSpotLight){let H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(N).multiplyScalar(B),H.distance=k,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[y]=H;let Z=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,Z.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[y]=Z.matrix,A.castShadow){let Q=e.get(A);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=Y,R++}y++}else if(A.isRectAreaLight){let H=t.get(A);H.color.copy(N).multiplyScalar(B),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[T]=H,T++}else if(A.isPointLight){let H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let Z=A.shadow,Q=e.get(A);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=A.shadow.matrix,S++}n.point[d]=H,d++}else if(A.isHemisphereLight){let H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(B),H.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[_]=H,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==d||I.spotLength!==y||I.rectAreaLength!==T||I.hemiLength!==_||I.numSunShadows!==m||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==R||I.numSpotMaps!==v||I.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=y,n.rectArea.length=T,n.point.length=d,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,I.sunLength=p,I.directionalLength=g,I.pointLength=d,I.spotLength=y,I.rectAreaLength=T,I.hemiLength=_,I.numSunShadows=m,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=R,I.numSpotMaps=v,I.numLightProbes=P,n.version=Ix++)}function c(l,u){let h=0,f=0,p=0,m=0,x=0,g=0,d=u.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let _=l[y];if(_.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(_.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:o,setupView:c,state:n}}function sf(i){let t=new Dx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Nx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sf(i),t.set(s,[o])):r>=a.length?(o=new sf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`,Bx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ox=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],rf=new qt,oo=new F,Jc=new F;function zx(i,t,e){let n=new Ds,s=new Ht,r=new Ht,a=new ge,o=new ha,c=new fa,l={},u=e.maxTextureSize,h={[Ni]:$e,[$e]:Ni,[Ge]:Ge},f=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let d=this.type;this.render=function(S,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===ju&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let C=d!==this.type;C&&R.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(N=>N.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,N=S.length;A<N;A++){let B=S[A],k=B.shadow;if(k===void 0){Xt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Os){if(B.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Me(s.x,s.y,{format:Bi,type:Be,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Ci(s.x,s.y,Ln),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie}else B.isPointLight?(k.map=new xl(s.x),k.map.depthTexture=new ca(s.x,Wn)):(k.map=new Me(s.x,s.y),k.map.depthTexture=new Ci(s.x,s.y,Wn)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Jn,this.type===Qi?(k.map.depthTexture.compareFunction=H?dl:fl,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ie,k.map.depthTexture.magFilter=Ie);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,v);for(let Q=0;Q<Z;Q++){let St=k.getCamera(Q);if(B.isPointLight){let At=k.camera,jt=k.matrix,Ot=B.distance||At.far;Ot!==At.far&&(At.far=Ot,At.updateProjectionMatrix()),oo.setFromMatrixPosition(B.matrixWorld),At.position.copy(oo),Jc.copy(At.position),Jc.add(Bx[Q]),At.up.copy(Ox[Q]),At.lookAt(Jc),At.updateMatrixWorld(),jt.makeTranslation(-oo.x,-oo.y,-oo.z),rf.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),k._frustum.setFromProjectionMatrix(rf,At.coordinateSystem,At.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(k.map),i.clear());let At=k.getViewport(Q);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),D.viewport(a)}n=k.getFrustum(Q),_(R,v,St,B,this.type)}k.isPointLightShadow!==!0&&this.type===Os&&y(k,v),k.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(E,P,I)};function y(S,R){let v=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Me(s.x,s.y,{format:Bi,type:Be}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,v,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,v,p,x,null)}function T(S,R,v,E){let P=null,I=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=P.uuid,C=R.uuid,A=l[D];A===void 0&&(A={},l[D]=A);let N=A[C];N===void 0&&(N=P.clone(),A[C]=N,R.addEventListener("dispose",M)),P=N}if(P.visible=R.visible,P.wireframe=R.wireframe,E===Os?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=i.properties.get(P);D.light=v}return P}function _(S,R,v,E,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Os)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let C=t.update(S),A=S.material;if(Array.isArray(A)){let N=C.groups;for(let B=0,k=N.length;B<k;B++){let Y=N[B],H=A[Y.materialIndex];if(H&&H.visible){let Z=T(S,H,E,P);S.onBeforeShadow(i,S,R,v,C,Z,Y),i.renderBufferDirect(v,null,C,Z,S,Y),S.onAfterShadow(i,S,R,v,C,Z,Y)}}}else if(A.visible){let N=T(S,A,E,P);S.onBeforeShadow(i,S,R,v,C,N,null),i.renderBufferDirect(v,null,C,N,S,null),S.onAfterShadow(i,S,R,v,C,N,null)}}let D=S.children;for(let C=0,A=D.length;C<A;C++)_(D[C],R,v,E,P)}function M(S){S.target.removeEventListener("dispose",M);for(let v in l){let E=l[v],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function kx(i,t){function e(){let U=!1,mt=new ge,rt=null,gt=new ge(0,0,0,0);return{setMask:function(Tt){rt!==Tt&&!U&&(i.colorMask(Tt,Tt,Tt,Tt),rt=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,at,zt,Rt,ie){ie===!0&&(Tt*=Rt,at*=Rt,zt*=Rt),mt.set(Tt,at,zt,Rt),gt.equals(mt)===!1&&(i.clearColor(Tt,at,zt,Rt),gt.copy(mt))},reset:function(){U=!1,rt=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,mt=!1,rt=null,gt=null,Tt=null;return{setReversed:function(at){if(mt!==at){let zt=t.get("EXT_clip_control");at?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),mt=at;let Rt=Tt;Tt=null,this.setClear(Rt)}},getReversed:function(){return mt},setTest:function(at){at?it(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(at){rt!==at&&!U&&(i.depthMask(at),rt=at)},setFunc:function(at){if(mt&&(at=Nh[at]),gt!==at){switch(at){case $o:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=at}},setLocked:function(at){U=at},setClear:function(at){Tt!==at&&(Tt=at,mt&&(at=1-at),i.clearDepth(at))},reset:function(){U=!1,rt=null,gt=null,Tt=null,mt=!1}}}function s(){let U=!1,mt=null,rt=null,gt=null,Tt=null,at=null,zt=null,Rt=null,ie=null;return{setTest:function(le){U||(le?it(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(le){mt!==le&&!U&&(i.stencilMask(le),mt=le)},setFunc:function(le,yn,fn){(rt!==le||gt!==yn||Tt!==fn)&&(i.stencilFunc(le,yn,fn),rt=le,gt=yn,Tt=fn)},setOp:function(le,yn,fn){(at!==le||zt!==yn||Rt!==fn)&&(i.stencilOp(le,yn,fn),at=le,zt=yn,Rt=fn)},setLocked:function(le){U=le},setClear:function(le){ie!==le&&(i.clearStencil(le),ie=le)},reset:function(){U=!1,mt=null,rt=null,gt=null,Tt=null,at=null,zt=null,Rt=null,ie=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,y=null,T=null,_=null,M=null,S=null,R=null,v=new dt(0,0,0),E=0,P=!1,I=null,D=null,C=null,A=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let Z=null,Q={},St=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),jt=new ge().fromArray(St),Ot=new ge().fromArray(At);function Gt(U,mt,rt,gt){let Tt=new Uint8Array(4),at=i.createTexture();i.bindTexture(U,at),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<rt;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return at}let $={};$[i.TEXTURE_2D]=Gt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(Rs),It(!1),Vt(yc),it(i.CULL_FACE),Ft(xn);function it(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function G(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ot(U,mt){return f[U]!==mt?(i.bindFramebuffer(U,mt),f[U]=mt,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function K(U,mt){let rt=m,gt=!1;if(U){rt=p.get(mt),rt===void 0&&(rt=[],p.set(mt,rt));let Tt=U.textures;if(rt.length!==Tt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,zt=Tt.length;at<zt;at++)rt[at]=i.COLOR_ATTACHMENT0+at;rt.length=Tt.length,gt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(rt)}function st(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let lt={[ji]:i.FUNC_ADD,[eh]:i.FUNC_SUBTRACT,[nh]:i.FUNC_REVERSE_SUBTRACT};lt[ih]=i.MIN,lt[sh]=i.MAX;let ut={[rh]:i.ZERO,[oh]:i.ONE,[ah]:i.SRC_COLOR,[bc]:i.SRC_ALPHA,[dh]:i.SRC_ALPHA_SATURATE,[hh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[lh]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[ph]:i.CONSTANT_COLOR,[mh]:i.ONE_MINUS_CONSTANT_COLOR,[gh]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(U,mt,rt,gt,Tt,at,zt,Rt,ie,le){if(U===xn){g===!0&&(G(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),U!==th){if(U!==d||le!==P){if((y!==ji||M!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,M=ji),le)switch(U){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",U);break}else switch(U){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",U);break}T=null,_=null,S=null,R=null,v.set(0,0,0),E=0,d=U,P=le}return}Tt=Tt||mt,at=at||rt,zt=zt||gt,(mt!==y||Tt!==M)&&(i.blendEquationSeparate(lt[mt],lt[Tt]),y=mt,M=Tt),(rt!==T||gt!==_||at!==S||zt!==R)&&(i.blendFuncSeparate(ut[rt],ut[gt],ut[at],ut[zt]),T=rt,_=gt,S=at,R=zt),(Rt.equals(v)===!1||ie!==E)&&(i.blendColor(Rt.r,Rt.g,Rt.b,ie),v.copy(Rt),E=ie),d=U,P=!1}function $t(U,mt){U.side===Ge?G(i.CULL_FACE):it(i.CULL_FACE);let rt=U.side===$e;mt&&(rt=!rt),It(rt),U.blending===zs&&U.transparent===!1?Ft(xn):Ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let gt=U.stencilWrite;o.setTest(gt),gt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function Vt(U){U!==Ku?(it(i.CULL_FACE),U!==D&&(U===yc?i.cullFace(i.BACK):U===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),D=U}function Wt(U){U!==C&&(k&&i.lineWidth(U),C=U)}function xe(U,mt,rt){U?(it(i.POLYGON_OFFSET_FILL),(A!==mt||N!==rt)&&(A=mt,N=rt,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,rt))):G(i.POLYGON_OFFSET_FILL)}function fe(U){U?it(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function _e(U){U===void 0&&(U=i.TEXTURE0+B-1),Z!==U&&(i.activeTexture(U),Z=U)}function O(U,mt,rt){rt===void 0&&(Z===null?rt=i.TEXTURE0+B-1:rt=Z);let gt=Q[rt];gt===void 0&&(gt={type:void 0,texture:void 0},Q[rt]=gt),(gt.type!==U||gt.texture!==mt)&&(Z!==rt&&(i.activeTexture(rt),Z=rt),i.bindTexture(U,mt||$[U]),gt.type=U,gt.texture=mt)}function De(){let U=Q[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function b(){try{i.texSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function V(){try{i.texSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function pt(){try{i.texStorage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function xt(){try{i.texStorage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function tt(){try{i.texImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function et(){try{i.texImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Mt(U){return h[U]!==void 0?h[U]:i.getParameter(U)}function Lt(U,mt){h[U]!==mt&&(i.pixelStorei(U,mt),h[U]=mt)}function _t(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function vt(U){Ot.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ot.copy(U))}function Bt(U,mt){let rt=l.get(mt);rt===void 0&&(rt=new WeakMap,l.set(mt,rt));let gt=rt.get(U);gt===void 0&&(gt=i.getUniformBlockIndex(mt,U.name),rt.set(U,gt))}function nt(U,mt){let gt=l.get(mt).get(U);c.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,U.__bindingPointIndex),c.set(mt,gt))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,Q={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,y=null,T=null,_=null,M=null,S=null,R=null,v=new dt(0,0,0),E=0,P=!1,I=null,D=null,C=null,A=null,N=null,jt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:G,bindFramebuffer:ot,drawBuffers:K,useProgram:st,setBlending:Ft,setMaterial:$t,setFlipSided:It,setCullFace:Vt,setLineWidth:Wt,setPolygonOffset:xe,setScissorTest:fe,activeTexture:_e,bindTexture:O,unbindTexture:De,compressedTexImage2D:ae,compressedTexImage3D:L,texImage2D:tt,texImage3D:et,pixelStorei:Lt,getParameter:Mt,updateUBOMapping:Bt,uniformBlockBinding:nt,texStorage2D:pt,texStorage3D:xt,texSubImage2D:b,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:_t,viewport:vt,reset:Dt}}function Hx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,u=new WeakMap,h=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return m?new OffscreenCanvas(L,b):br("canvas")}function g(L,b,V){let q=1,j=ae(L);if((j.width>V||j.height>V)&&(q=V/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let pt=Math.floor(q*j.width),xt=Math.floor(q*j.height);f===void 0&&(f=x(pt,xt));let tt=b?x(pt,xt):f;return tt.width=pt,tt.height=xt,tt.getContext("2d").drawImage(L,0,0,pt,xt),Xt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+pt+"x"+xt+")."),tt}else return"data"in L&&Xt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function d(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,b,V,q,j,pt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt;q&&(xt=t.get("EXT_texture_norm16"),xt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=b;if(b===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8),V===i.UNSIGNED_SHORT&&xt&&(tt=xt.R16_EXT),V===i.SHORT&&xt&&(tt=xt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),b===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8),V===i.UNSIGNED_SHORT&&xt&&(tt=xt.RG16_EXT),V===i.SHORT&&xt&&(tt=xt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGB16_EXT),V===i.SHORT&&xt&&(tt=xt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),b===i.RGBA){let et=pt?Sr:te.getTransfer(j);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=et===ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGBA16_EXT),V===i.SHORT&&xt&&(tt=xt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(L,b){let V;return L?b===null||b===Wn||b===Hs?V=i.DEPTH24_STENCIL8:b===Ln?V=i.DEPTH32F_STENCIL8:b===ks&&(V=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wn||b===Hs?V=i.DEPTH_COMPONENT24:b===Ln?V=i.DEPTH_COMPONENT32F:b===ks&&(V=i.DEPTH_COMPONENT16),V}function S(L,b){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ie&&L.minFilter!==Ne?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function R(L){let b=L.target;b.removeEventListener("dispose",R),E(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function v(L){let b=L.target;b.removeEventListener("dispose",v),I(b)}function E(L){let b=n.get(L);if(b.__webglInit===void 0)return;let V=L.source,q=p.get(V);if(q){let j=q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(L),Object.keys(q).length===0&&p.delete(V)}n.remove(L)}function P(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let V=L.source,q=p.get(V);delete q[b.__cacheKey],a.memory.textures--}function I(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let j=0;j<b.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[q][j]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=L.textures;for(let q=0,j=V.length;q<j;q++){let pt=n.get(V[q]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(V[q])}n.remove(L)}let D=0;function C(){D=0}function A(){return D}function N(L){D=L}function B(){let L=D;return L>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function k(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Y(L,b){let V=n.get(L);if(L.isVideoTexture&&O(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){let q=L.image;if(q===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,L,b);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function H(L,b){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){G(V,L,b);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Z(L,b){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){G(V,L,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function Q(L,b){let V=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&V.__version!==L.version){ot(V,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let St={[ia]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},At={[Ie]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},jt={[Th]:i.NEVER,[Ch]:i.ALWAYS,[Eh]:i.LESS,[fl]:i.LEQUAL,[wh]:i.EQUAL,[dl]:i.GEQUAL,[Ah]:i.GREATER,[Rh]:i.NOTEQUAL};function Ot(L,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ne||b.magFilter===Ra||b.magFilter===Kr||b.magFilter===In||b.minFilter===Ne||b.minFilter===Ra||b.minFilter===Kr||b.minFilter===In)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,St[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,St[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,St[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,At[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,jt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ie||b.minFilter!==Kr&&b.minFilter!==In||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Gt(L,b){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",R));let q=b.source,j=p.get(q);j===void 0&&(j={},p.set(q,j));let pt=k(b);if(pt!==L.__cacheKey){j[pt]===void 0&&(j[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[pt].usedTimes++;let xt=j[L.__cacheKey];xt!==void 0&&(j[L.__cacheKey].usedTimes--,xt.usedTimes===0&&P(b)),L.__cacheKey=pt,L.__webglTexture=j[pt].texture}return V}function $(L,b,V){return Math.floor(Math.floor(L/V)/b)}function it(L,b,V,q){let pt=L.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,q,b.data);else{pt.sort((Lt,_t)=>Lt.start-_t.start);let xt=0;for(let Lt=1;Lt<pt.length;Lt++){let _t=pt[xt],vt=pt[Lt],Bt=_t.start+_t.count,nt=$(vt.start,b.width,4),Dt=$(_t.start,b.width,4);vt.start<=Bt+1&&nt===Dt&&$(vt.start+vt.count-1,b.width,4)===nt?_t.count=Math.max(_t.count,vt.start+vt.count-_t.start):(++xt,pt[xt]=vt)}pt.length=xt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Lt=0,_t=pt.length;Lt<_t;Lt++){let vt=pt[Lt],Bt=Math.floor(vt.start/4),nt=Math.ceil(vt.count/4),Dt=Bt%b.width,U=Math.floor(Bt/b.width),mt=nt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Dt,U,mt,rt,V,q,b.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function G(L,b,V){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let j=Gt(L,b),pt=b.source;e.bindTexture(q,L.__webglTexture,i.TEXTURE0+V);let xt=n.get(pt);if(pt.version!==xt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=te.getPrimaries(te.workingColorSpace),gt=b.colorSpace===di?null:te.getPrimaries(b.colorSpace),Tt=b.colorSpace===di||rt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let et=g(b.image,!1,s.maxTextureSize);et=De(b,et);let Mt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),_t=_(b.internalFormat,Mt,Lt,b.normalized,b.colorSpace,b.isVideoTexture);Ot(q,b);let vt,Bt=b.mipmaps,nt=b.isVideoTexture!==!0,Dt=xt.__version===void 0||j===!0,U=pt.dataReady,mt=S(b,et);if(b.isDepthTexture)_t=M(b.format===Fi,b.type),Dt&&(nt?e.texStorage2D(i.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Mt,Lt,null));else if(b.isDataTexture)if(Bt.length>0){nt&&Dt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Bt[0].width,Bt[0].height);for(let rt=0,gt=Bt.length;rt<gt;rt++)vt=Bt[rt],nt?U&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,vt.width,vt.height,0,Mt,Lt,vt.data);b.generateMipmaps=!1}else nt?(Dt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,et.width,et.height),U&&it(b,et,Mt,Lt)):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Mt,Lt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,Bt[0].width,Bt[0].height,et.depth);for(let rt=0,gt=Bt.length;rt<gt;rt++)if(vt=Bt[rt],b.format!==Dn)if(Mt!==null)if(nt){if(U)if(b.layerUpdates.size>0){let Tt=Oc(vt.width,vt.height,b.format,b.type);for(let at of b.layerUpdates){let zt=vt.data.subarray(at*Tt/vt.data.BYTES_PER_ELEMENT,(at+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,at,vt.width,vt.height,1,Mt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,et.depth,Mt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,_t,vt.width,vt.height,et.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,et.depth,Mt,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,_t,vt.width,vt.height,et.depth,0,Mt,Lt,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{nt&&Dt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Bt[0].width,Bt[0].height);for(let rt=0,gt=Bt.length;rt<gt;rt++)vt=Bt[rt],b.format!==Dn?Mt!==null?nt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,_t,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?U&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,vt.width,vt.height,0,Mt,Lt,vt.data)}else if(b.isDataArrayTexture)if(nt){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,et.width,et.height,et.depth),U)if(b.layerUpdates.size>0){let rt=Oc(et.width,et.height,b.format,b.type);for(let gt of b.layerUpdates){let Tt=et.data.subarray(gt*rt/et.data.BYTES_PER_ELEMENT,(gt+1)*rt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,et.width,et.height,1,Mt,Lt,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Mt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,Mt,Lt,et.data);else if(b.isData3DTexture)nt?(Dt&&e.texStorage3D(i.TEXTURE_3D,mt,_t,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Mt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,Mt,Lt,et.data);else if(b.isFramebufferTexture){if(Dt)if(nt)e.texStorage2D(i.TEXTURE_2D,mt,_t,et.width,et.height);else{let rt=et.width,gt=et.height;for(let Tt=0;Tt<mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,_t,rt,gt,0,Mt,Lt,null),rt>>=1,gt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),et.parentNode!==rt){rt.appendChild(et),h.add(b),rt.onpaint=gt=>{let Tt=gt.changedElements;for(let at of h)Tt.includes(at.image)&&(at.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Tt=i.RGBA,at=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,at,zt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(nt&&Dt){let rt=ae(Bt[0]);e.texStorage2D(i.TEXTURE_2D,mt,_t,rt.width,rt.height)}for(let rt=0,gt=Bt.length;rt<gt;rt++)vt=Bt[rt],nt?U&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt,Lt,vt):e.texImage2D(i.TEXTURE_2D,rt,_t,Mt,Lt,vt);b.generateMipmaps=!1}else if(nt){if(Dt){let rt=ae(et);e.texStorage2D(i.TEXTURE_2D,mt,_t,rt.width,rt.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,_t,Mt,Lt,et);d(b)&&y(q),xt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ot(L,b,V){if(b.image.length!==6)return;let q=Gt(L,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);let pt=n.get(j);if(j.version!==pt.__version||q===!0){e.activeTexture(i.TEXTURE0+V);let xt=te.getPrimaries(te.workingColorSpace),tt=b.colorSpace===di?null:te.getPrimaries(b.colorSpace),et=b.colorSpace===di||xt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Lt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let at=0;at<6;at++)!Mt&&!Lt?_t[at]=g(b.image[at],!0,s.maxCubemapSize):_t[at]=Lt?b.image[at].image:b.image[at],_t[at]=De(b,_t[at]);let vt=_t[0],Bt=r.convert(b.format,b.colorSpace),nt=r.convert(b.type),Dt=_(b.internalFormat,Bt,nt,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,mt=pt.__version===void 0||q===!0,rt=j.dataReady,gt=S(b,vt);Ot(i.TEXTURE_CUBE_MAP,b);let Tt;if(Mt){U&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,vt.width,vt.height);for(let at=0;at<6;at++){Tt=_t[at].mipmaps;for(let zt=0;zt<Tt.length;zt++){let Rt=Tt[zt];b.format!==Dn?Bt!==null?U?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,0,0,Rt.width,Rt.height,Bt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,Dt,Rt.width,Rt.height,0,Rt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,0,0,Rt.width,Rt.height,Bt,nt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,Dt,Rt.width,Rt.height,0,Bt,nt,Rt.data)}}}else{if(Tt=b.mipmaps,U&&mt){Tt.length>0&&gt++;let at=ae(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,at.width,at.height)}for(let at=0;at<6;at++)if(Lt){U?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,_t[at].width,_t[at].height,Bt,nt,_t[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Dt,_t[at].width,_t[at].height,0,Bt,nt,_t[at].data);for(let zt=0;zt<Tt.length;zt++){let ie=Tt[zt].image[at].image;U?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,0,0,ie.width,ie.height,Bt,nt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,Dt,ie.width,ie.height,0,Bt,nt,ie.data)}}else{U?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,nt,_t[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Dt,Bt,nt,_t[at]);for(let zt=0;zt<Tt.length;zt++){let Rt=Tt[zt];U?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,0,0,Bt,nt,Rt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,Dt,Bt,nt,Rt.image[at])}}}d(b)&&y(i.TEXTURE_CUBE_MAP),pt.__version=j.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function K(L,b,V,q,j,pt){let xt=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),et=_(V.internalFormat,xt,tt,V.normalized,V.colorSpace),Mt=n.get(b),Lt=n.get(V);if(Lt.__renderTarget=b,!Mt.__hasExternalTextures){let _t=Math.max(1,b.width>>pt),vt=Math.max(1,b.height>>pt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,pt,et,_t,vt,b.depth,0,xt,tt,null):e.texImage2D(j,pt,et,_t,vt,0,xt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),_e(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,Lt.__webglTexture,0,fe(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,Lt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(L,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let q=b.depthTexture,j=q&&q.isDepthTexture?q.type:null,pt=M(b.stencilBuffer,j),xt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(b),pt,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(b),pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,L)}else{let q=b.textures;for(let j=0;j<q.length;j++){let pt=q[j],xt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),et=_(pt.internalFormat,xt,tt,pt.normalized,pt.colorSpace);_e(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(b),et,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(b),et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(L,b,V){let q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(b.depthTexture);if(j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,b.depthTexture);let Mt=r.convert(b.depthTexture.format),Lt=r.convert(b.depthTexture.type),_t;b.depthTexture.format===Jn?_t=i.DEPTH_COMPONENT24:b.depthTexture.format===Fi&&(_t=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,b.width,b.height,0,Mt,Lt,null)}}else Y(b.depthTexture,0);let pt=j.__webglTexture,xt=fe(b),tt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,et=b.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Jn)_e(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,tt,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,et,tt,pt,0);else if(b.depthTexture.format===Fi)_e(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,tt,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,et,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(L){let b=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=q}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)lt(b.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?lt(b.__webglFramebuffer[0],L,0):lt(b.__webglFramebuffer,L,0)}else if(V){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),st(b.__webglDepthbuffer[q],L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,pt)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),st(b.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(L,b,V){let q=n.get(L);b!==void 0&&K(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ut(L)}function $t(L){let b=L.texture,V=n.get(L),q=n.get(b);L.addEventListener("dispose",v);let j=L.textures,pt=L.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,a.memory.textures++),pt){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let et=0;et<b.mipmaps.length;et++)V.__webglFramebuffer[tt][et]=i.createFramebuffer()}else V.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)V.__webglFramebuffer[tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(xt)for(let tt=0,et=j.length;tt<et;tt++){let Mt=n.get(j[tt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let et=j[tt];V.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);let Mt=r.convert(et.format,et.colorSpace),Lt=r.convert(et.type),_t=_(et.internalFormat,Mt,Lt,et.normalized,et.colorSpace,L.isXRRenderTarget===!0),vt=fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,_t,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),st(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)K(V.__webglFramebuffer[tt][et],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else K(V.__webglFramebuffer[tt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);d(b)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let tt=0,et=j.length;tt<et;tt++){let Mt=j[tt],Lt=n.get(Mt),_t=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Lt.__webglTexture),Ot(_t,Mt),K(V.__webglFramebuffer,L,Mt,i.COLOR_ATTACHMENT0+tt,_t,0),d(Mt)&&y(_t)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),Ot(tt,b),b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)K(V.__webglFramebuffer[et],L,b,i.COLOR_ATTACHMENT0,tt,et);else K(V.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,tt,0);d(b)&&y(tt),e.unbindTexture()}L.depthBuffer&&ut(L)}function It(L){let b=L.textures;for(let V=0,q=b.length;V<q;V++){let j=b[V];if(d(j)){let pt=T(L),xt=n.get(j).__webglTexture;e.bindTexture(pt,xt),y(pt),e.unbindTexture()}}}let Vt=[],Wt=[];function xe(L){if(L.samples>0){if(_e(L)===!1){let b=L.textures,V=L.width,q=L.height,j=i.COLOR_BUFFER_BIT,pt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(L),tt=b.length>1;if(tt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let et=L.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let Lt=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,j,i.NEAREST),c===!0&&(Vt.length=0,Wt.length=0,Vt.push(i.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Vt.push(pt),Wt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Mt]);let Lt=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function fe(L){return Math.min(s.maxSamples,L.samples)}function _e(L){let b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(L){let b=a.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function De(L,b){let V=L.colorSpace,q=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Mr&&V!==di&&(te.getTransfer(V)===ce?(q!==Dn||j!==_n)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",V)),b}function ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=C,this.getTextureUnits=A,this.setTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=Ft,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=K,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vx(i,t){function e(n,s=di){let r,a=te.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Be)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Lc)return i.RGB;if(n===Dn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Qr||n===jr||n===to||n===eo)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha||n===Va||n===Ga||n===no||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===io||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new oe({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new iu,d={},y=e.getContextAttributes(),T=null,_=null,M=[],S=[],R=new Ht,v=null,E=null,P=new Ye;P.viewport=new ge;let I=new Ye;I.viewport=new ge;let D=[P,I],C=new Ta,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=M[$];return it===void 0&&(it=new Ls,M[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=M[$];return it===void 0&&(it=new Ls,M[$]=it),it.getGripSpace()},this.getHand=function($){let it=M[$];return it===void 0&&(it=new Ls,M[$]=it),it.getHandSpace()};function B($){let it=S.indexOf($.inputSource);if(it===-1)return;let G=M[it];G!==void 0&&(G.update($.inputSource,$.frame,l||a),G.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<M.length;$++){let it=S[$];it!==null&&(S[$]=null,M[$].disconnect(it))}A=null,N=null,g.reset();for(let $ in d)delete d[$];if(t.setRenderTarget(T),p=null,f=null,h=null,s=null,_=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ot=null,K=null;y.depth&&(K=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=y.stencil?Fi:Jn,ot=y.stencil?Hs:Wn);let st={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(st),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Me(f.textureWidth,f.textureHeight,{format:Dn,type:_n,depthTexture:new Ci(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let G={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Me(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y($){for(let it=0;it<$.removed.length;it++){let G=$.removed[it],ot=S.indexOf(G);ot>=0&&(S[ot]=null,M[ot].disconnect(G))}for(let it=0;it<$.added.length;it++){let G=$.added[it],ot=S.indexOf(G);if(ot===-1){for(let st=0;st<M.length;st++)if(st>=S.length){S.push(G),ot=st;break}else if(S[st]===null){S[st]=G,ot=st;break}if(ot===-1)break}let K=M[ot];K&&K.connect(G)}}let H=new F,Z=new F;function Q($,it,G){H.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(G.matrixWorld);let ot=H.distanceTo(Z),K=it.projectionMatrix.elements,st=G.projectionMatrix.elements,lt=K[14]/(K[10]-1),ut=K[14]/(K[10]+1),Ft=(K[9]+1)/K[5],$t=(K[9]-1)/K[5],It=(K[8]-1)/K[0],Vt=(st[8]+1)/st[0],Wt=lt*It,xe=lt*Vt,fe=ot/(-It+Vt),_e=fe*-It;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),K[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let O=lt+fe,De=ut+fe,ae=Wt-_e,L=xe+(ot-_e),b=Ft*ut/De*O,V=$t*ut/De*O;$.projectionMatrix.makePerspective(ae,L,b,V,O,De),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let it=$.near,G=$.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(G=g.depthFar)),C.near=I.near=P.near=it,C.far=I.far=P.far=G,(A!==C.near||N!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,N=C.far),C.layers.mask=$.layers.mask|6,P.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let ot=$.parent,K=C.cameras;St(C,ot);for(let st=0;st<K.length;st++)St(K[st],ot);K.length===2?Q(C,P,I):C.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),At($,C,ot)};function At($,it,G){G===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(G.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function($){return d[$]};let jt=null;function Ot($,it){if(u=it.getViewerPose(l||a),m=it,u!==null){let G=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ot=!1;G.length!==C.cameras.length&&(C.cameras.length=0,ot=!0);for(let ut=0;ut<G.length;ut++){let Ft=G[ut],$t=null;if(p!==null)$t=p.getViewport(Ft);else{let Vt=h.getViewSubImage(f,Ft);$t=Vt.viewport,ut===0&&(t.setRenderTargetTextures(_,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(_))}let It=D[ut];It===void 0&&(It=new Ye,It.layers.enable(ut),It.viewport=new ge,D[ut]=It),It.matrix.fromArray(Ft.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Ft.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set($t.x,$t.y,$t.width,$t.height),ut===0&&(C.matrix.copy(It.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ot===!0&&C.cameras.push(It)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ut=h.getDepthInformation(G[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,s.renderState)}if(K&&K.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let ut=0;ut<G.length;ut++){let Ft=G[ut].camera;if(Ft){let $t=d[Ft];$t||($t=new Dr,d[Ft]=$t);let It=h.getCameraImage(Ft);$t.sourceTexture=It}}}}for(let G=0;G<M.length;G++){let ot=S[G],K=M[G];ot!==null&&K!==void 0&&K.update(ot,it,l||a)}jt&&jt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Gt=new of;Gt.setAnimationLoop(Ot),this.setAnimationLoop=function($){jt=$},this.dispose=function(){}}},Xx=new qt,ff=new Jt;ff.set(-1,0,0,0,1,0,0,0,1);function qx(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Uc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,y,T,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,y,T):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$e&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$e&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let y=t.get(d),T=y.envMap,_=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ff),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,y,T){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*y,g.scale.value=T*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,y){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$e&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let y=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let S=M.program;n.uniformBlockBinding(_,S)}function l(_,M){let S=s[_.id];S===void 0&&(g(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",y));let R=M.program;n.updateUBOMapping(_,R);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function u(_){let M=h();_.__bindingPointIndex=M;let S=i.createBuffer(),R=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=S.length;v<E;v++){let P=S[v];if(Array.isArray(P))for(let I=0,D=P.length;I<D;I++)p(P[I],v,I,R);else p(P,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,S,R){if(x(_,M,S,R)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){let D=E[I],C=d(D);m(D,_.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function x(_,M,S,R){let v=_.value,E=M+"_"+S;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let P=R[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(_){let M=_.uniforms,S=0,R=16;for(let E=0,P=M.length;E<P;E++){let I=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,C=I.length;D<C;D++){let A=I[D],N=Array.isArray(A.value)?A.value:[A.value];for(let B=0,k=N.length;B<k;B++){let Y=N[B],H=d(Y),Z=S%R,Q=Z%H.boundary,St=Z+Q;S+=Q,St!==0&&R-St<H.storage&&(S+=R-St),A.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,S+=H.storage}}}let v=S%R;return v>0&&(S+=R-v),_.__size=S,_.__cache={},this}function d(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Jx(){return Qn===null&&(Qn=new $i(Zx,16,16,Bi,Be),Qn.name="DFG_LUT",Qn.minFilter=Ne,Qn.magFilter=Ne,Qn.wrapS=Zn,Qn.wrapT=Zn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var _l=class{constructor(t={}){let{canvas:e=Ih(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=_n}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=p,g=new Set([Na,Da,La]),d=new Set([_n,Wn,ks,Hs,Pa,Ia]),y=new Uint32Array(4),T=new Int32Array(4),_=new F,M=null,S=null,R=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,D=null,C=null,A=null,N=null;this._outputColorSpace=Te;let B=0,k=0,Y=null,H=-1,Z=null,Q=new ge,St=new ge,At=null,jt=new dt(0),Ot=0,Gt=e.width,$=e.height,it=1,G=null,ot=null,K=new ge(0,0,Gt,$),st=new ge(0,0,Gt,$),lt=!1,ut=new Ds,Ft=!1,$t=!1,It=new qt,Vt=new F,Wt=new ge,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function _e(){return Y===null?it:1}let O=n;function De(w,z){return e.getContext(w,z)}let ae,L,b,V,q,j,pt,xt,tt,et,Mt,Lt,_t,vt,Bt,nt,Dt,U,mt,rt,gt,Tt,at;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",yn,!1),O===null){let z="webgl2";if(O=De(z,w),O===null)throw De(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(w){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Yt("WebGLRenderer: "+w.message),w}function zt(){ae=new ng(O),ae.init(),gt=new Vx(O,ae),L=new qm(O,ae,t,gt),b=new kx(O,ae),L.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),C=O.createFramebuffer(),A=O.createFramebuffer(),N=O.createFramebuffer(),V=new rg(O),q=new wx,j=new Hx(O,ae,b,q,L,gt,V),pt=new eg(P),xt=new ap(O),Tt=new Wm(O,xt),tt=new ig(O,xt,V,Tt),et=new ag(O,tt,xt,Tt,V),U=new og(O,L,j),Bt=new Ym(q),Mt=new Ex(P,pt,ae,L,Tt,Bt),Lt=new qx(P,q),_t=new Rx,vt=new Nx(ae),Dt=new Gm(P,pt,b,et,m,c),nt=new zx(P,et,L),at=new Yx(O,V,L,b),mt=new Xm(O,ae,V),rt=new sg(O,ae,V),V.programs=Mt.programs,P.capabilities=L,P.extensions=ae,P.properties=q,P.renderLists=_t,P.shadowMap=nt,P.state=b,P.info=V}x!==_n&&(E=new cg(x,e.width,e.height,o,s,r));let Rt=new su(P,O);this.xr=Rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(Gt,$,!1))},this.getSize=function(w){return w.set(Gt,$)},this.setSize=function(w,z,J=!0){if(Rt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=w,$=z,e.width=Math.floor(w*it),e.height=Math.floor(z*it),J===!0&&(e.style.width=w+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Gt*it,$*it).floor()},this.setDrawingBufferSize=function(w,z,J){Gt=w,$=z,it=J,e.width=Math.floor(w*J),e.height=Math.floor(z*J),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(x===_n){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,z,J,W){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,z,J,W),b.viewport(Q.copy(K).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,z,J,W){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,z,J,W),b.scissor(St.copy(st).multiplyScalar(it).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){b.setScissorTest(lt=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,J=!0){let W=0;if(w){let X=!1;if(Y!==null){let wt=Y.texture.format;X=g.has(wt)}if(X){let wt=Y.texture.type,Pt=d.has(wt),Et=Dt.getClearColor(),Nt=Dt.getClearAlpha(),kt=Et.r,Qt=Et.g,ee=Et.b;Pt?(y[0]=kt,y[1]=Qt,y[2]=ee,y[3]=Nt,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=kt,T[1]=Qt,T[2]=ee,T[3]=Nt,O.clearBufferiv(O.COLOR,0,T))}else W|=O.COLOR_BUFFER_BIT}z&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Dt.dispose(),_t.dispose(),vt.dispose(),q.dispose(),pt.dispose(),et.dispose(),Tt.dispose(),at.dispose(),Mt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",hr),Rt.removeEventListener("sessionend",fr),Xe.stop()};function ie(w){w.preventDefault(),Nc("WebGLRenderer: Context Lost."),I=!0}function le(){Nc("WebGLRenderer: Context Restored."),I=!1;let w=V.autoReset,z=nt.enabled,J=nt.autoUpdate,W=nt.needsUpdate,X=nt.type;zt(),V.autoReset=w,nt.enabled=z,nt.autoUpdate=J,nt.needsUpdate=W,nt.type=X}function yn(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fn(w){let z=w.target;z.removeEventListener("dispose",fn),ur(z)}function ur(w){Ol(w),q.remove(w)}function Ol(w){let z=q.get(w).programs;z!==void 0&&(z.forEach(function(J){Mt.releaseProgram(J)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,J,W,X,wt){z===null&&(z=xe);let Pt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Et=kl(w,z,J,W,X);b.setMaterial(W,Pt);let Nt=J.index,kt=1;if(W.wireframe===!0){if(Nt=tt.getWireframeAttribute(J),Nt===void 0)return;kt=2}let Qt=J.drawRange,ee=J.attributes.position,Ut=Qt.start*kt,he=(Qt.start+Qt.count)*kt;wt!==null&&(Ut=Math.max(Ut,wt.start*kt),he=Math.min(he,(wt.start+wt.count)*kt)),Nt!==null?(Ut=Math.max(Ut,0),he=Math.min(he,Nt.count)):ee!=null&&(Ut=Math.max(Ut,0),he=Math.min(he,ee.count));let Re=he-Ut;if(Re<0||Re===1/0)return;Tt.setup(X,W,Et,J,Nt);let ve,pe=mt;if(Nt!==null&&(ve=xt.get(Nt),pe=rt,pe.setIndex(ve)),X.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*_e()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if(X.isLine){let Qe=W.linewidth;Qe===void 0&&(Qe=1),b.setLineWidth(Qe*_e()),X.isLineSegments?pe.setMode(O.LINES):X.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else X.isPoints?pe.setMode(O.POINTS):X.isSprite&&pe.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Qe=X._multiDrawStarts,Ct=X._multiDrawCounts,an=X._multiDrawCount,se=Nt?xt.get(Nt).bytesPerElement:1,Cn=q.get(W).currentProgram.getUniforms();for(let qn=0;qn<an;qn++)Cn.setValue(O,"_gl_DrawID",qn),pe.render(Qe[qn]/se,Ct[qn])}else if(X.isInstancedMesh)pe.renderInstances(Ut,Re,X.count);else if(J.isInstancedBufferGeometry){let Qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,Qe);pe.renderInstances(Ut,Re,Ct)}else pe.render(Ut,Re)};function bo(w,z,J,W){D!==null&&w.isNodeMaterial&&D.setObject(W,w),Ft===!0&&Bt.setState(w,J,!1),w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,us(w,z,W),w.side=Ni,w.needsUpdate=!0,us(w,z,W),w.side=Ge):us(w,z,W)}this.compile=function(w,z,J=null){J===null&&(J=w),D!==null&&D.renderStart(w,z,J),S=vt.get(J),S.init(z),v.push(S),J.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),$t=this.localClippingEnabled,Ft=Bt.init(this.clippingPlanes,$t),Ft===!0&&Bt.setGlobalState(this.clippingPlanes,z),D!==null&&nt.render(S.state.shadowsArray,J,z);let W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let wt=X.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let Et=wt[Pt];bo(Et,J,z,X),W.add(Et)}else bo(wt,J,z,X),W.add(wt)}),S=v.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(w,z,J=null){let W=this.compile(w,z,J);return new Promise(X=>{function wt(){if(W.forEach(function(Pt){let Nt=q.get(Pt).currentProgram;(Nt===void 0||Nt.isReady())&&W.delete(Pt)}),W.size===0){X(w);return}setTimeout(wt,10)}ae.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Rn=null;function Tu(w){Rn&&Rn(w)}function hr(){Xe.stop()}function fr(){Xe.start()}let Xe=new of;Xe.setAnimationLoop(Tu),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){Rn=w,Rt.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},Rt.addEventListener("sessionstart",hr),Rt.addEventListener("sessionend",fr),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(w,z);let J=Rt.enabled===!0&&Rt.isPresenting===!0,W=E!==null&&(Y===null||J)&&E.begin(P,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(z),z=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,z,Y),S=vt.get(w,v.length),S.init(z),S.state.textureUnits=j.getTextureUnits(),v.push(S),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ut.setFromProjectionMatrix(It,Hn,z.reversedDepth),$t=this.localClippingEnabled,Ft=Bt.init(this.clippingPlanes,$t),M=_t.get(w,R.length),M.init(),R.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&cs(Pt,z,-1/0,P.sortObjects)}cs(w,z,0,P.sortObjects),M.finish(),D!==null&&D.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(G,ot),fe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,fe&&Dt.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ft===!0&&Bt.beginShadows();let X=S.state.shadowsArray;if(nt.render(X,w,z),Ft===!0&&Bt.endShadows(),(W&&E.hasRenderPass())===!1){let Pt=M.opaque,Et=M.transmissive;if(S.setupLights(),z.isArrayCamera){let Nt=z.cameras;if(Et.length>0)for(let kt=0,Qt=Nt.length;kt<Qt;kt++){let ee=Nt[kt];Gi(Pt,Et,w,ee)}fe&&Dt.render(w);for(let kt=0,Qt=Nt.length;kt<Qt;kt++){let ee=Nt[kt];Fn(M,w,ee,ee.viewport)}}else Et.length>0&&Gi(Pt,Et,w,z),fe&&Dt.render(w),Fn(M,w,z)}Y!==null&&k===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),W&&E.end(P),w.isScene===!0&&w.onAfterRender(P,w,z),Tt.resetDefaultState(),H=-1,Z=null,v.pop(),v.length>0?(S=v[v.length-1],j.setTextureUnits(S.state.textureUnits),Ft===!0&&Bt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,D!==null&&D.renderEnd()};function cs(w,z,J,W){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ut)){W&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);let Pt=et.update(w),Et=w.material;Et.visible&&M.push(w,Pt,Et,J,Wt.z,null,z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ut))){let Pt=et.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Wt.copy(Pt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(Et)){let Nt=Pt.groups;for(let kt=0,Qt=Nt.length;kt<Qt;kt++){let ee=Nt[kt],Ut=Et[ee.materialIndex];Ut&&Ut.visible&&M.push(w,Pt,Ut,J,Wt.z,ee,z)}}else Et.visible&&M.push(w,Pt,Et,J,Wt.z,null,z)}}let wt=w.children;for(let Pt=0,Et=wt.length;Pt<Et;Pt++)cs(wt[Pt],z,J,W)}function Fn(w,z,J,W){let{opaque:X,transmissive:wt,transparent:Pt}=w;S.setupLightsView(J),Ft===!0&&Bt.setGlobalState(P.clippingPlanes,J),W&&b.viewport(Q.copy(W)),X.length>0&&dn(X,z,J),wt.length>0&&dn(wt,z,J),Pt.length>0&&dn(Pt,z,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Gi(w,z,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let Ut=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Me(1,1,{generateMipmaps:!0,type:Ut?Be:_n,minFilter:In,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let wt=S.state.transmissionRenderTarget[W.id],Pt=W.viewport||Q;wt.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let Et=P.getRenderTarget(),Nt=P.getActiveCubeFace(),kt=P.getActiveMipmapLevel();P.setRenderTarget(wt),P.getClearColor(jt),Ot=P.getClearAlpha(),Ot<1&&P.setClearColor(16777215,.5),P.clear(),fe&&Dt.render(J);let Qt=P.toneMapping;P.toneMapping=Gn;let ee=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),Ft===!0&&Bt.setGlobalState(P.clippingPlanes,W),dn(w,J,W),j.updateMultisampleRenderTarget(wt),j.updateRenderTargetMipmap(wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let he=0,Re=z.length;he<Re;he++){let ve=z[he],{object:pe,geometry:Qe,material:Ct,group:an}=ve;if(Ct.side===Ge&&pe.layers.test(W.layers)){let se=Ct.side;Ct.side=$e,Ct.needsUpdate=!0,ni(pe,J,W,Qe,Ct,an),Ct.side=se,Ct.needsUpdate=!0,Ut=!0}}Ut===!0&&(j.updateMultisampleRenderTarget(wt),j.updateRenderTargetMipmap(wt))}P.setRenderTarget(Et,Nt,kt),P.setClearColor(jt,Ot),ee!==void 0&&(W.viewport=ee),P.toneMapping=Qt}function dn(w,z,J){let W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,wt=w.length;X<wt;X++){let Pt=w[X],{object:Et,geometry:Nt,group:kt}=Pt,Qt=Pt.material;Qt.allowOverride===!0&&W!==null&&(Qt=W),Et.layers.test(J.layers)&&ni(Et,z,J,Nt,Qt,kt)}}function ni(w,z,J,W,X,wt){D!==null&&X.isNodeMaterial&&D.setObject(w,X),w.onBeforeRender(P,z,J,W,X,wt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,z,J,W,w,wt),X.transparent===!0&&X.side===Ge&&X.forceSinglePass===!1?(X.side=$e,X.needsUpdate=!0,P.renderBufferDirect(J,z,W,X,w,wt),X.side=Ni,X.needsUpdate=!0,P.renderBufferDirect(J,z,W,X,w,wt),X.side=Ge):P.renderBufferDirect(J,z,W,X,w,wt),w.onAfterRender(P,z,J,W,X,wt)}function us(w,z,J){z.isScene!==!0&&(z=xe);let W=q.get(w),X=S.state.lights,wt=S.state.shadowsArray,Pt=X.state.version,Et=Mt.getParameters(w,X.state,wt,z,J,S.state.lightProbeGridArray),Nt=Mt.getProgramCacheKey(Et),kt=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;let Qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=pt.get(w.envMap||W.environment,Qt),W.envMapRotation=W.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",fn),kt=new Map,W.programs=kt);let ee=kt.get(Nt);if(ee!==void 0){if(W.currentProgram===ee&&W.lightsStateVersion===Pt)return Eo(w,Et),ee}else Et.uniforms=Mt.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,Et),w.onBeforeCompile(Et,P),ee=Mt.acquireProgram(Et,Nt),kt.set(Nt,ee),W.uniforms=Et.uniforms;let Ut=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),Eo(w,Et),W.needsLights=vi(w),W.lightsStateVersion=Pt,W.needsLights&&(Ut.ambientLightColor.value=X.state.ambient,Ut.lightProbe.value=X.state.probe,Ut.sunLights.value=X.state.sun,Ut.sunLightShadows.value=X.state.sunShadow,Ut.directionalLights.value=X.state.directional,Ut.directionalLightShadows.value=X.state.directionalShadow,Ut.spotLights.value=X.state.spot,Ut.spotLightShadows.value=X.state.spotShadow,Ut.rectAreaLights.value=X.state.rectArea,Ut.ltc_1.value=X.state.rectAreaLTC1,Ut.ltc_2.value=X.state.rectAreaLTC2,Ut.pointLights.value=X.state.point,Ut.pointLightShadows.value=X.state.pointShadow,Ut.hemisphereLights.value=X.state.hemi,Ut.sunShadowMatrix.value=X.state.sunShadowMatrix,Ut.sunShadowCascade.value=X.state.sunShadowCascade,Ut.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ut.spotLightMatrix.value=X.state.spotLightMatrix,Ut.spotLightMap.value=X.state.spotLightMap,Ut.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=ee,W.uniformsList=null,ee}function To(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Xs.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Eo(w,z){let J=q.get(w);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function zl(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let J=0,W=w.length;J<W;J++){let X=w[J];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function kl(w,z,J,W,X){z.isScene!==!0&&(z=xe),j.resetTextureUnits();let wt=z.fog,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,Et=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:te.workingColorSpace,Nt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,kt=pt.get(W.envMap||Pt,Nt),Qt=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ee=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!J.morphAttributes.position,he=!!J.morphAttributes.normal,Re=!!J.morphAttributes.color,ve=Gn;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ve=P.toneMapping);let pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qe=pe!==void 0?pe.length:0,Ct=q.get(W),an=S.state.lights;if(Ft===!0&&($t===!0||w!==Z)){let me=w===Z&&W.id===H;Bt.setState(W,w,me)}let se=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==an.state.version||Ct.outputColorSpace!==Et||X.isBatchedMesh&&Ct.batching===!1||!X.isBatchedMesh&&Ct.batching===!0||X.isBatchedMesh&&Ct.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ct.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ct.instancing===!1||!X.isInstancedMesh&&Ct.instancing===!0||X.isSkinnedMesh&&Ct.skinning===!1||!X.isSkinnedMesh&&Ct.skinning===!0||X.isInstancedMesh&&Ct.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ct.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ct.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ct.instancingMorph===!1&&X.morphTexture!==null||Ct.envMap!==kt||W.fog===!0&&Ct.fog!==wt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Bt.numPlanes||Ct.numIntersection!==Bt.numIntersection)||Ct.vertexAlphas!==Qt||Ct.vertexTangents!==ee||Ct.morphTargets!==Ut||Ct.morphNormals!==he||Ct.morphColors!==Re||Ct.toneMapping!==ve||Ct.morphTargetsCount!==Qe||!!Ct.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Ct.__version=W.version);let Cn=Ct.currentProgram;se===!0&&(Cn=us(W,z,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Cn,Ct));let qn=!1,yi=!1,hs=!1,de=Cn.getUniforms(),Ee=Ct.uniforms;if(b.useProgram(Cn.program)&&(qn=!0,yi=!0,hs=!0),W.id!==H&&(H=W.id,yi=!0),Ct.needsLights){let me=zl(S.state.lightProbeGridArray,X);Ct.lightProbeGrid!==me&&(Ct.lightProbeGrid=me,yi=!0)}if(qn||Z!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),de.setValue(O,"projectionMatrix",w.projectionMatrix),de.setValue(O,"viewMatrix",w.matrixWorldInverse);let Si=de.map.cameraPosition;Si!==void 0&&Si.setValue(O,Vt.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&de.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,yi=!0,hs=!0)}if(Ct.needsLights&&(an.state.sunShadowMap.length>0&&de.setValue(O,"sunShadowMap",an.state.sunShadowMap,j),an.state.directionalShadowMap.length>0&&de.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,j),an.state.spotShadowMap.length>0&&de.setValue(O,"spotShadowMap",an.state.spotShadowMap,j),an.state.pointShadowMap.length>0&&de.setValue(O,"pointShadowMap",an.state.pointShadowMap,j)),X.isSkinnedMesh){de.setOptional(O,X,"bindMatrix"),de.setOptional(O,X,"bindMatrixInverse");let me=X.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),de.setValue(O,"boneTexture",me.boneTexture,j))}X.isBatchedMesh&&(de.setOptional(O,X,"batchingTexture"),de.setValue(O,"batchingTexture",X._matricesTexture,j),de.setOptional(O,X,"batchingIdTexture"),de.setValue(O,"batchingIdTexture",X._indirectTexture,j),de.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&de.setValue(O,"batchingColorTexture",X._colorsTexture,j));let Mi=J.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&U.update(X,J,Cn),(yi||Ct.receiveShadow!==X.receiveShadow)&&(Ct.receiveShadow=X.receiveShadow,de.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Ee.envMapIntensity.value=z.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Jx()),yi){if(de.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Hl(Ee,hs),wt&&W.fog===!0&&Lt.refreshFogUniforms(Ee,wt),Lt.refreshMaterialUniforms(Ee,W,it,$,S.state.transmissionRenderTarget[w.id]),Ct.needsLights&&Ct.lightProbeGrid){let me=Ct.lightProbeGrid;Ee.probesSH.value=me.texture,Ee.probesMin.value.copy(me.boundingBox.min),Ee.probesMax.value.copy(me.boundingBox.max),Ee.probesResolution.value.copy(me.resolution)}Xs.upload(O,To(Ct),Ee,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xs.upload(O,To(Ct),Ee,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(O,"center",X.center),de.setValue(O,"modelViewMatrix",X.modelViewMatrix),de.setValue(O,"normalMatrix",X.normalMatrix),de.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let me=W.uniformsGroups;for(let Si=0,fs=me.length;Si<fs;Si++){let Eu=me[Si];at.update(Eu,Cn),at.bind(Eu,Cn)}}return Cn}function Hl(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function vi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,z,J){let W=q.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=z,q.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let J=q.get(w);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,J=0){Y=w,B=z,k=J;let W=null,X=!1,wt=!1;if(w){let Et=q.get(w);if(Et.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(O.FRAMEBUFFER,Et.__webglFramebuffer),Q.copy(w.viewport),St.copy(w.scissor),At=w.scissorTest,b.viewport(Q),b.scissor(St),b.setScissorTest(At),H=-1;return}else if(Et.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(Et.__hasExternalTextures)j.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qt=w.depthTexture;if(Et.__boundDepthTexture!==Qt){if(Qt!==null&&q.has(Qt)&&(w.width!==Qt.image.width||w.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(wt=!0);let kt=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?W=kt[z][J]:W=kt[z],X=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?W=q.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[J]:W=kt,Q.copy(w.viewport),St.copy(w.scissor),At=w.scissorTest}else Q.copy(K).multiplyScalar(it).floor(),St.copy(st).multiplyScalar(it).floor(),At=lt;if(J!==0&&(W=C),b.bindFramebuffer(O.FRAMEBUFFER,W)&&b.drawBuffers(w,W),b.viewport(Q),b.scissor(St),b.setScissorTest(At),X){let Et=q.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,J)}else if(wt){let Et=z;for(let Nt=0;Nt<w.textures.length;Nt++){let kt=q.get(w.textures[Nt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,J,Et)}}else if(w!==null&&J!==0){let Et=q.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Et.__webglTexture,J)}H=-1};function qe(w){let z=q.get(w);return(z.__readFormat!==w.format||z.__readType!==w.type)&&(z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=L.textureFormatReadable(w.format),z.__typeReadable=L.textureTypeReadable(w.type)),z}this.readRenderTargetPixels=function(w,z,J,W,X,wt,Pt,Et=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){b.bindFramebuffer(O.FRAMEBUFFER,Nt);try{let kt=w.textures[Et],Qt=kt.format,ee=kt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Et);let Ut=qe(kt);if(Ut.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-W&&J>=0&&J<=w.height-X&&O.readPixels(z,J,W,X,gt.convert(Qt),gt.convert(ee),wt)}finally{let kt=Y!==null?q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,z,J,W,X,wt,Pt,Et=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt)if(z>=0&&z<=w.width-W&&J>=0&&J<=w.height-X){b.bindFramebuffer(O.FRAMEBUFFER,Nt);let kt=w.textures[Et],Qt=kt.format,ee=kt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Et);let Ut=qe(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.bufferData(O.PIXEL_PACK_BUFFER,wt.byteLength,O.STREAM_READ),O.readPixels(z,J,W,X,gt.convert(Qt),gt.convert(ee),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Re=Y!==null?q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,Re);let ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Dh(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,wt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(he),O.deleteSync(ve),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,J=0){let W=Math.pow(2,-J),X=Math.floor(w.image.width*W),wt=Math.floor(w.image.height*W),Pt=z!==null?z.x:0,Et=z!==null?z.y:0;j.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Pt,Et,X,wt),b.unbindTexture()},this.copyTextureToTexture=function(w,z,J=null,W=null,X=0,wt=0){let Pt,Et,Nt,kt,Qt,ee,Ut,he,Re,ve=w.isCompressedTexture?w.mipmaps[wt]:w.image;if(J!==null)Pt=J.max.x-J.min.x,Et=J.max.y-J.min.y,Nt=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,Qt=J.min.y,ee=J.isBox3?J.min.z:0;else{let Ee=Math.pow(2,-X);Pt=Math.floor(ve.width*Ee),Et=Math.floor(ve.height*Ee),w.isDataArrayTexture?Nt=ve.depth:w.isData3DTexture?Nt=Math.floor(ve.depth*Ee):Nt=1,kt=0,Qt=0,ee=0}W!==null?(Ut=W.x,he=W.y,Re=W.z):(Ut=0,he=0,Re=0);let pe=gt.convert(z.format),Qe=gt.convert(z.type),Ct;z.isData3DTexture?(j.setTexture3D(z,0),Ct=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Ct=O.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Ct=O.TEXTURE_2D),b.activeTexture(O.TEXTURE0),b.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let an=b.getParameter(O.UNPACK_ROW_LENGTH),se=b.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(O.UNPACK_SKIP_PIXELS),qn=b.getParameter(O.UNPACK_SKIP_ROWS),yi=b.getParameter(O.UNPACK_SKIP_IMAGES);b.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),b.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),b.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),b.pixelStorei(O.UNPACK_SKIP_IMAGES,ee);let hs=w.isDataArrayTexture||w.isData3DTexture,de=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Ee=q.get(w),Mi=q.get(z),me=q.get(Ee.__renderTarget),Si=q.get(Mi.__renderTarget);b.bindFramebuffer(O.READ_FRAMEBUFFER,me.__webglFramebuffer),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let fs=0;fs<Nt;fs++)hs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(w).__webglTexture,X,ee+fs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(z).__webglTexture,wt,Re+fs)),O.blitFramebuffer(kt,Qt,Pt,Et,Ut,he,Pt,Et,O.DEPTH_BUFFER_BIT,O.NEAREST);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||q.has(w)){let Ee=q.get(w),Mi=q.get(z);b.bindFramebuffer(O.READ_FRAMEBUFFER,A),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let me=0;me<Nt;me++)hs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.__webglTexture,X,ee+me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ee.__webglTexture,X),de?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mi.__webglTexture,wt,Re+me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mi.__webglTexture,wt),X!==0?O.blitFramebuffer(kt,Qt,Pt,Et,Ut,he,Pt,Et,O.COLOR_BUFFER_BIT,O.NEAREST):de?O.copyTexSubImage3D(Ct,wt,Ut,he,Re+me,kt,Qt,Pt,Et):O.copyTexSubImage2D(Ct,wt,Ut,he,kt,Qt,Pt,Et);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ct,wt,Ut,he,Re,Pt,Et,Nt,pe,Qe,ve.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,wt,Ut,he,Re,Pt,Et,Nt,pe,ve.data):O.texSubImage3D(Ct,wt,Ut,he,Re,Pt,Et,Nt,pe,Qe,ve):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,wt,Ut,he,Pt,Et,pe,Qe,ve.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,wt,Ut,he,ve.width,ve.height,pe,ve.data):O.texSubImage2D(O.TEXTURE_2D,wt,Ut,he,Pt,Et,pe,Qe,ve);b.pixelStorei(O.UNPACK_ROW_LENGTH,an),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(O.UNPACK_SKIP_ROWS,qn),b.pixelStorei(O.UNPACK_SKIP_IMAGES,yi),wt===0&&z.generateMipmaps&&O.generateMipmap(Ct),b.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){B=0,k=0,Y=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var we=(i,t,e)=>i<t?t:i>e?e:i,Se=(i,t,e)=>i+(t-i)*e,Sl=i=>i*i*(3-2*i),vn=(i,t,e)=>{let n=we((e-i)/(t-i),0,1);return n*n*(3-2*n)},df=1337;function pf(i){df=i|0}function $x(i){return i=i^df|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var gi=(i,t)=>$x(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function mi(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return Se(gi(e,t),gi(e+1,t),s)}var bl=(i,t=0)=>mi(i,t)*.55+mi(i*2.03,t+7)*.3+mi(i*4.1,t+13)*.15;function un(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var Ml=new dt,yt=i=>(Ml.set(i),[Ml.r,Ml.g,Ml.b]),mf=(i,t,e)=>[Se(i[0],t[0],e),Se(i[1],t[1],e),Se(i[2],t[2],e)],En=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var ou=["city","sakura","coast","country"],lo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5}},ru=1500,gf=260,Oi=0,au=0;function _f(i){au=Math.max(0,ou.indexOf(i))}function El(i){let t=Math.floor(i/ru),e=i-t*ru,n=Sl(we((e-(ru-gf))/gf,0,1));return{a:ou[((t+au)%4+4)%4],b:ou[((t+au+1)%4+4)%4],t:n}}function nn(i){let t=El(i),e={city:0,sakura:0,coast:0,country:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var Ae=i=>{let t=El(i);return t.t<.5?t.a:t.b};function wn(i,t){let e=El(i);return Se(lo[e.a][t],lo[e.b][t],e.t)}var Ys=650,Zs=375,Js=i=>i*Ys+Zs;function co(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=nn(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}function uo(i){let t=Math.round((i-Zs)/Ys),e=Js(t);return co(e)?{k:t,s:e}:null}function Kx(i){let t=uo(i);return t?1-vn(8,45,Math.abs(i-t.s)):0}var ti=2,Tl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(mi(t/300,11)-.5)*2+(mi(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*wn(t,"curv")*(1-Kx(t))}elevRaw(t){return wn(t,"base")+wn(t,"hill")*(bl(t/380,29)-.5)*2}elev(t){let e=uo(t);if(!e)return this.elevRaw(t);let n=1-vn(8,45,Math.abs(t-e.s));return n>0?Se(this.elevRaw(t),this.elevRaw(e.s),n):this.elevRaw(t)}ensure(t){for(;(this.X.length-1)*ti<t+ti;){let e=this.X.length-1,n=e*ti,s=this.curv(n+ti/2)*ti,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*ti),this.Z.push(this.Z[e]+Math.cos(r+s/2)*ti),this.H.push(r+s),this.Y.push(this.elev(n+ti))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+ti);let n=t/ti,s=Math.floor(n),r=n-s;e.x=Se(this.X[s],this.X[s+1],r),e.z=Se(this.Z[s],this.Z[s+1],r),e.y=Se(this.Y[s],this.Y[s+1],r),e.h=Se(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),o=Math.cos(e.h);return e.fx=a,e.fz=o,e.rx=-o,e.rz=a,e}};function xf(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+vn(45,190,r)*16*(.45+.55*mi(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+vn(s+1.5,80,r)*24*(.5+.5*mi(t/170,5))+vn(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Se(1.25,-1.6,a/26):Se(-1.6,-7,we((a-26)/20,0,1)))-n}case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+vn(135,215,r)*36*(.4+.6*mi(t/210+(e>0?9:0),7))}}function lu(i,t,e,n){let s=El(i),r=xf(s.a,i,t,e,n);return s.t>0?Se(r,xf(s.b,i,t,e,n),s.t):r}var ho=new F,wl=new F,Qx=[1,1,1],We=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.P=[],this.N=[],this.U=[],this.Cl=[],this.m=new qt,this.nm=new Jt,this.e=this.m.elements,this.ne=this.nm.elements}get count(){return this.P.length/3}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,o,c,l){let u=this.e,h=this.ne;this.P.push(u[0]*t+u[4]*e+u[8]*n+u[12],u[1]*t+u[5]*e+u[9]*n+u[13],u[2]*t+u[6]*e+u[10]*n+u[14]);let f=h[0]*s+h[3]*r+h[6]*a,p=h[1]*s+h[4]*r+h[7]*a,m=h[2]*s+h[5]*r+h[8]*a,x=1/(Math.sqrt(f*f+p*p+m*m)||1);if(this.N.push(f*x,p*x,m*x),this.hasUV&&this.U.push(o,c),this.hasColor){let g=l||Qx;this.Cl.push(g[0],g[1],g[2])}}quad(t,e,n,s,r,a){ho.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),wl.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),wl.lengthSq()<1e-12&&wl.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),ho.cross(wl).normalize();let o=ho.x,c=ho.y,l=ho.z,u=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(e[0],e[1],e[2],o,c,l,h,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,p,r),this.vtx(t[0],t[1],t[2],o,c,l,u,f,r),this.vtx(n[0],n[1],n[2],o,c,l,h,p,r),this.vtx(s[0],s[1],s[2],o,c,l,u,p,r)}box(t,e,n,s,r,a,o,c=null,l=null){let u=c||{},h=l||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||o,u.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||o,u.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||o,u.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||o,u.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||o,u.py),l&&l.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||o,u.ny)}cyl(t,e,n,s,r,a,o,c,l=!0){let u=(s-r)/a;for(let h=0;h<o;h++){let f=h/o*Math.PI*2,p=(h+1)/o*Math.PI*2,m=Math.cos(f),x=Math.sin(f),g=Math.cos(p),d=Math.sin(p),y=[t+m*s,e,n+x*s],T=[t+g*s,e,n+d*s],_=[t+g*r,e+a,n+d*r],M=[t+m*r,e+a,n+x*r];this.vtx(y[0],y[1],y[2],m,u,x,0,0,c),this.vtx(M[0],M[1],M[2],m,u,x,0,0,c),this.vtx(_[0],_[1],_[2],g,u,d,0,0,c),this.vtx(y[0],y[1],y[2],m,u,x,0,0,c),this.vtx(_[0],_[1],_[2],g,u,d,0,0,c),this.vtx(T[0],T[1],T[2],g,u,d,0,0,c),l&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c),this.vtx(M[0],M[1],M[2],0,1,0,0,0,c))}}rod(t,e,n,s,r,a){let o=e[0]-t[0],c=e[1]-t[1],l=e[2]-t[2],u=Math.hypot(o,c,l);o/=u,c/=u,l/=u;let h=0,f=1,p=0;Math.abs(c)>.99&&(h=1,f=0);let m=c*p-l*f,x=l*h-o*p,g=o*f-c*h,d=Math.hypot(m,x,g);m/=d,x/=d,g/=d;let y=x*l-g*c,T=g*o-m*l,_=m*c-x*o;for(let M=0;M<r;M++){let S=M/r*Math.PI*2,R=(M+1)/r*Math.PI*2,v=Math.cos(S),E=Math.sin(S),P=Math.cos(R),I=Math.sin(R),D=m*v+y*E,C=x*v+T*E,A=g*v+_*E,N=m*P+y*I,B=x*P+T*I,k=g*P+_*I,Y=[t[0]+D*n,t[1]+C*n,t[2]+A*n],H=[t[0]+N*n,t[1]+B*n,t[2]+k*n],Z=[e[0]+N*s,e[1]+B*s,e[2]+k*s],Q=[e[0]+D*s,e[1]+C*s,e[2]+A*s];this.vtx(Y[0],Y[1],Y[2],D,C,A,0,0,a),this.vtx(H[0],H[1],H[2],N,B,k,0,0,a),this.vtx(Z[0],Z[1],Z[2],N,B,k,0,0,a),this.vtx(Y[0],Y[1],Y[2],D,C,A,0,0,a),this.vtx(Z[0],Z[1],Z[2],N,B,k,0,0,a),this.vtx(Q[0],Q[1],Q[2],D,C,A,0,0,a)}return u}blob(t,e,n,s,r,a,o=0,c=1){let l=vf[o%vf.length],u=l.attributes.position.array,h=l.attributes.normal.array,f=l.userData.disp;for(let p=0;p<u.length;p+=3){let m=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),g=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+u[p]*s*m,e+u[p+1]*s*m*c,n+u[p+2]*s*m,h[p],h[p+1],h[p+2],0,0,g)}}wire(t,e,n,s,r,a=10){let o=t;for(let c=1;c<=a;c++){let l=c/a,u=[t[0]+(e[0]-t[0])*l,t[1]+(e[1]-t[1])*l-n*4*l*(1-l),t[2]+(e[2]-t[2])*l];this.rod(o,u,s,s,3,r),o=u}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,o,c]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],o,c,s[a])}toArrays(){return{P:new Float32Array(this.P),N:new Float32Array(this.N),C:this.hasColor?new Float32Array(this.Cl):null,U:this.hasUV?new Float32Array(this.U):null}}stamp(t,e){if(!t||!t.P.length)return;this.setM(e);let n=this.e,s=this.ne,r=t.P,a=t.N,o=t.C,c=t.U,l=this.P,u=this.N;for(let h=0;h<r.length;h+=3){let f=r[h],p=r[h+1],m=r[h+2];l.push(n[0]*f+n[4]*p+n[8]*m+n[12],n[1]*f+n[5]*p+n[9]*m+n[13],n[2]*f+n[6]*p+n[10]*m+n[14]);let x=a[h],g=a[h+1],d=a[h+2],y=s[0]*x+s[3]*g+s[6]*d,T=s[1]*x+s[4]*g+s[7]*d,_=s[2]*x+s[5]*g+s[8]*d,M=1/(Math.sqrt(y*y+T*T+_*_)||1);u.push(y*M,T*M,_*M)}if(this.hasColor)if(o)for(let h=0;h<o.length;h++)this.Cl.push(o[h]);else for(let h=0;h<r.length;h++)this.Cl.push(1);if(this.hasUV)if(c)for(let h=0;h<c.length;h++)this.U.push(c[h]);else for(let h=0;h<r.length/3*2;h++)this.U.push(0)}build(){if(!this.P.length)return null;let t=new ue;return t.setAttribute("position",new Zt(this.P,3)),t.setAttribute("normal",new Zt(this.N,3)),this.hasUV&&t.setAttribute("uv",new Zt(this.U,2)),this.hasColor&&t.setAttribute("color",new Zt(this.Cl,3)),t.computeBoundingSphere(),t}},vf=[0,1,2,3].map(i=>{let t=new Ur(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,o)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(o*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});Kt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var ss=4200,sn={uSkyHor:{value:new dt(.7,.8,.9)},uSkyZen:{value:new dt(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ht}};function Sf(i){let t=new $i(new Uint8Array(i),i.length,1,Vs);return t.minFilter=t.magFilter=Ie,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Xn=Sf([16,16,16,70,200,255,255,255]),yf=Sf([28,40,70,130,200,240,255,255]),zi=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.,0.)), u.x), mix(hash12(i+vec2(0.,1.)), hash12(i+vec2(1.,1.)), u.x), u.y); }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,jx=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,t_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`;function fo(i,t="",e=""){i.uniforms.uOrigin=sn.uOrigin,i.uniforms.uCloudSh=sn.uCloudSh,i.uniforms.uTime=sn.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;
${zi}${jx}${t}`).replace("#include <opaque_fragment>",`${t_}${e}
#include <opaque_fragment>`)}var e_=`
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
`,n_=`
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
}`;function i_(){let i=new Je({color:16777215,gradientMap:Xn});return i.onBeforeCompile=t=>{t.uniforms.uSkyHor=sn.uSkyHor,t.uniforms.uSkyZen=sn.uSkyZen,t.uniforms.uWet=sn.uWet,t.uniforms.uNight=sn.uNight,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vWY = (modelMatrix * vec4(position, 1.0)).y;`),fo(t,`
uniform vec3 uSkyHor, uSkyZen; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY;
${e_}`,n_),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},i.customProgramCacheKey=()=>"ground-v4",i}function Mf(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),fo(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var s_=0;function $s(i){let t="cs"+ ++s_;return i.onBeforeCompile=e=>fo(e),i.customProgramCacheKey=()=>t,i}function bf(i,t){let e={};e.ground=i_(),e.color=Mf(new Je({vertexColors:!0,gradientMap:Xn}),1.6,.1,"color-v2"),e.atlas=new Je({vertexColors:!0,gradientMap:Xn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=o=>fo(o),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=Mf(new Je({vertexColors:!0,gradientMap:yf}),2.6,.24,"foliage-v2"),e.lamp=new Ve({color:15789798}),t&&(e.leaf=new Je({map:t,vertexColors:!0,gradientMap:yf,alphaTest:.42,side:Ge}),e.leaf.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",Kt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),fo(o)},e.leaf.customProgramCacheKey=()=>"leaf-v2"),e.wire=new Ve({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new bn(n);return e.pool=new Ve({map:a,color:16762746,transparent:!0,opacity:0,blending:fi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var r_=yt("#f2c230"),Tf=yt("#26272c");function Al(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=wn(s,"rw"),o=n*(a+.8),c=nn(s),l=c.city+c.sakura>.5;e.push({x:r.x+r.rx*o,z:r.z+r.rz*o,y:r.y+(l?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function Ef(){let i=new Pe,t=$s(new Je({vertexColors:!0,gradientMap:Xn})),e=new Ve({color:new dt(6,.45,.3)}),n=new Ve({color:new dt(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Pe,a=new Pe;r.add(a),a.position.set(-.42,1.02,-.02);let o=new We,c=3.6;for(let h=0,f=0;f<c;h++,f+=.45)o.box(-Math.min(f+.45,c),-.065,-.065,-f,.065,.065,h%2?Tf:r_);o.box(0,-.09,-.07,.38,.09,.07,Tf);let l=new re(o.build(),t);l.castShadow=!0,a.add(l);let u=[-.28,.28].map(h=>{let f=new re(new Nr(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:l,lamps:u,L:c}});return i.visible=!1,{group:i,update(r,a,o,c,l){i.visible=!!r,r&&r.forEach((u,h)=>{let f=s[h];f.root.position.set(u.x-a.x,u.y,u.z-a.z),f.root.rotation.y=u.yaw,f.arm.scale.x=(u.rw+.25)/f.L,f.pivot.rotation.z=-o*(Math.PI/2-.06);let p=Math.floor(l*2.5)%2;f.lamps[0].material=c&&p===0?e:n,f.lamps[1].material=c&&p===1?e:n})}}}function o_(){let e=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),o='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let l=[.1,.36,.62,.88].map(d=>d*1024),u=(d,y,T,_)=>{let M=r.createLinearGradient(d,y,d+T*.3,y+_);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(d,y,T,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+T*.2,y),r.lineTo(d+T*.38,y),r.lineTo(d+T*.1,y+_),r.lineTo(d-T*.08,y+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,y,T,_)};for(let d=0;d<l.length-1;d++){let y=l[d]+40,T=l[d+1]-40,_=3,M=(T-y)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(y+S*M+2,34,M-4,58),u(y+S*M+6,38,M-12,50)}for(let d of[l[0]-70,l[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),u(d+5,38,22,50);for(let d of l)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,c-36),u(d-24,34,20,46),u(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of l)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${o}`,r.fillText("\u30AF\u30CF 205-17",l[1]+40,136);let h=0,f=176,p=256,m=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,m),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${o}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+m-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${o}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,m),a.fillStyle="#ff9a2a",a.font=`800 18px ${o}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let y=new bn(d);return y.colorSpace=Te,y.anisotropy=4,y},g=(d,y,T,_)=>({u0:d/1024,u1:(d+T)/1024,v0:1-(y+_)/512,v1:1-y/512});return{map:x(n),em:x(s),side:g(0,0,1024,c),sideR:{...g(0,0,1024,c),flip:!0},front:g(h,f,p,m),plain:g(342,202,28,28)}}function wf(){let i=o_(),t=$s(new Je({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Xn})),e=new We({uv:!0}),n=[1,1,1],s=yt("#9aa1a9"),r=yt("#3b4047"),a=yt("#2a2d33"),o=19.5,c=.6,l=3,u=1.45,h=.95,f=4,p=l*o+(l-1)*c;for(let y=0;y<l;y++){let T=-p/2+o/2+y*(o+c),_=T-o/2,M=T+o/2;e.quad([_,h,u],[M,h,u],[M,f,u],[_,f,u],n,i.side),e.quad([M,h,-u],[_,h,-u],[_,f,-u],[M,f,-u],n,i.side);let S=y===l-1,R=y===0;e.quad([M,h,u],[M,h,-u],[M,f,-u],[M,f,u],S?n:yt("#c9ced4"),S?i.front:i.plain),e.quad([_,h,-u],[_,h,u],[_,f,u],[_,f,-u],R?n:yt("#c9ced4"),R?i.front:i.plain),e.box(_+.1,f,-u+.1,M-.1,f+.14,u-.1,s,null,{noBottom:!0});for(let v of[T-5.5,T+5.5])e.box(v-1.3,f+.14,-.8,v+1.3,f+.55,.8,yt("#c4c9cf"),null,{noBottom:!0});e.box(_+2,.45,-u+.25,M-2,h,u-.25,a);for(let v of[T-7,T+7])e.box(v-1.3,.1,-1.2,v+1.3,.75,1.2,r);if(y===0){let v=T-3,E=f+.55;e.box(v-.6,f+.14,-.6,v+.6,f+.3,.6,r),e.rod([v-.5,f+.3,0],[v,E+.9,0],.03,.03,4,r),e.rod([v+.5,f+.3,0],[v,E+.9,0],.03,.03,4,r),e.rod([v,E+.9,-.85],[v,E+.9,.85],.03,.03,4,r)}}let m=new re(e.build(),t);m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1;let x=new Pe;x.add(m),x.visible=!1;let g={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:g,start(y,T,_=16){Object.assign(g,{active:!0,sx:y,dir:T,speed:_,u:-T*290,ds:T>0?-2:2,cleared:!1}),x.visible=!0},update(y,T,_,M,S){if(!g.active)return;g.u+=g.dir*g.speed*y;let R=g.u-g.dir*g.length/2;if(!g.cleared&&(g.dir>0?R>S+1:R<-S-1)&&(g.cleared=!0),Math.abs(g.u)>330){g.active=!1,x.visible=!1;return}T.at(g.sx,d),x.position.set(d.x+d.fx*g.ds+d.rx*g.u-_.x,d.y+.34,d.z+d.fz*g.ds+d.rz*g.u-_.z),x.rotation.y=d.h+(g.dir>0?Math.PI:0),t.emissiveIntensity=.3+M*1.1}}}var a_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',rs=2048,os=4096;function Cl(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Pf=Cl(256,256);{let i=Pf.getContext("2d"),t=i.createImageData(256,256),e=un(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var uu=class{constructor(){this.cA=Cl(rs,os),this.cE=Cl(rs/2,os/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,rs/2,os/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,rs,os),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Pf,"repeat")}add(t,e,n,s){if(this.x+e+4>rs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>os)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(a.x,a.y),c.beginPath(),c.rect(0,0,e,n),c.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let o=.5;return this.cells[t]={u0:(a.x+o)/rs,u1:(a.x+e-o)/rs,v0:1-(a.y+n-o)/os,v1:1-(a.y+o)/os,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new bn(n);return s.colorSpace=Te,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=In,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function Nn(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function Pl(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([o,c])=>a.addColorStop(o,c)),i.fillStyle=a,i.fillRect(t,e,n,s)}function Ks(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),Pl(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}Nn(i,t,e,n,.13)}function xi(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function ft(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function Qs(i,t,e,n,s,r,a="#d9dde2",o="rgba(40,45,60,0.55)"){ft(i,t-r,e-r,n+2*r,s+2*r,a),ft(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=o,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function _i(i,t,e,n,s,r,a=0){let o=i.createLinearGradient(t,e,t+n*.35,e+s),c=a?"#4f78b8":"#5f93d6",l=a?"#86a9d4":"#a6c8ec";o.addColorStop(0,c),o.addColorStop(.55,l),o.addColorStop(1,"#dbe9f6"),i.fillStyle=o,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=t+n*r();i.beginPath(),i.moveTo(u,e),i.lineTo(u+n*.18,e),i.lineTo(u-n*.25,e+s),i.lineTo(u-n*.43,e+s),i.fill(),i.restore()}function Af(i,t,e,n,s,r="#efe6d2"){ft(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);Pl(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function hu(i,t,e=800){i.font=`${e} ${t}px ${a_}`}function be(i,t,e,n,s,r,a,o=800,c=null){hu(i,r,o);let l=r;for(;i.measureText(t).width>s&&l>6;)l-=1,hu(i,l,o);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,l*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function cu(i,t,e,n,s,r,a,o=800,c=null){let l=[...t],u=l.length,h=Math.min(r*1.05,(s-n)/u),f=Math.min(r,h*.95);hu(i,f,o),i.textAlign="center",i.textBaseline="middle",l.forEach((p,m)=>{let x=n+(s-n-h*u)/2+h*(m+.5);c&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=c,i.strokeText(p,e,x)),i.fillStyle=a,i.fillText(p,e,x)})}function po(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,ft(i,t,e,n,s,r),i.restore()}var Rf=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Rl=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Cf=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],l_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function If(){let i=new uu,t=un(2024),e=240,n=(o,c,l,u,h,f)=>{Ks(o,i,l,u,"#ece8e0",0);let p=un(f*31+(h?7:0)+5);if(f===0){let m=l*.14,x=u*.22,g=l*.72,d=u*.5;Qs(o,m,x,g,d,5),_i(o,m,x,g/2,d,p),_i(o,m+g/2,x,g/2,d,p),p()<.8&&Af(o,m+2,x+2,g*(.18+p()*.25),d-4,p()<.5?"#efe6d2":"#d9e4ea"),ft(o,m+g/2-2,x,4,d,"#cfd4da"),ft(o,m-8,x+d+5,g+16,6,"#d8d8d4"),xi(o,m-4,x+d+11,8,60),xi(o,m+g-4,x+d+11,8,60),h&&(po(c,m,x,g,d,"#ffcf8f",0),c.fillStyle="rgba(255,240,210,0.85)",c.fillRect(m+2,x+2,g*.3,d-4))}else if(f===1){for(let m of[.12,.56]){let x=l*m,g=u*.28,d=l*.3,y=u*.36;Qs(o,x,g,d,y,4),_i(o,x,g,d,y,p,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(x,g,d,y*.45),xi(o,x,g+y+6,d,40,.1),h&&p()<.8&&po(c,x,g,d,y,p()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(l*.88,u*.2,9,0,7),o.fill()}else if(f===2){let m=l*.1,x=u*.12,g=l*.8,d=u*.84;Qs(o,m,x,g,d,4),_i(o,m,x,g/2,d,p),_i(o,m+g/2,x,g/2,d,p),Af(o,m+2,x+2,g*(.2+p()*.3),d-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ft(o,m+g/2-2,x,4,d,"#cfd4da"),h&&(po(c,m,x,g,d,"#ffcb85",0),c.fillStyle="rgba(255,236,200,0.9)",c.fillRect(m+2,x+2,g*.35,d-4))}else if(f===3){Ks(o,i,l,u,"#dfe3e6",0);let m=u*.25,x=u*.55;_i(o,0,m,l,x,p,1);for(let g=0;g<=l;g+=l/4)ft(o,g-2,m,4,x,"#8d98a6");if(ft(o,0,m-4,l,4,"#8d98a6"),ft(o,0,m+x,l,5,"#7d8796"),h)for(let g=0;g<4;g++)p()<.7&&(c.fillStyle=p()<.6?"#f2f6ff":"#ffe2b0",c.fillRect(g*l/4+2,m,l/4-4,x))}else if(f===4){o.fillStyle="#6b4a35",o.fillRect(0,0,l,u);for(let y=0;y<u;y+=12)ft(o,0,y,l,2,"rgba(30,18,10,0.35)"),ft(o,0,y+2,l,1,"rgba(255,220,180,0.06)");Nn(o,i,l,u,.15);let m=l*.18,x=u*.25,g=l*.64,d=u*.45;ft(o,m-6,x-6,g+12,d+12,"#4a3020"),ft(o,m,x,g,d,"#efe4c8"),o.fillStyle="#5a3a26";for(let y=1;y<6;y++)o.fillRect(m+y*g/6-1.5,x,3,d);for(let y=1;y<3;y++)o.fillRect(m,x+y*d/3-1.5,g,3);if(h){c.fillStyle="#ffc070",c.fillRect(m,x,g,d),c.fillStyle="#000";for(let y=1;y<6;y++)c.fillRect(m+y*g/6-1.5,x,3,d)}}else if(f===5){ft(o,l*.08,0,7,u,"#bdbdb6"),ft(o,l*.08+5,0,2,u,"rgba(0,0,0,0.2)");let m=l*.55,x=u*.3,g=l*.22,d=u*.24;Qs(o,m,x,g,d,3),ft(o,m,x,g,d,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,x,g,d/2),xi(o,m,x+d+4,g,50,.12),ft(o,l*.22,u*.55,26,34,"#cfcfca"),ft(o,l*.22+4,u*.55+6,18,12,"#9aa2a8"),h&&po(c,m,x,g,d,"#fff0d8",0)}else if(f===6){let m=l*.4,x=u*.35,g=l*.2,d=u*.28;Qs(o,m,x,g,d,3),_i(o,m,x,g,d,p,1),xi(o,m,x+d+4,g,70,.14),h&&po(c,m,x,g,d,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(c,l,u,h)=>n(c,l,u,h,!1,o)),i.add("win"+o+"L",e,e,(c,l,u,h)=>n(c,l,u,h,!0,o));i.add("plain",e,e,(o,c,l,u)=>{Ks(o,i,l,u,"#ece8e0"),xi(o,l*.3,0,12,u*.6,.06)}),i.add("concrete",e,e,(o,c,l,u)=>{Ks(o,i,l,u,"#d9d7d0",60);for(let h=0;h<6;h++)xi(o,h*41%l,0,10,u*.5,.07)});let s=288,r=(o,c,l,u,h,f)=>{let p=un(f);if(Ks(o,i,l,u,"#e6e2da"),h==="glass"||h==="door"||h==="konbini"||h==="cafe"){let x=u*.22,g=l-12,d=u*.78-4;ft(o,6,x,g,d,h==="konbini"?"#f6f4ea":h==="cafe"?"#7a5a40":"#8a7a68");for(let _=x+d*.25;_<x+d;_+=d*.22){ft(o,6,_,g,3,"rgba(60,50,40,0.5)");for(let M=9;M<6+g-6;M+=6+p()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(M,_-6-p()*10,4+p()*5,6+p()*10)}h==="konbini"&&ft(o,6,x+4,g,5,"#ffffff"),o.save(),o.globalAlpha=.35,_i(o,6,x,g,d,p),o.restore(),ft(o,6,x,g,4,"#4a4e57"),h==="door"&&(ft(o,l/2-2,x,4,d,"#4a4e57"),ft(o,l/2-14,x+d*.45,3,40,"#c0c4c8"),ft(o,l/2+11,x+d*.45,3,40,"#c0c4c8"),ft(o,l/2-30,x+18,60,24,"#fff"),be(o,"\u55B6\u696D\u4E2D",l/2,x+30,54,18,"#c82828")),h==="glass"&&p()<.7&&(ft(o,16,x+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),be(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,x+44,40,16,"#c02020")),h==="cafe"&&(ft(o,l*.62,u-70,46,62,"#2c3a30"),be(o,"\u30E9\u30F3\u30C1",l*.62+23,u-50,40,13,"#fff",700));let T=h==="konbini"?"#c9d6e2":h==="cafe"?"#e8a060":"#e6c296";c.fillStyle=T,c.fillRect(6,x,g,d),c.fillStyle="rgba(0,0,0,0.35)";for(let _=x+d*.25;_<x+d;_+=d*.22)c.fillRect(6,_,g,3)}else if(h==="shutter"){let x=u*.2,g=l-12,d=u*.8;ft(o,6,x,g,d,"#b8bcc0");for(let y=x;y<x+d;y+=7)ft(o,6,y,g,2,"rgba(60,64,72,0.35)"),ft(o,6,y+2,g,1,"rgba(255,255,255,0.35)");ft(o,6,x,g,10,"#8f949a"),Nn(o,i,l,u,.12),p()<.5&&(ft(o,l/2-40,x+d*.35,80,26,"#fff"),be(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),l/2,x+d*.35+13,74,16,"#333",700))}else if(h==="noren"){ft(o,0,0,l,u,"#5b3c28");for(let T=0;T<l;T+=10)ft(o,T,u*.2,3,u*.8,"rgba(25,15,8,0.6)");Nn(o,i,l,u,.15);let m=l*.12,x=u*.24,g=l*.76,d=u*.34,y=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ft(o,m,x,g,d,y);for(let T=1;T<3;T++)ft(o,m+g*T/3-1,x+d*.25,2,d*.75,"rgba(255,255,255,0.25)");be(o,t.pick(l_),l/2,x+d*.55,g*.9,46,"#f5f0e6",800),ft(o,m,x,g,6,"#3a2a1c"),c.fillStyle="#ffae5c",c.fillRect(m,x+d,g,u-x-d),c.fillStyle="rgba(255,170,90,0.6)",c.fillRect(m,x,g,d),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l*.9,u*.36,13,19,0,0,7),o.fill(),be(o,"\u9152",l*.9,u*.36,16,14,"#fff"),c.fillStyle="#ff6a3a",c.beginPath(),c.ellipse(l*.9,u*.36,13,19,0,0,7),c.fill()}else if(h==="house"){let m=l*.18,x=u*.3,g=l*.34,d=u*.7;ft(o,m-6,x-6,g+12,d+6,"#9a9a96"),ft(o,m,x,g,d,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ft(o,m+g-14,x+d*.5,4,22,"#d8d0c0"),ft(o,m+6,x+10,g-12,d*.25,"rgba(255,255,255,0.18)"),ft(o,l*.62,u*.48,30,22,"#cfcfca"),ft(o,l*.62+6,u*.48+5,18,4,"#555");let y=l*.6,T=u*.22,_=l*.3,M=u*.2;Qs(o,y,T,_,M,3),_i(o,y,T,_,M,p,1);for(let S=0;S<3;S++)o.fillStyle="#7b5a43",o.fillRect(l*.6+S*22,u-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(l*.6+S*22+8,u-32,11,0,7),o.fill();c.fillStyle="#ffd08a",c.beginPath(),c.arc(m+g+14,x+8,6,0,7),c.fill(),p()<.6&&(c.fillStyle="#ffcf8f",c.fillRect(y,T,_,M))}else if(h==="garage"){let x=u*.25,g=l-16,d=u*.75;ft(o,8,x,g,d,"#efefec");for(let y=x;y<x+d;y+=9)ft(o,8,y,g,1.5,"rgba(80,80,90,0.25)");Nn(o,i,l,u,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,c)=>{i.add("shop_"+o,e,s,(l,u,h,f)=>r(l,u,h,f,o,100+c)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(l,u,h,f)=>r(l,u,h,f,o,200+c))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(c,l,u,h)=>{let[f,p]=Rl[o%Rl.length],m=Rf[o*7%Rf.length];ft(c,0,0,u,h,f),ft(c,0,0,u,5,"rgba(255,255,255,0.35)"),ft(c,0,h-6,u,6,"rgba(0,0,0,0.18)"),o%3===0&&(ft(c,12,12,h-24,h-24,p),be(c,m[0],12+(h-24)/2,h/2,h-30,34,f)),be(c,m,u/2+(o%3===0?24:0),h/2+2,u*.7,50,p,900),Nn(c,i,u,h,.08),l.fillStyle=f==="#fff"||f==="#f5efe0"?"#d9d6cc":f,l.fillRect(0,0,u,h),l.globalAlpha=.9,be(l,m,u/2+(o%3===0?24:0),h/2+2,u*.7,50,p==="#fff"?"#ffffff":p,900),l.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(c,l,u,h)=>{let[f,p]=Rl[(o*3+1)%Rl.length],m=Cf[o%Cf.length];ft(c,0,0,u,h,f),c.strokeStyle="rgba(0,0,0,0.3)",c.lineWidth=4,c.strokeRect(2,2,u-4,h-4),cu(c,m,u/2,12,h-12,56,p,900),Nn(c,i,u,h,.08),ft(l,0,0,u,h,f==="#fff"?"#e8e8e8":f),cu(l,m,u/2,12,h-12,56,p==="#fff"?"#fff":p,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,c,l],u)=>i.add("bb"+u,512,240,(h,f,p,m)=>{ft(h,0,0,p,m,"#fbfaf5"),ft(h,0,0,p,m*.62,l),be(h,o,p/2,m*.32,p*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),be(h,c,p/2,m*.8,p*.85,52,"#333",800),Nn(h,i,p,m,.08),ft(f,0,0,p,m,"#555"),f.globalAlpha=.85,ft(f,0,0,p,m*.62,l),be(f,o,p/2,m*.32,p*.9,96,"#fff",900),f.globalAlpha=1})),i.add("konbini_band",480,72,(o,c,l,u)=>{ft(o,0,0,l,u,"#fbfbf7"),ft(o,0,u*.62,l,u*.14,"#2a9a4a"),ft(o,0,u*.76,l,u*.12,"#f08a24"),ft(o,0,u*.88,l,u*.12,"#2f6fd8"),be(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900),c.fillStyle="#f3f6f0",c.fillRect(0,0,l,u),be(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",l/2,u*.32,l*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(c,l,u,h)=>{let f=["#d8352a","#2f6fd8","#f4f4f0"][o];ft(c,0,0,u,h,f),ft(c,8,10,u-16,h*.55,"#eef4f8");let p=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let m=0;m<4;m++)for(let x=0;x<6;x++){let g=14+x*17,d=18+m*30;c.fillStyle=p[(m*6+x+o)%p.length],c.fillRect(g,d,11,20),c.fillStyle="rgba(255,255,255,0.5)",c.fillRect(g+2,d+2,3,14),c.fillStyle="#2a2a2a",c.fillRect(g,d+23,11,3)}ft(c,10,h*.62,u-20,22,"#222"),ft(c,u-34,h*.66,14,22,"#bbb"),ft(c,14,h*.82,u-28,22,"#1b1b1b"),be(c,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],u/2,h*.62+11,u-28,14,"#fff",700),Nn(c,i,u,h,.08),l.fillStyle="#f2f8ff",l.fillRect(8,10,u-16,h*.55);for(let m=0;m<4;m++)for(let x=0;x<6;x++)l.fillStyle=p[(m*6+x+o)%p.length],l.fillRect(14+x*17,18+m*30,11,20);l.fillStyle="#9fd0ff",l.fillRect(10,h*.62,u-20,22)});i.add("ac",128,88,(o,c,l,u)=>{ft(o,0,0,l,u,"#e9e9e4"),Pl(o,0,0,l,u,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(l*.4,u*.5,u*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let h=6;h<u*.36;h+=6)o.beginPath(),o.arc(l*.4,u*.5,h,0,7),o.stroke();for(let h=12;h<u-10;h+=6)ft(o,l*.78,h,l*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,c,l,u)=>{ft(o,0,0,l,u,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,l-6,u-6),be(o,"\u54C1\u5DDD 580",l/2,16,l*.6,14,"#2f5a2f",700),be(o,"\u3042 12-34",l/2,42,l*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(l-2,2),o.lineTo(l/2,u-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(l-10,7),o.lineTo(l/2,u-12),o.fill(),be(o,"\u6B62\u307E\u308C",l/2,34,l*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(l/2,22),o.lineTo(l/2+22,50),o.lineTo(l/2+8,50),o.lineTo(l/2+8,88),o.lineTo(l/2-8,88),o.lineTo(l/2-8,50),o.lineTo(l/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(l/2,u/2,l/2-9,0,7),o.stroke(),be(o,"30",l/2,u/2+2,l*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,c,l,u)=>{ft(o,0,0,l,u,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,l-6,u-6),cu(o,"\u672C\u753A\u4E8C\u4E01\u76EE",l/2,10,u-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(c,l,u,h)=>{let f=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ft(c,0,0,u,h,f),ft(c,4,4,u-8,h*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),be(c,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],u/2,h*.25,u-12,18,"#fff",900);for(let p=0;p<4;p++)ft(c,8,h*.58+p*8,u-16-p%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(c,l,u,h)=>{let f=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Ks(c,i,u,h,f),o===1)for(let p=10;p<u-6;p+=u/6)ft(c,p,10,u/6-8,h-20,"rgba(220,235,245,0.9)"),c.fillStyle="rgba(255,255,255,0.45)",c.fillRect(p,10,u/6-8,(h-20)*.4);else{ft(c,0,0,u,7,"rgba(255,255,255,0.4)");for(let p=u/3;p<u;p+=u/3)ft(c,p-1,0,2,h,"rgba(0,0,0,0.08)")}ft(c,0,h-6,u,6,"rgba(0,0,0,0.12)"),xi(c,u*.3,h-6,10,10,.2)});return i.add("kawara",256,256,(o,c,l,u)=>{ft(o,0,0,l,u,"#58617a");for(let h=0;h<u;h+=16)Pl(o,0,h,l,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let h=0;h<l;h+=20)ft(o,h,0,2,u,"rgba(0,0,0,0.18)");Nn(o,i,l,u,.12)}),i.add("wood",256,256,(o,c,l,u)=>{ft(o,0,0,l,u,"#6d4c37");for(let h=0;h<u;h+=14)ft(o,0,h,l,2,"rgba(25,15,8,0.4)"),ft(o,0,h+2,l,1,"rgba(255,220,180,0.07)");Nn(o,i,l,u,.16)}),i.add("block",256,128,(o,c,l,u)=>{ft(o,0,0,l,u,"#c9c7bf");for(let h=0;h<u;h+=32)for(let f=h/32%2?-32:0;f<l;f+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(f+1,h+1,62,30);for(let h=0;h<l;h+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(h+20,40,24,16);Nn(o,i,l,u,.15),xi(o,0,0,l,40,.1)}),i.add("lantern",64,96,(o,c,l,u)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),o.fill();for(let h=16;h<u-12;h+=7)ft(o,4,h,l-8,1.5,"rgba(0,0,0,0.2)");ft(o,l/2-14,2,28,8,"#222"),ft(o,l/2-14,u-10,28,8,"#222"),be(o,"\u796D",l/2,u/2,l*.6,28,"#fff",900),c.fillStyle="#ff6a35",c.beginPath(),c.ellipse(l/2,u/2,l/2-2,u/2-8,0,0,7),c.fill()}),i.add("busstop",96,96,(o,c,l,u)=>{o.fillStyle="#fff",o.beginPath(),o.arc(l/2,u/2,l/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(l/2,u/2,l/2-6,0,7),o.stroke(),be(o,"\u30D0\u30B9\u505C",l/2,u/2,l*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ft(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,c,l,u)=>{o.save(),o.translate(l/2,u/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(l/2-22,u/2-6,44,18),o.fillRect(l/2-16,u/2-16,18,12),o.fillRect(l/2+8,u/2-13,5,7),o.beginPath(),o.arc(l/2-12,u/2+15,5,0,7),o.arc(l/2+12,u/2+15,5,0,7),o.fill(),be(o,"\u8E0F\u5207",l/2,u/2+34,40,13,"#1b1b1b",900)}),i.add("xing_plate",128,48,(o,c,l,u)=>{ft(o,0,0,l,u,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,l-6,u-6),be(o,"\u8E0F\u5207\u6CE8\u610F",l/2,u/2,l*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,c,l,u)=>{o.clearRect(0,0,l,u),ft(o,0,0,l,7,"#e9ebee"),ft(o,0,6,l,2,"rgba(60,70,80,0.5)"),ft(o,0,u-6,l,6,"#d5d8dc");for(let h=3;h<l;h+=9)ft(o,h,7,3,u-13,"#e2e5e9"),ft(o,h+2,7,1,u-13,"rgba(70,80,90,0.45)")}),i}function Lf(i){let e=Cl(1024,1024),n=e.getContext("2d"),s=un(321),r={},a={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"]},o=(l,u,h)=>{let f=a[l],p=256,m=l==="pine",x=l==="sakura";n.save(),n.translate(u,h),n.beginPath(),n.rect(0,0,512,512),n.clip();let g=[[p,p,140]];for(let y=0;y<(m?6:7);y++){let T=s()*6.28,_=30+s()*85;g.push([p+Math.cos(T)*_,p+Math.sin(T)*_*(m?.4:.85),Math.min(70+s()*55,228-_)])}let d=x?2100:m?2600:2200;for(let y=0;y<d;y++){let T=g[Math.floor(s()*g.length)],_=s()*6.28,M=Math.sqrt(s())*T[2],S=T[0]+Math.cos(_)*M,R=T[1]+Math.sin(_)*M*(m?.45:1),v=1-R/512,E=M/T[2],P=Math.min(4,Math.max(0,Math.floor(v*2.2+s()*2.2+(E>.8?.6:0)-.3)));if(n.fillStyle=f[P],x){let I=7+s()*8;n.beginPath(),n.arc(S,R,I,0,7),n.fill(),s()<.25&&(n.fillStyle=f[4],n.beginPath(),n.arc(S-I*.3,R-I*.3,I*.4,0,7),n.fill())}else if(m)n.save(),n.translate(S,R),n.rotate((s()-.5)*1.2),n.fillRect(-11,-1.6,22,3.2),n.restore();else{let I=9+s()*10;n.beginPath(),n.ellipse(S,R,I,I*.55,s()*6.28,0,7),n.fill()}}if(x)for(let y=0;y<14;y++){n.strokeStyle="rgba(150,90,100,0.35)",n.lineWidth=1.5;let T=p+(s()-.5)*300,_=p+60+s()*120;n.beginPath(),n.moveTo(T,_),n.lineTo(T+(s()-.5)*40,_-20-s()*30),n.stroke()}n.restore(),r[l]={u0:u/1024,u1:(u+512)/1024,v0:1-(h+512)/1024,v1:1-h/1024}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512);let c=new bn(e);return c.colorSpace=Te,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:r}}var hn=[1,1,1],ct={pole:yt("#b1b0a9"),metal:yt("#8d9198"),black:yt("#2a2b30"),yellow:yt("#f2c230"),white:yt("#f4f3ee"),trans:yt("#a0a3a8"),lampPole:yt("#727780"),lampHead:yt("#dcdcd6"),trunk:yt("#6a5444"),trunkDark:yt("#4b3a33"),leaf:yt("#86ba4c"),leafShade:yt("#2c6640"),sakura:yt("#ffd3e3"),sakuraShade:yt("#de94b4"),pine:yt("#55874c"),pineShade:yt("#1d4632"),cedar:yt("#41713e"),cedarShade:yt("#1b3e2a"),roof:yt("#bdbbb3"),parapet:yt("#dcdad2"),pipe:yt("#c4c4bf"),orange:yt("#f07a22"),red:yt("#d8352a"),vermilion:yt("#e2482c"),concrete:yt("#c9c7c0"),stone:yt("#a8a69e"),terracotta:yt("#b8653d"),rail:yt("#eeeeea")},as=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(yt),c_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(yt),du=null;function Nf(i){du=i}var mo=i=>du.uv(i),u_=(i,t)=>du.has(t+"2")&&i()<.5?t+"2":t;function pu(i,t,e,n,s=0){let r=new qt().makeRotationY(s);return r.setPosition(t,e,n),new qt().multiplyMatrices(i,r)}var Le=(i,t,e,n,s,r,a,o=hn)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],o,mo(a)),er=(i,t,e,n,s,r,a,o=hn)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],o,mo(a)),nr=(i,t,e,n,s,r,a,o=hn)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],o,mo(a)),js=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?mo(r):void 0);function mu(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ct.pole);for(let l=0;l<5;l++)s.cyl(0,.25+l*.3,0,.185,.185,.15,10,l%2?ct.black:ct.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ct.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ct.metal);let a=[-.85,-.3,.3,.85],o=[-.7,0,.7];for(let l of a)s.cyl(0,r-.53,l,.05,.035,.17,6,ct.white);for(let l of o)s.cyl(0,r-1.65,l,.045,.03,.15,6,ct.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ct.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ct.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ct.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ct.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ct.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ct.concrete);for(let l=2.4,u=0;l<r-2;l+=.45,u++)s.rod([0,l,0],[u%2?.3:-.3,l,0],.015,.015,3,ct.metal);return i.atlas.setM(t),Le(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&Le(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(l=>[0,r-.4,l]),...o.map(l=>[0,r-1.52,l]),[0,5.72,-.3],[0,5.72,.3]].map(l=>new F(l[0],l[1],l[2]).applyMatrix4(t))}function gu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,ct.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ct.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ct.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ct.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,hn);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function Uf(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ct.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ct.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ct.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,hn),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function Ff(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,yt("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,yt("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,yt("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,hn),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],hn,{u0:0,u1:1,v0:0,v1:1})}function xu(i,t,e){let n=Math.floor(e()*3),s=[ct.red,yt("#2f6fd8"),ct.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,En(s,.8)),i.atlas.setM(t),Le(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function fu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,yt("#e6e6e1")),i.atlas.setM(t),Le(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function Bf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([yt("#c8ccd2"),yt("#c0392b"),yt("#2c6fb7"),yt("#2b2b2b"),yt("#e8c84a"),yt("#e98fb0")]);for(let a of[-.52,.52])for(let o=0;o<12;o++){let c=o/12*Math.PI*2,l=(o+1)/12*Math.PI*2;n.rod([a+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[a+Math.cos(l)*.33,.34+Math.sin(l)*.33,0],.022,.022,3,ct.black)}let r=(a,o)=>n.rod(a,o,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ct.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ct.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ct.metal)}function Of(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,ct.orange),e.cyl(0,.04,0,.16,.03,.68,10,ct.orange),e.cyl(0,.32,0,.115,.095,.12,10,ct.white,!1)}function zf(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,ct.terracotta),i.leaf.setM(t),tr(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function ir(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ct.metal),i.atlas.setM(t),n<0?nr(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):er(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function _u(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,ct.orange);let s=0,r=3.25,a=.42,o=14;for(let c=0;c<o;c++){let l=c/o*Math.PI*2,u=(c+1)/o*Math.PI*2,h=(f,p,m)=>[e*m,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];js(n,h(0,0,-.02),h(e>0?u:l,a,-.02),h(e>0?l:u,a,-.02),ct.orange),js(n,h(0,0,-.035),h(e>0?u:l,a*.86,-.035),h(e>0?l:u,a*.86,-.035),yt("#dfe9f2"))}}var kf=null;function Hf(i){kf=i}function tr(i,t,e,n,s,r,a,o,c,l,u,h,f=0){let p=kf[a];for(let m=0;m<o;m++){let x=c()*2-1,g=c()*2-1,d=c()*2-1;f&&(g=1.2+c());let y=Math.hypot(x,g,d)||1;x/=y,g/=y,d/=y;let T=-d,_=0,M=x;y=Math.hypot(T,M),y<.1&&(T=1,M=0,y=1),T/=y,M/=y;let S=g*M-d*_,R=d*T-x*M,v=x*_-g*T,E=c()*6.28,P=Math.cos(E),I=Math.sin(E),D=T*P+S*I,C=_*P+R*I,A=M*P+v*I,N=S*P-T*I,B=R*P-_*I,k=v*P-M*I,Y=r*(1.45+c()*.5)/2,H=e+(c()-.5)*r*.6,Z=n+(c()-.5)*r*(f?.15:.5),Q=s+(c()-.5)*r*.6,St=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ot,Gt])=>[H+(D*Ot+N*Gt)*Y,Z+(C*Ot+B*Gt)*Y*(f?.6:1),Q+(A*Ot+k*Gt)*Y]),At=St.map(Ot=>{let Gt=Ot[0]-t[0],$=Ot[1]-t[1],it=Ot[2]-t[2],G=Math.hypot(Gt,$,it)||1;Gt/=G,$/=G,it/=G;let ot=Ot[0]-e,K=Ot[1]-n,st=Ot[2]-s;return G=Math.hypot(ot,K,st)||1,[Gt*.7+ot/G*.3,$*.7+K/G*.3+(f?.5:0),it*.7+st/G*.3]}),jt=St.map(Ot=>mf(u,l,.45+.55*Math.max(0,Math.min(1,(Ot[1]-h[0])/(h[1]-h[0])))));i.leaf.card(St,At,p,jt)}}function h_(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ct.trunk);for(let l=0;l<3;l++){let u=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,ct.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",o=[s*.45,s*1.15],c=7+Math.floor(e()*3);for(let l=0;l<c;l++){let u=e()*6.28,h=(.6+e())*1.3*n;tr(i,r,Math.cos(u)*h,s*(.62+e()*.3),Math.sin(u)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],o)}tr(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],o)}function f_(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ct.trunkDark);let r=[];for(let l=0;l<5;l++){let u=l/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(u)*h,s*(.62+e()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ct.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ct.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],o=[s*.5,s*1.1],c=[.72,.62,.72];for(let l of r)for(let u=0;u<2;u++)tr(i,a,l[0]+(e()-.5)*1.4*n,l[1]+e()*.9*n,l[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],c,o);tr(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],c,o)}function d_(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,o=[r*.4,a*.45,.2],c=[r,a*.8,-.2];s.rod([0,0,0],o,.2*n,.15*n,6,ct.trunkDark),s.rod(o,c,.15*n,.09*n,6,ct.trunkDark),i.leaf.setM(t);let l=[[c[0],c[1]+.3,c[2],1.7],[o[0]+1.4*n,o[1]+.8,.5,1.3],[o[0]-1.3*n,o[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[u,h,f,p]of l)s.rod(u>o[0]?o:c,[u,h-.2,f],.07*n,.04*n,4,ct.trunkDark),tr(i,[u,h-.8,f],u,h,f,p*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function p_(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ct.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ct.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ct.cedar)}var m_={broad:h_,sakura:f_,pine:d_,cedar:p_},Df={};function ki(i,t,e,n,s=1){let r=Math.floor(n()*4),a=e+r,o=Df[a];if(!o){let l={color:new We,foliage:new We,leaf:new We({uv:!0})};m_[e](l,new qt,un(1e3+r*77+e.length*13),1),o=Df[a]={c:l.color.toArrays(),f:l.foliage.toArrays(),l:l.leaf.toArrays()}}let c=t.clone().scale(new F(s,s,s));i.color.stamp(o.c,c),i.foliage.stamp(o.f,c),i.leaf.stamp(o.l,c)}function go(i,t,e,n,s,r,a){let o=Math.max(1,Math.round(e/3)),c=e/o;for(let l of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<o;h++){let f=u>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(l>0?er:nr)(i,l*t/2,h*c,(h+1)*c,n[u],n[u+1],f,s)}}function xo(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],ct.roof);let a=.5,o=.15;if(i.box(-t/2,n,-.02,t/2,n+a,o,ct.parapet),i.box(-t/2,n,e-o,t/2,n+a,e,ct.parapet),i.box(-t/2,n,0,-t/2+o,n+a,e,ct.parapet),i.box(t/2-o,n,0,t/2,n+a,e,ct.parapet),s()<.4){let c=(s()-.5)*t*.5,l=e*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+u-.05,n,l+h-.05,c+u+.05,n+1,l+h+.05,ct.metal);i.cyl(c,n+1,l,.85,.85,1.3,12,yt("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,ct.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,ct.metal)}function Vf(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,ct.black);let r="vs"+Math.floor(s()*10);nr(i.atlas,t-.065,-.88,-.12,e,n,r),er(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,ct.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,ct.metal)}function ls(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ct.concrete,null,{noBottom:!0}),n.type){case"shop":return g_(i,t,e,n);case"apt":return x_(i,t,e,n);case"office":return __(i,t,e,n);case"konbini":return v_(i,t,e,n);case"house":return y_(i,t,e,n);case"tower":return M_(i,t,e,n)}}function g_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.6,f=3,p=h+(a-1)*f,m=Math.max(1,Math.round(s/3)),x=s/m,g=-s/2,d=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let M=0;M<m;M++)Le(l,g+M*x,g+(M+1)*x,0,h,0,u_(e,"shop_"+d[M%d.length]));let y=e.pick([0,0,1,5,0,1]),T=[0,h];for(let M=1;M<a;M++)T.push(h+M*f);for(let M=1;M<a;M++)for(let S=0;S<m;S++){let R=S%2===1&&e()<.3?5:y;Le(l,g+S*x,g+(S+1)*x,T[M],T[M+1],0,"win"+R+(e()<c?"L":""),o)}go(l,s,r,T,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],En(o,.8)),xo(u,s,r,p,e);let _=s*.94;if(u.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ct.black),Le(l,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let M=e.pick(c_),S=h-.85;u.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],M),u.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],En(M,.85))}if(a>=2&&e()<.65){let M=(e()<.5?1:-1)*(s/2-.35);Vf(i,M,h+.3,Math.min(p-.15,h+2.8),e)}for(let M=1;M<a;M++)if(e()<.4){let S=Math.floor(e()*m),R=g+S*x+.15,v=g+(S+1)*x-.15,E=T[M];u.box(R,E-.12,-.9,v,E,0,ct.parapet),Le(l,R,v,E,E+1,-.9,"rail"),nr(l,R,-.9,0,E,E+1,"rail"),er(l,v,-.9,0,E,E+1,"rail"),e()<.6&&fu(i,t,(R+v)/2+.6,E,-.75)}else if(e()<.35){let S=Math.floor(e()*m);fu(i,t,g+(S+.5)*x,T[M]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}u.cyl(g+.12,0,-.08,.05,.05,p,6,ct.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,yt("#d9d9d3")),a>=3&&e()<.18&&Gf(i,s,p,r,e)}function Gf(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,o=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,e,o,c+.06,e+1.2+a,o+.12,ct.metal);i.color.box(-r/2,e+1.2,o+.12,r/2,e+1.2+a,o+.3,ct.metal),Le(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,o+.115,"bb"+Math.floor(s()*4))}function x_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.2,f=2.95,p=h+(a-1)*f,m=Math.max(2,Math.round(s/3.2)),x=s/m,g=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<m;_++)Le(l,g+_*x,g+(_+1)*x,0,h,0,_===Math.floor(m/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),_===Math.floor(m/2)?hn:o);let y="bal"+Math.floor(e()*3),T=En(o,.97);for(let _=1;_<a;_++){let M=d[_];for(let S=0;S<m;S++)Le(l,g+S*x,g+(S+1)*x,M,d[_+1],0,"win2"+(e()<c?"L":""),o);u.box(g,M-.15,-1.3,-g,M,0,T),u.box(g,M,-1.3,-g,M+1.1,-1.18,T,null,{noBottom:!0});for(let S=0;S<m;S++)Le(l,g+S*x,g+(S+1)*x,M,M+1.1,-1.305,y,o);for(let S=0;S<=m;S++)u.box(g+S*x-.05,M,-1.18,g+S*x+.05,M+2.4,0,En(o,.92));i.atlas.setM(t);for(let S=0;S<m;S++)e()<.55&&(fu(i,t,g+(S+.78)*x,M,-.55),i.atlas.setM(t),i.color.setM(t))}u.box(g,p-.15,-1.3,-g,p,0,T),go(l,s,r,d,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],En(o,.8)),xo(u,s,r,p,e,!0)}function __(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=4,f=3.4,p=h+(a-1)*f,m=Math.max(2,Math.round(s/3)),x=s/m,g=-s/2,d=[0,h];for(let y=1;y<a;y++)d.push(h+y*f);for(let y=0;y<m;y++)Le(l,g+y*x,g+(y+1)*x,0,h,0,y===1?"shop_door":"shop_glass");for(let y=1;y<a;y++)for(let T=0;T<m;T++)Le(l,g+T*x,g+(T+1)*x,d[y],d[y+1],0,"win3"+(e()<c?"L":""),o);go(l,s,r,d,o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],En(o,.8)),xo(u,s,r,p,e,!0),e()<.6&&Vf(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),e),e()<.3&&Gf(i,s,p,r,e)}function v_(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,o=i.color,c=4.4,l=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let f=0;f<u;f++)Le(a,l+f*h,l+(f+1)*h,0,3.4,0,"shop_konbini");o.box(l,3.4,-.35,-l,c,0,ct.white),Le(a,l,-l,3.4,c,-.355,"konbini_band"),go(a,s,r,[0,c],yt("#f2f2ee"),e,0),xo(o,s,r,c,e)}function y_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=2.9,f=a*h,p=-s/2,m=e()<.5,x=Math.max(2,Math.round(s/3)),g=s/x,d=[];for(let v=0;v<=a;v++)d.push(v*h);let y=m?hn:o;for(let v=0;v<a;v++)for(let E=0;E<x;E++){let P=m?"win4":"win0";v===0&&E===0?P="shop_house":e()<c&&(P+="L"),Le(l,p+E*g,p+(E+1)*g,d[v],d[v+1],0,P,P==="shop_house"?hn:y)}go(l,s,r,d,m?yt("#9a7a62"):o,e,c),u.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],En(o,.75));let T=.6,_=Math.min(2.4,r*.32),M=mo("kawara"),S=yt("#c8ccd8");l.quad([s/2+T,f-.25,-T],[-s/2-T,f-.25,-T],[-s/2-T,f+_,r/2],[s/2+T,f+_,r/2],S,M),l.quad([-s/2-T,f-.25,r+T],[s/2+T,f-.25,r+T],[s/2+T,f+_,r/2],[-s/2-T,f+_,r/2],S,M);let R=m?yt("#7a5a42"):o;if(js(u,[-s/2,f,0],[-s/2,f,r],[-s/2,f+_-.1,r/2],R),js(u,[s/2,f,r],[s/2,f,0],[s/2,f+_-.1,r/2],R),u.box(-s/2-T,f+_-.05,r/2-.15,s/2+T,f+_+.18,r/2+.15,yt("#3d4456")),a>1){let v=h+.05;l.quad([s/2+.1,v-.3,-.75],[-s/2-.1,v-.3,-.75],[-s/2-.1,v+.05,0],[s/2+.1,v+.05,0],S,M)}if(n.fence){let v=-n.fence,E=1.2;for(let[P,I]of[[-s/2,-1],[.4,s/2]])u.box(P,0,v-.08,I,E,v+.08,ct.concrete),Le(l,P,I,0,E,v-.085,"block")}}function M_(i,t,e,n){let{w:s,d:r,floors:a,tint:o,litP:c}=n,l=i.atlas,u=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),m=s/p,x=-s/2,g=e()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let M=0;M<p;M++)Le(l,x+M*m,x+(M+1)*m,d[_],d[_+1],0,g+(e()<c?"L":""),o);let y=Math.max(1,Math.round(r/6)),T=r/y;for(let _ of[-1,1])for(let M=0;M<a;M++)for(let S=0;S<y;S++)(_>0?er:nr)(l,_*s/2,S*T,(S+1)*T,d[M],d[M+1],g+(e()<c?"L":""),o);xo(u,s,r,f,e,!0)}function Wf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([yt("#f2f2ee"),yt("#c9cdd2"),yt("#2b2f38"),yt("#b33a32"),yt("#9fc6c0"),yt("#e7d9b4"),yt("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,En(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,yt("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ct.black)}function Xf(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ct.black:ct.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,ct.black),e.box(-.5,2.55,-.06,.5,2.95,.02,ct.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ct.black);e.box(-.78,-.9,-.34,.3,0,.34,ct.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,yt("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,ct.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new qt().multiplyMatrices(t,new qt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ct.black:ct.yellow)}e.setM(t),i.atlas.setM(t),Le(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function qf(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,ct.stone),e.cyl(0,.25,0,.14,.12,.95,8,ct.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,ct.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,En(ct.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,En(ct.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,hn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,hn)}function vu(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,ct.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ct.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,ct.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,ct.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,ct.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ct.vermilion)}function Yf(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,yt("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,yt("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,yt("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,yt("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ct.metal),n.box(1.1,0,.3,1.2,.42,.55,ct.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ct.metal),i.atlas.setM(t),nr(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),er(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Zf(i,t,e,n=1){let s=i.color;s.setM(t);let r=En(ct.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],o=.55*n;for(let c of a)s.rod([0,o,0],[c[0]*.95*n,o+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function Jf(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,yt("#8f8a80"),yt("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,ct.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ct.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,ct.black),e.cyl(0,18.6,0,1,.25,1.2,12,ct.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,hn)}function $f(i,t,e){let n=i.color;n.setM(t);let s=e.pick([yt("#f4f4f0"),yt("#3b6ea5"),yt("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),js(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),js(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ct.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ct.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,yt("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ct.metal)}function Kf(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,ct.stone),n.box(-.55,.5,.9,.55,1.5,1.8,yt("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],yt("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],yt("#4d5468")),vu(i,pu(t,0,0,-.3,Math.PI/2),.75,2.2)}var Ke=60,b_=[.7,.9,1.5,1.9,2,2.1,2.65,3.05,3.4],T_=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],yu=32,Il=[.025,.026,.032],Qf=[.05,.05,.065],Hi=(i,t)=>(i%t+t)%t,sr=(i,t)=>{let e=uo(i);return!!e&&Math.abs(i-e.s)<t},Mu=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=n(r,a);this.P.push(o[0],o[1],o[2]),this.N.push(o[3],o[4],o[5]),this.SU.push(o[6],o[7]),this.ZW.push(o[8],o[9],o[10],o[11]),this.RK.push(o[12],o[13])}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let o=s+r*e+a,c=o+1,l=o+e,u=l+1;this.I.push(o,c,l,c,u,l)}}build(){let t=new ue;return t.setAttribute("position",new Zt(this.P,3)),t.setAttribute("normal",new Zt(this.N,3)),t.setAttribute("su",new Zt(this.SU,2)),t.setAttribute("zw",new Zt(this.ZW,4)),t.setAttribute("rk",new Zt(this.RK,2)),t.setIndex(this.I),t.computeBoundingSphere(),t}},Ll=class{constructor(t,e,n,s){this.path=e,this.M=n,this.foamMat=s,this.group=new Pe,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/Ke),s=Math.floor((t+this.ahead)/Ke);for(let[a,o]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(o),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);let r=performance.now();for(;;){if(!this.job){let o=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){o=c;break}if(o<0)return 0;this.job={c:o,it:this.gen(o)}}let a=this.job.it.next();if(a.done&&(this.chunks.set(this.job.c,a.value),this.group.add(a.value.group),this.job=null),performance.now()-r>e)return 1}}dispose(t){this.group.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}*gen(t){let e=this.path,n=t*Ke,s=n+Ke,r=e.at(n),a=r.x,o=r.z,c=un(Math.floor(gi(t,777)*4294967295)),l={atlas:new We({uv:!0}),color:new We,foliage:new We,leaf:new We({uv:!0}),lamp:new We({color:!1}),pool:new We({uv:!0,color:!1})},u=new Mu,h=[],f={},p={},m=(v,E)=>{e.at(v,p);let P=wn(v,"rw");return p.y+lu(v,E,p.y,P)},x=v=>{let E=nn(v);return[E.city,E.sakura,E.coast,E.country]},g=(v,E,P)=>(e.at(v,f),[f.x+f.rx*E-a,P,f.z+f.rz*E-o]),d=(v,E,P,I=0,D=!0)=>{e.at(v,f);let C=f.h-Math.PI/2+(D&&E<0?Math.PI:0)+I,A=new qt().makeRotationY(C);return A.setPosition(f.x+f.rx*E-a,P,f.z+f.rz*E-o),A},y=(v,E,P=0,I=0,D=!0)=>d(v,E,m(v,E)+P,I,D),T=v=>e.at(v,p).y,_=v=>wn(v,"rw"),M=v=>{let E=nn(v);return E.city+E.sakura>.5?E.city>=E.sakura?3:2.6:0};{let E=_(n+Ke/2),P=(()=>{let A=[0,...b_].map(N=>N);return T_.forEach(N=>A.push(N-E)),A})(),I=[...P.slice().reverse().map(C=>-C),...P],D=I.length;u.grid(21,D,(C,A)=>{let N=n+C/20*Ke,B=_(N),k=I[A],Y=k<0||k===0&&A<D/2?k-B:k+B;e.at(N,f);let H=f.y,Z=H+lu(N,Y,H,B),Q=.6,St=(m(N,Y+Q)-m(N,Y-Q))/(2*Q),At=(m(N+Q,Y)-m(N-Q,Y))/(2*Q),jt=-St*f.rx-At*f.fx,Ot=1,Gt=-St*f.rz-At*f.fz,$=Math.hypot(jt,Ot,Gt);jt/=$,Ot/=$,Gt/=$;let it=x(N);return[f.x+f.rx*Y-a,Z,f.z+f.rz*Y-o,jt,Ot,Gt,Hi(N,ss),Y,it[0],it[1],it[2],it[3],B,0]})}yield,u.grid(31,2,(E,P)=>{let I=n+E/30*Ke,D=_(I),C=P?D:-D;e.at(I,f);let A=f.y,N=(T(I+1)-T(I-1))/2,B=-N*f.fx,k=1,Y=-N*f.fz,H=Math.hypot(B,k,Y),Z=x(I);return[f.x+f.rx*C-a,A,f.z+f.rz*C-o,B/H,k/H,Y/H,Hi(I,ss),C,Z[0],Z[1],Z[2],Z[3],D,1]});{let v=[];for(let I=0;I<=30;I++){let D=n+I/30*Ke;v.push({s:D,sw:M(D)})}let E=[],P=null;for(let I of v)I.sw>0?(P||(P=[],E.push(P)),P.push(I)):P=null;for(let I of E)if(!(I.length<2))for(let D of[-1,1])u.grid(I.length,2,(C,A)=>{let{s:N,sw:B}=I[C],k=_(N),Y=D*(A===(D>0?0:1)?k:k+B);e.at(N,f);let H=x(N);return[f.x+f.rx*Y-a,f.y+.15,f.z+f.rz*Y-o,0,1,0,Hi(N,ss),Y,H[0],H[1],H[2],H[3],k,2]}),u.grid(I.length,2,(C,A)=>{let{s:N}=I[C],B=_(N),k=D*B,Y=D>0?A:1-A;e.at(N,f);let H=x(N);return[f.x+f.rx*k-a,f.y+(Y?.15:0),f.z+f.rz*k-o,-D*f.rx,0,-D*f.rz,Hi(N,ss),k,H[0],H[1],H[2],H[3],B,3]})}yield,this.placePoles(t,n,s,c,l,d,m,g,T,_);{let v=Math.ceil((n-Zs)/Ys),E=Js(v);E<s&&co(E)&&this.placeCrossing(l,u,E,d,T,_,m,M,a,o)}yield;for(let v=n;v<s;v+=4)Ae(v)==="coast"&&nn(v).coast>.45&&this.guardrail(l,v,Math.min(v+4,s),g,T,_);yield*this.placeCity(l,c,n,s,d,y,T,_,M,m),yield*this.placeSakura(l,c,n,s,d,y,T,_,m),this.placeCoast(l,c,n,s,d,y,T,_,m,h,g),yield,this.placeCountry(l,c,n,s,d,y,T,_,m),yield;let S=new Pe,R=(v,E,P,I,D=0)=>{if(!v)return;let C=new re(v,E);C.castShadow=P,C.receiveShadow=I,C.renderOrder=D,S.add(C)};if(R(u.build(),this.M.ground,!1,!0),yield,R(l.atlas.build(),this.M.atlas,!0,!0),yield,R(l.color.build(),this.M.color,!0,!0),yield,R(l.foliage.build(),this.M.foliage,!0,!0),R(l.leaf.build(),this.M.leaf,!0,!0),yield,R(l.lamp.build(),this.M.lamp,!1,!1),R(l.pool.build(),this.M.pool,!1,!1,2),h.length){let v=new ue,E=[],P=[],I=[];h.forEach((D,C)=>{for(let A of D)E.push(A[0],A[1],A[2]),P.push(A[3],A[4]);if(C>0){let A=(C-1)*2;I.push(A,A+2,A+1,A+1,A+2,A+3)}}),v.setAttribute("position",new Zt(E,3)),v.setAttribute("su",new Zt(P,2)),v.setIndex(I),v.computeBoundingSphere(),R(v,this.foamMat,!1,!1,1)}return S.position.set(a-this.origin.x,0,o-this.origin.z),{group:S,ox:a,oz:o,s0:n}}poleSpec(t){let e=t*yu+6,n=Ae(e);if(n==="sakura"||sr(e,6))return null;let s=wn(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:s+2.35;return{s:e,u:r,z:n}}placePoles(t,e,n,s,r,a,o,c,l,u){let h=Math.ceil((e-6)/yu),f=Math.floor((n-6-.001)/yu);for(let p=h;p<=f;p++){let m=this.poleSpec(p);if(!m)continue;let x=m.z==="city"?l(m.s)+.15:o(m.s,m.u),g=a(m.s,m.u,x),d=un(Math.floor(gi(p,31)*4294967295)),y=mu(r,g,d,{trans:d()<.45});m.z==="city"&&p%2===0&&Uf(r,g,-.11);let T=this.poleSpec(p+1);if(T){let _=T.z==="city"?l(T.s)+.15:o(T.s,T.u),M=a(T.s,T.u,_),S=mu({color:new We,atlas:new We({uv:!0})},M,un(Math.floor(gi(p+1,31)*4294967295)),{});r.color.setM(new qt);let R=[];for(let v=0;v<y.length;v++){let E=y[v],P=S[v],I=.35+d()*.4+(v>=7?.3:0);R.push(I),r.color.wire([E.x,E.y,E.z],[P.x,P.y,P.z],I,v>=7?.022:.015,Il,10)}if(m.z!=="coast"&&d()<.38){let v=Math.floor(d()*4),E=y[v],P=S[v],I=1+Math.floor(d()*4),D=.18+d()*.5;for(let C=0;C<I;C++){let A=Math.min(.92,D+C*(.018+d()*.025)),N=E.x+(P.x-E.x)*A,B=E.z+(P.z-E.z)*A,k=E.y+(P.y-E.y)*A-R[v]*4*A*(1-A);r.color.box(N-.07,k+.015,B-.07,N+.07,k+.19,B+.07,Qf),r.color.box(N-.045,k+.19,B-.045,N+.045,k+.27,B+.045,Qf)}}}if(m.z==="city"){r.color.setM(new qt);let _=1+Math.floor(d()*3);for(let M=0;M<_;M++){let S=y[7+M%2],R=(d()-.5)*14,v=u(m.s+R),E=d()<.55,P=E?-(v+3.15):v+3.15,I=c(m.s+R,P,l(m.s+R)+5.2+d()*2.5);r.color.wire([S.x,S.y,S.z],I,.25+d()*.4,.012,Il,8)}}}}placeCrossing(t,e,n,s,r,a,o,c,l,u){let h=this.path.at(n,{}),f=h.y,p=a(n),m=c(n),x=p+m+.2,g=150,d=f+.18,y=nn(n),T=[y.city,y.sakura,y.coast,y.country],_=(A,N,B)=>[h.x+h.fx*A+h.rx*N-l,B,h.z+h.fz*A+h.rz*N-u],M=[7.6,4.7,-4.7,-7.6];for(let[A,N]of[[-g,-x],[x,g]])e.grid(25,M.length,(k,Y)=>{let H=A+(N-A)*k/24,Z=M[Y],St=Math.abs(Z)<5?d:Math.min(d-.05,o(n+Z,H)-.03),At=_(Z,H,St);return[At[0],At[1],At[2],0,1,0,Z,H,T[0],T[1],T[2],T[3],p,5]});let S=(A,N,B)=>e.grid(2,2,(k,Y)=>{let H=k?N:A,Z=Y?-3.3:3.3,Q=_(Z,H,B);return[Q[0],Q[1],Q[2],0,1,0,Z,H,T[0],T[1],T[2],T[3],p,6]});S(-p,p,f+.03),m>0&&(S(-x,-p,f+.165),S(p,x,f+.165));let R=(A,N,B,k)=>e.grid(2,2,(Y,H)=>{let Z=Y?k:B,Q=H?N:A,St=_(Q,Z,f+.025);return[St[0],St[1],St[2],0,1,0,Q,Z,T[0],T[1],T[2],T[3],p,7]});R(-7.15,-7.6,-p+.3,-.12),R(7.6,7.15,.12,p-.3);let v=s(n,0,f,-Math.PI/2,!1),E=t.color;E.setM(v);let P=[.42,.4,.38],I=[.3,.29,.28],D=[.55,.57,.6];for(let A of[-2,2])for(let N of[-.5335,.5335]){let B=-(A+N);for(let[k,Y]of[[-g,-x],[x,g]])E.box(k,.26,B-.035,Y,.34,B+.035,P);E.box(-x,0,B-.035,x,.04,B+.035,I)}let C=[-146,-104,-64,-26,26,64,104,146];for(let A of C){for(let N of[-4.95,4.95])E.box(A-.12,.18,N-.12,A+.12,7.4,N+.12,D);E.box(A-.1,6.95,-5.15,A+.1,7.2,5.15,D);for(let N of[-2,2])E.box(A-.04,6.3,-N-.04,A+.04,6.95,-N+.04,D)}for(let A of[-2,2])for(let N=0;N<C.length-1;N++)E.wire([C[N],5.35,-A],[C[N+1],5.35,-A],.05,.011,Il,6),E.wire([C[N],6.4,-A],[C[N+1],6.4,-A],.45,.011,Il,8);for(let A of Al(this.path,n)){let N=new qt().makeRotationY(A.yaw);N.setPosition(A.x-l,A.y,A.z-u),Xf(t,N)}ir(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(m>0?1:0)),"sign_xing",1,2.2,.85),ir(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(m>0?1:0)),"sign_xing",-1,2.2,.85)}guardrail(t,e,n,s,r,a){t.color.setM(new qt);let o=Math.max(1,Math.round((n-e)/2));for(let c=0;c<o;c++){let l=e+(n-e)*c/o,u=e+(n-e)*(c+1)/o,h=-(a(l)+.95),f=-(a(u)+.95),p=r(l),m=r(u),x=(M,S,R)=>s(M,S,R),g=x(l,h,p+.52),d=x(u,f,m+.52),y=x(l,h,p+.84),T=x(u,f,m+.84);t.color.quad(g,d,T,y,ct.rail),t.color.quad(d,g,y,T,[.62,.64,.66]);let _=s(l,h-.05,p);t.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,o,c,l,u){for(let p of[-1,1]){let m=n+e()*2;for(;m<s-2;){if(nn(m).city<.62){m+=4;continue}{let P=uo(m+6);if(P&&m<P.s+8.5&&m+14>P.s-8.5){m=Math.max(m+1,P.s+8.5);continue}}let x=Hi(m,150);if(x>143||x<6){m+=3;continue}let g=c(m),d=l(m)||3,y=g+d+.15,T=e(),_=T<.42?"shop":T<.58?"apt":T<.68?"office":T<.82?"house":T<.88?"konbini":T<.94?"parking":"gap",M=_==="shop"?e.range(5,9):_==="apt"?e.range(10,16):_==="office"?e.range(10,14):_==="house"?e.range(7,9.5):_==="konbini"?e.range(12,14):_==="parking"?e.range(7,11):e.range(2,3.5);if(m+M>s){if(s-m<5||_==="konbini")break;M=s-m-.2}let S=m+M/2,R=o(S),v=e.pick(as),E=.42;if(_==="parking"){let P=r(S,p*(y+3),R+.15);e()<.8&&Wf(t,pu(P,0,0,.5,(e()-.5)*.1),e),t.color.setM(P),t.color.box(-M/2,0,5.5,M/2,1.6,5.7,ct.concrete)}else if(_!=="gap"){let P=r(S,p*y,R+.15),I={type:_,w:M,d:_==="apt"||_==="office"?e.range(10,14):e.range(8,12),floors:_==="shop"?e.int(2,4):_==="apt"?e.int(4,9):_==="office"?e.int(4,8):2,tint:v,litP:E,fence:_==="house"&&e()<.5?1.2:0};if(ls(t,P,e,I),_!=="house"&&e()<.28&&xu(t,r(S+(e()-.5)*(M-1.2),p*(y-.42),R+.15),e),(_==="shop"||_==="konbini")&&e()<.3)for(let D=0;D<1+e()*3;D++)Bf(t,r(S-M/2+.8+D*.55,p*(y-.75),R+.15,Math.PI/2+.1),e);if(_==="house"&&e()<.6)for(let D=0;D<2+e()*3;D++)zf(t,r(S+1+D*.5,p*(y-.3),R+.15),e);if(e()<.03)for(let D=0;D<3;D++)Of(t,r(S+D*.9,p*(g+.35),R))}m+=M+e.range(.05,.5),yield}for(let x=n+e()*10;x<s-8;x+=e.range(14,26)){if(nn(x).city<.7||e()<.3||sr(x,18))continue;let g=c(x),d=r(x,p*(g+3.2+e.range(14,20)),o(x)+.1);ls(t,d,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(as),litP:.4})}if(nn(n+30).city>.7&&e()<.65){let x=n+e()*Ke;if(sr(x,24))continue;let g=r(x,p*e.range(55,150),o(x));ls(t,g,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(as),litP:.45})}}let h=Math.ceil(n/150),f=Math.floor((s-.01)/150);for(let p=h;p<=f;p++){let m=p*150;if(Ae(m)!=="city")continue;let x=c(m);ir(t,r(m-1,-(x+.4),o(m)+.15),"sign_blue",1),ir(t,r(m-6,-(x+.4),o(m)+.15),"sign_stop",1,2.1,.75),_u(t,r(m+7,x+.4,o(m)+.15),-1),p%3===0&&ir(t,r(m+20,-(x+.4),o(m)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,o,c,l){for(let f of[-1,1]){for(let p=n+e()*4;p<s;p+=e.range(7.5,10)){if(nn(p).sakura<.45)continue;let m=c(p);ki(t,a(p,f*(m+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&ki(t,a(p+3,f*(m+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Ae(p)!=="sakura")continue;let m=c(p);Ff(t,r(p,f*(m+2.25),o(p)+.15)),Hi(p,48)<24&&qf(t,r(p+6,f*(m+3),l(p+6,f*(m+3))))}for(let p=n+e()*15;p<s;p+=e.range(14,24)){if(Ae(p)!=="sakura"||e()<.35)continue;let m=c(p);ls(t,a(p,f*(m+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(as),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+Ke/2)/480)*480+240;h>=n&&h<s&&Ae(h)==="sakura"&&vu(t,r(h,0,o(h),0,!1),c(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,o,c,l,u,h){for(let m=0;m<=20;m++){let x=n+m/20*Ke;if(nn(x).coast<.85){u.length&&u[u.length-1]!==null&&u.push(null);continue}let d=c(x),y=d+11,T=d+19,_=h(x,-y,Oi+.06),M=h(x,-T,Oi+.06);u.push([[_[0],_[1],_[2],Hi(x,ss),0],[M[0],M[1],M[2],Hi(x,ss),1]])}let f=u.indexOf(null);f>=0&&(u.length=f),u.length<2&&(u.length=0);for(let m=n+e()*6;m<s;m+=e.range(5,9)){if(Ae(m)!=="coast")continue;let x=c(m);e()<.7&&ki(t,a(m,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&ki(t,a(m+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let m=n+4;m<s;m+=e.range(18,30)){if(Ae(m)!=="coast"||e()<.4)continue;let x=c(m),g=3+Math.floor(e()*5);for(let d=0;d<g;d++){let y=-(x+e.range(12,17)),T=m+e.range(-3,3);Zf(t,r(T,y,Math.max(l(T,y),Oi-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let m=n+12;m<s;m+=48){if(Ae(m)!=="coast")continue;let x=c(m);gu(t,a(m,x+1),e)}if(Ae(n+30)==="coast"&&e()<.5){let m=n+e()*Ke,x=c(m);ls(t,a(m,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(as),litP:.5,fence:0})}if(Ae(n+30)==="coast"&&e()<.55){let m=n+e()*Ke;$f(t,r(m,-(c(m)+e.range(45,220)),Oi-.25,e()*6,!1),e)}let p=Math.floor((n+Ke/2)/1500)*1500+700;p>=n&&p<s&&Ae(p)==="coast"&&Jf(t,r(p,-(c(p)+75),Oi-1,0,!1))}placeCountry(t,e,n,s,r,a,o,c,l){for(let p of[-1,1]){for(let m=n+e()*20;m<s;m+=e.range(20,40)){if(Ae(m)!=="country"||e()<.55||sr(m,16))continue;let x=p*e.range(16,95),g=a(m,x);ls(t,g,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(as),litP:.5,fence:0});for(let d=0;d<2+e()*3;d++){let y=x+p*e.range(6,14),T=m+e.range(-8,8);ki(t,a(T,y,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let m=n+e()*8;m<s;m+=e.range(5,9)){if(Ae(m)!=="country"||sr(m,7))continue;let x=p*e.range(140,210);ki(t,a(m,x,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!sr(m+2,8)&&ki(t,a(m+2,p*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let u=Math.floor((n+Ke/2)/600)*600+300;if(u>=n&&u<s&&Ae(u)==="country"){let p=c(u);Yf(t,r(u,-(p+1.6),o(u)-.08),e)}let h=Math.floor((n+Ke/2)/700)*700+120;if(h>=n&&h<s&&Ae(h)==="country"){let p=c(h);xu(t,r(h,-(p+.95),o(h)-.08),e),gu(t,r(h+2,-(p+.8),o(h)-.08),e)}let f=Math.floor((n+Ke/2)/900)*900+450;if(f>=n&&f<s&&Ae(f)==="country"){let p=c(f);Kf(t,a(f,p+5),e)}for(let p=n;p<s;p+=30){if(Ae(p)!=="country")continue;let m=this.path.curv(p);if(Math.abs(m)>1/450&&e()<.5){let x=m>0?-1:1,g=c(p);_u(t,a(p,x*(g+.75)),x>0?-1:1)}}}};var Dl=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new dt(t):t)),ht={zenith:new dt,horizon:new dt,sunCol:new dt,sunI:1,hemiSky:new dt,hemiGround:new dt,hemiI:1,fog:new dt,cLit:new dt,cShade:new dt,cRim:new dt,night:0,warm:0,overcast:0,rain:0,sunDir:new F,moonDir:new F,lightDir:new F,sunEl:0};function td(i){let t=0;for(;t<Dl.length-2&&Dl[t+1][0]<=i;)t++;let e=Dl[t],n=Dl[t+1],s=Sl(we((i-e[0])/(n[0]-e[0]),0,1)),r=(c,l)=>l.copy(e[c]).lerp(n[c],s);r(1,ht.zenith),r(2,ht.horizon),r(3,ht.sunCol),ht.sunI=Se(e[4],n[4],s),r(5,ht.hemiSky),r(6,ht.hemiGround),ht.hemiI=Se(e[7],n[7],s),r(8,ht.fog),r(9,ht.cLit),r(10,ht.cShade),r(11,ht.cRim),ht.night=Se(e[12],n[12],s),ht.warm=Se(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,o=(i-.25)*Math.PI+.9;ht.sunEl=a,ht.sunDir.set(Math.cos(a)*Math.sin(o),Math.sin(a),Math.cos(a)*Math.cos(o)).normalize(),ht.moonDir.set(-ht.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-ht.sunDir.z).normalize(),ht.lightDir.copy(ht.sunDir),a<.08&&ht.lightDir.lerpVectors(ht.moonDir,ht.sunDir,we((a+.12)/.2,0,1)).normalize(),ht.lightDir.y<.12&&(ht.lightDir.y=.12,ht.lightDir.normalize())}var jf={zenith:[new dt("#7b8594"),new dt("#141a28")],horizon:[new dt("#b5bcc6"),new dt("#283042")],fog:[new dt("#a8b0ba"),new dt("#232b3c")],hemiSky:[new dt("#aab3bf"),new dt("#3c4866")],hemiGround:[new dt("#8b8983"),new dt("#1e2030")],cLit:[new dt("#d0d5dc"),new dt("#2c3240")],cShade:[new dt("#7c8593"),new dt("#151922")]},Su=new dt;function ed(i,t){if(ht.overcast=i,ht.rain=t,i<=.001)return;let e=ht.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Su.copy(jf[n][0]).lerp(jf[n][1],e),ht[n].lerp(Su,i*(n==="cLit"||n==="cShade"?.75:.85));ht.sunI*=1-.82*i,ht.warm*=1-i,ht.cRim.multiplyScalar(1-i),ht.sunCol.lerp(Su.setRGB(.85,.87,.9),i*.6)}function nd(){let i=new oe({side:$e,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ht.zenith},uHorizon:{value:ht.horizon},uSunDir:{value:ht.sunDir},uMoonDir:{value:ht.moonDir},uSunCol:{value:ht.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new dt},uOvercast:{value:0},uDeckLit:{value:new dt},uDeckDark:{value:new dt}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark; uniform float uNight, uWarm, uTime, uCirrus, uOvercast;
      varying vec3 vDir;
      ${zi}
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
      }`}),t=new re(new Fr(5e3,48,24),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function E_(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let d=0;d<a;d++){let y=.06+i()*.05;e.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+y*.5,(i()-.5)*.2,y])}let o=t?6:2,c=s*.82,l=.1+.09;for(let d=0;d<o;d++){let y=Math.max(1,Math.round(c/.11));for(let T=0;T<y;T++){let _=(y===1?0:T/(y-1)-.5)*c+(i()-.5)*.05+r*d;e.push([_,l+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}l+=t?.115:.075,c*=t?.8:.66}let u=e.slice();for(let d of u){if(e.length>92)break;let y=1+Math.floor(i()*2);for(let T=0;T<y;T++){let _=.35+i()*2.4,M=d[3]*(.35+i()*.2);e.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,M])}}let h=e.slice(0,96),f=1e9,p=-1e9,m=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),m=Math.max(m,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(m-.1)),g=(f+p)/2;for(let d of h)d[0]=(d[0]-g)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function id(i){let e={value:Array.from({length:96},()=>new ge)},n=new oe({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${zi}
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
      }`,depthTest:!1,depthWrite:!1,blending:xn}),s=new re(new Fe(1,1),n),r=new Ji,a=new Ki;r.add(s);let o=new Me(1024*2,1024*2,{generateMipmaps:!0,minFilter:In,magFilter:Ne}),c=i.getRenderTarget(),l=i.autoClear,u=un(99);i.setRenderTarget(o),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,m=E_(u,p);m.forEach((x,g)=>e.value[g].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=m.length,n.uniforms.uSeed.value=f*13.7,o.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(o),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return o.viewport.set(0,0,1024*2,1024*2),i.autoClear=l,i.setRenderTarget(c),n.dispose(),s.geometry.dispose(),{tex:o.texture,kinds:h,rt:o}}function sd(i){let t=un(5),e=22,n=[],s=new Fe(1,1);s.translate(0,.5,0);let r=new gn(new Float32Array(e*4),4),a=new gn(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let o=new oe({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ht.cLit},uShade:{value:ht.cShade},uRim:{value:ht.cRim},uHaze:{value:ht.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new hi(s,o,e);c.frustumCulled=!1,c.renderOrder=-5;for(let m=0;m<e;m++){let x=m<12,g=i.kinds[(m*3+(x?0:1))%i.kinds.length],d=x?g.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:m/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:d,cell:g.cell,haze:x?.45:.18})}let l=new qt,u=new He,h=new F,f=new F,p=new F(0,1,0);return{group:c,update(m,x){let g=Math.atan2(ht.lightDir.x,ht.lightDir.z);for(let y of n)y.phi+=x*1.2/y.d;n.slice().sort((y,T)=>T.d-y.d).forEach((y,T)=>{h.set(m.x+Math.sin(y.phi)*y.d,m.y+y.base,m.z+Math.cos(y.phi)*y.d),u.setFromAxisAngle(p,y.phi+Math.PI),f.set(y.size,y.size,1),l.compose(h,u,f),c.setMatrixAt(T,l);let _=g-y.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let M=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-M*M*(3-2*M);r.setXYZW(T,y.cell[0],y.cell[1],S,y.haze),a.setX(T,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ht.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,o.uniforms.uOpacity.value=(1-ht.night*.35)*(1-ht.overcast*.55)}}}function rd(){let i=new Pe;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],o=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*e.R,m=Math.cos(f)*e.R,x=bl(h/360*e.k*4,40+n*9),g=Math.pow(Math.max(0,x-.18)/.82,1.6),d=e.h*(.12+g);if(r.push(p,-60,m,p,-60+d,m),a.push(0,h/360,1,h/360),h<360){let y=h*2;o.push(y,y+1,y+2,y+1,y+3,y+2)}}let c=new ue;c.setAttribute("position",new Zt(r,3)),c.setAttribute("hf",new Zt(a,2)),c.setIndex(o);let l=new oe({side:Ge,fog:!1,uniforms:{uCol:{value:new dt(e.col)},uHaze:{value:ht.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17}},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed; varying vec2 vH; varying float vY;
        ${zi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new re(c,l);u.frustumCulled=!1,u.renderOrder=-8,i.add(u)}),{group:i,update(e){i.position.set(e.x,0,e.z);let n=(.35+.65*(1-ht.night))*(1-.35*ht.overcast);for(let s of i.children)s.material.uniforms.uLight.value=n}}}var rr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function od(i){let t=i.get("weather"),e={mode:rr[t]?t:"auto",kind:rr[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return rr[t]&&(e.ov=rr[t][0],e.rain=rr[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let o=Math.random();e.kind=e.kind==="clear"?o<.5?"cloudy":o<.72?"rain":"clear":e.kind==="cloudy"?o<.5?"clear":o<.85?"rain":"cloudy":o<.55?"cloudy":"clear"}let[s,r]=rr[e.kind];e.ov+=we(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=we(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function ad(){let t=new F(46,24,46),e=new Fe(1,1);e.translate(0,.5,0);let n=new Vr;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let o=0;o<2600;o++)s[o*4]=Math.random(),s[o*4+1]=Math.random(),s[o*4+2]=Math.random(),s[o*4+3]=Math.random();n.setAttribute("aOff",new gn(s,4)),n.instanceCount=2600;let r=new oe({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new F},uRain:{value:0},uBox:{value:t},uCol:{value:new dt(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new re(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(o,c,l,u){a.visible=l>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(o),r.uniforms.uRain.value=l,r.uniforms.uCol.value.setRGB(.55+.35*u,.6+.35*u,.7+.3*u)}}}var or=72;function w_(){let i=[],t=[],e=(s,r,a,o,c,l)=>{i.push(...s,...r,...a),t.push(o,c,l)};e([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),e([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),e([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),e([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])e([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),e([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),e([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new ue;return n.setAttribute("position",new Zt(i,3)),n.setAttribute("aWing",new Zt(t,1)),n}function ld(){let i=w_(),t=new gn(new Float32Array(or*3),3),e=new gn(new Float32Array(or*2),2);i.setAttribute("aCol",t),i.setAttribute("aFlap",e);let n=new oe({side:Ge,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ht.fog},uFogD:{value:.002},uCam:{value:new F}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new hi(i,n,or);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},o=new qt,c=new He,l=new mn(0,0,0,"YXZ"),u=new F,h=new F,f=()=>r.reduce((x,g)=>x+g.birds.length,0);function p(x,g,d,y){let T=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+T>or)return;let _=45+Math.random()*85,M=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,R=new F().copy(g).addScaledVector(d,_).addScaledVector(y,M-S*75);R.y=g.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let v=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new F().copy(y).multiplyScalar(S*v).addScaledVector(d,(Math.random()-.3)*v*.6),P=x==="small"?.8:1.45,I=Array.from({length:T},(D,C)=>({off:new F((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:R,vel:E,birds:I,size:P,life:60})}function m(x,g,d,y){if(r.some(M=>M.kind==="gull")||f()+4>or)return;let T=new F().copy(x).addScaledVector(g,70).addScaledVector(d,-y*45);T.y=x.y+18;let _=Array.from({length:4},(M,S)=>({off:new F,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:T,vel:new F,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,g,d,y,T,_,M,S,R){n.uniforms.uTime.value=g,n.uniforms.uCam.value.copy(d);let v=M>.35&&S<.3,E=ht.warm>.25&&ht.sunEl<.6&&M>.2;v&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,y,T)),(E||v&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,p("crow",d,y,T)),_.coast>.6&&v&&m(d,y,T,1);let P=[.1+.08*M,.11+.09*M,.15+.1*M],I=0;for(let D=r.length-1;D>=0;D--){let C=r[D];if(C.kind==="gull"?(C.c.lerp(u.copy(R).addScaledVector(y,60).addScaledVector(T,-42).setY(R.y+16),Math.min(1,x*.25)),(_.coast<.4||!v)&&(C.life=Math.min(C.life,8),C.c.y+=x*6)):C.c.addScaledVector(C.vel,x),C.life-=x,C.life<0||C.kind!=="gull"&&C.c.distanceTo(d)>300){r.splice(D,1);continue}for(let A of C.birds){if(I>=or)break;let N,B,k,Y;C.kind==="gull"?(A.w+=x*(14/A.r),N=C.c.x+Math.cos(A.w)*A.r,k=C.c.z+Math.sin(A.w)*A.r,B=C.c.y+A.h+Math.sin(g*.4+A.ph)*2,Y=Math.atan2(-Math.sin(A.w),Math.cos(A.w))):(N=C.c.x+A.off.x+Math.sin(g*.7+A.ph)*1.2,B=C.c.y+A.off.y+Math.sin(g*1.1+A.ph)*.6,k=C.c.z+A.off.z,Y=Math.atan2(C.vel.x,C.vel.z)),l.set(0,Y,Math.sin(g+A.ph)*.15),c.setFromEuler(l),h.setScalar(C.size),o.compose(u.set(N,B,k),c,h),s.setMatrixAt(I,o);let H=C.kind==="gull"?[.92*(.5+.5*M),.93*(.5+.5*M),.95*(.5+.5*M)]:C.kind==="crow"?[.05,.05,.07]:P;t.setXYZ(I,H[0],H[1],H[2]),e.setXY(I,A.fq,A.ph),I++}}s.count=I,s.instanceMatrix.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,g){for(let d of r)d.c.x-=x,d.c.z-=g}}}function cd(){let i=new oe({fog:!1,uniforms:{uTime:{value:0},uCam:{value:new F},uSunDir:{value:ht.lightDir},uSunCol:{value:ht.sunCol},uHorizon:{value:ht.horizon},uZenith:{value:ht.zenith},uFog:{value:ht.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${zi}
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
      }`}),t=new re(new Fe(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=Oi,t.renderOrder=-6,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=ht.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ht.overcast*.85}}}function ud(){return new oe({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new dt(1,1,1)}},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${zi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}var _o=new F;function Un(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;_o.copy(t),_o[n]=0,_o.normalize();let l=.5*a/(a+o),u=1-_o.angleTo(i)/c;return Math.sign(_o[e])===1?u*l:o/(a+o)+l+l*(1-u)}var ei=class i extends Vn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new F,l=new F,u=new F(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,m=h.length/6,x=new F,g=.5/a;for(let d=0,y=0;d<h.length;d+=3,y+=2)switch(c.fromArray(h,d),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[d+0]=u.x*Math.sign(c.x)+l.x*r,h[d+1]=u.y*Math.sign(c.y)+l.y*r,h[d+2]=u.z*Math.sign(c.z)+l.z*r,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/m)){case 0:x.set(1,0,0),p[y+0]=Un(x,l,"z","y",r,n),p[y+1]=1-Un(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),p[y+0]=1-Un(x,l,"z","y",r,n),p[y+1]=1-Un(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),p[y+0]=1-Un(x,l,"x","z",r,t),p[y+1]=Un(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),p[y+0]=1-Un(x,l,"x","z",r,t),p[y+1]=1-Un(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),p[y+0]=1-Un(x,l,"x","y",r,t),p[y+1]=1-Un(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),p[y+0]=Un(x,l,"x","y",r,t),p[y+1]=1-Un(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function fd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ue,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=hd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);let m=hd(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function hd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Ze(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,p=u.count;f<p;f++)for(let m=0;m<e;m++){let x=u.getComponent(f,m);o.setComponent(f+h,m,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}function A_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new bn(i);return n.colorSpace=Te,n}function R_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new bn(i);return n.colorSpace=Te,n}function dd(){let i=new Pe,t=(S,R={})=>$s(new Je({color:S,gradientMap:Xn,...R})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),o=$s(new Je({color:"#ffffff",map:R_(),gradientMap:Xn})),c=new Je({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Xn}),l=new Je({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Xn}),u=new Ve({map:A_()}),h=new Map,f=new qt,p=new mn,m=new He,x=new F(1,1,1),g=(S,R,v,E,P,I=0,D=0,C=0)=>{let A=S.index?S.toNonIndexed():S;p.set(I,D,C),m.setFromEuler(p),f.compose(new F(v,E,P),m,x),A.applyMatrix4(f),h.has(R)||h.set(R,[]),h.get(R).push(A)};g(new ei(1.48,.86,3.38,4,.15),e,0,.77,0),g(new ei(1.42,.66,2.6,4,.17),e,0,1.5,-.25),g(new ei(1.38,.09,2.5,3,.04),n,0,1.84,-.25),g(new Fe(1.16,.5),o,0,1.53,-1.556,0,Math.PI,0);for(let S of[-1,1])g(new Fe(2.25,.46),o,S*.712,1.54,-.2,0,S*Math.PI/2,0),g(new ei(.1,.12,.2,2,.04),e,S*.82,1.2,.95),g(new ei(.14,.48,.08,2,.035),c,S*.64,1,-1.67),g(new ei(.12,.08,.06,2,.02),l,S*.64,.7,-1.67);g(new Fe(1.2,.52),o,0,1.52,1.056,-.12,0,0),g(new ei(1.52,.22,.22,2,.07),s,0,.42,-1.62),g(new Vn(.24,.04,.05),s,0,.84,-1.69),g(new Fe(.34,.17),u,0,.72,-1.7,0,Math.PI,0);for(let[S,R]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])g(new Us(.29,.29,.2,20),r,S,.29,R,0,0,Math.PI/2),g(new Us(.16,.16,.205,12),a,S,.29,R,0,0,Math.PI/2);for(let[S,R]of h){let v=new re(fd(R),S);v.castShadow=S!==o&&S!==u,v.receiveShadow=!0,i.add(v)}let d=new Pe;d.position.set(.02,1.3,-1.57),i.add(d);let y=new Vn(.52,.026,.02);y.translate(.27,0,0);let T=new re(y,s);T.rotation.z=.18,d.add(T);let _=0,M=new kr(16773328,0,70,.55,.65,1.2);return M.position.set(0,.8,1.6),M.target.position.set(0,0,18),i.add(M,M.target),{group:i,mBody:e,update(S,R,v,E=0){if(c.emissiveIntensity=.35+v*3.2,E>.15||_%2.6>.01){_+=S;let P=_%2.6/2.6,I=C=>C*C*(3-2*C),D=P<.25?I(P/.25):P<.5?I(1-(P-.25)/.25):0;T.rotation.z=.18+D*2.5,E<=.15&&P>=.5&&(_=0)}M.intensity=v*60}}}var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},C_=new Di(-1,1,1,-1,0,1),bu=class extends ue{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},P_=new bu,Vi=class{constructor(t){this._mesh=new re(P_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,C_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lr=class extends An{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pi.clone(t.uniforms),this.material=new oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vo=class extends An{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nl=class extends An{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ul=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ht);this._width=n.width,this._height=n.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Be}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(ar),this.copyPass.material.blending=xn,this.timer=new Gr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(a instanceof vo?n=!0:a instanceof Nl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fl=class extends An{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new dt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var pd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var cr=class i extends An{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ht(t.x,t.y):new Ht(256,256),this.clearColor=new dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Me(r,a,{type:Be,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Me(r,a,{type:Be,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Me(r,a,{type:Be,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=pd;this.highPassUniforms=pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ht(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pi.clone(ar.uniforms),this.blendMaterial=new oe({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,premultipliedAlpha:!0,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new dt,this._oldClearAlpha=1,this._basic=new Ve,this._fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new oe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ht(.5,.5)},direction:{value:new Ht(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};cr.BlurDirectionX=new Ht(1,0);cr.BlurDirectionY=new Ht(0,1);var yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bl=class extends An{constructor(){super(),this.isOutputPass=!0,this.uniforms=pi.clone(yo.uniforms),this.material=new Fs({name:yo.name,uniforms:this.uniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ts?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var I_={uniforms:{tDiffuse:{value:null},uSun:{value:new Ht(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function md(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new Ht),a=new Me(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:Be,samples:n}),o=new Ul(i,a);o.addPass(new Fl(t,e));let c=new cr(new Ht(r.x*s*.5,r.y*s*.5),.42,.55,.86);o.addPass(c),o.addPass(new Bl);let l=new lr(I_);return o.addPass(l),{composer:o,bloom:c,grade:l}}function gd(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let G=0;G<2;G++){let ot=s.getChannelData(G);for(let K=0;K<n;K++)ot[K]=(Math.random()*2-1)*Math.pow(1-K/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=900,o.Q.value=.3;let c=t.createGain();c.gain.value=.11,o.connect(c),c.connect(e),c.connect(r);let l=(G,ot)=>{let K=t.createBuffer(1,t.sampleRate*G,t.sampleRate),st=K.getChannelData(0),lt=0;for(let ut=0;ut<st.length;ut++)ot?(lt=(lt+.02*(Math.random()*2-1))/1.02,st[ut]=lt*3.5):st[ut]=Math.random()*2-1;return K},u=(G,ot,K)=>{let st=t.createBufferSource();st.buffer=G,st.loop=!0;let lt=t.createBiquadFilter();lt.type=ot,lt.frequency.value=K;let ut=t.createGain();return ut.gain.value=0,st.connect(lt),lt.connect(ut),ut.connect(e),st.start(),{f:lt,g:ut}},h=u(l(2,!0),"lowpass",400),f=u(l(3,!1),"lowpass",700);f.g.connect(r);let p=u(l(2,!1),"bandpass",5200);p.f.Q.value=6;let m=u(l(2,!0),"lowpass",240),x=u(l(3,!1),"bandpass",2600);x.f.Q.value=.35;let g=u(l(2,!0),"lowpass",520),d=l(.03,!1),y=0;function T(G,ot){let K=t.createBufferSource(),st=t.createBiquadFilter(),lt=t.createGain();K.buffer=d,st.type="bandpass",st.frequency.value=1800+Math.random()*2600,st.Q.value=1.2,lt.gain.setValueAtTime(ot*(.02+Math.random()*.03),G),lt.gain.exponentialRampToValueAtTime(1e-4,G+.03),K.connect(st),st.connect(lt),lt.connect(e),K.start(G),K.stop(G+.04)}let _=0,M=0;function S(G,ot){let K=t.createOscillator(),st=t.createOscillator(),lt=t.createGain(),ut=t.createBiquadFilter();ut.type="bandpass",ut.frequency.value=1150,ut.Q.value=2.2,K.type="square",K.frequency.value=745,st.type="triangle",st.frequency.value=1490,lt.gain.setValueAtTime(0,G),lt.gain.linearRampToValueAtTime(.085*ot,G+.004),lt.gain.exponentialRampToValueAtTime(1e-4,G+.3),K.connect(ut),st.connect(ut),ut.connect(lt),lt.connect(e),lt.connect(r),K.start(G),st.start(G),K.stop(G+.33),st.stop(G+.33)}function R(G,ot){let K=t.createOscillator(),st=t.createGain();K.type="sine",K.frequency.setValueAtTime(110,G),K.frequency.exponentialRampToValueAtTime(48,G+.12),st.gain.setValueAtTime(1e-4,G),st.gain.linearRampToValueAtTime(.22*ot,G+.006),st.gain.exponentialRampToValueAtTime(1e-4,G+.17),K.connect(st),st.connect(e),K.start(G),K.stop(G+.2)}let v=t.createGain();v.gain.value=1,v.connect(e);let E=t.createGain();E.gain.value=.35,v.connect(E),E.connect(r);let P=(G=(Math.random()-.5)*1.4)=>{if(!t.createStereoPanner)return v;let ot=t.createStereoPanner();return ot.pan.value=G,ot.connect(v),ot};function I(G,ot,K,st,lt,ut,Ft="sine",$t=0){let It=t.createOscillator(),Vt=t.createGain();if(It.type=Ft,It.frequency.setValueAtTime(ot,G),It.frequency.exponentialRampToValueAtTime(K,G+st),$t){let Wt=t.createOscillator(),xe=t.createGain();Wt.frequency.value=$t,xe.gain.value=ot*.012,Wt.connect(xe),xe.connect(It.frequency),Wt.start(G),Wt.stop(G+st+.05)}return Vt.gain.setValueAtTime(1e-4,G),Vt.gain.linearRampToValueAtTime(lt,G+Math.min(.04,st*.25)),Vt.gain.setValueAtTime(lt,G+st*.7),Vt.gain.exponentialRampToValueAtTime(1e-4,G+st),It.connect(Vt),Vt.connect(ut),It.start(G),It.stop(G+st+.02),Vt}function D(G,ot){let K=P(),st=2+Math.floor(Math.random()*4),lt=3200+Math.random()*1500;for(let ut=0;ut<st;ut++){let Ft=G+ut*(.09+Math.random()*.07);I(Ft,lt,lt*(1.2+Math.random()*.3),.06,ot*.022,K)}}function C(G,ot){let K=P();I(G,1120,1390,1,ot*.03,K,"sine",5.5),I(G+1.15,2350,2150,.14,ot*.03,K),I(G+1.32,1700,1520,.13,ot*.028,K),I(G+1.5,2750,2480,.36,ot*.032,K)}function A(G,ot){let K=P(),st=1+Math.floor(Math.random()*3);for(let lt=0;lt<st;lt++){let ut=G+lt*.48,Ft=t.createOscillator(),$t=t.createBiquadFilter(),It=t.createGain();Ft.type="sawtooth",Ft.frequency.setValueAtTime(560,ut),Ft.frequency.exponentialRampToValueAtTime(420,ut+.32),$t.type="bandpass",$t.frequency.value=1150,$t.Q.value=1.6,It.gain.setValueAtTime(1e-4,ut),It.gain.linearRampToValueAtTime(ot*.03,ut+.03),It.gain.exponentialRampToValueAtTime(1e-4,ut+.36),Ft.connect($t),$t.connect(It),It.connect(K),Ft.start(ut),Ft.stop(ut+.4)}}function N(G,ot){let K=P(),st=2+Math.floor(Math.random()*2);for(let lt=0;lt<st;lt++)I(G+lt*.42,1750,1150,.36,ot*.022,K,"triangle",11)}function B(G,ot){let K=P(),st=t.createOscillator(),lt=t.createBiquadFilter(),ut=t.createGain(),Ft=240+Math.random()*220,$t=5+Math.floor(Math.random()*4);st.type="square",st.frequency.value=Ft,lt.type="bandpass",lt.frequency.value=Ft*2.4,lt.Q.value=3,ut.gain.setValueAtTime(1e-4,G);for(let It=0;It<$t;It++){let Vt=G+It*.038;ut.gain.linearRampToValueAtTime(ot*.014,Vt+.008),ut.gain.linearRampToValueAtTime(1e-4,Vt+.028)}st.connect(lt),lt.connect(ut),ut.connect(K),st.start(G),st.stop(G+$t*.038+.05)}function k(G,ot){let K=P(),st=4300+Math.random()*700;for(let lt=0;lt<3;lt++)I(G+lt*.055,st,st*1.01,.035,ot*.009,K)}function Y(G,ot){let K=P();for(let st of[G,G+.22])I(st,2650,2600,.5,ot*.018,K),I(st,3950,3900,.35,ot*.008,K)}let H={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30},Z=G=>G>1e-4?-Math.log(1-Math.random()*.98)/G:1e9,Q=G=>440*Math.pow(2,(G-69)/12),St=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],At=[72,74,76,79,81,84,86,88],jt=0,Ot=t.currentTime+.2,Gt=t.currentTime+3;function $(G){let ot=St[jt++%St.length],K=11;for(let st of ot)for(let lt of[-5,5]){let ut=t.createOscillator(),Ft=t.createGain();ut.type=lt<0?"sine":"triangle",ut.frequency.value=Q(st),ut.detune.value=lt,Ft.gain.setValueAtTime(0,G),Ft.gain.linearRampToValueAtTime(.18,G+3.5),Ft.gain.setValueAtTime(.18,G+K-4),Ft.gain.linearRampToValueAtTime(0,G+K+1),ut.connect(Ft),Ft.connect(o),ut.start(G),ut.stop(G+K+1.2)}}function it(G){let ot=At[Math.floor(Math.random()*At.length)],K=t.createOscillator(),st=t.createOscillator(),lt=t.createGain(),ut=t.createGain();K.type=st.type="sine",K.frequency.value=Q(ot),st.frequency.value=Q(ot)*2.01,ut.gain.value=.25,st.connect(ut),ut.connect(lt),lt.gain.setValueAtTime(0,G),lt.gain.linearRampToValueAtTime(.05,G+.02),lt.gain.exponentialRampToValueAtTime(1e-4,G+4),K.connect(lt),lt.connect(r),lt.connect(e),K.start(G),st.start(G),K.stop(G+4.2),st.stop(G+4.2)}return{ac:t,muted:!1,update(G,ot,K,st={}){let lt=t.currentTime;if((st.bell||0)>.01)for(_<lt&&(_=lt+.02);_<lt+.12;)S(_,st.bell),_+=.41;let ut=st.rain||0;if(x.g.gain.setTargetAtTime(ut*.05,lt,.6),g.g.gain.setTargetAtTime(ut*.05,lt,.6),ut>.05&&st.roof)for(y<lt&&(y=lt+.02);y<lt+.12;)T(y,ut),y+=.04+Math.random()*.12/ut;let Ft=st.train||0;if(m.g.gain.setTargetAtTime(Ft*.16,lt,.2),Ft>.04)for(M<lt&&(M=lt+.02);M<lt+.12;)R(M,Ft),R(M+.15,Ft*.8),M+=1.2;for(;Ot<lt+1;)$(Ot),Ot+=8;Gt<lt+.5&&(it(Gt),Gt+=1.5+Math.random()*4.5),h.g.gain.setTargetAtTime(.03+G*.06,lt,.5),h.f.frequency.setTargetAtTime(250+G*500,lt,.5);let $t=.5+.5*Math.sin(lt*.55)*Math.sin(lt*.21+1);f.g.gain.setTargetAtTime(ot.coast*(.012+$t*.05),lt,.3),f.f.frequency.setTargetAtTime(400+$t*900,lt,.3);let It=1-Math.min(1,ut*1.4),Vt=1-K,Wt=st.dusk||0,xe={sparrow:K*It*.22*(.3+ot.city*.5+ot.sakura+ot.country*.8+ot.coast*.2),uguisu:K*It*ot.sakura*.06,crow:It*(Wt*.14+K*(ot.city+ot.country)*.012),gull:K*ot.coast*It*.16,frog:Vt*(ot.country*5+ot.sakura*.6+ot.coast*.3)*(1+ut*.6),cricket:Vt*It*(1.6-ot.city*1.1),bike:K*It*ot.city*.014},fe={sparrow:D,uguisu:C,crow:A,gull:N,frog:B,cricket:k,bike:Y};for(let O in xe)lt<H[O]||(xe[O]>1e-4&&fe[O](lt+.05,.6+Math.random()*.4),H[O]=lt+Math.max(.12,Z(xe[O]||1e-6)));let _e=.5+.5*Math.sin(lt*7)*Math.sin(lt*.4);p.g.gain.setTargetAtTime((ot.country+ot.sakura*.3)*K*.006*_e,lt,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function xd(i){let e=new Fe(.075,.05),n=new Ve({color:new dt("#ffd0de"),side:Ge}),s=new hi(e,n,420);s.frustumCulled=!1,s.count=0;let r=Array.from({length:420},()=>({p:new F(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6})),a=new qt,o=new He,c=new mn,l=new F(1,1,1),u=new F,h=90,f=new Float32Array(h*3),p=Array.from({length:h},()=>({p:new F(1e9,0,0),ph:Math.random()*6.28})),m=new ue;m.setAttribute("position",new Ze(f,3));let x=new Ns({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:fi,opacity:0}),g=new Ir(m,x);g.frustumCulled=!1;let d=(y,T,_,M,S)=>{let R=S?8+Math.random()*42:-4+Math.random()*50,v=(Math.random()-.5)*40;y.p.set(T.x+_.x*R+M.x*v,T.y-1+Math.random()*9,T.z+_.z*R+M.z*v)};return{group:[s,g],shift(y,T){for(let _ of r)_.p.x-=y,_.p.z-=T;for(let _ of p)_.p.x-=y,_.p.z-=T},update(y,T,_,M,S,R,v,E,P){let I=Math.floor(420*Math.min(1,R*1.1));s.count=I;for(let C=0;C<I;C++){let A=r[C];u.subVectors(A.p,_);let N=u.x*M.x+u.z*M.z,B=u.x*S.x+u.z*S.z;(A.p.x>1e8||N<-6||N>55||Math.abs(B)>24||A.p.y<v-.5)&&d(A,_,M,S,A.p.x<1e8),A.p.y-=A.v*y,A.p.x+=Math.sin(T*.7+A.ph)*.4*y+.25*y,A.p.z+=Math.cos(T*.5+A.ph)*.3*y,c.set(T*A.sp+A.ph,T*A.sp*.7,A.ph),o.setFromEuler(c),a.compose(A.p,o,l),s.setMatrixAt(C,a)}s.instanceMatrix.needsUpdate=!0;let D=E*P;if(x.opacity=D,g.visible=D>.01,g.visible){for(let C=0;C<h;C++){let A=p[C];u.subVectors(A.p,_);let N=u.x*M.x+u.z*M.z,B=u.x*S.x+u.z*S.z;if(A.p.x>1e8||N<-4||N>60||Math.abs(B)>30){let k=2+Math.random()*55,Y=(Math.random()-.5)*55;A.p.set(_.x+M.x*k+S.x*Y,v+.3+Math.random()*2.2,_.z+M.z*k+S.z*Y)}A.p.x+=Math.sin(T*.6+A.ph*3)*.3*y,A.p.y+=Math.sin(T*.9+A.ph)*.2*y,A.p.z+=Math.cos(T*.5+A.ph*2)*.3*y,f[C*3]=A.p.x,f[C*3+1]=A.p.y,f[C*3+2]=A.p.z}m.attributes.position.needsUpdate=!0}}}}var on=new URLSearchParams(location.search),Mo=on.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Mo&&document.body.classList.add("embed");on.has("shot")&&document.body.classList.add("shot");pf(on.has("seed")?parseInt(on.get("seed")):Math.random()*1e9|0);_f(on.get("env")||"city");var rn=i=>document.getElementById(i),So=i=>{let t=rn("loading");t&&(t.textContent=i)};async function L_(){await new Promise(nt=>setTimeout(nt,30));let i=rn("c"),t=new _l({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=on.get("q")||(Mo||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Mo?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=Te,t.toneMapping=ts,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Qi;let r=new Ji;r.fog=new Ar(13032946,.0019,700);let a=new Ye(52,innerWidth/innerHeight,.5,7e3),o=new Hr(16777215,3);o.castShadow=!0;let c=n==="low"?1024:2048;o.shadow.mapSize.set(c,c),Object.assign(o.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:420}),o.shadow.bias=-4e-4,o.shadow.normalBias=.05,r.add(o,o.target);let l=new Or(10799359,13154464,1.6);r.add(l),So("painting the town\u2026"),await new Promise(nt=>setTimeout(nt,10));let u=If();Nf(u);let h=Lf(t);Hf(h.cells);let f=bf(u.textures(t),h.tex);So("painting the clouds\u2026"),await new Promise(nt=>setTimeout(nt,10));let p=new Tl,m=ud(),x=new Ll(r,p,f,m),g=nd();r.add(g);let d=sd(id(t));r.add(d.group);let y=rd();r.add(y.group);let T=cd();r.add(T.mesh);let _=dd();_.group.rotation.order="YXZ",r.add(_.group);let M=xd(f.glowTex);M.group.forEach(nt=>r.add(nt));let S=md(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),R=Ef();r.add(R.group);let v=wf();r.add(v.group);let E=od(on),P=ad();r.add(P.mesh);let I=ld();r.add(I.mesh);let D=E.W.rain,C={s:Math.max(100,parseFloat(on.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:we(parseFloat(on.get("t"))||.4,0,.999),todPaused:on.has("freeze"),dist:0,cam:{low:1,eye:2}[on.get("cam")]||0},A=!1;So("building the road\u2026"),await new Promise(nt=>setTimeout(nt,10));let N=Mo?620:x.ahead;for(x.ahead=260;x.update(C.s,1e9););x.ahead=N;let B={k:Math.ceil((C.s-Zs)/Ys),phase:"idle",raise:1,decided:!1,t2:0},k={},Y={},H={},Z=new F,Q=new F,St=new F,At=!1,jt=new F,Ot=new F,Gt=rn("spd"),$=rn("dist"),it=rn("clock"),G=rn("zone"),ot=rn("start"),K=rn("hint"),st=null,lt=null,ut=0,Ft=0;function $t(nt){!A||nt===lt||(lt=nt,G.querySelector(".jp").textContent=lo[nt].jp,G.querySelector(".en").textContent=lo[nt].en,G.classList.add("on"),clearTimeout(ut),ut=setTimeout(()=>G.classList.remove("on"),5200))}function It(){if(!A){if(A=!0,document.body.classList.remove("pre"),!on.has("auto"))try{st=gd(),st&&st.ac.resume()}catch{st=null}ot.style.opacity=0,setTimeout(()=>ot.remove(),1500),Mo||(K.style.opacity=.75,setTimeout(()=>K.style.opacity=0,9e3))}}let Vt={};addEventListener("keydown",nt=>{Vt[nt.key]=!0,(nt.key==="m"||nt.key==="M")&&xe(),(nt.key==="t"||nt.key==="T")&&fe(),(nt.key==="c"||nt.key==="C")&&_e(),(nt.key==="r"||nt.key==="R")&&De(),!A&&(nt.key===" "||nt.key==="Enter")&&It()}),addEventListener("keyup",nt=>{Vt[nt.key]=!1});let Wt=null;i.addEventListener("pointerdown",nt=>{Wt={id:nt.pointerId,x:nt.clientX,y:nt.clientY,sy:nt.clientY,sc:C.mult}}),addEventListener("pointermove",nt=>{Wt&&nt.pointerId===Wt.id&&(Wt.x=nt.clientX,Wt.y=nt.clientY,C.mult=we(Wt.sc-(Wt.y-Wt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{Wt=null}),addEventListener("pointercancel",()=>{Wt=null}),i.addEventListener("touchstart",nt=>{let Dt=nt.changedTouches[0];Wt={id:"touch",x:Dt.clientX,y:Dt.clientY,sy:Dt.clientY,sc:C.mult},nt.preventDefault()},{passive:!1}),i.addEventListener("touchmove",nt=>{if(!Wt)return;let Dt=nt.changedTouches[0];Wt.x=Dt.clientX,Wt.y=Dt.clientY,C.mult=we(Wt.sc-(Wt.y-Wt.sy)/innerHeight*1.6,.4,1.8),nt.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Wt=null}),i.addEventListener("touchcancel",()=>{Wt=null});function xe(){st&&(st.toggle(),rn("snd").style.opacity=st.muted?.4:1)}function fe(){C.todPaused=!C.todPaused,rn("tim").style.opacity=C.todPaused?.4:1}function _e(){C.cam=(C.cam+1)%3}let O={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function De(){rn("wx").textContent=O[E.cycle()]}rn("wx").textContent=O[E.W.mode],rn("wx").onclick=nt=>{nt.stopPropagation(),De()},rn("snd").onclick=nt=>{nt.stopPropagation(),xe()},rn("tim").onclick=nt=>{nt.stopPropagation(),fe()},rn("cam").onclick=nt=>{nt.stopPropagation(),_e()};let ae=0,L=nt=>{let Dt=performance.now();Dt-ae<120||(ae=Dt,nt.cancelable&&nt.type!=="click"&&nt.preventDefault(),It())};for(let nt of["touchstart","pointerdown","mousedown","click"])ot.addEventListener(nt,L,{passive:!1});let b=()=>{st&&st.ac.state!=="running"&&st.ac.resume()};for(let nt of["touchend","click","keydown"])addEventListener(nt,b,{passive:!0});document.addEventListener("visibilitychange",()=>{st&&(document.hidden?st.ac.suspend():st.ac.resume())});let V=!1,q="";function j(){let nt=innerWidth,Dt=innerHeight,U=nt/Dt,mt=nt+"x"+Dt+"@"+s;mt!==q&&(q=mt,t.setPixelRatio(s),t.setSize(nt,Dt,!1),S.composer.setPixelRatio(s),S.composer.setSize(nt,Dt),a.aspect=U,a.fov=U>=1?52:we(2*Math.atan(Math.tan(34*Math.PI/180)/U)*180/Math.PI,52,80),a.updateProjectionMatrix(),S.grade.uniforms.uAspect.value=U)}addEventListener("resize",()=>{V=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{V=!0}),j();let pt=0;function xt(nt=!0){if(s>1.05)s=Math.max(1,s-.25),V=!0;else if(S.bloom.enabled)S.bloom.enabled=!1;else if(o.shadow.mapSize.x>1024)o.shadow.mapSize.set(1024,1024),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null);else if(x.ahead>430)x.ahead=430;else return;if(pt++,nt)try{localStorage.setItem("icd-q",String(pt))}catch{}}try{let nt=parseInt(localStorage.getItem("icd-q")||"0");if(!on.has("q"))for(let Dt=0;Dt<Math.min(nt,6);Dt++)xt(!1);pt=Math.max(pt,nt||0)}catch{}let tt=performance.now(),et=0,Mt=0,Lt=0,_t=()=>1-ht.night,vt=0;function Bt(nt){requestAnimationFrame(Bt);let Dt=performance.now();V&&(V=!1,j());let U=Math.min(.05,(nt-tt)/1e3);tt=nt,et+=U,C.steer=0,(Vt.ArrowLeft||Vt.a||Vt.A)&&(C.steer=-1),(Vt.ArrowRight||Vt.d||Vt.D)&&(C.steer=1),(Vt.ArrowUp||Vt.w||Vt.W)&&(C.mult=we(C.mult+U*.4,.4,1.8)),(Vt.ArrowDown||Vt.s||Vt.S)&&(C.mult=we(C.mult-U*.4,.4,1.8)),Wt&&Math.abs(Wt.y-Wt.sy)<30&&(C.steer=Wt.x<innerWidth/2?-1:1),C.steer&&(C.lastInput=nt);let mt=Js(B.k);C.s-mt>24&&(B.k++,mt=Js(B.k),Object.assign(B,{phase:"idle",raise:1,decided:!1}));let rt=co(mt),gt=mt-C.s;rt&&!B.decided&&gt<150&&(B.decided=!0,gt>75&&A&&(on.has("xing")||gi(B.k,99)<.8)&&(B.phase="warn",v.start(mt,gi(B.k,7)<.5?1:-1,16))),B.phase==="warn"?(B.raise=Math.max(0,B.raise-U/6),v.st.cleared&&(B.phase="clear",B.t2=0)):B.phase==="clear"?(B.raise=Math.max(0,B.raise-U/6),(B.t2+=U)>2.2&&(B.phase="raise")):B.phase==="raise"&&(B.raise=Math.min(1,B.raise+U/5),B.raise>=1&&(B.phase="idle"));let Tt=B.phase==="warn"||B.phase==="clear"||B.phase==="raise"&&B.raise<.25,at=wn(C.s,"speed")*C.mult*(A?1:.55);if(B.phase!=="idle"&&B.raise<.8&&gt>0){let qe=gt-11.2,w=qe>0?Math.sqrt(2*1.25*qe):0;at=Math.min(at,w),C.speed=Math.min(C.speed,w)}C.speed+=(at-C.speed)*Math.min(1,U*.5),C.s+=C.speed*U,C.dist+=C.speed*U;let zt=wn(C.s,"rw");C.steer?C.u=we(C.u+C.steer*U*2.4,-zt+.85,zt-.85):nt-C.lastInput>3e3&&(C.u+=(-1.65+Math.sin(et/11)*.1-C.u)*Math.min(1,U*.9)),!C.todPaused&&A&&(C.tod=(C.tod+U/480*(ht.night>.5?1.7:1))%1),td(C.tod),E.update(U);let Rt=E.W.ov,ie=E.W.rain;ed(Rt,ie),D=we(D+(ie>.25?U/18:-U/120),0,1);let le=performance.now();x.update(C.s,A?6:14);let yn=performance.now();if(p.at(C.s,k),Math.abs(k.x-x.origin.x)>900||Math.abs(k.z-x.origin.z)>900){let qe=Math.round(k.x)-x.origin.x,w=Math.round(k.z)-x.origin.z;x.setOrigin(Math.round(k.x),Math.round(k.z)),Z.x-=qe,Z.z-=w,Q.x-=qe,Q.z-=w,M.shift&&M.shift(qe,w),I.shift(qe,w)}let fn=x.origin.x,ur=x.origin.z,Ol=(p.at(C.s+1.5,H).y-p.at(C.s-1.5,Y).y)/3;_.group.position.set(k.x+k.rx*C.u-fn,k.y+.01,k.z+k.rz*C.u-ur);let bo=C.steer?-C.steer*.05:0;_.group.rotation.set(-Math.atan(Ol),k.h+bo,0),_.update(U,C.speed,ht.night,ie),R.update(rt&&gt>-24&&gt<700?Al(p,mt):null,x.origin,B.raise,Tt,et),v.update(U,p,x.origin,vn(.15,.8,ht.night),wn(mt,"rw")+3.2);let Rn=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6}][C.cam];_.group.visible=C.cam!==2,p.at(C.s-Rn.back,Y),p.at(C.s+Rn.ahead,H);let hr=C.u*Rn.cu+(Rn.side||0);St.set(Y.x+Y.rx*hr-fn,Y.y+Rn.up,Y.z+Y.rz*hr-ur);let fr=new F(H.x+H.rx*C.u*Rn.lu-fn,H.y+Rn.lookY,H.z+H.rz*C.u*Rn.lu-ur);At||(Z.copy(St),Q.copy(fr),At=!0),Z.lerp(St,1-Math.exp(-U*6)),Q.lerp(fr,1-Math.exp(-U*5)),a.position.copy(Z),a.lookAt(Q),jt.set(k.fx,0,k.fz),Ot.set(k.rx,0,k.rz);let Xe=nn(C.s);o.color.copy(ht.sunCol),o.intensity=ht.sunI,o.target.position.set(_.group.position.x+k.fx*30,_.group.position.y,_.group.position.z+k.fz*30),o.position.copy(o.target.position).addScaledVector(ht.lightDir,200),l.color.copy(ht.hemiSky),l.groundColor.copy(ht.hemiGround),l.intensity=ht.hemiI,r.fog.color.copy(ht.fog);let cs=(Xe.city*.0022+Xe.sakura*.0019+Xe.coast*.0011+Xe.country*.0014)*(1+ht.night*.25);r.fog.near=cs*(1+.55*Rt+.45*ie),r.fog.far=x.ahead*.92,sn.uSkyHor.value.copy(ht.horizon),sn.uSkyZen.value.copy(ht.zenith),sn.uTime.value=et,sn.uWet.value=D,sn.uOrigin.value.set(x.origin.x,x.origin.z),sn.uCloudSh.value=(1-Rt)*vn(.04,.3,ht.sunEl)*(1-ht.night);let Fn=g.material.uniforms;Fn.uNight.value=ht.night,Fn.uWarm.value=ht.warm,Fn.uTime.value=et,Fn.uCirrusCol.value.copy(ht.cLit).lerp(ht.horizon,.25),Fn.uCirrus.value=.6*(1-Rt),Fn.uOvercast.value=Rt,Fn.uDeckLit.value.copy(ht.horizon).lerp(ht.cLit,.35),Fn.uDeckDark.value.copy(ht.zenith).lerp(ht.horizon,.25).multiplyScalar(.82),g.position.copy(a.position),d.update(a.position,U),y.update(a.position);let Gi=0;for(let qe of[-150,0,250,500,800])Gi=Math.max(Gi,nn(C.s+qe).coast);T.mesh.visible=Gi>.001,T.update(a.position,et,cs*.8,vn(0,.35,Gi)),m.uniforms.uTime.value=et,m.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*_t());let dn=vn(.15,.8,ht.night);f.atlas.emissiveIntensity=.1+dn*1.05,f.lamp.color.setRGB(.85,.85,.8).lerp(new dt(3.6,2.8,1.8),dn),f.pool.opacity=dn*.42*(1+.8*D),sn.uNight.value=dn,S.bloom.strength=Se(.32,.55,dn),S.bloom.threshold=Se(1.35,.95,dn),S.bloom.radius=Se(.55,.35,dn),t.toneMappingExposure=Se(1,1.15,dn),St.copy(a.position).addScaledVector(ht.sunDir,1e3).project(a);let ni=S.grade.uniforms,us=St.z<1?1:0,To=Math.max(Math.abs(St.x),Math.abs(St.y));ni.uSun.value.set(St.x*.5+.5,St.y*.5+.5),ni.uSunVis.value=us*(1-vn(1,1.9,To))*vn(-.02,.15,ht.sunEl)*(1-ht.night)*(1-Rt),ni.uSat.value=1.1-.12*Rt,ni.uDay.value=_t(),ni.uWarm.value=ht.warm,ni.uTime.value=et,P.update(a.position,et,ie,_t()),I.setFog(r.fog.near),I.update(U,et,a.position,jt,Ot,Xe,_t(),ie,_.group.position);let Eo=performance.now();M.update(U,et,a.position,jt,Ot,Xe.sakura,k.y,dn,Xe.country+Xe.sakura*.4);let zl=performance.now();if(st){p.at(mt,H);let qe=Math.hypot(H.x-x.origin.x-a.position.x,H.z-x.origin.z-a.position.z),w=v.st.active?v.group.position.distanceTo(a.position):1e9;st.update(C.speed/15,Xe,_t(),{bell:Tt?Math.pow(we(1-qe/260,0,1),1.5):0,train:Math.pow(we(1-w/230,0,1),2),rain:ie,roof:C.cam!==2,dusk:ht.warm*(C.tod>.5?1:.3)})}$t(Ae(C.s+40));let kl=performance.now();S.composer.render(U);let Hl=performance.now(),vi=window.__pb||(window.__pb={world:0,parts:0,render:0});if(vi.world=vi.world*.95+(yn-le)*.05,vi.parts=vi.parts*.95+(zl-Eo)*.05,vi.render=vi.render*.95+(Hl-kl)*.05,vt=vt*.95+(performance.now()-Dt)*.05,window.__ft=vt,(Ft+=U)>.25){Ft=0,Gt.textContent=Math.round(C.speed*3.6),$.textContent=(C.dist/1e3).toFixed(1);let qe=Math.floor(C.tod*1440);it.textContent=`${String(Math.floor(qe/60)).padStart(2,"0")}:${String(qe%60).padStart(2,"0")}`}Mt++,A&&Mt>150&&U>.03?Lt+=U:Lt=Math.max(0,Lt-U*.5),Lt>3&&!on.has("q")&&(Lt=0,xt())}window.__dbg={renderer:t,st:C,scene:r,camera:a,world:x,TOD:ht,X:B,train:v,weather:E,U:sn,birds:I},So(""),ot.classList.add("ready"),on.has("auto")&&It(),requestAnimationFrame(Bt)}L_().catch(i=>{console.error(i),So("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
