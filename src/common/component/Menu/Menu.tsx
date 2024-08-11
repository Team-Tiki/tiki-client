import { ReactNode } from 'react';

import { containerStyle } from '@/common/component/Menu/Menu.style';

export interface MenuProps {
  variant?: 'primary';
  children: ReactNode;
  isOpen?: boolean;
}

const Menu = ({ variant = 'primary', children, isOpen = false }: MenuProps) => {
  return <div css={containerStyle(variant, isOpen)}>{children}</div>;
};

export default Menu;
