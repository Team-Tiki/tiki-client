import { ReactNode } from 'react';

import { wrapper } from '@/shared/component/Modal/Body/ModalBody.style';

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => <section css={wrapper}>{children}</section>;

export default ModalBody;
