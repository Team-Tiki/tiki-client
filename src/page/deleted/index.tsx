import { useEffect, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Select from '@/common/component/Select/Select';
import { useOverlay } from '@/common/hook';
import { useMultiSelect } from '@/common/hook/useMultiSelect';

import { contentStyle } from '@/page/drive/index.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { File } from '@/shared/type/file';

const tmpData: File[] = [
  { fileId: 1, title: '최주용', volume: 3000, type: 'pdf', createdAt: '2024-11-11' },
  { fileId: 2, title: '남다은', volume: 3000, type: 'jpg', createdAt: '2024-11-11' },
  { fileId: 3, title: '김규홍', volume: 3000, type: 'word', createdAt: '2024-11-11' },
];

const DeletedPage = () => {
  const { isOpen, toggle } = useOverlay();
  const { ids, handleItemClick, handleAllClick, handleReset } = useMultiSelect(tmpData.length);

  const [canSelect, setCanSelect] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && canSelect) {
        setCanSelect(false);

        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [canSelect, handleReset]);

  return (
    <ContentBox
      variant="deleted"
      title="휴지통"
      description="5.16GB 사용 가능"
      headerOption={<Button>휴지통 비우기</Button>}
      contentOption={
        <Flex styles={{ justify: 'space-between', align: 'center' }}>
          {canSelect ? (
            <Flex styles={{ gap: '0.8rem' }}>
              <Button onClick={handleAllClick} variant="tertiary">
                전체 선택
              </Button>
              <Button variant="tertiary">복구</Button>
              <Button variant="tertiary">영구삭제</Button>
            </Flex>
          ) : (
            <Button onClick={() => setCanSelect(true)} variant="tertiary">
              선택
            </Button>
          )}
          <Select
            isOpen={isOpen}
            css={{ width: '11rem' }}
            variant="option"
            options={[{ value: '최근 삭제 순' }, { value: '과거 삭제 순' }]}
            defaultValue="최근 삭제 순"
            onTrigger={toggle}
          />
        </Flex>
      }>
      <div>
        <ul css={contentStyle(tmpData.length === 0)}>
          {tmpData.map((item) => (
            <FileGrid
              key={item.fileId}
              title={item.title}
              type={item.type}
              volume={item.volume}
              isSelectable={canSelect}
              isSelected={ids[+item.fileId]}
              onSelect={() => handleItemClick(+item.fileId)}
            />
          ))}
        </ul>
      </div>
      <EmptySection domain="deleted" isVisible={tmpData.length === 0} />
    </ContentBox>
  );
};

export default DeletedPage;
