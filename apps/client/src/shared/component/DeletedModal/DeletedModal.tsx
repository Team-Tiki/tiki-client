import { Flex, Text } from '@tiki/ui';

import { detailStyle, titleStyle } from '@/shared/component/DeletedModal/DeletedModal.style';
import { Modal } from '@/shared/component/Modal';
import { DELETED_DETAIL, DELETED_TITLE } from '@/shared/constant';
import { useCloseModal, useModalData } from '@/shared/store/modal';

const DeletedModal = () => {
  const closeModal = useCloseModal();
  const modalData = useModalData();

  const itemType = modalData?.itemType;
  const title = itemType && DELETED_TITLE[itemType.toUpperCase() as keyof typeof DELETED_TITLE];

  const handleDelete = () => {
    //api 로직 추가하기

    closeModal();
  };

  if (!itemType) return null;

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ direction: 'column', gap: '1.6rem', align: 'center', height: '33.8rem', justify: 'center' }}>
          <Text tag="body4" css={titleStyle}>
            {title}
          </Text>
          <Text tag="body8" css={detailStyle}>
            {DELETED_DETAIL}
          </Text>
        </Flex>
      </Modal.Body>
      <Modal.Footer contentType="deleted" buttonClick={handleDelete} />
    </>
  );
};

export default DeletedModal;
