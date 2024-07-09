import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const overlayStyle = css({
  border: `1px solid ${theme.colors.gray_400}`,
  borderRadius: '8px',

  maxHeight: '48rem',

  overflowY: 'auto',
});

export const itemStyle = css({
  padding: '1rem 1.2rem',
  margin: '0.4rem 1.2rem',
  borderRadius: '8px',

  fontSize: theme.text.body04.fontSize,
  lineHeight: theme.text.body04.lineHeight,

  '&:hover, &:focus': {
    backgroundColor: theme.colors.blue_100,
  },
});
