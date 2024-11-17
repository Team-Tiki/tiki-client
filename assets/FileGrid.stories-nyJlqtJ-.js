import{j as t,a as r}from"./emotion-react.browser.esm-BcByJIXW.js";import{r as M}from"./index-zHYd3XK7.js";import{S as N}from"./ic_three_dots-By0YpNdb.js";import{F as l}from"./Flex-CO00558j.js";import{H as k}from"./Heading-CPqci2w-.js";import{M as G,a as R,b as p}from"./MenuList-CUVNz5Hq.js";import{T as g}from"./Text-BtXA0Grj.js";import"./iframe-BJ3_o-Sw.js";import{u as W}from"./useOverlay-BcLVCpbp.js";import{c as B,i as V,n as A,o as z,a as m,O as u,t as h,F as y}from"./index.style-BnMwritp.js";import{g as J}from"./file-Dq4b1Jwm.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-BWJFOOWu.js";import"./theme-BXWNzlh0.js";import"./useOutsideClick-Ce2RQVAC.js";import"../sb-preview/runtime.js";import"./ic_trash-Cbzfy3JK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="f1b98e45-929b-4ee0-9924-54ed172bba32",e._sentryDebugIdIdentifier="sentry-dbid-f1b98e45-929b-4ee0-9924-54ed172bba32")}catch{}})();const K=e=>e==="pdf"?y.pdf:e==="word"?y.word:y.image,j=({title:e,type:s,volume:f,variant:o="primary"})=>{const{isOpen:C,close:E,toggle:P}=W(),d=M.useRef(null),q=()=>{if(!d.current)return!1;const{y:H}=d.current.getBoundingClientRect();return H+118+20<document.documentElement.clientHeight-48};return t("article",{css:B(o!=="primary"),children:[r("div",{css:V(o!=="primary"),children:K(s)}),t(l,{styles:{direction:"column",gap:o==="primary"?"1.2rem":"0.8rem"},children:[t(l,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(k,{css:A,tag:"H3",children:e}),o==="primary"&&t(G,{onClose:E,children:[r("div",{ref:d,children:r(N,{onClick:P,css:{cursor:"pointer"},width:16,height:16})}),t(R,{css:z(q()),isOpen:C,children:[r(p,{css:m,LeftIcon:u.download,onSelect:()=>{},children:"파일 다운로드"}),r(p,{css:m,LeftIcon:u.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),r(p,{css:m,LeftIcon:u.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),t(l,{styles:{width:"100%",justify:"space-between",align:"center"},children:[t(g,{tag:"body8",css:h,children:[s," 문서"]}),r(g,{tag:"body8",css:h,children:J(f)})]})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"File['type']"},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},volume:{required:!0,tsType:{name:"number"},description:""}}};const pe={title:"Shared/FileGrid",component:j,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})],args:{volume:2e3}},n={args:{title:"최주용",type:"pdf"}},a={args:{title:"김규홍",type:"word",volume:3e4}},i={args:{title:"이채원",type:"pdf"}},c={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"이채원",type:"pdf"}};var b,w,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '최주용',
    type: 'pdf'
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,v,F;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '김규홍',
    type: 'word',
    volume: 30000
  }
}`,...(F=(v=a.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var T,_,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '이채원',
    type: 'pdf'
  }
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var D,O,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const me=["PDF","Word","Image","Secondary"];export{i as Image,n as PDF,c as Secondary,a as Word,me as __namedExportsOrder,pe as default};
