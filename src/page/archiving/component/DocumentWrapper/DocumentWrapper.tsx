import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/DocumentWrapper/DocumentWrapper.style';
import { Block, Total } from '@/page/archiving/constant/document';

import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface Document {
  fileName: string;
  fileUrl?: string;
  blockName?: string;
}

interface DocumentLayoutProps {
  selectedId: string;
  documentData: Total | Block;
  children: ReactNode;
  searchWord: string;
}

const DocumentWrapper = ({ selectedId, documentData, children, searchWord }: DocumentLayoutProps) => {
  // 검색 된 문서리스트 받아오기
  const filterDocument = (searchWord: string, documentData: Total | Block) =>
    documentData.filter((document) => document.fileName.includes(searchWord));

  const documentList = selectedId === 'selected' ? documentData : filterDocument(searchWord, documentData);

  return (
    <Flex styles={{ direction: 'column', align: 'center', padding: '1.6rem 1.6rem 0 2.4rem' }}>
      {children}
      <Flex tag="ul" css={documentListStyle}>
        {documentList.map((data: Document) => (
          <DocumentItem key={data.fileName} selectedId={selectedId} blockName={data.blockName}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default DocumentWrapper;
