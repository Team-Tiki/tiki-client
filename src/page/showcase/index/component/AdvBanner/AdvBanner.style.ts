import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  position: 'relative',

  width: '100%',

  padding: '5rem 0 5.8rem 6.4rem',

  borderRadius: '16px',

  overflow: 'hidden',

  '& > *': {
    zIndex: theme.zIndex.overlayBottom,
  },

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
  color: theme.colors.white,
  fontWeight: 600,
});

export const contentStyle = css({
  height: '1.6rem',

  color: theme.colors.white,
  fontWeight: 500,

  overflow: 'hidden',
});

export const buttonStyle = css({
  padding: '1.2rem 7.65rem',

  borderRadius: '1.4rem',

  ':hover': {
    backgroundColor: theme.colors.blue_300,
  },
});

export const imgStyle = css({
  position: 'absolute',

  left: 0,
  top: 0,

  width: '100%',
  height: '100%',

  objectFit: 'cover',
});
