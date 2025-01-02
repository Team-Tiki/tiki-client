import { useToastAction } from '@tiki/ui';

import FileItem from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Selected/FileItem/FileItem';

import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

interface SelectedFileModalProps {
  selectedFiles: File[];
}

const SelectedFileModal = ({ selectedFiles }: SelectedFileModalProps) => {
  const teamId = useInitializeTeamId();

  const { formData } = useBlockContext();

  const closeModal = useCloseModal();

  const { createToast } = useToastAction();

  const { mutate } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block');

  const handleCreateBlock = () => {
    mutate(
      {
        params: {
          path: {
            teamId,
          },
          query: {
            type: 'executive',
          },
        },
        body: {
          name: formData.name,
          color: formData.color,
          blockType: formData.blockType,
          startDate: formData.startDate,
          endDate: formData.endDate,
          documentIds: formData.documentIds,
        },
      },
      {
        onSuccess: () => {
          createToast('타임 블록이 생성되었습니다.', 'success');
        },
        onError: () => {
          createToast('타임 블록 생성을 실패했습니다.', 'error');
        },
      }
    );

    closeModal();
  };

  return (
    <>
      <Modal.Header step={4} />
      <Modal.Body>
        {selectedFiles.map((file) => (
          <FileItem key={file.name} fileName={file.name} />
        ))}
      </Modal.Body>
      <Modal.Footer step={4} contentType="create-block" buttonClick={handleCreateBlock} />
    </>
  );
};

export default SelectedFileModal;
