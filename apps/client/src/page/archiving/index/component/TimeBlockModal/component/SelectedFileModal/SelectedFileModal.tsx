import { useToastAction } from '@tiki/ui';

import { DocumentDetail } from '@/page/archiving/index/component/TimeBlockModal';
import FileItem from '@/page/archiving/index/component/TimeBlockModal/component/SelectedFileModal/FileItem/FileItem';
import { fileListWrapperStyle } from '@/page/archiving/index/component/TimeBlockModal/component/SelectedFileModal/SelectedFileModal.style';

import { $api } from '@/shared/api/client';
import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal } from '@/shared/store/modal';

interface SelectedFileModalProps {
  selectedFiles: DocumentDetail[];
}

const SelectedFileModal = ({ selectedFiles }: SelectedFileModalProps) => {
  const teamId = useInitializeTeamId();

  const { prevStep } = useFunnel();
  const closeModal = useCloseModal();

  const { formData } = useBlockContext();

  const { createToast } = useToastAction();

  console.log('file:', selectedFiles);

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
          ...formData,
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
