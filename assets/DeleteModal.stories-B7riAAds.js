import{j as l,a as n,F as i}from"./emotion-react-jsx-runtime.browser.esm-DQe0EfKL.js";import{M as p,u as s}from"./ModalFunnel-aH98HTu-.js";import"./iframe-C_b4Fecy.js";import"./jsx-runtime-RlDRH4SL.js";import"./index-BXt_sIDv.js";import"./_commonjsHelpers-CZjSIzfs.js";import"./index-DGyI_S63.js";import"./index-Ck8YoaOF.js";import"./emotion-react.browser.esm-tguEHsvF.js";import"./index-ChwaAyq9.js";import"./QueryClientProvider-Dw7KA7J0.js";import"./path-B-RwisSM.js";import"./index-DMjzWaEY.js";import"./ellipsis-Dqq8ILJm.js";import"./file-DBy_04zi.js";import"./date-tbRoBEmI.js";import"./useOutsideClick-DKiEIIKG.js";import"./useOverlay-CzWB5YhN.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2",e._sentryDebugIdIdentifier="sentry-dbid-cdce2fc4-f5c8-46bc-9bcd-33f1be9b88f2")}catch{}})();const E={title:"Shared/Modal/Deleted",component:p,parameters:{layout:"centered"}},t={render:()=>{const e=s();return l(i,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(p,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
