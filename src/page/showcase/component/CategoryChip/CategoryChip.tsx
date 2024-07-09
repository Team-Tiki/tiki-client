import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ButtonHTMLAttributes } from 'react';

interface CategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const CategoryChip = ({ children, ...props }: CategoryChipProps) => {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
