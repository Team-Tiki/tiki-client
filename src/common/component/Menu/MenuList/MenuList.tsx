import { HTMLAttributes, ReactNode } from 'react';

import { containerStyle, contentStyle } from '@/common/component/Menu/MenuList/MenuList.style';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  variant?: 'primary';
  isOpen?: boolean;
}

const MenuList = ({ children, variant = 'primary', isOpen = false, ...props }: MenuListProps) => {
  return (
    isOpen && (
      <ul css={[containerStyle, contentStyle(variant)]} {...props}>
        {children}
      </ul>
    )
  );
};

export default MenuList;
