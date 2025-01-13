import{a as n}from"./emotion-react-jsx-runtime.browser.esm-BLpwO81r.js";import{y as T,m as s}from"./index-Dm3mlpfe.js";import"./iframe-C2BBeU7Z.js";import"./jsx-runtime-kScofH-k.js";import"./index-BmApkmR2.js";import"./_commonjsHelpers-BehdHG3Q.js";import"./index-XAP1w_DE.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b331677e-6d4c-42f9-9dcf-edeb3fbc3255",e._sentryDebugIdIdentifier="sentry-dbid-b331677e-6d4c-42f9-9dcf-edeb3fbc3255")}catch{}})();const S={title:"Common/Toast",component:T,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},r={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})}},t={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})}},o={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
        Create Toast
      </button>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,b,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>;
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const x=["Default","Error","Success"];export{r as Default,t as Error,o as Success,x as __namedExportsOrder,S as default};
