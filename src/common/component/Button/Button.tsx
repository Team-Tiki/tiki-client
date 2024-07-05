import { ButtonHTMLAttributes } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  size: Size;
}

const Button = ({ variant = 'primary', children, size }: ButtonProps) => {
  return <button css={[buttonStyle, variantStyle(variant), sizeStyle(size)]}>{children}</button>;
};

export default Button;
