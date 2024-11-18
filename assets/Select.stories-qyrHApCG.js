import{a as t}from"./emotion-react.browser.esm-xyVcI5Gp.js";import{r as d}from"./index-BLAkgBHP.js";import{S as p}from"./Select-DfJw6bfy.js";import"./iframe-CbWKwn5X.js";import{u}from"./useOutsideClick-CRl5Ih10.js";import{u as g}from"./useOverlay-Dk50sqqb.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-DR6wHYmc.js";import"./theme-wXRzav9S.js";import"./Label-Baf6yN_k.js";import"./scroll-nK4PyKIk.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4f298c02-59b2-48cd-9fdd-1caae10b1e5f",e._sentryDebugIdIdentifier="sentry-dbid-4f298c02-59b2-48cd-9fdd-1caae10b1e5f")}catch{}})();const I=e=>d.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M5.5 8.005V2L6.5 2V8.005H8L6 10L4 8.005H5.5Z",fill:"#2C3030"})),A=e=>d.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M5.5 3.995V10H6.5V3.995H8L6 2L4 3.995H5.5Z",fill:"#2C3030"})),P={title:"Common/Select",component:p,parameters:{layout:"centered"},args:{options:[{value:"option 1"},{value:"option 2"},{value:"최주용 남다은 이채원 김규홍 정보운 김보미"}]}},m={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=d.useState(""),a=i=>{c(i),r()};return t(p,{"aria-label":`선택된 아이템: ${n}`,variant:"default",...e,ref:l,isOpen:o,placeholder:"Primary Select",onTrigger:s,onSelect:a})}},S={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=d.useState(""),a=$=>{c($),r()},i=[{value:"Option 1",description:"WEB",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},{value:"Option 2",description:"SERVER",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}];return t(p,{"aria-label":`선택된 아이템: ${n}`,label:"아웃라인 셀렉트",variant:"user",...e,ref:l,isOpen:o,placeholder:"Outline Select",onTrigger:s,onSelect:a,options:i})}},f={render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=d.useState(""),a=i=>{c(i),r()};return t(p,{"aria-label":`선택된 아이템: ${n}`,variant:"outline",...e,ref:l,isOpen:o,placeholder:"Scroll Select",onTrigger:s,onSelect:a})}},v={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:()=>{const{isOpen:e,close:o,toggle:r}=g(),[s,l]=d.useState(""),n=u(o),c=i=>{l(i),o()},a=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"},{value:"Option 7"},{value:"Option 8"},{value:"Option 9"}];return t(p,{"aria-label":`선택된 아이템: ${s}`,variant:"outline",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>r(),onSelect:c})}},O={decorators:[e=>t("div",{css:{width:"12rem"},children:t(e,{})})],render:()=>{const{isOpen:e,close:o,toggle:r}=g(),[s,l]=d.useState(""),n=u(o),c=i=>{l(i),o()},a=[{value:"최근 정렬 순",svg:t(A,{})},{value:"과거 정렬 순대를 먹을래 말래",svg:t(I,{})}];return t(p,{"aria-label":`선택된 아이템: ${s}`,variant:"option",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>r(),onSelect:c})}};var h,w,b;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(w=m.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,H,M;S.parameters={...S.parameters,docs:{...(x=S.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(H=S.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var y,Z,E;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:E.source}}};var D,T,L;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(T=v.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var C,V,W;O.parameters={...O.parameters,docs:{...(C=O.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      value: '최근 정렬 순',
      svg: <IcArrowUp />
    }, {
      value: '과거 정렬 순대를 먹을래 말래',
      svg: <IcArrowDown />
    }];
    return <Select aria-label={\`선택된 아이템: \${selected}\`} variant="option" options={options} ref={ref} placeholder="최근 업로드 순" isOpen={isOpen} onTrigger={() => toggle()} onSelect={handleSelect} />;
  }
}`,...(W=(V=O.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const K=["Default","UserList","Outline","ScrollOption","OptionList"];export{m as Default,O as OptionList,f as Outline,v as ScrollOption,S as UserList,K as __namedExportsOrder,P as default};
