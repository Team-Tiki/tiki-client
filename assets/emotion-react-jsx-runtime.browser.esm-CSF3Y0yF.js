import{j as o}from"./jsx-runtime-t0otDmxv.js";import{r as i}from"./index-DyaUf-Bf.js";import{p as y,q as b,s as P,t as C,v as T,e as _}from"./index-DD5EWK0m.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="586e5311-14b3-45ca-b8f7-377ef0a12ffd",r._sentryDebugIdIdentifier="sentry-dbid-586e5311-14b3-45ca-b8f7-377ef0a12ffd")}catch{}})();var h=function(e){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var a=e(n);return t.set(n,a),a}};function l(){return l=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},l.apply(null,arguments)}var j=!1,E=i.createContext(typeof HTMLElement<"u"?y({key:"css"}):null);E.Provider;var S=function(e){return i.forwardRef(function(t,n){var a=i.useContext(E);return e(t,a,n)})},m=i.createContext({}),I=function(e,t){if(typeof t=="function"){var n=t(e);return n}return l({},e,t)},N=h(function(r){return h(function(e){return I(r,e)})}),W=function(e){var t=i.useContext(m);return e.theme!==t&&(t=N(t)(e.theme)),i.createElement(m.Provider,{value:t},e.children)},u={}.hasOwnProperty,d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w=function(e,t){var n={};for(var a in t)u.call(t,a)&&(n[a]=t[a]);return n[d]=e,n},O=function(e){var t=e.cache,n=e.serialized,a=e.isStringTag;return C(t,n,a),T(function(){return _(t,n,a)}),null},z=S(function(r,e,t){var n=r.css;typeof n=="string"&&e.registered[n]!==void 0&&(n=e.registered[n]);var a=r[d],v=[n],c="";typeof r.className=="string"?c=b(e.registered,v,r.className):r.className!=null&&(c=r.className+" ");var g=P(v,void 0,i.useContext(m));c+=e.key+"-"+g.name;var f={};for(var s in r)u.call(r,s)&&s!=="css"&&s!==d&&!j&&(f[s]=r[s]);return f.className=c,t&&(f.ref=t),i.createElement(i.Fragment,null,i.createElement(O,{cache:e,serialized:g,isStringTag:typeof a=="string"}),i.createElement(a,f))}),x=z,R=o.Fragment;function A(r,e,t){return u.call(e,"css")?o.jsx(x,w(r,e),t):o.jsx(r,e,t)}function L(r,e,t){return u.call(e,"css")?o.jsxs(x,w(r,e),t):o.jsxs(r,e,t)}export{R as F,m as T,A as a,W as b,L as j,S as w};
