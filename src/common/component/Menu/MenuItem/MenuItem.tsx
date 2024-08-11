import { ButtonHTMLAttributes, ReactNode } from 'react';

import { variantStyle } from '@/common/component/Menu/MenuItem/MenuItem.style';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  // onClick?: () => void; ??
  onKeyDown?: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({ variant = 'primary', LeftIcon, children, ...props }: MenuItemProps) => {
  return (
    <button type="button" css={[variantStyle(variant)]} {...props}>
      {LeftIcon}
      <p>{children}</p>
    </button>
  );
};

export default MenuItem;
