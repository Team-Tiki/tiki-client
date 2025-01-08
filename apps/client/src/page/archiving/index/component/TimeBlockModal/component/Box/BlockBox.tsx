import { Flex, theme } from '@tiki/ui';

import { ReactNode } from 'react';

interface BlockBoxProps {
  title: string;
  id?: string;
  children: ReactNode;
}

const BlockBox = ({ title, id, children }: BlockBoxProps) => {
  return (
    <Flex tag={'div'} styles={{ direction: 'column', align: 'flex-start', gap: '1.2rem', width: '33.6rem' }}>
      <label css={{ fontWeight: 500, ...theme.text.body06 }} htmlFor={id}>
        {title}
      </label>
      {children}
    </Flex>
  );
};

export default BlockBox;
