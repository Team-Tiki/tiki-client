import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'sticky',
  top: 4,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',

  zIndex: theme.zIndex.overlayMiddle,

  width: '100%',
  height: '9rem',

  padding: '2.4rem 16rem 2.4rem 8rem',

  backgroundColor: theme.colors.white,
  '& > svg': {
    width: '10rem',
    height: '4rem',

    cursor: 'pointer',
  },
});
