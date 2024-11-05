import{k as o}from"./emotion-react.browser.esm-CtHbM-p4.js";import"./iframe-Bt_ZtrLG.js";import{c as n}from"./react-BNvF9QMm.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="c6910c6a-99f9-497b-a5a6-2ff612cafa38",t._sentryDebugIdIdentifier="sentry-dbid-c6910c6a-99f9-497b-a5a6-2ff612cafa38")}catch{}})();const d=o`
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

`,r=n(t=>({toastList:[],actions:{createToast:(a,s="default")=>t(e=>({toastList:[...e.toastList,{id:Number(Date.now()),message:a,variant:s}]})),removeToast:a=>t(s=>({toastList:s.toastList.filter(e=>e.id!==a)}))}})),p=()=>r(t=>t.toastList),b=()=>r(t=>t.actions);export{m as a,b,d as f,y as m,u as r,p as u};
