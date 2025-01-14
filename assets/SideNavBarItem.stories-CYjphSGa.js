import{j as b,a as t}from"./emotion-react-jsx-runtime.browser.esm-DbId7oHq.js";import{u as v,v as I}from"./index-7omPbLKz.js";import{h as s,g as w,V as k}from"./index-I1ifivJz.js";import{r as M}from"./index-C9o0bdof.js";import{c as n}from"./emotion-react.browser.esm-Cdlb_IKR.js";import"./iframe-DXnXxHdF.js";import{m as _}from"./proxy-BU6N7Bk_.js";import"./jsx-runtime-BOJYlQO0.js";import"./index-CkNnkf5l.js";import"./_commonjsHelpers-p8ywivfg.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d26fcd21-4539-48e3-80d9-b60dd4e0e06e",e._sentryDebugIdIdentifier="sentry-dbid-d26fcd21-4539-48e3-80d9-b60dd4e0e06e")}catch{}})();const x=e=>n({display:"flex",alignItems:"center",justifyContent:"center",width:"3.6rem",height:"3.6rem",padding:"0.1rem",backgroundColor:s.colors.gray_100,borderRadius:"10px",border:e?`1px solid ${s.colors.key_500}`:"transparent","&:hover":{border:`1px solid ${s.colors.key_500}`},"& > img":{width:"3.3rem",height:"3.3rem",borderRadius:"9px",objectFit:"cover"},cursor:"pointer"}),q=n({position:"absolute",left:0}),j=n({font:`${s.text.body06}`,color:s.colors.gray_500}),S=(e,r)=>n({width:"0.4rem",height:e?"2.4rem":r?"1.6rem":0,borderRadius:"0 100px 100px 0",backgroundColor:e?s.colors.key_500:r?s.colors.key_300:s.colors.white}),D=e=>{switch(e==null?void 0:e.type){case"add":return t(I,{width:16,height:16});case"dashboard":return t(v,{width:20,height:20});case"team":return e.logoUrl?t("img",{src:e.logoUrl,alt:"팀 프로필 이미지"}):t("span",{css:j,children:e.hoverMessage[0]})}},i=({variant:e,isClicked:r,onLogoClick:a,...g})=>{const[p,d]=M.useState(!1),m=()=>{d(!0)},y=()=>{d(!1)},h=f=>{f.key==="Enter"&&a()};return b(k,{tag:"li",styles:{align:"center",justify:"center",padding:"2rem"},...g,children:[r&&t(_.div,{layoutId:"snb_indicator",css:[S(r,p),q]}),t(w,{message:e.hoverMessage,position:"right",gap:.8,children:t("div",{role:"button",tabIndex:0,css:x(r),onClick:a,onKeyDown:h,onMouseEnter:m,onMouseLeave:y,children:D(e)})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Item",props:{variant:{required:!0,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'team'",required:!0}},{key:"logoUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hoverMessage",value:{name:"string",required:!0}}]}}]},description:""},isClicked:{required:!0,tsType:{name:"boolean"},description:""},onLogoClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const B={title:"Shared/SideNavBarItem",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isClicked:{control:{type:"boolean"}}},args:{variant:{type:"team",logoUrl:"",hoverMessage:"팀 프로필"},isClicked:!1,onLogoClick:()=>{}}},o={render:e=>t("div",{css:{position:"relative"},children:t(i,{...e})})};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div css={{
    position: 'relative'
  }}>
      <Item {...args} />
    </div>
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const F=["DefaultItem"];export{o as DefaultItem,F as __namedExportsOrder,B as default};
