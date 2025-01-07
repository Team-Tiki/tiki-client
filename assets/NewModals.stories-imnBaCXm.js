import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DQe0EfKL.js";import{M as d,u as p}from"./ModalFunnel-aH98HTu-.js";import"./iframe-C_b4Fecy.js";import"./jsx-runtime-RlDRH4SL.js";import"./index-BXt_sIDv.js";import"./_commonjsHelpers-CZjSIzfs.js";import"./index-DGyI_S63.js";import"./index-Ck8YoaOF.js";import"./emotion-react.browser.esm-tguEHsvF.js";import"./index-ChwaAyq9.js";import"./QueryClientProvider-Dw7KA7J0.js";import"./path-B-RwisSM.js";import"./index-DMjzWaEY.js";import"./ellipsis-Dqq8ILJm.js";import"./file-DBy_04zi.js";import"./date-tbRoBEmI.js";import"./useOutsideClick-DKiEIIKG.js";import"./useOverlay-CzWB5YhN.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
