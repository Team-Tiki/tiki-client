import React, { HTMLAttributes, ReactNode, useEffect } from 'react';

import { BLOCK_TYPE } from '../../../constant/blockIcon';
import { blockNameStyle, blockStyle } from './TimeBlock.style';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
  floor: number;
  blockType: string;
  isSelected?: boolean;
  onBlockClick: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
  gap: number; // gap 값을 숫자로 받음
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
  gap,
  ...props
}: TimeBlockProps) => {
  const blockWidth = (new Date(endDate).getDate() - new Date(startDate).getDate() + 1) * (2 * gap);
  const startPosition = (new Date(startDate).getDate() - 1) * (2 * gap);
  console.log(`Gap: ${gap}`);
  console.log(`Start position: ${startPosition}`);

  useEffect(() => {}, [gap]);

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
      <span css={blockNameStyle}>{children}</span>
    </div>
  );
};

export default TimeBlock;
