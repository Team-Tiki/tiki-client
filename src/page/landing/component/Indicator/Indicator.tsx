import { css } from '@emotion/react';

import { ComponentPropsWithoutRef } from 'react';

import IcArrowDown from '@/common/asset/svg/ic_key_arrow.svg?react';

interface IndicatorProps extends ComponentPropsWithoutRef<'svg'> {
  onNext?: () => void;
}

const Indicator = ({ onNext, ...props }: IndicatorProps) => {
  return <IcArrowDown css={indicatorStyle} width={36} height={36} onClick={onNext} {...props} />;
};

export default Indicator;

const indicatorStyle = css({
  position: 'absolute',
  bottom: '4rem',
  left: 0,
  right: 0,

  margin: '0 auto',

  cursor: 'pointer',
});
