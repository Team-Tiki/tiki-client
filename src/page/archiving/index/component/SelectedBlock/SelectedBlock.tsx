import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/index/component/TotalDocument/TotalDocument.style';
import { ICON_TYPE } from '@/page/archiving/index/constant/icon';
import { Block } from '@/page/archiving/index/type/blockType';
import { DocumentType } from '@/page/archiving/index/type/documentType';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';
import { useDeleteModalStore } from '@/shared/store/modal';
import { useTeamStore } from '@/shared/store/team';

import { blockNameStyle, containerStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  startDate: string;
  endDate: string;
  documentList?: DocumentType[];
  selectedBlock: Block;
  onClickClose: () => void;
}

const SelectedBlock = ({
  selectedId,
  blockName,
  startDate,
  endDate,
  documentList,
  selectedBlock,
}: DocumentBarInfoProps) => {
  const { teamId } = useTeamStore();

  const { openModal } = useDeleteModalStore();

  const handleDeleteClick = () => {
    openModal();
  };

  return (
    <Flex tag="section" css={containerStyle}>
      {ICON_TYPE.find((icon) => icon.name === selectedBlock.blockType)?.icon}
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={blockNameStyle}>
          {blockName}
        </Heading>
        <Button variant="text" size="small" css={deleteBtnStyle} onClick={handleDeleteClick}>
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
      <DeleteModal title="block" detail="block" teamId={+teamId} id={selectedBlock.timeBlockId} />
    </Flex>
  );
};

export default SelectedBlock;
