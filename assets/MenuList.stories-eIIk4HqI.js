import{j as s,a as e,F as g}from"./emotion-react-jsx-runtime.browser.esm-DfxRvEnB.js";import{b as i}from"./index-p0PITYme.js";import{a as u,_ as f,I as c}from"./index-q9ko1EUm.js";import"./index-CWTOcU_k.js";import"./index-DjTZSbhz.js";import{u as m}from"./useOverlay-9VC2iUt9.js";import"./iframe-DBppwReq.js";import"./jsx-runtime-Ckmwp7YI.js";import"./_commonjsHelpers-B_rmwL-P.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="96990ff8-54f1-49ee-b9c2-97dffc71ac22",t._sentryDebugIdIdentifier="sentry-dbid-96990ff8-54f1-49ee-b9c2-97dffc71ac22")}catch{}})();const O={title:"Common/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1}},args:{onClose:()=>{},children:s(g,{children:[e("button",{children:"trigger button"}),s("ul",{children:[e("li",{children:"item 1"}),e("li",{children:"item 2"})]})]})}},r={render:({})=>{const{isOpen:t,close:n,toggle:o}=m();return s(u,{onClose:n,children:[e("button",{type:"button",onClick:o,children:"Trigger"}),s(f,{isOpen:t,css:{left:"100%",top:0},children:[e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"이름 변경"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"휴지통으로 이동"}),e(c,{LeftIcon:e(i,{width:16,height:16}),onSelect:o,children:"폴더 전체 다운로드"})]})]})},args:{onClose:()=>{}},argTypes:{}};var l,a,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,O as default};
