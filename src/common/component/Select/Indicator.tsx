import { css } from '@emotion/react';

import IcArrowDown from '@/common/asset/svg/ic_arrow_down.svg?react';

type IndicatorProps = {
  isOpen: boolean;
};

const Indicator = ({ isOpen }: IndicatorProps) => {
  return <IcArrowDown css={iconStyle(isOpen)} width={20} height={20} />;
};

export default Indicator;

export const iconStyle = (isOpen: boolean) =>
  css({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'all 0.2s ease-in',
  });
