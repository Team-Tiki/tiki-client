import{a as n}from"./emotion-react-jsx-runtime.browser.esm-X40Ljg8D.js";import{h as f,N as s}from"./index-D86Xz3BQ.js";import"./iframe-CmxKGbyM.js";import"./jsx-runtime-CqA88Xid.js";import"./index-DP46ZViu.js";import"./_commonjsHelpers-B1-KKXIh.js";import"./index-FZfJ9VPi.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="1ff9269a-2212-47ce-a84e-6cbc1e9cb11c",e._sentryDebugIdIdentifier="sentry-dbid-1ff9269a-2212-47ce-a84e-6cbc1e9cb11c")}catch{}})();const S={title:"Common/Toast",component:f,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},r={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})}},t={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})}},o={render:()=>{const{createToast:e}=s();return n("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,b,T;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>;
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const x=["Default","Error","Success"];export{r as Default,t as Error,o as Success,x as __namedExportsOrder,S as default};
