import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-BKcB-RGS.js";import{g as i,n as u,o as d,h as m}from"./index-BKUS_alP.js";import{r as p}from"./index-o_EzgL0Q.js";import"./iframe-DhUXudMo.js";import"./jsx-runtime-BoFDOXn5.js";import"./index-B4ne36_A.js";import"./_commonjsHelpers-DJWhL92i.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="efa30839-b1b7-422e-8e88-bca0d9e1685c",e._sentryDebugIdIdentifier="sentry-dbid-efa30839-b1b7-422e-8e88-bca0d9e1685c")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var o,s,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
