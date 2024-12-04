import { HTMLAttributes, ReactNode } from "react";

import { containerStyle } from "@/Menu/MenuItem/MenuItem.style";

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  onSelect: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({ LeftIcon, onSelect, children, ...props }: MenuItemProps) => {
  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      tabIndex={0}
      css={containerStyle}
      onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === "Enter") onSelect;
      }}
      onClick={onSelect}
      {...props}
    >
      {LeftIcon}
      {children}
    </li>
  );
};

export default MenuItem;
