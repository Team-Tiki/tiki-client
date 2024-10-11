import ArrowDown from '@/common/asset/svg/ic_arrow_down.svg?react';
import ArrowUp from '@/common/asset/svg/ic_arrow_up.svg?react';

interface options {
  id: number;
  text: string;
  logo: JSX.Element;
}

export const OPTIONS: options[] = [
  { id: 1, text: '최근 업로드 순', logo: <ArrowUp/> },
  { id: 2, text: '과거 업로드 순', logo: <ArrowDown/> },
];
