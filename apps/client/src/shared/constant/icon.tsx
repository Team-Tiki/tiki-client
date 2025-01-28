import { IcEtcGray, IcEventGray, IcMeetingGray, IcNoticeGray, IcRecruitingGray, IcStudyGray } from '@tiki/icon';

import { ReactNode } from 'react';

type TAGIcon = {
  name: string;
  icon: ReactNode;
};

export const TAG_ICON: TAGIcon[] = [
  {
    name: 'MEETING',
    icon: <IcMeetingGray width={28} height={28} />,
  },
  {
    name: 'EVENT',
    icon: <IcEventGray width={28} height={28} />,
  },
  {
    name: 'STUDY',
    icon: <IcStudyGray width={28} height={28} />,
  },
  {
    name: 'NOTICE',
    icon: <IcNoticeGray width={28} height={28} />,
  },
  {
    name: 'RECRUITING',
    icon: <IcRecruitingGray width={28} height={28} />,
  },
  {
    name: 'ETC',
    icon: <IcEtcGray width={28} height={28} />,
  },
];
