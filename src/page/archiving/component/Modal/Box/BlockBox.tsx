import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

interface BlockBoxProps {
  title: string;
  children: ReactNode;
}

const BlockBox = ({ title, children }: BlockBoxProps) => {
  return (
    <Flex tag={'div'} styles={{ direction: 'column', align: 'flex-start', gap: '1.2rem', width: '36.5rem' }}>
      <Heading tag="H6" css={{ fontWeight: 500 }}>
        {title}
      </Heading>
      {children}
    </Flex>
  );
};

export default BlockBox;
