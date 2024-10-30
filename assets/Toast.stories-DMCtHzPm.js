import{c as E,j as d,a as t,F as u}from"./emotion-react.browser.esm-DsyXDLlE.js";import{r}from"./index-BCaNsokO.js";import{r as A}from"./index-BcveHOC7.js";import{m as M,f as Z,a as z,u as P,b as l}from"./toast-D8NDKOJo.js";import{t as i}from"./theme-BXds7J9r.js";import"./iframe-BqCMgI7k.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-nETAGUMJ.js";import"./react-C8xHQbLf.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new s().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="3a657f40-a252-4890-ad2e-7375d946019a",e._sentryDebugIdIdentifier="sentry-dbid-3a657f40-a252-4890-ad2e-7375d946019a")}catch{}})();const V=e=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.00004 0.333008C3.32004 0.333008 0.333374 3.31967 0.333374 6.99967C0.333374 10.6797 3.32004 13.6663 7.00004 13.6663C10.68 13.6663 13.6667 10.6797 13.6667 6.99967C13.6667 3.31967 10.68 0.333008 7.00004 0.333008ZM7.66671 10.333H6.33337V8.99967H7.66671V10.333ZM7.66671 7.66634H6.33337V3.66634H7.66671V7.66634Z",fill:"#FE4F60"})),$=e=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M14.7 7.9998C14.7 11.6998 11.7 14.6998 8.00005 14.6998C4.30005 14.6998 1.30005 11.6998 1.30005 7.9998C1.30005 4.2998 4.30005 1.2998 8.00005 1.2998C11.7 1.2998 14.7 4.2998 14.7 7.9998Z",fill:"#4952A5"}),r.createElement("path",{d:"M12.7 5.2998L11.7 4.2998L6.70005 9.3998L4.30005 6.9998L3.30005 7.9998L6.70005 11.2998L12.7 5.2998Z",fill:"white"})),B=e=>E({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.6rem",padding:"1rem 2rem",borderRadius:"24px",color:i.colors.white,backgroundColor:"rgba(44, 48, 48, 0.8)",fontSize:i.text.body06.fontSize,lineHeight:i.text.body06.lineHeight,animation:e?`${M} 0.2s ease-in, ${Z} .2s ease-in`:`${z} .2s ease-in forwards`,"& > svg":{width:"2rem",height:"2rem"}}),_=({variant:e,children:o,showDuration:n=3e3,onClose:f,...k})=>{const[L,D]=r.useState(!0),[H,R]=r.useState(!0),T=r.useRef(),h=r.useRef(),F=()=>e==="error"?t(V,{}):e==="success"?t($,{}):null,j=()=>{h.current=setTimeout(()=>{D(!1),f==null||f(),clearTimeout(T.current)},600)};return r.useEffect(()=>(T.current=setTimeout(()=>{R(!1),j()},n),()=>clearTimeout(h.current)),[n]),L&&A.createPortal(d("div",{role:"alert","aria-live":"assertive",css:B(H),...k,children:[t("span",{children:o}),t(F,{})]}),document.getElementById("toast-container"))},N=E({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1.6rem",position:"fixed",bottom:"4rem",width:"100%",zIndex:i.zIndex.overlayTop}),m=()=>t("div",{css:N,id:"toast-container"});m.__docgenInfo={description:"",methods:[],displayName:"ToastContainer"};const p=()=>{const e=P(),{removeToast:o}=l();return t(u,{children:e.map(n=>t(_,{onClose:()=>o(n.id),variant:n.variant,children:n.message},n.id))})};p.__docgenInfo={description:"",methods:[],displayName:"ToastFactory"};const ee={title:"Common/Toast",component:_,args:{children:"토스트 컴포넌트라고 합니다 !"},argTypes:{children:{control:{type:"text"}}}},a={render:()=>{const{createToast:e}=l();return d(u,{children:[t(m,{}),t(p,{}),t("button",{onClick:()=>e("토스트 띄우기 성공!"),children:"Create Toast"})]})}},s={render:()=>{const{createToast:e}=l();return d(u,{children:[t(m,{}),t(p,{}),t("button",{onClick:()=>e("에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요","error"),children:"Create Toast"})]})}},c={render:()=>{const{createToast:e}=l();return d(u,{children:[t(m,{}),t(p,{}),t("button",{onClick:()=>e("축하드려요 ! 성공했습니다.","success"),children:"Create Toast"})]})}};var g,C,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>
      </>;
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,b,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
          Create Toast
        </button>
      </>;
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,I,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const {
      createToast
    } = useToastAction();
    return <>
        <ToastContainer />
        <ToastProvider />

        <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>
      </>;
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const te=["Default","Error","Success"];export{a as Default,s as Error,c as Success,te as __namedExportsOrder,ee as default};
