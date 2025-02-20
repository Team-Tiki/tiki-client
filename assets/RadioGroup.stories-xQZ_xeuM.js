import{a as n}from"./emotion-react-jsx-runtime.browser.esm-OWYbjp3Q.js";import{Z as l}from"./index-CpJVtDmX.js";import{r as i}from"./index-CFeq-XFm.js";import"./iframe-B6WLdoFC.js";import"./jsx-runtime-6z6K0cwx.js";import"./index-CvxLPAJY.js";import"./_commonjsHelpers-CIBA--Wd.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4bf5090f-3ff9-46a1-b829-aee40245c3eb",e._sentryDebugIdIdentifier="sentry-dbid-4bf5090f-3ff9-46a1-b829-aee40245c3eb")}catch{}})();const h={title:"Common/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"]},a={decorators:[e=>n("div",{css:{width:"24rem"},children:n(e,{})})],render:()=>{const[e,t]=i.useState("작성 완료"),s=r=>{t(r)};return n("div",{css:{display:"flex",gap:"0.4rem"},children:n(l,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:r=>s(r.target.value),value:e})})}};var o,d,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,h as default};
