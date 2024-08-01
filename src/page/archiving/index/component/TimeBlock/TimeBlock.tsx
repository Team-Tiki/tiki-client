import { blockNameStyle, blockStyle } from '@/page/archiving/index/component/TimeBlock/TimeBlock.style';
import { BLOCK_TYPE } from '@/page/archiving/index/constant/blockIcon';

import React, { HTMLAttributes, ReactNode } from 'react';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType: string;
  isSelected?: boolean;
  onBlockClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TimeBlock = ({
  startDate,
  endDate,
  children,
  color,
  floor,
  onBlockClick,
  isSelected = false,
  blockType,
  ...props
}: TimeBlockProps) => {
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * 6;
  const startPosition = (new Date(startDate).getDate() - 1) * 6;

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    <div css={blockStyle(blockWidth, startPosition, floor, color, isSelected)} onClick={onBlockClick} {...props}>
      {BLOCK_TYPE.find((icon) => icon.name === blockType)?.icon}
      <span css={blockNameStyle}>{children}</span>
    </div>
  );
};

export default TimeBlock;
