import{j as s,a as r}from"./emotion-react-jsx-runtime.browser.esm-D9HjKUvM.js";import{l as w,e as S}from"./index-KOc712aO.js";import{V as I,Q as v,P as _,M as D,f as O,D as n}from"./index-DRthnO0v.js";import"./index-DonIaHad.js";import"./index-VBJtw-IM.js";import{u as x}from"./useOverlay-CZE8mo5W.js";import{c as T,i as j,n as C,a as i,O as c}from"./index.style-BKShKQdY.js";import"./iframe-CtZ68_yn.js";import"./jsx-runtime-D8Qs_Gkj.js";import"./_commonjsHelpers-C-ATdzwy.js";import"./emotion-react.browser.esm-dFb4ZaQb.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9016bab9-c621-4f53-b470-10baf55eaf9b",e._sentryDebugIdIdentifier="sentry-dbid-9016bab9-c621-4f53-b470-10baf55eaf9b")}catch{}})();const h=({title:e,variant:t="primary"})=>{const{isOpen:d,close:g,toggle:b}=x();return s("article",{css:T(t!=="primary"),children:[r("div",{css:j(t!=="primary"),children:r(w,{width:40,height:40})}),s(I,{styles:{width:"100%",justify:"space-between",align:"center"},children:[r(v,{css:C,tag:"H3",children:e}),t==="primary"&&s(_,{onClose:g,children:[r(S,{onClick:b,css:{cursor:"pointer"},width:16,height:16}),s(D,{css:{top:"calc(100% + 0.4rem)",right:0,backgroundColor:O.colors.white},isOpen:d,children:[r(n,{css:i,LeftIcon:c.name,onSelect:()=>console.log("select"),children:"이름 변경"}),r(n,{css:i,LeftIcon:c.download,onSelect:()=>console.log("select"),children:"폴더 전체 다운로드"}),r(n,{css:i,LeftIcon:c.deleted,onSelect:()=>console.log("select"),children:"휴지통으로 이동"})]})]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"FolderGrid",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""}}};const W={title:"Shared/FolderGrid",component:h,parameters:{layout:"centered"},decorators:[e=>r("div",{css:{width:"20rem"},children:r(e,{})})]},o={args:{title:"폴더 이름"}},a={decorators:[e=>r("div",{css:{width:"16rem"},children:r(e,{})})],args:{variant:"secondary",title:"폴더 이름"}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '폴더 이름'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '16rem'
  }}>
        <Story />
      </div>],
  args: {
    variant: 'secondary',
    title: '폴더 이름'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["Default","Secondary"];export{o as Default,a as Secondary,z as __namedExportsOrder,W as default};
