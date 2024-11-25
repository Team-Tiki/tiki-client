import { ComponentPropsWithoutRef } from 'react';

import { listStyle } from '@/common/component/Dropdown/Dropdown.style';

interface DropdownListProps extends ComponentPropsWithoutRef<'ul'> {
  isOpen?: boolean;
}

const DropdownList = ({ isOpen = false, children, ...props }: DropdownListProps) => {
  return (
    isOpen && (
      <ul css={listStyle} {...props}>
        {children}
      </ul>
    )
  );
};

export default DropdownList;
