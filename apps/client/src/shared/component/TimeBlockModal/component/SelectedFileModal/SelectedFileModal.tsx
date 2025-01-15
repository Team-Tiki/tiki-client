import { useToastAction } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import FileItem from '@/shared/component/TimeBlockModal/component/SelectedFileModal/FileItem/FileItem';
import { fileListWrapperStyle } from '@/shared/component/TimeBlockModal/component/SelectedFileModal/SelectedFileModal.style';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

interface SelectedFileModalProps {
  selectedFiles: DocumentDetail[];
}

const SelectedFileModal = ({ selectedFiles }: SelectedFileModalProps) => {
  const teamId = useInitializeTeamId();

  const { createToast } = useToastAction();
  const { formData } = useBlockContext();

  const { prevStep } = useFunnel();
  const closeModal = useCloseModal();

  const queryClient = useQueryClient();

  const { mutate } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block');

  const handleCreateBlock = () => {
    mutate(
      {
        params: {
          path: { teamId },
          query: { type: 'executive' },
        },
        body: {
          ...formData,
        },
      },
      {
        onSuccess: () => {
          createToast('타임 블록이 생성되었습니다.', 'success');

          queryClient.invalidateQueries({
            queryKey: ['get', '/api/v1/teams/{teamId}/timeline'],
          });

          closeModal();
        },
        onError: () => {
          createToast('타임 블록 생성을 실패했습니다.', 'error');
        },
      }
    );
  };

  return (
    <>
      <Modal.Header step={4} />
      <Modal.Body>
        <ul css={fileListWrapperStyle}>
          {selectedFiles.map((file) => (
            <FileItem key={file.documentId} fileName={file.name} />
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer step={4} contentType="create-block" buttonClick={handleCreateBlock} prevStep={prevStep} />
    </>
  );
};

export default SelectedFileModal;
