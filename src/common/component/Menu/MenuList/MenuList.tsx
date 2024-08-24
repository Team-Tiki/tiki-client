import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { containerStyle, variantStyle } from '@/common/component/Menu/MenuList/MenuList.style';
import { MenuVariant } from '@/common/component/Menu/constant/menuVariant';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  variant?: MenuVariant;
  isOpen: boolean;
}

const MenuList = ({ children, variant = 'primary', isOpen = false, ...props }: MenuListProps) => {
  return (
    isOpen && (
      <ul css={[containerStyle, variantStyle(variant)]} {...props}>
        {Children.toArray(children).map((child) => cloneElement(child as ReactElement, { variant: variant }))}
      </ul>
    )
  );
};

export default MenuList;
