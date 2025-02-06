import { Button, Flex, useToastAction } from '@tiki/ui';
import { useMultiSelect } from '@tiki/utils';

import { useTeamUsage } from '@/page/drive/hook/api/useTeamUsage';
import { contentStyle } from '@/page/drive/index.style';

import { $api } from '@/shared/api/client';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { CAUTION } from '@/shared/constant';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
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
  const { createToast } = useToastAction();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const { modifiedAvailableUsage, modifiedCapacity, refetch: usageRefetch } = useTeamUsage();

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
      createToast(`삭제가 완료되었습니다.`, 'success');
      refetch();
      usageRefetch();
    },
    onError: (error) => {
      createToast(`${error.message}`, 'error');
    },
  });

  const restoreMutation = $api.useMutation('post', '/api/v1/teams/{teamId}/trash', {
    onSuccess: () => {
      createToast(`복구가 완료되었습니다.`, 'success');
      refetch();
    },
    onError: (error) => {
      createToast(`${error.message}`, 'error');
    },
  });

  const handleDelete = () => {
    openModal('caution', {
      infoText: CAUTION.DELETE_FOR_GOOD.INFO_TEXT,
      content: CAUTION.DELETE_FOR_GOOD.CONTENT,
      desc: CAUTION.DELETE_FOR_GOOD.DESC,
      onClick: () => {
        try {
          deleteMutation.mutate({
            params: { path: { teamId }, query: { documentId: ids } },
          });

          handleReset();
          closeModal();
        } catch (error) {
          createToast(`삭제에 실패하였습니다:${error}`, 'error');
        }
      },
    });
  };

  const handleRestore = () => {
    restoreMutation.mutate({
      params: { path: { teamId }, query: { documentId: ids } },
    });

    handleReset();
    closeModal();
  };

  const handleDeleteEntireFiles = () => {
    openModal('caution', {
      infoText: CAUTION.EMPTY_DELETED.INFO_TEXT,
      content: CAUTION.EMPTY_DELETED.CONTENT,
      desc: CAUTION.EMPTY_DELETED.DESC,
      onClick: () => {
        try {
          deleteMutation.mutate({
            params: {
              path: { teamId },
              query: { documentId: data?.data?.deletedDocuments.map((item) => item.documentId) ?? [] },
            },
          });

          handleReset();
          closeModal();
        } catch (error) {
          createToast(`휴지통 비우기에 실패하였습니다:${error}`, 'error');
        }
      },
    });
  };

  return (
    <ContentBox
      variant="deleted"
      title="휴지통"
      description={`${modifiedAvailableUsage}GB 사용 가능 (총 ${modifiedCapacity}GB)`}
      headerOption={
        <Button onClick={handleDeleteEntireFiles} disabled={data?.data?.deletedDocuments.length === 0}>
          휴지통 비우기
        </Button>
      }
      contentOption={
        <Flex styles={{ justify: 'space-between', align: 'center' }}>
          {canSelect && data?.data?.deletedDocuments.length !== 0 ? (
            <Flex styles={{ gap: '0.8rem' }}>
              <Button onClick={handleAllClick} variant="tertiary">
                전체 선택
              </Button>
              <Button variant="tertiary" onClick={handleRestore} disabled={!ids[0]}>
                복구
              </Button>
              <Button variant="tertiary" onClick={handleDelete} disabled={!ids[0]}>
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
