import{j as p,a as n,F as s}from"./emotion-react-jsx-runtime.browser.esm-BMRrGUoY.js";import{M as l,u as i}from"./ModalFunnel-W2pJGdDz.js";import"./iframe-CKHK7kjS.js";import"./jsx-runtime-CSQ2kVJu.js";import"./index-wfj-DMEF.js";import"./_commonjsHelpers-pxsygbFN.js";import"./index-Bmbx8JJe.js";import"./index-DrZZjb1u.js";import"./emotion-react.browser.esm-Bih4wIn0.js";import"./index-DrwiF3X0.js";import"./QueryClientProvider-Rgrbm80-.js";import"./path-Bozs5Dk-.js";import"./file-B6lEZ3oo.js";import"./useOutsideClick-B_pbMPvX.js";import"./useOverlay-BC1SScrY.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="302bedbc-0219-4962-90d5-a9df49224510",e._sentryDebugIdIdentifier="sentry-dbid-302bedbc-0219-4962-90d5-a9df49224510")}catch{}})();const C={title:"Shared/Modal/Deleted",component:l,parameters:{layout:"centered"}},t={render:()=>{const e=i();return p(s,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(l,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const F=["Deleted"];export{t as Deleted,F as __namedExportsOrder,C as default};
