import{a as d}from"./emotion-react-jsx-runtime.browser.esm-BMRrGUoY.js";import{c as u,d as f}from"./index-DrwiF3X0.js";import{P as i}from"./index-Bmbx8JJe.js";import{r as l}from"./index-wfj-DMEF.js";import"./iframe-CKHK7kjS.js";import"./jsx-runtime-CSQ2kVJu.js";import"./index-DrZZjb1u.js";import"./_commonjsHelpers-pxsygbFN.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="10286b65-a1a4-4e94-a22c-c9610e3538ea",t._sentryDebugIdIdentifier="sentry-dbid-10286b65-a1a4-4e94-a22c-c9610e3538ea")}catch{}})();const _={title:"Common/Switch",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"radio",options:["left","right"]}}},args:{status:"left",onSwitchChange:()=>{},LeftIcon:{Icon:u,mode:"stroke"},RightIcon:{Icon:f,mode:"fill"}}},r={render:t=>{const[e,s]=l.useState("left");return d(i,{...t,status:e,onSwitchChange:()=>s(c=>c==="left"?"right":"left")})}};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [status, setStatus] = useState<'left' | 'right'>('left');
    return <Switch {...args} status={status} onSwitchChange={() => setStatus(prev => prev === 'left' ? 'right' : 'left')} />;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,_ as default};
