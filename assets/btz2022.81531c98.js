import"./year.d05e41b6.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ym=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function xe(o){return(e,t)=>t!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(o,e,t):ym(o,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Za;((Za=window.HTMLSlotElement)===null||Za===void 0?void 0:Za.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="144",Em=0,lu=1,Im=2,xp=1,Cm=2,Gr=3,ni=0,It=1,Gt=2,ei=0,$s=1,cu=2,hu=3,uu=4,wm=5,ks=100,Sm=101,bm=102,du=103,fu=104,Mm=200,Bm=201,Tm=202,Rm=203,yp=204,Ep=205,Dm=206,Lm=207,Fm=208,Pm=209,Qm=210,Nm=0,Um=1,Om=2,Kc=3,km=4,Gm=5,zm=6,Vm=7,Ip=0,Hm=1,Wm=2,Sn=0,qm=1,$m=2,Ym=3,Cp=4,Xm=5,wp=300,Js=301,js=302,Ba=303,Jc=304,za=306,ii=1e3,Rt=1001,so=1002,dt=1003,Ta=1004,Ra=1005,Ze=1006,Rh=1007,si=1008,kt=1009,Km=1010,Jm=1011,Sp=1012,jm=1013,Xi=1014,Dt=1015,Lt=1016,Zm=1017,e0=1018,Ys=1020,t0=1021,n0=1022,at=1023,i0=1024,s0=1025,Ji=1026,Zs=1027,zr=1028,r0=1029,Vr=1030,o0=1031,a0=1033,pa=33776,el=33777,tl=33778,ga=33779,jc=35840,Au=35841,Zc=35842,pu=35843,bp=36196,eh=37492,th=37496,nh=37808,gu=37809,mu=37810,_u=37811,vu=37812,xu=37813,yu=37814,Eu=37815,Iu=37816,Cu=37817,wu=37818,Su=37819,bu=37820,Mu=37821,ih=36492,Mp=2200,Dh=2201,Lh=2202,er=2300,ts=2301,nl=2302,zs=2400,Vs=2401,Da=2402,Fh=2500,l0=2501,c0=1,Bp=2,Ct=3e3,Me=3001,h0=3200,u0=3201,Ph=0,d0=1,Kn="srgb",Ki="srgb-linear",il=7680,f0=519,sh=35044,Bu="300 es",rh=1035;class sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const Jr=Math.PI/180,ro=180/Math.PI;function dn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[o&255]+vt[o>>8&255]+vt[o>>16&255]+vt[o>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function mt(o,e,t){return Math.max(e,Math.min(t,o))}function Qh(o,e){return(o%e+e)%e}function A0(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function p0(o,e,t){return o!==e?(t-o)/(e-o):0}function jr(o,e,t){return(1-t)*o+t*e}function g0(o,e,t,n){return jr(o,e,1-Math.exp(-t*n))}function m0(o,e=1){return e-Math.abs(Qh(o,e*2)-e)}function _0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function v0(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function x0(o,e){return o+Math.floor(Math.random()*(e-o+1))}function y0(o,e){return o+Math.random()*(e-o)}function E0(o){return o*(.5-Math.random())}function I0(o){o!==void 0&&(Tu=o);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(o){return o*Jr}function w0(o){return o*ro}function oh(o){return(o&o-1)===0&&o!==0}function Tp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function La(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function S0(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function We(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Rp=Object.freeze({__proto__:null,DEG2RAD:Jr,RAD2DEG:ro,generateUUID:dn,clamp:mt,euclideanModulo:Qh,mapLinear:A0,inverseLerp:p0,lerp:jr,damp:g0,pingpong:m0,smoothstep:_0,smootherstep:v0,randInt:x0,randFloat:y0,randFloatSpread:E0,seededRandom:I0,degToRad:C0,radToDeg:w0,isPowerOfTwo:oh,ceilPowerOfTwo:Tp,floorPowerOfTwo:La,setQuaternionFromProperEuler:S0,normalize:We,denormalize:Zn});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],A=i[3],m=i[6],v=i[1],_=i[4],x=i[7],E=i[2],C=i[5],M=i[8];return s[0]=r*p+a*v+l*E,s[3]=r*A+a*_+l*C,s[6]=r*m+a*x+l*M,s[1]=c*p+h*v+u*E,s[4]=c*A+h*_+u*C,s[7]=c*m+h*x+u*M,s[2]=d*p+f*v+g*E,s[5]=d*A+f*_+g*C,s[8]=d*m+f*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*r)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Dp(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ji(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ma(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const sl={[Kn]:{[Ki]:ji},[Ki]:{[Kn]:ma}},on={legacyMode:!0,get workingColorSpace(){return Ki},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(sl[e]&&sl[e][t]!==void 0){const n=sl[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},an={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function rl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Io(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ki){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ki){if(e=Qh(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=rl(r,s,e+1/3),this.g=rl(r,s,e),this.b=rl(r,s,e-1/3)}return on.toWorkingColorSpace(this,i),this}setStyle(e,t=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kn){const n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return on.fromWorkingColorSpace(Io(this,ot),e),mt(ot.r*255,0,255)<<16^mt(ot.g*255,0,255)<<8^mt(ot.b*255,0,255)<<0}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ki){on.fromWorkingColorSpace(Io(this,ot),t);const n=ot.r,i=ot.g,s=ot.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ki){return on.fromWorkingColorSpace(Io(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Kn){return on.fromWorkingColorSpace(Io(this,ot),e),e!==Kn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Eo);const n=jr(an.h,Eo.h,t),i=jr(an.s,Eo.s,t),s=jr(an.l,Eo.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=Lp;let ds;class Fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=oo("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ji(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nh{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ol(i[r].image)):s.push(ol(i[r]))}else s=ol(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ol(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class At extends sn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Rt,i=Rt,s=Ze,r=si,a=at,l=kt,c=1,h=Ct){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=dn(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=wp;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],A=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-A)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+A)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,E=(m+1)/2,C=(h+d)/4,M=(u+p)/4,y=(g+A)/4;return _>x&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=C/n,s=M/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=y/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((A-g)*(A-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(A-g)/v,this.y=(u-p)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends sn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qp extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let A=1-a;const m=l*d+c*f+h*g+u*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const E=Math.sqrt(_),C=Math.atan2(E,m*v);A=Math.sin(A*C)/E,a=Math.sin(a*C)/E}const x=a*v;if(l=l*A+d*x,c=c*A+f*x,h=h*A+g*x,u=u*A+p*x,A===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new T,Ru=new bn;class tn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)Li.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox),ll.applyMatrix4(e.matrixWorld),this.union(ll);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Co.subVectors(this.max,gr),fs.subVectors(e.a,gr),As.subVectors(e.b,gr),ps.subVectors(e.c,gr),ai.subVectors(As,fs),li.subVectors(ps,As),Fi.subVectors(fs,ps);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Fi.z,Fi.y,ai.z,0,-ai.x,li.z,0,-li.x,Fi.z,0,-Fi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Fi.y,Fi.x,0];return!cl(t,fs,As,ps,Co)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,fs,As,ps,Co))?!1:(wo.crossVectors(ai,li),t=[wo.x,wo.y,wo.z],cl(t,fs,As,ps,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new T,new T,new T,new T,new T,new T,new T,new T],Li=new T,ll=new tn,fs=new T,As=new T,ps=new T,ai=new T,li=new T,Fi=new T,gr=new T,Co=new T,wo=new T,Pi=new T;function cl(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Pi.fromArray(o,s);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const M0=new tn,Du=new T,So=new T,hl=new T;class Mi{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){hl.subVectors(e,this.center);const t=hl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(hl.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?So.set(0,0,1).multiplyScalar(e.radius):So.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Du.copy(e.center).add(So)),this.expandByPoint(Du.copy(e.center).sub(So)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new T,ul=new T,bo=new T,ci=new T,dl=new T,Mo=new T,fl=new T;class Va{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.direction).multiplyScalar(t).add(this.origin),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ul.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ul);const s=e.distanceTo(t)*.5,r=-this.direction.dot(bo),a=ci.dot(this.direction),l=-ci.dot(bo),c=ci.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(bo).multiplyScalar(d).add(ul),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){dl.subVectors(t,e),Mo.subVectors(n,e),fl.crossVectors(dl,Mo);let r=this.direction.dot(fl),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Mo.crossVectors(ci,Mo));if(l<0)return null;const c=a*this.direction.dot(dl.cross(ci));if(c<0||l+c>r)return null;const h=-a*ci.dot(fl);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,h,u,d,f,g,p,A){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=p,m[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),r=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,T0)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),hi.crossVectors(n,Wt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),hi.crossVectors(n,Wt)),hi.normalize(),Bo.crossVectors(Wt,hi),i[0]=hi.x,i[4]=Bo.x,i[8]=Wt.x,i[1]=hi.y,i[5]=Bo.y,i[9]=Wt.y,i[2]=hi.z,i[6]=Bo.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],A=n[10],m=n[14],v=n[3],_=n[7],x=n[11],E=n[15],C=i[0],M=i[4],y=i[8],w=i[12],B=i[1],Q=i[5],$=i[9],k=i[13],R=i[2],P=i[6],q=i[10],G=i[14],N=i[3],L=i[7],O=i[11],J=i[15];return s[0]=r*C+a*B+l*R+c*N,s[4]=r*M+a*Q+l*P+c*L,s[8]=r*y+a*$+l*q+c*O,s[12]=r*w+a*k+l*G+c*J,s[1]=h*C+u*B+d*R+f*N,s[5]=h*M+u*Q+d*P+f*L,s[9]=h*y+u*$+d*q+f*O,s[13]=h*w+u*k+d*G+f*J,s[2]=g*C+p*B+A*R+m*N,s[6]=g*M+p*Q+A*P+m*L,s[10]=g*y+p*$+A*q+m*O,s[14]=g*w+p*k+A*G+m*J,s[3]=v*C+_*B+x*R+E*N,s[7]=v*M+_*Q+x*P+E*L,s[11]=v*y+_*$+x*q+E*O,s[15]=v*w+_*k+x*G+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],A=e[11],m=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+A*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],A=e[14],m=e[15],v=u*A*c-p*d*c+p*l*f-a*A*f-u*l*m+a*d*m,_=g*d*c-h*A*c-g*l*f+r*A*f+h*l*m-r*d*m,x=h*p*c-g*u*c+g*a*f-r*p*f-h*a*m+r*u*m,E=g*u*l-h*p*l-g*a*d+r*p*d+h*a*A-r*u*A,C=t*v+n*_+i*x+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=v*M,e[1]=(p*d*s-u*A*s-p*i*f+n*A*f+u*i*m-n*d*m)*M,e[2]=(a*A*s-p*l*s+p*i*c-n*A*c-a*i*m+n*l*m)*M,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*M,e[4]=_*M,e[5]=(h*A*s-g*d*s+g*i*f-t*A*f-h*i*m+t*d*m)*M,e[6]=(g*l*s-r*A*s-g*i*c+t*A*c+r*i*m-t*l*m)*M,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*M,e[8]=x*M,e[9]=(g*u*s-h*p*s-g*n*f+t*p*f+h*n*m-t*u*m)*M,e[10]=(r*p*s-g*a*s+g*n*c-t*p*c-r*n*m+t*a*m)*M,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*M,e[12]=E*M,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*A+t*u*A)*M,e[14]=(g*a*i-r*p*i-g*n*l+t*p*l+r*n*A-t*a*A)*M,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,p=r*h,A=r*u,m=a*u,v=l*c,_=l*h,x=l*u,E=n.x,C=n.y,M=n.z;return i[0]=(1-(p+m))*E,i[1]=(f+x)*E,i[2]=(g-_)*E,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+m))*C,i[6]=(A+v)*C,i[7]=0,i[8]=(g+_)*M,i[9]=(A-v)*M,i[10]=(1-(d+p))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gs.set(i[0],i[1],i[2]).length();const r=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,h=1/r,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new T,ln=new Re,B0=new T(0,0,0),T0=new T(1,1,1),hi=new T,Bo=new T,Wt=new T,Lu=new Re,Fu=new bn;class os{constructor(e=0,t=0,n=0,i=os.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}os.DefaultOrder="XYZ";os.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R0=0;const Pu=new T,ms=new bn,Qn=new Re,To=new T,mr=new T,D0=new T,L0=new bn,Qu=new T(1,0,0),Nu=new T(0,1,0),Uu=new T(0,0,1),F0={type:"added"},Ou={type:"removed"};class Xe extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new T,t=new os,n=new bn,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ft}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DefaultMatrixWorldAutoUpdate,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(mr,To,this.up):Qn.lookAt(To,mr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Qn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(F0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ou)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ou)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xe.DefaultUp=new T(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.DefaultMatrixWorldAutoUpdate=!0;const cn=new T,Nn=new T,Al=new T,Un=new T,_s=new T,vs=new T,ku=new T,pl=new T,gl=new T,ml=new T;class Jn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Nn.subVectors(n,t),Al.subVectors(e,t);const r=cn.dot(cn),a=cn.dot(Nn),l=cn.dot(Al),c=Nn.dot(Nn),h=Nn.dot(Al),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Un),l.set(0,0),l.addScaledVector(s,Un.x),l.addScaledVector(r,Un.y),l.addScaledVector(a,Un.z),l}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Nn.subVectors(e,t),cn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Jn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;_s.subVectors(i,n),vs.subVectors(s,n),pl.subVectors(e,n);const l=_s.dot(pl),c=vs.dot(pl);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);const h=_s.dot(gl),u=vs.dot(gl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(_s,r);ml.subVectors(e,s);const f=_s.dot(ml),g=vs.dot(ml);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vs,a);const A=h*g-f*u;if(A<=0&&u-h>=0&&f-g>=0)return ku.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(ku,a);const m=1/(A+p+d);return r=p*m,a=d*m,t.copy(n).addScaledVector(_s,r).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let P0=0;class fn extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=$s,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yp,this.blendDst=Ep,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new T,Ro=new Se;class lt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=sh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Np extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Up extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Q0=0;const Jt=new Re,_l=new Xe,xs=new T,qt=new tn,_r=new tn,ht=new T;class rn extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?Up:Np)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(qt.min,_r.min),qt.expandByPoint(ht),ht.addVectors(qt.max,_r.max),qt.expandByPoint(ht)):(qt.expandByPoint(_r.min),qt.expandByPoint(_r.max))}qt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),ht.add(xs)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let B=0;B<a;B++)c[B]=new T,h[B]=new T;const u=new T,d=new T,f=new T,g=new Se,p=new Se,A=new Se,m=new T,v=new T;function _(B,Q,$){u.fromArray(i,B*3),d.fromArray(i,Q*3),f.fromArray(i,$*3),g.fromArray(r,B*2),p.fromArray(r,Q*2),A.fromArray(r,$*2),d.sub(u),f.sub(u),p.sub(g),A.sub(g);const k=1/(p.x*A.y-A.x*p.y);!isFinite(k)||(m.copy(d).multiplyScalar(A.y).addScaledVector(f,-p.y).multiplyScalar(k),v.copy(f).multiplyScalar(p.x).addScaledVector(d,-A.x).multiplyScalar(k),c[B].add(m),c[Q].add(m),c[$].add(m),h[B].add(v),h[Q].add(v),h[$].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let B=0,Q=x.length;B<Q;++B){const $=x[B],k=$.start,R=$.count;for(let P=k,q=k+R;P<q;P+=3)_(n[P+0],n[P+1],n[P+2])}const E=new T,C=new T,M=new T,y=new T;function w(B){M.fromArray(s,B*3),y.copy(M);const Q=c[B];E.copy(Q),E.sub(M.multiplyScalar(M.dot(Q))).normalize(),C.crossVectors(y,Q);const k=C.dot(h[B])<0?-1:1;l[B*4]=E.x,l[B*4+1]=E.y,l[B*4+2]=E.z,l[B*4+3]=k}for(let B=0,Q=x.length;B<Q;++B){const $=x[B],k=$.start,R=$.count;for(let P=k,q=k+R;P<q;P+=3)w(n[P+0]),w(n[P+1]),w(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,r=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),A=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,A),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,A),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(A,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,A=l.length;p<A;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new Re,ys=new Va,vl=new Mi,ui=new T,di=new T,fi=new T,xl=new T,yl=new T,El=new T,Do=new T,Lo=new T,Fo=new T,Po=new Se,Qo=new Se,No=new Se,Il=new T,Uo=new T;class me extends Xe{constructor(e=new rn,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),e.ray.intersectsSphere(vl)===!1)||(Gu.copy(s).invert(),ys.copy(e.ray).applyMatrix4(Gu),n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,A=f.length;p<A;p++){const m=f[p],v=i[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=_,C=x;E<C;E+=3){const M=a.getX(E),y=a.getX(E+1),w=a.getX(E+2);r=Oo(this,v,e,ys,l,c,h,u,d,M,y,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),A=Math.min(a.count,g.start+g.count);for(let m=p,v=A;m<v;m+=3){const _=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=Oo(this,i,e,ys,l,c,h,u,d,_,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,A=f.length;p<A;p++){const m=f[p],v=i[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=_,C=x;E<C;E+=3){const M=E,y=E+1,w=E+2;r=Oo(this,v,e,ys,l,c,h,u,d,M,y,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let m=p,v=A;m<v;m+=3){const _=m,x=m+1,E=m+2;r=Oo(this,i,e,ys,l,c,h,u,d,_,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function N0(o,e,t,n,i,s,r,a){let l;if(e.side===It?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side!==Gt,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:o}}function Oo(o,e,t,n,i,s,r,a,l,c,h,u){ui.fromBufferAttribute(i,c),di.fromBufferAttribute(i,h),fi.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(s&&d){Do.set(0,0,0),Lo.set(0,0,0),Fo.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const A=d[g],m=s[g];A!==0&&(xl.fromBufferAttribute(m,c),yl.fromBufferAttribute(m,h),El.fromBufferAttribute(m,u),r?(Do.addScaledVector(xl,A),Lo.addScaledVector(yl,A),Fo.addScaledVector(El,A)):(Do.addScaledVector(xl.sub(ui),A),Lo.addScaledVector(yl.sub(di),A),Fo.addScaledVector(El.sub(fi),A)))}ui.add(Do),di.add(Lo),fi.add(Fo)}o.isSkinnedMesh&&(o.boneTransform(c,ui),o.boneTransform(h,di),o.boneTransform(u,fi));const f=N0(o,e,t,n,ui,di,fi,Il);if(f){a&&(Po.fromBufferAttribute(a,c),Qo.fromBufferAttribute(a,h),No.fromBufferAttribute(a,u),f.uv=Jn.getUV(Il,ui,di,fi,Po,Qo,No,new Se)),l&&(Po.fromBufferAttribute(l,c),Qo.fromBufferAttribute(l,h),No.fromBufferAttribute(l,u),f.uv2=Jn.getUV(Il,ui,di,fi,Po,Qo,No,new Se));const g={a:c,b:h,c:u,normal:new T,materialIndex:0};Jn.getNormal(ui,di,fi,g.normal),f.face=g}return f}class Bi extends rn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(u,2));function g(p,A,m,v,_,x,E,C,M,y,w){const B=x/M,Q=E/y,$=x/2,k=E/2,R=C/2,P=M+1,q=y+1;let G=0,N=0;const L=new T;for(let O=0;O<q;O++){const J=O*Q-k;for(let K=0;K<P;K++){const Z=K*B-$;L[p]=Z*v,L[A]=J*_,L[m]=R,c.push(L.x,L.y,L.z),L[p]=0,L[A]=0,L[m]=C>0?1:-1,h.push(L.x,L.y,L.z),u.push(K/M),u.push(1-O/y),G+=1}}for(let O=0;O<y;O++)for(let J=0;J<M;J++){const K=d+J+P*O,Z=d+J+P*(O+1),ie=d+(J+1)+P*(O+1),ue=d+(J+1)+P*O;l.push(K,Z,ue),l.push(Z,ie,ue),N+=6}a.addGroup(f,N,w),f+=N,d+=G}}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(o){const e={};for(let t=0;t<o.length;t++){const n=tr(o[t]);for(const i in n)e[i]=n[i]}return e}function U0(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const O0={clone:tr,merge:Et};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Op extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _t extends Op{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=90,Is=1;class ah extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new _t(Es,Is,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const s=new _t(Es,Is,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);const r=new _t(Es,Is,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new T(0,1,0)),this.add(r);const a=new _t(Es,Is,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);const l=new _t(Es,Is,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);const c=new _t(Es,Is,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class kp extends At{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends An{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ze}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:ei});s.uniforms.tEquirect.value=t;const r=new me(i,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=Ze),new ah(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Cl=new T,z0=new T,V0=new Ft;class Gi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cl.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V0.getNormalMatrix(e),i=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Mi,ko=new T;class kh{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,s=new Gi,r=new Gi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],p=n[11],A=n[12],m=n[13],v=n[14],_=n[15];return t[0].setComponents(a-i,u-l,p-d,_-A).normalize(),t[1].setComponents(a+i,u+l,p+d,_+A).normalize(),t[2].setComponents(a+s,u+c,p+f,_+m).normalize(),t[3].setComponents(a-s,u-c,p-f,_-m).normalize(),t[4].setComponents(a-r,u-h,p-g,_-v).normalize(),t[5].setComponents(a+r,u+h,p+g,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gp(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function H0(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class as extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],p=[],A=[];for(let m=0;m<h;m++){const v=m*d-r;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-v,0),p.push(0,0,1),A.push(_/a),A.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+c*m,x=v+c*(m+1),E=v+1+c*(m+1),C=v+1+c*m;f.push(_,x,C),f.push(x,E,C)}this.setIndex(f),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(A,2))}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0="vec3 transformed = vec3( position );",j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,e_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
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
}`,B_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,F_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,O_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Uv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$v=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Kv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ox=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,dx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:W0,alphamap_pars_fragment:q0,alphatest_fragment:$0,alphatest_pars_fragment:Y0,aomap_fragment:X0,aomap_pars_fragment:K0,begin_vertex:J0,beginnormal_vertex:j0,bsdfs:Z0,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:r_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:h_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:d_,displacementmap_pars_vertex:f_,displacementmap_vertex:A_,emissivemap_fragment:p_,emissivemap_pars_fragment:g_,encodings_fragment:m_,encodings_pars_fragment:__,envmap_fragment:v_,envmap_common_pars_fragment:x_,envmap_pars_fragment:y_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:F_,envmap_vertex:I_,fog_vertex:C_,fog_pars_vertex:w_,fog_fragment:S_,fog_pars_fragment:b_,gradientmap_pars_fragment:M_,lightmap_fragment:B_,lightmap_pars_fragment:T_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:D_,lights_pars_begin:L_,lights_toon_fragment:P_,lights_toon_pars_fragment:Q_,lights_phong_fragment:N_,lights_phong_pars_fragment:U_,lights_physical_fragment:O_,lights_physical_pars_fragment:k_,lights_fragment_begin:G_,lights_fragment_maps:z_,lights_fragment_end:V_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:$_,map_fragment:Y_,map_pars_fragment:X_,map_particle_fragment:K_,map_particle_pars_fragment:J_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:Z_,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:sv,normal_fragment_maps:rv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:lv,normalmap_pars_fragment:cv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:fv,output_fragment:Av,packing:pv,premultiplied_alpha_fragment:gv,project_vertex:mv,dithering_fragment:_v,dithering_pars_fragment:vv,roughnessmap_fragment:xv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Ev,shadowmap_pars_vertex:Iv,shadowmap_vertex:Cv,shadowmask_pars_fragment:wv,skinbase_vertex:Sv,skinning_pars_vertex:bv,skinning_vertex:Mv,skinnormal_vertex:Bv,specularmap_fragment:Tv,specularmap_pars_fragment:Rv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Lv,transmission_fragment:Fv,transmission_pars_fragment:Pv,uv_pars_fragment:Qv,uv_pars_vertex:Nv,uv_vertex:Uv,uv2_pars_fragment:Ov,uv2_pars_vertex:kv,uv2_vertex:Gv,worldpos_vertex:zv,background_vert:Vv,background_frag:Hv,cube_vert:Wv,cube_frag:qv,depth_vert:$v,depth_frag:Yv,distanceRGBA_vert:Xv,distanceRGBA_frag:Kv,equirect_vert:Jv,equirect_frag:jv,linedashed_vert:Zv,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:sx,meshmatcap_vert:rx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:ux,meshphysical_frag:dx,meshtoon_vert:fx,meshtoon_frag:Ax,points_vert:px,points_frag:gx,shadow_vert:mx,shadow_frag:_x,sprite_vert:vx,sprite_frag:xx},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},yn={basic:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Et([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Et([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Et([te.points,te.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Et([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Et([te.common,te.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Et([te.sprite,te.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:Et([te.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Et([te.common,te.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Et([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};yn.physical={uniforms:Et([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function yx(o,e,t,n,i,s){const r=new Ie(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(p,A){let m=!1,v=A.isScene===!0?A.background:null;v&&v.isTexture&&(v=e.get(v));const _=o.xr,x=_.getSession&&_.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?g(r,a):v&&v.isColor&&(g(v,1),m=!0),(o.autoClear||m)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===za)?(c===void 0&&(c=new me(new Bi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:tr(yn.cube.uniforms),vertexShader:yn.cube.vertexShader,fragmentShader:yn.cube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(h!==v||u!==v.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new me(new as(2,2),new pn({name:"BackgroundMaterial",uniforms:tr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,A){t.buffers.color.setClear(p.r,p.g,p.b,A,s)}return{getClearColor:function(){return r},setClearColor:function(p,A=1){r.set(p),a=A,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(r,a)},render:f}}function Ex(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=A(null);let c=l,h=!1;function u(R,P,q,G,N){let L=!1;if(r){const O=p(G,q,P);c!==O&&(c=O,f(c.object)),L=m(R,G,q,N),L&&v(R,G,q,N)}else{const O=P.wireframe===!0;(c.geometry!==G.id||c.program!==q.id||c.wireframe!==O)&&(c.geometry=G.id,c.program=q.id,c.wireframe=O,L=!0)}N!==null&&t.update(N,34963),(L||h)&&(h=!1,y(R,P,q,G),N!==null&&o.bindBuffer(34963,t.get(N).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?o.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,P,q){const G=q.wireframe===!0;let N=a[R.id];N===void 0&&(N={},a[R.id]=N);let L=N[P.id];L===void 0&&(L={},N[P.id]=L);let O=L[G];return O===void 0&&(O=A(d()),L[G]=O),O}function A(R){const P=[],q=[],G=[];for(let N=0;N<i;N++)P[N]=0,q[N]=0,G[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:G,object:R,attributes:{},index:null}}function m(R,P,q,G){const N=c.attributes,L=P.attributes;let O=0;const J=q.getAttributes();for(const K in J)if(J[K].location>=0){const ie=N[K];let ue=L[K];if(ue===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;O++}return c.attributesNum!==O||c.index!==G}function v(R,P,q,G){const N={},L=P.attributes;let O=0;const J=q.getAttributes();for(const K in J)if(J[K].location>=0){let ie=L[K];ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),N[K]=ue,O++}c.attributes=N,c.attributesNum=O,c.index=G}function _(){const R=c.newAttributes;for(let P=0,q=R.length;P<q;P++)R[P]=0}function x(R){E(R,0)}function E(R,P){const q=c.newAttributes,G=c.enabledAttributes,N=c.attributeDivisors;q[R]=1,G[R]===0&&(o.enableVertexAttribArray(R),G[R]=1),N[R]!==P&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,P),N[R]=P)}function C(){const R=c.newAttributes,P=c.enabledAttributes;for(let q=0,G=P.length;q<G;q++)P[q]!==R[q]&&(o.disableVertexAttribArray(q),P[q]=0)}function M(R,P,q,G,N,L){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(R,P,q,N,L):o.vertexAttribPointer(R,P,q,G,N,L)}function y(R,P,q,G){if(n.isWebGL2===!1&&(R.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=G.attributes,L=q.getAttributes(),O=P.defaultAttributeValues;for(const J in L){const K=L[J];if(K.location>=0){let Z=N[J];if(Z===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const ie=Z.normalized,ue=Z.itemSize,X=t.get(Z);if(X===void 0)continue;const Qe=X.buffer,pe=X.type,_e=X.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,ke=le.stride,Ce=Z.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<K.locationSize;ge++)E(K.location+ge,le.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<K.locationSize;ge++)x(K.location+ge);o.bindBuffer(34962,Qe);for(let ge=0;ge<K.locationSize;ge++)M(K.location+ge,ue/K.locationSize,pe,ie,ke*_e,(Ce+ue/K.locationSize*ge)*_e)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<K.locationSize;le++)E(K.location+le,Z.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<K.locationSize;le++)x(K.location+le);o.bindBuffer(34962,Qe);for(let le=0;le<K.locationSize;le++)M(K.location+le,ue/K.locationSize,pe,ie,ue*_e,ue/K.locationSize*le*_e)}}else if(O!==void 0){const ie=O[J];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(K.location,ie);break;case 3:o.vertexAttrib3fv(K.location,ie);break;case 4:o.vertexAttrib4fv(K.location,ie);break;default:o.vertexAttrib1fv(K.location,ie)}}}}C()}function w(){$();for(const R in a){const P=a[R];for(const q in P){const G=P[q];for(const N in G)g(G[N].object),delete G[N];delete P[q]}delete a[R]}}function B(R){if(a[R.id]===void 0)return;const P=a[R.id];for(const q in P){const G=P[q];for(const N in G)g(G[N].object),delete G[N];delete P[q]}delete a[R.id]}function Q(R){for(const P in a){const q=a[P];if(q[R.id]===void 0)continue;const G=q[R.id];for(const N in G)g(G[N].object),delete G[N];delete q[R.id]}}function $(){k(),h=!0,c!==l&&(c=l,f(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:$,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:B,releaseStatesOfProgram:Q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:C}}function Ix(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function Cx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),A=o.getParameter(36347),m=o.getParameter(36348),v=o.getParameter(36349),_=d>0,x=r||e.has("OES_texture_float"),E=_&&x,C=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:C}}function wx(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Gi,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,A=u.clipShadows,m=o.get(u);if(!i||g===null||g.length===0||s&&!A)s?h(null):c();else{const v=s?0:n,_=v*4;let x=m.clippingState||null;l.value=x,x=h(g,d,_,f);for(let E=0;E!==_;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let A=null;if(p!==0){if(A=l.value,g!==!0||A===null){const m=f+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(A===null||A.length<m)&&(A=new Float32Array(m));for(let _=0,x=f;_!==p;++_,x+=4)r.copy(u[_]).applyMatrix4(v,a),r.normal.toArray(A,x),A[x+3]=r.constant}l.value=A,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,A}}function Sx(o){let e=new WeakMap;function t(r,a){return a===Ba?r.mapping=Js:a===Jc&&(r.mapping=js),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Ba||a===Jc)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Oh(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hr extends Op{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,zu=[.125,.215,.35,.446,.526,.582],$i=20,wl=new hr,Vu=new Ie;let Sl=null;const zi=(1+Math.sqrt(5))/2,ws=1/zi,Hu=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,zi,ws),new T(0,zi,-ws),new T(ws,0,zi),new T(-ws,0,zi),new T(zi,ws,0),new T(-zi,ws,0)];class Wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl),e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Lt,format:at,encoding:Ct,depthBuffer:!1},i=qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(s)),this._blurMaterial=Mx(s,e,t)}return i}_compileMaterial(e){const t=new me(this._lodPlanes[0],e);this._renderer.compile(t,wl)}_sceneToCubeUV(e,t,n,i){const a=new _t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vu),h.toneMapping=Sn,h.autoClear=!1;const f=new un({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new me(new Bi,f);let p=!1;const A=e.background;A?A.isColor&&(f.color.copy(A),e.background=null,p=!0):(f.color.copy(Vu),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Go(i,v*_,m>2?_:0,_,_),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,wl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Hu[(i-1)%Hu.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$i-1),p=s/g,A=isFinite(s)?1+Math.floor(h*p):$i;A>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${$i}`);const m=[];let v=0;for(let M=0;M<$i;++M){const y=M/p,w=Math.exp(-y*y/2);m.push(w),M===0?v+=w:M<A&&(v+=2*w)}for(let M=0;M<m.length;M++)m[M]=m[M]/v;d.envMap.value=e.texture,d.samples.value=A,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],E=3*x*(i>_-Hs?i-_+Hs:0),C=4*(this._cubeSize-x);Go(t,E,C,3*x,2*x),l.setRenderTarget(t),l.render(u,wl)}}function bx(o){const e=[],t=[],n=[];let i=o;const s=o-Hs+1+zu.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Hs?l=zu[r-o+Hs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,A=2,m=1,v=new Float32Array(p*g*f),_=new Float32Array(A*g*f),x=new Float32Array(m*g*f);for(let C=0;C<f;C++){const M=C%3*2/3-1,y=C>2?0:-1,w=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];v.set(w,p*g*C),_.set(d,A*g*C);const B=[C,C,C,C,C,C];x.set(B,m*g*C)}const E=new rn;E.setAttribute("position",new lt(v,p)),E.setAttribute("uv",new lt(_,A)),E.setAttribute("faceIndex",new lt(x,m)),e.push(E),i>Hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qu(o,e,t){const n=new An(o,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Mx(o,e,t){const n=new Float32Array($i),i=new T(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $u(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bx(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===Jc,h=l===Js||l===js;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Wu(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Wu(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Tx(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rx(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let A=0,m=p.length;A<m;A++)e.update(p[A],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const v=f.array;p=f.version;for(let _=0,x=v.length;_<x;_+=3){const E=v[_+0],C=v[_+1],M=v[_+2];d.push(E,C,C,M,M,E)}}else{const v=g.array;p=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const E=_+0,C=_+1,M=_+2;d.push(E,C,C,M,M,E)}}const A=new(Dp(d)?Up:Np)(d,1);A.version=p;const m=s.get(u);m&&e.remove(m),s.set(u,A)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dx(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let p,A;if(i)p=o,A="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function Lx(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fx(o,e){return o[0]-e[0]}function Px(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Qx(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let A=s.get(h);if(A===void 0||A.count!==p){let P=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",P)};A!==void 0&&A.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),E===!0&&(w=3);let B=h.attributes.position.count*w,Q=1;B>e.maxTextureSize&&(Q=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const $=new Float32Array(B*Q*4*p),k=new Pp($,B,Q,p);k.type=Dt,k.needsUpdate=!0;const R=w*4;for(let q=0;q<p;q++){const G=C[q],N=M[q],L=y[q],O=B*Q*4*q;for(let J=0;J<G.count;J++){const K=J*R;_===!0&&(r.fromBufferAttribute(G,J),$[O+K+0]=r.x,$[O+K+1]=r.y,$[O+K+2]=r.z,$[O+K+3]=0),x===!0&&(r.fromBufferAttribute(N,J),$[O+K+4]=r.x,$[O+K+5]=r.y,$[O+K+6]=r.z,$[O+K+7]=0),E===!0&&(r.fromBufferAttribute(L,J),$[O+K+8]=r.x,$[O+K+9]=r.y,$[O+K+10]=r.z,$[O+K+11]=L.itemSize===4?r.w:1)}}A={count:p,texture:k,size:new Se(B,Q)},s.set(h,A),h.addEventListener("dispose",P)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];const v=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",A.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",A.size)}else{const g=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<g;x++){const E=p[x];E[0]=x,E[1]=f[x]}p.sort(Px);for(let x=0;x<8;x++)x<g&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Fx);const A=h.morphAttributes.position,m=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const E=a[x],C=E[0],M=E[1];C!==Number.MAX_SAFE_INTEGER&&M?(A&&h.getAttribute("morphTarget"+x)!==A[C]&&h.setAttribute("morphTarget"+x,A[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),i[x]=M,v+=M):(A&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",_),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Nx(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const zp=new At,Vp=new Pp,Hp=new Qp,Wp=new kp,Xu=[],Ku=[],Ju=new Float32Array(16),ju=new Float32Array(9),Zu=new Float32Array(4);function ur(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Xu[i];if(s===void 0&&(s=new Float32Array(i),Xu[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Nt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Ut(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ha(o,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Ux(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Ox(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;o.uniform2fv(this.addr,e),Ut(t,e)}}function kx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;o.uniform3fv(this.addr,e),Ut(t,e)}}function Gx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;o.uniform4fv(this.addr,e),Ut(t,e)}}function zx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Zu.set(n),o.uniformMatrix2fv(this.addr,!1,Zu),Ut(t,n)}}function Vx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ju.set(n),o.uniformMatrix3fv(this.addr,!1,ju),Ut(t,n)}}function Hx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Ju.set(n),o.uniformMatrix4fv(this.addr,!1,Ju),Ut(t,n)}}function Wx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function qx(o,e){const t=this.cache;Nt(t,e)||(o.uniform2iv(this.addr,e),Ut(t,e))}function $x(o,e){const t=this.cache;Nt(t,e)||(o.uniform3iv(this.addr,e),Ut(t,e))}function Yx(o,e){const t=this.cache;Nt(t,e)||(o.uniform4iv(this.addr,e),Ut(t,e))}function Xx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Kx(o,e){const t=this.cache;Nt(t,e)||(o.uniform2uiv(this.addr,e),Ut(t,e))}function Jx(o,e){const t=this.cache;Nt(t,e)||(o.uniform3uiv(this.addr,e),Ut(t,e))}function jx(o,e){const t=this.cache;Nt(t,e)||(o.uniform4uiv(this.addr,e),Ut(t,e))}function Zx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||zp,i)}function ey(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hp,i)}function ty(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wp,i)}function ny(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vp,i)}function iy(o){switch(o){case 5126:return Ux;case 35664:return Ox;case 35665:return kx;case 35666:return Gx;case 35674:return zx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return qx;case 35668:case 35672:return $x;case 35669:case 35673:return Yx;case 5125:return Xx;case 36294:return Kx;case 36295:return Jx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(o,e){o.uniform1fv(this.addr,e)}function ry(o,e){const t=ur(e,this.size,2);o.uniform2fv(this.addr,t)}function oy(o,e){const t=ur(e,this.size,3);o.uniform3fv(this.addr,t)}function ay(o,e){const t=ur(e,this.size,4);o.uniform4fv(this.addr,t)}function ly(o,e){const t=ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function cy(o,e){const t=ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hy(o,e){const t=ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uy(o,e){o.uniform1iv(this.addr,e)}function dy(o,e){o.uniform2iv(this.addr,e)}function fy(o,e){o.uniform3iv(this.addr,e)}function Ay(o,e){o.uniform4iv(this.addr,e)}function py(o,e){o.uniform1uiv(this.addr,e)}function gy(o,e){o.uniform2uiv(this.addr,e)}function my(o,e){o.uniform3uiv(this.addr,e)}function _y(o,e){o.uniform4uiv(this.addr,e)}function vy(o,e,t){const n=e.length,i=Ha(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||zp,i[s])}function xy(o,e,t){const n=e.length,i=Ha(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Hp,i[s])}function yy(o,e,t){const n=e.length,i=Ha(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Wp,i[s])}function Ey(o,e,t){const n=e.length,i=Ha(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Vp,i[s])}function Iy(o){switch(o){case 5126:return sy;case 35664:return ry;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return Ay;case 5125:return py;case 36294:return gy;case 36295:return my;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Ey}}class Cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=iy(t.type)}}class wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Iy(t.type)}}class Sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function ed(o,e){o.seq.push(e),o.map[e.id]=e}function by(o,e,t){const n=o.name,i=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),r=bl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){ed(t,c===void 0?new Cy(a,o,e):new wy(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Sy(a),ed(t,u)),t=u}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);by(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function td(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let My=0;function By(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Ty(o){switch(o){case Ct:return["Linear","( value )"];case Me:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function nd(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+By(o.getShaderSource(e),r)}else return i}function Ry(o,e){const t=Ty(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dy(o,e){let t;switch(e){case qm:t="Linear";break;case $m:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case Cp:t="ACESFilmic";break;case Xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ly(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)}function Fy(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Py(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Hr(o){return o!==""}function id(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(Qy,Ny)}function Ny(o,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return lh(t)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(o){return o.replace(Uy,Oy)}function Oy(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function od(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ky(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Gr&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Js:case js:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function Vy(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ip:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Wm:e="ENVMAP_BLENDING_ADD";break}return e}function Hy(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wy(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=ky(t),c=Gy(t),h=zy(t),u=Vy(t),d=Hy(t),f=t.isWebGL2?"":Ly(t),g=Fy(s),p=i.createProgram();let A,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=[g].filter(Hr).join(`
`),A.length>0&&(A+=`
`),m=[f,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(A=[od(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[f,od(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Ry("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),r=lh(r),r=id(r,t),r=sd(r,t),a=lh(a),a=id(a,t),a=sd(a,t),r=rd(r),a=rd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,A=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+A+r,x=v+m+a,E=td(i,35633,_),C=td(i,35632,x);if(i.attachShader(p,E),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),B=i.getShaderInfoLog(E).trim(),Q=i.getShaderInfoLog(C).trim();let $=!0,k=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const R=nd(i,E,"vertex"),P=nd(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+R+`
`+P)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(B===""||Q==="")&&(k=!1);k&&(this.diagnostics={runnable:$,programLog:w,vertexShader:{log:B,prefix:A},fragmentShader:{log:Q,prefix:m}})}i.deleteShader(E),i.deleteShader(C);let M;this.getUniforms=function(){return M===void 0&&(M=new _a(i,p)),M};let y;return this.getAttributes=function(){return y===void 0&&(y=Py(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=My++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=C,this}let qy=0;class $y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yy(e),t.set(e,n)),n}}class Yy{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function Xy(o,e,t,n,i,s,r){const a=new Uh,l=new $y,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,w,B,Q,$){const k=Q.fog,R=$.geometry,P=y.isMeshStandardMaterial?Q.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||P),G=!!q&&q.mapping===za?q.image.height:null,N=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,O=L!==void 0?L.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let K,Z,ie,ue;if(N){const ke=yn[N];K=ke.vertexShader,Z=ke.fragmentShader}else K=y.vertexShader,Z=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const X=o.getRenderTarget(),Qe=y.alphaTest>0,pe=y.clearcoat>0,_e=y.iridescence>0;return{isWebGL2:h,shaderID:N,shaderName:y.type,vertexShader:K,fragmentShader:Z,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?o.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Ct,map:!!y.map,matcap:!!y.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:G,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===d0,tangentSpaceNormalMap:y.normalMapType===Ph,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Me,clearcoat:pe,clearcoatMap:pe&&!!y.clearcoatMap,clearcoatRoughnessMap:pe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!y.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!y.iridescenceMap,iridescenceThicknessMap:_e&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===$s,alphaMap:!!y.alphaMap,alphaTest:Qe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:Sn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gt,flipSided:y.side===It,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function A(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)w.push(B),w.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(m(w,y),v(w,y),w.push(o.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),y.push(a.mask)}function _(y){const w=g[y.type];let B;if(w){const Q=yn[w];B=O0.clone(Q.uniforms)}else B=y.uniforms;return B}function x(y,w){let B;for(let Q=0,$=c.length;Q<$;Q++){const k=c[Q];if(k.cacheKey===w){B=k,++B.usedTimes;break}}return B===void 0&&(B=new Wy(o,w,y,s),c.push(B)),B}function E(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function M(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:_,acquireProgram:x,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:M}}function Ky(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ad(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ld(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,p,A){let m=o[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:A},o[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=p,m.group=A),e++,m}function a(u,d,f,g,p,A){const m=r(u,d,f,g,p,A);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,g,p,A){const m=r(u,d,f,g,p,A);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Jy),n.length>1&&n.sort(d||ad),i.length>1&&i.sort(d||ad)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function jy(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new ld,o.set(n,[r])):i>=s.length?(r=new ld,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Zy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ie};break;case"SpotLight":t={position:new T,direction:new T,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new T,halfWidth:new T,halfHeight:new T};break}return o[e.id]=t,t}}}function eE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let tE=0;function nE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iE(o,e){const t=new Zy,n=eE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new T);const s=new T,r=new Re,a=new Re;function l(h,u){let d=0,f=0,g=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let p=0,A=0,m=0,v=0,_=0,x=0,E=0,C=0,M=0,y=0;h.sort(nE);const w=u!==!0?Math.PI:1;for(let Q=0,$=h.length;Q<$;Q++){const k=h[Q],R=k.color,P=k.intensity,q=k.distance,G=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=R.r*P*w,f+=R.g*P*w,g+=R.b*P*w;else if(k.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(k.sh.coefficients[N],P);else if(k.isDirectionalLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const L=k.shadow,O=n.get(k);O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=k.shadow.matrix,x++}i.directional[p]=N,p++}else if(k.isSpotLight){const N=t.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(R).multiplyScalar(P*w),N.distance=q,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,i.spot[m]=N;const L=k.shadow;if(k.map&&(i.spotLightMap[M]=k.map,M++,L.updateMatrices(k),k.castShadow&&y++),i.spotLightMatrix[m]=L.matrix,k.castShadow){const O=n.get(k);O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,i.spotShadow[m]=O,i.spotShadowMap[m]=G,C++}m++}else if(k.isRectAreaLight){const N=t.get(k);N.color.copy(R).multiplyScalar(P),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),i.rectArea[v]=N,v++}else if(k.isPointLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity*w),N.distance=k.distance,N.decay=k.decay,k.castShadow){const L=k.shadow,O=n.get(k);O.shadowBias=L.bias,O.shadowNormalBias=L.normalBias,O.shadowRadius=L.radius,O.shadowMapSize=L.mapSize,O.shadowCameraNear=L.camera.near,O.shadowCameraFar=L.camera.far,i.pointShadow[A]=O,i.pointShadowMap[A]=G,i.pointShadowMatrix[A]=k.shadow.matrix,E++}i.point[A]=N,A++}else if(k.isHemisphereLight){const N=t.get(k);N.skyColor.copy(k.color).multiplyScalar(P*w),N.groundColor.copy(k.groundColor).multiplyScalar(P*w),i.hemi[_]=N,_++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==p||B.pointLength!==A||B.spotLength!==m||B.rectAreaLength!==v||B.hemiLength!==_||B.numDirectionalShadows!==x||B.numPointShadows!==E||B.numSpotShadows!==C||B.numSpotMaps!==M)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=v,i.point.length=A,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+M-y,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=y,B.directionalLength=p,B.pointLength=A,B.spotLength=m,B.rectAreaLength=v,B.hemiLength=_,B.numDirectionalShadows=x,B.numPointShadows=E,B.numSpotShadows=C,B.numSpotMaps=M,i.version=tE++)}function c(h,u){let d=0,f=0,g=0,p=0,A=0;const m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){const x=h[v];if(x.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(x.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const E=i.hemi[A];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),A++}}}return{setup:l,setupView:c,state:i}}function cd(o,e){const t=new iE(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function sE(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new cd(o,e),t.set(s,[l])):r>=a.length?(l=new cd(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class qp extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lE(o,e,t){let n=new kh;const i=new Se,s=new Se,r=new qe,a=new qp({depthPacking:u0}),l=new rE,c={},h=t.maxTextureSize,u={0:It,1:ni,2:Gt},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new me(g,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp,this.render=function(x,E,C){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||x.length===0)return;const M=o.getRenderTarget(),y=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),B=o.state;B.setBlending(ei),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let Q=0,$=x.length;Q<$;Q++){const k=x[Q],R=k.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const P=R.getFrameExtents();if(i.multiply(P),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/P.x),i.x=s.x*P.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/P.y),i.y=s.y*P.y,R.mapSize.y=s.y)),R.map===null){const G=this.type!==Gr?{minFilter:dt,magFilter:dt}:{};R.map=new An(i.x,i.y,G),R.map.texture.name=k.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const q=R.getViewportCount();for(let G=0;G<q;G++){const N=R.getViewport(G);r.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),B.viewport(r),R.updateMatrices(k,G),n=R.getFrustum(),_(E,C,R.camera,k,this.type)}R.isPointLightShadow!==!0&&this.type===Gr&&m(R,C),R.needsUpdate=!1}A.needsUpdate=!1,o.setRenderTarget(M,y,w)};function m(x,E){const C=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,o.setRenderTarget(x.mapPass),o.clear(),o.renderBufferDirect(E,null,C,d,p,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,o.setRenderTarget(x.map),o.clear(),o.renderBufferDirect(E,null,C,f,p,null)}function v(x,E,C,M,y,w){let B=null;const Q=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(Q!==void 0?B=Q:B=C.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const $=B.uuid,k=E.uuid;let R=c[$];R===void 0&&(R={},c[$]=R);let P=R[k];P===void 0&&(P=B.clone(),R[k]=P),B=P}return B.visible=E.visible,B.wireframe=E.wireframe,w===Gr?B.side=E.shadowSide!==null?E.shadowSide:E.side:B.side=E.shadowSide!==null?E.shadowSide:u[E.side],B.alphaMap=E.alphaMap,B.alphaTest=E.alphaTest,B.clipShadows=E.clipShadows,B.clippingPlanes=E.clippingPlanes,B.clipIntersection=E.clipIntersection,B.displacementMap=E.displacementMap,B.displacementScale=E.displacementScale,B.displacementBias=E.displacementBias,B.wireframeLinewidth=E.wireframeLinewidth,B.linewidth=E.linewidth,C.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(C.matrixWorld),B.nearDistance=M,B.farDistance=y),B}function _(x,E,C,M,y){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===Gr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const Q=e.update(x),$=x.material;if(Array.isArray($)){const k=Q.groups;for(let R=0,P=k.length;R<P;R++){const q=k[R],G=$[q.materialIndex];if(G&&G.visible){const N=v(x,G,M,C.near,C.far,y);o.renderBufferDirect(C,null,Q,N,x,q)}}}else if($.visible){const k=v(x,$,M,C.near,C.far,y);o.renderBufferDirect(C,null,Q,k,x,null)}}const B=x.children;for(let Q=0,$=B.length;Q<$;Q++)_(B[Q],E,C,M,y)}}function cE(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const ae=new qe;let V=null;const oe=new qe(0,0,0,0);return{setMask:function(se){V!==se&&!D&&(o.colorMask(se,se,se,se),V=se)},setLocked:function(se){D=se},setClear:function(se,Pe,ct,nt,ri){ri===!0&&(se*=nt,Pe*=nt,ct*=nt),ae.set(se,Pe,ct,nt),oe.equals(ae)===!1&&(o.clearColor(se,Pe,ct,nt),oe.copy(ae))},reset:function(){D=!1,V=null,oe.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,V=null,oe=null;return{setTest:function(se){se?Qe(2929):pe(2929)},setMask:function(se){ae!==se&&!D&&(o.depthMask(se),ae=se)},setFunc:function(se){if(V!==se){if(se)switch(se){case Nm:o.depthFunc(512);break;case Um:o.depthFunc(519);break;case Om:o.depthFunc(513);break;case Kc:o.depthFunc(515);break;case km:o.depthFunc(514);break;case Gm:o.depthFunc(518);break;case zm:o.depthFunc(516);break;case Vm:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);V=se}},setLocked:function(se){D=se},setClear:function(se){oe!==se&&(o.clearDepth(se),oe=se)},reset:function(){D=!1,ae=null,V=null,oe=null}}}function r(){let D=!1,ae=null,V=null,oe=null,se=null,Pe=null,ct=null,nt=null,ri=null;return{setTest:function(Je){D||(Je?Qe(2960):pe(2960))},setMask:function(Je){ae!==Je&&!D&&(o.stencilMask(Je),ae=Je)},setFunc:function(Je,Ln,Xt){(V!==Je||oe!==Ln||se!==Xt)&&(o.stencilFunc(Je,Ln,Xt),V=Je,oe=Ln,se=Xt)},setOp:function(Je,Ln,Xt){(Pe!==Je||ct!==Ln||nt!==Xt)&&(o.stencilOp(Je,Ln,Xt),Pe=Je,ct=Ln,nt=Xt)},setLocked:function(Je){D=Je},setClear:function(Je){ri!==Je&&(o.clearStencil(Je),ri=Je)},reset:function(){D=!1,ae=null,V=null,oe=null,se=null,Pe=null,ct=null,nt=null,ri=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,p=[],A=null,m=!1,v=null,_=null,x=null,E=null,C=null,M=null,y=null,w=!1,B=null,Q=null,$=null,k=null,R=null;const P=o.getParameter(35661);let q=!1,G=0;const N=o.getParameter(7938);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=G>=2);let L=null,O={};const J=o.getParameter(3088),K=o.getParameter(2978),Z=new qe().fromArray(J),ie=new qe().fromArray(K);function ue(D,ae,V){const oe=new Uint8Array(4),se=o.createTexture();o.bindTexture(D,se),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Pe=0;Pe<V;Pe++)o.texImage2D(ae+Pe,0,6408,1,1,0,6408,5121,oe);return se}const X={};X[3553]=ue(3553,3553,1),X[34067]=ue(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Qe(2929),l.setFunc(Kc),St(!1),gn(lu),Qe(2884),et(ei);function Qe(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function pe(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function _e(D,ae){return f[D]!==ae?(o.bindFramebuffer(D,ae),f[D]=ae,n&&(D===36009&&(f[36160]=ae),D===36160&&(f[36009]=ae)),!0):!1}function le(D,ae){let V=p,oe=!1;if(D)if(V=g.get(ae),V===void 0&&(V=[],g.set(ae,V)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(V.length!==se.length||V[0]!==36064){for(let Pe=0,ct=se.length;Pe<ct;Pe++)V[Pe]=36064+Pe;V.length=se.length,oe=!0}}else V[0]!==36064&&(V[0]=36064,oe=!0);else V[0]!==1029&&(V[0]=1029,oe=!0);oe&&(t.isWebGL2?o.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function ke(D){return A!==D?(o.useProgram(D),A=D,!0):!1}const Ce={[ks]:32774,[Sm]:32778,[bm]:32779};if(n)Ce[du]=32775,Ce[fu]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ce[du]=D.MIN_EXT,Ce[fu]=D.MAX_EXT)}const ge={[Mm]:0,[Bm]:1,[Tm]:768,[yp]:770,[Qm]:776,[Fm]:774,[Dm]:772,[Rm]:769,[Ep]:771,[Pm]:775,[Lm]:773};function et(D,ae,V,oe,se,Pe,ct,nt){if(D===ei){m===!0&&(pe(3042),m=!1);return}if(m===!1&&(Qe(3042),m=!0),D!==wm){if(D!==v||nt!==w){if((_!==ks||C!==ks)&&(o.blendEquation(32774),_=ks,C=ks),nt)switch(D){case $s:o.blendFuncSeparate(1,771,1,771);break;case cu:o.blendFunc(1,1);break;case hu:o.blendFuncSeparate(0,769,0,1);break;case uu:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $s:o.blendFuncSeparate(770,771,1,771);break;case cu:o.blendFunc(770,1);break;case hu:o.blendFuncSeparate(0,769,0,1);break;case uu:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,E=null,M=null,y=null,v=D,w=nt}return}se=se||ae,Pe=Pe||V,ct=ct||oe,(ae!==_||se!==C)&&(o.blendEquationSeparate(Ce[ae],Ce[se]),_=ae,C=se),(V!==x||oe!==E||Pe!==M||ct!==y)&&(o.blendFuncSeparate(ge[V],ge[oe],ge[Pe],ge[ct]),x=V,E=oe,M=Pe,y=ct),v=D,w=null}function Vt(D,ae){D.side===Gt?pe(2884):Qe(2884);let V=D.side===It;ae&&(V=!V),St(V),D.blending===$s&&D.transparent===!1?et(ei):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const oe=D.stencilWrite;c.setTest(oe),oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),He(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Qe(32926):pe(32926)}function St(D){B!==D&&(D?o.frontFace(2304):o.frontFace(2305),B=D)}function gn(D){D!==Em?(Qe(2884),D!==Q&&(D===lu?o.cullFace(1029):D===Im?o.cullFace(1028):o.cullFace(1032))):pe(2884),Q=D}function pt(D){D!==$&&(q&&o.lineWidth(D),$=D)}function He(D,ae,V){D?(Qe(32823),(k!==ae||R!==V)&&(o.polygonOffset(ae,V),k=ae,R=V)):pe(32823)}function Dn(D){D?Qe(3089):pe(3089)}function mn(D){D===void 0&&(D=33984+P-1),L!==D&&(o.activeTexture(D),L=D)}function b(D,ae){L===null&&mn();let V=O[L];V===void 0&&(V={type:void 0,texture:void 0},O[L]=V),(V.type!==D||V.texture!==ae)&&(o.bindTexture(D,ae||X[D]),V.type=D,V.texture=ae)}function I(){const D=O[L];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){Z.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function he(D){ie.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function we(D,ae){let V=u.get(ae);V===void 0&&(V=new WeakMap,u.set(ae,V));let oe=V.get(D);oe===void 0&&(oe=o.getUniformBlockIndex(ae,D.name),V.set(D,oe))}function Ne(D,ae){const oe=u.get(ae).get(D);h.get(D)!==oe&&(o.uniformBlockBinding(ae,oe,D.__bindingPointIndex),h.set(D,oe))}function tt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},L=null,O={},f={},g=new WeakMap,p=[],A=null,m=!1,v=null,_=null,x=null,E=null,C=null,M=null,y=null,w=!1,B=null,Q=null,$=null,k=null,R=null,Z.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Qe,disable:pe,bindFramebuffer:_e,drawBuffers:le,useProgram:ke,setBlending:et,setMaterial:Vt,setFlipSided:St,setCullFace:gn,setLineWidth:pt,setPolygonOffset:He,setScissorTest:Dn,activeTexture:mn,bindTexture:b,unbindTexture:I,compressedTexImage2D:W,texImage2D:fe,texImage3D:ce,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:ye,texStorage3D:z,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:re,scissor:de,viewport:he,reset:tt}}function hE(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const A=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,I){return m?new OffscreenCanvas(b,I):oo("canvas")}function _(b,I,W,j){let ee=1;if((b.width>j||b.height>j)&&(ee=j/Math.max(b.width,b.height)),ee<1||I===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=I?La:Math.floor,ye=re(ee*b.width),z=re(ee*b.height);p===void 0&&(p=v(ye,z));const fe=W?v(ye,z):p;return fe.width=ye,fe.height=z,fe.getContext("2d").drawImage(b,0,0,ye,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+z+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return oh(b.width)&&oh(b.height)}function E(b){return a?!1:b.wrapS!==Rt||b.wrapT!==Rt||b.minFilter!==dt&&b.minFilter!==Ze}function C(b,I){return b.generateMipmaps&&I&&b.minFilter!==dt&&b.minFilter!==Ze}function M(b){o.generateMipmap(b)}function y(b,I,W,j,ee=!1){if(a===!1)return I;if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=I;return I===6403&&(W===5126&&(re=33326),W===5131&&(re=33325),W===5121&&(re=33321)),I===33319&&(W===5126&&(re=33328),W===5131&&(re=33327),W===5121&&(re=33323)),I===6408&&(W===5126&&(re=34836),W===5131&&(re=34842),W===5121&&(re=j===Me&&ee===!1?35907:32856),W===32819&&(re=32854),W===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function w(b,I,W){return C(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==dt&&b.minFilter!==Ze?Math.log2(Math.max(I.width,I.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?I.mipmaps.length:1}function B(b){return b===dt||b===Ta||b===Ra?9728:9729}function Q(b){const I=b.target;I.removeEventListener("dispose",Q),k(I),I.isVideoTexture&&g.delete(I)}function $(b){const I=b.target;I.removeEventListener("dispose",$),P(I)}function k(b){const I=n.get(b);if(I.__webglInit===void 0)return;const W=b.source,j=A.get(W);if(j){const ee=j[I.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(b),Object.keys(j).length===0&&A.delete(W)}n.remove(b)}function R(b){const I=n.get(b);o.deleteTexture(I.__webglTexture);const W=b.source,j=A.get(W);delete j[I.__cacheKey],r.memory.textures--}function P(b){const I=b.texture,W=n.get(b),j=n.get(I);if(j.__webglTexture!==void 0&&(o.deleteTexture(j.__webglTexture),r.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)o.deleteFramebuffer(W.__webglFramebuffer[ee]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[ee]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,re=I.length;ee<re;ee++){const ye=n.get(I[ee]);ye.__webglTexture&&(o.deleteTexture(ye.__webglTexture),r.memory.textures--),n.remove(I[ee])}n.remove(I),n.remove(b)}let q=0;function G(){q=0}function N(){const b=q;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),q+=1,b}function L(b){const I=[];return I.push(b.wrapS),I.push(b.wrapT),I.push(b.magFilter),I.push(b.minFilter),I.push(b.anisotropy),I.push(b.internalFormat),I.push(b.format),I.push(b.type),I.push(b.generateMipmaps),I.push(b.premultiplyAlpha),I.push(b.flipY),I.push(b.unpackAlignment),I.push(b.encoding),I.join()}function O(b,I){const W=n.get(b);if(b.isVideoTexture&&Dn(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,b,I);return}}t.activeTexture(33984+I),t.bindTexture(3553,W.__webglTexture)}function J(b,I){const W=n.get(b);if(b.version>0&&W.__version!==b.version){pe(W,b,I);return}t.activeTexture(33984+I),t.bindTexture(35866,W.__webglTexture)}function K(b,I){const W=n.get(b);if(b.version>0&&W.__version!==b.version){pe(W,b,I);return}t.activeTexture(33984+I),t.bindTexture(32879,W.__webglTexture)}function Z(b,I){const W=n.get(b);if(b.version>0&&W.__version!==b.version){_e(W,b,I);return}t.activeTexture(33984+I),t.bindTexture(34067,W.__webglTexture)}const ie={[ii]:10497,[Rt]:33071,[so]:33648},ue={[dt]:9728,[Ta]:9984,[Ra]:9986,[Ze]:9729,[Rh]:9985,[si]:9987};function X(b,I,W){if(W?(o.texParameteri(b,10242,ie[I.wrapS]),o.texParameteri(b,10243,ie[I.wrapT]),(b===32879||b===35866)&&o.texParameteri(b,32882,ie[I.wrapR]),o.texParameteri(b,10240,ue[I.magFilter]),o.texParameteri(b,10241,ue[I.minFilter])):(o.texParameteri(b,10242,33071),o.texParameteri(b,10243,33071),(b===32879||b===35866)&&o.texParameteri(b,32882,33071),(I.wrapS!==Rt||I.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(b,10240,B(I.magFilter)),o.texParameteri(b,10241,B(I.minFilter)),I.minFilter!==dt&&I.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(I.type===Dt&&e.has("OES_texture_float_linear")===!1||a===!1&&I.type===Lt&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(o.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function Qe(b,I){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,I.addEventListener("dispose",Q));const j=I.source;let ee=A.get(j);ee===void 0&&(ee={},A.set(j,ee));const re=L(I);if(re!==b.__cacheKey){ee[re]===void 0&&(ee[re]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ee[re].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&R(I)),b.__cacheKey=re,b.__webglTexture=ee[re].texture}return W}function pe(b,I,W){let j=3553;I.isDataArrayTexture&&(j=35866),I.isData3DTexture&&(j=32879);const ee=Qe(b,I),re=I.source;if(t.activeTexture(33984+W),t.bindTexture(j,b.__webglTexture),re.version!==re.__currentVersion||ee===!0){o.pixelStorei(37440,I.flipY),o.pixelStorei(37441,I.premultiplyAlpha),o.pixelStorei(3317,I.unpackAlignment),o.pixelStorei(37443,0);const ye=E(I)&&x(I.image)===!1;let z=_(I.image,ye,!1,h);z=mn(I,z);const fe=x(z)||a,ce=s.convert(I.format,I.encoding);let de=s.convert(I.type),he=y(I.internalFormat,ce,de,I.encoding,I.isVideoTexture);X(j,I,fe);let we;const Ne=I.mipmaps,tt=a&&I.isVideoTexture!==!0,D=re.__currentVersion===void 0||ee===!0,ae=w(I,z,fe);if(I.isDepthTexture)he=6402,a?I.type===Dt?he=36012:I.type===Xi?he=33190:I.type===Ys?he=35056:he=33189:I.type===Dt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Ji&&he===6402&&I.type!==Sp&&I.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Xi,de=s.convert(I.type)),I.format===Zs&&he===6402&&(he=34041,I.type!==Ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=Ys,de=s.convert(I.type))),D&&(tt?t.texStorage2D(3553,1,he,z.width,z.height):t.texImage2D(3553,0,he,z.width,z.height,0,ce,de,null));else if(I.isDataTexture)if(Ne.length>0&&fe){tt&&D&&t.texStorage2D(3553,ae,he,Ne[0].width,Ne[0].height);for(let V=0,oe=Ne.length;V<oe;V++)we=Ne[V],tt?t.texSubImage2D(3553,V,0,0,we.width,we.height,ce,de,we.data):t.texImage2D(3553,V,he,we.width,we.height,0,ce,de,we.data);I.generateMipmaps=!1}else tt?(D&&t.texStorage2D(3553,ae,he,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,ce,de,z.data)):t.texImage2D(3553,0,he,z.width,z.height,0,ce,de,z.data);else if(I.isCompressedTexture){tt&&D&&t.texStorage2D(3553,ae,he,Ne[0].width,Ne[0].height);for(let V=0,oe=Ne.length;V<oe;V++)we=Ne[V],I.format!==at?ce!==null?tt?t.compressedTexSubImage2D(3553,V,0,0,we.width,we.height,ce,we.data):t.compressedTexImage2D(3553,V,he,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,V,0,0,we.width,we.height,ce,de,we.data):t.texImage2D(3553,V,he,we.width,we.height,0,ce,de,we.data)}else if(I.isDataArrayTexture)tt?(D&&t.texStorage3D(35866,ae,he,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,ce,de,z.data)):t.texImage3D(35866,0,he,z.width,z.height,z.depth,0,ce,de,z.data);else if(I.isData3DTexture)tt?(D&&t.texStorage3D(32879,ae,he,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,ce,de,z.data)):t.texImage3D(32879,0,he,z.width,z.height,z.depth,0,ce,de,z.data);else if(I.isFramebufferTexture){if(D)if(tt)t.texStorage2D(3553,ae,he,z.width,z.height);else{let V=z.width,oe=z.height;for(let se=0;se<ae;se++)t.texImage2D(3553,se,he,V,oe,0,ce,de,null),V>>=1,oe>>=1}}else if(Ne.length>0&&fe){tt&&D&&t.texStorage2D(3553,ae,he,Ne[0].width,Ne[0].height);for(let V=0,oe=Ne.length;V<oe;V++)we=Ne[V],tt?t.texSubImage2D(3553,V,0,0,ce,de,we):t.texImage2D(3553,V,he,ce,de,we);I.generateMipmaps=!1}else tt?(D&&t.texStorage2D(3553,ae,he,z.width,z.height),t.texSubImage2D(3553,0,0,0,ce,de,z)):t.texImage2D(3553,0,he,ce,de,z);C(I,fe)&&M(j),re.__currentVersion=re.version,I.onUpdate&&I.onUpdate(I)}b.__version=I.version}function _e(b,I,W){if(I.image.length!==6)return;const j=Qe(b,I),ee=I.source;if(t.activeTexture(33984+W),t.bindTexture(34067,b.__webglTexture),ee.version!==ee.__currentVersion||j===!0){o.pixelStorei(37440,I.flipY),o.pixelStorei(37441,I.premultiplyAlpha),o.pixelStorei(3317,I.unpackAlignment),o.pixelStorei(37443,0);const re=I.isCompressedTexture||I.image[0].isCompressedTexture,ye=I.image[0]&&I.image[0].isDataTexture,z=[];for(let V=0;V<6;V++)!re&&!ye?z[V]=_(I.image[V],!1,!0,c):z[V]=ye?I.image[V].image:I.image[V],z[V]=mn(I,z[V]);const fe=z[0],ce=x(fe)||a,de=s.convert(I.format,I.encoding),he=s.convert(I.type),we=y(I.internalFormat,de,he,I.encoding),Ne=a&&I.isVideoTexture!==!0,tt=ee.__currentVersion===void 0||j===!0;let D=w(I,fe,ce);X(34067,I,ce);let ae;if(re){Ne&&tt&&t.texStorage2D(34067,D,we,fe.width,fe.height);for(let V=0;V<6;V++){ae=z[V].mipmaps;for(let oe=0;oe<ae.length;oe++){const se=ae[oe];I.format!==at?de!==null?Ne?t.compressedTexSubImage2D(34069+V,oe,0,0,se.width,se.height,de,se.data):t.compressedTexImage2D(34069+V,oe,we,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+V,oe,0,0,se.width,se.height,de,he,se.data):t.texImage2D(34069+V,oe,we,se.width,se.height,0,de,he,se.data)}}}else{ae=I.mipmaps,Ne&&tt&&(ae.length>0&&D++,t.texStorage2D(34067,D,we,z[0].width,z[0].height));for(let V=0;V<6;V++)if(ye){Ne?t.texSubImage2D(34069+V,0,0,0,z[V].width,z[V].height,de,he,z[V].data):t.texImage2D(34069+V,0,we,z[V].width,z[V].height,0,de,he,z[V].data);for(let oe=0;oe<ae.length;oe++){const Pe=ae[oe].image[V].image;Ne?t.texSubImage2D(34069+V,oe+1,0,0,Pe.width,Pe.height,de,he,Pe.data):t.texImage2D(34069+V,oe+1,we,Pe.width,Pe.height,0,de,he,Pe.data)}}else{Ne?t.texSubImage2D(34069+V,0,0,0,de,he,z[V]):t.texImage2D(34069+V,0,we,de,he,z[V]);for(let oe=0;oe<ae.length;oe++){const se=ae[oe];Ne?t.texSubImage2D(34069+V,oe+1,0,0,de,he,se.image[V]):t.texImage2D(34069+V,oe+1,we,de,he,se.image[V])}}}C(I,ce)&&M(34067),ee.__currentVersion=ee.version,I.onUpdate&&I.onUpdate(I)}b.__version=I.version}function le(b,I,W,j,ee){const re=s.convert(W.format,W.encoding),ye=s.convert(W.type),z=y(W.internalFormat,re,ye,W.encoding);n.get(I).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,z,I.width,I.height,I.depth,0,re,ye,null):t.texImage2D(ee,0,z,I.width,I.height,0,re,ye,null)),t.bindFramebuffer(36160,b),He(I)?d.framebufferTexture2DMultisampleEXT(36160,j,ee,n.get(W).__webglTexture,0,pt(I)):o.framebufferTexture2D(36160,j,ee,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(b,I,W){if(o.bindRenderbuffer(36161,b),I.depthBuffer&&!I.stencilBuffer){let j=33189;if(W||He(I)){const ee=I.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Dt?j=36012:ee.type===Xi&&(j=33190));const re=pt(I);He(I)?d.renderbufferStorageMultisampleEXT(36161,re,j,I.width,I.height):o.renderbufferStorageMultisample(36161,re,j,I.width,I.height)}else o.renderbufferStorage(36161,j,I.width,I.height);o.framebufferRenderbuffer(36160,36096,36161,b)}else if(I.depthBuffer&&I.stencilBuffer){const j=pt(I);W&&He(I)===!1?o.renderbufferStorageMultisample(36161,j,35056,I.width,I.height):He(I)?d.renderbufferStorageMultisampleEXT(36161,j,35056,I.width,I.height):o.renderbufferStorage(36161,34041,I.width,I.height),o.framebufferRenderbuffer(36160,33306,36161,b)}else{const j=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ee=0;ee<j.length;ee++){const re=j[ee],ye=s.convert(re.format,re.encoding),z=s.convert(re.type),fe=y(re.internalFormat,ye,z,re.encoding),ce=pt(I);W&&He(I)===!1?o.renderbufferStorageMultisample(36161,ce,fe,I.width,I.height):He(I)?d.renderbufferStorageMultisampleEXT(36161,ce,fe,I.width,I.height):o.renderbufferStorage(36161,fe,I.width,I.height)}}o.bindRenderbuffer(36161,null)}function Ce(b,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),O(I.depthTexture,0);const j=n.get(I.depthTexture).__webglTexture,ee=pt(I);if(I.depthTexture.format===Ji)He(I)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,ee):o.framebufferTexture2D(36160,36096,3553,j,0);else if(I.depthTexture.format===Zs)He(I)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,ee):o.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function ge(b){const I=n.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!I.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ce(I.__webglFramebuffer,b)}else if(W){I.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,I.__webglFramebuffer[j]),I.__webglDepthbuffer[j]=o.createRenderbuffer(),ke(I.__webglDepthbuffer[j],b,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=o.createRenderbuffer(),ke(I.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function et(b,I,W){const j=n.get(b);I!==void 0&&le(j.__webglFramebuffer,b,b.texture,36064,3553),W!==void 0&&ge(b)}function Vt(b){const I=b.texture,W=n.get(b),j=n.get(I);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=o.createTexture()),j.__version=I.version,r.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ye=x(b)||a;if(ee){W.__webglFramebuffer=[];for(let z=0;z<6;z++)W.__webglFramebuffer[z]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const z=b.texture;for(let fe=0,ce=z.length;fe<ce;fe++){const de=n.get(z[fe]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&He(b)===!1){const z=re?I:[I];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let fe=0;fe<z.length;fe++){const ce=z[fe];W.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[fe]);const de=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),we=y(ce.internalFormat,de,he,ce.encoding),Ne=pt(b);o.renderbufferStorageMultisample(36161,Ne,we,b.width,b.height),o.framebufferRenderbuffer(36160,36064+fe,36161,W.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(36161,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,j.__webglTexture),X(34067,I,ye);for(let z=0;z<6;z++)le(W.__webglFramebuffer[z],b,I,36064,34069+z);C(I,ye)&&M(34067),t.unbindTexture()}else if(re){const z=b.texture;for(let fe=0,ce=z.length;fe<ce;fe++){const de=z[fe],he=n.get(de);t.bindTexture(3553,he.__webglTexture),X(3553,de,ye),le(W.__webglFramebuffer,b,de,36064+fe,3553),C(de,ye)&&M(3553)}t.unbindTexture()}else{let z=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?z=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,j.__webglTexture),X(z,I,ye),le(W.__webglFramebuffer,b,I,36064,z),C(I,ye)&&M(z),t.unbindTexture()}b.depthBuffer&&ge(b)}function St(b){const I=x(b)||a,W=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let j=0,ee=W.length;j<ee;j++){const re=W[j];if(C(re,I)){const ye=b.isWebGLCubeRenderTarget?34067:3553,z=n.get(re).__webglTexture;t.bindTexture(ye,z),M(ye),t.unbindTexture()}}}function gn(b){if(a&&b.samples>0&&He(b)===!1){const I=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],W=b.width,j=b.height;let ee=16384;const re=[],ye=b.stencilBuffer?33306:36096,z=n.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let ce=0;ce<I.length;ce++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let ce=0;ce<I.length;ce++){re.push(36064+ce),b.depthBuffer&&re.push(ye);const de=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(de===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),fe&&o.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[ce]),de===!0&&(o.invalidateFramebuffer(36008,[ye]),o.invalidateFramebuffer(36009,[ye])),fe){const he=n.get(I[ce]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,he,0)}o.blitFramebuffer(0,0,W,j,0,0,W,j,ee,9728),f&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let ce=0;ce<I.length;ce++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ce,36161,z.__webglColorRenderbuffer[ce]);const de=n.get(I[ce]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ce,3553,de,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function pt(b){return Math.min(u,b.samples)}function He(b){const I=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Dn(b){const I=r.render.frame;g.get(b)!==I&&(g.set(b,I),b.update())}function mn(b,I){const W=b.encoding,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===rh||W!==Ct&&(W===Me?a===!1?e.has("EXT_sRGB")===!0&&j===at?(b.format=rh,b.minFilter=Ze,b.generateMipmaps=!1):I=Fp.sRGBToLinear(I):(j!==at||ee!==kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),I}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=He}function uE(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===kt)return 5121;if(s===Zm)return 32819;if(s===e0)return 32820;if(s===Km)return 5120;if(s===Jm)return 5122;if(s===Sp)return 5123;if(s===jm)return 5124;if(s===Xi)return 5125;if(s===Dt)return 5126;if(s===Lt)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===t0)return 6406;if(s===at)return 6408;if(s===i0)return 6409;if(s===s0)return 6410;if(s===Ji)return 6402;if(s===Zs)return 34041;if(s===zr)return 6403;if(s===n0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===rh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===r0)return 36244;if(s===Vr)return 33319;if(s===o0)return 33320;if(s===a0)return 36249;if(s===pa||s===el||s===tl||s===ga)if(r===Me)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jc||s===Au||s===Zc||s===pu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Au)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eh||s===th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===eh)return r===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===th)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nh||s===gu||s===mu||s===_u||s===vu||s===xu||s===yu||s===Eu||s===Iu||s===Cu||s===wu||s===Su||s===bu||s===Mu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nh)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_u)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Iu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Su)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mu)return r===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ih)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ih)return r===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ys?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class dE extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const A=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const v=new Ei;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[p.jointName]=v,c.add(v)}const m=c.joints[p.jointName];A!==null&&(m.matrix.fromArray(A.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=A.radius),m.visible=A!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class AE extends At{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Xi),n===void 0&&h===Zs&&(n=Ys),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}class pE extends sn{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let p=null,A=null;const m=[],v=[],_=new _t;_.layers.enable(1),_.viewport=new qe;const x=new _t;x.layers.enable(2),x.viewport=new qe;const E=[_,x],C=new dE;C.layers.enable(1),C.layers.enable(2);let M=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let O=m[L];return O===void 0&&(O=new Ml,m[L]=O),O.getTargetRaySpace()},this.getControllerGrip=function(L){let O=m[L];return O===void 0&&(O=new Ml,m[L]=O),O.getGripSpace()},this.getHand=function(L){let O=m[L];return O===void 0&&(O=new Ml,m[L]=O),O.getHandSpace()};function w(L){const O=v.indexOf(L.inputSource);if(O===-1)return;const J=m[O];J!==void 0&&J.dispatchEvent({type:L.type,data:L.inputSource})}function B(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Q);for(let L=0;L<m.length;L++){const O=v[L];O!==null&&(v[L]=null,m[L].disconnect(O))}M=null,y=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,A=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:d}),A=new An(d.framebufferWidth,d.framebufferHeight,{format:at,type:kt,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,J=null,K=null;g.depth&&(K=g.stencil?35056:33190,O=g.stencil?Zs:Ji,J=g.stencil?Ys:Xi);const Z={colorFormat:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Z),i.updateRenderState({layers:[u]}),A=new An(u.textureWidth,u.textureHeight,{format:at,type:kt,depthTexture:new AE(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ie=e.properties.get(A);ie.__ignoreDepthValues=u.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Q(L){for(let O=0;O<L.removed.length;O++){const J=L.removed[O],K=v.indexOf(J);K>=0&&(v[K]=null,m[K].dispatchEvent({type:"disconnected",data:J}))}for(let O=0;O<L.added.length;O++){const J=L.added[O];let K=v.indexOf(J);if(K===-1){for(let ie=0;ie<m.length;ie++)if(ie>=v.length){v.push(J),K=ie;break}else if(v[ie]===null){v[ie]=J,K=ie;break}if(K===-1)break}const Z=m[K];Z&&Z.dispatchEvent({type:"connected",data:J})}}const $=new T,k=new T;function R(L,O,J){$.setFromMatrixPosition(O.matrixWorld),k.setFromMatrixPosition(J.matrixWorld);const K=$.distanceTo(k),Z=O.projectionMatrix.elements,ie=J.projectionMatrix.elements,ue=Z[14]/(Z[10]-1),X=Z[14]/(Z[10]+1),Qe=(Z[9]+1)/Z[5],pe=(Z[9]-1)/Z[5],_e=(Z[8]-1)/Z[0],le=(ie[8]+1)/ie[0],ke=ue*_e,Ce=ue*le,ge=K/(-_e+le),et=ge*-_e;O.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(et),L.translateZ(ge),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Vt=ue+ge,St=X+ge,gn=ke-et,pt=Ce+(K-et),He=Qe*X/St*Vt,Dn=pe*X/St*Vt;L.projectionMatrix.makePerspective(gn,pt,He,Dn,Vt,St)}function P(L,O){O===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(O.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;C.near=x.near=_.near=L.near,C.far=x.far=_.far=L.far,(M!==C.near||y!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,y=C.far);const O=L.parent,J=C.cameras;P(C,O);for(let Z=0;Z<J.length;Z++)P(J[Z],O);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),L.matrix.copy(C.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const K=L.children;for(let Z=0,ie=K.length;Z<ie;Z++)K[Z].updateMatrixWorld(!0);J.length===2?R(C,_,x):C.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(L){u!==null&&(u.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let q=null;function G(L,O){if(c=O.getViewerPose(l||r),f=O,c!==null){const J=c.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let K=!1;J.length!==C.cameras.length&&(C.cameras.length=0,K=!0);for(let Z=0;Z<J.length;Z++){const ie=J[Z];let ue=null;if(d!==null)ue=d.getViewport(ie);else{const Qe=h.getViewSubImage(u,ie);ue=Qe.viewport,Z===0&&(e.setRenderTargetTextures(A,Qe.colorTexture,u.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(A))}let X=E[Z];X===void 0&&(X=new _t,X.layers.enable(Z),X.viewport=new qe,E[Z]=X),X.matrix.fromArray(ie.transform.matrix),X.projectionMatrix.fromArray(ie.projectionMatrix),X.viewport.set(ue.x,ue.y,ue.width,ue.height),Z===0&&C.matrix.copy(X.matrix),K===!0&&C.cameras.push(X)}}for(let J=0;J<m.length;J++){const K=v[J],Z=m[J];K!==null&&Z!==void 0&&Z.update(K,O,l||r)}q&&q(L,O),f=null}const N=new Gp;N.setAnimationLoop(G),this.setAnimationLoop=function(L){q=L},this.dispose=function(){}}}function gE(o,e){function t(p,A){p.fogColor.value.copy(A.color),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function n(p,A,m,v,_){A.isMeshBasicMaterial||A.isMeshLambertMaterial?i(p,A):A.isMeshToonMaterial?(i(p,A),h(p,A)):A.isMeshPhongMaterial?(i(p,A),c(p,A)):A.isMeshStandardMaterial?(i(p,A),u(p,A),A.isMeshPhysicalMaterial&&d(p,A,_)):A.isMeshMatcapMaterial?(i(p,A),f(p,A)):A.isMeshDepthMaterial?i(p,A):A.isMeshDistanceMaterial?(i(p,A),g(p,A)):A.isMeshNormalMaterial?i(p,A):A.isLineBasicMaterial?(s(p,A),A.isLineDashedMaterial&&r(p,A)):A.isPointsMaterial?a(p,A,m,v):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function i(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.bumpMap&&(p.bumpMap.value=A.bumpMap,p.bumpScale.value=A.bumpScale,A.side===It&&(p.bumpScale.value*=-1)),A.displacementMap&&(p.displacementMap.value=A.displacementMap,p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap),A.normalMap&&(p.normalMap.value=A.normalMap,p.normalScale.value.copy(A.normalScale),A.side===It&&p.normalScale.value.negate()),A.specularMap&&(p.specularMap.value=A.specularMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const m=e.get(A).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap){p.lightMap.value=A.lightMap;const x=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=A.lightMapIntensity*x}A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity);let v;A.map?v=A.map:A.specularMap?v=A.specularMap:A.displacementMap?v=A.displacementMap:A.normalMap?v=A.normalMap:A.bumpMap?v=A.bumpMap:A.roughnessMap?v=A.roughnessMap:A.metalnessMap?v=A.metalnessMap:A.alphaMap?v=A.alphaMap:A.emissiveMap?v=A.emissiveMap:A.clearcoatMap?v=A.clearcoatMap:A.clearcoatNormalMap?v=A.clearcoatNormalMap:A.clearcoatRoughnessMap?v=A.clearcoatRoughnessMap:A.iridescenceMap?v=A.iridescenceMap:A.iridescenceThicknessMap?v=A.iridescenceThicknessMap:A.specularIntensityMap?v=A.specularIntensityMap:A.specularColorMap?v=A.specularColorMap:A.transmissionMap?v=A.transmissionMap:A.thicknessMap?v=A.thicknessMap:A.sheenColorMap?v=A.sheenColorMap:A.sheenRoughnessMap&&(v=A.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;A.aoMap?_=A.aoMap:A.lightMap&&(_=A.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity}function r(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function a(p,A,m,v){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*m,p.scale.value=v*.5,A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);let _;A.map?_=A.map:A.alphaMap&&(_=A.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);let m;A.map?m=A.map:A.alphaMap&&(m=A.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function c(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function h(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function u(p,A){p.roughness.value=A.roughness,p.metalness.value=A.metalness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap),A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap),e.get(A).envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function d(p,A,m){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap)),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap),A.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),p.clearcoatNormalMap.value=A.clearcoatNormalMap,A.side===It&&p.clearcoatNormalScale.value.negate())),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap)),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap)}function f(p,A){A.matcap&&(p.matcap.value=A.matcap)}function g(p,A){p.referencePosition.value.copy(A.referencePosition),p.nearDistance.value=A.nearDistance,p.farDistance.value=A.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function mE(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(v,_){const x=_.program;n.uniformBlockBinding(v,x)}function c(v,_){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",A));const E=_.program;n.updateUBOMapping(v,E);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function h(v){const _=u();v.__bindingPointIndex=_;const x=o.createBuffer(),E=v.__size,C=v.usage;return o.bindBuffer(35345,x),o.bufferData(35345,E,C),o.bindBuffer(35345,null),o.bindBufferBase(35345,_,x),x}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],x=v.uniforms,E=v.__cache;o.bindBuffer(35345,_);for(let C=0,M=x.length;C<M;C++){const y=x[C];if(f(y,C,E)===!0){const w=y.value,B=y.__offset;typeof w=="number"?(y.__data[0]=w,o.bufferSubData(35345,B,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):w.toArray(y.__data),o.bufferSubData(35345,B,y.__data))}}o.bindBuffer(35345,null)}function f(v,_,x){const E=v.value;if(x[_]===void 0)return typeof E=="number"?x[_]=E:x[_]=E.clone(),!0;if(typeof E=="number"){if(x[_]!==E)return x[_]=E,!0}else{const C=x[_];if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const _=v.uniforms;let x=0;const E=16;let C=0;for(let M=0,y=_.length;M<y;M++){const w=_[M],B=p(w);if(w.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,M>0){C=x%E;const Q=E-C;C!==0&&Q-B.boundary<0&&(x+=E-C,w.__offset=x)}x+=B.storage}return C=x%E,C>0&&(x+=E-C),v.__size=x,v.__cache={},this}function p(v){const _=v.value,x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function A(v){const _=v.target;_.removeEventListener("dispose",A);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}function _E(){const o=oo("canvas");return o.style.display="block",o}function $p(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:_E(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ct,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let A=!1,m=0,v=0,_=null,x=-1,E=null;const C=new qe,M=new qe;let y=null,w=e.width,B=e.height,Q=1,$=null,k=null;const R=new qe(0,0,w,B),P=new qe(0,0,w,B);let q=!1;const G=new kh;let N=!1,L=!1,O=null;const J=new Re,K=new Se,Z=new T,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return _===null?Q:1}let X=t;function Qe(S,U){for(let H=0;H<S.length;H++){const F=S[H],Y=e.getContext(F,U);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",tt,!1),X===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),X=Qe(U,S),X===null)throw Qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let pe,_e,le,ke,Ce,ge,et,Vt,St,gn,pt,He,Dn,mn,b,I,W,j,ee,re,ye,z,fe,ce;function de(){pe=new Tx(X),_e=new Cx(X,pe,o),pe.init(_e),z=new uE(X,pe,_e),le=new cE(X,pe,_e),ke=new Lx,Ce=new Ky,ge=new hE(X,pe,le,Ce,_e,z,ke),et=new Sx(p),Vt=new Bx(p),St=new H0(X,_e),fe=new Ex(X,pe,St,_e),gn=new Rx(X,St,ke,fe),pt=new Nx(X,gn,St,ke),ee=new Qx(X,_e,ge),I=new wx(Ce),He=new Xy(p,et,Vt,pe,_e,fe,I),Dn=new gE(p,Ce),mn=new jy,b=new sE(pe,_e),j=new yx(p,et,le,pt,h,r),W=new lE(p,pt,_e),ce=new mE(X,ke,_e,le),re=new Ix(X,pe,ke,_e),ye=new Dx(X,pe,ke,_e),ke.programs=He.programs,p.capabilities=_e,p.extensions=pe,p.properties=Ce,p.renderLists=mn,p.shadowMap=W,p.state=le,p.info=ke}de();const he=new pE(p,X);this.xr=he,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const S=pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(w,B,!1))},this.getSize=function(S){return S.set(w,B)},this.setSize=function(S,U,H){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=S,B=U,e.width=Math.floor(S*Q),e.height=Math.floor(U*Q),H!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(w*Q,B*Q).floor()},this.setDrawingBufferSize=function(S,U,H){w=S,B=U,Q=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(R)},this.setViewport=function(S,U,H,F){S.isVector4?R.set(S.x,S.y,S.z,S.w):R.set(S,U,H,F),le.viewport(C.copy(R).multiplyScalar(Q).floor())},this.getScissor=function(S){return S.copy(P)},this.setScissor=function(S,U,H,F){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,U,H,F),le.scissor(M.copy(P).multiplyScalar(Q).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){le.setScissorTest(q=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){k=S},this.getClearColor=function(S){return S.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(S=!0,U=!0,H=!0){let F=0;S&&(F|=16384),U&&(F|=256),H&&(F|=1024),X.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),mn.dispose(),b.dispose(),Ce.dispose(),et.dispose(),Vt.dispose(),pt.dispose(),fe.dispose(),ce.dispose(),He.dispose(),he.dispose(),he.removeEventListener("sessionstart",Pe),he.removeEventListener("sessionend",ct),O&&(O.dispose(),O=null),nt.stop()};function we(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=ke.autoReset,U=W.enabled,H=W.autoUpdate,F=W.needsUpdate,Y=W.type;de(),ke.autoReset=S,W.enabled=U,W.autoUpdate=H,W.needsUpdate=F,W.type=Y}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function D(S){const U=S.target;U.removeEventListener("dispose",D),ae(U)}function ae(S){V(S),Ce.remove(S)}function V(S){const U=Ce.get(S).programs;U!==void 0&&(U.forEach(function(H){He.releaseProgram(H)}),S.isShaderMaterial&&He.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,F,Y,Ae){U===null&&(U=ie);const ve=Y.isMesh&&Y.matrixWorld.determinant()<0,be=mm(S,U,H,F,Y);le.setMaterial(F,ve);let Ee=H.index;const Ge=H.attributes.position;if(Ee===null){if(Ge===void 0||Ge.count===0)return}else if(Ee.count===0)return;let Le=1;F.wireframe===!0&&(Ee=gn.getWireframeAttribute(H),Le=2),fe.setup(Y,F,be,H,Ee);let Fe,je=re;Ee!==null&&(Fe=St.get(Ee),je=ye,je.setIndex(Fe));const Ri=Ee!==null?Ee.count:Ge.count,cs=H.drawRange.start*Le,hs=H.drawRange.count*Le,_n=Ae!==null?Ae.start*Le:0,Ue=Ae!==null?Ae.count*Le:1/0,us=Math.max(cs,_n),it=Math.min(Ri,cs+hs,_n+Ue)-1,Kt=Math.max(0,it-us+1);if(Kt!==0){if(Y.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*ue()),je.setMode(1)):je.setMode(4);else if(Y.isLine){let oi=F.linewidth;oi===void 0&&(oi=1),le.setLineWidth(oi*ue()),Y.isLineSegments?je.setMode(1):Y.isLineLoop?je.setMode(2):je.setMode(3)}else Y.isPoints?je.setMode(0):Y.isSprite&&je.setMode(4);if(Y.isInstancedMesh)je.renderInstances(us,Kt,Y.count);else if(H.isInstancedBufferGeometry){const oi=Math.min(H.instanceCount,H._maxInstanceCount);je.renderInstances(us,Kt,oi)}else je.render(us,Kt)}},this.compile=function(S,U){function H(F,Y,Ae){F.transparent===!0&&F.side===Gt?(F.side=It,F.needsUpdate=!0,yo(F,Y,Ae),F.side=ni,F.needsUpdate=!0,yo(F,Y,Ae),F.side=Gt):yo(F,Y,Ae)}d=b.get(S),d.init(),g.push(d),S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(p.physicallyCorrectLights),S.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let Ae=0;Ae<Y.length;Ae++){const ve=Y[Ae];H(ve,S,F)}else H(Y,S,F)}),g.pop(),d=null};let oe=null;function se(S){oe&&oe(S)}function Pe(){nt.stop()}function ct(){nt.start()}const nt=new Gp;nt.setAnimationLoop(se),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(S){oe=S,he.setAnimationLoop(S),S===null?nt.stop():nt.start()},he.addEventListener("sessionstart",Pe),he.addEventListener("sessionend",ct),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,U,_),d=b.get(S,g.length),d.init(),g.push(d),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(J),L=this.localClippingEnabled,N=I.init(this.clippingPlanes,L,U),u=mn.get(S,f.length),u.init(),f.push(u),ri(S,U,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort($,k),N===!0&&I.beginShadows();const H=d.state.shadowsArray;if(W.render(H,S,U),N===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(u,S),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let Y=0,Ae=F.length;Y<Ae;Y++){const ve=F[Y];Je(u,S,ve,ve.viewport)}}else Je(u,S,U);_!==null&&(ge.updateMultisampleRenderTarget(_),ge.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(p,S,U),fe.resetDefaultState(),x=-1,E=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ri(S,U,H,F){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){F&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const ve=pt.update(S),be=S.material;be.visible&&u.push(S,ve,be,H,Z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==ke.render.frame&&(S.skeleton.update(),S.skeleton.frame=ke.render.frame),!S.frustumCulled||G.intersectsObject(S))){F&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const ve=pt.update(S),be=S.material;if(Array.isArray(be)){const Ee=ve.groups;for(let Ge=0,Le=Ee.length;Ge<Le;Ge++){const Fe=Ee[Ge],je=be[Fe.materialIndex];je&&je.visible&&u.push(S,ve,je,H,Z.z,Fe)}}else be.visible&&u.push(S,ve,be,H,Z.z,null)}}const Ae=S.children;for(let ve=0,be=Ae.length;ve<be;ve++)ri(Ae[ve],U,H,F)}function Je(S,U,H,F){const Y=S.opaque,Ae=S.transmissive,ve=S.transparent;d.setupLightsView(H),Ae.length>0&&Ln(Y,U,H),F&&le.viewport(C.copy(F)),Y.length>0&&Xt(Y,U,H),Ae.length>0&&Xt(Ae,U,H),ve.length>0&&Xt(ve,U,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ln(S,U,H){const F=_e.isWebGL2;O===null&&(O=new An(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Lt:kt,minFilter:si,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(K),F?O.setSize(K.x,K.y):O.setSize(La(K.x),La(K.y));const Y=p.getRenderTarget();p.setRenderTarget(O),p.clear();const Ae=p.toneMapping;p.toneMapping=Sn,Xt(S,U,H),p.toneMapping=Ae,ge.updateMultisampleRenderTarget(O),ge.updateRenderTargetMipmap(O),p.setRenderTarget(Y)}function Xt(S,U,H){const F=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,Ae=S.length;Y<Ae;Y++){const ve=S[Y],be=ve.object,Ee=ve.geometry,Ge=F===null?ve.material:F,Le=ve.group;be.layers.test(H.layers)&&gm(be,U,H,Ee,Ge,Le)}}function gm(S,U,H,F,Y,Ae){S.onBeforeRender(p,U,H,F,Y,Ae),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(p,U,H,F,S,Ae),Y.transparent===!0&&Y.side===Gt?(Y.side=It,Y.needsUpdate=!0,p.renderBufferDirect(H,U,F,Y,S,Ae),Y.side=ni,Y.needsUpdate=!0,p.renderBufferDirect(H,U,F,Y,S,Ae),Y.side=Gt):p.renderBufferDirect(H,U,F,Y,S,Ae),S.onAfterRender(p,U,H,F,Y,Ae)}function yo(S,U,H){U.isScene!==!0&&(U=ie);const F=Ce.get(S),Y=d.state.lights,Ae=d.state.shadowsArray,ve=Y.state.version,be=He.getParameters(S,Y.state,Ae,U,H),Ee=He.getProgramCacheKey(be);let Ge=F.programs;F.environment=S.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(S.isMeshStandardMaterial?Vt:et).get(S.envMap||F.environment),Ge===void 0&&(S.addEventListener("dispose",D),Ge=new Map,F.programs=Ge);let Le=Ge.get(Ee);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===ve)return ou(S,be),Le}else be.uniforms=He.getUniforms(S),S.onBuild(H,be,p),S.onBeforeCompile(be,p),Le=He.acquireProgram(be,Ee),Ge.set(Ee,Le),F.uniforms=be.uniforms;const Fe=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=I.uniform),ou(S,be),F.needsLights=vm(S),F.lightsStateVersion=ve,F.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMap.value=Y.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotShadowMap.value=Y.state.spotShadowMap,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMap.value=Y.state.pointShadowMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const je=Le.getUniforms(),Ri=_a.seqWithValue(je.seq,Fe);return F.currentProgram=Le,F.uniformsList=Ri,Le}function ou(S,U){const H=Ce.get(S);H.outputEncoding=U.outputEncoding,H.instancing=U.instancing,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function mm(S,U,H,F,Y){U.isScene!==!0&&(U=ie),ge.resetTextureUnits();const Ae=U.fog,ve=F.isMeshStandardMaterial?U.environment:null,be=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Ct,Ee=(F.isMeshStandardMaterial?Vt:et).get(F.envMap||ve),Ge=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!F.normalMap&&!!H.attributes.tangent,Fe=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,Ri=!!H.morphAttributes.color,cs=F.toneMapped?p.toneMapping:Sn,hs=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_n=hs!==void 0?hs.length:0,Ue=Ce.get(F),us=d.state.lights;if(N===!0&&(L===!0||S!==E)){const Ht=S===E&&F.id===x;I.setState(F,S,Ht)}let it=!1;F.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==us.state.version||Ue.outputEncoding!==be||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Ee||F.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==I.numPlanes||Ue.numIntersection!==I.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==Le||Ue.morphTargets!==Fe||Ue.morphNormals!==je||Ue.morphColors!==Ri||Ue.toneMapping!==cs||_e.isWebGL2===!0&&Ue.morphTargetsCount!==_n)&&(it=!0):(it=!0,Ue.__version=F.version);let Kt=Ue.currentProgram;it===!0&&(Kt=yo(F,U,Y));let oi=!1,pr=!1,Ka=!1;const bt=Kt.getUniforms(),Di=Ue.uniforms;if(le.useProgram(Kt.program)&&(oi=!0,pr=!0,Ka=!0),F.id!==x&&(x=F.id,pr=!0),oi||E!==S){if(bt.setValue(X,"projectionMatrix",S.projectionMatrix),_e.logarithmicDepthBuffer&&bt.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),E!==S&&(E=S,pr=!0,Ka=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Ht=bt.map.cameraPosition;Ht!==void 0&&Ht.setValue(X,Z.setFromMatrixPosition(S.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&bt.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&bt.setValue(X,"viewMatrix",S.matrixWorldInverse)}if(Y.isSkinnedMesh){bt.setOptional(X,Y,"bindMatrix"),bt.setOptional(X,Y,"bindMatrixInverse");const Ht=Y.skeleton;Ht&&(_e.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),bt.setValue(X,"boneTexture",Ht.boneTexture,ge),bt.setValue(X,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ja=H.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&_e.isWebGL2===!0)&&ee.update(Y,H,F,Kt),(pr||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,bt.setValue(X,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Di.envMap.value=Ee,Di.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),pr&&(bt.setValue(X,"toneMappingExposure",p.toneMappingExposure),Ue.needsLights&&_m(Di,Ka),Ae&&F.fog===!0&&Dn.refreshFogUniforms(Di,Ae),Dn.refreshMaterialUniforms(Di,F,Q,B,O),_a.upload(X,Ue.uniformsList,Di,ge)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_a.upload(X,Ue.uniformsList,Di,ge),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&bt.setValue(X,"center",Y.center),bt.setValue(X,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(X,"normalMatrix",Y.normalMatrix),bt.setValue(X,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ht=F.uniformsGroups;for(let ja=0,xm=Ht.length;ja<xm;ja++)if(_e.isWebGL2){const au=Ht[ja];ce.update(au,Kt),ce.bind(au,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function _m(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function vm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,U,H){Ce.get(S.texture).__webglTexture=U,Ce.get(S.depthTexture).__webglTexture=H;const F=Ce.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=H===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const H=Ce.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){_=S,m=U,v=H;let F=!0;if(S){const Ee=Ce.get(S);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?ge.setupRenderTarget(S):Ee.__hasExternalTextures&&ge.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture)}let Y=null,Ae=!1,ve=!1;if(S){const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(ve=!0);const Ge=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Y=Ge[U],Ae=!0):_e.isWebGL2&&S.samples>0&&ge.useMultisampledRTT(S)===!1?Y=Ce.get(S).__webglMultisampledFramebuffer:Y=Ge,C.copy(S.viewport),M.copy(S.scissor),y=S.scissorTest}else C.copy(R).multiplyScalar(Q).floor(),M.copy(P).multiplyScalar(Q).floor(),y=q;if(le.bindFramebuffer(36160,Y)&&_e.drawBuffers&&F&&le.drawBuffers(S,Y),le.viewport(C),le.scissor(M),le.setScissorTest(y),Ae){const Ee=Ce.get(S.texture);X.framebufferTexture2D(36160,36064,34069+U,Ee.__webglTexture,H)}else if(ve){const Ee=Ce.get(S.texture),Ge=U||0;X.framebufferTextureLayer(36160,36064,Ee.__webglTexture,H||0,Ge)}x=-1},this.readRenderTargetPixels=function(S,U,H,F,Y,Ae,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){le.bindFramebuffer(36160,be);try{const Ee=S.texture,Ge=Ee.format,Le=Ee.type;if(Ge!==at&&z.convert(Ge)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Le===Lt&&(pe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Le!==kt&&z.convert(Le)!==X.getParameter(35738)&&!(Le===Dt&&(_e.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-F&&H>=0&&H<=S.height-Y&&X.readPixels(U,H,F,Y,z.convert(Ge),z.convert(Le),Ae)}finally{const Ee=_!==null?Ce.get(_).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(S,U,H=0){const F=Math.pow(2,-H),Y=Math.floor(U.image.width*F),Ae=Math.floor(U.image.height*F);ge.setTexture2D(U,0),X.copyTexSubImage2D(3553,H,0,0,S.x,S.y,Y,Ae),le.unbindTexture()},this.copyTextureToTexture=function(S,U,H,F=0){const Y=U.image.width,Ae=U.image.height,ve=z.convert(H.format),be=z.convert(H.type);ge.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),U.isDataTexture?X.texSubImage2D(3553,F,S.x,S.y,Y,Ae,ve,be,U.image.data):U.isCompressedTexture?X.compressedTexSubImage2D(3553,F,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):X.texSubImage2D(3553,F,S.x,S.y,ve,be,U.image),F===0&&H.generateMipmaps&&X.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H,F,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=S.max.x-S.min.x+1,ve=S.max.y-S.min.y+1,be=S.max.z-S.min.z+1,Ee=z.convert(F.format),Ge=z.convert(F.type);let Le;if(F.isData3DTexture)ge.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)ge.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,F.flipY),X.pixelStorei(37441,F.premultiplyAlpha),X.pixelStorei(3317,F.unpackAlignment);const Fe=X.getParameter(3314),je=X.getParameter(32878),Ri=X.getParameter(3316),cs=X.getParameter(3315),hs=X.getParameter(32877),_n=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,_n.width),X.pixelStorei(32878,_n.height),X.pixelStorei(3316,S.min.x),X.pixelStorei(3315,S.min.y),X.pixelStorei(32877,S.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(Le,Y,U.x,U.y,U.z,Ae,ve,be,Ee,Ge,_n.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Le,Y,U.x,U.y,U.z,Ae,ve,be,Ee,_n.data)):X.texSubImage3D(Le,Y,U.x,U.y,U.z,Ae,ve,be,Ee,Ge,_n),X.pixelStorei(3314,Fe),X.pixelStorei(32878,je),X.pixelStorei(3316,Ri),X.pixelStorei(3315,cs),X.pixelStorei(32877,hs),Y===0&&F.generateMipmaps&&X.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ge.setTextureCube(S,0):S.isData3DTexture?ge.setTexture3D(S,0):S.isDataArrayTexture?ge.setTexture2DArray(S,0):ge.setTexture2D(S,0),le.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,le.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class vE extends $p{}vE.prototype.isWebGL1Renderer=!0;class Ci extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new T;class zh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hd=new T,ud=new qe,dd=new qe,yE=new T,fd=new Re;class EE extends me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;ud.fromBufferAttribute(i.attributes.skinIndex,e),dd.fromBufferAttribute(i.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=dd.getComponent(s);if(r!==0){const a=ud.getComponent(s);fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yE.copy(hd).applyMatrix4(fd),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yp extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends At{constructor(e=null,t=1,n=1,i,s,r,a,l,c=dt,h=dt,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new Re,IE=new Re;class Hh{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:IE;Ad.multiplyMatrices(a,t[s]),Ad.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,at,Dt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Yp),this.bones.push(r),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xp extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pd=new T,gd=new T,md=new Re,Bl=new Va,zo=new Mi;class Wh extends Xe{constructor(e=new rn,t=new Xp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)pd.fromBufferAttribute(t,i-1),gd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pd.distanceTo(gd);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;md.copy(i).invert(),Bl.copy(e.ray).applyMatrix4(md);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,h=new T,u=new T,d=new T,f=this.isLineSegments?2:1,g=n.index,A=n.attributes.position;if(g!==null){const m=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let _=m,x=v-1;_<x;_+=f){const E=g.getX(_),C=g.getX(_+1);if(c.fromBufferAttribute(A,E),h.fromBufferAttribute(A,C),Bl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),v=Math.min(A.count,r.start+r.count);for(let _=m,x=v-1;_<x;_+=f){if(c.fromBufferAttribute(A,_),h.fromBufferAttribute(A,_+1),Bl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const _d=new T,vd=new T;class CE extends Wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_d.fromBufferAttribute(t,i),vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_d.distanceTo(vd);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wE extends Wh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kp extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xd=new Re,ch=new Va,Vo=new Mi,Ho=new T;class SE extends Xe{constructor(e=new rn,t=new Kp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;xd.copy(i).invert(),ch.copy(e.ray).applyMatrix4(xd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,p=f;g<p;g++){const A=c.getX(g);Ho.fromBufferAttribute(u,A),yd(Ho,A,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,p=f;g<p;g++)Ho.fromBufferAttribute(u,g),yd(Ho,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yd(o,e,t,n,i,s,r){const a=ch.distanceSqToPoint(o);if(a<t){const l=new T;ch.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class bE extends At{constructor(e,t,n,i,s,r,a,l,c,h,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class wi extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ls extends wi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ai(o,e,t){return Jp(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Wo(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Jp(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ME(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ed(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function jp(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class mo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class BE extends mo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Vs:s=e,a=2*t-n;break;case Da:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vs:r=e,l=2*n-t;break;case Da:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,A=p*g,m=-d*A+2*d*p-d*g,v=(1+d)*A+(-1.5-2*d)*p+(-.5+d)*g+1,_=(-1-f)*A+(1.5+f)*p+.5*g,x=f*A-f*p;for(let E=0;E!==a;++E)s[E]=m*r[h+E]+v*r[c+E]+_*r[l+E]+x*r[u+E];return s}}class Zp extends mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class TE extends mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new TE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new BE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=Ai(n,s,r),this.values=Ai(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Jp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ai(this.times),t=Ai(this.values),n=this.getValueSize(),i=this.getInterpolation()===nl,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=Ai(e,0,r),this.values=Ai(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Ai(this.times,0),t=Ai(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ts;class dr extends Rn{}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=er;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class eg extends Rn{}eg.prototype.ValueTypeName="color";class ao extends Rn{}ao.prototype.ValueTypeName="number";class RE extends mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(s,0,r,c-a,r,c,l);return s}}class ns extends Rn{InterpolantFactoryMethodLinear(e){return new RE(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=ts;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Rn{}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=er;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends Rn{}lo.prototype.ValueTypeName="vector";class hh{constructor(e,t=-1,n,i=Fh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(LE(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=ME(l);l=Ed(l,1,h),c=Ed(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new ao(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,p){if(f.length!==0){const A=[],m=[];jp(f,A,m,g),A.length!==0&&p.push(new u(d,A,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const A=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const _=d[g];A.push(_.time),m.push(_.morphTarget===p?1:0)}i.push(new ao(".morphTargetInfluence["+p+"]",A,m))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(lo,f+".position",d,"pos",i),n(ns,f+".quaternion",d,"rot",i),n(lo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function DE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ao;case"vector":case"vector2":case"vector3":case"vector4":return lo;case"color":return eg;case"quaternion":return ns;case"bool":case"boolean":return dr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function LE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=DE(o.type);if(o.times===void 0){const t=[],n=[];jp(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const nr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class FE{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const PE=new FE;class Ti{constructor(e){this.manager=e!==void 0?e:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const On={};class QE extends Error{constructor(e,t){super(e),this.response=t}}class Ii extends Ti{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=On[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let p=0;const A=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:x})=>{if(_)m.close();else{p+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let C=0,M=h.length;C<M;C++){const y=h[C];y.onProgress&&y.onProgress(E)}m.enqueue(x),v()}})}}});return new Response(A)}else throw new QE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{nr.add(e,c);const h=On[e];delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class NE extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=nr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=oo("img");function l(){h(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class UE extends Ti{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Vh,a=new Ii(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:Rt,r.wrapT=c.wrapT!==void 0?c.wrapT:Rt,r.magFilter=c.magFilter!==void 0?c.magFilter:Ze,r.minFilter=c.minFilter!==void 0?c.minFilter:Ze,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=si),c.mipmapCount===1&&(r.minFilter=Ze),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class qh extends Ti{constructor(e){super(e)}load(e,t,n,i){const s=new At,r=new NE(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wa extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Id=new Re,Cd=new T,wd=new T;class $h{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),Id.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OE extends $h{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ro*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kE extends Wa{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new OE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sd=new Re,vr=new T,Tl=new T;class GE extends $h{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}}class Yh extends Wa{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new GE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zE extends $h{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new zE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class VE{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class HE extends Wa{constructor(e=new VE,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Zi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class WE extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=nr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){nr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class qE{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;bn.multiplyQuaternionsFlat(e,r,e,t,e,n),bn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const Xh="\\[\\]\\.:\\/",$E=new RegExp("["+Xh+"]","g"),Kh="[^"+Xh+"]",YE="[^"+Xh.replace("\\.","")+"]",XE=/((?:WC+[\/:])*)/.source.replace("WC",Kh),KE=/(WCOD+)?/.source.replace("WCOD",YE),JE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),jE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),ZE=new RegExp("^"+XE+KE+JE+jE+"$"),eI=["material","materials","bones","map"];class tI{constructor(e,t,n){const i=n||De.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class De{constructor(e,t,n){this.path=t,this.parsedPath=n||De.parseTrackName(t),this.node=De.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new De.Composite(e,t,n):new De(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($E,"")}static parseTrackName(e){const t=ZE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);eI.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=De.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}De.Composite=tI;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nI{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:zs,endingEnd:zs};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Dh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case l0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Fh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Lh;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Mp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Vs,i.endingEnd=Vs):(e?i.endingStart=this.zeroSlopeAtStart?Vs:zs:i.endingStart=Da,t?i.endingEnd=this.zeroSlopeAtEnd?Vs:zs:i.endingEnd=Da)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const iI=new Float32Array(1);class sI extends sn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;g=new qE(De.create(n,f,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zp(new Float32Array(2),new Float32Array(2),1,iI),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?hh.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Fh),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new nI(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?hh.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class rI{constructor(e,t,n=0,i=1/0){this.ray=new Va(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uh(e,this,n,t),n.sort(bd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)uh(e[i],this,n,t);return n.sort(bd),n}}function bd(o,e){return o.distance-e.distance}function uh(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)uh(i[s],e,t,!0)}}class va{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jn=oI();function oI(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function aI(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=mt(o,-65504,65504),jn.floatView[0]=o;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function lI(o){const e=o>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(o&1023)]+jn.exponentTable[e],jn.floatView[0]}var qo=Object.freeze({__proto__:null,toHalfFloat:aI,fromHalfFloat:lI});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa=window,Jh=xa.ShadowRoot&&(xa.ShadyCSS===void 0||xa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ng=Symbol(),Md=new WeakMap;class cI{constructor(e,t,n){if(this._$cssResult$=!0,n!==ng)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Jh&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Md.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Md.set(t,e))}return e}toString(){return this.cssText}}const hI=o=>new cI(typeof o=="string"?o:o+"",void 0,ng),uI=(o,e)=>{Jh?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=xa.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)})},Bd=Jh?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return hI(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rl;const Fa=window,Td=Fa.trustedTypes,dI=Td?Td.emptyScript:"",Rd=Fa.reactiveElementPolyfillSupport,dh={toAttribute(o,e){switch(e){case Boolean:o=o?dI:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ig=(o,e)=>e!==o&&(e==e||o==o),Dl={attribute:!0,type:String,converter:dh,reflect:!1,hasChanged:ig};class Yi extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=Dl){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dl}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Bd(i))}else e!==void 0&&t.push(Bd(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return uI(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Dl){var i;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const r=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:dh).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const r=i.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:dh;this._$El=s,this[s]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ig)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}Yi.finalized=!0,Yi.elementProperties=new Map,Yi.elementStyles=[],Yi.shadowRootOptions={mode:"open"},Rd==null||Rd({ReactiveElement:Yi}),((Rl=Fa.reactiveElementVersions)!==null&&Rl!==void 0?Rl:Fa.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ll;const Pa=window,ir=Pa.trustedTypes,Dd=ir?ir.createPolicy("lit-html",{createHTML:o=>o}):void 0,xi=`lit$${(Math.random()+"").slice(9)}$`,sg="?"+xi,fI=`<${sg}>`,sr=document,co=(o="")=>sr.createComment(o),ho=o=>o===null||typeof o!="object"&&typeof o!="function",rg=Array.isArray,AI=o=>rg(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ld=/-->/g,Fd=/>/g,Qi=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pd=/'/g,Qd=/"/g,og=/^(?:script|style|textarea|title)$/i,pI=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),qa=pI(1),rr=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),Nd=new WeakMap,ag=(o,e,t)=>{var n,i;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let r=s._$litPart$;if(r===void 0){const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=r=new _o(e.insertBefore(co(),a),a,void 0,t!=null?t:{})}return r._$AI(o),r},Xs=sr.createTreeWalker(sr,129,null,!1),gI=(o,e)=>{const t=o.length-1,n=[];let i,s=e===2?"<svg>":"",r=xr;for(let l=0;l<t;l++){const c=o[l];let h,u,d=-1,f=0;for(;f<c.length&&(r.lastIndex=f,u=r.exec(c),u!==null);)f=r.lastIndex,r===xr?u[1]==="!--"?r=Ld:u[1]!==void 0?r=Fd:u[2]!==void 0?(og.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=Qi):u[3]!==void 0&&(r=Qi):r===Qi?u[0]===">"?(r=i!=null?i:xr,d=-1):u[1]===void 0?d=-2:(d=r.lastIndex-u[2].length,h=u[1],r=u[3]===void 0?Qi:u[3]==='"'?Qd:Pd):r===Qd||r===Pd?r=Qi:r===Ld||r===Fd?r=xr:(r=Qi,i=void 0);const g=r===Qi&&o[l+1].startsWith("/>")?" ":"";s+=r===xr?c+fI:d>=0?(n.push(h),c.slice(0,d)+"$lit$"+c.slice(d)+xi+g):c+xi+(d===-2?(n.push(void 0),l):g)}const a=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Dd!==void 0?Dd.createHTML(a):a,n]};class uo{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=gI(e,t);if(this.el=uo.createElement(c,n),Xs.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=Xs.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(xi)){const f=h[r++];if(u.push(d),f!==void 0){const g=i.getAttribute(f.toLowerCase()+"$lit$").split(xi),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:p[2],strings:g,ctor:p[1]==="."?_I:p[1]==="?"?xI:p[1]==="@"?yI:$a})}else l.push({type:6,index:s})}for(const d of u)i.removeAttribute(d)}if(og.test(i.tagName)){const u=i.textContent.split(xi),d=u.length-1;if(d>0){i.textContent=ir?ir.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],co()),Xs.nextNode(),l.push({type:2,index:++s});i.append(u[d],co())}}}else if(i.nodeType===8)if(i.data===sg)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(xi,u+1))!==-1;)l.push({type:7,index:s}),u+=xi.length-1}s++}}static createElement(e,t){const n=sr.createElement("template");return n.innerHTML=e,n}}function or(o,e,t=o,n){var i,s,r,a;if(e===rr)return e;let l=n!==void 0?(i=t._$Cl)===null||i===void 0?void 0:i[n]:t._$Cu;const c=ho(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,t,n)),n!==void 0?((r=(a=t)._$Cl)!==null&&r!==void 0?r:a._$Cl=[])[n]=l:t._$Cu=l),l!==void 0&&(e=or(o,l._$AS(o,e.values),l,n)),e}class mI{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:i}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:sr).importNode(n,!0);Xs.currentNode=s;let r=Xs.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new _o(r,r.nextSibling,this,e):c.type===1?h=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(h=new EI(r,this,e)),this.v.push(h),c=i[++l]}a!==(c==null?void 0:c.index)&&(r=Xs.nextNode(),a++)}return s}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class _o{constructor(e,t,n,i){var s;this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$C_=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=or(this,e,t),ho(e)?e===ft||e==null||e===""?(this._$AH!==ft&&this._$AR(),this._$AH=ft):e!==this._$AH&&e!==rr&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):AI(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==ft&&ho(this._$AH)?this._$AA.nextSibling.data=e:this.k(sr.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=uo.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(n);else{const r=new mI(s,this),a=r.p(this.options);r.m(n),this.k(a),this._$AH=r}}_$AC(e){let t=Nd.get(e.strings);return t===void 0&&Nd.set(e.strings,t=new uo(e)),t}O(e){rg(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new _o(this.S(co()),this.S(co()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class $a{constructor(e,t,n,i,s){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ft}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const s=this.strings;let r=!1;if(s===void 0)e=or(this,e,t,0),r=!ho(e)||e!==this._$AH&&e!==rr,r&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=or(this,a[n+l],t,l),c===rr&&(c=this._$AH[l]),r||(r=!ho(c)||c!==this._$AH[l]),c===ft?e=ft:e!==ft&&(e+=(c!=null?c:"")+s[l+1]),this._$AH[l]=c}r&&!i&&this.P(e)}P(e){e===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class _I extends $a{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===ft?void 0:e}}const vI=ir?ir.emptyScript:"";class xI extends $a{constructor(){super(...arguments),this.type=4}P(e){e&&e!==ft?this.element.setAttribute(this.name,vI):this.element.removeAttribute(this.name)}}class yI extends $a{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=or(this,e,t,0))!==null&&n!==void 0?n:ft)===rr)return;const i=this._$AH,s=e===ft&&i!==ft||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==ft&&(i===ft||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class EI{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){or(this,e)}}const Ud=Pa.litHtmlPolyfillSupport;Ud==null||Ud(uo,_o),((Ll=Pa.litHtmlVersions)!==null&&Ll!==void 0?Ll:Pa.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fl,Pl;class ya extends Yi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ag(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return rr}}ya.finalized=!0,ya._$litElement$=!0,(Fl=globalThis.litElementHydrateSupport)===null||Fl===void 0||Fl.call(globalThis,{LitElement:ya});const Od=globalThis.litElementPolyfillSupport;Od==null||Od({LitElement:ya});((Pl=globalThis.litElementVersions)!==null&&Pl!==void 0?Pl:globalThis.litElementVersions=[]).push("3.2.2");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,cg=lg&&self.XRSession.prototype.requestHitTestSource!=null,Ql=self.ResizeObserver!=null,Nl=self.IntersectionObserver!=null,hg=cg;(()=>{const o=navigator.userAgent||navigator.vendor||self.opera;let e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&(e=!0),e})();/\bCrOS\b/.test(navigator.userAgent);const II=/android/i.test(navigator.userAgent),ug=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;/Safari\//.test(navigator.userAgent);const CI=/firefox/i.test(navigator.userAgent),wI=/OculusBrowser/.test(navigator.userAgent);ug&&/CriOS\//.test(navigator.userAgent);const SI=II&&!CI&&!wI,bI=Boolean(window.webkit&&window.webkit.messageHandlers),kd=(()=>{if(ug){if(bI)return Boolean(/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent));{const o=document.createElement("a");return Boolean(o.relList&&o.relList.supports&&o.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=o=>!!o&&o!=="null"?MI(o):null,Gd=()=>{if(hg)return;const o=[];throw lg||o.push("WebXR Device API"),cg||o.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${o.join(", ")}`)},MI=o=>new URL(o,window.location.toString()).toString(),BI=(o,e)=>{let t=null;const n=(...i)=>{t==null&&(o(...i),t=self.setTimeout(()=>t=null,e))};return n.flush=()=>{t!=null&&(self.clearTimeout(t),t=null)},n},zd=(o,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,o(...n)},e)}},En=(o,e,t)=>Math.max(e,Math.min(t,o)),TI=1,fh=(()=>{const o=(()=>{var e;if(!((e=document.documentElement.getAttribute("itemtype"))===null||e===void 0)&&e.includes("schema.org/SearchResultsPage"))return!0;const t=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const n of t)if(n.name==="viewport")return!0;return!1})();return o||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>o?window.devicePixelRatio:TI})(),fg=(()=>{const o="model-viewer-debug-mode",e=new RegExp(`[?&]${o}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),RI=(o=0)=>new Promise(e=>setTimeout(e,o)),DI=(o,e,t=null)=>new Promise(n=>{function i(s){(!t||t(s))&&(n(s),o.removeEventListener(e,i))}o.addEventListener(e,i)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const LI=.5,FI=0,PI=1,QI=1,Wr=Symbol("currentEnvironmentMap"),qr=Symbol("currentBackground"),Qa=Symbol("updateEnvironment"),$o=Symbol("cancelEnvironmentUpdate"),NI=o=>{var e,t,n;class i extends o{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=FI,this.shadowSoftness=PI,this.exposure=QI,this[e]=null,this[t]=null,this[n]=null}updated(r){super.updated(r),r.has("shadowIntensity")&&(this[ne].setShadowIntensity(this.shadowIntensity*LI),this[zt]()),r.has("shadowSoftness")&&(this[ne].setShadowSoftness(this.shadowSoftness),this[zt]()),r.has("exposure")&&(this[ne].exposure=this.exposure,this[zt]()),(r.has("environmentImage")||r.has("skyboxImage"))&&this[lr]()&&this[Qa]()}hasBakedShadow(){return this[ne].bakedShadows.size>0}async[(e=Wr,t=qr,n=$o,Qa)](){const{skyboxImage:r,environmentImage:a}=this;this[$o]!=null&&(this[$o](),this[$o]=null);const{textureUtils:l}=this[$e];if(l==null)return;const c=this[ar].beginActivity();try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(dg(r),a,d=>c(En(d,0,1)));this[Wr]!==h&&(this[Wr]=h,this.dispatchEvent(new CustomEvent("environment-change"))),u!=null?this[qr]=u.name===h.name?h:u:this[qr]=null,this[ne].setEnvironmentAndSkybox(this[Wr],this[qr]),this[ne].dispatchEvent({type:"envmap-update"})}catch(h){if(h instanceof Error)throw this[ne].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return yr([xe({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),yr([xe({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),yr([xe({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),yr([xe({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),yr([xe({type:Number})],i.prototype,"exposure",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=qa`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=qa`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=qa`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=qa`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This rule set is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${kI}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${OI}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${UI}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,zI=o=>{ag(GI,o)},Ul=new WeakMap;class VI extends Ti{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ii(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ul.has(e)){const l=Ul.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ul.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new rn;e.index&&t.setIndex(new lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize;t.setAttribute(s,new lt(r,a))}return t}_loadLibrary(e,t){const n=new Ii(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=HI.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function HI(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(u,d,f,c),p=g.attributes.map(A=>A.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{u.destroy(f),u.destroy(d)}});break}};function t(r,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeBufferToMesh(l,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const p={index:null,attributes:[]};for(const A in h){const m=self[u[A]];let v,_;if(c.useUniqueIDs)_=h[A],v=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,r[h[A]]),_===-1)continue;v=a.GetAttribute(d,_)}p.attributes.push(i(r,a,d,A,m,v))}return g===r.TRIANGULAR_MESH&&(p.index=n(r,a,d)),r.destroy(d),p}function n(r,a,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function i(r,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,p=g*h.BYTES_PER_ELEMENT,A=s(r,h),m=r._malloc(p);a.GetAttributeDataArrayForAllPoints(l,u,A,p,m);const v=new h(r.HEAPF32.buffer,m,g).slice();return r._free(m),{name:c,array:v,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class WI extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new KI(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new jI(t)}),this.register(function(t){return new ZI(t)}),this.register(function(t){return new eC(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new XI(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new JI(t)}),this.register(function(t){return new $I(t)}),this.register(function(t){return new rC(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Zi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ii(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={};if(typeof e=="string")s=e;else if(Zi.decodeText(new Uint8Array(e,0,4))===Ag){try{r[Te.KHR_BINARY_GLTF]=new oC(e)}catch(u){i&&i(u);return}s=r[Te.KHR_BINARY_GLTF].content}else s=Zi.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vC(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,r[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Te.KHR_MATERIALS_UNLIT:r[u]=new YI;break;case Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[u]=new cC;break;case Te.KHR_DRACO_MESH_COMPRESSION:r[u]=new aC(l,this.dracoLoader);break;case Te.KHR_TEXTURE_TRANSFORM:r[u]=new lC;break;case Te.KHR_MESH_QUANTIZATION:r[u]=new hC;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function qI(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class $I{constructor(e){this.parser=e,this.name=Te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yh(h),c.distance=u;break;case"spot":c=new kE(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class YI{constructor(){this.name=Te.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Me))}return Promise.all(i)}}class XI{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class KI{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(s)}}class JI{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class jI{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Me)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class ZI{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class eC{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(a[0],a[1],a[2]),Promise.all(s)}}class tC{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class nC{constructor(e){this.parser=e,this.name=Te.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Ie(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Me)),Promise.all(s)}}class iC{constructor(e){this.parser=e,this.name=Te.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class sC{constructor(e){this.parser=e,this.name=Te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rC{constructor(e){this.name=Te.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}const Ag="glTF",Er=12,Vd={JSON:1313821514,BIN:5130562};class oC{constructor(e){this.name=Te.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er);if(this.header={magic:Zi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Er,i=new DataView(e,Er);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===Vd.JSON){const l=new Uint8Array(e,Er+s,r);this.content=Zi.decodeText(l)}else if(a===Vd.BIN){const l=Er+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Te.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=ph[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=ph[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}u(d)},a,c)})})}}class lC{constructor(){this.name=Te.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ah extends wi{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ie().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class cC{constructor(){this.name=Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Ah}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Ie(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Me)),e.emissive=new Ie(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Ie(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,Me))}return Promise.all(s)}createMaterial(e){const t=new Ah(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ph,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class hC{constructor(){this.name=Te.KHR_MESH_QUANTIZATION}}class pg extends mo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,p=g-c,A=-2*f+3*d,m=f-d,v=1-A,_=m-d+u;for(let x=0;x!==a;x++){const E=r[p+x+a],C=r[p+x+l]*h,M=r[g+x+a],y=r[g+x]*h;s[x]=v*E+_*C+A*M+m*y}return s}}const uC=new bn;class dC extends pg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uC.fromArray(s).normalize().toArray(s),s}}const kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:dt,9729:Ze,9984:Ta,9985:Rh,9986:Ra,9987:si},Wd={33071:Rt,33648:so,10497:ii},qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fC={CUBICSPLINE:void 0,LINEAR:ts,STEP:er},Ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),o.DefaultMaterial}function Ir(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pC(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function gC(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mC(o){const e=o.extensions&&o.extensions[Te.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+$d(e.attributes):t=o.indices+":"+$d(o.attributes)+":"+o.mode,t}function $d(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function gh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _C(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class vC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qI,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new qh(this.options.manager):this.textureLoader=new WE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ii(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Ir(s,a,i),Vi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Te.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Zi.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=qd[i.type],c=fo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,A;if(f&&f!==u){const m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let _=t.cache.get(v);_||(p=new c(a,m*f,i.count*f/h),_=new xE(p,f/h),t.cache.add(v,_)),A=new zh(_,l,d%f/h,g)}else a===null?p=new c(i.count*l):p=new c(a,d,i.count*l),A=new lt(p,l,g);if(i.sparse!==void 0){const m=qd.SCALAR,v=fo[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new v(r[1],_,i.sparse.count*m),C=new c(r[2],x,i.sparse.count*l);a!==null&&(A=new lt(A.array.slice(),A.itemSize,A.normalized));for(let M=0,y=E.length;M<y;M++){const w=E[M];if(A.setX(w,C[M*l]),l>=2&&A.setY(w,C[M*l+1]),l>=3&&A.setZ(w,C[M*l+2]),l>=4&&A.setW(w,C[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Hd[d.magFilter]||Ze,h.minFilter=Hd[d.minFilter]||si,h.wrapS=Wd[d.wrapS]||ii,h.wrapT=Wd[d.wrapT]||ii,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const A=new At(p);A.needsUpdate=!0,d(A)}),t.load(Zi.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||_C(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Te.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Te.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Kp,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xp,fn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return wi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Te.KHR_MATERIALS_UNLIT]){const u=i[Te.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Me)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Gt);const h=s.alphaMode||Ol.OPAQUE;if(h===Ol.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ol.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==un&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==un&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==un&&(a.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==un&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Me)),Promise.all(c).then(function(){let u;return r===Ah?u=i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new r(a),s.name&&(u.name=s.name),Vi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ir(i,u,s),u})}createUniqueName(e){const t=De.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yd(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=mC(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Te.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yd(new rn,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?AC(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const p=h[f],A=r[f];let m;const v=c[f];if(A.mode===kn.TRIANGLES||A.mode===kn.TRIANGLE_STRIP||A.mode===kn.TRIANGLE_FAN||A.mode===void 0)m=s.isSkinnedMesh===!0?new EE(p,v):new me(p,v),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),A.mode===kn.TRIANGLE_STRIP?m.geometry=Xd(m.geometry,c0):A.mode===kn.TRIANGLE_FAN&&(m.geometry=Xd(m.geometry,Bp));else if(A.mode===kn.LINES)m=new CE(p,v);else if(A.mode===kn.LINE_STRIP)m=new Wh(p,v);else if(A.mode===kn.LINE_LOOP)m=new wE(p,v);else if(A.mode===kn.POINTS)m=new SE(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(m.geometry.morphAttributes).length>0&&gC(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Vi(m,s),A.extensions&&Ir(i,m,A),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Ei;t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _t(Rp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,g=f.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,A=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",A)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],g=c[4],p=[];for(let m=0,v=h.length;m<v;m++){const _=h[m],x=u[m],E=d[m],C=f[m],M=g[m];if(_===void 0)continue;_.updateMatrix();let y;switch(pi[M.path]){case pi.weights:y=ao;break;case pi.rotation:y=ns;break;case pi.position:case pi.scale:default:y=lo;break}const w=_.name?_.name:_.uuid,B=C.interpolation!==void 0?fC[C.interpolation]:ts,Q=[];pi[M.path]===pi.weights?_.traverse(function(k){k.morphTargetInfluences&&Q.push(k.name?k.name:k.uuid)}):Q.push(w);let $=E.array;if(E.normalized){const k=gh($.constructor),R=new Float32Array($.length);for(let P=0,q=$.length;P<q;P++)R[P]=$[P]*k;$=R}for(let k=0,R=Q.length;k<R;k++){const P=new y(Q[k]+"."+pi[M.path],x.array,$,B);C.interpolation==="CUBICSPLINE"&&(P.createInterpolant=function(G){const N=this instanceof ns?dC:pg;return new N(this.times,this.values,this.getValueSize()/3,G)},P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(P)}}const A=n.name?n.name:"animation_"+e;return new hh(A,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Yp:a.length>1?l=new Ei:a.length===1?l=a[0]:l=new Xe,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=r),Vi(l,s),s.extensions&&Ir(n,l,s),s.matrix!==void 0){const c=new Re;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Ei;i.name&&(r.name=s.createUniqueName(i.name)),Vi(r,i),i.extensions&&Ir(n,r,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(gg(a[c],r,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof fn||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}}function gg(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(a){r=a;const l=[];for(let c=0,h=r.joints.length;c<h;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const f=a[u];if(f){c.push(f);const g=new Re;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[u])}l.bind(new Hh(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];r.push(gg(h,s,t,n))}}return Promise.all(r)})}function xC(o,e,t){const n=e.attributes,i=new tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),a.normalized){const h=gh(fo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new T,l=new T;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const p=gh(fo[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Mi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Yd(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=ph[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Vi(o,e),xC(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pC(o,e.targets,t):o})}function Xd(o,e){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Bp)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s}class yC{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:s,transfer:r}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(s,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const EC=0,IC=2,CC=1,wC=2,SC=0,mg=9,jh=15,_g=16,Zh=22,vg=37,eu=43,xg=76,yg=83,Eg=97,Ig=100,Cg=103,wg=109;class bC{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Cr{constructor(e,t,n,i){this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const Bt=[171,75,84,88,32,50,48,187,13,10,26,10];function Kd(o){return typeof TextDecoder<"u"?new TextDecoder().decode(o):Buffer.from(o).toString("utf8")}function MC(o){const e=new Uint8Array(o.buffer,o.byteOffset,Bt.length);if(e[0]!==Bt[0]||e[1]!==Bt[1]||e[2]!==Bt[2]||e[3]!==Bt[3]||e[4]!==Bt[4]||e[5]!==Bt[5]||e[6]!==Bt[6]||e[7]!==Bt[7]||e[8]!==Bt[8]||e[9]!==Bt[9]||e[10]!==Bt[10]||e[11]!==Bt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new bC,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new Cr(o,Bt.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();const s=i._nextUint32();t.supercompressionScheme=i._nextUint32();const r=i._nextUint32(),a=i._nextUint32(),l=i._nextUint32(),c=i._nextUint32(),h=i._nextUint64(),u=i._nextUint64(),d=new Cr(o,Bt.length+n,3*s*8,!0);for(let G=0;G<s;G++)t.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new Cr(o,r,a,!0),g={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},p=(g.descriptorBlockSize/4-6)/4;for(let G=0;G<p;G++){const N={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&N.channelType?(N.sampleLower=f._nextInt32(),N.sampleUpper=f._nextInt32()):(N.sampleLower=f._nextUint32(),N.sampleUpper=f._nextUint32()),g.samples[G]=N}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const A=new Cr(o,l,c,!0);for(;A._offset<c;){const G=A._nextUint32(),N=A._scan(G),L=Kd(N),O=A._scan(G-N.byteLength);t.keyValue[L]=L.match(/^ktx/i)?Kd(O):O,A._offset%4&&A._skip(4-A._offset%4)}if(u<=0)return t;const m=new Cr(o,h,u,!0),v=m._nextUint16(),_=m._nextUint16(),x=m._nextUint32(),E=m._nextUint32(),C=m._nextUint32(),M=m._nextUint32(),y=[];for(let G=0;G<s;G++)y.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const w=h+m._offset,B=w+x,Q=B+E,$=Q+C,k=new Uint8Array(o.buffer,o.byteOffset+w,x),R=new Uint8Array(o.buffer,o.byteOffset+B,E),P=new Uint8Array(o.buffer,o.byteOffset+Q,C),q=new Uint8Array(o.buffer,o.byteOffset+$,M);return t.globalData={endpointCount:v,selectorCount:_,imageDescs:y,endpointsData:k,selectorsData:R,tablesData:P,extendedData:q},t}let kl,Yn,mh;const Gl={env:{emscripten_notify_memory_growth:function(o){mh=new Uint8Array(Yn.exports.memory.buffer)}}};class BC{init(){return kl||(kl=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Jd).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Gl)).then(this._init):WebAssembly.instantiate(Buffer.from(Jd,"base64"),Gl).then(this._init),kl)}_init(e){Yn=e.instance,Gl.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Yn)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=Yn.exports.malloc(n);mh.set(e,i),t=t||Number(Yn.exports.ZSTD_findDecompressedSize(i,n));const s=Yn.exports.malloc(t),r=Yn.exports.ZSTD_decompress(s,t,i,n),a=mh.slice(s,s+r);return Yn.exports.free(i),Yn.exports.free(s),a}}const Jd="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",zl=new WeakMap;let Vl=0,Hl;class Cn extends Ti{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new yC,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new Ii(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Ii(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([s,r])=>{const a=Cn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Cn.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(Cn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Cn.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),Vl>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Vl++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new Ii(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(e,r=>{if(zl.has(r))return zl.get(r).promise.then(t).catch(i);this._createTexture(r).then(a=>t?t(a):null).catch(i)},n,i)}_createTextureFrom(e){const{mipmaps:t,width:n,height:i,format:s,type:r,error:a,dfdTransferFn:l,dfdFlags:c}=e;if(r==="error")return Promise.reject(a);const h=new bE(t,n,i,s,kt);return h.minFilter=t.length===1?Ze:si,h.magFilter=Ze,h.generateMipmaps=!1,h.needsUpdate=!0,h.encoding=l===wC?Me:Ct,h.premultiplyAlpha=!!(c&CC),h}_createTexture(e,t={}){const n=MC(new Uint8Array(e));if(n.vkFormat!==SC)return RC(n);const i=t,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:i},[e])).then(r=>this._createTextureFrom(r.data));return zl.set(e,{promise:s}),s}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Vl--,this}}Cn.BasisFormat={ETC1S:0,UASTC_4x4:1};Cn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};Cn.EngineFormat={RGBAFormat:at,RGBA_ASTC_4x4_Format:nh,RGBA_BPTC_Format:ih,RGBA_ETC2_EAC_Format:th,RGBA_PVRTC_4BPPV1_Format:Zc,RGBA_S3TC_DXT5_Format:ga,RGB_ETC1_Format:bp,RGB_ETC2_Format:eh,RGB_PVRTC_4BPPV1_Format:jc,RGB_S3TC_DXT1_Format:pa};Cn.BasisWorker=function(){let o,e,t;const n=_EngineFormat,i=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(f){const g=f.data;switch(g.type){case"init":o=g.config,r(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:p,height:A,hasAlpha:m,mipmaps:v,format:_,dfdTransferFn:x,dfdFlags:E}=a(g.buffer),C=[];for(let M=0;M<v.length;++M)C.push(v[M].data.buffer);self.postMessage({type:"transcode",id:g.id,width:p,height:A,hasAlpha:m,mipmaps:v,format:_,dfdTransferFn:x,dfdFlags:E},C)}catch(p){console.error(p),self.postMessage({type:"error",id:g.id,error:p.message})}});break}});function r(f){e=new Promise(g=>{t={wasmBinary:f,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(f){const g=new t.KTX2File(new Uint8Array(f));function p(){g.close(),g.delete()}if(!g.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const A=g.isUASTC()?s.UASTC_4x4:s.ETC1S,m=g.getWidth(),v=g.getHeight(),_=g.getLevels(),x=g.getHasAlpha(),E=g.getDFDTransferFunc(),C=g.getDFDFlags(),{transcoderFormat:M,engineFormat:y}=u(A,m,v,x);if(!m||!v||!_)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const w=[];for(let B=0;B<_;B++){const Q=g.getImageLevelInfo(B,0,0),$=Q.origWidth,k=Q.origHeight,R=new Uint8Array(g.getImageTranscodedSizeInBytes(B,0,0,M));if(!g.transcodeImage(R,B,0,0,M,0,-1,-1))throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");w.push({data:R,width:$,height:k})}return p(),{width:m,height:v,hasAlpha:x,mipmaps:w,format:y,dfdTransferFn:E,dfdFlags:C}}const l=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(f,g){return f.priorityETC1S-g.priorityETC1S}),h=l.sort(function(f,g){return f.priorityUASTC-g.priorityUASTC});function u(f,g,p,A){let m,v;const _=f===s.ETC1S?c:h;for(let x=0;x<_.length;x++){const E=_[x];if(!!o[E.if]&&!!E.basisFormat.includes(f)&&!(A&&E.transcoderFormat.length<2)&&!(E.needsPowerOfTwo&&!(d(g)&&d(p))))return m=E.transcoderFormat[A?1:0],v=E.engineFormat[A?1:0],{transcoderFormat:m,engineFormat:v}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),m=i.RGBA32,v=n.RGBAFormat,{transcoderFormat:m,engineFormat:v}}function d(f){return f<=2?!0:(f&f-1)===0&&f!==0}};const jd={[wg]:at,[Eg]:at,[vg]:at,[eu]:at,[Cg]:Vr,[yg]:Vr,[_g]:Vr,[Zh]:Vr,[Ig]:zr,[xg]:zr,[jh]:zr,[mg]:zr},Wl={[wg]:Dt,[Eg]:Lt,[vg]:kt,[eu]:kt,[Cg]:Dt,[yg]:Lt,[_g]:kt,[Zh]:kt,[Ig]:Dt,[xg]:Lt,[jh]:kt,[mg]:kt},TC={[eu]:Me,[Zh]:Me,[jh]:Me};async function RC(o){const{vkFormat:e,pixelWidth:t,pixelHeight:n,pixelDepth:i}=o;if(jd[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const s=o.levels[0];let r,a;if(o.supercompressionScheme===EC)r=s.levelData;else if(o.supercompressionScheme===IC)Hl||(Hl=new Promise(async c=>{const h=new BC;await h.init(),c(h)})),r=(await Hl).decode(s.levelData,s.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");Wl[e]===Dt?a=new Float32Array(r.buffer,r.byteOffset,r.byteLength/Float32Array.BYTES_PER_ELEMENT):Wl[e]===Lt?a=new Uint16Array(r.buffer,r.byteOffset,r.byteLength/Uint16Array.BYTES_PER_ELEMENT):a=r;const l=i===0?new Vh(a,t,n):new Qp(a,t,n,i);return l.type=Wl[e],l.format=jd[e],l.encoding=TC[e]||Ct,l.needsUpdate=!0,Promise.resolve(l)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zd,ef;const hn=Symbol("retainerCount"),Gn=Symbol("recentlyUsed"),Yo=Symbol("evict"),wr=Symbol("evictionThreshold"),ql=Symbol("cache");class DC{constructor(e,t=5){this[Zd]=new Map,this[ef]=[],this[ql]=e,this[wr]=t}set evictionThreshold(e){this[wr]=e,this[Yo]()}get evictionThreshold(){return this[wr]}get cache(){return this[ql]}retainerCount(e){return this[hn].get(e)||0}reset(){this[hn].clear(),this[Gn]=[]}retain(e){this[hn].has(e)||this[hn].set(e,0),this[hn].set(e,this[hn].get(e)+1);const t=this[Gn].indexOf(e);t!==-1&&this[Gn].splice(t,1),this[Gn].unshift(e),this[Yo]()}release(e){this[hn].has(e)&&this[hn].set(e,Math.max(this[hn].get(e)-1,0)),this[Yo]()}[(Zd=hn,ef=Gn,Yo)](){if(!(this[Gn].length<this[wr]))for(let e=this[Gn].length-1;e>=this[wr];--e){const t=this[Gn][e];this[hn].get(t)===0&&(this[ql].delete(t),this[Gn].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=o=>{const e=[],t=new Set;for(const n of o){let i=n,s=0;for(;t.has(i);)i=n+"."+ ++s;t.add(i),e.push(i)}return e},FC=o=>{const e=new Map;for(const t of o.mappings)for(const n of t.variants)e.set(n,{material:null,gltfMaterialIndex:t.material});return e};class PC{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const s=n.extensions[this.name].variants||[],r=LC(s.map(a=>a.name));for(const a of e.scenes)a.traverse(l=>{const c=l;if(!c.isMesh)return;const h=t.associations.get(c);if(h==null||h.meshes==null||h.primitives==null)return;const g=n.meshes[h.meshes].primitives[h.primitives].extensions;!g||!g[this.name]||(c.userData.variantMaterials=FC(g[this.name]))});return e.userData.variants=r,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sg,tf;const QC=(o,e,t=()=>{})=>{const n=i=>{const s=i.loaded/i.total;t(Math.max(0,Math.min(1,isFinite(s)?s:1)))};return new Promise((i,s)=>{e.load(o,i,n,s)})},NC=o=>new Promise((e,t)=>{const n=document.createElement("script");document.body.appendChild(n),n.onload=e,n.onerror=t,n.async=!0,n.src=o}),zn=new Map,$l=new Map;let nf;const sf=new VI;let rf;const Yl=new Cn;let Xl,Kl;const Hi=Symbol("loader"),vi=Symbol("evictionPolicy"),of=Symbol("GLTFInstance");class ut extends sn{constructor(e){super(),this[tf]=new WI().register(t=>new PC(t)),this[of]=e,this[Hi].setDRACOLoader(sf),this[Hi].setKTX2Loader(Yl)}static setDRACODecoderLocation(e){nf=e,sf.setDecoderPath(e)}static getDRACODecoderLocation(){return nf}static setKTX2TranscoderLocation(e){rf=e,Yl.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return rf}static setMeshoptDecoderLocation(e){Xl!==e&&(Xl=e,Kl=NC(e).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Xl}static initializeKTX2Loader(e){Yl.detectSupport(e)}static get cache(){return zn}static clearCache(){zn.forEach((e,t)=>{this.delete(t)}),this[vi].reset()}static has(e){return zn.has(e)}static async delete(e){if(!this.has(e))return;const t=zn.get(e);$l.delete(e),zn.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!$l.get(e)}get[(Sg=vi,tf=Hi,vi)](){return this.constructor[vi]}async preload(e,t,n=()=>{}){if(this[Hi].setWithCredentials(ut.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!zn.has(e)){Kl!=null&&this[Hi].setMeshoptDecoder(await Kl);const i=QC(e,this[Hi],a=>{n(a*.8)}),s=this[of],r=i.then(a=>s.prepare(a)).then(a=>(n(.9),new s(a))).catch(a=>(console.error(a),new s));zn.set(e,r)}await zn.get(e),$l.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const s=await(await zn.get(e)).clone();return this[vi].retain(e),s.dispose=()=>{this[vi].release(e)},s}}ut[Sg]=new DC(ut);class UC extends Xe{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Ss=new T,af=new Re,lf=new Re,cf=new T,hf=new T;class OC{constructor(e={}){const t=this;let n,i,s,r;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),af.copy(g.matrixWorldInverse),lf.multiplyMatrices(g.projectionMatrix,af),c(f,f,g),d(f)},this.setSize=function(f,g){n=f,i=g,s=n/2,r=i/2,l.style.width=f+"px",l.style.height=g+"px"};function c(f,g,p){if(f.isCSS2DObject){Ss.setFromMatrixPosition(f.matrixWorld),Ss.applyMatrix4(lf);const A=f.visible===!0&&Ss.z>=-1&&Ss.z<=1&&f.layers.test(p.layers)===!0;if(f.element.style.display=A===!0?"":"none",A===!0){f.onBeforeRender(t,g,p);const v=f.element;v.style.transform="translate(-50%,-50%) translate("+(Ss.x*s+s)+"px,"+(-Ss.y*r+r)+"px)",v.parentNode!==l&&l.appendChild(v),f.onAfterRender(t,g,p)}const m={distanceToCameraSquared:h(p,f)};a.objects.set(f,m)}for(let A=0,m=f.children.length;A<m;A++)c(f.children[A],g,p)}function h(f,g){return cf.setFromMatrixPosition(f.matrixWorld),hf.setFromMatrixPosition(g.matrixWorld),cf.distanceToSquared(hf)}function u(f){const g=[];return f.traverse(function(p){p.isCSS2DObject&&g.push(p)}),g}function d(f){const g=u(f).sort(function(A,m){if(A.renderOrder!==m.renderOrder)return m.renderOrder-A.renderOrder;const v=a.objects.get(A).distanceToCameraSquared,_=a.objects.get(m).distanceToCameraSquared;return v-_}),p=g.length;for(let A=0,m=g.length;A<m;A++)g[A].element.style.zIndex=p-A}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=(o,e)=>({type:"number",number:o,unit:e}),is=(()=>{const o={};return t=>{const n=t;if(n in o)return o[n];const i=[];let s=0;for(;t;){if(++s>1e3){t="";break}const r=bg(t),a=r.nodes[0];if(a==null||a.terms.length===0)break;i.push(a),t=r.remainingInput}return o[n]=i}})(),bg=(()=>{const o=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/,n="(",i="#";return s=>{const r=[];for(;s.length&&(s=s.trim(),!t.test(s));)if(s[0]===n){const{nodes:a,remainingInput:l}=uf(s);s=l,r.push({type:"function",name:{type:"ident",value:"calc"},arguments:a})}else if(o.test(s)){const a=kC(s),l=a.nodes[0];if(s=a.remainingInput,s[0]===n){const{nodes:c,remainingInput:h}=uf(s);r.push({type:"function",name:l,arguments:c}),s=h}else r.push(l)}else if(e.test(s))r.push({type:"operator",value:s[0]}),s=s.slice(1);else{const{nodes:a,remainingInput:l}=s[0]===i?zC(s):GC(s);if(a.length===0)break;r.push(a[0]),s=l}return{nodes:[{type:"expression",terms:r}],remainingInput:s}}})(),kC=(()=>{const o=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(o),n=t==null?e:e.substr(0,t.index),i=t==null?"":e.substr(t.index);return{nodes:[{type:"ident",value:n}],remainingInput:i}}})(),GC=(()=>{const o=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(o),s=i==null?"0":i[0];n=s==null?n:n.slice(s.length);const r=n.match(e);let a=r!=null&&r[0]!==""?r[0]:null;const l=r==null?n:n.slice(a.length);return a!=null&&!t.test(a)&&(a=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:a}],remainingInput:l}}})(),zC=(()=>{const o=/^[a-f0-9]*/i;return e=>{e=e.slice(1).trim();const t=e.match(o);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),uf=o=>{const e=[];for(o=o.slice(1).trim();o.length;){const t=bg(o);if(e.push(t.nodes[0]),o=t.remainingInput.trim(),o[0]===",")o=o.slice(1).trim();else if(o[0]===")"){o=o.slice(1);break}}return{nodes:e,remainingInput:o}},df=Symbol("visitedTypes");class VC{constructor(e){this[df]=e}walk(e,t){const n=e.slice();for(;n.length;){const i=n.shift();switch(this[df].indexOf(i.type)>-1&&t(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments);break}}}}const Si=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=(o,e=0)=>{let{number:t,unit:n}=o;if(!isFinite(t))t=e,n="rad";else if(o.unit==="rad"||o.unit==null)return o;const r=(n==="deg"&&t!=null?t:0)*Math.PI/180;return{type:"number",number:r,unit:"rad"}},ff=(o,e=0)=>{let{number:t,unit:n}=o;if(!isFinite(t))t=e,n="m";else if(o.unit==="m")return o;let i;switch(n){default:i=1;break;case"cm":i=1/100;break;case"mm":i=1/1e3;break}const s=i*t;return{type:"number",number:s,unit:"m"}},Bn=(()=>{const o=t=>t,e={rad:o,deg:Ya,m:o,mm:ff,cm:ff};return(t,n=Si)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(i==null)return t;const s=e[i];return s==null?n:s(t)}})();/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=1e4,HC=.001,Bg=50;class $t{constructor(e=Bg){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(HC,e)}update(e,t,n,i){const s=2e-4*this.naturalFrequency;if(e==null||i===0||e===t&&this.velocity===0)return t;if(n<0)return e;const r=e-t,a=this.velocity+this.naturalFrequency*r,l=r+n*a,c=Math.exp(-this.naturalFrequency*n),h=(a-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+a*c);return Math.abs(h)<s*Math.abs(i)&&u*r>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends UC{constructor(e){super(document.createElement("div")),this.normal=new T(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=is(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,Bn(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=is(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,Bn(t[n]).number)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){e?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,i=n.dataset.visibilityAttribute;if(i!=null){const s=`data-${i}`;e?n.setAttribute(s,""):n.removeAttribute(s)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=(o,e,t)=>{let n=t;const i=new T;return o.traverseVisible(s=>{let r,a;s.updateWorldMatrix(!1,!1);const l=s.geometry;if(l!==void 0){if(l.isGeometry){const c=l.vertices;for(r=0,a=c.length;r<a;r++)i.copy(c[r]),s.isSkinnedMesh?s.boneTransform(r,i):i.applyMatrix4(s.matrixWorld),n=e(n,i)}else if(l.isBufferGeometry){const{position:c}=l.attributes;if(c!==void 0)for(r=0,a=c.count;r<a;r++)i.fromBufferAttribute(c,r),s.isSkinnedMesh?s.boneTransform(r,i):i.applyMatrix4(s.matrixWorld),n=e(n,i)}}}),n},WC={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},qC={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function Af(o,e,t){return(1-t)*o+t*e}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=9,$C=6,Jl=2,YC=.3;class XC extends Xe{constructor(e,t,n){super(),this.camera=new hr,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new qp,this.horizontalBlurMaterial=new pn(WC),this.verticalBlurMaterial=new pn(qC),this.intensity=0,this.softness=1,this.boundingBox=new tn,this.size=new T,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const s=new as,r=new un({opacity:1,transparent:!0,side:It});this.floor=new me(s,r),this.floor.userData.shadow=!0,i.add(this.floor),this.blurPlane=new me(s),this.blurPlane.visible=!1,i.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(a){a.fragmentShader=a.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){const{boundingBox:i,size:s,rotation:r,position:a}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(s.x,s.y,s.z)*(this.isAnimated?Jl:1),this.boundingBox.getCenter(a),n==="back"){const{min:l,max:c}=i;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[s.y,s.z]=[s.z,s.y],r.x=Math.PI/2,r.y=Math.PI}else r.x=0,r.y=0;if(this.isAnimated){const l=i.min.y,c=i.max.y;s.y=this.maxDimension,i.expandByVector(s.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=l,i.max.y=c,s.set(this.maxDimension,c-l,this.maxDimension)}n==="bottom"?a.y=i.min.y:a.z=i.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:n}=this,i=this.isAnimated?Jl:1,s=i*Math.pow(2,pf-e*(pf-$C));this.setMapSize(s);const r=t.y/2,a=t.y*i;n.near=0,n.far=Af(a,r,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=Jl);const n=Math.floor(t.x>t.z?e:e*t.x/t.z),i=Math.floor(t.x>t.z?e*t.z/t.x:e),s=10,r=s+n,a=s+i;if(this.renderTarget!=null&&(this.renderTarget.width!==r||this.renderTarget.height!==a)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const l={format:at};this.renderTarget=new An(r,a,l),this.renderTargetBlur=new An(r,a,l),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+s/n),t.z*(1+s/i),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*Af(YC,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+.001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const n=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const i=e.xr.enabled;e.xr.enabled=!1;const s=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=i,e.setRenderTarget(s),e.setClearAlpha(n)}blurShadow(e){const{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:s,renderTargetBlur:r,blurPlane:a}=this;a.visible=!0,a.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(r),e.render(a,t),a.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(s),e.render(a,t),a.visible=!1}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=100,Zl=new T,gf=new T,mf=new T,KC=new rI,JC=new T,Sr=new Se;class jC extends Ci{constructor({canvas:e,element:t,width:n,height:i}){super(),this.context=null,this.annotationRenderer=new OC,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new _t(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Xe,this.animationNames=[],this.boundingBox=new tn,this.boundingSphere=new Mi,this.size=new T,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.canScale=!0,this.isDirty=!1,this.goalTarget=new T,this.targetDamperX=new $t,this.targetDamperY=new $t,this.targetDamperZ=new $t,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new _t(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,i),this.target.name="Target",this.mixer=new sI(this.target);const{domElement:s}=this.annotationRenderer,{style:r}=s;r.display="none",r.pointerEvents="none",r.position="absolute",r.top="0",this.element.shadowRoot.querySelector(".default").appendChild(s),this.schemaElement.setAttribute("type","application/ld+json")}createContext(){this.context=this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._model=e,this.target.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url){t(1);return}if(this.reset(),this.url=e,this.externalRenderer!=null){const a=await this.externalRenderer.load(t);this.boundingSphere.radius=a.framedRadius,this.idealAspect=a.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let n;try{n=await new Promise(async(a,l)=>{this.cancelPendingSourceChange=()=>l();try{const c=await this.element[$e].loader.load(e,this.element,t);a(c)}catch(c){l(c)}})}catch(a){if(a==null)return;throw a}this.reset(),this.url=e,this._currentGLTF=n,n!=null&&(this._model=n.scene,this.target.add(n.scene));const{animations:i}=n,s=new Map,r=[];for(const a of i)s.set(a.name,a),r.push(a.name);this.animations=i,this.animationsByName=s,this.animationNames=r,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity)}reset(){this.url=null,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:e}=this;e!=null&&(e.removeFromParent(),this._model=null);const t=this._currentGLTF;t!=null&&(t.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(!(this.width===e&&this.height===t)){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=fh();this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}markBakedShadow(e){e.userData.shadow=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.shadow=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){const t=new tn;e.traverse(n=>{const i=n;if(!i.isMesh||!i.material.transparent)return;t.setFromObject(i);const r=t.getSize(JC),a=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<jl*a||this.markBakedShadow(i)})}checkBakedShadows(){const{min:e,max:t}=this.boundingBox,n=new tn;this.boundingBox.getSize(this.size);for(const i of this.bakedShadows)n.setFromObject(i),!(n.min.y<e.y+this.size.y/jl&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.z<=e.z&&n.max.z>=t.z)&&(n.min.z<e.z+this.size.z/jl&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.y<=e.y&&n.max.y>=t.y||this.unmarkBakedShadow(i))}applyTransform(){const{model:e}=this;if(e==null)return;const t=is(this.element.orientation)[0].terms,n=Bn(t[0]).number,i=Bn(t[1]).number,s=Bn(t[2]).number;e.quaternion.setFromEuler(new os(i,s,n,"YXZ"));const r=is(this.element.scale)[0].terms;e.scale.set(r[0].number,r[1].number,r[2].number)}updateBoundingBox(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.findBakedShadows(e);const t=(n,i)=>n.expandByPoint(i);this.setBakedShadowVisibility(!1),this.boundingBox=Xo(e,t,new tn),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(n=>this.unmarkBakedShadow(n)),this.boundingBox=Xo(e,t,new tn)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(e)}async updateFraming(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,t.copy(this.getTarget());const n=(s,r)=>Math.max(s,t.distanceToSquared(r));this.boundingSphere.radius=Math.sqrt(Xo(e,n,0));const i=(s,r)=>{r.sub(t);const a=Math.sqrt(r.x*r.x+r.z*r.z);return Math.max(s,a/(this.idealCameraDistance()-Math.abs(r.y)))};this.idealAspect=Xo(e,i,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(e)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)Sr.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();Sr.set((e-n.x)/this.width,(t-n.y)/this.height)}return Sr.multiplyScalar(2).subScalar(1),Sr.y*=-1,Sr}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[$e].arRenderer.presentedScene!==this&&(this.environment=e,this.background=t,this.queueRender())}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(Mg)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(t.equals(n))return!1;{const i=this.boundingSphere.radius/10;let{x:s,y:r,z:a}=n;return s=this.targetDamperX.update(s,t.x,e,i),r=this.targetDamperY.update(r,t.y,e,i),a=this.targetDamperZ.update(a,t.z,e,i),this.target.position.set(s,r,a),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){const{x:n,z:i}=this.position;this.yaw=Math.atan2(e-n,t-i)}get model(){return this._model}set yaw(e){this.rotation.y=e,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===Lh&&(e&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,n=Dh,i=1/0){if(this._currentGLTF==null)return;const{animations:s}=this;if(s==null||s.length===0){console.warn("Cannot play animation (model does not have any animations)");return}let r=null;if(e!=null&&(r=this.animationsByName.get(e),r==null)){const a=parseInt(e);!isNaN(a)&&a>=0&&a<s.length&&(r=s[a])}r==null&&(r=s[0]);try{const{currentAnimationAction:a}=this,l=this.mixer.clipAction(r,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,a!=null&&l!==a?l.crossFadeFrom(a,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,i),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(a){console.error(a)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==!0&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new XC(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}get raycaster(){return KC}positionAndNormalFromPoint(e,t=this){this.raycaster.setFromCamera(e,this.getCamera());const i=this.raycaster.intersectObject(t,!0).find(s=>s.object.visible&&!s.object.userData.shadow);return i==null||i.face==null?null:i.uv==null?{position:i.point,normal:i.face.normal,uv:null}:(i.face.normal.applyNormalMatrix(new Ft().getNormalMatrix(i.object.matrixWorld)),{position:i.point,normal:i.face.normal,uv:i.uv})}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,i=t.length;n<i;n++){const s=t[n];s instanceof Tg&&e(s)}}updateHotspots(e){this.forHotspots(t=>{Zl.copy(e),gf.setFromMatrixPosition(t.matrixWorld),Zl.sub(gf),mf.copy(t.normal).transformDirection(this.target.matrixWorld),Zl.dot(mf)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:i}=this,{alt:s,poster:r,iosSrc:a}=i;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];a&&l.push({"@type":"MediaObject",contentUrl:a,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:r!=null?r:void 0,name:s!=null?s:void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}class ZC{constructor(e,t,n,i,s){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const r=t.xr.getSession();if(i&&"XRWebGLBinding"in window){const a=new Oh(16);e.environment=a.texture;const l=t.getContext();switch(r.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(r,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}r.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const i=t.getLightEstimate(this.lightProbe);if(i){this.xrLight.lightProbe.sh.fromArray(i.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(i.primaryLightIntensity.x,Math.max(i.primaryLightIntensity.y,i.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(i.primaryLightIntensity.x/s,i.primaryLightIntensity.y/s,i.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(i.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class ew extends Ei{constructor(e,t=!0){super(),this.lightProbe=new HE,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new tg,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(r=>{n=new ZC(this,e,r,t,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=.2,_f=.03,tw=.75,Rg=12,nw=Math.PI/(2*Rg),vf=new Se,Ko=(o,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let i=0;i<=Rg;++i)o.push(e+(Ws-_f)*Math.cos(n),t+(Ws-_f)*Math.sin(n),0,e+Ws*Math.cos(n),t+Ws*Math.sin(n),0),n+=nw};class xf extends me{constructor(e,t){const n=new rn,i=[],s=[],{size:r,boundingBox:a}=e,l=r.x/2,c=(t==="back"?r.y:r.z)/2;Ko(s,l,c),Ko(s,-l,c),Ko(s,-l,-c),Ko(s,l,-c);const h=s.length/3;for(let f=0;f<h-2;f+=2)i.push(f,f+1,f+3,f,f+3,f+2);const u=h-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new Mn(s,3)),n.setIndex(i),super(n),this.side=t;const d=this.material;switch(d.side=Gt,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new $t,this.hitPlane=new me(new as(2*(l+Ws),2*(c+Ws))),this.hitPlane.visible=!1,this.hitPlane.material.side=Gt,this.add(this.hitPlane),a.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=a.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=a.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.offsetHeight=0}getHit(e,t,n){vf.set(t,-n),this.hitPlane.visible=!0;const i=e.positionAndNormalFromPoint(vf,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const i=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?tw:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:n}=this.hitPlane;t.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=30,sw=.8,yf=1.5,rw=20,Dg=1.3,ow=1/Dg,aw=.25,lw=10,yi={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},_h={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Jo=new T,cw=new Re,hw=new T,uw=new _t(45,1,.1,100);class dw extends sn{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new T,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new T,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new T,this.goalYaw=0,this.goalScale=1,this.xDamper=new $t,this.yDamper=new $t,this.zDamper=new $t,this.yawDamper=new $t,this.scaleDamper=new $t,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new xf(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),s=this.presentedScene,r=this.placementBox;if(i.length===1){this.inputSource=t.inputSource;const{axes:a}=this.inputSource.gamepad,l=r.getHit(this.presentedScene,a[0],a[1]);r.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=a[0]*yf)}else if(i.length===2){r.show=!0,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(i);this.firstRatio=a/s.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Gd();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Gd(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new ew(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const s=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");s.classList.add("enabled"),s.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=s;const r=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.background=null,this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener("load",this.onUpdateScene);const a=rw*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(a),z:-Math.cos(a)});i.requestHitTestSource({space:r,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.currentSession=i,this.placementBox=new xf(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:yi.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(this._presentedScene=null,t!=null){const{element:r}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowOffset(0);const a=this.turntableRotation;a!=null&&(t.yaw=a);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l),t.setEnvironmentAndSkybox(r[Wr],r[qr]);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.element.removeEventListener("load",this.onUpdateScene),t.orientHotspots(0),r.requestUpdate("cameraTarget"),r.requestUpdate("maxCameraOrbit"),r[po](r.getBoundingClientRect())}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const s=this.initialHitSource;s!=null&&(s.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:yi.NOT_PRESENTING})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(uw),t.xrCamera=n.getCamera();const{elements:i}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const a=e.recommendedViewportScale;e.requestViewportScale(Math.max(a,aw))}const r=this.currentSession.renderState.baseLayer.getViewport(e);this.threeRenderer.setViewport(r.x,r.y,r.width,r.height)}placeInitially(){const e=this.presentedScene,{position:t,element:n}=e,i=e.getCamera(),{width:s,height:r}=this.overlay.getBoundingClientRect();e.setSize(s,r),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:a,radius:l}=n.getCameraOrbit(),c=i.getWorldDirection(Jo);e.yaw=Math.atan2(-c.x,-c.z)-a,this.goalYaw=e.yaw,t.copy(i.position).add(c.multiplyScalar(l)),this.updateTarget();const h=e.getTarget();t.add(h).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Jo.copy(t).sub(this.presentedScene.getCamera().position),Jo.length()>lw)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const i=cw.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?hw.setFromMatrixPosition(i):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const i=n[0],s=this.getHitPoint(i);s!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(s):this.goalPosition.y=s.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:yi.OBJECT_PLACED}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,i=n[0]-t[0],s=n[1]-t[1],r=Math.atan2(s,i);let a=this.lastAngle-r;return a>Math.PI?a-=2*Math.PI:a<-Math.PI&&(a+=2*Math.PI),this.lastAngle=r,{separation:Math.sqrt(i*i+s*s),deltaYaw:a}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),i=this.presentedScene,s=i.scale.x;if(this.isTwoFingering){if(n.length<2)this.isTwoFingering=!1;else{const{separation:r,deltaYaw:a}=this.fingerPolar(n);if(this.placeOnWall===!1&&(this.goalYaw+=a),i.canScale){const l=r/this.firstRatio;this.goalScale=l<Dg&&l>ow?1:l}}return}else if(n.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:r}=this.fingerPolar(n);this.firstRatio=r/s;return}if(this.isRotating){const r=this.inputSource.gamepad.axes[0]*yf;this.goalYaw+=r-this.lastAngle,this.lastAngle=r}else this.isTranslating&&n.forEach(r=>{if(r.inputSource!==this.inputSource)return;let a=null;if(r.results.length>0&&(a=this.getHitPoint(r.results[0])),a==null&&(a=this.getTouchLocation()),a!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=a.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/s,this.presentedScene.setShadowOffset(l);const c=Jo.copy(i.getCamera().position),h=-l/(c.y-a.y);c.multiplyScalar(h),a.multiplyScalar(1-h).add(c)}}this.goalPosition.add(a),this.lastDragPosition.copy(a)}})}moveScene(e){const t=this.presentedScene,{position:n,yaw:i}=t,s=t.boundingSphere.radius,r=this.goalPosition,a=t.scale.x,l=this.placementBox;if(!r.equals(n)||this.goalScale!==a){let{x:c,y:h,z:u}=n;c=this.xDamper.update(c,r.x,e,s),h=this.yDamper.update(h,r.y,e,s),u=this.zDamper.update(u,r.z,e,s),n.set(c,h,u);const d=this.scaleDamper.update(a,this.goalScale,e,1);if(t.scale.set(d,d,d),!this.isTranslating){const f=r.y-h;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=f/d,t.setShadowOffset(f)):f===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(sw))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(i,this.goalYaw,e,Math.PI)}onWebXRFrame(e,t){this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=t.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>iw&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:_h.NOT_TRACKING}));const s=this.presentedScene;if(i==null||s==null||!s.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:_h.TRACKING}));let r=!0;for(const a of i.views){if(this.updateView(a),r){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(s,e,l),this.lastTick=e,s.renderShadow(this.threeRenderer)}this.threeRenderer.render(s,s.getCamera()),r=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){e.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:e,THREE:{ShaderMaterial:pn,Texture:At,Mesh:me,Scene:Ci,PlaneGeometry:as,OrthographicCamera:hr,WebGLRenderTarget:An}}}))})}addScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:e}}))}removeScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:e}}))}}function Aw(o){const e=new Map,t=new Map,n=o.clone();return Lg(o,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),a=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Lg(o,e,t){t(o,e);for(let n=0;n<o.children.length;n++)Lg(o.children[n],e.children[n],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=Symbol("prepared"),Na=Symbol("prepare"),vn=Symbol("preparedGLTF"),Ua=Symbol("clone");class pw{constructor(e){this[vn]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[Ef])return e;const t=this[Na](e);return t[Ef]=!0,t}static[Na](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[vn].parser}get animations(){return this[vn].animations}get scene(){return this[vn].scene}get scenes(){return this[vn].scenes}get cameras(){return this[vn].cameras}get asset(){return this[vn].asset}get userData(){return this[vn].userData}clone(){const e=this.constructor,t=this[Ua]();return new e(t)}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{if(!t.isMesh)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>{for(const r in s){const a=s[r];if(a instanceof At){const l=a.source.data;l.close!=null&&l.close(),a.dispose()}}s.dispose()}),n.geometry.dispose()})})}[Ua](){const e=this[vn],t=Aw(this.scene);gw(t,this.scene);const n=[t],i=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:i})}}const gw=(o,e)=>{Fg(o,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(t.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},Fg=(o,e,t)=>{t(o,e);for(let n=0;n<o.children.length;n++)Fg(o.children[n],e.children[n],t)},If=Symbol("threeGLTF"),Cf=Symbol("gltf"),wf=Symbol("gltfElementMap"),Sf=Symbol("threeObjectMap"),bf=Symbol("parallelTraverseThreeScene"),Mf=Symbol("correlateOriginalThreeGLTF"),Bf=Symbol("correlateCloneThreeGLTF");class Ao{constructor(e,t,n,i){this[If]=e,this[Cf]=t,this[wf]=i,this[Sf]=n}static from(e,t){return t!=null?this[Bf](e,t):this[Mf](e)}static[Mf](e){const t=e.parser.json,n=e.parser.associations,i=new Map,s={name:"Default"},r={type:"materials",index:-1};for(const a of n.keys())a instanceof fn&&n.get(a)==null&&(r.index<0&&(t.materials==null&&(t.materials=[]),r.index=t.materials.length,t.materials.push(s)),a.name=s.name,n.set(a,{materials:r.index}));for(const[a,l]of n){if(l){const c=a;c.userData=c.userData||{},c.userData.associations=l}for(const c in l)if(c!=null&&c!=="primitives"){const h=c,d=(t[h]||[])[l[h]];if(d==null)continue;let f=i.get(d);f==null&&(f=new Set,i.set(d,f)),f.add(a)}}return new Ao(e,t,n,i)}static[Bf](e,t){const n=t.threeGLTF,i=t.gltf,s=JSON.parse(JSON.stringify(i)),r=new Map,a=new Map;for(let l=0;l<n.scenes.length;l++)this[bf](n.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const f=d,g=u[f],p=s[f][g],A=r.get(h)||{};A[f]=g,r.set(h,A);const m=a.get(p)||new Set;m.add(h),a.set(p,m)}}});return new Ao(e,s,r,a)}static[bf](e,t,n){const i=r=>r.isMesh,s=(r,a)=>{if(n(r,a),r.isObject3D){if(i(r))if(Array.isArray(r.material))for(let l=0;l<r.material.length;++l)s(r.material[l],a.material[l]);else s(r.material,a.material);for(let l=0;l<r.children.length;++l)s(r.children[l],a.children[l])}};s(e,t)}get threeGLTF(){return this[If]}get gltf(){return this[Cf]}get gltfElementMap(){return this[wf]}get threeObjectMap(){return this[Sf]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=Symbol("correlatedSceneGraph");class mw extends pw{static[Na](e){const t=super[Na](e);t[br]==null&&(t[br]=Ao.from(t));const{scene:n}=t,i=new Mi(void 0,1/0);return n.traverse(s=>{s.renderOrder=1e3,s.frustumCulled=!1,s.name||(s.name=s.uuid);const r=s;if(r.isMesh){const{geometry:a}=r;r.castShadow=!0,r.isSkinnedMesh&&(a.boundingSphere=i,a.boundingBox=null);const l=r.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=ni,l.aoMap){const{gltf:c,threeObjectMap:h}=t[br],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&a.attributes.uv!=null&&a.setAttribute("uv2",a.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[vn][br]}[Ua](){const e=super[Ua](),t=new Map;return e.scene.traverse(n=>{if(n.isMesh){const i=n,s=i.material;if(s!=null){if(t.has(s.uuid)){i.material=t.get(s.uuid);return}i.material=s.clone(),t.set(s.uuid,i.material)}}}),e[br]=Ao.from(e,this.correlatedSceneGraph),e}}class _w extends UE{constructor(e){super(e),this.type=Lt}parse(e){const a=function(_,x){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(x||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(x||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(x||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(x||""))}return-1},u=`
`,d=function(_,x,E){x=x||1024;let M=_.pos,y=-1,w=0,B="",Q=String.fromCharCode.apply(null,new Uint16Array(_.subarray(M,M+128)));for(;0>(y=Q.indexOf(u))&&w<x&&M<_.byteLength;)B+=Q,w+=Q.length,M+=128,Q+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(M,M+128)));return-1<y?(E!==!1&&(_.pos+=w+y+1),B+Q.slice(0,y)):!1},f=function(_){const x=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*FORMAT=(\S+)\s*$/,y=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,w={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,Q;if(_.pos>=_.byteLength||!(B=d(_)))return a(1,"no header found");if(!(Q=B.match(x)))return a(3,"bad initial token");for(w.valid|=1,w.programtype=Q[1],w.string+=B+`
`;B=d(_),B!==!1;){if(w.string+=B+`
`,B.charAt(0)==="#"){w.comments+=B+`
`;continue}if((Q=B.match(E))&&(w.gamma=parseFloat(Q[1])),(Q=B.match(C))&&(w.exposure=parseFloat(Q[1])),(Q=B.match(M))&&(w.valid|=2,w.format=Q[1]),(Q=B.match(y))&&(w.valid|=4,w.height=parseInt(Q[1],10),w.width=parseInt(Q[2],10)),w.valid&2&&w.valid&4)break}return w.valid&2?w.valid&4?w:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,x,E){const C=x;if(C<8||C>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(C!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const M=new Uint8Array(4*x*E);if(!M.length)return a(4,"unable to allocate buffer space");let y=0,w=0;const B=4*C,Q=new Uint8Array(4),$=new Uint8Array(B);let k=E;for(;k>0&&w<_.byteLength;){if(w+4>_.byteLength)return a(1);if(Q[0]=_[w++],Q[1]=_[w++],Q[2]=_[w++],Q[3]=_[w++],Q[0]!=2||Q[1]!=2||(Q[2]<<8|Q[3])!=C)return a(3,"bad rgbe scanline format");let R=0,P;for(;R<B&&w<_.byteLength;){P=_[w++];const G=P>128;if(G&&(P-=128),P===0||R+P>B)return a(3,"bad scanline data");if(G){const N=_[w++];for(let L=0;L<P;L++)$[R++]=N}else $.set(_.subarray(w,w+P),R),R+=P,w+=P}const q=C;for(let G=0;G<q;G++){let N=0;M[y]=$[G+N],N+=C,M[y+1]=$[G+N],N+=C,M[y+2]=$[G+N],N+=C,M[y+3]=$[G+N],y+=4}k--}return M},p=function(_,x,E,C){const M=_[x+3],y=Math.pow(2,M-128)/255;E[C+0]=_[x+0]*y,E[C+1]=_[x+1]*y,E[C+2]=_[x+2]*y,E[C+3]=1},A=function(_,x,E,C){const M=_[x+3],y=Math.pow(2,M-128)/255;E[C+0]=qo.toHalfFloat(Math.min(_[x+0]*y,65504)),E[C+1]=qo.toHalfFloat(Math.min(_[x+1]*y,65504)),E[C+2]=qo.toHalfFloat(Math.min(_[x+2]*y,65504)),E[C+3]=qo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const v=f(m);if(v!==-1){const _=v.width,x=v.height,E=g(m.subarray(m.pos),_,x);if(E!==-1){let C,M,y;switch(this.type){case Dt:y=E.length/4;const w=new Float32Array(y*4);for(let Q=0;Q<y;Q++)p(E,Q*4,w,Q*4);C=w,M=Dt;break;case Lt:y=E.length/4;const B=new Uint16Array(y*4);for(let Q=0;Q<y;Q++)A(E,Q*4,B,Q*4);C=B,M=Lt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:x,data:C,header:v.string,gamma:v.gamma,exposure:v.exposure,type:M}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case Dt:case Lt:r.encoding=Ct,r.minFilter=Ze,r.magFilter=Ze,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Ci{constructor(){super(),this.position.y=-3.5;const e=new Bi;e.deleteAttribute("uv");const t=new wi({metalness:0,side:It}),n=new wi({metalness:0}),i=new Yh(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new me(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new me(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new me(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new me(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new me(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new me(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new me(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new me(e,this.createAreaLightMaterial(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new me(e,this.createAreaLightMaterial(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new me(e,this.createAreaLightMaterial(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const p=new me(e,this.createAreaLightMaterial(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const A=new me(e,this.createAreaLightMaterial(20));A.position.set(3.235,11.486,-12.541),A.scale.set(2.5,2,.1),this.add(A);const m=new me(e,this.createAreaLightMaterial(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}createAreaLightMaterial(e){const t=new un;return t.color.setScalar(e),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw extends Ci{constructor(){super(),this.position.y=-3.5;const e=new Bi;e.deleteAttribute("uv");const t=new wi({metalness:0,side:It}),n=new wi({metalness:0}),i=new Yh(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const s=new me(e,t);s.position.set(0,13.2,0),s.scale.set(31.5,28.5,31.5),this.add(s);const r=new me(e,n);r.position.set(-10.906,-1,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new me(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new me(e,n);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new me(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new me(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new me(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new me(e,this.createAreaLightMaterial(80));d.position.set(-14,10,8),d.scale.set(.1,2.5,2.5),this.add(d);const f=new me(e,this.createAreaLightMaterial(80));f.position.set(-14,14,-4),f.scale.set(.1,2.5,2.5),this.add(f);const g=new me(e,this.createAreaLightMaterial(23));g.position.set(14,12,0),g.scale.set(.1,5,5),this.add(g);const p=new me(e,this.createAreaLightMaterial(16));p.position.set(0,9,14),p.scale.set(5,5,.1),this.add(p);const A=new me(e,this.createAreaLightMaterial(80));A.position.set(7,8,-14),A.scale.set(2.5,2.5,.1),this.add(A);const m=new me(e,this.createAreaLightMaterial(80));m.position.set(-7,16,-14),m.scale.set(2.5,2.5,.1),this.add(m);const v=new me(e,this.createAreaLightMaterial(1));v.position.set(0,20,0),v.scale.set(.1,.1,.1),this.add(v)}createAreaLightMaterial(e){const t=new un;return t.color.setScalar(e),t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=.04,bs=20,Ew=/\.hdr(\.js)?$/,Iw=new qh,Pg=new _w;Pg.setDataType(Lt);class Tf extends sn{constructor(e){super(),this.threeRenderer=e,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(e,t=()=>{}){try{const n=Ew.test(e),i=n?Pg:Iw,s=await new Promise((r,a)=>i.load(e,r,l=>{t(l.loaded/l.total*.9)},a));return t(1),s.name=e,s.mapping=Ba,n||(s.encoding=Me),s}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n=()=>{}){const i=t!=="legacy";(t==="legacy"||t==="neutral")&&(t=null),t=dg(t);let s=Promise.resolve(null),r;e&&(s=this.loadEquirectFromUrl(e,n)),t?r=this.loadEquirectFromUrl(t,n):e?r=this.loadEquirectFromUrl(e,n):r=i?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[a,l]=await Promise.all([r,s]);if(a==null)throw new Error("Failed to load environment map.");return{environmentMap:a,skybox:l}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const n=this.load(e,t);this.skyboxCache.set(e,n)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await RI();const n=this.threeRenderer,i=new Oh(256,{generateMipmaps:!1,type:Lt,format:at,encoding:Ct,depthBuffer:!0}),s=new ah(.1,100,i),r=s.renderTarget.texture;r.name=t;const a=n.outputEncoding,l=n.toneMapping;return n.toneMapping=Sn,n.outputEncoding=Ct,s.update(n,e),this.blurCubemap(i,yw),n.toneMapping=l,n.outputEncoding=a,r}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new vw,"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new xw,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(bs);const i=new Bi,s=new me(i,this.blurMaterial);this.blurScene=new Ci,this.blurScene.add(s)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}halfblur(e,t,n,i){const r=e.width,a=isFinite(n)?Math.PI/(2*r):2*Math.PI/(2*bs-1),l=n/a,c=isFinite(n)?1+Math.floor(3*l):bs;c>bs&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${bs}`);const h=[];let u=0;for(let g=0;g<bs;++g){const p=g/l,A=Math.exp(-p*p/2);h.push(A),g==0?u+=A:g<c&&(u+=2*A)}for(let g=0;g<h.length;g++)h[g]=h[g]/u;const d=this.blurMaterial.uniforms;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=h,d.latitudinal.value=i==="latitudinal",d.dTheta.value=a,new ah(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new T(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:ei,depthTest:!1,depthWrite:!1,side:It})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=.2,ec=40,tc=60,Rf=5,Ms=[1,.79,.62,.5,.4,.31,.25],ww=3,Qg="high-performance";class ti extends sn{constructor(e){super(),this.loader=new ut(mw),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=ww,this.avgFrameDuration=(tc+ec)/2,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new Tf(this.threeRenderer);for(const n of this.scenes)n.element[Qa]()},this.dpr=fh(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new $p({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=Me,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.debugger=e.debug?new fw(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=Cp}catch(t){console.warn(t)}this.arRenderer=new dw(this),this.textureUtils=this.canRender?new Tf(this.threeRenderer):null,ut.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new ti({powerPreference:(self.ModelViewerElement||{}).powerPreference||Qg,debug:fg()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Ms[this.scaleStep]}set minScale(e){let t=1;for(;t<Ms.length&&!(Ms[t]<e);)++t;this.lastStep=t-1}registerScene(e){this.scenes.add(e),e.forceRescale();const t=new Se;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((n,i)=>this.render(n,i)),this.debugger!=null&&this.debugger.addScene(e)}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(e)}displayCanvas(e){return this.multipleScenesVisible?e.element[yh]:this.canvas3D}countVisibleScenes(){const{canvas3D:e}=this;let t=0,n=null;for(const s of this.scenes){const{element:r}=s;r.modelIsVisible&&s.externalRenderer==null&&++t,e.parentElement===s.canvas.parentElement&&(n=s)}const i=t>1;if(n!=null){const s=i&&!this.multipleScenesVisible,r=!n.element.modelIsVisible;if(s||r){const{width:a,height:l}=this.sceneSize(n);this.copyPixels(n,a,l),e.parentElement.removeChild(e)}}this.multipleScenesVisible=i}updateRendererSize(){const e=fh();if(e!==this.dpr)for(const i of this.scenes){const{element:s}=i;s[Gs](s.getBoundingClientRect())}let t=0,n=0;for(const i of this.scenes)t=Math.max(t,i.width),n=Math.max(n,i.height);if(!(t===this.width&&n===this.height&&e===this.dpr)){this.width=t,this.height=n,this.dpr=e,t=Math.ceil(t*e),n=Math.ceil(n*e),this.canRender&&this.threeRenderer.setSize(t,n,!1);for(const i of this.scenes){const{canvas:s}=i;s.width=t,s.height=n,i.forceRescale()}}}updateRendererScale(e){const t=this.scaleStep;this.avgFrameDuration+=En(Cw*(e-this.avgFrameDuration),-Rf,Rf),this.avgFrameDuration>tc?++this.scaleStep:this.avgFrameDuration<ec&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=(tc+ec)/2)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else if(e.scaleStep!=0)e.scaleStep=0,this.rescaleCanvas(e);else return!1;return!0}rescaleCanvas(e){const t=Ms[e.scaleStep],n=Math.ceil(this.width/t),i=Math.ceil(this.height/t),{style:s}=e.canvas;s.width=`${n}px`,s.height=`${i}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;const r=this.dpr*t,a=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:r,minimumDpr:this.dpr*Ms[this.lastStep],pixelWidth:Math.ceil(e.width*r),pixelHeight:Math.ceil(e.height*r),reason:a}}))}sceneSize(e){const{dpr:t}=this,n=Ms[e.scaleStep],i=Math.min(Math.ceil(e.width*n*t),this.canvas3D.width),s=Math.min(Math.ceil(e.height*n*t),this.canvas3D.height);return{width:i,height:s}}copyPixels(e,t,n){e.context==null&&e.createContext();const i=e.context;i.clearRect(0,0,t,n),i.drawImage(this.canvas3D,0,0,t,n,0,0,t,n),e.canvas.classList.add("show")}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:i,exposure:s}=e;i[Tn](t,n);const r=typeof s=="number"&&!Number.isNaN(s);this.threeRenderer.toneMappingExposure=r?s:1}render(e,t){if(t!=null){this.arRenderer.onWebXRFrame(e,t);return}const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(n),this.renderedLastFrame=!1);const{canvas3D:i}=this;for(const s of this.orderedScenes()){const{element:r}=s;if(!r.loaded||!r.modelIsVisible&&s.renderCount>0||(this.preRender(s,e,n),!this.shouldRender(s)))continue;if(s.externalRenderer!=null){const c=s.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),f=s.getTarget();d[12]+=f.x,d[13]+=f.y,d[14]+=f.z,s.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!r.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:a,height:l}=this.sceneSize(s);s.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,a,l),this.threeRenderer.render(s,s.camera),this.multipleScenesVisible||s.renderCount===0?this.copyPixels(s,a,l):(s.canvas.parentElement.appendChild(i),s.canvas.classList.remove("show")),s.hasRendered(),++s.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}ti._singleton=new ti({powerPreference:(self.ModelViewerElement||{}).powerPreference||Qg,debug:fg()});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=async o=>new Promise((e,t)=>{const i=o.match(/data:(.*);/);if(!i)return t(new Error(`${o} is not a valid data Url`));const s=i[1],r=o.replace(/data:image\/\w+;base64,/,""),a=atob(r),l=[];for(let c=0;c<a.length;c+=512){const h=a.slice(c,c+512),u=new Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);const d=new Uint8Array(u);l.push(d)}e(new Blob(l,{type:s}))});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0),t=>{let n;return n=Math.max(En(t,0,1),e.progress),n!==e.progress&&this.announceTotalProgress(e,n),e.progress}}announceTotalProgress(e,t){let n=0,i=0;t==1&&(e.completed=!0);for(const a of this.ongoingActivities){const{progress:l}=a;n+=1-l,a.completed===!0&&i++}const s=e.progress;e.progress=t,this.totalProgress+=(t-s)*(1-this.totalProgress)/n;const r=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:r}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xa=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Df,Lf,Ff,Pf,Qf,Nf,Uf,Of,kf,Gf,zf,Vf,Hf;const Mw=1e3,Bw=50,Tw=0,Rw=300,Dw=150,Zt=document.createElement("canvas"),nc=Symbol("fallbackResizeHandler"),Wf=Symbol("defaultAriaLabel"),jo=Symbol("resizeObserver"),Mr=Symbol("clearModelTimeout"),ic=Symbol("onContextLost"),Bs=Symbol("loaded"),sc=Symbol("status"),rc=Symbol("onFocus"),oc=Symbol("onBlur"),Gs=Symbol("updateSize"),Zo=Symbol("intersectionObserver"),Wi=Symbol("isElementInViewport"),Oa=Symbol("announceModelVisibility"),Zr=Symbol("ariaLabel"),vh=Symbol("altDefaulted"),Br=Symbol("statusElement"),xh=Symbol("updateStatus"),$r=Symbol("loadedTime"),Ks=Symbol("updateSource"),qf=Symbol("markLoaded"),eo=Symbol("container"),wn=Symbol("input"),yh=Symbol("canvas"),ne=Symbol("scene"),zt=Symbol("needsRender"),Tn=Symbol("tick"),bi=Symbol("onModelLoad"),po=Symbol("onResize"),$e=Symbol("renderer"),ar=Symbol("progressTracker"),$f=Symbol("getLoaded"),ss=Symbol("getModelIsVisible"),lr=Symbol("shouldAttemptPreload"),go=o=>({x:o.x,y:o.y,z:o.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Lw=o=>({u:o.x,v:o.y,toString(){return`${this.u} ${this.v}`}});class vo extends Yi{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[Df]=!1,this[Lf]=!1,this[Ff]=0,this[Pf]="",this[Qf]=null,this[Nf]=zd(()=>{const i=this.getBoundingClientRect();this[Gs](i)},Bw),this[Uf]=zd(i=>{const s=this.modelIsVisible;s!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:s}}))},Tw),this[Of]=null,this[kf]=null,this[Gf]=new bw,this[zf]=()=>{this[Br].textContent=this[sc]},this[Vf]=()=>{this[Br].textContent=""},this[Hf]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;zI(e),this[eo]=e.querySelector(".container"),this[wn]=e.querySelector(".userInput"),this[yh]=e.querySelector("canvas"),this[Br]=e.querySelector("#status"),this[Wf]=this[wn].getAttribute("aria-label");let t,n;if(this.isConnected){const i=this.getBoundingClientRect();t=i.width,n=i.height}else t=Rw,n=Dw;this[ne]=new jC({canvas:this[yh],element:this,width:t,height:n}),Promise.resolve().then(()=>{this[Gs](this.getBoundingClientRect())}),Ql&&(this[jo]=new ResizeObserver(i=>{if(!this[$e].isPresenting)for(let s of i)s.target===this&&this[Gs](s.contentRect)})),Nl?this[Zo]=new IntersectionObserver(i=>{for(let s of i)if(s.target===this){const r=this.modelIsVisible;this[Wi]=s.isIntersecting,this[Oa](r),this[Wi]&&!this.loaded&&this[Ks]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[Wi]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){ut[vi].evictionThreshold=e}static get modelCacheSize(){return ut[vi].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),ti.singleton.minScale=e}static get minimumRenderScale(){return ti.singleton.minScale}get loaded(){return this[$f]()}get[(Df=Wi,Lf=Bs,Ff=$r,Pf=sc,Qf=Mr,Nf=nc,Uf=Oa,Of=jo,kf=Zo,Gf=ar,$e)](){return ti.singleton}get modelIsVisible(){return this[ss]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Ql?this[jo].observe(this):self.addEventListener("resize",this[nc]),Nl&&this[Zo].observe(this),this.addEventListener("focus",this[rc]),this.addEventListener("blur",this[oc]);const e=this[$e];e.addEventListener("contextlost",this[ic]),e.registerScene(this[ne]),this[Mr]!=null&&(self.clearTimeout(this[Mr]),this[Mr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Ql?this[jo].unobserve(this):self.removeEventListener("resize",this[nc]),Nl&&this[Zo].unobserve(this),this.removeEventListener("focus",this[rc]),this.removeEventListener("blur",this[oc]);const e=this[$e];e.removeEventListener("contextlost",this[ic]),e.unregisterScene(this[ne]),this[Mr]=self.setTimeout(()=>{this[ne].reset()},Mw)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[Bs]=!1,this[$r]=0,this[ne].reset()):this.src!==this[ne].url&&(this[Bs]=!1,this[$r]=0,this[Ks]())),e.has("alt")&&this[wn].setAttribute("aria-label",this[Zr]),e.has("withCredentials")&&(ut.withCredentials=this.withCredentials),e.has("generateSchema")&&(this.generateSchema?this[ne].updateSchema(this.src):this[ne].updateSchema(null))}toDataURL(e,t){return this[$e].displayCanvas(this[ne]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,i=e?e.idealAspect:void 0,{width:s,height:r,idealAspect:a,aspect:l}=this[ne],{dpr:c,scaleFactor:h}=this[$e];let u=s*h*c,d=r*h*c,f=0,g=0;if(i===!0)if(a>l){const p=d;d=Math.round(u/a),g=(p-d)/2}else{const p=u;u=Math.round(d*a),f=(p-u)/2}Zt.width=u,Zt.height=d;try{return new Promise(async(p,A)=>{if(Zt.getContext("2d").drawImage(this[$e].displayCanvas(this[ne]),f,g,u,d,0,0,u,d),Zt.msToBlob&&(!t||t==="image/png"))return p(Zt.msToBlob());if(!Zt.toBlob)return p(await Sw(Zt.toDataURL(t,n)));Zt.toBlob(m=>{if(!m)return A(new Error("Unable to retrieve canvas blob"));p(m)},t,n)})}finally{this[Gs]({width:s,height:r})}}registerRenderer(e){this[ne].externalRenderer=e}unregisterRenderer(){this[ne].externalRenderer=null}get[Zr](){return this[vh]}get[vh](){return this.alt==null||this.alt==="null"?this[Wf]:this.alt}[$f](){return this[Bs]}[ss](){return this.loaded&&this[Wi]}[lr](){return!!this.src&&this[Wi]}[Gs]({width:e,height:t}){this[eo].style.width=`${e}px`,this[eo].style.height=`${t}px`,this[po]({width:parseFloat(e),height:parseFloat(t)})}[Tn](e,t){}[qf](){this[Bs]||(this[Bs]=!0,this[$r]=performance.now())}[zt](){this[ne].queueRender()}[bi](){}[xh](e){this[sc]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[Br].textContent!=e&&(this[Br].textContent=e)}[(zf=rc,Vf=oc,po)](e){this[ne].setSize(e.width,e.height)}async[(Hf=ic,Ks)](){const e=this[ne];if(this.loaded||!this[lr]()||this.src===e.url)return;this.generateSchema&&e.updateSchema(this.src),this[xh]("Loading"),e.stopAnimation();const t=this[ar].beginActivity(),n=this.src;try{const i=e.setSource(n,r=>t(En(r,0,1)*.95)),s=this[Qa]();await Promise.all([i,s]),this[qf](),this[bi](),await new Promise(r=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:n}})),r()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{t(1)}}}Xa([xe({type:String})],vo.prototype,"alt",void 0);Xa([xe({type:String})],vo.prototype,"src",void 0);Xa([xe({type:Boolean,attribute:"with-credentials"})],vo.prototype,"withCredentials",void 0);Xa([xe({type:Boolean,attribute:"generate-schema"})],vo.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ac=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const Yf=1e3,lc=Symbol("changeAnimation"),Vn=Symbol("paused"),Fw={repetitions:1/0,pingpong:!1},Pw=o=>{var e;class t extends o{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[ne].subscribeMixerEvent("loop",s=>{const r=s.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:r}}))}),this[ne].subscribeMixerEvent("finished",()=>{this[Vn]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[ne].animationNames:[]}get duration(){return this[ne].duration}get paused(){return this[Vn]}get currentTime(){return this[ne].animationTime}set currentTime(i){this[ne].animationTime=i,this[zt]()}get timeScale(){return this[ne].animationTimeScale}set timeScale(i){this[ne].animationTimeScale=i}pause(){this[Vn]||(this[Vn]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[Vn]=!1,this[lc](i),this.dispatchEvent(new CustomEvent("play")))}[(e=Vn,bi)](){super[bi](),this[Vn]=!0,this.autoplay&&this.play()}[Tn](i,s){super[Tn](i,s),!(this[Vn]||!this[ss]()&&!this[$e].isPresenting)&&(this[ne].updateAnimation(s/Yf),this[zt]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[lc]()}[lc](i=Fw){var s;const r=(s=i.repetitions)!==null&&s!==void 0?s:1/0,a=i.pingpong?Lh:r===1?Mp:Dh;this[ne].playAnimation(this.animationName,this.animationCrossfadeDuration/Yf,a,r),this[Vn]&&(this[ne].updateAnimation(0),this[zt]())}}return ac([xe({type:Boolean})],t.prototype,"autoplay",void 0),ac([xe({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),ac([xe({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=Symbol("hotspotMap"),cc=Symbol("mutationCallback"),Tr=Symbol("observer"),hc=Symbol("addHotspot"),Xf=Symbol("removeHotspot"),uc=new Re,Kf=new Ft,Qw=o=>{var e,t,n;class i extends o{constructor(){super(...arguments),this[e]=new Map,this[t]=r=>{r.forEach(a=>{(!(a instanceof MutationRecord)||a.type==="childList")&&(a.addedNodes.forEach(l=>{this[hc](l)}),a.removedNodes.forEach(l=>{this[Xf](l)}),this[zt]())})},this[n]=new MutationObserver(this[cc])}connectedCallback(){super.connectedCallback();for(let a=0;a<this.children.length;++a)this[hc](this.children[a]);const{ShadyDOM:r}=self;r==null?this[Tr].observe(this,{childList:!0}):this[Tr]=r.observeChildren(this,this[cc])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:r}=self;r==null?this[Tr].disconnect():r.unobserveChildren(this[Tr])}[(e=Ts,t=cc,n=Tr,Tn)](r,a){super[Tn](r,a);const l=this[ne],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.updateHotspots(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(r){const a=this[Ts].get(r.name);a!=null&&(a.updatePosition(r.position),a.updateNormal(r.normal),this[zt]())}positionAndNormalFromPoint(r,a){const l=this[ne],c=l.getNDC(r,a),h=l.positionAndNormalFromPoint(c);if(h==null)return null;uc.copy(l.target.matrixWorld).invert();const u=go(h.position.applyMatrix4(uc));Kf.getNormalMatrix(uc);const d=go(h.normal.applyNormalMatrix(Kf));let f=null;return h.uv!=null&&(f=Lw(h.uv)),{position:u,normal:d,uv:f}}[hc](r){if(!(r instanceof HTMLElement&&r.slot.indexOf("hotspot")===0))return;let a=this[Ts].get(r.slot);a!=null?a.increment():(a=new Tg({name:r.slot,position:r.dataset.position,normal:r.dataset.normal}),this[Ts].set(r.slot,a),this[ne].addHotspot(a)),this[ne].queueRender()}[Xf](r){if(!(r instanceof HTMLElement))return;const a=this[Ts].get(r.slot);!a||(a.decrement()&&(this[ne].removeHotspot(a),this[Ts].delete(r.slot)),this[ne].queueRender())}}return i};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Jf=function(o){return URL.createObjectURL(new Blob([o],{type:"text/javascript"}))};try{URL.revokeObjectURL(Jf(""))}catch{Jf=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Qt=Uint8Array,Pt=Uint16Array,cr=Uint32Array,tu=new Qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nu=new Qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jf=new Qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ng=function(o,e){for(var t=new Pt(31),n=0;n<31;++n)t[n]=e+=1<<o[n-1];for(var i=new cr(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},Ug=Ng(tu,2),Nw=Ug[0],Eh=Ug[1];Nw[28]=258,Eh[258]=28;var Uw=Ng(nu,0),Zf=Uw[1],Ih=new Pt(32768);for(var Ye=0;Ye<32768;++Ye){var gi=(Ye&43690)>>>1|(Ye&21845)<<1;gi=(gi&52428)>>>2|(gi&13107)<<2,gi=(gi&61680)>>>4|(gi&3855)<<4,Ih[Ye]=((gi&65280)>>>8|(gi&255)<<8)>>>1}var to=function(o,e,t){for(var n=o.length,i=0,s=new Pt(e);i<n;++i)++s[o[i]-1];var r=new Pt(e);for(i=0;i<e;++i)r[i]=r[i-1]+s[i-1]<<1;var a;if(t){a=new Pt(1<<e);var l=15-e;for(i=0;i<n;++i)if(o[i])for(var c=i<<4|o[i],h=e-o[i],u=r[o[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Ih[u]>>>l]=c}else for(a=new Pt(n),i=0;i<n;++i)o[i]&&(a[i]=Ih[r[o[i]-1]++]>>>15-o[i]);return a},rs=new Qt(288);for(var Ye=0;Ye<144;++Ye)rs[Ye]=8;for(var Ye=144;Ye<256;++Ye)rs[Ye]=9;for(var Ye=256;Ye<280;++Ye)rs[Ye]=7;for(var Ye=280;Ye<288;++Ye)rs[Ye]=8;var ka=new Qt(32);for(var Ye=0;Ye<32;++Ye)ka[Ye]=5;var Ow=to(rs,9,0),kw=to(ka,5,0),Og=function(o){return(o/8|0)+(o&7&&1)},kg=function(o,e,t){(e==null||e<0)&&(e=0),(t==null||t>o.length)&&(t=o.length);var n=new(o instanceof Pt?Pt:o instanceof cr?cr:Qt)(t-e);return n.set(o.subarray(e,t)),n},Hn=function(o,e,t){t<<=e&7;var n=e/8|0;o[n]|=t,o[n+1]|=t>>>8},Rr=function(o,e,t){t<<=e&7;var n=e/8|0;o[n]|=t,o[n+1]|=t>>>8,o[n+2]|=t>>>16},dc=function(o,e){for(var t=[],n=0;n<o.length;++n)o[n]&&t.push({s:n,f:o[n]});var i=t.length,s=t.slice();if(!i)return[iu,0];if(i==1){var r=new Qt(t[0].s+1);return r[t[0].s]=1,[r,1]}t.sort(function(E,C){return E.f-C.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=i-1;)a=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=s[0].s,n=1;n<i;++n)s[n].s>d&&(d=s[n].s);var f=new Pt(d+1),g=Ch(t[h-1],f,0);if(g>e){var n=0,p=0,A=g-e,m=1<<A;for(s.sort(function(C,M){return f[M.s]-f[C.s]||C.f-M.f});n<i;++n){var v=s[n].s;if(f[v]>e)p+=m-(1<<g-f[v]),f[v]=e;else break}for(p>>>=A;p>0;){var _=s[n].s;f[_]<e?p-=1<<e-f[_]++-1:++n}for(;n>=0&&p;--n){var x=s[n].s;f[x]==e&&(--f[x],++p)}g=e}return[new Qt(f),g]},Ch=function(o,e,t){return o.s==-1?Math.max(Ch(o.l,e,t+1),Ch(o.r,e,t+1)):e[o.s]=t},eA=function(o){for(var e=o.length;e&&!o[--e];);for(var t=new Pt(++e),n=0,i=o[0],s=1,r=function(l){t[n++]=l},a=1;a<=e;++a)if(o[a]==i&&a!=e)++s;else{if(!i&&s>2){for(;s>138;s-=138)r(32754);s>2&&(r(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(r(i),--s;s>6;s-=6)r(8304);s>2&&(r(s-3<<5|8208),s=0)}for(;s--;)r(i);s=1,i=o[a]}return[t.subarray(0,n),e]},Dr=function(o,e){for(var t=0,n=0;n<e.length;++n)t+=o[n]*e[n];return t},Ea=function(o,e,t){var n=t.length,i=Og(e+2);o[i]=n&255,o[i+1]=n>>>8,o[i+2]=o[i]^255,o[i+3]=o[i+1]^255;for(var s=0;s<n;++s)o[i+s+4]=t[s];return(i+4+n)*8},tA=function(o,e,t,n,i,s,r,a,l,c,h){Hn(e,h++,t),++i[256];for(var u=dc(i,15),d=u[0],f=u[1],g=dc(s,15),p=g[0],A=g[1],m=eA(d),v=m[0],_=m[1],x=eA(p),E=x[0],C=x[1],M=new Pt(19),y=0;y<v.length;++y)M[v[y]&31]++;for(var y=0;y<E.length;++y)M[E[y]&31]++;for(var w=dc(M,7),B=w[0],Q=w[1],$=19;$>4&&!B[jf[$-1]];--$);var k=c+5<<3,R=Dr(i,rs)+Dr(s,ka)+r,P=Dr(i,d)+Dr(s,p)+r+14+3*$+Dr(M,B)+(2*M[16]+3*M[17]+7*M[18]);if(k<=R&&k<=P)return Ea(e,h,o.subarray(l,l+c));var q,G,N,L;if(Hn(e,h,1+(P<R)),h+=2,P<R){q=to(d,f,0),G=d,N=to(p,A,0),L=p;var O=to(B,Q,0);Hn(e,h,_-257),Hn(e,h+5,C-1),Hn(e,h+10,$-4),h+=14;for(var y=0;y<$;++y)Hn(e,h+3*y,B[jf[y]]);h+=3*$;for(var J=[v,E],K=0;K<2;++K)for(var Z=J[K],y=0;y<Z.length;++y){var ie=Z[y]&31;Hn(e,h,O[ie]),h+=B[ie],ie>15&&(Hn(e,h,Z[y]>>>5&127),h+=Z[y]>>>12)}}else q=Ow,G=rs,N=kw,L=ka;for(var y=0;y<a;++y)if(n[y]>255){var ie=n[y]>>>18&31;Rr(e,h,q[ie+257]),h+=G[ie+257],ie>7&&(Hn(e,h,n[y]>>>23&31),h+=tu[ie]);var ue=n[y]&31;Rr(e,h,N[ue]),h+=L[ue],ue>3&&(Rr(e,h,n[y]>>>5&8191),h+=nu[ue])}else Rr(e,h,q[n[y]]),h+=G[n[y]];return Rr(e,h,q[256]),h+G[256]},Gw=new cr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),iu=new Qt(0),zw=function(o,e,t,n,i,s){var r=o.length,a=new Qt(n+r+5*(1+Math.ceil(r/7e3))+i),l=a.subarray(n,a.length-i),c=0;if(!e||r<8)for(var h=0;h<=r;h+=65535){var u=h+65535;u<r?c=Ea(l,c,o.subarray(h,u)):(l[h]=s,c=Ea(l,c,o.subarray(h,r)))}else{for(var d=Gw[e-1],f=d>>>13,g=d&8191,p=(1<<t)-1,A=new Pt(32768),m=new Pt(p+1),v=Math.ceil(t/3),_=2*v,x=function(et){return(o[et]^o[et+1]<<v^o[et+2]<<_)&p},E=new cr(25e3),C=new Pt(288),M=new Pt(32),y=0,w=0,h=0,B=0,Q=0,$=0;h<r;++h){var k=x(h),R=h&32767,P=m[k];if(A[R]=P,m[k]=R,Q<=h){var q=r-h;if((y>7e3||B>24576)&&q>423){c=tA(o,l,0,E,C,M,w,B,$,h-$,c),B=y=w=0,$=h;for(var G=0;G<286;++G)C[G]=0;for(var G=0;G<30;++G)M[G]=0}var N=2,L=0,O=g,J=R-P&32767;if(q>2&&k==x(h-J))for(var K=Math.min(f,q)-1,Z=Math.min(32767,h),ie=Math.min(258,q);J<=Z&&--O&&R!=P;){if(o[h+N]==o[h+N-J]){for(var ue=0;ue<ie&&o[h+ue]==o[h+ue-J];++ue);if(ue>N){if(N=ue,L=J,ue>K)break;for(var X=Math.min(J,ue-2),Qe=0,G=0;G<X;++G){var pe=h-J+G+32768&32767,_e=A[pe],le=pe-_e+32768&32767;le>Qe&&(Qe=le,P=pe)}}}R=P,P=A[R],J+=R-P+32768&32767}if(L){E[B++]=268435456|Eh[N]<<18|Zf[L];var ke=Eh[N]&31,Ce=Zf[L]&31;w+=tu[ke]+nu[Ce],++C[257+ke],++M[Ce],Q=h+N,++y}else E[B++]=o[h],++C[o[h]]}}c=tA(o,l,s,E,C,M,w,B,$,h-$,c),!s&&c&7&&(c=Ea(l,c+1,iu))}return kg(a,0,n+Og(c)+i)},Vw=function(){for(var o=new cr(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;o[e]=t}return o}(),Hw=function(){var o=-1;return{p:function(e){for(var t=o,n=0;n<e.length;++n)t=Vw[t&255^e[n]]^t>>>8;o=t},d:function(){return~o}}},Ww=function(o,e,t,n,i){return zw(o,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(o.length)))*1.5):12+e.mem,t,n,!i)},Gg=function(o,e){var t={};for(var n in o)t[n]=o[n];for(var n in e)t[n]=e[n];return t},gt=function(o,e,t){for(;t;++e)o[e]=t,t>>>=8};function qw(o,e){return Ww(o,e||{},0,0)}var zg=function(o,e,t,n){for(var i in o){var s=o[i],r=e+i;s instanceof Qt?t[r]=[s,n]:Array.isArray(s)?t[r]=[s[0],Gg(n,s[1])]:zg(s,r+"/",t,n)}},nA=typeof TextEncoder<"u"&&new TextEncoder,$w=typeof TextDecoder<"u"&&new TextDecoder,Yw=0;try{$w.decode(iu,{stream:!0}),Yw=1}catch{}function Ga(o,e){if(e){for(var t=new Qt(o.length),n=0;n<o.length;++n)t[n]=o.charCodeAt(n);return t}if(nA)return nA.encode(o);for(var i=o.length,s=new Qt(o.length+(o.length>>1)),r=0,a=function(h){s[r++]=h},n=0;n<i;++n){if(r+5>s.length){var l=new Qt(r+8+(i-n<<1));l.set(s),s=l}var c=o.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|o.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return kg(s,0,r)}var wh=function(o){var e=0;if(o)for(var t in o){var n=o[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},iA=function(o,e,t,n,i,s,r,a){var l=n.length,c=t.extra,h=a&&a.length,u=wh(c);gt(o,e,r!=null?33639248:67324752),e+=4,r!=null&&(o[e++]=20,o[e++]=t.os),o[e]=20,e+=2,o[e++]=t.flag<<1|(s==null&&8),o[e++]=i&&8,o[e++]=t.compression&255,o[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(gt(o,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,s!=null&&(gt(o,e,t.crc),gt(o,e+4,s),gt(o,e+8,t.size)),gt(o,e+12,l),gt(o,e+14,u),e+=16,r!=null&&(gt(o,e,h),gt(o,e+6,t.attrs),gt(o,e+10,r),e+=14),o.set(n,e),e+=l,u)for(var g in c){var p=c[g],A=p.length;gt(o,e,+g),gt(o,e+2,A),o.set(p,e+4),e+=4+A}return h&&(o.set(a,e),e+=h),e},Xw=function(o,e,t,n,i){gt(o,e,101010256),gt(o,e+8,t),gt(o,e+10,t),gt(o,e+12,n),gt(o,e+16,i)};function Kw(o,e){e||(e={});var t={},n=[];zg(o,"",t,e);var i=0,s=0;for(var r in t){var a=t[r],l=a[0],c=a[1],h=c.level==0?0:8,u=Ga(r),d=u.length,f=c.comment,g=f&&Ga(f),p=g&&g.length,A=wh(c.extra);if(d>65535)throw"filename too long";var m=h?qw(l,c):l,v=m.length,_=Hw();_.p(l),n.push(Gg(c,{size:l.length,crc:_.d(),c:m,f:u,m:g,u:d!=r.length||g&&f.length!=p,o:i,compression:h})),i+=30+d+A+v,s+=76+2*(d+A)+(p||0)+v}for(var x=new Qt(s+22),E=i,C=s-i,M=0;M<n.length;++M){var u=n[M];iA(x,u.o,u,u.f,u.u,u.c.length);var y=30+u.f.length+wh(u.extra);x.set(u.c,u.o+y),iA(x,i,u,u.f,u.u,u.c.length,u.o,u.m),i+=16+y+(u.m?u.m.length:0)}return Xw(x,i,n.length,C,E),x}class Jw{async parse(e){const t={},n="model.usda";t[n]=null;let i=Vg();const s={},r={};e.traverseVisible(l=>{if(l.isMesh){const c=l.geometry,h=l.material;if(h.isMeshStandardMaterial){const u="geometries/Geometry_"+c.id+".usd";if(!(u in t)){const d=nS(c);t[u]=Zw(d)}h.uuid in s||(s[h.uuid]=h),i+=eS(l,c,h)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}}),i+=aS(s,r),t[n]=Ga(i),i=null;for(const l in r){const c=r[l],h=l.split("_")[1],u=c.format===1023,d=jw(c.image,h),f=await new Promise(g=>d.toBlob(g,u?"image/png":"image/jpeg",1));t[`textures/Texture_${l}.${u?"png":"jpg"}`]=new Uint8Array(await f.arrayBuffer())}let a=0;for(const l in t){const c=t[l];a+=34+l.length;const u=a&63;if(u!==4){const d=64-u,f=new Uint8Array(d);t[l]=[c,{extra:{12345:f}}]}a=c.length}return Kw(t,{level:0})}}function jw(o,e){if(typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&o instanceof ImageBitmap){const t=1024/Math.max(o.width,o.height),n=document.createElement("canvas");n.width=o.width*Math.min(1,t),n.height=o.height*Math.min(1,t);const i=n.getContext("2d");if(i.drawImage(o,0,0,n.width,n.height),e!==void 0){const s=parseInt(e,16),r=(s>>16&255)/255,a=(s>>8&255)/255,l=(s&255)/255,c=i.getImageData(0,0,n.width,n.height),h=c.data;for(let u=0;u<h.length;u+=4)h[u+0]=h[u+0]*r,h[u+1]=h[u+1]*a,h[u+2]=h[u+2]*l;i.putImageData(c,0,0)}return n}}const no=7;function Vg(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function Zw(o){let e=Vg();return e+=o,Ga(e)}function eS(o,e,t){const n="Object_"+o.id,i=tS(o.matrixWorld);return o.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",o),`def Xform "${n}" (
    prepend references = @./geometries/Geometry_${e.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${i}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${t.id}>
}

`}function tS(o){const e=o.elements;return`( ${ea(e,0)}, ${ea(e,4)}, ${ea(e,8)}, ${ea(e,12)} )`}function ea(o,e){return`(${o[e+0]}, ${o[e+1]}, ${o[e+2]}, ${o[e+3]})`}function nS(o){return`
def "Geometry"
{
  ${iS(o)}
}
`}function iS(o){const e="Geometry",t=o.attributes,n=t.position.count;return`
    def Mesh "${e}"
    {
        int[] faceVertexCounts = [${sS(o)}]
        int[] faceVertexIndices = [${rS(o)}]
        normal3f[] normals = [${sA(t.normal,n)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${sA(t.position,n)}]
        float2[] primvars:st = [${oS(t.uv,n)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}function sS(o){const e=o.index!==null?o.index.count:o.attributes.position.count;return Array(e/3).fill(3).join(", ")}function rS(o){const e=o.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{const n=o.attributes.position.count;for(let i=0;i<n;i++)t.push(i)}return t.join(", ")}function sA(o,e){if(o===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<o.count;n++){const i=o.getX(n),s=o.getY(n),r=o.getZ(n);t.push(`(${i.toPrecision(no)}, ${s.toPrecision(no)}, ${r.toPrecision(no)})`)}return t.join(", ")}function oS(o,e){if(o===void 0)return console.warn("USDZExporter: UVs missing."),Array(e).fill("(0, 0)").join(", ");const t=[];for(let n=0;n<o.count;n++){const i=o.getX(n),s=o.getY(n);t.push(`(${i.toPrecision(no)}, ${1-s.toPrecision(no)})`)}return t.join(", ")}function aS(o,e){const t=[];for(const n in o){const i=o[n];t.push(lS(i,e))}return`def "Materials"
{
${t.join("")}
}

`}function lS(o,e){const t="            ",n=[],i=[];function s(r,a,l){const c=r.id+(l?"_"+l.getHexString():""),h=r.format===1023;return e[c]=r,`
        def Shader "Transform2d_${a}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${o.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${oA(r.repeat)}
            float2 inputs:translation = ${oA(r.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${r.id}_${a}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${c}.${h?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${o.id}/Transform2d_${a}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${o.transparent||o.alphaTest>0?"float outputs:a":""}
        }`}return o.side===Gt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",o),o.map!==null?(n.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${o.id}/Texture_${o.map.id}_diffuse.outputs:rgb>`),o.transparent?n.push(`${t}float inputs:opacity.connect = </Materials/Material_${o.id}/Texture_${o.map.id}_diffuse.outputs:a>`):o.alphaTest>0&&(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${o.id}/Texture_${o.map.id}_diffuse.outputs:a>`),n.push(`${t}float inputs:opacityThreshold = ${o.alphaTest}`)),i.push(s(o.map,"diffuse",o.color))):n.push(`${t}color3f inputs:diffuseColor = ${rA(o.color)}`),o.emissiveMap!==null?(n.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${o.id}/Texture_${o.emissiveMap.id}_emissive.outputs:rgb>`),i.push(s(o.emissiveMap,"emissive"))):o.emissive.getHex()>0&&n.push(`${t}color3f inputs:emissiveColor = ${rA(o.emissive)}`),o.normalMap!==null&&(n.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${o.id}/Texture_${o.normalMap.id}_normal.outputs:rgb>`),i.push(s(o.normalMap,"normal"))),o.aoMap!==null&&(n.push(`${t}float inputs:occlusion.connect = </Materials/Material_${o.id}/Texture_${o.aoMap.id}_occlusion.outputs:r>`),i.push(s(o.aoMap,"occlusion"))),o.roughnessMap!==null&&o.roughness===1?(n.push(`${t}float inputs:roughness.connect = </Materials/Material_${o.id}/Texture_${o.roughnessMap.id}_roughness.outputs:g>`),i.push(s(o.roughnessMap,"roughness"))):n.push(`${t}float inputs:roughness = ${o.roughness}`),o.metalnessMap!==null&&o.metalness===1?(n.push(`${t}float inputs:metallic.connect = </Materials/Material_${o.id}/Texture_${o.metalnessMap.id}_metallic.outputs:b>`),i.push(s(o.metalnessMap,"metallic"))):n.push(`${t}float inputs:metallic = ${o.metalness}`),o.alphaMap!==null?(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${o.id}/Texture_${o.alphaMap.id}_opacity.outputs:r>`),n.push(`${t}float inputs:opacityThreshold = 0.0001`),i.push(s(o.alphaMap,"opacity"))):n.push(`${t}float inputs:opacity = ${o.opacity}`),o.isMeshPhysicalMaterial&&(n.push(`${t}float inputs:clearcoat = ${o.clearcoat}`),n.push(`${t}float inputs:clearcoatRoughness = ${o.clearcoatRoughness}`),n.push(`${t}float inputs:ior = ${o.ior}`)),`
    def Material "Material_${o.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${n.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${o.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${o.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${i.join(`
`)}

    }
`}function rA(o){return`(${o.r}, ${o.g}, ${o.b})`}function oA(o){return`(${o.x}, ${o.y})`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=o=>e=>{try{const t=is(e),n=(t.length?t[0].terms:[]).filter(s=>s&&s.type==="ident").map(s=>s.value).filter(s=>o.indexOf(s)>-1),i=new Set;for(const s of n)i.add(s);return i}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rs=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let aA=!1,lA=!1;const cA="#model-viewer-no-ar-fallback",hS=cS(["quick-look","scene-viewer","webxr","none"]),uS="webxr scene-viewer quick-look",jt={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},Wn=Symbol("arButtonContainer"),hA=Symbol("enterARWithWebXR"),uA=Symbol("openSceneViewer"),dA=Symbol("openIOSARQuickLook"),dS=Symbol("canActivateAR"),ta=Symbol("arMode"),fc=Symbol("arModes"),Ds=Symbol("arAnchor"),na=Symbol("preload"),ia=Symbol("onARButtonContainerClick"),Ac=Symbol("onARStatus"),pc=Symbol("onARTracking"),gc=Symbol("onARTap"),Lr=Symbol("selectARMode"),mc=Symbol("triggerLoad"),fS=o=>{var e,t,n,i,s,r,a,l,c,h;class u extends o{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=uS,this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[s]=jt.NONE,this[r]=!1,this[a]=f=>{f.preventDefault(),this.activateAR()},this[l]=({status:f})=>{(f===yi.NOT_PRESENTING||this[$e].arRenderer.presentedScene===this[ne])&&(this.setAttribute("ar-status",f),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:f}})),f===yi.NOT_PRESENTING?this.removeAttribute("ar-tracking"):f===yi.SESSION_STARTED&&this.setAttribute("ar-tracking",_h.TRACKING))},this[c]=({status:f})=>{this.setAttribute("ar-tracking",f),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:f}}))},this[h]=f=>{f.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[ta]!==jt.NONE}connectedCallback(){super.connectedCallback(),this[$e].arRenderer.addEventListener("status",this[Ac]),this.setAttribute("ar-status",yi.NOT_PRESENTING),this[$e].arRenderer.addEventListener("tracking",this[pc]),this[Ds].addEventListener("message",this[gc])}disconnectedCallback(){super.disconnectedCallback(),this[$e].arRenderer.removeEventListener("status",this[Ac]),this[$e].arRenderer.removeEventListener("tracking",this[pc]),this[Ds].removeEventListener("message",this[gc])}update(f){super.update(f),f.has("arScale")&&(this[ne].canScale=this.arScale!=="fixed"),f.has("arPlacement")&&(this[ne].updateShadow(),this[zt]()),f.has("arModes")&&(this[fc]=hS(this.arModes)),(f.has("ar")||f.has("arModes")||f.has("src")||f.has("iosSrc"))&&this[Lr]()}async activateAR(){switch(this[ta]){case jt.QUICK_LOOK:this[dA]();break;case jt.WEBXR:await this[hA]();break;case jt.SCENE_VIEWER:this[uA]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(e=dS,t=Wn,n=Ds,i=fc,s=ta,r=na,a=ia,l=Ac,c=pc,h=gc,Lr)](){let f=jt.NONE;if(this.ar){if(this.src!=null)for(const g of this[fc]){if(g==="webxr"&&hg&&!aA&&await this[$e].arRenderer.supportsPresentation()){f=jt.WEBXR;break}if(g==="scene-viewer"&&SI&&!lA){f=jt.SCENE_VIEWER;break}if(g==="quick-look"&&kd){f=jt.QUICK_LOOK;break}}f===jt.NONE&&this.iosSrc!=null&&kd&&(f=jt.QUICK_LOOK)}if(f!==jt.NONE)this[Wn].classList.add("enabled"),this[Wn].addEventListener("click",this[ia]);else if(this[Wn].classList.contains("enabled")){this[Wn].removeEventListener("click",this[ia]),this[Wn].classList.remove("enabled");const g=yi.FAILED;this.setAttribute("ar-status",g),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:g}}))}this[ta]=f}async[hA](){console.log("Attempting to present in AR with WebXR..."),await this[mc]();try{this[Wn].removeEventListener("click",this[ia]);const{arRenderer:f}=this[$e];f.placeOnWall=this.arPlacement==="wall",await f.present(this[ne],this.xrEnvironment)}catch(f){console.warn("Error while trying to present in AR with WebXR"),console.error(f),await this[$e].arRenderer.stopPresenting(),aA=!0,console.warn("Falling back to next ar-mode"),await this[Lr](),this.activateAR()}finally{this[Lr]()}}async[mc](){this.loaded||(this[na]=!0,this[Ks](),await DI(this,"load"),this[na]=!1)}[lr](){return super[lr]()||this[na]}[uA](){const f=self.location.toString(),g=new URL(f),p=new URL(this.src,f),A=new URLSearchParams(p.search);if(g.hash=cA,A.set("mode","ar_preferred"),A.has("disable_occlusion")||A.set("disable_occlusion","true"),this.arScale==="fixed"&&A.set("resizable","false"),this.arPlacement==="wall"&&A.set("enable_vertical_placement","true"),A.has("sound")){const _=new URL(A.get("sound"),f);A.set("sound",_.toString())}if(A.has("link")){const _=new URL(A.get("link"),f);A.set("link",_.toString())}const m=`intent://arvr.google.com/scene-viewer/1.0?${A.toString()+"&file="+encodeURIComponent(p.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(g.toString())};end;`,v=()=>{self.location.hash===cA&&(lA=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[Lr]())};self.addEventListener("hashchange",v,{once:!0}),this[Ds].setAttribute("href",m),console.log("Attempting to present in AR with Scene Viewer..."),this[Ds].click()}async[dA](){const f=!this.iosSrc;this[Wn].classList.remove("enabled");const g=f?await this.prepareUSDZ():this.iosSrc,p=new URL(g,self.location.toString());if(f){const v=self.location.toString(),_=new URL(v),x=new URL(this.src,_);x.hash&&(p.hash=x.hash)}this.arScale==="fixed"&&(p.hash&&(p.hash+="&"),p.hash+="allowsContentScaling=0");const A=this[Ds];A.setAttribute("rel","ar");const m=document.createElement("img");A.appendChild(m),A.setAttribute("href",p.toString()),f&&A.setAttribute("download","model.usdz"),console.log("Attempting to present in AR with Quick Look..."),A.click(),A.removeChild(m),f&&URL.revokeObjectURL(g),this[Wn].classList.add("enabled")}async prepareUSDZ(){const f=this[ar].beginActivity();await this[mc]();const{model:g,shadow:p}=this[ne];if(g==null)return"";let A=!1;p!=null&&(A=p.visible,p.visible=!1),f(.2);const v=await new Jw().parse(g),_=new Blob([v],{type:"model/vnd.usdz+zip"}),x=URL.createObjectURL(_);return f(1),p!=null&&(p.visible=A),x}}return Rs([xe({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Rs([xe({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Rs([xe({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Rs([xe({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Rs([xe({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Rs([xe({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hg,fA,AA;const Ar=Symbol("evaluate"),Ia=Symbol("lastValue");class Ke{constructor(){this[Hg]=null}static evaluatableFor(e,t=Si){if(e instanceof Ke)return e;if(e.type==="number")return e.unit==="%"?new AS(e,t):e;switch(e.name.value){case"calc":return new mS(e,t);case"env":return new pS(e)}return Si}static evaluate(e){return e instanceof Ke?e.evaluate():e}static isConstant(e){return e instanceof Ke?e.isConstant:!0}static applyIntrinsics(e,t){const{basis:n,keywords:i}=t,{auto:s}=i;return n.map((r,a)=>{const l=s[a]==null?r:s[a];let c=e[a]?e[a]:l;if(c.type==="ident"){const h=c.value;h in i&&(c=i[h][a])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?wt(c.number/100*r.number,r.unit):(c=Bn(c,r),c.unit!==r.unit?r:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[Ia]==null)&&(this[Ia]=this[Ar]()),this[Ia]}}Hg=Ia;const pA=Symbol("percentage"),_c=Symbol("basis");class AS extends Ke{constructor(e,t){super(),this[pA]=e,this[_c]=t}get isConstant(){return!0}[Ar](){return wt(this[pA].number/100*this[_c].number,this[_c].unit)}}const sa=Symbol("identNode");class pS extends Ke{constructor(e){super(),this[fA]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[sa]=t)}get isConstant(){return!1}[(fA=sa,Ar)](){if(this[sa]!=null)switch(this[sa].value){case"window-scroll-y":const e=window.pageYOffset,t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),n=e/(t-window.innerHeight)||0;return{type:"number",number:n,unit:null}}return Si}}const gS=/[\*\/]/,Ls=Symbol("evaluator");class mS extends Ke{constructor(e,t=Si){if(super(),this[AA]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),i=[];for(;n.length;){const s=n.shift();if(i.length>0){const r=i[i.length-1];if(r.type==="operator"&&gS.test(r.value)){const a=i.pop(),l=i.pop();if(l==null)return;i.push(new mA(a,Ke.evaluatableFor(l,t),Ke.evaluatableFor(s,t)));continue}}i.push(s.type==="operator"?s:Ke.evaluatableFor(s,t))}for(;i.length>2;){const[s,r,a]=i.splice(0,3);if(r.type!=="operator")return;i.unshift(new mA(r,Ke.evaluatableFor(s,t),Ke.evaluatableFor(a,t)))}i.length===1&&(this[Ls]=i[0])}get isConstant(){return this[Ls]==null||Ke.isConstant(this[Ls])}[(AA=Ls,Ar)](){return this[Ls]!=null?Ke.evaluate(this[Ls]):Si}}const gA=Symbol("operator"),vc=Symbol("left"),xc=Symbol("right");class mA extends Ke{constructor(e,t,n){super(),this[gA]=e,this[vc]=t,this[xc]=n}get isConstant(){return Ke.isConstant(this[vc])&&Ke.isConstant(this[xc])}[Ar](){const e=Bn(Ke.evaluate(this[vc])),t=Bn(Ke.evaluate(this[xc])),{number:n,unit:i}=e,{number:s,unit:r}=t;if(r!=null&&i!=null&&r!=i)return Si;const a=i||r;let l;switch(this[gA].value){case"+":l=n+s;break;case"-":l=n-s;break;case"/":l=n/s;break;case"*":l=n*s;break;default:return Si}return{type:"number",number:l,unit:a}}}const yc=Symbol("evaluatables"),_A=Symbol("intrinsics");class Wg extends Ke{constructor(e,t){super(),this[_A]=t;const n=e[0],i=n!=null?n.terms:[];this[yc]=t.basis.map((s,r)=>{const a=i[r];return a==null?{type:"ident",value:"auto"}:a.type==="ident"?a:Ke.evaluatableFor(a,s)})}get isConstant(){for(const e of this[yc])if(!Ke.isConstant(e))return!1;return!0}[Ar](){const e=this[yc].map(t=>Ke.evaluate(t));return Ke.applyIntrinsics(e,this[_A]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qg,$g,Yg,Xg;const Fs=Symbol("instances"),vA=Symbol("activateListener"),xA=Symbol("deactivateListener"),Ec=Symbol("notifyInstances"),yA=Symbol("notify"),EA=Symbol("callback");class xn{constructor(e){this[EA]=e}static[Ec](){for(const e of xn[Fs])e[yA]()}static[(qg=Fs,vA)](){window.addEventListener("scroll",this[Ec],{passive:!0})}static[xA](){window.removeEventListener("scroll",this[Ec])}observe(){xn[Fs].size===0&&xn[vA](),xn[Fs].add(this)}disconnect(){xn[Fs].delete(this),xn[Fs].size===0&&xn[xA]()}[yA](){this[EA]()}}xn[qg]=new Set;const IA=Symbol("computeStyleCallback"),Kg=Symbol("astWalker"),Yr=Symbol("dependencies"),Jg=Symbol("onScroll");class _S{constructor(e){this[$g]={},this[Yg]=new VC(["function"]),this[Xg]=()=>{this[IA]({relatedState:"window-scroll"})},this[IA]=e}observeEffectsFor(e){const t={},n=this[Yr];this[Kg].walk(e,i=>{const{name:s}=i,a=i.arguments[0].terms[0];if(!(s.value!=="env"||a==null||a.type!=="ident"))switch(a.value){case"window-scroll-y":if(t["window-scroll"]==null){const l="window-scroll"in n?n["window-scroll"]:new xn(this[Jg]);l.observe(),delete n["window-scroll"],t["window-scroll"]=l}break}});for(const i in n)n[i].disconnect();this[Yr]=t}dispose(){for(const e in this[Yr])this[Yr][e].disconnect()}}$g=Yr,Yg=Kg,Xg=Jg;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=o=>{const e=o.observeEffects||!1,t=o.intrinsics instanceof Function?o.intrinsics:()=>o.intrinsics;return(n,i)=>{const s=n.updated,r=n.connectedCallback,a=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),h=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=is(this[i]);this[c]=new Wg(d,t(this)),this[l]==null&&e&&(this[l]=new _S(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[o.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[h](),this[u]()),s.call(this,d)}},connectedCallback:{value:function(){r.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){a.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=.018,CA=2,xS=300,yS=new Se,wA=new T,SA=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),ra=Math.PI/8,oa=.04,aa=10,Tt={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class ES extends sn{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.orbitSensitivity=1,this.inputSensitivity=1,this.changeSource=Tt.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Ft,this.panPerPixel=0,this.spherical=new va,this.goalSpherical=new va,this.thetaDamper=new $t,this.phiDamper=new $t,this.radiusDamper=new $t,this.logFov=Math.log(SA.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new $t,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=i=>{if(this.enablePan)i.preventDefault();else for(const s of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:s.id})))},this.touchModeZoom=(i,s)=>{if(!this._disableZoom){const r=this.twoTouchDistance(this.pointers[0],this.pointers[1]),a=oa*(this.lastSeparation-r)*50/this.scene.height;this.lastSeparation=r,this.userAdjustOrbit(0,0,a)}this.panPerPixel>0&&this.movePan(i,s)},this.disableScroll=i=>{i.preventDefault()},this.touchModeRotate=(i,s)=>{const{touchAction:r}=this._options;if(!this.touchDecided&&r!=="none"){this.touchDecided=!0;const a=Math.abs(i),l=Math.abs(s);if(this.changeSource===Tt.USER_INTERACTION&&(r==="pan-y"&&l>a||r==="pan-x"&&a>l)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(i,s)},this.onPointerDown=i=>{if(this.pointers.length>2)return;const{element:s}=this;this.pointers.length===0&&(s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.startTime=performance.now());try{s.setPointerCapture(i.pointerId)}catch{}this.pointers.push({clientX:i.clientX,clientY:i.clientY,id:i.pointerId}),this.isUserPointing=!1,i.pointerType==="touch"?(this.changeSource=i.altKey?Tt.AUTOMATIC:Tt.USER_INTERACTION,this.onTouchChange(i)):(this.changeSource=Tt.USER_INTERACTION,this.onMouseDown(i))},this.onPointerMove=i=>{const s=this.pointers.find(c=>c.id===i.pointerId);if(s==null)return;const r=this.pointers.length,a=(i.clientX-s.clientX)/r,l=(i.clientY-s.clientY)/r;a===0&&l===0||(s.clientX=i.clientX,s.clientY=i.clientY,i.pointerType==="touch"?(this.changeSource=i.altKey?Tt.AUTOMATIC:Tt.USER_INTERACTION,this.touchMode!==null&&this.touchMode(a,l)):(this.changeSource=Tt.USER_INTERACTION,this.panPerPixel>0?this.movePan(a,l):this.handleSinglePointerMove(a,l)))},this.onPointerUp=i=>{const{element:s}=this,r=this.pointers.findIndex(a=>a.id===i.pointerId);r!==-1&&this.pointers.splice(r,1),this.panPerPixel>0&&!i.altKey&&this.resetRadius(),this.pointers.length===0?(s.removeEventListener("pointermove",this.onPointerMove),s.removeEventListener("pointerup",this.onPointerUp),s.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(i)):this.touchMode!==null&&this.onTouchChange(i),this.scene.element[Ca].style.opacity=0,s.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=i=>{this.changeSource=Tt.USER_INTERACTION;const s=i.deltaY*(i.deltaMode==1?18:1)*oa/30;this.userAdjustOrbit(0,0,s),i.preventDefault()},this.onKeyDown=i=>{const{changeSource:s}=this;this.changeSource=Tt.USER_INTERACTION,(i.shiftKey&&this.enablePan?this.panKeyCodeHandler(i):this.orbitZoomKeyCodeHandler(i))?i.preventDefault():this.changeSource=s},this._options=Object.assign({},SA),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchmove",()=>{},{passive:!1}),e.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("contextmenu",this.onContext),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new va){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.near=Math.max(e,t/1e3),this.camera.far=t,this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:s,minimumPolarAngle:r,maximumPolarAngle:a,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,f=En(e,i,s);!isFinite(i)&&!isFinite(s)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-f)+f);const g=En(t,r,a),p=En(n,l,c);return f===h&&g===u&&p===d?!1:(this.goalSpherical.theta=f,this.goalSpherical.phi=g,this.goalSpherical.radius=p,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=En(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:i,phi:s,radius:r}=this.goalSpherical,{minimumRadius:a,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,f=i-En(e,-d-u,d-u),g=s-t,p=n===0?0:((n>0?l:a)-r)/(Math.log(n>0?h:c)-this.goalLogFov),A=r+n*(isFinite(p)?p:(l-a)*2);if(this.setOrbit(f,g,A),n!==0){const m=this.goalLogFov+n;this.setFieldOfView(Math.exp(m))}}jumpToGoal(){this.update(0,Mg)}update(e,t){if(this.isStationary())return;const{maximumPolarAngle:n,maximumRadius:i}=this._options,s=this.spherical.theta-this.goalSpherical.theta;Math.abs(s)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(s)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera()}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}dispatchChange(){this.dispatchEvent({type:"change",source:this.changeSource})}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new os(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix()),this.dispatchChange()}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity),this.dispatchChange()}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return(t-Math.floor(t))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.element.clientHeight}twoTouchDistance(e,t){const{clientX:n,clientY:i}=e,{clientX:s,clientY:r}=t,a=s-n,l=r-i;return Math.sqrt(a*a+l*l)}handleSinglePointerMove(e,t){const n=this.pixelLengthToSphericalAngle(e),i=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(n,i,0)}initializePan(){const{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=vS/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){const{scene:n}=this,i=wA.set(e,t,0).multiplyScalar(this.inputSensitivity),s=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;i.multiplyScalar(s);const r=n.getTarget();r.add(i.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(r,r),n.setTarget(r.x,r.y,r.z),this.dispatchChange()}recenter(e){if(performance.now()>this.startTime+xS||Math.abs(e.clientX-this.startPointerPosition.clientX)>CA||Math.abs(e.clientY-this.startPointerPosition.clientY)>CA)return;const{scene:t}=this,n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){const{cameraTarget:i}=t.element;t.element.cameraTarget="",t.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:e}=this,t=e.positionAndNormalFromPoint(yS.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const n=e.getTarget(),{theta:i,phi:s}=this.spherical,r=i-e.yaw,a=wA.set(Math.sin(s)*Math.sin(r),Math.cos(s),Math.sin(s)*Math.cos(r)),l=a.dot(t.position.sub(n));n.add(a.multiplyScalar(l)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[Ca].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[Ca].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case"PageUp":this.userAdjustOrbit(0,0,oa);break;case"PageDown":this.userAdjustOrbit(0,0,-1*oa);break;case"ArrowUp":this.userAdjustOrbit(0,-ra,0);break;case"ArrowDown":this.userAdjustOrbit(0,ra,0);break;case"ArrowLeft":this.userAdjustOrbit(-ra,0,0);break;case"ArrowRight":this.userAdjustOrbit(ra,0,0);break;default:t=!1;break}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case"ArrowUp":this.movePan(0,-1*aa);break;case"ArrowDown":this.movePan(0,aa);break;case"ArrowLeft":this.movePan(-1*aa,0);break;case"ArrowRight":this.movePan(aa,0);break;default:t=!1;break}return t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=o=>o<.5?2*o*o:-1+(4-2*o)*o,IS=(o,e,t=jg)=>n=>o+(e-o)*t(n),CS=(o,e)=>{const t=i=>s=>i+=s,n=e.map(t(0));return i=>{i=En(i,0,1),i*=n[n.length-1];const s=n.findIndex(l=>l>=i),r=s<1?0:n[s-1],a=n[s];return o[s]((i-r)/(a-r))}},qs=o=>{const e=[],t=[];let n=o.initialValue;for(let i=0;i<o.keyframes.length;++i){const s=o.keyframes[i],{value:r,frames:a}=s,l=s.ease||jg,c=IS(n,r,l);e.push(c),t.push(a),n=r}return CS(e,t)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const wS=5e3,SS=qs({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),bS=qs({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),MS=30,BS=12,Zg="0deg 75deg 105%",TS="auto auto auto",RS="auto",DS=2.2,LS=["front","right","back","left"],FS=["upper-","","lower-"],PS=3e3,QS=". Use mouse, touch or arrow keys to move.",la={AUTO:"auto",NONE:"none"},NS={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},bA=()=>({basis:[Ya(wt(MS,"deg"))],keywords:{auto:[null]}}),US=()=>({basis:[Ya(wt(BS,"deg"))],keywords:{auto:[null]}}),em=(()=>{const o=is(Zg)[0].terms,e=Bn(o[0]),t=Bn(o[1]);return n=>{const i=n[ne].idealCameraDistance();return{basis:[e,t,wt(i,"m")],keywords:{auto:[null,null,wt(105,"%")]}}}})(),OS=o=>{const e=DS*o[ne].boundingSphere.radius;return{basis:[wt(-1/0,"rad"),wt(Math.PI/8,"rad"),wt(e,"m")],keywords:{auto:[null,null,null]}}},kS=o=>{const e=em(o),n=new Wg([],e).evaluate()[2];return{basis:[wt(1/0,"rad"),wt(Math.PI-Math.PI/8,"rad"),wt(n,"m")],keywords:{auto:[null,null,null]}}},GS=o=>{const e=o[ne].boundingBox.getCenter(new T);return{basis:[wt(e.x,"m"),wt(e.y,"m"),wt(e.z,"m")],keywords:{auto:[null,null,null]}}},tm=Math.PI/2,zS=Math.PI/3,VS=tm/2,HS=2*Math.PI,ze=Symbol("controls"),Ca=Symbol("panElement"),Ic=Symbol("promptElement"),Cc=Symbol("promptAnimatedContainer"),wc=Symbol("fingerAnimatedContainers"),ca=Symbol("deferInteractionPrompt"),MA=Symbol("updateAria"),BA=Symbol("updateCameraForRadius"),ha=Symbol("onChange"),Fr=Symbol("onPointerChange"),Ni=Symbol("waitingToPromptUser"),ua=Symbol("userHasInteracted"),Ps=Symbol("promptElementVisibleTime"),Pr=Symbol("lastPromptOffset"),Sc=Symbol("lastSpherical"),Qr=Symbol("jumpCamera"),bc=Symbol("initialized"),Nr=Symbol("maintainThetaPhi"),TA=Symbol("syncCameraOrbit"),RA=Symbol("syncFieldOfView"),DA=Symbol("syncCameraTarget"),LA=Symbol("syncMinCameraOrbit"),FA=Symbol("syncMaxCameraOrbit"),PA=Symbol("syncMinFieldOfView"),QA=Symbol("syncMaxFieldOfView"),WS=o=>{var e,t,n,i,s,r,a,l,c,h,u,d,f,g,p;class A extends o{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=Zg,this.cameraTarget=TS,this.fieldOfView=RS,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=PS,this.interactionPrompt=la.AUTO,this.orbitSensitivity=1,this.touchAction=NS.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=Bg,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector("#prompt"),this[n]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[s]=0,this[r]=1/0,this[a]=!1,this[l]=!1,this[c]=new ES(this[ne].camera,this[wn],this[ne]),this[h]=new va,this[u]=!1,this[d]=!1,this[f]=!1,this[g]=({source:v})=>{this[MA](),this[zt](),v===Tt.USER_INTERACTION&&(this[ua]=!0,this[ca]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:v}}))},this[p]=v=>{v.type==="pointer-change-start"?this[eo].classList.add("pointer-tumbling"):this[eo].classList.remove("pointer-tumbling")}}get inputSensitivity(){return this[ze].inputSensitivity}set inputSensitivity(v){this[ze].inputSensitivity=v}getCameraOrbit(){const{theta:v,phi:_,radius:x}=this[Sc];return{theta:v,phi:_,radius:x,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return go(this[$e].isPresenting?this[$e].arRenderer.target:this[ne].getTarget())}getFieldOfView(){return this[ze].getFieldOfView()}getMinimumFieldOfView(){return this[ze].options.minimumFieldOfView}getMaximumFieldOfView(){return this[ze].options.maximumFieldOfView}getIdealAspect(){return this[ne].idealAspect}jumpCameraToGoal(){this[Qr]=!0,this.requestUpdate(Qr,!1)}resetInteractionPrompt(){this[Pr]=0,this[Ps]=1/0,this[ua]=!1,this[Ni]=this.interactionPrompt===la.AUTO&&this.cameraControls}zoom(v){const _=new WheelEvent("wheel",{deltaY:-30*v});this[wn].dispatchEvent(_)}connectedCallback(){super.connectedCallback(),this[ze].addEventListener("change",this[ha]),this[ze].addEventListener("pointer-change-start",this[Fr]),this[ze].addEventListener("pointer-change-end",this[Fr])}disconnectedCallback(){super.disconnectedCallback(),this[ze].removeEventListener("change",this[ha]),this[ze].removeEventListener("pointer-change-start",this[Fr]),this[ze].removeEventListener("pointer-change-end",this[Fr])}updated(v){super.updated(v);const _=this[ze],x=this[ne];if(v.has("cameraControls")&&(this.cameraControls?(_.enableInteraction(),this.interactionPrompt===la.AUTO&&(this[Ni]=!0)):(_.disableInteraction(),this[ca]()),this[wn].setAttribute("aria-label",this[Zr])),v.has("disableZoom")&&(_.disableZoom=this.disableZoom),v.has("disablePan")&&(_.enablePan=!this.disablePan),v.has("disableTap")&&(_.enableTap=!this.disableTap),(v.has("interactionPrompt")||v.has("cameraControls")||v.has("src"))&&(this.interactionPrompt===la.AUTO&&this.cameraControls&&!this[ua]?this[Ni]=!0:this[ca]()),v.has("touchAction")){const E=this.touchAction;_.applyOptions({touchAction:E}),_.updateTouchActionStyle()}v.has("orbitSensitivity")&&(_.orbitSensitivity=this.orbitSensitivity),v.has("interpolationDecay")&&(_.setDamperDecayTime(this.interpolationDecay),x.setTargetDamperDecayTime(this.interpolationDecay)),this[Qr]===!0&&Promise.resolve().then(()=>{_.jumpToGoal(),x.jumpToGoal(),this[Qr]=!1})}async updateFraming(){const v=this[ne],_=v.adjustedFoV(v.framedFoVDeg);await v.updateFraming();const x=v.adjustedFoV(v.framedFoVDeg),E=this[ze].getFieldOfView()/_;this[ze].setFieldOfView(x*E),this[Nr]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(v,_,x){const E=this[wn],C=this[wc];if(C[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const M=new Array;M.push({x:qs(_.x),y:qs(_.y)});const y=[{x:M[0].x(0),y:M[0].y(0)}];x!=null&&(M.push({x:qs(x.x),y:qs(x.y)}),y.push({x:M[1].x(0),y:M[1].y(0)}));let w=performance.now();const{width:B,height:Q}=this[ne],$=P=>{for(const[q,G]of y.entries()){const{style:N}=C[q];N.transform=`translateX(${B*G.x}px) translateY(${Q*G.y}px)`,P==="pointerdown"?N.opacity="1":P==="pointerup"&&(N.opacity="0");const L={pointerId:q-5678,pointerType:"touch",target:E,clientX:B*G.x,clientY:Q*G.y,altKey:!0};E.dispatchEvent(new PointerEvent(P,L))}},k=()=>{const{changeSource:P}=this[ze];if(P!==Tt.AUTOMATIC){for(const G of this[wc])G.style.opacity="0";$("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:P}}));return}const q=Math.min(1,(performance.now()-w)/v);for(const[G,N]of y.entries())N.x=M[G].x(q),N.y=M[G].y(q);$("pointermove"),q<1?requestAnimationFrame(k):($("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:P}})),document.removeEventListener("visibilitychange",R))},R=()=>{let P=0;document.visibilityState==="hidden"?P=performance.now()-w:w=performance.now()-P};document.addEventListener("visibilitychange",R),$("pointerdown"),requestAnimationFrame(k)}[(e=Ic,t=Cc,n=wc,i=Ca,s=Pr,r=Ps,a=ua,l=Ni,c=ze,h=Sc,u=Qr,d=bc,f=Nr,RA)](v){const _=this[ne];_.framedFoVDeg=v[0]*180/Math.PI,this[ze].setFieldOfView(_.adjustedFoV(_.framedFoVDeg))}[TA](v){const _=this[ze];if(this[Nr]){const{theta:x,phi:E}=this.getCameraOrbit();v[0]=x,v[1]=E,this[Nr]=!1}_.changeSource=Tt.NONE,_.setOrbit(v[0],v[1],v[2])}[LA](v){this[ze].applyOptions({minimumAzimuthalAngle:v[0],minimumPolarAngle:v[1],minimumRadius:v[2]}),this.jumpCameraToGoal()}[FA](v){this[ze].applyOptions({maximumAzimuthalAngle:v[0],maximumPolarAngle:v[1],maximumRadius:v[2]}),this[BA](v[2]),this.jumpCameraToGoal()}[PA](v){this[ze].applyOptions({minimumFieldOfView:v[0]*180/Math.PI}),this.jumpCameraToGoal()}[QA](v){const _=this[ne].adjustedFoV(v[0]*180/Math.PI);this[ze].applyOptions({maximumFieldOfView:_}),this.jumpCameraToGoal()}[DA](v){const[_,x,E]=v;this[$e].arRenderer.isPresenting||this[ne].setTarget(_,x,E),this[ze].changeSource=Tt.NONE,this[$e].arRenderer.updateTarget()}[Tn](v,_){if(super[Tn](v,_),this[$e].isPresenting||!this[ss]())return;const x=this[ze],E=this[ne],C=performance.now();if(this[Ni]&&this.loaded&&C>this[$r]+this.interactionPromptThreshold&&(this[Ni]=!1,this[Ps]=C,this[Ic].classList.add("visible")),isFinite(this[Ps])){const M=(C-this[Ps])/wS%1,y=SS(M),w=bS(M);if(this[Cc].style.opacity=`${w}`,y!==this[Pr]){const B=y*E.width*.05,Q=(y-this[Pr])*Math.PI/16;this[Cc].style.transform=`translateX(${B}px)`,x.changeSource=Tt.AUTOMATIC,x.adjustOrbit(Q,0,0),this[Pr]=y}}x.update(v,_),E.updateTarget(_)&&this[ha]({type:"change",source:x.changeSource})}[ca](){this[Ni]=!1,this[Ic].classList.remove("visible"),this[Ps]=1/0}[BA](v){const _=Math.max(this[ne].boundingSphere.radius,v),x=0,E=2*_;this[ze].updateNearFar(x,E)}[MA](){const{theta:v,phi:_}=this[ze].getCameraSpherical(this[Sc]),x=(4+Math.floor((v%HS+VS)/tm))%4,E=Math.floor(_/zS),C=LS[x],M=FS[E];this[xh](`View from stage ${M}${C}`)}get[Zr](){return super[Zr]+(this.cameraControls?QS:"")}async[po](v){const _=this[ze],x=this[ne],E=x.adjustedFoV(x.framedFoVDeg);super[po](v);const C=x.adjustedFoV(x.framedFoVDeg)/E,M=_.getFieldOfView()*(isFinite(C)?C:1);_.updateAspect(this[ne].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[ze].setFieldOfView(M),this.jumpCameraToGoal()}[bi](){super[bi](),this[bc]?this[Nr]=!0:this[bc]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return g=ha,p=Fr,xt([xe({type:Boolean,attribute:"camera-controls"})],A.prototype,"cameraControls",void 0),xt([mi({intrinsics:em,observeEffects:!0,updateHandler:TA}),xe({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],A.prototype,"cameraOrbit",void 0),xt([mi({intrinsics:GS,observeEffects:!0,updateHandler:DA}),xe({type:String,attribute:"camera-target",hasChanged:()=>!0})],A.prototype,"cameraTarget",void 0),xt([mi({intrinsics:bA,observeEffects:!0,updateHandler:RA}),xe({type:String,attribute:"field-of-view",hasChanged:()=>!0})],A.prototype,"fieldOfView",void 0),xt([mi({intrinsics:OS,updateHandler:LA}),xe({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],A.prototype,"minCameraOrbit",void 0),xt([mi({intrinsics:kS,updateHandler:FA}),xe({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],A.prototype,"maxCameraOrbit",void 0),xt([mi({intrinsics:US,updateHandler:PA}),xe({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],A.prototype,"minFieldOfView",void 0),xt([mi({intrinsics:bA,updateHandler:QA}),xe({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],A.prototype,"maxFieldOfView",void 0),xt([xe({type:Number,attribute:"interaction-prompt-threshold"})],A.prototype,"interactionPromptThreshold",void 0),xt([xe({type:String,attribute:"interaction-prompt"})],A.prototype,"interactionPrompt",void 0),xt([xe({type:Number,attribute:"orbit-sensitivity"})],A.prototype,"orbitSensitivity",void 0),xt([xe({type:String,attribute:"touch-action"})],A.prototype,"touchAction",void 0),xt([xe({type:Boolean,attribute:"disable-zoom"})],A.prototype,"disableZoom",void 0),xt([xe({type:Boolean,attribute:"disable-pan"})],A.prototype,"disablePan",void 0),xt([xe({type:Boolean,attribute:"disable-tap"})],A.prototype,"disableTap",void 0),xt([xe({type:Number,attribute:"interpolation-decay"})],A.prototype,"interpolationDecay",void 0),A};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const qS=100,$S="https://www.gstatic.com/draco/versioned/decoders/1.4.1/",YS="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",Bc={AUTO:"auto",MANUAL:"manual"},NA={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},Ui=Symbol("defaultProgressBarElement"),Tc=Symbol("posterContainerElement"),Qs=Symbol("defaultPosterElement"),Ur=Symbol("shouldDismissPoster"),Rc=Symbol("hidePoster"),da=Symbol("modelIsRevealed"),Dc=Symbol("updateProgressBar"),XS=Symbol("ariaLabelCallToAction"),Lc=Symbol("onProgress"),KS=o=>{var e,t,n,i,s,r,a,l;class c extends o{constructor(...u){super(...u),this.poster=null,this.reveal=Bc.AUTO,this.loading=NA.AUTO,this[e]=!1,this[t]=!1,this[n]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[s]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[r]=this[Qs].getAttribute("aria-label"),this[a]=BI(p=>{const A=this[Ui].parentNode;requestAnimationFrame(()=>{this[Ui].style.transform=`scaleX(${p})`,p===0&&(A.removeChild(this[Ui]),A.appendChild(this[Ui])),p===1?this[Ui].classList.add("hide"):this[Ui].classList.remove("hide")})},qS),this[l]=p=>{const A=p.detail.totalProgress;A===1&&(this[Dc].flush(),this.loaded&&(this[Ur]||this.reveal===Bc.AUTO)&&this[Rc]()),this[Dc](A),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:A}}))};const d=self.ModelViewerElement||{},f=d.dracoDecoderLocation||$S;ut.setDRACODecoderLocation(f);const g=d.ktx2TranscoderLocation||YS;ut.setKTX2TranscoderLocation(g),d.meshoptDecoderLocation&&ut.setMeshoptDecoderLocation(d.meshoptDecoderLocation)}static set dracoDecoderLocation(u){ut.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return ut.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){ut.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return ut.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){ut.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return ut.getMeshoptDecoderLocation()}static mapURLs(u){ti.singleton.loader[Hi].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[Rc]():(this[Ur]=!0,this[Ks]())}showPoster(){const u=this[Tc];if(u.classList.contains("show"))return;u.classList.add("show"),this[wn].classList.remove("show");const d=this[Qs];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const f=this.modelIsVisible;this[da]=!1,this[Oa](f)}getDimensions(){return go(this[ne].size)}getBoundingBoxCenter(){return go(this[ne].boundingBox.getCenter(new T))}connectedCallback(){super.connectedCallback(),this.showPoster(),this[ar].addEventListener("progress",this[Lc])}disconnectedCallback(){super.disconnectedCallback(),this[ar].removeEventListener("progress",this[Lc])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Qs].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Qs].setAttribute("aria-label",this[vh]),(u.has("reveal")||u.has("loading"))&&this[Ks]()}[(e=da,t=Ur,n=Tc,i=Qs,s=Ui,r=XS,a=Dc,l=Lc,lr)](){return!!this.src&&(this[Ur]||this.loading===NA.EAGER||this.reveal===Bc.AUTO&&this[Wi])}[Rc](){this[Ur]=!1;const u=this[Tc];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[wn].classList.add("show");const d=this.modelIsVisible;this[da]=!0,this[Oa](d);const f=this.getRootNode();f&&f.activeElement===this&&this[wn].focus();const g=this[Qs];g.setAttribute("aria-hidden","true"),g.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[ss](){return super[ss]()&&this[da]}}return Mc([xe({type:String})],c.prototype,"poster",void 0),Mc([xe({type:String})],c.prototype,"reveal",void 0),Mc([xe({type:String})],c.prototype,"loading",void 0),c};class su{constructor(){this.pluginCallbacks=[],this.register(function(e){return new rb(e)}),this.register(function(e){return new ob(e)}),this.register(function(e){return new ab(e)}),this.register(function(e){return new hb(e)}),this.register(function(e){return new ub(e)}),this.register(function(e){return new lb(e)}),this.register(function(e){return new cb(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const s=new sb,r=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)r.push(this.pluginCallbacks[a](s));s.setPlugins(r),s.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,i,s,t)})}}const Ve={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123,FLOAT:5126,UNSIGNED_INT:5125,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Yt={};Yt[dt]=Ve.NEAREST;Yt[Ta]=Ve.NEAREST_MIPMAP_NEAREST;Yt[Ra]=Ve.NEAREST_MIPMAP_LINEAR;Yt[Ze]=Ve.LINEAR;Yt[Rh]=Ve.LINEAR_MIPMAP_NEAREST;Yt[si]=Ve.LINEAR_MIPMAP_LINEAR;Yt[Rt]=Ve.CLAMP_TO_EDGE;Yt[ii]=Ve.REPEAT;Yt[so]=Ve.MIRRORED_REPEAT;const UA={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},OA=12,JS=1179937895,jS=2,kA=8,ZS=1313821514,eb=5130562;function Xr(o,e){return o.length===e.length&&o.every(function(t,n){return t===e[n]})}function tb(o){return new TextEncoder().encode(o).buffer}function nb(o){return Xr(o.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function ib(o,e,t){const n={min:new Array(o.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(o.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let s=0;s<o.itemSize;s++){let r;o.itemSize>4?r=o.array[i*o.itemSize+s]:s===0?r=o.getX(i):s===1?r=o.getY(i):s===2?r=o.getZ(i):s===3&&(r=o.getW(i)),n.min[s]=Math.min(n.min[s],r),n.max[s]=Math.max(n.max[s],r)}return n}function nm(o){return Math.ceil(o/4)*4}function Fc(o,e=0){const t=nm(o.byteLength);if(t!==o.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(o)),e!==0)for(let i=o.byteLength;i<t;i++)n[i]=e;return n.buffer}return o}function GA(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function zA(o,e){if(o.toBlob!==void 0)return new Promise(n=>o.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),o.convertToBlob({type:e,quality:t})}class sb{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,truncateDrawRange:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,s=i.buffers,r=i.json;n=i.options;const a=i.extensionsUsed,l=new Blob(s,{type:"application/octet-stream"}),c=Object.keys(a);if(c.length>0&&(r.extensionsUsed=c),r.buffers&&r.buffers.length>0&&(r.buffers[0].byteLength=l.size),n.binary===!0){const h=new FileReader;h.readAsArrayBuffer(l),h.onloadend=function(){const u=Fc(h.result),d=new DataView(new ArrayBuffer(kA));d.setUint32(0,u.byteLength,!0),d.setUint32(4,eb,!0);const f=Fc(tb(JSON.stringify(r)),32),g=new DataView(new ArrayBuffer(kA));g.setUint32(0,f.byteLength,!0),g.setUint32(4,ZS,!0);const p=new ArrayBuffer(OA),A=new DataView(p);A.setUint32(0,JS,!0),A.setUint32(4,jS,!0);const m=OA+g.byteLength+f.byteLength+d.byteLength+u.byteLength;A.setUint32(8,m,!0);const v=new Blob([p,g,f,d,u],{type:"application/octet-stream"}),_=new FileReader;_.readAsArrayBuffer(v),_.onloadend=function(){t(_.result)}}}else if(r.buffers&&r.buffers.length>0){const h=new FileReader;h.readAsDataURL(l),h.onloadend=function(){const u=h.result;r.buffers[0].uri=u,t(r)}}else t(r)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const r in s.gltfExtensions)t.extensions[r]=s.gltfExtensions[r],i[r]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new T;for(let i=0,s=e.count;i<s;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new T;for(let s=0,r=n.count;s<r;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.encoding===Me?function(p){return p<.04045?p*.0773993808:Math.pow(p*.9478672986+.0521327014,2.4)}:function(p){return p}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const i=e==null?void 0:e.image,s=t==null?void 0:t.image,r=Math.max((i==null?void 0:i.width)||0,(s==null?void 0:s.width)||0),a=Math.max((i==null?void 0:i.height)||0,(s==null?void 0:s.height)||0),l=GA();l.width=r,l.height=a;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,r,a);const h=c.getImageData(0,0,r,a);if(i){c.drawImage(i,0,0,r,a);const f=n(e),g=c.getImageData(0,0,r,a).data;for(let p=2;p<g.length;p+=4)h.data[p]=f(g[p]/256)*256}if(s){c.drawImage(s,0,0,r,a);const f=n(t),g=c.getImageData(0,0,r,a).data;for(let p=1;p<g.length;p+=4)h.data[p]=f(g[p]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new Nh(l),d.encoding=Ct,d}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,s){const r=this.json;r.bufferViews||(r.bufferViews=[]);let a;t===Ve.UNSIGNED_BYTE?a=1:t===Ve.UNSIGNED_SHORT?a=2:a=4;const l=nm(i*e.itemSize*a),c=new DataView(new ArrayBuffer(l));let h=0;for(let f=n;f<n+i;f++)for(let g=0;g<e.itemSize;g++){let p;e.itemSize>4?p=e.array[f*e.itemSize+g]:g===0?p=e.getX(f):g===1?p=e.getY(f):g===2?p=e.getZ(f):g===3&&(p=e.getW(f)),t===Ve.FLOAT?c.setFloat32(h,p,!0):t===Ve.UNSIGNED_INT?c.setUint32(h,p,!0):t===Ve.UNSIGNED_SHORT?c.setUint16(h,p,!0):t===Ve.UNSIGNED_BYTE&&c.setUint8(h,p),h+=a}const u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return s!==void 0&&(u.target=s),s===Ve.ARRAY_BUFFER&&(u.byteStride=e.itemSize*a),this.byteOffset+=l,r.bufferViews.push(u),{id:r.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const r=Fc(s.result),a={buffer:t.processBuffer(r),byteOffset:t.byteOffset,byteLength:r.byteLength};t.byteOffset+=r.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const s=this.options,r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"};let l;if(e.array.constructor===Float32Array)l=Ve.FLOAT;else if(e.array.constructor===Uint32Array)l=Ve.UNSIGNED_INT;else if(e.array.constructor===Uint16Array)l=Ve.UNSIGNED_SHORT;else if(e.array.constructor===Uint8Array)l=Ve.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");if(n===void 0&&(n=0),i===void 0&&(i=e.count),s.truncateDrawRange&&t!==void 0&&t.index===null){const f=n+i,g=t.drawRange.count===1/0?e.count:t.drawRange.start+t.drawRange.count;n=Math.max(n,t.drawRange.start),i=Math.min(f,g)-n,i<0&&(i=0)}if(i===0)return null;const c=ib(e,n,i);let h;t!==void 0&&(h=e===t.index?Ve.ELEMENT_ARRAY_BUFFER:Ve.ARRAY_BUFFER);const u=this.processBufferView(e,l,n,i,h),d={bufferView:u.id,byteOffset:u.byteOffset,componentType:l,count:i,max:c.max,min:c.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,i="image/png"){const s=this,r=s.cache,a=s.json,l=s.options,c=s.pending;r.images.has(e)||r.images.set(e,{});const h=r.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const d={mimeType:i},f=GA();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const g=f.getContext("2d");if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==at&&console.error("GLTFExporter: Only RGBAFormat is supported."),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const A=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<A.length;m+=4)A[m+0]=e.data[m+0],A[m+1]=e.data[m+1],A[m+2]=e.data[m+2],A[m+3]=e.data[m+3];g.putImageData(new ImageData(A,e.width,e.height),0,0)}else g.drawImage(e,0,0,f.width,f.height);l.binary===!0?c.push(zA(f,i).then(A=>s.processBufferViewImage(A)).then(A=>{d.bufferView=A})):f.toDataURL!==void 0?d.uri=f.toDataURL(i):c.push(zA(f,i).then(A=>new FileReader().readAsDataURL(A)).then(A=>{d.uri=A}));const p=a.images.push(d)-1;return h[u]=p,p}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Yt[e.magFilter],minFilter:Yt[e.minFilter],wrapS:Yt[e.wrapS],wrapT:Yt[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.cache,n=this.json;if(t.textures.has(e))return t.textures.get(e);n.textures||(n.textures=[]);let i=e.userData.mimeType;i==="image/webp"&&(i="image/png");const s={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,i)};e.name&&(s.name=e.name),this._invokeAll(function(a){a.writeTexture&&a.writeTexture(e,s)});const r=n.textures.push(s)-1;return t.textures.set(e,r),r}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Xr(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a)};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map)};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive.clone().multiplyScalar(e.emissiveIntensity),l=Math.max(a.r,a.g,a.b);if(l>1&&(a.multiplyScalar(1/l),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),l>0&&(i.emissiveFactor=a.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const a={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Gt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,i)});const r=n.materials.push(i)-1;return t.materials.set(e,r),r}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,x=e.material.length;_<x;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);const s=i.join(":");if(t.meshes.has(s))return t.meshes.get(s);const r=e.geometry;let a;e.isLineSegments?a=Ve.LINES:e.isLineLoop?a=Ve.LINE_LOOP:e.isLine?a=Ve.LINE_STRIP:e.isPoints?a=Ve.POINTS:a=e.material.wireframe?Ve.LINES:Ve.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=r.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),r.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in r.attributes){if(_.slice(0,5)==="morph")continue;const x=r.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(x))){c[_]=t.attributes.get(this.getUID(x));continue}g=null;const C=x.array;_==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new lt(new Uint16Array(C),x.itemSize,x.normalized));const M=this.processAccessor(g||x,r);M!==null&&(c[_]=M,t.attributes.set(this.getUID(x),M))}if(f!==void 0&&r.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const _=[],x=[],E={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)E[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const M={};let y=!1;for(const w in r.morphAttributes){if(w!=="position"&&w!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const B=r.morphAttributes[w][C],Q=w.toUpperCase(),$=r.attributes[w];if(t.attributes.has(this.getUID(B,!0))){M[Q]=t.attributes.get(this.getUID(B,!0));continue}const k=B.clone();if(!r.morphTargetsRelative)for(let R=0,P=B.count;R<P;R++)k.setXYZ(R,B.getX(R)-$.getX(R),B.getY(R)-$.getY(R),B.getZ(R)-$.getZ(R));M[Q]=this.processAccessor(k,r),t.attributes.set(this.getUID($,!0),M[Q])}u.push(M),_.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&x.push(E[C])}l.weights=_,x.length>0&&(l.extras={},l.extras.targetNames=x)}const p=Array.isArray(e.material);if(p&&r.groups.length===0)return null;const A=p?e.material:[e.material],m=p?r.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,x=m.length;_<x;_++){const E={mode:a,attributes:c};if(this.serializeUserData(r,E),u.length>0&&(E.targets=u),r.index!==null){let M=this.getUID(r.index);(m[_].start!==void 0||m[_].count!==void 0)&&(M+=":"+m[_].start+":"+m[_].count),t.attributes.has(M)?E.indices=t.attributes.get(M):(E.indices=this.processAccessor(r.index,r,m[_].start,m[_].count),t.attributes.set(M,E.indices)),E.indices===null&&delete E.indices}const C=this.processMaterial(A[m[_].materialIndex]);C!==null&&(E.material=C),h.push(E)}l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(_){_.writeMesh&&_.writeMesh(e,l)});const v=n.meshes.push(l)-1;return t.meshes.set(s,v),v}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Rp.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=su.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,r=[],a=[];for(let l=0;l<s.length;++l){const c=s[l],h=De.parseTrackName(c.name);let u=De.findNode(t,h.nodeName);const d=UA[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const f=1;let g=c.values.length/c.times.length;d===UA.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let p;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",g/=3):c.getInterpolation()===er?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new lt(c.times,f)),output:this.processAccessor(new lt(c.values,g)),interpolation:p}),r.push({sampler:a.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:r}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const r=e.skeleton.bones[0];if(r===void 0)return null;const a=[],l=new Float32Array(s.bones.length*16),c=new Re;for(let u=0;u<s.bones.length;++u)a.push(n.get(s.bones[u])),c.copy(s.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new lt(l,16)),joints:a,skeleton:n.get(r)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Xr(a,[0,0,0,1])||(s.rotation=a),Xr(l,[0,0,0])||(s.translation=l),Xr(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),nb(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(s.mesh=a)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&a.push(u)}}a.length>0&&(s.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,s)});const r=t.nodes.push(s)-1;return i.set(e,r),r}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const s=[];for(let r=0,a=e.children.length;r<a;r++){const l=e.children[r];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}processObjects(e){const t=new Ci;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Ci?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class rb{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,s=n.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,r.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const a=i.extensions[this.name].lights;a.push(r),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class ob{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class ab{constructor(e){this.writer=e,this.name="KHR_materials_pbrSpecularGlossiness"}writeMaterial(e,t){if(!e.isGLTFSpecularGlossinessMaterial)return;const n=this.writer,i=n.extensionsUsed,s={};t.pbrMetallicRoughness.baseColorFactor&&(s.diffuseFactor=t.pbrMetallicRoughness.baseColorFactor);const r=[1,1,1];if(e.specular.toArray(r,0),s.specularFactor=r,s.glossinessFactor=e.glossiness,t.pbrMetallicRoughness.baseColorTexture&&(s.diffuseTexture=t.pbrMetallicRoughness.baseColorTexture),e.specularMap){const a={index:n.processTexture(e.specularMap)};n.applyTextureTransform(a,e.specularMap),s.specularGlossinessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class lb{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const r={index:n.processTexture(e.clearcoatMap)};n.applyTextureTransform(r,e.clearcoatMap),s.clearcoatTexture=r}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const r={index:n.processTexture(e.clearcoatRoughnessMap)};n.applyTextureTransform(r,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=r}if(e.clearcoatNormalMap){const r={index:n.processTexture(e.clearcoatNormalMap)};n.applyTextureTransform(r,e.clearcoatNormalMap),s.clearcoatNormalTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class cb{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const r={index:n.processTexture(e.iridescenceMap)};n.applyTextureTransform(r,e.iridescenceMap),s.iridescenceTexture=r}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const r={index:n.processTexture(e.iridescenceThicknessMap)};n.applyTextureTransform(r,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class hb{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const r={index:n.processTexture(e.transmissionMap)};n.applyTextureTransform(r,e.transmissionMap),s.transmissionTexture=r}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class ub{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const r={index:n.processTexture(e.thicknessMap)};n.applyTextureTransform(r,e.thicknessMap),s.thicknessTexture=r}s.attenuationDistance=e.attenuationDistance,s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}su.Utils={insertKeyframe:function(o,e){const n=o.getValueSize(),i=new o.TimeBufferType(o.times.length+1),s=new o.ValueBufferType(o.values.length+n),r=o.createInterpolant(new o.ValueBufferType(n));let a;if(o.times.length===0){i[0]=e;for(let l=0;l<n;l++)s[l]=0;a=0}else if(e<o.times[0]){if(Math.abs(o.times[0]-e)<.001)return 0;i[0]=e,i.set(o.times,1),s.set(r.evaluate(e),0),s.set(o.values,n),a=0}else if(e>o.times[o.times.length-1]){if(Math.abs(o.times[o.times.length-1]-e)<.001)return o.times.length-1;i[i.length-1]=e,i.set(o.times,0),s.set(o.values,0),s.set(r.evaluate(e),o.values.length),a=i.length-1}else for(let l=0;l<o.times.length;l++){if(Math.abs(o.times[l]-e)<.001)return l;if(o.times[l]<e&&o.times[l+1]>e){i.set(o.times.slice(0,l+1),0),i[l+1]=e,i.set(o.times.slice(l+1),l+2),s.set(o.values.slice(0,(l+1)*n),0),s.set(r.evaluate(e),(l+1)*n),s.set(o.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return o.times=i,o.values=s,a},mergeMorphTargetTracks:function(o,e){const t=[],n={},i=o.tracks;for(let s=0;s<i.length;++s){let r=i[s];const a=De.parseTrackName(r.name),l=De.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(r);continue}if(r.createInterpolant!==r.InterpolantFactoryMethodDiscrete&&r.createInterpolant!==r.InterpolantFactoryMethodLinear){if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),r=r.clone(),r.setInterpolation(ts)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=r.clone();const f=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)f[g*c+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,t.push(u);continue}const d=r.createInterpolant(new r.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<r.times.length;f++){const g=this.insertKeyframe(u,r.times[f]);u.values[g*c+h]=r.values[f]}}return o.tracks=t,o}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=o=>o.material!==void 0&&o.userData&&o.userData.variantMaterials&&!!Array.from(o.userData.variantMaterials.values()).filter(e=>wa(e.material)),wa=o=>o&&o.isMaterial&&!Array.isArray(o);class db{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(i=>{if(!VA(i))return;const s=i.userData.variantMaterials,r=i.userData.variantData;for(const[a,l]of r){const c=s.get(l.index);wa(c.material)&&t.add(a)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!VA(e))return;const n=e.userData,i=n.variantMaterials,s=n.variantData,r=new Map,a=new Map,l=Array.from(s.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())a.set(d.index,u);for(const u of s.values()){const d=i.get(u.index).material;if(!wa(d))continue;const f=this.writer.processMaterial(d);r.has(f)||r.set(f,{material:f,variants:[]}),r.get(f).variants.push(a.get(u.index))}const c=Array.from(r.values()).map(u=>u.variants.sort((d,f)=>d-f)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=wa(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of t.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=Symbol("correlatedObjects"),Oe=Symbol("sourceObject"),In=Symbol("onUpdate");class xo{constructor(e,t,n=null){this[In]=e,this[Oe]=t,this[rt]=n}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new un,fb=new as(2,2);let Ab=0;const Sh=Symbol("threeTexture");class pb extends xo{get[Sh](){var e;return console.assert(this[rt]!=null&&this[rt].size>0,"Image correlated object is undefined"),(e=this[rt])===null||e===void 0?void 0:e.values().next().value}constructor(e,t,n){n=n!=null?n:{name:t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image",uri:t&&t.image&&t.image.src?t.image.src:"adhoc_image"+Ab++},super(e,n,new Set(t?[t]:[]))}get name(){return this[Oe].name||""}get uri(){return this[Oe].uri}get bufferView(){return this[Oe].bufferView}get type(){return this.uri!=null?"external":"embedded"}set name(e){this[Oe].name=e}async createThumbnail(e,t){const n=new Ci;HA.map=this[Sh];const i=new me(fb,HA);n.add(i);const s=new hr(-1,1,1,-1,0,1),{threeRenderer:r}=ti.singleton,a=new An(e,t);r.setRenderTarget(a),r.render(n,s),r.setRenderTarget(null);const l=new Uint8Array(e*t*4);r.readRenderTargetPixels(a,0,0,e,t,l),Zt.width=e,Zt.height=t;const c=Zt.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{Zt.toBlob(f=>{if(!f)return d("Failed to capture thumbnail.");u(URL.createObjectURL(f))},"image/png")})}}var en;(function(o){o[o.Nearest=9728]="Nearest",o[o.Linear=9729]="Linear",o[o.NearestMipmapNearest=9984]="NearestMipmapNearest",o[o.LinearMipmapNearest=9985]="LinearMipmapNearest",o[o.NearestMipmapLinear=9986]="NearestMipmapLinear",o[o.LinearMipmapLinear=9987]="LinearMipmapLinear"})(en||(en={}));var es;(function(o){o[o.ClampToEdge=33071]="ClampToEdge",o[o.MirroredRepeat=33648]="MirroredRepeat",o[o.Repeat=10497]="Repeat"})(es||(es={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=(()=>{const o=[en.Nearest,en.Linear,en.NearestMipmapNearest,en.LinearMipmapLinear,en.NearestMipmapLinear,en.LinearMipmapLinear];return e=>o.indexOf(e)>-1})(),mb=(()=>{const o=[en.Nearest,en.Linear];return e=>o.indexOf(e)>-1})(),_b=(()=>{const o=[es.ClampToEdge,es.MirroredRepeat,es.Repeat];return e=>o.indexOf(e)>-1})(),vb=(o,e)=>{switch(o){case"minFilter":return gb(e);case"magFilter":return mb(e);case"wrapS":case"wrapT":return _b(e);default:throw new Error(`Cannot configure property "${o}" on Sampler`)}},WA=Symbol("threeTextures"),Or=Symbol("setProperty"),Ns=Symbol("sourceSampler");class xb extends xo{get[WA](){return console.assert(this[rt]!=null&&this[rt].size>0,"Sampler correlated object is undefined"),this[rt]}get[Ns](){return console.assert(this[Oe]!=null,"Sampler source is undefined"),this[Oe]}constructor(e,t,n){n=n!=null?n:{},n.minFilter==null&&(n.minFilter=t?t.minFilter:en.LinearMipmapLinear),n.magFilter==null&&(n.magFilter=t?t.magFilter:en.Linear),n.wrapS==null&&(n.wrapS=t?t.wrapS:es.Repeat),n.wrapT==null&&(n.wrapT=t?t.wrapT:es.Repeat),super(e,n,new Set(t?[t]:[]))}get name(){return this[Oe].name||""}get minFilter(){return this[Ns].minFilter}get magFilter(){return this[Ns].magFilter}get wrapS(){return this[Ns].wrapS}get wrapT(){return this[Ns].wrapT}setMinFilter(e){this[Or]("minFilter",e)}setMagFilter(e){this[Or]("magFilter",e)}setWrapS(e){this[Or]("wrapS",e)}setWrapT(e){this[Or]("wrapT",e)}[Or](e,t){const n=this[Ns];if(n!=null){if(vb(e,t)){n[e]=t;for(const i of this[WA])i[e]=t,i.needsUpdate=!0}this[In]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=Symbol("image"),$A=Symbol("sampler");class im extends xo{constructor(e,t,n=null,i=null,s=null){super(e,n||{},new Set(t?[t]:[])),this[$A]=new xb(e,t,i),this[qA]=new pb(e,t,s)}get name(){return this[Oe].name||""}set name(e){this[Oe].name=e}get sampler(){return this[$A]}get source(){return this[qA]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sm,rm;const Sa=Symbol("texture"),qi=Symbol("transform"),Pc=Symbol("materials"),YA=Symbol("usage");var nn;(function(o){o[o.Base=0]="Base",o[o.MetallicRoughness=1]="MetallicRoughness",o[o.Normal=2]="Normal",o[o.Occlusion=3]="Occlusion",o[o.Emissive=4]="Emissive"})(nn||(nn={}));class io{constructor(e,t,n,i,s,r){if(this[sm]=null,this[rm]={rotation:0,scale:new Se(1,1),offset:new Se(0,0)},r&&n){const a=s.textures?s.textures[r.index]:null,l=a&&s.samplers?s.samplers[a.sampler]:null,c=a&&s.images?s.images[a.source]:null;this[qi].rotation=n.rotation,this[qi].scale.copy(n.repeat),this[qi].offset.copy(n.offset),this[Sa]=new im(e,n,a,l,c)}this.onUpdate=e,this[Pc]=i,this[YA]=t}get texture(){return this[Sa]}setTexture(e){const t=e!=null?e.source[Sh]:null;let n=Me;if(this[Sa]=e,this[Pc])for(const i of this[Pc]){switch(this[YA]){case nn.Base:i.map=t;break;case nn.MetallicRoughness:n=Ct,i.metalnessMap=t,i.roughnessMap=t;break;case nn.Normal:n=Ct,i.normalMap=t;break;case nn.Occlusion:n=Ct,i.aoMap=t;break;case nn.Emissive:i.emissiveMap=t;break}i.needsUpdate=!0}t&&(t.encoding=n,t.rotation=this[qi].rotation,t.repeat=this[qi].scale,t.offset=this[qi].offset),this.onUpdate()}}sm=Sa,rm=qi;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=Symbol("threeMaterials"),XA=Symbol("baseColorTexture"),KA=Symbol("metallicRoughnessTexture");class yb extends xo{constructor(e,t,n,i){super(e,n,i),n.baseColorFactor==null&&(n.baseColorFactor=[1,1,1,1]),n.roughnessFactor==null&&(n.roughnessFactor=1),n.metallicFactor==null&&(n.metallicFactor=1);const{baseColorTexture:s,metallicRoughnessTexture:r}=n,{map:a,metalnessMap:l}=i.values().next().value;this[XA]=new io(e,nn.Base,a,i,t,s||null),this[KA]=new io(e,nn.MetallicRoughness,l,i,t,r||null)}get[fa](){return this[rt]}get baseColorFactor(){return this[Oe].baseColorFactor}get metallicFactor(){return this[Oe].metallicFactor}get roughnessFactor(){return this[Oe].roughnessFactor}get baseColorTexture(){return this[XA]}get metallicRoughnessTexture(){return this[KA]}setBaseColorFactor(e){for(const n of this[fa])n.color.fromArray(e),n.opacity=e[3];const t=this[Oe];t.baseColorFactor=e,this[In]()}setMetallicFactor(e){for(const n of this[fa])n.metalness=e;const t=this[Oe];t.metallicFactor=e,this[In]()}setRoughnessFactor(e){for(const n of this[fa])n.roughness=e;const t=this[Oe];t.roughnessFactor=e,this[In]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var JA;const jA=Symbol("pbrMetallicRoughness"),ZA=Symbol("normalTexture"),ep=Symbol("occlusionTexture"),tp=Symbol("emissiveTexture"),Eb=Symbol("backingThreeMaterial"),Qc=Symbol("applyAlphaCutoff"),Oi=Symbol("lazyLoadGLTFInfo"),Nc=Symbol("initialize"),bh=Symbol("getLoadedMaterial"),Ot=Symbol("ensureMaterialIsLoaded"),np=Symbol("gltfIndex"),Kr=Symbol("setActive"),ba=Symbol("variantIndices"),Uc=Symbol("isActive"),Ma=Symbol("variantSet"),ip=Symbol("modelVariants");class Oc extends xo{constructor(e,t,n,i,s,r,a,l=void 0){super(e,n,a),this[JA]=new Set,this[np]=i,this[Uc]=s,this[ip]=r,l==null?this[Nc](t):this[Oi]=l}get[(JA=Ma,Eb)](){return this[rt].values().next().value}[Nc](e){const t=this[In],n=this[Oe],i=this[rt];n.extensions&&n.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${n.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          currently supported for rendering, but not for our scene-graph API,
          nor for auto-generation of USDZ for Quick Look.`),n.pbrMetallicRoughness==null&&(n.pbrMetallicRoughness={}),this[jA]=new yb(t,e,n.pbrMetallicRoughness,i),n.emissiveFactor==null&&(n.emissiveFactor=[0,0,0]),n.doubleSided==null&&(n.doubleSided=!1),n.alphaMode==null&&(n.alphaMode="OPAQUE"),n.alphaCutoff==null&&(n.alphaCutoff=.5);const{normalTexture:s,occlusionTexture:r,emissiveTexture:a}=n,{normalMap:l,aoMap:c,emissiveMap:h}=i.values().next().value;this[ZA]=new io(t,nn.Normal,l,i,e,s||null),this[ep]=new io(t,nn.Occlusion,c,i,e,r||null),this[tp]=new io(t,nn.Emissive,h,i,e,a||null)}async[bh](){if(this[Oi]!=null){const{set:e,material:t}=await this[Oi].doLazyLoad();return this[rt]=e,this[Nc](this[Oi].gltf),this[Oi]=void 0,this.ensureLoaded=async()=>{},t}return this[rt].values().next().value}[Ot](){if(this[Oi]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[bh]()}get isLoaded(){return this[Oi]==null}get isActive(){return this[Uc]}[Kr](e){this[Uc]=e}get name(){return this[Oe].name}set name(e){const t=this[Oe];if(t!=null&&(t.name=e),this[rt]!=null)for(const n of this[rt])n.name=e}get pbrMetallicRoughness(){return this[Ot](),this[jA]}get normalTexture(){return this[Ot](),this[ZA]}get occlusionTexture(){return this[Ot](),this[ep]}get emissiveTexture(){return this[Ot](),this[tp]}get emissiveFactor(){return this[Ot](),this[Oe].emissiveFactor}get index(){return this[np]}[ba](){return this[Ma]}hasVariant(e){const t=this[ip].get(e);return t!=null&&this[Ma].has(t.index)}setEmissiveFactor(e){this[Ot]();for(const t of this[rt])t.emissive.fromArray(e);this[Oe].emissiveFactor=e,this[In]()}[Qc](){this[Ot]();const e=this[Oe];for(const t of this[rt])this[Oe].alphaMode==="MASK"?t.alphaTest=e.alphaCutoff:t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(e){this[Ot](),this[Oe].alphaCutoff=e,this[Qc](),this[In]()}getAlphaCutoff(){return this[Ot](),this[Oe].alphaCutoff}setDoubleSided(e){this[Ot]();for(const t of this[rt])t.side=e?Gt:ni,t.needsUpdate=!0;this[Oe].doubleSided=e,this[In]()}getDoubleSided(){return this[Ot](),this[Oe].doubleSided}setAlphaMode(e){this[Ot]();const t=(n,i)=>{n.transparent=i,n.depthWrite=!i};this[Oe].alphaMode=e;for(const n of this[rt])t(n,e==="BLEND"),this[Qc](),n.needsUpdate=!0;this[In]()}getAlphaMode(){return this[Ot](),this[Oe].alphaMode}}var om,am,lm;const _i=Symbol("materials"),Xn=Symbol("variantToMaterialMap"),qn=Symbol("modelVariants"),sp=Symbol("mesh"),cm=Symbol("children"),rp=Symbol("initialMaterialIdx"),kc=Symbol("activeMaterialIdx");class hm{constructor(e){this.name="",this[om]=new Array,this.name=e}}om=cm;class op extends hm{constructor(e,t,n,i){super(e.name),this[am]=new Map,this[lm]=new Map,this[sp]=e;const{gltf:s,threeGLTF:r,threeObjectMap:a}=i;this[qn]=n,this.mesh.userData.variantData=n;const l=a.get(e.material);l.materials!=null?this[rp]=this[kc]=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const c=e.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const d=((s.meshes||[])[c.meshes].primitives||[])[c.primitives];if(d==null){console.error("Mesh primitive definition is missing.");return}if(d.material!=null)this[_i].set(d.material,t[d.material]);else{const f=t.findIndex(g=>g.name==="Default");f>=0?this[_i].set(f,t[f]):console.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions.KHR_materials_variants){const f=d.extensions.KHR_materials_variants,p=r.parser.json.extensions.KHR_materials_variants.variants;for(const A of f.mappings){const m=t[A.material];this[_i].set(A.material,m);for(const v of A.variants){const{name:_}=p[v];this[Xn].set(v,m),m[ba]().add(v),n.has(_)||n.set(_,{name:_,index:v})}}}}get mesh(){return this[sp]}async setActiveMaterial(e){const t=this[_i].get(e);return t!=null&&(this.mesh.material=await t[bh](),this[kc]=e),this.mesh.material}getActiveMaterial(){return this[_i].get(this[kc])}getMaterial(e){return this[_i].get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this[rp]);if(this[Xn]!=null&&this[qn].has(e)){const t=this[qn].get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this[Xn]!=null&&e!=null){const t=this[Xn].get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this[Xn]!=null)for(const e of this[Xn].keys()){if(this.mesh.userData.variantMaterials.get(e).material!=null)continue;const t=await this.enableVariantHelper(e);t!=null&&(this.mesh.userData.variantMaterials.get(e).material=t)}}get variantInfo(){return this[Xn]}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this[qn].has(t)||this[qn].set(t,{name:t,index:this[qn].size});const i=this[qn].get(t).index;return e[ba]().add(i),this[Xn].set(i,e),this[_i].set(e.index,e),this.updateVariantUserData(i,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[ba]().add(e),this.mesh.userData.variantData=this[qn],this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[rt].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this[qn].get(e);return t!=null&&this.variantInfo.has(t.index)?(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1):!0}}am=_i,lm=Xn;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ap,lp,cp,hp,up,dp;const ki=Symbol("materials"),Gc=Symbol("hierarchy"),fp=Symbol("roots"),$n=Symbol("primitives"),zc=Symbol("correlatedSceneGraph"),um=Symbol("prepareVariantsForExport"),dm=Symbol("switchVariant"),Ap=Symbol("threeScene"),pp=Symbol("materialsFromPoint"),fm=Symbol("materialFromPoint"),yt=Symbol("variantData"),Mh=Symbol("availableVariants"),Vc=Symbol("modelOnUpdate"),gp=Symbol("cloneMaterial");class Ib{constructor(e,t,n,i){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=i}}class Cb{constructor(e,t=()=>{}){this[ap]=new Array,this[lp]=new Array,this[cp]=new Array,this[hp]=new Array,this[up]=()=>{},this[dp]=new Map,this[Vc]=t,this[zc]=e;const{gltf:n,threeGLTF:i,gltfElementMap:s}=e;this[Ap]=i.scene;for(const[l,c]of n.materials.entries()){const h=s.get(c);if(h!=null)this[ki].push(new Oc(t,n,c,l,!0,this[yt],h));else{const d=(n.materials||[])[l],f=l,g=async()=>{const p=await i.parser.getDependency("material",f),A=new Set;return s.set(d,A),A.add(p),{set:A,material:p}};this[ki].push(new Oc(t,n,d,l,!1,this[yt],h,new Ib(n,s,d,g)))}}const r=new Map,a=new Array;for(const l of i.scene.children)a.push(l);for(;a.length>0;){const l=a.pop();let c=null;l instanceof me?(c=new op(l,this.materials,this[yt],e),this[$n].push(c)):c=new hm(l.name);const h=r.get(l);h!=null?h[cm].push(c):this[fp].push(c),this[Gc].push(c);for(const u of l.children)a.push(u),r.set(l,c)}}get materials(){return this[ki]}[(ap=ki,lp=Gc,cp=fp,hp=$n,up=Vc,dp=yt,Mh)](){const e=Array.from(this[yt].values());return e.sort((t,n)=>t.index-n.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[ki].filter(n=>n.name===e);return t.length>0?t[0]:null}[pp](e){return e.intersectObject(this[Ap],!0).map(n=>{const i=this[Gc].find(s=>s instanceof op&&s.mesh===n.object);return i!=null?i.getActiveMaterial():null})}[fm](e){const t=this[pp](e);return t.length>0?t[0]:null}async[dm](e){for(const t of this[$n])await t.enableVariant(e);for(const t of this.materials)t[Kr](!1);for(const t of this[$n])this.materials[t.getActiveMaterial().index][Kr](!0)}async[um](){const e=new Array;for(const t of this[$n])e.push(t.instantiateVariants());await Promise.all(e)}[gp](e,t){const n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=n[rt],s=JSON.parse(JSON.stringify(n[Oe]));s.name=t,this[zc].gltf.materials.push(s);const a=new Set;for(const[c,h]of i.entries()){const u=h.clone();u.name=t+(i.size>1?"_inst"+c:""),a.add(u)}const l=new Oc(this[Vc],this[zc].gltf,s,this[ki].length,!1,this[yt],a);return this[ki].push(l),l}createMaterialInstanceForVariant(e,t,n,i=!0){let s=null;for(const r of this[$n]){const a=this[yt].get(n);a!=null&&r.variantInfo.has(a.index)||r.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),s==null&&(s=this[gp](e,t)),r.addVariant(s,n))}if(i&&s!=null){s[Kr](!0),this.materials[e][Kr](!1);for(const r of this[$n])r.enableVariant(n)}return s}createVariant(e){this[yt].has(e)?console.warn(`Variant '${e}'' already exists`):this[yt].set(e,{name:e,index:this[yt].size})}hasVariant(e){return this[yt].has(e)}setMaterialToVariant(e,t){if(this[Mh]().find(n=>n===t)==null){console.warn(`Can't add material to '${t}', the variant does not exist.'`);return}if(e<0||e>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const n of this[$n]){const i=n.getMaterial(e);i!=null&&n.addVariant(i,t)}}updateVariantName(e,t){const n=this[yt].get(e);n!=null&&(n.name=t,this[yt].set(t,n),this[yt].delete(e))}deleteVariant(e){const t=this[yt].get(e);if(t!=null){for(const n of this.materials)n.hasVariant(e)&&n[Ma].delete(t.index);for(const n of this[$n])n.deleteVariant(t.index);this[yt].delete(e)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hc=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const kr=Symbol("currentGLTF"),Us=Symbol("model"),Wc=Symbol("getOnUpdateMethod"),mp=Symbol("textureLoader"),qc=Symbol("originalGltfJson"),wb=o=>{var e,t,n,i;class s extends o{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=new qh,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Us]}get availableVariants(){return this.model?this.model[Mh]():[]}get originalGltfJson(){return this[qc]}[(e=Us,t=kr,n=mp,i=qc,Wc)](){return()=>{this[zt]()}}async createTexture(a,l="image/png"){const c=this[kr],h=await new Promise(u=>this[mp].load(a,u));return!c||!h?null:(h.encoding=Me,h.wrapS=ii,h.wrapT=ii,h.flipY=!1,h.userData.mimeType=l,new im(this[Wc](),h))}async updated(a){if(super.updated(a),a.has("variantName")){const l=this[kr],{variantName:c}=this;l!=null&&(await this[Us][dm](c),this[zt](),this.dispatchEvent(new CustomEvent("variant-applied")))}if(a.has("orientation")||a.has("scale")){if(!this.loaded)return;const l=this[ne];l.applyTransform(),l.updateBoundingBox(),l.updateShadow(),this[$e].arRenderer.onUpdateScene(),this[zt]()}}[bi](){super[bi]();const{currentGLTF:a}=this[ne];if(a!=null){const{correlatedSceneGraph:l}=a;l!=null&&a!==this[kr]&&(this[Us]=new Cb(l,this[Wc]()),this[qc]=JSON.parse(JSON.stringify(l.gltf))),"variants"in a.userData&&this.requestUpdate("variantName")}this[kr]=a}async exportScene(a){const l=this[ne];return new Promise(async(c,h)=>{const u={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(u,a),u.animations=l.animations,u.truncateDrawRange=!0;const d=l.shadow;let f=!1;d!=null&&(f=d.visible,d.visible=!1),await this[Us][um](),new su().register(p=>new db(p)).parse(l.model,p=>c(new Blob([u.binary?p:JSON.stringify(p)],{type:u.binary?"application/octet-stream":"application/json"})),()=>h("glTF export failed"),u),d!=null&&(d.visible=f)})}materialFromPoint(a,l){const c=this[ne],h=c.getNDC(a,l);return c.raycaster.setFromCamera(h,c.getCamera()),this[Us][fm](c.raycaster)}}return Hc([xe({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),Hc([xe({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),Hc([xe({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $c=globalThis&&globalThis.__decorate||function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const Sb=Math.PI/32,bb=3e3,Mb={basis:[Ya(wt(Sb,"rad"))],keywords:{auto:[null]}},Os=Symbol("autoRotateStartTime"),Yc=Symbol("radiansPerSecond"),_p=Symbol("syncRotationRate"),Xc=Symbol("onCameraChange"),Bb=o=>{var e,t,n;class i extends o{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=bb,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=r=>{!this.autoRotate||r.detail.source==="user-interaction"&&(this[Os]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Xc]),this[Os]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Xc]),this[Os]=performance.now()}updated(r){super.updated(r),r.has("autoRotate")&&(this[Os]=performance.now())}[(e=Os,t=Yc,_p)](r){this[Yc]=r[0]}[Tn](r,a){if(super[Tn](r,a),!this.autoRotate||!this[ss]()||this[$e].isPresenting)return;const l=Math.min(a,r-this[Os]-this.autoRotateDelay);l>0&&(this[ne].yaw=this.turntableRotation+this[Yc]*l*.001)}get turntableRotation(){return this[ne].yaw}resetTurntableRotation(r=0){this[ne].yaw=r}}return n=Xc,$c([xe({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),$c([xe({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),$c([mi({intrinsics:Mb,updateHandler:_p}),xe({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i},Tb=o=>{var e;const t=s=>{if(s.shadowRoot==null||s.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(s.shadowRoot);else{const r=()=>{self.applyFocusVisiblePolyfill(s.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",r,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",r)}}return()=>{}},n=Symbol("endPolyfillCoordination");class i extends o{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[n]==null&&(this[n]=t(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[n]!=null&&(this[n](),this[n]=null)}}return e=n,i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=Qw(wb(Bb(NI(WS(fS(KS(Pw(Tb(vo)))))))));customElements.define("model-viewer",Rb);/*! js-cookie v3.0.1 | MIT */function Aa(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)o[n]=t[n]}return o}var Db={read:function(o){return o[0]==='"'&&(o=o.slice(1,-1)),o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(o){return encodeURIComponent(o).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Bh(o,e){function t(i,s,r){if(!(typeof document>"u")){r=Aa({},e,r),typeof r.expires=="number"&&(r.expires=new Date(Date.now()+r.expires*864e5)),r.expires&&(r.expires=r.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in r)!r[l]||(a+="; "+l,r[l]!==!0&&(a+="="+r[l].split(";")[0]));return document.cookie=i+"="+o.write(s,i)+a}}function n(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var s=document.cookie?document.cookie.split("; "):[],r={},a=0;a<s.length;a++){var l=s[a].split("="),c=l.slice(1).join("=");try{var h=decodeURIComponent(l[0]);if(r[h]=o.read(c,h),i===h)break}catch{}}return i?r[i]:r}}return Object.create({set:t,get:n,remove:function(i,s){t(i,"",Aa({},s,{expires:-1}))},withAttributes:function(i){return Bh(this.converter,Aa({},this.attributes,i))},withConverter:function(i){return Bh(Aa({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(o)}})}var ru=Bh(Db,{path:"/"});window.onload=()=>{ru.get("visited")==="yes"?Am():setTimeout(Lb,16e3),pm();const o=vp();0<=o&&(document.querySelector("#countdown").style.display="block",document.querySelector("#btn-form").style.display="none",setInterval(vp,1e3))};const Lb=()=>{document.querySelector("#animation-wrapper").classList.add("end-animation"),setTimeout(Am,510)},Am=()=>{const o=document.querySelector("#animation-wrapper");o.style.display="none",ru.set("visited","yes",{expires:7,sameSite:"strict"})},Fb=()=>{ru.remove("visited"),location.reload()},pm=()=>{const o=document.querySelector("model-viewer"),e=document.body.clientWidth;e<=768?o.setAttribute("disable-zoom",!0):o.removeAttribute("disable-zoom");const t=e>1180?75:100;o.setAttribute("camera-orbit",`-17deg 82deg ${t}%`)},vp=()=>{const e=new Date("2022-10-29T10:20+09:00").getTime()-Date.now();if(0<=e){const t=[e/1e3/60/60/24,e/1e3/60/60%24,e/1e3/60%60,e/1e3%60];Array.from(document.querySelectorAll("#countdown .num"),(n,i)=>{n.textContent=`${Math.floor(t[i])}`.padStart(2,0)})}return e},Pb=document.querySelector("#btn-replay");Pb.addEventListener("click",Fb);window.addEventListener("resize",pm);
