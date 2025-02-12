import{j as m,a as r}from"./emotion-react-jsx-runtime.browser.esm-Ekt0d8yW.js";import{s as y,t as h}from"./index-DACGP-7d.js";import{n as s,C as b,V as f,f as v}from"./index-D-1X35ZC.js";import{c as o}from"./emotion-react.browser.esm-DRKrUhHX.js";import"./iframe-DvJdWFAf.js";import{m as I}from"./proxy-DZqJLFob.js";import"./jsx-runtime-O5tFiWyD.js";import"./index-GXRndo3Y.js";import"./_commonjsHelpers-CP70rbTI.js";import"./index-B-X6ieaV.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5d778cbe-48f7-4f10-981a-0b130b19f605",e._sentryDebugIdIdentifier="sentry-dbid-5d778cbe-48f7-4f10-981a-0b130b19f605")}catch{}})();const w=(e,t)=>o({display:"flex",alignItems:"center",justifyContent:"center",width:"3.6rem",height:"3.6rem",padding:"0.1rem",backgroundColor:t?"inherit":s.colors.gray_100,borderRadius:"10px",border:e?`1px solid ${s.colors.key_500}`:"transparent","&:hover":{border:t?"none":`1px solid ${s.colors.key_500}`},"& > img":{width:"3.3rem",height:"3.3rem",borderRadius:"9px",objectFit:"cover"},cursor:"pointer"}),k=o({position:"absolute",left:0}),_=o({font:`${s.text.body06}`,color:s.colors.gray_500}),x=()=>o({width:"0.4rem",height:"2.4rem",borderRadius:"0 100px 100px 0",backgroundColor:s.colors.key_500}),M=o({objectFit:"cover"}),j=e=>{switch(e==null?void 0:e.type){case"add":return r(h,{width:16,height:16});case"dashboard":return r(y,{width:20,height:20});case"team":return e.logoUrl?r("img",{src:e.logoUrl,alt:"팀 프로필 이미지",css:M}):r(v,{tag:"body6",css:_,children:e.hoverMessage[0]})}},i=({variant:e,isClicked:t,onLogoClick:a,...u})=>{const g=p=>{p.key==="Enter"&&a()};return m(f,{tag:"li",styles:{align:"center",justify:"center",padding:"2rem"},...u,children:[t&&r(I.div,{layoutId:"snb_indicator",css:[x,k]}),r(b,{message:e.hoverMessage,position:"right",gap:.8,children:r("div",{role:"button",tabIndex:0,css:w(t,e.type==="add"),onClick:a,onKeyDown:g,children:j(e)})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Item",props:{variant:{required:!0,tsType:{name:"union",raw:`| {
    type: 'add';
    hoverMessage: string;
  }
| {
    type: 'dashboard';
    hoverMessage: string;
  }
| {
    type: 'team';
    logoUrl: string | null;
    hoverMessage: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'add';
  hoverMessage: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'add'",required:!0}},{key:"hoverMessage",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'dashboard';
  hoverMessage: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'dashboard'",required:!0}},{key:"hoverMessage",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'team';
  logoUrl: string | null;
  hoverMessage: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'team'",required:!0}},{key:"logoUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hoverMessage",value:{name:"string",required:!0}}]}}]},description:""},isClicked:{required:!0,tsType:{name:"boolean"},description:""},onLogoClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const K={title:"Shared/SideNavBarItem",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isClicked:{control:{type:"boolean"}}},args:{variant:{type:"team",logoUrl:"",hoverMessage:"팀 프로필"},isClicked:!1,onLogoClick:()=>{}}},n={render:e=>r("div",{css:{position:"relative"},children:r(i,{...e})})};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div css={{
    position: 'relative'
  }}>
      <Item {...args} />
    </div>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const N=["DefaultItem"];export{n as DefaultItem,N as __namedExportsOrder,K as default};
