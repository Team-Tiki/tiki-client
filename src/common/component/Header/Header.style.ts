import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'fixed',
  top: 0,

  zIndex: theme.zIndex.overlayMiddle,

  width: '100%',
  height: '9rem',

  padding: '2.4rem 16rem',

  backgroundColor: theme.colors.white,
  '& > svg': {
    width: '10rem',
    height: '4rem',

    cursor: 'pointer',
  },
});
