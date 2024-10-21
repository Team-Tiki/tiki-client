import { HTMLAttributes } from 'react';

import Arrow from '@/common/asset/svg/ic_tooltip_arrow.svg?react';
import {
  arrowPositionStyle,
  arrowStyle,
  containerStyle,
  messageStyle,
  positionStyle,
} from '@/common/component/ToolTip/ToolTip.style';

export interface ToolTipProps extends HTMLAttributes<HTMLSpanElement> {
  position?: 'top' | 'right' | 'bottom' | 'left';
  message: string;
  margin?: number;
}

const ToolTip = ({ position = 'right', message, margin = 0, children }: ToolTipProps) => {
  return (
    <div css={containerStyle}>
      {children}
      <span css={[messageStyle, positionStyle(position, margin)]}>
        <Arrow css={[arrowStyle, arrowPositionStyle(position)]} />
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
