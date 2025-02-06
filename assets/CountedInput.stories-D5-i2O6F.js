import{a as t}from"./emotion-react-jsx-runtime.browser.esm--K9-Jq3y.js";import{w as u}from"./index-BiyQyw_j.js";import{r as m}from"./index-DEZx8eBJ.js";import"./iframe-BAX_hDx1.js";import"./jsx-runtime-BgUXCdF3.js";import"./index-BAGrwgMQ.js";import"./_commonjsHelpers-CB5cDWNc.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="2b379461-5ff1-4333-96b6-12d3393b6aba",e._sentryDebugIdIdentifier="sentry-dbid-2b379461-5ff1-4333-96b6-12d3393b6aba")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,_ as default};
