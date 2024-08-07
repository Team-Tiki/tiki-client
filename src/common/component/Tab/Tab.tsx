import { LiHTMLAttributes, ReactNode } from 'react';

import { defaultStyle } from '@/common/component/Tab/Tab.style';

interface TabProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  onClick: () => void;
  isClicked: boolean;
}

const Tab = ({ children, onClick, isClicked }: TabProps) => {
  const handleTabClick = () => {
    onClick();
  };

  const handleTabKeyDown = () => {
    onClick();
  };

  return (
    <li role="tab" onClick={handleTabClick} onKeyDown={handleTabKeyDown} css={[defaultStyle]}>
      {children?.toString()}
    </li>
  );
};

export default Tab;
