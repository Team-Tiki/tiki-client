import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'text' | 'action';
  onClick?: () => void;
  size?: Size;
  icon?: ReactNode;
}

const Button = ({ variant, children, size = 'medium' }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyle(variant), sizeStyle(size)]}>
      {children}
    </button>
  );
};

export default Button;
