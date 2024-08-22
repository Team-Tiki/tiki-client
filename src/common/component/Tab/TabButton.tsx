import { ComponentPropsWithoutRef } from 'react';

import { tabActiveStyle, tabDefaultStyle, tabVariantStyle } from '@/common/component/Tab/style';

export interface TabProps extends ComponentPropsWithoutRef<'li'> {
  tabId?: number;
  selectedTab: number;
  onTabClick: (tabId: number) => void;
  variant?: 'round';
}

const TabButton = ({ tabId = 0, children, selectedTab, onTabClick, variant = 'round', ...props }: TabProps) => {
  const handleTabInteraction = () => {
    onTabClick(tabId);
  };

  return (
    <li
      key={tabId}
      role="tab"
      tabIndex={0}
      aria-selected={selectedTab === tabId}
      aria-controls={`panel${tabId}`}
      onClick={handleTabInteraction}
      onKeyDown={handleTabInteraction}
      css={[tabDefaultStyle, tabVariantStyle(variant), tabActiveStyle(selectedTab === tabId, variant)]}
      {...props}>
      {children}
    </li>
  );
};

export default TabButton;
