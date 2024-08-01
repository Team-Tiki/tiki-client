import { selectedStyle, tabStyle } from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab.style';

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
        css={[tabStyle('selected'), selectedStyle(selectedId, 'selected')]}>
        선택한 블록
      </Button>
      <Button
        onClick={() => onTabClick(selectedId, 'total')}
        css={[tabStyle('total'), selectedStyle(selectedId, 'total')]}>
        전체 문서
      </Button>
    </Flex>
  );
};

export default DocumentBarTab;
