import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1.6rem',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '8px',
});

export const tagDateStyle = css({
  display: 'flex',
});
