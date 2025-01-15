import{j as r,a as e,F as b}from"./emotion-react-jsx-runtime.browser.esm-CRirncI8.js";import{h as l,a as C,X as j,K as n,W as m,i as h,j as q}from"./index-C5kDx6sH.js";import{o as N,p as D,f as R,q as k}from"./index-8lDjhXpy.js";import{c as a}from"./emotion-react.browser.esm-DKPWFE6-.js";import"./iframe-Bm9owOro.js";import"./jsx-runtime-BT-kpMem.js";import"./index-ZxPCVBDZ.js";import"./_commonjsHelpers-Co-uX5Gq.js";import"./index-CNPQ3o0o.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="44942ca4-8c07-4413-aeea-60c18e2897c3",t._sentryDebugIdIdentifier="sentry-dbid-44942ca4-8c07-4413-aeea-60c18e2897c3")}catch{}})();const A=a({position:"relative",width:"100%",height:"calc(100vh - 11.6rem - 4.8rem - 2rem)",padding:"0 1.6rem",border:`1px solid ${l.colors.gray_300}`,borderRadius:"16px",overflow:"hidden"}),W=a({display:"flex",alignItems:"center",gap:"0.8rem",...l.text.body04,fontWeight:500,whiteSpace:"nowrap"}),E=a({display:"flex",alignItems:"center",gap:"0.8rem"}),K=a({...l.text.body08,color:l.colors.gray_500,whiteSpace:"nowrap"}),L=a({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",position:"sticky",top:0,height:"7.2rem",padding:"1.6rem 0rem",borderBottom:`1px solid ${l.colors.gray_200}`,backgroundColor:l.colors.white}),X=a({width:"100%",padding:"0.8rem 0",backgroundColor:l.colors.white}),Y=a({width:"100%",height:"calc(100vh - 11.6rem - 7.2rem - 6.4rem - 4.8rem - 2rem - 0.2rem - 0.8rem)",marginTop:"0.8rem",overflowY:"scroll",scrollBehavior:"smooth"}),$={timeline:e(N,{width:16,height:16}),file:e(D,{width:16,height:16}),deleted:e(R,{width:16,height:16}),handover:e(k,{width:16,height:16})},o=({variant:t,title:s,headerOption:g,contentOption:I,description:T,children:O,..._})=>r("section",{css:A,..._,children:[r("header",{css:L,children:[r("div",{css:E,children:[r(C,{css:W,tag:"H2",children:[$[t],s]}),e("p",{css:K,children:T})]}),g]}),e("div",{css:X,children:I}),e("div",{css:[Y,j],children:O})]});o.__docgenInfo={description:"",methods:[],displayName:"ContentBox",props:{variant:{required:!0,tsType:{name:"union",raw:"'timeline' | 'file' | 'deleted' | 'handover'",elements:[{name:"literal",value:"'timeline'"},{name:"literal",value:"'file'"},{name:"literal",value:"'deleted'"},{name:"literal",value:"'handover'"}]},description:"ContentBox를 활용할 도메인, timeline | file | deleted | handover"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerOption:{required:!1,tsType:{name:"ReactNode"},description:""},contentOption:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const ee={title:"Shared/ContentBox",component:o,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e("div",{css:{width:"80rem"},children:e(t,{})})],args:{variant:"timeline",title:"컨텐츠",children:e(b,{})}},i=({children:t})=>e(q,{variant:"primary",css:{padding:"1.4rem 1.2rem",width:"max-content",...l.text.body08},children:t}),c={render:()=>e(o,{variant:"file",title:"파일",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"드라이브에 파일이 존재하지 않습니다."})})})},d={render:()=>e(o,{variant:"timeline",title:"타임라인",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"타임라인 뷰입니다."})})})},p={render:()=>e(o,{variant:"deleted",title:"휴지통",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"휴지통 뷰입니다."})})})};var u,y,x;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,B,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,v,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(v=p.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const te=["File","TimeLine","Deleted"];export{p as Deleted,c as File,d as TimeLine,te as __namedExportsOrder,ee as default};
