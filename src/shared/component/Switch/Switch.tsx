import { ComponentPropsWithRef, ReactNode, useState } from 'react';

import { containerStyle, leftContentStyle, rightContentStyle } from '@/shared/component/Switch/Switch.style';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
  variant?: 'default'|'checked';
  LeftIcon: ReactNode;
  ClickedLeftIcon?: ReactNode;
  RightIcon: ReactNode;
  ClickedRightIcon?: ReactNode;
  onClick: (clickedSide: 'left' | 'right') => void;
}

const Switch = ({
  variant = 'checked',
  LeftIcon,
  ClickedLeftIcon = LeftIcon,
  RightIcon,
  ClickedRightIcon = RightIcon,
  onClick,
}: SwitchProps) => {
  const [clickedSide, setCilckedSide] = useState('left');
  return (
    <div css={containerStyle}>
      <div
        css={leftContentStyle}
        onClick={() => {
          setCilckedSide('left');
          onClick('left');
        }}>
        icon1
      </div>
      <div
        css={rightContentStyle}
        onClick={() => {
          onClick('right');
        }}>
        icon2
      </div>
    </div>
  );
};

export default Switch;
