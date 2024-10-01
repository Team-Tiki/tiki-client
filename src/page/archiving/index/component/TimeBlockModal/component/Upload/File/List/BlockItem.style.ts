import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const borderStyle = css({
  borderRadius: '8px',
  border: `1px solid ${theme.colors.gray_300}`,

  width: '37.5rem',
});

export const textStyle = css({
  color: theme.colors.gray_800,
  fontWeight: 500,

  maxWidth: '30rem',
});
