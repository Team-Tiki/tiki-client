import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-CgcFQ3o_.js";import{k as N}from"./index-D8QZEenf.js";import{r as W,K as m,a as B,P as K,R as A,T as u,H as g}from"./index-BW1yReUk.js";import{r as z}from"./index-BOoXDiuC.js";import"./index-DNuBmFMy.js";import{u as J}from"./useOverlay-dXptjzbe.js";import{c as M,i as Q,g as U,n as X,o as Y,a as f,O as y,t as v}from"./index.style-qWO97Cu0.js";import{g as Z}from"./file-CcaPlHF_.js";import"./iframe-e0bPEceg.js";import"./jsx-runtime-Cm40G9zW.js";import"./_commonjsHelpers-BBMxPn9X.js";import"./emotion-react.browser.esm-DbX7ei1Q.js";import"./ellipsis-Biwpqhtf.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="6bc53559-4b0f-4e56-91a9-aa08ecab3c95",a._sentryDebugIdIdentifier="sentry-dbid-6bc53559-4b0f-4e56-91a9-aa08ecab3c95")}catch{}})();const F=({name:a,capacity:t,type:c,variant:n="primary",isSelectable:O=!1,onSelect:d,isSelected:C=!1,isDeleted:V=!1,onDelete:k=()=>{}})=>{const{isOpen:R,close:E,toggle:L}=J(),p=z.useRef(null),G=()=>{if(!p.current)return!1;const{y:H}=p.current.getBoundingClientRect();return H+118+20<document.documentElement.clientHeight-48};return r("article",{css:M(n!=="primary"),children:[O&&e(W,{css:{position:"absolute",right:20},isChecked:C,onChange:()=>d==null?void 0:d()}),e("div",{css:Q(n!=="primary"),children:U(c)}),r(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(B,{css:X,tag:"H3",children:a}),n==="primary"&&r(K,{onClose:E,children:[e("div",{ref:p,children:!V&&e(N,{onClick:L,css:{cursor:"pointer"},width:16,height:16})}),r(A,{css:Y(G()),isOpen:R,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:k,children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[c," 문서"]}),e(g,{tag:"body8",css:v,children:Z(t??0)})]})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ue={title:"Shared/FileGrid",component:F,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: '최주용',
    type: 'pdf'
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,S,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const fe=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,fe as __namedExportsOrder,ue as default};
