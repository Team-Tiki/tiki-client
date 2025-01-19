import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-VgK4xylL.js";import{M as i,u as p}from"./ModalFunnel-64-BICCZ.js";import"./iframe-Y4SLZ6JJ.js";import"./jsx-runtime-kRHs-5wk.js";import"./index-DXMui2nR.js";import"./_commonjsHelpers-Bsref0_6.js";import"./index-vMLQy76F.js";import"./index-CmcVLIY-.js";import"./index-BfBeqfpZ.js";import"./useOutsideClick-ZBktmLkE.js";import"./useOverlay-DtUWaB7X.js";import"./QueryClientProvider-CGNFk3hw.js";import"./path-Cm8e99m2.js";import"./emotion-react.browser.esm-D4woSme_.js";import"./ellipsis-CGRxsSIG.js";import"./index-nMUsq433.js";import"./date-BoEh79LX.js";import"./file-BrhkVh6L.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
