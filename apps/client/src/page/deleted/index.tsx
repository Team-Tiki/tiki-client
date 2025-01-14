import { Button, Flex, useToastAction } from '@tiki/ui';
import { useMultiSelect } from '@tiki/utils';

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

  const handleDelete = (docs?: number[]) => {
    openModal('caution', {
      infoText: CAUTION.DELETE_FILE.INFO_TEXT,
      content: CAUTION.DELETE_FILE.CONTENT,
      desc: CAUTION.DELETE_FILE.DESC,
      onClick: () => {
        try {
          deleteMutation.mutate({
            params: { path: { teamId }, query: { documentId: docs ? docs : ids } },
          });

          handleReset();
        } catch (error) {
          createToast('영구 삭제 도중 오류가 발생했습니다.', 'error');
        }
      },
    });
  };

  const handleRestore = () => {
    openModal('caution', {
      infoText: CAUTION.RESTORE_FILE.INFO_TEXT,
      content: CAUTION.RESTORE_FILE.CONTENT,
      footerType: 'caution-modify',
      onClick: () => {
        try {
          restoreMutation.mutate({
            params: { path: { teamId }, query: { documentId: ids } },
          });

          handleReset();
          closeModal();
        } catch (error) {
          createToast('파일 복구 도중 오류가 발생했습니다.', 'error');
        }
      },
    });
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
