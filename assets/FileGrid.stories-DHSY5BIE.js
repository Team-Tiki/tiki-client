import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-Dt62E_6i.js";import{k as N}from"./index-Cux8MSo6.js";import{r as R,V as m,Q as W,P as B,M,D as u,e as g}from"./index-BOiIKdGT.js";import{r as Q}from"./index-BZ0KkNE7.js";import"./index-D11sNaUR.js";import{u as A}from"./useOverlay-BPevn99V.js";import{c as z,i as J,g as K,n as U,o as X,a as f,O as y,t as h}from"./index.style-Bs402-Oy.js";import{g as Y}from"./file-BklKN3ry.js";import"./iframe-BsAP7Sas.js";import"./jsx-runtime-C7EeXdgQ.js";import"./_commonjsHelpers-UA9SOZMg.js";import"./emotion-react.browser.esm-kzqLeEsL.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new a.Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="4ea89b98-bff3-49f9-96b9-e3fcf21a203b",a._sentryDebugIdIdentifier="sentry-dbid-4ea89b98-bff3-49f9-96b9-e3fcf21a203b")}catch{}})();const O=({name:a,capacity:n,type:c,variant:t="primary",isSelectable:q=!1,onSelect:d,isSelected:C=!1,isDeleted:V=!1})=>{const{isOpen:k,close:E,toggle:L}=A(),p=Q.useRef(null),G=()=>{if(!p.current)return!1;const{y:H}=p.current.getBoundingClientRect();return H+118+20<document.documentElement.clientHeight-48};return r("article",{css:z(t!=="primary"),children:[q&&e(R,{css:{position:"absolute",right:20},isChecked:C,onChange:()=>d==null?void 0:d()}),e("div",{css:J(t!=="primary"),children:K(c)}),r(m,{styles:{direction:"column",gap:t==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(W,{css:U,tag:"H3",children:a}),t==="primary"&&r(B,{onClose:E,children:[e("div",{ref:p,children:!V&&e(N,{onClick:L,css:{cursor:"pointer"},width:16,height:16})}),r(M,{css:X(G()),isOpen:k,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:h,children:[c," 문서"]}),e(g,{tag:"body8",css:h,children:Y(n??0)})]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe={title:"Shared/FileGrid",component:O,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var v,b,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,P,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(P=l.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const me=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,me as __namedExportsOrder,pe as default};
