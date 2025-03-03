import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-CoO74p4L.js";import{k as W}from"./index-B-uMTWfr.js";import{p as U,U as m,s as H,F as z,A as J,B as u,_ as g}from"./index-CO1PeNyO.js";import{r as K}from"./index-BYIGI506.js";import"./index-4wqIsjJH.js";import{u as M}from"./useOverlay-DC8fvvox.js";import{c as Q,i as X,g as Y,n as Z,o as $,a as f,O as y,t as v}from"./index.style-Dg_6jOxR.js";import{d as ee,c as ae}from"./document-quLL3STN.js";import{g as re}from"./file-CF3ff7pV.js";import"./iframe-D2Z6e7F9.js";import"./jsx-runtime-Cq78o-jh.js";import"./_commonjsHelpers-IV_2p9nY.js";import"./emotion-react.browser.esm-Wmxd1sRj.js";import"./ellipsis-BPI18j5T.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="f074fd12-ab8f-4ee8-a564-708346d4e8bd",a._sentryDebugIdIdentifier="sentry-dbid-f074fd12-ab8f-4ee8-a564-708346d4e8bd")}catch{}})();const C=({name:a,capacity:t,type:d,url:O,variant:n="primary",isSelectable:P=!1,onSelect:c,isSelected:V=!1,isDeleted:k=!1,onDelete:B=()=>{}})=>{const{isOpen:L,close:R,toggle:A}=M(),p=K.useRef(null),E=()=>{if(!p.current)return null;const{x:G,y:N}=p.current.getBoundingClientRect();return ae(G,N)};return r("article",{css:Q(n!=="primary"),children:[P&&e(U,{css:{position:"absolute",right:20},isChecked:V,onChange:()=>c==null?void 0:c()}),e("div",{css:X(n!=="primary"),children:Y(d)}),r(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(H,{css:Z,tag:"H3",children:a}),n==="primary"&&r(z,{onClose:R,children:[e("div",{ref:p,children:!k&&e(W,{onClick:A,css:{cursor:"pointer"},width:16,height:16})}),r(J,{css:$(E()),isOpen:L,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{ee(O,a)},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:B,children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[d.toUpperCase()," 문서"]}),e(g,{tag:"body8",css:v,children:re(t??0)})]})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
| 'jpeg'
| 'png'
| 'webp'
| 'avif'
| 'gif'
/** PDF */
| 'pdf'
/** 메모장 */
| 'txt'
/** 한컴오피스 */
| 'hwp'
/** 파워포인트 */
| 'ppt'
| 'pptx'
/** 엑셀 */
| 'xls'
| 'xlsx'
/** 워드 */
| 'doc'
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const he={title:"Shared/FileGrid",component:C,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,w,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: '최주용',
    type: 'pdf'
  }
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,S,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: '김규홍',
    type: 'doc',
    capacity: 30000
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,T,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,F,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '16rem'
  }}>
        <Story />
      </div>],
  args: {
    variant: 'secondary',
    name: '이채원',
    type: 'pdf'
  }
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const we=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,we as __namedExportsOrder,he as default};
