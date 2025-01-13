import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-i2drpP74.js";import{M as d,u as p}from"./ModalFunnel-Cot4bI0H.js";import"./iframe-Bvlm8uEw.js";import"./jsx-runtime-Cix7mQ5A.js";import"./index-BKPNr-gh.js";import"./_commonjsHelpers-7TxeZs49.js";import"./index-Dx8_3gzC.js";import"./index-KPr5Ukq5.js";import"./emotion-react.browser.esm-D2RcMDXU.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-nNED4Rav.js";import"./path-C53FAgBw.js";import"./index-GVWqnVY6.js";import"./ellipsis-B7wAjV7w.js";import"./file-DE_026L-.js";import"./date-gpnXipe9.js";import"./useOutsideClick-CzqJSHKW.js";import"./useOverlay-DJiArfAm.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
