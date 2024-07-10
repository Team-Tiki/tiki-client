import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  marginBottom: '2.4rem',

  gap: '0.8rem',
});

export const deleteBtnStyle = css({
  width: '4.9rem',
  height: '1.4rem',

  padding: 0,

  color: theme.colors.gray_800,

  textDecoration: 'underline',
});
