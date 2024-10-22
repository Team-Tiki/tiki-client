import React, { HTMLAttributes, ReactNode } from 'react';

import { BLOCK_TYPE } from '../../../constant/blockIcon';
import { BlockColor } from '../../../type/color';
import { blockNameStyle, blockStyle } from './TimeBlock.style';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: BlockColor;
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
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * 3.25;
  const startPosition = (new Date(startDate).getDate() - 1) * 3.85;

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
      onKeyDown={(e) => {
        handleEnterBlock(e);
      }}
      css={blockStyle(blockWidth, startPosition, floor, color, isSelected)}
      onClick={onBlockClick}
      {...props}>
      {BLOCK_TYPE.find((icon) => icon.name === blockType)?.icon}
      <span css={blockNameStyle(color)}>{children}</span>
    </div>
  );
};

export default TimeBlock;
