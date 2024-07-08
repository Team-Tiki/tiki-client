import { blockStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

interface TimeBlockProps {
  children: ReactNode;
}

const TimeBlock = ({ children }: TimeBlockProps) => {
  return (
    <>
      <div css={blockStyle}>{children}</div>
    </>
  );
};

export default TimeBlock;
