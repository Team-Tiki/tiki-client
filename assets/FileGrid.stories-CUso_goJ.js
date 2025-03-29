import{a as e,j as r}from"./emotion-react-jsx-runtime.browser.esm-CY61AT2E.js";import{k as U}from"./index-B-uMTWfr.js";import{p as H,U as u,s as z,F as J,A as K,B as m,_ as g}from"./index-BdE8FnB9.js";import{r as M}from"./index-BZvicEje.js";import"./index-Ck1ywXMk.js";import{u as Q}from"./useOverlay-DQv7o_sF.js";import{c as X,i as Y,g as Z,n as $,o as ee,a as f,O as y,t as v}from"./index.style-psWfstWn.js";import{d as ae,c as re}from"./document-BsddjlCI.js";import{g as te}from"./file-vCwqR_7w.js";import"./iframe-B1NdTp6G.js";import"./jsx-runtime-BvLSW-Re.js";import"./_commonjsHelpers-DZFi-TQc.js";import"./emotion-react.browser.esm-DXKH1UQ1.js";import"./ellipsis-DFJCltGH.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="a16b30c3-acfb-40af-bbe7-0c4a0ba7e226",a._sentryDebugIdIdentifier="sentry-dbid-a16b30c3-acfb-40af-bbe7-0c4a0ba7e226")}catch{}})();const q=({name:a,capacity:t,type:c,url:k,variant:n="primary",isSelectable:O=!1,onSelect:d,isSelected:V=!1,isDeleted:P=!1,onDelete:B=()=>{},onClick:L=()=>{}})=>{const{isOpen:R,close:A,toggle:E}=Q(),p=M.useRef(null),G=()=>{if(!p.current)return null;const{x:N,y:W}=p.current.getBoundingClientRect();return re(N,W)};return e("article",{css:X(n!=="primary"),children:r("button",{type:"button",css:{width:"100%",backgroundColor:"transparent"},onClick:L,children:[O&&e(H,{css:{position:"absolute",right:20},isChecked:V,onChange:()=>d==null?void 0:d()}),e("div",{css:Y(n!=="primary"),children:Z(c)}),r(u,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(u,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(z,{css:$,tag:"H3",children:a}),n==="primary"&&r(J,{onClose:A,children:[e("div",{ref:p,children:!P&&e(U,{onClick:E,css:{cursor:"pointer"},width:16,height:16})}),r(K,{css:ee(G()),isOpen:R,children:[e(m,{css:f,LeftIcon:y.download,onSelect:()=>{ae(k,a)},children:"파일 다운로드"}),e(m,{css:f,LeftIcon:y.deleted,onSelect:B,children:"휴지통으로 이동"}),e(m,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(u,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[c.toUpperCase()," 문서"]}),e(g,{tag:"body8",css:v,children:te(t??0)})]})]})]})})};q.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const be={title:"Shared/FileGrid",component:q,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,T,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,C,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const we=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,we as __namedExportsOrder,be as default};
