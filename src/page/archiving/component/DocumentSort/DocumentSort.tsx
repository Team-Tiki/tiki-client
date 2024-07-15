import Filter from '@/page/archiving/component/DocumentFilter/DocumentFilter';
import { buttonStyle, fontStyle } from '@/page/archiving/component/DocumentSort/DocumentSort.style';

import { forwardRef, useEffect, useState } from 'react';

import ArrowDownThin from '@/common/asset/svg/arrow-down-thin.svg?react';
import ArrowUpThin from '@/common/asset/svg/arrow-up-thin.svg?react';
import ArrowUp from '@/common/asset/svg/arrow-up.svg?react';
import ArrowDown from '@/common/asset/svg/arrow.svg?react';
import { useOutsideClick, useOverlay } from '@/common/hook';

const DocumentSort = () => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    close?.();
  }, [selected, close]);

  const handleSelect = (id: string) => {
    setSelected(id);
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
        <button css={buttonStyle} onClick={toggle}>
          {selected || '최근 업로드 순'}
          {isOpen ? <ArrowUp width={120} height={12} /> : <ArrowDown width={12} height={12} />}
        </button>
      }
      css={fontStyle}
    />
  );
};

export default forwardRef(DocumentSort);
