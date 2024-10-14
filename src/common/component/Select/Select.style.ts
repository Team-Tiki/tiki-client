import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const overlayStyle = css({
  marginTop: '0.8rem',

  borderRadius: '8px',

  maxHeight: '48rem',

  border: `1px solid ${theme.colors.gray_200}`,
  boxShadow: theme.shadow.shadow01,

  overflowY: 'auto',
  overscrollBehavior: 'contain',
});

export const itemStyle = css({
  display: 'flex',

  padding: '1rem 1.2rem',
  margin: '0.4rem 1.2rem',
  borderRadius: '8px',

  fontSize: theme.text.body05.fontSize,
  lineHeight: theme.text.body05.lineHeight,

  '&:hover, &:focus': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
});
