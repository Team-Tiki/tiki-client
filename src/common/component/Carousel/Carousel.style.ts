import { css } from '@emotion/react';

import { CarouselProps } from '@/common/component/Carousel/Carousel';
import { theme } from '@/common/style/theme/theme';

export const itemStyle = css({
  width: '100%',

  flexShrink: 0,

  '& > *': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const sliderStyle = (height: string) =>
  css({
    display: 'flex',

    width: '100%',
    height,

    overflow: 'hidden',

    '& > div': {
      width: '100%',
      height,
    },
  });

export const containerStyle = ({ width, height }: Pick<CarouselProps, 'width' | 'height'>) =>
  css({
    position: 'relative',

    width,
    height,

    borderRadius: '16px',

    overflow: 'hidden',

    '& *': {
      userSelect: 'none',
      touchAction: 'none',
    },
  });

export const arrowStyle = (position: 'left' | 'right') =>
  css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: position === 'left' ? '1.6rem' : 'auto',
    right: position === 'right' ? '1.6rem' : 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    margin: 'auto 0',

    width: '3.2rem',
    height: '3.2rem',

    zIndex: theme.zIndex.overlayBottom,

    border: 'none',
    borderRadius: '16px',

    background: 'rgb(0,0,0,0.3)',

    cursor: 'pointer',
  });
