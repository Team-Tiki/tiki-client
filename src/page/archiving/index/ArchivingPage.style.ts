import { css } from '@emotion/react';

export const pageStyle = () =>
  css({
    width: '100%',
    height: '100%',

    overflow: 'hidden',
  });

export const contentBoxStyle = css({
  height: '64rem',
});

export const timelineStyle = () =>
  css({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',

    borderRadius: '16px',

    gap: '1.6rem',
  });

export const contentStyle = css({
  width: '100%',

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
  });
