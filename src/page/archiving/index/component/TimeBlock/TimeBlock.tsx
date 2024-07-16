import { blockStyle, spanStyle } from '@/page/archiving/index/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Eclipse from '@/common/asset/svg/eclipse.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  onBlockClick: () => void;
}

const TimeBlock = ({ startDate, endDate, children, color, floor, onBlockClick }: TimeBlockProps) => {
  const blockWidth = (endDate.getDate() - startDate.getDate() + 1) * 6;
  const startPosition = (startDate.getDate() - 1) * 6;

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    <div css={blockStyle(blockWidth, startPosition, floor, color)} onClick={onBlockClick}>
      <Eclipse width={46} height={46} css={{ flexShrink: 0 }} />
      <p css={spanStyle}>{children}</p>
    </div>
  );
};

export default TimeBlock;
