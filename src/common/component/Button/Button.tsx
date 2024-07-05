import { ButtonHTMLAttributes } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, colorStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  size: Size;
  icon?: React.ReactNode;
  color: 'blue' | 'gray' | 'black';
}

const Button = ({ variant, children, size, icon, color }: ButtonProps) => {
  return (
    <button type="button" css={[buttonStyle, variantStyle(variant), sizeStyle(size), colorStyle(color)]}>
      {icon && <>{icon}</>}
      {children}
    </button>
  );
};

export default Button;
