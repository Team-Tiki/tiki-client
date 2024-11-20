import{a as e,j as v,c as k}from"./emotion-react.browser.esm-PfKAXyhP.js";import{B as I}from"./Button-Bd-bQV0-.js";import{F as W}from"./Flex-BfCV1nkL.js";import{S as w}from"./Select-DA7Vf7N1.js";import"./index-CqAf4RMR.js";import"./iframe-MxPOROEm.js";import{u as x}from"./useOverlay-K8GlGAf8.js";import{W as n,a as O,b as C,c as N,d as T}from"./WorkSpaceName-FWSzmiBv.js";import"./extends-ClQVCWlZ.js";import"./Button.style-CvDv_kKi.js";import"./theme-DtMT9Myh.js";import"./Label-BnMcJ6pP.js";import"./scroll-OzQSc6Wz.js";import"./_commonjsHelpers-D9B2Q-WJ.js";import"../sb-preview/runtime.js";import"./QueryClientProvider-LiHVSvwQ.js";import"./path-B7edVqqO.js";import"./file-Bi9gFlDY.js";import"./Input-DNoGZ2WQ.js";import"./SupportingText-DFESr3Bt.js";import"./Heading-CFYcgQuY.js";import"./Text-DGvoGVSg.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="5926fca1-25b2-4acf-add1-146f9be08eb1",r._sentryDebugIdIdentifier="sentry-dbid-5926fca1-25b2-4acf-add1-146f9be08eb1")}catch{}})();const ee={title:"Shared/WorkSpaceModal",component:n,parameters:{layout:"centered"},decorators:[r=>e(n,{children:e(r,{})})]},o={render:()=>e(O,{isVisible:!0})},s={render:()=>e(C,{isVisible:!0})},a={render:()=>{const{isOpen:r,toggle:t}=x();return v(W,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:V,children:[e(N,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),e("div",{css:{width:"32rem",marginTop:"2.4rem"},children:e(w,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:r,onTrigger:t,onSelect:t,options:[{value:"옵션 1입니다"},{value:"옵션 2입니다"}],className:"select-container"})}),e(I,{css:{width:"100%",marginTop:"18.8rem"},variant:"primary",size:"medium",children:"다음"})]})}},i={render:()=>e(T,{isVisible:!0})},V=k({height:"40rem"});var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceName isVisible={true} />;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceComplete isVisible={true} />;
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,S,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,b,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceImage isVisible={true} />;
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const re=["NameStep","CompleteStep","SelectCategoryStep","ImageUploadStep"];export{s as CompleteStep,i as ImageUploadStep,o as NameStep,a as SelectCategoryStep,re as __namedExportsOrder,ee as default};
