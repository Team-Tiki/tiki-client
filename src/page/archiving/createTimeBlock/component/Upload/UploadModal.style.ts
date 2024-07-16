import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const scrollStyle = css({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '18rem',
  width: '38.5rem',

  gap: '0.8rem',
  position: 'relative',
  paddingRight: '1rem',

  overflowY: 'auto',

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
