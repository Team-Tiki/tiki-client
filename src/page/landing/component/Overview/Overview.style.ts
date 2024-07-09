import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '14rem 0',

  backgroundColor: theme.colors.blue_900,

  textAlign: 'center',

  scrollSnapAlign: 'start',
});

export const titleStyle = css({
  color: theme.colors.white,

  whiteSpace: 'pre-line',
});
