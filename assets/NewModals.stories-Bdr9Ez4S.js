import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DeAyNbhO.js";import{M as i,u as p}from"./ModalFunnel-CJEHdbFn.js";import"./iframe-C3KOy6te.js";import"./jsx-runtime-C6EheHs1.js";import"./index-5WA8JE_Q.js";import"./_commonjsHelpers-BXgiYCbN.js";import"./index-AHn7M5x8.js";import"./index-DTXSfpMl.js";import"./index-Dk2GMixp.js";import"./useOutsideClick-DJ4ahoxQ.js";import"./useOverlay-2xuVt6e2.js";import"./QueryClientProvider-8s-1eYHC.js";import"./path-g_UtBIOg.js";import"./emotion-react.browser.esm-rIndiyaM.js";import"./ellipsis-iYapHHxZ.js";import"./index-CQSdiyIH.js";import"./date-CRWJElrw.js";import"./file-DtZjq98g.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
