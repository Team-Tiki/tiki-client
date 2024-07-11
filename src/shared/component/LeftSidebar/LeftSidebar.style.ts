import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isExpansion: boolean) =>
  css({
    position: 'fixed',
    left: '0',
    zIndex: theme.zIndex.overlayTop,

    width: isExpansion ? '24.1rem' : '8rem',
    height: '100vh',
    padding: '2.4rem 2rem 0 0',

    backgroundColor: theme.colors.blue_900,
    color: theme.colors.blue_200,

    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',

    transitionDuration: '0.5s',
  });

export const LogoSymbolStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4rem',
  height: '4rem',
  margin: '0 0 2.4rem 2rem',
  borderRadius: '10px',

  color: theme.colors.blue_900,
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

  cursor: 'pointer',
});
