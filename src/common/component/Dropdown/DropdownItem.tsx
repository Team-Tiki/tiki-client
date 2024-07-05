import { ComponentPropsWithoutRef } from 'react';

import { itemStyle } from '@/common/component/Dropdown/Dropdown.style';

interface DropdownItemProps extends ComponentPropsWithoutRef<'li'> {
  onSelect?: () => void;
}

/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
const DropdownItem = ({ onSelect, children, ...props }: DropdownItemProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      onSelect?.();
    }
  };

  return (
    <li css={itemStyle} role="button" tabIndex={0} onKeyDown={handleKeyDown} onClick={onSelect} {...props}>
      {children}
    </li>
  );
};

export default DropdownItem;
