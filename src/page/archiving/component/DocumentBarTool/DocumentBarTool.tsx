import DocumentSort from '@/page/archiving/component/DocumentSort/DocumentSort';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

interface DocumentBarToolProps {
  handleSearchWord: (search: string) => void;
  searchWord: string;
}

const DocumentBarTool = ({ handleSearchWord, searchWord }: DocumentBarToolProps) => {
  console.log(searchWord);
  return (
    <Flex styles={{ direction: 'column', gap: '1.6rem', align: 'flex-end', width: '24.8rem' }}>
      <Input
        size="small"
        placeholder={'문서를 검색해보세요'}
        variant={'colored'}
        LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
        value={searchWord}
        onChange={(e) => {
          handleSearchWord(e.target.value);
        }}
      />
      <DocumentSort />
    </Flex>
  );
};

export default DocumentBarTool;
