import { ReactNode } from 'react';

import Event from '@/common/asset/svg/ic_event_gray.svg?react';
import Meeting from '@/common/asset/svg/ic_meeting_gray.svg?react';
import Notice from '@/common/asset/svg/ic_notice_gray.svg?react';
import Recruiting from '@/common/asset/svg/ic_recruiting_gray.svg?react';
import Study from '@/common/asset/svg/ic_study_gray.svg?react';

type BlockIcon = {
  name: string;
  icon: ReactNode;
};

export const BLOCK_ICON: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: <Meeting width={30} height={30} />,
  },
  {
    name: 'EVENT',
    icon: <Event width={30} height={30} />,
  },
  {
    name: 'STUDY',
    icon: <Study width={30} height={30} />,
  },
  {
    name: 'NOTICE',
    icon: <Notice width={30} height={30} />,
  },
  {
    name: 'RECRUITING',
    icon: <Recruiting width={30} height={30} />,
  },
];
