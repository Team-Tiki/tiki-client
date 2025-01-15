import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-0YJX-ROQ.js";import{d as c,n as u,o as d,e as m}from"./index-De3LwuLh.js";import{r as p}from"./index-CXBdlOR3.js";import"./iframe-B_LRY0KW.js";import"./jsx-runtime-BM7nGQKk.js";import"./index-B5bp7hA5.js";import"./_commonjsHelpers-DQtzULp6.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="bfc9e218-9353-4455-a405-e2a9157dd041",e._sentryDebugIdIdentifier="sentry-dbid-bfc9e218-9353-4455-a405-e2a9157dd041")}catch{}})();const S={title:"Common/Tab",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(c,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const _=["Tabtest"];export{n as Tabtest,_ as __namedExportsOrder,S as default};
