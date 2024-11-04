import { ReactNode } from 'react';

import Event from '@/common/asset/svg/ic_event_gray.svg?react';
import Meeting from '@/common/asset/svg/ic_meeting_gray.svg?react';
import Notice from '@/common/asset/svg/ic_notice_gray.svg?react';
import Recruiting from '@/common/asset/svg/ic_recruiting_gray.svg?react';
import Study from '@/common/asset/svg/ic_study_gray.svg?react';

type TAGIcon = {
  name: string;
  icon: ReactNode;
};

export const TAG_ICON: TAGIcon[] = [
  {
    name: 'MEETING',
    icon: <Meeting width={28} height={28} />,
  },
  {
    name: 'EVENT',
    icon: <Event width={28} height={28} />,
  },
  {
    name: 'STUDY',
    icon: <Study width={28} height={28} />,
  },
  {
    name: 'NOTICE',
    icon: <Notice width={28} height={28} />,
  },
  {
    name: 'RECRUITING',
    icon: <Recruiting width={28} height={28} />,
  },
];
