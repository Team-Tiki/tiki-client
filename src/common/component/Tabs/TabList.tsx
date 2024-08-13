import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { tabListStyle } from '@/common/component/Tabs/style';

interface TabListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const TabList = ({ children, ...props }: TabListProps) => {
  return (
    <ul role="tablist" css={tabListStyle} {...props}>
      {children}
    </ul>
  );
};

export default TabList;
