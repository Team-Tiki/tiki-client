import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/DocumentWrapper/DocumentWrapper.style';

import Laptop from '@/common/asset/svg/laptop.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { Document } from '@/shared/api/archiving/document/type';

import { deleteBtnStyle } from './DocumentBarInfo.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  startDate: string;
  endDate: string;
  documentList: Document[];
}

const SelectedBlock = ({ selectedId, blockName, startDate, endDate, documentList }: DocumentBarInfoProps) => {
  return (
    <>
      <Flex tag="section" styles={{ direction: 'column', marginBottom: '2.4rem', gap: '0.8rem' }}>
        <Laptop width={24} height={24} />
        <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
          <Heading
            tag="H6"
            css={{
              fontWeight: '500',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              paddingRight: '0.5rem',
              wordBreack: 'keep-all',
            }}>
            {blockName}
          </Heading>
          <Button variant="text" size="small" css={deleteBtnStyle}>
            블록삭제
          </Button>
        </Flex>
        <Text tag="body6" css={{ color: theme.colors.gray_800 }}>
          {startDate} ~ {endDate}
        </Text>
      </Flex>
      <Flex styles={{ direction: 'column', align: 'center', padding: '1.6rem' }}>
        <Flex tag="ul" css={documentListStyle}>
          {documentList?.map((data: Document) => (
            <DocumentItem key={data.documentId} selectedId={selectedId} blockName={data.blockName}>
              {data.fileName}
            </DocumentItem>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default SelectedBlock;
