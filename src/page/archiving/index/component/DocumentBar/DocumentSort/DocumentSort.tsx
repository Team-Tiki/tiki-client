import { useEffect } from 'react';

import ArrowDownThin from '@/common/asset/svg/arrow-down-thin.svg?react';
import ArrowUpThin from '@/common/asset/svg/arrow-up-thin.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import ArrowDown from '@/common/asset/svg/arrow.svg?react';
import Button from '@/common/component/Button/Button';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { buttonStyle, fontStyle } from '@/page/archiving/index/component/DocumentBar/DocumentSort/DocumentSort.style';

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
    <Select
      options={options}
      ref={ref}
      isOpen={isOpen}
      onSelect={handleSelect}
      trigger={
        <Button css={buttonStyle} onClick={toggle}>
          {selected || '최근 업로드 순'}
          {isOpen ? <ArrowUp width={12} height={12} /> : <ArrowDown width={12} height={12} />}
        </Button>
      }
      css={fontStyle}
    />
  );
};

export default DocumentSort;
