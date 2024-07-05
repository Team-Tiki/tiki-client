import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { ButtonProps } from './Button';

export const buttonStyle = css({
  display: 'flex',
  gap: '0.8rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.6rem',
  border: 'none',
  borderRadius: '8px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
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
      backgroundColor: theme.colors.blue_100,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>['size']) => {
  const style = {
    xxSmall: css({
      width: '8.9rem',
      ...theme.label.label02,
    }),
    xSmall: css({
      width: '14.7rem',
      ...theme.heading.heading05,
    }),
    small: css({
      width: '15.8rem',
      ...theme.label.label01,
    }),
    medium: css({
      width: '24rem',
      ...theme.label.label01,
      fontWeight: '700',
    }),
    large: css({
      width: '32rem',
      ...theme.label.label01,
    }),
    xLarge: css({
      width: '37.5rem',
      ...theme.label.label01,
    }),
    xxLarge: css({
      width: '51.1rem',
      ...theme.label.label01,
    }),
  };
  return style[size];
};
