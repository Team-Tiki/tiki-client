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
  gap?: number;
}

const ToolTip = ({ position = 'right', message, gap = 0, children, ...props }: ToolTipProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div id={message} role="tooltip" css={containerStyle} tabIndex={0}>
      {children}
      <span css={[messageStyle, positionStyle(position, gap)]} {...props}>
        <Arrow css={[arrowStyle, arrowPositionStyle(position)]} />
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
