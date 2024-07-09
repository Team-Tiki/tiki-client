import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { ReactNode } from 'react';

import Text from '@/common/component/Text/Text';

import { leftSidebarItemStyle, logoBoxStyle, textStyle } from './LeftSidebarItem.style';

interface LeftSidebarItemProps {
  isExpansion: boolean;
  children?: ReactNode;
  logo: EmotionJSX.Element;
  isClick: boolean;
}

const LeftSidebarItem = ({ isExpansion, children, logo }: LeftSidebarItemProps) => {
  return (
    <li css={leftSidebarItemStyle}>
      <span css={logoBoxStyle}>{logo}</span>
      <Text tag="body3" css={textStyle(isExpansion)}>
        {children}
      </Text>
    </li>
  );
};

export default LeftSidebarItem;
