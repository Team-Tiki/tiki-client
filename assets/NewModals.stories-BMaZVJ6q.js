import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CDu8Ha4z.js";import{M as i,u as p}from"./ModalFunnel-yTPM5UW0.js";import"./iframe-Chgx55e4.js";import"./jsx-runtime-C-wn0HQW.js";import"./index-gPNlfYHQ.js";import"./_commonjsHelpers-sMturzG_.js";import"./index-BMhd1TU1.js";import"./index-_B5awVW6.js";import"./emotion-react.browser.esm-B0_vtpcH.js";import"./QueryClientProvider-BaKm0srV.js";import"./path-C4yU8_Po.js";import"./index-D9PjTUz4.js";import"./ellipsis-D9QmZm_3.js";import"./file-BBvwJypq.js";import"./date-plrCfbCh.js";import"./useOutsideClick-CsRwiFyy.js";import"./useOverlay-B-0RjwJH.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
