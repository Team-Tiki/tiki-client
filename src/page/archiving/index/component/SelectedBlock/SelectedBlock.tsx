import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import {
  blockNameStyle,
  containerStyle,
  deleteBtnStyle,
} from '@/page/archiving/index/component/SelectedBlock/SelectedBlock.style';
import { documentListStyle } from '@/page/archiving/index/component/TotalDocument/TotalDocument.style';
import { ICON_TYPE } from '@/page/archiving/index/constant/icon';
import { Block } from '@/page/archiving/index/type/blockType';
import { DocumentType } from '@/page/archiving/index/type/documentType';

import { useLocation } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { useOpenModal } from '@/shared/component/Modal/store/modal';

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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const teamId = searchParams.get('teamId');
  const openModal = useOpenModal();

  const handleDeleteClick = () => {
    openModal('delete', { teamId: +teamId!, itemId: selectedBlock.timeBlockId, itemType: 'block' }); // 데이터 전달
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
    </Flex>
  );
};

export default SelectedBlock;
