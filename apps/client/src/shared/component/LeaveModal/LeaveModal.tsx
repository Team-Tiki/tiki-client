import { Flex, Text } from '@tiki/ui';

import { contentStyle, titleStyle } from '@/shared/component/DeletedModal/DeletedModal.style';
import { Modal } from '@/shared/component/Modal';
import { useCloseModal, useModalData } from '@/shared/store/modal';

const LeaveModal = () => {
  const modalData = useModalData();
  const closeModal = useCloseModal();

  if (!modalData) return null;

  const { title, content, onClick, isTitleOnly } = modalData;

  return (
    <Modal isOpen={true} onClose={closeModal} size={isTitleOnly ? 'xSmall' : 'small'}>
      <Modal.Body>
        <Flex styles={{ width: '100%', direction: 'column', gap: '2rem' }}>
          <Text tag="body4" css={titleStyle}>
            {title}
          </Text>
          {content && (
            <Text tag="body7" css={contentStyle}>
              {content}
            </Text>
          )}
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="leave" buttonClick={onClick || closeModal} closeModal={closeModal} />
    </Modal>
  );
};

export default LeaveModal;
