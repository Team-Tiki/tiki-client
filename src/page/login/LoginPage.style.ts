import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  flexDirection: 'column',

  height: '100vh',
});

export const formStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '51.1rem',
  height: '53rem',

  padding: '6rem',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '3.2rem',
});

export const findPasswordButtonStyle = css({
  width: '100%',

  marginTop: '4.8rem',

  color: theme.colors.gray_800,

  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
});
