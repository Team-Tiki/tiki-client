import{a as n}from"./emotion-react-jsx-runtime.browser.esm-NSkr-Qxo.js";import{h as T,J as s}from"./index-0Bpkz2_g.js";import"./iframe-B8waQu0R.js";import"./jsx-runtime-CGt88jdl.js";import"./index-DaXQO6HP.js";import"./_commonjsHelpers-DMQCYnZ_.js";import"./index-Bdq6rzK5.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="07fe212d-4f11-4bed-ab81-ba307c1a3afb",e._sentryDebugIdIdentifier="sentry-dbid-07fe212d-4f11-4bed-ab81-ba307c1a3afb")}catch{}})();const S={title:"Common/Toast",component:T,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},r={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})}},t={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})}},o={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,l,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>;
  }
}`,...(f=(l=o.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const x=["Default","Error","Success"];export{r as Default,t as Error,o as Success,x as __namedExportsOrder,S as default};
