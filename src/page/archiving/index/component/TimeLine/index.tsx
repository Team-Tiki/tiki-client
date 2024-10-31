import React, { forwardRef } from 'react';

import {
  dayBodyStyle,
  dayBodyWrapperStyle,
  entireDayStyle,
} from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';

import { useDrawerIsOpen } from '@/shared/store/drawer';

import { useDateProvider } from '../../DateProvider';
import Day from './Day/Day';

interface TimeLineProps {
  selectedBlock?: Block;
  onBlockClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, block: Block) => void;
}

const TimeLine = ({ selectedBlock, onBlockClick }: TimeLineProps) => {
  const teamId = localStorage.getItem('teamId');

  const { currentYear, currentMonth, endDay } = useDateProvider();

  const { data } = useGetTimeBlockQuery(+teamId!, 'executive', currentYear, currentMonth);

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  const isOpen = useDrawerIsOpen();

  return (
    <div css={entireDayStyle}>
      <Day />
      <div css={dayBodyWrapperStyle(isOpen)}>
        <div css={dayBodyStyle(endDay.getDate())}>
          {timeBlocks.map((block) => {
            const { startDate, endDate } = block;
            const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
              startDate: new Date(startDate),
              endDate: new Date(endDate),
              currentYear,
              currentMonth,
            });

            return (
              <TimeBlock
                key={block.timeBlockId}
                startDate={blockStartDate}
                endDate={blockEndDate}
                color={block.color}
                floor={blockFloors[block.timeBlockId] || 1}
                blockType={block.blockType}
                isSelected={block.timeBlockId === selectedBlock?.timeBlockId}
                onBlockClick={(e) => onBlockClick?.(e, block)}>
                {block.name}
              </TimeBlock>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(TimeLine);
