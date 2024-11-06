import{c as a,j as r,a as e,F as O}from"./emotion-react.browser.esm-C8LrOX0H.js";import{B as V}from"./Button-DA3p2jUg.js";import{F as n}from"./Flex-LtERUFe4.js";import{I as h}from"./Input-Z1ILeCfS.js";import{T as g}from"./Text-Bb1ITu4x.js";import{t as l}from"./theme-HGuLkZQa.js";import{r as o}from"./index-Bv6NpD7H.js";import{S as _}from"./ic_trash-D73pFxRp.js";import{H as j}from"./Heading-DUIPQt0u.js";import{s as E}from"./scroll-CJow8B3m.js";import"./iframe-CHswHk7H.js";import"./extends-ClQVCWlZ.js";import"./Button.style-BLFlJowU.js";import"./Label-CmDdKh5I.js";import"./SupportingText-4G-irPgJ.js";import"./_commonjsHelpers-B64exGhy.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[c]="b5b56c43-ead9-49e9-9b41-e24985cb996f",t._sentryDebugIdIdentifier="sentry-dbid-b5b56c43-ead9-49e9-9b41-e24985cb996f")}catch{}})();const M=t=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M6.1135 3.99996L7.44683 5.33329H13.3335V12H2.66683V3.99996H6.1135ZM6.66683 2.66663H2.66683C1.9335 2.66663 1.34016 3.26663 1.34016 3.99996L1.3335 12C1.3335 12.7333 1.9335 13.3333 2.66683 13.3333H13.3335C14.0668 13.3333 14.6668 12.7333 14.6668 12V5.33329C14.6668 4.59996 14.0668 3.99996 13.3335 3.99996H8.00016L6.66683 2.66663Z",fill:"#525866"})),Z=t=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M8 10H4V11.3333H8V10Z",fill:"#525866"}),o.createElement("path",{d:"M12 4.66667H8V6H12V4.66667Z",fill:"#525866"}),o.createElement("path",{d:"M10 7.33333H6V8.66667H10V7.33333Z",fill:"#525866"}),o.createElement("path",{d:"M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667Z",fill:"#525866"})),q=a({position:"relative",width:"100%",minHeight:"calc(100vh - 11.6rem - 4.8rem - 2rem)",padding:"0 1.6rem",border:`1px solid ${l.colors.gray_300}`,borderRadius:"16px"}),D=a({display:"flex",alignItems:"center",gap:"0.8rem",...l.text.body04,fontWeight:500,whiteSpace:"nowrap"}),N=a({display:"flex",alignItems:"center",gap:"0.8rem"}),R=a({...l.text.body08,color:l.colors.gray_500,whiteSpace:"nowrap"}),L=a({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",position:"sticky",top:0,height:"7.2rem",padding:"1.6rem 0rem",borderBottom:`1px solid ${l.colors.gray_200}`,backgroundColor:l.colors.white}),k=a({width:"100%",padding:"0.8rem 0",backgroundColor:l.colors.white}),A=a({width:"100%",height:"calc(100vh - 11.6rem - 7.2rem - 6.4rem - 4.8rem - 2rem - 0.2rem - 0.8rem)",marginTop:"0.8rem",overflowY:"scroll",scrollBehavior:"smooth"}),W={timeline:e(Z,{width:16,height:16}),file:e(M,{width:16,height:16}),deleted:e(_,{width:16,height:16})},s=({variant:t,title:c,headerOption:u,contentOption:C,description:H,children:T,...I})=>r("section",{css:q,...I,children:[r("header",{css:L,children:[r("div",{css:N,children:[r(j,{css:D,tag:"H2",children:[W[t],c]}),e("p",{css:R,children:H})]}),u]}),e("div",{css:k,children:C}),e("div",{css:[A,E],children:T})]});s.__docgenInfo={description:"",methods:[],displayName:"ContentBox",props:{variant:{required:!0,tsType:{name:"union",raw:"'timeline' | 'file' | 'deleted'",elements:[{name:"literal",value:"'timeline'"},{name:"literal",value:"'file'"},{name:"literal",value:"'deleted'"}]},description:"ContentBox를 활용할 도메인, timeline | file | deleted"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerOption:{required:!1,tsType:{name:"ReactNode"},description:""},contentOption:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const ae={title:"Shared/ContentBox",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e("div",{css:{width:"80rem"},children:e(t,{})})],args:{variant:"timeline",title:"컨텐츠",children:e(O,{})}},i=({children:t})=>e(V,{variant:"primary",css:{padding:"1.4rem 1.2rem",width:"max-content",...l.text.body08},children:t}),d={render:()=>e(s,{variant:"file",title:"파일",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"드라이브에 파일이 존재하지 않습니다."})})})},m={render:()=>e(s,{variant:"timeline",title:"타임라인",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"타임라인 뷰입니다."})})})},p={render:()=>e(s,{variant:"deleted",title:"휴지통",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"휴지통 뷰입니다."})})})};var y,x,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ContentBox variant="file" title="파일" headerOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>} contentOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>}>
      <Flex styles={{
      width: '100%',
      height: '50rem',
      justify: 'center',
      align: 'center'
    }}>
        <Text>드라이브에 파일이 존재하지 않습니다.</Text>
      </Flex>
    </ContentBox>
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,S,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ContentBox variant="timeline" title="타임라인" headerOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>} contentOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>}>
      <Flex styles={{
      width: '100%',
      height: '50rem',
      justify: 'center',
      align: 'center'
    }}>
        <Text>타임라인 뷰입니다.</Text>
      </Flex>
    </ContentBox>
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var v,F,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ContentBox variant="deleted" title="휴지통" headerOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <Input placeholder="파일 및 폴더명을 검색해보세요" />
          <SampleButton>파일 업로드</SampleButton>
        </Flex>} contentOption={<Flex styles={{
    align: 'center',
    gap: '0.8rem'
  }}>
          <SampleButton>삭제</SampleButton>
          <SampleButton>선택</SampleButton>
        </Flex>}>
      <Flex styles={{
      width: '100%',
      height: '50rem',
      justify: 'center',
      align: 'center'
    }}>
        <Text>휴지통 뷰입니다.</Text>
      </Flex>
    </ContentBox>
}`,...(b=(F=p.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const se=["File","TimeLine","Deleted"];export{p as Deleted,d as File,m as TimeLine,se as __namedExportsOrder,ae as default};
