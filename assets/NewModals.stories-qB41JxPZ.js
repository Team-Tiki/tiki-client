import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DbId7oHq.js";import{M as d,u as p}from"./ModalFunnel-wRvAChuc.js";import"./iframe-DXnXxHdF.js";import"./jsx-runtime-BOJYlQO0.js";import"./index-C9o0bdof.js";import"./_commonjsHelpers-p8ywivfg.js";import"./index-I1ifivJz.js";import"./index-CkNnkf5l.js";import"./emotion-react.browser.esm-Cdlb_IKR.js";import"./index-7omPbLKz.js";import"./QueryClientProvider-DExcnI8L.js";import"./path-BLcNNgoM.js";import"./index-Bv9OILB3.js";import"./file-BvxW4NGh.js";import"./ellipsis-Yx8yz9xZ.js";import"./date-BIUCLZd5.js";import"./useOutsideClick-DmTqZEk3.js";import"./useOverlay-HyOt3g-e.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b833ddef-9142-4eb9-b920-0704c6460308",e._sentryDebugIdIdentifier="sentry-dbid-b833ddef-9142-4eb9-b920-0704c6460308")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
