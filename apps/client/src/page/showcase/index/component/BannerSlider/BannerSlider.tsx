import { css } from '@emotion/react';
import { IcArrowLeftWhite, IcArrowRightWhite } from '@tiki/icon';
import { Carousel, CarouselItem, theme } from '@tiki/ui';

import { MouseEvent } from 'react';

import AdvBanner from '@/page/showcase/index/component/AdvBanner/AdvBanner';
import { ADVBANNER } from '@/page/showcase/index/constant/banner';

const BannerSlider = () => {
  return (
    <Carousel
      height="22.4rem"
      autoLoop={true}
      renderedLeftArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
        <button onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
          <IcArrowLeftWhite width="1.6rem" height="1.6rem" />
        </button>
      )}
      renderedRightArrow={(onClick: (e: MouseEvent<HTMLButtonElement>) => void) => (
        <button onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
          <IcArrowRightWhite width="1.6rem" height="1.6rem" />
        </button>
      )}>
      {ADVBANNER.map((adv) => (
        <CarouselItem key={adv.id} index={adv.id - 1}>
          <AdvBanner title={adv.name} imageUrl={adv.imageUrl} externUrl={adv.externUrl} />
        </CarouselItem>
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
