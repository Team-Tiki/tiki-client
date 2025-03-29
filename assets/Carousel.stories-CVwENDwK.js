import{a as t,j as n}from"./emotion-react-jsx-runtime.browser.esm-DJkuVeTt.js";import{c as m}from"./emotion-react.browser.esm-B-LSdK9f.js";import{s as h,t as g}from"./index-B-uMTWfr.js";import{o as l,n as u,s as p,t as f,r as w}from"./index-C_kJYWXs.js";import"./iframe-BC0PKy5r.js";import"./jsx-runtime-CMjw8_oU.js";import"./index-D_FezmPz.js";import"./_commonjsHelpers-DzL0Ai3T.js";import"./index-BIcoZIF9.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="774f18d2-28de-4a6c-8013-62f7cd1df34d",r._sentryDebugIdIdentifier="sentry-dbid-774f18d2-28de-4a6c-8013-62f7cd1df34d")}catch{}})();const b=""+new URL("../img/advBannerClub1.png",import.meta.url).href,y=""+new URL("../img/advBannerClub2.png",import.meta.url).href,v=""+new URL("../img/advBannerClub3.png",import.meta.url).href,E={title:"Common/Carousel",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{children:[]},decorators:[r=>t("div",{style:{width:"100vw"},children:t(r,{})})]},C=m({"::before":{content:'""',position:"absolute",top:0,left:0,width:"16rem",height:"100%",background:u.colors.black_shade}}),s=m({position:"absolute",top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",margin:"auto 0",width:"3.2rem",height:"3.2rem",zIndex:u.zIndex.overlayBottom,border:"none",borderRadius:"16px",background:"rgb(255,255,255,0.3)",cursor:"pointer"}),i={render:()=>{const r=Array.from({length:10}).map((e,o)=>o+1);return t(l,{autoLoop:!0,renderedLeftArrow:e=>t("button",{onClick:e,css:[s,{left:"1.6rem"}],children:t(h,{width:"1.6rem",height:"1.6rem"})}),renderedRightArrow:e=>t("button",{onClick:e,css:[s,{right:"1.6rem"}],children:t(g,{width:"1.6rem",height:"1.6rem"})}),children:r.map((e,o)=>n(w,{css:C,index:o,children:[n("div",{css:{position:"absolute",padding:"3.2rem"},children:[n(p,{css:{color:"white"},children:[e,"번째 슬라이드"]}),t(f,{css:{width:"200px"},variant:"primary",children:"이동하기"})]}),t("img",{css:{objectFit:"cover"},src:o%3===0?b:o%3===1?y:v,alt:`img${e}`})]},e))})}};var a,d,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,E as default};
