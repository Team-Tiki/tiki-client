import { Suspense } from 'react';

import DateProvider from '@/page/archiving/index/DateProvider';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import Timeline from '@/page/dashboard/component/Timeline/Timeline/Timeline';

const TimelineSection = () => {
  const teamId = localStorage.getItem('teamId');

  return (
    <DateProvider teamId={teamId!}>
      <TimeLineHeader />
      <Suspense>
        <Timeline />
      </Suspense>
    </DateProvider>
  );
};

export default TimelineSection;
