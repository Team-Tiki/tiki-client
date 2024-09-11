import React, { HTMLAttributes, ReactNode } from 'react';

import { blockNameStyle, blockStyle } from '@/page/archiving/index/component/TimeBlock/TimeBlock.style';
import { BLOCK_TYPE } from '@/page/archiving/index/constant/blockIcon';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType: string;
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
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * 6;
  const startPosition = (new Date(startDate).getDate() - 1) * 6;

  const handleEnterBlock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onBlockClick(e);
    }
  };

  return (
    <div
      role="tab"
      tabIndex={0}
      onKeyDown={(e) => {
        handleEnterBlock(e);
      }}
      css={blockStyle(blockWidth, startPosition, floor, color, isSelected)}
      onClick={onBlockClick}
      {...props}>
      {BLOCK_TYPE.find((icon) => icon.name === blockType)?.icon}
      <span css={blockNameStyle}>{children}</span>
    </div>
  );
};

export default TimeBlock;
