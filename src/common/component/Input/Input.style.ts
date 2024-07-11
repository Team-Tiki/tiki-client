import { css } from '@emotion/react';

import { InputProps } from '@/common/component/Input/Input';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',

  width: '100%',

  '& > div': {
    marginTop: '0.4rem',
  },
});

export const inputSupportStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.8rem',
});

export const warpperStyle = css({
  display: 'flex',
  alignItems: 'center',

  paddingLeft: '0.8rem',
});

export const inputStyle = css({
  width: '100%',

  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 400,
  ...theme.text.body04,

  outline: 'none',

  '::placeholder': {
    color: theme.colors.gray_500,
    ...theme.text.body04,
  },
});

export const variantStyle = (variant: Required<InputProps>['variant'], isError: boolean) => {
  const borderColor = isError ? `${theme.colors.red}` : `${theme.colors.gray_400}`;

  const style = {
    default: {
      boxShadow: `inset 0px 0px 0px 1px ${borderColor}`,
      borderRadius: '8px',

      '&:focus-within': {
        boxShadow: `inset 0px 0px 0px 1px ${theme.colors.blue_900}`,
      },
    },
    underline: {
      boxShadow: `inset 0px -1px 0px ${borderColor}`,

      '&:focus-within': {
        boxShadow: `inset 0px -1px 0px ${theme.colors.blue_900}`,
      },
    },
    colored: {
      borderRadius: '100px',
      backgroundColor: theme.colors.gray_100,

      '& > input': {
        '::placeholder': {
          color: theme.colors.gray_500,
          ...theme.text.body06,
        },

        '&:focus-within': {
          boxShadow: `inset 0px 0px 0px 1px ${theme.colors.blue_900}`,
        },
      },
    },
  };

  return style[variant];
};

export const sizeStyle = (size: Required<InputProps>['size']) => {
  const style = {
    small: { padding: '0.8rem 1.2rem' },
    medium: { padding: '1.2rem 1.2rem' },
    large: { padding: '1.6rem 1.2rem' },
  };

  return style[size];
};
