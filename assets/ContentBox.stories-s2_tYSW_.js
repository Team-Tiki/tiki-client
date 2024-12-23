import{j as r,a as e,F as _}from"./emotion-react-jsx-runtime.browser.esm-X40Ljg8D.js";import{f as l,Q as C,X as j,V as n,d as m,n as h,A as N}from"./index-D86Xz3BQ.js";import{m as q,n as D,f as R,o as A}from"./index-Cux8MSo6.js";import{c as o}from"./emotion-react.browser.esm--G7jxiOG.js";import"./iframe-CmxKGbyM.js";import"./jsx-runtime-CqA88Xid.js";import"./index-DP46ZViu.js";import"./_commonjsHelpers-B1-KKXIh.js";import"./index-FZfJ9VPi.js";import"../sb-preview/runtime.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="61f17acc-2494-4b2d-937f-9fee07dbba93",t._sentryDebugIdIdentifier="sentry-dbid-61f17acc-2494-4b2d-937f-9fee07dbba93")}catch{}})();const k=o({position:"relative",width:"100%",height:"calc(100vh - 11.6rem - 4.8rem - 2rem)",padding:"0 1.6rem",border:`1px solid ${l.colors.gray_300}`,borderRadius:"16px",overflow:"hidden"}),E=o({display:"flex",alignItems:"center",gap:"0.8rem",...l.text.body04,fontWeight:500,whiteSpace:"nowrap"}),H=o({display:"flex",alignItems:"center",gap:"0.8rem"}),L=o({...l.text.body08,color:l.colors.gray_500,whiteSpace:"nowrap"}),Q=o({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",position:"sticky",top:0,height:"7.2rem",padding:"1.6rem 0rem",borderBottom:`1px solid ${l.colors.gray_200}`,backgroundColor:l.colors.white}),V=o({width:"100%",padding:"0.8rem 0",backgroundColor:l.colors.white}),W=o({width:"100%",height:"calc(100vh - 11.6rem - 7.2rem - 6.4rem - 4.8rem - 2rem - 0.2rem - 0.8rem)",marginTop:"0.8rem",overflowY:"scroll",scrollBehavior:"smooth"}),X={timeline:e(q,{width:16,height:16}),file:e(D,{width:16,height:16}),deleted:e(R,{width:16,height:16}),handover:e(A,{width:16,height:16})},a=({variant:t,title:s,headerOption:g,contentOption:b,description:I,children:T,...O})=>r("section",{css:k,...O,children:[r("header",{css:Q,children:[r("div",{css:H,children:[r(C,{css:E,tag:"H2",children:[X[t],s]}),e("p",{css:L,children:I})]}),g]}),e("div",{css:V,children:b}),e("div",{css:[W,j],children:T})]});a.__docgenInfo={description:"",methods:[],displayName:"ContentBox",props:{variant:{required:!0,tsType:{name:"union",raw:"'timeline' | 'file' | 'deleted' | 'handover'",elements:[{name:"literal",value:"'timeline'"},{name:"literal",value:"'file'"},{name:"literal",value:"'deleted'"},{name:"literal",value:"'handover'"}]},description:"ContentBox를 활용할 도메인, timeline | file | deleted | handover"},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerOption:{required:!1,tsType:{name:"ReactNode"},description:""},contentOption:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const ee={title:"Shared/ContentBox",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e("div",{css:{width:"80rem"},children:e(t,{})})],args:{variant:"timeline",title:"컨텐츠",children:e(_,{})}},i=({children:t})=>e(N,{variant:"primary",css:{padding:"1.4rem 1.2rem",width:"max-content",...l.text.body08},children:t}),d={render:()=>e(a,{variant:"file",title:"파일",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"드라이브에 파일이 존재하지 않습니다."})})})},c={render:()=>e(a,{variant:"timeline",title:"타임라인",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"타임라인 뷰입니다."})})})},p={render:()=>e(a,{variant:"deleted",title:"휴지통",headerOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(h,{placeholder:"파일 및 폴더명을 검색해보세요"}),e(i,{children:"파일 업로드"})]}),contentOption:r(n,{styles:{align:"center",gap:"0.8rem"},children:[e(i,{children:"삭제"}),e(i,{children:"선택"})]}),children:e(n,{styles:{width:"100%",height:"50rem",justify:"center",align:"center"},children:e(m,{children:"휴지통 뷰입니다."})})})};var u,y,f;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,B,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
