import { Button, Flex } from '@tiki/ui';
import { useMultiSelect } from '@tiki/utils';

import { contentStyle } from '@/page/drive/index.style';

import { $api } from '@/shared/api/client';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

interface FileData {
  documentId: number;
  name: string;
  url: string;
  capacity: number;
}

const DeletedPage = () => {
  const teamId = useInitializeTeamId();

  const { data, refetch } = $api.useQuery('get', '/api/v1/teams/{teamId}/trash', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const { ids, canSelect, handleItemClick, handleAllClick, handleToggleSelect, handleReset } = useMultiSelect<FileData>(
    'documentId',
    data?.data?.deletedDocuments || []
  );

  const deleteMutation = $api.useMutation('delete', '/api/v1/teams/{teamId}/trash', {
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error('삭제 실패:', error);
    },
  });

  const handleDelete = (docs?: number[]) => {
    deleteMutation.mutate({
      params: {
        path: {
          teamId,
        },
        query: {
          documentId: docs ? docs : ids,
        },
      },
    });
    handleReset();
  };

  const restoreMutation = $api.useMutation('post', '/api/v1/teams/{teamId}/trash', {
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error('복원 실패:', error);
    },
  });

  const handleRestore = () => {
    restoreMutation.mutate({
      params: {
        path: {
          teamId,
        },
        query: {
          documentId: ids,
        },
      },
    });
    handleReset();
  };

  return (
    <ContentBox
      variant="deleted"
      title="휴지통"
      description="5.16GB 사용 가능"
      headerOption={
        <Button
          onClick={() => {
            data?.data?.deletedDocuments && handleDelete(data?.data?.deletedDocuments.map((item) => item.documentId));
          }}>
          휴지통 비우기
        </Button>
      }
      contentOption={
        <Flex styles={{ justify: 'space-between', align: 'center' }}>
          {canSelect ? (
            <Flex styles={{ gap: '0.8rem' }}>
              <Button onClick={handleAllClick} variant="tertiary">
                전체 선택
              </Button>
              <Button variant="tertiary" onClick={handleRestore}>
                복구
              </Button>
              <Button variant="tertiary" onClick={() => handleDelete()}>
                영구삭제
              </Button>
            </Flex>
          ) : (
            <Button onClick={handleToggleSelect} variant="tertiary">
              선택
            </Button>
          )}
        </Flex>
      }>
      <div>
        <ul css={contentStyle(data?.data?.deletedDocuments.length ?? 0)}>
          {data?.data?.deletedDocuments.map((item) => (
            <FileGrid
              key={item.documentId}
              isDeleted={true}
              name={item.name}
              type={extractFileExtension(item.name) as File}
              url={item.url}
              capacity={item.capacity}
              createdTime={''}
              isSelectable={canSelect}
              isSelected={ids.includes(+item.documentId)}
              onSelect={() => handleItemClick(+item.documentId)}
            />
          ))}
        </ul>
      </div>
      <EmptySection domain="deleted" isVisible={data?.data?.deletedDocuments.length === 0} />
    </ContentBox>
  );
};

export default DeletedPage;
