import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CGlaBQZD.js";import{M as d,u as p}from"./ModalFunnel-CU_vfg58.js";import"./iframe-BIyk5m_2.js";import"./jsx-runtime-DN3wMc7D.js";import"./index-BSsNCTRK.js";import"./_commonjsHelpers-BVUl92e-.js";import"./index-DHblh8aZ.js";import"./index-DP05_VuQ.js";import"./index-CELQUUV5.js";import"./QueryClientProvider-CUQeRc2P.js";import"./api-Og4VqNr4.js";import"./path-CvXQrZq2.js";import"./emotion-react.browser.esm-BiP7GPZc.js";import"./ellipsis-xUGuqezG.js";import"./index-DSFsW01B.js";import"./date-B5Aoqc7D.js";import"./file-CBS6Ivc0.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="98bb0a84-faa4-437b-82c7-c250bec25604",e._sentryDebugIdIdentifier="sentry-dbid-98bb0a84-faa4-437b-82c7-c250bec25604")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
