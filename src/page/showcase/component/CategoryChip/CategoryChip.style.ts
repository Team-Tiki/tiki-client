import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = css({
  padding: '1.3rem  1.6rem',

  backgroundColor: theme.colors.white,
  borderRadius: '100px',
  border: `1.2px solid ${theme.colors.gray_400}`,

  ...theme.text.body04,
  color: theme.colors.gray_800,
  fontWeight: 500,

  cursor: 'pointer',
});
