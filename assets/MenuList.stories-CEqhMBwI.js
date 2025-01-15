import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-Dt4NCbMl.js";import{b as i}from"./index-D8QZEenf.js";import{P as u,R as m,T as c}from"./index-42yR2g9P.js";import"./index-CI2ov4W8.js";import"./index-DDlvtsrT.js";import{u as h}from"./useOverlay-DfDGGjZ4.js";import"./iframe-_0Ias953.js";import"./jsx-runtime-BKW1pqZ9.js";import"./_commonjsHelpers-DMVpej0G.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="805b05b5-a513-4be3-bfd5-61a19c2e31eb",t._sentryDebugIdIdentifier="sentry-dbid-805b05b5-a513-4be3-bfd5-61a19c2e31eb")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=h();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,a,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,S as default};
