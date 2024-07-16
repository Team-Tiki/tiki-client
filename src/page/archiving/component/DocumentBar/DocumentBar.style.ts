import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (blockSelected: string) =>
  css({
    position: 'sticky',

    top: '0',
    right: '0',
    zIndex: theme.zIndex.overlayMiddle,

    width: blockSelected ? '28rem' : 0,
    height: 'calc(100vh - 0.8rem);',

    borderRadius: '16px',

    backgroundColor: theme.colors.white,
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',

    transform: blockSelected ? 'translateX(0)' : 'translateX(28rem)',
    transition: '0.4s ease-in-out',
  });
