import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-B8H8OE5q.js";import{b as c}from"./index-B-uMTWfr.js";import{I as u,W as f,L as i}from"./index-B3mj46ur.js";import"./index-CT12xj68.js";import"./index-kEXRF5PY.js";import{u as m}from"./useOverlay-kftfPjBO.js";import"./iframe-Cljow89B.js";import"./jsx-runtime-JVV37XSY.js";import"./_commonjsHelpers-DMeIt8Ii.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="fc04c9e0-59ac-4efd-97f4-fc90f7808193",t._sentryDebugIdIdentifier="sentry-dbid-fc04c9e0-59ac-4efd-97f4-fc90f7808193")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=m();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(f,{isOpen:t,css:{left:"100%",top:0},children:[e(i,{LeftIcon:e(c,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(i,{LeftIcon:e(c,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(i,{LeftIcon:e(c,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,a,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
