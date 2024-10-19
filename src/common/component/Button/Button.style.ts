import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { ButtonProps } from './Button';

export const buttonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',

  width: '100%',

  padding: '1.6rem 2rem',

  border: 'none',
  borderRadius: '8px',

  fontWeight: 500,

  whiteSpace: 'nowrap',

  cursor: 'pointer',

  '&:disabled:not(:focus)': {
    backgroundColor: theme.colors.gray_400,
    color: theme.colors.white,
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
      color: theme.colors.black,
      backgroundColor: theme.colors.gray_100,

      '&:hover': {
        backgroundColor: theme.colors.blue_100,
      },
    }),
    text: css({
      backgroundColor: 'transparent',
      ...theme.text.body04,
    }),
    action: css({
      color: theme.colors.white,
      // backgroundColor: theme.colors.blue_900,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      ...theme.text.body04,
    }),
    medium: css({
      ...theme.text.body05,
    }),
    small: css({
      ...theme.text.body06,
    }),
  };
  return style[size];
};
