import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DCPyWN6w.js";import{M as d,u as p}from"./ModalFunnel-PQg0w-XZ.js";import"./iframe-CAXWrz4s.js";import"./jsx-runtime-B610zXmX.js";import"./index-nh1jGz16.js";import"./_commonjsHelpers-BFJFI6OF.js";import"./index-CpF25T3Q.js";import"./index-D5gqNtbX.js";import"./index-BUsl_yob.js";import"./QueryClientProvider-ChmSeNjc.js";import"./path-BiOKNIcU.js";import"./emotion-react.browser.esm-Dg5GA9BZ.js";import"./index-BKDFxB9L.js";import"./date-CNYK0I2a.js";import"./useOutsideClick-79urQF6y.js";import"./useOverlay--MyYYiJU.js";import"./ellipsis-DW25facl.js";import"./file-C5X1QEiT.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64ffe274-4bea-4e84-b7e0-3638898fcccc",e._sentryDebugIdIdentifier="sentry-dbid-64ffe274-4bea-4e84-b7e0-3638898fcccc")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
