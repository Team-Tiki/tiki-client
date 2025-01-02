import{j as p,a as n,F as s}from"./emotion-react-jsx-runtime.browser.esm-DcwrIcx9.js";import{M as l,u as i}from"./ModalFunnel-CzLY2b0C.js";import"./iframe-D_cIFqUu.js";import"./jsx-runtime-fFF4Ar6N.js";import"./index-BnzvyeZr.js";import"./_commonjsHelpers-CHhxJATD.js";import"./index-D66-Zmap.js";import"./index-1PJj4saT.js";import"./emotion-react.browser.esm-D0dXN3nh.js";import"./index-DrwiF3X0.js";import"./QueryClientProvider-BPeUkAZM.js";import"./path-GCxXo9TU.js";import"./file-BGK0KqxL.js";import"./useOutsideClick-DbQvtvmW.js";import"./useOverlay-CFlOUx7v.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="302bedbc-0219-4962-90d5-a9df49224510",e._sentryDebugIdIdentifier="sentry-dbid-302bedbc-0219-4962-90d5-a9df49224510")}catch{}})();const C={title:"Shared/Modal/Deleted",component:l,parameters:{layout:"centered"}},t={render:()=>{const e=i();return p(s,{children:[n("button",{onClick:()=>e("deleted",{itemType:"trash"}),children:"Open Trash Deleted Modal"}),n("button",{onClick:()=>e("deleted",{itemType:"permanent"}),children:"Open Permanent Deleted Modal"}),n(l,{})]})}};var r,d,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
