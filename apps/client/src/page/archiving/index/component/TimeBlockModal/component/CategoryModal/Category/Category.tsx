import { Text } from '@tiki/ui';

import { ButtonHTMLAttributes } from 'react';

import { wrapperStyle } from '@/page/archiving/index/component/TimeBlockModal/component/CategoryModal/Category/Category.style';

export type BlockColor = 'red' | 'yellow' | 'green' | 'sky' | 'pink' | 'purple';

interface BlockCategoryProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  categoryType: string;
  icon: React.ReactNode;
  color: BlockColor;
  isSelected: boolean;
}

const CategoryButton = ({ categoryType, icon, color, isSelected, onClick }: BlockCategoryProp) => {
  return (
    <button css={wrapperStyle(color, isSelected)} type="button" onClick={onClick}>
      {icon}
      <Text
        tag="body8"
        css={(theme) => ({
          color: isSelected ? theme.colors?.[`${color}_200`] : theme.colors.gray_500,
        })}>
        {categoryType}
      </Text>
    </button>
  );
};

export default CategoryButton;
