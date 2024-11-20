import{k as o}from"./emotion-react.browser.esm-jro6eB32.js";import"./iframe-hcMr1ntz.js";import{c as n}from"./react-CZfNSmbf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="4678373c-74fa-4fdd-91bc-bd54d7334c14",t._sentryDebugIdIdentifier="sentry-dbid-4678373c-74fa-4fdd-91bc-bd54d7334c14")}catch{}})();const f=o`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`,u=o`
0% {
    transform: rotate(0deg)
}
100% {
    transform: rotate(360deg);
}
`,m=o`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,y=o`
    0%{
        transform: translateY(50%);
    }
    100%{
        transform: translateY(0);
    }

`,r=n(t=>({toastList:[],actions:{createToast:(s,a="default")=>t(e=>({toastList:[...e.toastList,{id:Number(Date.now()),message:s,variant:a}]})),removeToast:s=>t(a=>({toastList:a.toastList.filter(e=>e.id!==s)}))}})),b=()=>r(t=>t.toastList),p=()=>r(t=>t.actions);export{m as a,p as b,f,y as m,u as r,b as u};
