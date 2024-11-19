import{j as t,a as r}from"./emotion-react.browser.esm-DVCGPw0o.js";import{r as V}from"./index-B4Z6PsAH.js";import{S as B}from"./ic_three_dots-BVRLYobK.js";import{C as G}from"./CheckBox-B0NBCG01.js";import{F as p}from"./Flex-CcBQZiMH.js";import{H as R}from"./Heading-BCYRSNXR.js";import{M as W,a as A,b as m}from"./MenuList-Cq7c8mmt.js";import{T as h}from"./Text-BdNMkr7S.js";import"./iframe-BnffqoK7.js";import{u as z}from"./useOverlay-jcCv9x_t.js";import{c as J,i as K,n as Q,o as U,a as u,O as f,t as b,F as y}from"./index.style-TC8qthSU.js";import{g as X}from"./file-o2e5cVZ2.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-XnwbWaTF.js";import"./theme-DwD7F4-e.js";import"./useOutsideClick-COUwwguf.js";import"../sb-preview/runtime.js";import"./ic_trash-D7lR1pQ_.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="0822b569-f554-4b4c-9a51-79bc960aa804",e._sentryDebugIdIdentifier="sentry-dbid-0822b569-f554-4b4c-9a51-79bc960aa804")}catch{}})();const Y=e=>e==="pdf"?y.pdf:e==="word"?y.word:y.image,L=({title:e,type:s,volume:g,variant:a="primary",isSelectable:j=!1,onSelect:d,isSelected:k=!1})=>{const{isOpen:E,close:P,toggle:H}=z(),l=V.useRef(null),M=()=>{if(!l.current)return!1;const{y:N}=l.current.getBoundingClientRect();return N+118+20<document.documentElement.clientHeight-48};return t("article",{css:J(a!=="primary"),children:[j&&r(G,{css:{position:"absolute",right:20},isChecked:k,onChange:()=>d==null?void 0:d()}),r("div",{css:K(a!=="primary"),children:Y(s)}),t(p,{styles:{direction:"column",gap:a==="primary"?"1.2rem":"0.8rem"},children:[t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(R,{css:Q,tag:"H3",children:e}),a==="primary"&&t(W,{onClose:P,children:[r("div",{ref:l,children:r(B,{onClick:H,css:{cursor:"pointer"},width:16,height:16})}),t(A,{css:U(M()),isOpen:E,children:[r(m,{css:u,LeftIcon:f.download,onSelect:()=>{},children:"파일 다운로드"}),r(m,{css:u,LeftIcon:f.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),r(m,{css:u,LeftIcon:f.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[t(h,{tag:"body8",css:b,children:[s," 문서"]}),r(h,{tag:"body8",css:b,children:X(g)})]})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"File['type']"},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},volume:{required:!0,tsType:{name:"number"},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge={title:"Shared/FileGrid",component:L,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})],args:{volume:2e3}},o={args:{title:"최주용",type:"pdf"}},n={args:{title:"김규홍",type:"word",volume:3e4}},i={args:{title:"이채원",type:"pdf"}},c={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"이채원",type:"pdf"}};var w,v,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '최주용',
    type: 'pdf'
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,T,F;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '김규홍',
    type: 'word',
    volume: 30000
  }
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var x,_,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '이채원',
    type: 'pdf'
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var D,O,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '16rem'
  }}>
        <Story />
      </div>],
  args: {
    variant: 'secondary',
    title: '이채원',
    type: 'pdf'
  }
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const he=["PDF","Word","Image","Secondary"];export{i as Image,o as PDF,c as Secondary,n as Word,he as __namedExportsOrder,ge as default};
