import{a as t}from"./emotion-react-jsx-runtime.browser.esm-Pb5KDtxz.js";import{k as u}from"./index-BGnltjbx.js";import{r as m}from"./index-adx-a8a8.js";import"./iframe-B9iP3CXE.js";import"./jsx-runtime-CrXwDwH6.js";import"./index-BcbDYR9r.js";import"./_commonjsHelpers-CAzaRoFM.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3a96af70-eef8-4e1c-8246-94a285232acd",e._sentryDebugIdIdentifier="sentry-dbid-3a96af70-eef8-4e1c-8246-94a285232acd")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
