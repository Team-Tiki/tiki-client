import { Text } from '@tiki/ui';

import { ButtonHTMLAttributes } from 'react';

import { wrapperStyle } from '@/shared/component/TimeBlockModal/component/CategoryModal/Category/Category.style';
import { BlockColor } from '@/shared/component/TimeBlockModal/type/block';

interface BlockCategoryProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  categoryType: string;
  icon: React.ReactNode;
  color: BlockColor;
  isSelected: boolean;
}

const CategoryItem = ({ categoryType, icon, color, isSelected, onClick }: BlockCategoryProp) => {
  return (
    <li>
      <button css={wrapperStyle(color, isSelected)} key={categoryType} onClick={onClick}>
        {icon}
        <Text
          tag="body8"
          css={(theme) => ({
            color: isSelected ? theme.colors?.[`${color}_200`] : theme.colors.gray_500,
          })}>
          {categoryType}
        </Text>
      </button>
    </li>
  );
};

export default CategoryItem;
