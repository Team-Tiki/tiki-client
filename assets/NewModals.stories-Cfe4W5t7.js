import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-Ekt0d8yW.js";import{M as d}from"./ModalFunnel-DNf_yPj_.js";import{u as p}from"./modal-CbiUW7z6.js";import"./iframe-DvJdWFAf.js";import"./jsx-runtime-O5tFiWyD.js";import"./index-GXRndo3Y.js";import"./_commonjsHelpers-CP70rbTI.js";import"./index-D-1X35ZC.js";import"./index-B-X6ieaV.js";import"./index-DACGP-7d.js";import"./QueryClientProvider-ClR0zA-F.js";import"./path-COzmughz.js";import"./emotion-react.browser.esm-DRKrUhHX.js";import"./ellipsis-BCvtLPYO.js";import"./index-fGUbQ4yP.js";import"./date-L-bZpdtG.js";import"./file-mQ1GTBSA.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="120c0a06-f54f-4b29-9c2e-8a507200833d",e._sentryDebugIdIdentifier="sentry-dbid-120c0a06-f54f-4b29-9c2e-8a507200833d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
