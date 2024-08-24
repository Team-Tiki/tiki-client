import { HTMLAttributes, ReactNode } from 'react';

import { containerStyle, variantStyle } from '@/common/component/Menu/MenuItem/MenuItem.style';
import { MenuVariant } from '@/common/component/Menu/constant/menuVariant';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  variant?: MenuVariant;
  onSelect: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({ variant = 'primary', LeftIcon, onSelect, children, ...props }: MenuItemProps) => {
  return (
    <li
      role="button"
      tabIndex={0}
      css={[containerStyle, variantStyle(variant)]}
      onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === 'Enter') onSelect;
      }}
      onClick={onSelect}
      {...props}>
      {LeftIcon}
      {children}
    </li>
  );
};

export default MenuItem;
