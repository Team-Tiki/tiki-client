import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => (
  <Flex styles={{ direction: 'column', justify: 'flex-start', align: 'center', paddingTop: '2rem', grow: '1' }}>
    {children}
  </Flex>
);

export default ModalBody;
