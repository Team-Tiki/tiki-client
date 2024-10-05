import { HTMLAttributes } from 'react';

import { commonStyle, dividerStyle } from '@/common/component/Divider/Divider.style';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  type?: 'horizontal' | 'vertical';
  size?: number;
}

const Divider = ({ type = 'horizontal', size = 50 }: DividerProps) => {
  return <hr css={[commonStyle, dividerStyle(type, size)]} />;
};

export default Divider;
