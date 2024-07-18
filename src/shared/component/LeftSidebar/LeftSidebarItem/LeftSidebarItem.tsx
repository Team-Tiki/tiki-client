import { ReactNode } from 'react';

import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import ClickStick from '@/shared/component/LeftSidebar/LeftSidebarItem/ClickStick/ClickStick';
import {
  imgStyle,
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
  onClick?: () => void;
}

const LeftSidebarItem = ({ isClicked = true, isExpansion, children = '', url, onClick }: LeftSidebarItemProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li css={leftSidebarItemStyle} onClick={onClick}>
      <ClickStick isClicked={isClicked} />
      <Flex css={itemStyle(isClicked)}>
        <div css={logoBoxStyle}>
          <img src={url} alt={`${children?.toString()} icon`} css={imgStyle} />
        </div>
        <Text tag="body4" css={textStyle(isExpansion)}>
          {children}
        </Text>
      </Flex>
    </li>
  );
};

export default LeftSidebarItem;
