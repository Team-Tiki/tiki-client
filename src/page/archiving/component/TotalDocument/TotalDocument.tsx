import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import DocumentSort from '@/page/archiving/component/DocumentSort/DocumentSort';
import {
  containerStyle,
  documentListStyle,
  toolStyle,
} from '@/page/archiving/component/TotalDocument/TotalDocument.style';

import { ChangeEvent } from 'react';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import { Document } from '@/shared/api/archiving/document/type';

interface DocumentBarToolProps {
  onSearchWord: (e: ChangeEvent<HTMLInputElement>) => void;
  searchWord: string;
  documentList: Document[];
  selectedId: string;
}

const TotalDocument = ({ onSearchWord, searchWord, documentList, selectedId }: DocumentBarToolProps) => {
  const filteredDocuments = documentList?.filter((document) => document.fileName.includes(searchWord));
  return (
    <Flex css={containerStyle}>
      <Flex css={toolStyle}>
        <Input
          size="small"
          placeholder={'문서를 검색해보세요'}
          variant={'colored'}
          LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
          value={searchWord}
          onChange={onSearchWord}
        />
        <DocumentSort />
      </Flex>

      <Flex tag="ul" css={documentListStyle}>
        {filteredDocuments?.map((data: Document) => (
          <DocumentItem key={data.documentId} selectedId={selectedId} blockName={data.blockName}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default TotalDocument;
