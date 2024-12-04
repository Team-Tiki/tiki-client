import{a as t,j as n}from"./emotion-react-jsx-runtime.browser.esm-CSiOhW6i.js";import{c as m}from"./emotion-react.browser.esm-DWx2VAb9.js";import{w as h,x as p}from"./index-CLsVEhIN.js";import{l,h as u,B as g,E as b,p as f}from"./index-CvOiDExs.js";import"./iframe-DyHOD6cA.js";import"./jsx-runtime-Dh0KApn4.js";import"./index-BUjKFtp4.js";import"./_commonjsHelpers-BphuXKqK.js";import"./index-BugzcMrQ.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="bbd02f3c-7b7a-440b-93c6-501064c62490",r._sentryDebugIdIdentifier="sentry-dbid-bbd02f3c-7b7a-440b-93c6-501064c62490")}catch{}})();const w=""+new URL("../img/advBannerClub1.png",import.meta.url).href,y=""+new URL("../img/advBannerClub2.png",import.meta.url).href,v=""+new URL("../img/advBannerClub3.png",import.meta.url).href,D={title:"Common/Carousel",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{children:[]},decorators:[r=>t("div",{style:{width:"100vw"},children:t(r,{})})]},C=m({"::before":{content:'""',position:"absolute",top:0,left:0,width:"16rem",height:"100%",background:u.colors.black_shade}}),s=m({position:"absolute",top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",margin:"auto 0",width:"3.2rem",height:"3.2rem",zIndex:u.zIndex.overlayBottom,border:"none",borderRadius:"16px",background:"rgb(255,255,255,0.3)",cursor:"pointer"}),i={render:()=>{const r=Array.from({length:10}).map((e,o)=>o+1);return t(l,{autoLoop:!0,renderedLeftArrow:e=>t("button",{onClick:e,css:[s,{left:"1.6rem"}],children:t(h,{width:"1.6rem",height:"1.6rem"})}),renderedRightArrow:e=>t("button",{onClick:e,css:[s,{right:"1.6rem"}],children:t(p,{width:"1.6rem",height:"1.6rem"})}),children:r.map((e,o)=>n(f,{css:C,index:o,children:[n("div",{css:{position:"absolute",padding:"3.2rem"},children:[n(g,{css:{color:"white"},children:[e,"번째 슬라이드"]}),t(b,{css:{width:"200px"},variant:"primary",children:"이동하기"})]}),t("img",{css:{objectFit:"cover"},src:o%3===0?w:o%3===1?y:v,alt:`img${e}`})]},e))})}};var a,d,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const arr = Array.from({
      length: 10
    }).map((_, i) => i + 1);
    return <Carousel autoLoop={true} renderedLeftArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => <button onClick={onClick} css={[arrowStyle, {
      left: '1.6rem'
    }]}>
            <IcArrowLeftWhite width="1.6rem" height="1.6rem" />
          </button>} renderedRightArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => <button onClick={onClick} css={[arrowStyle, {
      right: '1.6rem'
    }]}>
            <IcArrowRightWhite width="1.6rem" height="1.6rem" />
          </button>}>
        {arr.map((num, idx) => <CarouselItem css={shadowStyle} key={num} index={idx}>
            <div css={{
          position: 'absolute',
          padding: '3.2rem'
        }}>
              <Heading css={{
            color: 'white'
          }}>{num}번째 슬라이드</Heading>
              <Button css={{
            width: '200px'
          }} variant="primary">
                이동하기
              </Button>
            </div>
            <img css={{
          objectFit: 'cover'
        }} src={idx % 3 === 0 ? img1 : idx % 3 === 1 ? img2 : img3} alt={\`img\${num}\`} />
          </CarouselItem>)}
      </Carousel>;
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,D as default};
