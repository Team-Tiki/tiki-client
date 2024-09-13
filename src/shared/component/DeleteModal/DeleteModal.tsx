import { useDeleteBlockMutation } from '@/page/archiving/index/hook/api/useDeleteBlockMutaion';
import { useDeleteDocumentMutation } from '@/page/archiving/index/hook/api/useDeleteDocumentMutation';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { cancelStyle, deleteStyle } from '@/shared/component/DeleteModal/DeleteModal.style';
import { DELETE_DETAIL, DELETE_TITLE } from '@/shared/constant';
import { useModalActions, useModalData } from '@/shared/store/modal';

const DeleteModal = () => {
  const modalData = useModalData();
  const { closeModal } = useModalActions();

  if (!modalData) {
    return null;
  }

  const { teamId, itemId, itemType } = modalData;

  const { mutate: blockMutate } = useDeleteBlockMutation();
  const { mutate: documentMutate } = useDeleteDocumentMutation();

  const handleDeleteBlock = () => {
    if (teamId && itemId) {
      blockMutate(
        { teamId, blockId: itemId },
        {
          onSuccess: () => {
            closeModal();
          },
        }
      );
    }
  };

  const handleDeleteDocs = () => {
    if (teamId && itemId) {
      documentMutate(
        { teamId, documentId: itemId },
        {
          onSuccess: () => {
            closeModal();
          },
        }
      );
    }
  };

  const handleDelete = itemType === 'block' ? handleDeleteBlock : handleDeleteDocs;

  if (!itemType || !teamId || !itemId) return null;

  return (
    <Flex
      styles={{
        direction: 'column',
        align: 'center',
        justify: 'center',
        paddingRight: '9.35rem',
        paddingLeft: '9.35rem',
      }}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        {DELETE_TITLE[itemType.toUpperCase() as keyof typeof DELETE_TITLE]}
      </Heading>
      <Text tag="body4" css={{ marginTop: '1rem', fontWeight: 400 }}>
        {DELETE_DETAIL[itemType.toUpperCase() as keyof typeof DELETE_DETAIL]}
      </Text>

      <Flex styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.8rem', marginTop: '2.4rem' }}>
        <Button variant="secondary" size="large" onClick={closeModal} css={cancelStyle}>
          취소
        </Button>
        <Button variant="primary" size="large" onClick={handleDelete} css={deleteStyle}>
          삭제
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeleteModal;
