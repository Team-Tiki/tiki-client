import { buttonStyle } from '@/page/showcase/component/CategoryChip/CategoryChip.style';

import { ComponentPropsWithRef, useEffect, useState } from 'react';

interface CategoryChipProps extends Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
  onClick?: (id: string) => void;
  clickedChip?: string;
}

const CategoryChip = ({ children, onClick, clickedChip = '', ...props }: CategoryChipProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (clickedChip === children?.toString()) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [clickedChip, children]);

  const handleClick = () => {
    if (onClick && children) {
      onClick(children.toString());
    }
  };

  return (
    <button css={buttonStyle(isClicked)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default CategoryChip;
