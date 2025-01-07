import{j as l,a as n,F as s}from"./emotion-react-jsx-runtime.browser.esm-DxawQtn4.js";import{M as p,u as i}from"./ModalFunnel-C1tT9dmJ.js";import"./iframe-BgC8A34w.js";import"./jsx-runtime-DB5AsIEc.js";import"./index-CTf7ZHmN.js";import"./_commonjsHelpers-CohDEukY.js";import"./index-D7ialhZz.js";import"./index-DxT3PhUg.js";import"./emotion-react.browser.esm-DcZwnc-E.js";import"./index-ChwaAyq9.js";import"./QueryClientProvider-CHbHlJDE.js";import"./path-CP6-VgHJ.js";import"./ellipsis-BqVNzb9o.js";import"./file-B_WMUm8O.js";import"./date-CtM5jmq2.js";import"./useOutsideClick-6mKA_6Hx.js";import"./useOverlay-DwY4tAOw.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6576a061-462d-493e-90d9-1dca6896c054",e._sentryDebugIdIdentifier="sentry-dbid-6576a061-462d-493e-90d9-1dca6896c054")}catch{}})();const j={title:"Shared/Modal/Deleted",component:p,parameters:{layout:"centered"}},t={render:()=>{const e=i();return l(s,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(p,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('deleted', {
        itemType: 'trash'
      })}>Open Trash Deleted Modal</button>
        <button onClick={() => openModal('deleted', {
        itemType: 'permanent'
      })}>Open Permanent Deleted Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const E=["Deleted"];export{t as Deleted,E as __namedExportsOrder,j as default};
