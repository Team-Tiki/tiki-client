import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const radioButtonLayoutStyle = css({
  display: 'flex',

  gap: '0.4rem',

  cursor: 'pointer',
});

export const inputStyle = css({
  position: 'relative',

  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',

  width: '1.5rem',
  height: '1.5rem',

  border: `1.5px solid ${theme.colors.gray_400}`,
  borderRadius: '50%',

  backgroundColor: theme.colors.gray_100,

  cursor: 'pointer',

  transition: '0.2s ease-in-out',

  '&:checked': {
    borderColor: theme.colors.key_500,
  },

  '&:checked::after': {
    position: 'absolute',
    top: '50%',
    left: '50%',

    width: '0.75rem',
    height: '0.75rem',

    margin: '0 auto',

    borderRadius: '50%',

    content: '""',
    backgroundColor: theme.colors.key_500,

    transform: 'translate(-50%, -50%)',
  },

  '& + label': {
    cursor: 'pointer',
    ...theme.text.body06,
  },
});

export const labelStyle = css({
  color: theme.colors.black,

  whiteSpace: 'nowrap',
});

export const radioGroupStyle = css({
  display: 'flex',

  gap: '0.8rem',
});
