import { useEffect } from 'react';

import Down from '@/common/asset/svg/ic_down.svg?react';
import Up from '@/common/asset/svg/ic_up.svg?react';
import Button from '@/common/component/Button/Button';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import { buttonStyle, fontStyle } from '@/page/archiving/index/component/DocumentBar/Sort/Sort.style';
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
      options={OPTIONS}
      ref={ref}
      isOpen={isOpen}
      onSelect={handleSelect}
      trigger={
        <Button css={buttonStyle} onClick={toggle}>
          {selected || '최근 업로드 순'}
          {isOpen ? <Up width={12} height={12} /> : <Down width={12} height={12} />}
        </Button>
      }
      css={fontStyle}
    />
  );
};

export default DocumentSort;
