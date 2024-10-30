import{c as f,j as g,a as t,F as H}from"./emotion-react.browser.esm-BxooFqIY.js";import{r as o}from"./index-D5Y6yO2w.js";import{r as fe}from"./index-CymlF_GE.js";import{f as ye,r as Ce,b as we}from"./toast-Dk8XIbhK.js";import{t as h}from"./theme-DHso3wnW.js";import"./iframe-DIYkR_Hp.js";import{B}from"./Button-pe7HfOTl.js";import{F as b}from"./Flex-CwmRgT2Z.js";import{I as A}from"./Input-B_UAv6Ln.js";import{T as _}from"./Text-XVkCRc1j.js";import{S as De}from"./SupportingText-C0ixhRJH.js";import{H as X}from"./Heading-liSrztGc.js";import{c as W,u as be,Q as ke,e as ve,f as Se,g as Ee,h as Z,i as $,j as xe,D as Me,k as Te,l as ee,s as Ie,m as Le,a as Ve,d as _e,b as Be,W as He}from"./WorkSpaceName-CzCf94hr.js";import{e as Ne}from"./file-DIcI8yYj.js";import{u as U}from"./QueryClientProvider-DYFpemwl.js";import{c as Fe}from"./react-DpjdoO86.js";import{u as qe}from"./index-DwcnyPVA.js";import{S as Re}from"./Select-DYh7uEyl.js";import{u as Oe}from"./useOutsideClick-DvTnTpp2.js";import{u as Ze}from"./useOverlay-Do_dhfE0.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-DsPPmOs3.js";import"../sb-preview/runtime.js";import"./Button.style-BECR_LGE.js";import"./Label-BYvHpISD.js";import"./path-DNVkYuS0.js";import"./scroll-CVXHgjtA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ab6703c1-7030-4629-9d6c-d73c87fe3402",e._sentryDebugIdIdentifier="sentry-dbid-ab6703c1-7030-4629-9d6c-d73c87fe3402")}catch{}})();const Ae=f({display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:0,left:0,zIndex:h.zIndex.overlayHigh,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",animation:`${ye} 0.2s ease-in`}),We=f({display:"block",position:"fixed",top:"50%",left:"50%",width:"51.1rem",zIndex:h.zIndex.overlayTop,paddingTop:"4.8rem",paddingBottom:"4.8rem",borderRadius:"16px",border:"none",outline:"none",background:h.colors.white,transform:"translate(-50%, -50%)"}),$e=({isOpen:e,children:n,onClose:r})=>{const s=o.useCallback(a=>{a.key==="Escape"&&(r==null||r())},[r]);return o.useEffect(()=>{if(e){const a=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.maxWidth=`${a}px`,window.addEventListener("keydown",s)}return()=>{document.body.style.overflow="auto",document.body.style.maxWidth="100vw",window.removeEventListener("keydown",s)}},[e,s]),e&&fe.createPortal(g(H,{children:[t("div",{"aria-hidden":!0,onClick:()=>r==null?void 0:r(),css:Ae}),t("dialog",{onClick:a=>a.stopPropagation(),css:We,children:n})]}),document.body)},Ue=e=>f({width:"32rem",marginTop:"2.4rem",cursor:"pointer",...e&&{"&:hover":{color:h.colors.gray_500}}}),je=f({color:h.colors.gray_700,fontWeight:400}),Pe=f({color:h.colors.gray_500,fontSize:"2rem"}),ze=f({marginTop:"0.8rem",...h.text.body07,fontWeight:400}),q={START:"시작 기간이 입력되지 않았습니다.",END:"종료 기간이 입력되지 않았습니다.",OTHER:"유효한 기간이 아닙니다. 확인 후 다시 입력해주세요."},Ye=e=>e.length!==8?e:`${e.slice(0,4)}-${e.slice(4,6)}-${e.slice(6,8)}`,te=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[r,s,a]=e.split("-").map(Number),i=new Date(r,s-1,a),l=r>=1900;return i.getFullYear()===r&&i.getMonth()===s-1&&i.getDate()===a&&l},Y=e=>{if(te(e)){const[n,r,s]=e.split("-").map(Number);return new Date(n,r-1,s)}return null},Q=e=>e.replace(/\./g,"-"),Qe=(e="",n="",r,s,a)=>{const[i,l]=o.useState({startDate:e,endDate:n}),[m,c]=o.useState({isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""}),[d,p]=o.useState(!1),C=(y,D,v,u)=>{const x=D.replace(/\D/g,""),S=x.length<=8?Ye(x):x;l(k=>{const L={...k,[y]:S};return r(L.startDate),s(L.endDate),L});const M=x.length===8&&te(S);c(k=>({...k,[u?"isStartDateValid":"isEndDateValid"]:M})),x?S.length===10?!M||!v?(c(k=>({...k,[u?"isStartDateError":"isEndDateError"]:!0,errorMessage:q.OTHER})),p(!1),a(!1)):T(S,i.startDate,i.endDate,u):(c(k=>({...k,[u?"isStartDateError":"isEndDateError"]:!1,errorMessage:""})),p(!1),a(!1)):(c(k=>({...k,[u?"isStartDateError":"isEndDateError"]:!0,errorMessage:u?q.START:q.END})),p(!1),a(!1))},T=(y,D,v,u)=>{const x=Y(u?y:D),S=Y(u?v:y);if(x&&S){const M=x<=S;p(M),a(M),c(M?{isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""}:{isStartDateValid:!0,isEndDateValid:!0,isStartDateError:u,isEndDateError:!u,errorMessage:q.OTHER})}else p(!0),a(!0),c({isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""})};return{dates:i,validation:m,isDateRangeValid:d,handleChange:C}},ne=({startDate:e,endDate:n,onSetStartDate:r,onSetEndDate:s,onSetIsDateRangeValid:a})=>{const{dates:i,validation:l,handleChange:m}=Qe(e,n,d=>r(d),d=>s(d),a),c=d=>f`
    text-align: ${d.length===10?"center":"left"};
  `;return g(H,{children:[g(b,{styles:{direction:"row",align:"center",gap:"1.2rem"},children:[t(A,{placeholder:"YYYY-MM-DD",css:[{width:"10.3rem"},c(i.startDate)],value:i.startDate,onChange:d=>m("startDate",d.target.value,l.isEndDateValid,!0),maxLength:10,isError:l.isStartDateError}),t("p",{css:Pe,children:"~"}),t(A,{placeholder:"YYYY-MM-DD",css:[{width:"10.3rem"},c(i.endDate)],value:i.endDate,onChange:d=>m("endDate",d.target.value,l.isStartDateValid,!1),maxLength:10,isError:l.isEndDateError})]}),t("div",{css:{height:"1.6rem"},children:(l.isStartDateError||l.isEndDateError)&&t(De,{isError:!0,css:ze,children:l.errorMessage})})]})};ne.__docgenInfo={description:"",methods:[],displayName:"BlockDate",props:{startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""},onSetStartDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},onSetEndDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},onSetIsDateRangeValid:{required:!0,tsType:{name:"signature",type:"function",raw:"(isValid: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isValid"}],return:{name:"void"}}},description:""}}};const Ke=f({display:"flex",justifyContent:"center",alignItems:"center",width:"5rem",height:"5rem",borderRadius:"100%",border:`1.2px solid ${h.colors.gray_400}`,overflow:"hidden",cursor:"pointer","&:hover":{backgroundColor:h.colors.blue_100}}),Ge=f({border:`1.6px solid ${h.colors.key_500}`,backgroundColor:h.colors.blue_100}),Je=f({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:"1.2rem"}),Xe=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.78009 4C8.13009 4 7.65009 4.61 7.81009 5.24L8.50009 8H8.52009C5.95009 8 3.80009 9.95 3.54009 12.5L3.17009 16.22C3.05009 17.37 3.34009 18.53 3.98009 19.49L4.10009 19.66C4.66009 20.49 5.59009 21 6.60009 21H17.3901C18.3901 21 19.3301 20.5 19.8901 19.66L20.0101 19.49C20.6501 18.53 20.9401 17.37 20.8201 16.22L20.4501 12.5C20.1901 9.94 18.0401 8 15.4701 8H15.4901L16.1801 5.24C16.3401 4.61 15.8601 4 15.2101 4H8.77009H8.78009Z",fill:"#353F9B"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5002 11.0498C13.0002 11.1598 13.3602 11.4298 13.6102 11.7698C13.9102 12.1898 14.0002 12.6698 14.0002 12.9998H13.0002C13.0002 12.8298 12.9402 12.5598 12.7902 12.3498C12.6602 12.1698 12.4302 11.9998 12.0002 11.9998C11.5702 11.9998 11.3402 12.1698 11.2102 12.3498C11.1102 12.4898 11.0502 12.6598 11.0202 12.8098L13.8602 15.6498L13.9402 15.7298L13.9802 15.8398C14.0902 16.1798 14.1402 16.7198 13.8402 17.1998C13.5802 17.6098 13.1402 17.8798 12.5002 17.9598V18.9898H11.5002V17.9598C10.8702 17.8698 10.4502 17.5998 10.2102 17.1798C9.98018 16.7698 9.99018 16.2998 10.0002 16.0698C10.0002 16.0398 10.0002 16.0198 10.0002 15.9998H11.0002V16.0798C11.0002 16.3498 11.0002 16.5398 11.0902 16.6998C11.1502 16.7998 11.3102 17.0098 12.0002 17.0098C12.6902 17.0098 12.9202 16.7998 12.9902 16.6798C13.0602 16.5598 13.0802 16.4098 13.0502 16.2698L10.1502 13.3698L10.0002 13.2198V13.0098C10.0002 12.6798 10.0902 12.1998 10.3902 11.7798C10.6302 11.4398 11.0002 11.1698 11.5002 11.0598V10.0098H12.5002V11.0598V11.0498Z",fill:"#D9D9D9"})),et=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M0.820312 14.8467L10.1536 11.5133L4.15365 5.51332L0.820312 14.8467ZM7.72031 10.9667L3.02031 12.6467L4.70031 7.94665L7.72031 10.9667Z",fill:"white"}),o.createElement("path",{d:"M9.17365 8.53332L12.9003 4.80665C13.227 4.47999 13.7536 4.47999 14.0803 4.80665L14.4736 5.19999L15.1803 4.49332L14.787 4.09999C14.0736 3.38665 12.907 3.38665 12.1936 4.09999L8.46698 7.82665L9.17365 8.53332Z",fill:"white"}),o.createElement("path",{d:"M6.19365 4.76665L5.80031 5.15999L6.50698 5.86665L6.90031 5.47332C7.61365 4.75999 7.61365 3.59332 6.90031 2.87999L6.50698 2.48665L5.80031 3.19999L6.19365 3.59332C6.51365 3.91332 6.51365 4.44665 6.19365 4.76665Z",fill:"white"}),o.createElement("path",{d:"M10.8603 8.09999L9.80031 9.15999L10.507 9.86665L11.567 8.80665C11.8936 8.47999 12.4203 8.47999 12.747 8.80665L13.8203 9.87999L14.527 9.17332L13.4536 8.09999C12.7336 7.38665 11.5736 7.38665 10.8603 8.09999Z",fill:"white"}),o.createElement("path",{d:"M9.52698 4.09999L7.13365 6.49332L7.84031 7.19999L10.2336 4.80665C10.947 4.09332 10.947 2.92665 10.2336 2.21332L9.17365 1.15332L8.46698 1.85999L9.52698 2.91999C9.84698 3.24665 9.84698 3.77999 9.52698 4.09999Z",fill:"white"})),tt=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M12.6667 1.99999H9.88C9.6 1.22666 8.86667 0.666656 8 0.666656C7.13333 0.666656 6.4 1.22666 6.12 1.99999H3.33333C2.6 1.99999 2 2.59999 2 3.33332V14C2 14.7333 2.6 15.3333 3.33333 15.3333H12.6667C13.4 15.3333 14 14.7333 14 14V3.33332C14 2.59999 13.4 1.99999 12.6667 1.99999ZM8 1.99999C8.36667 1.99999 8.66667 2.29999 8.66667 2.66666C8.66667 3.03332 8.36667 3.33332 8 3.33332C7.63333 3.33332 7.33333 3.03332 7.33333 2.66666C7.33333 2.29999 7.63333 1.99999 8 1.99999ZM12.6667 14H3.33333V3.33332H4.66667V5.33332H11.3333V3.33332H12.6667V14Z",fill:"white"})),nt=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M9.33334 2.66668V6.00001C9.33334 6.74668 9.58 7.44001 10 8.00001H6C6.43334 7.42668 6.66667 6.73334 6.66667 6.00001V2.66668H9.33334ZM11.3333 1.33334H4.66667C4.3 1.33334 4 1.63334 4 2.00001C4 2.36668 4.3 2.66668 4.66667 2.66668H5.33334V6.00001C5.33334 7.10668 4.44 8.00001 3.33334 8.00001V9.33334H7.31334V14L7.98 14.6667L8.64667 14V9.33334H12.6667V8.00001C11.56 8.00001 10.6667 7.10668 10.6667 6.00001V2.66668H11.3333C11.7 2.66668 12 2.36668 12 2.00001C12 1.63334 11.7 1.33334 11.3333 1.33334Z",fill:"white"})),rt=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"Property 1=study"},o.createElement("g",{id:"Vector"},o.createElement("path",{d:"M14 2.66668C13.26 2.43334 12.4467 2.33334 11.6667 2.33334C10.3667 2.33334 8.96667 2.60001 8.00001 3.33334C7.03334 2.60001 5.63334 2.33334 4.33334 2.33334C3.03334 2.33334 1.63334 2.60001 0.666672 3.33334V13.1C0.666672 13.2667 0.833338 13.4333 1.00001 13.4333C1.06667 13.4333 1.10001 13.4 1.16667 13.4C2.06667 12.9667 3.36667 12.6667 4.33334 12.6667C5.63334 12.6667 7.03334 12.9333 8.00001 13.6667C8.90001 13.1 10.5333 12.6667 11.6667 12.6667C12.7667 12.6667 13.9 12.8667 14.8333 13.3667C14.9 13.4 14.9333 13.4 15 13.4C15.1667 13.4 15.3333 13.2333 15.3333 13.0667V3.33334C14.9333 3.03334 14.5 2.83334 14 2.66668ZM14 11.6667C13.2667 11.4333 12.4667 11.3333 11.6667 11.3333C10.5333 11.3333 8.90001 11.7667 8.00001 12.3333V4.66668C8.90001 4.10001 10.5333 3.66668 11.6667 3.66668C12.4667 3.66668 13.2667 3.76668 14 4.00001V11.6667Z",fill:"white"}),o.createElement("path",{d:"M11.6667 6.33334C12.2533 6.33334 12.82 6.39334 13.3333 6.50668V5.49334C12.8067 5.39334 12.24 5.33334 11.6667 5.33334C10.5333 5.33334 9.50667 5.52668 8.66667 5.88668V6.99334C9.42001 6.56668 10.4667 6.33334 11.6667 6.33334Z",fill:"white"}),o.createElement("path",{d:"M8.66667 7.66001V8.76668C9.42001 8.34001 10.4667 8.10668 11.6667 8.10668C12.2533 8.10668 12.82 8.16668 13.3333 8.28001V7.26668C12.8067 7.16668 12.24 7.10668 11.6667 7.10668C10.5333 7.10668 9.50667 7.30668 8.66667 7.66001Z",fill:"white"}),o.createElement("path",{d:"M11.6667 8.88668C10.5333 8.88668 9.50667 9.08001 8.66667 9.44001V10.5467C9.42001 10.12 10.4667 9.88668 11.6667 9.88668C12.2533 9.88668 12.82 9.94668 13.3333 10.06V9.04668C12.8067 8.94001 12.24 8.88668 11.6667 8.88668Z",fill:"white"})))),ot=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M3.1001 4.1C3.1001 3.5 3.5001 3 4.1001 3H19.9001C20.5001 3 21.0001 3.5 20.9001 4.1L20.0001 12H4.0001L3.1001 4.1Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M4.1001 5.1C4.1001 4.5 4.5001 4 5.1001 4H18.9001C19.5001 4 20.0001 4.5 19.9001 5.1L19.1001 12H4.9001L4.1001 5.1Z",fill:"#353F9B"}),o.createElement("path",{d:"M4.00021 12H20.0002L20.9002 19.9C21.0002 20.5 20.5002 21 19.9002 21H4.10021C3.50021 21 3.00021 20.5 3.10021 19.9L4.00021 12Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M8.5 19H15.5C15.8 19 16 19.2 16 19.5C16 19.8 15.8 20 15.5 20H8.5C8.2 20 8 19.8 8 19.5C8 19.2 8.2 19 8.5 19Z",fill:"#353F9B"})),re=[{name:"MEETING",icon:t(tt,{width:24,height:24,css:{flexShrink:0}})},{name:"ACCOUNTING",icon:t(Xe,{width:24,height:24,css:{flexShrink:0}})},{name:"TASK",icon:t(ot,{width:24,height:24,css:{flexShrink:0}})},{name:"NOTICE",icon:t(nt,{width:24,height:24,css:{flexShrink:0}})},{name:"STUDY",icon:t(rt,{width:24,height:24,css:{flexShrink:0}})},{name:"EVENT",icon:t(et,{width:24,height:24,css:{flexShrink:0}})}],oe=({selectedBlockIcon:e,onBlockIconSelect:n})=>{const r=s=>{n(e===s?-1:s)};return t("div",{css:Je,children:re.map((s,a)=>t("div",{css:[Ke,e===a&&Ge],onClick:()=>r(a),children:s.icon},a))})};oe.__docgenInfo={description:"",methods:[],displayName:"BlockIcon",props:{selectedBlockIcon:{required:!0,tsType:{name:"number"},description:""},onBlockIconSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const O=({title:e,children:n})=>g(b,{tag:"div",styles:{direction:"column",align:"flex-start",gap:"1.2rem",width:"36.5rem"},children:[t(X,{tag:"H6",css:{fontWeight:500},children:e}),n]});O.__docgenInfo={description:"",methods:[],displayName:"BlockBox",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ae=o.createContext(void 0),j=()=>{const e=o.useContext(ae);if(!e)throw new Error("Error useBlockContext");return e},se=({children:e})=>{const[n,r]=o.useState(1),[s,a]=o.useState({blockName:"",blockType:"",blockColor:"",startDate:"",endDate:""}),i=o.useCallback(()=>r(c=>c+1),[]),l=o.useCallback(()=>{r(1),a({blockName:"",blockType:"",blockColor:"",startDate:"",endDate:""})},[]),m=o.useCallback(c=>{a(d=>({...d,...c}))},[]);return t(ae.Provider,{value:{step:n,formData:s,setFormData:m,nextStep:i,reset:l},children:e})};se.__docgenInfo={description:"",methods:[],displayName:"BlockProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ie=({isVisible:e})=>{const[n,r]=o.useState(-1),[s,a]=o.useState(!1),{formData:i,setFormData:l,nextStep:m}=j(),c=C=>{C.target.value.length<=25&&l({blockName:C.target.value})},d=i.blockName.trim()!==""&&n!==-1&&i.startDate.length===10&&i.endDate.length===10&&s,p=()=>{if(d){const C=re[n].name;l({blockType:C,startDate:i.startDate,endDate:i.endDate}),m()}};return e?g(b,{tag:"section",styles:{direction:"column",justify:"space-between",align:"center",height:"55.11rem",gap:"2.4rem"},children:[t(W,{step:"block",title:"블록 생성하기",info:"타임라인에 생성할 블록 정보를 입력해주세요"}),g(b,{styles:{direction:"column",align:"center",gap:"2.4rem",paddingLeft:"6.8rem",paddingRight:"6.8rem"},children:[t(O,{title:"블록 아이콘",children:t(oe,{selectedBlockIcon:n,onBlockIconSelect:r})}),t(O,{title:"블록명",children:g(b,{styles:{align:"flex-end",direction:"column",gap:"0.8rem",width:"100%"},children:[t(A,{placeholder:"활동,행사명 등",css:{width:"100%"},value:i.blockName,onChange:c}),g(_,{tag:"body7",css:je,children:[i.blockName.length," / 25"]})]})}),t(O,{title:"기간",children:t(b,{styles:{align:"flex-start",direction:"column",padding:"0",width:"100%"},children:t(ne,{startDate:i.startDate,endDate:i.endDate,onSetStartDate:C=>l({startDate:C}),onSetEndDate:C=>l({endDate:C}),onSetIsDateRangeValid:a})})})]}),t(B,{variant:"primary",size:"medium",css:Ue(d),disabled:!d,onClick:p,children:"다음"})]}):null};ie.__docgenInfo={description:"",methods:[],displayName:"BlockModal",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const at=f({borderRadius:"8px",border:`1px dashed ${h.colors.gray_400}`,color:h.colors.gray_500});f({color:h.colors.gray_500});const st=f({padding:"0",width:"6.4rem",textDecoration:"underline",...h.text.body06,fontWeight:600,color:h.colors.gray_500});function it(e,n){return be({...e,enabled:!0,suspense:!0,throwOnError:ve,placeholderData:void 0},ke)}const lt=({files:e,onFilesChange:n,setFileUrls:r,setUploadStatus:s})=>{const a=o.useRef(null),{mutateAsync:i}=Se(),l=o.useCallback(async p=>{if(!p)return;const T=Array.from(p).filter(v=>!e.some(u=>u.name===v.name&&u.size===v.size));n([...e,...T]);const y={},D={};for(let v=0;v<T.length;v++){const u=T[v],x=Ne(u.name),S=await Ee(x),M=u.name;D[M]=!1,s(L=>({...L,...D}));const k=S==null?void 0:S.url;if(u&&k){const L=Date.now(),w=await i({presignedUrl:k,file:u}),V=Date.now()-L,I=Math.max(0,2e3-V);setTimeout(()=>{w&&(y[M]=w,D[M]=!0,s(E=>({...E,...D})),r(E=>({...E,...y})))},I)}}a.current&&(a.current.value="")},[e,n,i,r,s]),m=o.useCallback(p=>{l(p.target.files)},[l]),c=o.useCallback(p=>{p.preventDefault()},[]),d=o.useCallback(p=>{p.preventDefault(),l(p.dataTransfer.files)},[l]);return{fileInputRef:a,handleFileChange:m,handleDragOver:c,handleDrop:d}},le=({files:e,onFilesChange:n,setFileUrls:r,setUploadStatus:s})=>{const{fileInputRef:a,handleFileChange:i,handleDragOver:l,handleDrop:m}=lt({files:e,onFilesChange:n,setFileUrls:r,setUploadStatus:s});return t(b,{styles:{direction:"column",justify:"center",align:"center",padding:"3.2rem 6.35rem",width:"100%"},css:at,onDragOver:l,onDrop:c=>m(c),children:g(b,{tag:"form",styles:{direction:"column",align:"center",justify:"center"},children:[t("input",{type:"file",multiple:!0,style:{display:"none"},ref:a,onChange:i}),t(_,{tag:"body6",children:"업로드할 파일을 여기로 드래그 하세요"}),g(b,{styles:{direction:"row",align:"center",justify:"center",gap:"0.3rem"},css:{marginTop:"1.6rem",whiteSpace:"nowrap"},children:[t(_,{tag:"body6",children:"또는"}),t(B,{variant:"underline",css:st,onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},children:"여기를 클릭"}),t(_,{tag:"body6",children:"하여"})]}),t(_,{tag:"body6",css:{marginTop:"0.5rem"},children:"업로드할 파일을 선택하세요"})]})})};le.__docgenInfo={description:"",methods:[],displayName:"BlockAdd",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},onFilesChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},setFileUrls:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Files"}],raw:"SetStateAction<Files>"}],raw:"Dispatch<SetStateAction<Files>>"},description:""},setUploadStatus:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"signature",type:"object",raw:"{ [key: string]: boolean }",signature:{properties:[{key:{name:"string"},value:{name:"boolean",required:!0}}]}}],raw:"SetStateAction<{ [key: string]: boolean }>"}],raw:"Dispatch<SetStateAction<{ [key: string]: boolean }>>"},description:""}}};const ct=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M13.8334 7.5V15.8333H7.16675V7.5H13.8334ZM12.5834 2.5H8.41675L7.58341 3.33333H4.66675V5H16.3334V3.33333H13.4167L12.5834 2.5ZM15.5001 5.83333H5.50008V15.8333C5.50008 16.75 6.25008 17.5 7.16675 17.5H13.8334C14.7501 17.5 15.5001 16.75 15.5001 15.8333V5.83333Z",fill:"#56585D"})),dt=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{clipPath:"url(#clip0_1676_1227)"},o.createElement("path",{opacity:.2,d:"M10 19.6875C4.66155 19.6875 0.3125 15.3385 0.3125 10C0.3125 4.66155 4.66155 0.3125 10 0.3125C15.3385 0.3125 19.6875 4.66155 19.6875 10C19.6875 15.3385 15.3385 19.6875 10 19.6875ZM10 2.47615C5.85753 2.47615 2.48702 5.84666 2.48702 9.98913C2.48702 14.1316 5.85753 17.5021 10 17.5021C14.1425 17.5021 17.513 14.1316 17.513 9.98913C17.513 5.84666 14.1425 2.47615 10 2.47615Z",fill:"#909090"}),o.createElement("path",{d:"M18.6271 10.9375C18.0381 10.9375 17.5561 10.455 17.5561 9.86535C17.5561 5.78046 14.2358 2.4568 10.155 2.4568C9.5659 2.4568 9.0625 1.97433 9.0625 1.38465C9.0625 0.794968 9.52306 0.3125 10.1121 0.3125H10.1443C15.4139 0.3125 19.6875 4.6011 19.6875 9.86535C19.6875 10.455 19.2055 10.9375 18.6164 10.9375H18.6271Z",fill:"#909090"})),o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_1676_1227"},o.createElement("rect",{width:20,height:20,fill:"white"})))),ce=({size:e=20})=>t(dt,{width:e,height:e,css:{animation:`${Ce} 1s linear infinite`,fill:`${h.colors.key_500}`}});ce.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const ut=f({borderRadius:"8px",border:`1px solid ${h.colors.gray_300}`,width:"37.5rem"}),mt=f({color:h.colors.gray_800,fontWeight:500,maxWidth:"30rem"}),de=({title:e,onDelete:n,isUploading:r})=>g(b,{styles:{direction:"row",align:"center",justify:"space-between",padding:"1.5rem 1.2rem"},css:ut,children:[t(_,{tag:"body6",css:mt,children:e}),r?t(ce,{size:20}):t(ct,{width:20,height:20,css:{cursor:"pointer"},onClick:n})]});de.__docgenInfo={description:"",methods:[],displayName:"BlockItem",props:{title:{required:!0,tsType:{name:"string"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isUploading:{required:!0,tsType:{name:"boolean"},description:""}}};const pt=f({display:"flex",flexDirection:"column",maxHeight:"18rem",width:"38.5rem",gap:"0.8rem",position:"relative",paddingRight:"1rem",overflowY:"auto",boxSizing:"content-box","&::-webkit-scrollbar":{width:"1rem"},"&::-webkit-scrollbar-thumb":{backgroundColor:h.colors.gray_300,borderRadius:"4px"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"}}),ht=f({flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"55.11rem",paddingLeft:"6.8rem",paddingRight:"6.8rem",gap:"2.4rem"}),gt=async(e,n,r)=>(await Z.post(`/time-blocks/team/${e}/time-block`,r,{params:{type:n}})).data,ft=async(e,n)=>await Z.delete(`/time-blocks/team/${e}/time-block/${n}`),yt=(e,n)=>{const r=U();return $({mutationFn:s=>gt(e,n,s),onSuccess:()=>{r.invalidateQueries({queryKey:["timeBlock"]})}})},N=Fe(e=>({isOpen:!1,contentType:null,modalData:null,actions:{openModal:(n,r=null)=>{e({isOpen:!0,contentType:n,modalData:r})},closeModal:()=>e({isOpen:!1,contentType:null,modalData:null})}})),Ct=()=>N(e=>e.isOpen),wt=()=>N(e=>e.contentType),Dt=()=>N(e=>e.modalData),bt=()=>N(n=>n.actions.openModal),P=()=>N(n=>n.actions.closeModal),ue=({isVisible:e})=>{const n=qe(),s=new URLSearchParams(n.search).get("teamId"),{formData:a,reset:i}=j(),l=P(),[m,c]=o.useState([]),[d,p]=o.useState({}),[C,T]=o.useState({}),[y,D]=o.useState(!0),{mutate:v}=yt(+s,"executive"),{mutate:u}=xe(),{createToast:x}=we();o.useEffect(()=>{const w=m.length===0||m.length>0&&Object.values(C).every(V=>V);D(w)},[C,m.length]);const S=w=>{c(V=>{const I=w.filter(E=>!V.some(F=>F.name===E.name&&F.size===E.size));return[...V,...I]}),D(!1)},M=w=>{const V=m.find(I=>I.name===w);V&&u({fileName:V.name},{onSuccess:()=>{c(I=>I.filter(F=>F.name!==w)),p(I=>{const E={...I};return delete E[w],E}),T(I=>{const E={...I};return delete E[w],E})}})};if(!e)return null;const k={name:a.blockName,color:a.blockColor,startDate:Q(a.startDate),endDate:Q(a.endDate),blockType:a.blockType,files:d},L=()=>{v(k,{onSuccess:()=>{x("활동 블록이 생성되었습니다","success"),l(),i()}})};return g(b,{tag:"section",css:ht,children:[t(W,{step:"upload",title:"블록 생성하기",info:"해당 블록에 업로드할 문서를 선택해주세요"}),g(b,{styles:{direction:"column",align:"flex-start",grow:"1",width:"100%",gap:"2.4rem"},children:[t(le,{files:m,onFilesChange:S,setFileUrls:p,setUploadStatus:T}),t("div",{className:"scroll",css:pt,children:m.map(w=>t(de,{title:w.name,onDelete:()=>M(w.name),isUploading:!C[w.name]},w.name))})]}),t(B,{variant:"primary",size:"medium",css:{width:"32rem"},onClick:L,disabled:!y,children:"저장"})]})};ue.__docgenInfo={description:"",methods:[],displayName:"UploadModal",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const me=()=>{const{step:e}=j();return g(H,{children:[t(ie,{isVisible:e===1}),t(ue,{isVisible:e===2})]})};me.__docgenInfo={description:"",methods:[],displayName:"BlockFlow"};const kt=()=>{const e=U();return $({mutationFn:({teamId:r,blockId:s})=>ft(r,s),onSuccess:()=>{e.invalidateQueries({queryKey:["timeBlock"]}),e.invalidateQueries({queryKey:["document"]})}})},vt=async(e,n)=>await Z.delete(`/documents/team/${e}/document/${n}`),St=()=>{const e=U();return $({mutationFn:({teamId:r,documentId:s})=>vt(r,s),onSuccess:()=>{e.invalidateQueries({queryKey:["document"]})}})},Et=f({"&:hover":{backgroundColor:h.colors.key_200},width:"15.8rem"}),xt=f({"&:hover":{backgroundColor:h.colors.blue_100},width:"15.8rem"}),pe=()=>{const e=Dt(),n=P(),{mutate:r}=kt(),{mutate:s}=St();if(!e)return null;const{teamId:a,itemId:i,itemType:l}=e,d=l==="block"?()=>{a&&i&&r({teamId:a,blockId:i},{onSuccess:()=>{n()}})}:()=>{a&&i&&s({teamId:a,documentId:i},{onSuccess:()=>{n()}})};return!l||!a||!i?null:g(b,{styles:{direction:"column",align:"center",justify:"center",paddingRight:"9.35rem",paddingLeft:"9.35rem"},children:[t(X,{tag:"H5",css:{fontWeight:600},children:Me[l.toUpperCase()]}),t(_,{tag:"body4",css:{marginTop:"1rem",fontWeight:400},children:Te[l.toUpperCase()]}),g(b,{styles:{direction:"row",align:"center",justify:"center",gap:"0.8rem",marginTop:"2.4rem"},children:[t(B,{variant:"secondary",size:"large",onClick:n,css:xt,children:"취소"}),t(B,{variant:"primary",size:"large",onClick:d,css:Et,children:"삭제"})]})]})};pe.__docgenInfo={description:"",methods:[],displayName:"DeleteModal"};const Mt=async()=>(await Z.get("/teams/category")).data,Tt=(e=!0)=>it({queryKey:["category"],queryFn:()=>Mt(),select:n=>{var s;const r=((s=n==null?void 0:n.data)==null?void 0:s.categories)||[];return e?r:r.filter(a=>a!=="전체")}}),he=({isVisible:e})=>{const{isOpen:n,close:r,toggle:s}=Ze(),{setFormData:a,nextStep:i}=ee(),l=Oe(r),[m,c]=o.useState(""),{data:d}=Tt(!1);if(o.useEffect(()=>{const y=D=>{var u;if(!l.current||!(D.target instanceof HTMLElement))return;!l.current.contains(D.target)&&!((u=D.target)!=null&&u.className.includes("select-container"))&&(r==null||r())};return n?window.addEventListener("mousedown",y):window.removeEventListener("mousedown",y),()=>{window.removeEventListener("mousedown",y)}},[n,r,l]),!e)return null;const p=y=>{c(y),a({category:y}),r==null||r()},C=()=>{i()},T=m.trim().length>0;return g(b,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:Ie,children:[t(W,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),t("div",{css:{width:"32rem",marginTop:"2.4rem"},ref:l,children:t(Re,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:n,onTrigger:s,onSelect:p,options:d.map(y=>({value:y})),className:"select-container"})}),t(B,{variant:"primary",size:"medium",css:Le(T),disabled:!T,onClick:C,children:"다음"})]})};he.__docgenInfo={description:"",methods:[],displayName:"WorkSpaceCategory",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const ge=()=>{const{step:e}=ee();return g(H,{children:[t(Ve,{isVisible:e==1}),t(he,{isVisible:e==2}),t(_e,{isVisible:e==3}),t(Be,{isVisible:e==4})]})};ge.__docgenInfo={description:"",methods:[],displayName:"WorkSpaceFlow"};const z=()=>{const e=Ct(),n=wt(),r=P(),s=()=>{switch(n){case"create-workspace":return t(He,{children:t(ge,{})});case"create-block":return t(se,{children:t(me,{})});case"delete":return t(pe,{});default:return null}};return!e||!n?null:t($e,{isOpen:e,onClose:r,children:s()})};z.__docgenInfo={description:"",methods:[],displayName:"ModalContainer"};const nn={title:"Shared/DeleteModal",component:z,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},R={render:()=>{const e=bt();return g(H,{children:[t("button",{onClick:()=>e("delete",{teamId:1,itemId:1,itemType:"block"}),children:"Open Delete Modal"}),t(z,{})]})}};var K,G,J;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('delete', {
        teamId: 1,
        itemId: 1,
        itemType: 'block'
      })}>
          Open Delete Modal
        </button>
        <ModalContainer />
      </>;
  }
}`,...(J=(G=R.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const rn=["Delete"];export{R as Delete,rn as __namedExportsOrder,nn as default};
