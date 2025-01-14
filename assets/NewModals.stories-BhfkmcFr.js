import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-r_eELkSK.js";import{M as d,u as p}from"./ModalFunnel-r5pMFVqL.js";import"./iframe-Dcc2Ft1t.js";import"./jsx-runtime-CqT5-i3X.js";import"./index-C5XOEaSi.js";import"./_commonjsHelpers-BLS8uydW.js";import"./index-Blk1dqNe.js";import"./index-vnnopYMX.js";import"./emotion-react.browser.esm-CnzqqZTL.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-Cg3X9EBb.js";import"./path-B0QklFud.js";import"./index-D6ILmlsm.js";import"./ellipsis-B9oi3ibG.js";import"./file-CDzqlnop.js";import"./date-GsTKOy0F.js";import"./useOutsideClick-DuabTokj.js";import"./useOverlay-4-tbvTvT.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
