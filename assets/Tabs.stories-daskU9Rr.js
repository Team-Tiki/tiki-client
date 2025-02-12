import{a,F as u,j as r}from"./emotion-react-jsx-runtime.browser.esm-D6-OB2rB.js";import{m as c,a as T,l as d,u as m}from"./index-Bo1rDQPJ.js";import{r as p}from"./index-DQ0aQxHF.js";import"./iframe-BiOE7KMS.js";import"./jsx-runtime-CeXlYnbk.js";import"./index-C383ZwCZ.js";import"./_commonjsHelpers-DAprIWz_.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6ba4035f-a0b9-4ab6-b38a-b5d8acbb7a30",e._sentryDebugIdIdentifier="sentry-dbid-6ba4035f-a0b9-4ab6-b38a-b5d8acbb7a30")}catch{}})();const S={title:"Common/Tab",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{children:a(u,{})}},n={render:()=>{const[e,t]=p.useState(0);return r(c,{children:[r(T,{selectedTab:e,onTabClick:l=>{t(l)},children:[a(d,{variant:"round",children:"선택된 블록"}),a(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[a("div",{children:"1번 탭"}),a("div",{children:"2번 탭"})]})]})}};var s,o,b;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return <TabRoot>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton variant="round">선택된 블록</TabButton>
          <TabButton variant="round">전체 문서</TabButton>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </TabPanel>
      </TabRoot>;
  }
}`,...(b=(o=n.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};const _=["Tabtest"];export{n as Tabtest,_ as __namedExportsOrder,S as default};
