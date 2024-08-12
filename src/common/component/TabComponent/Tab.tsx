import { ButtonHTMLAttributes, ReactNode } from 'react';

import { activeStyle, defaultStyle } from '@/common/component/TabComponent/style';
import { useTab } from '@/common/component/TabComponent/useTab';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tabId: number;
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const Tab = ({ tabId, children, onClick, isSelected }: TabProps) => {
  const setSelectedTab = useTab().setState;
  const handleTabClick = () => {
    onClick();
    setSelectedTab(tabId);
  };

  const handleTabKeyDown = () => {
    onClick();
  };

  return (
    <button
      id={tabId}
      role="tab"
      tabIndex={0}
      onClick={handleTabClick}
      onKeyDown={handleTabKeyDown}
      css={[defaultStyle, activeStyle(isSelected)]}>
      {children?.toString()}
    </button>
  );
};

export default Tab;
