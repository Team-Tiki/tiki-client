import { ComponentPropsWithRef, FunctionComponent, SVGProps, useState } from 'react';

import { clickedIconStyle, containerStyle, contentStyle, iconStyle } from '@/shared/component/Switch/Switch.style';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
  isChecked?: boolean;
  LeftIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  CheckedLeftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  RightIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  CheckedRightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick: (clickedSide: 'left' | 'right') => void;
}

const Switch = ({
  LeftIcon,
  CheckedLeftIcon = LeftIcon,
  RightIcon,
  CheckedRightIcon = RightIcon,
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
        {isLeft ? <CheckedLeftIcon css={[clickedIconStyle, iconStyle]} /> : <LeftIcon css={iconStyle} />}
      </button>
      <button
        css={contentStyle('right', !isLeft)}
        onClick={() => {
          setIsLeft(false);
          onClick('right');
        }}>
        {!isLeft ? <CheckedRightIcon css={[clickedIconStyle, iconStyle]} /> : <RightIcon css={iconStyle} />}
      </button>
    </div>
  );
};

export default Switch;
