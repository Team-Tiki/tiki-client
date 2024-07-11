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

export const findPasswordButtonStyle = css({
  width: '100%',

  marginTop: '3.2rem',

  color: theme.colors.gray_800,

  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
});
