import DocumentSort from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarTool/DocumentSort/DocumentSort';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

const DocumentBarTool = () => {
  return (
    <Flex styles={{ direction: 'column', gap: '1.6rem', align: 'flex-end', width: '24.8rem' }}>
      <Input
        size="small"
        placeholder={'문서를 검색해보세요'}
        variant={'colored'}
        LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
      />
      <DocumentSort />
    </Flex>
  );
};

export default DocumentBarTool;
