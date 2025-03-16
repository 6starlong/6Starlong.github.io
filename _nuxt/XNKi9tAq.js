const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CU9yoL6C.js","./sWfARKwc.js","./error-404.C3V-3Mc4.css","./DkM6sp2G.js","./error-500.dGVH929u.css"])))=>i.map(i=>d[i]);
var wp=Object.defineProperty;var Rp=(n,e,t)=>e in n?wp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Vn=(n,e,t)=>Rp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},or=[],Tn=()=>{},Cp=()=>!1,os=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Kl=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Zl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pp=Object.prototype.hasOwnProperty,Qe=(n,e)=>Pp.call(n,e),Be=Array.isArray,ar=n=>wo(n)==="[object Map]",Kf=n=>wo(n)==="[object Set]",Ne=n=>typeof n=="function",ht=n=>typeof n=="string",ci=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Zf=n=>(lt(n)||Ne(n))&&Ne(n.then)&&Ne(n.catch),Jf=Object.prototype.toString,wo=n=>Jf.call(n),Dp=n=>wo(n).slice(8,-1),Qf=n=>wo(n)==="[object Object]",Jl=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,lr=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Lp=/-(\w)/g,rn=Ro(n=>n.replace(Lp,(e,t)=>t?t.toUpperCase():"")),Ip=/\B([A-Z])/g,Oi=Ro(n=>n.replace(Ip,"-$1").toLowerCase()),Co=Ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vo=Ro(n=>n?`on${Co(n)}`:""),ti=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},eh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Up=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Np=n=>{const e=ht(n)?Number(n):NaN;return isNaN(e)?n:e};let Zc;const Po=()=>Zc||(Zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Do(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Hp(i):Do(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||lt(n))return n}const Fp=/;(?![^(]*\))/g,Op=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function Hp(n){const e={};return n.replace(Bp,"").split(Fp).forEach(t=>{if(t){const i=t.split(Op);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Lo(n){let e="";if(ht(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Lo(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function zp(n){if(!n)return null;let{class:e,style:t}=n;return e&&!ht(e)&&(n.class=Lo(e)),t&&(n.style=Do(t)),n}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=jl(kp);function th(n){return!!n||n===""}const nh=n=>!!(n&&n.__v_isRef===!0),Gp=n=>ht(n)?n:n==null?"":Be(n)||lt(n)&&(n.toString===Jf||!Ne(n.toString))?nh(n)?Gp(n.value):JSON.stringify(n,ih,2):String(n),ih=(n,e)=>nh(e)?ih(n,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Wo(i,s)+" =>"]=r,t),{})}:Kf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wo(t))}:ci(e)?Wo(e):lt(e)&&!Be(e)&&!Qf(e)?String(e):e,Wo=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class rh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Wp(n){return new rh(n)}function sh(){return qt}let rt;const Xo=new WeakSet;class oh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&qt.active&&qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xo.has(this)&&(Xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jc(this),ch(this);const e=rt,t=mn;rt=this,mn=!0;try{return this.fn()}finally{uh(this),rt=e,mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tc(e);this.deps=this.depsTail=void 0,Jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let ah=0,Xr,qr;function lh(n,e=!1){if(n.flags|=8,e){n.next=qr,qr=n;return}n.next=Xr,Xr=n}function Ql(){ah++}function ec(){if(--ah>0)return;if(qr){let e=qr;for(qr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xr;){let e=Xr;for(Xr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ch(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),tc(i),Xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function fh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Jr))return;n.globalVersion=Jr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Oa(n)){n.flags&=-3;return}const t=rt,i=mn;rt=n,mn=!0;try{ch(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,mn=i,uh(n),n.flags&=-3}}function tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let mn=!0;const hh=[];function ui(){hh.push(mn),mn=!1}function fi(){const n=hh.pop();mn=n===void 0?!0:n}function Jc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Jr=0;class qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!mn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new qp(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,dh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Jr++,this.notify(e)}notify(e){Ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ec()}}}function dh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const lo=new WeakMap,Di=Symbol(""),Ba=Symbol(""),Qr=Symbol("");function Rt(n,e,t){if(mn&&rt){let i=lo.get(n);i||lo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new nc),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const o=lo.get(n);if(!o){Jr++;return}const a=l=>{l&&l.trigger()};if(Ql(),e==="clear")o.forEach(a);else{const l=Be(n),u=l&&Jl(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Qr||!ci(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Qr)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Di)),ar(n)&&a(o.get(Ba)));break;case"delete":l||(a(o.get(Di)),ar(n)&&a(o.get(Ba)));break;case"set":ar(n)&&a(o.get(Di));break}}ec()}function Yp(n,e){const t=lo.get(n);return t&&t.get(e)}function Hi(n){const e=je(n);return e===n?e:(Rt(e,"iterate",Qr),gn(n)?e:e.map(It))}function ic(n){return Rt(n=je(n),"iterate",Qr),n}const $p={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,It)},concat(...n){return Hi(this).concat(...n.map(e=>Be(e)?Hi(e):e))},entries(){return qo(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,e){return wn(this,"every",n,e,void 0,arguments)},filter(n,e){return wn(this,"filter",n,e,t=>t.map(It),arguments)},find(n,e){return wn(this,"find",n,e,It,arguments)},findIndex(n,e){return wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wn(this,"findLast",n,e,It,arguments)},findLastIndex(n,e){return wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Yo(this,"includes",n)},indexOf(...n){return Yo(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Yo(this,"lastIndexOf",n)},map(n,e){return wn(this,"map",n,e,void 0,arguments)},pop(){return Ur(this,"pop")},push(...n){return Ur(this,"push",n)},reduce(n,...e){return Qc(this,"reduce",n,e)},reduceRight(n,...e){return Qc(this,"reduceRight",n,e)},shift(){return Ur(this,"shift")},some(n,e){return wn(this,"some",n,e,void 0,arguments)},splice(...n){return Ur(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Ur(this,"unshift",n)},values(){return qo(this,"values",It)}};function qo(n,e,t){const i=ic(n),r=i[e]();return i!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const jp=Array.prototype;function wn(n,e,t,i,r,s){const o=ic(n),a=o!==n&&!gn(n),l=o[e];if(l!==jp[e]){const f=l.apply(n,s);return a?It(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,It(f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Qc(n,e,t,i){const r=ic(n);let s=t;return r!==n&&(gn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,It(a),l,n)}),r[e](s,...i)}function Yo(n,e,t){const i=je(n);Rt(i,"iterate",Qr);const r=i[e](...t);return(r===-1||r===!1)&&oc(t[0])?(t[0]=je(t[0]),i[e](...t)):r}function Ur(n,e,t=[]){ui(),Ql();const i=je(n)[e].apply(n,t);return ec(),fi(),i}const Kp=jl("__proto__,__v_isRef,__isVue"),ph=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Zp(n){ci(n)||(n=String(n));const e=je(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class mh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?am:xh:s?vh:_h).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=$p[t]))return l;if(t==="hasOwnProperty")return Zp}const a=Reflect.get(e,t,vt(e)?e:i);return(ci(t)?ph.has(t):Kp(t))||(r||Rt(e,"get",t),s)?a:vt(a)?o&&Jl(t)?a:a.value:lt(a)?r?yh(a):si(a):a}}class gh extends mh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=oi(s);if(!gn(i)&&!oi(i)&&(s=je(s),i=je(i)),!Be(e)&&vt(s)&&!vt(i))return l?!1:(s.value=i,!0)}const o=Be(e)&&Jl(t)?Number(t)<e.length:Qe(e,t),a=Reflect.set(e,t,i,vt(e)?e:r);return e===je(r)&&(o?ti(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),a}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!ph.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Be(e)?"length":Di),Reflect.ownKeys(e)}}class Jp extends mh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qp=new gh,em=new Jp,tm=new gh(!0);const Ha=n=>n,vs=n=>Reflect.getPrototypeOf(n);function nm(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=ar(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Ha:e?za:It;return!e&&Rt(s,"iterate",l?Ba:Di),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function im(n,e){const t={get(r){const s=this.__v_raw,o=je(s),a=je(r);n||(ti(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:l}=vs(o),u=e?Ha:n?za:It;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(je(r),"iterate",Di),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=je(s),a=je(r);return n||(ti(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=je(a),u=e?Ha:n?za:It;return!n&&Rt(l,"iterate",Di),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ct(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){!e&&!gn(r)&&!oi(r)&&(r=je(r));const s=je(this);return vs(s).has.call(s,r)||(s.add(r),Nn(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!oi(s)&&(s=je(s));const o=je(this),{has:a,get:l}=vs(o);let u=a.call(o,r);u||(r=je(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?ti(s,c)&&Nn(o,"set",r,s):Nn(o,"add",r,s),this},delete(r){const s=je(this),{has:o,get:a}=vs(s);let l=o.call(s,r);l||(r=je(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Nn(s,"delete",r,void 0),u},clear(){const r=je(this),s=r.size!==0,o=r.clear();return s&&Nn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=nm(r,n,e)}),t}function rc(n,e){const t=im(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const rm={get:rc(!1,!1)},sm={get:rc(!1,!0)},om={get:rc(!0,!1)};const _h=new WeakMap,vh=new WeakMap,xh=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(n){return n.__v_skip||!Object.isExtensible(n)?0:lm(Dp(n))}function si(n){return oi(n)?n:sc(n,!1,Qp,rm,_h)}function ir(n){return sc(n,!1,tm,sm,vh)}function yh(n){return sc(n,!0,em,om,xh)}function sc(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=cm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function cr(n){return oi(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function oi(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function oc(n){return n?!!n.__v_raw:!1}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function um(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&eh(n,"__v_skip",!0),n}const It=n=>lt(n)?si(n):n,za=n=>lt(n)?yh(n):n;function vt(n){return n?n.__v_isRef===!0:!1}function ni(n){return Mh(n,!1)}function eu(n){return Mh(n,!0)}function Mh(n,e){return vt(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:je(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||oi(e);e=i?e:je(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:It(e),this.dep.trigger())}}function St(n){return vt(n)?n.value:n}function hm(n){return Ne(n)?n():St(n)}const dm={get:(n,e,t)=>e==="__v_raw"?n:St(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return vt(r)&&!vt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Sh(n){return cr(n)?n:new Proxy(n,dm)}class pm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yp(je(this._object),this._key)}}class mm{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function gm(n,e,t){return vt(n)?n:Ne(n)?new mm(n):lt(n)&&arguments.length>1?_m(n,e,t):ni(n)}function _m(n,e,t){const i=n[e];return vt(i)?i:new pm(n,e,t)}class vm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return lh(this,!0),!0}get value(){const e=this.dep.track();return fh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xm(n,e,t=!1){let i,r;return Ne(n)?i=n:(i=n.get,r=n.set),new vm(i,r,t)}const ys={},co=new WeakMap;let Ei;function ym(n,e=!1,t=Ei){if(t){let i=co.get(t);i||co.set(t,i=[]),i.push(n)}}function Mm(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=x=>r?x:gn(x)||r===!1||r===0?Jn(x,1):Jn(x);let c,f,h,p,g=!1,_=!1;if(vt(n)?(f=()=>n.value,g=gn(n)):cr(n)?(f=()=>u(n),g=!0):Be(n)?(_=!0,g=n.some(x=>cr(x)||gn(x)),f=()=>n.map(x=>{if(vt(x))return x.value;if(cr(x))return u(x);if(Ne(x))return l?l(x,2):x()})):Ne(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ui();try{h()}finally{fi()}}const x=Ei;Ei=c;try{return l?l(n,3,[p]):n(p)}finally{Ei=x}}:f=Tn,e&&r){const x=f,R=r===!0?1/0:r;f=()=>Jn(x(),R)}const m=sh(),d=()=>{c.stop(),m&&m.active&&Zl(m.effects,c)};if(s&&e){const x=e;e=(...R)=>{x(...R),d()}}let A=_?new Array(n.length).fill(ys):ys;const y=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(e){const R=c.run();if(r||g||(_?R.some((C,w)=>ti(C,A[w])):ti(R,A))){h&&h();const C=Ei;Ei=c;try{const w=[R,A===ys?void 0:_&&A[0]===ys?[]:A,p];l?l(e,3,w):e(...w),A=R}finally{Ei=C}}}else c.run()};return a&&a(y),c=new oh(f),c.scheduler=o?()=>o(y,!1):y,p=x=>ym(x,!1,c),h=c.onStop=()=>{const x=co.get(c);if(x){if(l)l(x,4);else for(const R of x)R();co.delete(c)}},e?i?y(!0):A=c.run():o?o(y.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Jn(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,vt(n))Jn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Jn(n[i],e,t);else if(Kf(n)||ar(n))n.forEach(i=>{Jn(i,e,t)});else if(Qf(n)){for(const i in n)Jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function as(n,e,t,i){try{return i?n(...i):n()}catch(r){Rr(r,e,t)}}function bn(n,e,t,i){if(Ne(n)){const r=as(n,e,t,i);return r&&Zf(r)&&r.catch(s=>{Rr(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],e,t,i));return r}}function Rr(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||st;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ui(),as(s,null,10,[n,l,u]),fi();return}}Sm(n,t,r,i,o)}function Sm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let xn=-1;const ur=[];let jn=null,tr=0;const Eh=Promise.resolve();let uo=null;function ac(n){const e=uo||Eh;return n?e.then(this?n.bind(this):n):e}function Em(n){let e=xn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=es(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function lc(n){if(!(n.flags&1)){const e=es(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=es(t)?Ut.push(n):Ut.splice(Em(e),0,n),n.flags|=1,Th()}}function Th(){uo||(uo=Eh.then(bh))}function ka(n){Be(n)?ur.push(...n):jn&&n.id===-1?jn.splice(tr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),Th()}function tu(n,e,t=xn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function fo(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>es(t)-es(i));if(ur.length=0,jn){jn.push(...e);return}for(jn=e,tr=0;tr<jn.length;tr++){const t=jn[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}jn=null,tr=0}}const es=n=>n.id==null?n.flags&2?-1:1/0:n.id;function bh(n){try{for(xn=0;xn<Ut.length;xn++){const e=Ut[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),as(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Ut.length;xn++){const e=Ut[xn];e&&(e.flags&=-2)}xn=-1,Ut.length=0,fo(),uo=null,(Ut.length||ur.length)&&bh()}}let $t=null,Ah=null;function ho(n){const e=$t;return $t=n,Ah=n&&n.type.__scopeId||null,e}function wh(n,e=$t,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&pu(-1);const s=ho(e);let o;try{o=n(...r)}finally{ho(s),i._d&&pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function yn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ui(),bn(l,t,8,[n.el,a,n,e]),fi())}}const Tm=Symbol("_vte"),bm=n=>n.__isTeleport;function cc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rh(n,e){return Ne(n)?Ct({name:n.name},e,{setup:n}):n}function uc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ts(n,e,t,i,r=!1){if(Be(n)){n.forEach((g,_)=>ts(g,e&&(Be(e)?e[_]:e),t,i,r));return}if(fr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ts(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===st?a.refs={}:a.refs,f=a.setupState,h=je(f),p=f===st?()=>!1:g=>Qe(h,g);if(u!=null&&u!==l&&(ht(u)?(c[u]=null,p(u)&&(f[u]=null)):vt(u)&&(u.value=null)),Ne(l))as(l,a,12,[o,c]);else{const g=ht(l),_=vt(l);if(g||_){const m=()=>{if(n.f){const d=g?p(l)?f[l]:c[l]:l.value;r?Be(d)&&Zl(d,s):Be(d)?d.includes(s)||d.push(s):g?(c[l]=[s],p(l)&&(f[l]=c[l])):(l.value=[s],n.k&&(c[n.k]=l.value))}else g?(c[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(c[n.k]=o))};o?(m.id=-1,Xt(m,t)):m()}}}let nu=!1;const zi=()=>{nu||(console.error("Hydration completed but contains mismatches."),nu=!0)},Am=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",wm=n=>n.namespaceURI.includes("MathML"),Ms=n=>{if(n.nodeType===1){if(Am(n))return"svg";if(wm(n))return"mathml"}},rr=n=>n.nodeType===8;function Rm(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=n,c=(y,x)=>{if(!x.hasChildNodes()){t(null,y,x),fo(),x._vnode=y;return}f(x.firstChild,y,null,null,null),fo(),x._vnode=y},f=(y,x,R,C,w,D=!1)=>{D=D||!!x.dynamicChildren;const E=rr(y)&&y.data==="[",S=()=>_(y,x,R,C,w,E),{type:L,ref:V,shapeFlag:z,patchFlag:Y}=x;let te=y.nodeType;x.el=y,Y===-2&&(D=!1,x.dynamicChildren=null);let F=null;switch(L){case Ii:te!==3?x.children===""?(l(x.el=r(""),o(y),y),F=y):F=S():(y.data!==x.children&&(zi(),y.data=x.children),F=s(y));break;case ai:A(y)?(F=s(y),d(x.el=y.content.firstChild,y,R)):te!==8||E?F=S():F=s(y);break;case $r:if(E&&(y=s(y),te=y.nodeType),te===1||te===3){F=y;const J=!x.children.length;for(let U=0;U<x.staticCount;U++)J&&(x.children+=F.nodeType===1?F.outerHTML:F.data),U===x.staticCount-1&&(x.anchor=F),F=s(F);return E?s(F):F}else S();break;case fn:E?F=g(y,x,R,C,w,D):F=S();break;default:if(z&1)(te!==1||x.type.toLowerCase()!==y.tagName.toLowerCase())&&!A(y)?F=S():F=h(y,x,R,C,w,D);else if(z&6){x.slotScopeIds=w;const J=o(y);if(E?F=m(y):rr(y)&&y.data==="teleport start"?F=m(y,y.data,"teleport end"):F=s(y),e(x,J,null,R,C,Ms(J),D),fr(x)&&!x.type.__asyncResolved){let U;E?(U=pt(fn),U.anchor=F?F.previousSibling:J.lastChild):U=y.nodeType===3?ud(""):pt("div"),U.el=y,x.component.subTree=U}}else z&64?te!==8?F=S():F=x.type.hydrate(y,x,R,C,w,D,n,p):z&128&&(F=x.type.hydrate(y,x,R,C,Ms(o(y)),w,D,n,f))}return V!=null&&ts(V,null,C,x),F},h=(y,x,R,C,w,D)=>{D=D||!!x.dynamicChildren;const{type:E,props:S,patchFlag:L,shapeFlag:V,dirs:z,transition:Y}=x,te=E==="input"||E==="option";if(te||L!==-1){z&&yn(x,null,R,"created");let F=!1;if(A(y)){F=Zh(null,Y)&&R&&R.vnode.props&&R.vnode.props.appear;const U=y.content.firstChild;F&&Y.beforeEnter(U),d(U,y,R),x.el=y=U}if(V&16&&!(S&&(S.innerHTML||S.textContent))){let U=p(y.firstChild,x,y,R,C,w,D);for(;U;){Ss(y,1)||zi();const ae=U;U=U.nextSibling,a(ae)}}else if(V&8){let U=x.children;U[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(U=U.slice(1)),y.textContent!==U&&(Ss(y,0)||zi(),y.textContent=x.children)}if(S){if(te||!D||L&48){const U=y.tagName.includes("-");for(const ae in S)(te&&(ae.endsWith("value")||ae==="indeterminate")||os(ae)&&!lr(ae)||ae[0]==="."||U)&&i(y,ae,null,S[ae],void 0,R)}else if(S.onClick)i(y,"onClick",null,S.onClick,void 0,R);else if(L&4&&cr(S.style))for(const U in S.style)S.style[U]}let J;(J=S&&S.onVnodeBeforeMount)&&Jt(J,R,x),z&&yn(x,null,R,"beforeMount"),((J=S&&S.onVnodeMounted)||z||F)&&rd(()=>{J&&Jt(J,R,x),F&&Y.enter(y),z&&yn(x,null,R,"mounted")},C)}return y.nextSibling},p=(y,x,R,C,w,D,E)=>{E=E||!!x.dynamicChildren;const S=x.children,L=S.length;for(let V=0;V<L;V++){const z=E?S[V]:S[V]=Yt(S[V]),Y=z.type===Ii;y?(Y&&!E&&V+1<L&&Yt(S[V+1]).type===Ii&&(l(r(y.data.slice(z.children.length)),R,s(y)),y.data=z.children),y=f(y,z,C,w,D,E)):Y&&!z.children?l(z.el=r(""),R):(Ss(R,1)||zi(),t(null,z,R,null,C,w,Ms(R),D))}return y},g=(y,x,R,C,w,D)=>{const{slotScopeIds:E}=x;E&&(w=w?w.concat(E):E);const S=o(y),L=p(s(y),x,S,R,C,w,D);return L&&rr(L)&&L.data==="]"?s(x.anchor=L):(zi(),l(x.anchor=u("]"),S,L),L)},_=(y,x,R,C,w,D)=>{if(Ss(y.parentElement,1)||zi(),x.el=null,D){const L=m(y);for(;;){const V=s(y);if(V&&V!==L)a(V);else break}}const E=s(y),S=o(y);return a(y),t(null,x,S,E,R,C,Ms(S),w),R&&(R.vnode.el=x.el,No(R,x.el)),E},m=(y,x="[",R="]")=>{let C=0;for(;y;)if(y=s(y),y&&rr(y)&&(y.data===x&&C++,y.data===R)){if(C===0)return s(y);C--}return y},d=(y,x,R)=>{const C=x.parentNode;C&&C.replaceChild(y,x);let w=R;for(;w;)w.vnode.el===x&&(w.vnode.el=w.subTree.el=y),w=w.parent},A=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[c,f]}const iu="data-allow-mismatch",Cm={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ss(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(iu);)n=n.parentElement;const t=n&&n.getAttribute(iu);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:t.split(",").includes(Cm[e])}}Po().requestIdleCallback;Po().cancelIdleCallback;function Pm(n,e){if(rr(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(rr(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const fr=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ru(n){Ne(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let u=null,c,f=0;const h=()=>(f++,u=null,p()),p=()=>{let g;return u||(g=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,d)=>{l(_,()=>m(h()),()=>d(_),f+1)});throw _}).then(_=>g!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return Rh({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,_,m){const d=s?()=>{const A=s(m,y=>Pm(g,y));A&&(_.bum||(_.bum=[])).push(A)}:m;c?d():p().then(()=>!_.isUnmounted&&d())},get __asyncResolved(){return c},setup(){const g=_t;if(uc(g),c)return()=>$o(c,g);const _=y=>{u=null,Rr(y,g,13,!i)};if(a&&g.suspense||xr)return p().then(y=>()=>$o(y,g)).catch(y=>(_(y),()=>i?pt(i,{error:y}):null));const m=ni(!1),d=ni(),A=ni(!!r);return r&&setTimeout(()=>{A.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!d.value){const y=new Error(`Async component timed out after ${o}ms.`);_(y),d.value=y}},o),p().then(()=>{m.value=!0,g.parent&&fc(g.parent.vnode)&&g.parent.update()}).catch(y=>{_(y),d.value=y}),()=>{if(m.value&&c)return $o(c,g);if(d.value&&i)return pt(i,{error:d.value});if(t&&!A.value)return pt(t)}}})}function $o(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=pt(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const fc=n=>n.type.__isKeepAlive;function Ch(n,e){Dh(n,"a",e)}function Ph(n,e){Dh(n,"da",e)}function Dh(n,e,t=_t){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Io(e,i,t),t){let r=t.parent;for(;r&&r.parent;)fc(r.parent.vnode)&&Dm(i,e,t,r),r=r.parent}}function Dm(n,e,t,i){const r=Io(e,n,i,!0);Lh(()=>{Zl(i[e],r)},t)}function Io(n,e,t=_t,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ui();const a=ls(t),l=bn(e,t,n,o);return a(),fi(),l});return i?r.unshift(s):r.push(s),s}}const kn=n=>(e,t=_t)=>{(!xr||n==="sp")&&Io(n,(...i)=>e(...i),t)},Lm=kn("bm"),hc=kn("m"),Im=kn("bu"),Um=kn("u"),dc=kn("bum"),Lh=kn("um"),Nm=kn("sp"),Fm=kn("rtg"),Om=kn("rtc");function Ih(n,e=_t){Io("ec",n,e)}const Uh="components";function ib(n,e){return Fh(Uh,n,!0,e)||n}const Nh=Symbol.for("v-ndc");function Bm(n){return ht(n)?Fh(Uh,n,!1)||n:n||Nh}function Fh(n,e,t=!0,i=!1){const r=$t||_t;if(r){const s=r.type;{const a=Cg(s,!1);if(a&&(a===e||a===rn(e)||a===Co(rn(e))))return s}const o=su(r[n]||s[n],e)||su(r.appContext[n],e);return!o&&i?s:o}}function su(n,e){return n&&(n[e]||n[rn(e)]||n[Co(rn(e))])}const Va=n=>n?hd(n)?xc(n):Va(n.parent):null,Yr=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Va(n.parent),$root:n=>Va(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bh(n),$forceUpdate:n=>n.f||(n.f=()=>{lc(n.update)}),$nextTick:n=>n.n||(n.n=ac.bind(n.proxy)),$watch:n=>sg.bind(n)}),jo=(n,e)=>n!==st&&!n.__isScriptSetup&&Qe(n,e),Hm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(jo(i,e))return o[e]=1,i[e];if(r!==st&&Qe(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&Qe(u,e))return o[e]=3,s[e];if(t!==st&&Qe(t,e))return o[e]=4,t[e];Ga&&(o[e]=0)}}const c=Yr[e];let f,h;if(c)return e==="$attrs"&&Rt(n.attrs,"get",""),c(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==st&&Qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Qe(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return jo(r,e)?(r[e]=t,!0):i!==st&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==st&&Qe(n,o)||jo(e,o)||(a=s[0])&&Qe(a,o)||Qe(i,o)||Qe(Yr,o)||Qe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ou(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ga=!0;function zm(n){const e=Bh(n),t=n.proxy,i=n.ctx;Ga=!1,e.beforeCreate&&au(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:y,unmounted:x,render:R,renderTracked:C,renderTriggered:w,errorCaptured:D,serverPrefetch:E,expose:S,inheritAttrs:L,components:V,directives:z,filters:Y}=e;if(u&&km(u,i,null),o)for(const J in o){const U=o[J];Ne(U)&&(i[J]=U.bind(t))}if(r){const J=r.call(t,t);lt(J)&&(n.data=si(J))}if(Ga=!0,s)for(const J in s){const U=s[J],ae=Ne(U)?U.bind(t,t):Ne(U.get)?U.get.bind(t,t):Tn,me=!Ne(U)&&Ne(U.set)?U.set.bind(t):Tn,Ee=pd({get:ae,set:me});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ae=>Ee.value=Ae})}if(a)for(const J in a)Oh(a[J],i,t,J);if(l){const J=Ne(l)?l.call(t):l;Reflect.ownKeys(J).forEach(U=>{zh(U,J[U])})}c&&au(c,n,"c");function F(J,U){Be(U)?U.forEach(ae=>J(ae.bind(t))):U&&J(U.bind(t))}if(F(Lm,f),F(hc,h),F(Im,p),F(Um,g),F(Ch,_),F(Ph,m),F(Ih,D),F(Om,C),F(Fm,w),F(dc,A),F(Lh,x),F(Nm,E),Be(S))if(S.length){const J=n.exposed||(n.exposed={});S.forEach(U=>{Object.defineProperty(J,U,{get:()=>t[U],set:ae=>t[U]=ae})})}else n.exposed||(n.exposed={});R&&n.render===Tn&&(n.render=R),L!=null&&(n.inheritAttrs=L),V&&(n.components=V),z&&(n.directives=z),E&&uc(n)}function km(n,e,t=Tn){Be(n)&&(n=Wa(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=hr(r.from||i,r.default,!0):s=hr(r.from||i):s=hr(r),vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function au(n,e,t){bn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Oh(n,e,t,i){let r=i.includes(".")?ed(t,i):()=>t[i];if(ht(n)){const s=e[n];Ne(s)&&Zo(r,s)}else if(Ne(n))Zo(r,n.bind(t));else if(lt(n))if(Be(n))n.forEach(s=>Oh(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&Zo(r,s,n)}}function Bh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>po(l,u,o,!0)),po(l,e,o)),lt(e)&&s.set(e,l),l}function po(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&po(n,s,t,!0),r&&r.forEach(o=>po(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vm={data:lu,props:cu,emits:cu,methods:Gr,computed:Gr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Gr,directives:Gr,watch:Wm,provide:lu,inject:Gm};function lu(n,e){return e?n?function(){return Ct(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function Gm(n,e){return Gr(Wa(n),Wa(e))}function Wa(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?Ct(Object.create(null),n,e):e}function cu(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ct(Object.create(null),ou(n),ou(e??{})):e}function Wm(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Hh(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function qm(n,e){return function(i,r=null){Ne(i)||(i=Ct({},i)),r!=null&&!lt(r)&&(r=null);const s=Hh(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Xm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Lg,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(u,...f)):Ne(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||pt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,c):n(p,c,h),l=!0,u._container=c,c.__vue_app__=u,xc(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(bn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Li;Li=u;try{return c()}finally{Li=f}}};return u}}let Li=null;function zh(n,e){if(_t){let t=_t.provides;const i=_t.parent&&_t.parent.provides;i===t&&(t=_t.provides=Object.create(i)),t[n]=e}}function hr(n,e,t=!1){const i=_t||$t;if(i||Li){const r=Li?Li._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}function pc(){return!!(_t||$t||Li)}const kh={},Vh=()=>Object.create(kh),Gh=n=>Object.getPrototypeOf(n)===kh;function Ym(n,e,t,i=!1){const r={},s=Vh();n.propsDefaults=Object.create(null),Wh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:ir(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $m(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Uo(n.emitsOptions,h))continue;const p=e[h];if(l)if(Qe(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const g=rn(h);r[g]=Xa(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{Wh(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!Qe(e,f)&&((c=Oi(f))===f||!Qe(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Xa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],u=!0)}u&&Nn(n.attrs,"set","")}function Wh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(lr(l))continue;const u=e[l];let c;r&&Qe(r,c=rn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:Uo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=je(t),u=a||st;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Xa(r,l,f,u[f],n,!Qe(u,f))}}return o}function Xa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=ls(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const jm=new WeakMap;function Xh(n,e,t=!1){const i=t?jm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ne(n)){const c=f=>{l=!0;const[h,p]=Xh(f,e,!0);Ct(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return lt(n)&&i.set(n,or),or;if(Be(s))for(let c=0;c<s.length;c++){const f=rn(s[c]);uu(f)&&(o[f]=st)}else if(s)for(const c in s){const f=rn(c);if(uu(f)){const h=s[c],p=o[f]=Be(h)||Ne(h)?{type:h}:Ct({},h),g=p.type;let _=!1,m=!0;if(Be(g))for(let d=0;d<g.length;++d){const A=g[d],y=Ne(A)&&A.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Ne(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||Qe(p,"default"))&&a.push(f)}}const u=[o,a];return lt(n)&&i.set(n,u),u}function uu(n){return n[0]!=="$"&&!lr(n)}const qh=n=>n[0]==="_"||n==="$stable",mc=n=>Be(n)?n.map(Yt):[Yt(n)],Km=(n,e,t)=>{if(e._n)return e;const i=wh((...r)=>mc(e(...r)),t);return i._c=!1,i},Yh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(qh(r))continue;const s=n[r];if(Ne(s))e[r]=Km(r,s,i);else if(s!=null){const o=mc(s);e[r]=()=>o}}},$h=(n,e)=>{const t=mc(e);n.slots.default=()=>t},jh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Zm=(n,e,t)=>{const i=n.slots=Vh();if(n.vnode.shapeFlag&32){const r=e._;r?(jh(i,e,t),t&&eh(i,"_",r,!0)):Yh(e,i)}else e&&$h(n,e)},Jm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:jh(r,e,t):(s=!e.$stable,Yh(e,r)),o=e}else e&&($h(n,e),o={default:1});if(s)for(const a in r)!qh(a)&&o[a]==null&&delete r[a]},Xt=rd;function Qm(n){return Kh(n)}function eg(n){return Kh(n,Rm)}function Kh(n,e){const t=Po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=Tn,insertStaticContent:g}=n,_=(P,M,j,Q=null,K=null,X=null,se=void 0,Z=null,T=!!M.dynamicChildren)=>{if(P===M)return;P&&!Qn(P,M)&&(Q=he(P),Ae(P,K,X,!0),P=null),M.patchFlag===-2&&(T=!1,M.dynamicChildren=null);const{type:v,ref:I,shapeFlag:B}=M;switch(v){case Ii:m(P,M,j,Q);break;case ai:d(P,M,j,Q);break;case $r:P==null&&A(M,j,Q,se);break;case fn:V(P,M,j,Q,K,X,se,Z,T);break;default:B&1?R(P,M,j,Q,K,X,se,Z,T):B&6?z(P,M,j,Q,K,X,se,Z,T):(B&64||B&128)&&v.process(P,M,j,Q,K,X,se,Z,T,we)}I!=null&&K&&ts(I,P&&P.ref,X,M||P,!M)},m=(P,M,j,Q)=>{if(P==null)i(M.el=a(M.children),j,Q);else{const K=M.el=P.el;M.children!==P.children&&u(K,M.children)}},d=(P,M,j,Q)=>{P==null?i(M.el=l(M.children||""),j,Q):M.el=P.el},A=(P,M,j,Q)=>{[P.el,P.anchor]=g(P.children,M,j,Q,P.el,P.anchor)},y=({el:P,anchor:M},j,Q)=>{let K;for(;P&&P!==M;)K=h(P),i(P,j,Q),P=K;i(M,j,Q)},x=({el:P,anchor:M})=>{let j;for(;P&&P!==M;)j=h(P),r(P),P=j;r(M)},R=(P,M,j,Q,K,X,se,Z,T)=>{M.type==="svg"?se="svg":M.type==="math"&&(se="mathml"),P==null?C(M,j,Q,K,X,se,Z,T):E(P,M,K,X,se,Z,T)},C=(P,M,j,Q,K,X,se,Z)=>{let T,v;const{props:I,shapeFlag:B,transition:W,dirs:k}=P;if(T=P.el=o(P.type,X,I&&I.is,I),B&8?c(T,P.children):B&16&&D(P.children,T,null,Q,K,Ko(P,X),se,Z),k&&yn(P,null,Q,"created"),w(T,P,P.scopeId,se,Q),I){for(const oe in I)oe!=="value"&&!lr(oe)&&s(T,oe,null,I[oe],X,Q);"value"in I&&s(T,"value",null,I.value,X),(v=I.onVnodeBeforeMount)&&Jt(v,Q,P)}k&&yn(P,null,Q,"beforeMount");const ce=Zh(K,W);ce&&W.beforeEnter(T),i(T,M,j),((v=I&&I.onVnodeMounted)||ce||k)&&Xt(()=>{v&&Jt(v,Q,P),ce&&W.enter(T),k&&yn(P,null,Q,"mounted")},K)},w=(P,M,j,Q,K)=>{if(j&&p(P,j),Q)for(let X=0;X<Q.length;X++)p(P,Q[X]);if(K){let X=K.subTree;if(M===X||nd(X.type)&&(X.ssContent===M||X.ssFallback===M)){const se=K.vnode;w(P,se,se.scopeId,se.slotScopeIds,K.parent)}}},D=(P,M,j,Q,K,X,se,Z,T=0)=>{for(let v=T;v<P.length;v++){const I=P[v]=Z?Kn(P[v]):Yt(P[v]);_(null,I,M,j,Q,K,X,se,Z)}},E=(P,M,j,Q,K,X,se)=>{const Z=M.el=P.el;let{patchFlag:T,dynamicChildren:v,dirs:I}=M;T|=P.patchFlag&16;const B=P.props||st,W=M.props||st;let k;if(j&&mi(j,!1),(k=W.onVnodeBeforeUpdate)&&Jt(k,j,M,P),I&&yn(M,P,j,"beforeUpdate"),j&&mi(j,!0),(B.innerHTML&&W.innerHTML==null||B.textContent&&W.textContent==null)&&c(Z,""),v?S(P.dynamicChildren,v,Z,j,Q,Ko(M,K),X):se||U(P,M,Z,null,j,Q,Ko(M,K),X,!1),T>0){if(T&16)L(Z,B,W,j,K);else if(T&2&&B.class!==W.class&&s(Z,"class",null,W.class,K),T&4&&s(Z,"style",B.style,W.style,K),T&8){const ce=M.dynamicProps;for(let oe=0;oe<ce.length;oe++){const le=ce[oe],Ue=B[le],re=W[le];(re!==Ue||le==="value")&&s(Z,le,Ue,re,K,j)}}T&1&&P.children!==M.children&&c(Z,M.children)}else!se&&v==null&&L(Z,B,W,j,K);((k=W.onVnodeUpdated)||I)&&Xt(()=>{k&&Jt(k,j,M,P),I&&yn(M,P,j,"updated")},Q)},S=(P,M,j,Q,K,X,se)=>{for(let Z=0;Z<M.length;Z++){const T=P[Z],v=M[Z],I=T.el&&(T.type===fn||!Qn(T,v)||T.shapeFlag&70)?f(T.el):j;_(T,v,I,null,Q,K,X,se,!0)}},L=(P,M,j,Q,K)=>{if(M!==j){if(M!==st)for(const X in M)!lr(X)&&!(X in j)&&s(P,X,M[X],null,K,Q);for(const X in j){if(lr(X))continue;const se=j[X],Z=M[X];se!==Z&&X!=="value"&&s(P,X,Z,se,K,Q)}"value"in j&&s(P,"value",M.value,j.value,K)}},V=(P,M,j,Q,K,X,se,Z,T)=>{const v=M.el=P?P.el:a(""),I=M.anchor=P?P.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:k}=M;k&&(Z=Z?Z.concat(k):k),P==null?(i(v,j,Q),i(I,j,Q),D(M.children||[],j,I,K,X,se,Z,T)):B>0&&B&64&&W&&P.dynamicChildren?(S(P.dynamicChildren,W,j,K,X,se,Z),(M.key!=null||K&&M===K.subTree)&&Jh(P,M,!0)):U(P,M,j,I,K,X,se,Z,T)},z=(P,M,j,Q,K,X,se,Z,T)=>{M.slotScopeIds=Z,P==null?M.shapeFlag&512?K.ctx.activate(M,j,Q,se,T):Y(M,j,Q,K,X,se,T):te(P,M,T)},Y=(P,M,j,Q,K,X,se)=>{const Z=P.component=Tg(P,Q,K);if(fc(P)&&(Z.ctx.renderer=we),bg(Z,!1,se),Z.asyncDep){if(K&&K.registerDep(Z,F,se),!P.el){const T=Z.subTree=pt(ai);d(null,T,M,j)}}else F(Z,P,M,j,K,X,se)},te=(P,M,j)=>{const Q=M.component=P.component;if(fg(P,M,j))if(Q.asyncDep&&!Q.asyncResolved){J(Q,M,j);return}else Q.next=M,Q.update();else M.el=P.el,Q.vnode=M},F=(P,M,j,Q,K,X,se)=>{const Z=()=>{if(P.isMounted){let{next:B,bu:W,u:k,parent:ce,vnode:oe}=P;{const be=Qh(P);if(be){B&&(B.el=oe.el,J(P,B,se)),be.asyncDep.then(()=>{P.isUnmounted||Z()});return}}let le=B,Ue;mi(P,!1),B?(B.el=oe.el,J(P,B,se)):B=oe,W&&Go(W),(Ue=B.props&&B.props.onVnodeBeforeUpdate)&&Jt(Ue,ce,B,oe),mi(P,!0);const re=Jo(P),de=P.subTree;P.subTree=re,_(de,re,f(de.el),he(de),P,K,X),B.el=re.el,le===null&&No(P,re.el),k&&Xt(k,K),(Ue=B.props&&B.props.onVnodeUpdated)&&Xt(()=>Jt(Ue,ce,B,oe),K)}else{let B;const{el:W,props:k}=M,{bm:ce,m:oe,parent:le,root:Ue,type:re}=P,de=fr(M);if(mi(P,!1),ce&&Go(ce),!de&&(B=k&&k.onVnodeBeforeMount)&&Jt(B,le,M),mi(P,!0),W&&it){const be=()=>{P.subTree=Jo(P),it(W,P.subTree,P,K,null)};de&&re.__asyncHydrate?re.__asyncHydrate(W,P,be):be()}else{Ue.ce&&Ue.ce._injectChildStyle(re);const be=P.subTree=Jo(P);_(null,be,j,Q,P,K,X),M.el=be.el}if(oe&&Xt(oe,K),!de&&(B=k&&k.onVnodeMounted)){const be=M;Xt(()=>Jt(B,le,be),K)}(M.shapeFlag&256||le&&fr(le.vnode)&&le.vnode.shapeFlag&256)&&P.a&&Xt(P.a,K),P.isMounted=!0,M=j=Q=null}};P.scope.on();const T=P.effect=new oh(Z);P.scope.off();const v=P.update=T.run.bind(T),I=P.job=T.runIfDirty.bind(T);I.i=P,I.id=P.uid,T.scheduler=()=>lc(I),mi(P,!0),v()},J=(P,M,j)=>{M.component=P;const Q=P.vnode.props;P.vnode=M,P.next=null,$m(P,M.props,Q,j),Jm(P,M.children,j),ui(),tu(P),fi()},U=(P,M,j,Q,K,X,se,Z,T=!1)=>{const v=P&&P.children,I=P?P.shapeFlag:0,B=M.children,{patchFlag:W,shapeFlag:k}=M;if(W>0){if(W&128){me(v,B,j,Q,K,X,se,Z,T);return}else if(W&256){ae(v,B,j,Q,K,X,se,Z,T);return}}k&8?(I&16&&Me(v,K,X),B!==v&&c(j,B)):I&16?k&16?me(v,B,j,Q,K,X,se,Z,T):Me(v,K,X,!0):(I&8&&c(j,""),k&16&&D(B,j,Q,K,X,se,Z,T))},ae=(P,M,j,Q,K,X,se,Z,T)=>{P=P||or,M=M||or;const v=P.length,I=M.length,B=Math.min(v,I);let W;for(W=0;W<B;W++){const k=M[W]=T?Kn(M[W]):Yt(M[W]);_(P[W],k,j,null,K,X,se,Z,T)}v>I?Me(P,K,X,!0,!1,B):D(M,j,Q,K,X,se,Z,T,B)},me=(P,M,j,Q,K,X,se,Z,T)=>{let v=0;const I=M.length;let B=P.length-1,W=I-1;for(;v<=B&&v<=W;){const k=P[v],ce=M[v]=T?Kn(M[v]):Yt(M[v]);if(Qn(k,ce))_(k,ce,j,null,K,X,se,Z,T);else break;v++}for(;v<=B&&v<=W;){const k=P[B],ce=M[W]=T?Kn(M[W]):Yt(M[W]);if(Qn(k,ce))_(k,ce,j,null,K,X,se,Z,T);else break;B--,W--}if(v>B){if(v<=W){const k=W+1,ce=k<I?M[k].el:Q;for(;v<=W;)_(null,M[v]=T?Kn(M[v]):Yt(M[v]),j,ce,K,X,se,Z,T),v++}}else if(v>W)for(;v<=B;)Ae(P[v],K,X,!0),v++;else{const k=v,ce=v,oe=new Map;for(v=ce;v<=W;v++){const Ie=M[v]=T?Kn(M[v]):Yt(M[v]);Ie.key!=null&&oe.set(Ie.key,v)}let le,Ue=0;const re=W-ce+1;let de=!1,be=0;const Pe=new Array(re);for(v=0;v<re;v++)Pe[v]=0;for(v=k;v<=B;v++){const Ie=P[v];if(Ue>=re){Ae(Ie,K,X,!0);continue}let De;if(Ie.key!=null)De=oe.get(Ie.key);else for(le=ce;le<=W;le++)if(Pe[le-ce]===0&&Qn(Ie,M[le])){De=le;break}De===void 0?Ae(Ie,K,X,!0):(Pe[De-ce]=v+1,De>=be?be=De:de=!0,_(Ie,M[De],j,null,K,X,se,Z,T),Ue++)}const ye=de?tg(Pe):or;for(le=ye.length-1,v=re-1;v>=0;v--){const Ie=ce+v,De=M[Ie],et=Ie+1<I?M[Ie+1].el:Q;Pe[v]===0?_(null,De,j,et,K,X,se,Z,T):de&&(le<0||v!==ye[le]?Ee(De,j,et,2):le--)}}},Ee=(P,M,j,Q,K=null)=>{const{el:X,type:se,transition:Z,children:T,shapeFlag:v}=P;if(v&6){Ee(P.component.subTree,M,j,Q);return}if(v&128){P.suspense.move(M,j,Q);return}if(v&64){se.move(P,M,j,we);return}if(se===fn){i(X,M,j);for(let B=0;B<T.length;B++)Ee(T[B],M,j,Q);i(P.anchor,M,j);return}if(se===$r){y(P,M,j);return}if(Q!==2&&v&1&&Z)if(Q===0)Z.beforeEnter(X),i(X,M,j),Xt(()=>Z.enter(X),K);else{const{leave:B,delayLeave:W,afterLeave:k}=Z,ce=()=>i(X,M,j),oe=()=>{B(X,()=>{ce(),k&&k()})};W?W(X,ce,oe):oe()}else i(X,M,j)},Ae=(P,M,j,Q=!1,K=!1)=>{const{type:X,props:se,ref:Z,children:T,dynamicChildren:v,shapeFlag:I,patchFlag:B,dirs:W,cacheIndex:k}=P;if(B===-2&&(K=!1),Z!=null&&ts(Z,null,j,P,!0),k!=null&&(M.renderCache[k]=void 0),I&256){M.ctx.deactivate(P);return}const ce=I&1&&W,oe=!fr(P);let le;if(oe&&(le=se&&se.onVnodeBeforeUnmount)&&Jt(le,M,P),I&6)fe(P.component,j,Q);else{if(I&128){P.suspense.unmount(j,Q);return}ce&&yn(P,null,M,"beforeUnmount"),I&64?P.type.remove(P,M,j,we,Q):v&&!v.hasOnce&&(X!==fn||B>0&&B&64)?Me(v,M,j,!1,!0):(X===fn&&B&384||!K&&I&16)&&Me(T,M,j),Q&&Ve(P)}(oe&&(le=se&&se.onVnodeUnmounted)||ce)&&Xt(()=>{le&&Jt(le,M,P),ce&&yn(P,null,M,"unmounted")},j)},Ve=P=>{const{type:M,el:j,anchor:Q,transition:K}=P;if(M===fn){ne(j,Q);return}if(M===$r){x(P);return}const X=()=>{r(j),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(P.shapeFlag&1&&K&&!K.persisted){const{leave:se,delayLeave:Z}=K,T=()=>se(j,X);Z?Z(P.el,X,T):T()}else X()},ne=(P,M)=>{let j;for(;P!==M;)j=h(P),r(P),P=j;r(M)},fe=(P,M,j)=>{const{bum:Q,scope:K,job:X,subTree:se,um:Z,m:T,a:v}=P;fu(T),fu(v),Q&&Go(Q),K.stop(),X&&(X.flags|=8,Ae(se,P,M,j)),Z&&Xt(Z,M),Xt(()=>{P.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},Me=(P,M,j,Q=!1,K=!1,X=0)=>{for(let se=X;se<P.length;se++)Ae(P[se],M,j,Q,K)},he=P=>{if(P.shapeFlag&6)return he(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const M=h(P.anchor||P.el),j=M&&M[Tm];return j?h(j):M};let Re=!1;const Xe=(P,M,j)=>{P==null?M._vnode&&Ae(M._vnode,null,null,!0):_(M._vnode||null,P,M,null,null,null,j),M._vnode=P,Re||(Re=!0,tu(),fo(),Re=!1)},we={p:_,um:Ae,m:Ee,r:Ve,mt:Y,mc:D,pc:U,pbc:S,n:he,o:n};let ot,it;return e&&([ot,it]=e(we)),{render:Xe,hydrate:ot,createApp:qm(Xe,ot)}}function Ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function mi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Jh(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Kn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Jh(o,a)),a.type===Ii&&(a.el=o.el)}}function tg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Qh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qh(e)}function fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const ng=Symbol.for("v-scx"),ig=()=>hr(ng);function rg(n,e){return gc(n,null,e)}function Zo(n,e,t){return gc(n,e,t)}function gc(n,e,t=st){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ct({},t),l=e&&i||!e&&s!=="post";let u;if(xr){if(s==="sync"){const p=ig();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Tn,p.resume=Tn,p.pause=Tn,p}}const c=_t;a.call=(p,g,_)=>bn(p,c,g,_);let f=!1;s==="post"?a.scheduler=p=>{Xt(p,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():lc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Mm(n,e,a);return xr&&(u?u.push(h):l&&h()),h}function sg(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?ed(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=ls(this),a=gc(r,s.bind(i),t);return o(),a}function ed(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const og=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rn(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function ag(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),o=s&&og(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>ht(c)?c.trim():c)),o.number&&(r=t.map(Up)));let a,l=i[a=Vo(e)]||i[a=Vo(rn(e))];!l&&s&&(l=i[a=Vo(Oi(e))]),l&&bn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(u,n,6,r)}}function td(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ne(n)){const l=u=>{const c=td(u,e,!0);c&&(a=!0,Ct(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(lt(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):Ct(o,s),lt(n)&&i.set(n,o),o)}function Uo(n,e){return!n||!os(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Oi(e))||Qe(n,e))}function Jo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n,m=ho(n);let d,A;try{if(t.shapeFlag&4){const x=r||i,R=x;d=Yt(u.call(R,x,c,f,p,h,g)),A=a}else{const x=e;d=Yt(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),A=e.props?a:cg(a)}}catch(x){jr.length=0,Rr(x,n,1),d=pt(ai)}let y=d;if(A&&_!==!1){const x=Object.keys(A),{shapeFlag:R}=y;x.length&&R&7&&(s&&x.some(Kl)&&(A=ug(A,s)),y=vr(y,A,!1,!0))}return t.dirs&&(y=vr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&cc(y,t.transition),d=y,ho(m),d}function lg(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(is(r)){if(r.type!==ai||r.children==="v-if"){if(t)return;t=r}}else return}return t}const cg=n=>{let e;for(const t in n)(t==="class"||t==="style"||os(t))&&((e||(e={}))[t]=n[t]);return e},ug=(n,e)=>{const t={};for(const i in n)(!Kl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==i[h]&&!Uo(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hu(i,o,u):!0:!!o;return!1}function hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Uo(t,s))return!0}return!1}function No({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const nd=n=>n.__isSuspense;let qa=0;const hg={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,u){if(n==null)pg(e,t,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}mg(n,e,t,i,r,o,a,l,u)}},hydrate:gg,normalize:_g},dg=hg;function ns(n,e){const t=n.props&&n.props[e];Ne(t)&&t()}function pg(n,e,t,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=n.suspense=id(n,r,i,e,f,t,s,o,a,l);u(null,h.pendingBranch=n.ssContent,f,null,i,h,s,o),h.deps>0?(ns(n,"onPending"),ns(n,"onFallback"),u(null,n.ssFallback,e,t,i,null,s,o),dr(h,n.ssFallback)):h.resolve(!1,!0)}function mg(n,e,t,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:d}=f;if(_)f.pendingBranch=h,Qn(h,_)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(d||(l(g,p,t,i,r,null,s,o,a),dr(f,p)))):(f.pendingId=qa++,d?(f.isHydrating=!1,f.activeBranch=_):u(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,p,t,i,r,null,s,o,a),dr(f,p))):g&&Qn(h,g)?(l(g,h,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&Qn(h,g))l(g,h,t,i,r,f,s,o,a),dr(f,h);else if(ns(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=qa++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:A,pendingId:y}=f;A>0?setTimeout(()=>{f.pendingId===y&&f.fallback(p)},A):A===0&&f.fallback(p)}}function id(n,e,t,i,r,s,o,a,l,u,c=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:_,remove:m}}=u;let d;const A=vg(n);A&&e&&e.pendingBranch&&(d=e.pendingId,e.deps++);const y=n.props?Np(n.props.timeout):void 0,x=s,R={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:qa++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(C=!1,w=!1){const{vnode:D,activeBranch:E,pendingBranch:S,pendingId:L,effects:V,parentComponent:z,container:Y}=R;let te=!1;R.isHydrating?R.isHydrating=!1:C||(te=E&&S.transition&&S.transition.mode==="out-in",te&&(E.transition.afterLeave=()=>{L===R.pendingId&&(h(S,Y,s===x?g(E):s,0),ka(V))}),E&&(_(E.el)===Y&&(s=g(E)),p(E,z,R,!0)),te||h(S,Y,s,0)),dr(R,S),R.pendingBranch=null,R.isInFallback=!1;let F=R.parent,J=!1;for(;F;){if(F.pendingBranch){F.effects.push(...V),J=!0;break}F=F.parent}!J&&!te&&ka(V),R.effects=[],A&&e&&e.pendingBranch&&d===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),ns(D,"onResolve")},fallback(C){if(!R.pendingBranch)return;const{vnode:w,activeBranch:D,parentComponent:E,container:S,namespace:L}=R;ns(w,"onFallback");const V=g(D),z=()=>{R.isInFallback&&(f(null,C,S,V,E,null,L,a,l),dr(R,C))},Y=C.transition&&C.transition.mode==="out-in";Y&&(D.transition.afterLeave=z),R.isInFallback=!0,p(D,E,null,!0),Y||z()},move(C,w,D){R.activeBranch&&h(R.activeBranch,C,w,D),R.container=C},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(C,w,D){const E=!!R.pendingBranch;E&&R.deps++;const S=C.vnode.el;C.asyncDep.catch(L=>{Rr(L,C,0)}).then(L=>{if(C.isUnmounted||R.isUnmounted||R.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:V}=C;$a(C,L),S&&(V.el=S);const z=!S&&C.subTree.el;w(C,V,_(S||C.subTree.el),S?null:g(C.subTree),R,o,D),z&&m(z),No(C,V.el),E&&--R.deps===0&&R.resolve()})},unmount(C,w){R.isUnmounted=!0,R.activeBranch&&p(R.activeBranch,t,C,w),R.pendingBranch&&p(R.pendingBranch,t,C,w)}};return R}function gg(n,e,t,i,r,s,o,a,l){const u=e.suspense=id(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(n,u.pendingBranch=e.ssContent,t,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function _g(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=du(i?t.default:t),n.ssFallback=i?du(t.fallback):pt(ai)}function du(n){let e;if(Ne(n)){const t=_r&&n._c;t&&(n._d=!1,Mn()),n=n(),t&&(n._d=!0,e=Ht,sd())}return Be(n)&&(n=lg(n)),n=Yt(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function rd(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):ka(n)}function dr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,No(i,r))}function vg(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const fn=Symbol.for("v-fgt"),Ii=Symbol.for("v-txt"),ai=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),jr=[];let Ht=null;function Mn(n=!1){jr.push(Ht=n?null:[])}function sd(){jr.pop(),Ht=jr[jr.length-1]||null}let _r=1;function pu(n,e=!1){_r+=n,n<0&&Ht&&e&&(Ht.hasOnce=!0)}function od(n){return n.dynamicChildren=_r>0?Ht||or:null,sd(),_r>0&&Ht&&Ht.push(n),n}function _c(n,e,t,i,r,s){return od(ld(n,e,t,i,r,s,!0))}function nr(n,e,t,i,r){return od(pt(n,e,t,i,r,!0))}function is(n){return n?n.__v_isVNode===!0:!1}function Qn(n,e){return n.type===e.type&&n.key===e.key}const ad=({key:n})=>n??null,Js=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||vt(n)||Ne(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function ld(n,e=null,t=null,i=0,r=null,s=n===fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ad(e),ref:e&&Js(e),scopeId:Ah,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return a?(vc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),_r>0&&!o&&Ht&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ht.push(l),l}const pt=xg;function xg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Nh)&&(n=ai),is(n)){const a=vr(n,e,!0);return t&&vc(a,t),_r>0&&!s&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(n)]=a:Ht.push(a)),a.patchFlag=-2,a}if(Pg(n)&&(n=n.__vccOpts),e){e=cd(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=Lo(a)),lt(l)&&(oc(l)&&!Be(l)&&(l=Ct({},l)),e.style=Do(l))}const o=ht(n)?1:nd(n)?128:bm(n)?64:lt(n)?4:Ne(n)?2:0;return ld(n,e,t,i,r,o,s,!0)}function cd(n){return n?oc(n)||Gh(n)?Ct({},n):n:null}function vr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?Mg(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&ad(u),ref:e&&e.ref?t&&s?Be(s)?s.concat(Js(e)):[s,Js(e)]:Js(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vr(n.ssContent),ssFallback:n.ssFallback&&vr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cc(c,l.clone(c)),c}function ud(n=" ",e=0){return pt(Ii,null,n,e)}function yg(n,e){const t=pt($r,null,n);return t.staticCount=e,t}function Yt(n){return n==null||typeof n=="boolean"?pt(ai):Be(n)?pt(fn,null,n.slice()):is(n)?Kn(n):pt(Ii,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vr(n)}function vc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Gh(e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),i&64?(t=16,e=[ud(e)]):t=8);n.children=e,n.shapeFlag|=t}function Mg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Lo([e.class,i.class]));else if(r==="style")e.style=Do([e.style,i.style]);else if(os(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Jt(n,e,t,i=null){bn(n,e,7,[t,i])}const Sg=Hh();let Eg=0;function Tg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Sg,s={uid:Eg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xh(i,r),emitsOptions:td(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ag.bind(null,s),n.ce&&n.ce(s),s}let _t=null;const fd=()=>_t||$t;let mo,Ya;{const n=Po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};mo=e("__VUE_INSTANCE_SETTERS__",t=>_t=t),Ya=e("__VUE_SSR_SETTERS__",t=>xr=t)}const ls=n=>{const e=_t;return mo(n),n.scope.on(),()=>{n.scope.off(),mo(e)}},mu=()=>{_t&&_t.scope.off(),mo(null)};function hd(n){return n.vnode.shapeFlag&4}let xr=!1;function bg(n,e=!1,t=!1){e&&Ya(e);const{props:i,children:r}=n.vnode,s=hd(n);Ym(n,i,s,e),Zm(n,r,t);const o=s?Ag(n,e):void 0;return e&&Ya(!1),o}function Ag(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hm);const{setup:i}=t;if(i){ui();const r=n.setupContext=i.length>1?Rg(n):null,s=ls(n),o=as(i,n,0,[n.props,r]),a=Zf(o);if(fi(),s(),(a||n.sp)&&!fr(n)&&uc(n),a){if(o.then(mu,mu),e)return o.then(l=>{$a(n,l)}).catch(l=>{Rr(l,n,0)});n.asyncDep=o}else $a(n,o)}else dd(n)}function $a(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=Sh(e)),dd(n)}function dd(n,e,t){const i=n.type;n.render||(n.render=i.render||Tn);{const r=ls(n);ui();try{zm(n)}finally{fi(),r()}}}const wg={get(n,e){return Rt(n,"get",""),n[e]}};function Rg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wg),slots:n.slots,emit:n.emit,expose:e}}function xc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sh(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yr)return Yr[t](n)},has(e,t){return t in e||t in Yr}})):n.proxy}function Cg(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function Pg(n){return Ne(n)&&"__vccOpts"in n}const pd=(n,e)=>xm(n,e,xr);function Dg(n,e,t){const i=arguments.length;return i===2?lt(e)&&!Be(e)?is(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&is(t)&&(t=[t]),pt(n,e,t))}const Lg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ja;const gu=typeof window<"u"&&window.trustedTypes;if(gu)try{ja=gu.createPolicy("vue",{createHTML:n=>n})}catch{}const md=ja?n=>ja.createHTML(n):n=>n,Ig="http://www.w3.org/2000/svg",Ug="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,_u=Un&&Un.createElement("template"),Ng={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS(Ig,n):e==="mathml"?Un.createElementNS(Ug,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{_u.innerHTML=md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=_u.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fg=Symbol("_vtc");function Og(n,e,t){const i=n[Fg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vu=Symbol("_vod"),Bg=Symbol("_vsh"),Hg=Symbol(""),zg=/(^|;)\s*display\s*:/;function kg(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Qs(i,a,"")}else for(const o in e)t[o]==null&&Qs(i,o,"");for(const o in t)o==="display"&&(s=!0),Qs(i,o,t[o])}else if(r){if(e!==t){const o=i[Hg];o&&(t+=";"+o),i.cssText=t,s=zg.test(t)}}else e&&n.removeAttribute("style");vu in n&&(n[vu]=s?i.display:"",n[Bg]&&(i.display="none"))}const xu=/\s*!important$/;function Qs(n,e,t){if(Be(t))t.forEach(i=>Qs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vg(n,e);xu.test(t)?n.setProperty(Oi(i),t.replace(xu,""),"important"):n[i]=t}}const yu=["Webkit","Moz","ms"],Qo={};function Vg(n,e){const t=Qo[e];if(t)return t;let i=rn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=Co(i);for(let r=0;r<yu.length;r++){const s=yu[r]+i;if(s in n)return Qo[e]=s}return e}const Mu="http://www.w3.org/1999/xlink";function Su(n,e,t,i,r,s=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Mu,e.slice(6,e.length)):n.setAttributeNS(Mu,e,t):t==null||s&&!th(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function Eu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?md(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=th(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Gg(n,e,t,i){n.addEventListener(e,t,i)}function Wg(n,e,t,i){n.removeEventListener(e,t,i)}const Tu=Symbol("_vei");function Xg(n,e,t,i,r=null){const s=n[Tu]||(n[Tu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=qg(e);if(i){const u=s[e]=jg(i,r);Gg(n,a,u,l)}else o&&(Wg(n,a,o,l),s[e]=void 0)}}const bu=/(?:Once|Passive|Capture)$/;function qg(n){let e;if(bu.test(n)){e={};let i;for(;i=n.match(bu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let ea=0;const Yg=Promise.resolve(),$g=()=>ea||(Yg.then(()=>ea=0),ea=Date.now());function jg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(Kg(i,t.value),e,5,[i])};return t.value=n,t.attached=$g(),t}function Kg(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Au=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Og(n,i,o):e==="style"?kg(n,t,i):os(e)?Kl(e)||Xg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jg(n,e,i,o))?(Eu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Su(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ht(i))?Eu(n,rn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Su(n,e,i,o))};function Jg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Au(e)&&Ne(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Au(e)&&ht(t)?!1:e in n}const gd=Ct({patchProp:Zg},Ng);let Kr,wu=!1;function Qg(){return Kr||(Kr=Qm(gd))}function e_(){return Kr=wu?Kr:eg(gd),wu=!0,Kr}const t_=(...n)=>{const e=Qg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vd(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_d(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},n_=(...n)=>{const e=e_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vd(i);if(r)return t(r,!0,_d(r))},e};function _d(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vd(n){return ht(n)?document.querySelector(n):n}const i_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,r_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,s_=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function o_(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){a_(n);return}return e}function a_(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function go(n,e={}){if(typeof n!="string")return n;const t=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return t.slice(1,-1);if(t.length<=9){const i=t.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!s_.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(i_.test(n)||r_.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,o_)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const l_=/#/g,c_=/&/g,u_=/\//g,f_=/=/g,yc=/\+/g,h_=/%5e/gi,d_=/%60/gi,p_=/%7c/gi,m_=/%20/gi;function g_(n){return encodeURI(""+n).replace(p_,"|")}function Ka(n){return g_(typeof n=="string"?n:JSON.stringify(n)).replace(yc,"%2B").replace(m_,"+").replace(l_,"%23").replace(c_,"%26").replace(d_,"`").replace(h_,"^").replace(u_,"%2F")}function ta(n){return Ka(n).replace(f_,"%3D")}function _o(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function __(n){return _o(n.replace(yc," "))}function v_(n){return _o(n.replace(yc," "))}function Mc(n=""){const e={};n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=__(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=v_(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function x_(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${ta(n)}=${Ka(t)}`).join("&"):`${ta(n)}=${Ka(e)}`:ta(n)}function xd(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>x_(e,n[e])).filter(Boolean).join("&")}const y_=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,M_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,S_=/^([/\\]\s*){2,}[^/\\]/,E_=/^[\s\0]*(blob|data|javascript|vbscript):$/i,T_=/\/$|\/\?|\/#/,b_=/^\.?\//;function Cr(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?y_.test(n):M_.test(n)||(e.acceptRelative?S_.test(n):!1)}function A_(n){return!!n&&E_.test(n)}function Za(n="",e){return e?T_.test(n):n.endsWith("/")}function Sc(n="",e){if(!e)return(Za(n)?n.slice(0,-1):n)||"/";if(!Za(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r>=0&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Ja(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if(Za(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r>=0&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function w_(n=""){return n.startsWith("/")}function Ru(n=""){return w_(n)?n:"/"+n}function R_(n,e){if(Md(e)||Cr(n))return n;const t=Sc(e);return n.startsWith(t)?n:Fo(t,n)}function C_(n,e){if(Md(e))return n;const t=Sc(e);if(!n.startsWith(t))return n;const i=n.slice(t.length);return i[0]==="/"?i:"/"+i}function yd(n,e){const t=Td(n),i={...Mc(t.search),...e};return t.search=xd(i),bd(t)}function Md(n){return!n||n==="/"}function P_(n){return n&&n!=="/"}function Fo(n,...e){let t=n||"";for(const i of e.filter(r=>P_(r)))if(t){const r=i.replace(b_,"");t=Ja(t)+r}else t=i;return t}function Sd(...n){var o,a,l,u;const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const c of t)if(!(!c||c==="/")){for(const[f,h]of c.split(e).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&Cr(i[0]))continue;i.pop(),r--;continue}if(f===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(a=t[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=t[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(u=t[t.length-1])!=null&&u.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function D_(n,e,t={}){return t.trailingSlash||(n=Ja(n),e=Ja(e)),t.leadingSlash||(n=Ru(n),e=Ru(e)),t.encoding||(n=_o(n),e=_o(e)),n===e}const Ed=Symbol.for("ufo:protocolRelative");function Td(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,h=""]=t;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!Cr(n,{acceptRelative:!0}))return Cu(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=Cu(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Ed]:!i}}function Cu(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function bd(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[Ed]?(n.protocol||"")+"//":"")+r+s+e+t+i}class L_ extends Error{constructor(e,t){super(e,t),this.name="FetchError",t!=null&&t.cause&&!this.cause&&(this.cause=t.cause)}}function I_(n){var l,u,c,f,h;const e=((l=n.error)==null?void 0:l.message)||((u=n.error)==null?void 0:u.toString())||"",t=((c=n.request)==null?void 0:c.method)||((f=n.options)==null?void 0:f.method)||"GET",i=((h=n.request)==null?void 0:h.url)||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new L_(o,n.error?{cause:n.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(a,p,{get(){return n[p]}});for(const[p,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,p,{get(){return n.response&&n.response[g]}});return a}const U_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Pu(n="GET"){return U_.has(n.toUpperCase())}function N_(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const F_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),O_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function B_(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return O_.test(e)?"json":F_.has(e)||e.startsWith("text/")?"text":"blob"}function H_(n,e,t,i){const r=z_((e==null?void 0:e.headers)??(n==null?void 0:n.headers),t==null?void 0:t.headers,i);let s;return(t!=null&&t.query||t!=null&&t.params||e!=null&&e.params||e!=null&&e.query)&&(s={...t==null?void 0:t.params,...t==null?void 0:t.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...t,...e,query:s,params:s,headers:r}}function z_(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function Es(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const k_=new Set([408,409,425,429,500,502,503,504]),V_=new Set([101,204,205,304]);function Ad(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=Pu(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):k_.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(p=>setTimeout(p,h)),s(a.request,{...a.options,retry:c-1})}}const u=I_(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:H_(l,u,n.defaults,t),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await Es(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=R_(c.request,c.options.baseURL)),c.options.query&&(c.request=yd(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Pu(c.options.method)&&(N_(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new t(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let f;if(!c.options.signal&&c.options.timeout){const p=new i;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,p.abort(g)},c.options.timeout),c.options.signal=p.signal}try{c.response=await e(c.request,c.options)}catch(p){return c.error=p,c.options.onRequestError&&await Es(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!V_.has(c.response.status)&&c.options.method!=="HEAD"){const p=(c.options.parseResponse?"json":c.options.responseType)||B_(c.response.headers.get("content-type")||"");switch(p){case"json":{const g=await c.response.text(),_=c.options.parseResponse||go;c.response._data=_(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[p]()}}return c.options.onResponse&&await Es(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Es(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Ad({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const vo=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),G_=vo.fetch?(...n)=>vo.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),W_=vo.Headers,X_=vo.AbortController,q_=Ad({fetch:G_,Headers:W_,AbortController:X_}),Y_=q_,$_=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},xo=$_().app,j_=()=>xo.baseURL,K_=()=>xo.buildAssetsDir,Ec=(...n)=>Sd(wd(),K_(),...n),wd=(...n)=>{const e=xo.cdnURL||xo.baseURL;return n.length?Sd(e,...n):e};globalThis.__buildAssetsURL=Ec,globalThis.__publicAssetsURL=wd;globalThis.$fetch||(globalThis.$fetch=Y_.create({baseURL:j_()}));function Qa(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?Qa(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const Z_={run:n=>n()},J_=()=>Z_,Rd=typeof console.createTask<"u"?console.createTask:J_;function Q_(n,e){const t=e.shift(),i=Rd(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function e0(n,e){const t=e.shift(),i=Rd(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function na(n,e){for(const t of[...n])t(e)}class t0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Qa(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=Qa(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Q_,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(e0,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&na(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&na(this._after,r)}):(this._after&&r&&na(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Cd(){return new t0}function n0(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;el.add(u);try{const c=r?r.run(o,a):a();return t||(e=void 0),await c}finally{el.delete(u)}}}}function i0(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=n0({...n,...i})),e[t]}}}const yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Du="__unctx__",r0=yo[Du]||(yo[Du]=i0()),s0=(n,e={})=>r0.get(n,e),Lu="__unctx_async_handlers__",el=yo[Lu]||(yo[Lu]=new Set);function Pd(n){const e=[];for(const r of el){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const rb={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},o0=null,a0="#__nuxt",Dd="nuxt-app",Iu=36e5,l0="vite:preloadError";function Ld(n=Dd){return s0(n,{asyncContext:!1})}const c0="__nuxt_plugin";function u0(n){var r;let e=0;const t={_id:n.id||Dd||"nuxt-app",_scope:Wp(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.0"},get vue(){return t.vueApp.version}},payload:ir({...((r=n.ssrContext)==null?void 0:r.payload)||{},data:ir({}),state:si({}),once:new Set,_errors:ir({})}),static:{data:{}},runWithContext(s){return t._scope.active&&!sh()?t._scope.run(()=>Uu(t,s)):Uu(t,s)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:ir({}),_payloadRevivers:{},...n};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(t.payload[o],s[o]);break;default:t.payload[o]=s[o]}}t.hooks=Cd(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(s,o)=>{const a="$"+s;Ts(t,a,o),Ts(t.vueApp.config.globalProperties,a,o)},Ts(t.vueApp,"$nuxt",t),Ts(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(l0,o=>{t.callHook("app:chunkError",{error:o.payload}),(t.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Tt);const s=t.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});t.hook("app:mounted",s)}const i=t.payload.config;return t.provide("config",i),t}function f0(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function h0(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function d0(n,e){const t=[],i=[],r=[],s=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(f=>e.some(h=>h._name===f)&&!t.includes(f)))??[];if(u.length>0)i.push([new Set(u),l]);else{const f=h0(n,l).then(async()=>{l._name&&(t.push(l._name),await Promise.all(i.map(async([h,p])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(p)))})))});l.parallel?r.push(f.catch(h=>s.push(h))):await f}}for(const l of e)f0(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function hi(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[c0]:!0,_name:e})}function Uu(n,e,t){const i=()=>e();return Ld(n._id).set(n),n.vueApp.runWithContext(i)}function p0(n){var t;let e;return pc()&&(e=(t=fd())==null?void 0:t.appContext.app.$nuxt),e||(e=Ld(n).tryUse()),e||null}function Tt(n){const e=p0(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function rs(n){return Tt().$config}function Ts(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function m0(n,e){return{ctx:{table:n},matchAll:t=>Ud(t,n)}}function Id(n){const e={};for(const t in n)e[t]=t==="dynamic"?new Map(Object.entries(n[t]).map(([i,r])=>[i,Id(r)])):new Map(Object.entries(n[t]));return e}function g0(n){return m0(Id(n))}function Ud(n,e,t){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,o]of Nu(e.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(o);for(const[s,o]of Nu(e.dynamic))if(n.startsWith(s+"/")){const a="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...Ud(a,o))}const r=e.static.get(n);return r&&i.push(r),i.filter(Boolean)}function Nu(n){return[...n.entries()].sort((e,t)=>e[0].length-t[0].length)}function ia(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function tl(n,e,t=".",i){if(!ia(e))return tl(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:ia(o)&&ia(r[s])?r[s]=tl(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function _0(n){return(...e)=>e.reduce((t,i)=>tl(t,i,"",n),{})}const v0=_0();function x0(n,e){try{return e in n}catch{return!1}}class nl extends Error{constructor(t,i={}){super(t,i);Vn(this,"statusCode",500);Vn(this,"fatal",!1);Vn(this,"unhandled",!1);Vn(this,"statusMessage");Vn(this,"data");Vn(this,"cause");i.cause&&!this.cause&&(this.cause=i.cause)}toJSON(){const t={message:this.message,statusCode:il(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Nd(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Vn(nl,"__h3_error__",!0);function y0(n){if(typeof n=="string")return new nl(n);if(M0(n))return n;const e=new nl(n.message??n.statusMessage??"",{cause:n.cause||n});if(x0(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=il(n.statusCode,e.statusCode):n.status&&(e.statusCode=il(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;Nd(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function M0(n){var e;return((e=n==null?void 0:n.constructor)==null?void 0:e.__h3_error__)===!0}const S0=/[^\u0009\u0020-\u007E]/g;function Nd(n=""){return n.replace(S0,"")}function il(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const Fd=Symbol("route"),Ui=()=>{var n;return(n=Tt())==null?void 0:n.$router},Od=()=>pc()?hr(Fd,Tt()._route):Tt()._route;const E0=()=>{try{if(Tt()._processingMiddleware)return!0}catch{return!1}return!1},T0=(n,e)=>{n||(n="/");const t=typeof n=="string"?n:"path"in n?b0(n):Ui().resolve(n).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,c=Object.entries(u).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(t,l,c),Promise.resolve()}const i=Cr(t,{acceptRelative:!0}),r=(e==null?void 0:e.external)||i;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(t,window.location.href);if(l&&A_(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=E0();if(!r&&s){if(e!=null&&e.replace){if(typeof n=="string"){const{pathname:l,search:u,hash:c}=Td(n);return{path:l,...u&&{query:Mc(u)},...c&&{hash:c},replace:!0}}return{...n,replace:!0}}return n}const o=Ui(),a=Tt();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(n):o.push(n)};function b0(n){return yd(n.path||"",n.query||{})+(n.hash||"")}const Bd="__nuxt_error",Tc=()=>gm(Tt().payload,"error"),A0=n=>{const e=bc(n);try{const t=Tt(),i=Tc();t.hooks.callHook("app:error",e),i.value||(i.value=e)}catch{throw e}return e},w0=async(n={})=>{const e=Tt(),t=Tc();e.callHook("app:error:cleared",n),n.redirect&&await Ui().replace(n.redirect),t.value=o0},R0=n=>!!n&&typeof n=="object"&&Bd in n,bc=n=>{const e=y0(n);return Object.defineProperty(e,Bd,{value:!0,configurable:!1,writable:!1}),e};function Fu(n){const e=P0(n),t=new ArrayBuffer(e.length),i=new DataView(t);for(let r=0;r<t.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return t}const C0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function P0(n){n.length%4===0&&(n=n.replace(/==?$/,""));let e="",t=0,i=0;for(let r=0;r<n.length;r++)t<<=6,t|=C0.indexOf(n[r]),i+=6,i===24&&(e+=String.fromCharCode((t&16711680)>>16),e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255),t=i=0);return i===12?(t>>=4,e+=String.fromCharCode(t)):i===18&&(t>>=2,e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255)),e}const D0=-1,L0=-2,I0=-3,U0=-4,N0=-5,F0=-6;function O0(n,e){return B0(JSON.parse(n),e)}function B0(n,e){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const t=n,i=Array(t.length);function r(s,o=!1){if(s===D0)return;if(s===I0)return NaN;if(s===U0)return 1/0;if(s===N0)return-1/0;if(s===F0)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=t[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let p=1;p<a.length;p+=1)c.add(r(a[p]));break;case"Map":const f=new Map;i[s]=f;for(let p=1;p<a.length;p+=2)f.set(r(a[p]),r(a[p+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let p=1;p<a.length;p+=2)h[a[p]]=r(a[p+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const p=globalThis[l],g=a[1],_=Fu(g),m=new p(_);i[s]=m;break}case"ArrayBuffer":{const p=a[1],g=Fu(p);i[s]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==L0&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}const H0=new Set(["link","style","script","noscript"]),z0=new Set(["title","titleTemplate","script","style","noscript"]),Ou=new Set(["base","meta","link","style","script","noscript"]),k0=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),V0=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),G0=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),W0=new Set(["templateParams","htmlAttrs","bodyAttrs"]),X0=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const q0=["name","property","http-equiv"];function Hd(n){const e=n.split(":")[1];return X0.has(e)}function rl(n){const{props:e,tag:t}=n;if(V0.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(n.tag==="meta"){for(const i of q0)if(e[i]!==void 0)return`${t}:${e[i]}`}if(n.key)return`${t}:key:${n.key}`;if(e.id)return`${t}:id:${e.id}`;if(z0.has(t)){const i=n.textContent||n.innerHTML;if(i)return`${t}:content:${i}`}}function Bu(n){const e=n._h||n._d;if(e)return e;const t=n.textContent||n.innerHTML;return t||`${n.tag}:${Object.entries(n.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function Mo(n,e,t){typeof n==="function"&&(!t||t!=="titleTemplate"&&!(t[0]==="o"&&t[1]==="n"))&&(n=n());let r;if(e&&(r=e(t,n)),Array.isArray(r))return r.map(s=>Mo(s,e));if((r==null?void 0:r.constructor)===Object){const s={};for(const o of Object.keys(r))s[o]=Mo(r[o],e,o);return s}return r}function Y0(n,e){const t=n==="style"?new Map:new Set;function i(r){const s=r.trim();if(s)if(n==="style"){const[o,...a]=s.split(":").map(l=>l.trim());o&&a.length&&t.set(o,a.join(":"))}else s.split(" ").filter(Boolean).forEach(o=>t.add(o))}return typeof e=="string"?n==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(n==="style"?t.set(r.trim(),s):i(r))}),t}function zd(n,e){return n.props=n.props||{},e&&Object.entries(e).forEach(([t,i])=>{if(i===null){n.props[t]=null;return}if(t==="class"||t==="style"){n.props[t]=Y0(t,i);return}if(G0.has(t)){if(["textContent","innerHTML"].includes(t)&&typeof i=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,n.props.type=o,n[t]=JSON.stringify(i)}else n[t]=i;return}const r=String(i),s=t.startsWith("data-");r==="true"||r===""?n.props[t]=s?"true":!0:!i&&s&&r==="false"?n.props[t]="false":i!==void 0&&(n.props[t]=i)}),n}function $0(n,e){const t=typeof e=="object"&&typeof e!="function"?e:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},i=zd({tag:n,props:{}},t);return i.key&&H0.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function j0(n,e){if(!n)return[];typeof n=="function"&&(n=n());const t=(r,s)=>{for(let o=0;o<e.length;o++)s=e[o](r,s);return s};n=t(void 0,n);const i=[];return n=Mo(n,t),Object.entries(n||{}).forEach(([r,s])=>{if(s!==void 0)for(const o of Array.isArray(s)?s:[s])i.push($0(r,o))}),i.flat()}const sl=(n,e)=>n._w===e._w?n._p-e._p:n._w-e._w,Hu={base:-10,title:10},K0={critical:-8,high:-1,low:2},zu={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Z0=/@import/,Nr=n=>n===""||n===!0;function J0(n,e){var s;if(typeof e.tagPriority=="number")return e.tagPriority;let t=100;const i=K0[e.tagPriority]||0,r=n.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:zu;if(e.tag in Hu)t=Hu[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(t=zu.meta[o])}else e.tag==="link"&&e.props.rel?t=r.link[e.props.rel]:e.tag==="script"?Nr(e.props.async)?t=r.script.async:e.props.src&&!Nr(e.props.defer)&&!Nr(e.props.async)&&e.props.type!=="module"&&!((s=e.props.type)!=null&&s.endsWith("json"))?t=r.script.sync:Nr(e.props.defer)&&e.props.src&&!Nr(e.props.async)&&(t=r.script.defer):e.tag==="style"&&(t=e.innerHTML&&Z0.test(e.innerHTML)?r.style.imported:r.style.sync);return(t||100)+i}function ku(n,e){const t=typeof e=="function"?e(n):e,i=t.key||String(n.plugins.size+1);n.plugins.get(i)||(n.plugins.set(i,t),n.hooks.addHooks(t.hooks||{}))}function Q0(n={}){var a;const e=Cd();e.addHooks(n.hooks||{});const t=!n.document,i=new Map,r=new Map,s=[],o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:n,hooks:e,ssr:t,entries:i,headEntries(){return[...i.values()]},use:l=>ku(o,l),push(l,u){const c={...u||{}};delete c.head;const f=c._index??o._entryCount++,h={_i:f,input:l,options:c},p={_poll(g=!1){o.dirty=!0,!g&&s.push(f),e.callHook("entries:updated",o)},dispose(){i.delete(f)&&p._poll(!0)},patch(g){(!c.mode||c.mode==="server"&&t||c.mode==="client"&&!t)&&(h.input=g,i.set(f,h),p._poll())}};return p.patch(l),p},async resolveTags(){var p;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);s.length;){const g=s.shift(),_=i.get(g);if(_){const m={tags:j0(_.input,n.propResolvers||[]).map(d=>Object.assign(d,_.options)),entry:_};await e.callHook("entries:normalize",m),_._tags=m.tags.map((d,A)=>(d._w=J0(o,d),d._p=(_._i<<10)+A,d._d=rl(d),d))}}let u=!1;l.entries.flatMap(g=>(g._tags||[]).map(_=>({..._,props:{..._.props}}))).sort(sl).reduce((g,_)=>{const m=String(_._d||_._p);if(!g.has(m))return g.set(m,_);const d=g.get(m);if(((_==null?void 0:_.tagDuplicateStrategy)||(W0.has(_.tag)?"merge":null)||(_.key&&_.key===d.key?"merge":null))==="merge"){const y={...d.props};Object.entries(_.props).forEach(([x,R])=>y[x]=x==="style"?new Map([...d.props.style||new Map,...R]):x==="class"?new Set([...d.props.class||new Set,...R]):R),g.set(m,{..._,props:y})}else _._p>>10===d._p>>10&&Hd(_._d)?(g.set(m,Object.assign([...Array.isArray(d)?d:[d],_],_)),u=!0):(_._w===d._w?_._p>d._p:(_==null?void 0:_._w)<(d==null?void 0:d._w))&&g.set(m,_);return g},l.tagMap);const c=l.tagMap.get("title"),f=l.tagMap.get("titleTemplate");if(o._title=c==null?void 0:c.textContent,f){const g=f==null?void 0:f.textContent;if(o._titleTemplate=typeof g=="string"?g:void 0,g){let _=typeof g=="function"?g(c==null?void 0:c.textContent):g;typeof _=="string"&&!o.plugins.has("template-params")&&(_=_.replace("%s",(c==null?void 0:c.textContent)||"")),c?_===null?l.tagMap.delete("title"):l.tagMap.set("title",{...c,textContent:_}):(f.tag="title",f.textContent=_)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(sl)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const h=[];for(const g of l.tags){const{innerHTML:_,tag:m,props:d}=g;if(k0.has(m)&&!(Object.keys(d).length===0&&!g.innerHTML&&!g.textContent)&&!(m==="meta"&&!d.content&&!d["http-equiv"]&&!d.charset)){if(m==="script"&&_){if((p=d.type)!=null&&p.endsWith("json")){const A=typeof _=="string"?_:JSON.stringify(_);g.innerHTML=A.replace(/</g,"\\u003C")}else typeof _=="string"&&(g.innerHTML=_.replace(new RegExp(`</${m}`,"g"),`<\\/${m}`));g._d=rl(g)}h.push(g)}}return h}};return((n==null?void 0:n.plugins)||[]).forEach(l=>ku(o,l)),o.hooks.callHook("init",o),(a=n.init)==null||a.forEach(l=>l&&o.push(l)),o}const Zn="%separator",ev=new RegExp(`${Zn}(?:\\s*${Zn})*`,"g");function tv(n,e,t=!1){var r;let i;if(e==="s"||e==="pageTitle")i=n.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");i=(r=n[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else i=n[e];if(i!==void 0)return t?(i||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):i||""}function bs(n,e,t,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(Zn);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Zn||!s.includes(a))return a;const l=tv(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n.endsWith(Zn)&&(n=n.slice(0,-Zn.length)),n.startsWith(Zn)&&(n=n.slice(Zn.length)),n=n.replace(ev,t||"").trim()),n}const Vu=n=>n.includes(":key")?n:n.split(":").join(":key:"),nv={key:"aliasSorting",hooks:{"tags:resolve":n=>{let e=!1;for(const t of n.tags){const i=t.tagPriority;if(!i)continue;const r=String(i);if(r.startsWith("before:")){const s=Vu(r.slice(7)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p-1,e=!0)}else if(r.startsWith("after:")){const s=Vu(r.slice(6)),o=n.tagMap.get(s);o&&(typeof o.tagPriority=="number"&&(t.tagPriority=o.tagPriority),t._p=o._p+1,e=!0)}}e&&(n.tags=n.tags.sort(sl))}}},iv={key:"deprecations",hooks:{"entries:normalize":({tags:n})=>{for(const e of n)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function ol(n){if(typeof n==="function")return n;if(n instanceof Promise)return await n;if(Array.isArray(n))return await Promise.all(n.map(t=>ol(t)));if((n==null?void 0:n.constructor)===Object){const t={};for(const i of Object.keys(n))t[i]=await ol(n[i]);return t}return n}const rv={key:"promises",hooks:{"entries:resolve":async n=>{const e=[];for(const t in n.entries)n.entries[t]._promisesProcessed||e.push(ol(n.entries[t].input).then(i=>{n.entries[t].input=i,n.entries[t]._promisesProcessed=!0}));await Promise.all(e)}}},sv={meta:"content",link:"href",htmlAttrs:"lang"},ov=["innerHTML","textContent"],av=n=>({key:"template-params",hooks:{"entries:normalize":e=>{var i,r,s;const t=((r=(i=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:i[0])==null?void 0:r.props)||{};Object.keys(t).length&&(n._ssrPayload={templateParams:{...((s=n._ssrPayload)==null?void 0:s.templateParams)||{},...t}})},"tags:resolve":({tagMap:e,tags:t})=>{var s;const i=((s=e.get("templateParams"))==null?void 0:s.props)||{},r=i.separator||"|";delete i.separator,i.pageTitle=bs(i.pageTitle||n._title||"",i,r);for(const o of t){if(o.processTemplateParams===!1)continue;const a=sv[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=bs(o.props[a],i,r);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of ov)typeof o[l]=="string"&&(o[l]=bs(o[l],i,r,o.tag==="script"&&o.props.type.endsWith("json")))}n._templateParams=i,n._separator=r},"tags:afterResolve":({tagMap:e})=>{const t=e.get("title");t!=null&&t.textContent&&t.processTemplateParams!==!1&&(t.textContent=bs(t.textContent,n._templateParams,n._separator))}}}),lv=(n,e)=>vt(e)?hm(e):e,kd="usehead";function cv(n){return{install(t){t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(kd,n)}}.install}function uv(){if(pc()){const n=hr(kd);if(!n)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return n}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function sb(n,e={}){const t=e.head||uv();return t.ssr?t.push(n||{},e):fv(t,n,e)}function fv(n,e,t={}){const i=ni(!1);let r;return rg(()=>{const o=i.value?{}:Mo(e,lv);r?r.patch(o):r=n.push(o,t)}),fd()&&(dc(()=>{r.dispose()}),Ph(()=>{i.value=!0}),Ch(()=>{i.value=!1})),r}const hv="modulepreload",dv=function(n,e){return new URL(n,e).href},Gu={},Wu=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=dv(u,i),u in Gu)return;Gu[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===u&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":hv,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let eo,to;function pv(){return eo=$fetch(Ec(`builds/meta/${rs().app.buildId}.json`),{responseType:"json"}),eo.then(n=>{to=g0(n.matcher)}).catch(n=>{console.error("[nuxt] Error fetching app manifest.",n)}),eo}function Oo(){return eo||pv()}async function Ac(n){const e=typeof n=="string"?n:n.path;if(await Oo(),!to)return console.error("[nuxt] Error creating app manifest matcher.",to),{};try{return v0({},...to.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function Xu(n,e={}){const t=await gv(n,e),i=Tt(),r=i._payloadCache||(i._payloadCache={});return t in r?r[t]||null:(r[t]=Gd(n).then(s=>s?Vd(t).then(o=>o||(delete r[t],null)):(r[t]=null,null)),r[t])}const mv="_payload.json";async function gv(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||Cr(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=rs(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await Gd(n)?s:i.app.baseURL;return Fo(o,t.pathname,mv+(r?`?${r}`:""))}async function Vd(n){const e=fetch(n).then(t=>t.text().then(Wd));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}async function Gd(n=Od().path){const e=Tt();return n=Sc(n),(await Oo()).prerendered.includes(n)?!0:e.runWithContext(async()=>{const i=await Ac({path:n});return!!i.prerender&&!i.redirect})}let gi=null;async function _v(){var i;if(gi)return gi;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await Wd(n.textContent||""),t=n.dataset.src?await Vd(n.dataset.src):void 0;return gi={...e,...t,...window.__NUXT__},(i=gi.config)!=null&&i.public&&(gi.config.public=si(gi.config.public)),gi}async function Wd(n){return await O0(n,Tt()._payloadRevivers)}function vv(n,e){Tt()._payloadRevivers[n]=e}const xv=[["NuxtError",n=>bc(n)],["EmptyShallowRef",n=>eu(n==="_"?void 0:n==="0n"?BigInt(0):go(n))],["EmptyRef",n=>ni(n==="_"?void 0:n==="0n"?BigInt(0):go(n))],["ShallowRef",n=>eu(n)],["ShallowReactive",n=>ir(n)],["Ref",n=>ni(n)],["Reactive",n=>si(n)]],yv=hi({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of xv)vv(i,r);Object.assign(n.payload,([e,t]=Pd(()=>n.runWithContext(_v)),e=await e,t(),e)),window.__NUXT__=n.payload}});async function wc(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{var p;const s=new Map,o=new Promise(g=>{n.resolveTags().then(_=>{g(_.map(m=>{const d=s.get(m._d)||0,A={tag:m,id:(d?`${m._d}:${d}`:m._d)||Bu(m),shouldRender:!0};return m._d&&Hd(m._d)&&s.set(m._d,d+1),A}))})});let a=n._dom;if(!a){a={title:t.title,elMap:new Map().set("htmlAttrs",t.documentElement).set("bodyAttrs",t.body)};for(const g of["body","head"]){const _=(p=t[g])==null?void 0:p.children;for(const m of _){const d=m.tagName.toLowerCase();if(!Ou.has(d))continue;const A=zd({tag:d,props:{}},{innerHTML:m.innerHTML,...m.getAttributeNames().reduce((y,x)=>(y[x]=m.getAttribute(x),y),{})||{}});if(A.key=m.getAttribute("data-hid")||void 0,A._d=rl(A)||Bu(A),a.elMap.has(A._d)){let y=1,x=A._d;for(;a.elMap.has(x);)x=`${A._d}:${y++}`;a.elMap.set(x,m)}else a.elMap.set(A._d,m)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(g,_,m){const d=`${g}:${_}`;a.sideEffects[d]=m,delete a.pendingSideEffects[d]}function u({id:g,$el:_,tag:m}){const d=m.tag.endsWith("Attrs");a.elMap.set(g,_),d||(m.textContent&&m.textContent!==_.textContent&&(_.textContent=m.textContent),m.innerHTML&&m.innerHTML!==_.innerHTML&&(_.innerHTML=m.innerHTML),l(g,"el",()=>{_==null||_.remove(),a.elMap.delete(g)}));for(const A in m.props){if(!Object.hasOwn(m.props,A))continue;const y=m.props[A];if(A.startsWith("on")&&typeof y=="function"){const R=_==null?void 0:_.dataset;if(R&&R[`${A}fired`]){const C=A.slice(0,-5);y.call(_,new Event(C.substring(2)))}_.getAttribute(`data-${A}`)!==""&&((m.tag==="bodyAttrs"?t.defaultView:_).addEventListener(A.substring(2),y.bind(_)),_.setAttribute(`data-${A}`,""));continue}const x=`attr:${A}`;if(A==="class"){if(!y)continue;for(const R of y)d&&l(g,`${x}:${R}`,()=>_.classList.remove(R)),!_.classList.contains(R)&&_.classList.add(R)}else if(A==="style"){if(!y)continue;for(const[R,C]of y)l(g,`${x}:${R}`,()=>{_.style.removeProperty(R)}),_.style.setProperty(R,C)}else y!==!1&&y!==null&&(_.getAttribute(A)!==y&&_.setAttribute(A,y===!0?"":String(y)),d&&l(g,x,()=>_.removeAttribute(A)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await o;for(const g of h){const{tag:_,shouldRender:m,id:d}=g;if(m){if(_.tag==="title"){t.title=_.textContent,l("title","",()=>t.title=a.title);continue}g.$el=g.$el||a.elMap.get(d),g.$el?u(g):Ou.has(_.tag)&&c.push(g)}}for(const g of c){const _=g.tag.tagPosition||"head";g.$el=t.createElement(g.tag.tag),u(g),f[_]=f[_]||t.createDocumentFragment(),f[_].appendChild(g.$el)}for(const g of h)await n.hooks.callHook("dom:renderTag",g,t,l);f.head&&t.head.appendChild(f.head),f.bodyOpen&&t.body.insertBefore(f.bodyOpen,t.body.firstChild),f.bodyClose&&t.body.appendChild(f.bodyClose);for(const g in a.pendingSideEffects)a.pendingSideEffects[g]();n._dom=a,await n.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function Mv(n={}){var i,r,s;const e=((i=n.domOptions)==null?void 0:i.render)||wc;n.document=n.document||(typeof window<"u"?document:void 0);const t=((s=(r=n.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return Q0({...n,plugins:[...n.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[t?JSON.parse(t):!1,...n.init||[]]})}function Sv(n,e){let t=0;return()=>{const i=++t;e(()=>{t===i&&n()})}}function Ev(n={}){const e=Mv({domOptions:{render:Sv(()=>wc(e),ac)},...n});return e.install=cv(e),e}const Tv={disableDefaults:!0,disableCapoSorting:!1,plugins:[iv,rv,av,nv]},bv=hi({name:"nuxt:head",enforce:"pre",setup(n){const e=Ev(Tv);n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await wc(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}}),Av=async n=>{let e,t;const i=([e,t]=Pd(()=>Ac({path:n.path})),e=await e,t(),e);if(i.redirect)return Cr(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},wv=[Av];function ra(n){typeof n=="object"&&(n=bd({pathname:n.path||"",search:xd(n.query||{}),hash:n.hash||""}));const e=new URL(n.toString(),window.location.href);return{path:e.pathname,fullPath:n,query:Mc(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}}const Rv=hi({name:"nuxt:router",enforce:"pre",setup(n){const e=C_(window.location.pathname,rs().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(f,h)=>(i[f].push(h),()=>i[f].splice(i[f].indexOf(h),1)),s=rs().app.baseURL,o=si(ra(e));async function a(f,h){try{const p=ra(f);for(const g of i["navigate:before"]){const _=await g(p,o);if(_===!1||_ instanceof Error)return;if(typeof _=="string"&&_.length)return a(_,!0)}for(const g of i["resolve:before"])await g(p,o);Object.assign(o,p),window.history[h?"replaceState":"pushState"]({},"",Fo(s,p.fullPath)),n.isHydrating||await n.runWithContext(w0);for(const g of i["navigate:after"])await g(p,o)}catch(p){for(const g of i.error)await g(p)}}const u={currentRoute:pd(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>a(f,!1),replace:f=>a(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>r("resolve:before",f),beforeEach:f=>r("navigate:before",f),afterEach:f=>r("navigate:after",f),onError:f=>r("error",f),resolve:ra,addRoute:(f,h)=>{t.push(h)},getRoutes:()=>t,hasRoute:f=>t.some(h=>h.name===f),removeRoute:f=>{const h=t.findIndex(p=>p.name===f);h!==-1&&t.splice(h,1)}};n.vueApp.component("RouterLink",Rh({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:h})=>{const p=()=>a(f.to,f.replace);return()=>{var _;const g=u.resolve(f.to);return f.custom?(_=h.default)==null?void 0:_.call(h,{href:f.to,navigate:p,route:g}):Dg("a",{href:f.to,onClick:m=>(m.preventDefault(),p())},h)}}})),window.addEventListener("popstate",f=>{const h=f.target.location;u.replace(h.href.replace(h.origin,""))}),n._route=o,n._middleware||(n._middleware={global:[],named:{}});const c=n.payload.state._layout;return n.hooks.hookOnce("app:created",async()=>{u.beforeEach(async(f,h)=>{f.meta=si(f.meta||{}),n.isHydrating&&c&&!oi(f.meta.layout)&&(f.meta.layout=c),n._processingMiddleware=!0;{const p=new Set([...wv,...n._middleware.global]);{const g=await n.runWithContext(()=>Ac({path:f.path}));if(g.appMiddleware)for(const _ in g.appMiddleware){const m=n._middleware.named[_];if(!m)return;g.appMiddleware[_]?p.add(m):p.delete(m)}}for(const g of p){const _=await n.runWithContext(()=>g(f,h));if(_!==!0&&(_||_===!1))return _}}}),u.afterEach(()=>{delete n._processingMiddleware}),await u.replace(e),D_(o.fullPath,e)||await n.runWithContext(()=>T0(o.fullPath))}),{provide:{route:o,router:u}}}}),qu=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),ob=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),Rc=n=>{const e=Tt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{qu(()=>n())}):qu(()=>n())},Cv=hi({name:"nuxt:payload",setup(n){Ui().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const i=await Xu(e.path);i&&Object.assign(n.static.data,i.data)}),Rc(()=>{var e;n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await Xu(t)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Oo,1e3)})}}),Pv=hi(()=>{const n=Ui();Rc(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Dv=hi(n=>{let e;async function t(){const i=await Oo();e&&clearTimeout(e),e=setTimeout(t,Iu);try{const r=await $fetch(Ec("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}Rc(()=>{e=setTimeout(t,Iu)})});function Lv(n={}){const e=n.path||window.location.pathname;let t={};try{t=go(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||(t==null?void 0:t.path)!==e||(t==null?void 0:t.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Tt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Iv=hi({name:"nuxt:chunk-reload",setup(n){const e=Ui(),t=rs(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?t.app.baseURL+s.href:Fo(t.app.baseURL,s.fullPath);Lv({path:a,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),Uv=hi({name:"nuxt:global-components"}),Nv=[yv,bv,Rv,Cv,Pv,Dv,Iv,Uv];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="174",Fv=0,Yu=1,Ov=2,Xd=1,Bv=2,In=3,li=0,zt=1,hn=2,ii=0,pr=1,Zr=2,$u=3,ju=4,Hv=5,wi=100,zv=101,kv=102,Vv=103,Gv=104,Wv=200,Xv=201,qv=202,Yv=203,al=204,ll=205,$v=206,jv=207,Kv=208,Zv=209,Jv=210,Qv=211,ex=212,tx=213,nx=214,cl=0,ul=1,fl=2,yr=3,hl=4,dl=5,pl=6,ml=7,qd=0,ix=1,rx=2,ri=0,sx=1,ox=2,ax=3,lx=4,cx=5,ux=6,fx=7,Yd=300,Mr=301,Sr=302,gl=303,_l=304,Bo=306,vl=1e3,Ci=1001,xl=1002,_n=1003,hx=1004,As=1005,En=1006,sa=1007,Pi=1008,Hn=1009,$d=1010,jd=1011,ss=1012,Pc=1013,Ni=1014,Fn=1015,cs=1016,Dc=1017,Lc=1018,Er=1020,Kd=35902,Zd=1021,Jd=1022,pn=1023,Qd=1024,ep=1025,mr=1026,Tr=1027,tp=1028,Ic=1029,np=1030,Uc=1031,Nc=1033,no=33776,io=33777,ro=33778,so=33779,yl=35840,Ml=35841,Sl=35842,El=35843,Tl=36196,bl=37492,Al=37496,wl=37808,Rl=37809,Cl=37810,Pl=37811,Dl=37812,Ll=37813,Il=37814,Ul=37815,Nl=37816,Fl=37817,Ol=37818,Bl=37819,Hl=37820,zl=37821,oo=36492,kl=36494,Vl=36495,ip=36283,Gl=36284,Wl=36285,Xl=36286,dx=3200,px=3201,mx=0,gx=1,ei="",Qt="srgb",br="srgb-linear",So="linear",nt="srgb",ki=7680,Ku=519,_x=512,vx=513,xx=514,rp=515,yx=516,Mx=517,Sx=518,Ex=519,Zu=35044,Ju="300 es",On=2e3,Eo=2001;class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,ql=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Tx(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],A=r[1],y=r[4],x=r[7],R=r[2],C=r[5],w=r[8];return s[0]=o*_+a*A+l*R,s[3]=o*m+a*y+l*C,s[6]=o*d+a*x+l*w,s[1]=u*_+c*A+f*R,s[4]=u*m+c*y+f*C,s[7]=u*d+c*x+f*w,s[2]=h*_+p*A+g*R,s[5]=h*m+p*y+g*C,s[8]=h*d+p*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new ze;function sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bx(){const n=To("canvas");return n.style.display="block",n}const Qu={};function Ti(n){n in Qu||(Qu[n]=!0,console.warn(n))}function Ax(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function wx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ef=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cx(){const n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?So:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:e,whitePoint:i,transfer:So,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const $e=Cx();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Px{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=To("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ca(r[o].image)):s.push(ca(r[o]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lx=0;class kt extends Pr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Ci,r=Ci,s=En,o=Pi,a=pn,l=Hn,u=kt.DEFAULT_ANISOTROPY,c=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=us(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vl:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vl:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Yd;kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(p+1)/2,R=(d+1)/2,C=(c+h)/4,w=(f+_)/4,D=(g+m)/4;return y>x&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=w/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=D/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(h-c)/A,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends Pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Ix{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class op extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,A=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,d*A);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const x=a*A;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,f=f*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*h,e[t+1]=l*g+c*h+u*f-a*p,e[t+2]=u*g+c*p+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new G,nf=new fs;class hs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Rs.subVectors(this.max,Or),Gi.subVectors(e.a,Or),Wi.subVectors(e.b,Or),Xi.subVectors(e.c,Or),Gn.subVectors(Wi,Gi),Wn.subVectors(Xi,Wi),_i.subVectors(Gi,Xi);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-_i.z,_i.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,_i.z,0,-_i.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-_i.y,_i.x,0];return!fa(t,Gi,Wi,Xi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Gi,Wi,Xi,Rs))?!1:(Cs.crossVectors(Gn,Wn),t=[Cs.x,Cs.y,Cs.z],fa(t,Gi,Wi,Xi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new G,new G,new G,new G,new G,new G,new G,new G],ln=new G,ws=new hs,Gi=new G,Wi=new G,Xi=new G,Gn=new G,Wn=new G,_i=new G,Or=new G,Rs=new G,Cs=new G,vi=new G;function fa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vi.fromArray(n,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),u=t.dot(vi),c=i.dot(vi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nx=new hs,Br=new G,ha=new G;class ds{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(ha)),this.expandByPoint(Br.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new G,da=new G,Ps=new G,Xn=new G,pa=new G,Ds=new G,ma=new G;class Oc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),a=Xn.dot(this.direction),l=-Xn.dot(Ps),u=Xn.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Ps,h),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){pa.subVectors(t,e),Ds.subVectors(i,e),ma.crossVectors(pa,Ds);let o=this.direction.dot(ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(Ds.crossVectors(Xn,Ds));if(l<0)return null;const u=a*this.direction.dot(pa.cross(Xn));if(u<0||l+u>o)return null;const c=-a*Xn.dot(ma);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),qn.crossVectors(i,Gt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),qn.crossVectors(i,Gt)),qn.normalize(),Ls.crossVectors(Gt,qn),r[0]=qn.x,r[4]=Ls.x,r[8]=Gt.x,r[1]=qn.y,r[5]=Ls.y,r[9]=Gt.y,r[2]=qn.z,r[6]=Ls.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],A=i[3],y=i[7],x=i[11],R=i[15],C=r[0],w=r[4],D=r[8],E=r[12],S=r[1],L=r[5],V=r[9],z=r[13],Y=r[2],te=r[6],F=r[10],J=r[14],U=r[3],ae=r[7],me=r[11],Ee=r[15];return s[0]=o*C+a*S+l*Y+u*U,s[4]=o*w+a*L+l*te+u*ae,s[8]=o*D+a*V+l*F+u*me,s[12]=o*E+a*z+l*J+u*Ee,s[1]=c*C+f*S+h*Y+p*U,s[5]=c*w+f*L+h*te+p*ae,s[9]=c*D+f*V+h*F+p*me,s[13]=c*E+f*z+h*J+p*Ee,s[2]=g*C+_*S+m*Y+d*U,s[6]=g*w+_*L+m*te+d*ae,s[10]=g*D+_*V+m*F+d*me,s[14]=g*E+_*z+m*J+d*Ee,s[3]=A*C+y*S+x*Y+R*U,s[7]=A*w+y*L+x*te+R*ae,s[11]=A*D+y*V+x*F+R*me,s[15]=A*E+y*z+x*J+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],A=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,y=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,x=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,R=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,C=t*A+i*y+r*x+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=A*w,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=y*w,e[5]=(c*m*s-g*h*s+g*r*p-t*m*p-c*r*d+t*h*d)*w,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*w,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*w,e[8]=x*w,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*d-t*f*d)*w,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*w,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*w,e[12]=R*w,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,A=l*u,y=l*c,x=l*f,R=i.x,C=i.y,w=i.z;return r[0]=(1-(_+d))*R,r[1]=(p+x)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(h+d))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(g+y)*w,r[9]=(m-A)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const u=1/s,c=1/o,f=1/a;return cn.elements[0]*=u,cn.elements[1]*=u,cn.elements[2]*=u,cn.elements[4]*=c,cn.elements[5]*=c,cn.elements[6]*=c,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=On){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===On)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Eo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=On){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,_;if(a===On)g=(o+s)*f,_=-2*f;else if(a===Eo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new G,cn=new ft,Fx=new G(0,0,0),Ox=new G(1,1,1),qn=new G,Ls=new G,Gt=new G,rf=new ft,sf=new fs;class zn{constructor(e=0,t=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const of=new G,Yi=new fs,Pn=new ft,Is=new G,Hr=new G,Hx=new G,zx=new fs,af=new G(1,0,0),lf=new G(0,1,0),cf=new G(0,0,1),uf={type:"added"},kx={type:"removed"},$i={type:"childadded",child:null},ga={type:"childremoved",child:null};class Ft extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,t=new zn,i=new fs,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ze}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Hr,Is,this.up):Pn.lookAt(Is,Hr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uf),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kx),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uf),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new G,Dn=new G,_a=new G,Ln=new G,ji=new G,Ki=new G,ff=new G,va=new G,xa=new G,ya=new G,Ma=new dt,Sa=new dt,Ea=new dt;class dn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Dn.subVectors(i,t),_a.subVectors(e,t);const o=un.dot(un),a=un.dot(Dn),l=un.dot(_a),u=Dn.dot(Dn),c=Dn.dot(_a),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ma.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),Ea.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ma,s.x),o.addScaledVector(Sa,s.y),o.addScaledVector(Ea,s.z),o}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Dn.subVectors(e,t),un.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),Ki.subVectors(s,i),va.subVectors(e,i);const l=ji.dot(va),u=Ki.dot(va);if(l<=0&&u<=0)return t.copy(i);xa.subVectors(e,r);const c=ji.dot(xa),f=Ki.dot(xa);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ji,o);ya.subVectors(e,s);const p=ji.dot(ya),g=Ki.dot(ya);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Ki,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return ff.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(ff,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Tx(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ta(o,s,e+1/3),this.g=Ta(o,s,e),this.b=Ta(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return $e.fromWorkingColorSpace(wt.copy(this),e),Math.round(We(wt.r*255,0,255))*65536+Math.round(We(wt.g*255,0,255))*256+Math.round(We(wt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Qt){$e.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Us);const i=aa(Yn.h,Us.h,t),r=aa(Yn.s,Us.s,t),s=aa(Yn.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ge;Ge.NAMES=lp;let Vx=0;class Dr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=us(),this.name="",this.type="Material",this.blending=pr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bc extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new G,Ns=new Ke;let Gx=0;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zu&&(e.usage=this.usage),e}}class cp extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class up extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wx=0;const Zt=new ft,ba=new Ft,Zi=new G,Wt=new hs,zr=new hs,Mt=new G;class sn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sp(e)?up:cp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Wt.min,zr.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,zr.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(zr.min),Wt.expandByPoint(zr.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Mt.fromBufferAttribute(a,u),l&&(Zi.fromBufferAttribute(e,u),Mt.add(Zi)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new G,l[D]=new G;const u=new G,c=new G,f=new G,h=new Ke,p=new Ke,g=new Ke,_=new G,m=new G;function d(D,E,S){u.fromBufferAttribute(i,D),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[D].add(_),a[E].add(_),a[S].add(_),l[D].add(m),l[E].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,E=A.length;D<E;++D){const S=A[D],L=S.start,V=S.count;for(let z=L,Y=L+V;z<Y;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new G,x=new G,R=new G,C=new G;function w(D){R.fromBufferAttribute(r,D),C.copy(R);const E=a[D];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(C,E);const L=x.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,E=A.length;D<E;++D){const S=A[D],L=S.start,V=S.count;for(let z=L,Y=L+V;z<Y;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Nt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new ft,xi=new Oc,Fs=new ds,df=new G,Os=new G,Bs=new G,Hs=new G,Aa=new G,zs=new G,pf=new G,ks=new G;class tn extends Ft{constructor(e=new sn,t=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Aa.fromBufferAttribute(f,e),o?zs.addScaledVector(Aa,c):zs.addScaledVector(Aa.sub(t),c))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Fs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Fs,df)===null||xi.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(hf.copy(s).invert(),xi.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=A,R=y;x<R;x+=3){const C=a.getX(x),w=a.getX(x+1),D=a.getX(x+2);r=Vs(this,d,e,i,u,c,f,C,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const A=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Vs(this,o,e,i,u,c,f,A,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=A,R=y;x<R;x+=3){const C=x,w=x+1,D=x+2;r=Vs(this,d,e,i,u,c,f,C,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const A=m,y=m+1,x=m+2;r=Vs(this,o,e,i,u,c,f,A,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xx(n,e,t,i,r,s,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===li,a),l===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ks);return u<t.near||u>t.far?null:{distance:u,point:ks.clone(),object:n}}function Vs(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Os),n.getVertexPosition(l,Bs),n.getVertexPosition(u,Hs);const c=Xx(n,e,t,i,Os,Bs,Hs,pf);if(c){const f=new G;dn.getBarycoord(pf,Os,Bs,Hs,f),r&&(c.uv=dn.getInterpolatedAttribute(r,a,l,u,f,new Ke)),s&&(c.uv1=dn.getInterpolatedAttribute(s,a,l,u,f,new Ke)),o&&(c.normal=dn.getInterpolatedAttribute(o,a,l,u,f,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new G,materialIndex:0};dn.getNormal(Os,Bs,Hs,h.normal),c.face=h,c.barycoord=f}return c}class ps extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(c,3)),this.setAttribute("uv",new vn(f,2));function g(_,m,d,A,y,x,R,C,w,D,E){const S=x/w,L=R/D,V=x/2,z=R/2,Y=C/2,te=w+1,F=D+1;let J=0,U=0;const ae=new G;for(let me=0;me<F;me++){const Ee=me*L-z;for(let Ae=0;Ae<te;Ae++){const Ve=Ae*S-V;ae[_]=Ve*A,ae[m]=Ee*y,ae[d]=Y,u.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[d]=C>0?1:-1,c.push(ae.x,ae.y,ae.z),f.push(Ae/w),f.push(1-me/D),J+=1}}for(let me=0;me<D;me++)for(let Ee=0;Ee<w;Ee++){const Ae=h+Ee+te*me,Ve=h+Ee+te*(me+1),ne=h+(Ee+1)+te*(me+1),fe=h+(Ee+1)+te*me;l.push(Ae,Ve,fe),l.push(Ve,ne,fe),U+=6}a.addGroup(p,U,E),p+=U,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function qx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Yx={clone:Ar,merge:Lt};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hp extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new G,mf=new Ke,gf=new Ke;class en extends hp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Kx extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const s=new en(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const o=new en(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new en(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new en(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const u=new en(Ji,Qi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dp extends kt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:ii});s.uniforms.tEquirect.value=t;const o=new tn(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=En),new Kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Gs extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jx={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Hc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Hc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qx extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ra=new G,ey=new G,ty=new ze;class bi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ra.subVectors(i,t).cross(ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ty.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ds,Ws=new G;class pp{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],A=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-d).normalize(),i[1].setComponents(l+s,h+u,m+p,x+d).normalize(),i[2].setComponents(l+o,h+c,m+g,x+A).normalize(),i[3].setComponents(l-o,h-c,m-g,x-A).normalize(),i[4].setComponents(l-a,h-f,m-_,x-y).normalize(),t===On)i[5].setComponents(l+a,h+f,m+_,x+y).normalize();else if(t===Eo)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new G,Ao=new G,_f=new ft,kr=new Oc,Xs=new ds,Ca=new G,vf=new G;class iy extends Ft{constructor(e=new sn,t=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bo.fromBufferAttribute(t,r-1),Ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bo.distanceTo(Ao);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;_f.copy(r).invert(),kr.copy(e.ray).applyMatrix4(_f);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=c.getX(_),A=c.getX(_+1),y=qs(this,e,kr,l,d,A,_);y&&t.push(y)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),d=qs(this,e,kr,l,_,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=qs(this,e,kr,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=qs(this,e,kr,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(bo.fromBufferAttribute(a,r),Ao.fromBufferAttribute(a,s),t.distanceSqToSegment(bo,Ao,Ca,vf)>i)return;Ca.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Ca);if(!(u<e.near||u>e.far))return{distance:u,point:vf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class ry extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xf=new ft,Yl=new Oc,Ys=new ds,$s=new G;class sy extends Ft{constructor(e=new sn,t=new ry){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;xf.copy(r).invert(),Yl.copy(e.ray).applyMatrix4(xf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=u.getX(g);$s.fromBufferAttribute(f,m),yf($s,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)$s.fromBufferAttribute(f,g),yf($s,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yf(n,e,t,i,r,s,o){const a=Yl.distanceSqToPoint(n);if(a<t){const l=new G;Yl.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class mp extends kt{constructor(e,t,i,r,s,o,a,l,u,c=mr){if(c!==mr&&c!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===mr&&(i=Ni),i===void 0&&c===Tr&&(i=Er),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ms extends sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new vn(s,3)),this.setAttribute("normal",new vn(s.slice(),3)),this.setAttribute("uv",new vn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const y=new G,x=new G,R=new G;for(let C=0;C<t.length;C+=3)p(t[C+0],y),p(t[C+1],x),p(t[C+2],R),l(y,x,R,A)}function l(A,y,x,R){const C=R+1,w=[];for(let D=0;D<=C;D++){w[D]=[];const E=A.clone().lerp(x,D/C),S=y.clone().lerp(x,D/C),L=C-D;for(let V=0;V<=L;V++)V===0&&D===C?w[D][V]=E:w[D][V]=E.clone().lerp(S,V/L)}for(let D=0;D<C;D++)for(let E=0;E<2*(C-D)-1;E++){const S=Math.floor(E/2);E%2===0?(h(w[D][S+1]),h(w[D+1][S]),h(w[D][S])):(h(w[D][S+1]),h(w[D+1][S+1]),h(w[D+1][S]))}}function u(A){const y=new G;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(A),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function c(){const A=new G;for(let y=0;y<s.length;y+=3){A.x=s[y+0],A.y=s[y+1],A.z=s[y+2];const x=m(A)/2/Math.PI+.5,R=d(A)/Math.PI+.5;o.push(x,1-R)}g(),f()}function f(){for(let A=0;A<o.length;A+=6){const y=o[A+0],x=o[A+2],R=o[A+4],C=Math.max(y,x,R),w=Math.min(y,x,R);C>.9&&w<.1&&(y<.2&&(o[A+0]+=1),x<.2&&(o[A+2]+=1),R<.2&&(o[A+4]+=1))}}function h(A){s.push(A.x,A.y,A.z)}function p(A,y){const x=A*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const A=new G,y=new G,x=new G,R=new G,C=new Ke,w=new Ke,D=new Ke;for(let E=0,S=0;E<s.length;E+=9,S+=6){A.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),C.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),R.copy(A).add(y).add(x).divideScalar(3);const L=m(R);_(C,S+0,A,L),_(w,S+2,y,L),_(D,S+4,x,L)}}function _(A,y,x,R){R<0&&A.x===1&&(o[y]=A.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.vertices,e.indices,e.radius,e.details)}}class zc extends ms{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zc(e.radius,e.detail)}}class kc extends ms{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kc(e.radius,e.detail)}}class wr extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const A=d*h-o;for(let y=0;y<u;y++){const x=y*f-s;g.push(x,-A,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const y=A+u*d,x=A+u*(d+1),R=A+1+u*(d+1),C=A+1+u*d;p.push(y,x,C),p.push(x,R,C)}this.setIndex(p),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vc extends ms{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class oy extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ly extends hp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cy extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mf(){return performance.now()}function Sf(n,e,t,i){const r=fy(i);switch(t){case Zd:return n*e;case Qd:return n*e;case ep:return n*e*2;case tp:return n*e/r.components*r.byteLength;case Ic:return n*e/r.components*r.byteLength;case np:return n*e*2/r.components*r.byteLength;case Uc:return n*e*2/r.components*r.byteLength;case Jd:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case Nc:return n*e*4/r.components*r.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(n,16)*Math.max(e,8)/4;case yl:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oo:case kl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ip:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(n){switch(n){case Hn:case $d:return{byteLength:1,components:1};case ss:case jd:case cs:return{byteLength:2,components:1};case Dc:case Lc:return{byteLength:2,components:4};case Ni:case Pc:case Fn:return{byteLength:4,components:1};case Kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hy(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,wy=`#ifdef USE_BUMPMAP
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
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
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,sM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,hM=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
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
}`,bS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,wS=`uniform vec3 diffuse;
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
}`,RS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PS=`#define MATCAP
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
}`,DS=`#define MATCAP
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
}`,LS=`#define NORMAL
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
}`,IS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,US=`#define PHONG
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
}`,NS=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,FS=`#define STANDARD
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
}`,OS=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,BS=`#define TOON
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
}`,HS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,WS=`uniform float rotation;
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
}`,XS=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:My,batching_vertex:Sy,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:by,iridescence_fragment:Ay,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Dy,color_fragment:Ly,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Ny,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:Hy,displacementmap_vertex:zy,emissivemap_fragment:ky,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:sM,envmap_vertex:jy,fog_vertex:Ky,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:fM,lights_fragment_begin:hM,lights_fragment_maps:dM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:MM,map_particle_pars_fragment:SM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:bM,morphcolor_vertex:AM,morphnormal_vertex:wM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:PM,normal_fragment_maps:DM,normal_pars_fragment:LM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:HM,opaque_fragment:zM,packing:kM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:jM,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:JM,skinning_pars_vertex:QM,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:fS,background_vert:hS,background_frag:dS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:yS,distanceRGBA_frag:MS,equirect_vert:SS,equirect_frag:ES,linedashed_vert:TS,linedashed_frag:bS,meshbasic_vert:AS,meshbasic_frag:wS,meshlambert_vert:RS,meshlambert_frag:CS,meshmatcap_vert:PS,meshmatcap_frag:DS,meshnormal_vert:LS,meshnormal_frag:IS,meshphong_vert:US,meshphong_frag:NS,meshphysical_vert:FS,meshphysical_frag:OS,meshtoon_vert:BS,meshtoon_frag:HS,points_vert:zS,points_frag:kS,shadow_vert:VS,shadow_frag:GS,sprite_vert:WS,sprite_frag:XS},pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Sn={basic:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Lt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Lt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Lt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Lt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Lt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Lt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Lt([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Lt([pe.lights,pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Sn.physical={uniforms:Lt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const js={r:0,b:0,g:0},Mi=new zn,qS=new ft;function YS(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const R=g(y);R===null?d(a,l):R&&R.isColor&&(d(R,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Bo)?(c===void 0&&(c=new tn(new ps(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Ar(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(Mi)),c.material.toneMapped=$e.getTransfer(R.colorSpace)!==nt,(f!==R||h!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new tn(new wr(2,2),new nn({name:"BackgroundMaterial",uniforms:Ar(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=$e.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function d(y,x){y.getRGB(js,fp(n)),i.buffers.color.setClear(js.r,js.g,js.b,x,o)}function A(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:m,dispose:A}}function $S(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,V,z,Y){let te=!1;const F=f(z,V,L);s!==F&&(s=F,u(s.object)),te=p(S,z,V,Y),te&&g(S,z,V,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,x(S,L,V,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,V){const z=V.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let te=Y[L.id];te===void 0&&(te={},Y[L.id]=te);let F=te[z];return F===void 0&&(F=h(l()),te[z]=F),F}function h(S){const L=[],V=[],z=[];for(let Y=0;Y<t;Y++)L[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,V,z){const Y=s.attributes,te=L.attributes;let F=0;const J=V.getAttributes();for(const U in J)if(J[U].location>=0){const me=Y[U];let Ee=te[U];if(Ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),me===void 0||me.attribute!==Ee||Ee&&me.data!==Ee.data)return!0;F++}return s.attributesNum!==F||s.index!==z}function g(S,L,V,z){const Y={},te=L.attributes;let F=0;const J=V.getAttributes();for(const U in J)if(J[U].location>=0){let me=te[U];me===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Ee={};Ee.attribute=me,me&&me.data&&(Ee.data=me.data),Y[U]=Ee,F++}s.attributes=Y,s.attributesNum=F,s.index=z}function _(){const S=s.newAttributes;for(let L=0,V=S.length;L<V;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const V=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;V[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Y[S]!==L&&(n.vertexAttribDivisor(S,L),Y[S]=L)}function A(){const S=s.newAttributes,L=s.enabledAttributes;for(let V=0,z=L.length;V<z;V++)L[V]!==S[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function y(S,L,V,z,Y,te,F){F===!0?n.vertexAttribIPointer(S,L,V,Y,te):n.vertexAttribPointer(S,L,V,z,Y,te)}function x(S,L,V,z){_();const Y=z.attributes,te=V.getAttributes(),F=L.defaultAttributeValues;for(const J in te){const U=te[J];if(U.location>=0){let ae=Y[J];if(ae===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const me=ae.normalized,Ee=ae.itemSize,Ae=e.get(ae);if(Ae===void 0)continue;const Ve=Ae.buffer,ne=Ae.type,fe=Ae.bytesPerElement,Me=ne===n.INT||ne===n.UNSIGNED_INT||ae.gpuType===Pc;if(ae.isInterleavedBufferAttribute){const he=ae.data,Re=he.stride,Xe=ae.offset;if(he.isInstancedInterleavedBuffer){for(let we=0;we<U.locationSize;we++)d(U.location+we,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<U.locationSize;we++)m(U.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let we=0;we<U.locationSize;we++)y(U.location+we,Ee/U.locationSize,ne,me,Re*fe,(Xe+Ee/U.locationSize*we)*fe,Me)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)d(U.location+he,ae.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<U.locationSize;he++)m(U.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let he=0;he<U.locationSize;he++)y(U.location+he,Ee/U.locationSize,ne,me,Ee*fe,Ee/U.locationSize*he*fe,Me)}}else if(F!==void 0){const me=F[J];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(U.location,me);break;case 3:n.vertexAttrib3fv(U.location,me);break;case 4:n.vertexAttrib4fv(U.location,me);break;default:n.vertexAttrib1fv(U.location,me)}}}}A()}function R(){D();for(const S in i){const L=i[S];for(const V in L){const z=L[V];for(const Y in z)c(z[Y].object),delete z[Y];delete L[V]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const V in L){const z=L[V];for(const Y in z)c(z[Y].object),delete z[Y];delete L[V]}delete i[S.id]}function w(S){for(const L in i){const V=i[L];if(V[S.id]===void 0)continue;const z=V[S.id];for(const Y in z)c(z[Y].object),delete z[Y];delete V[S.id]}}function D(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function jS(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!D)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function ZS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const A=s?0:i,y=A*4;let x=d.clippingState||null;l.value=x,x=c(g,h,y,p);for(let R=0;R!==y;++R)x[R]=t[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(f[y]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JS(n){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Mr:a===_l&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gl||a===_l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Zx(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const sr=4,Ef=[.125,.215,.35,.446,.526,.582],Ri=20,Pa=new ly,Tf=new Ge;let Da=null,La=0,Ia=0,Ua=!1;const Ai=(1+Math.sqrt(5))/2,er=1/Ai,bf=[new G(-Ai,er,0),new G(Ai,er,0),new G(-er,0,Ai),new G(er,0,Ai),new G(0,Ai,-er),new G(0,Ai,er),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],QS=new G;class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=QS}=s;Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,La,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:cs,format:pn,colorSpace:br,depthBuffer:!1},r=wf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eE(s)),this._blurMaterial=tE(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r,s){const l=new en(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Tf),f.toneMapping=ri,f.autoClear=!1;const g=new Bc({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new tn(new ps,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Tf),m=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[A],s.y,s.z)):y===1?(l.up.set(0,0,u[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[A],s.z)):(l.up.set(0,u[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[A]));const x=this._cubeSize;Ks(r,y*x,A>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bf[(r-s-1)%bf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new tn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const d=[];let A=0;for(let w=0;w<Ri;++w){const D=w/_,E=Math.exp(-D*D/2);d.push(E),w===0?A+=E:w<m&&(A+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[r],R=3*x*(r>y-sr?r-y+sr:0),C=4*(this._cubeSize-x);Ks(t,R,C,3*x,2*x),l.setRenderTarget(t),l.render(f,Pa)}}function eE(n){const e=[],t=[],i=[];let r=n;const s=n-sr+1+Ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-sr?l=Ef[o-n+sr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,A=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,D=C>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];A.set(E,_*g*C),y.set(h,m*g*C);const S=[C,C,C,C,C,C];x.set(S,d*g*C)}const R=new sn;R.setAttribute("position",new Nt(A,_)),R.setAttribute("uv",new Nt(y,m)),R.setAttribute("faceIndex",new Nt(x,d)),e.push(R),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wf(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tE(n,e,t){const i=new Float32Array(Ri),r=new G(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rf(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Cf(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function nE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gl||l===_l,c=l===Mr||l===Sr;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Af(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Af(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ti("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rE(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let y=0,x=A.length;y<x;y+=3){const R=A[y+0],C=A[y+1],w=A[y+2];h.push(R,C,C,w,w,R)}}else if(g!==void 0){const A=g.array;_=g.version;for(let y=0,x=A.length/3-1;y<x;y+=3){const R=y+0,C=y+1,w=y+2;h.push(R,C,C,w,w,R)}}else return;const m=new(sp(h)?up:cp)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function sE(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*_[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function oE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function aE(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*R*4*f),w=new op(C,x,R,f);w.type=Fn,w.needsUpdate=!0;const D=y*4;for(let S=0;S<f;S++){const L=m[S],V=d[S],z=A[S],Y=x*R*4*S;for(let te=0;te<L.count;te++){const F=te*D;p===!0&&(r.fromBufferAttribute(L,te),C[Y+F+0]=r.x,C[Y+F+1]=r.y,C[Y+F+2]=r.z,C[Y+F+3]=0),g===!0&&(r.fromBufferAttribute(V,te),C[Y+F+4]=r.x,C[Y+F+5]=r.y,C[Y+F+6]=r.z,C[Y+F+7]=0),_===!0&&(r.fromBufferAttribute(z,te),C[Y+F+8]=r.x,C[Y+F+9]=r.y,C[Y+F+10]=r.z,C[Y+F+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Ke(x,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function lE(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const _p=new kt,Pf=new mp(1,1),vp=new op,xp=new Ux,yp=new dp,Df=[],Lf=[],If=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Df[r];if(s===void 0&&(s=new Float32Array(r),Df[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ho(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function fE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function hE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function dE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Nf.set(i),n.uniformMatrix2fv(this.addr,!1,Nf),yt(t,i)}}function pE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Uf.set(i),n.uniformMatrix3fv(this.addr,!1,Uf),yt(t,i)}}function mE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),yt(t,i)}}function gE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function vE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function yE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ME(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function SE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function TE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pf.compareFunction=rp,s=Pf):s=_p,t.setTexture2D(e||s,r)}function bE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xp,r)}function AE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yp,r)}function wE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vp,r)}function RE(n){switch(n){case 5126:return cE;case 35664:return uE;case 35665:return fE;case 35666:return hE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return _E;case 35668:case 35672:return vE;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return ME;case 36295:return SE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return wE}}function CE(n,e){n.uniform1fv(this.addr,e)}function PE(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function DE(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function LE(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function IE(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UE(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NE(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FE(n,e){n.uniform1iv(this.addr,e)}function OE(n,e){n.uniform2iv(this.addr,e)}function BE(n,e){n.uniform3iv(this.addr,e)}function HE(n,e){n.uniform4iv(this.addr,e)}function zE(n,e){n.uniform1uiv(this.addr,e)}function kE(n,e){n.uniform2uiv(this.addr,e)}function VE(n,e){n.uniform3uiv(this.addr,e)}function GE(n,e){n.uniform4uiv(this.addr,e)}function WE(n,e,t){const i=this.cache,r=e.length,s=Ho(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_p,s[o])}function XE(n,e,t){const i=this.cache,r=e.length,s=Ho(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xp,s[o])}function qE(n,e,t){const i=this.cache,r=e.length,s=Ho(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yp,s[o])}function YE(n,e,t){const i=this.cache,r=e.length,s=Ho(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vp,s[o])}function $E(n){switch(n){case 5126:return CE;case 35664:return PE;case 35665:return DE;case 35666:return LE;case 35674:return IE;case 35675:return UE;case 35676:return NE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return BE;case 35669:case 35673:return HE;case 5125:return zE;case 36294:return kE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return YE}}class jE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RE(t.type)}}class KE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$E(t.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Ff(n,e){n.seq.push(e),n.map[e.id]=e}function JE(n,e,t){const i=n.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),o=Na.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ff(t,u===void 0?new jE(a,n,e):new KE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ZE(a),Ff(t,f)),t=f}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Of(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QE=37297;let eT=0;function tT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bf=new ze;function nT(n){$e._getMatrix(Bf,$e.workingColorSpace,n);const e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case So:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tT(n.getShaderSource(e),o)}else return r}function iT(n,e){const t=nT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rT(n,e){let t;switch(e){case sx:t="Linear";break;case ox:t="Reinhard";break;case ax:t="Cineon";break;case lx:t="ACESFilmic";break;case ux:t="AgX";break;case fx:t="Neutral";break;case cx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zs=new G;function sT(){$e.getLuminanceCoefficients(Zs);const n=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function aT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wr(n){return n!==""}function zf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(cT,fT)}const uT=new Map;function fT(n,e){let t=ke[e];if(t===void 0){const i=uT.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(n){return n.replace(hT,dT)}function dT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function _T(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case ix:e="ENVMAP_BLENDING_MIX";break;case rx:e="ENVMAP_BLENDING_ADD";break}return e}function vT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pT(t),u=mT(t),c=gT(t),f=_T(t),h=vT(t),p=oT(t),g=aT(s),_=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(m=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ke.tonemapping_pars_fragment:"",t.toneMapping!==ri?rT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),sT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=$l(o),o=zf(o,t),o=kf(o,t),a=$l(a),a=zf(a,t),a=kf(a,t),o=Vf(o),a=Vf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=A+m+o,x=A+d+a,R=Of(r,r.VERTEX_SHADER,y),C=Of(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(C).trim();let te=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const J=Hf(r,R,"vertex"),U=Hf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+J+`
`+U)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(F=!1);F&&(L.diagnostics={runnable:te,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(R),r.deleteShader(C),D=new ao(r,_),E=lT(r,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,QE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let yT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ST(e),t.set(e,i)),i}}class ST{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function ET(n,e,t,i,r,s,o){const a=new ap,l=new MT,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,V,z){const Y=V.fog,te=z.geometry,F=E.isMeshStandardMaterial?V.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),U=J&&J.mapping===Bo?J.image.height:null,ae=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const me=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ee=me!==void 0?me.length:0;let Ae=0;te.morphAttributes.position!==void 0&&(Ae=1),te.morphAttributes.normal!==void 0&&(Ae=2),te.morphAttributes.color!==void 0&&(Ae=3);let Ve,ne,fe,Me;if(ae){const tt=Sn[ae];Ve=tt.vertexShader,ne=tt.fragmentShader}else Ve=E.vertexShader,ne=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Xe=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,ot=!!E.map,it=!!E.matcap,P=!!J,M=!!E.aoMap,j=!!E.lightMap,Q=!!E.bumpMap,K=!!E.normalMap,X=!!E.displacementMap,se=!!E.emissiveMap,Z=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,I=E.clearcoat>0,B=E.dispersion>0,W=E.iridescence>0,k=E.sheen>0,ce=E.transmission>0,oe=v&&!!E.anisotropyMap,le=I&&!!E.clearcoatMap,Ue=I&&!!E.clearcoatNormalMap,re=I&&!!E.clearcoatRoughnessMap,de=W&&!!E.iridescenceMap,be=W&&!!E.iridescenceThicknessMap,Pe=k&&!!E.sheenColorMap,ye=k&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,De=!!E.specularColorMap,et=!!E.specularIntensityMap,N=ce&&!!E.transmissionMap,ge=ce&&!!E.thicknessMap,ee=!!E.gradientMap,ie=!!E.alphaMap,xe=E.alphaTest>0,ve=!!E.alphaHash,He=!!E.extensions;let ct=ri;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ct=n.toneMapping);const bt={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:ne,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:br,alphaToCoverage:!!E.alphaToCoverage,map:ot,matcap:it,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:U,aoMap:M,lightMap:j,bumpMap:Q,normalMap:K,displacementMap:h&&X,emissiveMap:se,normalMapObjectSpace:K&&E.normalMapType===gx,normalMapTangentSpace:K&&E.normalMapType===mx,metalnessMap:Z,roughnessMap:T,anisotropy:v,anisotropyMap:oe,clearcoat:I,clearcoatMap:le,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:B,iridescence:W,iridescenceMap:de,iridescenceThicknessMap:be,sheen:k,sheenColorMap:Pe,sheenRoughnessMap:ye,specularMap:Ie,specularColorMap:De,specularIntensityMap:et,transmission:ce,transmissionMap:N,thicknessMap:ge,gradientMap:ee,opaque:E.transparent===!1&&E.blending===pr&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:xe,alphaHash:ve,combine:E.combine,mapUv:ot&&_(E.map.channel),aoMapUv:M&&_(E.aoMap.channel),lightMapUv:j&&_(E.lightMap.channel),bumpMapUv:Q&&_(E.bumpMap.channel),normalMapUv:K&&_(E.normalMap.channel),displacementMapUv:X&&_(E.displacementMap.channel),emissiveMapUv:se&&_(E.emissiveMap.channel),metalnessMapUv:Z&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:oe&&_(E.anisotropyMap.channel),clearcoatMapUv:le&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(E.sheenRoughnessMap.channel),specularMapUv:Ie&&_(E.specularMap.channel),specularColorMapUv:De&&_(E.specularColorMap.channel),specularIntensityMapUv:et&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:ge&&_(E.thicknessMap.channel),alphaMapUv:ie&&_(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(K||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(ot||ie),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:ot&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hn,flipSided:E.side===zt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=u.has(1),bt.vertexUv2s=u.has(2),bt.vertexUv3s=u.has(3),u.clear(),bt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(A(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let L;if(S){const V=Sn[S];L=Yx.clone(V.uniforms)}else L=E.uniforms;return L}function R(E,S){let L;for(let V=0,z=c.length;V<z;V++){const Y=c[V];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new xT(n,S,E,s),c.push(L)),L}function C(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:D}}function TT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||bT),i.length>1&&i.sort(h||Wf),r.length>1&&r.sort(h||Wf)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function AT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xf,n.set(i,[o])):r>=s.length?(o=new Xf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function RT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CT=0;function PT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DT(n){const e=new wT,t=RT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new ft,o=new ft;function a(u){let c=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,A=0,y=0,x=0,R=0,C=0,w=0;u.sort(PT);for(let E=0,S=u.length;E<S;E++){const L=u[E],V=L.color,z=L.intensity,Y=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=V.r*z,f+=V.g*z,h+=V.b*z;else if(L.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(L.sh.coefficients[F],z);w++}else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,U=t.get(L);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=L.shadow.matrix,A++}i.directional[p]=F,p++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(V).multiplyScalar(z),F.distance=Y,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,i.spot[_]=F;const J=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,J.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=J.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=te,x++}_++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(V).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=F,m++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const J=L.shadow,U=t.get(L);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=F,g++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(z),F.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=F,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==A||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==R||D.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=A,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=R,D.numLightProbes=w,i.version=CT++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,A=u.length;d<A;d++){const y=u[d];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function qf(n){const e=new DT(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qf(n),e.set(r,[a])):s>=o.length?(a=new qf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
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
}`;function NT(n,e,t){let i=new pp;const r=new Ke,s=new Ke,o=new dt,a=new oy({depthPacking:px}),l=new ay,u={},c=t.maxTextureSize,f={[li]:zt,[zt]:li,[hn]:hn},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:IT,fragmentShader:UT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let d=this.type;this.render=function(C,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ii),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=d!==In&&this.type===In,Y=d===In&&this.type!==In;for(let te=0,F=C.length;te<F;te++){const J=C[te],U=J.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ae=U.getFrameExtents();if(r.multiply(ae),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ae.x),r.x=s.x*ae.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ae.y),r.y=s.y*ae.y,U.mapSize.y=s.y)),U.map===null||z===!0||Y===!0){const Ee=this.type!==In?{minFilter:_n,magFilter:_n}:{};U.map!==null&&U.map.dispose(),U.map=new Fi(r.x,r.y,Ee),U.map.texture.name=J.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const me=U.getViewportCount();for(let Ee=0;Ee<me;Ee++){const Ae=U.getViewport(Ee);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),V.viewport(o),U.updateMatrices(J,Ee),i=U.getFrustum(),x(w,D,U.camera,J,this.type)}U.isPointLightShadow!==!0&&this.type===In&&A(U,D),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,L)};function A(C,w){const D=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,D,h,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,D,p,_,null)}function y(C,w,D,E){let S=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=S.uuid,z=w.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let te=Y[z];te===void 0&&(te=S.clone(),Y[z]=te,w.addEventListener("dispose",R)),S=te}if(S.visible=w.visible,S.wireframe=w.wireframe,E===In?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=n.properties.get(S);V.light=D}return S}function x(C,w,D,E,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===In)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const te=z.groups;for(let F=0,J=te.length;F<J;F++){const U=te[F],ae=Y[U.materialIndex];if(ae&&ae.visible){const me=y(C,ae,E,S);C.onBeforeShadow(n,C,w,D,z,me,U),n.renderBufferDirect(D,null,z,me,C,U),C.onAfterShadow(n,C,w,D,z,me,U)}}}else if(Y.visible){const te=y(C,Y,E,S);C.onBeforeShadow(n,C,w,D,z,te,null),n.renderBufferDirect(D,null,z,te,C,null),C.onAfterShadow(n,C,w,D,z,te,null)}}const V=C.children;for(let z=0,Y=V.length;z<Y;z++)x(V[z],w,D,E,S)}function R(C){C.target.removeEventListener("dispose",R);for(const D in u){const E=u[D],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const FT={[cl]:ul,[fl]:pl,[hl]:ml,[yr]:dl,[ul]:cl,[pl]:fl,[ml]:hl,[dl]:yr};function OT(n,e){function t(){let N=!1;const ge=new dt;let ee=null;const ie=new dt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!N&&(n.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ve,He,ct,bt){bt===!0&&(xe*=ct,ve*=ct,He*=ct),ge.set(xe,ve,He,ct),ie.equals(ge)===!1&&(n.clearColor(xe,ve,He,ct),ie.copy(ge))},reset:function(){N=!1,ee=null,ie.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,ee=null,ie=null,xe=null;return{setReversed:function(ve){if(ge!==ve){const He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ct=xe;xe=null,this.setClear(ct)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?he(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!N&&(n.depthMask(ve),ee=ve)},setFunc:function(ve){if(ge&&(ve=FT[ve]),ie!==ve){switch(ve){case cl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case fl:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=ve}},setLocked:function(ve){N=ve},setClear:function(ve){xe!==ve&&(ge&&(ve=1-ve),n.clearDepth(ve),xe=ve)},reset:function(){N=!1,ee=null,ie=null,xe=null,ge=!1}}}function r(){let N=!1,ge=null,ee=null,ie=null,xe=null,ve=null,He=null,ct=null,bt=null;return{setTest:function(tt){N||(tt?he(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!N&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,on,An){(ee!==tt||ie!==on||xe!==An)&&(n.stencilFunc(tt,on,An),ee=tt,ie=on,xe=An)},setOp:function(tt,on,An){(ve!==tt||He!==on||ct!==An)&&(n.stencilOp(tt,on,An),ve=tt,He=on,ct=An)},setLocked:function(tt){N=tt},setClear:function(tt){bt!==tt&&(n.clearStencil(tt),bt=tt)},reset:function(){N=!1,ge=null,ee=null,ie=null,xe=null,ve=null,He=null,ct=null,bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,A=null,y=null,x=null,R=null,C=null,w=new Ge(0,0,0),D=0,E=!1,S=null,L=null,V=null,z=null,Y=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,J=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=J>=1):U.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=J>=2);let ae=null,me={};const Ee=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Ve=new dt().fromArray(Ee),ne=new dt().fromArray(Ae);function fe(N,ge,ee,ie){const xe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(N,ve),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ee;He++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ge+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ve}const Me={};Me[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(yr),Q(!1),K(Yu),he(n.CULL_FACE),M(ii);function he(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Re(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Xe(N,ge){return f[N]!==ge?(n.bindFramebuffer(N,ge),f[N]=ge,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function we(N,ge){let ee=p,ie=!1;if(N){ee=h.get(ge),ee===void 0&&(ee=[],h.set(ge,ee));const xe=N.textures;if(ee.length!==xe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,He=xe.length;ve<He;ve++)ee[ve]=n.COLOR_ATTACHMENT0+ve;ee.length=xe.length,ie=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ie=!0);ie&&n.drawBuffers(ee)}function ot(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const it={[wi]:n.FUNC_ADD,[zv]:n.FUNC_SUBTRACT,[kv]:n.FUNC_REVERSE_SUBTRACT};it[Vv]=n.MIN,it[Gv]=n.MAX;const P={[Wv]:n.ZERO,[Xv]:n.ONE,[qv]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Jv]:n.SRC_ALPHA_SATURATE,[Kv]:n.DST_COLOR,[$v]:n.DST_ALPHA,[Yv]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Zv]:n.ONE_MINUS_DST_COLOR,[jv]:n.ONE_MINUS_DST_ALPHA,[Qv]:n.CONSTANT_COLOR,[ex]:n.ONE_MINUS_CONSTANT_COLOR,[tx]:n.CONSTANT_ALPHA,[nx]:n.ONE_MINUS_CONSTANT_ALPHA};function M(N,ge,ee,ie,xe,ve,He,ct,bt,tt){if(N===ii){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),N!==Hv){if(N!==m||tt!==E){if((d!==wi||x!==wi)&&(n.blendEquation(n.FUNC_ADD),d=wi,x=wi),tt)switch(N){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zr:n.blendFunc(n.ONE,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,y=null,R=null,C=null,w.set(0,0,0),D=0,m=N,E=tt}return}xe=xe||ge,ve=ve||ee,He=He||ie,(ge!==d||xe!==x)&&(n.blendEquationSeparate(it[ge],it[xe]),d=ge,x=xe),(ee!==A||ie!==y||ve!==R||He!==C)&&(n.blendFuncSeparate(P[ee],P[ie],P[ve],P[He]),A=ee,y=ie,R=ve,C=He),(ct.equals(w)===!1||bt!==D)&&(n.blendColor(ct.r,ct.g,ct.b,bt),w.copy(ct),D=bt),m=N,E=!1}function j(N,ge){N.side===hn?Re(n.CULL_FACE):he(n.CULL_FACE);let ee=N.side===zt;ge&&(ee=!ee),Q(ee),N.blending===pr&&N.transparent===!1?M(ii):M(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ie=N.stencilWrite;a.setTest(ie),ie&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function K(N){N!==Fv?(he(n.CULL_FACE),N!==L&&(N===Yu?n.cullFace(n.BACK):N===Ov?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),L=N}function X(N){N!==V&&(F&&n.lineWidth(N),V=N)}function se(N,ge,ee){N?(he(n.POLYGON_OFFSET_FILL),(z!==ge||Y!==ee)&&(n.polygonOffset(ge,ee),z=ge,Y=ee)):Re(n.POLYGON_OFFSET_FILL)}function Z(N){N?he(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function T(N){N===void 0&&(N=n.TEXTURE0+te-1),ae!==N&&(n.activeTexture(N),ae=N)}function v(N,ge,ee){ee===void 0&&(ae===null?ee=n.TEXTURE0+te-1:ee=ae);let ie=me[ee];ie===void 0&&(ie={type:void 0,texture:void 0},me[ee]=ie),(ie.type!==N||ie.texture!==ge)&&(ae!==ee&&(n.activeTexture(ee),ae=ee),n.bindTexture(N,ge||Me[N]),ie.type=N,ie.texture=ge)}function I(){const N=me[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){Ve.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function ye(N){ne.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function Ie(N,ge){let ee=u.get(ge);ee===void 0&&(ee=new WeakMap,u.set(ge,ee));let ie=ee.get(N);ie===void 0&&(ie=n.getUniformBlockIndex(ge,N.name),ee.set(N,ie))}function De(N,ge){const ie=u.get(ge).get(N);l.get(ge)!==ie&&(n.uniformBlockBinding(ge,ie,N.__bindingPointIndex),l.set(ge,ie))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ae=null,me={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,A=null,y=null,x=null,R=null,C=null,w=new Ge(0,0,0),D=0,E=!1,S=null,L=null,V=null,z=null,Y=null,Ve.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Re,bindFramebuffer:Xe,drawBuffers:we,useProgram:ot,setBlending:M,setMaterial:j,setFlipSided:Q,setCullFace:K,setLineWidth:X,setPolygonOffset:se,setScissorTest:Z,activeTexture:T,bindTexture:v,unbindTexture:I,compressedTexImage2D:B,compressedTexImage3D:W,texImage2D:de,texImage3D:be,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:Ue,texStorage3D:re,texSubImage2D:k,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Pe,viewport:ye,reset:et}}function BT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):To("canvas")}function _(T,v,I){let B=1;const W=Z(T);if((W.width>I||W.height>I)&&(B=I/Math.max(W.width,W.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(B*W.width),ce=Math.floor(B*W.height);f===void 0&&(f=g(k,ce));const oe=v?g(k,ce):f;return oe.width=k,oe.height=ce,oe.getContext("2d").drawImage(T,0,0,k,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+ce+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,v,I,B,W=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=v;if(v===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),v===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),v===n.RGBA){const ce=W?So:$e.getTransfer(B);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=ce===nt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function x(T,v){let I;return T?v===null||v===Ni||v===Er?I=n.DEPTH24_STENCIL8:v===Fn?I=n.DEPTH32F_STENCIL8:v===ss&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===Er?I=n.DEPTH_COMPONENT24:v===Fn?I=n.DEPTH_COMPONENT32F:v===ss&&(I=n.DEPTH_COMPONENT16),I}function R(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),D(v),v.isVideoTexture&&c.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),S(v)}function D(T){const v=i.get(T);if(v.__webglInit===void 0)return;const I=T.source,B=h.get(I);if(B){const W=B[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&E(T),Object.keys(B).length===0&&h.delete(I)}i.remove(T)}function E(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const I=T.source,B=h.get(I);delete B[v.__cacheKey],o.memory.textures--}function S(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(v.__webglFramebuffer[B]))for(let W=0;W<v.__webglFramebuffer[B].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[B][W]);else n.deleteFramebuffer(v.__webglFramebuffer[B]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[B])}else{if(Array.isArray(v.__webglFramebuffer))for(let B=0;B<v.__webglFramebuffer.length;B++)n.deleteFramebuffer(v.__webglFramebuffer[B]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let B=0;B<v.__webglColorRenderbuffer.length;B++)v.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[B]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=T.textures;for(let B=0,W=I.length;B<W;B++){const k=i.get(I[B]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(I[B])}i.remove(T)}let L=0;function V(){L=0}function z(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function Y(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function te(T,v){const I=i.get(T);if(T.isVideoTexture&&X(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,T,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function F(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){ne(I,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function J(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){ne(I,T,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function U(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){fe(I,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const ae={[vl]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[xl]:n.MIRRORED_REPEAT},me={[_n]:n.NEAREST,[hx]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Ee={[_x]:n.NEVER,[Ex]:n.ALWAYS,[vx]:n.LESS,[rp]:n.LEQUAL,[xx]:n.EQUAL,[Sx]:n.GEQUAL,[yx]:n.GREATER,[Mx]:n.NOTEQUAL};function Ae(T,v){if(v.type===Fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===sa||v.magFilter===As||v.magFilter===Pi||v.minFilter===En||v.minFilter===sa||v.minFilter===As||v.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ae[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==As&&v.minFilter!==Pi||v.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const B=v.source;let W=h.get(B);W===void 0&&(W={},h.set(B,W));const k=Y(v);if(k!==T.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),W[k].usedTimes++;const ce=W[T.__cacheKey];ce!==void 0&&(W[T.__cacheKey].usedTimes--,ce.usedTimes===0&&E(v)),T.__cacheKey=k,T.__webglTexture=W[k].texture}return I}function ne(T,v,I){let B=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(B=n.TEXTURE_3D);const W=Ve(T,v),k=v.source;t.bindTexture(B,T.__webglTexture,n.TEXTURE0+I);const ce=i.get(k);if(k.version!==ce.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const oe=$e.getPrimaries($e.workingColorSpace),le=v.colorSpace===ei?null:$e.getPrimaries(v.colorSpace),Ue=v.colorSpace===ei||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=_(v.image,!1,r.maxTextureSize);re=se(v,re);const de=s.convert(v.format,v.colorSpace),be=s.convert(v.type);let Pe=y(v.internalFormat,de,be,v.colorSpace,v.isVideoTexture);Ae(B,v);let ye;const Ie=v.mipmaps,De=v.isVideoTexture!==!0,et=ce.__version===void 0||W===!0,N=k.dataReady,ge=R(v,re);if(v.isDepthTexture)Pe=x(v.format===Tr,v.type),et&&(De?t.texStorage2D(n.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,de,be,null));else if(v.isDataTexture)if(Ie.length>0){De&&et&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,Ie[0].width,Ie[0].height);for(let ee=0,ie=Ie.length;ee<ie;ee++)ye=Ie[ee],De?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,ye.width,ye.height,0,de,be,ye.data);v.generateMipmaps=!1}else De?(et&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,re.width,re.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,de,be,re.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,de,be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,Ie[0].width,Ie[0].height,re.depth);for(let ee=0,ie=Ie.length;ee<ie;ee++)if(ye=Ie[ee],v.format!==pn)if(de!==null)if(De){if(N)if(v.layerUpdates.size>0){const xe=Sf(ye.width,ye.height,v.format,v.type);for(const ve of v.layerUpdates){const He=ye.data.subarray(ve*xe/ye.data.BYTES_PER_ELEMENT,(ve+1)*xe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ve,ye.width,ye.height,1,de,He)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,re.depth,de,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,re.depth,de,be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Pe,ye.width,ye.height,re.depth,0,de,be,ye.data)}else{De&&et&&t.texStorage2D(n.TEXTURE_2D,ge,Pe,Ie[0].width,Ie[0].height);for(let ee=0,ie=Ie.length;ee<ie;ee++)ye=Ie[ee],v.format!==pn?de!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,de,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,de,be,ye.data):t.texImage2D(n.TEXTURE_2D,ee,Pe,ye.width,ye.height,0,de,be,ye.data)}else if(v.isDataArrayTexture)if(De){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Pe,re.width,re.height,re.depth),N)if(v.layerUpdates.size>0){const ee=Sf(re.width,re.height,v.format,v.type);for(const ie of v.layerUpdates){const xe=re.data.subarray(ie*ee/re.data.BYTES_PER_ELEMENT,(ie+1)*ee/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,re.width,re.height,1,de,be,xe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,be,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,de,be,re.data);else if(v.isData3DTexture)De?(et&&t.texStorage3D(n.TEXTURE_3D,ge,Pe,re.width,re.height,re.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,be,re.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,de,be,re.data);else if(v.isFramebufferTexture){if(et)if(De)t.texStorage2D(n.TEXTURE_2D,ge,Pe,re.width,re.height);else{let ee=re.width,ie=re.height;for(let xe=0;xe<ge;xe++)t.texImage2D(n.TEXTURE_2D,xe,Pe,ee,ie,0,de,be,null),ee>>=1,ie>>=1}}else if(Ie.length>0){if(De&&et){const ee=Z(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ge,Pe,ee.width,ee.height)}for(let ee=0,ie=Ie.length;ee<ie;ee++)ye=Ie[ee],De?N&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de,be,ye):t.texImage2D(n.TEXTURE_2D,ee,Pe,de,be,ye);v.generateMipmaps=!1}else if(De){if(et){const ee=Z(re);t.texStorage2D(n.TEXTURE_2D,ge,Pe,ee.width,ee.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,be,re)}else t.texImage2D(n.TEXTURE_2D,0,Pe,de,be,re);m(v)&&d(B),ce.__version=k.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function fe(T,v,I){if(v.image.length!==6)return;const B=Ve(T,v),W=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const k=i.get(W);if(W.version!==k.__version||B===!0){t.activeTexture(n.TEXTURE0+I);const ce=$e.getPrimaries($e.workingColorSpace),oe=v.colorSpace===ei?null:$e.getPrimaries(v.colorSpace),le=v.colorSpace===ei||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!Ue&&!re?de[ie]=_(v.image[ie],!0,r.maxCubemapSize):de[ie]=re?v.image[ie].image:v.image[ie],de[ie]=se(v,de[ie]);const be=de[0],Pe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Ie=y(v.internalFormat,Pe,ye,v.colorSpace),De=v.isVideoTexture!==!0,et=k.__version===void 0||B===!0,N=W.dataReady;let ge=R(v,be);Ae(n.TEXTURE_CUBE_MAP,v);let ee;if(Ue){De&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ie,be.width,be.height);for(let ie=0;ie<6;ie++){ee=de[ie].mipmaps;for(let xe=0;xe<ee.length;xe++){const ve=ee[xe];v.format!==pn?Pe!==null?De?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ve.width,ve.height,Pe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,ve.width,ve.height,Pe,ye,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Ie,ve.width,ve.height,0,Pe,ye,ve.data)}}}else{if(ee=v.mipmaps,De&&et){ee.length>0&&ge++;const ie=Z(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ie,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(re){De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Pe,ye,de[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,de[ie].width,de[ie].height,0,Pe,ye,de[ie].data);for(let xe=0;xe<ee.length;xe++){const He=ee[xe].image[ie].image;De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,He.width,He.height,Pe,ye,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Ie,He.width,He.height,0,Pe,ye,He.data)}}else{De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,ye,de[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,Pe,ye,de[ie]);for(let xe=0;xe<ee.length;xe++){const ve=ee[xe];De?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,Pe,ye,ve.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Ie,Pe,ye,ve.image[ie])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),k.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,I,B,W,k){const ce=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),le=y(I.internalFormat,ce,oe,I.colorSpace),Ue=i.get(v),re=i.get(I);if(re.__renderTarget=v,!Ue.__hasExternalTextures){const de=Math.max(1,v.width>>k),be=Math.max(1,v.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,k,le,de,be,v.depth,0,ce,oe,null):t.texImage2D(W,k,le,de,be,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,W,re.__webglTexture,0,Q(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,W,re.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(T,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const B=v.depthTexture,W=B&&B.isDepthTexture?B.type:null,k=x(v.stencilBuffer,W),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Q(v);K(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,k,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,T)}else{const B=v.textures;for(let W=0;W<B.length;W++){const k=B[W],ce=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),le=y(k.internalFormat,ce,oe,k.colorSpace),Ue=Q(v);I&&K(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,le,v.width,v.height):K(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(v.depthTexture);B.__renderTarget=v,(!B.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const W=B.__webglTexture,k=Q(v);if(v.depthTexture.format===mr)K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===Tr)K(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Xe(T){const v=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const B=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),B){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,B.removeEventListener("dispose",W)};B.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=B}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Re(v.__webglFramebuffer,T)}else if(I){v.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[B]),v.__webglDepthbuffer[B]===void 0)v.__webglDepthbuffer[B]=n.createRenderbuffer(),he(v.__webglDepthbuffer[B],T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,T,!1);else{const B=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(T,v,I){const B=i.get(T);v!==void 0&&Me(B.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Xe(T)}function ot(T){const v=T.texture,I=i.get(T),B=i.get(v);T.addEventListener("dispose",w);const W=T.textures,k=T.isWebGLCubeRenderTarget===!0,ce=W.length>1;if(ce||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=v.version,o.memory.textures++),k){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let le=0;le<v.mipmaps.length;le++)I.__webglFramebuffer[oe][le]=n.createFramebuffer()}else I.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)I.__webglFramebuffer[oe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,le=W.length;oe<le;oe++){const Ue=i.get(W[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&K(T)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<W.length;oe++){const le=W[oe];I.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const Ue=s.convert(le.format,le.colorSpace),re=s.convert(le.type),de=y(le.internalFormat,Ue,re,le.colorSpace,T.isXRRenderTarget===!0),be=Q(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),he(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Me(I.__webglFramebuffer[oe][le],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else Me(I.__webglFramebuffer[oe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,le=W.length;oe<le;oe++){const Ue=W[oe],re=i.get(Ue);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Ae(n.TEXTURE_2D,Ue),Me(I.__webglFramebuffer,T,Ue,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ue)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,B.__webglTexture),Ae(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Me(I.__webglFramebuffer[le],T,v,n.COLOR_ATTACHMENT0,oe,le);else Me(I.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&d(oe),t.unbindTexture()}T.depthBuffer&&Xe(T)}function it(T){const v=T.textures;for(let I=0,B=v.length;I<B;I++){const W=v[I];if(m(W)){const k=A(T),ce=i.get(W).__webglTexture;t.bindTexture(k,ce),d(k),t.unbindTexture()}}}const P=[],M=[];function j(T){if(T.samples>0){if(K(T)===!1){const v=T.textures,I=T.width,B=T.height;let W=n.COLOR_BUFFER_BIT;const k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(T),oe=v.length>1;if(oe)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<v.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Ue=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,I,B,0,0,I,B,W,n.NEAREST),l===!0&&(P.length=0,M.length=0,P.push(n.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(k),M.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Ue=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Q(T){return Math.min(r.maxSamples,T.samples)}function K(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function X(T){const v=o.render.frame;c.get(T)!==v&&(c.set(T,v),T.update())}function se(T,v){const I=T.colorSpace,B=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==br&&I!==ei&&($e.getTransfer(I)===nt?(B!==pn||W!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function Z(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=F,this.setTexture3D=J,this.setTextureCube=U,this.rebindTextures=we,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=K}function HT(n,e){function t(i,r=ei){let s;const o=$e.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$d)return n.BYTE;if(i===jd)return n.SHORT;if(i===ss)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===Zd)return n.ALPHA;if(i===Jd)return n.RGB;if(i===pn)return n.RGBA;if(i===Qd)return n.LUMINANCE;if(i===ep)return n.LUMINANCE_ALPHA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===tp)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===np)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===Ml||i===Sl||i===El)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===bl||i===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===bl)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===Hl||i===zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oo||i===kl||i===Vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oo)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ip||i===Gl||i===Wl||i===Xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kT=`
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

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:zT,fragmentShader:kT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends Pr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new VT,m=t.getContextAttributes();let d=null,A=null;const y=[],x=[],R=new Ke;let C=null;const w=new en;w.viewport=new dt;const D=new en;D.viewport=new dt;const E=[w,D],S=new cy;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=y[ne];return fe===void 0&&(fe=new wa,y[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=y[ne];return fe===void 0&&(fe=new wa,y[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=y[ne];return fe===void 0&&(fe=new wa,y[ne]=fe),fe.getHandSpace()};function z(ne){const fe=x.indexOf(ne.inputSource);if(fe===-1)return;const Me=y[fe];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,u||o),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",te);for(let ne=0;ne<y.length;ne++){const fe=x[ne];fe!==null&&(x[ne]=null,y[ne].disconnect(fe))}L=null,V=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,A=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,he=null,Re=null;m.depth&&(Re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Tr:mr,he=m.stencil?Er:Ni);const Xe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Fi(h.textureWidth,h.textureHeight,{format:pn,type:Hn,depthTexture:new mp(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Fi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(ne){for(let fe=0;fe<ne.removed.length;fe++){const Me=ne.removed[fe],he=x.indexOf(Me);he>=0&&(x[he]=null,y[he].disconnect(Me))}for(let fe=0;fe<ne.added.length;fe++){const Me=ne.added[fe];let he=x.indexOf(Me);if(he===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=x.length){x.push(Me),he=Xe;break}else if(x[Xe]===null){x[Xe]=Me,he=Xe;break}if(he===-1)break}const Re=y[he];Re&&Re.connect(Me)}}const F=new G,J=new G;function U(ne,fe,Me){F.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const he=F.distanceTo(J),Re=fe.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,we=Re[14]/(Re[10]-1),ot=Re[14]/(Re[10]+1),it=(Re[9]+1)/Re[5],P=(Re[9]-1)/Re[5],M=(Re[8]-1)/Re[0],j=(Xe[8]+1)/Xe[0],Q=we*M,K=we*j,X=he/(-M+j),se=X*-M;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(X),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Z=we+X,T=ot+X,v=Q-se,I=K+(he-se),B=it*ot/T*Z,W=P*ot/T*Z;ne.projectionMatrix.makePerspective(v,I,B,W,Z,T),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ae(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,Me=ne.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),S.near=D.near=w.near=fe,S.far=D.far=w.far=Me,(L!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,V=S.far),w.layers.mask=ne.layers.mask|2,D.layers.mask=ne.layers.mask|4,S.layers.mask=w.layers.mask|D.layers.mask;const he=ne.parent,Re=S.cameras;ae(S,he);for(let Xe=0;Xe<Re.length;Xe++)ae(Re[Xe],he);Re.length===2?U(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),me(ne,S,he)};function me(ne,fe,Me){Me===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ql*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ee=null;function Ae(ne,fe){if(c=fe.getViewerPose(u||o),g=fe,c!==null){const Me=c.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let he=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let we=0;we<Me.length;we++){const ot=Me[we];let it=null;if(p!==null)it=p.getViewport(ot);else{const M=f.getViewSubImage(h,ot);it=M.viewport,we===0&&(e.setRenderTargetTextures(A,M.colorTexture,h.ignoreDepthValues?void 0:M.depthStencilTexture),e.setRenderTarget(A))}let P=E[we];P===void 0&&(P=new en,P.layers.enable(we),P.viewport=new dt,E[we]=P),P.matrix.fromArray(ot.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ot.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(it.x,it.y,it.width,it.height),we===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(P)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const we=f.getDepthInformation(Me[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let Me=0;Me<y.length;Me++){const he=x[Me],Re=y[Me];he!==null&&Re!==void 0&&Re.update(he,fe,u||o)}Ee&&Ee(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ve=new gp;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}}const Si=new zn,WT=new ft;function XT(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,fp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),y=A.envMap,x=A.envMapRotation;y&&(m.envMap.value=y,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Si)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const x=y.program;i.uniformBlockBinding(A,x)}function u(A,y){let x=r[A.id];x===void 0&&(g(A),x=c(A),r[A.id]=x,A.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(A,R);const C=e.render.frame;s[A.id]!==C&&(h(A),s[A.id]=C)}function c(A){const y=f();A.__bindingPointIndex=y;const x=n.createBuffer(),R=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=r[A.id],x=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,w=x.length;C<w;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,S=D.length;E<S;E++){const L=D[E];if(p(L,C,E,R)===!0){const V=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let te=0;te<z.length;te++){const F=z[te],J=_(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,y,x,R){const C=A.value,w=y+"_"+x;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const D=R[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(A){const y=A.uniforms;let x=0;const R=16;for(let w=0,D=y.length;w<D;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,L=E.length;S<L;S++){const V=E[S],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,te=z.length;Y<te;Y++){const F=z[Y],J=_(F),U=x%R,ae=U%J.boundary,me=U+ae;x+=ae,me!==0&&R-me<J.storage&&(x+=R-me),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}const C=x%R;return C>0&&(x+=R-C),A.__size=x,A.__cache={},this}function _(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class YT{constructor(e={}){const{canvas:t=bx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=ri,this.toneMappingExposure=1;const x=this;let R=!1,C=0,w=0,D=null,E=-1,S=null;const L=new dt,V=new dt;let z=null;const Y=new Ge(0);let te=0,F=t.width,J=t.height,U=1,ae=null,me=null;const Ee=new dt(0,0,F,J),Ae=new dt(0,0,F,J);let Ve=!1;const ne=new pp;let fe=!1,Me=!1;this.transmissionResolutionScale=1;const he=new ft,Re=new ft,Xe=new G,we=new dt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function P(){return D===null?U:1}let M=i;function j(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),M===null){const O="webgl2";if(M=j(O,b),M===null)throw j(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,K,X,se,Z,T,v,I,B,W,k,ce,oe,le,Ue,re,de,be,Pe,ye,Ie,De,et,N;function ge(){Q=new iE(M),Q.init(),De=new HT(M,Q),K=new KS(M,Q,e,De),X=new OT(M,Q),K.reverseDepthBuffer&&h&&X.buffers.depth.setReversed(!0),se=new oE(M),Z=new TT,T=new BT(M,Q,X,Z,K,De,se),v=new JS(x),I=new nE(x),B=new hy(M),et=new $S(M,B),W=new rE(M,B,se,et),k=new lE(M,W,B,se),Pe=new aE(M,K,T),re=new ZS(Z),ce=new ET(x,v,I,Q,K,et,re),oe=new XT(x,Z),le=new AT,Ue=new LT(Q),be=new YS(x,v,I,X,k,p,l),de=new NT(x,k,K),N=new qT(M,se,K,X),ye=new jS(M,Q,se),Ie=new sE(M,Q,se),se.programs=ce.programs,x.capabilities=K,x.extensions=Q,x.properties=Z,x.renderLists=le,x.shadowMap=de,x.state=X,x.info=se}ge();const ee=new GT(x,M);this.xr=ee,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(F,J,!1))},this.getSize=function(b){return b.set(F,J)},this.setSize=function(b,O,q=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,J=O,t.width=Math.floor(b*U),t.height=Math.floor(O*U),q===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(F*U,J*U).floor()},this.setDrawingBufferSize=function(b,O,q){F=b,J=O,U=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,O,q,$){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,O,q,$),X.viewport(L.copy(Ee).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,O,q,$){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,O,q,$),X.scissor(V.copy(Ae).multiplyScalar(U).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){X.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,q=!0){let $=0;if(b){let H=!1;if(D!==null){const ue=D.texture.format;H=ue===Nc||ue===Uc||ue===Ic}if(H){const ue=D.texture.type,_e=ue===Hn||ue===Ni||ue===ss||ue===Er||ue===Dc||ue===Lc,Se=be.getClearColor(),Te=be.getClearAlpha(),Fe=Se.r,Oe=Se.g,Ce=Se.b;_e?(g[0]=Fe,g[1]=Oe,g[2]=Ce,g[3]=Te,M.clearBufferuiv(M.COLOR,0,g)):(_[0]=Fe,_[1]=Oe,_[2]=Ce,_[3]=Te,M.clearBufferiv(M.COLOR,0,_))}else $|=M.COLOR_BUFFER_BIT}O&&($|=M.DEPTH_BUFFER_BIT),q&&($|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),be.dispose(),le.dispose(),Ue.dispose(),Z.dispose(),v.dispose(),I.dispose(),k.dispose(),et.dispose(),N.dispose(),ce.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Wc),ee.removeEventListener("sessionend",Xc),di.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=se.autoReset,O=de.enabled,q=de.autoUpdate,$=de.needsUpdate,H=de.type;ge(),se.autoReset=b,de.enabled=O,de.autoUpdate=q,de.needsUpdate=$,de.type=H}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const O=b.target;O.removeEventListener("dispose",He),ct(O)}function ct(b){bt(b),Z.remove(b)}function bt(b){const O=Z.get(b).programs;O!==void 0&&(O.forEach(function(q){ce.releaseProgram(q)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,$,H,ue){O===null&&(O=ot);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Se=Mp(b,O,q,$,H);X.setMaterial($,_e);let Te=q.index,Fe=1;if($.wireframe===!0){if(Te=W.getWireframeAttribute(q),Te===void 0)return;Fe=2}const Oe=q.drawRange,Ce=q.attributes.position;let qe=Oe.start*Fe,Ze=(Oe.start+Oe.count)*Fe;ue!==null&&(qe=Math.max(qe,ue.start*Fe),Ze=Math.min(Ze,(ue.start+ue.count)*Fe)),Te!==null?(qe=Math.max(qe,0),Ze=Math.min(Ze,Te.count)):Ce!=null&&(qe=Math.max(qe,0),Ze=Math.min(Ze,Ce.count));const mt=Ze-qe;if(mt<0||mt===1/0)return;et.setup(H,$,Se,q,Te);let ut,Ye=ye;if(Te!==null&&(ut=B.get(Te),Ye=Ie,Ye.setIndex(ut)),H.isMesh)$.wireframe===!0?(X.setLineWidth($.wireframeLinewidth*P()),Ye.setMode(M.LINES)):Ye.setMode(M.TRIANGLES);else if(H.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),X.setLineWidth(Le*P()),H.isLineSegments?Ye.setMode(M.LINES):H.isLineLoop?Ye.setMode(M.LINE_LOOP):Ye.setMode(M.LINE_STRIP)}else H.isPoints?Ye.setMode(M.POINTS):H.isSprite&&Ye.setMode(M.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ti("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Ye.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Et=H._multiDrawCounts,Je=H._multiDrawCount,an=Te?B.get(Te).bytesPerElement:1,Bi=Z.get($).currentProgram.getUniforms();for(let Vt=0;Vt<Je;Vt++)Bi.setValue(M,"_gl_DrawID",Vt),Ye.render(Le[Vt]/an,Et[Vt])}else if(H.isInstancedMesh)Ye.renderInstances(qe,mt,H.count);else if(q.isInstancedBufferGeometry){const Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,Le);Ye.renderInstances(qe,mt,Et)}else Ye.render(qe,mt)};function tt(b,O,q){b.transparent===!0&&b.side===hn&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,_s(b,O,q),b.side=li,b.needsUpdate=!0,_s(b,O,q),b.side=hn):_s(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),d=Ue.get(q),d.init(O),y.push(d),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),b!==q&&b.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const $=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Se=ue[_e];tt(Se,q,H),$.add(Se)}else tt(ue,q,H),$.add(ue)}),d=y.pop(),$},this.compileAsync=function(b,O,q=null){const $=this.compile(b,O,q);return new Promise(H=>{function ue(){if($.forEach(function(_e){Z.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){H(b);return}setTimeout(ue,10)}Q.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let on=null;function An(b){on&&on(b)}function Wc(){di.stop()}function Xc(){di.start()}const di=new gp;di.setAnimationLoop(An),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){on=b,ee.setAnimationLoop(b),b===null?di.stop():di.start()},ee.addEventListener("sessionstart",Wc),ee.addEventListener("sessionend",Xc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,D),d=Ue.get(b,y.length),d.init(O),y.push(d),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(Re),Me=this.localClippingEnabled,fe=re.init(this.clippingPlanes,Me),m=le.get(b,A.length),m.init(),A.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&zo(ue,O,-1/0,x.sortObjects)}zo(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,me),it=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,it&&be.addToRenderList(m,b),this.info.render.frame++,fe===!0&&re.beginShadows();const q=d.state.shadowsArray;de.render(q,b,O),fe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(d.setupLights(),O.isArrayCamera){const ue=O.cameras;if(H.length>0)for(let _e=0,Se=ue.length;_e<Se;_e++){const Te=ue[_e];Yc($,H,b,Te)}it&&be.render(b);for(let _e=0,Se=ue.length;_e<Se;_e++){const Te=ue[_e];qc(m,b,Te,Te.viewport)}}else H.length>0&&Yc($,H,b,O),it&&be.render(b),qc(m,b,O);D!==null&&w===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,O),et.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],fe===!0&&re.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function zo(b,O,q,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){$&&we.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const _e=k.update(b),Se=b.material;Se.visible&&m.push(b,_e,Se,q,we.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){const _e=k.update(b),Se=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),we.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(Se)){const Te=_e.groups;for(let Fe=0,Oe=Te.length;Fe<Oe;Fe++){const Ce=Te[Fe],qe=Se[Ce.materialIndex];qe&&qe.visible&&m.push(b,_e,qe,q,we.z,Ce)}}else Se.visible&&m.push(b,_e,Se,q,we.z,null)}}const ue=b.children;for(let _e=0,Se=ue.length;_e<Se;_e++)zo(ue[_e],O,q,$)}function qc(b,O,q,$){const H=b.opaque,ue=b.transmissive,_e=b.transparent;d.setupLightsView(q),fe===!0&&re.setGlobalState(x.clippingPlanes,q),$&&X.viewport(L.copy($)),H.length>0&&gs(H,O,q),ue.length>0&&gs(ue,O,q),_e.length>0&&gs(_e,O,q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Yc(b,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Fi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?cs:Hn,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ue=d.state.transmissionRenderTarget[$.id],_e=$.viewport||L;ue.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);const Se=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(Y),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear(),it&&be.render(q);const Te=x.toneMapping;x.toneMapping=ri;const Fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),fe===!0&&re.setGlobalState(x.clippingPlanes,$),gs(b,q,$),T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ce=0,qe=O.length;Ce<qe;Ce++){const Ze=O[Ce],mt=Ze.object,ut=Ze.geometry,Ye=Ze.material,Le=Ze.group;if(Ye.side===hn&&mt.layers.test($.layers)){const Et=Ye.side;Ye.side=zt,Ye.needsUpdate=!0,$c(mt,q,$,ut,Ye,Le),Ye.side=Et,Ye.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue))}x.setRenderTarget(Se),x.setClearColor(Y,te),Fe!==void 0&&($.viewport=Fe),x.toneMapping=Te}function gs(b,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ue=b.length;H<ue;H++){const _e=b[H],Se=_e.object,Te=_e.geometry,Fe=$===null?_e.material:$,Oe=_e.group;Se.layers.test(q.layers)&&$c(Se,O,q,Te,Fe,Oe)}}function $c(b,O,q,$,H,ue){b.onBeforeRender(x,O,q,$,H,ue),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,O,q,$,b,ue),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=zt,H.needsUpdate=!0,x.renderBufferDirect(q,O,$,H,b,ue),H.side=li,H.needsUpdate=!0,x.renderBufferDirect(q,O,$,H,b,ue),H.side=hn):x.renderBufferDirect(q,O,$,H,b,ue),b.onAfterRender(x,O,q,$,H,ue)}function _s(b,O,q){O.isScene!==!0&&(O=ot);const $=Z.get(b),H=d.state.lights,ue=d.state.shadowsArray,_e=H.state.version,Se=ce.getParameters(b,H.state,ue,O,q),Te=ce.getProgramCacheKey(Se);let Fe=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?I:v).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",He),Fe=new Map,$.programs=Fe);let Oe=Fe.get(Te);if(Oe!==void 0){if($.currentProgram===Oe&&$.lightsStateVersion===_e)return Kc(b,Se),Oe}else Se.uniforms=ce.getUniforms(b),b.onBeforeCompile(Se,x),Oe=ce.acquireProgram(Se,Te),Fe.set(Te,Oe),$.uniforms=Se.uniforms;const Ce=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=re.uniform),Kc(b,Se),$.needsLights=Ep(b),$.lightsStateVersion=_e,$.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMap.value=H.state.directionalShadowMap,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotShadowMap.value=H.state.spotShadowMap,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMap.value=H.state.pointShadowMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Oe,$.uniformsList=null,Oe}function jc(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ao.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Kc(b,O){const q=Z.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Mp(b,O,q,$,H){O.isScene!==!0&&(O=ot),T.resetTextureUnits();const ue=O.fog,_e=$.isMeshStandardMaterial?O.environment:null,Se=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:br,Te=($.isMeshStandardMaterial?I:v).get($.envMap||_e),Fe=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!q.morphAttributes.position,qe=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color;let mt=ri;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=x.toneMapping);const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ye=ut!==void 0?ut.length:0,Le=Z.get($),Et=d.state.lights;if(fe===!0&&(Me===!0||b!==S)){const Pt=b===S&&$.id===E;re.setState($,b,Pt)}let Je=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Et.state.version||Le.outputColorSpace!==Se||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==Te||$.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Oe||Le.morphTargets!==Ce||Le.morphNormals!==qe||Le.morphColors!==Ze||Le.toneMapping!==mt||Le.morphTargetsCount!==Ye)&&(Je=!0):(Je=!0,Le.__version=$.version);let an=Le.currentProgram;Je===!0&&(an=_s($,O,H));let Bi=!1,Vt=!1,Ir=!1;const at=an.getUniforms(),jt=Le.uniforms;if(X.useProgram(an.program)&&(Bi=!0,Vt=!0,Ir=!0),$.id!==E&&(E=$.id,Vt=!0),Bi||S!==b){X.buffers.depth.getReversed()?(he.copy(b.projectionMatrix),wx(he),Rx(he),at.setValue(M,"projectionMatrix",he)):at.setValue(M,"projectionMatrix",b.projectionMatrix),at.setValue(M,"viewMatrix",b.matrixWorldInverse);const Ot=at.map.cameraPosition;Ot!==void 0&&Ot.setValue(M,Xe.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&at.setValue(M,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&at.setValue(M,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Vt=!0,Ir=!0)}if(H.isSkinnedMesh){at.setOptional(M,H,"bindMatrix"),at.setOptional(M,H,"bindMatrixInverse");const Pt=H.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),at.setValue(M,"boneTexture",Pt.boneTexture,T))}H.isBatchedMesh&&(at.setOptional(M,H,"batchingTexture"),at.setValue(M,"batchingTexture",H._matricesTexture,T),at.setOptional(M,H,"batchingIdTexture"),at.setValue(M,"batchingIdTexture",H._indirectTexture,T),at.setOptional(M,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(M,"batchingColorTexture",H._colorsTexture,T));const Kt=q.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Pe.update(H,q,an),(Vt||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,at.setValue(M,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(jt.envMap.value=Te,jt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Vt&&(at.setValue(M,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Sp(jt,Ir),ue&&$.fog===!0&&oe.refreshFogUniforms(jt,ue),oe.refreshMaterialUniforms(jt,$,U,J,d.state.transmissionRenderTarget[b.id]),ao.upload(M,jc(Le),jt,T)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ao.upload(M,jc(Le),jt,T),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&at.setValue(M,"center",H.center),at.setValue(M,"modelViewMatrix",H.modelViewMatrix),at.setValue(M,"normalMatrix",H.normalMatrix),at.setValue(M,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Pt=$.uniformsGroups;for(let Ot=0,ko=Pt.length;Ot<ko;Ot++){const pi=Pt[Ot];N.update(pi,an),N.bind(pi,an)}}return an}function Sp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ep(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,O,q){Z.get(b.texture).__webglTexture=O,Z.get(b.depthTexture).__webglTexture=q;const $=Z.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const q=Z.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Tp=M.createFramebuffer();this.setRenderTarget=function(b,O=0,q=0){D=b,C=O,w=q;let $=!0,H=null,ue=!1,_e=!1;if(b){const Te=Z.get(b);if(Te.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(M.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Te.__hasExternalTextures)T.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Te.__boundDepthTexture!==Ce){if(Ce!==null&&Z.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Oe=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?H=Oe[O][q]:H=Oe[O],ue=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?H=Z.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[q]:H=Oe,L.copy(b.viewport),V.copy(b.scissor),z=b.scissorTest}else L.copy(Ee).multiplyScalar(U).floor(),V.copy(Ae).multiplyScalar(U).floor(),z=Ve;if(q!==0&&(H=Tp),X.bindFramebuffer(M.FRAMEBUFFER,H)&&$&&X.drawBuffers(b,H),X.viewport(L),X.scissor(V),X.setScissorTest(z),ue){const Te=Z.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,q)}else if(_e){const Te=Z.get(b.texture),Fe=O;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Te.__webglTexture,q,Fe)}else if(b!==null&&q!==0){const Te=Z.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Te.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(b,O,q,$,H,ue,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){X.bindFramebuffer(M.FRAMEBUFFER,Se);try{const Te=b.texture,Fe=Te.format,Oe=Te.type;if(!K.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&q>=0&&q<=b.height-H&&M.readPixels(O,q,$,H,De.convert(Fe),De.convert(Oe),ue)}finally{const Te=D!==null?Z.get(D).__webglFramebuffer:null;X.bindFramebuffer(M.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,$,H,ue,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){const Te=b.texture,Fe=Te.format,Oe=Te.type;if(!K.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-$&&q>=0&&q<=b.height-H){X.bindFramebuffer(M.FRAMEBUFFER,Se);const Ce=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ce),M.bufferData(M.PIXEL_PACK_BUFFER,ue.byteLength,M.STREAM_READ),M.readPixels(O,q,$,H,De.convert(Fe),De.convert(Oe),0);const qe=D!==null?Z.get(D).__webglFramebuffer:null;X.bindFramebuffer(M.FRAMEBUFFER,qe);const Ze=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Ax(M,Ze,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ce),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ue),M.deleteBuffer(Ce),M.deleteSync(Ze),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,q=0){b.isTexture!==!0&&(Ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(b.image.width*$),ue=Math.floor(b.image.height*$),_e=O!==null?O.x:0,Se=O!==null?O.y:0;T.setTexture2D(b,0),M.copyTexSubImage2D(M.TEXTURE_2D,q,0,0,_e,Se,H,ue),X.unbindTexture()};const bp=M.createFramebuffer(),Ap=M.createFramebuffer();this.copyTextureToTexture=function(b,O,q=null,$=null,H=0,ue=null){b.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],O=arguments[2],ue=arguments[3]||0,q=null),ue===null&&(H!==0?(Ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=H,H=0):ue=0);let _e,Se,Te,Fe,Oe,Ce,qe,Ze,mt;const ut=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(q!==null)_e=q.max.x-q.min.x,Se=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Oe=q.min.y,Ce=q.isBox3?q.min.z:0;else{const Kt=Math.pow(2,-H);_e=Math.floor(ut.width*Kt),Se=Math.floor(ut.height*Kt),b.isDataArrayTexture?Te=ut.depth:b.isData3DTexture?Te=Math.floor(ut.depth*Kt):Te=1,Fe=0,Oe=0,Ce=0}$!==null?(qe=$.x,Ze=$.y,mt=$.z):(qe=0,Ze=0,mt=0);const Ye=De.convert(O.format),Le=De.convert(O.type);let Et;O.isData3DTexture?(T.setTexture3D(O,0),Et=M.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Et=M.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Et=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=M.getParameter(M.UNPACK_ROW_LENGTH),an=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Bi=M.getParameter(M.UNPACK_SKIP_PIXELS),Vt=M.getParameter(M.UNPACK_SKIP_ROWS),Ir=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ut.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ut.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Oe),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ce);const at=b.isDataArrayTexture||b.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Kt=Z.get(b),Pt=Z.get(O),Ot=Z.get(Kt.__renderTarget),ko=Z.get(Pt.__renderTarget);X.bindFramebuffer(M.READ_FRAMEBUFFER,Ot.__webglFramebuffer),X.bindFramebuffer(M.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let pi=0;pi<Te;pi++)at&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Z.get(b).__webglTexture,H,Ce+pi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,ue,mt+pi)),M.blitFramebuffer(Fe,Oe,_e,Se,qe,Ze,_e,Se,M.DEPTH_BUFFER_BIT,M.NEAREST);X.bindFramebuffer(M.READ_FRAMEBUFFER,null),X.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Z.has(b)){const Kt=Z.get(b),Pt=Z.get(O);X.bindFramebuffer(M.READ_FRAMEBUFFER,bp),X.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ap);for(let Ot=0;Ot<Te;Ot++)at?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Kt.__webglTexture,H,Ce+Ot):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Kt.__webglTexture,H),jt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Pt.__webglTexture,ue,mt+Ot):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Pt.__webglTexture,ue),H!==0?M.blitFramebuffer(Fe,Oe,_e,Se,qe,Ze,_e,Se,M.COLOR_BUFFER_BIT,M.NEAREST):jt?M.copyTexSubImage3D(Et,ue,qe,Ze,mt+Ot,Fe,Oe,_e,Se):M.copyTexSubImage2D(Et,ue,qe,Ze,Fe,Oe,_e,Se);X.bindFramebuffer(M.READ_FRAMEBUFFER,null),X.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else jt?b.isDataTexture||b.isData3DTexture?M.texSubImage3D(Et,ue,qe,Ze,mt,_e,Se,Te,Ye,Le,ut.data):O.isCompressedArrayTexture?M.compressedTexSubImage3D(Et,ue,qe,Ze,mt,_e,Se,Te,Ye,ut.data):M.texSubImage3D(Et,ue,qe,Ze,mt,_e,Se,Te,Ye,Le,ut):b.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ue,qe,Ze,_e,Se,Ye,Le,ut.data):b.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ue,qe,Ze,ut.width,ut.height,Ye,ut.data):M.texSubImage2D(M.TEXTURE_2D,ue,qe,Ze,_e,Se,Ye,Le,ut);M.pixelStorei(M.UNPACK_ROW_LENGTH,Je),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,an),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Bi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Vt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ir),ue===0&&O.generateMipmaps&&M.generateMipmap(Et),X.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q=null,$=null,H=0){return b.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,b=arguments[2],O=arguments[3],H=arguments[4]||0),Ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,q,$,H)},this.initRenderTarget=function(b){Z.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){C=0,w=0,D=null,X.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const $T=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Yf=1e3,Vr=8e3,Fa=15,jT=25,KT={__name:"BackgroundAnimation",setup(n){const e=ni(null);let t,i,r,s,o,a,l,u,c,f;const h=[];function p(){t=new Qx,t.fog=new Hc(658964,.001),i=new en(60,window.innerWidth/window.innerHeight,.1,3e3),i.position.set(0,40,100),i.lookAt(0,0,-300),r=new YT({alpha:!0,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setClearColor(658964,1),e.value.appendChild(r.domElement),o=new uy,g(),_(),m(),d(),y(),R()}function g(){l=new nn({uniforms:{time:{value:0},resolution:{value:new Ke(window.innerWidth,window.innerHeight)},fogColor:{value:new Ge(658964)},fogDensity:{value:.0015}},vertexShader:`
      varying vec3 vPosition;
      
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec2 resolution;
      uniform vec3 fogColor;
      uniform float fogDensity;
      
      varying vec3 vPosition;
      
      float gridLine(float pos, float width) {
        float halfWidth = width * 0.5;
        return smoothstep(-halfWidth, halfWidth, pos) - smoothstep(halfWidth, halfWidth * 2.0, pos);
      }
      
      void main() {
        // 使用更稳定的计算方式避免z轴线条闪烁
        float cellSize = 50.0;
        float xLine = abs(fract(vPosition.x / cellSize + time * 0.4 + 0.5) - 0.5) / fwidth(vPosition.x) * cellSize;
        float zLine = abs(fract(vPosition.z / cellSize + time * 0.4 + 0.5) - 0.5) / fwidth(vPosition.z) * cellSize;
        xLine = 1.0 - min(xLine, 1.0);
        zLine = 1.0 - min(zLine, 1.0);
        
        // 合并网格线
        float line = max(xLine, zLine);
        
        // 根据距离调整亮度
        float dist = length(vPosition.xz);
        float brightness = 1.0 - smoothstep(0.0, 1000.0, dist);
        
        // 计算颜色
        vec3 baseColor = vec3(0.0);
        vec3 lineColor = mix(vec3(0.0, 0.8, 1.0), vec3(1.0, 0.2, 0.8), sin(time * 0.2) * 0.5 + 0.5);
        vec3 color = mix(baseColor, lineColor, line * brightness);
        
        // 应用雾效果
        float fogFactor = 1.0 - exp(-fogDensity * dist);
        color = mix(color, fogColor, fogFactor);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!0,side:hn});const w=new wr(Yf*2,Yf*2,1,1);w.rotateX(-Math.PI/2),a=new tn(w,l),t.add(a)}function _(){const w=new sn,D=new Float32Array(Vr*3),E=new Float32Array(Vr),S=new Float32Array(Vr*3),L=new Float32Array(Vr);for(let z=0;z<Vr;z++){const Y=z*3,te=2*Math.PI*Math.random(),F=Math.acos(Math.random()),J=Math.pow(Math.random(),.5)*2500;D[Y]=J*Math.sin(F)*Math.cos(te),D[Y+1]=Math.abs(J*Math.cos(F))+50,D[Y+2]=J*Math.sin(F)*Math.sin(te),E[z]=Math.pow(Math.random(),1.5)*2.5+.8,L[z]=Math.pow(Math.random(),.8);const U=Math.random(),ae=U>.8?new Ge(65535):U>.6?new Ge(16711935):U>.3?new Ge(16777130):new Ge(16777215);S[Y]=ae.r,S[Y+1]=ae.g,S[Y+2]=ae.b}w.setAttribute("position",new Nt(D,3)),w.setAttribute("size",new Nt(E,1)),w.setAttribute("color",new Nt(S,3)),w.setAttribute("brightness",new Nt(L,1));const V=new nn({uniforms:{time:{value:0}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      attribute float brightness;
      varying vec3 vColor;
      varying float vBrightness;
      uniform float time;

      void main() {
        vColor = color;
        vBrightness = brightness;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float flickerSpeed = position.x * position.y * position.z * 0.0001;
        float flicker = sin(time * (1.0 + flickerSpeed) + flickerSpeed * 100.0) * 0.2 + 0.8;
        gl_PointSize = size * flicker * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vBrightness;

      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        float alpha = (1.0 - smoothstep(0.3, 0.5, dist)) * vBrightness;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,blending:Zr,depthWrite:!1});u=new sy(w,V),t.add(u)}function m(){const w=Math.random()*Math.PI*2,D=Math.random()*Math.PI*2,E=Math.random()*Math.PI*2,S=Math.random()*Math.PI*2,L=new wr(2e3,2e3),V=new nn({uniforms:{time:{value:0},phaseOffset1:{value:w},phaseOffset2:{value:D},phaseOffset3:{value:E},phaseOffset4:{value:S}},vertexShader:`
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform float phaseOffset1;
      uniform float phaseOffset2;
      uniform float phaseOffset3;
      uniform float phaseOffset4;
      varying vec2 vUv;
      
      // 简单的噪声函数
      float noise(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      // 改进的分形噪声函数
      float fbm(vec2 p) {
        float f = 0.0;
        float w = 0.5;
        for (int i = 0; i < 5; i++) {
          f += w * noise(p);
          p *= 2.0;
          w *= 0.5;
        }
        return f;
      }
      
      // 极光纹理函数
      float auroraPattern(vec2 p, float time) {
        float scale = 8.0;
        float t = time * 0.12;
        float result = 0.0;
        
        // 多层次的波浪叠加
        result += sin(p.x * scale * 1.0 + t) * 0.5 + 0.5;
        result += sin(p.x * scale * 0.5 + t * 1.1 + 1.0) * 0.25 + 0.25;
        result *= sin(p.x * scale * 0.25 - t * 0.8) * 0.5 + 0.5;
        
        // 垂直方向的扰动
        float vDisturb = sin(p.x * scale * 0.3 + t * 1.2) * sin(p.y * 2.0);
        result *= smoothstep(0.0, 1.0, vDisturb * 0.5 + 0.5);
        
        return result;
      }
      
      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);
        
        // 创建更自然的径向渐变
        float radialGradient = smoothstep(0.5, 0.12, dist);
        
        // 更加活跃的脉动效果 - 添加随机相位
        float primaryPulse = (sin(time * 0.23 + phaseOffset1) * 0.5 + 0.5) * 0.18;
        float secondaryPulse = (sin(time * 0.41 + phaseOffset2 + 2.0) * 0.5 + 0.5) * 0.12;
        float tertiaryPulse = (sin(time * 0.11 + phaseOffset3 + 4.0) * 0.5 + 0.5) * 0.08;
        float fastPulse = (sin(time * 0.82 + phaseOffset4 + 1.5) * 0.5 + 0.5) * 0.05;
        
        // 激活的极光颜色系统 - 保持深沉基础但增加更多变化
        vec3 color1 = vec3(0.04, 0.14, 0.20); // 深青蓝色
        vec3 color2 = vec3(0.06, 0.18, 0.09); // 深青绿色
        vec3 color3 = vec3(0.12, 0.04, 0.20); // 深紫色
        vec3 color4 = vec3(0.16, 0.06, 0.02); // 深红橙色
        vec3 color5 = vec3(0.02, 0.15, 0.15); // 深青色
        vec3 color6 = vec3(0.15, 0.12, 0.02); // 深金色
        
        // 非线性颜色混合 - 更加活跃的变化 - 添加随机相位
        float t1 = sin(time * 0.13 + phaseOffset1) * 0.5 + 0.5;
        float t2 = sin(time * 0.19 + phaseOffset2 + 1.5) * 0.5 + 0.5;
        float t3 = sin(time * 0.09 + phaseOffset3 + 3.0) * 0.5 + 0.5;
        float t4 = sin(time * 0.15 + phaseOffset4 + 5.0) * 0.5 + 0.5;
        
        // 更复杂的颜色混合系统
        vec3 colorMix1 = mix(color1, color2, smoothstep(0.0, 1.0, t1));
        vec3 colorMix2 = mix(color3, color4, smoothstep(0.0, 1.0, t2));
        vec3 colorMix3 = mix(color5, color6, smoothstep(0.0, 1.0, t3));
        
        vec3 colorA = mix(colorMix1, colorMix2, smoothstep(0.2, 0.8, t2));
        vec3 colorB = mix(colorMix2, colorMix3, smoothstep(0.3, 0.7, t3));
        vec3 baseColor = mix(colorA, colorB, smoothstep(0.1, 0.9, t4));
        
        // 增强的分形噪声
        float noiseScale = 5.0 + sin(time * 0.2 + phaseOffset1) * 1.0;
        float noiseVal = fbm(center * noiseScale + time * 0.05);
        float noiseDetail = fbm(center * 12.0 - time * 0.03) * 0.3;
        noiseVal = noiseVal * 0.7 + noiseDetail;
        
        // 极光纹理
        float aurora = auroraPattern(center + vec2(0.0, time * 0.05), time + phaseOffset2);
        
        // 更复杂的颜色层次化
        vec3 color = baseColor;
        
        // 增加高光区域
        float highlights = smoothstep(0.5, 0.8, noiseVal) * (0.2 + primaryPulse * 0.3);
        color += vec3(0.08, 0.15, 0.1) * highlights * radialGradient;
        
        // 极光幕布效果
        float curtain = aurora * smoothstep(0.3, 0.0, dist);
        color += vec3(0.07, 0.1, 0.03) * curtain * (0.8 + fastPulse);
        
        // 颜色强化
        color = mix(color, color * 1.2, noiseVal * (0.4 + tertiaryPulse));
        
        // 计算透明度
        float alpha = radialGradient * (0.1 + primaryPulse + secondaryPulse + tertiaryPulse + fastPulse * 0.8);
        
        // 边缘处理
        alpha *= smoothstep(1.0, 0.5, dist);
        
        // 增加边缘的噪声变化
        alpha *= 0.7 + noiseVal * 0.4 + aurora * 0.2;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,blending:Zr,depthWrite:!1,side:hn});c=new tn(L,V),c.position.y=50,c.rotation.x=-Math.PI/2-.06,t.add(c)}function d(){f={meteors:[],lastMeteorTime:0,meteorCycle:0,createMeteor(){const w=Math.random()*Math.PI*2,D=300+Math.random()*500,E=100+Math.random()*300,S=Math.sin(w)*D,L=E,V=Math.cos(w)*D-300,z=20+Math.random()*100,Y=Math.random()*.6-.3,te=-.7-Math.random()*.3,F=Math.random()*.6-.3,J=[],U=12;for(let Ve=0;Ve<=U;Ve++){const ne=Ve/U;J.push(new G(S-Y*z*ne,L-te*z*ne,V-F*z*ne))}const ae=new sn().setFromPoints(J),me=new Float32Array(U+1);for(let Ve=0;Ve<=U;Ve++)me[Ve]=1-Ve/U*.9;ae.setAttribute("alpha",new Nt(me,1));const Ee=new nn({uniforms:{color:{value:new Ge(A())},time:{value:0},globalOpacity:{value:1}},vertexShader:`
          attribute float alpha;
          varying float vAlpha;
          varying vec2 vUv;
          
          void main() {
            vAlpha = alpha;
            vUv = position.xy * 0.01;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float globalOpacity;
          uniform float time;
          varying float vAlpha;
          varying vec2 vUv;
          
          // 扰动函数
          float noise(vec2 p) {
            return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }
          
          void main() {
            // 尾迹渐变核心
            float coreGlow = smoothstep(0.0, 0.4, vAlpha) * vAlpha * 2.0;
            
            // 增加随机扰动效果，模拟大气阻力和微小颗粒
            float distortion = noise(vUv + time * 0.1) * 0.08;
            
            // 创建更复杂的发光效果
            vec3 baseGlow = mix(color, vec3(1.0), 0.4);
            
            // 添加颜色渐变 - 头部偏白，尾部保持原色
            vec3 finalColor = mix(baseGlow, vec3(1.0, 0.95, 0.85), coreGlow * 0.7);
            
            // 添加轻微的蓝色/青色边缘，模拟热效应
            finalColor += vec3(0.0, 0.2, 0.5) * (1.0 - vAlpha) * 0.2;
            
            // 计算最终不透明度，包含扰动效果
            float opacity = vAlpha * globalOpacity * (1.0 + distortion);
            
            // 增强尾迹边缘发光感
            float edgeGlow = smoothstep(0.4, 0.0, vAlpha) * 0.3;
            opacity += edgeGlow * globalOpacity;
            
            gl_FragColor = vec4(finalColor, opacity);
          }
        `,transparent:!0,blending:Zr,depthWrite:!1}),Ae=new iy(ae,Ee);return Ae.userData={velocity:new G(Y*1.2,te*1.2,F*1.2),speed:1+Math.random()*2,life:1,decay:.002+Math.random()*.005,flickerRate:.2+Math.random()*.3},t.add(Ae),this.meteors.push(Ae),Ae},update(){const w=o.getElapsedTime();this.updateMeteorGeneration(w);for(let D=this.meteors.length-1;D>=0;D--){const E=this.meteors[D];E.position.x+=E.userData.velocity.x*E.userData.speed,E.position.y+=E.userData.velocity.y*E.userData.speed,E.position.z+=E.userData.velocity.z*E.userData.speed,E.userData.life-=E.userData.decay;const S=Math.sin(w*5*E.userData.flickerRate)*.1+.9;E.material.uniforms.globalOpacity.value=E.userData.life*S,E.userData.life<=0&&(t.remove(E),E.geometry.dispose(),E.material.dispose(),this.meteors.splice(D,1))}},updateMeteorGeneration(w){const D=w-this.lastMeteorTime;this.meteorCycle=Math.sin(w*.05)*.5+.5;let E=.005+this.meteorCycle*.01;D>5&&(E+=(D-5)*.01),this.meteors.length>=Fa?E=0:this.meteors.length>Fa*.7&&(E*=.5),Math.sin(w*.01)>.95&&this.meteors.length<Fa*.8&&(E*=3),Math.random()<E&&(this.createMeteor(),this.lastMeteorTime=w)}}}function A(){const w=[16777215,13431551,16777164,16768443,14540287];return Math.random()<.6?w[0]:w[Math.floor(Math.random()*w.length)]}function y(){const w=[new Vc(3),new kc(3),new zc(3)];for(let D=0;D<jT;D++){const E=w[Math.floor(Math.random()*w.length)],S=new Bc({color:new Ge().setHSL(Math.random(),.8,.6),wireframe:!0}),L=new tn(E,S);L.position.set((Math.random()-.5)*400,Math.random()*100+50,(Math.random()-.5)*400),L.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),L.userData.rotationSpeed={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},L.userData.floatSpeed=Math.random()*.3+.2,L.userData.floatOffset=Math.random()*Math.PI*2,L.userData.floatRange=Math.random()*10+5,h.push(L),t.add(L)}}function x(){const w=o.getElapsedTime();l&&(l.uniforms.time.value=w),u&&(u.material.uniforms.time.value=w),c&&(c.material.uniforms.time.value=w),f&&f.update(),h.forEach(D=>{D.rotation.x+=D.userData.rotationSpeed.x,D.rotation.y+=D.userData.rotationSpeed.y,D.rotation.z+=D.userData.rotationSpeed.z,D.position.y=D.position.y+Math.sin(w*D.userData.floatSpeed+D.userData.floatOffset)*.5}),i.position.y=40+Math.sin(w*.3)*3,i.position.x=Math.sin(w*.1)*15,i.position.z=100+Math.cos(w*.07)*10}function R(){s=requestAnimationFrame(R),x(),r.render(t,i)}function C(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),l&&l.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)}return hc(()=>{p(),window.addEventListener("resize",C)}),dc(()=>{window.removeEventListener("resize",C),s&&cancelAnimationFrame(s),a&&(t.remove(a),a.geometry.dispose(),l.dispose()),u&&(t.remove(u),u.geometry.dispose(),u.material.dispose()),c&&(t.remove(c),c.geometry.dispose(),c.material.dispose()),f&&f.meteors&&f.meteors.forEach(w=>{t.remove(w),w.geometry.dispose(),w.material.dispose()}),h.forEach(w=>{t.remove(w),w.geometry.dispose(),w.material.dispose()}),r&&(r.dispose(),e.value.removeChild(r.domElement))}),(w,D)=>(Mn(),_c("div",{ref_key:"container",ref:e,class:"background-animation"},null,512))}},ZT=$T(KT,[["__scopeId","data-v-63e3c47e"]]),JT={class:"container"},QT={__name:"app",setup(n){hc(()=>{const o=document.querySelectorAll(".typing-effect"),a=document.getElementById("cursor-line"),l=document.querySelector(".contact-command"),u=document.querySelector(".typing-command"),c=document.querySelector(".contact-items");e(l,u,c,a),t(o,l,u,c,a)});function e(o,a,l,u){o.style.opacity="0",a.textContent="",l.style.opacity="0",u.style.opacity="0"}function t(o,a,l,u,c){o.forEach(f=>{if(f.closest(".contact-items"))return;const h=Array.from(f.children);let p=0;h.forEach((g,_)=>{setTimeout(()=>{g.style.opacity="1",g.classList.add("typed"),_===h.length-1&&setTimeout(()=>i(a,l,u,c),400)},p),p+=800})})}function i(o,a,l,u){o.style.opacity="1",setTimeout(()=>{r(a,"contact --show",0,()=>{setTimeout(()=>s(l,u),400)})},200)}function r(o,a,l,u){l<a.length?(o.textContent+=a.charAt(l),setTimeout(()=>r(o,a,l+1,u),100)):u&&u()}function s(o,a){const l=Array.from(o.children);o.style.opacity="1",l.forEach((u,c)=>{u.style.opacity="0",u.style.transform="translateY(-10px)",setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0)"},c*200)}),setTimeout(()=>{a.style.opacity="1"},l.length*200+300)}return(o,a)=>{const l=ZT;return Mn(),_c("div",JT,[pt(l),a[0]||(a[0]=yg('<div class="terminal"><div class="terminal-header"><div class="terminal-buttons"><div class="terminal-button close"></div><div class="terminal-button minimize"></div><div class="terminal-button maximize"></div></div><div class="terminal-title"> user@starlong:~ </div></div><div class="terminal-content"><div class="command-line"><span class="prompt">$ </span><span class="command">cat about.me</span></div><div class="output"><div class="typing-effect"><h1>你好，世界！👋</h1><p>我是一名热爱编程的高级前端开发者。</p><p>专注于构建高性能的现代 Web 应用，热衷于新技术以及 AI 领域的探索。</p><p>正在使用 JavaScript/TypeScript, Vue, React, Node.js 🚀</p><p class="code-line"><span class="code-keyword">if </span><span class="code-parens">(</span><span class="code-object">coffee</span>.<span class="code-method">isEmpty</span><span class="code-parens">()</span><span class="code-parens">)</span><span class="code-parens"> { </span><span class="code-object">coffee</span>.<span class="code-method">refill</span><span class="code-parens">()</span><span class="code-parens"> }</span><span class="code-comment">// 来杯咖啡，聊聊代码</span><span class="code-emoji">☕</span></p></div></div><div class="command-line contact-command"><span class="prompt">$ </span><span class="command typing-command"></span></div><div class="output contact-info"><div class="contact-items typing-effect"><div class="contact-item"><a href="https://github.com/6starlong" target="_blank" class="contact-link"><svg height="18" width="18" viewBox="0 0 16 16" class="contact-icon"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg><span class="contact-text">GitHub</span></a></div><div class="contact-item"><a href="mailto:starlong.lu@gmail.com" class="contact-link"><svg height="18" width="18" viewBox="0 0 24 24" class="contact-icon"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><span class="contact-text">Email</span></a></div></div></div><div id="cursor-line" class="command-line"><span class="prompt">$ </span><span class="command blink">_</span></div></div></div>',1))])}}},eb={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error;t.stack&&t.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,c=r?ru(()=>Wu(()=>import("./CU9yoL6C.js"),__vite__mapDeps([0,1,2]),import.meta.url)):ru(()=>Wu(()=>import("./DkM6sp2G.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,h)=>(Mn(),nr(St(c),zp(cd({statusCode:St(i),statusMessage:St(s),description:St(o),stack:St(a)})),null,16))}},tb={key:0},$f={__name:"nuxt-root",setup(n){const e=()=>null,t=Tt(),i=t.deferHydration();if(t.isHydrating){const l=t.hooks.hookOnce("app:error",i);Ui().beforeEach(l)}const r=!1;zh(Fd,Od()),t.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const s=Tc(),o=!1;Ih((l,u,c)=>{if(t.hooks.callHook("vue:error",l,u,c).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),R0(l)&&(l.fatal||l.unhandled))return t.runWithContext(()=>A0(l)),!1});const a=!1;return(l,u)=>(Mn(),nr(dg,{onResolve:St(i)},{default:wh(()=>[St(o)?(Mn(),_c("div",tb)):St(s)?(Mn(),nr(St(eb),{key:1,error:St(s)},null,8,["error"])):St(a)?(Mn(),nr(St(e),{key:2,context:St(a)},null,8,["context"])):St(r)?(Mn(),nr(Bm(St(r)),{key:3})):(Mn(),nr(St(QT),{key:4}))]),_:1},8,["onResolve"]))}};let jf;{let n;jf=async function(){var o,a;if(n)return n;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?n_($f):t_($f),r=u0({vueApp:i});async function s(l){var u;await r.callHook("app:error",l),(u=r.payload).error||(u.error=bc(l))}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await d0(r,Nv)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(a0),await r.hooks.callHook("app:mounted",i),await ac()}catch(l){s(l)}return i},n=jf().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{wh as A,ud as B,sb as C,p0 as D,pc as E,hr as F,kd as G,$T as _,Tt as a,Rc as b,qu as c,Rh as d,dc as e,ob as f,ib as g,Dg as h,b0 as i,pd as j,Cr as k,Fo as l,rs as m,T0 as n,hc as o,Mc as p,Sc as q,ni as r,rb as s,_c as t,Ui as u,Mn as v,Ja as w,ld as x,Gp as y,pt as z};
