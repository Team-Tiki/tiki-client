import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-CRirncI8.js";import{k as B}from"./index-8lDjhXpy.js";import{r as H,K as m,a as K,P as A,R as z,T as u,W as g}from"./index-C5kDx6sH.js";import{r as J}from"./index-ZxPCVBDZ.js";import"./index-CNPQ3o0o.js";import{u as M}from"./useOverlay-C1VdcwB4.js";import{c as Q,i as U,g as X,n as Y,o as Z,a as f,O as y,t as v}from"./index.style-BFle-htP.js";import{d as $}from"./document-ymlnLxED.js";import{g as ee}from"./file-CIwRWXuF.js";import"./iframe-Bm9owOro.js";import"./jsx-runtime-BT-kpMem.js";import"./_commonjsHelpers-Co-uX5Gq.js";import"./emotion-react.browser.esm-DKPWFE6-.js";import"./ellipsis-B-GG5lTb.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="0b4507aa-a2ef-4c68-ab8f-25211f74c179",a._sentryDebugIdIdentifier="sentry-dbid-0b4507aa-a2ef-4c68-ab8f-25211f74c179")}catch{}})();const F=({name:a,capacity:t,type:c,url:O,variant:n="primary",isSelectable:C=!1,onSelect:d,isSelected:V=!1,isDeleted:k=!1,onDelete:R=()=>{}})=>{const{isOpen:E,close:L,toggle:W}=M(),p=J.useRef(null),G=()=>{if(!p.current)return!1;const{y:N}=p.current.getBoundingClientRect();return N+118+20<document.documentElement.clientHeight-48};return r("article",{css:Q(n!=="primary"),children:[C&&e(H,{css:{position:"absolute",right:20},isChecked:V,onChange:()=>d==null?void 0:d()}),e("div",{css:U(n!=="primary"),children:X(c)}),r(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(K,{css:Y,tag:"H3",children:a}),n==="primary"&&r(A,{onClose:L,children:[e("div",{ref:p,children:!k&&e(B,{onClick:W,css:{cursor:"pointer"},width:16,height:16})}),r(z,{css:Z(G()),isOpen:E,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{$(O,a)},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:R,children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[c," 문서"]}),e(g,{tag:"body8",css:v,children:ee(t??0)})]})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge={title:"Shared/FileGrid",component:F,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,w,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,D,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,P,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const ve=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,ve as __namedExportsOrder,ge as default};
