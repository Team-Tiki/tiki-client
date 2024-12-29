import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-Dt62E_6i.js";import{b as i}from"./index-Cux8MSo6.js";import{P as u,M as m,D as c}from"./index-BOiIKdGT.js";import"./index-BZ0KkNE7.js";import"./index-D11sNaUR.js";import{u as h}from"./useOverlay-BPevn99V.js";import"./iframe-BsAP7Sas.js";import"./jsx-runtime-C7EeXdgQ.js";import"./_commonjsHelpers-UA9SOZMg.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4550eccd-2b4b-4748-9837-e33b9a9d1be3",t._sentryDebugIdIdentifier="sentry-dbid-4550eccd-2b4b-4748-9837-e33b9a9d1be3")}catch{}})();const O={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=h();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,d,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,O as default};
