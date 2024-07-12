import DocumentSort from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarTool/DocumentSort/DocumentSort';
import { Block, Total } from '@/page/archiving/component/DocumentBar/constant';

import { useEffect, useState } from 'react';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

interface DocumentBarToolProps {
  filterDocument: (
    searchWord: string,
    documentList: Total
  ) => {
    blockName: string;
    fileUrl: string;
    fileName: string;
  }[];
  documentList: Total | Block;
}

const DocumentBarTool = ({ filterDocument, documentList }: DocumentBarToolProps) => {
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    filterDocument(searchWord, documentList);
  }, [searchWord]);

  return (
    <Flex styles={{ direction: 'column', gap: '1.6rem', align: 'flex-end', width: '24.8rem' }}>
      <Input
        size="small"
        placeholder={'문서를 검색해보세요'}
        variant={'colored'}
        LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <DocumentSort />
    </Flex>
  );
};

export default DocumentBarTool;
