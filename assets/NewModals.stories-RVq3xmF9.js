import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CRirncI8.js";import{M as d,u as p}from"./ModalFunnel-DUQgVOxX.js";import"./iframe-Bm9owOro.js";import"./jsx-runtime-BT-kpMem.js";import"./index-ZxPCVBDZ.js";import"./_commonjsHelpers-Co-uX5Gq.js";import"./index-C5kDx6sH.js";import"./index-CNPQ3o0o.js";import"./index-8lDjhXpy.js";import"./QueryClientProvider-CIt2y2Np.js";import"./path-CSdxAYZH.js";import"./emotion-react.browser.esm-DKPWFE6-.js";import"./index-B5kE9fIT.js";import"./date-Ca_vRVJ5.js";import"./useOutsideClick-BkYY9LRF.js";import"./useOverlay-C1VdcwB4.js";import"./ellipsis-B-GG5lTb.js";import"./file-CIwRWXuF.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64ffe274-4bea-4e84-b7e0-3638898fcccc",e._sentryDebugIdIdentifier="sentry-dbid-64ffe274-4bea-4e84-b7e0-3638898fcccc")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
