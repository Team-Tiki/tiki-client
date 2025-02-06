import { Modal } from '@/shared/component/Modal';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import FileItem from '@/shared/component/TimeBlockModal/component/SelectedFileModal/FileItem/FileItem';
import { fileListWrapperStyle } from '@/shared/component/TimeBlockModal/component/SelectedFileModal/SelectedFileModal.style';
import { useFunnel } from '@/shared/hook/common/useFunnel';
import { useCloseModal, useModalIsOpen } from '@/shared/store/modal';

interface SelectedFileModalProps {
  selectedFiles: DocumentDetail[];
  onComplete: () => void;
}

const SelectedFilesModal = ({ selectedFiles, onComplete }: SelectedFileModalProps) => {
  const { prevStep } = useFunnel();

  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Header />
      <Modal.Body>
        <ul css={fileListWrapperStyle}>
          {selectedFiles.map((file) => (
            <FileItem key={file.documentId} fileName={file.name} />
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer step={2} contentType="timeblock-file" buttonClick={onComplete} closeModal={prevStep} />
    </Modal>
  );
};

export default SelectedFilesModal;
