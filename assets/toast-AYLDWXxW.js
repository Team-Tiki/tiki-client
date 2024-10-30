import{k as a}from"./emotion-react.browser.esm-D2GLAKnc.js";import"./iframe-B8JmUmEf.js";import{c as n}from"./react-BgbxmbYY.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="21738139-f38d-4231-933c-5694e5591df7",t._sentryDebugIdIdentifier="sentry-dbid-21738139-f38d-4231-933c-5694e5591df7")}catch{}})();const c=a`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`,u=a`
0% {
    transform: rotate(0deg)
}
100% {
    transform: rotate(360deg);
}
`,m=a`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,y=a`
    0%{
        transform: translateY(50%);
    }
    100%{
        transform: translateY(0);
    }

`,r=n(t=>({toastList:[],actions:{createToast:(s,o="default")=>t(e=>({toastList:[...e.toastList,{id:Number(Date.now()),message:s,variant:o}]})),removeToast:s=>t(o=>({toastList:o.toastList.filter(e=>e.id!==s)}))}})),p=()=>r(t=>t.toastList),l=()=>r(t=>t.actions);export{m as a,l as b,c as f,y as m,u as r,p as u};
