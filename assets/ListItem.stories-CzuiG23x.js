import{c as d,j as i,a as l}from"./emotion-react.browser.esm-CbDqvypX.js";import{r as n}from"./index-BWdrhEOs.js";import{F as b}from"./Flex-DKBDblNj.js";import{T as D}from"./Tag-CbZbjFgO.js";import{T as p}from"./Text-C6zFcBjj.js";import{t as e}from"./theme-CXhkftiK.js";import"./iframe-CSt5x-6S.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-CVVsbAmp.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="ccdaa339-58ff-4456-b1e1-64a49257c0c2",t._sentryDebugIdIdentifier="sentry-dbid-ccdaa339-58ff-4456-b1e1-64a49257c0c2")}catch{}})();const S=t=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("mask",{id:"path-1-inside-1_376_7126",fill:"white"},n.createElement("rect",{x:2,y:3,width:12,height:11,rx:1})),n.createElement("rect",{x:2,y:3,width:12,height:11,rx:1,stroke:"#525866",strokeWidth:2.4,mask:"url(#path-1-inside-1_376_7126)"}),n.createElement("path",{d:"M2.5 6H13.5",stroke:"#525866",strokeWidth:1.2}),n.createElement("path",{d:"M5.1 2C5.1 1.66863 4.83137 1.4 4.5 1.4C4.16863 1.4 3.9 1.66863 3.9 2H5.1ZM5.1 3.5V2H3.9V3.5H5.1Z",fill:"#525866"}),n.createElement("path",{d:"M12.1 2C12.1 1.66863 11.8314 1.4 11.5 1.4C11.1686 1.4 10.9 1.66863 10.9 2H12.1ZM12.1 3.5V2H10.9V3.5H12.1Z",fill:"#525866"}),n.createElement("rect",{x:4,y:7,width:3,height:2,rx:.6,fill:"#525866"})),B=d({flexDirection:"column",alignItems:"center",width:"100%",padding:"1.6rem",backgroundColor:e.colors.gray_100,borderRadius:"8px",":hover":{backgroundColor:e.colors.gray_200,transition:"all ease 0.5s"}}),H=d({width:"100%",paddingBottom:"0.6rem",color:e.colors.black}),q=d({width:"100%",paddingBottom:"1.6rem",color:e.colors.gray_800,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),M=d({justifyContent:"space-between",alignItems:"center",width:"100%",overflow:"hidden"}),f=d({alignItems:"center",gap:"0.4rem"}),V=(t,a,o)=>{let c=0;const g=[];for(const m of t){const r=document.createElement("span");r.style.display="inline-block",r.style.visibility="hidden",r.style.position="absolute",r.innerText=m.content,document.body.appendChild(r);const s=r.offsetWidth;if(document.body.removeChild(r),c+s*2+o>a)break;c+=s*2+o,g.push(m)}return g},Z=t=>{switch(t){case"#FFE6E8":return e.colors.red_200;case"#F8E2CB":return e.colors.yellow_200;case"#C4F2E5":return e.colors.green_200;case"#DCD8FA":return e.colors.purple_200;case"#E2E8F8":return e.colors.blue_200;case"#F8E1F5":return e.colors.pink_200;case"#D3EFFA":return e.colors.sky_200;default:return e.colors.white}},k=({title:t,content:a,date:o,tags:c=[],...g})=>{const m=n.useRef(null),r=V(c,210,4);return i(b,{tag:"li",css:B,...g,children:[l(p,{tag:"body6",css:H,children:t}),l(p,{tag:"body8",css:q,children:a}),i(b,{css:M,children:[i("div",{ref:m,css:[f,{display:"flex",overflow:"hidden"}],children:[r.map(s=>l(D,{css:{color:Z(s.bgColor),whiteSpace:"nowrap"},bgColor:s.bgColor,children:s.content},s.tagId)),r.length<c.length&&i(p,{tag:"body8",css:{color:e.colors.gray_500},children:["+",c.length-r.length]})]}),i(b,{css:f,children:[l(S,{width:16,height:16}),l(p,{tag:"body8",css:{color:e.colors.gray_800},children:`${o.getFullYear()}.${o.getMonth()+1}.${o.getDate()}`})]})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"Date"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tagId: number;
  content: string;
  bgColor: string;
}`,signature:{properties:[{key:"tagId",value:{name:"number",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"bgColor",value:{name:"string",required:!0}}]}}],raw:"ListTag[]"},description:"",defaultValue:{value:"[]",computed:!1}}},composes:["HTMLAttributes"]};const J={title:"page/entree/ListItem",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:{type:"text"}},content:{control:{type:"text"}},date:{control:!1},tags:{control:!1}},args:{title:"3차 정기 회의",content:"티키의 3번째 정기 회의록입니다. 티키의 3번째 정기 회의록입니다.",date:new Date}},u={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"},{tagId:1,content:"study",bgColor:"#F8E2CB"},{tagId:2,content:"meeting",bgColor:"#FFE6E8"},{tagId:3,content:"study",bgColor:"#F8E2CB"},{tagId:4,content:"meeting",bgColor:"#FFE6E8"},{tagId:5,content:"study",bgColor:"#F8E2CB"}]},argTypes:{}},y={args:{},argTypes:{}},h={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"}]},argTypes:{}};var E,C,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var w,I,_;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  argTypes: {}
}`,...(_=(I=y.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var x,T,v;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tags: [{
      tagId: 0,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }]
  },
  argTypes: {}
}`,...(v=(T=h.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const K=["Default","ZeroFile","SomeFile"];export{u as Default,h as SomeFile,y as ZeroFile,K as __namedExportsOrder,J as default};
