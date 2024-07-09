import { css } from '@emotion/react';

export const sectionStyle = css({
  display: 'flex',

  width: '110.5rem',
  gap: '2rem',

  flexDirection: 'column',
});

export const daySectionStyle = css({
  display: 'flex',

  overflow: 'scroll',

  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
