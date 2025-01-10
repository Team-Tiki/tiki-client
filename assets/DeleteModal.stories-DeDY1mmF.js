import{j as l,a as n,F as i}from"./emotion-react-jsx-runtime.browser.esm-C7iIxEpb.js";import{M as p,u as s}from"./ModalFunnel-tQR4WTEb.js";import"./iframe-DhOyMsR2.js";import"./jsx-runtime-CTWN555-.js";import"./index-B8xOyAiW.js";import"./_commonjsHelpers-oeVebtE3.js";import"./index-BlMksOeH.js";import"./index-DU42JU3g.js";import"./emotion-react.browser.esm-r00AveV7.js";import"./index-CQhz6hb0.js";import"./QueryClientProvider-DInQHz0z.js";import"./path-B0Kr3IiP.js";import"./index-D0f6sp8H.js";import"./ellipsis-Dk7UOkfw.js";import"./file-Ce5aWLuE.js";import"./date-38rvo-pF.js";import"./useOutsideClick-BYpEn29j.js";import"./useOverlay-C7g0t3ZR.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2",e._sentryDebugIdIdentifier="sentry-dbid-cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2")}catch{}})();const E={title:"Shared/Modal/Deleted",component:p,parameters:{layout:"centered"}},t={render:()=>{const e=s();return l(i,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(p,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
