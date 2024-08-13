import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { tabActiveStyle, tabDefaultStyle, tabVariantStyle } from '@/common/component/Tabs/style';

export interface TabProps extends ComponentPropsWithoutRef<'li'> {
  tabId: number;
  children: ReactNode;
  selectedTab: number;
  onTabClick: (tabId: number) => void;
  variant?: 'round';
}

const Tab = ({ tabId, children, selectedTab, onTabClick, variant = 'round', ...props }: TabProps) => {
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
      css={[tabDefaultStyle, tabVariantStyle(variant), tabActiveStyle(selectedTab === tabId, variant)]}
      {...props}>
      {children}
    </li>
  );
};

export default Tab;
