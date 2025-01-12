import React, { HTMLAttributes, ReactNode } from 'react';

import { blockNameStyle, blockStyle } from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { useBlockDetailInfoQuery } from '@/page/archiving/index/hook/api/quries';
import { Block, BlockDetail, BlockType } from '@/page/archiving/index/type/blockType';

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  block: Block;
  startDate: Date;
  endDate: Date;
  color: string;
  timeBlockId: number;
  floor: number;
  blockType: BlockType;
  isSelected?: boolean;
  onBlockClick: (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    block: Block,
    blockDetail: BlockDetail
  ) => void;
}

const TimeBlock = ({
  block,
  startDate,
  endDate,
  children,
  color,
  timeBlockId,
  floor,
  onBlockClick,
  isSelected = false,
  blockType,
  ...props
}: TimeBlockProps) => {
  const daysLength = new Date(endDate).getDate() - new Date(startDate).getDate() + 1;

  const { data } = useBlockDetailInfoQuery(timeBlockId);

  // console.log(data?.data?.documents);

  const handleEnterBlock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (data?.data) {
        onBlockClick(e, block, data?.data);
      }
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
      onClick={(e) => onBlockClick(e, block, data?.data ?? { documents: [], notes: [] })}
      {...props}>
      {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}
      <span css={blockNameStyle(color)}>{children}</span>
    </div>
  );
};

export default TimeBlock;
