import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-Gi9j_ud3.js";import{M as i,u as p}from"./ModalFunnel-Df54Bw7x.js";import"./iframe-DSwL8BQv.js";import"./jsx-runtime-qDAlah_7.js";import"./index-Xq9Lihw4.js";import"./_commonjsHelpers-KbPUJJot.js";import"./index-B64Lhn90.js";import"./index-Cxpl2VWL.js";import"./emotion-react.browser.esm-Dbgh3rC_.js";import"./QueryClientProvider-CbdUd3mB.js";import"./path-B5V_yQVm.js";import"./index-MB-bskx0.js";import"./ellipsis-BFPwE5Or.js";import"./file-DUA8NXTb.js";import"./date-kKFTIxo3.js";import"./useOutsideClick-rlruGbiR.js";import"./useOverlay-hkQa1plL.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
