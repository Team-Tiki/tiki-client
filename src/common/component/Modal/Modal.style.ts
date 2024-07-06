import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const ModalBackground = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  left: 0,

  zIndex: 1000,

  width: '100vw',
  height: '100vh',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const ModalContent = css({
  display: 'block',

  position: 'fixed',
  paddingTop: '4.8rem',
  paddingBottom: '4.8rem',
  top: '50%',
  left: '50%',

  zIndex: 1001,

  borderRadius: '16px',
  border: 'none',
  outline: 'none',

  background: theme.colors.white,

  transform: 'translate(-50%, -50%)',
});
