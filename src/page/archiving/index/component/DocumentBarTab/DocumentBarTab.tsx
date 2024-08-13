import { selectedStyle, tabStyle } from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab.style';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

interface DocumentBarTabProps {
  selectedTabId: string;
  onTabClick: (selectedTabId: string, tabId: string) => void;
}

const DocumentBarTab = ({ selectedTabId, onTabClick }: DocumentBarTabProps) => {
  return (
    <Flex tag={'nav'}>
      <Button
        onClick={() => onTabClick(selectedTabId, 'selected')}
        css={[tabStyle('selected'), selectedStyle(selectedTabId, 'selected')]}>
        선택한 블록
      </Button>
      <Button
        onClick={() => onTabClick(selectedTabId, 'total')}
        css={[tabStyle('total'), selectedStyle(selectedTabId, 'total')]}>
        전체 문서
      </Button>
    </Flex>
  );
};

export default DocumentBarTab;
