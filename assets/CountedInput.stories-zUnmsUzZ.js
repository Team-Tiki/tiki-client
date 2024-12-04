import{a as t}from"./emotion-react-jsx-runtime.browser.esm-CSiOhW6i.js";import{d as u}from"./index-CvOiDExs.js";import{r as f}from"./index-BUjKFtp4.js";import"./iframe-DyHOD6cA.js";import"./jsx-runtime-Dh0KApn4.js";import"./index-BugzcMrQ.js";import"./_commonjsHelpers-BphuXKqK.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="71df8a85-89f5-4819-ad9e-79a37702b585",e._sentryDebugIdIdentifier="sentry-dbid-71df8a85-89f5-4819-ad9e-79a37702b585")}catch{}})();const _={title:"Common/CountedInput",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=f.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(u,{...e,ref:r})})}};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
