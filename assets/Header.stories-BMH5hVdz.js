import{a as t,j as a}from"./emotion-react-jsx-runtime.browser.esm-Pb5KDtxz.js";import{j as c,h as p,V as w,n as N}from"./index-BGnltjbx.js";import{w as D,x as E,y as B}from"./index-DACGP-7d.js";import"./iframe-B9iP3CXE.js";import{c as O}from"./emotion-react.browser.esm-CDzlZlSR.js";import{u as R,S as T}from"./modal-Cwr0NRas.js";import{P as s}from"./path-Dch5Stkf.js";import{a as f,e as i}from"./index-YyKeo_ZU.js";import{R as x}from"./RouteNav-SBg_YZ6R.js";import"./jsx-runtime-CrXwDwH6.js";import"./index-adx-a8a8.js";import"./_commonjsHelpers-CAzaRoFM.js";import"./index-BcbDYR9r.js";import"../sb-preview/runtime.js";import"./proxy-DTJ1_mn1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6680aafb-9079-4410-97cb-a6f7c7d37a49",e._sentryDebugIdIdentifier="sentry-dbid-6680aafb-9079-4410-97cb-a6f7c7d37a49")}catch{}})();const I=()=>t(c,{onClick:()=>{alert("현재 준비중인 기능입니다.")},size:"small",variant:"outline",css:{padding:"1.08rem"},children:t(D,{css:{cursor:"pointer"},width:14.4,height:14.4})});I.__docgenInfo={description:"",methods:[],displayName:"AlarmButton"};const P=O({display:"flex",flexDirection:"column",gap:"2rem",width:"100%",paddingBottom:"2rem",backgroundColor:p.colors.white,"& h1":{padding:"1rem",...p.heading.heading05,fontWeight:600}}),_=()=>{const e=R();return a(c,{onClick:()=>e("invite"),size:"small",variant:"outline",children:[t(E,{width:16,height:16}),"팀원 초대"]})};_.__docgenInfo={description:"",methods:[],displayName:"InviteButton"};const y=()=>{const e=f();return t(c,{onClick:()=>e(s.WORKSPACE_SETTING),size:"small",variant:"outline",css:{padding:"0.8rem"},children:t(B,{width:20,height:20})})};y.__docgenInfo={description:"",methods:[],displayName:"SettingButton"};const b=()=>{const e=f(),o=localStorage.getItem(T.TEAM_NAME),l=i(s.DASHBOARD),m=i(s.WORKSPACE_SETTING),r=i(s.INVITE_IN),d=i(s.ONBOARDING),S=!l&&!m&&!r&&!d,v=!r&&!d,A=!m&&!d&&!r;return a("header",{css:P,children:[a(w,{styles:{justify:"space-between"},children:[v&&t(N,{tag:"H1",css:{cursor:"pointer"},onClick:()=>{e(s.DASHBOARD)},children:`${o} 워크스페이스`}),A&&a("div",{css:{display:"flex",gap:"1.2rem",alignItems:"center"},children:[t(_,{}),t(I,{}),t(y,{})]})]}),S&&t(x,{})]})};b.__docgenInfo={description:"",methods:[],displayName:"Header"};const L={title:"Shared/Header",component:b,parameters:{layout:"centered"},decorators:[e=>t("div",{css:{width:"50vw"},children:t(e,{})})]},n={};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const Q=["Delete"];export{n as Delete,Q as __namedExportsOrder,L as default};
