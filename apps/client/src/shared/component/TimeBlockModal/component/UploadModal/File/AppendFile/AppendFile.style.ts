import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const boxStyle = css({
  borderRadius: '8px',
  border: `1px dashed ${theme.colors.gray_400}`,

  color: theme.colors.gray_800,
});

export const textStyle = css({
  color: theme.colors.gray_800,
});

export const buttonStyle = css({
  width: '16rem',

  color: theme.colors.gray_800,
});
