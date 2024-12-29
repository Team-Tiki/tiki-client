import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-CIRz_uE2.js";import{k as H}from"./index-Cux8MSo6.js";import{r as N,V as m,Q as R,P as W,M as B,D as u,e as g}from"./index-0OOyc6fp.js";import{r as M}from"./index-B3qrjDzu.js";import"./index-Ca2tAXuG.js";import{u as Q}from"./useOverlay-C18jY4iI.js";import{c as z,i as A,g as J,n as K,o as U,a as y,O as f,t as h}from"./index.style-Bqbv_0R-.js";import{g as X}from"./file-CFXbuCIT.js";import"./iframe-CUgoWZiK.js";import"./jsx-runtime-DSBraSX8.js";import"./_commonjsHelpers-C9pgfhHq.js";import"./emotion-react.browser.esm-fcstawZR.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new a.Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="50251378-d894-4a94-a8d1-4bcad44b2fa9",a._sentryDebugIdIdentifier="sentry-dbid-50251378-d894-4a94-a8d1-4bcad44b2fa9")}catch{}})();const P=({name:a,capacity:n,type:c,variant:t="primary",isSelectable:C=!1,onSelect:d,isSelected:k=!1})=>{const{isOpen:q,close:V,toggle:E}=Q(),p=M.useRef(null),L=()=>{if(!p.current)return!1;const{y:G}=p.current.getBoundingClientRect();return G+118+20<document.documentElement.clientHeight-48};return r("article",{css:z(t!=="primary"),children:[C&&e(N,{css:{position:"absolute",right:20},isChecked:k,onChange:()=>d==null?void 0:d()}),e("div",{css:A(t!=="primary"),children:J(c)}),r(m,{styles:{direction:"column",gap:t==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(R,{css:K,tag:"H3",children:a}),t==="primary"&&r(W,{onClose:V,children:[e("div",{ref:p,children:e(H,{onClick:E,css:{cursor:"pointer"},width:16,height:16})}),r(B,{css:U(L()),isOpen:q,children:[e(u,{css:y,LeftIcon:f.download,onSelect:()=>{},children:"파일 다운로드"}),e(u,{css:y,LeftIcon:f.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),e(u,{css:y,LeftIcon:f.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:h,children:[c," 문서"]}),e(g,{tag:"body8",css:h,children:X(n??0)})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const de={title:"Shared/FileGrid",component:P,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var v,w,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,_,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var T,F,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const pe=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,pe as __namedExportsOrder,de as default};
