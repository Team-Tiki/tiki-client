import{c as n,j as d,a as t}from"./emotion-react.browser.esm-BRzKXMUZ.js";import{r as p}from"./index-gS_KGLAO.js";import{t as o}from"./theme-6ytsWurD.js";import"./iframe-BkTCJort.js";import{L as m}from"./Label-Cjv8tabf.js";import{S as u}from"./SupportingText-COIzKtt_.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="41254fe9-4b16-4896-8034-965854f50507",e._sentryDebugIdIdentifier="sentry-dbid-41254fe9-4b16-4896-8034-965854f50507")}catch{}})();const y=n({display:"flex",flexDirection:"column",gap:"0.2rem",width:"100%","&>label":{margin:"0 0 1rem"}}),b=n({width:"100%",border:"none",backgroundColor:"transparent",fontWeight:400,...o.text.body06,outline:"none","::placeholder":{color:o.colors.gray_500,...o.text.body06}}),g=e=>n({display:"flex",alignItems:"center",gap:"1rem",position:"relative",height:"4rem",padding:"1.3rem 1.2rem",backgroundColor:e?o.colors.gray_100:"none",boxShadow:o.shadow.inset,borderRadius:"8px","&:focus-within":{boxShadow:o.shadow.inset_focus}}),h=({label:e,isFilled:r=!1,LeftIcon:s,isError:a=!1,isSuccess:c=!1,supportingText:i,...l},f)=>d("div",{css:y,children:[e&&t(m,{id:e,children:e}),d("div",{css:g(r),children:[s,t("input",{ref:f,css:b,...l})]}),i&&t(u,{isError:a,isNotice:c,children:i})]}),v=p.forwardRef(h);export{v as I};
