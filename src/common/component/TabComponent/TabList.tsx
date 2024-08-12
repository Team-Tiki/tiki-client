import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface TabListProps {
  children: ReactNode;
}

const TabList = ({ children }: TabListProps) => {
  return (
    <Flex tag={'ul'} role="tablist">
      {children}
    </Flex>
  );
};

export default TabList;
