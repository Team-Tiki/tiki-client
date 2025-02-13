import{a as t}from"./emotion-react-jsx-runtime.browser.esm-B8H8OE5q.js";import{D as u}from"./index-B3mj46ur.js";import{r as m}from"./index-CT12xj68.js";import"./iframe-Cljow89B.js";import"./jsx-runtime-JVV37XSY.js";import"./index-kEXRF5PY.js";import"./_commonjsHelpers-DMeIt8Ii.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e63c9d6a-3acf-4f70-96a1-9a056aa5ef33",e._sentryDebugIdIdentifier="sentry-dbid-e63c9d6a-3acf-4f70-96a1-9a056aa5ef33")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,_ as default};
