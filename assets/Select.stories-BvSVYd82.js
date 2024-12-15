import{a as t}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{c as A,d as U}from"./index-CLsVEhIN.js";import{m as d}from"./index-Bj-ff5e2.js";import{r as p}from"./index-BeH7IU5F.js";import"./index-2-ic2sVG.js";import{u}from"./useOutsideClick-Dqcx82Hb.js";import{u as g}from"./useOverlay-D8QRSoIa.js";import"./toast-BnAeWbr_.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./_commonjsHelpers-Y38rOxJs.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b16c494c-7145-4ebb-83cd-cca61ae2a304",e._sentryDebugIdIdentifier="sentry-dbid-b16c494c-7145-4ebb-83cd-cca61ae2a304")}catch{}})();const P={title:"Common/Select",component:d,parameters:{layout:"centered"},args:{options:[{value:"option 1"},{value:"option 2"},{value:"최주용 남다은 이채원 김규홍 정보운 김보미"}]}},m={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=p.useState(""),a=i=>{c(i),r()};return t(d,{"aria-label":`선택된 아이템: ${n}`,variant:"default",...e,ref:l,isOpen:o,placeholder:"Primary Select",onTrigger:s,onSelect:a})}},S={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=p.useState(""),a=L=>{c(L),r()},i=[{value:"Option 1",description:"WEB",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},{value:"Option 2",description:"SERVER",profileUrl:"https://images.unsplash.com/photo-1728585255223-c158ab095e1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"}];return t(d,{"aria-label":`선택된 아이템: ${n}`,label:"아웃라인 셀렉트",variant:"user",...e,ref:l,isOpen:o,placeholder:"Outline Select",onTrigger:s,onSelect:a,options:i})}},f={render:e=>{const{isOpen:o,close:r,toggle:s}=g(),l=u(r),[n,c]=p.useState(""),a=i=>{c(i),r()};return t(d,{"aria-label":`선택된 아이템: ${n}`,variant:"outline",...e,ref:l,isOpen:o,placeholder:"Scroll Select",onTrigger:s,onSelect:a})}},v={decorators:[e=>t("div",{css:{width:"24rem"},children:t(e,{})})],render:()=>{const{isOpen:e,close:o,toggle:r}=g(),[s,l]=p.useState(""),n=u(o),c=i=>{l(i),o()},a=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"},{value:"Option 6"},{value:"Option 7"},{value:"Option 8"},{value:"Option 9"}];return t(d,{"aria-label":`선택된 아이템: ${s}`,variant:"outline",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>r(),onSelect:c})}},O={decorators:[e=>t("div",{css:{width:"12rem"},children:t(e,{})})],render:()=>{const{isOpen:e,close:o,toggle:r}=g(),[s,l]=p.useState(""),n=u(o),c=i=>{l(i),o()},a=[{value:"최근 정렬 순",svg:t(A,{})},{value:"과거 정렬 순대를 먹을래 말래",svg:t(U,{})}];return t(d,{"aria-label":`선택된 아이템: ${s}`,variant:"option",options:a,ref:n,placeholder:"최근 업로드 순",isOpen:e,onTrigger:()=>r(),onSelect:c})}};var h,b,w;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,y,H;S.parameters={...S.parameters,docs:{...(x=S.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(H=(y=S.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var M,Z,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(E=v.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var W,$,I;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(I=($=O.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const K=["Default","UserList","Outline","ScrollOption","OptionList"];export{m as Default,O as OptionList,f as Outline,v as ScrollOption,S as UserList,K as __namedExportsOrder,P as default};
