import { useDateContext } from '@/page/archiving/index/DateProvider';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import {
  dayBodyStyle,
  dayBodyWrapperStyle,
  entireDayStyle,
} from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';

import { components } from '@/shared/__generated__/schema';
import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerIsOpen } from '@/shared/store/drawer';

export type TimeBlockData = components['schemas']['TimelineGetResponse']['timeBlocks'];

interface TimeLineProps {
  selectedBlock?: Block;
  onBlockClick: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, block: Block) => void;
}

const TimeLine = ({ selectedBlock, onBlockClick }: TimeLineProps) => {
  const teamId = useInitializeTeamId();
  const { currentYear, currentMonth, endDay } = useDateContext();

  const { data } = $api.useSuspenseQuery('get', '/api/v1/teams/{teamId}/timeline', {
    params: {
      query: {
        type: 'executive',
        date: `${currentYear}-${currentMonth.toString().padStart(2, '0')}`,
      },
      path: {
        teamId,
      },
    },
  });

  const timeBlocks = data.data?.timeBlocks ?? [];
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  const isOpen = useDrawerIsOpen();

  return (
    <div css={entireDayStyle}>
      <Day />
      <div css={dayBodyWrapperStyle(isOpen)}>
        <div css={dayBodyStyle(endDay.getDate())}>
          {timeBlocks?.map((block) => {
            const { startDate, endDate } = block;
            const { startDate: blockStartDate, endDate: blockEndDate } = createTimeBlock({
              startDate: startDate ? new Date(startDate) : new Date(),
              endDate: endDate ? new Date(endDate) : new Date(),
              currentYear,
              currentMonth,
            });

            return (
              <TimeBlock
                key={block.timeBlockId}
                startDate={blockStartDate}
                endDate={blockEndDate}
                color={block.color!}
                floor={blockFloors[block.timeBlockId ?? 0]}
                blockType={block.blockType ?? 'MEETING'}
                isSelected={selectedBlock?.timeBlockId === block.timeBlockId}
                onBlockClick={(e) => onBlockClick(e, block)}>
                {block.name}
              </TimeBlock>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
