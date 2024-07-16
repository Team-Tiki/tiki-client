import { tabDefaultStyle } from '@/page/archiving/component/DocumentBarTab/DocumentBarTab.style';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

interface DocumentBarTabProps {
  selectedId: string;
  onTabClick: (selectedId: string, tabId: string) => void;
}

const DocumentBarTab = ({ selectedId, onTabClick }: DocumentBarTabProps) => {
  return (
    <Flex tag={'nav'}>
      <Button
        onClick={() => onTabClick(selectedId, 'selected')}
        css={[tabDefaultStyle(selectedId, 'selected'), { borderRadius: '16px 0px 0px 0px' }]}>
        선택한 블록
      </Button>
      <Button
        onClick={() => onTabClick(selectedId, 'total')}
        css={[tabDefaultStyle(selectedId, 'total'), { borderRadius: '0px 16px 0px 0px' }]}>
        전체 문서
      </Button>
    </Flex>
  );
};

export default DocumentBarTab;
