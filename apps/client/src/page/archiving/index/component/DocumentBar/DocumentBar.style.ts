import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = (blockSelected: string) =>
  css({
    position: 'absolute',
    right: 0,

    zIndex: theme.zIndex.overlayMiddle,

    width: blockSelected ? '27rem' : 0,
    height: 'calc(100vh)',

    overflow: 'hidden',

    borderRadius: '16px',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
    backgroundColor: theme.colors.white,

    transition: 'all 0.4s ease',
  });
