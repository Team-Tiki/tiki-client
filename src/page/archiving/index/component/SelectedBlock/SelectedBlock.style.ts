import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockNameStyle = css({
  paddingRight: '0.4rem',

  fontWeight: '500',
  wordBreack: 'keep-all',
});

export const deleteBtnStyle = css({
  width: '4.9rem',
  height: '1.4rem',
  padding: 0,

  color: theme.colors.gray_800,
  textDecoration: 'underline',
});
