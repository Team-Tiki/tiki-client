import{j as v,a as t}from"./emotion-react-jsx-runtime.browser.esm-X40Ljg8D.js";import{s as b,t as I}from"./index-Cux8MSo6.js";import{f as s,e as w,V as k}from"./index-D86Xz3BQ.js";import{r as M}from"./index-DP46ZViu.js";import{c as n}from"./emotion-react.browser.esm--G7jxiOG.js";import"./iframe-CmxKGbyM.js";import{m as _}from"./proxy-3fVgERjz.js";import"./jsx-runtime-CqA88Xid.js";import"./index-FZfJ9VPi.js";import"./_commonjsHelpers-B1-KKXIh.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d23d98ee-33e8-4529-9719-e59d070448ed",e._sentryDebugIdIdentifier="sentry-dbid-d23d98ee-33e8-4529-9719-e59d070448ed")}catch{}})();const x=e=>n({display:"flex",alignItems:"center",justifyContent:"center",width:"3.6rem",height:"3.6rem",padding:"0.1rem",backgroundColor:s.colors.gray_100,borderRadius:"10px",border:e?`1px solid ${s.colors.key_500}`:0,"&:hover":{border:`1px solid ${s.colors.key_500}`},cursor:"pointer"}),q=n({position:"absolute",left:0}),S=n({font:`${s.text.body06}`,color:s.colors.gray_500}),j=(e,r)=>n({width:"0.4rem",height:e?"2.4rem":r?"1.6rem":0,borderRadius:"0 100px 100px 0",backgroundColor:e?s.colors.key_500:r?s.colors.key_300:s.colors.white}),D=e=>{switch(e==null?void 0:e.type){case"add":return t(I,{width:16,height:16});case"dashboard":return t(b,{width:20,height:20});case"team":return e.logoUrl?t("img",{src:e.logoUrl,alt:"팀 프로필 이미지"}):t("span",{css:S,children:e.hoverMessage[0]})}},i=({variant:e,isClicked:r,onLogoClick:a,...p})=>{const[g,d]=M.useState(!1),m=()=>{d(!0)},y=()=>{d(!1)},h=f=>{f.key==="Enter"&&a()};return v(k,{tag:"li",styles:{align:"center",justify:"center",padding:"2rem"},...p,children:[r&&t(_.div,{layoutId:"snb_indicator",css:[j(r,g),q]}),t(w,{message:e.hoverMessage,position:"right",gap:.8,children:t("div",{role:"button",tabIndex:0,css:x(r),onClick:a,onKeyDown:h,onMouseEnter:m,onMouseLeave:y,children:D(e)})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Item",props:{variant:{required:!0,tsType:{name:"union",raw:`| {
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
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const G=["DefaultItem"];export{o as DefaultItem,G as __namedExportsOrder,B as default};
