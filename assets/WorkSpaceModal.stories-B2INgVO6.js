import{a as r,j as v}from"./emotion-react-jsx-runtime.browser.esm-D9HjKUvM.js";import{c as k}from"./emotion-react.browser.esm-dFb4ZaQb.js";import{w,A as I,V as W}from"./index-DRthnO0v.js";import"./index-DonIaHad.js";import"./index-VBJtw-IM.js";import{u as x}from"./useOverlay-CZE8mo5W.js";import{W as n,a as O,b as V,c as C,d as N}from"./WorkSpaceName-mvoUCYAR.js";import"./iframe-CtZ68_yn.js";import"./jsx-runtime-D8Qs_Gkj.js";import"./_commonjsHelpers-C-ATdzwy.js";import"./index-KOc712aO.js";import"./QueryClientProvider-BeBz-_vi.js";import"./path-CWma-9sv.js";import"./file-CFR4NIWq.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="43bf6d3a-fd3a-4533-9eda-1894b0b0d92c",e._sentryDebugIdIdentifier="sentry-dbid-43bf6d3a-fd3a-4533-9eda-1894b0b0d92c")}catch{}})();const L={title:"Shared/WorkSpaceModal",component:n,parameters:{layout:"centered"},decorators:[e=>r(n,{children:r(e,{})})]},s={render:()=>r(O,{isVisible:!0})},o={render:()=>r(V,{isVisible:!0})},a={render:()=>{const{isOpen:e,toggle:t}=x();return v(W,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:T,children:[r(C,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),r("div",{css:{width:"32rem",marginTop:"2.4rem"},children:r(w,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:e,onTrigger:t,onSelect:t,options:[{value:"옵션 1입니다"},{value:"옵션 2입니다"}],className:"select-container"})}),r(I,{css:{width:"100%",marginTop:"18.8rem"},variant:"primary",size:"medium",children:"다음"})]})}},i={render:()=>r(N,{isVisible:!0})},T=k({height:"40rem"});var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceName isVisible={true} />;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <WorkSpaceComplete isVisible={true} />;
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,S,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Q=["NameStep","CompleteStep","SelectCategoryStep","ImageUploadStep"];export{o as CompleteStep,i as ImageUploadStep,s as NameStep,a as SelectCategoryStep,Q as __namedExportsOrder,L as default};
