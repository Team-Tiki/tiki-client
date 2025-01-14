import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-FGk7zjxF.js";import{M as d,u as p}from"./ModalFunnel-B9yOkj7j.js";import"./iframe-DYqJlymL.js";import"./jsx-runtime-CzGf6ERD.js";import"./index-2yLFp7a7.js";import"./_commonjsHelpers-CjgE25sq.js";import"./index-DDwL3vDa.js";import"./index-BLJLP8PM.js";import"./emotion-react.browser.esm-C_NgHwMU.js";import"./index-7omPbLKz.js";import"./QueryClientProvider-B13qN8lm.js";import"./path-BSMclo_d.js";import"./index-Ba6YEKCd.js";import"./file-CHIqVHXy.js";import"./ellipsis--SO3FXod.js";import"./date-DMnJmrfR.js";import"./useOutsideClick-BdgbJgvb.js";import"./useOverlay-DUl_m3Ys.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b833ddef-9142-4eb9-b920-0704c6460308",e._sentryDebugIdIdentifier="sentry-dbid-b833ddef-9142-4eb9-b920-0704c6460308")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
