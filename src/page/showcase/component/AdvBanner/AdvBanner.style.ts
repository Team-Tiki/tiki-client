import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (imageUrl: string) =>
  css({
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    padding: '5rem 0 5.8rem 6.4rem',

    borderRadius: '16px',

    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    overflow: 'hidden',

    '::before': {
      content: '""',

      position: 'absolute',
      top: 0,
      left: 0,

      width: '16rem',
      height: '100%',

      background: theme.colors.black_shade,
    },
  });

export const titleStyle = css({
  zIndex: theme.zIndex.overlayBottom,

  color: theme.colors.white,
  fontWeight: 600,
});

export const contentStyle = css({
  zIndex: theme.zIndex.overlayBottom,

  height: '1.6rem',

  color: theme.colors.white,
  fontWeight: 500,

  overflow: 'hidden',
});

export const buttonStyle = css({
  zIndex: theme.zIndex.overlayBottom,

  padding: '1rem 7.65rem',

  borderRadius: '1.4rem',
});
