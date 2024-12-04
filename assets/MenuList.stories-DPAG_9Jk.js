import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-CSiOhW6i.js";import{b as i}from"./index-CLsVEhIN.js";import{a as u,b as m,P as c}from"./index-CvOiDExs.js";import"./index-BUjKFtp4.js";import"./index-BugzcMrQ.js";import{u as p}from"./useOverlay-Czms_O-T.js";import"./toast-CALGSB-b.js";import"./iframe-DyHOD6cA.js";import"./jsx-runtime-Dh0KApn4.js";import"./_commonjsHelpers-BphuXKqK.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c6e447b5-1eb7-428a-a52e-f253c7ac6bf9",t._sentryDebugIdIdentifier="sentry-dbid-c6e447b5-1eb7-428a-a52e-f253c7ac6bf9")}catch{}})();const S={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=p();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(m,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,a,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
