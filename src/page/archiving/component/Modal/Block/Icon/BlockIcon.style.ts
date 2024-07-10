import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const iconStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '5rem',
  height: '5rem',

  borderRadius: '100%',
  border: `1.2px solid ${theme.colors.gray_400}`,

  overflow: 'hidden',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.blue_100,
  },
});

export const selectedIconStyle = css({
  border: `1.2px solid ${theme.colors.blue_900}`,
});
