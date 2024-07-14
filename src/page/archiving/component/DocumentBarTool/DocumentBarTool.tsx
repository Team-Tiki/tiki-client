import DocumentSort from '@/page/archiving/component/DocumentSort/DocumentSort';

import { ChangeEvent } from 'react';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

interface DocumentBarToolProps {
  onSearchWord: (e: ChangeEvent<HTMLInputElement>) => void;
  searchWord: string;
}

const DocumentBarTool = ({ onSearchWord, searchWord }: DocumentBarToolProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1.6rem', align: 'flex-end', width: '24.8rem' }}>
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
  );
};

export default DocumentBarTool;
