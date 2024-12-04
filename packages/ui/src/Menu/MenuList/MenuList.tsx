import { HTMLAttributes } from "react";

import { containerStyle } from "@/Menu/MenuList/MenuList.style";

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  isOpen: boolean;
}

const MenuList = ({ children, isOpen = false, ...props }: MenuListProps) => {
  return (
    isOpen && (
      <ul css={containerStyle} {...props}>
        {children}
      </ul>
    )
  );
};

export default MenuList;
