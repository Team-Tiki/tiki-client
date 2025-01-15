import { IcAccounting, IcEvent, IcMeeting, IcNotice, IcStudy, IcTask } from '@tiki/icon';

import { ReactNode } from 'react';

type BlockIconType = {
  name: string;
  icon: ReactNode;
};

export const BLOCK_ICON: BlockIconType[] = [
  {
    name: 'MEETING',
    icon: <IcMeeting width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'ACCOUNTING',
    icon: <IcAccounting width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'TASK',
    icon: <IcTask width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'NOTICE',
    icon: <IcNotice width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'STUDY',
    icon: <IcStudy width={24} height={24} css={{ flexShrink: 0 }} />,
  },
  {
    name: 'EVENT',
    icon: <IcEvent width={24} height={24} css={{ flexShrink: 0 }} />,
  },
];
