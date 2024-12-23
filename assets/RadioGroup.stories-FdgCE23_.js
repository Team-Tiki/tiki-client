import{a}from"./emotion-react-jsx-runtime.browser.esm-D5nmPLjQ.js";import{q as c}from"./index-DkpI3aA6.js";import{r as l}from"./index-BduvBmAW.js";import"./iframe-B8P7X-_7.js";import"./jsx-runtime-DpmpPDAD.js";import"./index-BqWoICCD.js";import"./_commonjsHelpers-CmZWRUSM.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="caaab89c-6d97-445c-8a69-9dca41467b4c",e._sentryDebugIdIdentifier="sentry-dbid-caaab89c-6d97-445c-8a69-9dca41467b4c")}catch{}})();const h={title:"Common/RadioGroup",component:c,parameters:{layout:"centered"},tags:["autodocs"]},n={decorators:[e=>a("div",{css:{width:"24rem"},children:a(e,{})})],render:()=>{const[e,t]=l.useState("작성 완료"),s=r=>{t(r)};return a("div",{css:{display:"flex",gap:"0.4rem"},children:a(c,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:r=>s(r.target.value),value:e})})}};var o,d,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,h as default};
