import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-BQLkd6Zg.js";import{M as i,u as p}from"./ModalFunnel-r6HM538z.js";import"./iframe-DkhLFxpI.js";import"./jsx-runtime-B4jslCAZ.js";import"./index-Bm_XwMeE.js";import"./_commonjsHelpers-B57pfXKX.js";import"./index-DJci3bmu.js";import"./index-BRIX59Z7.js";import"./emotion-react.browser.esm-DGRITb4d.js";import"./QueryClientProvider-UO837i_p.js";import"./path-DxCvjoF8.js";import"./index-CORRHsPo.js";import"./ellipsis-BtlJy9F3.js";import"./file-D12QTqgL.js";import"./date-C8fWS6V5.js";import"./useOutsideClick-Csm7bw44.js";import"./useOverlay-Bezw7rLZ.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
