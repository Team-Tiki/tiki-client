import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-ClHMrZM_.js";import{M as d}from"./ModalFunnel-D9U6v3DJ.js";import{u as p}from"./modal-CoYmeOQL.js";import"./iframe-BYYHysQD.js";import"./jsx-runtime-ycCI3tbI.js";import"./index-DldNGQGj.js";import"./_commonjsHelpers-CvF4-Nok.js";import"./index-CSWdfGGH.js";import"./index-DfCsl5_R.js";import"./index-B-uMTWfr.js";import"./QueryClientProvider-DdxK6_N4.js";import"./path-ChgCrQ7U.js";import"./emotion-react.browser.esm-BV5MpjsE.js";import"./ellipsis-Cx0wJyOZ.js";import"./index-esRQ-_c9.js";import"./date-BkQ1iTwp.js";import"./file-BF2xDIw8.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c5d81140-93a7-4fe9-a2e8-6c6f4c8117af",e._sentryDebugIdIdentifier="sentry-dbid-c5d81140-93a7-4fe9-a2e8-6c6f4c8117af")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
