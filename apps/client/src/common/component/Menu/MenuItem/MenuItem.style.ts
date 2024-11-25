import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.8rem 0.4rem 0.8rem 0.8rem ',

  borderRadius: '8px',
  backgroundColor: theme.colors.white,

  ...theme.text.body08,
  color: theme.colors.black,

  whiteSpace: 'nowrap',
  cursor: 'pointer',

  ':hover, :focus': {
    outline: theme.colors.gray_100,
    backgroundColor: theme.colors.gray_100,
  },
});
