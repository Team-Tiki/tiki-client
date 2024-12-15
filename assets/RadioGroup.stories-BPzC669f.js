import{a}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{z as l}from"./index-Bj-ff5e2.js";import{r as i}from"./index-BeH7IU5F.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./index-2-ic2sVG.js";import"./_commonjsHelpers-Y38rOxJs.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="999a2800-5e98-489b-aca1-d47f1155509e",e._sentryDebugIdIdentifier="sentry-dbid-999a2800-5e98-489b-aca1-d47f1155509e")}catch{}})();const h={title:"Common/RadioGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"]},n={decorators:[e=>a("div",{css:{width:"24rem"},children:a(e,{})})],render:()=>{const[e,t]=i.useState("작성 완료"),s=r=>{t(r)};return a("div",{css:{display:"flex",gap:"0.4rem"},children:a(l,{options:[{label:"작성 완료",value:"작성 완료",name:"note"},{label:"작성 미완료",value:"작성 미완료",name:"note"}],onChange:r=>s(r.target.value),value:e})})}};var o,d,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
