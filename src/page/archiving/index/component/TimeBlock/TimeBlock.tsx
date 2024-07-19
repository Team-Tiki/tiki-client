import { blockStyle, spanStyle } from '@/page/archiving/index/component/TimeBlock/TimeBlock.style';
import { BLOCK_TYPE } from '@/page/archiving/index/constant/blockIcon';

import { ReactNode } from 'react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType: string;
  onSelected?: boolean;
  onBlockClick: () => void;
}

const TimeBlock = ({
  startDate,
  endDate,
  children,
  color,
  floor,
  onBlockClick,
  onSelected = false,
  blockType,
}: TimeBlockProps) => {
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * 6;
  const startPosition = (new Date(startDate).getDate() - 1) * 6;

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    <div css={blockStyle(blockWidth, startPosition, floor, color, onSelected)} onClick={onBlockClick}>
      {BLOCK_TYPE.find((icon) => icon.name === blockType)?.icon}
      <p css={spanStyle}>{children}</p>
    </div>
  );
};

export default TimeBlock;
