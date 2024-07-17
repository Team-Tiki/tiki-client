import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/TotalDocument/TotalDocument.style';
import { DocumentType } from '@/page/archiving/type/documentType';

import Laptop from '@/common/asset/svg/laptop.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { blockNameStyle, containerStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  startDate: string;
  endDate: string;
  documentList: DocumentType[];
}

const SelectedBlock = ({ selectedId, blockName, startDate, endDate, documentList }: DocumentBarInfoProps) => {
  return (
    <Flex tag="section" css={containerStyle}>
      <Laptop width={24} height={24} />
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={blockNameStyle}>
          {blockName}
        </Heading>
        <Button variant="text" size="small" css={deleteBtnStyle}>
          블록삭제
        </Button>
      </Flex>
      <Text tag="body6" css={{ color: theme.colors.gray_800 }}>
        {startDate} ~ {endDate}
      </Text>

      <Flex tag="ul" css={documentListStyle}>
        {documentList?.map((data: DocumentType) => (
          <DocumentItem key={data.documentId} selectedId={selectedId} blockName={data.blockName}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default SelectedBlock;
