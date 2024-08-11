import { ButtonHTMLAttributes, ReactNode } from 'react';

import { containerStyle, variantStyle } from '@/common/component/Menu/MenuItem/MenuItem.style';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  onSelect?: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({ variant = 'primary', LeftIcon, onSelect, children, ...props }: MenuItemProps) => {
  return (
    <button
      type="button"
      css={[containerStyle, variantStyle(variant)]}
      onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') onSelect;
      }}
      onClick={onSelect}
      {...props}>
      {LeftIcon}
      <p>{children}</p>
    </button>
  );
};

export default MenuItem;
