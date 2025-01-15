import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-Dt4NCbMl.js";import{M as d,u as p}from"./ModalFunnel-CpBKAjGu.js";import"./iframe-_0Ias953.js";import"./jsx-runtime-BKW1pqZ9.js";import"./index-CI2ov4W8.js";import"./_commonjsHelpers-DMVpej0G.js";import"./index-42yR2g9P.js";import"./index-DDlvtsrT.js";import"./emotion-react.browser.esm-C-jMZQ0n.js";import"./index-D8QZEenf.js";import"./QueryClientProvider-BRyQbZuP.js";import"./path-Da21QhJh.js";import"./index-D-cS_NGg.js";import"./file-DUhI5k5I.js";import"./ellipsis-qkZuBHrh.js";import"./date-x6S12lm8.js";import"./useOutsideClick-OK4AN3Wq.js";import"./useOverlay-DfDGGjZ4.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b833ddef-9142-4eb9-b920-0704c6460308",e._sentryDebugIdIdentifier="sentry-dbid-b833ddef-9142-4eb9-b920-0704c6460308")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
