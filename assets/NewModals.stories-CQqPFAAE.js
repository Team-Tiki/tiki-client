import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-HNC5Y9hM.js";import{M as i,u as p}from"./ModalFunnel-BFQcBGVL.js";import"./iframe-C0jHNPy4.js";import"./jsx-runtime-DMn9GoYD.js";import"./index-66rakSHf.js";import"./_commonjsHelpers-iVl1BplL.js";import"./index-s-cJXG3D.js";import"./index-DsDTkAGx.js";import"./emotion-react.browser.esm-Byt81np6.js";import"./QueryClientProvider-DTesitHC.js";import"./path-BbxIuJ6B.js";import"./index-BMVqc8-c.js";import"./ellipsis-vlYJGJmT.js";import"./file-j44xS-Gq.js";import"./date-Cw3lGjyY.js";import"./useOutsideClick-EufsoXCX.js";import"./useOverlay-C2B0FF7V.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
