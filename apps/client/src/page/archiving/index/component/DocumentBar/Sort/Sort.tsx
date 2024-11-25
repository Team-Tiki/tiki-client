import { useEffect } from 'react';

import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { fontStyle } from '@/page/archiving/index/component/DocumentBar/Sort/Sort.style';
import { OPTIONS } from '@/page/archiving/index/constant/sortOption';

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

  return (
    <Select
      css={[{ width: '12rem' }, fontStyle]}
      variant="option"
      placeholder={selected}
      options={OPTIONS}
      ref={ref}
      isOpen={isOpen}
      onTrigger={toggle}
      onSelect={handleSelect}
    />
  );
};

export default DocumentSort;
