import Search from '@/common/asset/svg/search.svg?react';
import Input from '@/common/component/Input/Input';

interface DocumentBarToolProps {}

const DocumentBarTool = ({}: DocumentBarToolProps) => {
  return (
    <>
      <Input
        size="small"
        placeholder={'   문서를 검색해보세요'}
        variant={'colored'}
        LeftIcon={<Search width={14} height={14} />}
      />
    </>
  );
};

export default DocumentBarTool;
