import{a as r,j as v}from"./emotion-react-jsx-runtime.browser.esm-CeApWk93.js";import{c as k}from"./emotion-react.browser.esm-xntO1MbF.js";import{m as I,E as W,V as w}from"./index-Bj-ff5e2.js";import"./index-BeH7IU5F.js";import"./index-2-ic2sVG.js";import{u as x}from"./useOverlay-D8QRSoIa.js";import"./toast-BnAeWbr_.js";import{W as n,a as O,b as V,c as C,d as N}from"./WorkSpaceName-CBr-66rp.js";import"./iframe-DrdEy4Jd.js";import"./jsx-runtime-BhSfmKx2.js";import"./_commonjsHelpers-Y38rOxJs.js";import"./index-CLsVEhIN.js";import"./QueryClientProvider-C407cgeI.js";import"./path-BUraLB_f.js";import"./file-BwgzbXiz.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="265da65a-94c8-4f29-8532-15498b6e6dff",e._sentryDebugIdIdentifier="sentry-dbid-265da65a-94c8-4f29-8532-15498b6e6dff")}catch{}})();const Q={title:"Shared/WorkSpaceModal",component:n,parameters:{layout:"centered"},decorators:[e=>r(n,{children:r(e,{})})]},o={render:()=>r(O,{isVisible:!0})},s={render:()=>r(V,{isVisible:!0})},a={render:()=>{const{isOpen:e,toggle:t}=x();return v(w,{tag:"section",styles:{direction:"column",justify:"center",align:"center"},css:T,children:[r(C,{step:"category",title:"새로운 워크 스페이스 생성하기",info:"팀 카테고리를 선택해주세요."}),r("div",{css:{width:"32rem",marginTop:"2.4rem"},children:r(I,{css:{"& ul":{maxHeight:"25rem"}},placeholder:"선택",variant:"outline",isOpen:e,onTrigger:t,onSelect:t,options:[{value:"옵션 1입니다"},{value:"옵션 2입니다"}],className:"select-container"})}),r(W,{css:{width:"100%",marginTop:"18.8rem"},variant:"primary",size:"medium",children:"다음"})]})}},i={render:()=>r(N,{isVisible:!0})},T=k({height:"40rem"});var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const R=["NameStep","CompleteStep","SelectCategoryStep","ImageUploadStep"];export{s as CompleteStep,i as ImageUploadStep,o as NameStep,a as SelectCategoryStep,R as __namedExportsOrder,Q as default};
