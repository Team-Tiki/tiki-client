import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',

  position: 'fixed',
  bottom: '4rem',

  width: '100%',

  zIndex: theme.zIndex.overlayTop,
});
