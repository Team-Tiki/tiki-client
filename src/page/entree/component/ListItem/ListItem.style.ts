import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1.6rem',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '8px',
});

export const detailStyle = css({ alignItems: 'center', gap: '0.4rem' });
