import{a as n}from"./emotion-react-jsx-runtime.browser.esm-C_TImuFh.js";import{N as l}from"./index-CUSPuPr7.js";import{r as i}from"./index-cg9amE3T.js";import"./iframe-CTrcVWC9.js";import"./jsx-runtime-DK3Y88JG.js";import"./index-CVtNuusm.js";import"./_commonjsHelpers-BIiE1tw9.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3afc9391-8682-4340-a338-df41f715bb94",e._sentryDebugIdIdentifier="sentry-dbid-3afc9391-8682-4340-a338-df41f715bb94")}catch{}})();const h={title:"Common/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"]},a={decorators:[e=>n("div",{css:{width:"24rem"},children:n(e,{})})],render:()=>{const[e,t]=i.useState("작성 완료"),s=r=>{t(r)};return n("div",{css:{display:"flex",gap:"0.4rem"},children:n(l,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:r=>s(r.target.value),value:e})})}};var o,d,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
