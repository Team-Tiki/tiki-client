import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/index/component/TotalDocument/TotalDocument.style';
import { ICON_TYPE } from '@/page/archiving/index/constant/icon';
import { Block } from '@/page/archiving/index/type/blockType';
import { DocumentType } from '@/page/archiving/index/type/documentType';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { useTeamStore } from '@/shared/store/team';

import { blockNameStyle, containerStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  startDate: string;
  endDate: string;
  documentList?: DocumentType[];
  blockSelected: Block;
  onClickClose: () => void;
}

const SelectedBlock = ({
  selectedId,
  blockName,
  startDate,
  endDate,
  documentList,
  blockSelected,
  onClickClose,
}: DocumentBarInfoProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  const handleCloseClick = () => {
    onClickClose();
    closeModal;
  };

  const { teamId } = useTeamStore();

  return (
    <Flex tag="section" css={containerStyle}>
      {ICON_TYPE.filter((icon) => icon.name === blockSelected.blockType).map((icon) => icon.icon)}
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={blockNameStyle}>
          {blockName}
        </Heading>
        <Button
          variant="text"
          size="small"
          css={deleteBtnStyle}
          onClick={() =>
            openModal(
              <DeleteModal
                title="block"
                detail="block"
                onClose={handleCloseClick}
                teamId={+teamId}
                id={blockSelected.timeBlockId}
              />
            )
          }>
          블록삭제
        </Button>
      </Flex>
      <Text tag="body6" css={{ color: theme.colors.gray_800 }}>
        {startDate} ~ {endDate}
      </Text>

      <Flex tag="ul" css={documentListStyle}>
        {documentList?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId || 1}
            selectedId={selectedId}
            blockName={data.blockName}
            fileUrl={data.fileUrl}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </Flex>
  );
};

export default SelectedBlock;
