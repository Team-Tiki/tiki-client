import { ComponentPropsWithRef, FunctionComponent, SVGProps } from 'react';

import { clickedIconStyle, containerStyle, contentStyle, iconStyle } from '@/shared/component/Switch/Switch.style';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
  status: 'left' | 'right';
  isChecked?: boolean;
  LeftIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  ClickedLeftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  RightIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  ClickedRightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  onSwitchChange: (status: 'left' | 'right') => void;
}

const Switch = ({
  status = 'left',
  isChecked = true,
  LeftIcon,
  ClickedLeftIcon = LeftIcon,
  RightIcon,
  ClickedRightIcon = RightIcon,
  onSwitchChange,
}: SwitchProps) => {
  return (
    <div role="switch" aria-checked={status === 'left'} css={containerStyle}>
      <button
        css={contentStyle(isChecked, 'left', status === 'left')}
        onClick={() => {
          onSwitchChange('left');
        }}>
        {status === 'left' ? <ClickedLeftIcon css={[clickedIconStyle, iconStyle]} /> : <LeftIcon css={iconStyle} />}
      </button>
      <button
        css={contentStyle(isChecked, 'right', status === 'right')}
        onClick={() => {
          onSwitchChange('right');
        }}>
        {status === 'right' ? <ClickedRightIcon css={[clickedIconStyle, iconStyle]} /> : <RightIcon css={iconStyle} />}
      </button>
    </div>
  );
};

export default Switch;
