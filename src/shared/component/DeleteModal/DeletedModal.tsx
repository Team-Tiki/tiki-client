import Flex from '@/common/component/Flex/Flex';
import { Modal } from '@/common/component/Modal';
import Text from '@/common/component/Text/Text';

import { DELETED_DETAIL, DELETED_TITLE } from '@/shared/constant';
import { useCloseModal, useModalData } from '@/shared/store/modal';

import { detailStyle, titleStyle } from './DeletedModal.style';

const DeletedModal = () => {
  const closeModal = useCloseModal();
  const modalData = useModalData();

  const itemType = modalData?.itemType;
  const title = itemType ? DELETED_TITLE[itemType.toUpperCase() as keyof typeof DELETED_TITLE] : '';

  const handleDelete = () => {
    //api 로직 추가하기

    closeModal();
  };

  if (!itemType) return null;

  return (
    <>
      <Modal.Header step={1} totalSteps={1} />
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
      <Modal.Footer step={1} buttonClick={handleDelete} />
    </>
  );
};

export default DeletedModal;
