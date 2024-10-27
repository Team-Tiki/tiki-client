import React, { HTMLAttributes, ReactNode } from 'react';

import { blockNameStyle, blockStyle } from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { BlockType } from '@/page/archiving/index/type/blockType';
import { BlockColor } from '@/page/archiving/index/type/color';

import { useDrawerIsOpen } from '@/shared/store/drawer';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: BlockColor;
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
  const isOpen = useDrawerIsOpen();

  const daysLength = new Date(endDate).getDate() - new Date(startDate).getDate() + 1;
  const singleDayLength = 4.2;

  const blockWidth = daysLength * 20 + 23 * (daysLength - 1);
  const drawerBlockWidth = daysLength * 20 + 13 * (daysLength - 1);
  const startPosition = (new Date(startDate).getDate() - 1) * singleDayLength;

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
      css={blockStyle(blockWidth, startPosition, floor, color, isSelected, isOpen, drawerBlockWidth)}
      onClick={onBlockClick}
      {...props}>
      {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}
      <span css={blockNameStyle(color)}>{children}</span>
    </div>
  );
};

export default TimeBlock;
