import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DxawQtn4.js";import{M as d,u as p}from"./ModalFunnel-C1tT9dmJ.js";import"./iframe-BgC8A34w.js";import"./jsx-runtime-DB5AsIEc.js";import"./index-CTf7ZHmN.js";import"./_commonjsHelpers-CohDEukY.js";import"./index-D7ialhZz.js";import"./index-DxT3PhUg.js";import"./emotion-react.browser.esm-DcZwnc-E.js";import"./index-ChwaAyq9.js";import"./QueryClientProvider-CHbHlJDE.js";import"./path-CP6-VgHJ.js";import"./ellipsis-BqVNzb9o.js";import"./file-B_WMUm8O.js";import"./date-CtM5jmq2.js";import"./useOutsideClick-6mKA_6Hx.js";import"./useOverlay-DwY4tAOw.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bfbac73d-7a97-4a00-bf17-3707f09420b0",e._sentryDebugIdIdentifier="sentry-dbid-bfbac73d-7a97-4a00-bf17-3707f09420b0")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
