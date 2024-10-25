import { HTMLAttributes } from 'react';

import { PageIndicatorStickStyle } from '@/shared/component/SideNavBar/PageIndicatorStick/PageIndicatorStick.style';

interface PageIndicatorStickProps extends HTMLAttributes<HTMLDivElement> {
  isClicked: boolean;
}

const PageIndicatorStick = ({ isClicked, ...props }: PageIndicatorStickProps) => {
  return <div css={PageIndicatorStickStyle(isClicked)} {...props} />;
};

export default PageIndicatorStick;
