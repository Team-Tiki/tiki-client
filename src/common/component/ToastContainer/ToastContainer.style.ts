import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',

  position: 'fixed',
  bottom: '24px',

  width: '100%',

  zIndex: theme.zIndex.overlayTop,
});
