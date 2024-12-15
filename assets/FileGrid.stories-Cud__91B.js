import{j as t,a as r}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{g as G}from"./index-CLsVEhIN.js";import{K as H,V as p,B as R,a as W,b as K,P as m,H as h}from"./index-Bj-ff5e2.js";import{r as A}from"./index-BeH7IU5F.js";import"./index-2-ic2sVG.js";import{u as z}from"./useOverlay-D8QRSoIa.js";import"./toast-BnAeWbr_.js";import{c as J,i as M,n as Q,o as U,a as u,O as y,t as b,F as f}from"./index.style-CjeGjBMO.js";import{g as X}from"./file-BwgzbXiz.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./_commonjsHelpers-Y38rOxJs.js";import"./emotion-react.browser.esm-xntO1MbF.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e514cb8b-2147-45a0-9b59-74665885bc81",e._sentryDebugIdIdentifier="sentry-dbid-e514cb8b-2147-45a0-9b59-74665885bc81")}catch{}})();const Y=e=>e==="pdf"?f.pdf:e==="word"?f.word:f.image,P=({title:e,type:s,volume:g,variant:a="primary",isSelectable:j=!1,onSelect:d,isSelected:E=!1})=>{const{isOpen:L,close:V,toggle:k}=z(),l=A.useRef(null),B=()=>{if(!l.current)return!1;const{y:N}=l.current.getBoundingClientRect();return N+118+20<document.documentElement.clientHeight-48};return t("article",{css:J(a!=="primary"),children:[j&&r(H,{css:{position:"absolute",right:20},isChecked:E,onChange:()=>d==null?void 0:d()}),r("div",{css:M(a!=="primary"),children:Y(s)}),t(p,{styles:{direction:"column",gap:a==="primary"?"1.2rem":"0.8rem"},children:[t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(R,{css:Q,tag:"H3",children:e}),a==="primary"&&t(W,{onClose:V,children:[r("div",{ref:l,children:r(G,{onClick:k,css:{cursor:"pointer"},width:16,height:16})}),t(K,{css:U(B()),isOpen:L,children:[r(m,{css:u,LeftIcon:y.download,onSelect:()=>{},children:"파일 다운로드"}),r(m,{css:u,LeftIcon:y.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),r(m,{css:u,LeftIcon:y.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[t(h,{tag:"body8",css:b,children:[s," 문서"]}),r(h,{tag:"body8",css:b,children:X(g)})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"File['type']"},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},volume:{required:!0,tsType:{name:"number"},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me={title:"Shared/FileGrid",component:P,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})],args:{volume:2e3}},o={args:{title:"최주용",type:"pdf"}},n={args:{title:"김규홍",type:"word",volume:3e4}},i={args:{title:"이채원",type:"pdf"}},c={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"이채원",type:"pdf"}};var w,v,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '최주용',
    type: 'pdf'
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,T,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '김규홍',
    type: 'word',
    volume: 30000
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,F,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: '이채원',
    type: 'pdf'
  }
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,x,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ue=["PDF","Word","Image","Secondary"];export{i as Image,o as PDF,c as Secondary,n as Word,ue as __namedExportsOrder,me as default};
