import{a as r,F as p}from"./emotion-react-jsx-runtime.browser.esm-BGk4mvWq.js";import{_ as o}from"./index-mzKaIvxV.js";import{r as s}from"./index-BDAmmHVS.js";import"./iframe-DxrOsHgB.js";import"./jsx-runtime-CugnxgV_.js";import"./index-DZe9X5yc.js";import"./_commonjsHelpers-DNKGM3Kz.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ee630c9a-905a-421b-9622-91c6159c1216",e._sentryDebugIdIdentifier="sentry-dbid-ee630c9a-905a-421b-9622-91c6159c1216")}catch{}})();const _={title:"Common/DatePicker",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const[,e]=s.useState(null),[,t]=s.useState(null);return r(p,{children:r(o,{variant:"single",triggerWidth:"10.3rem",onChange:(l,d)=>{e(l),t(d)},defaultSelectedDate:new Date("2024-05-12")})})}},n={render:()=>{const[,e]=s.useState(null),[,t]=s.useState(null);return r(p,{children:r(o,{variant:"range",triggerWidth:"10.3rem",onChange:(l,d)=>{e(l),t(d)},defaultSelectedDate:new Date("2024-05-12"),defaultEndDate:new Date("2024-05-17")})})}};var u,D,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [, setSelectedDate] = useState<Date | null>(null);
    const [, setEndDate] = useState<Date | null>(null);
    const handleDateChange = (start: Date | null, end: Date | null) => {
      setSelectedDate(start);
      setEndDate(end);
    };
    return <>
        <DatePicker variant="single" triggerWidth="10.3rem" onChange={handleDateChange} defaultSelectedDate={new Date('2024-05-12')} />
      </>;
  }
}`,...(i=(D=a.parameters)==null?void 0:D.docs)==null?void 0:i.source}}};var g,m,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [, setSelectedDate] = useState<Date | null>(null);
    const [, setEndDate] = useState<Date | null>(null);
    const handleDateChange = (start: Date | null, end: Date | null) => {
      setSelectedDate(start);
      setEndDate(end);
    };
    return <>
        <DatePicker variant="range" triggerWidth="10.3rem" onChange={handleDateChange} defaultSelectedDate={new Date('2024-05-12')} defaultEndDate={new Date('2024-05-17')} />
      </>;
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["SingleDatePicker","RangeDatePicker"];export{n as RangeDatePicker,a as SingleDatePicker,P as __namedExportsOrder,_ as default};
