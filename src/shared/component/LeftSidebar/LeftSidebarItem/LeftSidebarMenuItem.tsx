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
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li css={leftSidebarMenuItemStyle} onClick={onClick}>
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
