import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (imageUrl: string) =>
  css({
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    height: '22.4rem',
    paddingLeft: '6.4rem',

    borderRadius: '16px',

    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    zIndex: theme.zIndex.overlayBottom,

    '::before': {
      content: '""',

      position: 'absolute',
      left: 0,

      width: '16rem',
      height: '100%',

      borderRadius: '16px',

      background: theme.colors.black_shade,

      zIndex: theme.zIndex.overlayBackground,
    },
  });

export const descriptionStyle = css({
  width: '24rem',
  height: '5.2rem',

  marginBottom: '2.4rem',

  overflow: 'hidden',
});

export const titleStyle = css({
  marginBottom: '0.8rem',

  color: theme.colors.white,
  fontWeight: 600,
});

export const contentStyle = css({
  color: theme.colors.white,
  fontWeight: 500,
});

export const buttonStyle = css({
  width: '24rem',
  height: '4rem',

  borderRadius: '1.6rem',
});
