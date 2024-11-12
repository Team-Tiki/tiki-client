import { Suspense } from 'react';

import DateProvider from '@/page/archiving/index/DateProvider';
import TimeLineHeader from '@/page/archiving/index/component/TimeLine/TimeLineHeader/TimeLineHeader';
import TimelineinDash from '@/page/dashboard/component/Timeline/Timeline/TimelineinDash';

const TimelineSection = () => {
  const teamId = localStorage.getItem('teamId');

  return (
    <DateProvider teamId={teamId!}>
      <TimeLineHeader />
      <Suspense>
        <TimelineinDash />
      </Suspense>
    </DateProvider>
  );
};

export default TimelineSection;
