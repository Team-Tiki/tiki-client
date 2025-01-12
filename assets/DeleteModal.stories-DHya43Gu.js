import{j as l,a as n,F as i}from"./emotion-react-jsx-runtime.browser.esm-579asJ-5.js";import{M as p,u as s}from"./ModalFunnel-O2jIUNDh.js";import"./iframe-CBQSNlDN.js";import"./jsx-runtime-DqY0UwXg.js";import"./index-D8YdTOei.js";import"./_commonjsHelpers-DQkIsdE4.js";import"./index-Drb8ZRV_.js";import"./index-GJISQtwA.js";import"./emotion-react.browser.esm-BrgbHjql.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-CP_i5eod.js";import"./path-BKJ6Xtbv.js";import"./index-1FWa9ZK0.js";import"./ellipsis-CwreXY0a.js";import"./file-3cXjIGAa.js";import"./date-CZLlcysR.js";import"./useOutsideClick-H9lT-IWc.js";import"./useOverlay-DnodtGTY.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2",e._sentryDebugIdIdentifier="sentry-dbid-cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2")}catch{}})();const E={title:"Shared/Modal/Deleted",component:p,parameters:{layout:"centered"}},t={render:()=>{const e=s();return l(i,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(p,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
