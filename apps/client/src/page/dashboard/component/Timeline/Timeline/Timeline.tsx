import { useNavigate } from 'react-router-dom';

import { useDateContext } from '@/page/archiving/index/DateProvider';
import { dayBodyStyle } from '@/page/archiving/index/component/TimeLine/Day/Day.style';
import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';
import { useInteractTimeline } from '@/page/archiving/index/hook/common/useInteractTimeline';
import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';
import { alignBlocks, createTimeBlock } from '@/page/archiving/index/util/block';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';
import { timelineContentStyle } from '@/page/dashboard/component/Timeline/Timeline/Timeline.style';

import { $api } from '@/shared/api/client';
import { PATH } from '@/shared/constant/path';

const Timeline = ({ teamId }: { teamId: number }) => {
  const navigate = useNavigate();

  const { currentYear, currentMonth, endDay } = useDateContext();
  const { handleBlockClick } = useInteractTimeline();

  const { data } = $api.useQuery(
    'get',
    '/api/v1/teams/{teamId}/timeline',
    {
      params: {
        query: {
          type: 'executive',
          date: `${currentYear}-${currentMonth.toString().padStart(2, '0')}`,
        },
        path: {
          teamId,
        },
      },
    },
    {
      enabled: teamId !== 0,
    }
  );

  const timeBlocks = data?.data?.timeBlocks ?? [];

  const blockFloors = alignBlocks(timeBlocks, endDay, currentMonth, currentYear);

  const handleBlockClicks = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
    clickedBlock: Block,
    blockDetail: BlockDetail
  ) => {
    handleBlockClick(e, clickedBlock, blockDetail);
    navigate(PATH.ARCHIVING, { state: { selectedBlock: clickedBlock, blockDetail } });
  };

  return (
    <>
      {!timeBlocks[0] && <ItemAdder path={PATH.ARCHIVING} />}
      {timeBlocks[0] && (
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
                block={block}
                timeBlockId={block.timeBlockId}
                startDate={blockStartDate}
                endDate={blockEndDate}
                color={block.color!}
                floor={blockFloors[block.timeBlockId ?? 0]}
                blockType={block.blockType ?? 'MEETING'}
                onBlockClick={(e, clickedBlock, blockDetail) => handleBlockClicks(e, clickedBlock, blockDetail)}>
                {block.name}
              </TimeBlock>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Timeline;
