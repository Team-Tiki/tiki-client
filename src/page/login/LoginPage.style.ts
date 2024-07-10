import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',

  height: '100vh',
});
export const checkboxStyle = css({
  appearance: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '14px',
  height: '14px',

  borderRadius: '50%',
  backgroundColor: theme.colors.gray_200,

  cursor: 'pointer',

  '&:before': {
    content: '"✓"',

    display: 'inline-block',

    textAlign: 'center',

    width: '14px',
    height: '14px',

    color: 'white',
  },

  '&:checked': {
    backgroundColor: theme.colors.blue_900,
  },

  '& ~ label': {
    cursor: 'pointer',
  },
});

export const findPasswordButtonStyle = css({
  width: '100%',

  marginTop: '3.2rem',

  color: theme.colors.gray_800,

  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
});
