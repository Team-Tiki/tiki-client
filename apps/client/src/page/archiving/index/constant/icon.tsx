import { IcEtc, IcEvent, IcMeeting, IcNotice, IcRecruiting, IcStudy } from '@tiki/icon';

import { ReactNode } from 'react';

import { iconStyle } from '@/page/archiving/index/constant/icon.style';

type BlockIcon = {
  name: string;
  icon: (color: string) => ReactNode;
};

export const BLOCK_ICON: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: (color: string) => <IcMeeting width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'NOTICE',
    icon: (color: string) => <IcNotice width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'RECRUITING',
    icon: (color: string) => <IcRecruiting width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'STUDY',
    icon: (color: string) => <IcStudy width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'EVENT',
    icon: (color: string) => <IcEvent width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'ETC',
    icon: (color: string) => <IcEtc width={16} height={16} css={iconStyle(color)} />,
  },
];
