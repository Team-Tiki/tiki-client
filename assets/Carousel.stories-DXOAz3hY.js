import{a as t,j as n}from"./emotion-react-jsx-runtime.browser.esm-CSF3Y0yF.js";import{c}from"./emotion-react.browser.esm-BevwwjJH.js";import{w as h,x as g}from"./index-BLZylyQv.js";import{k as l,h as u,Q as p,j as f,m as w}from"./index-DD5EWK0m.js";import"./iframe-CgjXP5Ue.js";import"./jsx-runtime-t0otDmxv.js";import"./index-DyaUf-Bf.js";import"./_commonjsHelpers-Cj1Jf6V2.js";import"./index-CSrb64wr.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="463000ff-25c0-47d2-8ae6-08ede2829378",r._sentryDebugIdIdentifier="sentry-dbid-463000ff-25c0-47d2-8ae6-08ede2829378")}catch{}})();const b=""+new URL("../img/advBannerClub1.png",import.meta.url).href,y=""+new URL("../img/advBannerClub2.png",import.meta.url).href,v=""+new URL("../img/advBannerClub3.png",import.meta.url).href,E={title:"Common/Carousel",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{children:[]},decorators:[r=>t("div",{style:{width:"100vw"},children:t(r,{})})]},C=c({"::before":{content:'""',position:"absolute",top:0,left:0,width:"16rem",height:"100%",background:u.colors.black_shade}}),s=c({position:"absolute",top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",margin:"auto 0",width:"3.2rem",height:"3.2rem",zIndex:u.zIndex.overlayBottom,border:"none",borderRadius:"16px",background:"rgb(255,255,255,0.3)",cursor:"pointer"}),i={render:()=>{const r=Array.from({length:10}).map((e,o)=>o+1);return t(l,{autoLoop:!0,renderedLeftArrow:e=>t("button",{onClick:e,css:[s,{left:"1.6rem"}],children:t(h,{width:"1.6rem",height:"1.6rem"})}),renderedRightArrow:e=>t("button",{onClick:e,css:[s,{right:"1.6rem"}],children:t(g,{width:"1.6rem",height:"1.6rem"})}),children:r.map((e,o)=>n(w,{css:C,index:o,children:[n("div",{css:{position:"absolute",padding:"3.2rem"},children:[n(p,{css:{color:"white"},children:[e,"번째 슬라이드"]}),t(f,{css:{width:"200px"},variant:"primary",children:"이동하기"})]}),t("img",{css:{objectFit:"cover"},src:o%3===0?b:o%3===1?y:v,alt:`img${e}`})]},e))})}};var a,d,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,E as default};
