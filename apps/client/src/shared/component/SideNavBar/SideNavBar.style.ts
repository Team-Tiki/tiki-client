import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  position: 'fixed',

  height: '100vh',

  borderRight: `1px solid ${theme.colors.gray_300}`,

  zIndex: theme.zIndex.overlayMiddle,
});

export const tikiLogoStyle = css({
  width: '2.8rem',
  height: '2.8rem',

  margin: '2.4rem',
});

export const settingStyle = css({
  position: 'fixed',

  alignItems: 'center',
  justifyContent: 'center',

  padding: '2rem',
  bottom: 0,
});
