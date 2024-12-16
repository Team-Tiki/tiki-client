import{j as t,a as r}from"./emotion-react-jsx-runtime.browser.esm-B11pG2Q1.js";import{e as H}from"./index-KOc712aO.js";import{r as R,V as p,Q as W,P as B,M,D as m,d as h}from"./index-B18N1-H1.js";import{r as Q}from"./index-DHVZhVOJ.js";import"./index-QrSXGyyF.js";import{u as A}from"./useOverlay-BMb3CDX8.js";import{c as z,i as J,n as K,o as U,a as u,O as f,t as w,F as y}from"./index.style-CwLaWRdk.js";import{g as X}from"./file-CRtA9KtG.js";import"./iframe-419IoHn_.js";import"./jsx-runtime-CNYhNCag.js";import"./_commonjsHelpers-pze6Shwd.js";import"./emotion-react.browser.esm-C8SD5zxP.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="667250f8-e0fe-4d49-8da8-ff24f5982ada",e._sentryDebugIdIdentifier="sentry-dbid-667250f8-e0fe-4d49-8da8-ff24f5982ada")}catch{}})();const Y=e=>e==="pdf"?y.pdf:e==="word"?y.word:y.image,P=({title:e,type:s,volume:g,variant:a="primary",isSelectable:j=!1,onSelect:c,isSelected:E=!1})=>{const{isOpen:L,close:V,toggle:k}=A(),l=Q.useRef(null),N=()=>{if(!l.current)return!1;const{y:G}=l.current.getBoundingClientRect();return G+118+20<document.documentElement.clientHeight-48};return t("article",{css:z(a!=="primary"),children:[j&&r(R,{css:{position:"absolute",right:20},isChecked:E,onChange:()=>c==null?void 0:c()}),r("div",{css:J(a!=="primary"),children:Y(s)}),t(p,{styles:{direction:"column",gap:a==="primary"?"1.2rem":"0.8rem"},children:[t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(W,{css:K,tag:"H3",children:e}),a==="primary"&&t(B,{onClose:V,children:[r("div",{ref:l,children:r(H,{onClick:k,css:{cursor:"pointer"},width:16,height:16})}),t(M,{css:U(N()),isOpen:L,children:[r(m,{css:u,LeftIcon:f.download,onSelect:()=>{},children:"파일 다운로드"}),r(m,{css:u,LeftIcon:f.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),r(m,{css:u,LeftIcon:f.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),t(p,{styles:{width:"100%",justify:"space-between",align:"center"},children:[t(h,{tag:"body8",css:w,children:[s," 문서"]}),r(h,{tag:"body8",css:w,children:X(g)})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"File['type']"},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},volume:{required:!0,tsType:{name:"number"},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe={title:"Shared/FileGrid",component:P,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})],args:{volume:2e3}},o={args:{title:"최주용",type:"pdf"}},n={args:{title:"김규홍",type:"word",volume:3e4}},i={args:{title:"이채원",type:"pdf"}},d={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"이채원",type:"pdf"}};var v,I,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '최주용',
    type: 'pdf'
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var b,T,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var q,x,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const me=["PDF","Word","Image","Secondary"];export{i as Image,o as PDF,d as Secondary,n as Word,me as __namedExportsOrder,pe as default};
