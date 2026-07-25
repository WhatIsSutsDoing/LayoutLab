(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ag(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lg={exports:{}},Xl={},cg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),T_=Symbol.for("react.portal"),A_=Symbol.for("react.fragment"),C_=Symbol.for("react.strict_mode"),R_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),L_=Symbol.for("react.forward_ref"),D_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),Jd=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fg=Object.assign,dg={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||ug}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=Ws.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||ug}var Hf=Bf.prototype=new hg;Hf.constructor=Bf;fg(Hf,Ws.prototype);Hf.isPureReactComponent=!0;var Qd=Array.isArray,pg=Object.prototype.hasOwnProperty,Vf={current:null},mg={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pg.call(e,i)&&!mg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:t,key:s,ref:o,props:r,_owner:Vf.current}}function F_(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function O_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eh=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O_(""+t.key):e.toString(36)}function Qa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case T_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,Qd(r)?(n="",t!=null&&(n=t.replace(eh,"$&/")+"/"),Qa(r,e,n,"",function(c){return c})):r!=null&&(Gf(r)&&(r=F_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xc(s,a);o+=Qa(s,e,n,l,r)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,a++),o+=Qa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var i=[],r=0;return Qa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function k_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},el={transition:null},z_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:el,ReactCurrentOwner:Vf};function vg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ws;$e.Fragment=A_;$e.Profiler=R_;$e.PureComponent=Bf;$e.StrictMode=C_;$e.Suspense=D_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;$e.act=vg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pg.call(e,l)&&!mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ea,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:P_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};$e.createElement=gg;$e.createFactory=function(t){var e=gg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:L_,render:t}};$e.isValidElement=Gf;$e.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:k_}};$e.memo=function(t,e){return{$$typeof:N_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};$e.unstable_act=vg;$e.useCallback=function(t,e){return Qt.current.useCallback(t,e)};$e.useContext=function(t){return Qt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Qt.current.useEffect(t,e)};$e.useId=function(){return Qt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Qt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};$e.useRef=function(t){return Qt.current.useRef(t)};$e.useState=function(t){return Qt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Qt.current.useTransition()};$e.version="18.3.1";cg.exports=$e;var wt=cg.exports;const B_=ag(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=wt,V_=Symbol.for("react.element"),G_=Symbol.for("react.fragment"),W_=Object.prototype.hasOwnProperty,X_=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j_={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)W_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V_,type:t,key:s,ref:o,props:r,_owner:X_.current}}Xl.Fragment=G_;Xl.jsx=_g;Xl.jsxs=_g;lg.exports=Xl;var O=lg.exports,xg={exports:{}},Sn={},yg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var z=D.length;D.push(N);e:for(;0<z;){var $=z-1>>>1,q=D[$];if(0<r(q,N))D[$]=N,D[z]=q,z=$;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var N=D[0],z=D.pop();if(z!==N){D[0]=z;e:for(var $=0,q=D.length,I=q>>>1;$<I;){var J=2*($+1)-1,ce=D[J],pe=J+1,ye=D[pe];if(0>r(ce,z))pe<q&&0>r(ye,ce)?(D[$]=ye,D[pe]=z,$=pe):(D[$]=ce,D[J]=z,$=J);else if(pe<q&&0>r(ye,z))D[$]=ye,D[pe]=z,$=pe;else break e}}return N}function r(D,N){var z=D.sortIndex-N.sortIndex;return z!==0?z:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,u=null,p=3,h=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=D)i(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(c)}}function y(D){if(v=!1,_(D),!g)if(n(l)!==null)g=!0,K(b);else{var N=n(c);N!==null&&Q(y,N.startTime-D)}}function b(D,N){g=!1,v&&(v=!1,d(k),k=-1),h=!0;var z=p;try{for(_(N),u=n(l);u!==null&&(!(u.expirationTime>N)||D&&!W());){var $=u.callback;if(typeof $=="function"){u.callback=null,p=u.priorityLevel;var q=$(u.expirationTime<=N);N=t.unstable_now(),typeof q=="function"?u.callback=q:u===n(l)&&i(l),_(N)}else i(l);u=n(l)}if(u!==null)var I=!0;else{var J=n(c);J!==null&&Q(y,J.startTime-N),I=!1}return I}finally{u=null,p=z,h=!1}}var M=!1,T=null,k=-1,E=5,A=-1;function W(){return!(t.unstable_now()-A<E)}function Z(){if(T!==null){var D=t.unstable_now();A=D;var N=!0;try{N=T(!0,D)}finally{N?ee():(M=!1,T=null)}}else M=!1}var ee;if(typeof x=="function")ee=function(){x(Z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=Z,ee=function(){X.postMessage(null)}}else ee=function(){m(Z,0)};function K(D){T=D,M||(M=!0,ee())}function Q(D,N){k=m(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,K(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var z=p;p=N;try{return D()}finally{p=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=p;p=D;try{return N()}finally{p=z}},t.unstable_scheduleCallback=function(D,N,z){var $=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,D){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,D={id:f++,callback:N,priorityLevel:D,startTime:z,expirationTime:q,sortIndex:-1},z>$?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(v?(d(k),k=-1):v=!0,Q(y,z-$))):(D.sortIndex=q,e(l,D),g||h||(g=!0,K(b))),D},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(D){var N=p;return function(){var z=p;p=N;try{return D.apply(this,arguments)}finally{p=z}}}})(Sg);yg.exports=Sg;var Y_=yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=wt,xn=Y_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,Po={};function Or(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Po[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function K_(t){return Du.call(nh,t)?!0:Du.call(th,t)?!1:$_.test(t)?nh[t]=!0:(th[t]=!0,!1)}function Z_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J_(t,e,n,i){if(e===null||typeof e>"u"||Z_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Xf);Ht[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Xf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Xf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J_(e,n,r,i)&&(n=null),i||r===null?K_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),qf=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),ih=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,yc;function fo(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function Q_(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Nu:return"Profiler";case Yf:return"StrictMode";case Iu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $f:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function ex(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tx(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=tx(t))}function Cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ou(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function ku(t,e){Rg(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ho(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function bg(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nx=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function Ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ix=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(ix[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function Kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,Es=null,ws=null;function lh(t){if(t=ia(t)){if(typeof Xu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Kl(e),Xu(t.stateNode,t.type,e))}}function Ig(t){Es?ws?ws.push(t):ws=[t]:Es=t}function Ug(){if(Es){var t=Es,e=ws;if(ws=Es=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function Fg(t,e){return t(e)}function Og(){}var Ec=!1;function kg(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return Fg(t,e,n)}finally{Ec=!1,(Es!==null||ws!==null)&&(Og(),Ug())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ju=!1;if(xi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{ju=!1}function rx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var vo=!1,pl=null,ml=!1,Yu=null,sx={onError:function(t){vo=!0,pl=t}};function ox(t,e,n,i,r,s,o,a,l){vo=!1,pl=null,rx.apply(sx,arguments)}function ax(t,e,n,i,r,s,o,a,l){if(ox.apply(this,arguments),vo){if(vo){var c=pl;vo=!1,pl=null}else throw Error(re(198));ml||(ml=!0,Yu=c)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(kr(t)!==t)throw Error(re(188))}function lx(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Bg(t){return t=lx(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Vg=xn.unstable_scheduleCallback,uh=xn.unstable_cancelCallback,cx=xn.unstable_shouldYield,ux=xn.unstable_requestPaint,yt=xn.unstable_now,fx=xn.unstable_getCurrentPriorityLevel,Zf=xn.unstable_ImmediatePriority,Gg=xn.unstable_UserBlockingPriority,gl=xn.unstable_NormalPriority,dx=xn.unstable_LowPriority,Wg=xn.unstable_IdlePriority,jl=null,Jn=null;function hx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:gx,px=Math.log,mx=Math.LN2;function gx(t){return t>>>=0,t===0?32:31-(px(t)/mx|0)|0}var da=64,ha=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=po(a):(s&=o,s!==0&&(i=po(s)))}else o=n&~r,o!==0?i=po(o):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=vx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xg(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function xx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function jg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,Qf,qg,$g,Kg,$u=!1,pa=[],Hi=null,Vi=null,Gi=null,No=new Map,Io=new Map,Ui=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Sx(t,e,n,i,r){switch(e){case"focusin":return Hi=Qs(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Qs(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Qs(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return No.set(s,Qs(No.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,Qs(Io.get(s)||null,t,e,n,i,r)),!0}return!1}function Zg(t){var e=gr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=zg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wu=i,n.target.dispatchEvent(i),Wu=null}else return e=ia(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function dh(t,e,n){tl(t)&&n.delete(e)}function Mx(){$u=!1,Hi!==null&&tl(Hi)&&(Hi=null),Vi!==null&&tl(Vi)&&(Vi=null),Gi!==null&&tl(Gi)&&(Gi=null),No.forEach(dh),Io.forEach(dh)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,Mx)))}function Uo(t){function e(r){return eo(r,t)}if(0<pa.length){eo(pa[0],t);for(var n=1;n<pa.length;n++){var i=pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&eo(Hi,t),Vi!==null&&eo(Vi,t),Gi!==null&&eo(Gi,t),No.forEach(e),Io.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&Ui.shift()}var Ts=wi.ReactCurrentBatchConfig,_l=!0;function Ex(t,e,n,i){var r=nt,s=Ts.transition;Ts.transition=null;try{nt=1,ed(t,e,n,i)}finally{nt=r,Ts.transition=s}}function wx(t,e,n,i){var r=nt,s=Ts.transition;Ts.transition=null;try{nt=4,ed(t,e,n,i)}finally{nt=r,Ts.transition=s}}function ed(t,e,n,i){if(_l){var r=Ku(t,e,n,i);if(r===null)Ic(t,e,i,xl,n),fh(t,i);else if(Sx(r,t,e,n,i))i.stopPropagation();else if(fh(t,i),e&4&&-1<yx.indexOf(t)){for(;r!==null;){var s=ia(r);if(s!==null&&Yg(s),s=Ku(t,e,n,i),s===null&&Ic(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(t,e,i,null,n)}}var xl=null;function Ku(t,e,n,i){if(xl=null,t=Kf(i),t=gr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fx()){case Zf:return 1;case Gg:return 4;case gl:case dx:return 16;case Wg:return 536870912;default:return 16}default:return 16}}var Oi=null,td=null,nl=null;function Qg(){if(nl)return nl;var t,e=td,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function hh(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:hh,this.isPropagationStopped=hh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Mn(Xs),na=pt({},Xs,{view:0,detail:0}),Tx=Mn(na),Tc,Ac,to,Yl=pt({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Tc=t.screenX-to.screenX,Ac=t.screenY-to.screenY):Ac=Tc=0,to=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),ph=Mn(Yl),Ax=pt({},Yl,{dataTransfer:0}),Cx=Mn(Ax),Rx=pt({},na,{relatedTarget:0}),Cc=Mn(Rx),bx=pt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Mn(bx),Lx=pt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dx=Mn(Lx),Nx=pt({},Xs,{data:0}),mh=Mn(Nx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fx[t])?!!e[t]:!1}function id(){return Ox}var kx=pt({},na,{key:function(t){if(t.key){var e=Ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=Mn(kx),Bx=pt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Mn(Bx),Hx=pt({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),Vx=Mn(Hx),Gx=pt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Mn(Gx),Xx=pt({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=Mn(Xx),Yx=[9,13,27,32],rd=xi&&"CompositionEvent"in window,_o=null;xi&&"documentMode"in document&&(_o=document.documentMode);var qx=xi&&"TextEvent"in window&&!_o,e0=xi&&(!rd||_o&&8<_o&&11>=_o),vh=" ",_h=!1;function t0(t,e){switch(t){case"keyup":return Yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function $x(t,e){switch(t){case"compositionend":return n0(e);case"keypress":return e.which!==32?null:(_h=!0,vh);case"textInput":return t=e.data,t===vh&&_h?null:t;default:return null}}function Kx(t,e){if(ls)return t==="compositionend"||!rd&&t0(t,e)?(t=Qg(),nl=td=Oi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e0&&e.locale!=="ko"?null:e.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zx[t.type]:e==="textarea"}function i0(t,e,n,i){Ig(i),e=yl(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xo=null,Fo=null;function Jx(t){p0(t,0)}function ql(t){var e=fs(t);if(Cg(e))return t}function Qx(t,e){if(t==="change")return e}var r0=!1;if(xi){var Rc;if(xi){var bc="oninput"in document;if(!bc){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),bc=typeof yh.oninput=="function"}Rc=bc}else Rc=!1;r0=Rc&&(!document.documentMode||9<document.documentMode)}function Sh(){xo&&(xo.detachEvent("onpropertychange",s0),Fo=xo=null)}function s0(t){if(t.propertyName==="value"&&ql(Fo)){var e=[];i0(e,Fo,t,Kf(t)),kg(Jx,e)}}function ey(t,e,n){t==="focusin"?(Sh(),xo=e,Fo=n,xo.attachEvent("onpropertychange",s0)):t==="focusout"&&Sh()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Fo)}function ny(t,e){if(t==="click")return ql(e)}function iy(t,e){if(t==="input"||t==="change")return ql(e)}function ry(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:ry;function Oo(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Du.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,e){var n=Mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function o0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a0(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sy(t){var e=a0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o0(n.ownerDocument.documentElement,n)){if(i!==null&&sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eh(n,s);var o=Eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oy=xi&&"documentMode"in document&&11>=document.documentMode,cs=null,Zu=null,yo=null,Ju=!1;function wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||cs==null||cs!==hl(i)||(i=cs,"selectionStart"in i&&sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yo&&Oo(yo,i)||(yo=i,i=yl(Zu,"onSelect"),0<i.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Pc={},l0={};xi&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function $l(t){if(Pc[t])return Pc[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l0)return Pc[t]=e[n];return t}var c0=$l("animationend"),u0=$l("animationiteration"),f0=$l("animationstart"),d0=$l("transitionend"),h0=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){h0.set(t,e),Or(e,[t])}for(var Lc=0;Lc<Th.length;Lc++){var Dc=Th[Lc],ay=Dc.toLowerCase(),ly=Dc[0].toUpperCase()+Dc.slice(1);tr(ay,"on"+ly)}tr(c0,"onAnimationEnd");tr(u0,"onAnimationIteration");tr(f0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(d0,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Ah(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ax(i,e,void 0,t),t.currentTarget=null}function p0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,a,c),s=l}}}if(ml)throw t=Yu,ml=!1,Yu=null,t}function ot(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var i=t+"__bubble";n.has(i)||(m0(e,t,2,!1),n.add(i))}function Nc(t,e,n){var i=0;e&&(i|=4),m0(n,t,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[va]){t[va]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(cy.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Nc("selectionchange",!1,e))}}function m0(t,e,n,i){switch(Jg(e)){case 1:var r=Ex;break;case 4:r=wx;break;default:r=ed}n=r.bind(null,e,n,t),r=void 0,!ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}kg(function(){var c=s,f=Kf(n),u=[];e:{var p=h0.get(t);if(p!==void 0){var h=nd,g=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":h=zx;break;case"focusin":g="focus",h=Cc;break;case"focusout":g="blur",h=Cc;break;case"beforeblur":case"afterblur":h=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Vx;break;case c0:case u0:case f0:h=Px;break;case d0:h=Wx;break;case"scroll":h=Tx;break;case"wheel":h=jx;break;case"copy":case"cut":case"paste":h=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=gh}var v=(e&4)!==0,m=!v&&t==="scroll",d=v?p!==null?p+"Capture":null:p;v=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=Do(x,d),y!=null&&v.push(zo(x,y,_)))),m)break;x=x.return}0<v.length&&(p=new h(p,g,null,n,f),u.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==Wu&&(g=n.relatedTarget||n.fromElement)&&(gr(g)||g[yi]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?gr(g):null,g!==null&&(m=kr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(v=ph,y="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=gh,y="onPointerLeave",d="onPointerEnter",x="pointer"),m=h==null?p:fs(h),_=g==null?p:fs(g),p=new v(y,x+"leave",h,n,f),p.target=m,p.relatedTarget=_,y=null,gr(f)===c&&(v=new v(d,x+"enter",g,n,f),v.target=_,v.relatedTarget=m,y=v),m=y,h&&g)t:{for(v=h,d=g,x=0,_=v;_;_=Br(_))x++;for(_=0,y=d;y;y=Br(y))_++;for(;0<x-_;)v=Br(v),x--;for(;0<_-x;)d=Br(d),_--;for(;x--;){if(v===d||d!==null&&v===d.alternate)break t;v=Br(v),d=Br(d)}v=null}else v=null;h!==null&&Ch(u,p,h,v,!1),g!==null&&m!==null&&Ch(u,m,g,v,!0)}}e:{if(p=c?fs(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var b=Qx;else if(xh(p))if(r0)b=iy;else{b=ty;var M=ey}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=ny);if(b&&(b=b(t,c))){i0(u,b,n,f);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&zu(p,"number",p.value)}switch(M=c?fs(c):window,t){case"focusin":(xh(M)||M.contentEditable==="true")&&(cs=M,Zu=c,yo=null);break;case"focusout":yo=Zu=cs=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,wh(u,n,f);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":wh(u,n,f)}var T;if(rd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ls?t0(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(e0&&n.locale!=="ko"&&(ls||k!=="onCompositionStart"?k==="onCompositionEnd"&&ls&&(T=Qg()):(Oi=f,td="value"in Oi?Oi.value:Oi.textContent,ls=!0)),M=yl(c,k),0<M.length&&(k=new mh(k,t,null,n,f),u.push({event:k,listeners:M}),T?k.data=T:(T=n0(n),T!==null&&(k.data=T)))),(T=qx?$x(t,n):Kx(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(f=new mh("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=T))}p0(u,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(t,n),s!=null&&i.unshift(zo(t,s,r)),s=Do(t,e),s!=null&&i.push(zo(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Do(n,s),l!=null&&o.unshift(zo(n,l,a))):r||(l=Do(n,s),l!=null&&o.push(zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function Rh(t){return(typeof t=="string"?t:""+t).replace(uy,`
`).replace(fy,"")}function _a(t,e,n){if(e=Rh(e),Rh(t)!==e&&n)throw Error(re(425))}function Sl(){}var Qu=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(py)}:nf;function py(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Uo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Uo(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Zn="__reactFiber$"+js,Bo="__reactProps$"+js,yi="__reactContainer$"+js,rf="__reactEvents$"+js,my="__reactListeners$"+js,gy="__reactHandles$"+js;function gr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[Zn])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[Zn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Kl(t){return t[Bo]||null}var sf=[],ds=-1;function nr(t){return{current:t}}function lt(t){0>ds||(t.current=sf[ds],sf[ds]=null,ds--)}function rt(t,e){ds++,sf[ds]=t.current,t.current=e}var Qi={},qt=nr(Qi),sn=nr(!1),Cr=Qi;function Ds(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Ml(){lt(sn),lt(qt)}function Lh(t,e,n){if(qt.current!==Qi)throw Error(re(168));rt(qt,e),rt(sn,n)}function g0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,ex(t)||"Unknown",r));return pt({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Cr=qt.current,rt(qt,t),rt(sn,sn.current),!0}function Dh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=g0(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,lt(sn),lt(qt),rt(qt,t)):lt(sn),rt(sn,n)}var fi=null,Zl=!1,Fc=!1;function v0(t){fi===null?fi=[t]:fi.push(t)}function vy(t){Zl=!0,v0(t)}function ir(){if(!Fc&&fi!==null){Fc=!0;var t=0,e=nt;try{var n=fi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Zl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Vg(Zf,ir),r}finally{nt=e,Fc=!1}}return null}var hs=[],ps=0,wl=null,Tl=0,Tn=[],An=0,Rr=null,pi=1,mi="";function fr(t,e){hs[ps++]=Tl,hs[ps++]=wl,wl=t,Tl=e}function _0(t,e,n){Tn[An++]=pi,Tn[An++]=mi,Tn[An++]=Rr,Rr=t;var i=pi;t=mi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Wn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function od(t){t.return!==null&&(fr(t,1),_0(t,1,0))}function ad(t){for(;t===wl;)wl=hs[--ps],hs[ps]=null,Tl=hs[--ps],hs[ps]=null;for(;t===Rr;)Rr=Tn[--An],Tn[An]=null,mi=Tn[--An],Tn[An]=null,pi=Tn[--An],Tn[An]=null}var _n=null,vn=null,ct=!1,Bn=null;function x0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function af(t){if(ct){var e=vn;if(e){var n=e;if(!Nh(t,e)){if(of(t))throw Error(re(418));e=Wi(n.nextSibling);var i=_n;e&&Nh(t,e)?x0(i,n):(t.flags=t.flags&-4097|2,ct=!1,_n=t)}}else{if(of(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,_n=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function xa(t){if(t!==_n)return!1;if(!ct)return Ih(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=vn)){if(of(t))throw y0(),Error(re(418));for(;e;)x0(t,e),e=Wi(e.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?Wi(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=vn;t;)t=Wi(t.nextSibling)}function Ns(){vn=_n=null,ct=!1}function ld(t){Bn===null?Bn=[t]:Bn.push(t)}var _y=wi.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uh(t){var e=t._init;return e(t._payload)}function S0(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=qi(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,_,y){return x===null||x.tag!==6?(x=Gc(_,d.mode,y),x.return=d,x):(x=r(x,_),x.return=d,x)}function l(d,x,_,y){var b=_.type;return b===as?f(d,x,_.props.children,y,_.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&Uh(b)===x.type)?(y=r(x,_.props),y.ref=no(d,x,_),y.return=d,y):(y=ul(_.type,_.key,_.props,null,d.mode,y),y.ref=no(d,x,_),y.return=d,y)}function c(d,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Wc(_,d.mode,y),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function f(d,x,_,y,b){return x===null||x.tag!==7?(x=Sr(_,d.mode,y,b),x.return=d,x):(x=r(x,_),x.return=d,x)}function u(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gc(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ca:return _=ul(x.type,x.key,x.props,null,d.mode,_),_.ref=no(d,null,x),_.return=d,_;case os:return x=Wc(x,d.mode,_),x.return=d,x;case Di:var y=x._init;return u(d,y(x._payload),_)}if(ho(x)||Zs(x))return x=Sr(x,d.mode,_,null),x.return=d,x;ya(d,x)}return null}function p(d,x,_,y){var b=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return _.key===b?l(d,x,_,y):null;case os:return _.key===b?c(d,x,_,y):null;case Di:return b=_._init,p(d,x,b(_._payload),y)}if(ho(_)||Zs(_))return b!==null?null:f(d,x,_,y,null);ya(d,_)}return null}function h(d,x,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(x,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:return d=d.get(y.key===null?_:y.key)||null,l(x,d,y,b);case os:return d=d.get(y.key===null?_:y.key)||null,c(x,d,y,b);case Di:var M=y._init;return h(d,x,_,M(y._payload),b)}if(ho(y)||Zs(y))return d=d.get(_)||null,f(x,d,y,b,null);ya(x,y)}return null}function g(d,x,_,y){for(var b=null,M=null,T=x,k=x=0,E=null;T!==null&&k<_.length;k++){T.index>k?(E=T,T=null):E=T.sibling;var A=p(d,T,_[k],y);if(A===null){T===null&&(T=E);break}t&&T&&A.alternate===null&&e(d,T),x=s(A,x,k),M===null?b=A:M.sibling=A,M=A,T=E}if(k===_.length)return n(d,T),ct&&fr(d,k),b;if(T===null){for(;k<_.length;k++)T=u(d,_[k],y),T!==null&&(x=s(T,x,k),M===null?b=T:M.sibling=T,M=T);return ct&&fr(d,k),b}for(T=i(d,T);k<_.length;k++)E=h(T,d,k,_[k],y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?k:E.key),x=s(E,x,k),M===null?b=E:M.sibling=E,M=E);return t&&T.forEach(function(W){return e(d,W)}),ct&&fr(d,k),b}function v(d,x,_,y){var b=Zs(_);if(typeof b!="function")throw Error(re(150));if(_=b.call(_),_==null)throw Error(re(151));for(var M=b=null,T=x,k=x=0,E=null,A=_.next();T!==null&&!A.done;k++,A=_.next()){T.index>k?(E=T,T=null):E=T.sibling;var W=p(d,T,A.value,y);if(W===null){T===null&&(T=E);break}t&&T&&W.alternate===null&&e(d,T),x=s(W,x,k),M===null?b=W:M.sibling=W,M=W,T=E}if(A.done)return n(d,T),ct&&fr(d,k),b;if(T===null){for(;!A.done;k++,A=_.next())A=u(d,A.value,y),A!==null&&(x=s(A,x,k),M===null?b=A:M.sibling=A,M=A);return ct&&fr(d,k),b}for(T=i(d,T);!A.done;k++,A=_.next())A=h(T,d,k,A.value,y),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?k:A.key),x=s(A,x,k),M===null?b=A:M.sibling=A,M=A);return t&&T.forEach(function(Z){return e(d,Z)}),ct&&fr(d,k),b}function m(d,x,_,y){if(typeof _=="object"&&_!==null&&_.type===as&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:e:{for(var b=_.key,M=x;M!==null;){if(M.key===b){if(b=_.type,b===as){if(M.tag===7){n(d,M.sibling),x=r(M,_.props.children),x.return=d,d=x;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&Uh(b)===M.type){n(d,M.sibling),x=r(M,_.props),x.ref=no(d,M,_),x.return=d,d=x;break e}n(d,M);break}else e(d,M);M=M.sibling}_.type===as?(x=Sr(_.props.children,d.mode,y,_.key),x.return=d,d=x):(y=ul(_.type,_.key,_.props,null,d.mode,y),y.ref=no(d,x,_),y.return=d,d=y)}return o(d);case os:e:{for(M=_.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Wc(_,d.mode,y),x.return=d,d=x}return o(d);case Di:return M=_._init,m(d,x,M(_._payload),y)}if(ho(_))return g(d,x,_,y);if(Zs(_))return v(d,x,_,y);ya(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=Gc(_,d.mode,y),x.return=d,d=x),o(d)):n(d,x)}return m}var Is=S0(!0),M0=S0(!1),Al=nr(null),Cl=null,ms=null,cd=null;function ud(){cd=ms=Cl=null}function fd(t){var e=Al.current;lt(Al),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Cl=t,cd=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Cl===null)throw Error(re(308));ms=t,Cl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var vr=null;function dd(t){vr===null?vr=[t]:vr.push(t)}function E0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}function Fh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,f=c=l=null,a=s;do{var p=a.lane,h=a.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(p=e,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){u=g.call(h,u,p);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(h,u,p):g,p==null)break e;u=pt({},u,p);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=h,l=u):f=f.next=h,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=u}}function Oh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ra={},Qn=nr(ra),Ho=nr(ra),Vo=nr(ra);function _r(t){if(t===ra)throw Error(re(174));return t}function pd(t,e){switch(rt(Vo,e),rt(Ho,t),rt(Qn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hu(e,t)}lt(Qn),rt(Qn,e)}function Us(){lt(Qn),lt(Ho),lt(Vo)}function T0(t){_r(Vo.current);var e=_r(Qn.current),n=Hu(e,t.type);e!==n&&(rt(Ho,t),rt(Qn,n))}function md(t){Ho.current===t&&(lt(Qn),lt(Ho))}var ft=nr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function gd(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var sl=wi.ReactCurrentDispatcher,kc=wi.ReactCurrentBatchConfig,br=0,ht=null,At=null,Dt=null,Pl=!1,So=!1,Go=0,xy=0;function Gt(){throw Error(re(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(br=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?Ey:wy,t=n(i,r),So){s=0;do{if(So=!1,Go=0,25<=s)throw Error(re(301));s+=1,Dt=At=null,e.updateQueue=null,sl.current=Ty,t=n(i,r)}while(So)}if(sl.current=Ll,e=At!==null&&At.next!==null,br=0,Dt=At=ht=null,Pl=!1,e)throw Error(re(300));return t}function xd(){var t=Go!==0;return Go=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Nn(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(re(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Wo(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,ht.lanes|=f,Pr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function A0(){}function C0(t,e){var n=ht,i=Nn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,yd(P0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Xo(9,b0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(re(349));br&30||R0(n,e,r)}return r}function R0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b0(t,e,n,i){e.value=n,e.getSnapshot=i,L0(e)&&D0(t)}function P0(t,e,n){return n(function(){L0(e)&&D0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function D0(t){var e=Si(t,1);e!==null&&Xn(e,t,1,-1)}function kh(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=My.bind(null,ht,t),[e.memoizedState,t]}function Xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function N0(){return Nn().memoizedState}function ol(t,e,n,i){var r=$n();ht.flags|=t,r.memoizedState=Xo(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&vd(i,o.deps)){r.memoizedState=Xo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Xo(1|e,n,s,i)}function zh(t,e){return ol(8390656,8,t,e)}function yd(t,e){return Jl(2048,8,t,e)}function I0(t,e){return Jl(4,2,t,e)}function U0(t,e){return Jl(4,4,t,e)}function F0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,F0.bind(null,e,t),n)}function Sd(){}function k0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function z0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function B0(t,e,n){return br&21?(jn(n,e)||(n=Xg(),ht.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function yy(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{nt=n,kc.transition=i}}function H0(){return Nn().memoizedState}function Sy(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},V0(t))G0(e,n);else if(n=E0(t,e,n,i),n!==null){var r=Jt();Xn(n,t,i,r),W0(n,e,i)}}function My(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(V0(t))G0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=E0(t,e,r,i),n!==null&&(r=Jt(),Xn(n,t,i,r),W0(n,e,i))}}function V0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function G0(t,e){So=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}var Ll={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Ey={readContext:Dn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,F0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:kh,useDebugValue:Sd,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=kh(!1),e=t[0];return t=yy.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=$n();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ut===null)throw Error(re(349));br&30||R0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zh(P0.bind(null,i,s,t),[t]),i.flags|=2048,Xo(9,b0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Ut.identifierPrefix;if(ct){var n=mi,i=pi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wy={readContext:Dn,useCallback:k0,useContext:Dn,useEffect:yd,useImperativeHandle:O0,useInsertionEffect:I0,useLayoutEffect:U0,useMemo:z0,useReducer:zc,useRef:N0,useState:function(){return zc(Wo)},useDebugValue:Sd,useDeferredValue:function(t){var e=Nn();return B0(e,At.memoizedState,t)},useTransition:function(){var t=zc(Wo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:C0,useId:H0,unstable_isNewReconciler:!1},Ty={readContext:Dn,useCallback:k0,useContext:Dn,useEffect:yd,useImperativeHandle:O0,useInsertionEffect:I0,useLayoutEffect:U0,useMemo:z0,useReducer:Bc,useRef:N0,useState:function(){return Bc(Wo)},useDebugValue:Sd,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:B0(e,At.memoizedState,t)},useTransition:function(){var t=Bc(Wo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:C0,useId:H0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Yi(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Xn(e,t,r,i),rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Yi(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Xn(e,t,r,i),rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=Yi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Xn(e,t,i,n),rl(e,t,i))}};function Bh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,i)||!Oo(r,s):!0}function X0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=on(e)?Cr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=on(e)?Cr:qt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",i=e;do n+=Q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function j0(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,Sf=i),ff(t,e)},n}function Y0(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ay;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=By.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Cy=wi.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?M0(e,null,n,i):Is(e,t.child,n,i)}function Xh(t,e,n,i,r){n=n.render;var s=e.ref;return As(e,r),i=_d(t,e,n,i,s,r),n=xd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ct&&n&&od(e),e.flags|=1,Kt(t,e,i,r),e.child)}function jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q0(t,e,s,i,r)):(t=ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function q0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oo(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return df(t,e,n,i,r)}function $0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(vs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(vs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(vs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(vs,pn),pn|=i;return Kt(t,e,r,n),e.child}function K0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function df(t,e,n,i,r){var s=on(n)?Cr:qt.current;return s=Ds(e,s),As(e,r),n=_d(t,e,n,i,s,r),i=xd(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ct&&i&&od(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Yh(t,e,n,i,r){if(on(n)){var s=!0;El(e)}else s=!1;if(As(e,r),e.stateNode===null)al(t,e),X0(e,n,i),uf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=on(n)?Cr:qt.current,c=Ds(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Hh(e,o,i,c),Ni=!1;var p=e.memoizedState;o.state=p,Rl(e,i,o,r),l=e.memoizedState,a!==i||p!==l||sn.current||Ni?(typeof f=="function"&&(cf(e,n,f,i),l=e.memoizedState),(a=Ni||Bh(e,n,a,i,p,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,w0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,u=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Cr:qt.current,l=Ds(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||p!==l)&&Hh(e,o,i,l),Ni=!1,p=e.memoizedState,o.state=p,Rl(e,i,o,r);var g=e.memoizedState;a!==u||p!==g||sn.current||Ni?(typeof h=="function"&&(cf(e,n,h,i),g=e.memoizedState),(c=Ni||Bh(e,n,c,i,p,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return hf(t,e,n,i,s,r)}function hf(t,e,n,i,r,s){K0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dh(e,n,!1),Mi(t,e,s);i=e.stateNode,Cy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Dh(e,n,!0),e.child}function Z0(t){var e=t.stateNode;e.pendingContext?Lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lh(t,e.context,!1),pd(t,e.containerInfo)}function qh(t,e,n,i,r){return Ns(),ld(r),e.flags|=256,Kt(t,e,n,i),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function J0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mf(n),e.memoizedState=pf,t):Md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ry(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pf,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Md(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,i){return i!==null&&ld(i),Is(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ry(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(re(422))),Sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=mf(o),e.memoizedState=pf,s);if(!(e.mode&1))return Sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Hc(s,i,void 0),Sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Xn(i,t,r,-1))}return Rd(),i=Hc(Error(re(421))),Sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Wi(r.nextSibling),_n=e,ct=!0,Bn=null,t!==null&&(Tn[An++]=pi,Tn[An++]=mi,Tn[An++]=Rr,pi=t.id,mi=t.overflow,Rr=e),e=Md(e,i.children),e.flags|=4096,e)}function $h(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lf(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,n,e);else if(t.tag===19)$h(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function by(t,e,n){switch(e.tag){case 3:Z0(e),Ns();break;case 5:T0(e);break;case 1:on(e.type)&&El(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?J0(t,e,n):(rt(ft,ft.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,$0(t,e,n)}return Mi(t,e,n)}var ev,gf,tv,nv;ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Qn.current);var s=null;switch(n){case"input":r=Ou(t,r),i=Ou(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Vu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Po.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Po.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function io(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Py(t,e,n){var i=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return on(e.type)&&Ml(),Wt(e),null;case 3:return i=e.stateNode,Us(),lt(sn),lt(qt),gd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(wf(Bn),Bn=null))),gf(t,e),Wt(e),null;case 5:md(e);var r=_r(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Wt(e),null}if(t=_r(Qn.current),xa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)ot(mo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":rh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":oh(i,s),ot("invalid",i)}Vu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",""+a]):Po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":ua(i),sh(i,s,!0);break;case"textarea":ua(i),ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Bo]=i,ev(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)ot(mo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":rh(t,i),r=Ou(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":oh(t,i),r=Bu(t,i),ot("invalid",t);break;default:r=i}Vu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(t,l):typeof l=="number"&&Lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&jf(t,s,l,o))}switch(n){case"input":ua(t),sh(t,i,!1);break;case"textarea":ua(t),ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=_r(Vo.current),_r(Qn.current),xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:_a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Wt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&vn!==null&&e.mode&1&&!(e.flags&128))y0(),Ns(),e.flags|=98560,s=!1;else if(s=xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Zn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Bn!==null&&(wf(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Ct===0&&(Ct=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Us(),gf(t,e),t===null&&ko(e.stateNode.containerInfo),Wt(e),null;case 10:return fd(e.type._context),Wt(e),null;case 17:return on(e.type)&&Ml(),Wt(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)io(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Os&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Wt(e),null}else 2*yt()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ly(t,e){switch(ad(e),e.tag){case 1:return on(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),lt(sn),lt(qt),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Us(),null;case 10:return fd(e.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var Ma=!1,Yt=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function vf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Kh=!1;function Ny(t,e){if(Qu=_l,t=a0(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,u=t,p=null;t:for(;;){for(var h;u!==n||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(h=u.firstChild)!==null;)p=u,u=h;for(;;){if(u===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++f===i&&(l=o),(h=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},_l=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:kn(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return g=Kh,Kh=!1,g}function Mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vf(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Bo],delete e[rf],delete e[my],delete e[gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rv(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(xf(t,e,n),t=t.sibling;t!==null;)xf(t,e,n),t=t.sibling}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}var kt=null,zn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)sv(t,e,n),n=n.sibling}function sv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Yt||gs(n,e);case 6:var i=kt,r=zn;kt=null,Ti(t,e,n),kt=i,zn=r,kt!==null&&(zn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(zn?(t=kt,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),Uo(t)):Uc(kt,n.stateNode));break;case 4:i=kt,r=zn,kt=n.stateNode.containerInfo,zn=!0,Ti(t,e,n),kt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Yt&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ti(t,e,n),Yt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dy),e.forEach(function(i){var r=Vy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,zn=!1;break e;case 3:kt=a.stateNode.containerInfo,zn=!0;break e;case 4:kt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(kt===null)throw Error(re(160));sv(s,o,r),kt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ov(e,t),e=e.sibling}function ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{Mo(3,t,t.return),ec(3,t)}catch(v){vt(t,t.return,v)}try{Mo(5,t,t.return)}catch(v){vt(t,t.return,v)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Lo(r,"")}catch(v){vt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rg(r,s),Gu(a,o);var c=Gu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?Ng(r,u):f==="dangerouslySetInnerHTML"?Lg(r,u):f==="children"?Lo(r,u):jf(r,f,u,c)}switch(a){case"input":ku(r,s);break;case"textarea":bg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ms(r,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Bo]=s}catch(v){vt(t,t.return,v)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){vt(t,t.return,v)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(v){vt(t,t.return,v)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=yt())),i&4&&Jh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||f,In(e,t),Yt=c):In(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(u=ve=f;ve!==null;){switch(p=ve,h=p.child,p.tag){case 0:case 11:case 14:case 15:Mo(4,p,p.return);break;case 1:gs(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){vt(i,n,v)}}break;case 5:gs(p,p.return);break;case 22:if(p.memoizedState!==null){ep(u);continue}}h!==null?(h.return=p,ve=h):ep(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dg("display",o))}catch(v){vt(t,t.return,v)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){vt(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:In(e,t),qn(t),i&4&&Jh(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lo(r,""),i.flags&=-33);var s=Zh(t);yf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zh(t);xf(t,a,o);break;default:throw Error(re(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Iy(t,e,n){ve=t,av(t)}function av(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ma;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Ma;var c=Yt;if(Ma=o,(Yt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?tp(r):l!==null?(l.return=o,ve=l):tp(r);for(;s!==null;)ve=s,av(s),s=s.sibling;ve=r,Ma=a,Yt=c}Qh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Qh(t)}}function Qh(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&Uo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&_f(e)}catch(p){vt(e,e.return,p)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function ep(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function tp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{_f(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{_f(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Uy=Math.ceil,Dl=wi.ReactCurrentDispatcher,Ed=wi.ReactCurrentOwner,Ln=wi.ReactCurrentBatchConfig,Qe=0,Ut=null,Tt=null,Bt=0,pn=0,vs=nr(0),Ct=0,jo=null,Pr=0,tc=0,wd=0,Eo=null,nn=null,Td=0,Os=1/0,ui=null,Nl=!1,Sf=null,ji=null,Ea=!1,ki=null,Il=0,wo=0,Mf=null,ll=-1,cl=0;function Jt(){return Qe&6?yt():ll!==-1?ll:ll=yt()}function Yi(t){return t.mode&1?Qe&2&&Bt!==0?Bt&-Bt:_y.transition!==null?(cl===0&&(cl=Xg()),cl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Jg(t.type)),t):1}function Xn(t,e,n,i){if(50<wo)throw wo=0,Mf=null,Error(re(185));ta(t,n,i),(!(Qe&2)||t!==Ut)&&(t===Ut&&(!(Qe&2)&&(tc|=n),Ct===4&&Fi(t,Bt)),an(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Os=yt()+500,Zl&&ir()))}function an(t,e){var n=t.callbackNode;_x(t,e);var i=vl(t,t===Ut?Bt:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?vy(np.bind(null,t)):v0(np.bind(null,t)),hy(function(){!(Qe&6)&&ir()}),n=null;else{switch(jg(i)){case 1:n=Zf;break;case 4:n=Gg;break;case 16:n=gl;break;case 536870912:n=Wg;break;default:n=gl}n=mv(n,lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lv(t,e){if(ll=-1,cl=0,Qe&6)throw Error(re(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var i=vl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=Qe;Qe|=2;var s=uv();(Ut!==t||Bt!==e)&&(ui=null,Os=yt()+500,yr(t,e));do try{ky();break}catch(a){cv(t,a)}while(!0);ud(),Dl.current=s,Qe=r,Tt!==null?e=0:(Ut=null,Bt=0,e=Ct)}if(e!==0){if(e===2&&(r=qu(t),r!==0&&(i=r,e=Ef(t,r))),e===1)throw n=jo,yr(t,0),Fi(t,i),an(t,yt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fy(r)&&(e=Ul(t,i),e===2&&(s=qu(t),s!==0&&(i=s,e=Ef(t,s))),e===1))throw n=jo,yr(t,0),Fi(t,i),an(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:dr(t,nn,ui);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Td+500-yt(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nf(dr.bind(null,t,nn,ui),e);break}dr(t,nn,ui);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uy(i/1960))-i,10<i){t.timeoutHandle=nf(dr.bind(null,t,nn,ui),i);break}dr(t,nn,ui);break;case 5:dr(t,nn,ui);break;default:throw Error(re(329))}}}return an(t,yt()),t.callbackNode===n?lv.bind(null,t):null}function Ef(t,e){var n=Eo;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=nn,nn=n,e!==null&&wf(e)),t}function wf(t){nn===null?nn=t:nn.push.apply(nn,t)}function Fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~wd,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function np(t){if(Qe&6)throw Error(re(327));Cs();var e=vl(t,0);if(!(e&1))return an(t,yt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=qu(t);i!==0&&(e=i,n=Ef(t,i))}if(n===1)throw n=jo,yr(t,0),Fi(t,e),an(t,yt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,nn,ui),an(t,yt()),null}function Ad(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Os=yt()+500,Zl&&ir())}}function Lr(t){ki!==null&&ki.tag===0&&!(Qe&6)&&Cs();var e=Qe;Qe|=1;var n=Ln.transition,i=nt;try{if(Ln.transition=null,nt=1,t)return t()}finally{nt=i,Ln.transition=n,Qe=e,!(Qe&6)&&ir()}}function Cd(){pn=vs.current,lt(vs)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dy(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Us(),lt(sn),lt(qt),gd();break;case 5:md(i);break;case 4:Us();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:fd(i.type._context);break;case 22:case 23:Cd()}n=n.return}if(Ut=t,Tt=t=qi(t.current,null),Bt=pn=e,Ct=0,jo=null,wd=tc=Pr=0,nn=Eo=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function cv(t,e){do{var n=Tt;try{if(ud(),sl.current=Ll,Pl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(br=0,Dt=At=ht=null,So=!1,Go=0,Ed.current=null,n===null||n.return===null){Ct=1,jo=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Gh(o);if(h!==null){h.flags&=-257,Wh(h,o,a,s,e),h.mode&1&&Vh(s,c,e),e=h,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Vh(s,c,e),Rd();break e}l=Error(re(426))}}else if(ct&&a.mode&1){var m=Gh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wh(m,o,a,s,e),ld(Fs(l,a));break e}}s=l=Fs(l,a),Ct!==4&&(Ct=2),Eo===null?Eo=[s]:Eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=j0(s,l,e);Fh(s,d);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Y0(s,a,e);Fh(s,y);break e}}s=s.return}while(s!==null)}dv(n)}catch(b){e=b,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function uv(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Rd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ut===null||!(Pr&268435455)&&!(tc&268435455)||Fi(Ut,Bt)}function Ul(t,e){var n=Qe;Qe|=2;var i=uv();(Ut!==t||Bt!==e)&&(ui=null,yr(t,e));do try{Oy();break}catch(r){cv(t,r)}while(!0);if(ud(),Qe=n,Dl.current=i,Tt!==null)throw Error(re(261));return Ut=null,Bt=0,Ct}function Oy(){for(;Tt!==null;)fv(Tt)}function ky(){for(;Tt!==null&&!cx();)fv(Tt)}function fv(t){var e=pv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?dv(t):Tt=e,Ed.current=null}function dv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ly(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=Py(n,e,pn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function dr(t,e,n){var i=nt,r=Ln.transition;try{Ln.transition=null,nt=1,zy(t,e,n,i)}finally{Ln.transition=r,nt=i}return null}function zy(t,e,n,i){do Cs();while(ki!==null);if(Qe&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xx(t,s),t===Ut&&(Tt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,mv(gl,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=nt;nt=1;var a=Qe;Qe|=4,Ed.current=null,Ny(t,n),ov(n,t),sy(ef),_l=!!Qu,ef=Qu=null,t.current=n,Iy(n),ux(),Qe=a,nt=o,Ln.transition=s}else t.current=n;if(Ea&&(Ea=!1,ki=t,Il=r),s=t.pendingLanes,s===0&&(ji=null),hx(n.stateNode),an(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=Sf,Sf=null,t;return Il&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===Mf?wo++:(wo=0,Mf=t):wo=0,ir(),null}function Cs(){if(ki!==null){var t=jg(Il),e=Ln.transition,n=nt;try{if(Ln.transition=null,nt=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Il=0,Qe&6)throw Error(re(331));var r=Qe;for(Qe|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:Mo(8,f,s)}var u=f.child;if(u!==null)u.return=f,ve=u;else for(;ve!==null;){f=ve;var p=f.sibling,h=f.return;if(iv(f),f===c){ve=null;break}if(p!==null){p.return=h,ve=p;break}ve=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var x=t.current;for(ve=x;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=x;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(b){vt(a,a.return,b)}if(a===o){ve=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ve=y;break e}ve=a.return}}if(Qe=r,ir(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{nt=n,Ln.transition=e}}return!1}function ip(t,e,n){e=Fs(n,e),e=j0(t,e,1),t=Xi(t,e,1),e=Jt(),t!==null&&(ta(t,1,e),an(t,e))}function vt(t,e,n){if(t.tag===3)ip(t,t,n);else for(;e!==null;){if(e.tag===3){ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Fs(n,t),t=Y0(e,t,1),e=Xi(e,t,1),t=Jt(),e!==null&&(ta(e,1,t),an(e,t));break}}e=e.return}}function By(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(Ct===4||Ct===3&&(Bt&130023424)===Bt&&500>yt()-Td?yr(t,0):wd|=n),an(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):e=1);var n=Jt();t=Si(t,e),t!==null&&(ta(t,e,n),an(t,n))}function Hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function Vy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),hv(t,n)}var pv;pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,by(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ct&&e.flags&1048576&&_0(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Ds(e,qt.current);As(e,n),r=_d(null,e,i,t,r,n);var s=xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hd(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,uf(e,i,t,n),e=hf(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&od(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Wy(i),t=kn(i,t),r){case 0:e=df(null,e,i,t,n);break e;case 1:e=Yh(null,e,i,t,n);break e;case 11:e=Xh(null,e,i,t,n);break e;case 14:e=jh(null,e,i,kn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Yh(t,e,i,r,n);case 3:e:{if(Z0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,w0(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(re(423)),e),e=qh(t,e,i,n,r);break e}else if(i!==r){r=Fs(Error(re(424)),e),e=qh(t,e,i,n,r);break e}else for(vn=Wi(e.stateNode.containerInfo.firstChild),_n=e,ct=!0,Bn=null,n=M0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Mi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return T0(e),t===null&&af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,tf(i,r)?o=null:s!==null&&tf(i,s)&&(e.flags|=32),K0(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&af(e),null;case 13:return J0(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Xh(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Al,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!sn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,n),r=Dn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),jh(t,e,i,r,n);case 15:return q0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),al(t,e),e.tag=1,on(i)?(t=!0,El(e)):t=!1,As(e,n),X0(e,i,r),uf(e,i,r,n),hf(null,e,i,!0,t,n);case 19:return Q0(t,e,n);case 22:return $0(t,e,n)}throw Error(re(156,e.tag))};function mv(t,e){return Vg(t,e)}function Gy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Gy(t,e,n,i)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wy(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qf)return 11;if(t===$f)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Sr(n.children,r,s,e);case Yf:o=8,r|=8;break;case Nu:return t=Pn(12,n,e,r|2),t.elementType=Nu,t.lanes=s,t;case Iu:return t=Pn(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Uu:return t=Pn(19,n,e,r),t.elementType=Uu,t.lanes=s,t;case Tg:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:o=10;break e;case wg:o=9;break e;case qf:o=11;break e;case $f:o=14;break e;case Di:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,i,r,s,o,a,l){return t=new Xy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),t}function jy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gv(t){if(!t)return Qi;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(on(n))return g0(t,n,e)}return e}function vv(t,e,n,i,r,s,o,a,l){return t=Pd(n,i,!0,t,r,s,o,a,l),t.context=gv(null),n=t.current,i=Jt(),r=Yi(n),s=_i(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,ta(t,r,i),an(t,i),t}function ic(t,e,n,i){var r=e.current,s=Jt(),o=Yi(r);return n=gv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(Xn(t,r,o,s),rl(t,r,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){rp(t,e),(t=t.alternate)&&rp(t,e)}function Yy(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}rc.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ic(t,e,null,null)};rc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){ic(null,t,null,null)}),e[yi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Zg(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fl(o);s.call(c)}}var o=vv(e,i,t,0,null,!1,!1,"",sp);return t._reactRootContainer=o,t[yi]=o.current,ko(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fl(l);a.call(c)}}var l=Pd(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=l,t[yi]=l.current,ko(t.nodeType===8?t.parentNode:t),Lr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fl(o);a.call(l)}}ic(e,o,t,r)}else o=qy(n,e,t,r,i);return Fl(o)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Jf(e,n|1),an(e,yt()),!(Qe&6)&&(Os=yt()+500,ir()))}break;case 13:Lr(function(){var i=Si(t,1);if(i!==null){var r=Jt();Xn(i,t,1,r)}}),Ld(t,1)}};Qf=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Jt();Xn(e,t,134217728,n)}Ld(t,134217728)}};qg=function(t){if(t.tag===13){var e=Yi(t),n=Si(t,e);if(n!==null){var i=Jt();Xn(n,t,e,i)}Ld(t,e)}};$g=function(){return nt};Kg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Xu=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(re(90));Cg(i),ku(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Fg=Ad;Og=Lr;var $y={usingClientEntryPoint:!1,Events:[ia,fs,Kl,Ig,Ug,Ad]},ro={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{jl=wa.inject(Ky),Jn=wa}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(re(200));return jy(t,e,null,n)};Sn.createRoot=function(t,e){if(!Nd(t))throw Error(re(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,ko(t.nodeType===8?t.parentNode:t),new Dd(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Lr(t)};Sn.hydrate=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vv(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};Sn.render=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(re(40));return t._reactRootContainer?(Lr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Ad;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return oc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(t){console.error(t)}}xv(),xg.exports=Sn;var Zy=xg.exports,yv,op=Zy;yv=op.createRoot,op.hydrateRoot;const Jy={},ap=t=>{let e;const n=new Set,i=(f,u)=>{const p=typeof f=="function"?f(e):f;if(!Object.is(p,e)){const h=e;e=u??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(g=>g(e,h))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(Jy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Qy=t=>t?ap(t):ap;var Sv={exports:{}},Mv={},Ev={exports:{}},wv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=wt;function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tS=typeof Object.is=="function"?Object.is:eS,nS=ks.useState,iS=ks.useEffect,rS=ks.useLayoutEffect,sS=ks.useDebugValue;function oS(t,e){var n=e(),i=nS({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return rS(function(){r.value=n,r.getSnapshot=e,Xc(r)&&s({inst:r})},[t,n,e]),iS(function(){return Xc(r)&&s({inst:r}),t(function(){Xc(r)&&s({inst:r})})},[t]),sS(n),n}function Xc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tS(t,n)}catch{return!0}}function aS(t,e){return e()}var lS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?aS:oS;wv.useSyncExternalStore=ks.useSyncExternalStore!==void 0?ks.useSyncExternalStore:lS;Ev.exports=wv;var cS=Ev.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=wt,uS=cS;function fS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dS=typeof Object.is=="function"?Object.is:fS,hS=uS.useSyncExternalStore,pS=ac.useRef,mS=ac.useEffect,gS=ac.useMemo,vS=ac.useDebugValue;Mv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=pS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=gS(function(){function l(h){if(!c){if(c=!0,f=h,h=i(h),r!==void 0&&o.hasValue){var g=o.value;if(r(g,h))return u=g}return u=h}if(g=u,dS(f,h))return g;var v=i(h);return r!==void 0&&r(g,v)?(f=h,g):(f=h,u=v)}var c=!1,f,u,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,i,r]);var a=hS(t,s[0],s[1]);return mS(function(){o.hasValue=!0,o.value=a},[a]),vS(a),a};Sv.exports=Mv;var _S=Sv.exports;const xS=ag(_S),Tv={},{useDebugValue:yS}=B_,{useSyncExternalStoreWithSelector:SS}=xS;let lp=!1;const MS=t=>t;function ES(t,e=MS,n){(Tv?"production":void 0)!=="production"&&n&&!lp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),lp=!0);const i=SS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return yS(i),i}const cp=t=>{(Tv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Qy(t):t,n=(i,r)=>ES(e,i,r);return Object.assign(n,e),n},wS=t=>t?cp(t):cp,Av=1e-6,Rs=Math.PI*2,gi=(t,e,n)=>Math.max(e,Math.min(n,t)),Tf=t=>Math.round(t*8)/8,xr=(t,e)=>Math.hypot(e[0]-t[0],e[1]-t[1]),TS=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],zs=t=>xr(t.a,t.b),mn=t=>{let e=Math.floor(t+1e-9),n=Math.round((t-e)*12);return n===12&&(e++,n=0),`${e}′${n}″`},Mr=t=>"$"+Math.round(t).toLocaleString("en-US");function AS(t,e,n,i){const r=e[0]-t[0],s=e[1]-t[1],o=i[0]-n[0],a=i[1]-n[1],l=r*a-s*o;if(Math.abs(l)<Av)return null;const c=n[0]-t[0],f=n[1]-t[1];return{t:(c*a-f*o)/l,u:(c*s-f*r)/l}}function CS(t){const e=t.map(r=>({wallId:r.id,a:[...r.a],b:[...r.b]})),n=e.map(()=>[]);for(let r=0;r<e.length;r++)for(let s=r+1;s<e.length;s++){const o=AS(e[r].a,e[r].b,e[s].a,e[s].b);o&&(o.t>.02&&o.t<.98&&n[r].push(o.t),o.u>.02&&o.u<.98&&n[s].push(o.u))}const i=[];return e.forEach((r,s)=>{const o=[...new Set(n[s].map(l=>Math.round(l*512)/512))].sort((l,c)=>l-c);let a=r.a;for(const l of[...o,1]){const c=l>=1?r.b:TS(r.a,r.b,l).map(Tf);xr(a,c)>.05&&i.push({wallId:r.wallId,a,b:c}),a=c}}),i}function RS(t){let e=0;for(let n=0;n<t.length;n++){const[i,r]=t[n],[s,o]=t[(n+1)%t.length];e+=i*o-s*r}return e/2}function up(t){const e=CS(t);if(e.length<3)return[];const n=(u,p)=>`${Math.round(u*8)}|${Math.round(p*8)}`,i=[];for(const u of e)i.push({fx:u.a[0],fz:u.a[1],tx:u.b[0],tz:u.b[1],used:!1}),i.push({fx:u.b[0],fz:u.b[1],tx:u.a[0],tz:u.a[1],used:!1});const r=u=>Math.atan2(i[u].tz-i[u].fz,i[u].tx-i[u].fx),s=new Map;i.forEach((u,p)=>{const h=n(u.fx,u.fz);s.has(h)||s.set(h,[]),s.get(h).push(p)});const o=[];for(let u=0;u<i.length;u++){if(i[u].used)continue;const p=[];let h=u,g=0;for(;g++<=i.length&&!i[h].used;){i[h].used=!0;const v=i[h];p.push([v.fx,v.fz]);const m=Math.atan2(v.fz-v.tz,v.fx-v.tx),d=s.get(n(v.tx,v.tz))||[];if(!d.length)break;let x=-1,_=1/0;for(const y of d){let b=(m-r(y))%Rs;b<0&&(b+=Rs),b<1e-6&&(b=Rs),b<_-1e-9&&(_=b,x=y)}if(x===-1)break;h=x}p.length>=3&&o.push(p)}const a=new Set,l=[];for(const u of o){const p=u.map(h=>`${Math.round(h[0]*8)},${Math.round(h[1]*8)}`).sort().join(";");a.has(p)||(a.add(p),l.push(u))}const c=l.map(u=>({poly:u,area:RS(u)})).filter(u=>Math.abs(u.area)>4);return c.length?(c.sort((u,p)=>Math.abs(p.area)-Math.abs(u.area)),(c.length>1&&Math.abs(c[0].area)>Math.abs(c[1].area)+.5?c.slice(1):c).map(u=>({id:u.poly.map(p=>`${Math.round(p[0]*8)},${Math.round(p[1]*8)}`).sort().join(";"),poly:u.poly,area:Math.abs(u.area)}))):[]}function jc([t,e],n){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const[o,a]=n[r],[l,c]=n[s];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function bS(t,e,n){const i=n[0]-e[0],r=n[1]-e[1],s=i*i+r*r||Av,o=gi(((t[0]-e[0])*i+(t[1]-e[1])*r)/s,0,1);return Math.hypot(t[0]-(e[0]+i*o),t[1]-(e[1]+r*o))}const fp=(t,e)=>{const n=e.b[0]-e.a[0],i=e.b[1]-e.a[1],r=Math.hypot(n,i)||1;return((t[0]-e.a[0])*n+(t[1]-e.a[1])*i)/r},PS=(t,e)=>{const n=zs(t),i=(t.b[0]-t.a[0])/n,r=(t.b[1]-t.a[1])/n,s=e.offset+e.width/2;return[t.a[0]+i*s,t.a[1]+r*s]},R=(t,e,n,i,r,s,o=0)=>({dx:t,dz:e,w:n,d:i,y0:r,y1:s,sh:o}),Ol=[{id:"sofa3",name:"3-Seat Sofa",cat:"Living Room",w:7,d:3.2,h:2.8,price:649,color:"#77896b",parts:[R(0,.45,6.2,2.2,0,.5,-.06),R(0,.3,6.8,2.6,.5,1.05),R(-2.28,.5,2.2,2.1,1.05,1.5,.05),R(0,.5,2.2,2.1,1.05,1.5,.05),R(2.28,.5,2.2,2.1,1.05,1.5,.05),R(0,-1.35,7,.5,0,2.8),R(-2.28,-.98,2.2,.4,1.5,2.5,.05),R(0,-.98,2.2,.4,1.5,2.5,.05),R(2.28,-.98,2.2,.4,1.5,2.5,.05),R(-3.25,.25,.5,2.7,0,2.1),R(3.25,.25,.5,2.7,0,2.1)]},{id:"loveseat",name:"Loveseat",cat:"Living Room",w:5.5,d:3.2,h:2.8,price:449,color:"#6b7a5e",parts:[R(0,.45,4.7,2.2,0,.5,-.06),R(0,.3,5.3,2.6,.5,1.05),R(-1.32,.5,2.5,2.1,1.05,1.5,.05),R(1.32,.5,2.5,2.1,1.05,1.5,.05),R(0,-1.35,5.5,.5,0,2.8),R(-1.32,-.98,2.5,.4,1.5,2.5,.05),R(1.32,-.98,2.5,.4,1.5,2.5,.05),R(-2.5,.25,.5,2.7,0,2.1),R(2.5,.25,.5,2.7,0,2.1)]},{id:"sectional",name:"L-Shaped Sectional",cat:"Living Room",w:9.5,d:6.5,h:2.8,price:1299,color:"#97907e",parts:[R(0,-3,9.5,.5,0,2.8),R(4.5,-1,.5,3.5,0,2.1),R(-4.5,.25,.5,6,0,2.1),R(1.25,-1.125,6,3.25,0,1.05),R(-3,.25,2.5,6,0,1.05),R(-.25,-1,2.9,2.9,1.05,1.5,.05),R(2.75,-1,2.9,2.9,1.05,1.5,.05),R(-3,.8,2.4,4.8,1.05,1.5,.05),R(-.25,-2.55,2.9,.4,1.5,2.5,.05),R(2.75,-2.55,2.9,.4,1.5,2.5,.05),R(-3,-2.5,2.3,.45,1.5,2.3,.08)]},{id:"armchair",name:"Armchair",cat:"Living Room",w:3,d:3,h:2.7,price:329,color:"#8a6f5c",parts:[R(0,.4,2.6,2.2,0,.5,-.06),R(0,.3,2.8,2.4,.5,1),R(0,.45,2.3,1.9,1,1.45,.05),R(0,-1.25,3,.5,0,2.7),R(0,-.88,2.3,.4,1.45,2.4,.05),R(-1.25,.3,.5,2.4,0,2),R(1.25,.3,.5,2.4,0,2)]},{id:"wingchair",name:"Wingback Chair",cat:"Living Room",w:3.2,d:3.2,h:3.4,price:429,color:"#6d5a4e",parts:[R(0,.4,2.8,2.3,0,.5,-.06),R(0,.3,3,2.5,.5,1),R(0,.45,2.4,2,1,1.45,.05),R(0,-1.35,3.2,.5,0,3.4),R(0,-.92,2.4,.4,1.45,2.7,.05),R(-1.35,-.7,.5,1.6,0,2.9),R(1.35,-.7,.5,1.6,0,2.9)]},{id:"chaiselongue",name:"Chaise Longue",cat:"Living Room",w:6,d:2.8,h:2.6,price:549,color:"#7d8a94",parts:[R(0,.15,5.6,2.4,0,.5,-.06),R(0,.05,5.8,2.6,.5,1),R(.45,.1,5,2.3,1,1.45,.05),R(-2.75,0,.5,2.8,0,2.6),R(-2.25,.05,.55,2.2,1.45,1.95,.08)]},{id:"accentchair",name:"Accent Chair",cat:"Living Room",w:2.4,d:2.6,h:2.6,price:259,color:"#9c6b5c",parts:[R(0,.3,2.2,2,0,.55,-.06),R(0,.2,2.4,2.2,.55,1),R(0,.35,1.9,1.7,1,1.4,.05),R(0,-1.1,2.4,.4,0,2.6),R(0,-.78,1.9,.35,1.4,2.3,.05)]},{id:"bench_entry",name:"Entry Bench",cat:"Living Room",w:4.5,d:1.6,h:1.9,price:199,color:"#7a6350",parts:[R(0,0,4.5,1.6,1.35,1.6),R(0,0,4.3,1.4,1.6,1.9,.06),R(-1.95,-.55,.3,.3,0,1.35,-.08),R(1.95,-.55,.3,.3,0,1.35,-.08),R(-1.95,.55,.3,.3,0,1.35,-.08),R(1.95,.55,.3,.3,0,1.35,-.08)]},{id:"ottoman",name:"Ottoman",cat:"Living Room",w:2.2,d:2,h:1.4,price:99,color:"#9c8468",parts:[R(0,0,1.9,1.7,0,.9,-.05),R(0,0,2.2,2,.9,1.4,.05)]},{id:"coffee",name:"Coffee Table",cat:"Living Room",w:4,d:2.2,h:1.5,price:189,color:"#5d4a37",parts:[R(0,0,4,2.2,1.3,1.5),R(0,0,3.5,1.7,.35,.55,-.06),R(-1.8,-.9,.25,.25,0,1.3,-.08),R(1.8,-.9,.25,.25,0,1.3,-.08),R(-1.8,.9,.25,.25,0,1.3,-.08),R(1.8,.9,.25,.25,0,1.3,-.08)]},{id:"tvstand",name:"TV Console",cat:"Living Room",w:5.5,d:1.5,h:4.3,price:240,color:"#3c4148",parts:[R(0,.12,5.1,1.2,0,.3,-.08),R(0,0,5.5,1.5,.3,1.7),R(-1.38,.76,2.66,.08,.45,1.6,.05),R(1.38,.76,2.66,.08,.45,1.6,.05),R(0,-.35,4.6,.3,1.9,4.3)]},{id:"tv",name:"Flat-Panel TV",cat:"Living Room",w:4.4,d:1.2,h:2.6,price:349,color:"#23262a",parts:[R(0,-.35,4.4,.12,.7,2.6),R(0,-.1,.8,.5,0,.7,-.06),R(-1.5,.15,.35,.7,0,.55,-.08),R(1.5,.15,.35,.7,0,.55,-.08)]},{id:"shelf",name:"Bookshelf",cat:"Living Room",w:3,d:1.2,h:6.5,price:175,color:"#6e5a44",parts:[R(-1.44,0,.12,1.2,0,6.5),R(1.44,0,.12,1.2,0,6.5),R(0,-.54,2.76,.12,0,6.5,-.06),R(0,0,3,1.2,0,.3),R(0,0,3,1.2,6.3,6.5),R(0,0,2.76,1.05,1.5,1.62),R(0,0,2.76,1.05,3,3.12),R(0,0,2.76,1.05,4.5,4.62),R(-.65,0,1.15,.85,1.62,2.4,.08),R(.7,0,.95,.85,3.12,3.75,.08)]},{id:"lamp",name:"Floor Lamp",cat:"Living Room",w:1.5,d:1.5,h:5,price:89,color:"#c9a86a",parts:[R(0,0,1,1,0,.18,-.08),R(0,0,.2,.2,.18,3.7),R(0,0,1.45,1.45,3.7,5,.06)]},{id:"consoletable",name:"Console Table",cat:"Living Room",w:4.5,d:1.4,h:3,price:179,color:"#5f4c39",parts:[R(0,0,4.5,1.4,2.8,3),R(0,0,4,1.05,.7,.85,-.06),R(-2.05,-.5,.25,.25,0,2.8,-.08),R(2.05,-.5,.25,.25,0,2.8,-.08),R(-2.05,.5,.25,.25,0,2.8,-.08),R(2.05,.5,.25,.25,0,2.8,-.08)]},{id:"sidetable",name:"Side Table",cat:"Living Room",w:1.8,d:1.8,h:1.8,price:119,color:"#5f4c39",parts:[R(0,0,1.8,1.8,1.6,1.8),R(0,0,.45,.45,.2,1.6),R(0,0,1,1,0,.2,-.06)]},{id:"bed_q",name:"Queen Bed",cat:"Bedroom",w:5.25,d:7,h:3.5,price:899,color:"#a08a6f",parts:[R(0,-3.25,5.25,.5,0,3.5),R(0,.3,5.25,6.4,0,.8,-.05),R(0,.35,4.85,5.9,.8,1.5,.07),R(-1.2,-2.35,2.15,1.25,1.5,1.95,.1),R(1.2,-2.35,2.15,1.25,1.5,1.95,.1),R(0,2.35,4.85,1.5,1.5,1.72,.04)]},{id:"bed_twin",name:"Twin Bed",cat:"Bedroom",w:3.4,d:6.4,h:3.2,price:549,color:"#8f8574",parts:[R(0,-2.95,3.4,.5,0,3.2),R(0,.2,3.4,5.8,0,.8,-.05),R(0,.25,3.05,5.5,.8,1.45,.07),R(0,-2.1,2.4,1.2,1.45,1.85,.1),R(0,1.85,3.05,1.4,1.45,1.65,.04)]},{id:"daybed",name:"Daybed",cat:"Bedroom",w:6.5,d:3.2,h:2.9,price:649,color:"#7f7460",parts:[R(0,-1.35,6.5,.5,0,2.9),R(0,.15,6.1,2.6,0,.5,-.06),R(0,.1,6.3,2.8,.5,1),R(0,.2,6,2.5,1,1.5,.06),R(-3,.1,.5,3,0,2.2),R(3,.1,.5,3,0,2.2),R(-1.9,-.9,1.9,.45,1.5,2.05,.08),R(1.9,-.9,1.9,.45,1.5,2.05,.08)]},{id:"night",name:"Nightstand",cat:"Bedroom",w:1.6,d:1.6,h:2,price:129,color:"#5f4c39",parts:[R(0,-.04,1.5,1.5,0,1.85),R(0,0,1.6,1.6,1.85,2),R(0,.76,1.3,.06,1,1.7,.06),R(0,.76,1.3,.06,.3,.9,.06)]},{id:"dresser",name:"Dresser",cat:"Bedroom",w:5,d:1.8,h:3.1,price:449,color:"#7a6350",parts:[R(0,-.06,4.6,1.5,0,.3,-.08),R(0,0,4.9,1.75,.3,2.95),R(0,0,5,1.8,2.95,3.1),R(0,.9,4.7,.06,1.15,1.22,-.06),R(0,.9,4.7,.06,2,2.07,-.06)]},{id:"chest",name:"Blanket Chest",cat:"Bedroom",w:3.6,d:1.8,h:2.2,price:269,color:"#6e5a44",parts:[R(0,0,3.6,1.8,0,1.9),R(0,0,3.72,1.92,1.9,2.2,.05)]},{id:"wardrobe",name:"Wardrobe",cat:"Bedroom",w:4,d:2,h:6,price:549,color:"#5a4634",parts:[R(0,-.05,3.7,1.75,0,.3,-.08),R(0,0,4,2,.3,5.8),R(0,0,4.15,2.1,5.8,6,.04),R(0,1.02,.07,.05,.6,5.5,-.1)]},{id:"vanitydesk",name:"Vanity Desk",cat:"Bedroom",w:3.6,d:1.6,h:5.4,price:379,color:"#8a6f52",parts:[R(0,.1,3.6,1.4,2.5,2.7),R(-1.6,.1,.3,1.3,0,2.5,-.06),R(1.6,.1,.3,1.3,0,2.5,-.06),R(0,-.62,2.5,.18,2.7,5.4,.08)]},{id:"mirror",name:"Floor Mirror",cat:"Bedroom",w:2.2,d:.4,h:5.5,price:149,color:"#aebfc9",parts:[R(0,.05,2.4,.5,0,.35,-.08),R(0,-.05,2.2,.28,.35,5.5)]},{id:"fridge",name:"Refrigerator",cat:"Kitchen",w:3,d:2.5,h:5.8,price:1299,color:"#9aa1a8",parts:[R(0,0,3,2.5,0,5.8),R(0,1.27,2.8,.06,3.55,3.63,-.1),R(-.3,1.28,.08,.06,3.75,5.45,-.12),R(.3,1.28,.08,.06,3.75,5.45,-.12)]},{id:"stove",name:"Range",cat:"Kitchen",w:2.5,d:2.2,h:2.8,price:749,color:"#4a4f55",parts:[R(0,0,2.5,2.2,0,2.55),R(0,0,2.5,2.2,2.55,2.7,.06),R(-.58,-.42,.62,.62,2.7,2.76,-.12),R(.58,-.42,.62,.62,2.7,2.76,-.12),R(-.58,.5,.62,.62,2.7,2.76,-.12),R(.58,.5,.62,.62,2.7,2.76,-.12)]},{id:"island",name:"Kitchen Island",cat:"Kitchen",w:5,d:2.5,h:2.6,price:599,color:"#7a6a58",parts:[R(0,0,4.6,2.1,0,2.35),R(0,0,5,2.5,2.35,2.6,.06)]},{id:"kitchencart",name:"Kitchen Cart",cat:"Kitchen",w:3.6,d:2,h:3,price:329,color:"#75604c",parts:[R(0,-.05,3.3,1.75,0,2.7),R(0,0,3.6,2,2.7,3,.07)]},{id:"barstool",name:"Bar Stool",cat:"Kitchen",w:1.3,d:1.3,h:3.4,price:89,color:"#4f5d52",parts:[R(-.5,-.45,.14,.14,0,2.3,-.08),R(.5,-.45,.14,.14,0,2.3,-.08),R(-.5,.5,.14,.14,0,2.3,-.08),R(.5,.5,.14,.14,0,2.3,-.08),R(0,.05,1.3,1.15,2.3,2.6,.05),R(0,-.5,1.3,.2,2.6,3.4)]},{id:"basecabinet",name:"Base Cabinet Run",cat:"Kitchen",w:4,d:2,h:2.7,price:389,color:"#7a6350",parts:[R(0,-.05,3.85,1.8,0,2.45),R(0,.05,4,2.1,2.45,2.7,.07),R(-1,1.03,1.85,.06,.4,2.35,.05),R(1,1.03,1.85,.06,.4,2.35,.05)]},{id:"pantry",name:"Pantry Cabinet",cat:"Kitchen",w:2.5,d:2,h:6.2,price:459,color:"#6e5a44",parts:[R(0,0,2.5,2,0,6.2),R(0,1.02,2.3,.06,3.3,3.4,-.08),R(-.15,1.03,.07,.05,3.5,5.9,-.1),R(.15,1.03,.07,.05,3.5,5.9,-.1)]},{id:"winerack",name:"Wine Rack",cat:"Kitchen",w:1.5,d:1.2,h:4,price:149,color:"#4a3c2e",parts:[R(-.69,0,.12,1.2,0,4),R(.69,0,.12,1.2,0,4),R(0,0,1.26,1.05,.4,.5),R(0,0,1.26,1.05,1.2,1.3),R(0,0,1.26,1.05,2,2.1),R(0,0,1.26,1.05,2.8,2.9),R(0,0,1.26,1.05,3.6,3.7),R(0,0,1.5,1.2,3.9,4)]},{id:"dtable",name:"Dining Table",cat:"Dining",w:5,d:3,h:2.6,price:399,color:"#6b5138",parts:[R(0,0,5,3,2.35,2.6),R(0,0,4.3,2.3,2.05,2.35,-.06),R(-2.15,-1.15,.3,.3,0,2.05,-.08),R(2.15,-1.15,.3,.3,0,2.05,-.08),R(-2.15,1.15,.3,.3,0,2.05,-.08),R(2.15,1.15,.3,.3,0,2.05,-.08)]},{id:"dchair",name:"Dining Chair",cat:"Dining",w:1.6,d:1.7,h:3,price:79,color:"#4f5d52",parts:[R(-.62,-.6,.16,.16,0,1.5,-.08),R(.62,-.6,.16,.16,0,1.5,-.08),R(-.62,.62,.16,.16,0,1.5,-.08),R(.62,.62,.16,.16,0,1.5,-.08),R(0,.12,1.6,1.42,1.5,1.72,.05),R(0,-.72,1.6,.22,0,3)]},{id:"diningbench",name:"Dining Bench",cat:"Dining",w:4.6,d:1.5,h:1.7,price:229,color:"#6b5138",parts:[R(0,0,4.6,1.5,1.45,1.7),R(-2,-.45,.3,.3,0,1.45,-.08),R(2,-.45,.3,.3,0,1.45,-.08),R(-2,.45,.3,.3,0,1.45,-.08),R(2,.45,.3,.3,0,1.45,-.08)]},{id:"sideboard",name:"Sideboard",cat:"Dining",w:5.5,d:1.6,h:3,price:499,color:"#7a6350",parts:[R(0,-.04,5.1,1.35,0,.3,-.08),R(0,0,5.5,1.6,.3,2.8),R(0,0,5.62,1.7,2.8,3,.05),R(-.92,.81,.05,.05,.5,2.6,-.1),R(.92,.81,.05,.05,.5,2.6,-.1)]},{id:"toilet",name:"Toilet",cat:"Bath",w:1.7,d:2.3,h:2.2,price:329,color:"#e8e8e4",parts:[R(0,.5,1.25,1,0,.85,-.05),R(0,.6,1.55,1.5,.85,1.5),R(0,.62,1.3,1.25,1.5,1.62,.06),R(0,-.85,1.7,.55,0,2.2)]},{id:"vanity",name:"Sink Vanity",cat:"Bath",w:3.2,d:1.9,h:3.2,price:459,color:"#5c6b7a",parts:[R(0,-.08,2.95,1.6,0,2.5),R(0,0,3.2,1.9,2.5,2.72,.06),R(0,.2,1.5,1.1,2.72,2.85,.1),R(0,-.88,3.2,.14,2.72,3.2,.04)]},{id:"tub",name:"Bathtub",cat:"Bath",w:5,d:2.7,h:1.9,price:899,color:"#dfe4e6",parts:[R(0,1.15,5,.4,0,1.9),R(0,-1.15,5,.4,0,1.9),R(2.3,0,.4,1.9,0,1.9),R(-2.3,0,.4,1.9,0,1.9),R(0,0,4.2,1.9,0,.35,-.06)]},{id:"shower",name:"Shower Stall",cat:"Bath",w:3,d:3,h:6.5,price:699,color:"#c7d1d6",parts:[R(0,0,3,3,0,.4),R(0,-1.44,3,.12,.4,6.5,.04),R(-1.44,0,.12,2.76,.4,6.5,.04),R(.9,1.44,1.2,.12,.4,6.5,.04),R(-1.1,-1.1,.14,.14,5.6,6.1,-.1),R(-1.1,-.9,.5,.5,6,6.12,-.08)]},{id:"linencabinet",name:"Linen Cabinet",cat:"Bath",w:2,d:1.4,h:5.8,price:349,color:"#7c8b96",parts:[R(0,-.03,1.8,1.2,0,.25,-.08),R(0,0,2,1.4,.25,5.55),R(0,0,2.08,1.48,5.55,5.8,.05),R(0,.71,.05,.05,.5,5.3,-.1)]},{id:"washer",name:"Washer",cat:"Bath",w:2.5,d:2.5,h:2.8,price:799,color:"#b9bec4",parts:[R(0,0,2.5,2.5,0,2.8),R(0,1.27,1.7,.06,.35,2,-.1),R(0,1.27,2.2,.06,2.35,2.65,-.08)]},{id:"desk",name:"Writing Desk",cat:"Office",w:4.5,d:2.3,h:2.5,price:329,color:"#8a6f52",parts:[R(0,0,4.5,2.3,2.3,2.5),R(-2.05,0,.35,2.1,0,2.3,-.06),R(2.05,0,.35,2.1,0,2.3,-.06),R(0,-.95,3.7,.18,.4,2.1,-.08)]},{id:"deskchair",name:"Office Chair",cat:"Office",w:1.8,d:1.8,h:3.2,price:159,color:"#3a3a3a",parts:[R(0,.05,1.7,.28,0,.22,-.1),R(0,.05,.28,1.7,0,.22,-.1),R(0,.05,.22,.22,.22,1.3),R(0,.18,1.7,1.55,1.3,1.62,.06),R(0,-.7,1.7,.26,1.62,3.2)]},{id:"filingcabinet",name:"Lateral File",cat:"Office",w:2.6,d:1.8,h:2.3,price:189,color:"#6f747a",parts:[R(0,-.03,2.4,1.6,0,.15,-.08),R(0,0,2.6,1.8,.15,2.3),R(0,.91,2.3,.05,1.3,2.15,.06),R(0,.91,2.3,.05,.35,1.2,.06)]},{id:"printerstand",name:"Printer Stand",cat:"Office",w:2.2,d:1.6,h:2.8,price:219,color:"#6e5a44",parts:[R(0,0,2.2,1.6,0,2),R(0,0,1.9,1.4,2,2.5,-.06),R(0,.7,1.5,.3,2.5,2.62,.08)]},{id:"plant",name:"Potted Plant",cat:"Decor",w:2,d:2,h:4.5,price:89,color:"#6d8a5e",parts:[R(0,0,1.5,1.5,0,1.2,-.12),R(0,0,2,2,1.2,3.6),R(0,0,1.25,1.25,3.6,4.5,.06)]},{id:"plant_tall",name:"Fiddle-Leaf Fig",cat:"Decor",w:2.2,d:2.2,h:6,price:129,color:"#5f7d54",parts:[R(0,0,1.8,1.8,0,1.5,-.12),R(0,0,.28,.28,1.5,3.4,-.15),R(0,0,2.2,2.2,2.9,5.1),R(0,0,1.35,1.35,5.1,6,.06)]},{id:"pouf",name:"Floor Pouf",cat:"Decor",w:1.8,d:1.8,h:1.3,price:79,color:"#b08d6e",parts:[R(0,0,1.8,1.8,0,1),R(0,0,1.5,1.5,1,1.3,.07)]},{id:"floorvase",name:"Floor Vase",cat:"Decor",w:1.2,d:1.2,h:4.3,price:69,color:"#8d7f92",parts:[R(0,0,.6,.6,0,.3,-.08),R(0,0,1.05,1.05,.3,1.5),R(0,0,.5,.5,1.5,2.6,-.05),R(0,0,.8,.8,2.6,3.2,.05),R(-.15,0,.1,.1,3.2,4.3,-.1),R(.18,.1,.1,.1,3.2,4,-.1)]},{id:"basket",name:"Woven Basket",cat:"Decor",w:1.6,d:1.6,h:1.4,price:49,color:"#a8906e",parts:[R(0,0,1.6,1.6,0,1.4),R(0,0,1.25,1.25,1.15,1.4,-.12)]},{id:"sculpture",name:"Sculpture",cat:"Decor",w:1,d:1,h:2.4,price:59,color:"#b9b3a6",parts:[R(0,0,.85,.85,0,.3,-.08),R(0,0,.42,.42,.3,1.9),R(0,0,.68,.68,1.9,2.4,.06)]},{id:"rug_neutral",name:"Neutral Area Rug",cat:"Decor",w:8,d:5,h:.1,price:129,color:"#d8d0c2",rug:!0,parts:[R(0,0,8,5,0,.1)]},{id:"rug_bold",name:"Terracotta Pattern Rug",cat:"Decor",w:8,d:5,h:.1,price:159,color:"#b0563f",rug:!0,parts:[R(0,0,8,5,0,.1)]},{id:"rug_runner",name:"Hallway Runner",cat:"Decor",w:8,d:2.5,h:.1,price:89,color:"#3f3f42",rug:!0,parts:[R(0,0,8,2.5,0,.1)]},{id:"rug_shag",name:"Cream Shag Rug",cat:"Decor",w:6,d:4,h:.1,price:149,color:"#efe8d8",rug:!0,parts:[R(0,0,6,4,0,.1)]},{id:"rug_jute",name:"Jute Rug",cat:"Decor",w:9,d:6,h:.1,price:179,color:"#c9b795",rug:!0,parts:[R(0,0,9,6,0,.1)]},{id:"rug_grand",name:"Grand Estate Rug",cat:"Decor",w:11,d:8.5,h:.1,price:259,color:"#8a7a63",rug:!0,parts:[R(0,0,11,8.5,0,.1)]}],yn=t=>Ol.find(e=>e.id===t),LS=[...new Set(Ol.map(t=>t.cat))],Af=[{id:"oak",name:"Oak Planks",pricePerSqFt:6.5,base:"#b08a5e",line:"#8a6a45",pattern:"plank",tileFt:2},{id:"walnut",name:"Walnut Planks",pricePerSqFt:8.75,base:"#6b4a33",line:"#4e3524",pattern:"plank",tileFt:2},{id:"tile",name:"Ceramic Tile",pricePerSqFt:4.25,base:"#cfd6d3",line:"#aeb8b4",pattern:"tile",tileFt:2},{id:"marble",name:"Marble Tile",pricePerSqFt:11,base:"#e8e6e1",line:"#c9c5bd",pattern:"tile",tileFt:2},{id:"concrete",name:"Polished Concrete",pricePerSqFt:3.5,base:"#a9aca9",line:"#979a97",pattern:"none",tileFt:6},{id:"carpet",name:"Berber Carpet",pricePerSqFt:2.75,base:"#b7ab98",line:"#a89c88",pattern:"none",tileFt:6}],Cf=[{id:"swiss",name:"Swiss Coffee",pricePerSqFt:.45,color:"#efe9dc"},{id:"white",name:"Gallery White",pricePerSqFt:.4,color:"#f4f4f0"},{id:"sage",name:"Sage",pricePerSqFt:.45,color:"#a9b49e"},{id:"slate",name:"Slate Blue",pricePerSqFt:.45,color:"#7d8fa3"},{id:"clay",name:"Warm Clay",pricePerSqFt:.45,color:"#c08265"},{id:"char",name:"Charcoal",pricePerSqFt:.5,color:"#4a4d50"}],Id=t=>Af.find(e=>e.id===t),Ud=t=>Cf.find(e=>e.id===t),DS=[{hex:"#77896b",name:"Sage"},{hex:"#c97b5a",name:"Terracotta"},{hex:"#d9a441",name:"Honey"},{hex:"#8a6f5c",name:"Walnut"},{hex:"#7d8fa3",name:"Dusty Blue"},{hex:"#c2a3a0",name:"Blush Clay"},{hex:"#4a4d50",name:"Charcoal"},{hex:"#e6ddcb",name:"Oat Cream"}];let NS=0;const Yc=t=>`${t}${(++NS).toString(36)}${Date.now().toString(36).slice(-4)}`,Er={snapshot:null},qc=t=>JSON.stringify({walls:t.walls,furniture:t.furniture,roomMaterials:t.roomMaterials,wallMaterials:t.wallMaterials,wallHeight:t.wallHeight}),Oe=wS((t,e)=>({walls:[],furniture:[],rooms:[],roomMaterials:{},wallMaterials:{},wallHeight:8,tool:"select",placingId:null,placingRot:0,selected:null,floorMat:"oak",wallMat:"swiss",viewMode:"2d",timeOfDay:14,budgetCap:8e3,tipsHidden:!1,past:[],future:[],commit(){t(n=>({past:[...n.past.slice(-79),qc(n)],future:[]}))},undo(){const{past:n}=e();n.length&&(t(i=>({past:i.past.slice(0,-1),future:[...i.future,qc(i)]})),e().hydrate(JSON.parse(n[n.length-1])))},redo(){const{future:n}=e();n.length&&(t(i=>({past:[...i.past,qc(i)],future:i.future.slice(0,-1)})),e().hydrate(JSON.parse(n[n.length-1])))},hydrate(n){const i=n.walls||[];t({walls:i,furniture:n.furniture||[],roomMaterials:n.roomMaterials||{},wallMaterials:n.wallMaterials||{},wallHeight:n.wallHeight||8,selected:null,rooms:up(i)})},recomputeRooms(){t(n=>({rooms:up(n.walls)}))},addWall(n,i){const r={id:Yc("w"),a:n,b:i,height:e().wallHeight,thickness:.5,openings:[]};return t(s=>({walls:[...s.walls,r]})),e().recomputeRooms(),r},deleteWall(n){t(i=>({walls:i.walls.filter(r=>r.id!==n)})),e().recomputeRooms()},addOpening(n,i){const r=Yc("op");return t(s=>({walls:s.walls.map(o=>o.id===n?{...o,openings:[...o.openings||[],{...i,id:r}]}:o)})),r},moveOpening(n,i,r){t(s=>({walls:s.walls.map(o=>o.id===n?{...o,openings:o.openings.map(a=>a.id===i?{...a,offset:r}:a)}:o)}))},deleteOpening(n,i){t(r=>({walls:r.walls.map(s=>s.id===n?{...s,openings:s.openings.filter(o=>o.id!==i)}:s)}))},addFurniture(n,i,r){const s={id:Yc("f"),itemId:n.id,pos:i,rotDeg:r,w:n.w,d:n.d};return t(o=>({furniture:[...o.furniture,s]})),s},updateFurniture(n,i){t(r=>({furniture:r.furniture.map(s=>s.id===n?{...s,...i}:s)}))},tintFurniture(n,i){t(r=>({furniture:r.furniture.map(s=>s.id===n?{...s,tint:i}:s)}))},resizeFurniture(n,i,r){t(s=>({furniture:s.furniture.map(o=>o.id===n?{...o,sw:i,sd:r}:o)}))},deleteFurniture(n){t(i=>({furniture:i.furniture.filter(r=>r.id!==n)}))},paintRoom(n,i){t(r=>({roomMaterials:{...r.roomMaterials,[n]:i}}))},paintWall(n,i){t(r=>({wallMaterials:{...r.wallMaterials,[n]:i}}))},setTool(n){t(i=>({tool:n,placingId:null,placingRot:0,selected:n==="select"?i.selected:null}))},setPlacing(n){t({placingId:n,placingRot:0,tool:"place",selected:null})},rotatePlacing(){t(n=>({placingRot:(n.placingRot+45)%360}))},select(n){t({selected:n})},hideTips(){t({tipsHidden:!0})},showTips(){t({tipsHidden:!1})},setFloorMat(n){t({floorMat:n})},setWallMat(n){t({wallMat:n})},setView(n){t({viewMode:n})},setTime(n){t({timeOfDay:n})},setCap(n){t({budgetCap:n})},clearAll(){e().commit(),t({walls:[],furniture:[],rooms:[],roomMaterials:{},wallMaterials:{},selected:null,placingId:null,tool:"select"})}}));function IS(t){var i;let e=0,n=0;for(const r of t.furniture)e+=((i=yn(r.itemId))==null?void 0:i.price)??0;for(const r of t.rooms){const s=Id(t.roomMaterials[r.id]);s&&(n+=r.area*s.pricePerSqFt)}for(const r of t.walls){const s=Ud(t.wallMaterials[r.id]);s&&(n+=zs(r)*r.height*2*s.pricePerSqFt)}return{items:e,finishes:n,total:e+n}}function dp(){const t={wallHeight:8,walls:[{id:"dw1",a:[8,8],b:[36,8],height:8,thickness:.5,openings:[{id:"do1",type:"door",offset:3,width:3,height:6.7}]},{id:"dw2",a:[36,8],b:[36,28],height:8,thickness:.5,openings:[{id:"do2",type:"window",offset:8,width:4,sill:3,height:3.5}]},{id:"dw3",a:[36,28],b:[8,28],height:8,thickness:.5,openings:[{id:"do3",type:"window",offset:12,width:5,sill:3,height:3.5}]},{id:"dw4",a:[8,28],b:[8,8],height:8,thickness:.5,openings:[]},{id:"dw5",a:[24,8],b:[24,28],height:8,thickness:.5,openings:[{id:"do4",type:"door",offset:9,width:3,height:6.7}]}],furniture:[{id:"df1",itemId:"sofa3",pos:[15,26],rotDeg:0,w:7,d:3.2},{id:"df2",itemId:"coffee",pos:[15,20.5],rotDeg:0,w:4,d:2.2},{id:"df3",itemId:"tvstand",pos:[17,9.3],rotDeg:180,w:5.5,d:1.5},{id:"df4",itemId:"lamp",pos:[10.2,26],rotDeg:0,w:1.5,d:1.5},{id:"df5",itemId:"bed_q",pos:[31.8,18],rotDeg:270,w:5.25,d:7},{id:"df6",itemId:"night",pos:[33.6,13.2],rotDeg:270,w:1.6,d:1.6},{id:"df7",itemId:"dresser",pos:[25.4,24],rotDeg:90,w:5,d:1.8}],wallMaterials:{dw5:"sage"},roomMaterials:{}};Oe.getState().hydrate(t);const e=Oe.getState().rooms;e.length>=2&&Oe.setState({roomMaterials:{[e[0].id]:"oak",[e[1].id]:"carpet"}})}const so=(t,e=.5)=>Math.round(t/e)*e;function US(t,e,n,i,r){let s=null;for(const o of r){const[a,l]=o.a,[c,f]=o.b,u=Math.hypot(c-a,f-l);if(u<.5)continue;const p=(c-a)/u,h=(f-l)/u,g=gi((t[0]-a)*p+(t[1]-l)*h,.25,u-.25),v=a+p*g,m=l+h*g,d=Math.hypot(t[0]-v,t[1]-m),x=i/2+(o.thickness??.5)/2+.02,_=Math.abs(d-x);if(_<.6&&(!s||_<s.diff)){let y=t[0]-v,b=t[1]-m;const M=Math.hypot(y,b);M<1e-4?(y=-h,b=p):(y/=M,b/=M),s={diff:_,x:v+y*x,z:m+b*x}}}return s?[s.x,s.z]:t}function lc(t,{forCollision:e=!1}={}){const[n,i]=t.a,[r,s]=t.b,o=Math.hypot(r-n,s-i);if(o<.01)return[];const a=(r-n)/o,l=(s-i)/o,c=t.height??8,f=t.thickness??.5,u=Math.atan2(-l,a),p=[],h=(m,d,x,_)=>{if(d-m<.02||_-x<.02)return;const y=(m+d)/2;p.push({cx:n+a*y,cy:(x+_)/2,cz:i+l*y,sx:d-m,sy:_-x,sz:f,rotY:u})},g=[...t.openings||[]].sort((m,d)=>m.offset-d.offset);let v=0;for(const m of g){const d=Math.max(v,m.offset),x=Math.min(o,m.offset+m.width);if(!(x<=d)){if(h(v,d,0,c),!e){const _=m.type==="window"?(m.sill??3)+(m.height??3.5):m.height??6.7;h(d,x,_,c),m.type==="window"&&h(d,x,0,m.sill??3)}v=x}}return h(v,o,0,c),p}const Yo=t=>({w:t.w*(t.sw??1),d:t.d*(t.sd??1)});function To(t,e,n,i,r){const s=Math.cos(r),o=Math.sin(r),a=n/2,l=i/2;return[[-a,-l],[a,-l],[a,l],[-a,l]].map(([c,f])=>[t+c*s+f*o,e-c*o+f*s])}const hp=t=>[0,1].map(e=>{const n=t[e],i=t[e+1],r=i[0]-n[0],s=i[1]-n[1],o=Math.hypot(r,s)||1;return[-s/o,r/o]});function pp(t,e){for(const[n,i]of[...hp(t),...hp(e)]){let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const[l,c]of t){const f=l*n+c*i;f<r&&(r=f),f>s&&(s=f)}for(const[l,c]of e){const f=l*n+c*i;f<o&&(o=f),f>a&&(a=f)}if(s<o||a<r)return!1}return!0}function FS(t,e,n,i,r,s,o){const a=To(n[0],n[1],t,e,i*Math.PI/180);for(const l of r)for(const c of lc(l,{forCollision:!0}))if(pp(a,To(c.cx,c.cz,c.sx,c.sz,c.rotY)))return!1;for(const l of s){if(l.id===o)continue;const c=Yo(l);if(pp(a,To(l.pos[0],l.pos[1],c.w,c.d,l.rotDeg*Math.PI/180)))return!1}return!0}function mp(t,e,n,i){for(const r of i)for(const s of lc(r,{forCollision:!0})){const o=Math.cos(s.rotY),a=Math.sin(s.rotY),l=(t-s.cx)*o-(e-s.cz)*a,c=(t-s.cx)*a+(e-s.cz)*o,f=Math.max(-s.sx/2,Math.min(s.sx/2,l)),u=Math.max(-s.sz/2,Math.min(s.sz/2,c));if(Math.hypot(l-f,c-u)<n)return!0}return!1}const Cv=t=>[...t].sort((e,n)=>{var s,o;const i=(s=yn(e.itemId))!=null&&s.rug?0:1,r=(o=yn(n.itemId))!=null&&o.rug?0:1;return i-r}),Rf=(t,e,n,i,r,s,o,a)=>FS(e,n,i,r,s,t?[]:o.filter(l=>{var c;return!((c=yn(l.itemId))!=null&&c.rug)}),a),OS=(t,e=0)=>{if(!e)return t;const n=parseInt(String(t).trim().slice(1),16);if(Number.isNaN(n))return t;const i=r=>Math.max(0,Math.min(255,Math.round(r+255*e)));return`rgb(${i(n>>16)},${i(n>>8&255)},${i(n&255)})`},di=60,Je={scale:0,tx:0,ty:0},kS="#FBF9F5",zS="rgba(166,150,128,.13)",BS="rgba(150,132,108,.26)",HS="rgba(201,123,90,.5)",VS="#3A3F3C",GS="rgba(64,56,46,.15)",Ta="#8B877C",WS="#6B6F68",Ai="#C97B5A",gp="#B4643F",XS="#7FA6BC",vp="#7FA876",jS="#5F8A56",_p="#D98276",YS="#C05F4E";function qS(){const t=wt.useRef(null),e=wt.useRef({pointers:new Map,pinch:null,pan:null,draft:null,chainStart:null,chainEnd:null,chained:!1,drag:null,slide:null,ghost:[30,30],maybePan:!1,downPt:null,space:!1}).current;wt.useEffect(()=>{const u=h=>{h.code==="Space"&&!/input|textarea/i.test(h.target.tagName)&&(h.preventDefault(),e.space=!0)},p=h=>{h.code==="Space"&&(e.space=!1)};return window.addEventListener("keydown",u),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",p)}},[e]),wt.useEffect(()=>{const u=t.current,p=h=>{h.preventDefault();const g=u.getBoundingClientRect(),v=h.clientX-g.left,m=h.clientY-g.top,d=gi(Je.scale*Math.exp(-h.deltaY*.0012),4,90);Je.tx=v-(v-Je.tx)*(d/Je.scale),Je.ty=m-(m-Je.ty)*(d/Je.scale),Je.scale=d};return u.addEventListener("wheel",p,{passive:!1}),Er.snapshot=()=>u.toDataURL("image/png"),()=>{u.removeEventListener("wheel",p),Er.snapshot=null}},[]),wt.useEffect(()=>{const u=t.current,p=u.getContext("2d"),h=new ResizeObserver(()=>{const m=Math.min(devicePixelRatio,2);u.width=u.clientWidth*m,u.height=u.clientHeight*m,p.setTransform(m,0,0,m,0,0),Je.scale||(Je.scale=Math.min(u.clientWidth,u.clientHeight)/(di+8),Je.tx=(u.clientWidth-di*Je.scale)/2,Je.ty=(u.clientHeight-di*Je.scale)/2)});h.observe(u);let g;const v=()=>{g=requestAnimationFrame(v),$S(p,u,e)};return v(),()=>{h.disconnect(),cancelAnimationFrame(g)}},[e]);const n=u=>{const p=t.current.getBoundingClientRect();return[(u.clientX-p.left-Je.tx)/Je.scale,(u.clientY-p.top-Je.ty)/Je.scale]},i=u=>[so(u[0]),so(u[1])],r=(u,p)=>{const h=Cv(p.furniture);for(let g=h.length-1;g>=0;g--){const v=h[g],m=Yo(v),d=To(v.pos[0],v.pos[1],m.w,m.d,v.rotDeg*Math.PI/180);if(jc(u,d))return v}return null},s=(u,p,h=.6)=>{let g=null;for(const v of p.walls){const m=bS(u,v.a,v.b);m<h&&(!g||m<g.d)&&(g={w:v,d:m})}return(g==null?void 0:g.w)??null},o=(u,p)=>{for(const h of p.walls)for(const g of h.openings||[])if(xr(u,PS(h,g))<1)return{w:h,op:g};return null},a=(u,p)=>{let h=Math.atan2(p[1]-u[1],p[0]-u[0]);const g=Math.round(h/(Math.PI/4))*(Math.PI/4);let v=Math.abs(h-g);v=Math.min(v,Rs-v),v<.12&&(h=g);const m=Math.max(.5,so(Math.hypot(p[0]-u[0],p[1]-u[1]),.5));return[Tf(u[0]+Math.cos(h)*m),Tf(u[1]+Math.sin(h)*m)]},l=u=>{if(t.current.setPointerCapture(u.pointerId),e.pointers.set(u.pointerId,[u.clientX,u.clientY]),e.pointers.size===2){const[v,m]=[...e.pointers.values()];e.pinch={d:Math.hypot(v[0]-m[0],v[1]-m[1]),mid:[(v[0]+m[0])/2,(v[1]+m[1])/2],scale:Je.scale,tx:Je.tx,ty:Je.ty},e.draft=e.drag=e.slide=null;return}if(u.button===1){e.pan={x:u.clientX,y:u.clientY,tx:Je.tx,ty:Je.ty};return}if(e.space){e.pan={x:u.clientX,y:u.clientY,tx:Je.tx,ty:Je.ty};return}const h=Oe.getState(),g=n(u);if(h.tool==="select"){const v=r(g,h);if(v){h.select({kind:"furniture",id:v.id}),h.commit(),e.drag={id:v.id,off:[g[0]-v.pos[0],g[1]-v.pos[1]],start:v.pos,valid:!0};return}const m=s(g,h);if(m)return h.select({kind:"wall",id:m.id});const d=h.rooms.find(x=>jc(g,x.poly));if(d)return h.select({kind:"room",id:d.id});e.maybePan=!0,e.downPt=[u.clientX,u.clientY];return}if(h.tool==="wall"){const v=i(g);if(e.chainEnd&&xr(v,e.chainStart)<1){e.chainEnd=e.chainStart=null,e.chained=!1,e.draft=null;return}const m=e.chainEnd&&xr(g,e.chainEnd)<2.5?e.chainEnd:v;e.chained||(h.commit(),e.chained=!0,e.chainStart=m),e.chainEnd=null,e.draft={a:m,b:m};return}if(h.tool==="door"||h.tool==="window"){const v=o(g,h);if(v){h.commit(),e.slide={wallId:v.w.id,opId:v.op.id,width:v.op.width};return}const m=s(g,h,1);if(!m)return;const d=h.tool==="door"?{type:"door",width:3,height:6.7}:{type:"window",width:3.5,sill:3,height:3.5},x=zs(m);if(x<d.width+1)return;const _=gi(fp(g,m)-d.width/2,.4,x-d.width-.4);if((m.openings||[]).some(M=>_<M.offset+M.width+.2&&_+d.width+.2>M.offset))return;h.commit();const b=h.addOpening(m.id,{...d,offset:_});e.slide={wallId:m.id,opId:b,width:d.width};return}if(h.tool==="floor"){const v=h.rooms.find(m=>jc(g,m.poly));v&&(h.commit(),h.paintRoom(v.id,h.floorMat),h.select({kind:"room",id:v.id}));return}if(h.tool==="wallpaint"){const v=s(g,h,1);v&&(h.commit(),h.paintWall(v.id,h.wallMat),h.select({kind:"wall",id:v.id}));return}if(h.tool==="erase"){const v=r(g,h);if(v){h.commit(),h.deleteFurniture(v.id),h.select(null);return}const m=o(g,h);if(m){h.commit(),h.deleteOpening(m.w.id,m.op.id);return}const d=s(g,h);d&&(h.commit(),h.deleteWall(d.id),h.select(null));return}if(h.tool==="place"){const v=yn(h.placingId);if(!v)return;const m=i(g);Rf(!!v.rug,v.w,v.d,m,h.placingRot,h.walls,h.furniture,null)&&(h.commit(),h.addFurniture(v,m,h.placingRot))}},c=u=>{if(e.pointers.has(u.pointerId)&&e.pointers.set(u.pointerId,[u.clientX,u.clientY]),e.pinch&&e.pointers.size>=2){const[g,v]=[...e.pointers.values()],m=t.current.getBoundingClientRect(),d=Math.hypot(g[0]-v[0],g[1]-v[1]),x=[(g[0]+v[0])/2-m.left,(g[1]+v[1])/2-m.top],_=gi(e.pinch.scale*d/e.pinch.d,4,90),y=(e.pinch.mid[0]-m.left-e.pinch.tx)/e.pinch.scale,b=(e.pinch.mid[1]-m.top-e.pinch.ty)/e.pinch.scale;Je.scale=_,Je.tx=x[0]-y*_,Je.ty=x[1]-b*_;return}if(e.maybePan)if(Math.hypot(u.clientX-e.downPt[0],u.clientY-e.downPt[1])>4)e.maybePan=!1,e.pan={x:e.downPt[0],y:e.downPt[1],tx:Je.tx,ty:Je.ty},t.current.style.cursor="grabbing";else return;if(e.pan){Je.tx=e.pan.tx+u.clientX-e.pan.x,Je.ty=e.pan.ty+u.clientY-e.pan.y;return}const p=Oe.getState(),h=n(u);if(e.drag){const g=p.furniture.find(x=>x.id===e.drag.id);if(!g){e.drag=null;return}let v=[so(h[0]-e.drag.off[0]),so(h[1]-e.drag.off[1])];const m=Yo(g);v=US(v,g.rotDeg,m.w,m.d,p.walls);const d=yn(g.itemId);e.drag.valid=Rf(!!(d!=null&&d.rug),m.w,m.d,v,g.rotDeg,p.walls,p.furniture,g.id),p.updateFurniture(g.id,{pos:v});return}if(e.slide){const g=p.walls.find(d=>d.id===e.slide.wallId);if(!g){e.slide=null;return}const v=zs(g),m=gi(fp(h,g)-e.slide.width/2,.4,v-e.slide.width-.4);p.moveOpening(g.id,e.slide.opId,m);return}if(e.draft){e.draft.b=a(e.draft.a,h);return}p.tool==="place"&&(e.ghost=i(h))},f=u=>{if(e.pointers.delete(u.pointerId),e.pinch&&e.pointers.size<2&&(e.pinch=null),e.pan){e.pan=null,t.current.style.cursor="";return}const p=Oe.getState();if(e.draft&&p.tool==="wall"){const{a:h,b:g}=e.draft;xr(h,g)>=1&&(p.addWall(h,g),e.chainEnd=g),e.draft=null;return}if(e.drag){e.drag.valid||p.updateFurniture(e.drag.id,{pos:e.drag.start}),e.drag=null;return}e.slide=null,e.maybePan&&(e.maybePan=!1,p.select(null))};return O.jsx("canvas",{ref:t,className:"plan",onPointerDown:l,onPointerMove:c,onPointerUp:f,onPointerCancel:f,onContextMenu:u=>{u.preventDefault(),e.draft=null,e.chainEnd=null,e.chained=!1}})}function $S(t,e,n){var c,f,u,p;const i=Oe.getState(),r=e.clientWidth,s=e.clientHeight;if(!r||!s)return;const o=Je.scale,a=h=>h*o+Je.tx,l=h=>h*o+Je.ty;t.fillStyle=kS,t.fillRect(0,0,r,s),t.lineWidth=1;for(let h=0;h<=di;h++)t.strokeStyle=h%5===0?BS:zS,t.beginPath(),t.moveTo(a(h),l(0)),t.lineTo(a(h),l(di)),t.stroke(),t.beginPath(),t.moveTo(a(0),l(h)),t.lineTo(a(di),l(h)),t.stroke();t.strokeStyle=HS,t.strokeRect(a(0),l(0),di*o,di*o),t.fillStyle=Ta,t.font='9px "DM Mono", monospace',t.textAlign="center";for(let h=0;h<=di;h+=5)t.fillText(h,a(h),l(0)-6),t.textAlign="right",t.fillText(h,a(0)-6,l(h)+3),t.textAlign="center";t.save(),t.translate(r-28,34),t.strokeStyle=Ta,t.beginPath(),t.arc(0,0,11,0,Rs),t.stroke(),t.fillStyle=Ai,t.beginPath(),t.moveTo(0,-8),t.lineTo(4,4),t.lineTo(-4,4),t.closePath(),t.fill(),t.fillStyle=Ta,t.fillText("N",0,22),t.restore();for(const h of i.rooms){const g=Id(i.roomMaterials[h.id]);t.beginPath(),h.poly.forEach(([d,x],_)=>_?t.lineTo(a(d),l(x)):t.moveTo(a(d),l(x))),t.closePath(),t.fillStyle=g?g.base+"4D":"rgba(156,175,151,.12)",t.fill();const v=h.poly.reduce((d,x)=>d+x[0],0)/h.poly.length,m=h.poly.reduce((d,x)=>d+x[1],0)/h.poly.length;t.fillStyle=WS,t.font='500 11px "DM Mono", monospace',t.fillText(`${Math.round(h.area)} sq ft`,a(v),l(m)),((c=i.selected)==null?void 0:c.kind)==="room"&&i.selected.id===h.id&&(t.strokeStyle=Ai,t.lineWidth=2,t.setLineDash([6,4]),t.stroke(),t.setLineDash([]))}for(const h of i.walls){const g=Ud(i.wallMaterials[h.id]),v=((f=i.selected)==null?void 0:f.kind)==="wall"&&i.selected.id===h.id;t.lineCap="round",v&&(t.shadowColor=Ai,t.shadowBlur=8);for(const m of lc(h,{forCollision:!0})){const d=Math.cos(m.rotY),x=-Math.sin(m.rotY),_=d*m.sx/2,y=x*m.sx/2;t.strokeStyle=GS,t.lineWidth=(h.thickness??.5)*o+3,t.beginPath(),t.moveTo(a(m.cx-_),l(m.cz-y)),t.lineTo(a(m.cx+_),l(m.cz+y)),t.stroke(),t.strokeStyle=g?g.color:VS,t.lineWidth=(h.thickness??.5)*o,t.beginPath(),t.moveTo(a(m.cx-_),l(m.cz-y)),t.lineTo(a(m.cx+_),l(m.cz+y)),t.stroke()}t.shadowBlur=0;for(const m of h.openings||[]){const d=zs(h),x=(h.b[0]-h.a[0])/d,_=(h.b[1]-h.a[1])/d,y=-_,b=x,M=h.a[0]+x*m.offset,T=h.a[1]+_*m.offset;if(m.type==="door"){const k=M+y*m.width,E=T+b*m.width;t.strokeStyle=Ai,t.lineWidth=1.5,t.beginPath(),t.moveTo(a(M),l(T)),t.lineTo(a(k),l(E)),t.stroke(),t.setLineDash([3,3]),t.beginPath(),t.arc(a(M),l(T),m.width*o,Math.atan2(b,y),Math.atan2(_,x)),t.stroke(),t.setLineDash([])}else{t.strokeStyle=XS,t.lineWidth=1.5;for(const k of[-.16,0,.16])t.beginPath(),t.moveTo(a(M+y*k),l(T+b*k)),t.lineTo(a(M+x*m.width+y*k),l(T+_*m.width+b*k)),t.stroke()}}}for(const h of Cv(i.furniture)){const g=yn(h.itemId);if(!g)continue;const v=((u=i.selected)==null?void 0:u.kind)==="furniture"&&i.selected.id===h.id,m=((p=n.drag)==null?void 0:p.id)===h.id;t.save(),t.translate(a(h.pos[0]),l(h.pos[1])),t.rotate(-h.rotDeg*Math.PI/180),t.scale(h.sw??1,h.sd??1),m&&!n.drag.valid&&(t.globalAlpha=.55);for(const d of g.parts)t.fillStyle=OS(h.tint||g.color,h.tint?0:d.sh),t.fillRect((d.dx-d.w/2)*o,(d.dz-d.d/2)*o,d.w*o,d.d*o),t.strokeStyle="rgba(62,55,45,.5)",t.lineWidth=1,t.strokeRect((d.dx-d.w/2)*o,(d.dz-d.d/2)*o,d.w*o,d.d*o);if(t.globalAlpha=1,v&&(t.strokeStyle=Ai,t.lineWidth=1.5,t.setLineDash([5,4]),t.strokeRect(-h.w/2*o-4,-h.d/2*o-4,h.w*o+8,h.d*o+8),t.setLineDash([])),t.restore(),v){const d=Yo(h);t.fillStyle=gp,t.font='700 10px "Karla", sans-serif',t.textAlign="center",t.fillText(g.name.toUpperCase(),a(h.pos[0]),l(h.pos[1])-d.d/2*o-12),t.fillStyle=Ta,t.font='500 10px "DM Mono", monospace',t.fillText(mn(d.w),a(h.pos[0]),l(h.pos[1])+d.d/2*o+14),t.save(),t.translate(a(h.pos[0])+d.w/2*o+16,l(h.pos[1])),t.rotate(Math.PI/2),t.fillText(mn(d.d),0,0),t.restore()}}if(n.draft&&i.tool==="wall"){const{a:h,b:g}=n.draft;t.strokeStyle=Ai,t.lineWidth=2,t.setLineDash([8,5]),t.beginPath(),t.moveTo(a(h[0]),l(h[1])),t.lineTo(a(g[0]),l(g[1])),t.stroke(),t.setLineDash([]),t.fillStyle=Ai,t.fillRect(a(h[0])-3,l(h[1])-3,6,6);const v=xr(h,g);v>=1&&(t.fillStyle=gp,t.font='500 11px "DM Mono", monospace',t.fillText(mn(v),(a(h[0])+a(g[0]))/2,(l(h[1])+l(g[1]))/2-10)),n.chainStart&&(t.strokeStyle=Ai,t.beginPath(),t.arc(a(n.chainStart[0]),l(n.chainStart[1]),7,0,Rs),t.stroke())}if(i.tool==="place"&&i.placingId){const h=yn(i.placingId);if(h){const g=Rf(!!h.rug,h.w,h.d,n.ghost,i.placingRot,i.walls,i.furniture,null),v=To(n.ghost[0],n.ghost[1],h.w,h.d,i.placingRot*Math.PI/180);t.beginPath(),v.forEach(([m,d],x)=>x?t.lineTo(a(m),l(d)):t.moveTo(a(m),l(d))),t.closePath(),t.fillStyle=g?vp+"33":_p+"33",t.strokeStyle=g?vp:_p,t.lineWidth=2,t.fill(),t.stroke(),t.fillStyle=g?jS:YS,t.font='500 10px "DM Mono", monospace',t.fillText(`${mn(h.w)} × ${mn(h.d)}`,a(n.ghost[0]),l(n.ghost[1])+4)}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="160",Hr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KS=0,xp=1,ZS=2,Rv=1,bv=2,ci=3,er=0,ln=1,hi=2,$i=0,bs=1,yp=2,Sp=3,Mp=4,JS=5,pr=100,QS=101,eM=102,Ep=103,wp=104,tM=200,nM=201,iM=202,rM=203,bf=204,Pf=205,sM=206,oM=207,aM=208,lM=209,cM=210,uM=211,fM=212,dM=213,hM=214,pM=0,mM=1,gM=2,kl=3,vM=4,_M=5,xM=6,yM=7,Pv=0,SM=1,MM=2,Ki=0,EM=1,wM=2,TM=3,Lv=4,AM=5,CM=6,Dv=300,Bs=301,Hs=302,Lf=303,Df=304,cc=306,zl=1e3,Vn=1001,Nf=1002,Zt=1003,Tp=1004,$c=1005,Cn=1006,RM=1007,qo=1008,Zi=1009,bM=1010,PM=1011,Od=1012,Nv=1013,zi=1014,Bi=1015,$o=1016,Iv=1017,Uv=1018,wr=1020,LM=1021,Gn=1023,DM=1024,NM=1025,Tr=1026,Vs=1027,IM=1028,Fv=1029,UM=1030,Ov=1031,kv=1033,Kc=33776,Zc=33777,Jc=33778,Qc=33779,Ap=35840,Cp=35841,Rp=35842,bp=35843,zv=36196,Pp=37492,Lp=37496,Dp=37808,Np=37809,Ip=37810,Up=37811,Fp=37812,Op=37813,kp=37814,zp=37815,Bp=37816,Hp=37817,Vp=37818,Gp=37819,Wp=37820,Xp=37821,eu=36492,jp=36494,Yp=36495,FM=36283,qp=36284,$p=36285,Kp=36286,Bv=3e3,Ar=3001,OM=3200,kM=3201,Hv=0,zM=1,bn="",Nt="srgb",Ei="srgb-linear",kd="display-p3",uc="display-p3-linear",Bl="linear",at="srgb",Hl="rec709",Vl="p3",Gr=7680,Zp=519,BM=512,HM=513,VM=514,Vv=515,GM=516,WM=517,XM=518,jM=519,Jp=35044,Qp="300 es",If=1035,vi=2e3,Gl=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Uf=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function YM(t,e){return(t%e+e)%e}function tu(t,e,n){return(1-n)*t+n*e}function em(t){return(t&t-1)===0&&t!==0}function Ff(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qM={DEG2RAD:fl};class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],p=i[2],h=i[5],g=i[8],v=r[0],m=r[3],d=r[6],x=r[1],_=r[4],y=r[7],b=r[2],M=r[5],T=r[8];return s[0]=o*v+a*x+l*b,s[3]=o*m+a*_+l*M,s[6]=o*d+a*y+l*T,s[1]=c*v+f*x+u*b,s[4]=c*m+f*_+u*M,s[7]=c*d+f*y+u*T,s[2]=p*v+h*x+g*b,s[5]=p*m+h*_+g*M,s[8]=p*d+h*y+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,p=a*l-f*s,h=c*s-o*l,g=n*u+i*p+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=p*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nu.makeScale(e,n)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new Ye;function Gv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $M(){const t=Wl("canvas");return t.style.display="block",t}const tm={};function Ao(t){t in tm||(tm[t]=!0,console.warn(t))}const nm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Ei]:{transfer:Bl,primaries:Hl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:at,primaries:Hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uc]:{transfer:Bl,primaries:Vl,toReference:t=>t.applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm)},[kd]:{transfer:at,primaries:Vl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm).convertLinearToSRGB()}},KM=new Set([Ei,uc]),it={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!KM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Aa[e].toReference,r=Aa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Aa[t].primaries},getTransfer:function(t){return t===bn?Bl:Aa[t].transfer}};function Ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class Wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Wl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ps(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ps(n[i]/255)*255):n[i]=Ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class Xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ys(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ru(r[o].image)):s.push(ru(r[o]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Wv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JM=0;class cn extends zr{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=qo,a=Gn,l=Zi,c=cn.DEFAULT_ANISOTROPY,f=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ys(),this.name="",this.source=new Xv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ar?Nt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Ar:Bv}set encoding(e){Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Nt:bn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Dv;cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],p=l[1],h=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(h+1)/2,b=(d+1)/2,M=(f+p)/4,T=(u+v)/4,k=(g+m)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=T/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=k/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=k/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-f)*(p-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(p-f)/x,this.w=Math.acos((c+h+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Nt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends QM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e1 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const p=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(u!==v||l!==p||c!==h||f!==g){let m=1-a;const d=l*p+c*h+f*g+u*v,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const b=Math.sqrt(_),M=Math.atan2(b,d*x);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const y=a*x;if(l=l*m+p*y,c=c*m+h*y,f=f*m+g*y,u=u*m+v*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],p=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+f*u+l*h-c*p,e[n+1]=l*g+f*p+c*u-a*h,e[n+2]=c*g+f*h+a*p-l*u,e[n+3]=f*g-a*u-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),p=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*f*u+c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u-p*h*g;break;case"YXZ":this._x=p*f*u+c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u+p*h*g;break;case"ZXY":this._x=p*f*u-c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u-p*h*g;break;case"ZYX":this._x=p*f*u-c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u+p*h*g;break;case"YZX":this._x=p*f*u+c*h*g,this._y=c*h*u+p*f*g,this._z=c*f*g-p*h*u,this._w=c*f*u-p*h*g;break;case"XZY":this._x=p*f*u-c*h*g,this._y=c*h*u-p*f*g,this._z=c*f*g+p*h*u,this._w=c*f*u+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],p=i+a+u;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>u){const h=2*Math.sqrt(1+i-a-u);this._w=(f-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>u){const h=2*Math.sqrt(1+a-i-u);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+u-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-n)*f)/c,p=Math.sin(n*f)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*f,this.y=i+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new U,rm=new Nr;class sa{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ra.subVectors(this.max,ao),Xr.subVectors(e.a,ao),jr.subVectors(e.b,ao),Yr.subVectors(e.c,ao),Ci.subVectors(jr,Xr),Ri.subVectors(Yr,jr),or.subVectors(Xr,Yr);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-or.z,or.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,or.z,0,-or.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-or.y,or.x,0];return!ou(n,Xr,jr,Yr,Ra)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,Xr,jr,Yr,Ra))?!1:(ba.crossVectors(Ci,Ri),n=[ba.x,ba.y,ba.z],ou(n,Xr,jr,Yr,Ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,Ca=new sa,Xr=new U,jr=new U,Yr=new U,Ci=new U,Ri=new U,or=new U,ao=new U,Ra=new U,ba=new U,ar=new U;function ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const t1=new sa,lo=new U,au=new U;class fc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):t1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const n=lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(au)),this.expandByPoint(lo.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new U,lu=new U,Pa=new U,bi=new U,cu=new U,La=new U,uu=new U;class zd{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=bi.dot(this.direction),l=-bi.dot(Pa),c=bi.lengthSq(),f=Math.abs(1-o*o);let u,p,h,g;if(f>0)if(u=o*l-a,p=o*a-l,g=s*f,u>=0)if(p>=-g)if(p<=g){const v=1/f;u*=v,p*=v,h=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),h=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),h=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),h=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),h=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),h=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(lu).addScaledVector(Pa,p),h}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),La.subVectors(i,e),uu.crossVectors(cu,La);let o=this.direction.dot(uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(bi,La));if(l<0)return null;const c=a*this.direction.dot(cu.cross(bi));if(c<0||l+c>o)return null;const f=-a*bi.dot(uu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,f,u,p,h,g,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,u,p,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,f,u,p,h,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=p,d[3]=h,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=o*f,h=o*u,g=a*f,v=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=h+g*c,n[5]=p-v*c,n[9]=-a*l,n[2]=v-p*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*f,h=l*u,g=c*f,v=c*u;n[0]=p+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=h*a-g,n[6]=v+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*f,h=l*u,g=c*f,v=c*u;n[0]=p-v*a,n[4]=-o*u,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*f,n[9]=v-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*f,h=o*u,g=a*f,v=a*u;n[0]=l*f,n[4]=g*c-h,n[8]=p*c+v,n[1]=l*u,n[5]=v*c+p,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=v-p*u,n[8]=g*u+h,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=h*u+g,n[10]=p-v*u}else if(e.order==="XZY"){const p=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=p*u+v,n[5]=o*f,n[9]=h*u-g,n[2]=g*u-h,n[6]=a*f,n[10]=v*u+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n1,e,i1)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Pi.crossVectors(i,dn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Pi.crossVectors(i,dn)),Pi.normalize(),Da.crossVectors(dn,Pi),r[0]=Pi.x,r[4]=Da.x,r[8]=dn.x,r[1]=Pi.y,r[5]=Da.y,r[9]=dn.y,r[2]=Pi.z,r[6]=Da.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],p=i[9],h=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],_=i[7],y=i[11],b=i[15],M=r[0],T=r[4],k=r[8],E=r[12],A=r[1],W=r[5],Z=r[9],ee=r[13],F=r[2],X=r[6],K=r[10],Q=r[14],D=r[3],N=r[7],z=r[11],$=r[15];return s[0]=o*M+a*A+l*F+c*D,s[4]=o*T+a*W+l*X+c*N,s[8]=o*k+a*Z+l*K+c*z,s[12]=o*E+a*ee+l*Q+c*$,s[1]=f*M+u*A+p*F+h*D,s[5]=f*T+u*W+p*X+h*N,s[9]=f*k+u*Z+p*K+h*z,s[13]=f*E+u*ee+p*Q+h*$,s[2]=g*M+v*A+m*F+d*D,s[6]=g*T+v*W+m*X+d*N,s[10]=g*k+v*Z+m*K+d*z,s[14]=g*E+v*ee+m*Q+d*$,s[3]=x*M+_*A+y*F+b*D,s[7]=x*T+_*W+y*X+b*N,s[11]=x*k+_*Z+y*K+b*z,s[15]=x*E+_*ee+y*Q+b*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],p=e[10],h=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*p+i*c*p+r*a*h-i*l*h)+v*(+n*l*h-n*c*p+s*o*p-r*o*h+r*c*f-s*l*f)+m*(+n*c*u-n*a*h-s*o*u+i*o*h+s*a*f-i*c*f)+d*(-r*a*f-n*l*u+n*a*p+r*o*u-i*o*p+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],p=e[10],h=e[11],g=e[12],v=e[13],m=e[14],d=e[15],x=u*m*c-v*p*c+v*l*h-a*m*h-u*l*d+a*p*d,_=g*p*c-f*m*c-g*l*h+o*m*h+f*l*d-o*p*d,y=f*v*c-g*u*c+g*a*h-o*v*h-f*a*d+o*u*d,b=g*u*l-f*v*l-g*a*p+o*v*p+f*a*m-o*u*m,M=n*x+i*_+r*y+s*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(v*p*s-u*m*s-v*r*h+i*m*h+u*r*d-i*p*d)*T,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*T,e[3]=(u*l*s-a*p*s-u*r*c+i*p*c+a*r*h-i*l*h)*T,e[4]=_*T,e[5]=(f*m*s-g*p*s+g*r*h-n*m*h-f*r*d+n*p*d)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*T,e[7]=(o*p*s-f*l*s+f*r*c-n*p*c-o*r*h+n*l*h)*T,e[8]=y*T,e[9]=(g*u*s-f*v*s-g*i*h+n*v*h+f*i*d-n*u*d)*T,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*T,e[11]=(f*a*s-o*u*s-f*i*c+n*u*c+o*i*h-n*a*h)*T,e[12]=b*T,e[13]=(f*v*r-g*u*r+g*i*p-n*v*p-f*i*m+n*u*m)*T,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*T,e[15]=(o*u*r-f*a*r+f*i*l-n*u*l-o*i*p+n*a*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,u=a+a,p=s*c,h=s*f,g=s*u,v=o*f,m=o*u,d=a*u,x=l*c,_=l*f,y=l*u,b=i.x,M=i.y,T=i.z;return r[0]=(1-(v+d))*b,r[1]=(h+y)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(h-y)*M,r[5]=(1-(p+d))*M,r[6]=(m+x)*M,r[7]=0,r[8]=(g+_)*T,r[9]=(m-x)*T,r[10]=(1-(p+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,f=1/o,u=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let h,g;if(a===vi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Gl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),f=1/(i-r),u=1/(o-s),p=(n+e)*c,h=(i+r)*f;let g,v;if(a===vi)g=(o+s)*u,v=-2*u;else if(a===Gl)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new U,Fn=new St,n1=new U(0,0,0),i1=new U(1,1,1),Pi=new U,Da=new U,dn=new U,sm=new St,om=new Nr;class dc{constructor(e=0,n=0,i=0,r=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],p=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dc.DEFAULT_ORDER="XYZ";class Yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r1=0;const am=new U,$r=new Nr,oi=new St,Na=new U,co=new U,s1=new U,o1=new Nr,lm=new U(1,0,0),cm=new U(0,1,0),um=new U(0,0,1),a1={type:"added"},l1={type:"removed"};class Ft extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,n=new dc,i=new Nr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ye}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(co,Na,this.up):oi.lookAt(Na,co,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(oi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(l1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),p=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new U,ai=new U,fu=new U,li=new U,Kr=new U,Zr=new U,fm=new U,du=new U,hu=new U,pu=new U;let Ia=!1;class Hn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ai.subVectors(i,n),fu.subVectors(e,n);const o=On.dot(On),a=On.dot(ai),l=On.dot(fu),c=ai.dot(ai),f=ai.dot(fu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,h=(c*l-a*f)*p,g=(o*f-a*l)*p;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ai.subVectors(e,n),On.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Zr.subVectors(s,i),du.subVectors(e,i);const l=Kr.dot(du),c=Zr.dot(du);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const f=Kr.dot(hu),u=Zr.dot(hu);if(f>=0&&u<=f)return n.copy(r);const p=l*u-f*c;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Kr,o);pu.subVectors(e,s);const h=Kr.dot(pu),g=Zr.dot(pu);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Zr,a);const m=f*g-h*u;if(m<=0&&u-f>=0&&h-g>=0)return fm.subVectors(s,r),a=(u-f)/(u-f+(h-g)),n.copy(r).addScaledVector(fm,a);const d=1/(m+v+p);return o=v*d,a=p*d,n.copy(i).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=YM(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=mu(o,s,e+1/3),this.g=mu(o,s,e),this.b=mu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return it.fromWorkingColorSpace(jt.copy(this),e),Math.round(zt(jt.r*255,0,255))*65536+Math.round(zt(jt.g*255,0,255))*256+Math.round(zt(jt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Nt){it.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Ua);const i=tu(Li.h,Ua.h,n),r=tu(Li.s,Ua.s,n),s=tu(Li.l,Ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new qe;qe.NAMES=qv;let c1=0;class qs extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=bs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Pf,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $v extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,Fa=new he;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class Kv extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zv extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let u1=0;const wn=new St,gu=new Ft,Jr=new U,hn=new sa,uo=new sa,Lt=new U;class ti extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?Zv:Kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,uo.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,uo.max),hn.expandByPoint(Lt)):(hn.expandByPoint(uo.min),hn.expandByPoint(uo.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Lt.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),Lt.add(Jr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let A=0;A<a;A++)c[A]=new U,f[A]=new U;const u=new U,p=new U,h=new U,g=new he,v=new he,m=new he,d=new U,x=new U;function _(A,W,Z){u.fromArray(r,A*3),p.fromArray(r,W*3),h.fromArray(r,Z*3),g.fromArray(o,A*2),v.fromArray(o,W*2),m.fromArray(o,Z*2),p.sub(u),h.sub(u),v.sub(g),m.sub(g);const ee=1/(v.x*m.y-m.x*v.y);isFinite(ee)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(h,-v.y).multiplyScalar(ee),x.copy(h).multiplyScalar(v.x).addScaledVector(p,-m.x).multiplyScalar(ee),c[A].add(d),c[W].add(d),c[Z].add(d),f[A].add(x),f[W].add(x),f[Z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,W=y.length;A<W;++A){const Z=y[A],ee=Z.start,F=Z.count;for(let X=ee,K=ee+F;X<K;X+=3)_(i[X+0],i[X+1],i[X+2])}const b=new U,M=new U,T=new U,k=new U;function E(A){T.fromArray(s,A*3),k.copy(T);const W=c[A];b.copy(W),b.sub(T.multiplyScalar(T.dot(W))).normalize(),M.crossVectors(k,W);const ee=M.dot(f[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=ee}for(let A=0,W=y.length;A<W;++A){const Z=y[A],ee=Z.start,F=Z.count;for(let X=ee,K=ee+F;X<K;X+=3)E(i[X+0]),E(i[X+1]),E(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,f=new U,u=new U;if(e)for(let p=0,h=e.count;p<h;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=n.count;p<h;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,p=new c.constructor(l.length*f);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*f;for(let d=0;d<f;d++)p[g++]=c[h++]}return new ei(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const p=c[f],h=e(p,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,p=c.length;u<p;u++){const h=c[u];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let p=0,h=u.length;p<h;p++)f.push(u[p].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new St,lr=new zd,Oa=new fc,hm=new U,Qr=new U,es=new U,ts=new U,vu=new U,ka=new U,za=new he,Ba=new he,Ha=new he,pm=new U,mm=new U,gm=new U,Va=new U,Ga=new U;class gn extends Ft{constructor(e=new ti,n=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(vu.fromBufferAttribute(u,e),o?ka.addScaledVector(vu,f):ka.addScaledVector(vu.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Oa.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Oa,hm)===null||lr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),lr.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=o[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,b=_;y<b;y+=3){const M=a.getX(y),T=a.getX(y+1),k=a.getX(y+2);r=Wa(this,d,e,i,c,f,u,M,T,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Wa(this,o,e,i,c,f,u,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],d=o[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,b=_;y<b;y+=3){const M=y,T=y+1,k=y+2;r=Wa(this,d,e,i,c,f,u,M,T,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,d=v;m<d;m+=3){const x=m,_=m+1,y=m+2;r=Wa(this,o,e,i,c,f,u,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function f1(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===er,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qr),t.getVertexPosition(l,es),t.getVertexPosition(c,ts);const f=f1(t,e,n,i,Qr,es,ts,Va);if(f){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),f.uv=Hn.getInterpolation(Va,Qr,es,ts,za,Ba,Ha,new he)),s&&(za.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),f.uv1=Hn.getInterpolation(Va,Qr,es,ts,za,Ba,Ha,new he),f.uv2=f.uv1),o&&(pm.fromBufferAttribute(o,a),mm.fromBufferAttribute(o,l),gm.fromBufferAttribute(o,c),f.normal=Hn.getInterpolation(Va,Qr,es,ts,pm,mm,gm,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Hn.getNormal(Qr,es,ts,u.normal),f.face=u}return f}class Ir extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let p=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(u,2));function g(v,m,d,x,_,y,b,M,T,k,E){const A=y/T,W=b/k,Z=y/2,ee=b/2,F=M/2,X=T+1,K=k+1;let Q=0,D=0;const N=new U;for(let z=0;z<K;z++){const $=z*W-ee;for(let q=0;q<X;q++){const I=q*A-Z;N[v]=I*x,N[m]=$*_,N[d]=F,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[d]=M>0?1:-1,f.push(N.x,N.y,N.z),u.push(q/T),u.push(1-z/k),Q+=1}}for(let z=0;z<k;z++)for(let $=0;$<T;$++){const q=p+$+X*z,I=p+$+X*(z+1),J=p+($+1)+X*(z+1),ce=p+($+1)+X*z;l.push(q,I,ce),l.push(I,J,ce),D+=6}a.addGroup(h,D,E),h+=D,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function d1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jv(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const h1={clone:Gs,merge:$t};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=d1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qv extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends Qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class g1 extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Rn(ns,is,e,n);s.layers=this.layers,this.add(s);const o=new Rn(ns,is,e,n);o.layers=this.layers,this.add(o);const a=new Rn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new Rn(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new Rn(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,p,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class e_ extends cn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v1 extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ar?Nt:bn),this.texture=new e_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ir(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:$i});s.uniforms.tEquirect.value=n;const o=new gn(r,s),a=n.minFilter;return n.minFilter===qo&&(n.minFilter=Cn),new g1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new U,_1=new U,x1=new Ye;class Ii{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(_1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||x1.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new fc,Xa=new U;class Bd{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],u=r[6],p=r[7],h=r[8],g=r[9],v=r[10],m=r[11],d=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,p-c,m-h,y-d).normalize(),i[1].setComponents(l+s,p+c,m+h,y+d).normalize(),i[2].setComponents(l+o,p+f,m+g,y+x).normalize(),i[3].setComponents(l-o,p-f,m-g,y-x).normalize(),i[4].setComponents(l-a,p-u,m-v,y-_).normalize(),n===vi)i[5].setComponents(l+a,p+u,m+v,y+_).normalize();else if(n===Gl)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function y1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const u=c.array,p=c.usage,h=u.byteLength,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,u,p),c.onUploadCallback();let v;if(u instanceof Float32Array)v=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=t.SHORT;else if(u instanceof Uint32Array)v=t.UNSIGNED_INT;else if(u instanceof Int32Array)v=t.INT;else if(u instanceof Int8Array)v=t.BYTE;else if(u instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,f,u){const p=f.array,h=f._updateRange,g=f.updateRanges;if(t.bindBuffer(u,c),h.count===-1&&g.length===0&&t.bufferSubData(u,0,p),g.length!==0){for(let v=0,m=g.length;v<m;v++){const d=g[v];n?t.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}h.count!==-1&&(n?t.bufferSubData(u,h.offset*p.BYTES_PER_ELEMENT,p,h.offset,h.count):t.bufferSubData(u,h.offset*p.BYTES_PER_ELEMENT,p.subarray(h.offset,h.offset+h.count)),h.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,r(c,f));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,f),u.version=c.version}}return{get:o,remove:a,update:l}}class Ko extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,p=n/l,h=[],g=[],v=[],m=[];for(let d=0;d<f;d++){const x=d*p-o;for(let _=0;_<c;_++){const y=_*u-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const _=x+c*d,y=x+c*(d+1),b=x+1+c*(d+1),M=x+1+c*d;h.push(_,y,M),h.push(y,b,M)}this.setIndex(h),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
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
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,U1=`#ifdef USE_BUMPMAP
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,W1=`#define PI 3.141592653589793
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
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Q1=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
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
}`,cE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,pE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
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
#endif`,yE=`struct PhysicalMaterial {
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
}`,SE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
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
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LE=`#if defined( USE_POINTS_UV )
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
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
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
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sw=`float getShadowMask() {
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
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cw=`#ifdef USE_SKINNING
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
#endif`,uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hw=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sw=`uniform sampler2D t2D;
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
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`#include <common>
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
}`,Cw=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Rw=`#define DISTANCE
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
}`,bw=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
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
}`,Uw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fw=`#define LAMBERT
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
}`,Ow=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kw=`#define MATCAP
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
}`,zw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bw=`#define NORMAL
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
}`,Hw=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vw=`#define PHONG
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
}`,Gw=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ww=`#define STANDARD
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
}`,Xw=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jw=`#define TOON
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
}`,Yw=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qw=`uniform float size;
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
}`,$w=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Zw=`uniform vec3 color;
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
}`,Jw=`uniform float rotation;
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
}`,Qw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:S1,alphahash_pars_fragment:M1,alphamap_fragment:E1,alphamap_pars_fragment:w1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:C1,aomap_pars_fragment:R1,batching_pars_vertex:b1,batching_vertex:P1,begin_vertex:L1,beginnormal_vertex:D1,bsdfs:N1,iridescence_fragment:I1,bumpmap_pars_fragment:U1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:k1,clipping_planes_vertex:z1,color_fragment:B1,color_pars_fragment:H1,color_pars_vertex:V1,color_vertex:G1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:j1,displacementmap_pars_vertex:Y1,displacementmap_vertex:q1,emissivemap_fragment:$1,emissivemap_pars_fragment:K1,colorspace_fragment:Z1,colorspace_pars_fragment:J1,envmap_fragment:Q1,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:pE,envmap_vertex:iE,fog_vertex:rE,fog_pars_vertex:sE,fog_fragment:oE,fog_pars_fragment:aE,gradientmap_pars_fragment:lE,lightmap_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:fE,lights_lambert_pars_fragment:dE,lights_pars_begin:hE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:_E,lights_physical_fragment:xE,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:EE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:CE,map_fragment:RE,map_pars_fragment:bE,map_particle_fragment:PE,map_particle_pars_fragment:LE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:NE,morphcolor_vertex:IE,morphnormal_vertex:UE,morphtarget_pars_vertex:FE,morphtarget_vertex:OE,normal_fragment_begin:kE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:YE,opaque_fragment:qE,packing:$E,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:JE,dithering_pars_fragment:QE,roughnessmap_fragment:ew,roughnessmap_pars_fragment:tw,shadowmap_pars_fragment:nw,shadowmap_pars_vertex:iw,shadowmap_vertex:rw,shadowmask_pars_fragment:sw,skinbase_vertex:ow,skinning_pars_vertex:aw,skinning_vertex:lw,skinnormal_vertex:cw,specularmap_fragment:uw,specularmap_pars_fragment:fw,tonemapping_fragment:dw,tonemapping_pars_fragment:hw,transmission_fragment:pw,transmission_pars_fragment:mw,uv_pars_fragment:gw,uv_pars_vertex:vw,uv_vertex:_w,worldpos_vertex:xw,background_vert:yw,background_frag:Sw,backgroundCube_vert:Mw,backgroundCube_frag:Ew,cube_vert:ww,cube_frag:Tw,depth_vert:Aw,depth_frag:Cw,distanceRGBA_vert:Rw,distanceRGBA_frag:bw,equirect_vert:Pw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Nw,meshbasic_vert:Iw,meshbasic_frag:Uw,meshlambert_vert:Fw,meshlambert_frag:Ow,meshmatcap_vert:kw,meshmatcap_frag:zw,meshnormal_vert:Bw,meshnormal_frag:Hw,meshphong_vert:Vw,meshphong_frag:Gw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:jw,meshtoon_frag:Yw,points_vert:qw,points_frag:$w,shadow_vert:Kw,shadow_frag:Zw,sprite_vert:Jw,sprite_frag:Qw},ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Kn={basic:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([ue.lights,ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Kn.physical={uniforms:$t([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ja={r:0,b:0,g:0};function eT(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,f,u=null,p=0,h=null;function g(m,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===cc)?(f===void 0&&(f=new gn(new Ir(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Gs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=it.getTransfer(_.colorSpace)!==at,(u!==_||p!==_.version||h!==t.toneMapping)&&(f.material.needsUpdate=!0,u=_,p=_.version,h=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new gn(new Ko(2,2),new Ur({name:"BackgroundMaterial",uniforms:Gs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,p=_.version,h=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(ja,Jv(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function tT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,f=!1;function u(F,X,K,Q,D){let N=!1;if(o){const z=v(Q,K,X);c!==z&&(c=z,h(c.object)),N=d(F,Q,K,D),N&&x(F,Q,K,D)}else{const z=X.wireframe===!0;(c.geometry!==Q.id||c.program!==K.id||c.wireframe!==z)&&(c.geometry=Q.id,c.program=K.id,c.wireframe=z,N=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,k(F,X,K,Q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,X,K){const Q=K.wireframe===!0;let D=a[F.id];D===void 0&&(D={},a[F.id]=D);let N=D[X.id];N===void 0&&(N={},D[X.id]=N);let z=N[Q];return z===void 0&&(z=m(p()),N[Q]=z),z}function m(F){const X=[],K=[],Q=[];for(let D=0;D<r;D++)X[D]=0,K[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:Q,object:F,attributes:{},index:null}}function d(F,X,K,Q){const D=c.attributes,N=X.attributes;let z=0;const $=K.getAttributes();for(const q in $)if($[q].location>=0){const J=D[q];let ce=N[q];if(ce===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;z++}return c.attributesNum!==z||c.index!==Q}function x(F,X,K,Q){const D={},N=X.attributes;let z=0;const $=K.getAttributes();for(const q in $)if($[q].location>=0){let J=N[q];J===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),D[q]=ce,z++}c.attributes=D,c.attributesNum=z,c.index=Q}function _(){const F=c.newAttributes;for(let X=0,K=F.length;X<K;X++)F[X]=0}function y(F){b(F,0)}function b(F,X){const K=c.newAttributes,Q=c.enabledAttributes,D=c.attributeDivisors;K[F]=1,Q[F]===0&&(t.enableVertexAttribArray(F),Q[F]=1),D[F]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),D[F]=X)}function M(){const F=c.newAttributes,X=c.enabledAttributes;for(let K=0,Q=X.length;K<Q;K++)X[K]!==F[K]&&(t.disableVertexAttribArray(K),X[K]=0)}function T(F,X,K,Q,D,N,z){z===!0?t.vertexAttribIPointer(F,X,K,D,N):t.vertexAttribPointer(F,X,K,Q,D,N)}function k(F,X,K,Q){if(i.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=Q.attributes,N=K.getAttributes(),z=X.defaultAttributeValues;for(const $ in N){const q=N[$];if(q.location>=0){let I=D[$];if(I===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(I=F.instanceColor)),I!==void 0){const J=I.normalized,ce=I.itemSize,pe=n.get(I);if(pe===void 0)continue;const ye=pe.buffer,Ne=pe.type,De=pe.bytesPerElement,Ae=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||I.gpuType===Nv);if(I.isInterleavedBufferAttribute){const Ge=I.data,H=Ge.stride,Ot=I.offset;if(Ge.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)b(q.location+Ce,Ge.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)y(q.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ce=0;Ce<q.locationSize;Ce++)T(q.location+Ce,ce/q.locationSize,Ne,J,H*De,(Ot+ce/q.locationSize*Ce)*De,Ae)}else{if(I.isInstancedBufferAttribute){for(let Ge=0;Ge<q.locationSize;Ge++)b(q.location+Ge,I.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)y(q.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ge=0;Ge<q.locationSize;Ge++)T(q.location+Ge,ce/q.locationSize,Ne,J,ce*De,ce/q.locationSize*Ge*De,Ae)}}else if(z!==void 0){const J=z[$];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(q.location,J);break;case 3:t.vertexAttrib3fv(q.location,J);break;case 4:t.vertexAttrib4fv(q.location,J);break;default:t.vertexAttrib1fv(q.location,J)}}}}M()}function E(){Z();for(const F in a){const X=a[F];for(const K in X){const Q=X[K];for(const D in Q)g(Q[D].object),delete Q[D];delete X[K]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const X=a[F.id];for(const K in X){const Q=X[K];for(const D in Q)g(Q[D].object),delete Q[D];delete X[K]}delete a[F.id]}function W(F){for(const X in a){const K=a[X];if(K[F.id]===void 0)continue;const Q=K[F.id];for(const D in Q)g(Q[D].object),delete Q[D];delete K[F.id]}}function Z(){ee(),f=!0,c!==l&&(c=l,h(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:_,enableAttribute:y,disableUnusedAttributes:M}}function nT(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,u){t.drawArrays(s,f,u),n.update(u,s,1)}function l(f,u,p){if(p===0)return;let h,g;if(r)h=t,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,f,u,p),n.update(u,s,p)}function c(f,u,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<p;g++)this.render(f[g],u[g]);else{h.multiDrawArraysWEBGL(s,f,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function iT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=o||e.has("OES_texture_float"),b=_&&y,M=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:h,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:M}}function rT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const h=u.length!==0||p||i!==0||r;return r=p,i=u.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){n=f(u,p,0)},this.setState=function(u,p,h){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const x=s?0:i,_=x*4;let y=d.clippingState||null;l.value=y,y=f(g,p,_,h);for(let b=0;b!==_;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,p,h,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=h+v*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=h;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function sT(t){let e=new WeakMap;function n(o,a){return a===Lf?o.mapping=Bs:a===Df&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lf||a===Df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v1(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class n_ extends Qv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const _s=4,vm=[.125,.215,.35,.446,.526,.582],mr=20,xu=new n_,_m=new qe;let yu=null,Su=0,Mu=0;const hr=(1+Math.sqrt(5))/2,rs=1/hr,xm=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,hr,rs),new U(0,hr,-rs),new U(rs,0,hr),new U(-rs,0,hr),new U(hr,rs,0),new U(-hr,rs,0)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Su,Mu),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:$o,format:Gn,colorSpace:Ei,depthBuffer:!1},r=Sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(s)),this._blurMaterial=aT(s,e,n)}return r}_compileMaterial(e){const n=new gn(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(_m),f.toneMapping=Ki,f.autoClear=!1;const h=new $v({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new gn(new Ir,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(_m),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;Ya(r,x*_,d>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xm[(r-1)%xm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new gn(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*mr-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const d=[];let x=0;for(let T=0;T<mr;++T){const k=T/v,E=Math.exp(-k*k/2);d.push(E),T===0?x+=E:T<m&&(x+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-_s?r-_+_s:0),M=4*(this._cubeSize-y);Ya(n,b,M,3*y,2*y),l.setRenderTarget(n),l.render(u,xu)}}function oT(t){const e=[],n=[],i=[];let r=t;const s=t-_s+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-_s?l=vm[o-t+_s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,p=[f,f,u,f,u,u,f,f,u,u,f,u],h=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*h),_=new Float32Array(m*g*h),y=new Float32Array(d*g*h);for(let M=0;M<h;M++){const T=M%3*2/3-1,k=M>2?0:-1,E=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];x.set(E,v*g*M),_.set(p,m*g*M);const A=[M,M,M,M,M,M];y.set(A,d*g*M)}const b=new ti;b.setAttribute("position",new ei(x,v)),b.setAttribute("uv",new ei(_,m)),b.setAttribute("faceIndex",new ei(y,d)),e.push(b),r>_s&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sm(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aT(t,e,n){const i=new Float32Array(mr),r=new U(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Mm(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Em(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hd(){return`

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
	`}function lT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lf||l===Df,f=l===Bs||l===Hs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new ym(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||f&&u&&r(u)){n===null&&(n=new ym(t));const p=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uT(t,e,n,i){const r={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)e.update(p[g],t.ARRAY_BUFFER);const h=u.morphAttributes;for(const g in h){const v=h[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(u){const p=[],h=u.index,g=u.attributes.position;let v=0;if(h!==null){const x=h.array;v=h.version;for(let _=0,y=x.length;_<y;_+=3){const b=x[_+0],M=x[_+1],T=x[_+2];p.push(b,M,M,T,T,b)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const b=_+0,M=_+1,T=_+2;p.push(b,M,M,T,T,b)}}else return;const m=new(Gv(p)?Zv:Kv)(p,1);m.version=v;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const p=s.get(u);if(p){const h=u.index;h!==null&&p.version<h.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function fT(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,g){t.drawElements(s,g,a,h*l),n.update(g,s,1)}function u(h,g,v){if(v===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,h*l,v),n.update(g,s,v)}function p(h,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(h[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,h,0,v);let d=0;for(let x=0;x<v;x++)d+=g[x];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=u,this.renderMultiDraw=p}function dT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hT(t,e){return t[0]-e[0]}function pT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function mT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let X=function(){ee.dispose(),s.delete(f),f.removeEventListener("dispose",X)};var h=X;m!==void 0&&m.texture.dispose();const _=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let A=f.attributes.position.count*E,W=1;A>e.maxTextureSize&&(W=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*W*4*v),ee=new jv(Z,A,W,v);ee.type=Bi,ee.needsUpdate=!0;const F=E*4;for(let K=0;K<v;K++){const Q=M[K],D=T[K],N=k[K],z=A*W*4*K;for(let $=0;$<Q.count;$++){const q=$*F;_===!0&&(o.fromBufferAttribute(Q,$),Z[z+q+0]=o.x,Z[z+q+1]=o.y,Z[z+q+2]=o.z,Z[z+q+3]=0),y===!0&&(o.fromBufferAttribute(D,$),Z[z+q+4]=o.x,Z[z+q+5]=o.y,Z[z+q+6]=o.z,Z[z+q+7]=0),b===!0&&(o.fromBufferAttribute(N,$),Z[z+q+8]=o.x,Z[z+q+9]=o.y,Z[z+q+10]=o.z,Z[z+q+11]=N.itemSize===4?o.w:1)}}m={count:v,texture:ee,size:new he(A,W)},s.set(f,m),f.addEventListener("dispose",X)}let d=0;for(let _=0;_<p.length;_++)d+=p[_];const x=f.morphTargetsRelative?1:1-d;u.getUniforms().setValue(t,"morphTargetBaseInfluence",x),u.getUniforms().setValue(t,"morphTargetInfluences",p),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let v=i[f.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[f.id]=v}for(let y=0;y<g;y++){const b=v[y];b[0]=y,b[1]=p[y]}v.sort(pT);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(hT);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=a[y],M=b[0],T=b[1];M!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+y)!==m[M]&&f.setAttribute("morphTarget"+y,m[M]),d&&f.getAttribute("morphNormal"+y)!==d[M]&&f.setAttribute("morphNormal"+y,d[M]),r[y]=T,x+=T):(m&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),d&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const _=f.morphTargetsRelative?1:1-x;u.getUniforms().setValue(t,"morphTargetBaseInfluence",_),u.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function gT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class i_ extends cn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Tr,f!==Tr&&f!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Tr&&(i=zi),i===void 0&&f===Vs&&(i=wr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const r_=new cn,s_=new i_(1,1);s_.compareFunction=Vv;const o_=new jv,a_=new e1,l_=new e_,wm=[],Tm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function $s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wm[r];if(s===void 0&&(s=new Float32Array(r),wm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),bt(n,i)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),bt(n,i)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Am.set(i),t.uniformMatrix4fv(this.addr,!1,Am),bt(n,i)}}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?s_:r_;n.setTexture2D(e||s,r)}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||a_,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||l_,r)}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o_,r)}function FT(t){switch(t){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return wT;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return CT;case 5125:return RT;case 36294:return bT;case 36295:return PT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}function OT(t,e){t.uniform1fv(this.addr,e)}function kT(t,e){const n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function zT(t,e){const n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function BT(t,e){const n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function HT(t,e){const n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VT(t,e){const n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GT(t,e){const n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WT(t,e){t.uniform1iv(this.addr,e)}function XT(t,e){t.uniform2iv(this.addr,e)}function jT(t,e){t.uniform3iv(this.addr,e)}function YT(t,e){t.uniform4iv(this.addr,e)}function qT(t,e){t.uniform1uiv(this.addr,e)}function $T(t,e){t.uniform2uiv(this.addr,e)}function KT(t,e){t.uniform3uiv(this.addr,e)}function ZT(t,e){t.uniform4uiv(this.addr,e)}function JT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||r_,s[o])}function QT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||a_,s[o])}function e2(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||l_,s[o])}function t2(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||o_,s[o])}function n2(t){switch(t){case 5126:return OT;case 35664:return kT;case 35665:return zT;case 35666:return BT;case 35674:return HT;case 35675:return VT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return jT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return $T;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}class i2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FT(n.type)}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n2(n.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function bm(t,e){t.seq.push(e),t.map[e.id]=e}function o2(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bm(n,c===void 0?new i2(a,t,e):new r2(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new s2(a),bm(n,u)),n=u}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);o2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const a2=37297;let l2=0;function c2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function u2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Vl&&n===Hl?i="LinearDisplayP3ToLinearSRGB":e===Hl&&n===Vl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case uc:return[i,"LinearTransferOETF"];case Nt:case kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+c2(t.getShaderSource(e),o)}else return r}function f2(t,e){const n=u2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function d2(t,e){let n;switch(e){case EM:n="Linear";break;case wM:n="Reinhard";break;case TM:n="OptimizedCineon";break;case Lv:n="ACESFilmic";break;case CM:n="AgX";break;case AM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function h2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function p2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function m2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function g2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xs(t){return t!==""}function Dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(t){return t.replace(v2,x2)}const _2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x2(t,e){let n=Ve[e];if(n===void 0){const i=_2.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(y2,S2)}function S2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Um(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function E2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function T2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Pv:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case MM:e="ENVMAP_BLENDING_ADD";break}return e}function A2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=M2(n),c=E2(n),f=w2(n),u=T2(n),p=A2(n),h=n.isWebGL2?"":h2(n),g=p2(n),v=m2(s),m=r.createProgram();let d,x,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(xs).join(`
`),d.length>0&&(d+=`
`),x=[h,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(xs).join(`
`),x.length>0&&(x+=`
`)):(d=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),x=[h,Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ki?d2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,f2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`)),o=Of(o),o=Dm(o,n),o=Nm(o,n),a=Of(a),a=Dm(a,n),a=Nm(a,n),o=Im(o),a=Im(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,b=_+x+a,M=Pm(r,r.VERTEX_SHADER,y),T=Pm(r,r.FRAGMENT_SHADER,b);r.attachShader(m,M),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(Z){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(M).trim(),X=r.getShaderInfoLog(T).trim();let K=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,M,T);else{const D=Lm(r,M,"vertex"),N=Lm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+D+`
`+N)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(F===""||X==="")&&(Q=!1);Q&&(Z.diagnostics={runnable:K,programLog:ee,vertexShader:{log:F,prefix:d},fragmentShader:{log:X,prefix:x}})}r.deleteShader(M),r.deleteShader(T),E=new dl(r,m),A=g2(r,m)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,a2)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let R2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new P2(e),n.set(e,i)),i}}class P2{constructor(e){this.id=R2++,this.code=e,this.usedTimes=0}}function L2(t,e,n,i,r,s,o){const a=new Yv,l=new b2,c=[],f=r.isWebGL2,u=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,A,W,Z,ee){const F=Z.fog,X=ee.geometry,K=E.isMeshStandardMaterial?Z.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),D=Q&&Q.mapping===cc?Q.image.height:null,N=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=z!==void 0?z.length:0;let q=0;X.morphAttributes.position!==void 0&&(q=1),X.morphAttributes.normal!==void 0&&(q=2),X.morphAttributes.color!==void 0&&(q=3);let I,J,ce,pe;if(N){const _t=Kn[N];I=_t.vertexShader,J=_t.fragmentShader}else I=E.vertexShader,J=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const ye=t.getRenderTarget(),Ne=ee.isInstancedMesh===!0,De=ee.isBatchedMesh===!0,Ae=!!E.map,Ge=!!E.matcap,H=!!Q,Ot=!!E.aoMap,Ce=!!E.lightMap,Ie=!!E.bumpMap,Se=!!E.normalMap,st=!!E.displacementMap,ze=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,V=E.anisotropy>0,se=E.clearcoat>0,ne=E.iridescence>0,oe=E.sheen>0,Me=E.transmission>0,de=V&&!!E.anisotropyMap,xe=se&&!!E.clearcoatMap,be=se&&!!E.clearcoatNormalMap,Be=se&&!!E.clearcoatRoughnessMap,te=ne&&!!E.iridescenceMap,tt=ne&&!!E.iridescenceThicknessMap,We=oe&&!!E.sheenColorMap,Ue=oe&&!!E.sheenRoughnessMap,Te=!!E.specularMap,me=!!E.specularColorMap,P=!!E.specularIntensityMap,ae=Me&&!!E.transmissionMap,Ee=Me&&!!E.thicknessMap,_e=!!E.gradientMap,ie=!!E.alphaMap,L=E.alphaTest>0,le=!!E.alphaHash,fe=!!E.extensions,Pe=!!X.attributes.uv1,Re=!!X.attributes.uv2,Ke=!!X.attributes.uv3;let Ze=Ki;return E.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:f,shaderID:N,shaderType:E.type,shaderName:E.name,vertexShader:I,fragmentShader:J,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:De,instancing:Ne,instancingColor:Ne&&ee.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ei,map:Ae,matcap:Ge,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:D,aoMap:Ot,lightMap:Ce,bumpMap:Ie,normalMap:Se,displacementMap:p&&st,emissiveMap:ze,normalMapObjectSpace:Se&&E.normalMapType===zM,normalMapTangentSpace:Se&&E.normalMapType===Hv,metalnessMap:C,roughnessMap:S,anisotropy:V,anisotropyMap:de,clearcoat:se,clearcoatMap:xe,clearcoatNormalMap:be,clearcoatRoughnessMap:Be,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:tt,sheen:oe,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:me,specularIntensityMap:P,transmission:Me,transmissionMap:ae,thicknessMap:Ee,gradientMap:_e,opaque:E.transparent===!1&&E.blending===bs,alphaMap:ie,alphaTest:L,alphaHash:le,combine:E.combine,mapUv:Ae&&v(E.map.channel),aoMapUv:Ot&&v(E.aoMap.channel),lightMapUv:Ce&&v(E.lightMap.channel),bumpMapUv:Ie&&v(E.bumpMap.channel),normalMapUv:Se&&v(E.normalMap.channel),displacementMapUv:st&&v(E.displacementMap.channel),emissiveMapUv:ze&&v(E.emissiveMap.channel),metalnessMapUv:C&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:de&&v(E.anisotropyMap.channel),clearcoatMapUv:xe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(E.sheenRoughnessMap.channel),specularMapUv:Te&&v(E.specularMap.channel),specularColorMapUv:me&&v(E.specularColorMap.channel),specularIntensityMapUv:P&&v(E.specularIntensityMap.channel),transmissionMapUv:ae&&v(E.transmissionMap.channel),thicknessMapUv:Ee&&v(E.thicknessMap.channel),alphaMapUv:ie&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Se||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Re,vertexUv3s:Ke,pointsUvs:ee.isPoints===!0&&!!X.attributes.uv&&(Ae||ie),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)A.push(W),A.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(x(A,E),_(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function x(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function _(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const A=g[E.type];let W;if(A){const Z=Kn[A];W=h1.clone(Z.uniforms)}else W=E.uniforms;return W}function b(E,A){let W;for(let Z=0,ee=c.length;Z<ee;Z++){const F=c[Z];if(F.cacheKey===A){W=F,++W.usedTimes;break}}return W===void 0&&(W=new C2(t,A,E,s),c.push(W)),W}function M(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:k}}function D2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function N2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,p,h,g,v,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:h,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=h,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,p,h,g,v,m){const d=o(u,p,h,g,v,m);h.transmission>0?i.push(d):h.transparent===!0?r.push(d):n.push(d)}function l(u,p,h,g,v,m){const d=o(u,p,h,g,v,m);h.transmission>0?i.unshift(d):h.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,p){n.length>1&&n.sort(u||N2),i.length>1&&i.sort(p||Fm),r.length>1&&r.sort(p||Fm)}function f(){for(let u=e,p=t.length;u<p;u++){const h=t[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function I2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Om,t.set(i,[o])):r>=s.length?(o=new Om,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function U2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new qe};break;case"SpotLight":n={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function F2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let O2=0;function k2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function z2(t,e){const n=new U2,i=F2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new U);const s=new U,o=new St,a=new St;function l(f,u){let p=0,h=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,m=0,d=0,x=0,_=0,y=0,b=0,M=0,T=0,k=0,E=0;f.sort(k2);const A=u===!0?Math.PI:1;for(let Z=0,ee=f.length;Z<ee;Z++){const F=f[Z],X=F.color,K=F.intensity,Q=F.distance,D=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=X.r*K*A,h+=X.g*K*A,g+=X.b*K*A;else if(F.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(F.sh.coefficients[N],K);E++}else if(F.isDirectionalLight){const N=n.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*A),F.castShadow){const z=F.shadow,$=i.get(F);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=D,r.directionalShadowMatrix[v]=F.shadow.matrix,y++}r.directional[v]=N,v++}else if(F.isSpotLight){const N=n.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(X).multiplyScalar(K*A),N.distance=Q,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,r.spot[d]=N;const z=F.shadow;if(F.map&&(r.spotLightMap[T]=F.map,T++,z.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[d]=z.matrix,F.castShadow){const $=i.get(F);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=D,M++}d++}else if(F.isRectAreaLight){const N=n.get(F);N.color.copy(X).multiplyScalar(K),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=N,x++}else if(F.isPointLight){const N=n.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*A),N.distance=F.distance,N.decay=F.decay,F.castShadow){const z=F.shadow,$=i.get(F);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=F.shadow.matrix,b++}r.point[m]=N,m++}else if(F.isHemisphereLight){const N=n.get(F);N.skyColor.copy(F.color).multiplyScalar(K*A),N.groundColor.copy(F.groundColor).multiplyScalar(K*A),r.hemi[_]=N,_++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=h,r.ambient[2]=g;const W=r.hash;(W.directionalLength!==v||W.pointLength!==m||W.spotLength!==d||W.rectAreaLength!==x||W.hemiLength!==_||W.numDirectionalShadows!==y||W.numPointShadows!==b||W.numSpotShadows!==M||W.numSpotMaps!==T||W.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=M+T-k,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=E,W.directionalLength=v,W.pointLength=m,W.spotLength=d,W.rectAreaLength=x,W.hemiLength=_,W.numDirectionalShadows=y,W.numPointShadows=b,W.numSpotShadows=M,W.numSpotMaps=T,W.numLightProbes=E,r.version=O2++)}function c(f,u){let p=0,h=0,g=0,v=0,m=0;const d=u.matrixWorldInverse;for(let x=0,_=f.length;x<_;x++){const y=f[x];if(y.isDirectionalLight){const b=r.directional[p];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),p++}else if(y.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const b=r.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function km(t,e){const n=new z2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function B2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new km(t,e),n.set(s,[l])):o>=a.length?(l=new km(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class H2 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V2 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W2=`uniform sampler2D shadow_pass;
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
}`;function X2(t,e,n){let i=new Bd;const r=new he,s=new he,o=new It,a=new H2({depthPacking:kM}),l=new V2,c={},f=n.maxTextureSize,u={[er]:ln,[ln]:er,[hi]:hi},p=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:G2,fragmentShader:W2}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gn(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let d=this.type;this.render=function(M,T,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=t.getRenderTarget(),A=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending($i),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ee=d!==ci&&this.type===ci,F=d===ci&&this.type!==ci;for(let X=0,K=M.length;X<K;X++){const Q=M[X],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const N=D.getFrameExtents();if(r.multiply(N),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,D.mapSize.y=s.y)),D.map===null||ee===!0||F===!0){const $=this.type!==ci?{minFilter:Zt,magFilter:Zt}:{};D.map!==null&&D.map.dispose(),D.map=new Dr(r.x,r.y,$),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const z=D.getViewportCount();for(let $=0;$<z;$++){const q=D.getViewport($);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),Z.viewport(o),D.updateMatrices(Q,$),i=D.getFrustum(),y(T,k,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===ci&&x(D,k),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,A,W)};function x(M,T){const k=e.update(v);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Dr(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,k,p,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,k,h,v,null)}function _(M,T,k,E){let A=null;const W=k.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)A=W;else if(A=k.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=A.uuid,ee=T.uuid;let F=c[Z];F===void 0&&(F={},c[Z]=F);let X=F[ee];X===void 0&&(X=A.clone(),F[ee]=X,T.addEventListener("dispose",b)),A=X}if(A.visible=T.visible,A.wireframe=T.wireframe,E===ci?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=t.properties.get(A);Z.light=k}return A}function y(M,T,k,E,A){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===ci)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),F=M.material;if(Array.isArray(F)){const X=ee.groups;for(let K=0,Q=X.length;K<Q;K++){const D=X[K],N=F[D.materialIndex];if(N&&N.visible){const z=_(M,N,E,A);M.onBeforeShadow(t,M,T,k,ee,z,D),t.renderBufferDirect(k,null,ee,z,M,D),M.onAfterShadow(t,M,T,k,ee,z,D)}}}else if(F.visible){const X=_(M,F,E,A);M.onBeforeShadow(t,M,T,k,ee,X,null),t.renderBufferDirect(k,null,ee,X,M,null),M.onAfterShadow(t,M,T,k,ee,X,null)}}const Z=M.children;for(let ee=0,F=Z.length;ee<F;ee++)y(Z[ee],T,k,E,A)}function b(M){M.target.removeEventListener("dispose",b);for(const k in c){const E=c[k],A=M.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function j2(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const le=new It;let fe=null;const Pe=new It(0,0,0,0);return{setMask:function(Re){fe!==Re&&!L&&(t.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){L=Re},setClear:function(Re,Ke,Ze,mt,_t){_t===!0&&(Re*=mt,Ke*=mt,Ze*=mt),le.set(Re,Ke,Ze,mt),Pe.equals(le)===!1&&(t.clearColor(Re,Ke,Ze,mt),Pe.copy(le))},reset:function(){L=!1,fe=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,le=null,fe=null,Pe=null;return{setTest:function(Re){Re?De(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Re){le!==Re&&!L&&(t.depthMask(Re),le=Re)},setFunc:function(Re){if(fe!==Re){switch(Re){case pM:t.depthFunc(t.NEVER);break;case mM:t.depthFunc(t.ALWAYS);break;case gM:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case vM:t.depthFunc(t.EQUAL);break;case _M:t.depthFunc(t.GEQUAL);break;case xM:t.depthFunc(t.GREATER);break;case yM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Re}},setLocked:function(Re){L=Re},setClear:function(Re){Pe!==Re&&(t.clearDepth(Re),Pe=Re)},reset:function(){L=!1,le=null,fe=null,Pe=null}}}function o(){let L=!1,le=null,fe=null,Pe=null,Re=null,Ke=null,Ze=null,mt=null,_t=null;return{setTest:function(et){L||(et?De(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(et){le!==et&&!L&&(t.stencilMask(et),le=et)},setFunc:function(et,Mt,Yn){(fe!==et||Pe!==Mt||Re!==Yn)&&(t.stencilFunc(et,Mt,Yn),fe=et,Pe=Mt,Re=Yn)},setOp:function(et,Mt,Yn){(Ke!==et||Ze!==Mt||mt!==Yn)&&(t.stencilOp(et,Mt,Yn),Ke=et,Ze=Mt,mt=Yn)},setLocked:function(et){L=et},setClear:function(et){_t!==et&&(t.clearStencil(et),_t=et)},reset:function(){L=!1,le=null,fe=null,Pe=null,Re=null,Ke=null,Ze=null,mt=null,_t=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,u=new WeakMap;let p={},h={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,b=null,M=null,T=null,k=null,E=new qe(0,0,0),A=0,W=!1,Z=null,ee=null,F=null,X=null,K=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=N>=1):z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=N>=2);let $=null,q={};const I=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ce=new It().fromArray(I),pe=new It().fromArray(J);function ye(L,le,fe,Pe){const Re=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<fe;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(le+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return Ke}const Ne={};Ne[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(kl),ze(!1),C(xp),De(t.CULL_FACE),Se($i);function De(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Ae(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function Ge(L,le){return h[L]!==le?(t.bindFramebuffer(L,le),h[L]=le,i&&(L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function H(L,le){let fe=v,Pe=!1;if(L)if(fe=g.get(le),fe===void 0&&(fe=[],g.set(le,fe)),L.isWebGLMultipleRenderTargets){const Re=L.texture;if(fe.length!==Re.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=Re.length;Ke<Ze;Ke++)fe[Ke]=t.COLOR_ATTACHMENT0+Ke;fe.length=Re.length,Pe=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Ot(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ce={[pr]:t.FUNC_ADD,[QS]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[Ep]=t.MIN,Ce[wp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ce[Ep]=L.MIN_EXT,Ce[wp]=L.MAX_EXT)}const Ie={[tM]:t.ZERO,[nM]:t.ONE,[iM]:t.SRC_COLOR,[bf]:t.SRC_ALPHA,[cM]:t.SRC_ALPHA_SATURATE,[aM]:t.DST_COLOR,[sM]:t.DST_ALPHA,[rM]:t.ONE_MINUS_SRC_COLOR,[Pf]:t.ONE_MINUS_SRC_ALPHA,[lM]:t.ONE_MINUS_DST_COLOR,[oM]:t.ONE_MINUS_DST_ALPHA,[uM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[dM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(L,le,fe,Pe,Re,Ke,Ze,mt,_t,et){if(L===$i){d===!0&&(Ae(t.BLEND),d=!1);return}if(d===!1&&(De(t.BLEND),d=!0),L!==JS){if(L!==x||et!==W){if((_!==pr||M!==pr)&&(t.blendEquation(t.FUNC_ADD),_=pr,M=pr),et)switch(L){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yp:t.blendFunc(t.ONE,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,k=null,E.set(0,0,0),A=0,x=L,W=et}return}Re=Re||le,Ke=Ke||fe,Ze=Ze||Pe,(le!==_||Re!==M)&&(t.blendEquationSeparate(Ce[le],Ce[Re]),_=le,M=Re),(fe!==y||Pe!==b||Ke!==T||Ze!==k)&&(t.blendFuncSeparate(Ie[fe],Ie[Pe],Ie[Ke],Ie[Ze]),y=fe,b=Pe,T=Ke,k=Ze),(mt.equals(E)===!1||_t!==A)&&(t.blendColor(mt.r,mt.g,mt.b,_t),E.copy(mt),A=_t),x=L,W=!1}function st(L,le){L.side===hi?Ae(t.CULL_FACE):De(t.CULL_FACE);let fe=L.side===ln;le&&(fe=!fe),ze(fe),L.blending===bs&&L.transparent===!1?Se($i):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),V(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){Z!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Z=L)}function C(L){L!==KS?(De(t.CULL_FACE),L!==ee&&(L===xp?t.cullFace(t.BACK):L===ZS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),ee=L}function S(L){L!==F&&(D&&t.lineWidth(L),F=L)}function V(L,le,fe){L?(De(t.POLYGON_OFFSET_FILL),(X!==le||K!==fe)&&(t.polygonOffset(le,fe),X=le,K=fe)):Ae(t.POLYGON_OFFSET_FILL)}function se(L){L?De(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ne(L){L===void 0&&(L=t.TEXTURE0+Q-1),$!==L&&(t.activeTexture(L),$=L)}function oe(L,le,fe){fe===void 0&&($===null?fe=t.TEXTURE0+Q-1:fe=$);let Pe=q[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},q[fe]=Pe),(Pe.type!==L||Pe.texture!==le)&&($!==fe&&(t.activeTexture(fe),$=fe),t.bindTexture(L,le||Ne[L]),Pe.type=L,Pe.texture=le)}function Me(){const L=q[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function ae(L){pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function Ee(L,le){let fe=u.get(le);fe===void 0&&(fe=new WeakMap,u.set(le,fe));let Pe=fe.get(L);Pe===void 0&&(Pe=t.getUniformBlockIndex(le,L.name),fe.set(L,Pe))}function _e(L,le){const Pe=u.get(le).get(L);f.get(le)!==Pe&&(t.uniformBlockBinding(le,Pe,L.__bindingPointIndex),f.set(le,Pe))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},$=null,q={},h={},g=new WeakMap,v=[],m=null,d=!1,x=null,_=null,y=null,b=null,M=null,T=null,k=null,E=new qe(0,0,0),A=0,W=!1,Z=null,ee=null,F=null,X=null,K=null,ce.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Ae,bindFramebuffer:Ge,drawBuffers:H,useProgram:Ot,setBlending:Se,setMaterial:st,setFlipSided:ze,setCullFace:C,setLineWidth:S,setPolygonOffset:V,setScissorTest:se,activeTexture:ne,bindTexture:oe,unbindTexture:Me,compressedTexImage2D:de,compressedTexImage3D:xe,texImage2D:Te,texImage3D:me,updateUBOMapping:Ee,uniformBlockBinding:_e,texStorage2D:We,texStorage3D:Ue,texSubImage2D:be,texSubImage3D:Be,compressedTexSubImage2D:te,compressedTexSubImage3D:tt,scissor:P,viewport:ae,reset:ie}}function Y2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let u;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return h?new OffscreenCanvas(C,S):Wl("canvas")}function v(C,S,V,se){let ne=1;if((C.width>se||C.height>se)&&(ne=se/Math.max(C.width,C.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=S?Ff:Math.floor,Me=oe(ne*C.width),de=oe(ne*C.height);u===void 0&&(u=g(Me,de));const xe=V?g(Me,de):u;return xe.width=Me,xe.height=de,xe.getContext("2d").drawImage(C,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+de+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return em(C.width)&&em(C.height)}function d(C){return a?!1:C.wrapS!==Vn||C.wrapT!==Vn||C.minFilter!==Zt&&C.minFilter!==Cn}function x(C,S){return C.generateMipmaps&&S&&C.minFilter!==Zt&&C.minFilter!==Cn}function _(C){t.generateMipmap(C)}function y(C,S,V,se,ne=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=S;if(S===t.RED&&(V===t.FLOAT&&(oe=t.R32F),V===t.HALF_FLOAT&&(oe=t.R16F),V===t.UNSIGNED_BYTE&&(oe=t.R8)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(oe=t.R8UI),V===t.UNSIGNED_SHORT&&(oe=t.R16UI),V===t.UNSIGNED_INT&&(oe=t.R32UI),V===t.BYTE&&(oe=t.R8I),V===t.SHORT&&(oe=t.R16I),V===t.INT&&(oe=t.R32I)),S===t.RG&&(V===t.FLOAT&&(oe=t.RG32F),V===t.HALF_FLOAT&&(oe=t.RG16F),V===t.UNSIGNED_BYTE&&(oe=t.RG8)),S===t.RGBA){const Me=ne?Bl:it.getTransfer(se);V===t.FLOAT&&(oe=t.RGBA32F),V===t.HALF_FLOAT&&(oe=t.RGBA16F),V===t.UNSIGNED_BYTE&&(oe=Me===at?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(C,S,V){return x(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){return C===Zt||C===Tp||C===$c?t.NEAREST:t.LINEAR}function T(C){const S=C.target;S.removeEventListener("dispose",T),E(S),S.isVideoTexture&&f.delete(S)}function k(C){const S=C.target;S.removeEventListener("dispose",k),W(S)}function E(C){const S=i.get(C);if(S.__webglInit===void 0)return;const V=C.source,se=p.get(V);if(se){const ne=se[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(C),Object.keys(se).length===0&&p.delete(V)}i.remove(C)}function A(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const V=C.source,se=p.get(V);delete se[S.__cacheKey],o.memory.textures--}function W(C){const S=C.texture,V=i.get(C),se=i.get(S);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(V.__webglFramebuffer[ne]))for(let oe=0;oe<V.__webglFramebuffer[ne].length;oe++)t.deleteFramebuffer(V.__webglFramebuffer[ne][oe]);else t.deleteFramebuffer(V.__webglFramebuffer[ne]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ne])}else{if(Array.isArray(V.__webglFramebuffer))for(let ne=0;ne<V.__webglFramebuffer.length;ne++)t.deleteFramebuffer(V.__webglFramebuffer[ne]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,oe=S.length;ne<oe;ne++){const Me=i.get(S[ne]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(C)}let Z=0;function ee(){Z=0}function F(){const C=Z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Z+=1,C}function X(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){const V=i.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,C,S);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function Q(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ce(V,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function D(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ce(V,C,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function N(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){pe(V,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const z={[zl]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},$={[Zt]:t.NEAREST,[Tp]:t.NEAREST_MIPMAP_NEAREST,[$c]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[RM]:t.LINEAR_MIPMAP_NEAREST,[qo]:t.LINEAR_MIPMAP_LINEAR},q={[BM]:t.NEVER,[jM]:t.ALWAYS,[HM]:t.LESS,[Vv]:t.LEQUAL,[VM]:t.EQUAL,[XM]:t.GEQUAL,[GM]:t.GREATER,[WM]:t.NOTEQUAL};function I(C,S,V){if(V?(t.texParameteri(C,t.TEXTURE_WRAP_S,z[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,z[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,z[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Vn||S.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,M(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==Zt&&S.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Zt||S.minFilter!==$c&&S.minFilter!==qo||S.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===$o&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function J(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const se=S.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const oe=X(S);if(oe!==C.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[oe].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&A(S)),C.__cacheKey=oe,C.__webglTexture=ne[oe].texture}return V}function ce(C,S,V){let se=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=t.TEXTURE_3D);const ne=J(C,S),oe=S.source;n.bindTexture(se,C.__webglTexture,t.TEXTURE0+V);const Me=i.get(oe);if(oe.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const de=it.getPrimaries(it.workingColorSpace),xe=S.colorSpace===bn?null:it.getPrimaries(S.colorSpace),be=S.colorSpace===bn||de===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Be=d(S)&&m(S.image)===!1;let te=v(S.image,Be,!1,r.maxTextureSize);te=ze(S,te);const tt=m(te)||a,We=s.convert(S.format,S.colorSpace);let Ue=s.convert(S.type),Te=y(S.internalFormat,We,Ue,S.colorSpace,S.isVideoTexture);I(se,S,tt);let me;const P=S.mipmaps,ae=a&&S.isVideoTexture!==!0&&Te!==zv,Ee=Me.__version===void 0||ne===!0,_e=b(S,te,tt);if(S.isDepthTexture)Te=t.DEPTH_COMPONENT,a?S.type===Bi?Te=t.DEPTH_COMPONENT32F:S.type===zi?Te=t.DEPTH_COMPONENT24:S.type===wr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:S.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&Te===t.DEPTH_COMPONENT&&S.type!==Od&&S.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zi,Ue=s.convert(S.type)),S.format===Vs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,Ue=s.convert(S.type))),Ee&&(ae?n.texStorage2D(t.TEXTURE_2D,1,Te,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,We,Ue,null));else if(S.isDataTexture)if(P.length>0&&tt){ae&&Ee&&n.texStorage2D(t.TEXTURE_2D,_e,Te,P[0].width,P[0].height);for(let ie=0,L=P.length;ie<L;ie++)me=P[ie],ae?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,me.width,me.height,We,Ue,me.data):n.texImage2D(t.TEXTURE_2D,ie,Te,me.width,me.height,0,We,Ue,me.data);S.generateMipmaps=!1}else ae?(Ee&&n.texStorage2D(t.TEXTURE_2D,_e,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,We,Ue,te.data)):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,We,Ue,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Te,P[0].width,P[0].height,te.depth);for(let ie=0,L=P.length;ie<L;ie++)me=P[ie],S.format!==Gn?We!==null?ae?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,te.depth,We,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Te,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,te.depth,We,Ue,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Te,me.width,me.height,te.depth,0,We,Ue,me.data)}else{ae&&Ee&&n.texStorage2D(t.TEXTURE_2D,_e,Te,P[0].width,P[0].height);for(let ie=0,L=P.length;ie<L;ie++)me=P[ie],S.format!==Gn?We!==null?ae?n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,me.width,me.height,We,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,me.width,me.height,We,Ue,me.data):n.texImage2D(t.TEXTURE_2D,ie,Te,me.width,me.height,0,We,Ue,me.data)}else if(S.isDataArrayTexture)ae?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,We,Ue,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,We,Ue,te.data);else if(S.isData3DTexture)ae?(Ee&&n.texStorage3D(t.TEXTURE_3D,_e,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,We,Ue,te.data)):n.texImage3D(t.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,We,Ue,te.data);else if(S.isFramebufferTexture){if(Ee)if(ae)n.texStorage2D(t.TEXTURE_2D,_e,Te,te.width,te.height);else{let ie=te.width,L=te.height;for(let le=0;le<_e;le++)n.texImage2D(t.TEXTURE_2D,le,Te,ie,L,0,We,Ue,null),ie>>=1,L>>=1}}else if(P.length>0&&tt){ae&&Ee&&n.texStorage2D(t.TEXTURE_2D,_e,Te,P[0].width,P[0].height);for(let ie=0,L=P.length;ie<L;ie++)me=P[ie],ae?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,We,Ue,me):n.texImage2D(t.TEXTURE_2D,ie,Te,We,Ue,me);S.generateMipmaps=!1}else ae?(Ee&&n.texStorage2D(t.TEXTURE_2D,_e,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Ue,te)):n.texImage2D(t.TEXTURE_2D,0,Te,We,Ue,te);x(S,tt)&&_(se),Me.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pe(C,S,V){if(S.image.length!==6)return;const se=J(C,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){n.activeTexture(t.TEXTURE0+V);const Me=it.getPrimaries(it.workingColorSpace),de=S.colorSpace===bn?null:it.getPrimaries(S.colorSpace),xe=S.colorSpace===bn||Me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,te=[];for(let ie=0;ie<6;ie++)!be&&!Be?te[ie]=v(S.image[ie],!1,!0,r.maxCubemapSize):te[ie]=Be?S.image[ie].image:S.image[ie],te[ie]=ze(S,te[ie]);const tt=te[0],We=m(tt)||a,Ue=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),me=y(S.internalFormat,Ue,Te,S.colorSpace),P=a&&S.isVideoTexture!==!0,ae=oe.__version===void 0||se===!0;let Ee=b(S,tt,We);I(t.TEXTURE_CUBE_MAP,S,We);let _e;if(be){P&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,me,tt.width,tt.height);for(let ie=0;ie<6;ie++){_e=te[ie].mipmaps;for(let L=0;L<_e.length;L++){const le=_e[L];S.format!==Gn?Ue!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,le.width,le.height,Ue,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,le.width,le.height,Ue,Te,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,me,le.width,le.height,0,Ue,Te,le.data)}}}else{_e=S.mipmaps,P&&ae&&(_e.length>0&&Ee++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,me,te[0].width,te[0].height));for(let ie=0;ie<6;ie++)if(Be){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,te[ie].width,te[ie].height,Ue,Te,te[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,te[ie].width,te[ie].height,0,Ue,Te,te[ie].data);for(let L=0;L<_e.length;L++){const fe=_e[L].image[ie].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,fe.width,fe.height,Ue,Te,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,me,fe.width,fe.height,0,Ue,Te,fe.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,Te,te[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,me,Ue,Te,te[ie]);for(let L=0;L<_e.length;L++){const le=_e[L];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,Ue,Te,le.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,me,Ue,Te,le.image[ie])}}}x(S,We)&&_(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,V,se,ne,oe){const Me=s.convert(V.format,V.colorSpace),de=s.convert(V.type),xe=y(V.internalFormat,Me,de,V.colorSpace);if(!i.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>oe),te=Math.max(1,S.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,xe,Be,te,S.depth,0,Me,de,null):n.texImage2D(ne,oe,xe,Be,te,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,0,Ie(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||Se(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Bi?se=t.DEPTH_COMPONENT32F:ne.type===zi&&(se=t.DEPTH_COMPONENT24));const oe=Ie(S);Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,se,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,se,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const se=Ie(S);V&&Se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,S.width,S.height):Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const se=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],Me=s.convert(oe.format,oe.colorSpace),de=s.convert(oe.type),xe=y(oe.internalFormat,Me,de,oe.colorSpace),be=Ie(S);V&&Se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,xe,S.width,S.height):Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,xe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,xe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const se=i.get(S.depthTexture).__webglTexture,ne=Ie(S);if(S.depthTexture.format===Tr)Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(S.depthTexture.format===Vs)Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const S=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=t.createRenderbuffer(),Ne(S.__webglDepthbuffer[se],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ne(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(C,S,V){const se=i.get(C);S!==void 0&&ye(se.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ae(C)}function H(C){const S=C.texture,V=i.get(C),se=i.get(S);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=S.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Me=m(C)||a;if(ne){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let xe=0;xe<S.mipmaps.length;xe++)V.__webglFramebuffer[de][xe]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const de=C.texture;for(let xe=0,be=de.length;xe<be;xe++){const Be=i.get(de[xe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Se(C)===!1){const de=oe?S:[S];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xe=0;xe<de.length;xe++){const be=de[xe];V.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[xe]);const Be=s.convert(be.format,be.colorSpace),te=s.convert(be.type),tt=y(be.internalFormat,Be,te,be.colorSpace,C.isXRRenderTarget===!0),We=Ie(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,tt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,V.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),I(t.TEXTURE_CUBE_MAP,S,Me);for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(V.__webglFramebuffer[de][xe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ye(V.__webglFramebuffer[de],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(S,Me)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const de=C.texture;for(let xe=0,be=de.length;xe<be;xe++){const Be=de[xe],te=i.get(Be);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),I(t.TEXTURE_2D,Be,Me),ye(V.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),x(Be,Me)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,se.__webglTexture),I(de,S,Me),a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(V.__webglFramebuffer[xe],C,S,t.COLOR_ATTACHMENT0,de,xe);else ye(V.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,de,0);x(S,Me)&&_(de),n.unbindTexture()}C.depthBuffer&&Ae(C)}function Ot(C){const S=m(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,ne=V.length;se<ne;se++){const oe=V[se];if(x(oe,S)){const Me=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(oe).__webglTexture;n.bindTexture(Me,de),_(Me),n.unbindTexture()}}}function Ce(C){if(a&&C.samples>0&&Se(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,se=C.height;let ne=t.COLOR_BUFFER_BIT;const oe=[],Me=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),xe=C.isWebGLMultipleRenderTargets===!0;if(xe)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let be=0;be<S.length;be++){oe.push(t.COLOR_ATTACHMENT0+be),C.depthBuffer&&oe.push(Me);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[be]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),xe){const te=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,V,se,0,0,V,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,de.__webglColorRenderbuffer[be]);const Be=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(C){const S=o.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function ze(C,S){const V=C.colorSpace,se=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===If||V!==Ei&&V!==bn&&(it.getTransfer(V)===at?a===!1?e.has("EXT_sRGB")===!0&&se===Gn?(C.format=If,C.minFilter=Cn,C.generateMipmaps=!1):S=Wv.sRGBToLinear(S):(se!==Gn||ne!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=F,this.resetTextureUnits=ee,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=D,this.setTextureCube=N,this.rebindTextures=Ge,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Se}function q2(t,e,n){const i=n.isWebGL2;function r(s,o=bn){let a;const l=it.getTransfer(o);if(s===Zi)return t.UNSIGNED_BYTE;if(s===Iv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Uv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===bM)return t.BYTE;if(s===PM)return t.SHORT;if(s===Od)return t.UNSIGNED_SHORT;if(s===Nv)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===Bi)return t.FLOAT;if(s===$o)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===LM)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===DM)return t.LUMINANCE;if(s===NM)return t.LUMINANCE_ALPHA;if(s===Tr)return t.DEPTH_COMPONENT;if(s===Vs)return t.DEPTH_STENCIL;if(s===If)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===IM)return t.RED;if(s===Fv)return t.RED_INTEGER;if(s===UM)return t.RG;if(s===Ov)return t.RG_INTEGER;if(s===kv)return t.RGBA_INTEGER;if(s===Kc||s===Zc||s===Jc||s===Qc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Kc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Kc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ap||s===Cp||s===Rp||s===bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pp||s===Lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Np||s===Ip||s===Up||s===Fp||s===Op||s===kp||s===zp||s===Bp||s===Hp||s===Vp||s===Gp||s===Wp||s===Xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Np)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Up)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Op)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eu||s===jp||s===Yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===eu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===FM||s===qp||s===$p||s===Kp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$p)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class $2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K2={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=f.position.distanceTo(u.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Z2 extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,p=null,h=null,g=null;const v=n.getContextAttributes();let m=null,d=null;const x=[],_=[],y=new he;let b=null;const M=new Rn;M.layers.enable(1),M.viewport=new It;const T=new Rn;T.layers.enable(2),T.viewport=new It;const k=[M,T],E=new $2;E.layers.enable(1),E.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let J=x[I];return J===void 0&&(J=new wu,x[I]=J),J.getTargetRaySpace()},this.getControllerGrip=function(I){let J=x[I];return J===void 0&&(J=new wu,x[I]=J),J.getGripSpace()},this.getHand=function(I){let J=x[I];return J===void 0&&(J=new wu,x[I]=J),J.getHandSpace()};function Z(I){const J=_.indexOf(I.inputSource);if(J===-1)return;const ce=x[J];ce!==void 0&&(ce.update(I.inputSource,I.frame,c||o),ce.dispatchEvent({type:I.type,data:I.inputSource}))}function ee(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",F);for(let I=0;I<x.length;I++){const J=_[I];J!==null&&(_[I]=null,x[I].disconnect(J))}A=null,W=null,e.setRenderTarget(m),h=null,p=null,u=null,r=null,d=null,q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),d=new Dr(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,ce=null,pe=null;v.depth&&(pe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=v.stencil?Vs:Tr,ce=v.stencil?wr:zi);const ye={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(r,n),p=u.createProjectionLayer(ye),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Dr(p.textureWidth,p.textureHeight,{format:Gn,type:Zi,depthTexture:new i_(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ne=e.properties.get(d);Ne.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(I){for(let J=0;J<I.removed.length;J++){const ce=I.removed[J],pe=_.indexOf(ce);pe>=0&&(_[pe]=null,x[pe].disconnect(ce))}for(let J=0;J<I.added.length;J++){const ce=I.added[J];let pe=_.indexOf(ce);if(pe===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=_.length){_.push(ce),pe=Ne;break}else if(_[Ne]===null){_[Ne]=ce,pe=Ne;break}if(pe===-1)break}const ye=x[pe];ye&&ye.connect(ce)}}const X=new U,K=new U;function Q(I,J,ce){X.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ce.matrixWorld);const pe=X.distanceTo(K),ye=J.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,De=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],H=(ye[9]-1)/ye[5],Ot=(ye[8]-1)/ye[0],Ce=(Ne[8]+1)/Ne[0],Ie=De*Ot,Se=De*Ce,st=pe/(-Ot+Ce),ze=st*-Ot;J.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ze),I.translateZ(st),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const C=De+st,S=Ae+st,V=Ie-ze,se=Se+(pe-ze),ne=Ge*Ae/S*C,oe=H*Ae/S*C;I.projectionMatrix.makePerspective(V,se,ne,oe,C,S),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function D(I,J){J===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(J.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;E.near=T.near=M.near=I.near,E.far=T.far=M.far=I.far,(A!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,W=E.far);const J=I.parent,ce=E.cameras;D(E,J);for(let pe=0;pe<ce.length;pe++)D(ce[pe],J);ce.length===2?Q(E,M,T):E.projectionMatrix.copy(M.projectionMatrix),N(I,E,J)};function N(I,J,ce){ce===null?I.matrix.copy(J.matrixWorld):(I.matrix.copy(ce.matrixWorld),I.matrix.invert(),I.matrix.multiply(J.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(J.projectionMatrix),I.projectionMatrixInverse.copy(J.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Uf*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(I){l=I,p!==null&&(p.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)};let z=null;function $(I,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const ce=f.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let pe=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let ye=0;ye<ce.length;ye++){const Ne=ce[ye];let De=null;if(h!==null)De=h.getViewport(Ne);else{const Ge=u.getViewSubImage(p,Ne);De=Ge.viewport,ye===0&&(e.setRenderTargetTextures(d,Ge.colorTexture,p.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(d))}let Ae=k[ye];Ae===void 0&&(Ae=new Rn,Ae.layers.enable(ye),Ae.viewport=new It,k[ye]=Ae),Ae.matrix.fromArray(Ne.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ne.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(De.x,De.y,De.width,De.height),ye===0&&(E.matrix.copy(Ae.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(Ae)}}for(let ce=0;ce<x.length;ce++){const pe=_[ce],ye=x[ce];pe!==null&&ye!==void 0&&ye.update(pe,J,c||o)}z&&z(I,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const q=new t_;q.setAnimationLoop($),this.setAnimationLoop=function(I){z=I},this.dispose=function(){}}}function J2(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Jv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Q2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(g(x),y=f(x),r[x.id]=y,x.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(x,b);const M=e.render.frame;s[x.id]!==M&&(p(x),s[x.id]=M)}function f(x){const _=u();x.__bindingPointIndex=_;const y=t.createBuffer(),b=x.__size,M=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const _=r[x.id],y=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let M=0,T=y.length;M<T;M++){const k=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,A=k.length;E<A;E++){const W=k[E];if(h(W,M,E,b)===!0){const Z=W.__offset,ee=Array.isArray(W.value)?W.value:[W.value];let F=0;for(let X=0;X<ee.length;X++){const K=ee[X],Q=v(K);typeof K=="number"||typeof K=="boolean"?(W.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,Z+F,W.__data)):K.isMatrix3?(W.__data[0]=K.elements[0],W.__data[1]=K.elements[1],W.__data[2]=K.elements[2],W.__data[3]=0,W.__data[4]=K.elements[3],W.__data[5]=K.elements[4],W.__data[6]=K.elements[5],W.__data[7]=0,W.__data[8]=K.elements[6],W.__data[9]=K.elements[7],W.__data[10]=K.elements[8],W.__data[11]=0):(K.toArray(W.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,_,y,b){const M=x.value,T=_+"_"+y;if(b[T]===void 0)return typeof M=="number"||typeof M=="boolean"?b[T]=M:b[T]=M.clone(),!0;{const k=b[T];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return b[T]=M,!0}else if(k.equals(M)===!1)return k.copy(M),!0}return!1}function g(x){const _=x.uniforms;let y=0;const b=16;for(let T=0,k=_.length;T<k;T++){const E=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,W=E.length;A<W;A++){const Z=E[A],ee=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,X=ee.length;F<X;F++){const K=ee[F],Q=v(K),D=y%b;D!==0&&b-D<Q.boundary&&(y+=b-D),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=Q.storage}}}const M=y%b;return M>0&&(y+=b-M),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class c_{constructor(e={}){const{canvas:n=$M(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const h=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const _=this;let y=!1,b=0,M=0,T=null,k=-1,E=null;const A=new It,W=new It;let Z=null;const ee=new qe(0);let F=0,X=n.width,K=n.height,Q=1,D=null,N=null;const z=new It(0,0,X,K),$=new It(0,0,X,K);let q=!1;const I=new Bd;let J=!1,ce=!1,pe=null;const ye=new St,Ne=new he,De=new U,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return T===null?Q:1}let H=i;function Ot(w,B){for(let j=0;j<w.length;j++){const Y=w[j],G=n.getContext(Y,B);if(G!==null)return G}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fd}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",le,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),H=Ot(B,w),H===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,Ie,Se,st,ze,C,S,V,se,ne,oe,Me,de,xe,be,Be,te,tt,We,Ue,Te,me,P,ae;function Ee(){Ce=new cT(H),Ie=new iT(H,Ce,e),Ce.init(Ie),me=new q2(H,Ce,Ie),Se=new j2(H,Ce,Ie),st=new dT(H),ze=new D2,C=new Y2(H,Ce,Se,ze,Ie,me,st),S=new sT(_),V=new lT(_),se=new y1(H,Ie),P=new tT(H,Ce,se,Ie),ne=new uT(H,se,st,P),oe=new gT(H,ne,se,st),We=new mT(H,Ie,C),Be=new rT(ze),Me=new L2(_,S,V,Ce,Ie,P,Be),de=new J2(_,ze),xe=new I2,be=new B2(Ce,Ie),tt=new eT(_,S,V,Se,oe,p,l),te=new X2(_,oe,Ie),ae=new Q2(H,st,Ie,Se),Ue=new nT(H,Ce,st,Ie),Te=new fT(H,Ce,st,Ie),st.programs=Me.programs,_.capabilities=Ie,_.extensions=Ce,_.properties=ze,_.renderLists=xe,_.shadowMap=te,_.state=Se,_.info=st}Ee();const _e=new Z2(_,H);this.xr=_e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(X,K,!1))},this.getSize=function(w){return w.set(X,K)},this.setSize=function(w,B,j=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,K=B,n.width=Math.floor(w*Q),n.height=Math.floor(B*Q),j===!0&&(n.style.width=w+"px",n.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(X*Q,K*Q).floor()},this.setDrawingBufferSize=function(w,B,j){X=w,K=B,Q=j,n.width=Math.floor(w*j),n.height=Math.floor(B*j),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,B,j,Y){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,B,j,Y),Se.viewport(A.copy(z).multiplyScalar(Q).floor())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,B,j,Y){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,j,Y),Se.scissor(W.copy($).multiplyScalar(Q).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){Se.setScissorTest(q=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(w=!0,B=!0,j=!0){let Y=0;if(w){let G=!1;if(T!==null){const ge=T.texture.format;G=ge===kv||ge===Ov||ge===Fv}if(G){const ge=T.texture.type,we=ge===Zi||ge===zi||ge===Od||ge===wr||ge===Iv||ge===Uv,Le=tt.getClearColor(),Fe=tt.getClearAlpha(),Xe=Le.r,ke=Le.g,He=Le.b;we?(h[0]=Xe,h[1]=ke,h[2]=He,h[3]=Fe,H.clearBufferuiv(H.COLOR,0,h)):(g[0]=Xe,g[1]=ke,g[2]=He,g[3]=Fe,H.clearBufferiv(H.COLOR,0,g))}else Y|=H.COLOR_BUFFER_BIT}B&&(Y|=H.DEPTH_BUFFER_BIT),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",le,!1),xe.dispose(),be.dispose(),ze.dispose(),S.dispose(),V.dispose(),oe.dispose(),P.dispose(),ae.dispose(),Me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",_t),_e.removeEventListener("sessionend",et),pe&&(pe.dispose(),pe=null),Mt.stop()};function ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=st.autoReset,B=te.enabled,j=te.autoUpdate,Y=te.needsUpdate,G=te.type;Ee(),st.autoReset=w,te.enabled=B,te.autoUpdate=j,te.needsUpdate=Y,te.type=G}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const B=w.target;B.removeEventListener("dispose",fe),Pe(B)}function Pe(w){Re(w),ze.remove(w)}function Re(w){const B=ze.get(w).programs;B!==void 0&&(B.forEach(function(j){Me.releaseProgram(j)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,j,Y,G,ge){B===null&&(B=Ae);const we=G.isMesh&&G.matrixWorld.determinant()<0,Le=S_(w,B,j,Y,G);Se.setMaterial(Y,we);let Fe=j.index,Xe=1;if(Y.wireframe===!0){if(Fe=ne.getWireframeAttribute(j),Fe===void 0)return;Xe=2}const ke=j.drawRange,He=j.attributes.position;let xt=ke.start*Xe,fn=(ke.start+ke.count)*Xe;ge!==null&&(xt=Math.max(xt,ge.start*Xe),fn=Math.min(fn,(ge.start+ge.count)*Xe)),Fe!==null?(xt=Math.max(xt,0),fn=Math.min(fn,Fe.count)):He!=null&&(xt=Math.max(xt,0),fn=Math.min(fn,He.count));const Pt=fn-xt;if(Pt<0||Pt===1/0)return;P.setup(G,Y,Le,j,Fe);let ii,ut=Ue;if(Fe!==null&&(ii=se.get(Fe),ut=Te,ut.setIndex(ii)),G.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*Ge()),ut.setMode(H.LINES)):ut.setMode(H.TRIANGLES);else if(G.isLine){let je=Y.linewidth;je===void 0&&(je=1),Se.setLineWidth(je*Ge()),G.isLineSegments?ut.setMode(H.LINES):G.isLineLoop?ut.setMode(H.LINE_LOOP):ut.setMode(H.LINE_STRIP)}else G.isPoints?ut.setMode(H.POINTS):G.isSprite&&ut.setMode(H.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(xt,Pt,G.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,mc=Math.min(j.instanceCount,je);ut.renderInstances(xt,Pt,mc)}else ut.render(xt,Pt)};function Ke(w,B,j){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,aa(w,B,j),w.side=er,w.needsUpdate=!0,aa(w,B,j),w.side=hi):aa(w,B,j)}this.compile=function(w,B,j=null){j===null&&(j=w),m=be.get(j),m.init(),x.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==j&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(_._useLegacyLights);const Y=new Set;return w.traverse(function(G){const ge=G.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];Ke(Le,j,G),Y.add(Le)}else Ke(ge,j,G),Y.add(ge)}),x.pop(),m=null,Y},this.compileAsync=function(w,B,j=null){const Y=this.compile(w,B,j);return new Promise(G=>{function ge(){if(Y.forEach(function(we){ze.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){G(w);return}setTimeout(ge,10)}Ce.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ze=null;function mt(w){Ze&&Ze(w)}function _t(){Mt.stop()}function et(){Mt.start()}const Mt=new t_;Mt.setAnimationLoop(mt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(w){Ze=w,_e.setAnimationLoop(w),w===null?Mt.stop():Mt.start()},_e.addEventListener("sessionstart",_t),_e.addEventListener("sessionend",et),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,T),m=be.get(w,x.length),m.init(),x.push(m),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),I.setFromProjectionMatrix(ye),ce=this.localClippingEnabled,J=Be.init(this.clippingPlanes,ce),v=xe.get(w,d.length),v.init(),d.push(v),Yn(w,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,N),this.info.render.frame++,J===!0&&Be.beginShadows();const j=m.state.shadowsArray;if(te.render(j,w,B),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(v,w),m.setupLights(_._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let G=0,ge=Y.length;G<ge;G++){const we=Y[G];jd(v,w,we,we.viewport)}}else jd(v,w,B);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,B),P.resetDefaultState(),k=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Yn(w,B,j,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||I.intersectsSprite(w)){Y&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const we=oe.update(w),Le=w.material;Le.visible&&v.push(w,we,Le,j,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||I.intersectsObject(w))){const we=oe.update(w),Le=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),De.copy(we.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){const Fe=we.groups;for(let Xe=0,ke=Fe.length;Xe<ke;Xe++){const He=Fe[Xe],xt=Le[He.materialIndex];xt&&xt.visible&&v.push(w,we,xt,j,De.z,He)}}else Le.visible&&v.push(w,we,Le,j,De.z,null)}}const ge=w.children;for(let we=0,Le=ge.length;we<Le;we++)Yn(ge[we],B,j,Y)}function jd(w,B,j,Y){const G=w.opaque,ge=w.transmissive,we=w.transparent;m.setupLightsView(j),J===!0&&Be.setGlobalState(_.clippingPlanes,j),ge.length>0&&y_(G,ge,B,j),Y&&Se.viewport(A.copy(Y)),G.length>0&&oa(G,B,j),ge.length>0&&oa(ge,B,j),we.length>0&&oa(we,B,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function y_(w,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ge=Ie.isWebGL2;pe===null&&(pe=new Dr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?$o:Zi,minFilter:qo,samples:ge?4:0})),_.getDrawingBufferSize(Ne),ge?pe.setSize(Ne.x,Ne.y):pe.setSize(Ff(Ne.x),Ff(Ne.y));const we=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(ee),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=Ki,oa(w,j,Y),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe);let Fe=!1;for(let Xe=0,ke=B.length;Xe<ke;Xe++){const He=B[Xe],xt=He.object,fn=He.geometry,Pt=He.material,ii=He.group;if(Pt.side===hi&&xt.layers.test(Y.layers)){const ut=Pt.side;Pt.side=ln,Pt.needsUpdate=!0,Yd(xt,j,Y,fn,Pt,ii),Pt.side=ut,Pt.needsUpdate=!0,Fe=!0}}Fe===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe)),_.setRenderTarget(we),_.setClearColor(ee,F),_.toneMapping=Le}function oa(w,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ge=w.length;G<ge;G++){const we=w[G],Le=we.object,Fe=we.geometry,Xe=Y===null?we.material:Y,ke=we.group;Le.layers.test(j.layers)&&Yd(Le,B,j,Fe,Xe,ke)}}function Yd(w,B,j,Y,G,ge){w.onBeforeRender(_,B,j,Y,G,ge),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,B,j,Y,w,ge),G.transparent===!0&&G.side===hi&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,_.renderBufferDirect(j,B,Y,G,w,ge),G.side=er,G.needsUpdate=!0,_.renderBufferDirect(j,B,Y,G,w,ge),G.side=hi):_.renderBufferDirect(j,B,Y,G,w,ge),w.onAfterRender(_,B,j,Y,G,ge)}function aa(w,B,j){B.isScene!==!0&&(B=Ae);const Y=ze.get(w),G=m.state.lights,ge=m.state.shadowsArray,we=G.state.version,Le=Me.getParameters(w,G.state,ge,B,j),Fe=Me.getProgramCacheKey(Le);let Xe=Y.programs;Y.environment=w.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||Y.environment),Xe===void 0&&(w.addEventListener("dispose",fe),Xe=new Map,Y.programs=Xe);let ke=Xe.get(Fe);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===we)return $d(w,Le),ke}else Le.uniforms=Me.getUniforms(w),w.onBuild(j,Le,_),w.onBeforeCompile(Le,_),ke=Me.acquireProgram(Le,Fe),Xe.set(Fe,ke),Y.uniforms=Le.uniforms;const He=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Be.uniform),$d(w,Le),Y.needsLights=E_(w),Y.lightsStateVersion=we,Y.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function qd(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=dl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function $d(w,B){const j=ze.get(w);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function S_(w,B,j,Y,G){B.isScene!==!0&&(B=Ae),C.resetTextureUnits();const ge=B.fog,we=Y.isMeshStandardMaterial?B.environment:null,Le=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ei,Fe=(Y.isMeshStandardMaterial?V:S).get(Y.envMap||we),Xe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,fn=!!j.morphAttributes.color;let Pt=Ki;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const ii=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ut=ii!==void 0?ii.length:0,je=ze.get(Y),mc=m.state.lights;if(J===!0&&(ce===!0||w!==E)){const En=w===E&&Y.id===k;Be.setState(Y,w,En)}let gt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==mc.state.version||je.outputColorSpace!==Le||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||je.envMap!==Fe||Y.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==ke||je.morphTargets!==He||je.morphNormals!==xt||je.morphColors!==fn||je.toneMapping!==Pt||Ie.isWebGL2===!0&&je.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,je.__version=Y.version);let rr=je.currentProgram;gt===!0&&(rr=aa(Y,B,G));let Kd=!1,Ks=!1,gc=!1;const Vt=rr.getUniforms(),sr=je.uniforms;if(Se.useProgram(rr.program)&&(Kd=!0,Ks=!0,gc=!0),Y.id!==k&&(k=Y.id,Ks=!0),Kd||E!==w){Vt.setValue(H,"projectionMatrix",w.projectionMatrix),Vt.setValue(H,"viewMatrix",w.matrixWorldInverse);const En=Vt.map.cameraPosition;En!==void 0&&En.setValue(H,De.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&Vt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Vt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ks=!0,gc=!0)}if(G.isSkinnedMesh){Vt.setOptional(H,G,"bindMatrix"),Vt.setOptional(H,G,"bindMatrixInverse");const En=G.skeleton;En&&(Ie.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Vt.setValue(H,"boneTexture",En.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Vt.setOptional(H,G,"batchingTexture"),Vt.setValue(H,"batchingTexture",G._matricesTexture,C));const vc=j.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&Ie.isWebGL2===!0)&&We.update(G,j,rr),(Ks||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,Vt.setValue(H,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(sr.envMap.value=Fe,sr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ks&&(Vt.setValue(H,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&M_(sr,gc),ge&&Y.fog===!0&&de.refreshFogUniforms(sr,ge),de.refreshMaterialUniforms(sr,Y,Q,K,pe),dl.upload(H,qd(je),sr,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(dl.upload(H,qd(je),sr,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Vt.setValue(H,"center",G.center),Vt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Vt.setValue(H,"normalMatrix",G.normalMatrix),Vt.setValue(H,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const En=Y.uniformsGroups;for(let _c=0,w_=En.length;_c<w_;_c++)if(Ie.isWebGL2){const Zd=En[_c];ae.update(Zd,rr),ae.bind(Zd,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function M_(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function E_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,B,j){ze.get(w.texture).__webglTexture=B,ze.get(w.depthTexture).__webglTexture=j;const Y=ze.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const j=ze.get(w);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,j=0){T=w,b=B,M=j;let Y=!0,G=null,ge=!1,we=!1;if(w){const Fe=ze.get(w);Fe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):Fe.__webglFramebuffer===void 0?C.setupRenderTarget(w):Fe.__hasExternalTextures&&C.rebindTextures(w,ze.get(w.texture).__webglTexture,ze.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const ke=ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?G=ke[B][j]:G=ke[B],ge=!0):Ie.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?G=ze.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[j]:G=ke,A.copy(w.viewport),W.copy(w.scissor),Z=w.scissorTest}else A.copy(z).multiplyScalar(Q).floor(),W.copy($).multiplyScalar(Q).floor(),Z=q;if(Se.bindFramebuffer(H.FRAMEBUFFER,G)&&Ie.drawBuffers&&Y&&Se.drawBuffers(w,G),Se.viewport(A),Se.scissor(W),Se.setScissorTest(Z),ge){const Fe=ze.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,j)}else if(we){const Fe=ze.get(w.texture),Xe=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,Xe)}k=-1},this.readRenderTargetPixels=function(w,B,j,Y,G,ge,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Se.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Fe=w.texture,Xe=Fe.format,ke=Fe.type;if(Xe!==Gn&&me.convert(Xe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===$o&&(Ce.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ke!==Zi&&me.convert(ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Bi&&(Ie.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&j>=0&&j<=w.height-G&&H.readPixels(B,j,Y,G,me.convert(Xe),me.convert(ke),ge)}finally{const Fe=T!==null?ze.get(T).__webglFramebuffer:null;Se.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(w,B,j=0){const Y=Math.pow(2,-j),G=Math.floor(B.image.width*Y),ge=Math.floor(B.image.height*Y);C.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,w.x,w.y,G,ge),Se.unbindTexture()},this.copyTextureToTexture=function(w,B,j,Y=0){const G=B.image.width,ge=B.image.height,we=me.convert(j.format),Le=me.convert(j.type);C.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,G,ge,we,Le,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,w.x,w.y,we,Le,B.image),Y===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,B,j,Y,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Fe=me.convert(Y.format),Xe=me.convert(Y.type);let ke;if(Y.isData3DTexture)C.setTexture3D(Y,0),ke=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),ke=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=H.getParameter(H.UNPACK_ROW_LENGTH),xt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),fn=H.getParameter(H.UNPACK_SKIP_PIXELS),Pt=H.getParameter(H.UNPACK_SKIP_ROWS),ii=H.getParameter(H.UNPACK_SKIP_IMAGES),ut=j.isCompressedTexture?j.mipmaps[G]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(ke,G,B.x,B.y,B.z,ge,we,Le,Fe,Xe,ut.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ke,G,B.x,B.y,B.z,ge,we,Le,Fe,ut.data)):H.texSubImage3D(ke,G,B.x,B.y,B.z,ge,we,Le,Fe,Xe,ut),H.pixelStorei(H.UNPACK_ROW_LENGTH,He),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,fn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ii),G===0&&Y.generateMipmaps&&H.generateMipmap(ke),Se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){b=0,M=0,T=null,Se.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kd?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===uc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Ar:Bv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Nt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class eA extends c_{}eA.prototype.isWebGL1Renderer=!0;class Vd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new Vd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tA extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class u_ extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zm=new U,Bm=new U,Hm=new St,Tu=new zd,qa=new fc;class nA extends Ft{constructor(e=new ti,n=new u_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)zm.fromBufferAttribute(n,r-1),Bm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=zm.distanceTo(Bm);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Hm.copy(r).invert(),Tu.copy(e.ray).applyMatrix4(Hm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,f=new U,u=new U,p=new U,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=h){const b=g.getX(_),M=g.getX(_+1);if(c.fromBufferAttribute(m,b),f.fromBufferAttribute(m,M),Tu.distanceSqToSegment(c,f,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(p);k<e.near||k>e.far||n.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=h){if(c.fromBufferAttribute(m,_),f.fromBufferAttribute(m,_+1),Tu.distanceSqToSegment(c,f,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(p);M<e.near||M>e.far||n.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vm=new U,Gm=new U;class iA extends nA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Vm.fromBufferAttribute(n,r),Gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vm.distanceTo(Gm);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rA extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],p=i[r+1]-f,h=(o-f)/p;return(r+h)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new St;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),u=Math.abs(r[0].y),p=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(zt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gd extends ni{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,h=c-this.aY;l=p*f-h*u+this.aX,c=p*u+h*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sA extends Gd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let p=(o-s)/c-(a-s)/(c+f)+(a-o)/f,h=(a-o)/f-(l-o)/(f+u)+(l-a)/u;p*=f,h*=f,r(o,a,p,h)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const $a=new U,Au=new Wd,Cu=new Wd,Ru=new Wd;class oA extends ni{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:($a.subVectors(r[0],r[1]).add(r[0]),c=$a);const u=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:($a.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),h),v=Math.pow(u.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(f),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Au.initNonuniformCatmullRom(c.x,u.x,p.x,f.x,g,v,m),Cu.initNonuniformCatmullRom(c.y,u.y,p.y,f.y,g,v,m),Ru.initNonuniformCatmullRom(c.z,u.z,p.z,f.z,g,v,m)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(c.x,u.x,p.x,f.x,this.tension),Cu.initCatmullRom(c.y,u.y,p.y,f.y,this.tension),Ru.initCatmullRom(c.z,u.z,p.z,f.z,this.tension));return i.set(Au.calc(l),Cu.calc(l),Ru.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function aA(t,e){const n=1-t;return n*n*e}function lA(t,e){return 2*(1-t)*t*e}function cA(t,e){return t*t*e}function Co(t,e,n,i){return aA(t,e)+lA(t,n)+cA(t,i)}function uA(t,e){const n=1-t;return n*n*n*e}function fA(t,e){const n=1-t;return 3*n*n*t*e}function dA(t,e){return 3*(1-t)*t*t*e}function hA(t,e){return t*t*t*e}function Ro(t,e,n,i,r){return uA(t,e)+fA(t,n)+dA(t,i)+hA(t,r)}class f_ extends ni{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pA extends ni{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y),Ro(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d_ extends ni{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mA extends ni{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h_ extends ni{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gA extends ni{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y),Co(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p_ extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Wm(a,l.x,c.x,f.x,u.x),Wm(a,l.y,c.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var Xm=Object.freeze({__proto__:null,ArcCurve:sA,CatmullRomCurve3:oA,CubicBezierCurve:f_,CubicBezierCurve3:pA,EllipseCurve:Gd,LineCurve:d_,LineCurve3:mA,QuadraticBezierCurve:h_,QuadraticBezierCurve3:gA,SplineCurve:p_});class vA extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Xm[r.type]().fromJSON(r))}return this}}class jm extends vA{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new d_(this.currentPoint.clone(),new he(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new h_(this.currentPoint.clone(),new he(e,n),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new f_(this.currentPoint.clone(),new he(e,n),new he(i,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new p_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Gd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class m_ extends jm{constructor(e){super(e),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new jm().fromJSON(r))}return this}}const _A={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=g_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,f,u,p,h;if(i&&(s=EA(t,e,s,n)),t.length>80*n){a=c=t[0],l=f=t[1];for(let g=n;g<r;g+=n)u=t[g],p=t[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>f&&(f=p);h=Math.max(c-a,f-l),h=h!==0?32767/h:0}return Zo(s,o,n,a,l,h,0),o}};function g_(t,e,n,i,r){let s,o;if(r===IA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ym(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ym(s,t[s],t[s+1],o);return o&&pc(o,o.next)&&(Qo(o),o=o.next),o}function Fr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(pc(n,n.next)||dt(n.prev,n,n.next)===0)){if(Qo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Zo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&RA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?yA(t,i,r,s):xA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Qo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=SA(Fr(t),e,n),Zo(t,e,n,i,r,s,2)):o===2&&MA(t,e,n,i,r,s):Zo(Fr(t),e,n,i,r,s,1);break}}}function xA(t){const e=t.prev,n=t,i=t.next;if(dt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,p=r>s?r>o?r:o:s>o?s:o,h=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=p&&g.y>=u&&g.y<=h&&Ss(r,a,s,l,o,c,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,u=s.y,p=o.y,h=a<l?a<c?a:c:l<c?l:c,g=f<u?f<p?f:p:u<p?u:p,v=a>l?a>c?a:c:l>c?l:c,m=f>u?f>p?f:p:u>p?u:p,d=kf(h,g,e,n,i),x=kf(v,m,e,n,i);let _=t.prevZ,y=t.nextZ;for(;_&&_.z>=d&&y&&y.z<=x;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Ss(a,f,l,u,c,p,_.x,_.y)&&dt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=h&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ss(a,f,l,u,c,p,y.x,y.y)&&dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=h&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Ss(a,f,l,u,c,p,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=h&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ss(a,f,l,u,c,p,y.x,y.y)&&dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function SA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!pc(r,s)&&v_(r,i,i.next,s)&&Jo(r,s)&&Jo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Qo(i),Qo(i.next),i=t=s),i=i.next}while(i!==t);return Fr(i)}function MA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&LA(o,a)){let l=__(o,a);o=Fr(o,o.next),l=Fr(l,l.next),Zo(o,e,n,i,r,s,0),Zo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function EA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=g_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(PA(c));for(r.sort(wA),s=0;s<r.length;s++)n=TA(r[s],n);return n}function wA(t,e){return t.x-e.x}function TA(t,e){const n=AA(t,e);if(!n)return e;const i=__(n,t);return Fr(i,i.next),Fr(n,n.next)}function AA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const p=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=s&&p>i&&(i=p,r=n.x<n.next.x?n:n.next,p===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let f=1/0,u;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ss(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(s-n.x),Jo(n,t)&&(u<f||u===f&&(n.x>r.x||n.x===r.x&&CA(r,n)))&&(r=n,f=u)),n=n.next;while(n!==a);return r}function CA(t,e){return dt(t.prev,t,e.prev)<0&&dt(e.next,t,t.next)<0}function RA(t,e,n,i){let r=t;do r.z===0&&(r.z=kf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,bA(r)}function bA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function kf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function PA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ss(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function LA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!DA(t,e)&&(Jo(t,e)&&Jo(e,t)&&NA(t,e)&&(dt(t.prev,t,e.prev)||dt(t,e.prev,e))||pc(t,e)&&dt(t.prev,t,t.next)>0&&dt(e.prev,e,e.next)>0)}function dt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function pc(t,e){return t.x===e.x&&t.y===e.y}function v_(t,e,n,i){const r=Za(dt(t,e,n)),s=Za(dt(t,e,i)),o=Za(dt(n,i,t)),a=Za(dt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ka(t,n,e)||s===0&&Ka(t,i,e)||o===0&&Ka(n,t,i)||a===0&&Ka(n,e,i))}function Ka(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Za(t){return t>0?1:t<0?-1:0}function DA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&v_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Jo(t,e){return dt(t.prev,t,t.next)<0?dt(t,e,t.next)>=0&&dt(t,t.prev,e)>=0:dt(t,e,t.prev)<0||dt(t,t.next,e)<0}function NA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function __(t,e){const n=new zf(t.i,t.x,t.y),i=new zf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ym(t,e,n,i){const r=new zf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function zf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function IA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class bo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return bo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];qm(e),$m(i,e);let o=e.length;n.forEach(qm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,$m(i,n[l]);const a=_A.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function $m(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Xd extends ti{constructor(e=new m_([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new un(r,3)),this.setAttribute("normal",new un(s,3)),this.setAttribute("uv",new un(o,2));function c(f){const u=r.length/3,p=f.extractPoints(n);let h=p.shape;const g=p.holes;bo.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,d=g.length;m<d;m++){const x=g[m];bo.isClockWise(x)===!0&&(g[m]=x.reverse())}const v=bo.triangulateShape(h,g);for(let m=0,d=g.length;m<d;m++){const x=g[m];h=h.concat(x)}for(let m=0,d=h.length;m<d;m++){const x=h[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,d=v.length;m<d;m++){const x=v[m],_=x[0]+u,y=x[1]+u,b=x[2]+u;i.push(_,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return UA(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Xd(i,e.curveSegments)}}function UA(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class ss extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hv,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x_ extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class FA extends x_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bu=new St,Km=new U,Zm=new U;class OA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kA extends OA{constructor(){super(new n_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jm extends x_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new kA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return(typeof performance>"u"?Date:performance).now()}class eg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BA extends iA{constructor(e=10,n=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,h=0,g=-a;p<=n;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=p===s?i:r;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const f=new ti;f.setAttribute("position",new un(l,3)),f.setAttribute("color",new un(c,3));const u=new u_({vertexColors:!0,toneMapped:!1});super(f,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);const tg={type:"change"},Pu={type:"start"},ng={type:"end"},Ja=new zd,ig=new Ii,HA=Math.cos(70*qM.DEG2RAD);class VA extends zr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",be),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tg),i.update(),s=r.NONE},this.update=function(){const P=new U,ae=new Nr().setFromUnitVectors(e.up,new U(0,1,0)),Ee=ae.clone().invert(),_e=new U,ie=new Nr,L=new U,le=2*Math.PI;return function(Pe=null){const Re=i.object.position;P.copy(Re).sub(i.target),P.applyQuaternion(ae),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&Z(A(Pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ke=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite(Ke)&&isFinite(Ze)&&(Ke<-Math.PI?Ke+=le:Ke>Math.PI&&(Ke-=le),Ze<-Math.PI?Ze+=le:Ze>Math.PI&&(Ze-=le),Ke<=Ze?a.theta=Math.max(Ke,Math.min(Ze,a.theta)):a.theta=a.theta>(Ke+Ze)/2?Math.max(Ke,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&M||i.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ee),Re.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let mt=!1;if(i.zoomToCursor&&M){let _t=null;if(i.object.isPerspectiveCamera){const et=P.length();_t=z(et*c);const Mt=et-_t;i.object.position.addScaledVector(y,Mt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new U(b.x,b.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),mt=!0;const Mt=new U(b.x,b.y,0);Mt.unproject(i.object),i.object.position.sub(Mt).add(et),i.object.updateMatrixWorld(),_t=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;_t!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(_t).add(i.object.position):(Ja.origin.copy(i.object.position),Ja.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ja.direction))<HA?e.lookAt(i.target):(ig.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ja.intersectPlane(ig,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),mt=!0);return c=1,M=!1,mt||_e.distanceToSquared(i.object.position)>o||8*(1-ie.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(tg),_e.copy(i.object.position),ie.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",tt),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new eg,l=new eg;let c=1;const f=new U,u=new he,p=new he,h=new he,g=new he,v=new he,m=new he,d=new he,x=new he,_=new he,y=new U,b=new he;let M=!1;const T=[],k={};let E=!1;function A(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function W(P){const ae=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*ae)}function Z(P){l.theta-=P}function ee(P){l.phi-=P}const F=function(){const P=new U;return function(Ee,_e){P.setFromMatrixColumn(_e,0),P.multiplyScalar(-Ee),f.add(P)}}(),X=function(){const P=new U;return function(Ee,_e){i.screenSpacePanning===!0?P.setFromMatrixColumn(_e,1):(P.setFromMatrixColumn(_e,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ee),f.add(P)}}(),K=function(){const P=new U;return function(Ee,_e){const ie=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let le=P.length();le*=Math.tan(i.object.fov/2*Math.PI/180),F(2*Ee*le/ie.clientHeight,i.object.matrix),X(2*_e*le/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(Ee*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),X(_e*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(P,ae){if(!i.zoomToCursor)return;M=!0;const Ee=i.domElement.getBoundingClientRect(),_e=P-Ee.left,ie=ae-Ee.top,L=Ee.width,le=Ee.height;b.x=_e/L*2-1,b.y=-(ie/le)*2+1,y.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function $(P){u.set(P.clientX,P.clientY)}function q(P){N(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function I(P){g.set(P.clientX,P.clientY)}function J(P){p.set(P.clientX,P.clientY),h.subVectors(p,u).multiplyScalar(i.rotateSpeed);const ae=i.domElement;Z(2*Math.PI*h.x/ae.clientHeight),ee(2*Math.PI*h.y/ae.clientHeight),u.copy(p),i.update()}function ce(P){x.set(P.clientX,P.clientY),_.subVectors(x,d),_.y>0?Q(W(_.y)):_.y<0&&D(W(_.y)),d.copy(x),i.update()}function pe(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),K(m.x,m.y),g.copy(v),i.update()}function ye(P){N(P.clientX,P.clientY),P.deltaY<0?D(W(P.deltaY)):P.deltaY>0&&Q(W(P.deltaY)),i.update()}function Ne(P){let ae=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),ae=!0;break}ae&&(P.preventDefault(),i.update())}function De(P){if(T.length===1)u.set(P.pageX,P.pageY);else{const ae=me(P),Ee=.5*(P.pageX+ae.x),_e=.5*(P.pageY+ae.y);u.set(Ee,_e)}}function Ae(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const ae=me(P),Ee=.5*(P.pageX+ae.x),_e=.5*(P.pageY+ae.y);g.set(Ee,_e)}}function Ge(P){const ae=me(P),Ee=P.pageX-ae.x,_e=P.pageY-ae.y,ie=Math.sqrt(Ee*Ee+_e*_e);d.set(0,ie)}function H(P){i.enableZoom&&Ge(P),i.enablePan&&Ae(P)}function Ot(P){i.enableZoom&&Ge(P),i.enableRotate&&De(P)}function Ce(P){if(T.length==1)p.set(P.pageX,P.pageY);else{const Ee=me(P),_e=.5*(P.pageX+Ee.x),ie=.5*(P.pageY+Ee.y);p.set(_e,ie)}h.subVectors(p,u).multiplyScalar(i.rotateSpeed);const ae=i.domElement;Z(2*Math.PI*h.x/ae.clientHeight),ee(2*Math.PI*h.y/ae.clientHeight),u.copy(p)}function Ie(P){if(T.length===1)v.set(P.pageX,P.pageY);else{const ae=me(P),Ee=.5*(P.pageX+ae.x),_e=.5*(P.pageY+ae.y);v.set(Ee,_e)}m.subVectors(v,g).multiplyScalar(i.panSpeed),K(m.x,m.y),g.copy(v)}function Se(P){const ae=me(P),Ee=P.pageX-ae.x,_e=P.pageY-ae.y,ie=Math.sqrt(Ee*Ee+_e*_e);x.set(0,ie),_.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),Q(_.y),d.copy(x);const L=(P.pageX+ae.x)*.5,le=(P.pageY+ae.y)*.5;N(L,le)}function st(P){i.enableZoom&&Se(P),i.enablePan&&Ie(P)}function ze(P){i.enableZoom&&Se(P),i.enableRotate&&Ce(P)}function C(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",V)),We(P),P.pointerType==="touch"?Be(P):se(P))}function S(P){i.enabled!==!1&&(P.pointerType==="touch"?te(P):ne(P))}function V(P){Ue(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(ng),s=r.NONE}function se(P){let ae;switch(P.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Hr.DOLLY:if(i.enableZoom===!1)return;q(P),s=r.DOLLY;break;case Hr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;I(P),s=r.PAN}else{if(i.enableRotate===!1)return;$(P),s=r.ROTATE}break;case Hr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;$(P),s=r.ROTATE}else{if(i.enablePan===!1)return;I(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pu)}function ne(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;J(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(P);break;case r.PAN:if(i.enablePan===!1)return;pe(P);break}}function oe(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Pu),ye(Me(P)),i.dispatchEvent(ng))}function Me(P){const ae=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ae){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!E&&(Ee.deltaY*=10),Ee}function de(P){P.key==="Control"&&(E=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(P){P.key==="Control"&&(E=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function be(P){i.enabled===!1||i.enablePan===!1||Ne(P)}function Be(P){switch(Te(P),T.length){case 1:switch(i.touches.ONE){case Vr.ROTATE:if(i.enableRotate===!1)return;De(P),s=r.TOUCH_ROTATE;break;case Vr.PAN:if(i.enablePan===!1)return;Ae(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(P),s=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ot(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pu)}function te(P){switch(Te(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ce(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ie(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;st(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(P),i.update();break;default:s=r.NONE}}function tt(P){i.enabled!==!1&&P.preventDefault()}function We(P){T.push(P.pointerId)}function Ue(P){delete k[P.pointerId];for(let ae=0;ae<T.length;ae++)if(T[ae]==P.pointerId){T.splice(ae,1);return}}function Te(P){let ae=k[P.pointerId];ae===void 0&&(ae=new he,k[P.pointerId]=ae),ae.set(P.pageX,P.pageY)}function me(P){const ae=P.pointerId===T[0]?T[1]:T[0];return k[ae]}i.domElement.addEventListener("contextmenu",tt),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",oe,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}const Lu=new Map;function GA(t){if(Lu.has(t.id))return Lu.get(t.id);const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");if(n.fillStyle=t.base,n.fillRect(0,0,256,256),t.pattern==="plank"){n.strokeStyle=t.line,n.lineWidth=3;for(let r=0;r<=256;r+=64)n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.lineWidth=2;for(let r=0;r<4;r++){const s=r%2?64:192;n.beginPath(),n.moveTo(s,r*64),n.lineTo(s,r*64+64),n.stroke()}n.globalAlpha=.08;for(let r=0;r<60;r++){n.strokeStyle=r%2?"#000":"#fff";const s=Math.random()*256;n.beginPath(),n.moveTo(0,s),n.lineTo(256,s+(Math.random()-.5)*8),n.stroke()}n.globalAlpha=1}else if(t.pattern==="tile"){n.strokeStyle=t.line,n.lineWidth=5;for(let r=0;r<=256;r+=128)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke(),n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke()}else for(let r=0;r<500;r++)n.fillStyle=`rgba(${r%2?"255,255,255":"0,0,0"},.05)`,n.fillRect(Math.random()*256,Math.random()*256,2,2);const i=new rA(e);return i.wrapS=i.wrapT=zl,i.repeat.set(1/(t.tileFt??2),1/(t.tileFt??2)),i.colorSpace=Nt,i.anisotropy=8,Lu.set(t.id,i),i}const WA=t=>[...t].sort((e,n)=>{var s,o;const i=(s=yn(e.itemId))!=null&&s.rug?0:1,r=(o=yn(n.itemId))!=null&&o.rug?0:1;return i-r});function XA(){const t=wt.useRef(null),e=Oe(r=>r.viewMode),n=wt.useRef({x:30,z:34,yaw:Math.PI,pitch:0,keys:{},fwd:0});wt.useEffect(()=>{const r=t.current,s=new tA,o="#F4EFE6";s.background=new qe(o),s.fog=new Vd(o,140,340);const a=new Rn(55,r.clientWidth/r.clientHeight,.1,600);a.position.set(52,40,52),a.rotation.order="YXZ";const l=matchMedia("(pointer: coarse)").matches,c=new c_({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(devicePixelRatio,l?1.5:2)),c.setSize(r.clientWidth,r.clientHeight),c.shadowMap.enabled=!0,c.shadowMap.type=bv,c.toneMapping=Lv,c.toneMappingExposure=1.08,c.domElement.style.touchAction="none",r.appendChild(c.domElement),s.add(new FA("#FFF4E2","#8C8577",.75));const f=new Jm("#DCE6EE",.45);f.position.set(-45,35,-35),s.add(f);const u=new Jm("#fff3e0",2.2);u.castShadow=!0,u.shadow.mapSize.set(l?1024:2048,l?1024:2048),Object.assign(u.shadow.camera,{left:-45,right:45,top:45,bottom:-45,far:250}),u.shadow.bias=-4e-4,u.target.position.set(30,0,30),s.add(u,u.target);const p=new gn(new Ko(500,500),new ss({color:"#A8B79A",roughness:1}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,s.add(p);const h=new gn(new Ko(60.8,60.8),new ss({color:"#DED5C4",roughness:.95}));h.rotation.x=-Math.PI/2,h.position.set(30,.005,30),h.receiveShadow=!0,s.add(h);const g=new BA(60,60,13353650,14998734);g.position.set(30,.015,30),s.add(g);const v=new ys;s.add(v);const m=new VA(a,c.domElement);m.target.set(22,3,18),m.maxPolarAngle=Math.PI/2-.04,m.enableDamping=!0;let d=null;const x=c.domElement,_=D=>{Oe.getState().viewMode==="walk"&&(d=[D.clientX,D.clientY],x.setPointerCapture(D.pointerId))},y=D=>{if(!d)return;const N=n.current;N.yaw-=(D.clientX-d[0])*.005,N.pitch=gi(N.pitch-(D.clientY-d[1])*.004,-1.2,1.2),d=[D.clientX,D.clientY]},b=()=>{d=null};x.addEventListener("pointerdown",_),x.addEventListener("pointermove",y),x.addEventListener("pointerup",b);const M=D=>{n.current.keys[D.key.toLowerCase()]=!0},T=D=>{n.current.keys[D.key.toLowerCase()]=!1};window.addEventListener("keydown",M),window.addEventListener("keyup",T);const k=new Map,E=(D,N=0)=>{const z=`${String(D).trim()}|${N||0}`;let $=k.get(z);if(!$){const q=new qe(String(D).trim());if(N){const I={};q.getHSL(I),q.setHSL(I.h,I.s,Math.min(.95,Math.max(.05,I.l+N)))}$=new ss({color:q,roughness:.85}),$.userData.shared=!0,k.set(z,$)}return $};let A=!0;const W=()=>{v.traverse(N=>{var z,$,q;N.isMesh&&(N.geometry.dispose(),(z=N.material.userData)!=null&&z.shared||(q=($=N.material).dispose)==null||q.call($))}),v.clear();const D=Oe.getState();for(const N of D.rooms){const z=Id(D.roomMaterials[N.id]),$=new m_(N.poly.map(([J,ce])=>new he(J,-ce))),q=z?new ss({map:GA(z),roughness:.9}):new ss({color:"#CFC8BA",roughness:.95}),I=new gn(new Xd($),q);I.rotation.x=-Math.PI/2,I.position.y=.03,I.receiveShadow=!0,v.add(I)}for(const N of D.walls){const z=Ud(D.wallMaterials[N.id]),$=new ss({color:z?z.color:"#F5F0E6",roughness:.92});for(const q of lc(N)){const I=new gn(new Ir(q.sx,q.sy,q.sz),$);I.position.set(q.cx,q.cy,q.cz),I.rotation.y=q.rotY,I.castShadow=I.receiveShadow=!0,v.add(I)}}for(const N of WA(D.furniture)){const z=yn(N.itemId);if(!z)continue;const $=new ys;for(const q of z.parts){const I=new gn(new Ir(q.w,q.y1-q.y0,q.d),E(N.tint||z.color,N.tint?0:q.sh));I.position.set(q.dx,(q.y0+q.y1)/2,q.dz),I.castShadow=!0,I.receiveShadow=!!z.rug,I.renderOrder=z.rug?0:1,$.add(I)}$.position.set(N.pos[0],0,N.pos[1]),$.rotation.y=N.rotDeg*Math.PI/180,$.scale.set(N.sw??1,N.sw??1,N.sd??1),v.add($)}},Z=Oe.subscribe(()=>{A=!0});let ee=null;const F=new zA;let X;const K=()=>{X=requestAnimationFrame(K);const D=Math.min(F.getDelta(),.05),N=Oe.getState();A&&(A=!1,W());const z=(N.timeOfDay-5)/16,$=Math.PI*(.2+1.6*z),q=Math.max(.06,Math.sin(z*Math.PI))*1.05;if(u.position.set(30+Math.cos(q)*Math.cos($)*90,Math.sin(q)*90,30+Math.cos(q)*Math.sin($)*90),u.intensity=.5+2.1*Math.sin(q),u.color.set(q>.5?"#FFF3E0":"#FFC98F"),N.viewMode!==ee&&(ee=N.viewMode,m.enabled=N.viewMode!=="walk",N.viewMode==="walk")){const I=N.rooms[0],J=I?[I.poly.reduce((ce,pe)=>ce+pe[0],0)/I.poly.length,I.poly.reduce((ce,pe)=>ce+pe[1],0)/I.poly.length]:[30,30];Object.assign(n.current,{x:J[0],z:J[1],yaw:Math.PI*.25,pitch:0})}if(N.viewMode==="walk"){const I=n.current,J=7*D,ce=-Math.sin(I.yaw),pe=-Math.cos(I.yaw),ye=Math.cos(I.yaw),Ne=-Math.sin(I.yaw),De=(I.keys.w||I.keys.arrowup?1:0)-(I.keys.s||I.keys.arrowdown?1:0)+I.fwd,Ae=(I.keys.d||I.keys.arrowright?1:0)-(I.keys.a||I.keys.arrowleft?1:0);let Ge=gi(I.x+(ce*De+ye*Ae)*J,1,59),H=gi(I.z+(pe*De+Ne*Ae)*J,1,59);mp(Ge,I.z,1,N.walls)||(I.x=Ge),mp(I.x,H,1,N.walls)||(I.z=H),a.rotation.y=I.yaw,a.rotation.x=I.pitch,a.position.set(I.x,5.5,I.z)}else m.update();c.render(s,a)};K();const Q=new ResizeObserver(()=>{a.aspect=r.clientWidth/r.clientHeight,a.updateProjectionMatrix(),c.setSize(r.clientWidth,r.clientHeight)});return Q.observe(r),Er.snapshot=()=>c.domElement.toDataURL("image/png"),()=>{cancelAnimationFrame(X),Q.disconnect(),Z(),window.removeEventListener("keydown",M),window.removeEventListener("keyup",T),x.removeEventListener("pointerdown",_),x.removeEventListener("pointermove",y),x.removeEventListener("pointerup",b),m.dispose(),v.traverse(D=>{var N,z,$;D.isMesh&&(D.geometry.dispose(),(N=D.material.userData)!=null&&N.shared||($=(z=D.material).dispose)==null||$.call(z))}),c.dispose(),r.removeChild(c.domElement),Er.snapshot=null}},[]);const i=n.current;return O.jsxs("div",{className:"three-wrap",children:[O.jsx("div",{ref:t,className:"three-mount"}),e==="walk"&&O.jsxs("div",{className:"walkpad",children:[O.jsx("button",{onPointerDown:()=>i.fwd=1,onPointerUp:()=>i.fwd=0,onPointerLeave:()=>i.fwd=0,children:"▲ Walk"}),O.jsx("button",{onPointerDown:()=>i.fwd=-1,onPointerUp:()=>i.fwd=0,onPointerLeave:()=>i.fwd=0,children:"▼ Back"}),O.jsx("span",{className:"walkhint",children:"drag to look around · WASD moves"})]})]})}const rg=(t,e)=>{const n=document.createElement("a");n.href=t,n.download=e,n.click()},jA=()=>O.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("path",{d:"M4 11.5 12 4.5l8 7"}),O.jsx("path",{d:"M6.5 10v9.5h11V10"}),O.jsx("path",{d:"M10.5 19.5v-5h3v5"})]}),YA=()=>O.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[O.jsx("circle",{cx:"12",cy:"12",r:"3.6"}),O.jsx("path",{d:"M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18"})]});function qA({onToggleSheet:t}){const e=Oe(M=>M.viewMode),n=Oe(M=>M.setView),i=Oe(M=>M.past.length>0),r=Oe(M=>M.future.length>0),{undo:s,redo:o}=Oe.getState(),a=Oe(M=>M.timeOfDay),l=Oe(M=>M.setTime),c=Oe(M=>M.budgetCap),f=Oe(M=>M.setCap),u=Oe(IS),p=wt.useRef(null),[h,g]=wt.useState(null),v=M=>{g(M),setTimeout(()=>g(null),1800)},m=Math.min(100,u.total/c*100),d=m>100?"over":m>85?"warn":"ok",x=()=>{const M=Oe.getState();localStorage.setItem("LayoutLab:save",JSON.stringify({walls:M.walls,furniture:M.furniture,roomMaterials:M.roomMaterials,wallMaterials:M.wallMaterials,wallHeight:M.wallHeight})),v("Saved to this device")},_=()=>{const M=Oe.getState(),T={schemaVersion:"1.0.0",name:"LayoutLab Plan",units:"ft",grid:{cellSizeFt:1,cols:60,rows:60},budget:{currency:"USD",capUsd:M.budgetCap},levels:[{id:"lvl_ground",wallHeightFt:M.wallHeight,walls:M.walls,furniture:M.furniture.map(E=>({id:E.id,catalogId:E.itemId,pos:E.pos,rotDeg:E.rotDeg,tint:E.tint??null,sw:E.sw??1,sd:E.sd??1})),roomMaterials:M.roomMaterials,wallMaterials:M.wallMaterials}],meta:{updatedAt:new Date().toISOString()}},k=URL.createObjectURL(new Blob([JSON.stringify(T,null,2)],{type:"application/json"}));rg(k,"LayoutLab-plan.json"),URL.revokeObjectURL(k),v("Plan exported")},y=M=>{const T=new FileReader;T.onload=()=>{var k,E;try{const A=JSON.parse(T.result);if((k=A.levels)!=null&&k[0]){const W=A.levels[0];Oe.getState().hydrate({walls:W.walls||[],furniture:(W.furniture||[]).map(Z=>{const ee=yn(Z.catalogId);return{id:Z.id,itemId:Z.catalogId,pos:Z.pos,rotDeg:Z.rotDeg??0,tint:Z.tint??null,sw:Z.sw??1,sd:Z.sd??1,w:(ee==null?void 0:ee.w)??1,d:(ee==null?void 0:ee.d)??1}}),roomMaterials:W.roomMaterials||{},wallMaterials:W.wallMaterials||{},wallHeight:W.wallHeightFt||8})}else A.walls&&Oe.getState().hydrate(A);(E=A.budget)!=null&&E.capUsd&&f(A.budget.capUsd),v("Plan loaded")}catch{v("Could not read that file")}},T.readAsText(M)},b=()=>{var T;const M=(T=Er.snapshot)==null?void 0:T.call(Er);M&&(rg(M,`LayoutLab-${e}.png`),v("Photo saved"))};return O.jsxs("header",{className:"topbar",children:[O.jsxs("div",{className:"brand",children:[O.jsx("span",{className:"brand-mark",children:O.jsx(jA,{})}),O.jsxs("div",{children:[O.jsx("div",{className:"brand-name",children:"LayoutLab"}),O.jsx("div",{className:"brand-tag",children:"plan it before you buy it"})]})]}),O.jsx("div",{className:"viewtoggle",role:"tablist","aria-label":"View mode",children:[["2d","2D Plan"],["3d","3D View"],["walk","Walk through"]].map(([M,T])=>O.jsx("button",{className:e===M?"on":"",onClick:()=>n(M),role:"tab","aria-selected":e===M,children:T},M))}),O.jsxs("div",{className:"topbtns",children:[O.jsx("button",{className:"btn icon",disabled:!i,onClick:s,title:"Undo (Ctrl+Z)",children:"↶"}),O.jsx("button",{className:"btn icon",disabled:!r,onClick:o,title:"Redo (Ctrl+Y)",children:"↷"}),O.jsx("span",{className:"vr"}),O.jsx("button",{className:"btn primary",onClick:x,title:"Save your plan on this device",children:"Save"}),O.jsx("button",{className:"btn opt",onClick:()=>{var M;return(M=p.current)==null?void 0:M.click()},title:"Open a saved plan file",children:"Open"}),O.jsx("button",{className:"btn opt",onClick:_,title:"Download your plan as a file",children:"Export"}),O.jsx("button",{className:"btn opt",onClick:b,title:"Download a picture of this view",children:"Photo"}),O.jsx("button",{className:"btn danger",onClick:()=>{confirm("Start a fresh, empty plan?")&&Oe.getState().clearAll()},title:"Clear everything and start over",children:"New"}),O.jsx("input",{ref:p,type:"file",accept:".json",hidden:!0,onChange:M=>M.target.files[0]&&y(M.target.files[0])})]}),e!=="2d"&&O.jsxs("label",{className:"sunctl",title:"Time of day — watch the light move",children:[O.jsx(YA,{}),O.jsx("input",{type:"range",min:"5",max:"21",step:"0.25",value:a,onChange:M=>l(+M.target.value)}),O.jsxs("span",{className:"mono",children:[Math.floor(a),":",String(Math.round(a%1*60)).padStart(2,"0")]})]}),O.jsxs("div",{className:`budget ${d}`,title:`Furniture ${Mr(u.items)} · Finishes ${Mr(u.finishes)}`,children:[O.jsx("span",{className:"budget-label",children:"Budget"}),O.jsx("span",{className:"budget-total",children:Mr(u.total)}),O.jsx("div",{className:"budget-track",children:O.jsx("div",{className:"budget-fill",style:{width:`${m}%`}})}),O.jsxs("span",{className:"budget-cap mono",children:["$",O.jsx("input",{type:"number",value:c,min:100,step:100,onChange:M=>f(+M.target.value||100),"aria-label":"Budget cap"})]})]}),O.jsx("button",{className:"btn sheetbtn",onClick:t,children:"Furniture ▤"}),h&&O.jsx("div",{className:"toast",role:"status",children:h})]})}const ur={fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"},sg={select:O.jsx("svg",{viewBox:"0 0 24 24",children:O.jsx("path",{d:"M7 3.5v14.8l3.6-3.5 2.3 5.2 2.6-1.2-2.3-5.1 4.8-.4z",fill:"currentColor"})}),wall:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("rect",{x:"3.5",y:"4.5",width:"17",height:"15",rx:"1.5"}),O.jsx("path",{d:"M3.5 9.5h17M3.5 14.5h17M9 4.5V9.5M15 9.5v5M9 14.5v5"})]}),door:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("path",{d:"M5 20h14"}),O.jsx("path",{d:"M7 20V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V20"}),O.jsx("circle",{cx:"14.3",cy:"12.3",r:"0.9",fill:"currentColor",stroke:"none"})]}),window:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("rect",{x:"4.5",y:"4.5",width:"15",height:"15",rx:"1.5"}),O.jsx("path",{d:"M12 4.5v15M4.5 12h15"})]}),floor:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("rect",{x:"3.5",y:"4",width:"12",height:"5",rx:"2"}),O.jsx("path",{d:"M15.5 6.5h4V12h-8v2.5"}),O.jsx("rect",{x:"9.5",y:"14.5",width:"4",height:"6",rx:"1.2"})]}),wallpaint:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("path",{d:"M14 4l6 6-3.2 3.2-6-6z"}),O.jsx("path",{d:"M10.8 7.2C8 8.5 6.5 10.5 6.5 12.8c0 1.3-.9 2.3-2.5 2.7 1 .9 3.2 1 4.8 0 2-1.3 2.6-4 2-8.3z"})]}),erase:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("path",{d:"M5 20h14"}),O.jsx("path",{d:"M9 14.5 14.5 9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L14 19.5H11l-2-2a2 2 0 0 1 0-3z"}),O.jsx("path",{d:"m11.5 12 5 5"})]}),hide:O.jsxs("svg",{viewBox:"0 0 24 24",...ur,children:[O.jsx("path",{d:"M4.5 4.5l15 15"}),O.jsx("path",{d:"M10.7 6.1c.4-.1.9-.1 1.3-.1 4.6 0 7.9 3.6 9 6a1 1 0 0 1 0 .8c-.7 1.6-2.4 3.7-4.9 5M6.9 7.6C4.6 9.1 3 11.1 2.2 12.6a1 1 0 0 0 0 .8C3.3 15.8 6.6 19.4 11.2 19.4c1.2 0 2.3-.2 3.3-.6"})]})},$A=[{id:"select",label:"Select",tip:"Select & move things (V)"},{id:"wall",label:"Walls",tip:"Draw a wall (W)",primary:!0},{id:"door",label:"Door",tip:"Add a door (D)"},{id:"window",label:"Window",tip:"Add a window (N)"},{id:"floor",label:"Floor",tip:"Change flooring (F)"},{id:"wallpaint",label:"Paint",tip:"Paint walls (P)"},{id:"erase",label:"Erase",tip:"Remove things (E)"}];function KA(){const t=Oe(s=>s.tool),e=Oe(s=>s.setTool),n=Oe(s=>s.tipsHidden),i=Oe(s=>s.hideTips),r=Oe(s=>s.showTips);return O.jsxs("nav",{className:"toolbar","aria-label":"Tools",children:[$A.map(s=>O.jsxs("button",{className:`tool ${t===s.id?"on":""} ${s.primary?"primary":""}`,onClick:()=>{e(s.id),r()},title:s.tip,"aria-pressed":t===s.id,children:[sg[s.id],O.jsx("span",{className:"tool-label",children:s.label})]},s.id)),O.jsx("span",{className:"tool-sep","aria-hidden":"true"}),O.jsxs("button",{className:`tool ${n?"on":""}`,onClick:i,title:"Hide the tips box — click any tool to bring it back (H)","aria-pressed":n,children:[sg.hide,O.jsx("span",{className:"tool-label",children:"Hide box"})]})]})}function ZA({open:t,onClose:e}){const[n,i]=wt.useState("All"),r=Oe(f=>f.placingId),s=Oe(f=>f.setPlacing),o=Oe(f=>f.setView),a=Oe(f=>f.viewMode),l=n==="All"?Ol:Ol.filter(f=>f.cat===n),c=f=>{a!=="2d"&&o("2d"),s(f),e()};return O.jsxs("aside",{className:`catalog ${t?"open":""}`,"aria-label":"Furniture catalog",children:[O.jsxs("div",{className:"cat-head",children:[O.jsxs("div",{children:[O.jsx("div",{className:"panel-title",children:"Furniture"}),O.jsx("div",{className:"panel-sub",children:"Pick a piece, then tap your room to place it."})]}),O.jsx("button",{className:"closebtn",onClick:e,"aria-label":"Close catalog",children:"✕"})]}),O.jsx("div",{className:"cat-tabs",children:["All",...LS].map(f=>O.jsx("button",{className:n===f?"on":"",onClick:()=>i(f),children:f},f))}),O.jsx("div",{className:"cat-grid",children:l.map(f=>O.jsxs("button",{className:`cat-card ${r===f.id?"active":""}`,onClick:()=>c(f.id),children:[O.jsx("svg",{className:"mini",viewBox:`${-f.w/2-.5} ${-f.d/2-.5} ${f.w+1} ${f.d+1}`,children:f.parts.map((u,p)=>O.jsx("rect",{x:u.dx-u.w/2,y:u.dz-u.d/2,width:u.w,height:u.d,fill:f.color,stroke:"rgba(60,50,40,.35)",strokeWidth:"0.12"},p))}),O.jsx("span",{className:"cat-name",children:f.name}),O.jsxs("span",{className:"cat-meta mono",children:[mn(f.w)," × ",mn(f.d)," · ",Mr(f.price)]})]},f.id))})]})}const JA={select:"Tap anything to edit it. Drag furniture to move it around — it turns green when it fits. Drag empty space to pan the plan.",wall:"Click and drag to draw a wall. Walls join up automatically — click the little circle to finish.",door:"Tap any wall to add a door, then drag it along the wall to position it.",window:"Tap any wall to add a window, then drag it where you like.",floor:"Choose a floor below, then tap a room to apply it.",wallpaint:"Pick a color below, then tap a wall to paint it.",erase:"Tap anything to remove it. Changed your mind? Just hit undo!",place:"Tap your room to drop it in. Press R to turn it. Green means it fits!"};function QA(){const t=Oe(),e=t.selected,n=(e==null?void 0:e.kind)==="furniture"?t.furniture.find(a=>a.id===e.id):null,i=(e==null?void 0:e.kind)==="wall"?t.walls.find(a=>a.id===e.id):null,r=(e==null?void 0:e.kind)==="room"?t.rooms.find(a=>a.id===e.id):null,s=n?yn(n.itemId):null,o=n?Yo(n):null;return O.jsxs("div",{className:"inspector",children:[O.jsx("button",{className:"card-close",onClick:()=>t.hideTips(),title:"Hide this box (H)","aria-label":"Hide this box",children:"✕"}),s&&O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"panel-title",children:s.name}),O.jsxs("div",{className:"dims",children:[O.jsxs("div",{children:["Width",O.jsx("b",{children:mn(o.w)})]}),O.jsxs("div",{children:["Depth",O.jsx("b",{children:mn(o.d)})]}),O.jsxs("div",{children:["Height",O.jsx("b",{children:mn(s.h*(n.sw??1))})]})]}),O.jsxs("div",{className:"price",children:["Estimated price",O.jsx("b",{children:Mr(s.price)})]}),O.jsx("div",{className:"swatch-label",children:"Size"}),O.jsxs("div",{className:"sizectl",children:[O.jsxs("label",{children:[O.jsx("span",{children:"W"}),O.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.05",value:n.sw??1,onPointerDown:()=>t.commit(),onChange:a=>t.resizeFurniture(n.id,+a.target.value,n.sd??1)}),O.jsx("b",{children:mn(s.w*(n.sw??1))})]}),O.jsxs("label",{children:[O.jsx("span",{children:"D"}),O.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.05",value:n.sd??1,onPointerDown:()=>t.commit(),onChange:a=>t.resizeFurniture(n.id,n.sw??1,+a.target.value)}),O.jsx("b",{children:mn(s.d*(n.sd??1))})]})]}),((n.sw??1)!==1||(n.sd??1)!==1)&&O.jsx("button",{className:"btn tiny",onClick:()=>{t.commit(),t.resizeFurniture(n.id,1,1)},children:"Reset size"}),O.jsx("div",{className:"swatch-label",children:"Colour"}),O.jsxs("div",{className:"swatches",children:[DS.map(a=>O.jsx("button",{className:`swatch ${(n.tint||s.color)===a.hex?"on":""}`,style:{background:a.hex},title:a.name,onClick:()=>{t.commit(),t.tintFurniture(n.id,a.hex)}},a.hex)),O.jsx("label",{className:"colorwell",title:"Custom colour",children:O.jsx("input",{type:"color",value:n.tint||s.color,onFocus:()=>t.commit(),onChange:a=>t.tintFurniture(n.id,a.target.value),"aria-label":"Custom colour"})}),n.tint&&O.jsx("button",{className:"btn tiny",onClick:()=>{t.commit(),t.tintFurniture(n.id,null)},children:"Reset"})]}),O.jsxs("div",{className:"row",children:[O.jsx("button",{className:"btn",onClick:()=>{t.commit(),t.updateFurniture(n.id,{rotDeg:(n.rotDeg+45)%360})},children:"↻ Rotate"}),O.jsx("button",{className:"btn danger",onClick:()=>{t.commit(),t.deleteFurniture(n.id),t.select(null)},children:"Remove"})]})]}),i&&O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"panel-title",children:["Wall · ",mn(zs(i))," long"]}),O.jsx("div",{className:"swatch-label",children:"Wall color"}),O.jsx("div",{className:"swatches",children:Cf.map(a=>O.jsx("button",{className:`swatch ${t.wallMaterials[i.id]===a.id?"on":""}`,style:{background:a.color},title:`${a.name} · ${Mr(a.pricePerSqFt)}/sq ft`,onClick:()=>{t.commit(),t.paintWall(i.id,a.id),t.setWallMat(a.id)}},a.id))}),O.jsx("div",{className:"row",children:O.jsx("button",{className:"btn danger",onClick:()=>{t.commit(),t.deleteWall(i.id),t.select(null)},children:"Remove wall"})})]}),r&&O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"panel-title",children:["Room · ",Math.round(r.area)," sq ft"]}),O.jsx("div",{className:"swatch-label",children:"Floor finish"}),O.jsx("div",{className:"swatches",children:Af.map(a=>O.jsx("button",{className:`swatch ${t.roomMaterials[r.id]===a.id?"on":""}`,style:{background:a.base},title:`${a.name} · ${Mr(a.pricePerSqFt)}/sq ft`,onClick:()=>{t.commit(),t.paintRoom(r.id,a.id),t.setFloorMat(a.id)}},a.id))})]}),!e&&O.jsxs(O.Fragment,{children:[(t.tool==="floor"||t.tool==="wallpaint")&&O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"swatch-label",children:t.tool==="floor"?"Floor finish":"Wall color"}),O.jsx("div",{className:"swatches",children:(t.tool==="floor"?Af:Cf).map(a=>O.jsx("button",{className:"swatch",style:{background:a.base??a.color},title:a.name,onClick:()=>t.tool==="floor"?t.setFloorMat(a.id):t.setWallMat(a.id)},a.id))})]}),O.jsx("p",{className:"hint",children:JA[t.tool]}),O.jsxs("div",{className:"stats mono",children:[t.rooms.length," rooms · ",t.walls.length," walls · ",t.furniture.length," items"]})]})]})}const eC=[{dot:"#C97B5A",title:"Moving around the plan",body:"Scroll to zoom. Drag any empty space to pan (or hold Space and drag). On touch: pinch to zoom, two fingers to pan."},{dot:"#C97B5A",title:"Walls",body:"Click and drag to draw. Walls chain together and snap to corners — click the starting circle (or press Esc) to stop. Close a loop and the floor appears by itself."},{dot:"#7FA6BC",title:"Doors & windows",body:"Tap a wall to add one, then drag it along the wall to slide it. Sunlight in 3D shines straight through them."},{dot:"#9CAF97",title:"Furniture",body:"Open the catalog, pick a piece, then tap your room. Green means it fits, red means blocked. Press R to turn it 45°, drag to rearrange."},{dot:"#D9A441",title:"Floors & paint",body:"Pick a swatch, then tap a room (floor) or a wall (paint). Every finish is priced per square foot and added to your budget."},{dot:"#D98276",title:"Oops — undo",body:"Ctrl+Z undoes almost anything; Ctrl+Shift+Z redoes it. The Erase tool removes whatever you tap."},{dot:"#5E7259",title:"3D view & walk-through",body:"In 3D: drag to orbit, scroll to zoom. In Walk: drag to look around, use WASD (or the ▲▼ buttons) to stroll through — you can’t walk through walls, but doors are open."},{dot:"#B4643F",title:"Budget & saving",body:"The ticker up top updates live as you design — click the number next to “cap” to set your limit. Save keeps the plan on this device; Export downloads a file; Photo saves a picture."}],tC=["V select","W walls","D door","N window","F floor","P paint","E erase","1·2·3 views","R rotate","Esc cancel","Ctrl+Z undo"];function nC({onClose:t}){return O.jsxs("div",{className:"helpcard",role:"dialog","aria-label":"Tips and shortcuts",children:[O.jsx("button",{className:"card-close",onClick:t,"aria-label":"Close tips",children:"✕"}),O.jsx("div",{className:"help-title",children:"How it works"}),eC.map(e=>O.jsxs("div",{className:"help-row",children:[O.jsxs("h4",{children:[O.jsx("span",{className:"dot",style:{background:e.dot}}),e.title]}),O.jsx("p",{children:e.body})]},e.title)),O.jsx("div",{className:"help-keys",children:tC.map(e=>{const[n,...i]=e.split(" ");return O.jsx("kbd",{title:i.join(" "),children:n},e)})})]})}const og={v:"select",w:"wall",d:"door",n:"window",f:"floor",p:"wallpaint",e:"erase"};function iC(){const t=Oe(l=>l.viewMode),e=Oe(l=>l.selected),n=Oe(l=>l.tipsHidden),[i,r]=wt.useState(!1),[s,o]=wt.useState(!1);wt.useEffect(()=>{const l=c=>{var p,h,g;if(/input|textarea|select/i.test(c.target.tagName))return;const f=Oe.getState(),u=c.key.toLowerCase();if((c.ctrlKey||c.metaKey)&&u==="z")return c.preventDefault(),c.shiftKey?f.redo():f.undo();if((c.ctrlKey||c.metaKey)&&u==="y")return c.preventDefault(),f.redo();if(u==="escape"){f.setTool("select"),f.select(null),o(!1);return}if(u==="h")return f.hideTips();if(u==="r"){if(f.tool==="place")return f.rotatePlacing();if(((p=f.selected)==null?void 0:p.kind)==="furniture"){const v=f.furniture.find(m=>m.id===f.selected.id);v&&(f.commit(),f.updateFurniture(v.id,{rotDeg:(v.rotDeg+45)%360}))}return}if(u==="delete"||u==="backspace"){((h=f.selected)==null?void 0:h.kind)==="furniture"?(f.commit(),f.deleteFurniture(f.selected.id),f.select(null)):((g=f.selected)==null?void 0:g.kind)==="wall"&&(f.commit(),f.deleteWall(f.selected.id),f.select(null));return}if(u==="1")return f.setView("2d");if(u==="2")return f.setView("3d");if(u==="3")return f.setView("walk");f.viewMode!=="walk"&&og[u]&&(f.setTool(og[u]),f.showTips())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),wt.useEffect(()=>{const l=localStorage.getItem("LayoutLab:save");if(l)try{Oe.getState().hydrate(JSON.parse(l))}catch{dp()}else dp();let c;const f=Oe.subscribe(u=>{clearTimeout(c),c=setTimeout(()=>localStorage.setItem("LayoutLab:save",JSON.stringify({walls:u.walls,furniture:u.furniture,roomMaterials:u.roomMaterials,wallMaterials:u.wallMaterials,wallHeight:u.wallHeight})),1200)});return()=>{f(),clearTimeout(c)}},[]);const a=!s&&(!!e||!n);return O.jsxs("div",{className:"app",children:[O.jsx(qA,{onToggleSheet:()=>r(l=>!l)}),O.jsxs("div",{className:"stage",children:[O.jsx(KA,{}),O.jsx("main",{className:"viewport",children:t==="2d"?O.jsx(qS,{}):O.jsx(XA,{})}),O.jsx(ZA,{open:i,onClose:()=>r(!1)}),a&&O.jsx(QA,{}),s&&O.jsx(nC,{onClose:()=>o(!1)}),O.jsx("button",{className:`helpbtn ${s?"on":""}`,onClick:()=>o(l=>!l),title:"Tips & shortcuts","aria-label":"Tips and shortcuts",children:"?"})]})]})}yv(document.getElementById("root")).render(O.jsx(iC,{}));
