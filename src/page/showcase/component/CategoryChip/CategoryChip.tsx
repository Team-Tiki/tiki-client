import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ButtonHTMLAttributes } from 'react';

interface CategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isClicked?: boolean;
}

const CategoryChip = ({ children, isClicked = false, ...props }: CategoryChipProps) => {
  return (
    <button css={buttonStyle(isClicked)} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
