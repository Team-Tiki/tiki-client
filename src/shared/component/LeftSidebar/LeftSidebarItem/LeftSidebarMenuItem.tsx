import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  imgStyle,
  itemStyle,
  leftSidebarMenuItemStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarMenuItem.style';
import PageIndicatorStick from '@/shared/component/LeftSidebar/LeftSidebarItem/PageIndicatorStick/PageIndicatorStick';

interface LeftSidebarMenuItemProps {
  isClicked?: boolean;
  isExpanded: boolean;
  children?: ReactNode;
  url: string;
  onClick?: () => void;
}

const LeftSidebarMenuItem = ({
  isClicked = true,
  isExpanded,
  children = '',
  url,
  onClick,
}: LeftSidebarMenuItemProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li css={leftSidebarMenuItemStyle} onClick={onClick}>
      <PageIndicatorStick isClicked={isClicked} />
      <Flex css={itemStyle(isClicked, isExpanded)}>
        <img src={url} alt={`${children?.toString()} icon`} css={imgStyle} />
        <Text tag="body4" css={textStyle(isExpanded)}>
          {children}
        </Text>
      </Flex>
    </li>
  );
};

export default LeftSidebarMenuItem;
