import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { ButtonProps } from './Button';

export const buttonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',

  width: '100%',

  padding: '1.6rem 1.4rem',

  border: 'none',
  borderRadius: '8px',

  fontWeight: 500,

  whiteSpace: 'nowrap',

  cursor: 'pointer',

  '&:disabled:not(:focus)': {
    backgroundColor: theme.colors.gray_100,
    color: theme.colors.gray_500,
  },

  transition: 'all .2s ease-in',
});

export const variantStyle = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      color: theme.colors.white,
      backgroundColor: theme.colors.key_500,

      '&:hover': {
        backgroundColor: theme.colors.key_600,
      },
    }),
    secondary: css({
      color: theme.colors.key_500,
      backgroundColor: theme.colors.key_100,

      '&:hover': {
        backgroundColor: theme.colors.key_200,
      },
    }),
    tertiary: css({
      color: theme.colors.gray_800,
      backgroundColor: theme.colors.gray_100,

      '&:hover': {
        backgroundColor: theme.colors.gray_200,
      },
    }),
    outline: css({
      border: `1px solid ${theme.colors.gray_300}`,

      color: theme.colors.gray_800,
      backgroundColor: theme.colors.white,

      '&:hover': {
        backgroundColor: theme.colors.gray_100,
      },
    }),
    underline: css({
      color: theme.colors.gray_800,
      backgroundColor: 'transparent',

      '&:hover': {
        textDecoration: 'underline',
      },

      '&:disabled:not(:focus)': {
        color: theme.colors.gray_500,
        backgroundColor: 'transparent',

        textDecoration: 'underline',
      },
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>['size']) => {
  const style = {
    /** Button_46 */
    xLarge: css({
      padding: '1.6rem 1.4rem',

      ...theme.text.body06,
    }),
    /** Button_40 */
    large: css({
      padding: '1.4rem',

      ...theme.text.body08,
    }),
    /** Button_36 */
    medium: css({
      padding: '1.2rem 1.4rem',

      ...theme.text.body08,
    }),
    /** Button_32 */
    small: css({
      padding: '1rem 1.4rem',

      ...theme.text.body08,
    }),
    /** Button_24 */
    xSmall: css({
      padding: '0.6rem 1rem',

      borderRadius: '1.2rem',

      ...theme.text.body08,
    }),
  };
  return style[size];
};
