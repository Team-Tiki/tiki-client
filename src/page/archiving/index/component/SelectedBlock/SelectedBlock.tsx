import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/index/component/TotalDocument/TotalDocument.style';
import { ICON_TYPE } from '@/page/archiving/index/constant/icon';
import { useBlockQuery } from '@/page/archiving/index/hook/api/useBlockQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { DocumentType } from '@/page/archiving/index/type/documentType';
import { formattingDate } from '@/page/archiving/index/util/date';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { useTeamStore } from '@/shared/store/team';

import { blockNameStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  selectedBlock: Block;
  onClickClose: () => void;
}

const SelectedBlock = ({ selectedId, blockName, selectedBlock, onClickClose }: DocumentBarInfoProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  const { teamId } = useTeamStore();

  const { data: blockData } = useBlockQuery(+teamId, selectedBlock?.timeBlockId ?? 69);

  const startDate = formattingDate(selectedBlock.startDate);
  const endDate = formattingDate(selectedBlock.endDate);

  const handleCloseClick = () => {
    onClickClose();
    closeModal;
  };

  return (
    <Flex tag="section" styles={{ direction: 'column', gap: '0.8rem', padding: '1.6rem' }}>
      {ICON_TYPE.find((icon) => icon.name === selectedBlock.blockType)?.icon}
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
                id={selectedBlock.timeBlockId}
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
        {blockData?.data.documents?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId}
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
