import{j as l,a as n,F as i}from"./emotion-react-jsx-runtime.browser.esm-9bySHiN0.js";import{M as p,u as s}from"./ModalFunnel-BFCAa4Ew.js";import"./iframe-Cr9V9C4F.js";import"./jsx-runtime-DiEtJSu1.js";import"./index-CDFUywMV.js";import"./_commonjsHelpers-C5BzYfaU.js";import"./index-D6OffPLX.js";import"./index-DFdKqPTn.js";import"./emotion-react.browser.esm-OUb4ob6w.js";import"./index-CQhz6hb0.js";import"./QueryClientProvider-8HGUzl1J.js";import"./path-DKmLhYjw.js";import"./index-hht8AVEF.js";import"./ellipsis-DSaLaqOf.js";import"./file-i__a5mpJ.js";import"./date-D82L3Oj_.js";import"./useOutsideClick-BBWOxHc1.js";import"./useOverlay-BLOYWf2E.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2",e._sentryDebugIdIdentifier="sentry-dbid-cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2")}catch{}})();const E={title:"Shared/Modal/Deleted",component:p,parameters:{layout:"centered"}},t={render:()=>{const e=s();return l(i,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(p,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const P=["Deleted"];export{t as Deleted,P as __namedExportsOrder,E as default};
