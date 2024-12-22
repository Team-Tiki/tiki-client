import{j as a,a as e}from"./emotion-react-jsx-runtime.browser.esm-qTqNjzW1.js";import{k as H}from"./index-Cux8MSo6.js";import{r as N,V as m,Q as R,P as W,M as B,D as u,d as g}from"./index-BrRoXPrZ.js";import{r as M}from"./index-Cgg4I6sN.js";import"./index-N4SbRJ0J.js";import{u as Q}from"./useOverlay-D93tRXaH.js";import{c as z,i as A,g as J,n as K,o as U,a as f,O as y,t as h}from"./index.style-D0RBofbR.js";import{g as X}from"./file-B3y2T0jv.js";import"./iframe-DOMl-MD0.js";import"./jsx-runtime-mLlc1at_.js";import"./_commonjsHelpers-BAn6OLmv.js";import"./emotion-react.browser.esm-CQhUtbq3.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new r.Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="eac81d54-afd5-4604-828e-21f4c8eff5b4",r._sentryDebugIdIdentifier="sentry-dbid-eac81d54-afd5-4604-828e-21f4c8eff5b4")}catch{}})();const P=({name:r,capacity:t,type:d,variant:n="primary",isSelectable:C=!1,onSelect:c,isSelected:k=!1})=>{const{isOpen:q,close:V,toggle:E}=Q(),p=M.useRef(null),L=()=>{if(!p.current)return!1;const{y:G}=p.current.getBoundingClientRect();return G+118+20<document.documentElement.clientHeight-48};return a("article",{css:z(n!=="primary"),children:[C&&e(N,{css:{position:"absolute",right:20},isChecked:k,onChange:()=>c==null?void 0:c()}),e("div",{css:A(n!=="primary"),children:J(d)}),a(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[a(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(R,{css:K,tag:"H3",children:r}),n==="primary"&&a(W,{onClose:V,children:[e("div",{ref:p,children:e(H,{onClick:E,css:{cursor:"pointer"},width:16,height:16})}),a(B,{css:U(L()),isOpen:q,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:()=>{},children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{},children:"인수인계 노트 보기"})]})]})]}),a(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[a(g,{tag:"body8",css:h,children:[d," 문서"]}),e(g,{tag:"body8",css:h,children:X(t??0)})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ce={title:"Shared/FileGrid",component:P,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e("div",{css:{width:"20rem"},children:e(r,{})})],args:{volume:2e3}},s={args:{title:"최주용",type:"pdf"}},o={args:{title:"김규홍",type:"word",volume:3e4}},i={args:{title:"이채원",type:"pdf"}},l={decorators:[r=>e("div",{css:{width:"16rem"},children:e(r,{})})],args:{variant:"secondary",title:"이채원",type:"pdf"}};var v,w,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '최주용',
    type: 'pdf'
  }
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,S,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '김규홍',
    type: 'word',
    volume: 30000
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,_,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: '이채원',
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
    title: '이채원',
    type: 'pdf'
  }
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const pe=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,pe as __namedExportsOrder,ce as default};
