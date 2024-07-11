import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const boxStyle = css({
  borderRadius: '8px',
  border: `1px dashed ${theme.colors.gray_400}`,

  color: theme.colors.gray_500,
});

export const textStyle = css({
  color: theme.colors.gray_500,
});

export const buttonStyle = css({
  padding: '0',

  textDecoration: 'underline',
  ...theme.text.body06,
  fontWeight: 600,

  color: theme.colors.gray_500,
});
