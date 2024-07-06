import { css } from '@emotion/react';

import { InputProps } from '@/common/component/Input/Input';
import { theme } from '@/common/style/theme/theme';

export const inputContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  '& > input': {
    width: '100%',
  },
});

export const inputWarpperStyle = css({
  display: 'flex',
  alignItems: 'center',

  paddingLeft: '0.8rem',
});

export const inputStyle = css({
  paddingLeft: '1.2rem',

  border: 'none',

  backgroundColor: 'transparent',

  weight: 400,

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

export const sizeStyle = (inputSize: Required<InputProps>['inputSize']) => {
  const style = {
    small: { paddingTop: '0.8rem', paddingBottom: '0.8rem', ...theme.text.body04 },
    medium: { paddingTop: '1.2rem', paddingBottom: '1.2rem', ...theme.text.body02 },
  };

  return style[inputSize];
};
