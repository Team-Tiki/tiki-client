import { HTMLAttributes } from 'react';

import { PageIndicatorStickStyle } from '@/shared/component/SideNavBar/PageIndicatorStick/PageIndicatorStick.style';

interface PageIndicatorStickProps extends HTMLAttributes<HTMLDivElement> {
  isClicked: boolean;
  isHover: boolean;
}

const PageIndicatorStick = ({ isClicked, isHover, ...props }: PageIndicatorStickProps) => {
  return <div css={PageIndicatorStickStyle(isClicked, isHover)} {...props} />;
};

export default PageIndicatorStick;
