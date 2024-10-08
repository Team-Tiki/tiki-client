import { ComponentPropsWithRef, ReactNode, useState } from 'react';

import Check from '@/common/asset/svg/ic_check.svg?react';

import { containerStyle, contentStyle } from '@/shared/component/Switch/Switch.style';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
  isChecked?: boolean;
  LeftIcon: ReactNode;
  ClickedLeftIcon?: ReactNode;
  RightIcon: ReactNode;
  ClickedRightIcon?: ReactNode;
  onClick: (clickedSide: 'left' | 'right') => void;
}

const Switch = ({
  isChecked = true,
  LeftIcon,
  ClickedLeftIcon = LeftIcon,
  RightIcon,
  ClickedRightIcon = RightIcon,
  onClick,
}: SwitchProps) => {
  const [isLeft, setIsLeft] = useState(true);

  return (
    <div css={containerStyle}>
      <button
        css={contentStyle('left', isLeft)}
        onClick={() => {
          setIsLeft(true);
          onClick('left');
        }}>
        {isChecked && isLeft && <Check width={16} height={16} />}
        {isLeft ? ClickedLeftIcon : LeftIcon}
      </button>
      <button
        css={contentStyle('right', !isLeft)}
        onClick={() => {
          setIsLeft(false);
          onClick('right');
        }}>
        {!isLeft ? ClickedRightIcon : RightIcon}
        {isChecked && !isLeft && <Check width={16} height={16} />}
      </button>
    </div>
  );
};

export default Switch;
