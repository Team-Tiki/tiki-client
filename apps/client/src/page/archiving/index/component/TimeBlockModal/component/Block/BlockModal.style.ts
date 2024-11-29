import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const buttonStyle = (isActive: boolean) =>
  css({
    width: '32rem',

    marginTop: '2.4rem',

    cursor: 'pointer',

    ...(isActive && {
      '&:hover': {
        color: theme.colors.gray_500,
      },
    }),
  });

export const textStyle = css({
  color: theme.colors.gray_700,
  fontWeight: 400,
});
