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
  paddingLeft: '0.8rem',
  alignItems: 'center',
});

export const inputStyle = css({
  backgroundColor: 'transparent',
  outline: 'none',
  border: '0px',
  width: '100%',
  paddingLeft: '1.2rem',
  weight: 400,
});

export const variantStyle = (variant: Required<InputProps>['variant']) => {
  const style = {
    outline: {
      border: `1px solid ${theme.colors.gray_400}`,
      borderRadius: '8px',
      backgroundColor: 'white',
    },
    underline: {
      border: '1px solid',
      borderColor: `transparent transparent ${theme.colors.gray_400} transparent`,
      backgroundColor: 'white',
    },
    colored: {
      border: '0px',
      borderRadius: '100px',
      backgroundColor: theme.colors.gray_100,
    },
  };

  return style[variant];
};

export const sizeStyle = (height: Required<InputProps>['height']) => {
  const style = {
    short: { height: '3.8rem', ...theme.text.body04 },
    medium: { height: '4.8rem', ...theme.text.body02 },
  };

  return style[height];
};

/*
//CSS 순서!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const inputStyle = ({ variant, inputSize }: { variant: InputVariant; inputSize: InputSize }) =>
  css({
    outline: 'none',
    padding: '1.2rem',
    ...sizeStyle[inputSize],
    ...borderStyle[variant],

    weight: 400,
  });
*/
