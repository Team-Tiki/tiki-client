import { Flex, Text } from '@tiki/ui';

import { ReactNode } from 'react';

interface BlockBoxProps {
  title: string;
  children: ReactNode;
}

const BlockBox = ({ title, children }: BlockBoxProps) => {
  return (
    <Flex tag={'div'} styles={{ direction: 'column', align: 'flex-start', gap: '1.2rem', width: '33.6rem' }}>
      <Text tag="body6" css={{ fontWeight: 500 }}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default BlockBox;
