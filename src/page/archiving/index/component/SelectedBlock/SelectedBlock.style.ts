import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const deleteBtnStyle = css({
  width: '4.9rem',
  height: '1.4rem',

  padding: 0,

  color: theme.colors.gray_800,

  textDecoration: 'underline',
});

export const containerStyle = css({
  flexDirection: 'column',

  padding: '1.6rem',
  gap: '0.8rem',
});

export const blockNameStyle = css({
  paddingRight: '0.5rem',

  fontWeight: '500',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreack: 'keep-all',
});
