import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ButtonHTMLAttributes, useState } from 'react';

interface CategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const CategoryChip = ({ children, onClick, ...props }: CategoryChipProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsClicked((prev) => !prev);
  };

  return (
    <button css={buttonStyle(isClicked)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
