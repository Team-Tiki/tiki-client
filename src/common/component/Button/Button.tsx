import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, colorStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  size: Size;
  icon?: ReactNode;
  color: 'blue' | 'gray' | 'black';
  underline?: boolean;
}

const Button = ({ variant, children, size, color, underline }: ButtonProps) => {
  return (
    <button
      type="button"
      css={[
        buttonStyle,
        variantStyle(variant),
        sizeStyle(size),
        colorStyle(color),
        underline && { textDecorationLine: 'underline' },
      ]}>
      {children}
    </button>
  );
};

export default Button;
