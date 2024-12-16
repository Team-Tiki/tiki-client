import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-D9HjKUvM.js";import{b as i,o as u,t as o,c as m}from"./index-DRthnO0v.js";import{r as f}from"./index-DonIaHad.js";import"./iframe-CtZ68_yn.js";import"./jsx-runtime-D8Qs_Gkj.js";import"./index-VBJtw-IM.js";import"./_commonjsHelpers-C-ATdzwy.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="50bf7faf-0890-40f4-9236-6c364eba1121",e._sentryDebugIdIdentifier="sentry-dbid-50bf7faf-0890-40f4-9236-6c364eba1121")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=f.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(o,{variant:"round",children:"선택된 블록"}),t(o,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var s,d,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["Tabtest"];export{n as Tabtest,_ as __namedExportsOrder,S as default};
