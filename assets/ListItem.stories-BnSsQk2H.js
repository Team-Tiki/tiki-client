import{c,j as g,a as m}from"./emotion-react.browser.esm-jro6eB32.js";import{r as o}from"./index-BETB8xs-.js";import{F as b}from"./Flex-DsiuXi3l.js";import{T as S}from"./Tag-DxO127QM.js";import{T as p}from"./Text-DzBOMJFF.js";import{t}from"./theme-DQKz66Qf.js";import"./iframe-hcMr1ntz.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-2UnFNFTw.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="a6510a08-fa83-49da-90b7-27e275a11256",e._sentryDebugIdIdentifier="sentry-dbid-a6510a08-fa83-49da-90b7-27e275a11256")}catch{}})();const D=e=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("mask",{id:"path-1-inside-1_376_7126",fill:"white"},o.createElement("rect",{x:2,y:3,width:12,height:11,rx:1})),o.createElement("rect",{x:2,y:3,width:12,height:11,rx:1,stroke:"#525866",strokeWidth:2.4,mask:"url(#path-1-inside-1_376_7126)"}),o.createElement("path",{d:"M2.5 6H13.5",stroke:"#525866",strokeWidth:1.2}),o.createElement("path",{d:"M5.1 2C5.1 1.66863 4.83137 1.4 4.5 1.4C4.16863 1.4 3.9 1.66863 3.9 2H5.1ZM5.1 3.5V2H3.9V3.5H5.1Z",fill:"#525866"}),o.createElement("path",{d:"M12.1 2C12.1 1.66863 11.8314 1.4 11.5 1.4C11.1686 1.4 10.9 1.66863 10.9 2H12.1ZM12.1 3.5V2H10.9V3.5H12.1Z",fill:"#525866"}),o.createElement("rect",{x:4,y:7,width:3,height:2,rx:.6,fill:"#525866"})),B=e=>{switch(e){case"#FFE6E8":return t.colors.red_200;case"#F8E2CB":return t.colors.yellow_200;case"#C4F2E5":return t.colors.green_200;case"#DCD8FA":return t.colors.purple_200;case"#E2E8F8":return t.colors.blue_200;case"#F8E1F5":return t.colors.pink_200;case"#D3EFFA":return t.colors.sky_200;default:return t.colors.white}},H=c({flexDirection:"column",alignItems:"center",width:"100%",padding:"1.6rem",backgroundColor:t.colors.gray_100,borderRadius:"8px",cursor:"pointer",":hover":{backgroundColor:t.colors.gray_200,transition:"all ease 0.5s"}}),q=c({width:"100%",paddingBottom:"0.6rem",color:t.colors.black}),M=c({width:"100%",paddingBottom:"1.6rem",color:t.colors.gray_800,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),V=c({justifyContent:"space-between",alignItems:"center",width:"100%",overflow:"hidden"}),f=c({alignItems:"center",gap:"0.4rem"}),W=e=>c({maxWidth:"18rem",color:B(e),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),Z=(e,a,n)=>{let i=0;const d=[];for(const l of e){const r=document.createElement("span");r.style.display="inline-block",r.style.visibility="hidden",r.style.position="absolute",r.innerText=l.content,document.body.appendChild(r);const s=r.offsetWidth;if(document.body.removeChild(r),i+s*2+n>a){l.tagId==0&&d.push(l);break}i+=s*2+n,d.push(l)}return d},k=({title:e,content:a,date:n,tags:i=[],...d})=>{const l=o.useRef(null),r=Z(i,210,4);return g(b,{tag:"li",css:H,...d,children:[m(p,{tag:"body6",css:q,children:e}),m(p,{tag:"body8",css:M,children:a}),g(b,{css:V,children:[g("div",{ref:l,css:[f,{display:"flex",overflow:"hidden"}],children:[r.map(s=>m(S,{css:W(s.bgColor),bgColor:s.bgColor,children:s.content},s.tagId)),r.length<i.length&&g(p,{tag:"body8",css:{color:t.colors.gray_500},children:["+",i.length-r.length]})]}),g(b,{css:f,children:[m(D,{width:16,height:16}),m(p,{tag:"body8",css:{color:t.colors.gray_800},children:`${n.getFullYear()}.${n.getMonth()+1}.${n.getDate()}`})]})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"Date"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tagId: number;
  content: string;
  bgColor: string;
}`,signature:{properties:[{key:"tagId",value:{name:"number",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"bgColor",value:{name:"string",required:!0}}]}}],raw:"ListTag[]"},description:"",defaultValue:{value:"[]",computed:!1}}},composes:["HTMLAttributes"]};const K={title:"page/entree/ListItem",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:{type:"text"}},content:{control:{type:"text"}},date:{control:!1},tags:{control:!1}},args:{title:"3차 정기 회의",content:"티키의 3번째 정기 회의록입니다. 티키의 3번째 정기 회의록입니다.",date:new Date}},u={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"},{tagId:1,content:"study",bgColor:"#F8E2CB"},{tagId:2,content:"meeting",bgColor:"#FFE6E8"},{tagId:3,content:"study",bgColor:"#F8E2CB"},{tagId:4,content:"meeting",bgColor:"#FFE6E8"},{tagId:5,content:"study",bgColor:"#F8E2CB"}]},argTypes:{}},y={args:{},argTypes:{}},h={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"}]},argTypes:{}};var E,C,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tags: [{
      tagId: 0,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }, {
      tagId: 1,
      content: 'study',
      bgColor: '#F8E2CB'
    }, {
      tagId: 2,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }, {
      tagId: 3,
      content: 'study',
      bgColor: '#F8E2CB'
    }, {
      tagId: 4,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }, {
      tagId: 5,
      content: 'study',
      bgColor: '#F8E2CB'
    }]
  },
  argTypes: {}
}`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var w,I,x;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  argTypes: {}
}`,...(x=(I=y.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var _,v,T;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tags: [{
      tagId: 0,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }]
  },
  argTypes: {}
}`,...(T=(v=h.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const P=["Default","ZeroFile","SomeFile"];export{u as Default,h as SomeFile,y as ZeroFile,P as __namedExportsOrder,K as default};
