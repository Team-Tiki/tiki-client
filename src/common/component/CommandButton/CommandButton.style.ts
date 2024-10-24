import { css } from '@emotion/react';

import { ButtonProps } from '@/common/component/Button/Button';
import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isFrontIcon: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: isFrontIcon ? '1rem' : '1.1rem 1rem 1.1rem 1.4rem',

    border: 'none',
    borderRadius: '0.8rem',

    gap: '0.4rem',

    '&:disabled:not(:focus)': {
      backgroundColor: theme.colors.gray_100,
      color: theme.colors.gray_500,
    },

    cursor: 'pointer',
  });

export const commonStyle = css({
  display: 'flex',

  padding: '0.4rem 0.6rem',

  borderRadius: '0.4rem',

  color: theme.colors.gray_800,

  ...theme.text.body10,
});

export const keyStyle = (
  variant: Extract<'primary' | 'tertiary' | 'outline', Omit<ButtonProps, 'underline' | 'secondary'>['variant']>
) => {
  const style = {
    primary: css({
      backgroundColor: theme.colors.white,

      '&:disabled:not(:focus)': {
        backgroundColor: theme.colors.gray_100,
        color: theme.colors.gray_500,
      },
    }),
    tertiary: css({
      backgroundColor: theme.colors.gray_100,

      '&:disabled:not(:focus)': {
        backgroundColor: theme.colors.gray_100,
        color: theme.colors.gray_500,
      },
    }),
    outline: css({
      backgroundColor: theme.colors.gray_100,

      '&:disabled:not(:focus)': {
        backgroundColor: theme.colors.gray_100,
        color: theme.colors.gray_500,
      },
    }),
  };
  return style[variant];
};

export const childrenStyle = css({
  display: 'flex',
  alignItems: 'center',

  padding: '0.4rem',

  gap: '0.4rem',
});
