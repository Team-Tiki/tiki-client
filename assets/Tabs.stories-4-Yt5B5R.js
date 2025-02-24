import{a,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-BwNpQs7C.js";import{f as i,b as u,d,p as f}from"./index-Djo6_wR6.js";import{r as m}from"./index-CQgDWHiW.js";import"./iframe-DlWS95Xn.js";import"./jsx-runtime-Ba4D3pvl.js";import"./index-B78RZ744.js";import"./_commonjsHelpers-r3Vo9bYy.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b945f563-701c-47f8-a0f7-ee2aabeb2fd5",e._sentryDebugIdIdentifier="sentry-dbid-b945f563-701c-47f8-a0f7-ee2aabeb2fd5")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:a(T,{})}},n={render:()=>{const[e,t]=m.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{t(l)},children:[a(d,{variant:"round",children:"선택된 블록"}),a(d,{variant:"round",children:"전체 문서"})]}),r(f,{selectedTab:e,children:[a("div",{children:"1번 탭"}),a("div",{children:"2번 탭"})]})]})}};var s,o,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
