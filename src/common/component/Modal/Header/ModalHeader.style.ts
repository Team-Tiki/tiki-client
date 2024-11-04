import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const infoTextStyle = css({
  color: theme.colors.gray_800,
});

export const iconTextStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: theme.colors.gray_800,
  fontWeight: 500,
  width: '4rem',
  height: '4rem',

  textAlign: 'center',
});
