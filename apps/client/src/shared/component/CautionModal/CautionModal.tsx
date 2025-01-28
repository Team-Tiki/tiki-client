import { Text } from '@tiki/ui';

import { bodyStyle, contentStyle, descStyle } from '@/shared/component/CautionModal/CautionModal.style';
import { Modal } from '@/shared/component/Modal';
import { useCloseModal } from '@/shared/store/modal';

interface CautionModalProps {
  infoText: string;
  content: string;
  desc: string;
  footerType: 'caution' | 'caution-modify';
  onClick: () => void;
  onClose?: () => void;
}

const CautionModal = ({ infoText, content, desc = '', footerType, onClick, onClose }: CautionModalProps) => {
  const modalClose = useCloseModal();

  return (
    <>
      <Modal.Header infoText={infoText} />
      <Modal.Body>
        <div css={bodyStyle}>
          <Text tag="body4" css={contentStyle}>
            {content}
          </Text>
          <Text tag="body8" css={descStyle}>
            {desc}
          </Text>
        </div>
      </Modal.Body>
      <Modal.Footer contentType={footerType!} buttonClick={onClick} closeModal={onClose ?? modalClose} />
    </>
  );
};

export default CautionModal;
