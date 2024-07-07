import { css } from '@emotion/react';

import { fadeIn } from '@/common/style/animation';
import { theme } from '@/common/style/theme/theme';

export const backgroundStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  left: 0,

  zIndex: theme.zIndex.overlayHigh,

  width: '100vw',
  height: '100vh',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  animation: `${fadeIn} 0.2s ease-in`,
});

export const dialogStyle = css({
  display: 'block',

  position: 'fixed',
  top: '50%',
  left: '50%',

  zIndex: theme.zIndex.overlayTop,

  padding: '4.8rem 5rem',

  borderRadius: '16px',
  border: 'none',
  outline: 'none',

  background: theme.colors.white,

  transform: 'translate(-50%, -50%)',
});