import{c as i,j as v,a as n}from"./emotion-react.browser.esm-jySFJa0C.js";import{r as S}from"./index-C73pvn4u.js";import{t as o}from"./theme-CkGtBuFl.js";import"./iframe-BHwNxDEU.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-CzT8XOfQ.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="311fe766-fda3-447b-9ee6-d6dba59de1e8",e._sentryDebugIdIdentifier="sentry-dbid-311fe766-fda3-447b-9ee6-d6dba59de1e8")}catch{}})();const C=i({display:"flex",gap:"0.7rem",cursor:"pointer"}),w=i({position:"relative",appearance:"none",MozAppearance:"none",WebkitAppearance:"none",width:"1.5rem",height:"1.5rem",border:`1.5px solid ${o.colors.gray_400}`,borderRadius:"50%",backgroundColor:o.colors.gray_100,cursor:"pointer",transition:"0.2s ease-in-out","&:checked":{borderColor:o.colors.key_500},"&:checked::after":{position:"absolute",top:"50%",left:"50%",width:"0.7rem",height:"0.7rem",margin:"0 auto",borderRadius:"50%",content:'""',backgroundColor:o.colors.key_500,transform:"translate(-50%, -50%)"},"& + label":{cursor:"pointer",...o.text.body06}}),_=i({color:o.colors.black,whiteSpace:"nowrap"}),x=i({display:"flex",gap:"0.8rem"}),b=({label:e,value:t,id:a,checked:r,...c})=>v("div",{role:"radio","aria-label":"radio-button","aria-checked":r,tabIndex:0,css:C,children:[n("input",{id:a,type:"radio",value:t,checked:r,css:w,...c}),n("label",{htmlFor:a,css:_,children:e})]});b.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};const l=({options:e,onChange:t,value:a})=>{const r=u=>{const s=u.target.value;t({target:{value:s}})};return n("div",{role:"radiogroup",css:x,children:e.map(({label:u,name:s,value:p},f)=>{const m=`${s}-${f}`;return n(b,{id:m,label:u,name:s,value:p,onChange:r,checked:p===a},m)})})};l.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioProps"}],raw:"RadioProps[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};const B={title:"Common/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d={decorators:[e=>n("div",{css:{width:"24rem"},children:n(e,{})})],render:()=>{const[e,t]=S.useState("작성 완료"),a=r=>{t(r)};return n("div",{css:{display:"flex",gap:"0.4rem"},children:n(l,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:r=>a(r.target.value),value:e})})}};var g,h,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const G=["Default"];export{d as Default,G as __namedExportsOrder,B as default};
