import{a as t,F as T,j as r}from"./emotion-react-jsx-runtime.browser.esm-CSiOhW6i.js";import{o as i,t as u,Z as o,e as m}from"./index-CvOiDExs.js";import{r as p}from"./index-BUjKFtp4.js";import"./iframe-DyHOD6cA.js";import"./jsx-runtime-Dh0KApn4.js";import"./index-BugzcMrQ.js";import"./_commonjsHelpers-BphuXKqK.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="cbf9019c-4efc-4bc1-aca5-c7d8b4918395",e._sentryDebugIdIdentifier="sentry-dbid-cbf9019c-4efc-4bc1-aca5-c7d8b4918395")}catch{}})();const S={title:"Common/Tab",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:t(T,{})}},n={render:()=>{const[e,a]=p.useState(0);return r(i,{children:[r(u,{selectedTab:e,onTabClick:l=>{a(l)},children:[t(o,{variant:"round",children:"선택된 블록"}),t(o,{variant:"round",children:"전체 문서"})]}),r(m,{selectedTab:e,children:[t("div",{children:"1번 탭"}),t("div",{children:"2번 탭"})]})]})}};var d,s,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
