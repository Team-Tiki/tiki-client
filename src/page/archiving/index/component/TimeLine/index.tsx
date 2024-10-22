import { ForwardedRef, forwardRef } from 'react';

import { daySectionStyle } from '@/page/archiving/index/ArchivingPage.style';
import DaySection from '@/page/archiving/index/component/TimeLine/Day/Day';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';

interface TimeLineProps {
  selectedBlock?: Block;
  onBlockClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, block: Block) => void;
  currentYear: number;
  currentMonth: number;
  endDay: Date;
}

const TimeLine = (
  { selectedBlock, onBlockClick, currentYear, currentMonth, endDay }: TimeLineProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const teamId = new URLSearchParams(location.search).get('teamId');
  if (!teamId) throw new Error('has no teamId');

  const { data } = useGetTimeBlockQuery(+teamId, 'executive', currentYear, currentMonth);

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  return (
    <div id="block_area" css={daySectionStyle} ref={ref}>
      <DaySection endDay={endDay} />

      {timeBlocks.map((block: Block) => {
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
  );
};

export default forwardRef(TimeLine);
