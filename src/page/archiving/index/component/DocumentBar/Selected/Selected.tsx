import { useLocation } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import DocumentItem from '@/page/archiving/index/component/DocumentBar/Item/Item';
import { blockNameStyle, deleteBtnStyle } from '@/page/archiving/index/component/DocumentBar/Selected/Selected.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { useBlockInfoQuery } from '@/page/archiving/index/hook/api/useBlockInfoQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { DocumentType } from '@/page/archiving/index/type/documentType';
import { formattingDate } from '@/page/archiving/index/util/date';

import { useOpenModal } from '@/shared/store/modal';

interface SelectedProps {
  selectedBlock: Block;
  onClose: () => void;
}

const Selected = ({ selectedBlock }: SelectedProps) => {
  const location = useLocation();
  const teamId = new URLSearchParams(location.search).get('teamId');

  if (!teamId) throw new Error('has no teamId');

  const { data: blockData } = useBlockInfoQuery(+teamId, selectedBlock?.timeBlockId ?? 0);

  const startDate = formattingDate(selectedBlock.startDate);
  const endDate = formattingDate(selectedBlock.endDate);

  const openModal = useOpenModal();

  const handleDeleteClick = () => {
    openModal('delete', { teamId: +teamId!, itemId: selectedBlock.timeBlockId, itemType: 'block' });
  };

  return (
    <Flex tag="section" styles={{ direction: 'column', gap: '0.8rem', padding: '1.6rem' }}>
      {BLOCK_ICON.find((icon) => icon.name === selectedBlock.blockType)?.icon?.(selectedBlock.color)}
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={blockNameStyle}>
          {selectedBlock.name}
        </Heading>
        <Button variant="text" size="small" css={deleteBtnStyle} onClick={handleDeleteClick}>
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
            blockName={data.blockName}
            fileUrl={data.fileUrl}
            fileName={data.fileName}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Selected;
