import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  height: '78rem',
  width: '51.1rem',

  flexDirection: 'column',
  justifyContent: 'space-between',

  padding: '12.3rem 42.75rem 12rem 42.75rem',

  whiteSpace: 'nowrap',
});

export const formStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  width: '51.1rem',

  paddingTop: '3.2rem',
  margin: '0 auto',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const timestyle = css({
  position: 'absolute',

  top: '20rem',
  right: '13rem',

  color: theme.colors.blue_900,
  ...theme.text.body04,
});