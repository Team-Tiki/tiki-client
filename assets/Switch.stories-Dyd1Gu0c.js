import{a as c}from"./emotion-react-jsx-runtime.browser.esm-B0ug89-h.js";import{c as f,d as u}from"./index-B-uMTWfr.js";import{b as d}from"./index-DOaLi1ig.js";import{r as l}from"./index-CdJZ8d6U.js";import"./iframe-BG7UOw9o.js";import"./jsx-runtime-5_vuh0U1.js";import"./index-BL_C2bkq.js";import"./_commonjsHelpers-CEzIEMAZ.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3cb6fc2d-1e58-45f6-8a71-f2d278d77921",t._sentryDebugIdIdentifier="sentry-dbid-3cb6fc2d-1e58-45f6-8a71-f2d278d77921")}catch{}})();const _={title:"Common/Switch",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"radio",options:["left","right"]}}},args:{status:"left",onSwitchChange:()=>{},LeftIcon:{Icon:f,mode:"stroke"},RightIcon:{Icon:u,mode:"fill"}}},r={render:t=>{const[e,s]=l.useState("left");return c(d,{...t,status:e,onSwitchChange:()=>s(i=>i==="left"?"right":"left")})}};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [status, setStatus] = useState<'left' | 'right'>('left');
    return <Switch {...args} status={status} onSwitchChange={() => setStatus(prev => prev === 'left' ? 'right' : 'left')} />;
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,_ as default};
