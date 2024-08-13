import { PageIndicatorStickStyle } from '@/shared/component/LeftSidebar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick.style';

interface PageIndicatorStickProps {
  isClicked: boolean;
}

const PageIndicatorStick = ({ isClicked }: PageIndicatorStickProps) => {
  return <span css={PageIndicatorStickStyle(isClicked)} />;
};

export default PageIndicatorStick;
