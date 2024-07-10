import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  padding: '2rem 16rem',
});

export const headerStyle = css({
  display: 'flex',

  padding: '1.6rem 0rem 2.4rem 0rem',
});

export const sectionStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '2rem',

  overflow: 'hidden',
});

export const daySectionStyle = css({
  position: 'relative',
  display: 'flex',

  width: '110.5rem',
  height: '46.4rem',
  borderRadius: '6px',

  overflowX: 'scroll',

  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const buttonStyle = css({
  width: '13.2rem',

  marginLeft: 'auto',

  borderRadius: '28px',

  ...theme.text.body04,
  '&:hover': {
    backgroundColor: theme.colors.blue_hover,
  },
});
