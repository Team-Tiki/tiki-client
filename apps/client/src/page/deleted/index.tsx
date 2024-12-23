import { Button, Flex, Select } from '@tiki/ui';
import { useMultiSelect, useOverlay } from '@tiki/utils';

import { contentStyle } from '@/page/drive/index.style';

import { components } from '@/shared/__generated__/schema';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

type Document = components['schemas']['DocumentGetResponse'];

const tmpData: Document[] = [
  { documentId: 1, name: '최주용', capacity: 3000, type: 'pdf', createdTime: '2024-11-11', url: '' },
  { documentId: 5, name: '남다은', capacity: 3000, type: 'jpg', createdTime: '2024-11-11', url: '' },
  { documentId: 8, name: '김규홍', capacity: 3000, type: 'word', createdTime: '2024-11-11', url: '' },
  { documentId: 1, name: '최주용', capacity: 3000, type: 'pdf', createdTime: '2024-11-11', url: '' },
  { documentId: 5, name: '남다은', capacity: 3000, type: 'jpg', createdTime: '2024-11-11', url: '' },
  { documentId: 1, name: '최주용', capacity: 3000, type: 'pdf', createdTime: '2024-11-11', url: '' },
  { documentId: 5, name: '남다은', capacity: 3000, type: 'jpg', createdTime: '2024-11-11', url: '' },
  { documentId: 1, name: '최주용', capacity: 3000, type: 'pdf', createdTime: '2024-11-11', url: '' },
  { documentId: 5, name: '남다은', capacity: 3000, type: 'jpg', createdTime: '2024-11-11', url: '' },
];

const DeletedPage = () => {
  const { isOpen, toggle } = useOverlay();
  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<Document>(
    'documentId',
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
              key={item.documentId}
              name={item.name}
              type={extractFileExtension(item.name) as File}
              capacity={item.capacity}
              createdTime={item.createdTime}
              url={item.url}
              isSelectable={canSelect}
              isSelected={ids.includes(+item.documentId)}
              onSelect={() => handleItemClick(+item.documentId)}
            />
          ))}
        </ul>
      </div>
      <EmptySection domain="deleted" isVisible={tmpData.length === 0} />
    </ContentBox>
  );
};

export default DeletedPage;
