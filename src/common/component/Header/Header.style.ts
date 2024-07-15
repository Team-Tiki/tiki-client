import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',

  zIndex: theme.zIndex.overlayMiddle,

  height: '9rem',
  //width: '100%',
  //position: 'absolute',

  padding: '2.4rem 8rem 2.4rem 8rem',

  backgroundColor: theme.colors.white,
  '& > svg': {
    width: '10rem',
    height: '4rem',

    cursor: 'pointer',
  },
});
