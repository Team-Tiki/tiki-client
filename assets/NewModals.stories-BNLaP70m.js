import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-BdxWeF8P.js";import{M as i,u as p}from"./ModalFunnel-DutskCho.js";import"./iframe-BV1yq18S.js";import"./jsx-runtime-Cj5LioXo.js";import"./index-B0AvJdSH.js";import"./_commonjsHelpers-iDtlXxty.js";import"./index--VKXrFOT.js";import"./index-bA5IUxjq.js";import"./emotion-react.browser.esm-CSMJS2z_.js";import"./QueryClientProvider-g8PeBZ77.js";import"./path--qfSy-kt.js";import"./index-C7y3t4Of.js";import"./ellipsis-CyKkFeWi.js";import"./file-BeVvip77.js";import"./date-DWj37mgA.js";import"./useOutsideClick-VDUSpWnx.js";import"./useOverlay-QIRs2mcM.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
