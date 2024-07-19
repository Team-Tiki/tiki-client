import { ReactNode } from 'react';

import Accounting from '@/common/asset/svg/accounting_icon.svg?react';
import Event from '@/common/asset/svg/event_icon.svg?react';
import Meeting from '@/common/asset/svg/meeting_icon.svg?react';
import Notice from '@/common/asset/svg/notice_icon.svg?react';
import Study from '@/common/asset/svg/study_icon.svg?react';
import Task from '@/common/asset/svg/task_icon.svg?react';

type BlockIcon = {
  name: string;
  icon: ReactNode;
};

export const ICON_TYPE: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: <Meeting width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'NOTICE',
    icon: <Notice width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'ACCOUNTING',
    icon: <Accounting width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'TASK',
    icon: <Task width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'STUDY',
    icon: <Study width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'EVENT',
    icon: <Event width={24} height={24} css={{ flexShrink: 0 }} />,
  },
];
