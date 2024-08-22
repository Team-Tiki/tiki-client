/* eslint-disable import/no-named-as-default-member */
import React, { ComponentPropsWithoutRef, ReactElement, ReactNode, cloneElement } from 'react';

import { tabListStyle } from '@/common/component/Tab/style';

interface TabListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const TabList = ({ children, ...props }: TabListProps) => {
  return (
    <nav>
      <ul role="tablist" css={tabListStyle} {...props}>
        {React.Children.toArray(children).map((child, index) => cloneElement(child as ReactElement, { tabId: index }))}
      </ul>
    </nav>
  );
};

export default TabList;
