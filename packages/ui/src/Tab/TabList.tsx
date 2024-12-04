/* eslint-disable import/no-named-as-default-member */
import React, { ComponentPropsWithoutRef, ReactElement, cloneElement } from "react";

import { tabListStyle } from "@/Tab/style";

interface TabListProps extends ComponentPropsWithoutRef<"ul"> {
  selectedTab: number;
  onTabClick: (tabId: number) => void;
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
          }),
        )}
      </ul>
    </nav>
  );
};

export default TabList;
