import{R as u}from"./index-D5Y6yO2w.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cb25ad3b-6d1a-4425-92b7-0ce8086ef269",t._sentryDebugIdIdentifier="sentry-dbid-cb25ad3b-6d1a-4425-92b7-0ce8086ef269")}catch{}})();const b=t=>{let e;const n=new Set,c=(s,a)=>{const o=typeof s=="function"?s(e):s;if(!Object.is(o,e)){const l=e;e=a??(typeof o!="object"||o===null)?o:Object.assign({},e,o),n.forEach(g=>g(e,l))}},r=()=>e,i={setState:c,getState:r,getInitialState:()=>f,subscribe:s=>(n.add(s),()=>n.delete(s))},f=e=t(c,r,i);return i},S=t=>t?b(t):b,y=t=>t;function I(t,e=y){const n=u.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return u.useDebugValue(n),n}const d=t=>{const e=S(t),n=c=>I(e,c);return Object.assign(n,e),n},j=t=>t?d(t):d;export{j as c};
