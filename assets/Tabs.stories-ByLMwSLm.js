import{a,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-DxawQtn4.js";import{b as i,n as u,o as d,c as m}from"./index-D7ialhZz.js";import{r as p}from"./index-CTf7ZHmN.js";import"./iframe-BgC8A34w.js";import"./jsx-runtime-DB5AsIEc.js";import"./index-DxT3PhUg.js";import"./_commonjsHelpers-CohDEukY.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd97cba9-119e-4141-8a98-3b006a150417",e._sentryDebugIdIdentifier="sentry-dbid-bd97cba9-119e-4141-8a98-3b006a150417")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:a(T,{})}},n={render:()=>{const[e,t]=p.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{t(l)},children:[a(d,{variant:"round",children:"선택된 블록"}),a(d,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[a("div",{children:"1번 탭"}),a("div",{children:"2번 탭"})]})]})}};var o,s,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
