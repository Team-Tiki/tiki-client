import{j as a,a as r,F as s}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{q as h,f as c,Q as i}from"./index-Bj-ff5e2.js";import"./index-BeH7IU5F.js";import"./index-2-ic2sVG.js";import{u as d}from"./toast-BnAeWbr_.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./_commonjsHelpers-Y38rOxJs.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new e.Error().stack;u&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[u]="cf13a9a5-ab2a-442d-aa25-b711157949a3",e._sentryDebugIdIdentifier="sentry-dbid-cf13a9a5-ab2a-442d-aa25-b711157949a3")}catch{}})();const j={title:"Common/Toast",component:h,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},t={render:()=>{const{createToast:e}=d();return a(s,{children:[r(c,{}),r(i,{}),r("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})]})}},n={render:()=>{const{createToast:e}=d();return a(s,{children:[r(c,{}),r(i,{}),r("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})]})}},o={render:()=>{const{createToast:e}=d();return a(s,{children:[r(c,{}),r(i,{}),r("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})]})}};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>
      </>;
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var T,b,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
          Create Toast
        </button>
      </>;
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,g,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>
      </>;
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const q=["Default","Error","Success"];export{t as Default,n as Error,o as Success,q as __namedExportsOrder,j as default};
