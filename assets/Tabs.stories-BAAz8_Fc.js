import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-om8Oq2cU.js";import{y as c,h as u,d as s,g as m}from"./index-BsBUjKss.js";import{r as p}from"./index-CDFQnoDq.js";import"./iframe-C7Zt0td-.js";import"./jsx-runtime-Z9WpWPk4.js";import"./index-L6fdsbjX.js";import"./_commonjsHelpers-CWuwZOzQ.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="47ffb9e4-bccb-470b-9196-0bc946fb13b4",e._sentryDebugIdIdentifier="sentry-dbid-47ffb9e4-bccb-470b-9196-0bc946fb13b4")}catch{}})();const S={title:"Common/Tab",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(c,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(s,{variant:"round",children:"선택된 블록"}),t(s,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var d,o,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
