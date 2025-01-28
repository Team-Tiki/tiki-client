import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-yDiorIWs.js";import{M as i,u as p}from"./ModalFunnel-WYHZhp-O.js";import"./iframe-CVvLjMvq.js";import"./jsx-runtime-D2ENB1Iq.js";import"./index-pjNvibvV.js";import"./_commonjsHelpers-DdrgImG0.js";import"./index-0OS169zz.js";import"./index-CLiUNqNl.js";import"./index-Dk2GMixp.js";import"./QueryClientProvider-C8rSHOOz.js";import"./path-CYX1f9sO.js";import"./emotion-react.browser.esm-CJEtMusc.js";import"./ellipsis-BpHmnqO5.js";import"./index-DHB7KS9D.js";import"./date-Dy7pMm7i.js";import"./file-10vuxdi5.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="92fdd635-73dd-4b9b-912a-5a804c37e860",e._sentryDebugIdIdentifier="sentry-dbid-92fdd635-73dd-4b9b-912a-5a804c37e860")}catch{}})();const D={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const F=["ModalsTest"];export{o as ModalsTest,F as __namedExportsOrder,D as default};
