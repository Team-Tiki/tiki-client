import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const adderStyle = css({
  padding: '4rem 6rem',

  border: 'none',
  borderRadius: '8px',
  backgroundColor: theme.colors.gray_100,

  ':hover': {
    backgroundColor: theme.colors.key_100,

    '&>*': {
      fill: theme.colors.key_400,

      transition: 'all ease-in 0.1s',
    },

    transition: 'all ease-in 0.1s',
  },
});
