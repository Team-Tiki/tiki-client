import{j as d,a as g}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{A as D}from"./index-CLsVEhIN.js";import{h as e,H as u,V as b,W as S}from"./index-Bj-ff5e2.js";import{r as k}from"./index-BeH7IU5F.js";import{c as l}from"./emotion-react.browser.esm-xntO1MbF.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./index-2-ic2sVG.js";import"./_commonjsHelpers-Y38rOxJs.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="1eb5970b-d7fe-4745-bb83-8b086005ac37",t._sentryDebugIdIdentifier="sentry-dbid-1eb5970b-d7fe-4745-bb83-8b086005ac37")}catch{}})();const B=t=>{switch(t){case"#FFE6E8":return e.colors.red_200;case"#F8E2CB":return e.colors.yellow_200;case"#C4F2E5":return e.colors.green_200;case"#DCD8FA":return e.colors.purple_200;case"#E2E8F8":return e.colors.blue_200;case"#F8E1F5":return e.colors.pink_200;case"#D3EFFA":return e.colors.sky_200;default:return e.colors.white}},q=l({flexDirection:"column",alignItems:"center",width:"100%",padding:"1.6rem",backgroundColor:e.colors.gray_100,borderRadius:"8px",cursor:"pointer",":hover":{backgroundColor:e.colors.gray_200,transition:"all ease 0.5s"}}),W=l({width:"100%",paddingBottom:"0.6rem",color:e.colors.black}),j=l({width:"100%",paddingBottom:"1.6rem",color:e.colors.gray_800,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),A=l({justifyContent:"space-between",alignItems:"center",width:"100%",overflow:"hidden"}),f=l({alignItems:"center",gap:"0.4rem"}),L=t=>l({maxWidth:"18rem",color:B(t),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),V=(t,s,o)=>{let a=0;const c=[];for(const i of t){const r=document.createElement("span");r.style.display="inline-block",r.style.visibility="hidden",r.style.position="absolute",r.innerText=i.content,document.body.appendChild(r);const n=r.offsetWidth;if(document.body.removeChild(r),a+n*2+o>s){i.tagId==0&&c.push(i);break}a+=n*2+o,c.push(i)}return c},x=({title:t,content:s,date:o,tags:a=[],...c})=>{const i=k.useRef(null),r=V(a,210,4);return d(b,{tag:"li",css:q,...c,children:[g(u,{tag:"body6",css:W,children:t}),g(u,{tag:"body8",css:j,children:s}),d(b,{css:A,children:[d("div",{ref:i,css:[f,{display:"flex",overflow:"hidden"}],children:[r.map(n=>g(S,{css:L(n.bgColor),bgColor:n.bgColor,children:n.content},n.tagId)),r.length<a.length&&d(u,{tag:"body8",css:{color:e.colors.gray_500},children:["+",a.length-r.length]})]}),d(b,{css:f,children:[g(D,{width:16,height:16}),g(u,{tag:"body8",css:{color:e.colors.gray_800},children:`${o.getFullYear()}.${o.getMonth()+1}.${o.getDate()}`})]})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"Date"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tagId: number;
  content: string;
  bgColor: string;
}`,signature:{properties:[{key:"tagId",value:{name:"number",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"bgColor",value:{name:"string",required:!0}}]}}],raw:"ListTag[]"},description:"",defaultValue:{value:"[]",computed:!1}}},composes:["HTMLAttributes"]};const K={title:"page/entree/ListItem",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:{type:"text"}},content:{control:{type:"text"}},date:{control:!1},tags:{control:!1}},args:{title:"3차 정기 회의",content:"티키의 3번째 정기 회의록입니다. 티키의 3번째 정기 회의록입니다.",date:new Date}},p={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"},{tagId:1,content:"study",bgColor:"#F8E2CB"},{tagId:2,content:"meeting",bgColor:"#FFE6E8"},{tagId:3,content:"study",bgColor:"#F8E2CB"},{tagId:4,content:"meeting",bgColor:"#FFE6E8"},{tagId:5,content:"study",bgColor:"#F8E2CB"}]},argTypes:{}},m={args:{},argTypes:{}},y={args:{tags:[{tagId:0,content:"meeting",bgColor:"#FFE6E8"}]},argTypes:{}};var h,C,F;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var E,I,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  argTypes: {}
}`,...(w=(I=m.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var _,v,T;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tags: [{
      tagId: 0,
      content: 'meeting',
      bgColor: '#FFE6E8'
    }]
  },
  argTypes: {}
}`,...(T=(v=y.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const P=["Default","ZeroFile","SomeFile"];export{p as Default,y as SomeFile,m as ZeroFile,P as __namedExportsOrder,K as default};
