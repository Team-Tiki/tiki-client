import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import ClickStick from '@/shared/component/LeftSidebar/LeftSidebarItem/ClickStick/ClickStick';
import {
  itemStyle,
  leftSidebarItemStyle,
  logoBoxStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem.style';

interface LeftSidebarItemProps {
  isClicked?: boolean;
  isExpansion: boolean;
  children?: ReactNode;
  url: string;
}

const LeftSidebarItem = ({ isClicked = true, isExpansion, children = '', url }: LeftSidebarItemProps) => {
  return (
    <li css={leftSidebarItemStyle}>
      <ClickStick isClicked={isClicked} />
      <Flex css={itemStyle(isClicked)}>
        <div css={logoBoxStyle(isClicked)}>
          <img src={url} alt={`${children?.toString()} icon`} />
        </div>
        <Text tag="body4" css={textStyle(isExpansion)}>
          {children}
        </Text>
      </Flex>
    </li>
  );
};

export default LeftSidebarItem;
