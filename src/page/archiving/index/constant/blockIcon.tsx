import { ReactNode } from 'react';

import Event from '@/common/asset/svg/ic_event.svg?react';
import Meeting from '@/common/asset/svg/ic_meeting.svg?react';
import Notice from '@/common/asset/svg/ic_notice.svg?react';
import Recruiting from '@/common/asset/svg/ic_recruiting.svg?react';
import Study from '@/common/asset/svg/ic_study.svg?react';

type BlockIcon = {
  name: string;
  icon: ReactNode;
};

export const BLOCK_TYPE: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: <Meeting width={16} height={16} css={{ margin: '0.4rem', flexShrink: 0 }} />,
  },
  {
    name: 'NOTICE',
    icon: <Notice width={16} height={16} css={{ margin: '0.4rem', flexShrink: 0 }} />,
  },
  {
    name: 'RECRUITING',
    icon: <Recruiting width={16} height={16} css={{ margin: '0.4rem', flexShrink: 0 }} />,
  },
  {
    name: 'STUDY',
    icon: <Study width={16} height={16} css={{ margin: '0.4rem', flexShrink: 0 }} />,
  },
  {
    name: 'EVENT',
    icon: <Event width={16} height={16} css={{ margin: '0.4rem', flexShrink: 0 }} />,
  },
];
