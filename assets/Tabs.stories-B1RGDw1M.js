import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-Bkg_oK4e.js";import{f as i,c as u,d,p as m}from"./index-2G6DANsy.js";import{r as f}from"./index-B6YW5zDT.js";import"./iframe-CmwipSp3.js";import"./jsx-runtime-CjRysnhK.js";import"./index-DPOVBDCL.js";import"./_commonjsHelpers-DjcWNUVI.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="990fcdbf-ee1d-4e23-96f6-b9d71ab608d5",e._sentryDebugIdIdentifier="sentry-dbid-990fcdbf-ee1d-4e23-96f6-b9d71ab608d5")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=f.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
