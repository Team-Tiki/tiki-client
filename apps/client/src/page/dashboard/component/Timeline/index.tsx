import { Suspense } from 'react';

import DateProvider from '@/page/archiving/index/DateProvider';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import Timeline from '@/page/dashboard/component/Timeline/Timeline/Timeline';

import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

const TimelineSection = () => {
  const teamId = useInitializeTeamId();

  return (
    <DateProvider teamId={teamId}>
      <TimeLineHeader />
      <Suspense>
        <Timeline />
      </Suspense>
    </DateProvider>
  );
};

export default TimelineSection;
