import{a as e,j as b,c as k}from"./emotion-react.browser.esm-DsyXDLlE.js";import{B as I}from"./Button-GuBL2pgU.js";import{F as W}from"./Flex-Cg1RVFIE.js";import{S as w}from"./Select-ctDxnrUT.js";import"./index-BCaNsokO.js";import"./iframe-BqCMgI7k.js";import{u as x}from"./useOverlay-61AmdRNb.js";import{W as n,a as O,b as C,c as N,d as T}from"./WorkSpaceName-BB6yNlSB.js";import"./extends-ClQVCWlZ.js";import"./Button.style-kwqAcFB-.js";import"./theme-BXds7J9r.js";import"./Label-DwJDvaGY.js";import"./scroll-CgP7JNU1.js";import"./_commonjsHelpers-nETAGUMJ.js";import"../sb-preview/runtime.js";import"./QueryClientProvider-RAXgU3At.js";import"./path-COZDMEQh.js";import"./file-CflAQVp4.js";import"./Input-BFOgiaNX.js";import"./SupportingText-Dg5xufL1.js";import"./Heading-BonQaJIy.js";import"./Text-DQc2hZfx.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="e9e3f31a-32d9-46ad-894d-08efd735d4fe",r._sentryDebugIdIdentifier="sentry-dbid-e9e3f31a-32d9-46ad-894d-08efd735d4fe")}catch{}})();const ee={title:"Shared/WorkSpaceModal",component:n,parameters:{layout:"centered"},decorators:[r=>e(n,{children:e(r,{})})]},o={render:()=>e(O,{isVisible:!0})},s={render:()=>e(C,{isVisible:!0})},a={render:()=>{const{isOpen:r,toggle:t}=x();return b(W,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:V,children:[e(N,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),e("div",{css:{width:"32rem",marginTop:"2.4rem"},children:e(w,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:r,onTrigger:t,onSelect:t,options:[{value:"옵션 1입니다"},{value:"옵션 2입니다"}],className:"select-container"})}),e(I,{css:{width:"100%",marginTop:"18.8rem"},variant:"primary",size:"medium",children:"다음"})]})}},i={render:()=>e(T,{isVisible:!0})},V=k({height:"40rem"});var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceName isVisible={true} />;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceComplete isVisible={true} />;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,S,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      toggle
    } = useOverlay();
    return <Flex tag={'section'} styles={{
      direction: 'column',
      justify: 'center',
      align: 'center'
    }} css={Style}>
        <WorkSpaceInfo step="category" title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
        <div css={{
        width: '32rem',
        marginTop: '2.4rem'
      }}>
          <Select css={{
          '& ul': {
            maxHeight: '25rem'
          }
        }} placeholder="선택" variant="outline" isOpen={isOpen} onTrigger={toggle} onSelect={toggle} options={[{
          value: '옵션 1입니다'
        }, {
          value: '옵션 2입니다'
        }]} className="select-container" />
        </div>
        <Button css={{
        width: '100%',
        marginTop: '18.8rem'
      }} variant="primary" size="medium">
          다음
        </Button>
      </Flex>;
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,h,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceImage isVisible={true} />;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const re=["NameStep","CompleteStep","SelectCategoryStep","ImageUploadStep"];export{s as CompleteStep,i as ImageUploadStep,o as NameStep,a as SelectCategoryStep,re as __namedExportsOrder,ee as default};
