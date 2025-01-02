import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-DcwrIcx9.js";import{c,d as u,t as d,r as m}from"./index-D66-Zmap.js";import{r as p}from"./index-BnzvyeZr.js";import"./iframe-D_cIFqUu.js";import"./jsx-runtime-fFF4Ar6N.js";import"./index-1PJj4saT.js";import"./_commonjsHelpers-CHhxJATD.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="fa233d1e-96bb-4218-b244-cb2ef47a506b",e._sentryDebugIdIdentifier="sentry-dbid-fa233d1e-96bb-4218-b244-cb2ef47a506b")}catch{}})();const S={title:"Common/Tab",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(c,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var s,o,b;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
