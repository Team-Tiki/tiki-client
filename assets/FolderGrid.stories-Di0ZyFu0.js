import{j as s,a as r}from"./emotion-react-jsx-runtime.browser.esm-CSiOhW6i.js";import{n as b,g as S}from"./index-CLsVEhIN.js";import{V as I,B as v,a as _,b as D,h as O,P as n}from"./index-CvOiDExs.js";import"./index-BUjKFtp4.js";import"./index-BugzcMrQ.js";import{u as x}from"./useOverlay-Czms_O-T.js";import"./toast-CALGSB-b.js";import{c as T,i as j,n as C,a as i,O as c}from"./index.style-BWFgxxia.js";import"./iframe-DyHOD6cA.js";import"./jsx-runtime-Dh0KApn4.js";import"./_commonjsHelpers-BphuXKqK.js";import"./emotion-react.browser.esm-DWx2VAb9.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="782e15d4-ea17-4651-aa94-868be61b58dc",e._sentryDebugIdIdentifier="sentry-dbid-782e15d4-ea17-4651-aa94-868be61b58dc")}catch{}})();const h=({title:e,variant:t="primary"})=>{const{isOpen:d,close:g,toggle:w}=x();return s("article",{css:T(t!=="primary"),children:[r("div",{css:j(t!=="primary"),children:r(b,{width:40,height:40})}),s(I,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(v,{css:C,tag:"H3",children:e}),t==="primary"&&s(_,{onClose:g,children:[r(S,{onClick:w,css:{cursor:"pointer"},width:16,height:16}),s(D,{css:{top:"calc(100% + 0.4rem)",right:0,backgroundColor:O.colors.white},isOpen:d,children:[r(n,{css:i,LeftIcon:c.name,onSelect:()=>console.log("select"),children:"이름 변경"}),r(n,{css:i,LeftIcon:c.download,onSelect:()=>console.log("select"),children:"폴더 전체 다운로드"}),r(n,{css:i,LeftIcon:c.deleted,onSelect:()=>console.log("select"),children:"휴지통으로 이동"})]})]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"FolderGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""}}};const A={title:"Shared/FolderGrid",component:h,parameters:{layout:"centered"},decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})]},o={args:{title:"폴더 이름"}},a={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"폴더 이름"}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '폴더 이름'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,y,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '16rem'
  }}>
        <Story />
      </div>],
  args: {
    variant: 'secondary',
    title: '폴더 이름'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const J=["Default","Secondary"];export{o as Default,a as Secondary,J as __namedExportsOrder,A as default};
