import { PageIndicatorStickStyle } from '@/shared/component/SideNavBar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick.style';

interface PageIndicatorStickProps {
  isClicked: boolean;
}

const PageIndicatorStick = ({ isClicked }: PageIndicatorStickProps) => {
  return <div css={PageIndicatorStickStyle(isClicked)} />;
};

export default PageIndicatorStick;
