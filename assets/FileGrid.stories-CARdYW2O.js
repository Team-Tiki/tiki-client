import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-DfxRvEnB.js";import{k as W}from"./index-p0PITYme.js";import{l as B,V as m,n as A,a as z,_ as J,I as u,H as g}from"./index-q9ko1EUm.js";import{r as K}from"./index-CWTOcU_k.js";import"./index-DjTZSbhz.js";import{u as M}from"./useOverlay-9VC2iUt9.js";import{c as Q,i as U,g as X,n as Y,o as Z,a as f,O as y,t as v}from"./index.style-CCIXm3o2.js";import{d as $}from"./document-Cz9jwH_N.js";import{g as ee}from"./file-DtKMvZlm.js";import"./iframe-DBppwReq.js";import"./jsx-runtime-Ckmwp7YI.js";import"./_commonjsHelpers-B_rmwL-P.js";import"./emotion-react.browser.esm-hhMG8PdF.js";import"./ellipsis-BQrjDjBe.js";import"../sb-preview/runtime.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="fea59fa7-d8f1-48b9-bc8b-fa36d7c51427",a._sentryDebugIdIdentifier="sentry-dbid-fea59fa7-d8f1-48b9-bc8b-fa36d7c51427")}catch{}})();const O=({name:a,capacity:t,type:d,url:V,variant:n="primary",isSelectable:C=!1,onSelect:c,isSelected:P=!1,isDeleted:k=!1,onDelete:E=()=>{}})=>{const{isOpen:L,close:R,toggle:G}=M(),p=K.useRef(null),H=()=>{if(!p.current)return!1;const{y:N}=p.current.getBoundingClientRect();return N+118+20<document.documentElement.clientHeight-48};return r("article",{css:Q(n!=="primary"),children:[C&&e(B,{css:{position:"absolute",right:20},isChecked:P,onChange:()=>c==null?void 0:c()}),e("div",{css:U(n!=="primary"),children:X(d)}),r(m,{styles:{direction:"column",gap:n==="primary"?"1.2rem":"0.8rem"},children:[r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(A,{css:Y,tag:"H3",children:a}),n==="primary"&&r(z,{onClose:R,children:[e("div",{ref:p,children:!k&&e(W,{onClick:G,css:{cursor:"pointer"},width:16,height:16})}),r(J,{css:Z(H()),isOpen:L,children:[e(u,{css:f,LeftIcon:y.download,onSelect:()=>{$(V,a)},children:"파일 다운로드"}),e(u,{css:f,LeftIcon:y.deleted,onSelect:E,children:"휴지통으로 이동"}),e(u,{css:f,LeftIcon:y.handover,onSelect:()=>{alert("준비 중인 기능입니다.")},children:"인수인계 노트 보기"})]})]})]}),r(m,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(g,{tag:"body8",css:v,children:[d," 문서"]}),e(g,{tag:"body8",css:v,children:ee(t??0)})]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"FileGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:`| 'jpg'
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
| 'docx'`,elements:[{name:"literal",value:"'jpg'"},{name:"literal",value:"'jpeg'"},{name:"literal",value:"'png'"},{name:"literal",value:"'webp'"},{name:"literal",value:"'avif'"},{name:"literal",value:"'gif'"},{name:"literal",value:"'pdf'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'hwp'"},{name:"literal",value:"'ppt'"},{name:"literal",value:"'pptx'"},{name:"literal",value:"'xls'"},{name:"literal",value:"'xlsx'"},{name:"literal",value:"'doc'"},{name:"literal",value:"'docx'"}]},description:"API 명세에 따라 달라질 수 있음 + 추후 삭제"},isSelectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},isDeleted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge={title:"Shared/FileGrid",component:O,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{css:{width:"20rem"},children:e(a,{})})],args:{capacity:2e3}},s={args:{name:"최주용",type:"pdf"}},o={args:{name:"김규홍",type:"doc",capacity:3e4}},i={args:{name:"이채원",type:"pdf"}},l={decorators:[a=>e("div",{css:{width:"16rem"},children:e(a,{})})],args:{variant:"secondary",name:"이채원",type:"pdf"}};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: '최주용',
    type: 'pdf'
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,I,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: '김규홍',
    type: 'doc',
    capacity: 30000
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,_,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: '이채원',
    type: 'pdf'
  }
}`,...(T=(_=i.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var j,q,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ve=["PDF","Word","Image","Secondary"];export{i as Image,s as PDF,l as Secondary,o as Word,ve as __namedExportsOrder,ge as default};
