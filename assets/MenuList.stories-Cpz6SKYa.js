import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm--K9-Jq3y.js";import{b as i}from"./index-DACGP-7d.js";import{R as u,a as m,I as c}from"./index-BiyQyw_j.js";import"./index-DEZx8eBJ.js";import"./index-BAGrwgMQ.js";import{u as h}from"./useOverlay-Dq5HRkES.js";import"./iframe-BAX_hDx1.js";import"./jsx-runtime-BgUXCdF3.js";import"./_commonjsHelpers-CB5cDWNc.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="4ccfe264-d9d2-41f0-8721-ac4a800d9414",t._sentryDebugIdIdentifier="sentry-dbid-4ccfe264-d9d2-41f0-8721-ac4a800d9414")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=h();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,d,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
