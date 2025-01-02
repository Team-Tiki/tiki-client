import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DcwrIcx9.js";import{M as d,u as p}from"./ModalFunnel-CzLY2b0C.js";import"./iframe-D_cIFqUu.js";import"./jsx-runtime-fFF4Ar6N.js";import"./index-BnzvyeZr.js";import"./_commonjsHelpers-CHhxJATD.js";import"./index-D66-Zmap.js";import"./index-1PJj4saT.js";import"./emotion-react.browser.esm-D0dXN3nh.js";import"./index-DrwiF3X0.js";import"./QueryClientProvider-BPeUkAZM.js";import"./path-GCxXo9TU.js";import"./file-BGK0KqxL.js";import"./useOutsideClick-DbQvtvmW.js";import"./useOverlay-CFlOUx7v.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4a20d130-3b37-4a8e-92a8-b5b18601523c",e._sentryDebugIdIdentifier="sentry-dbid-4a20d130-3b37-4a8e-92a8-b5b18601523c")}catch{}})();const x={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const D=["ModalsTest"];export{o as ModalsTest,D as __namedExportsOrder,x as default};
