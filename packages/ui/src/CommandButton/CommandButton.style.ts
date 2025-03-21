import { css } from '@emotion/react';

import { ButtonProps } from '@/Button/Button';
import { CommandButtonProps } from '@/CommandButton/CommandButton';
import { theme } from '@/theme';

export const buttonStyle = (isFrontIcon: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: isFrontIcon ? '1rem' : '1.1rem 1rem 1.1rem 1.4rem',

    border: 'none',
    borderRadius: '0.8rem',

    gap: '0.4rem',

    cursor: 'pointer',

    transition: 'all .2s ease-in',

    '&:disabled:not(:focus)': {
      backgroundColor: theme.colors.gray_100,
      color: theme.colors.gray_500,
      pointerEvents: 'none',
    },
  });

export const commonStyle = css({
  display: 'flex',

  padding: '0.4rem 0.6rem',

  borderRadius: '0.4rem',

  color: theme.colors.gray_800,

  ...theme.text.body10,
});

export const keyStyle = (
  variant: Extract<
    'primary' | 'tertiary' | 'fourth' | 'outline',
    Omit<ButtonProps, 'underline' | 'secondary'>['variant']
  >,
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
    fourth: css({
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

  whiteSpace: 'nowrap',
});

export const sizeStyle = (size: Required<CommandButtonProps>['size']) => {
  const style = {
    /** Button_40 */
    large: css({
      padding: '1.1rem 1.0rem 1.1rem 1.4rem',

      ...theme.text.body08,
    }),
    /** Button_32 */
    small: css({
      padding: '0.7rem 1rem 0.7rem 1.4rem',

      ...theme.text.body08,
    }),
    /** Button_24 */
    xSmall: css({
      padding: '0.6rem 1rem',

      ...theme.text.body08,
    }),
  };
  return style[size];
};
