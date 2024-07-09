import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ComponentPropsWithRef } from 'react';

interface CategoryChipProps extends Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
  children: string;
  onClick?: (id: string) => void;
  isClicked?: boolean;
}

const CategoryChip = ({ children, onClick, isClicked = false, ...props }: CategoryChipProps) => {
  return (
    <button css={buttonStyle(isClicked)} onClick={onClick ? () => onClick(children?.toString()) : undefined} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
