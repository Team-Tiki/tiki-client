import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-BZGysMOd.js";import{M as i,u as p}from"./ModalFunnel-GEKW78yV.js";import"./iframe-Q2FHbKzU.js";import"./jsx-runtime-DDlEgS10.js";import"./index-Dko5HVfm.js";import"./_commonjsHelpers-C-4__Z9f.js";import"./index-DvWA7vzP.js";import"./index-C2IMjcig.js";import"./index-BfBeqfpZ.js";import"./useOutsideClick-HTwQ1D97.js";import"./useOverlay-6ZJAA1cC.js";import"./QueryClientProvider-DeSoduX0.js";import"./path-B79n-9pY.js";import"./emotion-react.browser.esm-CqYDyx4o.js";import"./ellipsis-DRQSdK_r.js";import"./index-DNqPqFL_.js";import"./date-dY4HfHyu.js";import"./file-o5JbZn3-.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
