import { css } from '@emotion/react';
import { scrollStyle, theme } from '@tiki/ui';

export const buttonStyle = (isActive: boolean) =>
  css({
    width: '32rem',

    marginTop: '2.4rem',

    cursor: 'pointer',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });

export const textStyle = css({
  color: theme.colors.gray_700,
  fontWeight: 400,
});

export const fileListWrapperStyle = css({
  width: '100%',
  maxHeight: '30rem',

  paddingTop: '2rem',

  overflowY: 'scroll',

  scrollBehavior: 'smooth',

  ...scrollStyle,
});

export const scrollContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '39.5rem',
  width: '100%',

  position: 'relative',

  overflowY: 'auto',
  overflowX: 'hidden',

  boxSizing: 'content-box',

  ...scrollStyle,
});

export const flexStyle = css({
  width: '100%',

  paddingTop: '2rem',

  flexDirection: 'column',

  justifyContent: 'space-between',
  alignItems: 'center',

  gap: '2rem',
});
