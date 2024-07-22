import DocumentItem from '@/page/archiving/index/component/DocumentItem/DocumentItem';
import DocumentSort from '@/page/archiving/index/component/DocumentSort/DocumentSort';
import {
  containerStyle,
  documentListStyle,
  toolStyle,
} from '@/page/archiving/index/component/TotalDocument/TotalDocument.style';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { DocumentType } from '@/page/archiving/index/type/documentType';

import { useEffect, useState } from 'react';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import { useTeamStore } from '@/shared/store/team';

interface DocumentBarToolProps {
  selectedId: string;
}

const TotalDocument = ({ selectedId }: DocumentBarToolProps) => {
  const [selected, setSelected] = useState('최근 업로드 순');
  const [searchWord, setSearchWord] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentType[]>();

  const { teamId } = useTeamStore();

  const { data: documentDatas } = useTotalDocumentQuery(+teamId, 'executive');

  const handleSelected = (option: string) => {
    setSelected(option);
  };

  // 검색 디바운싱
  useEffect(() => {
    const dalayDebounceTimer = setTimeout(() => {
      setFilteredDocuments(
        documentDatas?.data.documents?.filter((document) =>
          document.fileName.normalize('NFC').includes(searchWord.normalize('NFC'))
        )
      );
    }, 500);

    return () => clearTimeout(dalayDebounceTimer);
  }, [searchWord, documentDatas]);

  return (
    <Flex tag={'section'} css={containerStyle}>
      <Flex css={toolStyle}>
        <Input
          size="small"
          placeholder={'문서를 검색해보세요'}
          variant={'colored'}
          LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          style={{ boxShadow: 'none' }}
        />
        <DocumentSort selected={selected} onSelected={handleSelected} />
      </Flex>

      <Flex tag="ul" css={documentListStyle}>
        {(selected === '최근 업로드 순'
          ? filteredDocuments
          : filteredDocuments && [...filteredDocuments].reverse()
        )?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId}
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
