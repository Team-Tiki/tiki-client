import { css } from '@emotion/react';

export const pageStyle = css({
  padding: '2rem 16rem',
});

export const headerStyle = css({
  display: 'flex',

  padding: '1.6rem 0rem 2.4rem 0rem',

  verticalAlign: 'middle',
});

export const iconStyle = css({
  display: 'flex',

  alignItems: 'center',
  gap: '0.8rem',
});

export const sectionStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '2rem',

  overflow: 'hidden',
});

export const daySectionStyle = css({
  display: 'flex',

  width: '110rem',
  borderRadius: '6px',

  overflowX: 'scroll',

  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
