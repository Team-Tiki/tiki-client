import { ReactNode } from 'react';

import Accounting from '@/common/asset/svg/ic_accounting_circle.svg?react';
import Event from '@/common/asset/svg/ic_event_circle.svg?react';
import Meeting from '@/common/asset/svg/ic_meeting_circle.svg?react';
import Notice from '@/common/asset/svg/ic_notice_circle.svg?react';
import Study from '@/common/asset/svg/ic_study_circle.svg?react';
import Task from '@/common/asset/svg/ic_task_circle.svg?react';

type BlockIcon = {
  name: string;
  icon: ReactNode;
};

export const BLOCK_TYPE: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: <Meeting width={46} height={46} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'NOTICE',
    icon: <Notice width={46} height={46} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'ACCOUNTING',
    icon: <Accounting width={46} height={46} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'TASK',
    icon: <Task width={46} height={46} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'STUDY',
    icon: <Study width={46} height={46} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'EVENT',
    icon: <Event width={46} height={46} css={{ flexShrink: 0 }} />,
  },
];
