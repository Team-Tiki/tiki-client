import { HTMLAttributes, ReactNode } from 'react';

import { containerStyle } from '@/common/component/Menu/MenuItem/MenuItem.style';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  variant?: 'primary';
  onSelect?: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({ variant = 'primary', LeftIcon, onSelect, children, ...props }: MenuItemProps) => {
  return (
    <li
      role="list"
      tabIndex={0}
      css={containerStyle}
      onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === 'Enter') onSelect;
      }}
      onClick={onSelect}
      {...props}>
      {LeftIcon}
      <p>{children}</p>
    </li>
  );
};

export default MenuItem;
