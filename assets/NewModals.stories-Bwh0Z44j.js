import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-MowsmWK5.js";import{M as d}from"./ModalFunnel-OYT-I3EP.js";import{u as p}from"./modal-BTLZtKtF.js";import"./iframe-rNcCoaDw.js";import"./jsx-runtime-CNdiKSPQ.js";import"./index-mCJJJlx7.js";import"./_commonjsHelpers-CZtOG0jB.js";import"./index-Da_GgSbn.js";import"./index-BgO_H7Qf.js";import"./index-B-uMTWfr.js";import"./QueryClientProvider-B-zRnSm7.js";import"./path-ByLKYrHV.js";import"./emotion-react.browser.esm-Dw8TfnRD.js";import"./ellipsis-DezGEdxO.js";import"./index-rlM_ETX0.js";import"./date-B7UEXNG2.js";import"./file-D1fpHv_6.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="120c0a06-f54f-4b29-9c2e-8a507200833d",e._sentryDebugIdIdentifier="sentry-dbid-120c0a06-f54f-4b29-9c2e-8a507200833d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
