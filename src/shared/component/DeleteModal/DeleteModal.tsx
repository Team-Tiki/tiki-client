import { useDeleteBlockMutation } from '@/page/archiving/index/hook/api/useDeleteBlockMutaion';
import { useDeleteDocumentMutation } from '@/page/archiving/index/hook/api/useDeleteDocumentMutation';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { cancelStyle, deleteStyle } from '@/shared/component/DeleteModal/DeleteModal.style';
import { DELETE_DETAIL, DELETE_TITLE } from '@/shared/constant';
import { useCloseModal } from '@/shared/store/modal';

interface DeleteModalProps {
  title: 'block' | 'docs';
  detail: 'block' | 'docs';
  teamId: number;
  id: number;
}

const DeleteModal = ({ title, detail, teamId, id }: DeleteModalProps) => {
  const { mutate: blockMutate } = useDeleteBlockMutation();
  const { mutate: documentMutate } = useDeleteDocumentMutation();

  const closeModal = useCloseModal();

  const handleDeleteBlock = (teamId: number, id: number) => {
    blockMutate(
      { teamId: teamId, blockId: id },
      {
        onSuccess: () => {
          closeModal();
        },
      }
    );
  };

  const handleDeleteDocs = (teamId: number, id: number) => {
    documentMutate(
      { teamId: teamId, documentId: id },
      {
        onSuccess: () => {
          closeModal();
        },
      }
    );
  };

  const handleDelete = title === 'block' ? handleDeleteBlock : handleDeleteDocs;

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
        {DELETE_TITLE[title.toUpperCase() as keyof typeof DELETE_TITLE]}
      </Heading>
      <Text tag="body4" css={{ marginTop: '1rem', fontWeight: 400 }}>
        {DELETE_DETAIL[detail.toUpperCase() as keyof typeof DELETE_DETAIL]}
      </Text>

      <Flex styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.8rem', marginTop: '2.4rem' }}>
        <Button variant="secondary" size="large" onClick={() => closeModal()} css={cancelStyle}>
          취소
        </Button>
        <Button variant="primary" size="large" onClick={() => handleDelete(teamId, id)} css={deleteStyle}>
          삭제
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeleteModal;
