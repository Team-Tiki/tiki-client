import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ButtonHTMLAttributes } from 'react';

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
