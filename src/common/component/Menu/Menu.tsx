import { ReactNode } from 'react';

import { containerStyle, contentStyle } from '@/common/component/Menu/Menu.style';

export interface MenuProps {
  variant?: 'primary';
  children: ReactNode;
  isOpen?: boolean;
}

const Menu = ({ variant = 'primary', children, isOpen = false }: MenuProps) => {
  return <div css={[containerStyle(isOpen), contentStyle(variant)]}>{children}</div>;
};

export default Menu;
