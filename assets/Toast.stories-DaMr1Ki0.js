import{a as n}from"./emotion-react-jsx-runtime.browser.esm-B55CMu7Y.js";import{g as b,Q as s}from"./index-UfXgKLis.js";import"./iframe-NFJttlBy.js";import"./jsx-runtime-klbNG8cE.js";import"./index-Cmlv6OeP.js";import"./_commonjsHelpers-BIhYdt2Q.js";import"./index-Crb_KW6c.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="ec574790-84f4-4978-95f5-2f0ef925e160",e._sentryDebugIdIdentifier="sentry-dbid-ec574790-84f4-4978-95f5-2f0ef925e160")}catch{}})();const S={title:"Common/Toast",component:b,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},r={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})}},t={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})}},o={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>;
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
        Create Toast
      </button>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,f,T;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>;
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const x=["Default","Error","Success"];export{r as Default,t as Error,o as Success,x as __namedExportsOrder,S as default};
