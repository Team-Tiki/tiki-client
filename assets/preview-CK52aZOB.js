import{d as M}from"./index-BWTWe0Km.js";(function(){try{var r=typeof $<"u"?$:typeof y<"u"?y:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="0a5ffb6c-c5ab-4917-b68c-da944d085159",r._sentryDebugIdIdentifier="sentry-dbid-0a5ffb6c-c5ab-4917-b68c-da944d085159")}catch{}})();const{useMemo:m,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:l,window:$}=y,x=()=>$.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let d=e.find(n=>n.name===a);if(d)return d.value;if(a){let n=e.map(i=>i.name).join(", ");B.warn(M`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},E=r=>{(Array.isArray(r)?r:[r]).forEach(S)},S=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let d=l.createElement("style");d.setAttribute("id",r),d.innerHTML=e,l.head.appendChild(d)}},I=(r,e,a)=>{var n;let d=l.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let i=l.createElement("style");i.setAttribute("id",r),i.innerHTML=e;let o=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,t=l.getElementById(o);t?(n=t.parentElement)==null||n.insertBefore(i,t):l.head.appendChild(i)}},A=(r,e)=>{var c;let{globals:a,parameters:d}=e,n=(c=a[p])==null?void 0:c.value,i=d[p],o=m(()=>i.disable?"transparent":O(n,i.values,i.default),[i,n]),t=m(()=>o&&o!=="transparent",[o]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=m(()=>`
      ${s} {
        background: ${o} !important;
        ${x()?"":"transition: background-color 0.3s;"}
      }
    `,[o,s]);return k(()=>{let g=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){E(g);return}I(g,u,e.viewMode==="docs"?e.id:null)},[t,u,e]),r()},L=(r,e)=>{var _;let{globals:a,parameters:d}=e,n=d[p].grid,i=((_=a[p])==null?void 0:_.grid)===!0&&n.disable!==!0,{cellAmount:o,cellSize:t,opacity:s}=n,u=e.viewMode==="docs",c=d.layout===void 0||d.layout==="padded"?16:0,g=n.offsetX??(u?20:c),f=n.offsetY??(u?20:c),v=m(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${t*o}px ${t*o}px`,`${t*o}px ${t*o}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${b} {
        background-size: ${h} !important;
        background-position: ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return k(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){E(b);return}w(b,v)},[i,v,e]),r()},C=[L,A],D={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[p]:null};export{C as decorators,G as initialGlobals,D as parameters};
