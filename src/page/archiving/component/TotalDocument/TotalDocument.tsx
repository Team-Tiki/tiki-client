import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import DocumentSort from '@/page/archiving/component/DocumentSort/DocumentSort';
import {
  containerStyle,
  documentListStyle,
  toolStyle,
} from '@/page/archiving/component/TotalDocument/TotalDocument.style';
import { DocumentType } from '@/page/archiving/type/documentType';

import { ChangeEvent } from 'react';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

interface DocumentBarToolProps {
  onSearchWord: (e: ChangeEvent<HTMLInputElement>) => void;
  searchWord: string;
  documentList: DocumentType[];
  selectedId: string;
}

const TotalDocument = ({ onSearchWord, searchWord, documentList, selectedId }: DocumentBarToolProps) => {
  const filteredDocuments = documentList?.filter((document) => document.fileName.includes(searchWord));

  let documents;

  const handleReverseDocuments = (selected: string) => {
    documents = selected === '최근 업로드 순' ? filteredDocuments : filteredDocuments.reverse();
  };

  return (
    <Flex tag={'section'} css={containerStyle}>
      <Flex css={toolStyle}>
        <Input
          size="small"
          placeholder={'문서를 검색해보세요'}
          variant={'colored'}
          LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
          value={searchWord}
          onChange={onSearchWord}
        />
        <DocumentSort filteredDocuments={filteredDocuments} onReverseDocuments={handleReverseDocuments} />
      </Flex>

      <Flex tag="ul" css={documentListStyle}>
        {filteredDocuments?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId || 1}
            selectedId={selectedId}
            blockName={data.blockName}
            fileUrl={data.fileUrl}
            color={data.color}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default TotalDocument;
