import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { variantStyle } from '@/common/component/Menu/Menu.style';
import { useOutsideClick } from '@/common/hook';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'up' | 'down' | 'left' | 'right';
  children: ReactNode;
  onClose: () => void;
}

const Menu = ({ variant = 'right', children, onClose, ...props }: MenuProps) => {
  const ref = useOutsideClick(onClose);

  return (
    <div ref={ref} css={[{ position: 'relative' }, variantStyle(variant)]} {...props}>
      {children}
    </div>
  );
};

export default forwardRef(Menu);
