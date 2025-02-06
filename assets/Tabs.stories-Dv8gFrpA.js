import{a,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm--K9-Jq3y.js";import{c as i,l as u,i as d,f as m}from"./index-BiyQyw_j.js";import{r as p}from"./index-DEZx8eBJ.js";import"./iframe-BAX_hDx1.js";import"./jsx-runtime-BgUXCdF3.js";import"./index-BAGrwgMQ.js";import"./_commonjsHelpers-CB5cDWNc.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="59576f98-002e-476d-aab3-5876acf9287e",e._sentryDebugIdIdentifier="sentry-dbid-59576f98-002e-476d-aab3-5876acf9287e")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:a(T,{})}},n={render:()=>{const[e,t]=p.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:b=>{t(b)},children:[a(d,{variant:"round",children:"선택된 블록"}),a(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[a("div",{children:"1번 탭"}),a("div",{children:"2번 탭"})]})]})}};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const _=["Tabtest"];export{n as Tabtest,_ as __namedExportsOrder,S as default};
