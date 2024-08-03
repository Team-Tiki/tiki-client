import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import { ICON_TYPE } from '@/page/archiving/index/constant/icon';
import { useBlockInfoQuery } from '@/page/archiving/index/hook/api/useBlockInfoQuery';
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
import { useTeamId } from '@/shared/store/team';

import { blockNameStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedTabId: string;
  blockName: string;
  selectedBlock: Block;
  onClickClose: () => void;
}

const SelectedBlock = ({ selectedTabId, blockName, selectedBlock, onClickClose }: DocumentBarInfoProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  const teamId = useTeamId();

  const { data: blockData } = useBlockInfoQuery(+teamId, selectedBlock?.timeBlockId ?? 0);

  const startDate = formattingDate(selectedBlock.startDate);
  const endDate = formattingDate(selectedBlock.endDate);

  const handleModalClose = () => {
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
                onClose={handleModalClose}
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

      <Flex tag="ul" styles={{ direction: 'column', marginTop: '1.6rem', gap: '0.8rem' }}>
        {blockData?.data.documents?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId}
            selectedTabId={selectedTabId}
            blockName={data.blockName}
            documentUrl={data.fileUrl}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </Flex>
  );
};

export default SelectedBlock;
