import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'action';
  onClick?: () => void;
  size?: Extract<Size, 'large' | 'medium' | 'small'>;
}

const Button = ({ variant = 'secondary', children, size = 'medium', ...props }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyle(variant), sizeStyle(size)]} {...props}>
      {children}
    </button>
  );
};

export default Button;
