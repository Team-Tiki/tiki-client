import{j as o,a as t}from"./emotion-react.browser.esm-wUAeKvmP.js";import{r as l}from"./index-D7GCynX7.js";import{S as h}from"./ic_three_dots-Cnf2vXRq.js";import{F as u}from"./Flex-Dew0PQgY.js";import{H as y}from"./Heading-CLXrtBNJ.js";import{M as w,a as b,b as n}from"./MenuList-CylJrmE6.js";import"./iframe-DOKPR1Ce.js";import{u as I}from"./useOverlay-DoqLK-21.js";import{t as S}from"./theme-HjE1SXRY.js";import{c as D,i as v,n as x,a as i,O as c}from"./index.style-C4juvR2S.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-BKccCKrn.js";import"./useOutsideClick-Dbl7Ma41.js";import"../sb-preview/runtime.js";import"./ic_trash-BM9NA72d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d155fa79-7e11-482b-baec-b13071262241",e._sentryDebugIdIdentifier="sentry-dbid-d155fa79-7e11-482b-baec-b13071262241")}catch{}})();const H=e=>l.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.2835 9.99984L18.6168 13.3332H33.3335V29.9998H6.66683V9.99984H15.2835ZM16.6668 6.6665H6.66683C4.8335 6.6665 3.35016 8.1665 3.35016 9.99984L3.3335 29.9998C3.3335 31.8332 4.8335 33.3332 6.66683 33.3332H33.3335C35.1668 33.3332 36.6668 31.8332 36.6668 29.9998V13.3332C36.6668 11.4998 35.1668 9.99984 33.3335 9.99984H20.0002L16.6668 6.6665Z",fill:"#D6D5D5"})),f=({title:e})=>{const{isOpen:r,close:a,toggle:g}=I();return o("article",{css:D,children:[t("div",{css:v,children:t(H,{width:40,height:40})}),o(u,{styles:{width:"100%",justify:"space-between",align:"center"},children:[t(y,{css:x,tag:"H3",children:e}),o(w,{onClose:a,children:[t(h,{onClick:g,css:{cursor:"pointer"},width:16,height:16}),o(b,{css:{top:"calc(100% + 0.4rem)",right:0,backgroundColor:S.colors.white},isOpen:r,children:[t(n,{css:i,LeftIcon:c.name,onSelect:()=>console.log("select"),children:"이름 변경"}),t(n,{css:i,LeftIcon:c.download,onSelect:()=>console.log("select"),children:"폴더 전체 다운로드"}),t(n,{css:i,LeftIcon:c.deleted,onSelect:()=>console.log("select"),children:"휴지통으로 이동"})]})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"FolderGrid",props:{title:{required:!0,tsType:{name:"string"},description:""}}};const B={title:"Shared/FolderGrid",component:f,parameters:{layout:"centered"},decorators:[e=>t("div",{css:{width:"20rem"},children:t(e,{})})]},s={args:{title:"폴더 이름"}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '폴더 이름'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,B as default};
