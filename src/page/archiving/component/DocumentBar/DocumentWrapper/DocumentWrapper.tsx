import DocumentItem from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentWrapper.style';
import { BLOCK_TEST_DATA, Block, Total } from '@/page/archiving/component/DocumentBar/constant';

import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface DocumentLayoutProps {
  selectedId: string;
  documentList: Total | Block;
  children: ReactNode;
}

const DocumentWrapper = ({ selectedId, documentList = [], children }: DocumentLayoutProps) => {
  return (
    <Flex styles={{ direction: 'column', align: 'center', padding: '1.6rem 1.6rem 0 2.4rem' }}>
      {children}
      <Flex tag="ul" css={documentListStyle}>
        {documentList.map((data) => (
          <DocumentItem key={data.fileName} selectedId={selectedId} blockName={data.fileName}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default DocumentWrapper;
