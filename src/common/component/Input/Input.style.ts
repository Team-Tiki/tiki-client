import { css } from '@emotion/react';

import { InputProps } from '@/common/component/Input/Input';
import { theme } from '@/common/style/theme/theme';

export const inputContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.2rem',
});

export const inputWarpperStyle = css({
  display: 'flex',
  alignItems: 'center',

  paddingLeft: '0.8rem',
});

export const inputStyle = css({
  width: '100%',

  padding: '0 1.2rem 0 1.2rem',

  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 400,

  outline: 'none',
});

export const variantStyle = (variant: Required<InputProps>['variant']) => {
  const style = {
    outline: {
      boxShadow: ` 0px 0px 0px 1px ${theme.colors.gray_400}`,
      borderRadius: '8px',
    },
    underline: {
      boxShadow: ` 0px 1px 0px ${theme.colors.gray_400}`,
    },
    colored: {
      borderRadius: '100px',
      backgroundColor: theme.colors.gray_100,
    },
  };

  return style[variant];
};

export const sizeStyle = (size: Required<InputProps>['size']) => {
  const style = {
    small: { padding: '0.8rem 0', ...theme.text.body04 },
    medium: { padding: '1.2rem 0', ...theme.text.body02 },
  };

  return style[size];
};
