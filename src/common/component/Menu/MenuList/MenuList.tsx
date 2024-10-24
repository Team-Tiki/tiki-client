import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { containerStyle } from '@/common/component/Menu/MenuList/MenuList.style';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  isOpen: boolean;
}

const MenuList = ({ children, isOpen = false, ...props }: MenuListProps) => {
  return (
    isOpen && (
      <ul css={containerStyle} {...props}>
        {Children.toArray(children).map((child) => cloneElement(child as ReactElement))}
      </ul>
    )
  );
};

export default MenuList;
