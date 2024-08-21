import { ButtonHTMLAttributes, ReactNode } from 'react';

interface MenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ReactNode;
  variant?: 'primary';
}

const MenuTrigger = ({ Icon, variant, ...props }: MenuTriggerProps) => {
  return (
    <button css={{ outline: 0, backgroundColor: 'transparent' }} {...props}>
      {Icon}
    </button>
  );
};

export default MenuTrigger;
