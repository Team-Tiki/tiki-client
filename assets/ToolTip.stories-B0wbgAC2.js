import{c as o,j as p,a as u}from"./emotion-react.browser.esm-BxooFqIY.js";import{F as w}from"./Flex-CwmRgT2Z.js";import{r as l}from"./index-D5Y6yO2w.js";import{t as s}from"./theme-DHso3wnW.js";import"./iframe-DIYkR_Hp.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-DsPPmOs3.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8cba8314-c5f3-471f-8d67-a7798abafdbc",t._sentryDebugIdIdentifier="sentry-dbid-8cba8314-c5f3-471f-8d67-a7798abafdbc")}catch{}})();const T=t=>l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{id:"Vector 757",d:"M6.5 7.13841L1.00778 4L6.5 0.86159L6.5 7.13841Z",fill:"#323A4C",stroke:"#323A4C"})),v=o({position:"relative",border:"1px solid"}),_=t=>o({position:"absolute",width:"max-content",padding:"1rem",borderRadius:"8px",backgroundColor:`${s.colors.gray_900}`,font:`${s.text.body08}`,color:`${s.colors.white}`,visibility:t?"visible":"hidden",transitionDelay:"0.2s",pointerEvents:"none"}),D=(t,e)=>({top:o({left:"50%",bottom:"100%",transform:`translateX(-50%) translateY(calc(-${e}rem - 8px) )`}),bottom:o({left:"50%",up:"100%",transform:`translateX(-50%) translateY(calc(${e}rem + 8px))`}),left:o({top:"50%",right:"100%",transform:`translateY(-50%) translateX(calc(-${e}rem - 8px))`}),right:o({top:"50%",left:"100%",transform:`translateY(-50%) translateX(calc(${e}rem + 8px))`})})[t],I=o({position:"absolute"}),E=t=>({top:o({left:"50%",top:"calc(100%)",transform:"translateX(-50%) translateY(-1px) rotate(270deg)"}),bottom:o({left:"50%",bottom:"calc(100%)",transform:"translateX(-50%) translateY(1px) rotate(90deg)"}),left:o({top:"50%",left:"calc(100%)",transform:"translateY(-50%) translateX(-1px) rotate(180deg)"}),right:o({top:"50%",right:"calc(100%)",transform:"translateY(-50%) translateX(1px)"})})[t],g=({position:t="right",message:e,gap:a=0,children:y,...b})=>{const[h,i]=l.useState(!1),c=()=>{i(!0)},n=()=>{i(!1)};return p("div",{"aria-describedby":e,role:"button",css:v,tabIndex:0,onMouseEnter:c,onMouseLeave:n,onKeyDown:x=>{x.key==="Escape"&&n()},onFocus:c,onBlur:n,children:[y,p("span",{role:"tooltip",css:[_(h),D(t,a)],...b,children:[u(T,{css:[I,E(t)]}),e]})]})};g.__docgenInfo={description:"",methods:[],displayName:"ToolTip",props:{position:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}},composes:["HTMLAttributes"]};const L={title:"Common/ToolTip",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:{type:"radio"},options:["top","bottom","left","right"]},message:{control:{type:"text"}}},args:{position:"top",message:"ToolTip",gap:.8}},r={args:{children:u(w,{style:{width:"36px",height:"36px",backgroundColor:s.colors.purple_200},styles:{justify:"center",align:"center"},children:"호버"})}};var d,m,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Flex style={{
      width: '36px',
      height: '36px',
      backgroundColor: theme.colors.purple_200
    }} styles={{
      justify: 'center',
      align: 'center'
    }}>
        호버
      </Flex>
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const A=["DefaultToolTip"];export{r as DefaultToolTip,A as __namedExportsOrder,L as default};
