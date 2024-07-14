import DocumentItem from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentWrapper.style';
import { BLOCK_TEST_DATA } from '@/page/archiving/component/DocumentBar/constant';

import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface DocumentLayoutProps {
  selectedId: string;
  children: ReactNode;
}

// 목업 데이터
const blockData = BLOCK_TEST_DATA;

const DocumentWrapper = ({ selectedId, children }: DocumentLayoutProps) => {
  return (
    <Flex styles={{ direction: 'column', align: 'center', padding: '1.6rem 1.6rem 0 2.4rem' }}>
      {children}
      <Flex tag="ul" css={documentListStyle}>
        {blockData.filesUrl.map((data) => (
          <DocumentItem key={data.fileName} selectedId={selectedId} blockName={blockData.title}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default DocumentWrapper;
