import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const iconStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4rem',
  height: '4rem',

  borderRadius: '100%',

  overflow: 'hidden',
  cursor: 'pointer',

  backgroundColor: theme.colors.gray_100,

  '&:hover': {
    backgroundColor: theme.colors.blue_100,
  },
});

export const selectedIconStyle = css({
  border: `1.6px solid ${theme.colors.key_500}`,
  backgroundColor: theme.colors.blue_100,
});

export const boxStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  width: '100%',

  gap: '1.2rem',
});
