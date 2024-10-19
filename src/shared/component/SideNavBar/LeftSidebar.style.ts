import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = () =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    position: 'fixed',

    top: '0',
    left: '0',
    zIndex: theme.zIndex.overlayHigh,

    width: '7.6rem',
    height: '100vh',
    padding: '2.4rem 2rem',

    backgroundColor: theme.colors.key_500,

    color: theme.colors.white,
  });

export const tikiLogoStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4rem',
  height: '4rem',

  marginBottom: '2.4rem',

  borderRadius: '10px',
  color: theme.colors.key_500,

  cursor: 'pointer',
});

export const leftSidebarMenuStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2.4rem',
});

export const settingStyle = css({
  position: 'absolute',

  bottom: '2.4rem',
});
