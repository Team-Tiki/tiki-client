import { tabDefaultStyle } from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab.style';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

interface DocumentBarTabProps {
  wholeDocument: boolean;
  handleTabClick: () => void;
}

const DocumentBarTab = ({ wholeDocument, handleTabClick }: DocumentBarTabProps) => {
  return (
    <Flex css={{ borderRadius: '16px' }}>
      <Button onClick={handleTabClick} css={[tabDefaultStyle(!wholeDocument), { borderRadius: '16px 0px 0px 0px' }]}>
        선택한 블록
      </Button>
      <Button onClick={handleTabClick} css={[tabDefaultStyle(wholeDocument), { borderRadius: '0px 16px 0px 0px' }]}>
        전체 문서
      </Button>
    </Flex>
  );
};

export default DocumentBarTab;
