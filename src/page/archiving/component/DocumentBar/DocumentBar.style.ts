import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (blockSelected: string) =>
  css({
    position: 'sticky',

    top: '0',
    right: '0',
    zIndex: theme.zIndex.overlayTop,

    width: blockSelected ? '28rem' : 0,
    height: '100vh',

    borderRadius: '16px',

    backgroundColor: theme.colors.white,
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',

    transform: blockSelected ? 'translateX(0)' : 'translateX(28rem)',
    transition: '0.4s ease-in-out',
  });
