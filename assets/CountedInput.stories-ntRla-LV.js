import{a as t}from"./emotion-react-jsx-runtime.browser.esm-Dplcnqpm.js";import{b as a}from"./index-DphkPwi_.js";import{r as d}from"./index-DPnF8c1B.js";import"./iframe-C-ADQynB.js";import"./jsx-runtime-hUGtrKfC.js";import"./index-DifkZw12.js";import"./_commonjsHelpers-mokULyht.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="ce9bf8ce-9d3e-434c-bd4f-0d243ce6b7b7",e._sentryDebugIdIdentifier="sentry-dbid-ce9bf8ce-9d3e-434c-bd4f-0d243ce6b7b7")}catch{}})();const _={title:"Common/CountedInput",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const r=d.useRef(null);return t("form",{onSubmit:()=>{r.current&&r.current.value},children:t(a,{...e,ref:r})})}};var o,s,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
