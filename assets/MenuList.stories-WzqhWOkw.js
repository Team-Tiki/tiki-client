import{j as s,a as e,F as g}from"./emotion-react.browser.esm-CKoHIn4G.js";import{M as u,a as m,S as i,b as c}from"./MenuList-CJ7uoRHZ.js";import"./index-BzbvLM2Z.js";import"./iframe-BdBkYODP.js";import{u as h}from"./useOverlay-C8nQhO8F.js";import"./extends-ClQVCWlZ.js";import"./useOutsideClick-CzM-Dbm0.js";import"./theme-BplRBqvn.js";import"./_commonjsHelpers-Ce0fxJfi.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="7c6c32f9-67bb-434a-8402-8bdba33a95d8",t._sentryDebugIdIdentifier="sentry-dbid-7c6c32f9-67bb-434a-8402-8bdba33a95d8")}catch{}})();const O={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:o,toggle:n}=h();return s(u,{onClose:o,children:[e("button",{type:"button",onClick:n,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,a,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({}) => {
    const {
      isOpen,
      close,
      toggle
    } = useOverlay();
    return <Menu onClose={close}>
        <button type="button" onClick={toggle}>
          Trigger
        </button>
        <MenuList isOpen={isOpen} css={{
        left: '100%',
        top: 0
      }}>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            이름 변경
          </MenuItem>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            휴지통으로 이동
          </MenuItem>
          <MenuItem LeftIcon={<Pencil width={16} height={16} />} onSelect={toggle}>
            폴더 전체 다운로드
          </MenuItem>
        </MenuList>
      </Menu>;
  },
  args: {
    onClose: () => {}
  },
  argTypes: {}
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,O as default};
