import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const deleteStyle = css({
  '&:hover': {
    backgroundColor: theme.colors.blue_300,
  },

  width: '15.8rem',
});

export const cancelStyle = css({
  '&:hover': {
    backgroundColor: theme.colors.blue_100,
  },

  width: '15.8rem',
});
