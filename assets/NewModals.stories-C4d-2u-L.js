import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-C7iIxEpb.js";import{M as d,u as p}from"./ModalFunnel-tQR4WTEb.js";import"./iframe-DhOyMsR2.js";import"./jsx-runtime-CTWN555-.js";import"./index-B8xOyAiW.js";import"./_commonjsHelpers-oeVebtE3.js";import"./index-BlMksOeH.js";import"./index-DU42JU3g.js";import"./emotion-react.browser.esm-r00AveV7.js";import"./index-CQhz6hb0.js";import"./QueryClientProvider-DInQHz0z.js";import"./path-B0Kr3IiP.js";import"./index-D0f6sp8H.js";import"./ellipsis-Dk7UOkfw.js";import"./file-Ce5aWLuE.js";import"./date-38rvo-pF.js";import"./useOutsideClick-BYpEn29j.js";import"./useOverlay-C7g0t3ZR.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
