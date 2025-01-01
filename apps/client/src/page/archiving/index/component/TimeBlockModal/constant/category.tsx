import { IcEtc, IcEvent, IcMeeting, IcNotice, IcRecruiting, IcStudy } from '@tiki/icon';

import { ReactNode } from 'react';

type CategoryType = {
  name: string;
  icon: ReactNode;
  color: string;
};

export const BLOCK_CATEGORY: CategoryType[] = [
  {
    name: '회의',
    icon: <IcMeeting width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'red',
  },
  {
    name: '모임',
    icon: <IcRecruiting width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'yellow',
  },
  {
    name: '스터디',
    icon: <IcStudy width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'green',
  },
  {
    name: '행사',
    icon: <IcEvent width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'sky',
  },
  {
    name: '공지',
    icon: <IcNotice width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'pink',
  },
  {
    name: '기타',
    icon: <IcEtc width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'purple',
  },
];
