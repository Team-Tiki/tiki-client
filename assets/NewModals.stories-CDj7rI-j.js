import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DjlOOZSW.js";import{M as d,u as p}from"./ModalFunnel-CGavMWDn.js";import"./iframe-B5FS_cmX.js";import"./jsx-runtime-uHSvQAW4.js";import"./index-D3GRRzUG.js";import"./_commonjsHelpers-BPs8aPJN.js";import"./index-BKX0NjA1.js";import"./index-B-pehVRl.js";import"./emotion-react.browser.esm-C5jPN54V.js";import"./index-D8QZEenf.js";import"./QueryClientProvider-DNFgvw5W.js";import"./path-CJeNYk-w.js";import"./index-CeRBAr2u.js";import"./file-D1tR9rgu.js";import"./ellipsis-BgBh9y15.js";import"./date-DIks4_ZW.js";import"./useOutsideClick-B4pC_5BL.js";import"./useOverlay-CcL0M0kW.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b833ddef-9142-4eb9-b920-0704c6460308",e._sentryDebugIdIdentifier="sentry-dbid-b833ddef-9142-4eb9-b920-0704c6460308")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
