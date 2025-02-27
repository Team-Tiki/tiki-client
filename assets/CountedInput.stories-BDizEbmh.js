import{a as t}from"./emotion-react-jsx-runtime.browser.esm-om8Oq2cU.js";import{M as u}from"./index-BsBUjKss.js";import{r as d}from"./index-CDFQnoDq.js";import"./iframe-C7Zt0td-.js";import"./jsx-runtime-Z9WpWPk4.js";import"./index-L6fdsbjX.js";import"./_commonjsHelpers-CWuwZOzQ.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="bdc666ac-987d-46e1-9b7f-81040b1b096e",e._sentryDebugIdIdentifier="sentry-dbid-bdc666ac-987d-46e1-9b7f-81040b1b096e")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=d.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,s,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,_ as default};
