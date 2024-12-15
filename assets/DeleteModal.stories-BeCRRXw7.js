import{j as w,a as i,F as Q}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{h as S,V as v,n as Z,X as Ue,B as ge,H as F,E as j,F as ze,c as ye,m as Ve,G as Le}from"./index-Bj-ff5e2.js";import{r as y}from"./index-BeH7IU5F.js";import{c as I}from"./emotion-react.browser.esm-xntO1MbF.js";import"./iframe-DrdEy4Jd.js";import{B as He,C as We,D as Pe,E as Qe,F as Ye,G as Ke,H as Ge}from"./index-CLsVEhIN.js";import{c as ne,u as Je,Q as Xe,e as Ze,f as et,g as tt,h as Y,i as K,j as rt,A as ee,H as te,k as nt,l as re,w as ot,m as st,D as at,n as it,o as be,s as ct,p as lt,a as dt,d as ut,b as mt,W as pt}from"./WorkSpaceName-CBr-66rp.js";import"./index-2-ic2sVG.js";import{u as ft}from"./toast-BnAeWbr_.js";import{e as ht}from"./file-BwgzbXiz.js";import{u as oe}from"./QueryClientProvider-C407cgeI.js";import{P as De}from"./path-BUraLB_f.js";import{u as gt}from"./useOutsideClick-Dqcx82Hb.js";import{u as yt}from"./useOverlay-D8QRSoIa.js";import"./jsx-runtime-BhSfmKx2.js";import"./_commonjsHelpers-Y38rOxJs.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e37092fc-7275-4a8a-93b6-b4fb6b155389",e._sentryDebugIdIdentifier="sentry-dbid-e37092fc-7275-4a8a-93b6-b4fb6b155389")}catch{}})();const bt=e=>I({width:"32rem",marginTop:"2.4rem",cursor:"pointer",...e&&{"&:hover":{color:S.colors.gray_500}}}),Dt=I({color:S.colors.gray_700,fontWeight:400}),wt=I({color:S.colors.gray_500,fontSize:"2rem"}),St=I({marginTop:"0.8rem",...S.text.body07,fontWeight:400}),H={START:"시작 기간이 입력되지 않았습니다.",END:"종료 기간이 입력되지 않았습니다.",OTHER:"유효한 기간이 아닙니다. 확인 후 다시 입력해주세요."},Et=e=>e.length!==8?e:`${e.slice(0,4)}-${e.slice(4,6)}-${e.slice(6,8)}`,we=e=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[r,s,n]=e.split("-").map(Number),o=new Date(r,s-1,n),a=r>=1900;return o.getFullYear()===r&&o.getMonth()===s-1&&o.getDate()===n&&a},ce=e=>{if(we(e)){const[t,r,s]=e.split("-").map(Number);return new Date(t,r-1,s)}return null},le=e=>e.replace(/\./g,"-"),kt=(e="",t="",r,s,n)=>{const[o,a]=y.useState({startDate:e,endDate:t}),[c,u]=y.useState({isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""}),[l,p]=y.useState(!1),d=(g,E,M,h)=>{const b=E.replace(/\D/g,""),k=b.length<=8?Et(b):b;a(f=>{const D={...f,[g]:k};return r(D.startDate),s(D.endDate),D});const T=b.length===8&&we(k);u(f=>({...f,[h?"isStartDateValid":"isEndDateValid"]:T})),b?k.length===10?!T||!M?(u(f=>({...f,[h?"isStartDateError":"isEndDateError"]:!0,errorMessage:H.OTHER})),p(!1),n(!1)):m(k,o.startDate,o.endDate,h):(u(f=>({...f,[h?"isStartDateError":"isEndDateError"]:!1,errorMessage:""})),p(!1),n(!1)):(u(f=>({...f,[h?"isStartDateError":"isEndDateError"]:!0,errorMessage:h?H.START:H.END})),p(!1),n(!1))},m=(g,E,M,h)=>{const b=ce(h?g:E),k=ce(h?M:g);if(b&&k){const T=b<=k;p(T),n(T),u(T?{isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""}:{isStartDateValid:!0,isEndDateValid:!0,isStartDateError:h,isEndDateError:!h,errorMessage:H.OTHER})}else p(!0),n(!0),u({isStartDateValid:!0,isEndDateValid:!0,isStartDateError:!1,isEndDateError:!1,errorMessage:""})};return{dates:o,validation:c,isDateRangeValid:l,handleChange:d}},Se=({startDate:e,endDate:t,onSetStartDate:r,onSetEndDate:s,onSetIsDateRangeValid:n})=>{const{dates:o,validation:a,handleChange:c}=kt(e,t,l=>r(l),l=>s(l),n),u=l=>I`
    text-align: ${l.length===10?"center":"left"};
  `;return w(Q,{children:[w(v,{styles:{direction:"row",align:"center",gap:"1.2rem"},children:[i(Z,{placeholder:"YYYY-MM-DD",css:[{width:"10.3rem"},u(o.startDate)],value:o.startDate,onChange:l=>c("startDate",l.target.value,a.isEndDateValid,!0),maxLength:10,isError:a.isStartDateError}),i("p",{css:wt,children:"~"}),i(Z,{placeholder:"YYYY-MM-DD",css:[{width:"10.3rem"},u(o.endDate)],value:o.endDate,onChange:l=>c("endDate",l.target.value,a.isStartDateValid,!1),maxLength:10,isError:a.isEndDateError})]}),i("div",{css:{height:"1.6rem"},children:(a.isStartDateError||a.isEndDateError)&&i(Ue,{isError:!0,css:St,children:a.errorMessage})})]})};Se.__docgenInfo={description:"",methods:[],displayName:"BlockDate",props:{startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""},onSetStartDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},onSetEndDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},onSetIsDateRangeValid:{required:!0,tsType:{name:"signature",type:"function",raw:"(isValid: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isValid"}],return:{name:"void"}}},description:""}}};const Tt=I({display:"flex",justifyContent:"center",alignItems:"center",width:"5rem",height:"5rem",borderRadius:"100%",border:`1.2px solid ${S.colors.gray_400}`,overflow:"hidden",cursor:"pointer","&:hover":{backgroundColor:S.colors.blue_100}}),It=I({border:`1.6px solid ${S.colors.key_500}`,backgroundColor:S.colors.blue_100}),Ct=I({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:"1.2rem"}),Ee=[{name:"MEETING",icon:i(He,{width:24,height:24,css:{flexShrink:0}})},{name:"ACCOUNTING",icon:i(We,{width:24,height:24,css:{flexShrink:0}})},{name:"TASK",icon:i(Pe,{width:24,height:24,css:{flexShrink:0}})},{name:"NOTICE",icon:i(Qe,{width:24,height:24,css:{flexShrink:0}})},{name:"STUDY",icon:i(Ye,{width:24,height:24,css:{flexShrink:0}})},{name:"EVENT",icon:i(Ke,{width:24,height:24,css:{flexShrink:0}})}],ke=({selectedBlockIcon:e,onBlockIconSelect:t})=>{const r=s=>{t(e===s?-1:s)};return i("div",{css:Ct,children:Ee.map((s,n)=>i("div",{css:[Tt,e===n&&It],onClick:()=>r(n),children:s.icon},n))})};ke.__docgenInfo={description:"",methods:[],displayName:"BlockIcon",props:{selectedBlockIcon:{required:!0,tsType:{name:"number"},description:""},onBlockIconSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const P=({title:e,children:t})=>w(v,{tag:"div",styles:{direction:"column",align:"flex-start",gap:"1.2rem",width:"36.5rem"},children:[i(ge,{tag:"H6",css:{fontWeight:500},children:e}),t]});P.__docgenInfo={description:"",methods:[],displayName:"BlockBox",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Te=y.createContext(void 0),se=()=>{const e=y.useContext(Te);if(!e)throw new Error("Error useBlockContext");return e},Ie=({children:e})=>{const[t,r]=y.useState(1),[s,n]=y.useState({blockName:"",blockType:"",blockColor:"",startDate:"",endDate:""}),o=y.useCallback(()=>r(u=>u+1),[]),a=y.useCallback(()=>{r(1),n({blockName:"",blockType:"",blockColor:"",startDate:"",endDate:""})},[]),c=y.useCallback(u=>{n(l=>({...l,...u}))},[]);return i(Te.Provider,{value:{step:t,formData:s,setFormData:c,nextStep:o,reset:a},children:e})};Ie.__docgenInfo={description:"",methods:[],displayName:"BlockProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ce=({isVisible:e})=>{const[t,r]=y.useState(-1),[s,n]=y.useState(!1),{formData:o,setFormData:a,nextStep:c}=se(),u=d=>{d.target.value.length<=25&&a({blockName:d.target.value})},l=o.blockName.trim()!==""&&t!==-1&&o.startDate.length===10&&o.endDate.length===10&&s,p=()=>{if(l){const d=Ee[t].name;a({blockType:d,startDate:o.startDate,endDate:o.endDate}),c()}};return e?w(v,{tag:"section",styles:{direction:"column",justify:"space-between",align:"center",height:"55.11rem",gap:"2.4rem"},children:[i(ne,{step:"block",title:"블록 생성하기",info:"타임라인에 생성할 블록 정보를 입력해주세요"}),w(v,{styles:{direction:"column",align:"center",gap:"2.4rem",paddingLeft:"6.8rem",paddingRight:"6.8rem"},children:[i(P,{title:"블록 아이콘",children:i(ke,{selectedBlockIcon:t,onBlockIconSelect:r})}),i(P,{title:"블록명",children:w(v,{styles:{align:"flex-end",direction:"column",gap:"0.8rem",width:"100%"},children:[i(Z,{placeholder:"활동,행사명 등",css:{width:"100%"},value:o.blockName,onChange:u}),w(F,{tag:"body7",css:Dt,children:[o.blockName.length," / 25"]})]})}),i(P,{title:"기간",children:i(v,{styles:{align:"flex-start",direction:"column",padding:"0",width:"100%"},children:i(Se,{startDate:o.startDate,endDate:o.endDate,onSetStartDate:d=>a({startDate:d}),onSetEndDate:d=>a({endDate:d}),onSetIsDateRangeValid:n})})})]}),i(j,{variant:"primary",size:"medium",css:bt(l),disabled:!l,onClick:p,children:"다음"})]}):null};Ce.__docgenInfo={description:"",methods:[],displayName:"BlockModal",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const Rt=I({borderRadius:"8px",border:`1px dashed ${S.colors.gray_400}`,color:S.colors.gray_500});I({color:S.colors.gray_500});const xt=I({padding:"0",width:"6.4rem",textDecoration:"underline",...S.text.body06,fontWeight:600,color:S.colors.gray_500});function Re(e,t){return Je({...e,enabled:!0,suspense:!0,throwOnError:Ze,placeholderData:void 0},Xe,t)}const vt=({files:e,onFilesChange:t,setFileUrls:r,setUploadStatus:s})=>{const n=y.useRef(null),{mutateAsync:o}=et(),a=y.useCallback(async p=>{if(!p)return;const m=Array.from(p).filter(M=>!e.some(h=>h.name===M.name&&h.size===M.size));t([...e,...m]);const g={},E={};for(let M=0;M<m.length;M++){const h=m[M],b=ht(h.name),k=await tt(b),T=h.name;E[T]=!1,s(D=>({...D,...E}));const f=k==null?void 0:k.url;if(h&&f){const D=Date.now(),C=await o({presignedUrl:f,file:h}),x=Date.now()-D,q=Math.max(0,2e3-x);setTimeout(()=>{C&&(g[T]=C,E[T]=!0,s(B=>({...B,...E})),r(B=>({...B,...g})))},q)}}n.current&&(n.current.value="")},[e,t,o,r,s]),c=y.useCallback(p=>{a(p.target.files)},[a]),u=y.useCallback(p=>{p.preventDefault()},[]),l=y.useCallback(p=>{p.preventDefault(),a(p.dataTransfer.files)},[a]);return{fileInputRef:n,handleFileChange:c,handleDragOver:u,handleDrop:l}},xe=({files:e,onFilesChange:t,setFileUrls:r,setUploadStatus:s})=>{const{fileInputRef:n,handleFileChange:o,handleDragOver:a,handleDrop:c}=vt({files:e,onFilesChange:t,setFileUrls:r,setUploadStatus:s});return i(v,{styles:{direction:"column",justify:"center",align:"center",padding:"3.2rem 6.35rem",width:"100%"},css:Rt,onDragOver:a,onDrop:u=>c(u),children:w(v,{tag:"form",styles:{direction:"column",align:"center",justify:"center"},children:[i("input",{type:"file",multiple:!0,style:{display:"none"},ref:n,onChange:o}),i(F,{tag:"body6",children:"업로드할 파일을 여기로 드래그 하세요"}),w(v,{styles:{direction:"row",align:"center",justify:"center",gap:"0.3rem"},css:{marginTop:"1.6rem",whiteSpace:"nowrap"},children:[i(F,{tag:"body6",children:"또는"}),i(j,{variant:"text",css:xt,onClick:()=>{var u;return(u=n.current)==null?void 0:u.click()},children:"여기를 클릭"}),i(F,{tag:"body6",children:"하여"})]}),i(F,{tag:"body6",css:{marginTop:"0.5rem"},children:"업로드할 파일을 선택하세요"})]})})};xe.__docgenInfo={description:"",methods:[],displayName:"BlockAdd",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},onFilesChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},setFileUrls:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Files"}],raw:"SetStateAction<Files>"}],raw:"Dispatch<SetStateAction<Files>>"},description:""},setUploadStatus:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"signature",type:"object",raw:"{ [key: string]: boolean }",signature:{properties:[{key:{name:"string"},value:{name:"boolean",required:!0}}]}}],raw:"SetStateAction<{ [key: string]: boolean }>"}],raw:"Dispatch<SetStateAction<{ [key: string]: boolean }>>"},description:""}}};const Mt=I({borderRadius:"8px",border:`1px solid ${S.colors.gray_300}`,width:"37.5rem"}),_t=I({color:S.colors.gray_800,fontWeight:500,maxWidth:"30rem"}),ve=({title:e,onDelete:t,isUploading:r})=>w(v,{styles:{direction:"row",align:"center",justify:"space-between",padding:"1.5rem 1.2rem"},css:Mt,children:[i(F,{tag:"body6",css:_t,children:e}),r?i(ze,{size:20}):i(Ge,{width:20,height:20,css:{cursor:"pointer"},onClick:t})]});ve.__docgenInfo={description:"",methods:[],displayName:"BlockItem",props:{title:{required:!0,tsType:{name:"string"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isUploading:{required:!0,tsType:{name:"boolean"},description:""}}};const Ot=I({display:"flex",flexDirection:"column",maxHeight:"18rem",width:"38.5rem",gap:"0.8rem",position:"relative",paddingRight:"1rem",overflowY:"auto",boxSizing:"content-box","&::-webkit-scrollbar":{width:"1rem"},"&::-webkit-scrollbar-thumb":{backgroundColor:S.colors.gray_300,borderRadius:"4px"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"}}),qt=I({flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"55.11rem",paddingLeft:"6.8rem",paddingRight:"6.8rem",gap:"2.4rem"}),At=async(e,t,r)=>(await Y.post(`/time-blocks/team/${e}/time-block`,r,{params:{type:t}})).data,Nt=async(e,t)=>await Y.delete(`/time-blocks/team/${e}/time-block/${t}`),Ft=(e,t)=>{const r=oe();return K({mutationFn:s=>At(e,t,s),onSuccess:()=>{r.invalidateQueries({queryKey:["timeBlock"]})}})},de=["#FFE6E8","#F8E2CB","#C4F2E5","#DCD8FA","#E2E8F8","#F8E1F5","#D3EFFA"],jt=()=>{const e=Math.floor(Math.random()*de.length);return de[e]},Bt=/\{[^{}]+\}/g,$t=()=>{var e,t;return typeof process=="object"&&Number.parseInt((t=(e=process==null?void 0:process.versions)==null?void 0:e.node)==null?void 0:t.substring(0,2))>=18&&process.versions.undici};function Ut(){return Math.random().toString(36).slice(2,11)}function Me(e){let{baseUrl:t="",Request:r=globalThis.Request,fetch:s=globalThis.fetch,querySerializer:n,bodySerializer:o,headers:a,requestInitExt:c=void 0,...u}={...e};c=$t()?c:void 0,t=me(t);const l=[];async function p(d,m){const{baseUrl:g,fetch:E=s,Request:M=r,headers:h,params:b={},parseAs:k="json",querySerializer:T,bodySerializer:f=o??Vt,body:D,...C}=m||{};g&&(t=me(g));let x=typeof n=="function"?n:ue(n);T&&(x=typeof T=="function"?T:ue({...typeof n=="object"?n:{},...T}));const q=D===void 0?void 0:f(D),B=q===void 0||q instanceof FormData?{}:{"Content-Type":"application/json"},$e={redirect:"follow",...u,...C,body:q,headers:Ht(B,a,h,b.header)};let z,V,A=new r(Lt(d,{baseUrl:t,params:b,querySerializer:x}),$e);for(const _ in C)_ in A||(A[_]=C[_]);if(l.length){z=Ut(),V=Object.freeze({baseUrl:t,fetch:E,parseAs:k,querySerializer:x,bodySerializer:f});for(const _ of l)if(_&&typeof _=="object"&&typeof _.onRequest=="function"){const O=await _.onRequest({request:A,schemaPath:d,params:b,options:V,id:z});if(O){if(!(O instanceof r))throw new Error("onRequest: must return new Request() when modifying the request");A=O}}}let R;try{R=await E(A,c)}catch(_){let O=_;if(l.length)for(let N=l.length-1;N>=0;N--){const L=l[N];if(L&&typeof L=="object"&&typeof L.onError=="function"){const $=await L.onError({request:A,error:O,schemaPath:d,params:b,options:V,id:z});if($){if($ instanceof Response){O=void 0,R=$;break}if($ instanceof Error){O=$;continue}throw new Error("onError: must return new Response() or instance of Error")}}}if(O)throw O}if(l.length)for(let _=l.length-1;_>=0;_--){const O=l[_];if(O&&typeof O=="object"&&typeof O.onResponse=="function"){const N=await O.onResponse({request:A,response:R,schemaPath:d,params:b,options:V,id:z});if(N){if(!(N instanceof Response))throw new Error("onResponse: must return new Response() when modifying the response");R=N}}}if(R.status===204||R.headers.get("Content-Length")==="0")return R.ok?{data:void 0,response:R}:{error:void 0,response:R};if(R.ok)return k==="stream"?{data:R.body,response:R}:{data:await R[k](),response:R};let X=await R.text();try{X=JSON.parse(X)}catch{}return{error:X,response:R}}return{GET(d,m){return p(d,{...m,method:"GET"})},PUT(d,m){return p(d,{...m,method:"PUT"})},POST(d,m){return p(d,{...m,method:"POST"})},DELETE(d,m){return p(d,{...m,method:"DELETE"})},OPTIONS(d,m){return p(d,{...m,method:"OPTIONS"})},HEAD(d,m){return p(d,{...m,method:"HEAD"})},PATCH(d,m){return p(d,{...m,method:"PATCH"})},TRACE(d,m){return p(d,{...m,method:"TRACE"})},use(...d){for(const m of d)if(m){if(typeof m!="object"||!("onRequest"in m||"onResponse"in m||"onError"in m))throw new Error("Middleware must be an object with one of `onRequest()`, `onResponse() or `onError()`");l.push(m)}},eject(...d){for(const m of d){const g=l.indexOf(m);g!==-1&&l.splice(g,1)}}}}function G(e,t,r){if(t==null)return"";if(typeof t=="object")throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${e}=${(r==null?void 0:r.allowReserved)===!0?t:encodeURIComponent(t)}`}function _e(e,t,r){if(!t||typeof t!="object")return"";const s=[],n={simple:",",label:".",matrix:";"}[r.style]||"&";if(r.style!=="deepObject"&&r.explode===!1){for(const c in t)s.push(c,r.allowReserved===!0?t[c]:encodeURIComponent(t[c]));const a=s.join(",");switch(r.style){case"form":return`${e}=${a}`;case"label":return`.${a}`;case"matrix":return`;${e}=${a}`;default:return a}}for(const a in t){const c=r.style==="deepObject"?`${e}[${a}]`:a;s.push(G(c,t[a],r))}const o=s.join(n);return r.style==="label"||r.style==="matrix"?`${n}${o}`:o}function Oe(e,t,r){if(!Array.isArray(t))return"";if(r.explode===!1){const o={form:",",spaceDelimited:"%20",pipeDelimited:"|"}[r.style]||",",a=(r.allowReserved===!0?t:t.map(c=>encodeURIComponent(c))).join(o);switch(r.style){case"simple":return a;case"label":return`.${a}`;case"matrix":return`;${e}=${a}`;default:return`${e}=${a}`}}const s={simple:",",label:".",matrix:";"}[r.style]||"&",n=[];for(const o of t)r.style==="simple"||r.style==="label"?n.push(r.allowReserved===!0?o:encodeURIComponent(o)):n.push(G(e,o,r));return r.style==="label"||r.style==="matrix"?`${s}${n.join(s)}`:n.join(s)}function ue(e){return function(r){const s=[];if(r&&typeof r=="object")for(const n in r){const o=r[n];if(o!=null){if(Array.isArray(o)){if(o.length===0)continue;s.push(Oe(n,o,{style:"form",explode:!0,...e==null?void 0:e.array,allowReserved:(e==null?void 0:e.allowReserved)||!1}));continue}if(typeof o=="object"){s.push(_e(n,o,{style:"deepObject",explode:!0,...e==null?void 0:e.object,allowReserved:(e==null?void 0:e.allowReserved)||!1}));continue}s.push(G(n,o,e))}}return s.join("&")}}function zt(e,t){let r=e;for(const s of e.match(Bt)??[]){let n=s.substring(1,s.length-1),o=!1,a="simple";if(n.endsWith("*")&&(o=!0,n=n.substring(0,n.length-1)),n.startsWith(".")?(a="label",n=n.substring(1)):n.startsWith(";")&&(a="matrix",n=n.substring(1)),!t||t[n]===void 0||t[n]===null)continue;const c=t[n];if(Array.isArray(c)){r=r.replace(s,Oe(n,c,{style:a,explode:o}));continue}if(typeof c=="object"){r=r.replace(s,_e(n,c,{style:a,explode:o}));continue}if(a==="matrix"){r=r.replace(s,`;${G(n,c)}`);continue}r=r.replace(s,a==="label"?`.${encodeURIComponent(c)}`:encodeURIComponent(c))}return r}function Vt(e){return e instanceof FormData?e:JSON.stringify(e)}function Lt(e,t){var n;let r=`${t.baseUrl}${e}`;(n=t.params)!=null&&n.path&&(r=zt(r,t.params.path));let s=t.querySerializer(t.params.query??{});return s.startsWith("?")&&(s=s.substring(1)),s&&(r+=`?${s}`),r}function Ht(...e){const t=new Headers;for(const r of e){if(!r||typeof r!="object")continue;const s=r instanceof Headers?r.entries():Object.entries(r);for(const[n,o]of s)if(o===null)t.delete(n);else if(Array.isArray(o))for(const a of o)t.append(n,a);else o!==void 0&&t.set(n,o)}return t}function me(e){return e.endsWith("/")?e.substring(0,e.length-1):e}function Wt(e){const t=async({queryKey:[s,n,o],signal:a})=>{const c=s.toUpperCase(),u=e[c],{data:l,error:p}=await u(n,{signal:a,...o});if(p)throw p;return l},r=(s,n,...[o,a])=>({queryKey:[s,n,o],queryFn:t,...a});return{queryOptions:r,useQuery:(s,n,...[o,a,c])=>rt(r(s,n,o,a),c),useSuspenseQuery:(s,n,...[o,a,c])=>Re(r(s,n,o,a),c),useMutation:(s,n,o,a)=>K({mutationKey:[s,n],mutationFn:async c=>{const u=s.toUpperCase(),l=e[u],{data:p,error:d}=await l(n,c);if(d)throw d;return p},...o},a)}}const Pt={async onRequest({request:e}){const t=localStorage.getItem(ee);if(!t)throw window.location.replace(De.LOGIN),new Error("토큰이 존재하지 않습니다.");return e.headers.set("Authorization",`Bearer ${t}`),e}},Qt={async onError({error:e,request:t}){const r=e,s=r.config;if(!r.response||!s)throw new Error("에러가 발생했습니다.");const{status:n}=r.response;if(n===te.UNAUTHORIZED)try{const{data:o}=await nt();localStorage.setItem(ee,o.accessToken);const a={...Object.fromEntries(t.headers.entries()),Authorization:`Bearer ${o.accessToken}`},c=new Request(t,{headers:a}),u=await fetch(c);if(!u.ok)throw new re(u.status);return u}catch{throw localStorage.removeItem(ee),window.location.replace(De.LOGIN),new Error("토큰 갱신에 실패하였습니다.")}return Promise.reject(r)}},Yt={async onError({error:e}){const t=e;if(!t.response)throw t;ot(n=>{n.setLevel("error"),n.captureMessage(`[API Error] ${window.location.href}`)});const{data:r,status:s}=t.response;throw s>=te.INTERNAL_SERVER_ERROR?new re(te.INTERNAL_SERVER_ERROR,r.message):new re(s,r.message)}},qe="undefined",J=Me({baseUrl:qe,credentials:"include",headers:{"Content-Type":"application/json"}});Me({baseUrl:qe,credentials:"include",headers:{"Content-Type":"application/json"}});const Kt=Wt(J);J.use(Qt);J.use(Pt);J.use(Yt);const Gt=ye(e=>({teamId:Number(localStorage.getItem("teamId")),actions:{setTeamId:t=>e({teamId:t})}})),Jt=()=>Gt(e=>e.actions),Xt=()=>{var s,n;const{setTeamId:e}=Jt(),{data:t,isSuccess:r}=Kt.useQuery("get","/api/v1/teams",{select:o=>o.data});if(r&&!localStorage.getItem("teamId")){const o=(((s=t==null?void 0:t.data)==null?void 0:s.teams)&&((n=t==null?void 0:t.data.teams[0])==null?void 0:n.teamId))??0;return localStorage.setItem("teamId",o.toString()),e(o),o}return Number(localStorage.getItem("teamId"))},U=ye(e=>({isOpen:!1,contentType:null,modalData:null,actions:{openModal:(t,r=null)=>{e({isOpen:!0,contentType:t,modalData:r})},closeModal:()=>e({isOpen:!1,contentType:null,modalData:null})}})),Zt=()=>U(e=>e.isOpen),er=()=>U(e=>e.contentType),tr=()=>U(e=>e.modalData),rr=()=>U(t=>t.actions.openModal),ae=()=>U(t=>t.actions.closeModal),Ae=({isVisible:e})=>{const t=Xt(),{formData:r,reset:s}=se(),n=ae(),[o,a]=y.useState([]),[c,u]=y.useState({}),[l,p]=y.useState({}),[d,m]=y.useState(!0),{mutate:g}=Ft(t,"executive"),{mutate:E}=st(),{createToast:M}=ft();y.useEffect(()=>{const f=o.length===0||o.length>0&&Object.values(l).every(D=>D);m(f)},[l,o.length]);const h=f=>{a(D=>{const C=f.filter(x=>!D.some(q=>q.name===x.name&&q.size===x.size));return[...D,...C]}),m(!1)},b=f=>{const D=o.find(C=>C.name===f);D&&E({fileName:D.name},{onSuccess:()=>{a(C=>C.filter(q=>q.name!==f)),u(C=>{const x={...C};return delete x[f],x}),p(C=>{const x={...C};return delete x[f],x})}})};if(!e)return null;const k={name:r.blockName,color:jt(),startDate:le(r.startDate),endDate:le(r.endDate),blockType:r.blockType,files:c},T=()=>{g(k,{onSuccess:()=>{M("활동 블록이 생성되었습니다","success"),n(),s()}})};return w(v,{tag:"section",css:qt,children:[i(ne,{step:"upload",title:"블록 생성하기",info:"해당 블록에 업로드할 문서를 선택해주세요"}),w(v,{styles:{direction:"column",align:"flex-start",grow:"1",width:"100%",gap:"2.4rem"},children:[i(xe,{files:o,onFilesChange:h,setFileUrls:u,setUploadStatus:p}),i("div",{className:"scroll",css:Ot,children:o.map(f=>i(ve,{title:f.name,onDelete:()=>b(f.name),isUploading:!l[f.name]},f.name))})]}),i(j,{variant:"primary",size:"medium",css:{width:"32rem"},onClick:T,disabled:!d,children:"저장"})]})};Ae.__docgenInfo={description:"",methods:[],displayName:"UploadModal",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const Ne=()=>{const{step:e}=se();return w(Q,{children:[i(Ce,{isVisible:e===1}),i(Ae,{isVisible:e===2})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"BlockFlow"};const nr=()=>{const e=oe();return K({mutationFn:({teamId:r,blockId:s})=>Nt(r,s),onSuccess:()=>{e.invalidateQueries({queryKey:["timeBlock"]}),e.invalidateQueries({queryKey:["document"]})}})},or=async(e,t)=>await Y.delete(`/documents/team/${e}/document/${t}`),sr=()=>{const e=oe();return K({mutationFn:({teamId:r,documentId:s})=>or(r,s),onSuccess:()=>{e.invalidateQueries({queryKey:["document"]})}})},ar=I({"&:hover":{backgroundColor:S.colors.key_200},width:"15.8rem"}),ir=I({"&:hover":{backgroundColor:S.colors.blue_100},width:"15.8rem"}),Fe=()=>{const e=tr(),t=ae(),{mutate:r}=nr(),{mutate:s}=sr();if(!e)return null;const{teamId:n,itemId:o,itemType:a}=e,l=a==="block"?()=>{n&&o&&r({teamId:n,blockId:o},{onSuccess:()=>{t()}})}:()=>{n&&o&&s({teamId:n,documentId:o},{onSuccess:()=>{t()}})};return!a||!n||!o?null:w(v,{styles:{direction:"column",align:"center",justify:"center",paddingRight:"9.35rem",paddingLeft:"9.35rem"},children:[i(ge,{tag:"H5",css:{fontWeight:600},children:at[a.toUpperCase()]}),i(F,{tag:"body4",css:{marginTop:"1rem",fontWeight:400},children:it[a.toUpperCase()]}),w(v,{styles:{direction:"row",align:"center",justify:"center",gap:"0.8rem",marginTop:"2.4rem"},children:[i(j,{variant:"secondary",size:"large",onClick:t,css:ir,children:"취소"}),i(j,{variant:"primary",size:"large",onClick:l,css:ar,children:"삭제"})]})]})};Fe.__docgenInfo={description:"",methods:[],displayName:"DeleteModal"};const cr=async()=>(await Y.get("/teams/category")).data,lr=(e=!0)=>Re({queryKey:["category"],queryFn:()=>cr(),select:t=>{var s;const r=((s=t==null?void 0:t.data)==null?void 0:s.categories)||[];return e?r:r.filter(n=>n!=="전체")}}),je=({isVisible:e})=>{const{isOpen:t,close:r,toggle:s}=yt(),{setFormData:n,nextStep:o}=be(),a=gt(r),[c,u]=y.useState(""),{data:l}=lr(!1);if(y.useEffect(()=>{const g=E=>{var h;if(!a.current||!(E.target instanceof HTMLElement))return;!a.current.contains(E.target)&&!((h=E.target)!=null&&h.className.includes("select-container"))&&(r==null||r())};return t?window.addEventListener("mousedown",g):window.removeEventListener("mousedown",g),()=>{window.removeEventListener("mousedown",g)}},[t,r,a]),!e)return null;const p=g=>{u(g),n({category:g}),r==null||r()},d=()=>{o()},m=c.trim().length>0;return w(v,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:ct,children:[i(ne,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),i("div",{css:{width:"32rem",marginTop:"2.4rem"},ref:a,children:i(Ve,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:t,onTrigger:s,onSelect:p,options:l.map(g=>({value:g})),className:"select-container"})}),i(j,{variant:"primary",size:"medium",css:lt(m),disabled:!m,onClick:d,children:"다음"})]})};je.__docgenInfo={description:"",methods:[],displayName:"WorkSpaceCategory",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""}}};const Be=()=>{const{step:e}=be();return w(Q,{children:[i(dt,{isVisible:e==1}),i(je,{isVisible:e==2}),i(ut,{isVisible:e==3}),i(mt,{isVisible:e==4})]})};Be.__docgenInfo={description:"",methods:[],displayName:"WorkSpaceFlow"};const ie=()=>{const e=Zt(),t=er(),r=ae(),s=()=>{switch(t){case"create-workspace":return i(pt,{children:i(Be,{})});case"create-block":return i(Ie,{children:i(Ne,{})});case"delete":return i(Fe,{});default:return null}};return!e||!t?null:i(Le,{isOpen:e,onClose:r,children:s()})};ie.__docgenInfo={description:"",methods:[],displayName:"ModalContainer"};const Rr={title:"Shared/DeleteModal",component:ie,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},W={render:()=>{const e=rr();return w(Q,{children:[i("button",{onClick:()=>e("delete",{teamId:1,itemId:1,itemType:"block"}),children:"Open Delete Modal"}),i(ie,{})]})}};var pe,fe,he;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const xr=["Delete"];export{W as Delete,xr as __namedExportsOrder,Rr as default};
