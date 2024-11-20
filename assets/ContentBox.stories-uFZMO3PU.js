import{c as a,j as r,a as e,F as O}from"./emotion-react.browser.esm-jro6eB32.js";import{B as b}from"./Button-CIUIglv0.js";import{F as i}from"./Flex-DsiuXi3l.js";import{I as h}from"./Input-DT16fZOH.js";import{T as g}from"./Text-DzBOMJFF.js";import{t as o}from"./theme-DQKz66Qf.js";import{r as n}from"./index-BETB8xs-.js";import{S as _}from"./ic_trash-Co9kEEy0.js";import{H as E}from"./Heading-yC9WakZ4.js";import{s as M}from"./scroll-BW8Mj9f6.js";import"./iframe-hcMr1ntz.js";import"./extends-ClQVCWlZ.js";import"./Button.style-BFEP9mT8.js";import"./Label-DLOj2GCp.js";import"./SupportingText-k0qQg0Pw.js";import"./_commonjsHelpers-2UnFNFTw.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[c]="09cd0715-4d24-4ed2-a1ff-31e583ca3891",t._sentryDebugIdIdentifier="sentry-dbid-09cd0715-4d24-4ed2-a1ff-31e583ca3891")}catch{}})();const Z=t=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M6.1135 3.99996L7.44683 5.33329H13.3335V12H2.66683V3.99996H6.1135ZM6.66683 2.66663H2.66683C1.9335 2.66663 1.34016 3.26663 1.34016 3.99996L1.3335 12C1.3335 12.7333 1.9335 13.3333 2.66683 13.3333H13.3335C14.0668 13.3333 14.6668 12.7333 14.6668 12V5.33329C14.6668 4.59996 14.0668 3.99996 13.3335 3.99996H8.00016L6.66683 2.66663Z",fill:"#525866"})),j=t=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M12.6667 3.33333V9.33333H9.33333V12.6667H3.33333V3.33333H12.6667ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H10L14 10V3.33333C14 2.6 13.4 2 12.6667 2ZM8 9.33333H4.66667V8H8V9.33333ZM11.3333 6.66667H4.66667V5.33333H11.3333V6.66667Z",fill:"#525866"})),N=t=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M8 10H4V11.3333H8V10Z",fill:"#525866"}),n.createElement("path",{d:"M12 4.66667H8V6H12V4.66667Z",fill:"#525866"}),n.createElement("path",{d:"M10 7.33333H6V8.66667H10V7.33333Z",fill:"#525866"}),n.createElement("path",{d:"M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667Z",fill:"#525866"})),q=a({position:"relative",width:"100%",height:"calc(100vh - 11.6rem - 4.8rem - 2rem)",padding:"0 1.6rem",border:`1px solid ${o.colors.gray_300}`,borderRadius:"16px",overflow:"hidden"}),D=a({display:"flex",alignItems:"center",gap:"0.8rem",...o.text.body04,fontWeight:500,whiteSpace:"nowrap"}),L=a({display:"flex",alignItems:"center",gap:"0.8rem"}),R=a({...o.text.body08,color:o.colors.gray_500,whiteSpace:"nowrap"}),k=a({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",position:"sticky",top:0,height:"7.2rem",padding:"1.6rem 0rem",borderBottom:`1px solid ${o.colors.gray_200}`,backgroundColor:o.colors.white}),A=a({width:"100%",padding:"0.8rem 0",backgroundColor:o.colors.white}),W=a({width:"100%",height:"calc(100vh - 11.6rem - 7.2rem - 6.4rem - 4.8rem - 2rem - 0.2rem - 0.8rem)",marginTop:"0.8rem",overflowY:"scroll",scrollBehavior:"smooth"}),Y={timeline:e(N,{width:16,height:16}),file:e(Z,{width:16,height:16}),deleted:e(_,{width:16,height:16}),handover:e(j,{width:16,height:16})},s=({variant:t,title:c,headerOption:u,contentOption:F,description:V,children:I,...T})=>r("section",{css:q,...T,children:[r("header",{css:k,children:[r("div",{css:L,children:[r(E,{css:D,tag:"H2",children:[Y[t],c]}),e("p",{css:R,children:V})]}),u]}),e("div",{css:A,children:F}),e("div",{css:[W,M],children:I})]});s.__docgenInfo={description:"",methods:[],displayName:"ContentBox",props:{variant:{required:!0,tsType:{name:"union",raw:"'timeline' | 'file' | 'deleted' | 'handover'",elements:[{name:"literal",value:"'timeline'"},{name:"literal",value:"'file'"},{name:"literal",value:"'deleted'"},{name:"literal",value:"'handover'"}]},description:"ContentBox를 활용할 도메인, timeline | file | deleted | handover"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerOption:{required:!1,tsType:{name:"ReactNode"},description:""},contentOption:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const se={title:"Shared/ContentBox",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e("div",{css:{width:"80rem"},children:e(t,{})})],args:{variant:"timeline",title:"컨텐츠",children:e(O,{})}},l=({children:t})=>e(b,{variant:"primary",css:{padding:"1.4rem 1.2rem",width:"max-content",...o.text.body08},children:t}),d={render:()=>e(s,{variant:"file",title:"파일",headerOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(l,{children:"파일 업로드"})]}),contentOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(l,{children:"삭제"}),e(l,{children:"선택"})]}),children:e(i,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"드라이브에 파일이 존재하지 않습니다."})})})},m={render:()=>e(s,{variant:"timeline",title:"타임라인",headerOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(l,{children:"파일 업로드"})]}),contentOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(l,{children:"삭제"}),e(l,{children:"선택"})]}),children:e(i,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"타임라인 뷰입니다."})})})},p={render:()=>e(s,{variant:"deleted",title:"휴지통",headerOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(l,{children:"파일 업로드"})]}),contentOption:r(i,{styles:{align:"center",gap:"0.8rem"},children:[e(l,{children:"삭제"}),e(l,{children:"선택"})]}),children:e(i,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(g,{children:"휴지통 뷰입니다."})})})};var y,f,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,v,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,H,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(H=p.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const ce=["File","TimeLine","Deleted"];export{p as Deleted,d as File,m as TimeLine,ce as __namedExportsOrder,se as default};
