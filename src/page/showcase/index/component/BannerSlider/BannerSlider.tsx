import { css } from '@emotion/react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { MouseEvent } from 'react';

import { default as ArrowLeft } from '@/common/asset/svg/ic_arrow_left_white.svg?react';
import { default as ArrowRight } from '@/common/asset/svg/ic_arrow_right_white.svg?react';
import Carousel from '@/common/component/Carousel/Carousel';
import { theme } from '@/common/style/theme/theme';

import AdvBanner from '@/page/showcase/index/component/AdvBanner/AdvBanner';
import { ADVBANNER } from '@/page/showcase/index/constant/banner';

const BannerSlider = () => {
  return (
    <Carousel
      height="224px"
      autoLoop={true}
      renderedLeftArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
        <button onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
          <ArrowLeft width="1.6rem" height="1.6rem" />
        </button>
      )}
      renderedRightArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
        <button onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
          <ArrowRight width="1.6rem" height="1.6rem" />
        </button>
      )}>
      {ADVBANNER.map((adv) => (
        <Carousel.Item key={adv.id} index={adv.id - 1}>
          <AdvBanner title={adv.name} imageUrl={adv.imageUrl} externUrl={adv.externUrl} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerSlider;

const arrowStyle = css({
  position: 'absolute',
  top: 0,
  bottom: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  margin: 'auto 0',

  width: '3.2rem',
  height: '3.2rem',

  zIndex: theme.zIndex.overlayMiddle,

  border: 'none',
  borderRadius: '16px',

  background: 'rgb(255,255,255,0.3)',

  cursor: 'pointer',
});
