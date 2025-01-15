import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CgcFQ3o_.js";import{M as d,u as p}from"./ModalFunnel-DHb9f0LT.js";import"./iframe-e0bPEceg.js";import"./jsx-runtime-Cm40G9zW.js";import"./index-BOoXDiuC.js";import"./_commonjsHelpers-BBMxPn9X.js";import"./index-BW1yReUk.js";import"./index-DNuBmFMy.js";import"./emotion-react.browser.esm-DbX7ei1Q.js";import"./index-D8QZEenf.js";import"./QueryClientProvider-D0Z2X-S4.js";import"./path-D6-oqEE1.js";import"./index-BwHIfY1q.js";import"./file-CcaPlHF_.js";import"./ellipsis-Biwpqhtf.js";import"./date-Dl9B3eVm.js";import"./useOutsideClick-CHB0FTYQ.js";import"./useOverlay-dXptjzbe.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b833ddef-9142-4eb9-b920-0704c6460308",e._sentryDebugIdIdentifier="sentry-dbid-b833ddef-9142-4eb9-b920-0704c6460308")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
