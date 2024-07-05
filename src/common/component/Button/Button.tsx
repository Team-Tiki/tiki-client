import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Size } from '@/common/type/design';

import { buttonStyle, sizeStyle, variantStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'text' | 'action';
  onClick?: () => void;
  size?: Size;
  icon?: ReactNode;
  underline?: boolean;
  round?: boolean;
}

const Button = ({ variant, children, size = 'medium', underline, round }: ButtonProps) => {
  return (
    <button
      type="button"
      css={[
        buttonStyle,
        variantStyle(variant),
        sizeStyle(size),
        underline && { textDecorationLine: 'underline' },
        round && { borderRadius: '28px' },
      ]}>
      {children}
    </button>
  );
};

export default Button;
