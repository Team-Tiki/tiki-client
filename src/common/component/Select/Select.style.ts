import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const overlayStyle = css({
  border: `1px solid ${theme.colors.gray_400}`,
  borderRadius: '8px',

  '& > li:not(:last-child)': {
    borderBottom: `1px solid ${theme.colors.gray_400}`,
  },
});

export const itemStyle = css({
  padding: '1rem 1.2rem',

  fontSize: theme.text.body04.fontSize,
  lineHeight: theme.text.body04.lineHeight,
});
