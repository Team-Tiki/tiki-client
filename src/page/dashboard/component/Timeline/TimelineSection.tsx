import { useNavigate } from 'react-router-dom';

import DateProvider from '@/page/archiving/index/DateProvider';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import { dayBodyStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import { useGetTimeBlockQuery } from '@/page/archiving/index/hook/api/useGetTimeBlockQuery';
import { useDate } from '@/page/archiving/index/hook/common/useDate';
import { Block } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import { timelineContentStyle } from '@/page/dashboard/component/Timeline/TimelineSection.style';

import { PATH } from '@/shared/constant/path';

const TimelineSection = () => {
  const navigate = useNavigate();

  const teamId = localStorage.getItem('teamId');
  const { currentYear, currentMonth, endDay } = useDate(teamId!);

  const { data } = useGetTimeBlockQuery(+teamId!, 'executive', currentYear, currentMonth);

  const timeBlocks: Block[] = data.timeBlocks;
  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  return (
    <DateProvider teamId={teamId!}>
      <TimeLineHeader />
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
    </DateProvider>
  );
};

export default TimelineSection;
