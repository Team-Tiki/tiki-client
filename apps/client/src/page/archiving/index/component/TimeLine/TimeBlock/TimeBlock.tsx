import React, { HTMLAttributes, ReactNode } from 'react';

import { blockNameStyle, blockStyle } from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { BlockType } from '@/page/archiving/index/type/blockType';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType: BlockType;
  isSelected?: boolean;
  onBlockClick: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
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
  const daysLength = new Date(endDate).getDate() - new Date(startDate).getDate() + 1;

  const handleEnterBlock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onBlockClick(e);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleEnterBlock(e)}
      css={blockStyle(color, isSelected)}
      style={{
        gridColumn: `${new Date(startDate).getDate()} / span ${daysLength}`,
        gridRow: `${floor}`,
      }}
      onClick={onBlockClick}
      {...props}>
      {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}
      <span css={blockNameStyle(color)}>{children}</span>
    </div>
  );
};

export default TimeBlock;
