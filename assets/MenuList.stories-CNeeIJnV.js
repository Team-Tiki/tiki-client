import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-Bkg_oK4e.js";import{b as i}from"./index-B-uMTWfr.js";import{L as u,O as m,W as l}from"./index-2G6DANsy.js";import"./index-B6YW5zDT.js";import"./index-DPOVBDCL.js";import{u as h}from"./useOverlay-CbwFz_q5.js";import"./iframe-CmwipSp3.js";import"./jsx-runtime-CjRysnhK.js";import"./_commonjsHelpers-DjcWNUVI.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4263a546-d9f6-487a-96e1-3a9dd5a63396",t._sentryDebugIdIdentifier="sentry-dbid-4263a546-d9f6-487a-96e1-3a9dd5a63396")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=h();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(l,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var c,a,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,S as default};
