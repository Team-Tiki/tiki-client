import { ReactNode } from 'react';

import Text from '@/common/component/Text/Text';

import {
  leftSidebarItemStyle,
  logoBoxStyle,
  textStyle,
} from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem.style';

interface LeftSidebarItemProps {
  isExpansion: boolean;
  children?: ReactNode;
  url: string;
  isClicked?: boolean;
}

const LeftSidebarItem = ({ isExpansion, children = '', url, isClicked = false }: LeftSidebarItemProps) => {
  return (
    <li css={leftSidebarItemStyle}>
      <div css={logoBoxStyle(isClicked)}>
        <img src={url} alt={`${children?.toString()} icon`} />
      </div>
      <Text tag="body3" css={textStyle(isExpansion)}>
        {children}
      </Text>
    </li>
  );
};

export default LeftSidebarItem;
