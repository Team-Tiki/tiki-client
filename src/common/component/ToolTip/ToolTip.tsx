import { HTMLAttributes, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

  const handleToolTipVisible = () => {
    setIsVisible(true);
  };
  const handleToolTipHidden = () => {
    setIsVisible(false);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleToolTipHidden();
    }
  };

  return (
    <div
      aria-describedby={message}
      role="button"
      css={containerStyle}
      tabIndex={0}
      onMouseEnter={handleToolTipVisible}
      onMouseLeave={handleToolTipHidden}
      onKeyDown={handleKeyDown}
      onFocus={handleToolTipVisible}
      onBlur={handleToolTipHidden}>
      {children}
      <span role="tooltip" css={[messageStyle(isVisible), positionStyle(position, gap)]} {...props}>
        <Arrow css={[arrowStyle, arrowPositionStyle(position)]} />
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
