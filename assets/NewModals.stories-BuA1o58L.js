import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-C_TImuFh.js";import{M as d,u as p}from"./ModalFunnel-DwErJJDx.js";import"./iframe-CTrcVWC9.js";import"./jsx-runtime-DK3Y88JG.js";import"./index-cg9amE3T.js";import"./_commonjsHelpers-BIiE1tw9.js";import"./index-CUSPuPr7.js";import"./index-CVtNuusm.js";import"./index-8lDjhXpy.js";import"./QueryClientProvider-CzB8qz2d.js";import"./path-C3h2JAM-.js";import"./emotion-react.browser.esm-CNOo7XjN.js";import"./index-BAxV-8GK.js";import"./date-xHmmQTPy.js";import"./useOutsideClick-D1frKFzM.js";import"./useOverlay-B9rWkCfI.js";import"./ellipsis-hSed_V6x.js";import"./file-Du_O_FFN.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64ffe274-4bea-4e84-b7e0-3638898fcccc",e._sentryDebugIdIdentifier="sentry-dbid-64ffe274-4bea-4e84-b7e0-3638898fcccc")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
