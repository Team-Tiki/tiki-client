import { css } from '@emotion/react';

import { theme } from './../../style/theme/theme';
import { ButtonProps } from './Button';

export const buttonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.6rem',
  border: 'none',
  borderRadius: '8px',
});

export const variantStyle = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({}),
    secondary: css({
      gap: '0.8rem',
      borderRadius: '28px',
      color: theme.colors.white,
      backgroundColor: theme.colors.blue_100,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>['size']) => {
  const style = {
    xSmall: css({
      width: '8.9rem',
      ...theme.label.label02,
    }),
    small: css({
      width: '14.7rem',
      ...theme.heading.heading05,
    }),
    medium: css({
      width: '15.8rem',
      ...theme.label.label01,
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
