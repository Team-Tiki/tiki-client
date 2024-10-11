import { HTMLAttributes } from 'react';

import { commonStyle, dividerStyle } from '@/common/component/Divider/Divider.style';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  type?: 'horizontal' | 'vertical';
  size?: number;
  color?: string;
}

const Divider = ({ type = 'horizontal', size = 100, color }: DividerProps) => {
  return <hr css={[commonStyle(color), dividerStyle(type, size)]} />;
};

export default Divider;
