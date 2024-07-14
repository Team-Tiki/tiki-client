import { stickStyle } from '@/shared/component/LeftSidebar/LeftSidebarItem/ClickStick/ClickStick.style';

interface ClickStickProps {
  isClicked: boolean;
}

const ClickStick = ({ isClicked }: ClickStickProps) => {
  return <span css={stickStyle(isClicked)} />;
};

export default ClickStick;
