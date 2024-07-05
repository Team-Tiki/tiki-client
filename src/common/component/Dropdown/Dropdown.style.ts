import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  position: 'relative',
});

export const listStyle = css({
  position: 'absolute',
  top: '100%',

  width: '100%',

  zIndex: theme.zIndex.overlayHigh,

  backgroundColor: theme.colors.white,
});

export const itemStyle = css({
  textAlign: 'center',

  cursor: 'pointer',
});
