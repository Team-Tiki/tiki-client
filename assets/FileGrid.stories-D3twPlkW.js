import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-DcwrIcx9.js";import{k as N}from"./index-DrwiF3X0.js";import{o as R,V as m,G as W,D as B,a as A,C as u,g}from"./index-D66-Zmap.js";import{r as M}from"./index-BnzvyeZr.js";import"./index-1PJj4saT.js";import{u as z}from"./useOverlay-CFlOUx7v.js";import{c as J,i as K,g as Q,n as U,o as X,a as f,O as y,t as h}from"./index.style-7l8DLZSd.js";import{g as Y}from"./file-BGK0KqxL.js";import"./iframe-D_cIFqUu.js";import"./jsx-runtime-fFF4Ar6N.js";import"./_commonjsHelpers-CHhxJATD.js";import"./emotion-react.browser.esm-D0dXN3nh.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new a.Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="1491da98-f3e1-44a8-9301-cfa4e40c5a34",a._sentryDebugIdIdentifier="sentry-dbid-1491da98-f3e1-44a8-9301-cfa4e40c5a34")}catch{}})();const O=({name:a,capacity:n,type:c,variant:t="primary",isSelectable:q=!1,onSelect:d,isSelected:P=!1,isDeleted:V=!1})=>{const{isOpen:k,close:G,toggle:E}=z(),p=M.useRef(null),L=()=>{if(!p.current)return!1;const{y:H}=p.current.getBoundingClientRect();return H+118+20<document.documentElement.clientHeight-48};return r("article",{css:J(t!=="primary"),children:[q&&e(R,{css:{position:"absolute",right:20},isChecked:P,onChange:()=>d==null?void 0:d()}),e("div",{css:K(t!=="primary"),children:Q(c)}),r(m,{styles:{direction:"column",gap:t==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(W,{css:U,tag:"H3",children:a}),t==="primary"&&r(B,{onClose:G,children:[e("div",{ref:p,children:!V&&e(N,{onClick:E,css:{cursor:"pointer"},width:16,height:16})}),r(A,{css:X(L()),isOpen:k,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:h,children:[c," 문서"]}),e(g,{tag:"body8",css:h,children:Y(n??0)})]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe={title:"Shared/FileGrid",component:O,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var v,w,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: '최주용',
    type: 'pdf'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,S,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const me=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,me as __namedExportsOrder,pe as default};
