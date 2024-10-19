import { ComponentPropsWithRef, FunctionComponent, SVGProps } from 'react';

import { clickedIconStyle, containerStyle, contentStyle, iconStyle } from '@/common/component/Switch/Switch.style';

export interface SwitchProps extends Omit<ComponentPropsWithRef<'div'>, 'onClick'> {
  status: 'left' | 'right';
  isChecked?: boolean;
  LeftIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  RightIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  onSwitchChange: (status: 'left' | 'right') => void;

  ///SVG의 stroke 색상 변경 시 사용하는 클릭된 상태의 아이콘
  ClickedLeftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  ClickedRightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Switch = ({
  status = 'left',
  isChecked = true,
  LeftIcon,
  onSwitchChange,
  RightIcon,
  ClickedLeftIcon = LeftIcon,
  ClickedRightIcon = RightIcon,
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
