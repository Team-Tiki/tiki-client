import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-XlyjIeLt.js";import{M as d,u as p}from"./ModalFunnel-CTrWWDS6.js";import"./iframe-BoXY3o7K.js";import"./jsx-runtime-S1Cm_IAJ.js";import"./index-8uAu-zMb.js";import"./_commonjsHelpers-IURvb6WH.js";import"./index-BZ_QyiWo.js";import"./index-Dzek_uWR.js";import"./emotion-react.browser.esm-CVJJSIGb.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-By7KaVYD.js";import"./path-BFL0PRr_.js";import"./index-XSobKRqG.js";import"./ellipsis-IzbvXw7V.js";import"./file-COExcdPw.js";import"./date-BJJy29tE.js";import"./useOutsideClick-B1LkoxP2.js";import"./useOverlay-CVKTP3q1.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
