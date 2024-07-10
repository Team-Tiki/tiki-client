import { blockStyle, spanStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Eclipse from '@/common/asset/svg/eclipse.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
}

const TimeBlock = ({ startDate, endDate, children, color, floor }: TimeBlockProps) => {
  const blockWidth = (endDate.getDate() - startDate.getDate() + 1) * 6;
  const startPosition = (startDate.getDate() - 1) * 6;

  return (
    <>
      <div css={blockStyle(blockWidth, startPosition, floor, color)}>
        <Eclipse width={46} height={46} css={{ flexShrink: 0 }} />
        <span css={spanStyle}>{children}</span>
      </div>
    </>
  );
};

export default TimeBlock;
