import { IcEtc, IcEvent, IcMeeting, IcNotice, IcRecruiting, IcStudy } from '@tiki/icon';

import { ReactNode } from 'react';

import { Category } from '@/page/archiving/index/component/TimeBlockModal/type/blockType';

type CategoryType = {
  name: string;
  type: Category;
  icon: ReactNode;
  color: string;
};

export const BLOCK_CATEGORY: CategoryType[] = [
  {
    name: '회의',
    type: 'MEETING',
    icon: <IcMeeting width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'red',
  },
  {
    name: '모임',
    type: 'RECRUITING',
    icon: <IcRecruiting width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'yellow',
  },
  {
    name: '스터디',
    type: 'STUDY',
    icon: <IcStudy width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'green',
  },
  {
    name: '행사',
    type: 'EVENT',
    icon: <IcEvent width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'sky',
  },
  {
    name: '공지',
    type: 'NOTICE',
    icon: <IcNotice width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'pink',
  },
  {
    name: '기타',
    type: 'ETC',
    icon: <IcEtc width={32} height={32} css={{ flexShrink: 0 }} />,
    color: 'purple',
  },
];
