import { ButtonHTMLAttributes, ReactNode } from 'react';

import { activeStyle, defaultStyle } from '@/common/component/TabComponent/style';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tabId: number;
  children: ReactNode;
  onClick?: () => void;
  selectedTab: number;
  onTabClick: (tabId: number) => void;
}

const Tab = ({ tabId, children, selectedTab, onTabClick }: TabProps) => {
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
      css={[defaultStyle, activeStyle(selectedTab === tabId)]}>
      {children}
    </li>
  );
};

export default Tab;
