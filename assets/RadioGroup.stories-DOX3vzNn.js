import{c as d,j as f,a as n}from"./emotion-react.browser.esm-BcByJIXW.js";import{r as S}from"./index-zHYd3XK7.js";import{t as u}from"./theme-BXWNzlh0.js";import"./iframe-BJ3_o-Sw.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-BWJFOOWu.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2009cdb0-1d9b-425c-9eeb-e4f5922dd9db",e._sentryDebugIdIdentifier="sentry-dbid-2009cdb0-1d9b-425c-9eeb-e4f5922dd9db")}catch{}})();const C=d({display:"flex",gap:"0.4rem",cursor:"pointer"}),w=d({"& + label":{cursor:"pointer",transition:"0.2s ease-in-out",...u.text.body06},accentColor:u.colors.key_500,cursor:"pointer"}),I=d({color:u.colors.black,whiteSpace:"nowrap"}),x=d({display:"flex",gap:"0.8rem"}),b=({label:e,value:t,id:r,checked:a,...c})=>f("div",{role:"radio","aria-label":"radio-button","aria-checked":a,tabIndex:0,css:C,children:[n("input",{id:r,type:"radio",value:t,css:w,...c}),n("label",{htmlFor:r,css:I,children:e})]});b.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};const l=({options:e,onChange:t,value:r})=>{const a=i=>{const o=i.target.value;t({target:{value:o}})};return n("div",{role:"radiogroup",css:x,children:e.map(({label:i,value:o,name:p},v)=>{const m=`${p}-${v}`;return n(b,{id:m,label:i,name:p,value:o,onChange:a,checked:r===o},m)})})};l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};const B={title:"Common/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"]},s={decorators:[e=>n("div",{css:{width:"24rem"},children:n(e,{})})],render:()=>{const[e,t]=S.useState("작성 완료"),r=a=>{t(a)};return n("div",{css:{display:"flex",gap:"0.4rem"},children:n(l,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:a=>r(a.target.value),value:e})})}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: () => {
    const [status, setStatus] = useState('작성 완료');
    const handleChangeStatus = (value: string) => {
      setStatus(value);
    };
    return <div css={{
      display: 'flex',
      gap: '0.4rem'
    }}>
        <RadioGroup options={[{
        label: '작성 완료',
        value: '작성 완료',
        name: 'note'
      }, {
        label: '작성 미완료',
        value: '작성 미완료',
        name: 'note'
      }]} onChange={e => handleChangeStatus(e.target.value)} value={status} />
      </div>;
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const G=["Default"];export{s as Default,G as __namedExportsOrder,B as default};
