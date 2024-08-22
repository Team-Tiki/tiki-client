import { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle } from '@/common/component/Menu/MenuTrigger/MenuTrigger.style';

interface MenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ReactNode;
  variant?: 'primary';
}

const MenuTrigger = ({ Icon, variant, children, ...props }: MenuTriggerProps) => {
  return (
    <button css={buttonStyle} {...props}>
      {Icon}
      {children}
    </button>
  );
};

export default MenuTrigger;
