import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  gap: '1.2rem',

  width: '100%',
  padding: '0.6rem',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '8px',
});

export const circleStyle = css({
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0.8rem',

  backgroundColor: theme.colors.white,
  borderRadius: '16px',
});

export const fileTitleStyle = css({
  maxWidth: '18.2rem',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const fileCapacityStyle = css({
  color: theme.colors.gray_800,
});
