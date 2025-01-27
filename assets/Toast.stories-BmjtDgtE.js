import{a as n}from"./emotion-react-jsx-runtime.browser.esm-DeAyNbhO.js";import{y as T,g as s}from"./index-AHn7M5x8.js";import"./iframe-C3KOy6te.js";import"./jsx-runtime-C6EheHs1.js";import"./index-5WA8JE_Q.js";import"./_commonjsHelpers-BXgiYCbN.js";import"./index-DTXSfpMl.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ff191115-6d84-4d72-b5af-53987cb2a1e1",e._sentryDebugIdIdentifier="sentry-dbid-ff191115-6d84-4d72-b5af-53987cb2a1e1")}catch{}})();const S={title:"Common/Toast",component:T,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},r={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})}},t={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})}},o={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
        Create Toast
      </button>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,f,b;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const x=["Default","Error","Success"];export{r as Default,t as Error,o as Success,x as __namedExportsOrder,S as default};
