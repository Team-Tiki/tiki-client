import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: '100vh',
});

export const formStyle = css({
  display: 'flex',

  width: '51.1rem',
  height: '53rem',

  padding: '6rem',
  alignItems: 'center',
  justifyContent: 'center',

  flexDirection: 'column',
});

export const findPasswordButtonStyle = css({
  width: '100%',

  marginTop: '4.8rem',

  color: theme.colors.gray_800,

  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
});
