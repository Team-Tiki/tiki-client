import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-CIRz_uE2.js";import{c as i,o as u,t as d,d as m}from"./index-0OOyc6fp.js";import{r as f}from"./index-B3qrjDzu.js";import"./iframe-CUgoWZiK.js";import"./jsx-runtime-DSBraSX8.js";import"./index-Ca2tAXuG.js";import"./_commonjsHelpers-C9pgfhHq.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="f776e4fa-4de5-4281-85fc-703eeea294f5",e._sentryDebugIdIdentifier="sentry-dbid-f776e4fa-4de5-4281-85fc-703eeea294f5")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=f.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:b=>{a(b)},children:[t(d,{variant:"round",children:"선택된 블록"}),t(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var o,s,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
