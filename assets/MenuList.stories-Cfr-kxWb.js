import{j as c,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-xY3vwSeg.js";import{b as s}from"./index-DACGP-7d.js";import{a as u,W as m,I as i}from"./index-B-pgjnsX.js";import"./index-ME3ew0NY.js";import"./index-CRvg4mJd.js";import{u as h}from"./useOverlay-CW91CHro.js";import"./iframe-BxXOec1f.js";import"./jsx-runtime-DPq929sA.js";import"./_commonjsHelpers-CIsesPoJ.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="5354b5ba-0dc2-4dec-b80c-dace5cfc8bb0",t._sentryDebugIdIdentifier="sentry-dbid-5354b5ba-0dc2-4dec-b80c-dace5cfc8bb0")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:c(g,{children:[e("button",{children:"trigger button"}),c("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=h();return c(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),c(m,{isOpen:t,css:{left:"100%",top:0},children:[e(i,{LeftIcon:e(s,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(i,{LeftIcon:e(s,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(i,{LeftIcon:e(s,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,d,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({}) => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    return <MenuRoot onClose={close}>
        <button type="button" onClick={toggle}>
          Trigger
        </button>
        <MenuList isOpen={isOpen} css={{
        left: '100%',
        top: 0
      }}>
          <MenuItem LeftIcon={<IcPencil width={16} height={16} />} onSelect={toggle}>
            이름 변경
          </MenuItem>
          <MenuItem LeftIcon={<IcPencil width={16} height={16} />} onSelect={toggle}>
            휴지통으로 이동
          </MenuItem>
          <MenuItem LeftIcon={<IcPencil width={16} height={16} />} onSelect={toggle}>
            폴더 전체 다운로드
          </MenuItem>
        </MenuList>
      </MenuRoot>;
  },
  args: {
    onClose: () => {}
  },
  argTypes: {}
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,S as default};
