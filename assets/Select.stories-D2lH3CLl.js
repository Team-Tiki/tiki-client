import{a as s}from"./emotion-react-jsx-runtime.browser.esm-VgK4xylL.js";import{v as d}from"./index-vMLQy76F.js";import{r as p}from"./index-DXMui2nR.js";import"./index-CmcVLIY-.js";import{u}from"./useOutsideClick-ZBktmLkE.js";import{u as S}from"./useOverlay-DtUWaB7X.js";import"./iframe-Y4SLZ6JJ.js";import"./jsx-runtime-kRHs-5wk.js";import"./_commonjsHelpers-Bsref0_6.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e2a5965b-7f03-4767-bdf4-a7b2b116c563",e._sentryDebugIdIdentifier="sentry-dbid-e2a5965b-7f03-4767-bdf4-a7b2b116c563")}catch{}})();const P={title:"Common/Select",component:d,parameters:{layout:"centered"},args:{options:[{value:"option 1"},{value:"option 2"},{value:"최주용 남다은 이채원 김규홍 정보운"}]}},g={decorators:[e=>s("div",{css:{width:"24rem"},children:s(e,{})})],render:e=>{const{isOpen:t,close:o,toggle:r}=S(),l=u(o),[n,c]=p.useState(""),a=i=>{c(i),o()};return s(d,{"aria-label":`선택된 아이템: ${n}`,variant:"default",...e,ref:l,isOpen:t,placeholder:"Primary Select",onTrigger:r,onSelect:a})}},m={decorators:[e=>s("div",{css:{width:"24rem"},children:s(e,{})})],render:e=>{const{isOpen:t,close:o,toggle:r}=S(),l=u(o),[n,c]=p.useState(""),a=_=>{c(_),o()},i=[{value:"Option 1",description:"WEB",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},{value:"Option 2",description:"SERVER",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}];return s(d,{"aria-label":`선택된 아이템: ${n}`,label:"아웃라인 셀렉트",variant:"user",...e,ref:l,isOpen:t,placeholder:"Outline Select",onTrigger:r,onSelect:a,options:i})}},f={render:e=>{const{isOpen:t,close:o,toggle:r}=S(),l=u(o),[n,c]=p.useState(""),a=i=>{c(i),o()};return s(d,{"aria-label":`선택된 아이템: ${n}`,variant:"outline",...e,ref:l,isOpen:t,placeholder:"Scroll Select",onTrigger:r,onSelect:a})}},v={decorators:[e=>s("div",{css:{width:"24rem"},children:s(e,{})})],render:()=>{const{isOpen:e,close:t,toggle:o}=S(),[r,l]=p.useState(""),n=u(t),c=i=>{l(i),t()},a=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"},{value:"Option 7"},{value:"Option 8"},{value:"Option 9"}];return s(d,{"aria-label":`선택된 아이템: ${r}`,variant:"outline",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>o(),onSelect:c})}},O={decorators:[e=>s("div",{css:{width:"12rem"},children:s(e,{})})],render:()=>{const{isOpen:e,close:t,toggle:o}=S(),[r,l]=p.useState(""),n=u(t),c=i=>{l(i),t()},a=[{value:"최근 정렬 순"},{value:"과거 정렬 순대를 먹을래 말래"}];return s(d,{"aria-label":`선택된 아이템: ${r}`,variant:"option",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>o(),onSelect:c})}},h={render:e=>{const{isOpen:t,close:o,toggle:r}=S(),l=u(o),[n,c]=p.useState(""),a=i=>{c(i),o()};return s(d,{"aria-label":`선택된 아이템: ${n}`,variant:"disabled",...e,ref:l,isOpen:t,placeholder:"Scroll Select",onTrigger:r,onSelect:a})}};var b,x,w;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="default" {...args} ref={ref} isOpen={isOpen} placeholder="Primary Select" onTrigger={toggle} onSelect={handleSelect} />;
  }
}`,...(w=(x=g.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,H,M;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
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
    return <Select aria-label={\`선택된 아이템: \${selected}\`} label="아웃라인 셀렉트" variant="user" {...args} ref={ref} isOpen={isOpen} placeholder="Outline Select" onTrigger={toggle} onSelect={handleSelect} options={options} />;
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Z,D,T;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="outline" {...args} ref={ref} isOpen={isOpen} placeholder="Scroll Select" onTrigger={toggle} onSelect={handleSelect} />;
  }
}`,...(T=(D=f.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var E,C,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '24rem'
  }}>
        <Story />
      </div>],
  render: () => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
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
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="outline" options={options} ref={ref} placeholder="최근 업로드 순" isOpen={isOpen} onTrigger={() => toggle()} onSelect={handleSelect} />;
  }
}`,...($=(C=v.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var L,W,k;O.parameters={...O.parameters,docs:{...(L=O.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div css={{
    width: '12rem'
  }}>
        <Story />
      </div>],
  render: () => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const [selected, setSelected] = useState('');
    const ref = useOutsideClick<HTMLDivElement>(close);
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
    };
    const options = [{
      value: '최근 정렬 순'
    }, {
      value: '과거 정렬 순대를 먹을래 말래'
    }];
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="option" options={options} ref={ref} placeholder="최근 업로드 순" isOpen={isOpen} onTrigger={() => toggle()} onSelect={handleSelect} />;
  }
}`,...(k=(W=O.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var B,U,V;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');
    const handleSelect = (id: string) => {
      setSelected(id);
      close();
    };
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="disabled" {...args} ref={ref} isOpen={isOpen} placeholder="Scroll Select" onTrigger={toggle} onSelect={handleSelect} />;
  }
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const K=["Default","UserList","Outline","ScrollOption","OptionList","Disabled"];export{g as Default,h as Disabled,O as OptionList,f as Outline,v as ScrollOption,m as UserList,K as __namedExportsOrder,P as default};
