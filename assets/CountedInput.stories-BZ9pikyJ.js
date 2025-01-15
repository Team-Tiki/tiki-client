import{a as t}from"./emotion-react-jsx-runtime.browser.esm-CgcFQ3o_.js";import{x as u}from"./index-BW1yReUk.js";import{r as m}from"./index-BOoXDiuC.js";import"./iframe-e0bPEceg.js";import"./jsx-runtime-Cm40G9zW.js";import"./index-DNuBmFMy.js";import"./_commonjsHelpers-BBMxPn9X.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7fb6a005-5607-4079-a962-25daf3400f3e",e._sentryDebugIdIdentifier="sentry-dbid-7fb6a005-5607-4079-a962-25daf3400f3e")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxLength: 20,
    label: '카운트 인풋'
  },
  render: args => {
    const ref = useRef<HTMLInputElement | null>(null);
    const _onSubmit = () => {
      if (!ref.current) return;
      ref.current.value;
    };
    return <form onSubmit={_onSubmit}>
        <CountedInput {...args} ref={ref} />
      </form>;
  }
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,_ as default};
