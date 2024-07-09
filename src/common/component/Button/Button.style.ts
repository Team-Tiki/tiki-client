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

  '&:disabled': {
    backgroundColor: theme.colors.gray_400,
    color: theme.colors.white,
  },
});

export const variantStyle = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      color: theme.colors.white,
      backgroundColor: theme.colors.black,
    }),
    secondary: css({
      color: theme.colors.black,
      backgroundColor: theme.colors.gray_100,
    }),
    text: css({
      backgroundColor: 'transparent',
      ...theme.label.label01,
    }),
    action: css({
      color: theme.colors.white,
      backgroundColor: theme.colors.blue_900,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      ...theme.text.body02,
    }),
    medium: css({
      ...theme.text.body04,
    }),
    small: css({
      ...theme.text.body05,
    }),
  };
  return style[size];
};
