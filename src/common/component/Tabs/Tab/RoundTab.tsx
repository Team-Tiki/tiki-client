import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { roundTabActiveStyle, roundTabDefaultStyle } from '@/common/component/Tabs/Tab/RoundTab.style';

interface RoundTabProps extends ComponentPropsWithoutRef<'li'> {
  tabId: number;
  children: ReactNode;
  onClick?: () => void;
  selectedTab: number;
  onTabClick: (tabId: number) => void;
}

const RoundTab = ({ tabId, children, selectedTab, onTabClick, ...props }: RoundTabProps) => {
  const handleTabClick = () => {
    onTabClick(tabId);
  };

  const handleTabKeyDown = () => {
    onTabClick(tabId);
  };

  return (
    <li
      key={tabId}
      role="tab"
      tabIndex={0}
      onClick={handleTabClick}
      onKeyDown={handleTabKeyDown}
      css={[roundTabDefaultStyle, roundTabActiveStyle(selectedTab === tabId)]}
      {...props}>
      {children}
    </li>
  );
};

export default RoundTab;
