import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const textStyle = css({
  color: theme.colors.gray_500,
  fontSize: '2rem',
});

export const supportStyle = css({
  marginTop: '0.8rem',
  ...theme.text.body07,
  fontWeight: 400,
});
