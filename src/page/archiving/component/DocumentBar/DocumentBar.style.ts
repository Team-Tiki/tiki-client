import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  position: 'fixed',
  top: '0',
  right: '0',
  zIndex: theme.zIndex.overlayTop,

  width: '28rem',
  height: '100vh',

  borderRadius: '16px',

  boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
});

export const documentListStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',
});
