import{a as t}from"./emotion-react-jsx-runtime.browser.esm-1aLUm0cN.js";import{T as u}from"./index-DyOzG3Jj.js";import{r as m}from"./index-C5vGpNkZ.js";import"./iframe-CTvfGco_.js";import"./jsx-runtime-Dx9n3GHS.js";import"./index-BQQABdC3.js";import"./_commonjsHelpers-f00IlyR4.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="89b9a78a-859c-43de-9daa-ed8b6c15280c",e._sentryDebugIdIdentifier="sentry-dbid-89b9a78a-859c-43de-9daa-ed8b6c15280c")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=m.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
