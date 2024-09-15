/* eslint-disable import/no-named-as-default-member */
import React, { ComponentPropsWithoutRef, ReactElement, cloneElement } from 'react';

interface TabPanelProps extends ComponentPropsWithoutRef<'div'> {
  selectedTab: number;
}

const TabPanel = ({ children, selectedTab, ...props }: TabPanelProps) => {
  return (
    <div {...props}>
      {React.Children.toArray(children)
        .map((child, index) =>
          cloneElement(child as ReactElement, { role: 'tabpanel', id: `panel${index}`, ariaLabelledby: index })
        )
        .filter((_, index) => index === selectedTab)}
    </div>
  );
};

export default TabPanel;
