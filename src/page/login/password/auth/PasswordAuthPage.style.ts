import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  flexDirection: 'column',

  justifyContent: 'center',

  width: '39rem',
  height: '30rem',

  whiteSpace: 'nowrap',
});

export const formStyle = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  width: '51.1rem',

  paddingTop: '3.2rem',
  margin: '0 auto',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const timestyle = css({
  position: 'absolute',

  top: '11rem',
  right: '11.2rem',

  color: theme.colors.gray_500,
  ...theme.text.body06,
});
