import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  height: 'calc(100% - 1rem)',
});

export const headingStyle = css({
  color: theme.colors.gray_800,
  fontWeight: 600,
});

export const textStyle = css({
  color: theme.colors.gray_500,
  fontWeight: 500,
});
