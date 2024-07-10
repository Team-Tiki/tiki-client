import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isExpansion: boolean) =>
  css({
    position: 'fixed',

    left: '0',

    zIndex: theme.zIndex.overlayTop,

    width: isExpansion ? '26.5rem' : '8rem',
    height: '100vh',

    padding: '2.4rem 0 0 2rem',

    backgroundColor: theme.colors.gray_100,
    borderRadius: '0px 30px 30px 0px',

    transitionDuration: '0.5s',

    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
  });

export const LogoSymbolStyle = css({
  display: 'flex',

  width: '4rem',
  height: '4rem',

  marginBottom: '2.4rem',

  borderRadius: '10px',

  justifyContent: 'center',
  alignItems: 'center',
});

export const leftSidebarListStyle = css({
  display: 'flex',

  flexDirection: 'column',

  gap: '2.4rem',
});

export const arrowStyle = css({
  position: 'absolute',

  top: '3.8rem',
  right: '0.4rem',

  height: '1.2rem',
  width: '1.2rem',
});
