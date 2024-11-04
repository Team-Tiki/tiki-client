import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const scrollStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '12rem',
  width: '100%',

  gap: '1.2rem',
  position: 'relative',

  overflowY: 'auto',
  overflowX: 'hidden',

  boxSizing: 'content-box',

  '&::-webkit-scrollbar': {
    width: '1rem',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.gray_300,
    borderRadius: '4px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
});

export const flexStyle = css({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '2rem',
});
