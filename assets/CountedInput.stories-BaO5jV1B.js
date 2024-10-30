import{c as s,j as l,a as n}from"./emotion-react.browser.esm-BfGdiYsr.js";import{r as c}from"./index-BIVkFdEb.js";import{t as r}from"./theme-D_hXtwKx.js";import"./iframe-B6jFujzW.js";import{L as x}from"./Label-BjmDC5KP.js";import{S as w}from"./SupportingText--KD6pVZw.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-C2smHn_f.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1d863871-0cf4-4401-95fa-60eca2c33bf2",e._sentryDebugIdIdentifier="sentry-dbid-1d863871-0cf4-4401-95fa-60eca2c33bf2")}catch{}})();const _=s({display:"flex",flexDirection:"column",gap:"0.2rem",width:"100%","& > label":{margin:"0 0 1rem"}}),I=s({width:"100%",paddingRight:"4rem",border:"none",backgroundColor:"transparent",fontWeight:400,...r.text.body06,outline:"none","::placeholder":{color:r.colors.gray_500,...r.text.body06}}),C=s({display:"flex",alignItems:"center",gap:"1rem",position:"relative",height:"4rem",padding:"1.3rem 1.2rem",backgroundColor:"transparent",boxShadow:r.shadow.inset,borderRadius:"8px","&:focus-within":{boxShadow:r.shadow.inset_focus}}),v=s({position:"absolute",...r.text.body06,color:r.colors.gray_500,right:"1.2rem"}),D=({label:e,maxLength:t,isError:a=!1,isSuccess:b=!1,supportingText:u,...h},y)=>{const[d,S]=c.useState(0);return l("div",{css:_,children:[e&&n(x,{id:e,children:e}),l("div",{css:C,children:[n("input",{ref:y,css:I,onChange:i=>{d===t&&(i.target.value=i.target.value.substring(0,t)),S(i.target.value.length)},...h}),n("span",{css:v,children:`${d}/${t}`})]}),u&&n(w,{isError:a,isNotice:b,children:u})]})},g=c.forwardRef(D),N={title:"Common/CountedInput",component:g,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{maxLength:20,label:"카운트 인풋"},render:e=>{const t=c.useRef(null);return n("form",{onSubmit:()=>{t.current&&t.current.value},children:n(g,{...e,ref:t})})}};var f,m,p;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,N as default};
