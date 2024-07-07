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

  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 400,

  outline: 'none',

  '::placeholder': {
    color: theme.colors.gray_500,
  },
});

export const variantStyle = ({ variant, isError }: { variant: Required<InputProps>['variant']; isError: boolean }) => {
  const borderColor = isError ? `${theme.colors.red}` : `${theme.colors.gray_400}`;

  const style = {
    outline: {
      boxShadow: ` 0px 0px 0px 1px ${borderColor}`,
      borderRadius: '8px',
    },
    underline: {
      boxShadow: ` 0px 1px 0px ${borderColor}`,
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
    small: { padding: '0.8rem 1.2rem', ...theme.text.body04 },
    medium: { padding: '1.2rem 1.2rem', ...theme.text.body02 },
    large: { padding: '1.2rem 1.6rem', ...theme.text.body02 },
  };

  return style[size];
};
