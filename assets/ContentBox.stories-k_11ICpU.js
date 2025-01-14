import{j as r,a as e,F as _}from"./emotion-react-jsx-runtime.browser.esm-FGk7zjxF.js";import{h as l,a as C,X as j,K as n,H as m,i as h,j as q}from"./index-DDwL3vDa.js";import{o as N,p as D,f as R,q as k}from"./index-7omPbLKz.js";import{c as o}from"./emotion-react.browser.esm-C_NgHwMU.js";import"./iframe-DYqJlymL.js";import"./jsx-runtime-CzGf6ERD.js";import"./index-2yLFp7a7.js";import"./_commonjsHelpers-CjgE25sq.js";import"./index-BLJLP8PM.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="b70c3b34-9ccc-41e2-8a35-a02e4d2b97ed",t._sentryDebugIdIdentifier="sentry-dbid-b70c3b34-9ccc-41e2-8a35-a02e4d2b97ed")}catch{}})();const A=o({position:"relative",width:"100%",height:"calc(100vh - 11.6rem - 4.8rem - 2rem)",padding:"0 1.6rem",border:`1px solid ${l.colors.gray_300}`,borderRadius:"16px",overflow:"hidden"}),E=o({display:"flex",alignItems:"center",gap:"0.8rem",...l.text.body04,fontWeight:500,whiteSpace:"nowrap"}),H=o({display:"flex",alignItems:"center",gap:"0.8rem"}),K=o({...l.text.body08,color:l.colors.gray_500,whiteSpace:"nowrap"}),L=o({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",position:"sticky",top:0,height:"7.2rem",padding:"1.6rem 0rem",borderBottom:`1px solid ${l.colors.gray_200}`,backgroundColor:l.colors.white}),W=o({width:"100%",padding:"0.8rem 0",backgroundColor:l.colors.white}),X=o({width:"100%",height:"calc(100vh - 11.6rem - 7.2rem - 6.4rem - 4.8rem - 2rem - 0.2rem - 0.8rem)",marginTop:"0.8rem",overflowY:"scroll",scrollBehavior:"smooth"}),Y={timeline:e(N,{width:16,height:16}),file:e(D,{width:16,height:16}),deleted:e(R,{width:16,height:16}),handover:e(k,{width:16,height:16})},a=({variant:t,title:s,headerOption:g,contentOption:b,description:I,children:T,...O})=>r("section",{css:A,...O,children:[r("header",{css:L,children:[r("div",{css:H,children:[r(C,{css:E,tag:"H2",children:[Y[t],s]}),e("p",{css:K,children:I})]}),g]}),e("div",{css:W,children:b}),e("div",{css:[X,j],children:T})]});a.__docgenInfo={description:"",methods:[],displayName:"ContentBox",props:{variant:{required:!0,tsType:{name:"union",raw:"'timeline' | 'file' | 'deleted' | 'handover'",elements:[{name:"literal",value:"'timeline'"},{name:"literal",value:"'file'"},{name:"literal",value:"'deleted'"},{name:"literal",value:"'handover'"}]},description:"ContentBox를 활용할 도메인, timeline | file | deleted | handover"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerOption:{required:!1,tsType:{name:"ReactNode"},description:""},contentOption:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const ee={title:"Shared/ContentBox",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e("div",{css:{width:"80rem"},children:e(t,{})})],args:{variant:"timeline",title:"컨텐츠",children:e(_,{})}},i=({children:t})=>e(q,{variant:"primary",css:{padding:"1.4rem 1.2rem",width:"max-content",...l.text.body08},children:t}),d={render:()=>e(a,{variant:"file",title:"파일",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"드라이브에 파일이 존재하지 않습니다."})})})},c={render:()=>e(a,{variant:"timeline",title:"타임라인",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"타임라인 뷰입니다."})})})},p={render:()=>e(a,{variant:"deleted",title:"휴지통",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"휴지통 뷰입니다."})})})};var u,y,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,B,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,v,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(v=p.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const te=["File","TimeLine","Deleted"];export{p as Deleted,d as File,c as TimeLine,te as __namedExportsOrder,ee as default};
