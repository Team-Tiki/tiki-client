/* eslint-disable import/no-named-as-default-member */
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

interface TabPanelProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  selectedTab: number;
}

const TabPanel = ({ children, selectedTab, ...props }: TabPanelProps) => {
  return (
    <div role="tabpanel" {...props}>
      {React.Children.toArray(children).filter((_, index) => index === selectedTab)}
    </div>
  );
};

export default TabPanel;
