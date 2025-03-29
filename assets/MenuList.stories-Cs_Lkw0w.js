import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-C2bsHm-h.js";import{b as i}from"./index-B-uMTWfr.js";import{F as u,A as f,B as c}from"./index-OWFABAaz.js";import"./index-DhxUmqxq.js";import"./index-DlX7YEnT.js";import{u as m}from"./useOverlay-Cg1Zn5_x.js";import"./iframe-GiTf80NO.js";import"./jsx-runtime-i-mbMoBs.js";import"./_commonjsHelpers-DQxUG3N5.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="e302280b-913c-4d9f-85f5-b95369fed8c9",t._sentryDebugIdIdentifier="sentry-dbid-e302280b-913c-4d9f-85f5-b95369fed8c9")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=m();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(f,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,d,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
