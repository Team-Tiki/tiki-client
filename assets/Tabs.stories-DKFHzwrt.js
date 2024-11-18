import{a as n,F as y,j as i}from"./emotion-react.browser.esm-xyVcI5Gp.js";import{R as p,r as c}from"./index-BLAkgBHP.js";import{t as g,T as v}from"./TabButton-47PtHmSI.js";import"./iframe-CbWKwn5X.js";import"./extends-ClQVCWlZ.js";import"./_commonjsHelpers-DR6wHYmc.js";import"./theme-wXRzav9S.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="54954799-fca9-477c-9861-0f46182ef33a",e._sentryDebugIdIdentifier="sentry-dbid-54954799-fca9-477c-9861-0f46182ef33a")}catch{}})();const T=({children:e,selectedTab:t,onTabClick:a,...r})=>n("nav",{children:n("ul",{role:"tablist",css:g,...r,children:p.Children.toArray(e).map((s,l)=>c.cloneElement(s,{tabId:l,isSelected:t===l,onTabClick:a}))})});T.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{selectedTab:{required:!0,tsType:{name:"number"},description:""},onTabClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabId"}],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithoutRef"]};const f=({children:e,selectedTab:t,...a})=>n("div",{...a,children:p.Children.toArray(e).map((r,s)=>c.cloneElement(r,{role:"tabpanel",id:`panel${s}`,ariaLabelledby:s})).filter((r,s)=>s===t)});f.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{selectedTab:{required:!0,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const h=({children:e,...t})=>n("section",{...t,children:e});h.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const o=Object.assign(h,{Button:v,List:T,Panel:f}),w={title:"Common/Tab",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{children:n(y,{})}},d={render:()=>{const[e,t]=c.useState(0),a=r=>{t(r)};return i(o,{children:[i(o.List,{selectedTab:e,onTabClick:a,children:[n(o.Button,{variant:"round",children:"선택된 블록"}),n(o.Button,{variant:"round",children:"전체 문서"})]}),i(o.Panel,{selectedTab:e,children:[n("div",{children:"1번 탭"}),n("div",{children:"2번 탭"})]})]})}};var b,u,m;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return <Tab>
        <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
          <Tab.Button variant="round">선택된 블록</Tab.Button>
          <Tab.Button variant="round">전체 문서</Tab.Button>
        </Tab.List>
        <Tab.Panel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </Tab.Panel>
      </Tab>;
  }
}`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const E=["Tabtest"];export{d as Tabtest,E as __namedExportsOrder,w as default};
