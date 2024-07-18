import Filter from '@/page/archiving/index/component/DocumentFilter/DocumentFilter';
import { buttonStyle, fontStyle } from '@/page/archiving/index/component/DocumentSort/DocumentSort.style';

import { forwardRef, useEffect } from 'react';

import ArrowDownThin from '@/common/asset/svg/arrow-down-thin.svg?react';
import ArrowUpThin from '@/common/asset/svg/arrow-up-thin.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import ArrowDown from '@/common/asset/svg/arrow.svg?react';
import { useOutsideClick, useOverlay } from '@/common/hook';

interface DocumentSortProps {
  selected: string;
  onSelected: (option: string) => void;
}
const DocumentSort = ({ selected, onSelected }: DocumentSortProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  useEffect(() => {
    close?.();
  }, [selected, close]);

  const handleSelect = (id: string) => {
    onSelected(id);
  };

  const options = [
    { id: 1, text: '최근 업로드 순', logo: <ArrowUpThin /> },
    { id: 2, text: '과거 업로드 순', logo: <ArrowDownThin /> },
  ];

  return (
    <Filter
      options={options}
      ref={ref}
      isOpen={isOpen}
      onSelect={handleSelect}
      trigger={
        <button type="button" css={buttonStyle} onClick={toggle}>
          {selected || '최근 업로드 순'}
          {isOpen ? <ArrowUp width={12} height={12} /> : <ArrowDown width={12} height={12} />}
        </button>
      }
      css={fontStyle}
    />
  );
};

export default forwardRef(DocumentSort);
