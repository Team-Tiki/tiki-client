import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const ModalWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const ModalContent = css({
  paddingTop: '4.8rem',
  paddingBottom: '4.8rem',

  borderRadius: '16px',

  background: theme.colors.white,
});
