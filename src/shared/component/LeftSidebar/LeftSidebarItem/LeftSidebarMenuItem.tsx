import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  clubInfoStyle,
  clubLogoStyle,
  clubNameStyle,
  leftSidebarMenuItemStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarMenuItem.style';
import PageIndicatorStick from '@/shared/component/LeftSidebar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick';

interface LeftSidebarMenuItemProps {
  isClicked: boolean;
  isExpanded: boolean;
  children?: ReactNode;
  logoUrl: string;
  onClick: () => void;
}

const LeftSidebarMenuItem = ({ isClicked, isExpanded, children = '', logoUrl, onClick }: LeftSidebarMenuItemProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    <li role="button" tabIndex={0} css={leftSidebarMenuItemStyle} onClick={onClick} onKeyDown={handleEnterKeyDown}>
      <PageIndicatorStick isClicked={isClicked} />
      <Flex css={clubInfoStyle(isClicked, isExpanded)}>
        <img src={logoUrl} alt={`${children?.toString()} icon`} css={clubLogoStyle} />
        <Text tag="body4" css={clubNameStyle(isExpanded)}>
          {children}
        </Text>
      </Flex>
    </li>
  );
};

export default LeftSidebarMenuItem;
