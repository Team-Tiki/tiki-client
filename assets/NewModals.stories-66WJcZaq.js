import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CSF3Y0yF.js";import{M as d,u as p}from"./ModalFunnel-7PcFfVpi.js";import"./iframe-CgjXP5Ue.js";import"./jsx-runtime-t0otDmxv.js";import"./index-DyaUf-Bf.js";import"./_commonjsHelpers-Cj1Jf6V2.js";import"./index-DD5EWK0m.js";import"./index-CSrb64wr.js";import"./emotion-react.browser.esm-BevwwjJH.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-lvJ35M26.js";import"./path-CNr0RMtD.js";import"./index-CgP9eeCO.js";import"./ellipsis-BR-vCL0F.js";import"./file-Dv01eOTq.js";import"./date-CBfnC_d7.js";import"./useOutsideClick-DpvyVs5E.js";import"./useOverlay-DK6tp2jT.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
