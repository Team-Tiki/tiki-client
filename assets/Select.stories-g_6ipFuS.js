import{a as r}from"./emotion-react-jsx-runtime.browser.esm-qTqNjzW1.js";import{w as d}from"./index-BrRoXPrZ.js";import{r as p}from"./index-Cgg4I6sN.js";import"./index-N4SbRJ0J.js";import{u}from"./useOutsideClick-D66fadYG.js";import{u as S}from"./useOverlay-D93tRXaH.js";import"./iframe-DOMl-MD0.js";import"./jsx-runtime-mLlc1at_.js";import"./_commonjsHelpers-BAn6OLmv.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="aa3de4e0-06af-43f9-8184-57a62eee1e93",e._sentryDebugIdIdentifier="sentry-dbid-aa3de4e0-06af-43f9-8184-57a62eee1e93")}catch{}})();const G={title:"Common/Select",component:d,parameters:{layout:"centered"},args:{options:[{value:"option 1"},{value:"option 2"},{value:"최주용 남다은 이채원 김규홍 정보운"}]}},g={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:e=>{const{isOpen:t,close:o,toggle:s}=S(),l=u(o),[n,a]=p.useState(""),c=i=>{a(i),o()};return r(d,{"aria-label":`선택된 아이템: ${n}`,variant:"default",...e,ref:l,isOpen:t,placeholder:"Primary Select",onTrigger:s,onSelect:c})}},m={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:e=>{const{isOpen:t,close:o,toggle:s}=S(),l=u(o),[n,a]=p.useState(""),c=k=>{a(k),o()},i=[{value:"Option 1",description:"WEB",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},{value:"Option 2",description:"SERVER",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}];return r(d,{"aria-label":`선택된 아이템: ${n}`,label:"아웃라인 셀렉트",variant:"user",...e,ref:l,isOpen:t,placeholder:"Outline Select",onTrigger:s,onSelect:c,options:i})}},f={render:e=>{const{isOpen:t,close:o,toggle:s}=S(),l=u(o),[n,a]=p.useState(""),c=i=>{a(i),o()};return r(d,{"aria-label":`선택된 아이템: ${n}`,variant:"outline",...e,ref:l,isOpen:t,placeholder:"Scroll Select",onTrigger:s,onSelect:c})}},v={decorators:[e=>r("div",{css:{width:"24rem"},children:r(e,{})})],render:()=>{const{isOpen:e,close:t,toggle:o}=S(),[s,l]=p.useState(""),n=u(t),a=i=>{l(i),t()},c=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"},{value:"Option 7"},{value:"Option 8"},{value:"Option 9"}];return r(d,{"aria-label":`선택된 아이템: ${s}`,variant:"outline",options:c,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>o(),onSelect:a})}},O={decorators:[e=>r("div",{css:{width:"12rem"},children:r(e,{})})],render:()=>{const{isOpen:e,close:t,toggle:o}=S(),[s,l]=p.useState(""),n=u(t),a=i=>{l(i),t()},c=[{value:"최근 정렬 순"},{value:"과거 정렬 순대를 먹을래 말래"}];return r(d,{"aria-label":`선택된 아이템: ${s}`,variant:"option",options:c,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>o(),onSelect:a})}};var h,b,x;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=g.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,H;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(y=m.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var M,Z,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var T,E,C;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(E=v.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var W,$,L;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=($=O.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const J=["Default","UserList","Outline","ScrollOption","OptionList"];export{g as Default,O as OptionList,f as Outline,v as ScrollOption,m as UserList,J as __namedExportsOrder,G as default};
