import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from '@/page/showcase/index/component/CategoryChip/CategoryChip.style';

interface CategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isSelected?: boolean;
}

const CategoryChip = ({ children, isSelected = false, ...props }: CategoryChipProps) => {
  return (
    <button css={buttonStyle(isSelected)} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
