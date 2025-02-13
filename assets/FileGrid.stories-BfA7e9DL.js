import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-B8H8OE5q.js";import{k as A}from"./index-B-uMTWfr.js";import{d as H,V as m,i as z,I as J,W as K,L as u,f as g}from"./index-B3mj46ur.js";import{r as M}from"./index-CT12xj68.js";import"./index-kEXRF5PY.js";import{u as Q}from"./useOverlay-kftfPjBO.js";import{c as U,i as X,g as Y,n as Z,o as $,a as f,O as y,t as v}from"./index.style-AK0OaQuX.js";import{d as ee,c as ae}from"./document-_2dcsmni.js";import{g as re}from"./file-BaDLemkC.js";import"./iframe-Cljow89B.js";import"./jsx-runtime-JVV37XSY.js";import"./_commonjsHelpers-DMeIt8Ii.js";import"./emotion-react.browser.esm-EBEO9wtQ.js";import"./ellipsis-DobkdOt_.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="5381c6ac-454c-466f-a468-647fd1c3d3cf",a._sentryDebugIdIdentifier="sentry-dbid-5381c6ac-454c-466f-a468-647fd1c3d3cf")}catch{}})();const L=({name:a,capacity:t,type:c,url:O,variant:n="primary",isSelectable:V=!1,onSelect:d,isSelected:C=!1,isDeleted:P=!1,onDelete:k=()=>{}})=>{const{isOpen:W,close:R,toggle:E}=Q(),p=M.useRef(null),G=()=>{if(!p.current)return null;const{x:N,y:B}=p.current.getBoundingClientRect();return ae(N,B)};return r("article",{css:U(n!=="primary"),children:[V&&e(H,{css:{position:"absolute",right:20},isChecked:C,onChange:()=>d==null?void 0:d()}),e("div",{css:X(n!=="primary"),children:Y(c)}),r(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(z,{css:Z,tag:"H3",children:a}),n==="primary"&&r(J,{onClose:R,children:[e("div",{ref:p,children:!P&&e(A,{onClick:E,css:{cursor:"pointer"},width:16,height:16})}),r(K,{css:$(G()),isOpen:W,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{ee(O,a)},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:k,children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[c," 문서"]}),e(g,{tag:"body8",css:v,children:re(t??0)})]})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const he={title:"Shared/FileGrid",component:L,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,w,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: '최주용',
    type: 'pdf'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,I,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: '김규홍',
    type: 'doc',
    capacity: 30000
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,T,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,q,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const we=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,we as __namedExportsOrder,he as default};
