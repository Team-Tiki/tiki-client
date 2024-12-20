import { Button, Flex, Select } from '@tiki/ui';
import { useMultiSelect, useOverlay } from '@tiki/utils';

import { contentStyle } from '@/page/drive/index.style';

import { $api } from '@/shared/api/client';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { getFileType } from '@/shared/util/file';

interface FileData {
  documentId: number;
  name: string;
  url: string;
  capacity: number;
}

const DeletedPage = () => {
  const { isOpen, toggle } = useOverlay();

  const teamId = useInitializeTeamId();

  const { data } = $api.useQuery('get', '/api/v1/teams/{teamId}/trash', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect } = useMultiSelect<FileData>(
    'documentId',
    data?.data?.deletedDocuments || []
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
        <ul css={contentStyle(data?.data?.deletedDocuments.length ?? 0)}>
          {data?.data?.deletedDocuments.map((item) => (
            <FileGrid
              key={item.documentId}
              title={item.name}
              type={getFileType(item.name) || ''}
              volume={item.capacity}
              isSelectable={canSelect}
              isSelected={ids.includes(+item.documentId)}
              onSelect={() => handleItemClick(+item.documentId)}
              isDeleted={true}
            />
          ))}
        </ul>
      </div>
      <EmptySection domain="deleted" isVisible={data?.data?.deletedDocuments.length === 0} />
    </ContentBox>
  );
};

export default DeletedPage;
