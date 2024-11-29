import { Button, Flex, Select } from '@tiki/ui';
import { useMultiSelect, useOverlay } from '@tiki/utils';

import { contentStyle } from '@/page/drive/index.style';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { File } from '@/shared/type/file';

const tmpData: File[] = [
  { fileId: 1, title: '최주용', volume: 3000, type: 'pdf', createdAt: '2024-11-11' },
  { fileId: 5, title: '남다은', volume: 3000, type: 'jpg', createdAt: '2024-11-11' },
  { fileId: 8, title: '김규홍', volume: 3000, type: 'word', createdAt: '2024-11-11' },
  { fileId: 1, title: '최주용', volume: 3000, type: 'pdf', createdAt: '2024-11-11' },
  { fileId: 5, title: '남다은', volume: 3000, type: 'jpg', createdAt: '2024-11-11' },
  { fileId: 1, title: '최주용', volume: 3000, type: 'pdf', createdAt: '2024-11-11' },
  { fileId: 5, title: '남다은', volume: 3000, type: 'jpg', createdAt: '2024-11-11' },
  { fileId: 1, title: '최주용', volume: 3000, type: 'pdf', createdAt: '2024-11-11' },
  { fileId: 5, title: '남다은', volume: 3000, type: 'jpg', createdAt: '2024-11-11' },
];

const DeletedPage = () => {
  const { isOpen, toggle } = useOverlay();
  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<File>(
    'fileId',
    tmpData
  );

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
            <Button onClick={handleToggleSelect} variant="tertiary">
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
        <ul css={contentStyle(tmpData.length)}>
          {tmpData.map((item) => (
            <FileGrid
              key={item.fileId}
              title={item.title}
              type={item.type}
              volume={item.volume}
              isSelectable={canSelect}
              isSelected={ids.includes(+item.fileId)}
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
