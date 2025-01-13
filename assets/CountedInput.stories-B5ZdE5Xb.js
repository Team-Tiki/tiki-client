import{a as t}from"./emotion-react-jsx-runtime.browser.esm-BKcB-RGS.js";import{b as a}from"./index-BKUS_alP.js";import{r as m}from"./index-o_EzgL0Q.js";import"./iframe-DhUXudMo.js";import"./jsx-runtime-BoFDOXn5.js";import"./index-B4ne36_A.js";import"./_commonjsHelpers-DJWhL92i.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="083ff30b-6215-473b-81dd-3f2fe6679418",e._sentryDebugIdIdentifier="sentry-dbid-083ff30b-6215-473b-81dd-3f2fe6679418")}catch{}})();const _={title:"Common/CountedInput",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(a,{...e,ref:r})})}};var o,s,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,_ as default};
