/* eslint-disable import/no-named-as-default-member */
import React, { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  selectedTab: number;
}

const TabPanel = ({ children, selectedTab }: TabPanelProps) => {
  return <div role="tabpanel">{React.Children.toArray(children).filter((_, index) => index === selectedTab)}</div>;
};

export default TabPanel;
