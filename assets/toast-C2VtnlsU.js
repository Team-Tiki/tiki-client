import{k as o}from"./emotion-react.browser.esm-Cyl1vPjg.js";import"./iframe-AJyGuqY3.js";import{c as n}from"./react-H2B7brmx.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="861c0acc-aa7f-49da-a13f-dda979078e4f",t._sentryDebugIdIdentifier="sentry-dbid-861c0acc-aa7f-49da-a13f-dda979078e4f")}catch{}})();const c=o`
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

`,r=n(t=>({toastList:[],actions:{createToast:(a,s="default")=>t(e=>({toastList:[...e.toastList,{id:Number(Date.now()),message:a,variant:s}]})),removeToast:a=>t(s=>({toastList:s.toastList.filter(e=>e.id!==a)}))}})),p=()=>r(t=>t.toastList),l=()=>r(t=>t.actions);export{m as a,l as b,c as f,y as m,u as r,p as u};
