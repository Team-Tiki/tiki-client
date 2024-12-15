import { useNavigate } from 'react-router-dom';

import { useDateContext } from '@/page/archiving/index/DateProvider';
import Day from '@/page/archiving/index/component/TimeLine/Day/Day';
import { dayBodyStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import { timelineContentStyle } from '@/page/dashboard/component/Timeline/Timeline/Timeline.style';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

const Timeline = () => {
  const navigate = useNavigate();

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

  const timeBlocks = data.data?.timeBlocks;

  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  return (
    <>
      <Day />
      <div css={[dayBodyStyle(endDay.getDate()), timelineContentStyle]}>
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

export default Timeline;
