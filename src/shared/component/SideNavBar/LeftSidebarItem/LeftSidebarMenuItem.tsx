import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';

import {
  clubInfoStyle,
  clubLogoStyle,
  leftSidebarMenuItemStyle,
} from '@/shared/component/SideNavBar/LeftSidebarItem/LeftSidebarMenuItem.style';

interface LeftSidebarMenuItemProps {
  isClicked: boolean;
  children?: ReactNode;
  logoUrl: string;
  onClick: () => void;
}

const LeftSidebarMenuItem = ({ children = '', logoUrl, onClick }: LeftSidebarMenuItemProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    <li role="button" tabIndex={0} css={leftSidebarMenuItemStyle} onClick={onClick} onKeyDown={handleEnterKeyDown}>
      <Flex css={clubInfoStyle}>
        <img src={logoUrl} alt={`${children?.toString()} icon`} css={clubLogoStyle} />
      </Flex>
    </li>
  );
};

export default LeftSidebarMenuItem;
