import{r as d}from"./index-BUjKFtp4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0eb74f8d-a515-4737-a3f2-b27a4cc82943",e._sentryDebugIdIdentifier="sentry-dbid-0eb74f8d-a515-4737-a3f2-b27a4cc82943")}catch{}})();const a=e=>{const t=d.useRef(null),r=d.useCallback(n=>{!t.current||!(n.target instanceof HTMLElement)||t.current.contains(n.target)||e==null||e()},[e]),i=d.useCallback(n=>{t.current&&n.key==="Escape"&&(e==null||e())},[e]);return d.useEffect(()=>(window.addEventListener("click",r),window.addEventListener("keydown",i),()=>{window.removeEventListener("click",r),window.removeEventListener("keydown",i)}),[e,i,r]),t};export{a as u};
