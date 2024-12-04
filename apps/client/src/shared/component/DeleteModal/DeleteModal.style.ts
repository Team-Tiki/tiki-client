import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const deleteStyle = css({
  '&:hover': {
    backgroundColor: theme.colors.key_200,
  },

  width: '15.8rem',
});

export const cancelStyle = css({
  '&:hover': {
    backgroundColor: theme.colors.blue_100,
  },

  width: '15.8rem',
});
