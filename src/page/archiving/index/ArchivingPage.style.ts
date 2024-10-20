import { css } from '@emotion/react';

export const pageStyle = () =>
  css({
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    paddingLeft: '6rem',

    overflow: 'hidden',
  });

export const timelineStyle = () =>
  css({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',

    borderRadius: '16px',
    padding: '2.6rem 2.4rem',

    gap: '1.6rem',

    overflow: 'hidden',
  });

export const contentStyle = css({
  maxHeight: '60rem',

  flexDirection: 'column',
  gap: '2rem',
});

export const daySectionStyle = () =>
  css({
    position: 'relative',
    display: 'flex',

    width: '100%',
    height: '100%',

    borderRadius: '6px',

    whiteSpace: 'nowrap',

    overscrollBehavior: 'contain',

    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  });

export const contentBoxStyle = css({
  marginLeft: '7.6rem',
});
