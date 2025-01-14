import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-r_eELkSK.js";import{c as i,n as u,o as d,d as m}from"./index-Blk1dqNe.js";import{r as p}from"./index-C5XOEaSi.js";import"./iframe-Dcc2Ft1t.js";import"./jsx-runtime-CqT5-i3X.js";import"./index-vnnopYMX.js";import"./_commonjsHelpers-BLS8uydW.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="958d9245-9827-40d5-9348-a9a5c6d72de0",e._sentryDebugIdIdentifier="sentry-dbid-958d9245-9827-40d5-9348-a9a5c6d72de0")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:b=>{a(b)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var o,s,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Tabtest"];export{n as Tabtest,_ as __namedExportsOrder,S as default};
