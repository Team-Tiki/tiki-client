import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-D6-OB2rB.js";import{M as d}from"./ModalFunnel-CqotE8-G.js";import{u as p}from"./modal-BGusdRaj.js";import"./iframe-BiOE7KMS.js";import"./jsx-runtime-CeXlYnbk.js";import"./index-DQ0aQxHF.js";import"./_commonjsHelpers-DAprIWz_.js";import"./index-Bo1rDQPJ.js";import"./index-C383ZwCZ.js";import"./index-DACGP-7d.js";import"./QueryClientProvider-C9S0SdN2.js";import"./path-DcP4_ilQ.js";import"./emotion-react.browser.esm-BCdhsmlR.js";import"./ellipsis-BxY1h1uz.js";import"./index-CxRSRSlC.js";import"./date-C81Mnqvz.js";import"./file-DwbT5ybb.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="120c0a06-f54f-4b29-9c2e-8a507200833d",e._sentryDebugIdIdentifier="sentry-dbid-120c0a06-f54f-4b29-9c2e-8a507200833d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
