import{j as s,a as e,F as g}from"./emotion-react.browser.esm-BtZXm5zH.js";import{M as u,a as m,S as i,b as l}from"./MenuList-DEQ_Zuic.js";import"./index-Bs0iNRru.js";import"./iframe-C_4YCyOn.js";import{u as h}from"./useOverlay-BYFNoRKk.js";import"./extends-ClQVCWlZ.js";import"./useOutsideClick-Cn3poUpv.js";import"./theme-aLm86VWY.js";import"./_commonjsHelpers-B_amHJqX.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="56676ef0-ab6a-4d1b-9d79-db25757d254f",t._sentryDebugIdIdentifier="sentry-dbid-56676ef0-ab6a-4d1b-9d79-db25757d254f")}catch{}})();const O={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:o,toggle:n}=h();return s(u,{onClose:o,children:[e("button",{type:"button",onClick:n,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"이름 변경"}),e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"휴지통으로 이동"}),e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:n,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var c,d,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(a=(d=r.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,O as default};
