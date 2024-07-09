import { css } from '@emotion/react';

export const pageStyle = css({
  padding: '2rem 16rem',
});

export const sectionStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '2rem',

  overflow: 'hidden',
});

export const daySectionStyle = css({
  display: 'flex',

  borderRadius: '6px',

  overflow: 'scroll',

  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
