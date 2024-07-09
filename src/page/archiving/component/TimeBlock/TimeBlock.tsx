import { blockStyle, spanStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Eclipse from '@/common/asset/svg/eclipse.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
}

const TimeBlock = ({ startDate, endDate, children }: TimeBlockProps) => {
  const blockWidth = (endDate.getDay() - startDate.getDay() + 1) * 6;
  const startPosition = startDate.getDay() + 8.2;
  const level = 20;

  return (
    <>
      <div css={blockStyle(blockWidth, startPosition, level)}>
        <Eclipse width={47} height={47} css={{ flexShrink: 0 }} />
        <span css={spanStyle}>{children}</span>
      </div>
    </>
  );
};

export default TimeBlock;
