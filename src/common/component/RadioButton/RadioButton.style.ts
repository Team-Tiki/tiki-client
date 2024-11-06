import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const radioButtonLayoutStyle = css({
  display: 'flex',

  gap: '0.4rem',

  cursor: 'pointer',
});

export const inputStyle = css({
  '& + label': {
    cursor: 'pointer',
    transition: '0.2s ease-in-out',

    ...theme.text.body06,
  },

  accentColor: theme.colors.key_500,

  cursor: 'pointer',
});

export const labelStyle = css({
  color: theme.colors.black,

  whiteSpace: 'nowrap',
});

export const radioGroupStyle = css({
  display: 'flex',

  gap: '0.8rem',
});
