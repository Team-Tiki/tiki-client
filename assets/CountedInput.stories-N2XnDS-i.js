import{a as t}from"./emotion-react-jsx-runtime.browser.esm-BMRrGUoY.js";import{y as u}from"./index-Bmbx8JJe.js";import{r as f}from"./index-wfj-DMEF.js";import"./iframe-CKHK7kjS.js";import"./jsx-runtime-CSQ2kVJu.js";import"./index-DrZZjb1u.js";import"./_commonjsHelpers-pxsygbFN.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="bad22e88-c2b2-41ff-96cf-c1cb681c5947",e._sentryDebugIdIdentifier="sentry-dbid-bad22e88-c2b2-41ff-96cf-c1cb681c5947")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=f.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,s,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
