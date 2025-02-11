import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = (isOpen: boolean) =>
  css({
    flexShrink: 0,
    position: 'sticky',
    right: 0,
    zIndex: theme.zIndex.overlayMiddle,

    width: isOpen ? '27.1rem' : 0,
    height: 'calc(100vh)',
    padding: '0 1.6rem',

    overflow: 'hidden',

    borderLeft: `1px solid ${theme.colors.gray_300}`,
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
    backgroundColor: theme.colors.white,

    transition: 'all 0.4s ease',
  });
