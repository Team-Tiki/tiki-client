import{a as r}from"./emotion-react-jsx-runtime.browser.esm-Pb5KDtxz.js";import{_ as s}from"./index-BGnltjbx.js";import{r as c}from"./index-adx-a8a8.js";import"./iframe-B9iP3CXE.js";import"./jsx-runtime-CrXwDwH6.js";import"./index-BcbDYR9r.js";import"./_commonjsHelpers-CAzaRoFM.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fce14006-32f0-4fa5-889a-b0272c36fec8",e._sentryDebugIdIdentifier="sentry-dbid-fce14006-32f0-4fa5-889a-b0272c36fec8")}catch{}})();const F={title:"Common/Select",component:s,parameters:{layout:"centered"},args:{options:[{value:"option 1"},{value:"option 2"},{value:"최주용 남다은 이채원 김규홍 정보운"}]}},n={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:e=>{const[t,a]=c.useState(""),o=l=>{a(l)};return r(s,{"aria-label":`선택된 아이템: ${t}`,variant:"default",...e,placeholder:"Primary Select",onSelect:o})}},i={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:e=>{const[t,a]=c.useState(""),o=B=>{a(B)},l=[{value:"Option 1",description:"WEB",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},{value:"Option 2",description:"SERVER",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}];return r(s,{"aria-label":`선택된 아이템: ${t}`,label:"아웃라인 셀렉트",variant:"user",...e,placeholder:"Outline Select",onSelect:o,options:l})}},d={render:e=>{const[t,a]=c.useState(""),o=l=>{a(l)};return r(s,{"aria-label":`선택된 아이템: ${t}`,variant:"outline",...e,placeholder:"Scroll Select",onSelect:o})}},p={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:()=>{const[e,t]=c.useState(""),a=l=>{t(l)},o=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"},{value:"Option 7"},{value:"Option 8"},{value:"Option 9"}];return r(s,{"aria-label":`선택된 아이템: ${e}`,variant:"outline",options:o,placeholder:"최근 업로드 순",onSelect:a})}},u={decorators:[e=>r("div",{css:{width:"12rem"},children:r(e,{})})],render:()=>{const[e,t]=c.useState(""),a=l=>{t(l)},o=[{value:"최근 정렬 순"},{value:"과거 정렬 순대를 먹을래 말래"}];return r(s,{"aria-label":`선택된 아이템: ${e}`,variant:"option",options:o,placeholder:"최근 업로드 순",onSelect:a})}},S={render:e=>{const[t,a]=c.useState(""),o=l=>{a(l)};return r(s,{"aria-label":`선택된 아이템: ${t}`,variant:"disabled",...e,placeholder:"Scroll Select",onSelect:o})}};var m,h,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="default" {...args} placeholder="Primary Select" onSelect={handleSelect} />;
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,b,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    const options = [{
      value: 'Option 1',
      description: 'WEB',
      profileUrl: 'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
    }, {
      value: 'Option 2',
      description: 'SERVER',
      profileUrl: 'https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
    }];
    return <Select aria-label={\`선택된 아이템: \${selected}\`} label="아웃라인 셀렉트" variant="user" {...args} placeholder="Outline Select" onSelect={handleSelect} options={options} />;
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,O,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="outline" {...args} placeholder="Scroll Select" onSelect={handleSelect} />;
  }
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var y,H,M;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: () => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    const options = [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }, {
      value: 'Option 6'
    }, {
      value: 'Option 7'
    }, {
      value: 'Option 8'
    }, {
      value: 'Option 9'
    }];
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="outline" options={options} placeholder="최근 업로드 순" onSelect={handleSelect} />;
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Z,D,$;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '12rem'
  }}>
        <Story />
      </div>],
  render: () => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    const options = [{
      value: '최근 정렬 순'
    }, {
      value: '과거 정렬 순대를 먹을래 말래'
    }];
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="option" options={options} placeholder="최근 업로드 순" onSelect={handleSelect} />;
  }
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var W,E,_;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="disabled" {...args} placeholder="Scroll Select" onSelect={handleSelect} />;
  }
}`,...(_=(E=S.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const G=["Default","UserList","Outline","ScrollOption","OptionList","Disabled"];export{n as Default,S as Disabled,u as OptionList,d as Outline,p as ScrollOption,i as UserList,G as __namedExportsOrder,F as default};
