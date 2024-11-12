import { useNavigate } from 'react-router-dom';

import { useDateContext } from '@/page/archiving/index/DateProvider';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import { dayBodyStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import { timelineContentStyle } from '@/page/dashboard/component/Timeline/Timeline/TimelineinDash.style';

import { PATH } from '@/shared/constant/path';

const TimelineinDash = () => {
  const navigate = useNavigate();

  const teamId = localStorage.getItem('teamId');

  const { currentYear, currentMonth, endDay } = useDateContext();

  const { data } = useGetTimeBlockQuery(+teamId!, 'executive', currentYear, currentMonth);

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  return (
    <>
      <Day />
      <div css={[dayBodyStyle(endDay.getDate()), timelineContentStyle]}>
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
              onBlockClick={() => {
                navigate(PATH.ARCHIVING, { state: { selectedBlock: block } });
              }}>
              {block.name}
            </TimeBlock>
          );
        })}
      </div>
    </>
  );
};

export default TimelineinDash;
