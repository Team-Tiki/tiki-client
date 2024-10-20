import { ButtonHTMLAttributes } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline';
  size?: Extract<Size, 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall'>;
}

const Button = ({ variant = 'primary', children, size = 'small', ...props }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyle(variant), sizeStyle(size)]} {...props}>
      {children}
    </button>
  );
};

export default Button;
