/* eslint-disable import/no-named-as-default-member */
import React, { ComponentPropsWithoutRef, ReactElement, ReactNode, cloneElement } from 'react';

import { tabListStyle } from '@/common/component/Tab/style';

interface TabListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
  selectedTab: number;
  onTabClick: React.Dispatch<React.SetStateAction<number>>;
}

const TabList = ({ children, selectedTab, onTabClick, ...props }: TabListProps) => {
  return (
    <nav>
      <ul role="tablist" css={tabListStyle} {...props}>
        {React.Children.toArray(children).map((child, index) =>
          cloneElement(child as ReactElement, {
            tabId: index,
            isSelected: selectedTab === index,
            onTabClick: onTabClick,
          })
        )}
      </ul>
    </nav>
  );
};

export default TabList;
