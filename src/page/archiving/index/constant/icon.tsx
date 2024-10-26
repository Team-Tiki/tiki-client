import { ReactNode } from 'react';

import Event from '@/common/asset/svg/ic_event.svg?react';
import Meeting from '@/common/asset/svg/ic_meeting.svg?react';
import Notice from '@/common/asset/svg/ic_notice.svg?react';
import Recruiting from '@/common/asset/svg/ic_recruiting.svg?react';
import Study from '@/common/asset/svg/ic_study.svg?react';

import { iconStyle } from '@/page/archiving/index/constant/icon.style';

type BlockIcon = {
  name: string;
  icon: (color: string) => ReactNode;
};

export const BLOCK_ICON: BlockIcon[] = [
  {
    name: 'MEETING',
    icon: (color: string) => <Meeting width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'NOTICE',
    icon: (color: string) => <Notice width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'RECRUITING',
    icon: (color: string) => <Recruiting width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'STUDY',
    icon: (color: string) => <Study width={16} height={16} css={iconStyle(color)} />,
  },
  {
    name: 'EVENT',
    icon: (color: string) => <Event width={16} height={16} css={iconStyle(color)} />,
  },
];
