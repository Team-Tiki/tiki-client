import{j as t,a as e}from"./emotion-react-jsx-runtime.browser.esm-qTqNjzW1.js";import{l as S,k as T}from"./index-Cux8MSo6.js";import{r as _,V as D,Q as q,P as O,M as C,f as k,D as i}from"./index-BrRoXPrZ.js";import"./index-Cgg4I6sN.js";import"./index-N4SbRJ0J.js";import{u as x}from"./useOverlay-D93tRXaH.js";import{c as j,i as F,n as L,a as c,O as d}from"./index.style-D0RBofbR.js";import"./iframe-DOMl-MD0.js";import"./jsx-runtime-mLlc1at_.js";import"./_commonjsHelpers-BAn6OLmv.js";import"./emotion-react.browser.esm-CQhUtbq3.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new r.Error().stack;s&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[s]="dbe5fa6c-54e3-4889-b60a-aa69818c6ce6",r._sentryDebugIdIdentifier="sentry-dbid-dbe5fa6c-54e3-4889-b60a-aa69818c6ce6")}catch{}})();const h=({name:r,variant:s="primary",isSelectable:l,isSelected:b=!1,onSelect:n})=>{const{isOpen:w,close:v,toggle:I}=x();return t("article",{css:j(s!=="primary"),children:[l&&e(_,{css:{position:"absolute",right:20},isChecked:b,onChange:()=>n==null?void 0:n()}),e("div",{css:F(s!=="primary"),children:e(S,{width:40,height:40})}),t(D,{styles:{width:"100%",justify:"space-between",align:"center"},children:[e(q,{css:L,tag:"H3",children:r}),s==="primary"&&t(O,{onClose:v,children:[e(T,{onClick:I,css:{cursor:"pointer"},width:16,height:16}),t(C,{css:{top:"calc(100% + 0.4rem)",right:0,backgroundColor:k.colors.white},isOpen:w,children:[e(i,{css:c,LeftIcon:d.name,onSelect:()=>console.log("select"),children:"이름 변경"}),e(i,{css:c,LeftIcon:d.download,onSelect:()=>console.log("select"),children:"폴더 전체 다운로드"}),e(i,{css:c,LeftIcon:d.deleted,onSelect:()=>console.log("select"),children:"휴지통으로 이동"})]})]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"FolderGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},path:{required:!0,tsType:{name:"string"},description:""},createdTime:{required:!0,tsType:{name:"string"},description:""},isSelectable:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"Shared/FolderGrid",component:h,parameters:{layout:"centered"},decorators:[r=>e("div",{css:{width:"20rem"},children:e(r,{})})]},a={args:{title:"폴더 이름"}},o={decorators:[r=>e("div",{css:{width:"16rem"},children:e(r,{})})],args:{variant:"secondary",title:"폴더 이름"}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: '폴더 이름'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '16rem'
  }}>
        <Story />
      </div>],
  args: {
    variant: 'secondary',
    title: '폴더 이름'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const K=["Default","Secondary"];export{a as Default,o as Secondary,K as __namedExportsOrder,J as default};
