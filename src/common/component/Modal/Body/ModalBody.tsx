import { ReactNode } from 'react';

import { containerStyle } from './ModalBody.style';

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => <div css={containerStyle}>{children}</div>;

export default ModalBody;
